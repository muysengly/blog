"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[8494],{2380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Document 001/026","title":"26. XML Processing","description":"XML is...","source":"@site/docs/Document 001/026.md","sourceDirName":"Document 001","slug":"/Document 001/026","permalink":"/blog/docs/Document 001/026","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"26. XML Processing","description":"XML is...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":26},"sidebar":"sidebar_doc_001","previous":{"title":"25. Multithreaded Programming","permalink":"/blog/docs/Document 001/025"},"next":{"title":"27. GUI Programming (Tkinter)","permalink":"/blog/docs/Document 001/027"}}');var i=t(4848),s=t(8453);const a={title:"26. XML Processing",description:"XML is...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:26},o=void 0,l={},d=[{value:"What is XML?",id:"what-is-xml",level:2},{value:"XML Parser Architectures and APIs",id:"xml-parser-architectures-and-apis",level:2},{value:"Parsing XML with SAX APIs",id:"parsing-xml-with-sax-apis",level:2},{value:"The <em>make_parser</em> Method",id:"the-make_parser-method",level:2},{value:"The <em>parse</em> Method",id:"the-parse-method",level:2},{value:"The <em>parseString</em> Method",id:"the-parsestring-method",level:2},{value:"Example",id:"example",level:3},{value:"Parsing XML with DOM APIs",id:"parsing-xml-with-dom-apis",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"XML is a portable, open source language that allows programmers to develop applications that can be read by other applications, regardless of operating system and/or developmental language."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-xml",children:"What is XML?"}),"\n",(0,i.jsx)(n.p,{children:"The Extensible Markup Language (XML) is a markup language much like HTML or SGML. This is recommended by the World Wide Web Consortium and available as an open standard."}),"\n",(0,i.jsx)(n.p,{children:"XML is extremely useful for keeping track of small to medium amounts of data without requiring a SQL-based backbone."}),"\n",(0,i.jsx)(n.h2,{id:"xml-parser-architectures-and-apis",children:"XML Parser Architectures and APIs"}),"\n",(0,i.jsx)(n.p,{children:"The Python standard library provides a minimal but useful set of interfaces to work with XML."}),"\n",(0,i.jsx)(n.p,{children:"The two most basic and broadly used APIs to XML data are the SAX and DOM interfaces."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simple API for XML (SAX)"})," \u2212 Here, you register callbacks for events of interest and then let the parser proceed through the document. This is useful when your documents are large or you have memory limitations, it parses the file as it reads it from disk and the entire file is never stored in memory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Document Object Model (DOM) API"})," \u2212 This is a World Wide Web Consortium recommendation wherein the entire file is read into memory and stored in a hierarchical (tree-based) form to represent all the features of an XML document."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SAX obviously cannot process information as fast as DOM can when working with large files. On the other hand, using DOM exclusively can really kill your resources, especially if used on a lot of small files."}),"\n",(0,i.jsx)(n.p,{children:"SAX is read-only, while DOM allows changes to the XML file. Since these two different APIs literally complement each other, there is no reason why you cannot use them both for large projects."}),"\n",(0,i.jsxs)(n.p,{children:["For all our XML code examples, let's use a simple XML file ",(0,i.jsx)(n.em,{children:"movies.xml"})," as an input \u2212"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<collection shelf="New Arrivals">\n<movie title="Enemy Behind">\n   <type>War, Thriller</type>\n   <format>DVD</format>\n   <year>2003</year>\n   <rating>PG</rating>\n   <stars>10</stars>\n   <description>Talk about a US-Japan war</description>\n</movie>\n<movie title="Transformers">\n   <type>Anime, Science Fiction</type>\n   <format>DVD</format>\n   <year>1989</year>\n   <rating>R</rating>\n   <stars>8</stars>\n   <description>A schientific fiction</description>\n</movie>\n   <movie title="Trigun">\n   <type>Anime, Action</type>\n   <format>DVD</format>\n   <episodes>4</episodes>\n   <rating>PG</rating>\n   <stars>10</stars>\n   <description>Vash the Stampede!</description>\n</movie>\n<movie title="Ishtar">\n   <type>Comedy</type>\n   <format>VHS</format>\n   <rating>PG</rating>\n   <stars>2</stars>\n   <description>Viewable boredom</description>\n</movie>\n</collection>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"parsing-xml-with-sax-apis",children:"Parsing XML with SAX APIs"}),"\n",(0,i.jsx)(n.p,{children:"SAX is a standard interface for event-driven XML parsing. Parsing XML with SAX generally requires you to create your own ContentHandler by subclassing xml.sax.ContentHandler."}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.em,{children:"ContentHandler"})," handles the particular tags and attributes of your flavor(s) of XML. A ContentHandler object provides methods to handle various parsing events. Its owning parser calls ContentHandler methods as it parses the XML file."]}),"\n",(0,i.jsxs)(n.p,{children:["The methods ",(0,i.jsx)(n.em,{children:"startDocument"})," and ",(0,i.jsx)(n.em,{children:"endDocument"})," are called at the start and the end of the XML file. The method ",(0,i.jsx)(n.em,{children:"characters(text)"})," is passed character data of the XML file via the parameter text."]}),"\n",(0,i.jsxs)(n.p,{children:["The ContentHandler is called at the start and end of each element. If the parser is not in namespace mode, the methods ",(0,i.jsx)(n.em,{children:"startElement(tag, attributes)"})," and ",(0,i.jsx)(n.em,{children:"endElement(tag)"})," are called; otherwise, the corresponding methods ",(0,i.jsx)(n.em,{children:"startElementNS"})," and ",(0,i.jsx)(n.em,{children:"endElementNS"})," are called. Here, tag is the element tag, and attributes is an Attributes object."]}),"\n",(0,i.jsx)(n.p,{children:"Here are other important methods to understand before proceeding \u2212"}),"\n",(0,i.jsxs)(n.h2,{id:"the-make_parser-method",children:["The ",(0,i.jsx)(n.em,{children:"make_parser"})," Method"]}),"\n",(0,i.jsx)(n.p,{children:"Following method creates a new parser object and returns it. The parser object created will be of the first parser type the system finds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"xml.sax.make_parser( [parser_list] )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is the detail of the parameters \u2212"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"parser_list"})," \u2212 The optional argument consisting of a list of parsers to use which must all implement the make_parser method."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"the-parse-method",children:["The ",(0,i.jsx)(n.em,{children:"parse"})," Method"]}),"\n",(0,i.jsx)(n.p,{children:"Following method creates a SAX parser and uses it to parse a document."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"xml.sax.parse( xmlfile, contenthandler[, errorhandler])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is the detail of the parameters \u2212"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"xmlfile"})," \u2212 This is the name of the XML file to read from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"contenthandler"})," \u2212 This must be a ContentHandler object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"errorhandler"})," \u2212 If specified, errorhandler must be a SAX ErrorHandler object."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"the-parsestring-method",children:["The ",(0,i.jsx)(n.em,{children:"parseString"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["There is one more method to create a SAX parser and to parse the specified ",(0,i.jsx)(n.strong,{children:"XML string"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"xml.sax.parseString(xmlstring, contenthandler[, errorhandler])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is the detail of the parameters \u2212"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"xmlstring"})," \u2212 This is the name of the XML string to read from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"contenthandler"})," \u2212 This must be a ContentHandler object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"errorhandler"})," \u2212 If specified, errorhandler must be a SAX ErrorHandler object."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'#!/usr/bin/python\n\nimport xml.sax\n\nclass MovieHandler( xml.sax.ContentHandler ):\n   def __init__(self):\n      self.CurrentData = ""\n      self.type = ""\n      self.format = ""\n      self.year = ""\n      self.rating = ""\n      self.stars = ""\n      self.description = ""\n\n   # Call when an element starts\n   def startElement(self, tag, attributes):\n      self.CurrentData = tag\n      if tag == "movie":\n         print "*****Movie*****"\n         title = attributes["title"]\n         print "Title:", title\n\n   # Call when an elements ends\n   def endElement(self, tag):\n      if self.CurrentData == "type":\n         print "Type:", self.type\n      elif self.CurrentData == "format":\n         print "Format:", self.format\n      elif self.CurrentData == "year":\n         print "Year:", self.year\n      elif self.CurrentData == "rating":\n         print "Rating:", self.rating\n      elif self.CurrentData == "stars":\n         print "Stars:", self.stars\n      elif self.CurrentData == "description":\n         print "Description:", self.description\n      self.CurrentData = ""\n\n   # Call when a character is read\n   def characters(self, content):\n      if self.CurrentData == "type":\n         self.type = content\n      elif self.CurrentData == "format":\n         self.format = content\n      elif self.CurrentData == "year":\n         self.year = content\n      elif self.CurrentData == "rating":\n         self.rating = content\n      elif self.CurrentData == "stars":\n         self.stars = content\n      elif self.CurrentData == "description":\n         self.description = content\n  \nif ( __name__ == "__main__"):\n   \n   # create an XMLReader\n   parser = xml.sax.make_parser()\n   # turn off namepsaces\n   parser.setFeature(xml.sax.handler.feature_namespaces, 0)\n\n   # override the default ContextHandler\n   Handler = MovieHandler()\n   parser.setContentHandler( Handler )\n   \n   parser.parse("movies.xml")\n'})}),"\n",(0,i.jsx)(n.p,{children:"This would produce following result \u2212"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*****Movie*****\nTitle: Enemy Behind\nType: War, Thriller\nFormat: DVD\nYear: 2003\nRating: PG\nStars: 10\nDescription: Talk about a US-Japan war\n*****Movie*****\nTitle: Transformers\nType: Anime, Science Fiction\nFormat: DVD\nYear: 1989\nRating: R\nStars: 8\nDescription: A schientific fiction\n*****Movie*****\nTitle: Trigun\nType: Anime, Action\nFormat: DVD\nRating: PG\nStars: 10\nDescription: Vash the Stampede!\n*****Movie*****\nTitle: Ishtar\nType: Comedy\nFormat: VHS\nRating: PG\nStars: 2\nDescription: Viewable boredom\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a complete detail on SAX API documentation, please refer to standard ",(0,i.jsx)(n.a,{href:"http://docs.python.org/library/xml.sax.html",children:"Python SAX APIs"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"parsing-xml-with-dom-apis",children:"Parsing XML with DOM APIs"}),"\n",(0,i.jsx)(n.p,{children:'The Document Object Model ("DOM") is a cross-language API from the World Wide Web Consortium (W3C) for accessing and modifying XML documents.'}),"\n",(0,i.jsx)(n.p,{children:"The DOM is extremely useful for random-access applications. SAX only allows you a view of one bit of the document at a time. If you are looking at one SAX element, you have no access to another."}),"\n",(0,i.jsx)(n.p,{children:"Here is the easiest way to quickly load an XML document and to create a minidom object using the xml.dom module. The minidom object provides a simple parser method that quickly creates a DOM tree from the XML file."}),"\n",(0,i.jsx)(n.p,{children:"The sample phrase calls the parse( file [,parser] ) function of the minidom object to parse the XML file designated by file into a DOM tree object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'#!/usr/bin/python\n\nfrom xml.dom.minidom import parse\nimport xml.dom.minidom\n\n# Open XML document using minidom parser\nDOMTree = xml.dom.minidom.parse("movies.xml")\ncollection = DOMTree.documentElement\nif collection.hasAttribute("shelf"):\n   print "Root element : %s" % collection.getAttribute("shelf")\n\n# Get all the movies in the collection\nmovies = collection.getElementsByTagName("movie")\n\n# Print detail of each movie.\nfor movie in movies:\n   print "*****Movie*****"\n   if movie.hasAttribute("title"):\n      print "Title: %s" % movie.getAttribute("title")\n\n   type = movie.getElementsByTagName(\'type\')[0]\n   print "Type: %s" % type.childNodes[0].data\n   format = movie.getElementsByTagName(\'format\')[0]\n   print "Format: %s" % format.childNodes[0].data\n   rating = movie.getElementsByTagName(\'rating\')[0]\n   print "Rating: %s" % rating.childNodes[0].data\n   description = movie.getElementsByTagName(\'description\')[0]\n   print "Description: %s" % description.childNodes[0].data\n'})}),"\n",(0,i.jsx)(n.p,{children:"This would produce the following result \u2212"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Root element : New Arrivals\n*****Movie*****\nTitle: Enemy Behind\nType: War, Thriller\nFormat: DVD\nRating: PG\nDescription: Talk about a US-Japan war\n*****Movie*****\nTitle: Transformers\nType: Anime, Science Fiction\nFormat: DVD\nRating: R\nDescription: A schientific fiction\n*****Movie*****\nTitle: Trigun\nType: Anime, Action\nFormat: DVD\nRating: PG\nDescription: Vash the Stampede!\n*****Movie*****\nTitle: Ishtar\nType: Comedy\nFormat: VHS\nRating: PG\nDescription: Viewable boredom\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a complete detail on DOM API documentation, please refer to standard ",(0,i.jsx)(n.a,{href:"http://docs.python.org/library/xml.dom.html",children:"Python DOM APIs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);