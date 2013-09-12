---
layout: post
title: PHP Script for RSS auto-discovery and OPML file generation
categories:
- Programming &amp; Design
tags:
- blogs
- gpl
- open source
- opml
- php
- rss
- script
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '1'
---
Hey All,

I recently got a reasonable size list of blog URLs. What I wanted was to import all these into a feed reader (via OPML). There seemed to be a lack of conversion scripts for batch URL-&gt;find RSS link-&gt;feed reader import file (I may be wrong, please let me know if I am :), so I made one in PHP. I guess this is like an automatic-blogroller. I have just used this as a command line script, I'm not recommending you use this in 'the wild' as one might say, I have made little concession to security as I had a trusted list of URLs.

There are basically three steps to this

1.  Take an input file of newline seperated URLs, in my case blogs.
2.  Find (auto-discover) associated RSS feed of each blog URL
3.  Output an OPML file that you can use to import into a feed reader
What it does:

*   Takes a well formed list of newline separated URLs of blogs and turns it into an OPML
*   If the URL source doesn't contain a &lt;link&gt; to an RSS feed in the head it doesn't add it to the OPML
*   Detects the &lt;title&gt; and adds that to the OPML text field, or uses the URL if &lt;title&gt; isn't present
What it doesn't:

*   Check the RSS feed is validated XML
*   Any other checking really :)
*   Come with any sort of warranty/guarantee
Some of the key functions are from [Keith Devens](http://keithdevens.com/weblog/archive/2002/Jun/03/RSSAuto-DiscoveryPHP) work. Thanks.
<!--more-->
Without any further ado, here is the script:

{% highlight php %}
<?php
/*
 * @author @skinofstars Kevin Carmody
 * GPLv3 - http://www.gnu.org/copyleft/gpl.html
 *
 * this is really a command line app with no flags
 * for turning a bunch ofurls into an OPML file
 *
 * 1.takes input file of newline seperated urls, normally blogs
 * 2.finds (autodiscovery) associated rss of each url
 * 3.outputs an OPML file for you to use in a feed reader
 */

// file config
$inputFile = "/path/to/URLlist.txt";
$outputFile = "/path/to/blogroll.opml";

// OPML config
$opmlTitle = "Some Select Blogs";
$opmlOwnerName = "Kevin Carmody";
$opmlOwnerEmail = "kevin@skinofstars.com";

/** no need to edit after this :) **/
$inHandle = @fopen($inputFile, "r");//read-only
$outHandle = @fopen($outputFile, "a");//append

if ($inHandle &amp;&amp; $outHandle) {
	$headerOut = opmlHeader($opmlTitle,$opmlOwnerName,$opmlOwnerEmail);
	fwrite($outHandle,$headerOut);

	while (!feof($inHandle)) {
		$buffer = fgets($inHandle, 4096);
		$source = getFile($buffer);
		$rssURL = getRSSLocation($source, $buffer);
		$rssTitle = htmlentities(getTitleAlt($source));
		if($rssURL){
			if($rssTitle){
				$entryOut = opmlEntry($rssURL,$rssTitle);
				fwrite($outHandle,$entryOut);
			} else {
				$entryOut = opmlEntry($rssURL,$rssURL);
				fwrite($outHandle,$entryOut);
			}
			//echo ".";//uncomment to print a dot to screen on each success, nice for seeing progress
		} else {
			echo "Fail on: ".$buffer;
		}
	}
	$footerOut = opmlFooter();
	fwrite($outHandle,$footerOut);

	fclose($inHandle);
	fclose($outHandle);
} else {
	if(!$inHandle){
		echo 'not got a handle on input file: '.$inputFile."\n";
		die;
	}
	if(!$outHandle){
		echo 'not got a got handle on output file: '.$outputFile."\n";
		die;
	}
}

echo "\nAll done :)\n";

/**
 * basic opml header
 * @param string $opmlTitle
 * @param string $opmlOwnerName
 * @param string $opmlOwnerEmail
 * @return string
 */
function opmlHeader($opmlTitle,$opmlOwnerName,$opmlOwnerEmail){
	$oheader = "&lt;?xml version=\"1.0\" encoding=\"ISO-8859-1\"?&gt;\n"
	."&lt;opml version=\"1.1\"&gt;\n"
	."	&lt;head&gt;\n"
	."		&lt;title&gt;".$opmlTitle."&lt;/title&gt;\n"
	."		&lt;dateCreated&gt;".date("r")."&lt;/dateCreated&gt;\n"
	."		&lt;ownerName&gt;".$opmlOwnerName."&lt;/ownerName&gt;\n"
	."		&lt;ownerEmail&gt;".$opmlOwnerEmail."&lt;/ownerEmail&gt;\n"
	."		&lt;/head&gt;\n"
	."	&lt;body&gt;\n";
	return $oheader;
}

/**
 * just returns a test footer
 * @return string
 */
function opmlFooter(){
	$ofooter = "  &lt;/body&gt;\n"
	."&lt;/opml&gt;";
	return $ofooter;
}

/**
 * creates an XML entry for the OPML file
 * @param string $feedURL
 * @param string $feedTitle
 * @return string
 */
function opmlEntry($feedURL,$feedTitle){
	$outline = "    &lt;outline text=\"".$feedTitle."\" type=\"rss\" xmlUrl=\"".$feedURL."\"/&gt;\n";
	return $outline;
}

/**
 * returns the page title extracted from source
 * @param string $html
 * @return string
 */
function getTitleAlt($html) {
	if (preg_match('/&lt;title&gt;(.*?)&lt;\/title&gt;/is',$html,$found)) {
		$title = $found[1];
		return $title;
	} else {
		return;
	}
}

/**
 * http://keithdevens.com/weblog/archive/2002/Jun/03/RSSAuto-DiscoveryPHP
 * public domain
 */
function getFile($location){
	$ch = curl_init($location);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: close'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 15);
	$response = curl_exec($ch);
	curl_close($ch);
	return $response;
}

/**
 * http://keithdevens.com/weblog/archive/2002/Jun/03/RSSAuto-DiscoveryPHP
 * public domain
 */
function getRSSLocation($html, $location){
	if(!$html or !$location){
		return false;
	}else{
		#search through the HTML, save all &lt;link&gt; tags
		# and store each link's attributes in an associative array
		preg_match_all('/&lt;link\s+(.*?)\s*\/?&gt;/si', $html, $matches);
		$links = $matches[1];
		$final_links = array();
		$link_count = count($links);
		for($n=0; $n&lt;$link_count; $n++){
			$attributes = preg_split('/\s+/s', $links[$n]);
			foreach($attributes as $attribute){
				$att = preg_split('/\s*=\s*/s', $attribute, 2);
				if(isset($att[1])){
					$att[1] = preg_replace('/([\'"]?)(.*)\1/', '$2', $att[1]);
					$final_link[strtolower($att[0])] = $att[1];
				}
			}
			$final_links[$n] = $final_link;
		}
		#now figure out which one points to the RSS file
		for($n=0; $n&lt;$link_count; $n++){
			if(strtolower($final_links[$n]['rel']) == 'alternate'){
				if(strtolower($final_links[$n]['type']) == 'application/rss+xml'){
					$href = $final_links[$n]['href'];
				}
				if(!$href and strtolower($final_links[$n]['type']) == 'text/xml'){
					#kludge to make the first version of this still work
					$href = $final_links[$n]['href'];
				}
				if($href){
					if(strstr($href, "http://") !== false){ #if it's absolute
						$full_url = $href;
					}else{ #otherwise, 'absolutize' it
						$url_parts = parse_url($location);
						#only made it work for http:// links. Any problem with this?
						$full_url = "http://$url_parts[host]";
						if(isset($url_parts['port'])){
							$full_url .= ":$url_parts[port]";
						}
						if($href{0} != '/'){ #it's a relative link on the domain
							$full_url .= dirname($url_parts['path']);
							if(substr($full_url, -1) != '/'){
								#if the last character isn't a '/', add it
								$full_url .= '/';
							}
						}
						$full_url .= $href;
					}
					return $full_url;
				}
			}
		}
		return false;
	}
}
{% endhighlight %}

Though this was really a one time hit for me it may well be useful to others. Please let me know if you can think of ways to improve it and I will update accordingly.

Thanks,
Kevin