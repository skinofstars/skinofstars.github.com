---
layout: post
title: Routing with Rack and Lotus::Router
categories:
- Machines
tags: [lotusrb, talks, ruby, lotus, rake]
status: publish
type: post
published: true
meta: {}
---
I gave another talk at the [West Midlands Ruby User Group](http://www.meetup.com/West-Midlands-Ruby-User-Group-WMRUG/events/223312309/)
on routing, both using plain Rack apps and in the [Lotus framework](http://lotusrb.org/).

Rather than the usual swishy RevealJS slide deck, I decided to build the whole
thing using the technology I was talking about. So each slide was a rewrite using
different Rack app or Lotus::Router routing tricks. A very fun challenge.

The deck is a self contained read and will give you quick overview on how Rack
apps work. How to do basic Rack routing using middleware like Rack::URLMap and
Rack::Cascade. How do leverage gems like Lotus::Router for advanced routing without
being tied to a full framework, like Rails.

Deck at [lotus-router-primer.herokuapp.com](http://lotus-router-primer.herokuapp.com)

Sing-along-source at [github.com/skinofstars/wmrug-lotus-router](https://github.com/skinofstars/wmrug-lotus-router)

