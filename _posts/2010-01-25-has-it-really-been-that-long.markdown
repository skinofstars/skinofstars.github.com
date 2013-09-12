---
layout: post
title: Has it really been that long?
categories:
- Programming &amp; Design
tags:
- BBC
- me
- movabletype
- mt
- skinofstars
- webdev
- work
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
Hello all, it's been a while. The Skinofstars site has been languishing in disuse for some time now. Like I'm sure many others, I've found the transition to micoblogging is all too easy. Sometimes though, one wants to write something a little longer and long gaps are not helpful when you finally think of something. So I guess I'm just posting to get rid of some writers block really.

For the six months since my last post (my, that is a long time!) I've been working at <a href="http://studiolift.com">Studio Lift</a> in Reading. There are five of us; two designers, two coders and a multi-talented boss. We fill our days making like <a href="http://www.ciarb.org/">this</a> and like <a href="http://www.williamfiennes.com/">this</a> (bad linking! :) using <a href="http://www.movabletype.com">Movable Type</a>. This is the same blogging platform that is used by the BBC, The Guardian, ReadWriteWeb and various others. It comes in both Commercial and Open Source offerings and is perhaps one of the most venerable of blogging systems.

Does that mean I'm going to talk tech now?... sure (jump?). Movable Type (mt) has just released its 5th version. This places more emphasis on managing multiple blogs within a site structure. Very useful if you've ever tried to manage multiple blog instances (how many blogs do you think The Guardian has?). There is also a new emphasis on social communication (see <a href="http://www.movabletype.com/motion/">Motion</a>).

The system is written in Perl but because the publishing is static files you can drop pretty much any scripting language in without any problems. My current language of choice for server-side is PHP. You hook your language in with mt using their own markup derived syntax, and to be honest for a simple blog you never have to touch another language. Let's look at an example which will iterate over a collection of the last five entries:

&lt;mt:Entries lastn="5"&gt;
&lt;h2&gt;&lt;mt:EntryTitle /&gt;&lt;/h2&gt;
&lt;p&gt;&lt;mt:EntryBody /&gt;&lt;/p&gt;
&lt;/mt:Entries&gt;

There is documentation, with my favourite page being the <a href="http://www.movabletype.org/documentation/appendices/tags/">tag reference</a>, but otherwise there certainly isn't the same breadth of documentation as you would find with something like Wordpress. Perhaps the strong ties with the commercial side of the software, it was increasingly license prudish at the Open Source blogging party, has been a hindrance to a warm and fuzzy community embrace. Still, some big media hitters use it so they've certainly got something right.

Well, as I said, I work in Reading and my crappy car's wiper motor has broken so I've got to get up early and catch a bus. It's been nice to talk to you again. Thanks for putting up with my tech chatter, I expect that you'll get variation soon enough as we head towards the General Election :)

Night Night.
<div id="_mcePaste" style="overflow: hidden; position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px;">http://www.williamfiennes.com/</div>
