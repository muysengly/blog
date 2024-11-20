<template><div><p>Python provides two very important features to handle any unexpected error in your Python programs and to add debugging capabilities in them −</p>
<ul>
<li><strong>Exception Handling</strong> − This would be covered in this tutorial. Here is a list standard Exceptions available in Python: <a href="https://www.tutorialspoint.com/python/standard_exceptions.htm" target="_blank" rel="noopener noreferrer">Standard Exceptions</a>.</li>
<li><strong>Assertions</strong> − This would be covered in <a href="https://www.tutorialspoint.com/python/assertions_in_python.htm" target="_blank" rel="noopener noreferrer">Assertions in Python</a> tutorial.</li>
</ul>
<p>List of Standard Exceptions −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Exception Name &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>Exception</strong>Base class for all exceptions</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>StopIteration</strong>Raised when the next() method of an iterator does not point to any object.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>SystemExit</strong>Raised by the sys.exit() function.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>StandardError</strong>Base class for all built-in exceptions except StopIteration and SystemExit.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>ArithmeticError</strong>Base class for all errors that occur for numeric calculation.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><strong>OverflowError</strong>Raised when a calculation exceeds maximum limit for a numeric type.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center"><strong>FloatingPointError</strong>Raised when a floating point calculation fails.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><strong>ZeroDivisionError</strong>Raised when division or modulo by zero takes place for all numeric types.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><strong>AssertionError</strong>Raised in case of failure of the Assert statement.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><strong>AttributeError</strong>Raised in case of failure of attribute reference or assignment.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center"><strong>EOFError</strong>Raised when there is no input from either the raw_input() or input() function and the end of file is reached.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><strong>ImportError</strong>Raised when an import statement fails.</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center"><strong>KeyboardInterrupt</strong>Raised when the user interrupts program execution, usually by pressing Ctrl+c.</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center"><strong>LookupError</strong>Base class for all lookup errors.</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center"><strong>IndexError</strong>Raised when an index is not found in a sequence.</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center"><strong>KeyError</strong>Raised when the specified key is not found in the dictionary.</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center"><strong>NameError</strong>Raised when an identifier is not found in the local or global namespace.</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center"><strong>UnboundLocalError</strong>Raised when trying to access a local variable in a function or method but no value has been assigned to it.</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center"><strong>EnvironmentError</strong>Base class for all exceptions that occur outside the Python environment.</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center"><strong>IOError</strong>Raised when an input/ output operation fails, such as the print statement or the open() function when trying to open a file that does not exist.</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center"><strong>IOError</strong>Raised for operating system-related errors.</td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:center"><strong>SyntaxError</strong>Raised when there is an error in Python syntax.</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:center"><strong>IndentationError</strong>Raised when indentation is not specified properly.</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center"><strong>SystemError</strong>Raised when the interpreter finds an internal problem, but when this error is encountered the Python interpreter does not exit.</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:center"><strong>SystemExit</strong>Raised when Python interpreter is quit by using the sys.exit() function. If not handled in the code, causes the interpreter to exit.</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:center"><strong>TypeError</strong>Raised when an operation or function is attempted that is invalid for the specified data type.</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center"><strong>ValueError</strong>Raised when the built-in function for a data type has the valid type of arguments, but the arguments have invalid values specified.</td>
</tr>
<tr>
<td style="text-align:center">28</td>
<td style="text-align:center"><strong>RuntimeError</strong>Raised when a generated error does not fall into any category.</td>
</tr>
<tr>
<td style="text-align:center">29</td>
<td style="text-align:center"><strong>NotImplementedError</strong>Raised when an abstract method that needs to be implemented in an inherited class is not actually implemented.</td>
</tr>
</tbody>
</table>
<h3 id="assertions-in-python" tabindex="-1"><a class="header-anchor" href="#assertions-in-python"><span>Assertions in Python</span></a></h3>
<p>An assertion is a sanity-check that you can turn on or turn off when you are done with your testing of the program.</p>
<p>The easiest way to think of an assertion is to liken it to a <strong>raise-if</strong> statement (or to be more accurate, a raise-if-not statement). An expression is tested, and if the result comes up false, an exception is raised.</p>
<p>Assertions are carried out by the assert statement, the newest keyword to Python, introduced in version 1.5.</p>
<p>Programmers often place assertions at the start of a function to check for valid input, and after a function call to check for valid output.</p>
<h3 id="the-assert-statement" tabindex="-1"><a class="header-anchor" href="#the-assert-statement"><span>The <em>assert</em> Statement</span></a></h3>
<p>When it encounters an assert statement, Python evaluates the accompanying expression, which is hopefully true. If the expression is false, Python raises an <em>AssertionError</em> exception.</p>
<p>The <strong>syntax</strong> for assert is −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>assert Expression[, Arguments]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If the assertion fails, Python uses ArgumentExpression as the argument for the AssertionError. AssertionError exceptions can be caught and handled like any other exception using the try-except statement, but if not handled, they will terminate the program and produce a traceback.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>Here is a function that converts a temperature from degrees Kelvin to degrees Fahrenheit. Since zero degrees Kelvin is as cold as it gets, the function bails out if it sees a negative temperature −</p>
<p><a href="http://tpcg.io/fBXCk7" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>def KelvinToFahrenheit(Temperature):</span></span>
<span class="line"><span>   assert (Temperature >= 0),"Colder than absolute zero!"</span></span>
<span class="line"><span>   return ((Temperature-273)*1.8)+32</span></span>
<span class="line"><span>print KelvinToFahrenheit(273)</span></span>
<span class="line"><span>print int(KelvinToFahrenheit(505.78))</span></span>
<span class="line"><span>print KelvinToFahrenheit(-5)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>32.0</span></span>
<span class="line"><span>451</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>File "test.py", line 9, in &#x3C;module></span></span>
<span class="line"><span>print KelvinToFahrenheit(-5)</span></span>
<span class="line"><span>File "test.py", line 4, in KelvinToFahrenheit</span></span>
<span class="line"><span>assert (Temperature >= 0),"Colder than absolute zero!"</span></span>
<span class="line"><span>AssertionError: Colder than absolute zero!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="what-is-exception" tabindex="-1"><a class="header-anchor" href="#what-is-exception"><span>What is Exception?</span></a></h2>
<p>An exception is an event, which occurs during the execution of a program that disrupts the normal flow of the program's instructions. In general, when a Python script encounters a situation that it cannot cope with, it raises an exception. An exception is a Python object that represents an error.</p>
<p>When a Python script raises an exception, it must either handle the exception immediately otherwise it terminates and quits.</p>
<h2 id="handling-an-exception" tabindex="-1"><a class="header-anchor" href="#handling-an-exception"><span>Handling an exception</span></a></h2>
<p>If you have some <em>suspicious</em> code that may raise an exception, you can defend your program by placing the suspicious code in a <strong>try:</strong> block. After the try: block, include an <strong>except:</strong> statement, followed by a block of code which handles the problem as elegantly as possible.</p>
<h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h3>
<p>Here is simple syntax of <em>try....except...else</em> blocks −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>You do your operations here;</span></span>
<span class="line"><span>......................</span></span>
<span class="line"><span>except ExceptionI:</span></span>
<span class="line"><span>If there is ExceptionI, then execute this block.</span></span>
<span class="line"><span>except ExceptionII:</span></span>
<span class="line"><span>If there is ExceptionII, then execute this block.</span></span>
<span class="line"><span>......................</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>If there is no exception then execute this block.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here are few important points about the above-mentioned syntax −</p>
<ul>
<li>A single try statement can have multiple except statements. This is useful when the try block contains statements that may throw different types of exceptions.</li>
<li>You can also provide a generic except clause, which handles any exception.</li>
<li>After the except clause(s), you can include an else-clause. The code in the else-block executes if the code in the try: block does not raise an exception.</li>
<li>The else-block is a good place for code that does not need the try: block's protection.</li>
</ul>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>This example opens a file, writes content in the, file and comes out gracefully because there is no problem at all −</p>
<p><a href="http://tpcg.io/wDwtP9" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   fh = open("testfile", "w")</span></span>
<span class="line"><span>   fh.write("This is my test file for exception handling!!")</span></span>
<span class="line"><span>except IOError:</span></span>
<span class="line"><span>   print "Error: can\'t find file or read data"</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "Written content in the file successfully"</span></span>
<span class="line"><span>   fh.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Written content in the file successfully</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3>
<p>This example tries to open a file where you do not have write permission, so it raises an exception −</p>
<p><a href="http://tpcg.io/guvZfU" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   fh = open("testfile", "r")</span></span>
<span class="line"><span>   fh.write("This is my test file for exception handling!!")</span></span>
<span class="line"><span>except IOError:</span></span>
<span class="line"><span>   print "Error: can\'t find file or read data"</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   print "Written content in the file successfully"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Error: can't find file or read data</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="the-except-clause-with-no-exceptions" tabindex="-1"><a class="header-anchor" href="#the-except-clause-with-no-exceptions"><span>The <em>except</em> Clause with No Exceptions</span></a></h2>
<p>You can also use the except statement with no exceptions defined as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>You do your operations here;</span></span>
<span class="line"><span>......................</span></span>
<span class="line"><span>except:</span></span>
<span class="line"><span>If there is any exception, then execute this block.</span></span>
<span class="line"><span>......................</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>If there is no exception then execute this block.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This kind of a <strong>try-except</strong> statement catches all the exceptions that occur. Using this kind of try-except statement is not considered a good programming practice though, because it catches all exceptions but does not make the programmer identify the root cause of the problem that may occur.</p>
<h2 id="the-except-clause-with-multiple-exceptions" tabindex="-1"><a class="header-anchor" href="#the-except-clause-with-multiple-exceptions"><span>The <em>except</em> Clause with Multiple Exceptions</span></a></h2>
<p>You can also use the same <em>except</em> statement to handle multiple exceptions as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>   You do your operations here;</span></span>
<span class="line"><span>   ......................</span></span>
<span class="line"><span>except(Exception1[, Exception2[,...ExceptionN]]]):</span></span>
<span class="line"><span>   If there is any exception from the given exception list, </span></span>
<span class="line"><span>   then execute this block.</span></span>
<span class="line"><span>   ......................</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   If there is no exception then execute this block.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-try-finally-clause" tabindex="-1"><a class="header-anchor" href="#the-try-finally-clause"><span>The try-finally Clause</span></a></h2>
<p>You can use a <strong>finally:</strong> block along with a <strong>try:</strong> block. The finally block is a place to put any code that must execute, whether the try-block raised an exception or not. The syntax of the try-finally statement is this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>   You do your operations here;</span></span>
<span class="line"><span>   ......................</span></span>
<span class="line"><span>   Due to any exception, this may be skipped.</span></span>
<span class="line"><span>finally:</span></span>
<span class="line"><span>   This would always be executed.</span></span>
<span class="line"><span>   ......................</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You cannot use <em>else</em> clause as well along with a finally clause.</p>
<h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/Pfq1qs" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   fh = open("testfile", "w")</span></span>
<span class="line"><span>   fh.write("This is my test file for exception handling!!")</span></span>
<span class="line"><span>finally:</span></span>
<span class="line"><span>   print "Error: can\'t find file or read data"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you do not have permission to open the file in writing mode, then this will produce the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Error: can't find file or read data</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Same example can be written more cleanly as follows −</p>
<p><a href="http://tpcg.io/5p1Wkr" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   fh = open("testfile", "w")</span></span>
<span class="line"><span>   try:</span></span>
<span class="line"><span>      fh.write("This is my test file for exception handling!!")</span></span>
<span class="line"><span>   finally:</span></span>
<span class="line"><span>      print "Going to close the file"</span></span>
<span class="line"><span>      fh.close()</span></span>
<span class="line"><span>except IOError:</span></span>
<span class="line"><span>   print "Error: can\'t find file or read data"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When an exception is thrown in the <em>try</em> block, the execution immediately passes to the <em>finally</em> block. After all the statements in the <em>finally</em> block are executed, the exception is raised again and is handled in the <em>except</em> statements if present in the next higher layer of the <em>try-except</em> statement.</p>
<h2 id="argument-of-an-exception" tabindex="-1"><a class="header-anchor" href="#argument-of-an-exception"><span>Argument of an Exception</span></a></h2>
<p>An exception can have an <em>argument</em>, which is a value that gives additional information about the problem. The contents of the argument vary by exception. You capture an exception's argument by supplying a variable in the except clause as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>   You do your operations here;</span></span>
<span class="line"><span>   ......................</span></span>
<span class="line"><span>except ExceptionType, Argument:</span></span>
<span class="line"><span>   You can print value of Argument here...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you write the code to handle a single exception, you can have a variable follow the name of the exception in the except statement. If you are trapping multiple exceptions, you can have a variable follow the tuple of the exception.</p>
<p>This variable receives the value of the exception mostly containing the cause of the exception. The variable can receive a single value or multiple values in the form of a tuple. This tuple usually contains the error string, the error number, and an error location.</p>
<h3 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example</span></a></h3>
<p>Following is an example for a single exception −</p>
<p><a href="http://tpcg.io/Zr1ck8" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Define a function here.</span></span>
<span class="line"><span>def temp_convert(var):</span></span>
<span class="line"><span>   try:</span></span>
<span class="line"><span>      return int(var)</span></span>
<span class="line"><span>   except ValueError, Argument:</span></span>
<span class="line"><span>      print "The argument does not contain numbers\n", Argument</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Call above function here.</span></span>
<span class="line"><span>temp_convert("xyz");</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>The argument does not contain numbers</span></span>
<span class="line"><span>invalid literal for int() with base 10: 'xyz'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="raising-an-exceptions" tabindex="-1"><a class="header-anchor" href="#raising-an-exceptions"><span>Raising an Exceptions</span></a></h2>
<p>You can raise exceptions in several ways by using the raise statement. The general syntax for the <strong>raise</strong> statement is as follows.</p>
<h3 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>raise [Exception [, args [, traceback]]]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, <em>Exception</em> is the type of exception (for example, NameError) and <em>argument</em> is a value for the exception argument. The argument is optional; if not supplied, the exception argument is None.</p>
<p>The final argument, traceback, is also optional (and rarely used in practice), and if present, is the traceback object used for the exception.</p>
<h3 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example</span></a></h3>
<p>An exception can be a string, a class or an object. Most of the exceptions that the Python core raises are classes, with an argument that is an instance of the class. Defining new exceptions is quite easy and can be done as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def functionName( level ):</span></span>
<span class="line"><span>   if level &#x3C; 1:</span></span>
<span class="line"><span>      raise "Invalid level!", level</span></span>
<span class="line"><span>      # The code below to this would not be executed</span></span>
<span class="line"><span>      # if we raise the exception</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note:</strong> In order to catch an exception, an &quot;except&quot; clause must refer to the same exception thrown either class object or simple string. For example, to capture above exception, we must write the except clause as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>   Business Logic here...</span></span>
<span class="line"><span>except "Invalid level!":</span></span>
<span class="line"><span>   Exception handling here...</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>   Rest of the code here...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-defined-exceptions" tabindex="-1"><a class="header-anchor" href="#user-defined-exceptions"><span>User-Defined Exceptions</span></a></h2>
<p>Python also allows you to create your own exceptions by deriving classes from the standard built-in exceptions.</p>
<p>Here is an example related to <em>RuntimeError</em>. Here, a class is created that is subclassed from <em>RuntimeError</em>. This is useful when you need to display more specific information when an exception is caught.</p>
<p>In the try block, the user-defined exception is raised and caught in the except block. The variable e is used to create an instance of the class <em>Networkerror</em>.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class Networkerror(RuntimeError):</span></span>
<span class="line"><span>   def __init__(self, arg):</span></span>
<span class="line"><span>      self.args = arg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So once you defined above class, you can raise the exception as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>try:</span></span>
<span class="line"><span>   raise Networkerror("Bad hostname")</span></span>
<span class="line"><span>except Networkerror,e:</span></span>
<span class="line"><span>   print e.args</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


