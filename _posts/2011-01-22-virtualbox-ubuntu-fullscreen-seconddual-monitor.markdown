---
layout: post
title: Virtualbox Ubuntu Fullscreen Second/Dual Monitor
categories:
- Linux
tags:
- ubuntu
- virtualbox
- vm
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Virtualbox is an awesome application, allowing you to run multiple instances of operating systems concurrently. But getting full screen guest working on the second monitor doesn't work by default, it always fullscreens on the primary. This drove me mad for a couple of hours till I figured it out. The answer is through the following steps:
<ul>
	<li>Fullscreen (Host+F)</li>
	<li>Hidden Menu (Host+Home. This only works in full screen)</li>
	<li>View&gt;Virtual Screen 1&gt;Use Host Screen 2</li>
</ul>
Voila. Simple once you know.
