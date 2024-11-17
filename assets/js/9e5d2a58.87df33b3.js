"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[586],{3956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Document 001/018","title":"18. Exceptions Handling","description":"Python provides...","source":"@site/docs/Document 001/018.md","sourceDirName":"Document 001","slug":"/Document 001/018","permalink":"/docs/Document 001/018","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"18. Exceptions Handling","description":"Python provides...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":18},"sidebar":"sidebar_doc_001","previous":{"title":"17. Files I/O","permalink":"/docs/Document 001/017"},"next":{"title":"19. Object Oriented","permalink":"/docs/Document 001/019"}}');var s=n(4848),r=n(8453);const l={title:"18. Exceptions Handling",description:"Python provides...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:18},o=void 0,c={},a=[{value:"Assertions in Python",id:"assertions-in-python",level:3},{value:"The <em>assert</em> Statement",id:"the-assert-statement",level:3},{value:"Example",id:"example",level:3},{value:"What is Exception?",id:"what-is-exception",level:2},{value:"Handling an exception",id:"handling-an-exception",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example-1",level:3},{value:"Example",id:"example-2",level:3},{value:"The <em>except</em> Clause with No Exceptions",id:"the-except-clause-with-no-exceptions",level:2},{value:"The <em>except</em> Clause with Multiple Exceptions",id:"the-except-clause-with-multiple-exceptions",level:2},{value:"The try-finally Clause",id:"the-try-finally-clause",level:2},{value:"Example",id:"example-3",level:3},{value:"Argument of an Exception",id:"argument-of-an-exception",level:2},{value:"Example",id:"example-4",level:3},{value:"Raising an Exceptions",id:"raising-an-exceptions",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example",id:"example-5",level:3},{value:"User-Defined Exceptions",id:"user-defined-exceptions",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Python provides two very important features to handle any unexpected error in your Python programs and to add debugging capabilities in them \u2212"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Exception Handling"})," \u2212 This would be covered in this tutorial. Here is a list standard Exceptions available in Python: ",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/standard_exceptions.htm",children:"Standard Exceptions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Assertions"})," \u2212 This would be covered in ",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/assertions_in_python.htm",children:"Assertions in Python"})," tutorial."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"List of Standard Exceptions \u2212"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Exception Name & Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"Exception"}),"Base class for all exceptions"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"StopIteration"}),"Raised when the next() method of an iterator does not point to any object."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"SystemExit"}),"Raised by the sys.exit() function."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"StandardError"}),"Base class for all built-in exceptions except StopIteration and SystemExit."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"ArithmeticError"}),"Base class for all errors that occur for numeric calculation."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"OverflowError"}),"Raised when a calculation exceeds maximum limit for a numeric type."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"FloatingPointError"}),"Raised when a floating point calculation fails."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"ZeroDivisionError"}),"Raised when division or modulo by zero takes place for all numeric types."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"AssertionError"}),"Raised in case of failure of the Assert statement."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"AttributeError"}),"Raised in case of failure of attribute reference or assignment."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"EOFError"}),"Raised when there is no input from either the raw_input() or input() function and the end of file is reached."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"ImportError"}),"Raised when an import statement fails."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"13"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"KeyboardInterrupt"}),"Raised when the user interrupts program execution, usually by pressing Ctrl+c."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"LookupError"}),"Base class for all lookup errors."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"IndexError"}),"Raised when an index is not found in a sequence."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"16"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"KeyError"}),"Raised when the specified key is not found in the dictionary."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"17"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"NameError"}),"Raised when an identifier is not found in the local or global namespace."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"18"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"UnboundLocalError"}),"Raised when trying to access a local variable in a function or method but no value has been assigned to it."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"19"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"EnvironmentError"}),"Base class for all exceptions that occur outside the Python environment."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"IOError"}),"Raised when an input/ output operation fails, such as the print statement or the open() function when trying to open a file that does not exist."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"21"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"IOError"}),"Raised for operating system-related errors."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"22"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"SyntaxError"}),"Raised when there is an error in Python syntax."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"23"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"IndentationError"}),"Raised when indentation is not specified properly."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"24"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"SystemError"}),"Raised when the interpreter finds an internal problem, but when this error is encountered the Python interpreter does not exit."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"25"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"SystemExit"}),"Raised when Python interpreter is quit by using the sys.exit() function. If not handled in the code, causes the interpreter to exit."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"26"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"TypeError"}),"Raised when an operation or function is attempted that is invalid for the specified data type."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"27"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"ValueError"}),"Raised when the built-in function for a data type has the valid type of arguments, but the arguments have invalid values specified."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"28"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"RuntimeError"}),"Raised when a generated error does not fall into any category."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"29"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"NotImplementedError"}),"Raised when an abstract method that needs to be implemented in an inherited class is not actually implemented."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"assertions-in-python",children:"Assertions in Python"}),"\n",(0,s.jsx)(t.p,{children:"An assertion is a sanity-check that you can turn on or turn off when you are done with your testing of the program."}),"\n",(0,s.jsxs)(t.p,{children:["The easiest way to think of an assertion is to liken it to a ",(0,s.jsx)(t.strong,{children:"raise-if"})," statement (or to be more accurate, a raise-if-not statement). An expression is tested, and if the result comes up false, an exception is raised."]}),"\n",(0,s.jsx)(t.p,{children:"Assertions are carried out by the assert statement, the newest keyword to Python, introduced in version 1.5."}),"\n",(0,s.jsx)(t.p,{children:"Programmers often place assertions at the start of a function to check for valid input, and after a function call to check for valid output."}),"\n",(0,s.jsxs)(t.h3,{id:"the-assert-statement",children:["The ",(0,s.jsx)(t.em,{children:"assert"})," Statement"]}),"\n",(0,s.jsxs)(t.p,{children:["When it encounters an assert statement, Python evaluates the accompanying expression, which is hopefully true. If the expression is false, Python raises an ",(0,s.jsx)(t.em,{children:"AssertionError"})," exception."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"syntax"})," for assert is \u2212"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"assert Expression[, Arguments]\n"})}),"\n",(0,s.jsx)(t.p,{children:"If the assertion fails, Python uses ArgumentExpression as the argument for the AssertionError. AssertionError exceptions can be caught and handled like any other exception using the try-except statement, but if not handled, they will terminate the program and produce a traceback."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Here is a function that converts a temperature from degrees Kelvin to degrees Fahrenheit. Since zero degrees Kelvin is as cold as it gets, the function bails out if it sees a negative temperature \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/fBXCk7",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\ndef KelvinToFahrenheit(Temperature):\n   assert (Temperature >= 0),"Colder than absolute zero!"\n   return ((Temperature-273)*1.8)+32\nprint KelvinToFahrenheit(273)\nprint int(KelvinToFahrenheit(505.78))\nprint KelvinToFahrenheit(-5)\n'})}),"\n",(0,s.jsx)(t.p,{children:"When the above code is executed, it produces the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'32.0\n451\nTraceback (most recent call last):\nFile "test.py", line 9, in <module>\nprint KelvinToFahrenheit(-5)\nFile "test.py", line 4, in KelvinToFahrenheit\nassert (Temperature >= 0),"Colder than absolute zero!"\nAssertionError: Colder than absolute zero!\n'})}),"\n",(0,s.jsx)(t.h2,{id:"what-is-exception",children:"What is Exception?"}),"\n",(0,s.jsx)(t.p,{children:"An exception is an event, which occurs during the execution of a program that disrupts the normal flow of the program's instructions. In general, when a Python script encounters a situation that it cannot cope with, it raises an exception. An exception is a Python object that represents an error."}),"\n",(0,s.jsx)(t.p,{children:"When a Python script raises an exception, it must either handle the exception immediately otherwise it terminates and quits."}),"\n",(0,s.jsx)(t.h2,{id:"handling-an-exception",children:"Handling an exception"}),"\n",(0,s.jsxs)(t.p,{children:["If you have some ",(0,s.jsx)(t.em,{children:"suspicious"})," code that may raise an exception, you can defend your program by placing the suspicious code in a ",(0,s.jsx)(t.strong,{children:"try:"})," block. After the try: block, include an ",(0,s.jsx)(t.strong,{children:"except:"})," statement, followed by a block of code which handles the problem as elegantly as possible."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(t.p,{children:["Here is simple syntax of ",(0,s.jsx)(t.em,{children:"try....except...else"})," blocks \u2212"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"try:\nYou do your operations here;\n......................\nexcept ExceptionI:\nIf there is ExceptionI, then execute this block.\nexcept ExceptionII:\nIf there is ExceptionII, then execute this block.\n......................\nelse:\nIf there is no exception then execute this block.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here are few important points about the above-mentioned syntax \u2212"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A single try statement can have multiple except statements. This is useful when the try block contains statements that may throw different types of exceptions."}),"\n",(0,s.jsx)(t.li,{children:"You can also provide a generic except clause, which handles any exception."}),"\n",(0,s.jsx)(t.li,{children:"After the except clause(s), you can include an else-clause. The code in the else-block executes if the code in the try: block does not raise an exception."}),"\n",(0,s.jsx)(t.li,{children:"The else-block is a good place for code that does not need the try: block's protection."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"This example opens a file, writes content in the, file and comes out gracefully because there is no problem at all \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/wDwtP9",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\n\ntry:\n   fh = open("testfile", "w")\n   fh.write("This is my test file for exception handling!!")\nexcept IOError:\n   print "Error: can\\\'t find file or read data"\nelse:\n   print "Written content in the file successfully"\n   fh.close()\n'})}),"\n",(0,s.jsx)(t.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Written content in the file successfully\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"This example tries to open a file where you do not have write permission, so it raises an exception \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/guvZfU",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\n\ntry:\n   fh = open("testfile", "r")\n   fh.write("This is my test file for exception handling!!")\nexcept IOError:\n   print "Error: can\\\'t find file or read data"\nelse:\n   print "Written content in the file successfully"\n'})}),"\n",(0,s.jsx)(t.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Error: can't find file or read data\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"the-except-clause-with-no-exceptions",children:["The ",(0,s.jsx)(t.em,{children:"except"})," Clause with No Exceptions"]}),"\n",(0,s.jsx)(t.p,{children:"You can also use the except statement with no exceptions defined as follows \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"try:\nYou do your operations here;\n......................\nexcept:\nIf there is any exception, then execute this block.\n......................\nelse:\nIf there is no exception then execute this block.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This kind of a ",(0,s.jsx)(t.strong,{children:"try-except"})," statement catches all the exceptions that occur. Using this kind of try-except statement is not considered a good programming practice though, because it catches all exceptions but does not make the programmer identify the root cause of the problem that may occur."]}),"\n",(0,s.jsxs)(t.h2,{id:"the-except-clause-with-multiple-exceptions",children:["The ",(0,s.jsx)(t.em,{children:"except"})," Clause with Multiple Exceptions"]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the same ",(0,s.jsx)(t.em,{children:"except"})," statement to handle multiple exceptions as follows \u2212"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"try:\n   You do your operations here;\n   ......................\nexcept(Exception1[, Exception2[,...ExceptionN]]]):\n   If there is any exception from the given exception list, \n   then execute this block.\n   ......................\nelse:\n   If there is no exception then execute this block. \n"})}),"\n",(0,s.jsx)(t.h2,{id:"the-try-finally-clause",children:"The try-finally Clause"}),"\n",(0,s.jsxs)(t.p,{children:["You can use a ",(0,s.jsx)(t.strong,{children:"finally:"})," block along with a ",(0,s.jsx)(t.strong,{children:"try:"})," block. The finally block is a place to put any code that must execute, whether the try-block raised an exception or not. The syntax of the try-finally statement is this \u2212"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"try:\n   You do your operations here;\n   ......................\n   Due to any exception, this may be skipped.\nfinally:\n   This would always be executed.\n   ......................\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You cannot use ",(0,s.jsx)(t.em,{children:"else"})," clause as well along with a finally clause."]}),"\n",(0,s.jsx)(t.h3,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/Pfq1qs",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\n\ntry:\n   fh = open("testfile", "w")\n   fh.write("This is my test file for exception handling!!")\nfinally:\n   print "Error: can\\\'t find file or read data"\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you do not have permission to open the file in writing mode, then this will produce the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Error: can't find file or read data\n"})}),"\n",(0,s.jsx)(t.p,{children:"Same example can be written more cleanly as follows \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/5p1Wkr",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\n\ntry:\n   fh = open("testfile", "w")\n   try:\n      fh.write("This is my test file for exception handling!!")\n   finally:\n      print "Going to close the file"\n      fh.close()\nexcept IOError:\n   print "Error: can\\\'t find file or read data"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["When an exception is thrown in the ",(0,s.jsx)(t.em,{children:"try"})," block, the execution immediately passes to the ",(0,s.jsx)(t.em,{children:"finally"})," block. After all the statements in the ",(0,s.jsx)(t.em,{children:"finally"})," block are executed, the exception is raised again and is handled in the ",(0,s.jsx)(t.em,{children:"except"})," statements if present in the next higher layer of the ",(0,s.jsx)(t.em,{children:"try-except"})," statement."]}),"\n",(0,s.jsx)(t.h2,{id:"argument-of-an-exception",children:"Argument of an Exception"}),"\n",(0,s.jsxs)(t.p,{children:["An exception can have an ",(0,s.jsx)(t.em,{children:"argument"}),", which is a value that gives additional information about the problem. The contents of the argument vary by exception. You capture an exception's argument by supplying a variable in the except clause as follows \u2212"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"try:\n   You do your operations here;\n   ......................\nexcept ExceptionType, Argument:\n   You can print value of Argument here...\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you write the code to handle a single exception, you can have a variable follow the name of the exception in the except statement. If you are trapping multiple exceptions, you can have a variable follow the tuple of the exception."}),"\n",(0,s.jsx)(t.p,{children:"This variable receives the value of the exception mostly containing the cause of the exception. The variable can receive a single value or multiple values in the form of a tuple. This tuple usually contains the error string, the error number, and an error location."}),"\n",(0,s.jsx)(t.h3,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Following is an example for a single exception \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/Zr1ck8",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/usr/bin/python\n\n# Define a function here.\ndef temp_convert(var):\n   try:\n      return int(var)\n   except ValueError, Argument:\n      print "The argument does not contain numbers\\n", Argument\n\n# Call above function here.\ntemp_convert("xyz");\n'})}),"\n",(0,s.jsx)(t.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"The argument does not contain numbers\ninvalid literal for int() with base 10: 'xyz'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"raising-an-exceptions",children:"Raising an Exceptions"}),"\n",(0,s.jsxs)(t.p,{children:["You can raise exceptions in several ways by using the raise statement. The general syntax for the ",(0,s.jsx)(t.strong,{children:"raise"})," statement is as follows."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"raise [Exception [, args [, traceback]]]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here, ",(0,s.jsx)(t.em,{children:"Exception"})," is the type of exception (for example, NameError) and ",(0,s.jsx)(t.em,{children:"argument"})," is a value for the exception argument. The argument is optional; if not supplied, the exception argument is None."]}),"\n",(0,s.jsx)(t.p,{children:"The final argument, traceback, is also optional (and rarely used in practice), and if present, is the traceback object used for the exception."}),"\n",(0,s.jsx)(t.h3,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"An exception can be a string, a class or an object. Most of the exceptions that the Python core raises are classes, with an argument that is an instance of the class. Defining new exceptions is quite easy and can be done as follows \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'def functionName( level ):\n   if level < 1:\n      raise "Invalid level!", level\n      # The code below to this would not be executed\n      # if we raise the exception\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"}),' In order to catch an exception, an "except" clause must refer to the same exception thrown either class object or simple string. For example, to capture above exception, we must write the except clause as follows \u2212']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'try:\n   Business Logic here...\nexcept "Invalid level!":\n   Exception handling here...\nelse:\n   Rest of the code here...\n'})}),"\n",(0,s.jsx)(t.h2,{id:"user-defined-exceptions",children:"User-Defined Exceptions"}),"\n",(0,s.jsx)(t.p,{children:"Python also allows you to create your own exceptions by deriving classes from the standard built-in exceptions."}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example related to ",(0,s.jsx)(t.em,{children:"RuntimeError"}),". Here, a class is created that is subclassed from ",(0,s.jsx)(t.em,{children:"RuntimeError"}),". This is useful when you need to display more specific information when an exception is caught."]}),"\n",(0,s.jsxs)(t.p,{children:["In the try block, the user-defined exception is raised and caught in the except block. The variable e is used to create an instance of the class ",(0,s.jsx)(t.em,{children:"Networkerror"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"class Networkerror(RuntimeError):\n   def __init__(self, arg):\n      self.args = arg\n"})}),"\n",(0,s.jsx)(t.p,{children:"So once you defined above class, you can raise the exception as follows \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'try:\n   raise Networkerror("Bad hostname")\nexcept Networkerror,e:\n   print e.args\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);