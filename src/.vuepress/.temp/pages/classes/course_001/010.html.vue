<template><div><p>Strings are amongst the most popular types in Python. We can create them simply by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating strings is as simple as assigning a value to a variable. For example −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello World!'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Python Programming"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="accessing-values-in-strings" tabindex="-1"><a class="header-anchor" href="#accessing-values-in-strings"><span>Accessing Values in Strings</span></a></h2>
<p>Python does not support a character type; these are treated as strings of length one, thus also considered a substring.</p>
<p>To access substrings, use the square brackets for slicing along with the index or indices to obtain your substring. For example −</p>
<p><a href="http://tpcg.io/5Cb59z" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello World!'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Python Programming"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "var1[0]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var1[0]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "var2[1:5]: ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var2[1:5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var1[0]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> H</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var2[1:5]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ytho</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-strings" tabindex="-1"><a class="header-anchor" href="#updating-strings"><span>Updating Strings</span></a></h2>
<p>You can &quot;update&quot; an existing string by (re)assigning a variable to another string. The new value can be related to its previous value or to a completely different string altogether. For example −</p>
<p><a href="http://tpcg.io/TTnzkV" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">var1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello World!'</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Updated String :- ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var1[:6]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Python'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Updated</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> String</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Python</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="escape-characters" tabindex="-1"><a class="header-anchor" href="#escape-characters"><span>Escape Characters</span></a></h2>
<p>Following table is a list of escape or non-printable characters that can be represented with backslash notation.</p>
<p>An escape character gets interpreted; in a single quoted as well as double quoted strings.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Backslash notation</th>
<th style="text-align:center">Hexadecimal character</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">\a</td>
<td style="text-align:center">0x07</td>
<td>Bell or alert</td>
</tr>
<tr>
<td style="text-align:center">\b</td>
<td style="text-align:center">0x08</td>
<td>Backspace</td>
</tr>
<tr>
<td style="text-align:center">\cx</td>
<td style="text-align:center"></td>
<td>Control-x</td>
</tr>
<tr>
<td style="text-align:center">\C-x</td>
<td style="text-align:center"></td>
<td>Control-x</td>
</tr>
<tr>
<td style="text-align:center">\e</td>
<td style="text-align:center">0x1b</td>
<td>Escape</td>
</tr>
<tr>
<td style="text-align:center">\f</td>
<td style="text-align:center">0x0c</td>
<td>Formfeed</td>
</tr>
<tr>
<td style="text-align:center">\M-\C-x</td>
<td style="text-align:center"></td>
<td>Meta-Control-x</td>
</tr>
<tr>
<td style="text-align:center">\n</td>
<td style="text-align:center">0x0a</td>
<td>Newline</td>
</tr>
<tr>
<td style="text-align:center">\nnn</td>
<td style="text-align:center"></td>
<td>Octal notation, where n is in the range 0.7</td>
</tr>
<tr>
<td style="text-align:center">\r</td>
<td style="text-align:center">0x0d</td>
<td>Carriage return</td>
</tr>
<tr>
<td style="text-align:center">\s</td>
<td style="text-align:center">0x20</td>
<td>Space</td>
</tr>
<tr>
<td style="text-align:center">\t</td>
<td style="text-align:center">0x09</td>
<td>Tab</td>
</tr>
<tr>
<td style="text-align:center">\v</td>
<td style="text-align:center">0x0b</td>
<td>Vertical tab</td>
</tr>
<tr>
<td style="text-align:center">\x</td>
<td style="text-align:center"></td>
<td>Character x</td>
</tr>
<tr>
<td style="text-align:center">\xnn</td>
<td style="text-align:center"></td>
<td>Hexadecimal notation, where n is in the range 0.9, a.f, or A.F</td>
</tr>
</tbody>
</table>
<h2 id="string-special-operators" tabindex="-1"><a class="header-anchor" href="#string-special-operators"><span>String Special Operators</span></a></h2>
<p>Assume string variable <strong>a</strong> holds 'Hello' and variable <strong>b</strong> holds 'Python', then −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:left">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+</td>
<td style="text-align:left">Concatenation - Adds values on either side of the operator</td>
<td style="text-align:center">a + b will give HelloPython</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:left">Repetition - Creates new strings, concatenating multiple copies of the same string</td>
<td style="text-align:center">a*2 will give -HelloHello</td>
</tr>
<tr>
<td style="text-align:center">[]</td>
<td style="text-align:left">Slice - Gives the character from the given index</td>
<td style="text-align:center">a[1] will give e</td>
</tr>
<tr>
<td style="text-align:center">[ : ]</td>
<td style="text-align:left">Range Slice - Gives the characters from the given range</td>
<td style="text-align:center">a[1:4] will give ell</td>
</tr>
<tr>
<td style="text-align:center">in</td>
<td style="text-align:left">Membership - Returns true if a character exists in the given string</td>
<td style="text-align:center">H in a will give 1</td>
</tr>
<tr>
<td style="text-align:center">not in</td>
<td style="text-align:left">Membership - Returns true if a character does not exist in the given string</td>
<td style="text-align:center">M not in a will give 1</td>
</tr>
<tr>
<td style="text-align:center">r/R</td>
<td style="text-align:left">Raw String - Suppresses actual meaning of Escape characters. The syntax for raw strings is exactly the same as for normal strings with the exception of the raw string operator, the letter &quot;r,&quot; which precedes the quotation marks. The &quot;r&quot; can be lowercase (r) or uppercase (R) and must be placed immediately preceding the first quote mark.</td>
<td style="text-align:center">print r'\n' prints \n and print R'\n'prints \n</td>
</tr>
<tr>
<td style="text-align:center">%</td>
<td style="text-align:left">Format - Performs String formatting</td>
<td style="text-align:center">See at next section</td>
</tr>
</tbody>
</table>
<h2 id="string-formatting-operator" tabindex="-1"><a class="header-anchor" href="#string-formatting-operator"><span>String Formatting Operator</span></a></h2>
<p>One of Python's coolest features is the string format operator %. This operator is unique to strings and makes up for the pack of having functions from C's printf() family. Following is a simple example −</p>
<p><a href="http://tpcg.io/wIUTuU" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "My name is %s and weight is %d kg!"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Zara'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">My</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Zara</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 21</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kg!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the list of complete set of symbols which can be used along with % −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Format Symbol</th>
<th style="text-align:center">Conversion</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">%c</td>
<td style="text-align:center">character</td>
</tr>
<tr>
<td style="text-align:center">%s</td>
<td style="text-align:center">string conversion via str() prior to formatting</td>
</tr>
<tr>
<td style="text-align:center">%i</td>
<td style="text-align:center">signed decimal integer</td>
</tr>
<tr>
<td style="text-align:center">%d</td>
<td style="text-align:center">signed decimal integer</td>
</tr>
<tr>
<td style="text-align:center">%u</td>
<td style="text-align:center">unsigned decimal integer</td>
</tr>
<tr>
<td style="text-align:center">%o</td>
<td style="text-align:center">octal integer</td>
</tr>
<tr>
<td style="text-align:center">%x</td>
<td style="text-align:center">hexadecimal integer (lowercase letters)</td>
</tr>
<tr>
<td style="text-align:center">%X</td>
<td style="text-align:center">hexadecimal integer (UPPERcase letters)</td>
</tr>
<tr>
<td style="text-align:center">%e</td>
<td style="text-align:center">exponential notation (with lowercase 'e')</td>
</tr>
<tr>
<td style="text-align:center">%E</td>
<td style="text-align:center">exponential notation (with UPPERcase 'E')</td>
</tr>
<tr>
<td style="text-align:center">%f</td>
<td style="text-align:center">floating point real number</td>
</tr>
<tr>
<td style="text-align:center">%g</td>
<td style="text-align:center">the shorter of %f and %e</td>
</tr>
<tr>
<td style="text-align:center">%G</td>
<td style="text-align:center">the shorter of %f and %E</td>
</tr>
</tbody>
</table>
<p>Other supported symbols and functionality are listed in the following table −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Symbol</th>
<th style="text-align:center">Functionality</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">argument specifies width or precision</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">left justification</td>
</tr>
<tr>
<td style="text-align:center">+</td>
<td style="text-align:center">display the sign</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&lt;sp&gt;</code></td>
<td style="text-align:center">leave a blank space before a positive number</td>
</tr>
<tr>
<td style="text-align:center">#</td>
<td style="text-align:center">add the octal leading zero ( '0' ) or hexadecimal leading '0x' or '0X', depending on whether 'x' or 'X' were used.</td>
</tr>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">pad from left with zeros (instead of spaces)</td>
</tr>
<tr>
<td style="text-align:center">%</td>
<td style="text-align:center">'%%' leaves you with a single literal '%'</td>
</tr>
<tr>
<td style="text-align:center">(var)</td>
<td style="text-align:center">mapping variable (dictionary arguments)</td>
</tr>
<tr>
<td style="text-align:center">m.n.</td>
<td style="text-align:center">m is the minimum total width and n is the number of digits to display after the decimal point (if appl.)</td>
</tr>
</tbody>
</table>
<h2 id="triple-quotes" tabindex="-1"><a class="header-anchor" href="#triple-quotes"><span>Triple Quotes</span></a></h2>
<p>Python's triple quotes comes to the rescue by allowing strings to span multiple lines, including verbatim NEWLINEs, TABs, and any other special characters.</p>
<p>The syntax for triple quotes consists of three consecutive <strong>single or double</strong> quotes.</p>
<p><a href="http://tpcg.io/szN9rw" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">para_str</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> """this is a long string that is made up of</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">several lines and non-printable characters such as</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">TAB ( \t ) and they will show up that way when displayed.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">NEWLINEs within the string, whether explicitly given like</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">this within the brackets [ \n ], or just a NEWLINE within</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">the variable assignment will also show up.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"""</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> para_str</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result. Note how every single special character has been converted to its printed form, right down to the last NEWLINE at the end of the string between the &quot;up.&quot; and closing triple quotes. Also note that NEWLINEs occur either with an explicit carriage return at the end of a line or its escape code (\n) −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> long</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> that</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> made</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">several</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lines</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> non-printable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> characters</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> as</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TAB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ( ) and they will show up that way when displayed.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NEWLINEs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> within</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> string,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> whether</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explicitly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> given</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> like</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> within</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> brackets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">], or just a NEWLINE within</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> variable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> assignment</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> will</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> also</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Raw strings do not treat the backslash as a special character at all. Every character you put into a raw string stays the way you wrote it −</p>
<p><a href="http://tpcg.io/Gfq9Hl" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'C:\\nowhere'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\nowhere</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Now let's make use of raw string. We would put expression in <strong>r'expression'</strong> as follows −</p>
<p><a href="http://tpcg.io/ExGqoY" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> r'C:\\nowhere'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\\nowhere</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="unicode-string" tabindex="-1"><a class="header-anchor" href="#unicode-string"><span>Unicode String</span></a></h2>
<p>Normal strings in Python are stored internally as 8-bit ASCII, while Unicode strings are stored as 16-bit Unicode. This allows for a more varied set of characters, including special characters from most languages in the world. I'll restrict my treatment of Unicode strings to the following −</p>
<p><a href="http://tpcg.io/HUYVB4" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> u'Hello, world!'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>As you can see, Unicode strings use the prefix u, just as raw strings use the prefix r.</p>
<h2 id="built-in-string-methods" tabindex="-1"><a class="header-anchor" href="#built-in-string-methods"><span>Built-in String Methods</span></a></h2>
<p>Python includes the following built-in methods to manipulate strings −</p>
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
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_capitalize.htm" target="_blank" rel="noopener noreferrer">capitalize()</a>Capitalizes first letter of string</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_center.htm" target="_blank" rel="noopener noreferrer">center(width, fillchar)</a>Returns a space-padded string with the original string centered to a total of width columns.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_count.htm" target="_blank" rel="noopener noreferrer">count(str, beg= 0,end=len(string))</a>Counts how many times str occurs in string or in a substring of string if starting index beg and ending index end are given.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_decode.htm" target="_blank" rel="noopener noreferrer">decode(encoding='UTF-8',errors='strict')</a>Decodes the string using the codec registered for encoding. encoding defaults to the default string encoding.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_encode.htm" target="_blank" rel="noopener noreferrer">encode(encoding='UTF-8',errors='strict')</a>Returns encoded string version of string; on error, default is to raise a ValueError unless errors is given with 'ignore' or 'replace'.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_endswith.htm" target="_blank" rel="noopener noreferrer">endswith(suffix, beg=0, end=len(string))</a>Determines if string or a substring of string (if starting index beg and ending index end are given) ends with suffix; returns true if so and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_expandtabs.htm" target="_blank" rel="noopener noreferrer">expandtabs(tabsize=8)</a>Expands tabs in string to multiple spaces; defaults to 8 spaces per tab if tabsize not provided.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_find.htm" target="_blank" rel="noopener noreferrer">find(str, beg=0 end=len(string))</a>Determine if str occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_index.htm" target="_blank" rel="noopener noreferrer">index(str, beg=0, end=len(string))</a>Same as find(), but raises an exception if str not found.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isalnum.htm" target="_blank" rel="noopener noreferrer">isalnum()</a>Returns true if string has at least 1 character and all characters are alphanumeric and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isalpha.htm" target="_blank" rel="noopener noreferrer">isalpha()</a>Returns true if string has at least 1 character and all characters are alphabetic and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isdigit.htm" target="_blank" rel="noopener noreferrer">isdigit()</a>Returns true if string contains only digits and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_islower.htm" target="_blank" rel="noopener noreferrer">islower()</a>Returns true if string has at least 1 cased character and all cased characters are in lowercase and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isnumeric.htm" target="_blank" rel="noopener noreferrer">isnumeric()</a>Returns true if a unicode string contains only numeric characters and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isspace.htm" target="_blank" rel="noopener noreferrer">isspace()</a>Returns true if string contains only whitespace characters and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_istitle.htm" target="_blank" rel="noopener noreferrer">istitle()</a>Returns true if string is properly &quot;titlecased&quot; and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isupper.htm" target="_blank" rel="noopener noreferrer">isupper()</a>Returns true if string has at least one cased character and all cased characters are in uppercase and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_join.htm" target="_blank" rel="noopener noreferrer">join(seq)</a>Merges (concatenates) the string representations of elements in sequence seq into a string, with separator string.</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_len.htm" target="_blank" rel="noopener noreferrer">len(string)</a>Returns the length of the string</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">[ljust(width<a href="https://www.tutorialspoint.com/python/string_ljust.htm" target="_blank" rel="noopener noreferrer">, fillchar])</a>Returns a space-padded string with the original string left-justified to a total of width columns.</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_lower.htm" target="_blank" rel="noopener noreferrer">lower()</a>Converts all uppercase letters in string to lowercase.</td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_lstrip.htm" target="_blank" rel="noopener noreferrer">lstrip()</a>Removes all leading whitespace in string.</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_maketrans.htm" target="_blank" rel="noopener noreferrer">maketrans()</a>Returns a translation table to be used in translate function.</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_max.htm" target="_blank" rel="noopener noreferrer">max(str)</a>Returns the max alphabetical character from the string str.</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_min.htm" target="_blank" rel="noopener noreferrer">min(str)</a>Returns the min alphabetical character from the string str.</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:center">[replace(old, new <a href="https://www.tutorialspoint.com/python/string_replace.htm" target="_blank" rel="noopener noreferrer">, max])</a>Replaces all occurrences of old in string with new or at most max occurrences if max given.</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_rfind.htm" target="_blank" rel="noopener noreferrer">rfind(str, beg=0,end=len(string))</a>Same as find(), but search backwards in string.</td>
</tr>
<tr>
<td style="text-align:center">28</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_rindex.htm" target="_blank" rel="noopener noreferrer">rindex( str, beg=0, end=len(string))</a>Same as index(), but search backwards in string.</td>
</tr>
<tr>
<td style="text-align:center">29</td>
<td style="text-align:center">[rjust(width,<a href="https://www.tutorialspoint.com/python/string_rjust.htm" target="_blank" rel="noopener noreferrer">, fillchar])</a>Returns a space-padded string with the original string right-justified to a total of width columns.</td>
</tr>
<tr>
<td style="text-align:center">30</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_rstrip.htm" target="_blank" rel="noopener noreferrer">rstrip()</a>Removes all trailing whitespace of string.</td>
</tr>
<tr>
<td style="text-align:center">31</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_split.htm" target="_blank" rel="noopener noreferrer">split(str=&quot;&quot;, num=string.count(str))</a>Splits string according to delimiter str (space if not provided) and returns list of substrings; split into at most num substrings if given.</td>
</tr>
<tr>
<td style="text-align:center">32</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_splitlines.htm" target="_blank" rel="noopener noreferrer">splitlines( num=string.count('\n'))</a>Splits string at all (or num) NEWLINEs and returns a list of each line with NEWLINEs removed.</td>
</tr>
<tr>
<td style="text-align:center">33</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_startswith.htm" target="_blank" rel="noopener noreferrer">startswith(str, beg=0,end=len(string))</a>Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring str; returns true if so and false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">34</td>
<td style="text-align:center">[strip(<a href="https://www.tutorialspoint.com/python/string_strip.htm" target="_blank" rel="noopener noreferrer">chars])</a>Performs both lstrip() and rstrip() on string.</td>
</tr>
<tr>
<td style="text-align:center">35</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_swapcase.htm" target="_blank" rel="noopener noreferrer">swapcase()</a>Inverts case for all letters in string.</td>
</tr>
<tr>
<td style="text-align:center">36</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_title.htm" target="_blank" rel="noopener noreferrer">title()</a>Returns &quot;titlecased&quot; version of string, that is, all words begin with uppercase and the rest are lowercase.</td>
</tr>
<tr>
<td style="text-align:center">37</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_translate.htm" target="_blank" rel="noopener noreferrer">translate(table, deletechars=&quot;&quot;)</a>Translates string according to translation table str(256 chars), removing those in the del string.</td>
</tr>
<tr>
<td style="text-align:center">38</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_upper.htm" target="_blank" rel="noopener noreferrer">upper()</a>Converts lowercase letters in string to uppercase.</td>
</tr>
<tr>
<td style="text-align:center">39</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_zfill.htm" target="_blank" rel="noopener noreferrer">zfill (width)</a>Returns original string leftpadded with zeros to a total of width characters; intended for numbers, zfill() retains any sign given (less one zero).</td>
</tr>
<tr>
<td style="text-align:center">40</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/string_isdecimal.htm" target="_blank" rel="noopener noreferrer">isdecimal()</a>Returns true if a unicode string contains only decimal characters and false otherwise.</td>
</tr>
</tbody>
</table>
</div></template>


