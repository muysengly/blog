<template><div><p>Each key is separated from its value by a colon (😃, the items are separated by commas, and the whole thing is enclosed in curly braces. An empty dictionary without any items is written with just two curly braces, like this: {}.</p>
<p>Keys are unique within a dictionary while values may not be. The values of a dictionary can be of any type, but the keys must be of an immutable data type such as strings, numbers, or tuples.</p>
<h2 id="accessing-values-in-dictionary" tabindex="-1"><a class="header-anchor" href="#accessing-values-in-dictionary"><span>Accessing Values in Dictionary</span></a></h2>
<p>To access dictionary elements, you can use the familiar square brackets along with the key to obtain its value. Following is a simple example −</p>
<p><a href="http://tpcg.io/KTBDvD" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Class':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'First'}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Name']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Name']</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Age']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Age']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Name'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Zara</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Age'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If we attempt to access a data item with a key, which is not part of the dictionary, we get an error as follows −</p>
<p><a href="http://tpcg.io/pzUOPx" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Class':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'First'}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Alice']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Alice']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Alice'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "test.py",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Alice']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Alice']</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">KeyError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Alice'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-dictionary" tabindex="-1"><a class="header-anchor" href="#updating-dictionary"><span>Updating Dictionary</span></a></h2>
<p>You can update a dictionary by adding a new entry or a key-value pair, modifying an existing entry, or deleting an existing entry as shown below in the simple example −</p>
<p><a href="http://tpcg.io/porcg2" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Class':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'First'}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Age'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># update existing entry</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'School'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "DPS School"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Add new entry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Age']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Age']</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['School']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['School']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Age'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'School'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> DPS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> School</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-dictionary-elements" tabindex="-1"><a class="header-anchor" href="#delete-dictionary-elements"><span>Delete Dictionary Elements</span></a></h2>
<p>You can either remove individual dictionary elements or clear the entire contents of a dictionary. You can also delete entire dictionary in a single operation.</p>
<p>To explicitly remove an entire dictionary, just use the <strong>del</strong> statement. Following is a simple example −</p>
<p><a href="http://tpcg.io/mbvT73" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Class':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'First'}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Name']</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># remove entry with key 'Name'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict.clear</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># remove all entries in dict</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ;        </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># delete entire dictionary</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Age']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Age']</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['School']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['School']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result. Note that an exception is raised because after <strong>del dict</strong> dictionary does not exist any more −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Age'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "test.py",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Age']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Age']</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TypeError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'type'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> object</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> unsubscriptable</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong> − del() method is discussed in subsequent section.</p>
<h2 id="properties-of-dictionary-keys" tabindex="-1"><a class="header-anchor" href="#properties-of-dictionary-keys"><span>Properties of Dictionary Keys</span></a></h2>
<p>Dictionary values have no restrictions. They can be any arbitrary Python object, either standard objects or user-defined objects. However, same is not true for the keys.</p>
<p>There are two important points to remember about dictionary keys −</p>
<p><strong>(a)</strong> More than one entry per key not allowed. Which means no duplicate key is allowed. When duplicate keys encountered during assignment, the last assignment wins. For example −</p>
<p><a href="http://tpcg.io/rEJFby" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Manni'}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Name']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Name']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'Name'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Manni</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>(b)</strong> Keys must be immutable. Which means you can use strings, numbers or tuples as dictionary keys but something like ['key'] is not allowed. Following is a simple example −</p>
<p><a href="http://tpcg.io/BLKmXZ" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {['Name']:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "dict['Name']: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dict['Name']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "test.py",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {['Name']:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Zara',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Age':</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TypeError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> unhashable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'list'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="built-in-dictionary-functions-methods" tabindex="-1"><a class="header-anchor" href="#built-in-dictionary-functions-methods"><span>Built-in Dictionary Functions &amp; Methods</span></a></h2>
<p>Python includes the following dictionary functions −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Function with Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/dictionary_cmp.htm" target="_blank" rel="noopener noreferrer">cmp(dict1, dict2)</a>Compares elements of both dict.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/dictionary_len.htm" target="_blank" rel="noopener noreferrer">len(dict)</a>Gives the total length of the dictionary. This would be equal to the number of items in the dictionary.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/dictionary_str.htm" target="_blank" rel="noopener noreferrer">str(dict)</a>Produces a printable string representation of a dictionary</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/dictionary_type.htm" target="_blank" rel="noopener noreferrer">type(variable)</a>Returns the type of the passed variable. If passed variable is dictionary, then it would return a dictionary type.</td>
</tr>
</tbody>
</table>
<p>Python includes following dictionary methods −</p>
<table>
<thead>
<tr>
<th>Sr.No.</th>
<th>Methods with Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_clear.htm" target="_blank" rel="noopener noreferrer">dict.clear()</a>Removes all elements of dictionary <em>dict</em></td>
</tr>
<tr>
<td>2</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_copy.htm" target="_blank" rel="noopener noreferrer">dict.copy()</a>Returns a shallow copy of dictionary <em>dict</em></td>
</tr>
<tr>
<td>3</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_fromkeys.htm" target="_blank" rel="noopener noreferrer">dict.fromkeys()</a>Create a new dictionary with keys from seq and values <em>set</em> to <em>value</em>.</td>
</tr>
<tr>
<td>4</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_get.htm" target="_blank" rel="noopener noreferrer">dict.get(key, default=None)</a>For <em>key</em> key, returns value or default if key not in dictionary</td>
</tr>
<tr>
<td>5</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_has_key.htm" target="_blank" rel="noopener noreferrer">dict.has_key(key)</a>Returns <em>true</em> if key in dictionary <em>dict</em>, <em>false</em> otherwise</td>
</tr>
<tr>
<td>6</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_items.htm" target="_blank" rel="noopener noreferrer">dict.items()</a>Returns a list of <em>dict</em>'s (key, value) tuple pairs</td>
</tr>
<tr>
<td>7</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_keys.htm" target="_blank" rel="noopener noreferrer">dict.keys()</a>Returns list of dictionary dict's keys</td>
</tr>
<tr>
<td>8</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_setdefault.htm" target="_blank" rel="noopener noreferrer">dict.setdefault(key, default=None)</a>Similar to get(), but will set dict[key]=default if <em>key</em> is not already in dict</td>
</tr>
<tr>
<td>9</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_update.htm" target="_blank" rel="noopener noreferrer">dict.update(dict2)</a>Adds dictionary <em>dict2</em>'s key-values pairs to <em>dict</em></td>
</tr>
<tr>
<td>10</td>
<td><a href="https://www.tutorialspoint.com/python/dictionary_values.htm" target="_blank" rel="noopener noreferrer">dict.values()</a>Returns list of dictionary <em>dict</em>'s values</td>
</tr>
</tbody>
</table>
</div></template>


