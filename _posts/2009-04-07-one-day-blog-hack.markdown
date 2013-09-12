---
layout: post
title: One Day Blog Hack
categories:
- Internet
- Programming &amp; Design
tags:
- blogging
- design
- drupal
- wordpress
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
Hey All,

I've decided to do a blog hack in a day and here you see the result. I was struggling with Drupal as a blogging platform, and frankly an anything platform, so I decided to move to the decidedly easier Wordpress. I'm not saying there is anything wrong with Drupal, it's a great platform. The problem is that it's built for so many tricks that you have to give it a real shove when you want something simple. For example, handling images. On a content sytem one would have thought that would be an obvious feature, but with drupal you have to go get a plugin. Madness I tell you! Not that getting Wordpress means I'll be bloggin frantically, but it makes life a lot easier.

So here is how I got from Drupal 6 to Wordpress 2.7 in a day:

1. Backup the Drupal database &amp; import the data into Wordpress

Moving around between platforms is quite common, so you'll often find a script to aid you in moving database info from one structure to another. Wordpress has many such scripts built in for many platforms, but for Drupal I got my assistance from <a href="http://www.mikesmullin.com/development/migrate-convert-import-drupal-5-to-wordpress-27/">Mike Smullin</a>. I had to make some minor changes, for example I added this SQL statement to change my Drupal post_type 'story' to Wordpress's 'post'

UPDATE wp_posts SET post_type = REPLACE(post_type,’story’,'post’);

Pretty easy stuff really. If you're going to do it yourself, make sure you do it locally on backup copies. I hosed a few before I got it right.

2.Theme Hack

Ahh yes, the inevitable theme quandry. I had thought about what I wanted Skinofstars.com to look like for a while, but I wanted to do it reasonably quickly as I hate it when these things hang around. My layout plan was simple enough. Only one or two blog posts on the front page with info on my other nettyness, like tweets. I also knew that I'd want access to other pages (as you find in the Further section.. not sure on that name).  So I searched some Wordpress themes and came across <a href="http://5thirtyone.com/grid-focus">Grid Focus</a>. It seemed to have the right level of minimalism that I was looking for as well as reasonably suitable layout. In order for it to work for me though I had to make a few hacks including some JQuery magic to include my further section (hope you like the transitions) and some layout hacks for the differences between a narrow and wide content column (you'll see if you view this in single/comments mode).

3. Content Update

Probably one of the most time consuming parts. Much of my old content was Uncategorised for no reason and lacked any tags. Many posts from back in the Blogger days didn't even have a title. I went through almost all of them  (I've taken a break from the 1996 stuff) and finally managed to put these years of outpourings into some kind of order.

4. Update to server

Well, that's just a bit of FTP and MySQL. Job done.
