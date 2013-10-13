---
layout: post
title: IRC logs viewer using CouchDB and KnockoutJS
categories:
- Machines
tags: [irc, nodejs, couchdb, knockoutjs]
status: publish
type: post
published: true
meta: {}
---
In my previous post I talked about how to make an IRC bot in Node.js that would store messages in a CouchDB instance. This time, I'll look at how we might retrieve and display the stored messages.

One of the nice things about working in CouchDB is that you get to work directly with JSON objects. You also then get to manipulate your data using JS. If you've already built your server side in Node.js, then you're already in the same language mindset, so it really shouldn't be too much of a leap.

Recalling data from a CouchDB instance is as straight foward as crafting the right URL. For example, you can get all doc references from any couch instance using the `dbname/_all_docs`, like [https://skinofstars.iriscouch.com:6984/chatbot/_all_docs](https://skinofstars.iriscouch.com:6984/chatbot/_all_docs). Note, Iriscouch might error the first time you load it. It does this a lot. Just refresh it like crazy ;)

Once you've got a list of doc refs you can call them by their ID, like [https://skinofstars.iriscouch.com:6984/chatbot/03a93263eba0a16e5d97d1a8af000a51](https://skinofstars.iriscouch.com:6984/chatbot/03a93263eba0a16e5d97d1a8af000a51)

So that returns a doc like this:

```javascript
// ref https://skinofstars.iriscouch.com:6984/chatbot/03a93263eba0a16e5d97d1a8af000a51

{
    "_id":"03a93263eba0a16e5d97d1a8af000a51",
    "_rev":"1-8a3ec74bbef8d2a12d6eca6a7688473a",
    "user":{
        "name":"skinofstars",
        "room":"#jsoxford"
    },
    "text":"hmm, i think my bot crashes when it can't contact iriscouch.com... which is like, all the frickin time!",
    "date":1367231159044,
    "raw":{
        "prefix":"skinofstars!~skinofsta@213.249.190.130",
        "nick":"skinofstars",
        "user":"~skinofsta",
        "host":"213.249.190.130",
        "command":"PRIVMSG",
        "rawCommand":"PRIVMSG",
        "commandType":"normal",
        "args":[
            "#jsoxford",
            "hmm, i think my bot crashes when it can't contact iriscouch.com... which is like, all the frickin time!"
        ]
    }
}
```
Pretty straight forward JSON eh?

What you actually find though is that you need to start customising the listing results. For example, I wanted to get documents from a specified time period. You can do this quite easily in the design view using CouchDB's Futon interface, the phpMyAdmin of CouchDB. - [http://guide.couchdb.org/draft/tour.html](CouchDB getting started guide)

I don't want to spend too long talking about designing a view. There are some good guides out there, but this is what I used for listings since a certain date.

```javascript
function(doc) {
    if(doc.text != undefined) {
        emit([doc.date], {
            "text":doc.text,
            "name":doc.user.name,
            "room":doc.user.room,
            "time":doc.date
        });
    }
}
```

Now I hit a few problems with CouchDB and having public/private instances. I wanted the database to be readable from anywhere, so anyone can have a look at what we've done. You can see JS Oxford's chat in full couchyness at [https://skinofstars.iriscouch.com:6984/chatbot/](https://skinofstars.iriscouch.com:6984/chatbot/). However this gave me a couple of problems.

The first issue I had was pushing data in from a remote client, which is understandably a security issue. So what I did was run the chatbot on a small machine behind a firewall which doesn't allow direct inbound traffic. This has its own CouchDB instance running that then uses push replication to the public instance of CouchDB.

The next problem I had was accessing that public CouchDB instance from the JS Oxford website, which is hosted on Github (in the usual Jekyll styleeee). CouchDB does offer a jQuery plugin, but it doesn't work with CORS, even if you're just doing GET requests. What I had to do to resolve this was to write my own [https://github.com/skinofstars/jsoxbot-irc-viewer/blob/master/jquery.remoteCouch.js](remote CouchDB jQuery plugin) ... which I really should get in to its own repo, but... I dunno, one day. Anyway, this allows for cross-origin GET requests.

So now we get to the point; displaying this on a webpage. "About bloody time" I hear you cry!

Actually this is the easy bit, since we use [http://knockoutjs.com/](Knockout.js) to do the listings. If you haven't tried Knockout.js yet, I strongly encourage you to. I've used this on some pretty big client projects and it's been a real delight to use. It's like pubsub on steroids. Here is a simple example - you set up an HTML snippet like this:

```html
<ul data-bind="foreach: messages">
    <li><span data-bind="text: name"></span> <span data-bind="text: text"></span></li>
</ul>
```

And then you can match that up with some JS like this:

```javascript
var binding = ko.applyBindings(new IRCView());

function IRCView() {
    var self = this;
    self.messages = ko.observableArray();

    var startURL = "http://skinofstars.iriscouch.com/chatbot/_design/messages_by_date/_view/messages_by_date?startkey=[1376702356323]";

    $.get(startURL, function( data ) {
        $.each(data, function(i,v){
            self.messages().push({
                name : data.name,
                text : data.text
            });
        })
    });
}
```

If you want to see a more detailed version of this then head over to our actual viewer [https://github.com/skinofstars/jsoxbot-irc-viewer](github.com/skinofstars/jsoxbot-irc-viewer)

You'll also notice that I added a longpoll to the viewer script so it updates as more items are added. This has to be turned on in CouchDB, but is a nice touch for realtime.

Oddly, the round trip from bot, to local DB, through replication to remote DB, then longpolled to the page is actually damn fast. The webpage will be updated in fractions of a second. Check it our by logging into freenode and joining #jsoxford and opening the webpage on [http://jsoxford.com/irc/](http://jsoxford.com/irc/), then just shout "hi" and see it update on the page. It's neat.

What isn't neat is that sometimes Iriscouch just doesn't respond. What I really need to do is some error checking and retrying if Iriscouch doesn't respond.

Anyway, hope that was of some help. Feel free to ask any questions. Thanks for reading :)


