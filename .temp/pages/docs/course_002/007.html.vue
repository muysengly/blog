<template><div><p>Decision making is anticipation of conditions occurring while execution of the program and specifying actions taken according to the conditions.</p>
<p>Decision structures evaluate multiple expressions which produce <code v-pre>TRUE</code> or <code v-pre>FALSE</code> as outcome. You need to determine which action to take and which statements to execute if outcome is TRUE or FALSE otherwise.</p>
<p>Following is the general form of a typical decision making structure found in most of the programming languages −</p>
<figure><img src="@source/docs/course_002/images/decision_making.jpg" alt="Decision making statements in Python" tabindex="0" loading="lazy"><figcaption>Decision making statements in Python</figcaption></figure>
<p>Python programming language assumes any <strong>non-zero</strong> and <strong>non-null</strong> values as TRUE, and if it is either <strong>zero</strong> or <strong>null</strong>, then it is assumed as FALSE value.</p>
<p>Python programming language provides following types of decision making statements. Click the following links to check their detail.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Statement &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">An <strong>if statement</strong> consists of a boolean expression followed by one or more statements.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">An <strong>if statement</strong> can be followed by an optional <strong>else statement</strong>, which executes when the boolean expression is FALSE.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">You can use one <strong>if</strong> or <strong>else if</strong> statement inside another <strong>if</strong> or <strong>else if</strong> statement(s).</td>
</tr>
</tbody>
</table>
<p>Let us go through each decision making briefly −</p>
<h2 id="single-statement-suites" tabindex="-1"><a class="header-anchor" href="#single-statement-suites"><span>Single Statement Suites</span></a></h2>
<p>If the suite of an <strong>if</strong> clause consists only of a single line, it may go on the same line as the header statement.</p>
<p>Here is an example of a <strong>one-line if</strong> clause −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">var </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ( var </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ) : </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Value of expression is 100"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Good bye!"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> expression</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Good</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bye!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


