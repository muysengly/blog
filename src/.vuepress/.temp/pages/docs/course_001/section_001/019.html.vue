<template><div><p>Python has been an object-oriented language since it existed. Because of this, creating and using classes and objects are downright easy. This chapter helps you become an expert in using Python's object-oriented programming support.</p>
<p>If you do not have any previous experience with object-oriented (OO) programming, you may want to consult an introductory course on it or at least a tutorial of some sort so that you have a grasp of the basic concepts.</p>
<p>However, here is small introduction of Object-Oriented Programming (OOP) to bring you at speed −</p>
<h2 id="overview-of-oop-terminology" tabindex="-1"><a class="header-anchor" href="#overview-of-oop-terminology"><span>Overview of OOP Terminology</span></a></h2>
<ul>
<li><strong>Class</strong> − A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.</li>
<li><strong>Class variable</strong> − A variable that is shared by all instances of a class. Class variables are defined within a class but outside any of the class's methods. Class variables are not used as frequently as instance variables are.</li>
<li><strong>Data member</strong> − A class variable or instance variable that holds data associated with a class and its objects.</li>
<li><strong>Function overloading</strong> − The assignment of more than one behavior to a particular function. The operation performed varies by the types of objects or arguments involved.</li>
<li><strong>Instance variable</strong> − A variable that is defined inside a method and belongs only to the current instance of a class.</li>
<li><strong>Inheritance</strong> − The transfer of the characteristics of a class to other classes that are derived from it.</li>
<li><strong>Instance</strong> − An individual object of a certain class. An object obj that belongs to a class Circle, for example, is an instance of the class Circle.</li>
<li><strong>Instantiation</strong> − The creation of an instance of a class.</li>
<li><strong>Method</strong> − A special kind of function that is defined in a class definition.</li>
<li><strong>Object</strong> − A unique instance of a data structure that's defined by its class. An object comprises both data members (class variables and instance variables) and methods.</li>
<li><strong>Operator overloading</strong> − The assignment of more than one function to a particular operator.</li>
</ul>
<h2 id="creating-classes" tabindex="-1"><a class="header-anchor" href="#creating-classes"><span>Creating Classes</span></a></h2>
<p>The <em>class</em> statement creates a new class definition. The name of the class immediately follows the keyword <em>class</em> followed by a colon as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class ClassName:</span></span>
<span class="line"><span>'Optional class documentation string'</span></span>
<span class="line"><span>class_suite</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The class has a documentation string, which can be accessed via <em>ClassName.<strong>doc</strong></em>.</li>
<li>The <em>class_suite</em> consists of all the component statements defining class members, data attributes and functions.</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>Following is the example of a simple Python class −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class Employee:</span></span>
<span class="line"><span>   'Common base class for all employees'</span></span>
<span class="line"><span>   empCount = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def __init__(self, name, salary):</span></span>
<span class="line"><span>      self.name = name</span></span>
<span class="line"><span>      self.salary = salary</span></span>
<span class="line"><span>      Employee.empCount += 1</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   def displayCount(self):</span></span>
<span class="line"><span>     print "Total Employee %d" % Employee.empCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def displayEmployee(self):</span></span>
<span class="line"><span>      print "Name : ", self.name,  ", Salary: ", self.salary</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The variable <em>empCount</em> is a class variable whose value is shared among all instances of a this class. This can be accessed as <em>Employee.empCount</em> from inside the class or outside the class.</li>
<li>The first method <em><strong>init</strong>()</em> is a special method, which is called class constructor or initialization method that Python calls when you create a new instance of this class.</li>
<li>You declare other class methods like normal functions with the exception that the first argument to each method is <em>self</em>. Python adds the <em>self</em> argument to the list for you; you do not need to include it when you call the methods.</li>
</ul>
<h2 id="creating-instance-objects" tabindex="-1"><a class="header-anchor" href="#creating-instance-objects"><span>Creating Instance Objects</span></a></h2>
<p>To create instances of a class, you call the class using class name and pass in whatever arguments its <em><strong>init</strong></em> method accepts.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>"This would create first object of Employee class"</span></span>
<span class="line"><span>emp1 = Employee("Zara", 2000)</span></span>
<span class="line"><span>"This would create second object of Employee class"</span></span>
<span class="line"><span>emp2 = Employee("Manni", 5000)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="accessing-attributes" tabindex="-1"><a class="header-anchor" href="#accessing-attributes"><span>Accessing Attributes</span></a></h2>
<p>You access the object's attributes using the dot operator with object. Class variable would be accessed using class name as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>emp1.displayEmployee()</span></span>
<span class="line"><span>emp2.displayEmployee()</span></span>
<span class="line"><span>print "Total Employee %d" % Employee.empCount</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, putting all the concepts together −</p>
<p><a href="http://tpcg.io/hbnZb4" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Employee:</span></span>
<span class="line"><span>   'Common base class for all employees'</span></span>
<span class="line"><span>   empCount = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def __init__(self, name, salary):</span></span>
<span class="line"><span>      self.name = name</span></span>
<span class="line"><span>      self.salary = salary</span></span>
<span class="line"><span>      Employee.empCount += 1</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   def displayCount(self):</span></span>
<span class="line"><span>     print "Total Employee %d" % Employee.empCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def displayEmployee(self):</span></span>
<span class="line"><span>      print "Name : ", self.name,  ", Salary: ", self.salary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>"This would create first object of Employee class"</span></span>
<span class="line"><span>emp1 = Employee("Zara", 2000)</span></span>
<span class="line"><span>"This would create second object of Employee class"</span></span>
<span class="line"><span>emp2 = Employee("Manni", 5000)</span></span>
<span class="line"><span>emp1.displayEmployee()</span></span>
<span class="line"><span>emp2.displayEmployee()</span></span>
<span class="line"><span>print "Total Employee %d" % Employee.empCount</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Name : Zara ,Salary: 2000</span></span>
<span class="line"><span>Name : Manni ,Salary: 5000</span></span>
<span class="line"><span>Total Employee 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add, remove, or modify attributes of classes and objects at any time −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>emp1.age = 7 # Add an 'age' attribute.</span></span>
<span class="line"><span>emp1.age = 8 # Modify 'age' attribute.</span></span>
<span class="line"><span>del emp1.age # Delete 'age' attribute.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead of using the normal statements to access attributes, you can use the following functions −</p>
<ul>
<li>The <strong>getattr(obj, name[, default])</strong> − to access the attribute of object.</li>
<li>The <strong>hasattr(obj,name)</strong> − to check if an attribute exists or not.</li>
<li>The <strong>setattr(obj,name,value)</strong> − to set an attribute. If attribute does not exist, then it would be created.</li>
<li>The <strong>delattr(obj, name)</strong> − to delete an attribute.</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>hasattr(emp1, 'age') # Returns true if 'age' attribute exists</span></span>
<span class="line"><span>getattr(emp1, 'age') # Returns value of 'age' attribute</span></span>
<span class="line"><span>setattr(emp1, 'age', 8) # Set attribute 'age' at 8</span></span>
<span class="line"><span>delattr(empl, 'age') # Delete attribute 'age'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="built-in-class-attributes" tabindex="-1"><a class="header-anchor" href="#built-in-class-attributes"><span>Built-In Class Attributes</span></a></h2>
<p>Every Python class keeps following built-in attributes and they can be accessed using dot operator like any other attribute −</p>
<ul>
<li><strong><strong>dict</strong></strong> − Dictionary containing the class's namespace.</li>
<li><strong><strong>doc</strong></strong> − Class documentation string or none, if undefined.</li>
<li><strong><strong>name</strong></strong> − Class name.</li>
<li><strong><strong>module</strong></strong> − Module name in which the class is defined. This attribute is &quot;<strong>main</strong>&quot; in interactive mode.</li>
<li><strong><strong>bases</strong></strong> − A possibly empty tuple containing the base classes, in the order of their occurrence in the base class list.</li>
</ul>
<p>For the above class let us try to access all these attributes −</p>
<p><a href="http://tpcg.io/CESJr8" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Employee:</span></span>
<span class="line"><span>   'Common base class for all employees'</span></span>
<span class="line"><span>   empCount = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def __init__(self, name, salary):</span></span>
<span class="line"><span>      self.name = name</span></span>
<span class="line"><span>      self.salary = salary</span></span>
<span class="line"><span>      Employee.empCount += 1</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   def displayCount(self):</span></span>
<span class="line"><span>     print "Total Employee %d" % Employee.empCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def displayEmployee(self):</span></span>
<span class="line"><span>      print "Name : ", self.name,  ", Salary: ", self.salary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print "Employee.__doc__:", Employee.__doc__</span></span>
<span class="line"><span>print "Employee.__name__:", Employee.__name__</span></span>
<span class="line"><span>print "Employee.__module__:", Employee.__module__</span></span>
<span class="line"><span>print "Employee.__bases__:", Employee.__bases__</span></span>
<span class="line"><span>print "Employee.__dict__:", Employee.__dict__</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Employee.__doc__: Common base class for all employees</span></span>
<span class="line"><span>Employee.__name__: Employee</span></span>
<span class="line"><span>Employee.__module__: __main__</span></span>
<span class="line"><span>Employee.__bases__: ()</span></span>
<span class="line"><span>Employee.__dict__: {'__module__': '__main__', 'displayCount':</span></span>
<span class="line"><span>&#x3C;function displayCount at 0xb7c84994>, 'empCount': 2,</span></span>
<span class="line"><span>'displayEmployee': &#x3C;function displayEmployee at 0xb7c8441c>,</span></span>
<span class="line"><span>'__doc__': 'Common base class for all employees',</span></span>
<span class="line"><span>'__init__': &#x3C;function __init__ at 0xb7c846bc>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="destroying-objects-garbage-collection" tabindex="-1"><a class="header-anchor" href="#destroying-objects-garbage-collection"><span>Destroying Objects (Garbage Collection)</span></a></h2>
<p>Python deletes unneeded objects (built-in types or class instances) automatically to free the memory space. The process by which Python periodically reclaims blocks of memory that no longer are in use is termed Garbage Collection.</p>
<p>Python's garbage collector runs during program execution and is triggered when an object's reference count reaches zero. An object's reference count changes as the number of aliases that point to it changes.</p>
<p>An object's reference count increases when it is assigned a new name or placed in a container (list, tuple, or dictionary). The object's reference count decreases when it's deleted with <em>del</em>, its reference is reassigned, or its reference goes out of scope. When an object's reference count reaches zero, Python collects it automatically.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>a = 40 # Create object &#x3C;40></span></span>
<span class="line"><span>b = a # Increase ref. count of &#x3C;40></span></span>
<span class="line"><span>c = [b] # Increase ref. count of &#x3C;40></span></span>
<span class="line"><span></span></span>
<span class="line"><span>del a # Decrease ref. count of &#x3C;40></span></span>
<span class="line"><span>b = 100 # Decrease ref. count of &#x3C;40></span></span>
<span class="line"><span>c[0] = -1 # Decrease ref. count of &#x3C;40></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You normally will not notice when the garbage collector destroys an orphaned instance and reclaims its space. But a class can implement the special method <em><strong>del</strong>()</em>, called a destructor, that is invoked when the instance is about to be destroyed. This method might be used to clean up any non memory resources used by an instance.</p>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>This <strong>del</strong>() destructor prints the class name of an instance that is about to be destroyed −</p>
<p><a href="http://tpcg.io/x2iiCA" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Point:</span></span>
<span class="line"><span>   def __init__( self, x=0, y=0):</span></span>
<span class="line"><span>      self.x = x</span></span>
<span class="line"><span>      self.y = y</span></span>
<span class="line"><span>   def __del__(self):</span></span>
<span class="line"><span>      class_name = self.__class__.__name__</span></span>
<span class="line"><span>      print class_name, "destroyed"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pt1 = Point()</span></span>
<span class="line"><span>pt2 = pt1</span></span>
<span class="line"><span>pt3 = pt1</span></span>
<span class="line"><span>print id(pt1), id(pt2), id(pt3) # prints the ids of the obejcts</span></span>
<span class="line"><span>del pt1</span></span>
<span class="line"><span>del pt2</span></span>
<span class="line"><span>del pt3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>3083401324 3083401324 3083401324</span></span>
<span class="line"><span>Point destroyed</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong> − Ideally, you should define your classes in separate file, then you should import them in your main program file using <em>import</em> statement.</p>
<h2 id="class-inheritance" tabindex="-1"><a class="header-anchor" href="#class-inheritance"><span>Class Inheritance</span></a></h2>
<p>Instead of starting from scratch, you can create a class by deriving it from a preexisting class by listing the parent class in parentheses after the new class name.</p>
<p>The child class inherits the attributes of its parent class, and you can use those attributes as if they were defined in the child class. A child class can also override data members and methods from the parent.</p>
<h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h3>
<p>Derived classes are declared much like their parent class; however, a list of base classes to inherit from is given after the class name −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class SubClassName (ParentClass1[, ParentClass2, ...]):</span></span>
<span class="line"><span>   'Optional class documentation string'</span></span>
<span class="line"><span>   class_suite</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/6qlvTh" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Parent:        # define parent class</span></span>
<span class="line"><span>   parentAttr = 100</span></span>
<span class="line"><span>   def __init__(self):</span></span>
<span class="line"><span>      print "Calling parent constructor"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def parentMethod(self):</span></span>
<span class="line"><span>      print 'Calling parent method'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def setAttr(self, attr):</span></span>
<span class="line"><span>      Parent.parentAttr = attr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def getAttr(self):</span></span>
<span class="line"><span>      print "Parent attribute :", Parent.parentAttr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Child(Parent): # define child class</span></span>
<span class="line"><span>   def __init__(self):</span></span>
<span class="line"><span>      print "Calling child constructor"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def childMethod(self):</span></span>
<span class="line"><span>      print 'Calling child method'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c = Child()          # instance of child</span></span>
<span class="line"><span>c.childMethod()      # child calls its method</span></span>
<span class="line"><span>c.parentMethod()     # calls parent's method</span></span>
<span class="line"><span>c.setAttr(200)       # again call parent's method</span></span>
<span class="line"><span>c.getAttr()          # again call parent's method</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Calling child constructor</span></span>
<span class="line"><span>Calling child method</span></span>
<span class="line"><span>Calling parent method</span></span>
<span class="line"><span>Parent attribute : 200</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar way, you can drive a class from multiple parent classes as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class A: # define your class A</span></span>
<span class="line"><span>.....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class B: # define your class B</span></span>
<span class="line"><span>.....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class C(A, B): # subclass of A and B</span></span>
<span class="line"><span>.....</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use issubclass() or isinstance() functions to check a relationships of two classes and instances.</p>
<ul>
<li>The <strong>issubclass(sub, sup)</strong> boolean function returns true if the given subclass <strong>sub</strong> is indeed a subclass of the superclass <strong>sup</strong>.</li>
<li>The <strong>isinstance(obj, Class)</strong> boolean function returns true if <em>obj</em> is an instance of class <em>Class</em> or is an instance of a subclass of Class</li>
</ul>
<h2 id="overriding-methods" tabindex="-1"><a class="header-anchor" href="#overriding-methods"><span>Overriding Methods</span></a></h2>
<p>You can always override your parent class methods. One reason for overriding parent's methods is because you may want special or different functionality in your subclass.</p>
<h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/94KY94" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Parent:        # define parent class</span></span>
<span class="line"><span>   def myMethod(self):</span></span>
<span class="line"><span>      print 'Calling parent method'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Child(Parent): # define child class</span></span>
<span class="line"><span>   def myMethod(self):</span></span>
<span class="line"><span>      print 'Calling child method'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c = Child()          # instance of child</span></span>
<span class="line"><span>c.myMethod()         # child calls overridden method</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Calling child method</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="base-overloading-methods" tabindex="-1"><a class="header-anchor" href="#base-overloading-methods"><span>Base Overloading Methods</span></a></h2>
<p>Following table lists some generic functionality that you can override in your own classes −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Method, Description &amp; Sample Call</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**<strong>init</strong> ( self [,args...] )**Constructor (with any optional arguments)Sample Call : <em>obj = className(args)</em></td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**<strong>del</strong>( self )**Destructor, deletes an objectSample Call : <em>del obj</em></td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**<strong>repr</strong>( self )**Evaluable string representationSample Call : <em>repr(obj)</em></td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**<strong>str</strong>( self )**Printable string representationSample Call : <em>str(obj)</em></td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**<strong>cmp</strong> ( self, x )**Object comparisonSample Call : <em>cmp(obj, x)</em></td>
</tr>
</tbody>
</table>
<h2 id="overloading-operators" tabindex="-1"><a class="header-anchor" href="#overloading-operators"><span>Overloading Operators</span></a></h2>
<p>Suppose you have created a Vector class to represent two-dimensional vectors, what happens when you use the plus operator to add them? Most likely Python will yell at you.</p>
<p>You could, however, define the <em><strong>add</strong></em> method in your class to perform vector addition and then the plus operator would behave as per expectation −</p>
<h3 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/HNbb5f" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Vector:</span></span>
<span class="line"><span>   def __init__(self, a, b):</span></span>
<span class="line"><span>      self.a = a</span></span>
<span class="line"><span>      self.b = b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   def __str__(self):</span></span>
<span class="line"><span>      return 'Vector (%d, %d)' % (self.a, self.b)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   def __add__(self,other):</span></span>
<span class="line"><span>      return Vector(self.a + other.a, self.b + other.b)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1 = Vector(2,10)</span></span>
<span class="line"><span>v2 = Vector(5,-2)</span></span>
<span class="line"><span>print v1 + v2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Vector(7,8)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="data-hiding" tabindex="-1"><a class="header-anchor" href="#data-hiding"><span>Data Hiding</span></a></h2>
<p>An object's attributes may or may not be visible outside the class definition. You need to name attributes with a double underscore prefix, and those attributes then are not be directly visible to outsiders.</p>
<h3 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example</span></a></h3>
<p><a href="http://tpcg.io/T0JYMC" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class JustCounter:</span></span>
<span class="line"><span>   __secretCount = 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>   def count(self):</span></span>
<span class="line"><span>      self.__secretCount += 1</span></span>
<span class="line"><span>      print self.__secretCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>counter = JustCounter()</span></span>
<span class="line"><span>counter.count()</span></span>
<span class="line"><span>counter.count()</span></span>
<span class="line"><span>print counter.__secretCount</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>File "test.py", line 12, in &#x3C;module></span></span>
<span class="line"><span>print counter.__secretCount</span></span>
<span class="line"><span>AttributeError: JustCounter instance has no attribute '__secretCount'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python protects those members by internally changing the name to include the class name. You can access such attributes as <em>object._className__attrName</em>. If you would replace your last line as following, then it works for you −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.........................</span></span>
<span class="line"><span>print counter._JustCounter__secretCount</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>When the above code is executed, it produces the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


