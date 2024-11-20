<template><div><p>A Python program can handle date and time in several ways. Converting between date formats is a common chore for computers. Python's time and calendar modules help track dates and times.</p>
<h2 id="what-is-tick" tabindex="-1"><a class="header-anchor" href="#what-is-tick"><span>What is Tick?</span></a></h2>
<p>Time intervals are floating-point numbers in units of seconds. Particular instants in time are expressed in seconds since 00:00:00 hrs January 1, 1970(epoch).</p>
<p>There is a popular <strong>time</strong> module available in Python which provides functions for working with times, and for converting between representations. The function <em>time.time()</em> returns the current system time in ticks since 00:00:00 hrs January 1, 1970(epoch).</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<p><a href="http://tpcg.io/AiJa9O" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># This is required to include time module.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ticks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time.time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Number of ticks since 12:00am, January 1, 1970:",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ticks</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce a result something as follows −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Number</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ticks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> since</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 12:00am,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> January</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1970:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7186862.73399</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Date arithmetic is easy to do with ticks. However, dates before the epoch cannot be represented in this form. Dates in the far future also cannot be represented this way - the cutoff point is sometime in 2038 for UNIX and Windows.</p>
<h2 id="what-is-timetuple" tabindex="-1"><a class="header-anchor" href="#what-is-timetuple"><span>What is TimeTuple?</span></a></h2>
<p>Many of Python's time functions handle time as a tuple of 9 numbers, as shown below −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Index</th>
<th style="text-align:center">Field</th>
<th style="text-align:center">Values</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">4-digit year</td>
<td style="text-align:center">2008</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">Month</td>
<td style="text-align:center">1 to 12</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">Day</td>
<td style="text-align:center">1 to 31</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">Hour</td>
<td style="text-align:center">0 to 23</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">Minute</td>
<td style="text-align:center">0 to 59</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">Second</td>
<td style="text-align:center">0 to 61 (60 or 61 are leap-seconds)</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">Day of Week</td>
<td style="text-align:center">0 to 6 (0 is Monday)</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">Day of year</td>
<td style="text-align:center">1 to 366 (Julian day)</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">Daylight savings</td>
<td style="text-align:center">-1, 0, 1, -1 means library determines DST</td>
</tr>
</tbody>
</table>
<p>The above tuple is equivalent to <strong>struct_time</strong> structure. This structure has following attributes −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Index</th>
<th style="text-align:center">Attributes</th>
<th style="text-align:center">Values</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">tm_year</td>
<td style="text-align:center">2008</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">tm_mon</td>
<td style="text-align:center">1 to 12</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">tm_mday</td>
<td style="text-align:center">1 to 31</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">tm_hour</td>
<td style="text-align:center">0 to 23</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">tm_min</td>
<td style="text-align:center">0 to 59</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">tm_sec</td>
<td style="text-align:center">0 to 61 (60 or 61 are leap-seconds)</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">tm_wday</td>
<td style="text-align:center">0 to 6 (0 is Monday)</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">tm_yday</td>
<td style="text-align:center">1 to 366 (Julian day)</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">tm_isdst</td>
<td style="text-align:center">-1, 0, 1, -1 means library determines DST</td>
</tr>
</tbody>
</table>
<h2 id="getting-current-time" tabindex="-1"><a class="header-anchor" href="#getting-current-time"><span>Getting current time</span></a></h2>
<p>To translate a time instant from a <em>seconds since the epoch</em> floating-point value into a time-tuple, pass the floating-point value to a function (e.g., localtime) that returns a time-tuple with all nine items valid.</p>
<p><a href="http://tpcg.io/T9ZAOe" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">localtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time.localtime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">time.time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Local current time :",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> localtime</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result, which could be formatted in any other presentable form −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time.struct_time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tm_year</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2013,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_mon</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">7,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tm_mday</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">17,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_hour</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">21,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_min</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">26,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_sec</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_wday</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_yday</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">198,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> tm_isdst</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getting-formatted-time" tabindex="-1"><a class="header-anchor" href="#getting-formatted-time"><span>Getting formatted time</span></a></h2>
<p>You can format any time as per your requirement, but simple method to get time in readable format is asctime() −</p>
<p><a href="http://tpcg.io/Pn2IUS" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">localtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time.asctime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">( time.localtime(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">time.time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()) )</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Local current time :",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> localtime</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Tue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 13</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10:17:09</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2009</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getting-calendar-for-a-month" tabindex="-1"><a class="header-anchor" href="#getting-calendar-for-a-month"><span>Getting calendar for a month</span></a></h2>
<p>The calendar module gives a wide range of methods to play with yearly and monthly calendars. Here, we print a calendar for a given month ( Jan 2008 ) −</p>
<p><a href="http://tpcg.io/R9vlY8" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calendar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calendar.month</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2008,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Here is the calendar:"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cal</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Here</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calendar:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">January</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2008</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Tu</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> We</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Th</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Fr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Sa</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Su</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 11</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 12</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 13</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 16</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 17</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 18</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 19</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">21</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 22</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 23</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 25</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 26</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 27</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">28</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 29</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 31</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-time-module" tabindex="-1"><a class="header-anchor" href="#the-time-module"><span>The <em>time</em> Module</span></a></h2>
<p>There is a popular <strong>time</strong> module available in Python which provides functions for working with times and for converting between representations. Here is the list of all available methods −</p>
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
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_altzone.htm" target="_blank" rel="noopener noreferrer">time.altzone</a>The offset of the local DST timezone, in seconds west of UTC, if one is defined. This is negative if the local DST timezone is east of UTC (as in Western Europe, including the UK). Only use this if daylight is nonzero.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">[time.asctime(<a href="https://www.tutorialspoint.com/python/time_asctime.htm" target="_blank" rel="noopener noreferrer">tupletime])</a>Accepts a time-tuple and returns a readable 24-character string such as 'Tue Dec 11 18:07:14 2008'.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_clock.htm" target="_blank" rel="noopener noreferrer">time.clock( )</a>Returns the current CPU time as a floating-point number of seconds. To measure computational costs of different approaches, the value of time.clock is more useful than that of time.time().</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">[time.ctime(<a href="https://www.tutorialspoint.com/python/time_ctime.htm" target="_blank" rel="noopener noreferrer">secs])</a>Like asctime(localtime(secs)) and without arguments is like asctime( )</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">[time.gmtime(<a href="https://www.tutorialspoint.com/python/time_gmtime.htm" target="_blank" rel="noopener noreferrer">secs])</a>Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the UTC time. Note : t.tm_isdst is always 0</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">[time.localtime(<a href="https://www.tutorialspoint.com/python/time_localtime.htm" target="_blank" rel="noopener noreferrer">secs])</a>Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the local time (t.tm_isdst is 0 or 1, depending on whether DST applies to instant secs by local rules).</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_mktime.htm" target="_blank" rel="noopener noreferrer">time.mktime(tupletime)</a>Accepts an instant expressed as a time-tuple in local time and returns a floating-point value with the instant expressed in seconds since the epoch.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_sleep.htm" target="_blank" rel="noopener noreferrer">time.sleep(secs)</a>Suspends the calling thread for secs seconds.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">[time.strftime(fmt<a href="https://www.tutorialspoint.com/python/time_strftime.htm" target="_blank" rel="noopener noreferrer">,tupletime])</a>Accepts an instant expressed as a time-tuple in local time and returns a string representing the instant as specified by string fmt.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_strptime.htm" target="_blank" rel="noopener noreferrer">time.strptime(str,fmt='%a %b %d %H:%M:%S %Y')</a>Parses str according to format string fmt and returns the instant in time-tuple format.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_time.htm" target="_blank" rel="noopener noreferrer">time.time( )</a>Returns the current time instant, a floating-point number of seconds since the epoch.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/time_tzset.htm" target="_blank" rel="noopener noreferrer">time.tzset()</a>Resets the time conversion rules used by the library routines. The environment variable TZ specifies how this is done.</td>
</tr>
</tbody>
</table>
<p>Let us go through the functions briefly −</p>
<p>There are following two important attributes available with time module −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Attribute with Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>time.timezone</strong> Attribute time.timezone is the offset in seconds of the local time zone (without DST) from UTC (<code v-pre>&gt;0</code> in the Americas; <code v-pre>&lt;=0</code> in most of Europe, Asia, Africa).</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>time.tzname</strong> Attribute time.tzname is a pair of locale-dependent strings, which are the names of the local time zone without and with DST, respectively.</td>
</tr>
</tbody>
</table>
<h2 id="the-calendar-module" tabindex="-1"><a class="header-anchor" href="#the-calendar-module"><span>The <em>calendar</em> Module</span></a></h2>
<p>The calendar module supplies calendar-related functions, including functions to print a text calendar for a given month or year.</p>
<p>By default, calendar takes Monday as the first day of the week and Sunday as the last one. To change this, call calendar.setfirstweekday() function.</p>
<p>Here is a list of functions available with the <em>calendar</em> module −</p>
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
<td style="text-align:center">**calendar.calendar(year,w=2,l=1,c=6)**Returns a multiline string with a calendar for year year formatted into three columns separated by c spaces. w is the width in characters of each date; each line has length 21<em>w+18+2</em>c. l is the number of lines for each week.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**calendar.firstweekday( )**Returns the current setting for the weekday that starts each week. By default, when calendar is first imported, this is 0, meaning Monday.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**calendar.isleap(year)**Returns True if year is a leap year; otherwise, False.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**calendar.leapdays(y1,y2)**Returns the total number of leap days in the years within range(y1,y2).</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**calendar.month(year,month,w=2,l=1)**Returns a multiline string with a calendar for month month of year year, one line per week plus two header lines. w is the width in characters of each date; each line has length 7*w+6. l is the number of lines for each week.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**calendar.monthcalendar(year,month)**Returns a list of lists of ints. Each sublist denotes a week. Days outside month month of year year are set to 0; days within the month are set to their day-of-month, 1 and up.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**calendar.monthrange(year,month)**Returns two integers. The first one is the code of the weekday for the first day of the month month in year year; the second one is the number of days in the month. Weekday codes are 0 (Monday) to 6 (Sunday); month numbers are 1 to 12.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">**calendar.prcal(year,w=2,l=1,c=6)**Like print calendar.calendar(year,w,l,c).</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">**calendar.prmonth(year,month,w=2,l=1)**Like print calendar.month(year,month,w,l).</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">**calendar.setfirstweekday(weekday)**Sets the first day of each week to weekday code weekday. Weekday codes are 0 (Monday) to 6 (Sunday).</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">**calendar.timegm(tupletime)**The inverse of time.gmtime: accepts a time instant in time-tuple form and returns the same instant as a floating-point number of seconds since the epoch.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center">**calendar.weekday(year,month,day)**Returns the weekday code for the given date. Weekday codes are 0 (Monday) to 6 (Sunday); month numbers are 1 (January) to 12 (December).</td>
</tr>
</tbody>
</table>
<h2 id="other-modules-functions" tabindex="-1"><a class="header-anchor" href="#other-modules-functions"><span>Other Modules &amp; Functions</span></a></h2>
<p>If you are interested, then here you would find a list of other important modules and functions to play with date &amp; time in Python −</p>
<ul>
<li><a href="http://docs.python.org/library/datetime.html#module-datetime" target="_blank" rel="noopener noreferrer">The <em>datetime</em> Module</a></li>
<li><a href="http://www.twinsun.com/tz/tz-link.htm" target="_blank" rel="noopener noreferrer">The <em>pytz</em> Module</a></li>
<li><a href="http://labix.org/python-dateutil" target="_blank" rel="noopener noreferrer">The <em>dateutil</em> Module</a></li>
</ul>
</div></template>


