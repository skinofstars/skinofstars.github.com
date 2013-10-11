---
layout: post
title: IRC bots in Node.js, with CouchDB
categories:
- Machines
tags: [irc, nodejs, couchdb]
status: publish
type: post
published: true
meta: {}
---
Over at [JS Oxford](http://jsoxford.com) we've been avidly using IRC for organising, as well as general JS chatting. The openness of IRC is brilliant. You can just rock up to [freenode](http://freenode.net), `/join #jsoxford`, and you're chatting with the team. One of the major downsides I found with IRC though is that there is no obvious way to view conversations that happend while you were offline. So I decided to write a small bot that would save the conversation in a public document store. From that point on, it's just a small jump to displaying chat data on a public webpage (and another blog post ;).

Now there are many chatbot programs out there that can do many cool things. I think one of the best known at the moment would be [Hubot](http://hubot.github.com/). If you wanna get up and running with your own chatbot with loads of premade scripts, then that's probably the way to go. If however, you want to write your own in Node.js, like I did, then read on!

There were a couple of reasons I wanted to write my own chatbot, rather than using Hubot. Firstly, to learn. Secondly, I didn't want to write in Coffescript (I'm sure I could have gotten around this, but it's going against their philosophy). Thirdly, I really didn't need the overhead. Despite what the docs say, there is almost no way of getting around things like using Redis. Finally, I had a very simple task in mind for the bot to perform, so why would I need a whole chatbot framework?!

You can make a responding chatbot in just a handful of lines. First, create your `package.json` in your project's folder:

```javascript
{
  "name": "node-irc-bot",
  "version": "0.0.1",
  "author": "Kevin Carmody",
  "description": "A simple IRC bot",
  "main": "./index",
  "dependencies": {
    "irc": "*"
  },
  "engines": {
    "node": "*"
  }
}
```

This uses the [irc](https://npmjs.org/package/irc) lib in the npm repositories. So when you do `npm install`, it'll be added to you node_modules folder.

Then, create an `index.js` file with something like the following in it:

<div class="highlight highlight-javascript">
`
var irc = require('irc');

// create and connect
var client = new irc.Client('irc.freenode.net', 'skinofstars-bot', {
    channels: ['test-skinofstars-bot']
});

// listen and log
client.addListener('message', function (from, to, message) {

    // outputs to the terminal window running the bot
    console.log(from + ' => ' + to + ': ' + message);

    // outputs to the chat channel
    client.say(from, 'I just heard ' + from + ' speak');
});`
</div>

Assuming you have your Node setup, you can now just run `node index.js` and it'll connect to freenode as user skinofstars-bot, join the channel #test-skinofstars-bot and say a message every time anyone speaks... which will be pretty annoying!

So there we have a basic connect and response chatbot in little more than 25 lines of code.

Now let's get this fella logging to our db. I wanted a simple document store that would allow me to write in JS, end to end. For this project, I'm using [CouchDB](http://couchdb.apache.org/).

Again, I'm looking for simplicity in this process, and a found a wonderful little CouchDB lib called [nano](https://github.com/dscape/nano). To use it just add `"nano": "*"` to your `package.json` dependencies section, run install again and you'll be good to go. You're then looking at a few extra lines to get storing to your Couch instance:

```javascript
var nano = require('nano')('http://localhost:5984');
var db = nano.use('chatdb');
```

Now you can start logging where appropriate:

```javascript
client.addListener('message', function (from, to, message) {
    db.insert(message, '', function(err, body) {
        if (err) {
            console.log(err);
        }
    });
});
```

And that's about all there is to it really. You can see the whole thing put together at the [jsoxbot](https://github.com/jsoxford/jsoxbot) on JS Oxford's Github.