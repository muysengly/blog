<template><div><p>Number data types store numeric values. They are immutable data types, means that changing the value of a number data type results in a newly allocated object.</p>
<p>Number objects are created when you assign a value to them. For example −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">var1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">var2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also delete the reference to a number object by using the <strong>del</strong> statement. The syntax of the del statement is −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var1[,var2[,var3[....,varN]]]]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can delete a single object or multiple objects by using the <strong>del</strong> statement. For example −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var_a,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var_b</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Python supports four different numerical types −</p>
<ul>
<li><strong>int (signed integers)</strong> − They are often called just integers or ints, are positive or negative whole numbers with no decimal point.</li>
<li><strong>long (long integers )</strong> − Also called longs, they are integers of unlimited size, written like integers and followed by an uppercase or lowercase L.</li>
<li><strong>float (floating point real values)</strong> − Also called floats, they represent real numbers and are written with a decimal point dividing the integer and fractional parts. Floats may also be in scientific notation, with E or e indicating the power of 10 (2.5e2 = 2.5 x 102 = 250).</li>
<li><strong>complex (complex numbers)</strong> − are of the form a + bJ, where a and b are floats and J (or j) represents the square root of -1 (which is an imaginary number). The real part of the number is a, and the imaginary part is b. Complex numbers are not used much in Python programming.</li>
</ul>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3>
<p>Here are some examples of numbers</p>
<table>
<thead>
<tr>
<th style="text-align:center">int</th>
<th style="text-align:center">long</th>
<th style="text-align:center">float</th>
<th style="text-align:center">complex</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">51924361L</td>
<td style="text-align:center">0.0</td>
<td style="text-align:center">3.14j</td>
</tr>
<tr>
<td style="text-align:center">100</td>
<td style="text-align:center">-0x19323L</td>
<td style="text-align:center">15.20</td>
<td style="text-align:center">45.j</td>
</tr>
<tr>
<td style="text-align:center">-786</td>
<td style="text-align:center">0122L</td>
<td style="text-align:center">-21.9</td>
<td style="text-align:center">9.322e-36j</td>
</tr>
<tr>
<td style="text-align:center">080</td>
<td style="text-align:center">0xDEFABCECBDAECBFBAEL</td>
<td style="text-align:center">32.3+e18</td>
<td style="text-align:center">.876j</td>
</tr>
<tr>
<td style="text-align:center">-0490</td>
<td style="text-align:center">535633629843L</td>
<td style="text-align:center">-90.</td>
<td style="text-align:center">-.6545+0J</td>
</tr>
<tr>
<td style="text-align:center">-0x260</td>
<td style="text-align:center">-052318172735L</td>
<td style="text-align:center">-32.54e100</td>
<td style="text-align:center">3e+26J</td>
</tr>
<tr>
<td style="text-align:center">0x69</td>
<td style="text-align:center">-4721885298529L</td>
<td style="text-align:center">70.2-E12</td>
<td style="text-align:center">4.53e-7j</td>
</tr>
</tbody>
</table>
<ul>
<li>Python allows you to use a lowercase L with long, but it is recommended that you use only an uppercase L to avoid confusion with the number 1. Python displays long integers with an uppercase L.</li>
<li>A complex number consists of an ordered pair of real floating point numbers denoted by a + bj, where a is the real part and b is the imaginary part of the complex number.</li>
</ul>
<h2 id="number-type-conversion" tabindex="-1"><a class="header-anchor" href="#number-type-conversion"><span>Number Type Conversion</span></a></h2>
<p>Python converts numbers internally in an expression containing mixed types to a common type for evaluation. But sometimes, you need to coerce a number explicitly from one type to another to satisfy the requirements of an operator or function parameter.</p>
<ul>
<li>Type <strong>int(x)</strong> to convert x to a plain integer.</li>
<li>Type <strong>long(x)</strong> to convert x to a long integer.</li>
<li>Type <strong>float(x)</strong> to convert x to a floating-point number.</li>
<li>Type <strong>complex(x)</strong> to convert x to a complex number with real part x and imaginary part zero.</li>
<li>Type <strong>complex(x, y)</strong> to convert x and y to a complex number with real part x and imaginary part y. x and y are numeric expressions</li>
</ul>
<h2 id="mathematical-functions" tabindex="-1"><a class="header-anchor" href="#mathematical-functions"><span>Mathematical Functions</span></a></h2>
<p>Python includes following functions that perform mathematical calculations.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Function &amp; Returns ( description )</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_abs.htm" target="_blank" rel="noopener noreferrer">abs(x)</a>The absolute value of x: the (positive) distance between x and zero.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_ceil.htm" target="_blank" rel="noopener noreferrer">ceil(x)</a>The ceiling of x: the smallest integer not less than x</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_cmp.htm" target="_blank" rel="noopener noreferrer">cmp(x, y)</a>-1 if x &lt; y, 0 if x == y, or 1 if x &gt; y</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_exp.htm" target="_blank" rel="noopener noreferrer">exp(x)</a>The exponential of x: ex</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_fabs.htm" target="_blank" rel="noopener noreferrer">fabs(x)</a>The absolute value of x.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_floor.htm" target="_blank" rel="noopener noreferrer">floor(x)</a>The floor of x: the largest integer not greater than x</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_log.htm" target="_blank" rel="noopener noreferrer">log(x)</a>The natural logarithm of x, for x&gt; 0</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_log10.htm" target="_blank" rel="noopener noreferrer">log10(x)</a>The base-10 logarithm of x for x&gt; 0.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_max.htm" target="_blank" rel="noopener noreferrer">max(x1, x2,...)</a>The largest of its arguments: the value closest to positive infinity</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_min.htm" target="_blank" rel="noopener noreferrer">min(x1, x2,...)</a>The smallest of its arguments: the value closest to negative infinity</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_modf.htm" target="_blank" rel="noopener noreferrer">modf(x)</a>The fractional and integer parts of x in a two-item tuple. Both parts have the same sign as x. The integer part is returned as a float.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_pow.htm" target="_blank" rel="noopener noreferrer">pow(x, y)</a>The value of x**y.</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center">[round(x <a href="https://www.tutorialspoint.com/python/number_round.htm" target="_blank" rel="noopener noreferrer">,n])</a><strong>x</strong> rounded to n digits from the decimal point. Python rounds away from zero as a tie-breaker: round(0.5) is 1.0 and round(-0.5) is -1.0.</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_sqrt.htm" target="_blank" rel="noopener noreferrer">sqrt(x)</a>The square root of x for x &gt; 0</td>
</tr>
</tbody>
</table>
<h2 id="random-number-functions" tabindex="-1"><a class="header-anchor" href="#random-number-functions"><span>Random Number Functions</span></a></h2>
<p>Random numbers are used for games, simulations, testing, security, and privacy applications. Python includes following functions that are commonly used.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Function &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_choice.htm" target="_blank" rel="noopener noreferrer">choice(seq)</a>A random item from a list, tuple, or string.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">[randrange (<a href="https://www.tutorialspoint.com/python/number_randrange.htm" target="_blank" rel="noopener noreferrer">start,] stop [,step])</a>A randomly selected element from range(start, stop, step)</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_random.htm" target="_blank" rel="noopener noreferrer">random()</a>A random float r, such that 0 is less than or equal to r and r is less than 1</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">[seed(<a href="https://www.tutorialspoint.com/python/number_seed.htm" target="_blank" rel="noopener noreferrer">x])</a>Sets the integer starting value used in generating random numbers. Call this function before calling any other random module function. Returns None.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_shuffle.htm" target="_blank" rel="noopener noreferrer">shuffle(lst)</a>Randomizes the items of a list in place. Returns None.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_uniform.htm" target="_blank" rel="noopener noreferrer">uniform(x, y)</a>A random float r, such that x is less than or equal to r and r is less than y</td>
</tr>
</tbody>
</table>
<h2 id="trigonometric-functions" tabindex="-1"><a class="header-anchor" href="#trigonometric-functions"><span>Trigonometric Functions</span></a></h2>
<p>Python includes following functions that perform trigonometric calculations.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Function &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_acos.htm" target="_blank" rel="noopener noreferrer">acos(x)</a>Return the arc cosine of x, in radians.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_asin.htm" target="_blank" rel="noopener noreferrer">asin(x)</a>Return the arc sine of x, in radians.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_atan.htm" target="_blank" rel="noopener noreferrer">atan(x)</a>Return the arc tangent of x, in radians.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_atan2.htm" target="_blank" rel="noopener noreferrer">atan2(y, x)</a>Return atan(y / x), in radians.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_cos.htm" target="_blank" rel="noopener noreferrer">cos(x)</a>Return the cosine of x radians.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_hypot.htm" target="_blank" rel="noopener noreferrer">hypot(x, y)</a>Return the Euclidean norm, sqrt(x<em>x + y</em>y).</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_sin.htm" target="_blank" rel="noopener noreferrer">sin(x)</a>Return the sine of x radians.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_tan.htm" target="_blank" rel="noopener noreferrer">tan(x)</a>Return the tangent of x radians.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_degrees.htm" target="_blank" rel="noopener noreferrer">degrees(x)</a>Converts angle x from radians to degrees.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><a href="https://www.tutorialspoint.com/python/number_radians.htm" target="_blank" rel="noopener noreferrer">radians(x)</a>Converts angle x from degrees to radians.</td>
</tr>
</tbody>
</table>
<h2 id="mathematical-constants" tabindex="-1"><a class="header-anchor" href="#mathematical-constants"><span>Mathematical Constants</span></a></h2>
<p>The module also defines two mathematical constants −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Constants &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>pi</strong>The mathematical constant pi.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>e</strong>The mathematical constant e.</td>
</tr>
</tbody>
</table>
</div></template>


