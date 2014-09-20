---
layout: post
title: Wheedonverse, mapped using d3.js
categories:
- Media
tags: [d3, javascript]
status: publish
type: post
published: true
meta: {}
---
Man, I love the Wedonverse. All of it. Firefly, Dollhouse, Buffy... even Angel. I really like Firefly. So much so that I've made my (lovely) girlfriend watch Castle, just because it has Nathan Fillion in it. So I got to thinking, how much crossover is there with all these shows? What we need is some kind of node/edge graph :)

[The Verse](http://playground.skinofstars.com/verse/)

I spent a bit of time looking around at some of the js graphing libraries out there. Some are great for rapid building (like High Charts, which I've spent quite a bit of time on), but for this I wanted something with some real grunt. After a bit of experimentation, D3.js looked to fit the bill.

Now I've chosen my what to present the data with, I just needed to collate it. It seemed to me the best place to get this data was IMDB. However, they don't really have an api per say. You can download their complete archive in text files, but that was far more than I wanted to handle for couple of TV shows. There's also some unofficial api sites, who are OK, but only really give you a top level overview. What I wanted was full cast listings for each and every episode. Enter [imdb-php](https://code.google.com/p/imdb-php/). This lib does the wonderful job of pretending to be the iPhone app, allowing full unfettered access.

Once I was able to get all the data I wanted, it was just the "simple" task of preparing that data and pushing it out to the browser for d3 to do its magic.

I got some real interesting information out of the graphs, like there are some bit part actors you'd never think of who are all over the Verse. I also experienced some spoilers when I feed in an as yet unseen programme, so be warned!

Enough talk: [The Verse](http://playground.skinofstars.com/verse/)
