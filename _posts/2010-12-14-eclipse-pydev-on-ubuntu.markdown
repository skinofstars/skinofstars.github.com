---
layout: post
title: Eclipse PyDev on Ubuntu
categories:
- Linux
- Programming &amp; Design
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wp_old_slug: ''
---
I had a bit of a moment earlier in getting PyDev up and running in Eclipse. Installing is easy enough through Marketplace in Helios, but when I went to open a project I was denied! Anyway, figured it out, just needed to select my interpreter.

When you go to open a new python project hit the 'Please configure an interpreter..' link. Then click the Auto Config button. Ok. Apply. Ok. I'm on Ubuntu Lucid 10.04 so my grammar is 2.6 (you can find your version in the terminal via:$ python --version ). Your interpreter is Python. Finish. And you're done :)
