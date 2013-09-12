---
layout: post
title: RC cars in Node.js
categories:
- Media
- Miscellanea
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
  _wp_old_slug: rc-cars
---
Wanna make your brain hurt? Try developing a hardware interfacing library for node.js.

As part of my running of <a href="http://jsoxford.com">JS Oxford</a>, my company asked me to organise a hack day for the <a href="http://events.jquery.org/2013/uk/">jQuery UK 2013</a> conference. We'd discussed doing a <a href="http://nodecopter.com/">nodecopter</a> event, but I wanted to do something a little different. Quadcopters are of course everso cool, but you know what else is cool? RC cars!

After some research I found the <a href="http://wirc.dension.com/smartracer">Denison WiRC smartcar</a>, which has an iPhone and Android app, connects using WiFi and they even publish reference documents for their protocol. So how hard can it be to create a Node.js lib for it?.... well....

This turned out to be a very challenging topic indeed. As a web developer, I don't often find myself constructing buffer streams to communicate with external hardware. I certainly don't crack out WireShark to go UDP packet inspecting on a regular basis. However, I'd set myself a challenge, and there was no way I was going to renege on something I said I was going to do. So I got hold of one of these cars, locked myself away for a couple of weeks and figured this damn thing out.

I can not put in to words the joy I felt the first time I established a successful handshake with the device. Or the first time I got the wheels to spin, just by using JavaScript.

Once the lib for controlling the cars was up and running, others started to get to work on it. I was especially impressed with the time Pete West put in on the project. He got my work in to a more usable state and even created some cool demo projects with it. We had ourselves a way to control cars with just JavaScript, we were gonna have ourselves a great hack day.

Next up was to get a big hall, a load plywood and gaffer tape to make a track and we were racing!... Well, racing might be pushing it a bit. Most teams worked on autonomous control. Some doing edge detection and others using a marker system we'd set up. There were varying levels of success in so far as to how far around the course they got, but I haven't seen such an excited bunch of geeks in a long time.

Of course, the library we made is available on github, I put it up under the JS Oxford account <a href="https://github.com/jsoxford/node-wirc">https://github.com/jsoxford/node-wirc</a> so if you fancy creating your own autonomous car with JavaScript, here's your chance. And if you want your own RC Cars hack day, give me a shout and I'll put one together for you.

&nbsp;
