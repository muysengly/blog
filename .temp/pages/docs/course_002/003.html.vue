<template><div><p>Python is available on a wide variety of platforms including Linux and Mac OS X. Let's understand how to set up our Python environment.</p>
<h2 id="local-environment-setup" tabindex="-1"><a class="header-anchor" href="#local-environment-setup"><span>Local Environment Setup</span></a></h2>
<p>Open a terminal window and type &quot;python&quot; to find out if it is already installed and which version is installed.</p>
<ul>
<li>Unix (Solaris, Linux, FreeBSD, AIX, HP/UX, SunOS, IRIX, etc.)</li>
<li>Win 9x/NT/2000</li>
<li>Macintosh (Intel, PPC, 68K)</li>
<li>OS/2</li>
<li>DOS (multiple versions)</li>
<li>PalmOS</li>
<li>Nokia mobile phones</li>
<li>Windows CE</li>
<li>Acorn/RISC OS</li>
<li>BeOS</li>
<li>Amiga</li>
<li>VMS/OpenVMS</li>
<li>QNX</li>
<li>VxWorks</li>
<li>Psion</li>
<li>Python has also been ported to the Java and . NET virtual machines</li>
</ul>
<h2 id="getting-python" tabindex="-1"><a class="header-anchor" href="#getting-python"><span>Getting Python</span></a></h2>
<p>The most up-to-date and current source code, binaries, documentation, news, etc., is available on the official website of Python https://www.python.org/</p>
<p>You can download Python documentation from https://www.python.org/doc/. The documentation is available in HTML, PDF, and PostScript formats.</p>
<h2 id="installing-python" tabindex="-1"><a class="header-anchor" href="#installing-python"><span>Installing Python</span></a></h2>
<p>Python distribution is available for a wide variety of platforms. You need to download only the binary code applicable for your platform and install Python.</p>
<p>If the binary code for your platform is not available, you need a C compiler to compile the source code manually. Compiling the source code offers more flexibility in terms of choice of features that you require in your installation.</p>
<p>Here is a quick overview of installing Python on various platforms −</p>
<h3 id="unix-and-linux-installation" tabindex="-1"><a class="header-anchor" href="#unix-and-linux-installation"><span>Unix and Linux Installation</span></a></h3>
<p>Here are the simple steps to install Python on Unix/Linux machine.</p>
<ul>
<li>Open a Web browser and go to https://www.python.org/downloads/.</li>
<li>Follow the link to download zipped source code available for Unix/Linux.</li>
<li>Download and extract files.</li>
<li>Editing the <em>Modules/Setup</em> file if you want to customize some options.</li>
<li>run ./configure script</li>
<li>make</li>
<li>make install</li>
</ul>
<p>This installs Python at standard location <em>/usr/local/bin</em> and its libraries at <em>/usr/local/lib/pythonXX</em> where XX is the version of Python.</p>
<h3 id="windows-installation" tabindex="-1"><a class="header-anchor" href="#windows-installation"><span>Windows Installation</span></a></h3>
<p>Here are the steps to install Python on Windows machine.</p>
<ul>
<li>Open a Web browser and go to https://www.python.org/downloads/.</li>
<li>Follow the link for the Windows installer <em>python-XYZ.msi</em> file where XYZ is the version you need to install.</li>
<li>To use this installer <em>python-XYZ.msi</em>, the Windows system must support Microsoft Installer 2.0. Save the installer file to your local machine and then run it to find out if your machine supports MSI.</li>
<li>Run the downloaded file. This brings up the Python install wizard, which is really easy to use. Just accept the default settings, wait until the install is finished, and you are done.</li>
</ul>
<h3 id="macintosh-installation" tabindex="-1"><a class="header-anchor" href="#macintosh-installation"><span>Macintosh Installation</span></a></h3>
<p>Recent Macs come with Python installed, but it may be several years out of date. See <a href="https://www.python.org/download/mac/" target="_blank" rel="noopener noreferrer">http://www.python.org/download/mac/</a> for instructions on getting the current version along with extra tools to support development on the Mac. For older Mac OS's before Mac OS X 10.3 (released in 2003), MacPython is available.</p>
<p>Jack Jansen maintains it and you can have full access to the entire documentation at his website − http://www.cwi.nl/~jack/macpython.html. You can find complete installation details for Mac OS installation.</p>
<h2 id="setting-up-path" tabindex="-1"><a class="header-anchor" href="#setting-up-path"><span>Setting up PATH</span></a></h2>
<p>Programs and other executable files can be in many directories, so operating systems provide a search path that lists the directories that the OS searches for executables.</p>
<p>The path is stored in an environment variable, which is a named string maintained by the operating system. This variable contains information available to the command shell and other programs.</p>
<p>The <strong>path</strong> variable is named as PATH in Unix or Path in Windows (Unix is case sensitive; Windows is not).</p>
<p>In Mac OS, the installer handles the path details. To invoke the Python interpreter from any particular directory, you must add the Python directory to your path.</p>
<h2 id="setting-path-at-unix-linux" tabindex="-1"><a class="header-anchor" href="#setting-path-at-unix-linux"><span>Setting path at Unix/Linux</span></a></h2>
<p>To add the Python directory to the path for a particular session in Unix −</p>
<ul>
<li><strong>In the csh shell</strong> − type setenv PATH &quot;$PATH:/usr/local/bin/python&quot; and press Enter.</li>
<li><strong>In the bash shell (Linux)</strong> − type export PATH=&quot;$PATH:/usr/local/bin/python&quot; and press Enter.</li>
<li><strong>In the sh or ksh shell</strong> − type PATH=&quot;$PATH:/usr/local/bin/python&quot; and press Enter.</li>
<li><strong>Note</strong> − /usr/local/bin/python is the path of the Python directory</li>
</ul>
<h2 id="setting-path-at-windows" tabindex="-1"><a class="header-anchor" href="#setting-path-at-windows"><span>Setting path at Windows</span></a></h2>
<p>To add the Python directory to the path for a particular session in Windows −</p>
<p><strong>At the command prompt</strong> − type path %path%; C:\Python and press Enter.</p>
<p><strong>Note</strong> − C:\Python is the path of the Python directory</p>
<h2 id="python-environment-variables" tabindex="-1"><a class="header-anchor" href="#python-environment-variables"><span>Python Environment Variables</span></a></h2>
<p>Here are important environment variables, which can be recognized by Python −</p>
<table>
<thead>
<tr>
<th style="text-align:center">No</th>
<th style="text-align:left">Variable &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left"><strong>PYTHONPATH</strong> It has a role similar to PATH. This variable tells the Python interpreter where to locate the module files imported into a program. It should include the Python source library directory and the directories containing Python source code. PYTHONPATH is sometimes preset by the Python installer.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left"><strong>PYTHONSTARTUP</strong> It contains the path of an initialization file containing Python source code. It is executed every time you start the interpreter. It is named as .pythonrc.py in Unix and it contains commands that load utilities or modify PYTHONPATH.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left"><strong>PYTHONCASEOK</strong> It is used in Windows to instruct Python to find the first case-insensitive match in an import statement. Set this variable to any value to activate it.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left"><strong>PYTHONHOME</strong> It is an alternative module search path. It is usually embedded in the PYTHONSTARTUP or PYTHONPATH directories to make switching module libraries easy.</td>
</tr>
</tbody>
</table>
<h2 id="running-python" tabindex="-1"><a class="header-anchor" href="#running-python"><span>Running Python</span></a></h2>
<p>There are three different ways to start Python −</p>
<h3 id="interactive-interpreter" tabindex="-1"><a class="header-anchor" href="#interactive-interpreter"><span>Interactive Interpreter</span></a></h3>
<p>You can start Python from Unix, DOS, or any other system that provides you a command-line interpreter or shell window.</p>
<p>Enter <strong>python</strong> the command line.</p>
<p>Start coding right away in the interactive interpreter.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$python</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Unix/Linux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">or</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python%</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Unix/Linux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">or</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Windows/DOS</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the list of all the available command line options −</p>
<table>
<thead>
<tr>
<th style="text-align:center">No.</th>
<th style="text-align:left">Option &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left"><strong>-d</strong>It provides debug output.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left"><strong>-O</strong>It generates optimized bytecode (resulting in .pyo files).</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left"><strong>-S</strong>Do not run import site to look for Python paths on startup.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left"><strong>-v</strong>verbose output (detailed trace on import statements).</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left"><strong>-X</strong>disable class-based built-in exceptions (just use strings); obsolete starting with version 1.6.</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left"><strong>-c cmd</strong>run Python script sent in as cmd string</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left"><strong>file</strong>run Python script from given file</td>
</tr>
</tbody>
</table>
<h3 id="script-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#script-from-the-command-line"><span>Script from the Command-line</span></a></h3>
<p>A Python script can be executed at command line by invoking the interpreter on your application, as in the following −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> script.py </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Unix/Linux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">or</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> script.py</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Unix/Linux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">or</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> script.py</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # Windows/DOS</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong> − Be sure the file permission mode allows execution.</p>
<h3 id="integrated-development-environment" tabindex="-1"><a class="header-anchor" href="#integrated-development-environment"><span>Integrated Development Environment</span></a></h3>
<p>You can run Python from a Graphical User Interface (GUI) environment as well, if you have a GUI application on your system that supports Python.</p>
<ul>
<li><strong>Unix</strong> − IDLE is the very first Unix IDE for Python.</li>
<li><strong>Windows</strong> − PythonWin is the first Windows interface for Python and is an IDE with a GUI.</li>
<li><strong>Macintosh</strong> − The Macintosh version of Python along with the IDLE IDE is available from the main website, downloadable as either MacBinary or BinHex'd files.</li>
</ul>
<p>If you are not able to set up the environment properly, then you can take help from your system admin. Make sure the Python environment is properly set up and working perfectly fine.</p>
<p><strong>Note</strong> − All the examples given in subsequent chapters are executed with Python 2.4.3 version available on CentOS flavor of Linux.</p>
<p>We already have set up Python Programming environment online, so that you can execute all the available examples online at the same time when you are learning theory. Feel free to modify any example and execute it online.</p>
</div></template>


