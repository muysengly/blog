<template><div><p>A tuple is a collection of objects which ordered and immutable. Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed unlike lists and tuples use parentheses, whereas lists use square brackets.</p>
<p>Creating a tuple is as simple as putting different comma-separated values. Optionally you can put these comma-separated values between parentheses also. For example −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (1, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "a",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "b",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "c",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "d"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The empty tuple is written as two parentheses containing nothing −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>To write a tuple containing a single value you have to include a comma, even though there is only one value −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (50,);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Like string indices, tuple indices start at 0, and they can be sliced, concatenated, and so on.</p>
<h2 id="accessing-values-in-tuples" tabindex="-1"><a class="header-anchor" href="#accessing-values-in-tuples"><span>Accessing Values in Tuples</span></a></h2>
<p>To access values in tuple, use the square brackets for slicing along with the index or indices to obtain value available at that index. For example −</p>
<p><a href="http://tpcg.io/ZnuXed" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (1, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "tup1[0]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup1[0]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "tup2[1:5]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup2[1:5]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1[0]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> physics</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup2[1:5]:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [2, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-tuples" tabindex="-1"><a class="header-anchor" href="#updating-tuples"><span>Updating Tuples</span></a></h2>
<p>Tuples are immutable which means you cannot update or change the values of tuple elements. You are able to take portions of existing tuples to create new tuples as the following example demonstrates −</p>
<p><a href="http://tpcg.io/QjdQHf" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (12, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">34.56</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abc'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xyz'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Following action is not valid for tuples</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># tup1[0] = 100;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># So let's create a new tuple as follows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">12,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 34.56,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'abc',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'xyz'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="delete-tuple-elements" tabindex="-1"><a class="header-anchor" href="#delete-tuple-elements"><span>Delete Tuple Elements</span></a></h2>
<p>Removing individual tuple elements is not possible. There is, of course, nothing wrong with putting together another tuple with the undesired elements discarded.</p>
<p>To explicitly remove an entire tuple, just use the <strong>del</strong> statement. For example −</p>
<p><a href="http://tpcg.io/ANv9OB" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "After deleting tup : "</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result. Note an exception raised, this is because after <strong>del tup</strong> tuple does not exist any more −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'physics'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">After</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deleting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "test.py",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NameError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'tup'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> defined</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="basic-tuples-operations" tabindex="-1"><a class="header-anchor" href="#basic-tuples-operations"><span>Basic Tuples Operations</span></a></h2>
<p>Tuples respond to the + and * operators much like strings; they mean concatenation and repetition here too, except that the result is a new tuple, not a string.</p>
<p>In fact, tuples respond to all of the general sequence operations we used on strings in the prior chapter −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Python Expression</th>
<th style="text-align:center">Results</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">len((1, 2, 3))</td>
<td style="text-align:center">3</td>
<td style="text-align:center">Length</td>
</tr>
<tr>
<td style="text-align:center">(1, 2, 3) + (4, 5, 6)</td>
<td style="text-align:center">(1, 2, 3, 4, 5, 6)</td>
<td style="text-align:center">Concatenation</td>
</tr>
<tr>
<td style="text-align:center">('Hi!',) * 4</td>
<td style="text-align:center">('Hi!', 'Hi!', 'Hi!', 'Hi!')</td>
<td style="text-align:center">Repetition</td>
</tr>
<tr>
<td style="text-align:center">3 in (1, 2, 3)</td>
<td style="text-align:center">True</td>
<td style="text-align:center">Membership</td>
</tr>
<tr>
<td style="text-align:center">for x in (1, 2, 3): print x,</td>
<td style="text-align:center">1 2 3</td>
<td style="text-align:center">Iteration</td>
</tr>
</tbody>
</table>
<h2 id="indexing-slicing-and-matrixes" tabindex="-1"><a class="header-anchor" href="#indexing-slicing-and-matrixes"><span>Indexing, Slicing, and Matrixes</span></a></h2>
<p>Because tuples are sequences, indexing and slicing work the same way for tuples as they do for strings. Assuming following input −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'spam'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Spam',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'SPAM!'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">Python Expression</th>
<th style="text-align:center">Results</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">L[2]</td>
<td style="text-align:center">'SPAM!'</td>
<td style="text-align:center">Offsets start at zero</td>
</tr>
<tr>
<td style="text-align:center">L[-2]</td>
<td style="text-align:center">'Spam'</td>
<td style="text-align:center">Negative: count from the right</td>
</tr>
<tr>
<td style="text-align:center">L[1:]</td>
<td style="text-align:center">['Spam', 'SPAM!']</td>
<td style="text-align:center">Slicing fetches sections</td>
</tr>
</tbody>
</table>
<h2 id="no-enclosing-delimiters" tabindex="-1"><a class="header-anchor" href="#no-enclosing-delimiters"><span>No Enclosing Delimiters</span></a></h2>
<p>Any set of multiple objects, comma-separated, written without identifying symbols, i.e., brackets for lists, parentheses for tuples, etc., default to tuples, as indicated in these short examples −</p>
<p><a href="http://tpcg.io/TO4E3c" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'abc',</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -4.24e93,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18+6.6j,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'xyz'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">x,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Value of x , y : ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> x,y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">abc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -4.24e+93</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (18+6.6j) xyz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="built-in-tuple-functions" tabindex="-1"><a class="header-anchor" href="#built-in-tuple-functions"><span>Built-in Tuple Functions</span></a></h2>
<p>Python includes the following tuple functions −</p>
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
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/tuple_cmp.htm" target="_blank" rel="noopener noreferrer">cmp(tuple1, tuple2)</a>Compares elements of both tuples.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/tuple_len.htm" target="_blank" rel="noopener noreferrer">len(tuple)</a>Gives the total length of the tuple.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/tuple_max.htm" target="_blank" rel="noopener noreferrer">max(tuple)</a>Returns item from the tuple with max value.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/tuple_min.htm" target="_blank" rel="noopener noreferrer">min(tuple)</a>Returns item from the tuple with min value.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/tuple_tuple.htm" target="_blank" rel="noopener noreferrer">tuple(seq)</a>Converts a list into tuple.</td>
</tr>
</tbody>
</table>
</div></template>


