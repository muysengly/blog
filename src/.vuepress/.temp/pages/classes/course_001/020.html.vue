<template><div><p>A <em>regular expression</em> is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern. Regular expressions are widely used in UNIX world.</p>
<p>The Python module <strong>re</strong> provides full support for Perl-like regular expressions in Python. The re module raises the exception re.error if an error occurs while compiling or using a regular expression.</p>
<p>We would cover two important functions, which would be used to handle regular expressions. But a small thing first: There are various characters, which would have special meaning when they are used in regular expression. To avoid any confusion while dealing with regular expressions, we would use Raw Strings as <strong>r'expression'</strong>.</p>
<h2 id="the-match-function" tabindex="-1"><a class="header-anchor" href="#the-match-function"><span>The <em>match</em> Function</span></a></h2>
<p>This function attempts to match RE <em>pattern</em> to <em>string</em> with optional <em>flags</em>.</p>
<p>Here is the syntax for this function −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>re.match(pattern, string, flags=0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the description of the parameters −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Parameter &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>pattern</strong>This is the regular expression to be matched.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>string</strong>This is the string, which would be searched to match the pattern at the beginning of string.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>flags</strong>You can specify different flags using bitwise OR (|). These are modifiers, which are listed in the table below.</td>
</tr>
</tbody>
</table>
<p>The <em>re.match</em> function returns a <strong>match</strong> object on success, <strong>None</strong> on failure. We use<em>group(num)</em> or <em>groups()</em> function of <strong>match</strong> object to get matched expression.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Match Object Method &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**group(num=0)**This method returns entire match (or specific subgroup num)</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**groups()**This method returns all matching subgroups in a tuple (empty if there weren't any)</td>
</tr>
</tbody>
</table>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/cZGpLX" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line = "Cats are smarter than dogs"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>matchObj = re.match( r'(.*) are (.*?) .*', line, re.M|re.I)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if matchObj:</span></span>
<span class="line"><span>   print "matchObj.group() : ", matchObj.group()</span></span>
<span class="line"><span>   print "matchObj.group(1) : ", matchObj.group(1)</span></span>
<span class="line"><span>   print "matchObj.group(2) : ", matchObj.group(2)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "No match!!"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>matchObj.group() : Cats are smarter than dogs</span></span>
<span class="line"><span>matchObj.group(1) : Cats</span></span>
<span class="line"><span>matchObj.group(2) : smarter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-search-function" tabindex="-1"><a class="header-anchor" href="#the-search-function"><span>The <em>search</em> Function</span></a></h2>
<p>This function searches for first occurrence of RE <em>pattern</em> within <em>string</em> with optional <em>flags</em>.</p>
<p>Here is the syntax for this function −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>re.search(pattern, string, flags=0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the description of the parameters −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Parameter &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>pattern</strong>This is the regular expression to be matched.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>string</strong>This is the string, which would be searched to match the pattern anywhere in the string.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>flags</strong>You can specify different flags using bitwise OR (|). These are modifiers, which are listed in the table below.</td>
</tr>
</tbody>
</table>
<p>The <em>re.search</em> function returns a <strong>match</strong> object on success, <strong>none</strong> on failure. We use <em>group(num)</em> or <em>groups()</em> function of <strong>match</strong> object to get matched expression.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Match Object Methods &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**group(num=0)**This method returns entire match (or specific subgroup num)</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**groups()**This method returns all matching subgroups in a tuple (empty if there weren't any)</td>
</tr>
</tbody>
</table>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/WE021A" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line = "Cats are smarter than dogs";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>searchObj = re.search( r'(.*) are (.*?) .*', line, re.M|re.I)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if searchObj:</span></span>
<span class="line"><span>   print "searchObj.group() : ", searchObj.group()</span></span>
<span class="line"><span>   print "searchObj.group(1) : ", searchObj.group(1)</span></span>
<span class="line"><span>   print "searchObj.group(2) : ", searchObj.group(2)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "Nothing found!!"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>searchObj.group() : Cats are smarter than dogs</span></span>
<span class="line"><span>searchObj.group(1) : Cats</span></span>
<span class="line"><span>searchObj.group(2) : smarter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="matching-versus-searching" tabindex="-1"><a class="header-anchor" href="#matching-versus-searching"><span>Matching Versus Searching</span></a></h2>
<p>Python offers two different primitive operations based on regular expressions: <strong>match</strong> checks for a match only at the beginning of the string, while <strong>search</strong> checks for a match anywhere in the string (this is what Perl does by default).</p>
<h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/1VpZ8k" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line = "Cats are smarter than dogs";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>matchObj = re.match( r'dogs', line, re.M|re.I)</span></span>
<span class="line"><span>if matchObj:</span></span>
<span class="line"><span>   print "match --> matchObj.group() : ", matchObj.group()</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "No match!!"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>searchObj = re.search( r'dogs', line, re.M|re.I)</span></span>
<span class="line"><span>if searchObj:</span></span>
<span class="line"><span>   print "search --> searchObj.group() : ", searchObj.group()</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "Nothing found!!"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>No match!!</span></span>
<span class="line"><span>search --> searchObj.group() : dogs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="search-and-replace" tabindex="-1"><a class="header-anchor" href="#search-and-replace"><span>Search and Replace</span></a></h2>
<p>One of the most important <strong>re</strong> methods that use regular expressions is <strong>sub</strong>.</p>
<h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>re.sub(pattern, repl, string, max=0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This method replaces all occurrences of the RE <em>pattern</em> in <em>string</em> with <em>repl</em>, substituting all occurrences unless <em>max</em> provided. This method returns modified string.</p>
<h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/jVaoEQ" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>phone = "2004-959-559 # This is Phone Number"</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Delete Python-style comments</span></span>
<span class="line"><span>num = re.sub(r'#.*$', "", phone)</span></span>
<span class="line"><span>print "Phone Num : ", num</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Remove anything other than digits</span></span>
<span class="line"><span>num = re.sub(r'\D', "", phone)    </span></span>
<span class="line"><span>print "Phone Num : ", num</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Phone Num : 2004-959-559</span></span>
<span class="line"><span>Phone Num : 2004959559</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regular-expression-modifiers-option-flags" tabindex="-1"><a class="header-anchor" href="#regular-expression-modifiers-option-flags"><span>Regular Expression Modifiers: Option Flags</span></a></h2>
<p>Regular expression literals may include an optional modifier to control various aspects of matching. The modifiers are specified as an optional flag. You can provide multiple modifiers using exclusive OR (|), as shown previously and may be represented by one of these −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Modifier &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>re.I</strong>Performs case-insensitive matching.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>re.L</strong>Interprets words according to the current locale. This interpretation affects the alphabetic group (\w and \W), as well as word boundary behavior(\b and \B).</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>re.M</strong>Makes $ match the end of a line (not just the end of the string) and makes ^ match the start of any line (not just the start of the string).</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>re.S</strong>Makes a period (dot) match any character, including a newline.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>re.U</strong>Interprets letters according to the Unicode character set. This flag affects the behavior of \w, \W, \b, \B.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><strong>re.X</strong>Permits &quot;cuter&quot; regular expression syntax. It ignores whitespace (except inside a set [] or when escaped by a backslash) and treats unescaped # as a comment marker.</td>
</tr>
</tbody>
</table>
<h2 id="regular-expression-patterns" tabindex="-1"><a class="header-anchor" href="#regular-expression-patterns"><span>Regular Expression Patterns</span></a></h2>
<p>Except for control characters, <strong>(+ ? . * ^ $ ( ) [ ] { } | )</strong>, all characters match themselves. You can escape a control character by preceding it with a backslash.</p>
<p>Following table lists the regular expression syntax that is available in Python −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Pattern &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**^**Matches beginning of line.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**$**Matches end of line.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**.**Matches any single character except newline. Using m option allows it to match newline as well.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**[...]**Matches any single character in brackets.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**[^...]**Matches any single character not in brackets</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**re***Matches 0 or more occurrences of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**re+**Matches 1 or more occurrence of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">**re?**Matches 0 or 1 occurrence of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">**re{ n}**Matches exactly n number of occurrences of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">**<code v-pre>re{ n,}</code>**Matches n or more occurrences of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">**re{ n, m}**Matches at least n and at most m occurrences of preceding expression.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><strong>a| b</strong>Matches either a or b.</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center">**(re)**Groups regular expressions and remembers matched text.</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center">**(?imx)**Temporarily toggles on i, m, or x options within a regular expression. If in parentheses, only that area is affected.</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center">**(?-imx)**Temporarily toggles off i, m, or x options within a regular expression. If in parentheses, only that area is affected.</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center">**(?: re)**Groups regular expressions without remembering matched text.</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center">**(?imx: re)**Temporarily toggles on i, m, or x options within parentheses.</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center">**(?-imx: re)**Temporarily toggles off i, m, or x options within parentheses.</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center">**(?#...)**Comment.</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">**(?= re)**Specifies position using a pattern. Doesn't have a range.</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center">**(?! re)**Specifies position using pattern negation. Doesn't have a range.</td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:center">**(?&gt; re)**Matches independent pattern without backtracking.</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:center"><strong>\w</strong>Matches word characters.</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center"><strong>\W</strong>Matches nonword characters.</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:center"><strong>\s</strong>Matches whitespace. Equivalent to [\t\n\r\f].</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:center"><strong>\S</strong>Matches nonwhitespace.</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center"><strong>\d</strong>Matches digits. Equivalent to [0-9].</td>
</tr>
<tr>
<td style="text-align:center">28</td>
<td style="text-align:center"><strong>\D</strong>Matches nondigits.</td>
</tr>
<tr>
<td style="text-align:center">29</td>
<td style="text-align:center"><strong>\A</strong>Matches beginning of string.</td>
</tr>
<tr>
<td style="text-align:center">30</td>
<td style="text-align:center"><strong>\Z</strong>Matches end of string. If a newline exists, it matches just before newline.</td>
</tr>
<tr>
<td style="text-align:center">31</td>
<td style="text-align:center"><strong>\z</strong>Matches end of string.</td>
</tr>
<tr>
<td style="text-align:center">32</td>
<td style="text-align:center"><strong>\G</strong>Matches point where last match finished.</td>
</tr>
<tr>
<td style="text-align:center">33</td>
<td style="text-align:center"><strong>\b</strong>Matches word boundaries when outside brackets. Matches backspace (0x08) when inside brackets.</td>
</tr>
<tr>
<td style="text-align:center">34</td>
<td style="text-align:center"><strong>\B</strong>Matches nonword boundaries.</td>
</tr>
<tr>
<td style="text-align:center">35</td>
<td style="text-align:center">**\n, \t, etc.**Matches newlines, carriage returns, tabs, etc.</td>
</tr>
<tr>
<td style="text-align:center">36</td>
<td style="text-align:center"><strong>\1...\9</strong>Matches nth grouped subexpression.</td>
</tr>
<tr>
<td style="text-align:center">37</td>
<td style="text-align:center"><strong>\10</strong>Matches nth grouped subexpression if it matched already. Otherwise refers to the octal representation of a character code.</td>
</tr>
</tbody>
</table>
<h2 id="regular-expression-examples" tabindex="-1"><a class="header-anchor" href="#regular-expression-examples"><span>Regular Expression Examples</span></a></h2>
<h3 id="literal-characters" tabindex="-1"><a class="header-anchor" href="#literal-characters"><span>Literal characters</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>python</strong>Match &quot;python&quot;.</td>
</tr>
</tbody>
</table>
<h2 id="character-classes" tabindex="-1"><a class="header-anchor" href="#character-classes"><span>Character classes</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>[Pp]ython</strong>Match &quot;Python&quot; or &quot;python&quot;</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**rub[ye]**Match &quot;ruby&quot; or &quot;rube&quot;</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**[aeiou]**Match any one lowercase vowel</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**[0-9]**Match any digit; same as [0123456789]</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**[a-z]**Match any lowercase ASCII letter</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**[A-Z]**Match any uppercase ASCII letter</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**[a-zA-Z0-9]**Match any of the above</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">**[^aeiou]**Match anything other than a lowercase vowel</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">**[^0-9]**Match anything other than a digit</td>
</tr>
</tbody>
</table>
<h2 id="special-character-classes" tabindex="-1"><a class="header-anchor" href="#special-character-classes"><span>Special Character Classes</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**.**Match any character except newline</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>\d</strong>Match a digit: [0-9]</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>\D</strong>Match a nondigit: [^0-9]</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>\s</strong>Match a whitespace character: [ \t\r\n\f]</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>\S</strong>Match nonwhitespace: [^ \t\r\n\f]</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><strong>\w</strong>Match a single word character: [A-Za-z0-9_]</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><strong>\W</strong>Match a nonword character: [^A-Za-z0-9_]</td>
</tr>
</tbody>
</table>
<h2 id="repetition-cases" tabindex="-1"><a class="header-anchor" href="#repetition-cases"><span>Repetition Cases</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**ruby?**Match &quot;rub&quot; or &quot;ruby&quot;: the y is optional</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**ruby***Match &quot;rub&quot; plus 0 or more ys</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**ruby+**Match &quot;rub&quot; plus 1 or more ys</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**\d{3}**Match exactly 3 digits</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**<code v-pre>\d{3,}</code>**Match 3 or more digits</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**\d{3,5}**Match 3, 4, or 5 digits</td>
</tr>
</tbody>
</table>
<h2 id="nongreedy-repetition" tabindex="-1"><a class="header-anchor" href="#nongreedy-repetition"><span>Nongreedy repetition</span></a></h2>
<p>This matches the smallest number of repetitions −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><code v-pre>&lt;.\*&gt;</code>Greedy repetition: matches &quot;<code v-pre>&lt;python&gt;perl&gt;</code>&quot;</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><code v-pre>&lt;.\*?&gt;</code>Nongreedy: matches &quot;<code v-pre>&lt;python&gt;</code>&quot; in &quot;<code v-pre>&lt;python&gt;perl&gt;</code>&quot;</td>
</tr>
</tbody>
</table>
<h2 id="grouping-with-parentheses" tabindex="-1"><a class="header-anchor" href="#grouping-with-parentheses"><span>Grouping with Parentheses</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**\D\d+**No group: + repeats \d</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**(\D\d)+**Grouped: + repeats \D\d pair</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**([Pp]ython(, )?)+**Match &quot;Python&quot;, &quot;Python, python, python&quot;, etc.</td>
</tr>
</tbody>
</table>
<h2 id="backreferences" tabindex="-1"><a class="header-anchor" href="#backreferences"><span>Backreferences</span></a></h2>
<p>This matches a previously matched group again −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>([Pp])ython&amp;\1ails</strong>Match python&amp;pails or Python&amp;Pails</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>(['&quot;])[^\1]*\1</strong>Single or double-quoted string. \1 matches whatever the 1st group matched. \2 matches whatever the 2nd group matched, etc.</td>
</tr>
</tbody>
</table>
<h2 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives"><span>Alternatives</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>python|perl</strong>Match &quot;python&quot; or &quot;perl&quot;</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**rub(y|le))**Match &quot;ruby&quot; or &quot;ruble&quot;</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>Python(!+|?)</strong>&quot;Python&quot; followed by one or more ! or one ?</td>
</tr>
</tbody>
</table>
<h2 id="anchors" tabindex="-1"><a class="header-anchor" href="#anchors"><span>Anchors</span></a></h2>
<p>This needs to specify match position.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>^Python</strong>Match &quot;Python&quot; at the start of a string or internal line</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**Python$**Match &quot;Python&quot; at the end of a string or line</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>\APython</strong>Match &quot;Python&quot; at the start of a string</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>Python\Z</strong>Match &quot;Python&quot; at the end of a string</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>\bPython\b</strong>Match &quot;Python&quot; at a word boundary</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><strong>\brub\B</strong>\B is nonword boundary: match &quot;rub&quot; in &quot;rube&quot; and &quot;ruby&quot; but not alone</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**Python(?=!)**Match &quot;Python&quot;, if followed by an exclamation point.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">**Python(?!!)**Match &quot;Python&quot;, if not followed by an exclamation point.</td>
</tr>
</tbody>
</table>
<h2 id="special-syntax-with-parentheses" tabindex="-1"><a class="header-anchor" href="#special-syntax-with-parentheses"><span>Special Syntax with Parentheses</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Example &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>R(?#comment)</strong> Matches &quot;R&quot;. All the rest is a comment</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>R(?i)uby</strong> Case-insensitive while matching &quot;uby&quot;</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>R(?i:uby)</strong> Same as above</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>rub(?:y|le))</strong> Group only without creating \1 backreference</td>
</tr>
</tbody>
</table>
</div></template>


