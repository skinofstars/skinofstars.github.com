---
layout: post
title: Eeep and the Brotherhood Of Man
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
  _oembed_dfbfc160a2dd18de66db06cd68e32cc4: ! '{{unknown}}'
  _oembed_bcd2f4f94d0600f12a15ee68b9172e08: ! '{{unknown}}'
  _oembed_ee2063ecc83208cc3677357c241a3876: ! '{{unknown}}'
  _oembed_28eb3dc7413ec79cd5b66647f87baf97: ! '{{unknown}}'
  _oembed_14d228206a942eced18a5b78d7f12a57: ! '{{unknown}}'
  _oembed_b4f6353ee12b7cc546d18cc75ee345a2: ! '{{unknown}}'
  _oembed_979f3658c293d7a03fbf6280968f5461: ! '{{unknown}}'
  _oembed_d176d314f760ae008380d4cdb1bfe4cf: ! '{{unknown}}'
  _oembed_b38a7871ac0e14071be7d0ed8db4d51d: ! '{{unknown}}'
---
Now doesn't that sound like a bad book title? Or even something from the Harry Potter series, which incidentally I've just finished listening to the audio books as read by Stephen Fry.

Anyway, i digress. Following on from my previous two EeePC posts, firstly on [adjusting the default desktop](http://www.skinofstars.com/node/144), then on [changing to a full KDE desktop](http://www.skinofstars.com/node/146), I'm  going to spend today talking about removing the whole Xandros OS and installing Ubuntu Intrepid Ibex. Lets first recap as to why we'd want to do this. The Xandros OS that comes with EeePCs is woefully out of date. Open source, and especially desktop Linux, is a fast moving beast. Where one day setting up wifi or connecting to a VPN or playing a DVD may be difficult in Linux one day, the following will not be true the next day. So having a system which feels a few years old and struggles to keep up seems pointless, and in my opinion explains some of the  [return rates found with Netbook Linux editions](http://linux.slashdot.org/article.pl?sid=08/10/05/123253). As a further struggle on EeePC, the simple mode is a nightmare to tweak, especially considering those things that we want to tweak should really be done for us anyway. So what I propose is that we update with arguably the easiest and most widely supported distro out there, Ubuntu. I'm going to keep the actual method very succinct as there are 101 tutorials out there (links at the bottom). I'll stick with what to do and what to avoid:

_Ingredients_
* [Copy of Ubuntu Intrepid Ibex Desktop](http://www.ubuntu.com/getubuntu/download). It's fine to get the Long Term Stable Hardy if you like, but I do recommend the new one.
* [Unetbootin](http://lubi.sourceforge.net/unetbootin.html) for putting Ubuntu on your USB stick
* Ahh yes, the **spare** USB stick of 1gb or more

_Method_
Open Unetbootin with your USB stick stuck in your machine (you don't have to do this on your Eee). Unetbootin gives you the option of downloading straight to your USB from the web, but we've already downloaded our distro so we just need to select the Diskimage ISO radio button and browse to our downloaded file and hit OK (This is another one of those things you used to have to do manually in the past, ahh the advances of technology *sigh*). It will tell you when it's done.

Next we safely remove our hardware (unmount in Linux parlance) and plug it into our little Eeep. Press the power on button and start hitting F2. This takes us to the BIOS menu. I had loads of problems getting this to work right, you have to go to the Boot tab and make sure that your USB key is top of the list in the boot device order (this just means where the computer checks first for an operating system, all computers have this). This is what caught me out, you need to check in both the Boot Device Priority settings AND Hard Disk Drives. for some reason it changes with each consecutive boot which one you need to change, so check both. Save and exit (F10 I think, but it should say).

You should now be booted into an Ubuntu desktop. We've not done anything irreversible yet, so for now we can just play. You'll notice that your WIFI and webcam isn't working yet, that's because you don't have all the drivers you need. That can be fixed once you have installed.

So, let's assume we are brave and we are going on with the install. Most things you just need to follow the instructions, but here is where I shall give you a little advice. At the partition stage do not use guided, use manual. There are two hard drives in the Eeep, for the smaller of the two (4GB) it should be just system files. You want to set aside 100mb for mountpoint /boot and the rest for mountpoint "/" (known as root). The other hardrive you want a swap the size of your RAM, 1GB in the 901 (some places say twice the size, but one should be ample) and the rest for /home, where all your personal files will be stored. I'll assume you have finished the rest of the install without issues. :)

Now we have rebooted into our new Ubuntu system we need a little moding to make everything work just right. First and most importantly you need the [Array.org Kernel](http://www.array.org/ubuntu/index.html). There are instructions on the site as to how to get it. This will fix such things as WiFi, webcams and hotkeys. After that I recommend adjusting the layout to better suit the screen size. This is very easy to do by right-licking the panels and modifing to suit your needs. Here is mine:

[img_assist|nid=149|title=eeep-dekstop|desc=|link=none|align=none|width=100|height=59]

A quick recommendation of some things to avoid.
* Don't use a specialist distro like ubunu-eee. I know it makes things look easy but you'll be in trouble if they stop supporting. Standard Ubuntu is stable and here to stay.
* Avoid using user made scripts that claim to ease all your woes. They may just cause you more problems than they fix and because you didn't do each bit yourself step by step you won't know how to fix it.

Now, here are some of those tutorial links:
https://help.ubuntu.com/community/EeePC
http://wiki.eeeuser.com/installing_ubuntu_8.04
http://forum.eeeuser.com/viewtopic.php?id=51041