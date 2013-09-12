---
layout: post
title: Moving hosted SVN, the trials and the tribulations
categories:
- Internet
- Linux
- Programming &amp; Design
tags:
- hostedsvn
- server
- svn
- systems
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
Over the last few weeks <a href="http://akamike.net/">Mike Robinson</a> and I have discussed and decided an SVN restructuring for improving our build and deployment processes. I would encourage you to read a bit more about that (and various other geekness) at his blog.

So I've spent this week moving our company hosted <strong>SVN</strong> from <strong>Beanstalk</strong> to <strong>Springloops</strong>. I feel I've been swinging between hell and zen, but the learning has been awesome. As a summary of what I've found I thought I'd give a quick walk through how I did it.

<!--more-->
Most of this stuff was the usual <a href="http://subversion.apache.org/faq.html#dumpload">dump/load cycle</a>, but there are a couple of things which needed some extra attention.

Firstly, both Beanstalk and Springloops have the ability to export and import SVN dumps via easy-to-use web interfaces. This really could be as easy as download, upload. Try that first.

We had a couple of problems though. Previously we had a mishmash of company repos and project repos; these had to be merged and sorted. We also had different usernames on each system(!) which meant that during an import previous commits were not matched to current system users.  The author attribute needed to be updated for all previous revisions.

This was all done on OS X, but should be applicable to any Unix-like with the appropriate libraries, etc.  So we've got our dump from Beanstalk, now we just need to create a local repository to do our work on (always work on a backup!!).
<pre>$ svnadmin create --pre-1.4-compatible newrepo</pre>
We use the pre 1.4 compatible flag to overcome files system changes within SVN between versions. These changes can potentially cause errors (svn: Expected FS format '2'; found format '3') when <a href="http://svnbook.red-bean.com/en/1.0/re23.html">propset</a>-ting revision histories, in my case, author/committer names.

Next job, import your dump file.
<pre>$ svnadmin load newrepo &lt; dumpfile</pre>
If you're looking to do the merging, as I was, then you want to make yourself a directory in your repository (usual 'svn mkdir' commands) and then load it in the following fashion:
<pre>$ svnadmin load newrepo --parent-dir myfolder &lt; seconddumpfile</pre>
Ok, we've done our merging, now we're going to update our author histories.  Now the SVN manual gives you information on doing this one version at a time with a propset.  It also talks about other recursive actions such as deleting files, which isn't our concern.  For changing authors, I found a tidy script called <a href="http://svn.apache.org/repos/asf/subversion/trunk/contrib/server-side/svn-tweak-author.py">svn-author-tweak.py</a> from CollabNet.

If you want to give your repository a check before you upload it, just checkout to a local test.
<pre>$ svn co file:///path/to/newrepo /path/to/test/repo</pre>
Once that's done, dump the file.
<pre>$ svnadmin dump newrepo &gt; my.dumpfile</pre>
Upload

???

Profit
