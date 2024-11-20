<template><div><p>The most basic data structure in Python is the <strong>sequence</strong>. Each element of a sequence is assigned a number - its position or index. The first index is zero, the second index is one, and so forth.</p>
<p>Python has six built-in types of sequences, but the most common ones are lists and tuples, which we would see in this tutorial.</p>
<p>There are certain things you can do with all sequence types. These operations include indexing, slicing, adding, multiplying, and checking for membership. In addition, Python has built-in functions for finding the length of a sequence and for finding its largest and smallest elements.</p>
<h2 id="python-lists" tabindex="-1"><a class="header-anchor" href="#python-lists"><span>Python Lists</span></a></h2>
<p>The list is a most versatile datatype available in Python which can be written as a list of comma-separated values (items) between square brackets. Important thing about a list is that items in a list need not be of the same type.</p>
<p>Creating a list is as simple as putting different comma-separated values between square brackets. For example −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2000]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [1, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "c",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "d"]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar to string indices, list indices start at 0, and lists can be sliced, concatenated and so on.</p>
<h2 id="accessing-values-in-lists" tabindex="-1"><a class="header-anchor" href="#accessing-values-in-lists"><span>Accessing Values in Lists</span></a></h2>
<p>To access values in lists, use the square brackets for slicing along with the index or indices to obtain value available at that index. For example −</p>
<p><a href="http://tpcg.io/GWTzcq" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2000]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [1, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "list1[0]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list1[0]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "list2[1:5]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list2[1:5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list1[0]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> physics</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list2[1:5]:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [2, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-lists" tabindex="-1"><a class="header-anchor" href="#updating-lists"><span>Updating Lists</span></a></h2>
<p>You can update single or multiple elements of lists by giving the slice on the left-hand side of the assignment operator, and you can add to elements in a list with the append() method. For example −</p>
<p><a href="http://tpcg.io/PHXpBD" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2000]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Value available at index 2 : "</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list[2]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list[2]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2001</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "New value available at index 2 : "</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list[2]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong> − append() method is discussed in subsequent section.</p>
<p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> available</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1997</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">New</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> available</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2001</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-list-elements" tabindex="-1"><a class="header-anchor" href="#delete-list-elements"><span>Delete List Elements</span></a></h2>
<p>To remove a list element, you can use either the del statement if you know exactly which element(s) you are deleting or the remove() method if you do not know. For example −</p>
<p><a href="http://tpcg.io/k3xK1x" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">list1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1997,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2000]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list1[2]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "After deleting value at index 2 : "</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 1997, 2000]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">After</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deleting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'physics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'chemistry'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 2000]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong> − remove() method is discussed in subsequent section.</p>
<h2 id="basic-list-operations" tabindex="-1"><a class="header-anchor" href="#basic-list-operations"><span>Basic List Operations</span></a></h2>
<p>Lists respond to the + and * operators much like strings; they mean concatenation and repetition here too, except that the result is a new list, not a string.</p>
<p>In fact, lists respond to all of the general sequence operations we used on strings in the prior chapter.</p>
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
<td style="text-align:center">len([1, 2, 3])</td>
<td style="text-align:center">3</td>
<td style="text-align:center">Length</td>
</tr>
<tr>
<td style="text-align:center">[1, 2, 3] + [4, 5, 6]</td>
<td style="text-align:center">[1, 2, 3, 4, 5, 6]</td>
<td style="text-align:center">Concatenation</td>
</tr>
<tr>
<td style="text-align:center">['Hi!'] * 4</td>
<td style="text-align:center">['Hi!', 'Hi!', 'Hi!', 'Hi!']</td>
<td style="text-align:center">Repetition</td>
</tr>
<tr>
<td style="text-align:center">3 in [1, 2, 3]</td>
<td style="text-align:center">True</td>
<td style="text-align:center">Membership</td>
</tr>
<tr>
<td style="text-align:center">for x in [1, 2, 3]: print x,</td>
<td style="text-align:center">1 2 3</td>
<td style="text-align:center">Iteration</td>
</tr>
</tbody>
</table>
<h2 id="indexing-slicing-and-matrixes" tabindex="-1"><a class="header-anchor" href="#indexing-slicing-and-matrixes"><span>Indexing, Slicing, and Matrixes</span></a></h2>
<p>Because lists are sequences, indexing and slicing work the same way for lists as they do for strings.</p>
<p>Assuming following input −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'spam'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Spam',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'SPAM!']</span></span></code></pre>
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
<td style="text-align:center">SPAM!</td>
<td style="text-align:center">Offsets start at zero</td>
</tr>
<tr>
<td style="text-align:center">L[-2]</td>
<td style="text-align:center">Spam</td>
<td style="text-align:center">Negative: count from the right</td>
</tr>
<tr>
<td style="text-align:center">L[1:]</td>
<td style="text-align:center">['Spam', 'SPAM!']</td>
<td style="text-align:center">Slicing fetches sections</td>
</tr>
</tbody>
</table>
<h2 id="built-in-list-functions-methods" tabindex="-1"><a class="header-anchor" href="#built-in-list-functions-methods"><span>Built-in List Functions &amp; Methods</span></a></h2>
<p>Python includes the following list functions −</p>
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
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_cmp.htm" target="_blank" rel="noopener noreferrer">cmp(list1, list2)</a>Compares elements of both lists.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_len.htm" target="_blank" rel="noopener noreferrer">len(list)</a>Gives the total length of the list.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_max.htm" target="_blank" rel="noopener noreferrer">max(list)</a>Returns item from the list with max value.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_min.htm" target="_blank" rel="noopener noreferrer">min(list)</a>Returns item from the list with min value.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_list.htm" target="_blank" rel="noopener noreferrer">list(seq)</a>Converts a tuple into list.</td>
</tr>
</tbody>
</table>
<p>Python includes following list methods</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Methods with Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_append.htm" target="_blank" rel="noopener noreferrer">list.append(obj)</a>Appends object obj to list</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_count.htm" target="_blank" rel="noopener noreferrer">list.count(obj)</a>Returns count of how many times obj occurs in list</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_extend.htm" target="_blank" rel="noopener noreferrer">list.extend(seq)</a>Appends the contents of seq to list</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_index.htm" target="_blank" rel="noopener noreferrer">list.index(obj)</a>Returns the lowest index in list that obj appears</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_insert.htm" target="_blank" rel="noopener noreferrer">list.insert(index, obj)</a>Inserts object obj into list at offset index</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">[list.pop(obj=list<a href="https://www.tutorialspoint.com/python/list_pop.htm" target="_blank" rel="noopener noreferrer">-1])</a>Removes and returns last object or obj from list</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_remove.htm" target="_blank" rel="noopener noreferrer">list.remove(obj)</a>Removes object obj from list</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/list_reverse.htm" target="_blank" rel="noopener noreferrer">list.reverse()</a>Reverses objects of list in place</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">[list.sort(<a href="https://www.tutorialspoint.com/python/list_sort.htm" target="_blank" rel="noopener noreferrer">func])</a>Sorts objects of list, use compare func if given</td>
</tr>
</tbody>
</table>
</div></template>


