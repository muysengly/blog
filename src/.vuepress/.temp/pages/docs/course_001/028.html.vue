<template><div><p>Any code that you write using any compiled language like C, C++, or Java can be integrated or imported into another Python script. This code is considered as an &quot;extension.&quot;</p>
<p>A Python extension module is nothing more than a normal C library. On Unix machines, these libraries usually end in <strong>.so</strong> (for shared object). On Windows machines, you typically see <strong>.dll</strong> (for dynamically linked library).</p>
<h2 id="pre-requisites-for-writing-extensions" tabindex="-1"><a class="header-anchor" href="#pre-requisites-for-writing-extensions"><span>Pre-Requisites for Writing Extensions</span></a></h2>
<p>To start writing your extension, you are going to need the Python header files.</p>
<ul>
<li>On Unix machines, this usually requires installing a developer-specific package such as <a href="http://packages.debian.org/etch-m68k/python2.5-dev" target="_blank" rel="noopener noreferrer">python2.5-dev</a>.</li>
<li>Windows users get these headers as part of the package when they use the binary Python installer.</li>
</ul>
<p>Additionally, it is assumed that you have good knowledge of C or C++ to write any Python Extension using C programming.</p>
<h2 id="first-look-at-a-python-extension" tabindex="-1"><a class="header-anchor" href="#first-look-at-a-python-extension"><span>First look at a Python Extension</span></a></h2>
<p>For your first look at a Python extension module, you need to group your code into four part −</p>
<ul>
<li>The header file <em>Python.h</em>.</li>
<li>The C functions you want to expose as the interface from your module.</li>
<li>A table mapping the names of your functions as Python developers see them to C functions inside the extension module.</li>
<li>An initialization function.</li>
</ul>
<h2 id="the-header-file-python-h" tabindex="-1"><a class="header-anchor" href="#the-header-file-python-h"><span>The Header File <em>Python.h</em></span></a></h2>
<p>You need include <em>Python.h</em> header file in your C source file, which gives you access to the internal Python API used to hook your module into the interpreter.</p>
<p>Make sure to include Python.h before any other headers you might need. You need to follow the includes with the functions you want to call from Python.</p>
<h2 id="the-c-functions" tabindex="-1"><a class="header-anchor" href="#the-c-functions"><span>The C Functions</span></a></h2>
<p>The signatures of the C implementation of your functions always takes one of the following three forms −</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MyFunctionWithKeywords</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">                                 PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">                                 PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">kw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MyFunctionWithNoArgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each one of the preceding declarations returns a Python object. There is no such thing as a <em>void</em> function in Python as there is in C. If you do not want your functions to return a value, return the C equivalent of Python's <strong>None</strong> value. The Python headers define a macro, Py_RETURN_NONE, that does this for us.</p>
<p>The names of your C functions can be whatever you like as they are never seen outside of the extension module. They are defined as <em>static</em> function.</p>
<p>Your C functions usually are named by combining the Python module and function names together, as shown here −</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">module_func</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> PyObject </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   /* Do your stuff here. */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   Py_RETURN_NONE;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a Python function called <em>func</em> inside of the module <em>module</em>. You will be putting pointers to your C functions into the method table for the module that usually comes next in your source code.</p>
<h2 id="the-method-mapping-table" tabindex="-1"><a class="header-anchor" href="#the-method-mapping-table"><span>The Method Mapping Table</span></a></h2>
<p>This method table is a simple array of PyMethodDef structures. That structure looks something like this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct PyMethodDef {</span></span>
<span class="line"><span>   char *ml_name;</span></span>
<span class="line"><span>   PyCFunction ml_meth;</span></span>
<span class="line"><span>   int ml_flags;</span></span>
<span class="line"><span>   char *ml_doc;</span></span>
<span class="line"><span>};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the description of the members of this structure −</p>
<ul>
<li><strong>ml_name</strong> − This is the name of the function as the Python interpreter presents when it is used in Python programs.</li>
<li><strong>ml_meth</strong> − This must be the address to a function that has any one of the signatures described in previous seection.</li>
<li><strong>ml_flags</strong> − This tells the interpreter which of the three signatures ml_meth is using.
<ul>
<li>This flag usually has a value of METH_VARARGS.</li>
<li>This flag can be bitwise OR'ed with METH_KEYWORDS if you want to allow keyword arguments into your function.</li>
<li>This can also have a value of METH_NOARGS that indicates you do not want to accept any arguments.</li>
</ul>
</li>
<li><strong>ml_doc</strong> − This is the docstring for the function, which could be NULL if you do not feel like writing one.</li>
</ul>
<p>This table needs to be terminated with a sentinel that consists of NULL and 0 values for the appropriate members.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>For the above-defined function, we have following method mapping table −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyMethodDef module_methods[] = {</span></span>
<span class="line"><span>   { "func", (PyCFunction)module_func, METH_NOARGS, NULL },</span></span>
<span class="line"><span>   { NULL, NULL, 0, NULL }</span></span>
<span class="line"><span>};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-initialization-function" tabindex="-1"><a class="header-anchor" href="#the-initialization-function"><span>The Initialization Function</span></a></h2>
<p>The last part of your extension module is the initialization function. This function is called by the Python interpreter when the module is loaded. It is required that the function be named <strong>init*Module*</strong>, where <em>Module</em> is the name of the module.</p>
<p>The initialization function needs to be exported from the library you will be building. The Python headers define PyMODINIT_FUNC to include the appropriate incantations for that to happen for the particular environment in which we're compiling. All you have to do is use it when defining the function.</p>
<p>Your C initialization function generally has the following overall structure −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PyMODINIT_FUNC initModule() {</span></span>
<span class="line"><span>   Py_InitModule3(func, module_methods, "docstring...");</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the description of <em>Py_InitModule3</em> function −</p>
<ul>
<li><strong>func</strong> − This is the function to be exported.</li>
<li>*<strong>module*_methods</strong> − This is the mapping table name defined above.</li>
<li>*<strong>docstring*</strong> − This is the comment you want to give in your extension.</li>
</ul>
<p>Putting this all together looks like the following −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include &#x3C;Python.h></span></span>
<span class="line"><span></span></span>
<span class="line"><span>static PyObject *module_func(PyObject *self, PyObject *args) {</span></span>
<span class="line"><span>   /* Do your stuff here. */</span></span>
<span class="line"><span>   Py_RETURN_NONE;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static PyMethodDef module_methods[] = {</span></span>
<span class="line"><span>   { "func", (PyCFunction)module_func, METH_NOARGS, NULL },</span></span>
<span class="line"><span>   { NULL, NULL, 0, NULL }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PyMODINIT_FUNC initModule() {</span></span>
<span class="line"><span>   Py_InitModule3(func, module_methods, "docstring...");</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>A simple example that makes use of all the above concepts −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include &#x3C;Python.h></span></span>
<span class="line"><span></span></span>
<span class="line"><span>static PyObject* helloworld(PyObject* self) {</span></span>
<span class="line"><span>   return Py_BuildValue("s", "Hello, Python extensions!!");</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static char helloworld_docs[] =</span></span>
<span class="line"><span>   "helloworld( ): Any message you want to put here!!\n";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static PyMethodDef helloworld_funcs[] = {</span></span>
<span class="line"><span>   {"helloworld", (PyCFunction)helloworld, </span></span>
<span class="line"><span>      METH_NOARGS, helloworld_docs},</span></span>
<span class="line"><span>      {NULL}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void inithelloworld(void) {</span></span>
<span class="line"><span>   Py_InitModule3("helloworld", helloworld_funcs,</span></span>
<span class="line"><span>                  "Extension module example!");</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here the <em>Py_BuildValue</em> function is used to build a Python value. Save above code in hello.c file. We would see how to compile and install this module to be called from Python script.</p>
<h2 id="building-and-installing-extensions" tabindex="-1"><a class="header-anchor" href="#building-and-installing-extensions"><span>Building and Installing Extensions</span></a></h2>
<p>The <em>distutils</em> package makes it very easy to distribute Python modules, both pure Python and extension modules, in a standard way. Modules are distributed in source form and built and installed via a setup script usually called <em>setup.py</em> as follows.</p>
<p>For the above module, you need to prepare following setup.py script −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>from distutils.core import setup, Extension</span></span>
<span class="line"><span>setup(name='helloworld', version='1.0',  \</span></span>
<span class="line"><span>      ext_modules=[Extension('helloworld', ['hello.c'])])</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, use the following command, which would perform all needed compilation and linking steps, with the right compiler and linker commands and flags, and copies the resulting dynamic library into an appropriate directory −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$python setup.py install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>On Unix-based systems, you'll most likely need to run this command as root in order to have permissions to write to the site-packages directory. This usually is not a problem on Windows.</p>
<h2 id="importing-extensions" tabindex="-1"><a class="header-anchor" href="#importing-extensions"><span>Importing Extensions</span></a></h2>
<p>Once you installed your extension, you would be able to import and call that extension in your Python script as follows −</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> helloworld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> helloworld.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">helloworld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result −</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> extensions!!</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="passing-function-parameters" tabindex="-1"><a class="header-anchor" href="#passing-function-parameters"><span>Passing Function Parameters</span></a></h2>
<p>As you will most likely want to define functions that accept arguments, you can use one of the other signatures for your C functions. For example, following function, that accepts some number of parameters, would be defined like this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyObject *module_func(PyObject *self, PyObject *args) {</span></span>
<span class="line"><span>   /* Parse args and do something interesting here. */</span></span>
<span class="line"><span>   Py_RETURN_NONE;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The method table containing an entry for the new function would look like this −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyMethodDef module_methods[] = {</span></span>
<span class="line"><span>   { "func", (PyCFunction)module_func, METH_NOARGS, NULL },</span></span>
<span class="line"><span>   { "func", module_func, METH_VARARGS, NULL },</span></span>
<span class="line"><span>   { NULL, NULL, 0, NULL }</span></span>
<span class="line"><span>};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use API <em>PyArg_ParseTuple</em> function to extract the arguments from the one PyObject pointer passed into your C function.</p>
<p>The first argument to PyArg_ParseTuple is the args argument. This is the object you will be <em>parsing</em>. The second argument is a format string describing the arguments as you expect them to appear. Each argument is represented by one or more characters in the format string as follows.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyObject *module_func(PyObject *self, PyObject *args) {</span></span>
<span class="line"><span>   int i;</span></span>
<span class="line"><span>   double d;</span></span>
<span class="line"><span>   char *s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!PyArg_ParseTuple(args, "ids", &#x26;i, &#x26;d, &#x26;s)) {</span></span>
<span class="line"><span>      return NULL;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   /* Do something interesting here. */</span></span>
<span class="line"><span>   Py_RETURN_NONE;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Compiling the new version of your module and importing it enables you to invoke the new function with any number of arguments of any type −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>module.func(1, s="three", d=2.0)</span></span>
<span class="line"><span>module.func(i=1, d=2.0, s="three")</span></span>
<span class="line"><span>module.func(s="three", d=2.0, i=1)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can probably come up with even more variations.</p>
<h2 id="the-pyarg-parsetuple-function" tabindex="-1"><a class="header-anchor" href="#the-pyarg-parsetuple-function"><span>The <em>PyArg_ParseTuple</em> Function</span></a></h2>
<p>Here is the standard signature for <strong>PyArg_ParseTuple</strong> function −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int PyArg_ParseTuple(PyObject* tuple,char* format,...)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This function returns 0 for errors, and a value not equal to 0 for success. tuple is the PyObject that was the C function's second argument. Here, format is a C string that describes mandatory and optional arguments.</p>
<p>Here is a list of format codes for <strong>PyArg_ParseTuple</strong> function −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Code</th>
<th style="text-align:center">C type</th>
<th style="text-align:center">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">c</td>
<td style="text-align:center">char</td>
<td style="text-align:center">A Python string of length 1 becomes a C char.</td>
</tr>
<tr>
<td style="text-align:center">d</td>
<td style="text-align:center">double</td>
<td style="text-align:center">A Python float becomes a C double.</td>
</tr>
<tr>
<td style="text-align:center">f</td>
<td style="text-align:center">float</td>
<td style="text-align:center">A Python float becomes a C float.</td>
</tr>
<tr>
<td style="text-align:center">i</td>
<td style="text-align:center">int</td>
<td style="text-align:center">A Python int becomes a C int.</td>
</tr>
<tr>
<td style="text-align:center">l</td>
<td style="text-align:center">long</td>
<td style="text-align:center">A Python int becomes a C long.</td>
</tr>
<tr>
<td style="text-align:center">L</td>
<td style="text-align:center">long long</td>
<td style="text-align:center">A Python int becomes a C long long</td>
</tr>
<tr>
<td style="text-align:center">O</td>
<td style="text-align:center">PyObject*</td>
<td style="text-align:center">Gets non-NULL borrowed reference to Python argument.</td>
</tr>
<tr>
<td style="text-align:center">s</td>
<td style="text-align:center">char*</td>
<td style="text-align:center">Python string without embedded nulls to C char*.</td>
</tr>
<tr>
<td style="text-align:center">s#</td>
<td style="text-align:center">char*+int</td>
<td style="text-align:center">Any Python string to C address and length.</td>
</tr>
<tr>
<td style="text-align:center">t#</td>
<td style="text-align:center">char*+int</td>
<td style="text-align:center">Read-only single-segment buffer to C address and length.</td>
</tr>
<tr>
<td style="text-align:center">u</td>
<td style="text-align:center">Py_UNICODE*</td>
<td style="text-align:center">Python Unicode without embedded nulls to C.</td>
</tr>
<tr>
<td style="text-align:center">u#</td>
<td style="text-align:center">Py_UNICODE*+int</td>
<td style="text-align:center">Any Python Unicode C address and length.</td>
</tr>
<tr>
<td style="text-align:center">w#</td>
<td style="text-align:center">char*+int</td>
<td style="text-align:center">Read/write single-segment buffer to C address and length.</td>
</tr>
<tr>
<td style="text-align:center">z</td>
<td style="text-align:center">char*</td>
<td style="text-align:center">Like s, also accepts None (sets C char* to NULL).</td>
</tr>
<tr>
<td style="text-align:center">z#</td>
<td style="text-align:center">char*+int</td>
<td style="text-align:center">Like s#, also accepts None (sets C char* to NULL).</td>
</tr>
<tr>
<td style="text-align:center">(...)</td>
<td style="text-align:center">as per ...</td>
<td style="text-align:center">A Python sequence is treated as one argument per item.</td>
</tr>
<tr>
<td style="text-align:center">|</td>
<td style="text-align:center"></td>
<td style="text-align:center">The following arguments are optional.</td>
</tr>
<tr>
<td style="text-align:center">:</td>
<td style="text-align:center"></td>
<td style="text-align:center">Format end, followed by function name for error messages.</td>
</tr>
<tr>
<td style="text-align:center">;</td>
<td style="text-align:center"></td>
<td style="text-align:center">Format end, followed by entire error message text.</td>
</tr>
</tbody>
</table>
<h2 id="returning-values" tabindex="-1"><a class="header-anchor" href="#returning-values"><span>Returning Values</span></a></h2>
<p><em>Py_BuildValue</em> takes in a format string much like <em>PyArg_ParseTuple</em> does. Instead of passing in the addresses of the values you are building, you pass in the actual values. Here's an example showing how to implement an add function −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyObject *foo_add(PyObject *self, PyObject *args) {</span></span>
<span class="line"><span>   int a;</span></span>
<span class="line"><span>   int b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!PyArg_ParseTuple(args, "ii", &#x26;a, &#x26;b)) {</span></span>
<span class="line"><span>      return NULL;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return Py_BuildValue("i", a + b);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is what it would look like if implemented in Python −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def add(a, b):</span></span>
<span class="line"><span>return (a + b)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can return two values from your function as follows, this would be cauptured using a list in Python.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>static PyObject *foo_add_subtract(PyObject *self, PyObject *args) {</span></span>
<span class="line"><span>   int a;</span></span>
<span class="line"><span>   int b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!PyArg_ParseTuple(args, "ii", &#x26;a, &#x26;b)) {</span></span>
<span class="line"><span>      return NULL;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return Py_BuildValue("ii", a + b, a - b);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is what it would look like if implemented in Python −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def add_subtract(a, b):</span></span>
<span class="line"><span>return (a + b, a - b)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-py-buildvalue-function" tabindex="-1"><a class="header-anchor" href="#the-py-buildvalue-function"><span>The <em>Py_BuildValue</em> Function</span></a></h2>
<p>Here is the standard signature for <strong>Py_BuildValue</strong> function −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PyObject* Py_BuildValue(char* format,...)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here <em>format</em> is a C string that describes the Python object to build. The following arguments of <em>Py_BuildValue</em> are C values from which the result is built. The <em>PyObject</em>* result is a new reference.</p>
<p>Following table lists the commonly used code strings, of which zero or more are joined into string format.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Code</th>
<th style="text-align:center">C type</th>
<th style="text-align:center">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>c</code></td>
<td style="text-align:center"><code v-pre>char</code></td>
<td style="text-align:center">A C char becomes a Python string of length 1.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>d</code></td>
<td style="text-align:center"><code v-pre>double</code></td>
<td style="text-align:center">A C double becomes a Python float.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>f</code></td>
<td style="text-align:center"><code v-pre>float</code></td>
<td style="text-align:center">A C float becomes a Python float.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>i</code></td>
<td style="text-align:center"><code v-pre>int</code></td>
<td style="text-align:center">A C int becomes a Python int.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>l</code></td>
<td style="text-align:center"><code v-pre>long</code></td>
<td style="text-align:center">A C long becomes a Python int.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>N</code></td>
<td style="text-align:center"><code v-pre>PyObject*</code></td>
<td style="text-align:center">Passes a Python object and steals a reference.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>O</code></td>
<td style="text-align:center"><code v-pre>PyObject*</code></td>
<td style="text-align:center">Passes a Python object and INCREFs it as normal.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>O&amp;</code></td>
<td style="text-align:center"><code v-pre>convert+void*</code></td>
<td style="text-align:center">Arbitrary conversion</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>s</code></td>
<td style="text-align:center"><code v-pre>char*</code></td>
<td style="text-align:center">C 0-terminated char* to Python string, or NULL to None.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>s#</code></td>
<td style="text-align:center"><code v-pre>char*+int</code></td>
<td style="text-align:center">C char* and length to Python string, or NULL to None.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>u</code></td>
<td style="text-align:center"><code v-pre>Py_UNICODE*</code></td>
<td style="text-align:center">C-wide, null-terminated string to Python Unicode, or NULL to None.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>u#</code></td>
<td style="text-align:center"><code v-pre>Py_UNICODE*+int</code></td>
<td style="text-align:center">C-wide string and length to Python Unicode, or NULL to None.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>w#</code></td>
<td style="text-align:center"><code v-pre>char*+int</code></td>
<td style="text-align:center">Read/write single-segment buffer to C address and length.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>z</code></td>
<td style="text-align:center"><code v-pre>char*</code></td>
<td style="text-align:center">Like s, also accepts None (sets C char* to NULL).</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>z#</code></td>
<td style="text-align:center"><code v-pre>char*+int</code></td>
<td style="text-align:center">Like s#, also accepts None (sets C char* to NULL).</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>(...)</code></td>
<td style="text-align:center">as per <code v-pre>...</code></td>
<td style="text-align:center">Builds Python tuple from C values.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>[...]</code></td>
<td style="text-align:center">as per <code v-pre>...</code></td>
<td style="text-align:center">Builds Python list from C values.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>{...}</code></td>
<td style="text-align:center">as per <code v-pre>...</code></td>
<td style="text-align:center">Builds Python dictionary from C values, alternating keys and values.</td>
</tr>
</tbody>
</table>
<p>Code <code v-pre>{...}</code> builds dictionaries from an even number of C values, alternately keys and values. For example, <code v-pre>Py_BuildValue(&quot;{issi}&quot;,23,&quot;zig&quot;,&quot;zag&quot;,42)</code> returns a dictionary like Python's <code v-pre>{23:'zig','zag':42}</code>.</p>
</div></template>


