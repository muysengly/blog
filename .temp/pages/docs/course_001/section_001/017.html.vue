<template><div><p>This chapter covers all the basic I/O functions available in Python. For more functions, please refer to standard Python documentation.</p>
<h2 id="printing-to-the-screen" tabindex="-1"><a class="header-anchor" href="#printing-to-the-screen"><span>Printing to the Screen</span></a></h2>
<p>The simplest way to produce output is using the <em>print</em> statement where you can pass zero or more expressions separated by commas. This function converts the expressions you pass into a string and writes the result to standard output as follows −</p>
<p><a href="http://tpcg.io/SkYY22" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print "Python is really a great language,", "isn't it?"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result on your standard screen −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Python is really a great language, isn't it?</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="reading-keyboard-input" tabindex="-1"><a class="header-anchor" href="#reading-keyboard-input"><span>Reading Keyboard Input</span></a></h2>
<p>Python provides two built-in functions to read a line of text from standard input, which by default comes from the keyboard. These functions are −</p>
<ul>
<li>raw_input</li>
<li>input</li>
</ul>
<h2 id="the-raw-input-function" tabindex="-1"><a class="header-anchor" href="#the-raw-input-function"><span>The <em>raw_input</em> Function</span></a></h2>
<p>The <em>raw_input([prompt])</em> function reads one line from standard input and returns it as a string (removing the trailing newline).</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>str = raw_input("Enter your input: ")</span></span>
<span class="line"><span>print "Received input is : ", str</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This prompts you to enter any string and it would display same string on the screen. When I typed &quot;Hello Python!&quot;, its output is like this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Enter your input: Hello Python</span></span>
<span class="line"><span>Received input is : Hello Python</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-input-function" tabindex="-1"><a class="header-anchor" href="#the-input-function"><span>The <em>input</em> Function</span></a></h2>
<p>The <em>input([prompt])</em> function is equivalent to raw_input, except that it assumes the input is a valid Python expression and returns the evaluated result to you.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>str = input("Enter your input: ")</span></span>
<span class="line"><span>print "Received input is : ", str</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result against the entered input −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Enter your input: [x*5 for x in range(2,10,2)]</span></span>
<span class="line"><span>Recieved input is : [10, 20, 30, 40]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="opening-and-closing-files" tabindex="-1"><a class="header-anchor" href="#opening-and-closing-files"><span>Opening and Closing Files</span></a></h2>
<p>Until now, you have been reading and writing to the standard input and output. Now, we will see how to use actual data files.</p>
<p>Python provides basic functions and methods necessary to manipulate files by default. You can do most of the file manipulation using a <strong>file</strong> object.</p>
<h2 id="the-open-function" tabindex="-1"><a class="header-anchor" href="#the-open-function"><span>The <em>open</em> Function</span></a></h2>
<p>Before you can read or write a file, you have to open it using Python's built-in <em>open()</em> function. This function creates a <strong>file</strong> object, which would be utilized to call other support methods associated with it.</p>
<h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>file object = open(file_name [, access_mode][, buffering])</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here are parameter details −</p>
<ul>
<li><strong>file_name</strong> − The file_name argument is a string value that contains the name of the file that you want to access.</li>
<li><strong>access_mode</strong> − The access_mode determines the mode in which the file has to be opened, i.e., read, write, append, etc. A complete list of possible values is given below in the table. This is optional parameter and the default file access mode is read (r).</li>
<li><strong>buffering</strong> − If the buffering value is set to 0, no buffering takes place. If the buffering value is 1, line buffering is performed while accessing a file. If you specify the buffering value as an integer greater than 1, then buffering action is performed with the indicated buffer size. If negative, the buffer size is the system default(default behavior).</li>
</ul>
<p>Here is a list of the different modes of opening a file −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Modes &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>r</strong>Opens a file for reading only. The file pointer is placed at the beginning of the file. This is the default mode.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>rb</strong>Opens a file for reading only in binary format. The file pointer is placed at the beginning of the file. This is the default mode.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**r+**Opens a file for both reading and writing. The file pointer placed at the beginning of the file.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**rb+**Opens a file for both reading and writing in binary format. The file pointer placed at the beginning of the file.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>w</strong>Opens a file for writing only. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center"><strong>wb</strong>Opens a file for writing only in binary format. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**w+**Opens a file for both writing and reading. Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">**wb+**Opens a file for both writing and reading in binary format. Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><strong>a</strong>Opens a file for appending. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center"><strong>ab</strong>Opens a file for appending in binary format. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">**a+**Opens a file for both appending and reading. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing.</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center">**ab+**Opens a file for both appending and reading in binary format. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing.</td>
</tr>
</tbody>
</table>
<h2 id="the-file-object-attributes" tabindex="-1"><a class="header-anchor" href="#the-file-object-attributes"><span>The <em>file</em> Object Attributes</span></a></h2>
<p>Once a file is opened and you have one <em>file</em> object, you can get various information related to that file.</p>
<p>Here is a list of all attributes related to file object −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Attribute &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>file.closed</strong>Returns true if file is closed, false otherwise.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>file.mode</strong>Returns access mode with which file was opened.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>file.name</strong>Returns name of the file.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>file.softspace</strong>Returns false if space explicitly required with print, true otherwise.</td>
</tr>
</tbody>
</table>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/mIm72J" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open a file</span></span>
<span class="line"><span>fo = open("foo.txt", "wb")</span></span>
<span class="line"><span>print "Name of the file: ", fo.name</span></span>
<span class="line"><span>print "Closed or not : ", fo.closed</span></span>
<span class="line"><span>print "Opening mode : ", fo.mode</span></span>
<span class="line"><span>print "Softspace flag : ", fo.softspace</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Name of the file: foo.txt</span></span>
<span class="line"><span>Closed or not : False</span></span>
<span class="line"><span>Opening mode : wb</span></span>
<span class="line"><span>Softspace flag : 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-close-method" tabindex="-1"><a class="header-anchor" href="#the-close-method"><span>The <em>close()</em> Method</span></a></h2>
<p>The close() method of a <em>file</em> object flushes any unwritten information and closes the file object, after which no more writing can be done.</p>
<p>Python automatically closes a file when the reference object of a file is reassigned to another file. It is a good practice to use the close() method to close a file.</p>
<h3 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fileObject.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/pMu0CZ" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open a file</span></span>
<span class="line"><span>fo = open("foo.txt", "wb")</span></span>
<span class="line"><span>print "Name of the file: ", fo.name</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Close opend file</span></span>
<span class="line"><span>fo.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Name of the file: foo.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="reading-and-writing-files" tabindex="-1"><a class="header-anchor" href="#reading-and-writing-files"><span>Reading and Writing Files</span></a></h2>
<p>The <em>file</em> object provides a set of access methods to make our lives easier. We would see how to use <em>read()</em> and <em>write()</em> methods to read and write files.</p>
<h2 id="the-write-method" tabindex="-1"><a class="header-anchor" href="#the-write-method"><span>The <em>write()</em> Method</span></a></h2>
<p>The <em>write()</em> method writes any string to an open file. It is important to note that Python strings can have binary data and not just text.</p>
<p>The write() method does not add a newline character ('\n') to the end of the string −</p>
<h3 id="syntax-2" tabindex="-1"><a class="header-anchor" href="#syntax-2"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fileObject.write(string)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, passed parameter is the content to be written into the opened file.</p>
<h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open a file</span></span>
<span class="line"><span>fo = open("foo.txt", "wb")</span></span>
<span class="line"><span>fo.write( "Python is a great language.\nYeah its great!!\n")</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Close opend file</span></span>
<span class="line"><span>fo.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above method would create <em>foo.txt</em> file and would write given content in that file and finally it would close that file. If you would open this file, it would have following content.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Python is a great language.</span></span>
<span class="line"><span>Yeah its great!!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-read-method" tabindex="-1"><a class="header-anchor" href="#the-read-method"><span>The <em>read()</em> Method</span></a></h2>
<p>The <em>read()</em> method reads a string from an open file. It is important to note that Python strings can have binary data. apart from text data.</p>
<h3 id="syntax-3" tabindex="-1"><a class="header-anchor" href="#syntax-3"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fileObject.read([count])</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, passed parameter is the number of bytes to be read from the opened file. This method starts reading from the beginning of the file and if <em>count</em> is missing, then it tries to read as much as possible, maybe until the end of file.</p>
<h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h3>
<p>Let's take a file <em>foo.txt</em>, which we created above.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open a file</span></span>
<span class="line"><span>fo = open("foo.txt", "r+")</span></span>
<span class="line"><span>str = fo.read(10);</span></span>
<span class="line"><span>print "Read String is : ", str</span></span>
<span class="line"><span># Close opend file</span></span>
<span class="line"><span>fo.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Read String is : Python is</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="file-positions" tabindex="-1"><a class="header-anchor" href="#file-positions"><span>File Positions</span></a></h2>
<p>The <em>tell()</em> method tells you the current position within the file; in other words, the next read or write will occur at that many bytes from the beginning of the file.</p>
<p>The <em>seek(offset[, from])</em> method changes the current file position. The <em>offset</em> argument indicates the number of bytes to be moved. The <em>from</em> argument specifies the reference position from where the bytes are to be moved.</p>
<p>If <em>from</em> is set to 0, it means use the beginning of the file as the reference position and 1 means use the current position as the reference position and if it is set to 2 then the end of the file would be taken as the reference position.</p>
<h3 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example</span></a></h3>
<p>Let us take a file <em>foo.txt</em>, which we created above.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open a file</span></span>
<span class="line"><span>fo = open("foo.txt", "r+")</span></span>
<span class="line"><span>str = fo.read(10)</span></span>
<span class="line"><span>print "Read String is : ", str</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Check current position</span></span>
<span class="line"><span>position = fo.tell()</span></span>
<span class="line"><span>print "Current file position : ", position</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Reposition pointer at the beginning once again</span></span>
<span class="line"><span>position = fo.seek(0, 0);</span></span>
<span class="line"><span>str = fo.read(10)</span></span>
<span class="line"><span>print "Again read String is : ", str</span></span>
<span class="line"><span># Close opend file</span></span>
<span class="line"><span>fo.close()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Read String is : Python is</span></span>
<span class="line"><span>Current file position : 10</span></span>
<span class="line"><span>Again read String is : Python is</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="renaming-and-deleting-files" tabindex="-1"><a class="header-anchor" href="#renaming-and-deleting-files"><span>Renaming and Deleting Files</span></a></h2>
<p>Python <strong>os</strong> module provides methods that help you perform file-processing operations, such as renaming and deleting files.</p>
<p>To use this module you need to import it first and then you can call any related functions.</p>
<h2 id="the-rename-method" tabindex="-1"><a class="header-anchor" href="#the-rename-method"><span>The rename() Method</span></a></h2>
<p>The <em>rename()</em> method takes two arguments, the current filename and the new filename.</p>
<h3 id="syntax-4" tabindex="-1"><a class="header-anchor" href="#syntax-4"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.rename(current_file_name, new_file_name)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example</span></a></h3>
<p>Following is the example to rename an existing file <em>test1.txt</em> −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rename a file from test1.txt to test2.txt</span></span>
<span class="line"><span>os.rename( "test1.txt", "test2.txt" )</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-remove-method" tabindex="-1"><a class="header-anchor" href="#the-remove-method"><span>The <em>remove()</em> Method</span></a></h2>
<p>You can use the <em>remove()</em> method to delete files by supplying the name of the file to be deleted as the argument.</p>
<h3 id="syntax-5" tabindex="-1"><a class="header-anchor" href="#syntax-5"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.remove(file_name)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-6" tabindex="-1"><a class="header-anchor" href="#example-6"><span>Example</span></a></h3>
<p>Following is the example to delete an existing file <em>test2.txt</em> −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Delete file test2.txt</span></span>
<span class="line"><span>os.remove("text2.txt")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="directories-in-python" tabindex="-1"><a class="header-anchor" href="#directories-in-python"><span>Directories in Python</span></a></h2>
<p>All files are contained within various directories, and Python has no problem handling these too. The <strong>os</strong> module has several methods that help you create, remove, and change directories.</p>
<h2 id="the-mkdir-method" tabindex="-1"><a class="header-anchor" href="#the-mkdir-method"><span>The <em>mkdir()</em> Method</span></a></h2>
<p>You can use the <em>mkdir()</em> method of the <strong>os</strong> module to create directories in the current directory. You need to supply an argument to this method which contains the name of the directory to be created.</p>
<h3 id="syntax-6" tabindex="-1"><a class="header-anchor" href="#syntax-6"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.mkdir("newdir")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-7" tabindex="-1"><a class="header-anchor" href="#example-7"><span>Example</span></a></h3>
<p>Following is the example to create a directory <em>test</em> in the current directory −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create a directory "test"</span></span>
<span class="line"><span>os.mkdir("test")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-chdir-method" tabindex="-1"><a class="header-anchor" href="#the-chdir-method"><span>The <em>chdir()</em> Method</span></a></h2>
<p>You can use the <em>chdir()</em> method to change the current directory. The chdir() method takes an argument, which is the name of the directory that you want to make the current directory.</p>
<h3 id="syntax-7" tabindex="-1"><a class="header-anchor" href="#syntax-7"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.chdir("newdir")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-8" tabindex="-1"><a class="header-anchor" href="#example-8"><span>Example</span></a></h3>
<p>Following is the example to go into &quot;/home/newdir&quot; directory −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Changing a directory to "/home/newdir"</span></span>
<span class="line"><span>os.chdir("/home/newdir")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-getcwd-method" tabindex="-1"><a class="header-anchor" href="#the-getcwd-method"><span>The <em>getcwd()</em> Method</span></a></h2>
<p>The <em>getcwd()</em> method displays the current working directory.</p>
<h3 id="syntax-8" tabindex="-1"><a class="header-anchor" href="#syntax-8"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.getcwd()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-9" tabindex="-1"><a class="header-anchor" href="#example-9"><span>Example</span></a></h3>
<p>Following is the example to give current directory −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This would give location of the current directory</span></span>
<span class="line"><span>os.getcwd()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-rmdir-method" tabindex="-1"><a class="header-anchor" href="#the-rmdir-method"><span>The <em>rmdir()</em> Method</span></a></h2>
<p>The <em>rmdir()</em> method deletes the directory, which is passed as an argument in the method.</p>
<p>Before removing a directory, all the contents in it should be removed.</p>
<h3 id="syntax-9" tabindex="-1"><a class="header-anchor" href="#syntax-9"><span>Syntax</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>os.rmdir('dirname')</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-10" tabindex="-1"><a class="header-anchor" href="#example-10"><span>Example</span></a></h3>
<p>Following is the example to remove &quot;/tmp/test&quot; directory. It is required to give fully qualified name of the directory, otherwise it would search for that directory in the current directory.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This would  remove "/tmp/test"  directory.</span></span>
<span class="line"><span>os.rmdir( "/tmp/test"  )</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-directory-related-methods" tabindex="-1"><a class="header-anchor" href="#file-directory-related-methods"><span>File &amp; Directory Related Methods</span></a></h2>
<p>There are three important sources, which provide a wide range of utility methods to handle and manipulate files &amp; directories on Windows and Unix operating systems. They are as follows −</p>
<ul>
<li><a href="https://www.tutorialspoint.com/python/file_methods.htm" target="_blank" rel="noopener noreferrer">File Object Methods</a>: The <em>file</em> object provides functions to manipulate files.</li>
<li><a href="https://www.tutorialspoint.com/python/os_file_methods.htm" target="_blank" rel="noopener noreferrer">OS Object Methods</a>: This provides methods to process files as well as directories.</li>
</ul>
</div></template>


