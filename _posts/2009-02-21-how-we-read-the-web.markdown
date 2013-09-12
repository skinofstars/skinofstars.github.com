---
layout: post
title: How We Read The Web
categories:
- Internet
- Media
- Programming &amp; Design
tags:
- design
- usability
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  aktt_notify_twitter: 'no'
---
I've been looking at some interesting research regarding the manner in which users read web pages. I'd come across click mapping previously (links below), software that records where users click, but the <a href="http://www.useit.com/eyetracking/">Nielsen Norman Group's eye tracking study</a> follows where users actually look. Though their study tends to focus on commerce aspects (how much do users look at your adverts?) it is also fascinating stuff for those of us wanting to create clean and clear designs.

First thing that's worth noting, users rarely spend time looking where you want them to. They tend to follow common patterns, the most notable being the F pattern (a couple of quick horizontal scans of the page as we head down it). This means it is for us, the designer, to be aware of this and place our most important content in these areas. One might argue that a regular visitor would know where the most important information on a site is held, yet anyone with any sense knows that we want to make a site clear for everyone.

Now for banners and adverts/promotions. I'm not going to say how to get people to read them (in fact, I'd recommend getting <a href="https://addons.mozilla.org/en-US/firefox/addon/1865">AdBlock Plus</a> to just cleans the web of them!), but if you want to ensure people read all information on your page then make sure that it doesn't look like an advert. Users have an automatic tendency to ignore anything that looks like a promotion.

Next up I'll point to <a href="http://www.useit.com/alertbox/9710a.html">Nielson's study on how pages are read</a>. The key point is that people don't read, they scan. If you want to make life easy then you could put important anchor words in bold to aids the reader down the route you'd like them to take. When you're marking this up in HMTL consider whether you should use the 'b' or the 'strong' tags. Are you merely creating a visual guide (b/i) or do you want to emphasise a word (strong/em)?

The final point I'll pick up from Nielson is his <a href="http://www.useit.com/alertbox/screen_resolution.html">discussion on screen sizes</a>. Nothing surprising here, most people use 1024x768, that's a laptop widescreen. One thing I'd like to add to is the misconception that laying out a web page is like laying out for a newspaper or a magazine. Screen sizes and resolutions are not fixed, there is no 'above the fold', like we find in newspapers. Even different choices of preferred system fonts or different browsers have an impact on where the cut-off will be on different machines. Interestingly, Neilson does point towards making site layouts fluid for different. Though I don't consider this such a hard n' fast rule, I'd like to point you CSS monkey's <a href="http://www.456bereastreet.com/archive/200504/fixed_or_fluid_width_elastic/">456 Berea St's article on elastic layouts</a>.

That's it for this week folks. Happy building.

<em>Some further linkage:</em>

* A wordpress clickmap: http://www.rogerstringer.com/projects/wpclickmap

* A more general use clickmap using PHP and  JQuery: http://css-tricks.com/tracking-clicks-building-a-clickmap-with-php-and-jquery/

* Strong or Bold? http://www.think-ink.net/html/bold.htm
