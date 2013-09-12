---
layout: post
title: EeeK - Full desktop
categories:
- Linux
tags:
- eeepc
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
In my blog post the other week I discussed how to <a href="http://www.skinofstars.com/node/144">use the terminal to add software to your EeePC</a>. Though this is the simplest approach we find that we come across certain disadvantages. Firstly, the only way to launch our newly installed software is to type it's name into the terminal. It is possible to adjust the interface and add icons to desktop by <a href="http://wiki.eeeuser.com/howto:customizeeasymode?s=simpleui">editing the simpleui.rc file</a>. Let us be honest though, this is not exactly what we want to be doing - editing config files is <em>so</em> 1970s. Infact, this whole simple desktop layout is a little on the weak side. What we want is a full desktop environment, with start buttons, automatic adding of new programs to menus and all sorts. This is our plan for today.

Once again we shall need our trusty terminal, so first things first hit Ctrl+Alt+T. Now enter the following:

<blockquote>wget http://download.tuxfamily.org/eeepcrepos/key.asc</blockquote>
<blockquote>sudo apt-key add key.asc</blockquote>
<blockquote>rm key.asc</blockquote>

With these three lines have downloaded a trusted key, added it to our software manager (apt) and finally removed the file. Next job is to add the software source which the key corresponds to. So enter <strong>sudo kwrite /etc/apt/sources.list</strong> into the terminal and add the following line to the bottom of the file:

<blockquote>deb http://download.tuxfamily.orgeeepcrepos p701 main</blockquote>

Save and exit. Then type <strong>sudo apt-get update</strong> into the terminal. Now we are all set to install the full desktop. Into the terminal we shall type:

<blockquote>sudo apt-get install advanced-dektop-eeepc</blockquote>

Now to try out our new desktop we just have to press our power button, you will then find a new icon added to our logout menu saying Full Desktop. Hey presto, we now have one of the most powerful desktop environments available in the open source world, <a href="http://www.kde.org/">KDE 3.5</a>. This is a system that easily rivals the Windows interface in versatility and power, yet still has a similar feel to more common desktops.

Now we know how to add new programs, modify our interface and even get a decent desktop to our little Eee. Well, that is all just great, but for me (and perhaps you dear reader) this is just not enough. The Xandros distribution that comes with this machine is just not modern enough, for example it still comes with Firefox 2, which is sluggish compared to it's latest iteration. I have also been having problems with connection to certain types of WPA2 at my university which apparently is tied to Xandros. What we need is a thoroughly modern operating system, installing that shall be the subject of my next EeePC post.
