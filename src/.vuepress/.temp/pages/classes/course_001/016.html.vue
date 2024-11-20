<template><div><p>A module allows you to logically organize your Python code. Grouping related code into a module makes the code easier to understand and use. A module is a Python object with arbitrarily named attributes that you can bind and reference.</p>
<p>Simply, a module is a file consisting of Python code. A module can define functions, classes and variables. A module can also include runnable code.</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<p>The Python code for a module named <em>aname</em> normally resides in a file named <em>aname.py</em>. Here's an example of a simple module, support.py</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">def</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> print_func</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">( </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">par</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> )</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello : ",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> par</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   return</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-import-statement" tabindex="-1"><a class="header-anchor" href="#the-import-statement"><span>The <em>import</em> Statement</span></a></h2>
<p>You can use any Python source file as a module by executing an import statement in some other Python source file. The <em>import</em> has the following syntax −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module1[,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module2[,...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> moduleN]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>When the interpreter encounters an import statement, it imports the module if the module is present in the search path. A search path is a list of directories that the interpreter searches before importing a module. For example, to import the module support.py, you need to put the following command at the top of the script −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Import module support</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> support</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Now you can call defined function that module as follows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">support.print_func(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"Zara"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Zara</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>A module is loaded only once, regardless of the number of times it is imported. This prevents the module execution from happening over and over again if multiple imports occur.</p>
<h2 id="the-from-import-statement" tabindex="-1"><a class="header-anchor" href="#the-from-import-statement"><span>The <em>from...import</em> Statement</span></a></h2>
<p>Python's <em>from</em> statement lets you import specific attributes from a module into the current namespace. The <em>from...import</em> has the following syntax −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> modname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name1[,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name2[,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nameN]]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>For example, to import the function fibonacci from the module fib, use the following statement −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fibonacci</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This statement does not import the entire module fib into the current namespace; it just introduces the item fibonacci from the module fib into the global symbol table of the importing module.</p>
<h2 id="the-from-import-statement-1" tabindex="-1"><a class="header-anchor" href="#the-from-import-statement-1"><span>The *from...import ** Statement</span></a></h2>
<p>It is also possible to import all names from a module into the current namespace by using the following import statement −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> modname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> import</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This provides an easy way to import all the items from a module into the current namespace; however, this statement should be used sparingly.</p>
<h2 id="locating-modules" tabindex="-1"><a class="header-anchor" href="#locating-modules"><span>Locating Modules</span></a></h2>
<p>When you import a module, the Python interpreter searches for the module in the following sequences −</p>
<ul>
<li>The current directory.</li>
<li>If the module isn't found, Python then searches each directory in the shell variable PYTHONPATH.</li>
<li>If all else fails, Python checks the default path. On UNIX, this default path is normally /usr/local/lib/python/.</li>
</ul>
<p>The module search path is stored in the system module sys as the <strong>sys.path</strong> variable. The sys.path variable contains the current directory, PYTHONPATH, and the installation-dependent default.</p>
<h2 id="the-pythonpath-variable" tabindex="-1"><a class="header-anchor" href="#the-pythonpath-variable"><span>The <em>PYTHONPATH</em> Variable</span></a></h2>
<p>The PYTHONPATH is an environment variable, consisting of a list of directories. The syntax of PYTHONPATH is the same as that of the shell variable PATH.</p>
<p>Here is a typical PYTHONPATH from a Windows system −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PYTHONPATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ython20</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>And here is a typical PYTHONPATH from a UNIX system −</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PYTHONPATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/lib/python</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="namespaces-and-scoping" tabindex="-1"><a class="header-anchor" href="#namespaces-and-scoping"><span>Namespaces and Scoping</span></a></h2>
<p>Variables are names (identifiers) that map to objects. A <em>namespace</em> is a dictionary of variable names (keys) and their corresponding objects (values).</p>
<p>A Python statement can access variables in a <em>local namespace</em> and in the <em>global namespace</em>. If a local and a global variable have the same name, the local variable shadows the global variable.</p>
<p>Each function has its own local namespace. Class methods follow the same scoping rule as ordinary functions.</p>
<p>Python makes educated guesses on whether variables are local or global. It assumes that any variable assigned a value in a function is local.</p>
<p>Therefore, in order to assign a value to a global variable within a function, you must first use the global statement.</p>
<p>The statement <em>global VarName</em> tells Python that VarName is a global variable. Python stops searching the local namespace for the variable.</p>
<p>For example, we define a variable <em>Money</em> in the global namespace. Within the function <em>Money</em>, we assign <em>Money</em> a value, therefore Python assumes <em>Money</em> as a local variable. However, we accessed the value of the local variable <em>Money</em> before setting it, so an UnboundLocalError is the result. Uncommenting the global statement fixes the problem.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Money</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">def</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> AddMoney</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   # Uncomment the following line to fix the code:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   # global Money</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   Money</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Money</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Money</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AddMoney</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Money</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-dir-function" tabindex="-1"><a class="header-anchor" href="#the-dir-function"><span>The dir( ) Function</span></a></h2>
<p>The dir() built-in function returns a sorted list of strings containing the names defined by a module.</p>
<p>The list contains the names of all the modules, variables and functions that are defined in a module. Following is a simple example −</p>
<p><a href="http://tpcg.io/ZoifUr" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Import built-in module math</span></span>
<span class="line"><span>import math</span></span>
<span class="line"><span></span></span>
<span class="line"><span>content = dir(math)</span></span>
<span class="line"><span>print content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>['__doc__', '__file__', '__name__', 'acos', 'asin', 'atan',</span></span>
<span class="line"><span>'atan2', 'ceil', 'cos', 'cosh', 'degrees', 'e', 'exp',</span></span>
<span class="line"><span>'fabs', 'floor', 'fmod', 'frexp', 'hypot', 'ldexp', 'log',</span></span>
<span class="line"><span>'log10', 'modf', 'pi', 'pow', 'radians', 'sin', 'sinh',</span></span>
<span class="line"><span>'sqrt', 'tan', 'tanh']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the special string variable <em><strong>name</strong></em> is the module's name, and <em><strong>file</strong></em> is the filename from which the module was loaded.</p>
<h2 id="the-globals-and-locals-functions" tabindex="-1"><a class="header-anchor" href="#the-globals-and-locals-functions"><span>The <em>globals()</em> and <em>locals()</em> Functions</span></a></h2>
<p>The <em>globals()</em> and <em>locals()</em> functions can be used to return the names in the global and local namespaces depending on the location from where they are called.</p>
<p>If locals() is called from within a function, it will return all the names that can be accessed locally from that function.</p>
<p>If globals() is called from within a function, it will return all the names that can be accessed globally from that function.</p>
<p>The return type of both these functions is dictionary. Therefore, names can be extracted using the keys() function.</p>
<h2 id="the-reload-function" tabindex="-1"><a class="header-anchor" href="#the-reload-function"><span>The <em>reload()</em> Function</span></a></h2>
<p>When the module is imported into a script, the code in the top-level portion of a module is executed only once.</p>
<p>Therefore, if you want to reexecute the top-level code in a module, you can use the <em>reload()</em> function. The reload() function imports a previously imported module again. The syntax of the reload() function is this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>reload(module_name)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, <em>module_name</em> is the name of the module you want to reload and not the string containing the module name. For example, to reload <em>hello</em> module, do the following −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>reload(hello)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="packages-in-python" tabindex="-1"><a class="header-anchor" href="#packages-in-python"><span>Packages in Python</span></a></h2>
<p>A package is a hierarchical file directory structure that defines a single Python application environment that consists of modules and subpackages and sub-subpackages, and so on.</p>
<p>Consider a file <em>Pots.py</em> available in <em>Phone</em> directory. This file has following line of source code −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Pots():</span></span>
<span class="line"><span>   print "I'm Pots Phone"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar way, we have another two files having different functions with the same name as above −</p>
<ul>
<li><em>Phone/Isdn.py</em> file having function Isdn()</li>
<li><em>Phone/G3.py</em> file having function G3()</li>
</ul>
<p>Now, create one more file <strong>init</strong>.py in <em>Phone</em> directory −</p>
<ul>
<li>Phone/<strong>init</strong>.py</li>
</ul>
<p>To make all of your functions available when you've imported Phone, you need to put explicit import statements in <strong>init</strong>.py as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>from Pots import Pots</span></span>
<span class="line"><span>from Isdn import Isdn</span></span>
<span class="line"><span>from G3 import G3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After you add these lines to <strong>init</strong>.py, you have all of these classes available when you import the Phone package.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Now import your Phone Package.</span></span>
<span class="line"><span>import Phone</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Phone.Pots()</span></span>
<span class="line"><span>Phone.Isdn()</span></span>
<span class="line"><span>Phone.G3()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>I'm Pots Phone</span></span>
<span class="line"><span>I'm 3G Phone</span></span>
<span class="line"><span>I'm ISDN Phone</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, we have taken example of a single functions in each file, but you can keep multiple functions in your files. You can also define different Python classes in those files and then you can create your packages out of those classes.</p>
</div></template>


