<template><div><p>XML is a portable, open source language that allows programmers to develop applications that can be read by other applications, regardless of operating system and/or developmental language.</p>
<h2 id="what-is-xml" tabindex="-1"><a class="header-anchor" href="#what-is-xml"><span>What is XML?</span></a></h2>
<p>The Extensible Markup Language (XML) is a markup language much like HTML or SGML. This is recommended by the World Wide Web Consortium and available as an open standard.</p>
<p>XML is extremely useful for keeping track of small to medium amounts of data without requiring a SQL-based backbone.</p>
<h2 id="xml-parser-architectures-and-apis" tabindex="-1"><a class="header-anchor" href="#xml-parser-architectures-and-apis"><span>XML Parser Architectures and APIs</span></a></h2>
<p>The Python standard library provides a minimal but useful set of interfaces to work with XML.</p>
<p>The two most basic and broadly used APIs to XML data are the SAX and DOM interfaces.</p>
<ul>
<li><strong>Simple API for XML (SAX)</strong> − Here, you register callbacks for events of interest and then let the parser proceed through the document. This is useful when your documents are large or you have memory limitations, it parses the file as it reads it from disk and the entire file is never stored in memory.</li>
<li><strong>Document Object Model (DOM) API</strong> − This is a World Wide Web Consortium recommendation wherein the entire file is read into memory and stored in a hierarchical (tree-based) form to represent all the features of an XML document.</li>
</ul>
<p>SAX obviously cannot process information as fast as DOM can when working with large files. On the other hand, using DOM exclusively can really kill your resources, especially if used on a lot of small files.</p>
<p>SAX is read-only, while DOM allows changes to the XML file. Since these two different APIs literally complement each other, there is no reason why you cannot use them both for large projects.</p>
<p>For all our XML code examples, let's use a simple XML file <em>movies.xml</em> as an input −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;collection shelf="New Arrivals"></span></span>
<span class="line"><span>&#x3C;movie title="Enemy Behind"></span></span>
<span class="line"><span>   &#x3C;type>War, Thriller&#x3C;/type></span></span>
<span class="line"><span>   &#x3C;format>DVD&#x3C;/format></span></span>
<span class="line"><span>   &#x3C;year>2003&#x3C;/year></span></span>
<span class="line"><span>   &#x3C;rating>PG&#x3C;/rating></span></span>
<span class="line"><span>   &#x3C;stars>10&#x3C;/stars></span></span>
<span class="line"><span>   &#x3C;description>Talk about a US-Japan war&#x3C;/description></span></span>
<span class="line"><span>&#x3C;/movie></span></span>
<span class="line"><span>&#x3C;movie title="Transformers"></span></span>
<span class="line"><span>   &#x3C;type>Anime, Science Fiction&#x3C;/type></span></span>
<span class="line"><span>   &#x3C;format>DVD&#x3C;/format></span></span>
<span class="line"><span>   &#x3C;year>1989&#x3C;/year></span></span>
<span class="line"><span>   &#x3C;rating>R&#x3C;/rating></span></span>
<span class="line"><span>   &#x3C;stars>8&#x3C;/stars></span></span>
<span class="line"><span>   &#x3C;description>A schientific fiction&#x3C;/description></span></span>
<span class="line"><span>&#x3C;/movie></span></span>
<span class="line"><span>   &#x3C;movie title="Trigun"></span></span>
<span class="line"><span>   &#x3C;type>Anime, Action&#x3C;/type></span></span>
<span class="line"><span>   &#x3C;format>DVD&#x3C;/format></span></span>
<span class="line"><span>   &#x3C;episodes>4&#x3C;/episodes></span></span>
<span class="line"><span>   &#x3C;rating>PG&#x3C;/rating></span></span>
<span class="line"><span>   &#x3C;stars>10&#x3C;/stars></span></span>
<span class="line"><span>   &#x3C;description>Vash the Stampede!&#x3C;/description></span></span>
<span class="line"><span>&#x3C;/movie></span></span>
<span class="line"><span>&#x3C;movie title="Ishtar"></span></span>
<span class="line"><span>   &#x3C;type>Comedy&#x3C;/type></span></span>
<span class="line"><span>   &#x3C;format>VHS&#x3C;/format></span></span>
<span class="line"><span>   &#x3C;rating>PG&#x3C;/rating></span></span>
<span class="line"><span>   &#x3C;stars>2&#x3C;/stars></span></span>
<span class="line"><span>   &#x3C;description>Viewable boredom&#x3C;/description></span></span>
<span class="line"><span>&#x3C;/movie></span></span>
<span class="line"><span>&#x3C;/collection></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parsing-xml-with-sax-apis" tabindex="-1"><a class="header-anchor" href="#parsing-xml-with-sax-apis"><span>Parsing XML with SAX APIs</span></a></h2>
<p>SAX is a standard interface for event-driven XML parsing. Parsing XML with SAX generally requires you to create your own ContentHandler by subclassing xml.sax.ContentHandler.</p>
<p>Your <em>ContentHandler</em> handles the particular tags and attributes of your flavor(s) of XML. A ContentHandler object provides methods to handle various parsing events. Its owning parser calls ContentHandler methods as it parses the XML file.</p>
<p>The methods <em>startDocument</em> and <em>endDocument</em> are called at the start and the end of the XML file. The method <em>characters(text)</em> is passed character data of the XML file via the parameter text.</p>
<p>The ContentHandler is called at the start and end of each element. If the parser is not in namespace mode, the methods <em>startElement(tag, attributes)</em> and <em>endElement(tag)</em> are called; otherwise, the corresponding methods <em>startElementNS</em> and <em>endElementNS</em> are called. Here, tag is the element tag, and attributes is an Attributes object.</p>
<p>Here are other important methods to understand before proceeding −</p>
<h2 id="the-make-parser-method" tabindex="-1"><a class="header-anchor" href="#the-make-parser-method"><span>The <em>make_parser</em> Method</span></a></h2>
<p>Following method creates a new parser object and returns it. The parser object created will be of the first parser type the system finds.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>xml.sax.make_parser( [parser_list] )</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the detail of the parameters −</p>
<ul>
<li><strong>parser_list</strong> − The optional argument consisting of a list of parsers to use which must all implement the make_parser method.</li>
</ul>
<h2 id="the-parse-method" tabindex="-1"><a class="header-anchor" href="#the-parse-method"><span>The <em>parse</em> Method</span></a></h2>
<p>Following method creates a SAX parser and uses it to parse a document.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>xml.sax.parse( xmlfile, contenthandler[, errorhandler])</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the detail of the parameters −</p>
<ul>
<li><strong>xmlfile</strong> − This is the name of the XML file to read from.</li>
<li><strong>contenthandler</strong> − This must be a ContentHandler object.</li>
<li><strong>errorhandler</strong> − If specified, errorhandler must be a SAX ErrorHandler object.</li>
</ul>
<h2 id="the-parsestring-method" tabindex="-1"><a class="header-anchor" href="#the-parsestring-method"><span>The <em>parseString</em> Method</span></a></h2>
<p>There is one more method to create a SAX parser and to parse the specified <strong>XML string</strong>.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>xml.sax.parseString(xmlstring, contenthandler[, errorhandler])</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the detail of the parameters −</p>
<ul>
<li><strong>xmlstring</strong> − This is the name of the XML string to read from.</li>
<li><strong>contenthandler</strong> − This must be a ContentHandler object.</li>
<li><strong>errorhandler</strong> − If specified, errorhandler must be a SAX ErrorHandler object.</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import xml.sax</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MovieHandler( xml.sax.ContentHandler ):</span></span>
<span class="line"><span>   def __init__(self):</span></span>
<span class="line"><span>      self.CurrentData = ""</span></span>
<span class="line"><span>      self.type = ""</span></span>
<span class="line"><span>      self.format = ""</span></span>
<span class="line"><span>      self.year = ""</span></span>
<span class="line"><span>      self.rating = ""</span></span>
<span class="line"><span>      self.stars = ""</span></span>
<span class="line"><span>      self.description = ""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # Call when an element starts</span></span>
<span class="line"><span>   def startElement(self, tag, attributes):</span></span>
<span class="line"><span>      self.CurrentData = tag</span></span>
<span class="line"><span>      if tag == "movie":</span></span>
<span class="line"><span>         print "*****Movie*****"</span></span>
<span class="line"><span>         title = attributes["title"]</span></span>
<span class="line"><span>         print "Title:", title</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # Call when an elements ends</span></span>
<span class="line"><span>   def endElement(self, tag):</span></span>
<span class="line"><span>      if self.CurrentData == "type":</span></span>
<span class="line"><span>         print "Type:", self.type</span></span>
<span class="line"><span>      elif self.CurrentData == "format":</span></span>
<span class="line"><span>         print "Format:", self.format</span></span>
<span class="line"><span>      elif self.CurrentData == "year":</span></span>
<span class="line"><span>         print "Year:", self.year</span></span>
<span class="line"><span>      elif self.CurrentData == "rating":</span></span>
<span class="line"><span>         print "Rating:", self.rating</span></span>
<span class="line"><span>      elif self.CurrentData == "stars":</span></span>
<span class="line"><span>         print "Stars:", self.stars</span></span>
<span class="line"><span>      elif self.CurrentData == "description":</span></span>
<span class="line"><span>         print "Description:", self.description</span></span>
<span class="line"><span>      self.CurrentData = ""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # Call when a character is read</span></span>
<span class="line"><span>   def characters(self, content):</span></span>
<span class="line"><span>      if self.CurrentData == "type":</span></span>
<span class="line"><span>         self.type = content</span></span>
<span class="line"><span>      elif self.CurrentData == "format":</span></span>
<span class="line"><span>         self.format = content</span></span>
<span class="line"><span>      elif self.CurrentData == "year":</span></span>
<span class="line"><span>         self.year = content</span></span>
<span class="line"><span>      elif self.CurrentData == "rating":</span></span>
<span class="line"><span>         self.rating = content</span></span>
<span class="line"><span>      elif self.CurrentData == "stars":</span></span>
<span class="line"><span>         self.stars = content</span></span>
<span class="line"><span>      elif self.CurrentData == "description":</span></span>
<span class="line"><span>         self.description = content</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if ( __name__ == "__main__"):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   # create an XMLReader</span></span>
<span class="line"><span>   parser = xml.sax.make_parser()</span></span>
<span class="line"><span>   # turn off namepsaces</span></span>
<span class="line"><span>   parser.setFeature(xml.sax.handler.feature_namespaces, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # override the default ContextHandler</span></span>
<span class="line"><span>   Handler = MovieHandler()</span></span>
<span class="line"><span>   parser.setContentHandler( Handler )</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   parser.parse("movies.xml")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Enemy Behind</span></span>
<span class="line"><span>Type: War, Thriller</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Year: 2003</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Stars: 10</span></span>
<span class="line"><span>Description: Talk about a US-Japan war</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Transformers</span></span>
<span class="line"><span>Type: Anime, Science Fiction</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Year: 1989</span></span>
<span class="line"><span>Rating: R</span></span>
<span class="line"><span>Stars: 8</span></span>
<span class="line"><span>Description: A schientific fiction</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Trigun</span></span>
<span class="line"><span>Type: Anime, Action</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Stars: 10</span></span>
<span class="line"><span>Description: Vash the Stampede!</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Ishtar</span></span>
<span class="line"><span>Type: Comedy</span></span>
<span class="line"><span>Format: VHS</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Stars: 2</span></span>
<span class="line"><span>Description: Viewable boredom</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For a complete detail on SAX API documentation, please refer to standard <a href="http://docs.python.org/library/xml.sax.html" target="_blank" rel="noopener noreferrer">Python SAX APIs</a>.</p>
<h2 id="parsing-xml-with-dom-apis" tabindex="-1"><a class="header-anchor" href="#parsing-xml-with-dom-apis"><span>Parsing XML with DOM APIs</span></a></h2>
<p>The Document Object Model (&quot;DOM&quot;) is a cross-language API from the World Wide Web Consortium (W3C) for accessing and modifying XML documents.</p>
<p>The DOM is extremely useful for random-access applications. SAX only allows you a view of one bit of the document at a time. If you are looking at one SAX element, you have no access to another.</p>
<p>Here is the easiest way to quickly load an XML document and to create a minidom object using the xml.dom module. The minidom object provides a simple parser method that quickly creates a DOM tree from the XML file.</p>
<p>The sample phrase calls the parse( file [,parser] ) function of the minidom object to parse the XML file designated by file into a DOM tree object.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from xml.dom.minidom import parse</span></span>
<span class="line"><span>import xml.dom.minidom</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Open XML document using minidom parser</span></span>
<span class="line"><span>DOMTree = xml.dom.minidom.parse("movies.xml")</span></span>
<span class="line"><span>collection = DOMTree.documentElement</span></span>
<span class="line"><span>if collection.hasAttribute("shelf"):</span></span>
<span class="line"><span>   print "Root element : %s" % collection.getAttribute("shelf")</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Get all the movies in the collection</span></span>
<span class="line"><span>movies = collection.getElementsByTagName("movie")</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Print detail of each movie.</span></span>
<span class="line"><span>for movie in movies:</span></span>
<span class="line"><span>   print "*****Movie*****"</span></span>
<span class="line"><span>   if movie.hasAttribute("title"):</span></span>
<span class="line"><span>      print "Title: %s" % movie.getAttribute("title")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   type = movie.getElementsByTagName('type')[0]</span></span>
<span class="line"><span>   print "Type: %s" % type.childNodes[0].data</span></span>
<span class="line"><span>   format = movie.getElementsByTagName('format')[0]</span></span>
<span class="line"><span>   print "Format: %s" % format.childNodes[0].data</span></span>
<span class="line"><span>   rating = movie.getElementsByTagName('rating')[0]</span></span>
<span class="line"><span>   print "Rating: %s" % rating.childNodes[0].data</span></span>
<span class="line"><span>   description = movie.getElementsByTagName('description')[0]</span></span>
<span class="line"><span>   print "Description: %s" % description.childNodes[0].data</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce the following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Root element : New Arrivals</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Enemy Behind</span></span>
<span class="line"><span>Type: War, Thriller</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Description: Talk about a US-Japan war</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Transformers</span></span>
<span class="line"><span>Type: Anime, Science Fiction</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Rating: R</span></span>
<span class="line"><span>Description: A schientific fiction</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Trigun</span></span>
<span class="line"><span>Type: Anime, Action</span></span>
<span class="line"><span>Format: DVD</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Description: Vash the Stampede!</span></span>
<span class="line"><span>*****Movie*****</span></span>
<span class="line"><span>Title: Ishtar</span></span>
<span class="line"><span>Type: Comedy</span></span>
<span class="line"><span>Format: VHS</span></span>
<span class="line"><span>Rating: PG</span></span>
<span class="line"><span>Description: Viewable boredom</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For a complete detail on DOM API documentation, please refer to standard <a href="http://docs.python.org/library/xml.dom.html" target="_blank" rel="noopener noreferrer">Python DOM APIs</a>.</p>
</div></template>


