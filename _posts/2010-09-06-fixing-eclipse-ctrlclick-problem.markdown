---
layout: post
title: Fixing Eclipse ctrl+click Problem
categories:
- Programming &amp; Design
tags:
- eclipse
- java
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
  _wp_old_slug: ''
---
Sometimes, for no clear reason, Eclipse's ctrl+click function to find a methods source fails. This bugs the hell out of me, but is simple enough to fix. Unfortunately it doesn't happen often enough for me to remember how to fix. And having to search each time with 'just right' keywords is also annoying. Anyway, here it is:

Close Eclipse.

Delete:  /path/to/workplace/.metadata/.plugins/org.eclipse.jdt.core

Open eclipse and let it rebuild its indexes. Job done.
