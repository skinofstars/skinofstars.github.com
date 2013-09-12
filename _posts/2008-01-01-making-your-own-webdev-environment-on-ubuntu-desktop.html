---
layout: post
title: Making your own webdev environment on Ubuntu desktop
categories:
- Linux
tags:
- apache
- desktop
- mysql
- php
- server
- ubuntu
- webdev
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
These machines aren't all fun fun fun, sometimes you have to use them for some more serious work. In this post I'm going to tell you how to make your own php/mysql web development environment on your own Ubuntu desktop. Once you've done this you won't need to keep uploading files to your server just to check if something works.

Firstly I'd like to point to the post that originally helped me do this at <a href="http://www.webmasterview.com/server_side/development_server_on_ubuntu_desktop">webmasterview.com</a>.

Now, time to open up our trusty terminal. It is possible to do this through synaptics, but its quicker to do it like this:

First thing is to install mysql for databases on our machine. Copy this bit of code into your terminal:
<blockquote>sudo apt-get install mysql-server</blockquote>
Next we need apache2 as our webserver. Here is the code:
<blockquote>sudo apt-get install apache2</blockquote>
Then we need to get php:
<blockquote>sudo apt-get install php5</blockquote>
There are our three basic components. Now we need to hook them together:
<blockquote>sudo apt-get install libapache2-mod-php5</blockquote>
and
<blockquote>sudo apt-get install php5-mysql</blockquote>
Now that's just grand. We've now got all the elements that we need to serve files to the net. The thing is, we're only doing this so we can work on stuff at home, in which case what we're really looking for is an easier way to do so. What we need to do is have a public_html folder in our user directory. Perhaps now would be a good time to do that. The next step is making that work on the webserver we've just installed. Run this snip of code:
<blockquote>sudo a2enmod userdir</blockquote>
Then restart apache:
<blockquote>sudo /etc/init.d/apache2 force-reload</blockquote>
You should now be able to reach your home folder via http://localhost/~yourusername/

Finally we want to be able to administer our mysql databases. Though there are many good tools for doing this I still go back to the web based <a href="http://www.phpmyadmin.net/">phpMyAdmin</a>. Apart from the fact that it's highly automated (which suits me just fine) it's also a very common program to find on your paid hosting, so would also be very familiar when you go live. For the quick and dirty way of getting it up and running, download phpMyAdmin and extract to your public_html folder. Personally I rename it to something a little easier. Then rename the file within from config.example.inc.php to config.inc.php and within that file put something in the blowfish_secret field. Then all you have to do is navigate your browser to something like http://localhost/~yourusername/phpMyAdmin

<em>addendum</em>

<em>If your server is going to be visible from the big bad world and this is your everyday machine then you need to turn off that user public_html stuff (it's insecure for general use!). To do that just enter this instruction
</em>
<blockquote><em>sudo a2dismod userdir</em></blockquote>
<em>then reload apache as before</em>
