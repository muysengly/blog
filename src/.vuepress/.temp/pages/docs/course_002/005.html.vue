<template><div><p>Variables are nothing but reserved memory locations to store values. This means that when you create a variable you reserve some space in memory.</p>
<p>Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to variables, you can store integers, decimals or characters in these variables.</p>
<h2 id="assigning-values-to-variables" tabindex="-1"><a class="header-anchor" href="#assigning-values-to-variables"><span>Assigning Values to Variables</span></a></h2>
<p>Python variables do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable. The equal sign (<code v-pre>=</code>) is used to assign values to variables.</p>
<p>The operand to the left of the <code v-pre>=</code> operator is the name of the variable and the operand to the right of the <code v-pre>=</code> operator is the value stored in the variable. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">counter </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          # An integer assignment</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">miles </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1000.0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       # A floating point</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "John"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       # A string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> counter</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> miles</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, 100, 1000.0 and &quot;John&quot; are the values assigned to <em>counter</em>, <em>miles</em>, and <em>name</em> variables, respectively. This produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1000.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">John</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiple-assignment" tabindex="-1"><a class="header-anchor" href="#multiple-assignment"><span>Multiple Assignment</span></a></h2>
<p>Python allows you to assign a single value to several variables simultaneously. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, an integer object is created with the value 1, and all three variables are assigned to the same memory location. You can also assign multiple objects to multiple variables. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">a, b, c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"john"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, two integer objects with values 1 and 2 are assigned to variables a and b respectively, and one string object with the value &quot;john&quot; is assigned to the variable c.</p>
<h2 id="standard-data-types" tabindex="-1"><a class="header-anchor" href="#standard-data-types"><span>Standard Data Types</span></a></h2>
<p>The data stored in memory can be of many types. For example, a person's age is stored as a numeric value and his or her address is stored as alphanumeric characters. Python has various standard data types that are used to define the operations possible on them and the storage method for each of them.</p>
<p>Python has five standard data types −</p>
<ul>
<li>Numbers</li>
<li>String</li>
<li>List</li>
<li>Tuple</li>
<li>Dictionary</li>
</ul>
<h2 id="python-numbers" tabindex="-1"><a class="header-anchor" href="#python-numbers"><span>Python Numbers</span></a></h2>
<p>Number data types store numeric values. Number objects are created when you assign a value to them. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">var1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">var2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also delete the reference to a number object by using the del statement. The syntax of the del statement is −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">del</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var1[,var2[,var3[</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.,varN]]]]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can delete a single object or multiple objects by using the del statement. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">del</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">del</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> var_a, var_b</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Python supports four different numerical types −</p>
<ul>
<li>int (signed integers)</li>
<li>long (long integers, they can also be represented in octal and hexadecimal)</li>
<li>float (floating point real values)</li>
<li>complex (complex numbers)</li>
</ul>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3>
<p>Here are some examples of numbers −</p>
<table>
<thead>
<tr>
<th style="text-align:left">int</th>
<th style="text-align:left">long</th>
<th style="text-align:left">float</th>
<th style="text-align:left">complex</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">10</td>
<td style="text-align:left">51924361L</td>
<td style="text-align:left">0.0</td>
<td style="text-align:left">3.14j</td>
</tr>
<tr>
<td style="text-align:left">100</td>
<td style="text-align:left">-0x19323L</td>
<td style="text-align:left">15.20</td>
<td style="text-align:left">45.j</td>
</tr>
<tr>
<td style="text-align:left">-786</td>
<td style="text-align:left">0122L</td>
<td style="text-align:left">-21.9</td>
<td style="text-align:left">9.322e-36j</td>
</tr>
<tr>
<td style="text-align:left">080</td>
<td style="text-align:left">0xDEFABCECBDAECBFBAEl</td>
<td style="text-align:left">32.3+e18</td>
<td style="text-align:left">.876j</td>
</tr>
<tr>
<td style="text-align:left">-0490</td>
<td style="text-align:left">535633629843L</td>
<td style="text-align:left">-90.</td>
<td style="text-align:left">-.6545+0J</td>
</tr>
<tr>
<td style="text-align:left">-0x260</td>
<td style="text-align:left">-052318172735L</td>
<td style="text-align:left">-32.54e100</td>
<td style="text-align:left">3e+26J</td>
</tr>
<tr>
<td style="text-align:left">0x69</td>
<td style="text-align:left">-4721885298529L</td>
<td style="text-align:left">70.2-E12</td>
<td style="text-align:left">4.53e-7j</td>
</tr>
</tbody>
</table>
<ul>
<li>Python allows you to use a lowercase l with long, but it is recommended that you use only an uppercase L to avoid confusion with the number 1. Python displays long integers with an uppercase L.</li>
<li>A complex number consists of an ordered pair of real floating-point numbers denoted by x + yj, where x and y are the real numbers and j is the imaginary unit.</li>
</ul>
<h2 id="python-strings" tabindex="-1"><a class="header-anchor" href="#python-strings"><span>Python Strings</span></a></h2>
<p>Strings in Python are identified as a contiguous set of characters represented in the quotation marks. Python allows for either pairs of single or double quotes. Subsets of strings can be taken using the slice operator ([ ] and [:] ) with indexes starting at 0 in the beginning of the string and working their way from -1 at the end.</p>
<p>The plus (+) sign is the string concatenation operator and the asterisk (*) is the repetition operator. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello World!'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          # Prints complete string</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> str[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints first character of the string</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> str[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints characters starting from 3rd to 5th</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> str[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:]      </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints string starting from 3rd character</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # Prints string two times</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "TEST"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Prints concatenated string</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">H</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">llo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">llo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World!Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World!TEST</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-lists" tabindex="-1"><a class="header-anchor" href="#python-lists"><span>Python Lists</span></a></h2>
<p>Lists are the most versatile of Python's compound data types. A list contains items separated by commas and enclosed within square brackets ([]). To some extent, lists are similar to arrays in C. One difference between them is that all the items belonging to a list can be of different data type.</p>
<p>The values stored in a list can be accessed using the slice operator ([ ] and [:]) with indexes starting at 0 in the beginning of the list and working their way to end -1. The plus (+) sign is the list concatenation operator, and the asterisk (*) is the repetition operator. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">786</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">tinylist </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> list</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          	# Prints complete list</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]       	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints first element of the list</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]     	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints elements starting from 2nd till 3rd</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:]      	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints elements starting from 3rd element</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinylist </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  	# Prints list two times</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinylist  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints concatenated lists</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 786, 2.23, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 70.2]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">abcd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[786, 2.23]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[2.23, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 70.2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[123, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 123, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 786, 2.23, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 70.2, 123, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-tuples" tabindex="-1"><a class="header-anchor" href="#python-tuples"><span>Python Tuples</span></a></h2>
<p>A tuple is another sequence data type that is similar to the list. A tuple consists of a number of values separated by commas. Unlike lists, however, tuples are enclosed within parentheses.</p>
<p>The main differences between lists and tuples are: Lists are enclosed in brackets ( [ ] ) and their elements and size can be changed, while tuples are enclosed in parentheses ( ( ) ) and cannot be updated. Tuples can be thought of as <strong>read-only</strong> lists. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">786</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> , </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">tinytuple </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> tuple</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">               # Prints the complete tuple</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tuple[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]            </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints first element of the tuple</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tuple[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints elements of the tuple starting from 2nd till 3rd</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tuple[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:]           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints elements of the tuple starting from 3rd element</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinytuple </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       # Prints the contents of the tuple twice</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinytuple   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints concatenated tuples</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'abcd'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 786,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.23,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john',</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">abcd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">786,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2.23,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john',</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">123,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 123,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'abcd'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 786,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.23,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 70.2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 123,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following code is invalid with tuple, because we attempted to update a tuple, which is not allowed. Similar case is possible with lists −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">786</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> , </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  )</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'abcd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">786</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> , </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2.23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">70.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">tuple[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1000</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # Invalid syntax with tuple</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1000</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">     # Valid syntax with list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-dictionary" tabindex="-1"><a class="header-anchor" href="#python-dictionary"><span>Python Dictionary</span></a></h2>
<p>Python's dictionaries are kind of hash table type. They work like associative arrays or hashes found in Perl and consist of key-value pairs. A dictionary key can be almost any Python type, but are usually numbers or strings. Values, on the other hand, can be any arbitrary Python object.</p>
<p>Dictionaries are enclosed by curly braces ({ }) and values can be assigned and accessed using square braces ([]). For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">dict</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">dict[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'one'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "This is one"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">dict[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]     </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "This is two"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">tinydict </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'code'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">6734</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'dept'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sales'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dict[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'one'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints value for 'one' key</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dict[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints value for 2 key</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinydict          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints complete dictionary</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinydict.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints all the keys</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> tinydict.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">values</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Prints all the values</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">This</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> one</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">This</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> two</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'dept'</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'sales',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'code':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6734,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'name':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'john'}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'dept'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'code'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sales'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, 6734, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'john'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dictionaries have no concept of order among elements. It is incorrect to say that the elements are &quot;out of order&quot;; they are simply unordered.</p>
<h2 id="data-type-conversion" tabindex="-1"><a class="header-anchor" href="#data-type-conversion"><span>Data Type Conversion</span></a></h2>
<p>Sometimes, you may need to perform conversions between the built-in types. To convert between types, you simply use the type name as a function.</p>
<p>There are several built-in functions to perform conversion from one data type to another. These functions return a new object representing the converted value.</p>
<table>
<thead>
<tr>
<th style="text-align:center">No.</th>
<th style="text-align:left">Function &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left"><strong>int(x [,base])</strong> Converts x to an integer. base specifies the base if x is a string.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left"><strong>long(x [,base] )</strong> Converts x to a long integer. base specifies the base if x is a string.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left"><strong>float(x)</strong> Converts x to a floating-point number.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left"><strong>complex(real [,imag])</strong> Creates a complex number.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left"><strong>str(x)</strong> Converts object x to a string representation.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left"><strong>repr(x)</strong> Converts object x to an expression string.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left"><strong>eval(str)</strong> Evaluates a string and returns an object.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:left"><strong>tuple(s)</strong> Converts s to a tuple.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:left"><strong>list(s)</strong> Converts s to a list.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:left"><strong>set(s)</strong> Converts s to a set.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:left"><strong>dict(d)</strong> Creates a dictionary. d must be a sequence of (key,value) tuples.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:left"><strong>frozenset(s)</strong> Converts s to a frozen set.</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:left"><strong>chr(x)</strong> Converts an integer to a character.</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:left"><strong>unichr(x)</strong> Converts an integer to a Unicode character.</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:left"><strong>ord(x)</strong> Converts a single character to its integer value.</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:left"><strong>hex(x)</strong> Converts an integer to a hexadecimal string.</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:left">**oct(x) **Converts an integer to an octal string.</td>
</tr>
</tbody>
</table>
</div></template>


