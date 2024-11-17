"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[3977],{4102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Document 001/004","title":"4. Basic Syntax","description":"The Python...","source":"@site/docs/Document 001/004.md","sourceDirName":"Document 001","slug":"/Document 001/004","permalink":"/docs/Document 001/004","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"4. Basic Syntax","description":"The Python...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":4},"sidebar":"sidebar_doc_001","previous":{"title":"3. Environment Setup","permalink":"/docs/Document 001/003"},"next":{"title":"5. Variable Types","permalink":"/docs/Document 001/005"}}');var s=t(4848),r=t(8453);const l={title:"4. Basic Syntax",description:"The Python...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:4},a=void 0,o={},d=[{value:"First Python Program",id:"first-python-program",level:2},{value:"Interactive Mode Programming",id:"interactive-mode-programming",level:3},{value:"Script Mode Programming",id:"script-mode-programming",level:3},{value:"Python Identifiers",id:"python-identifiers",level:2},{value:"Reserved Words",id:"reserved-words",level:2},{value:"Lines and Indentation",id:"lines-and-indentation",level:2},{value:"Multi-Line Statements",id:"multi-line-statements",level:2},{value:"Quotation in Python",id:"quotation-in-python",level:2},{value:"Comments in Python",id:"comments-in-python",level:2},{value:"Using Blank Lines",id:"using-blank-lines",level:2},{value:"Waiting for the User",id:"waiting-for-the-user",level:2},{value:"Multiple Statements on a Single Line",id:"multiple-statements-on-a-single-line",level:2},{value:"Multiple Statement Groups as Suites",id:"multiple-statement-groups-as-suites",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Python language has many similarities to Perl, C, and Java. However, there are some definite differences between the languages."}),"\n",(0,s.jsx)(n.h2,{id:"first-python-program",children:"First Python Program"}),"\n",(0,s.jsx)(n.p,{children:"Let us execute programs in different modes of programming."}),"\n",(0,s.jsx)(n.h3,{id:"interactive-mode-programming",children:"Interactive Mode Programming"}),"\n",(0,s.jsx)(n.p,{children:"Invoking the interpreter without passing a script file as a parameter brings up the following prompt \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ python\nPython 2.4.3 (#1, Nov 11 2010, 13:34:43)\n[GCC 4.1.2 20080704 (Red Hat 4.1.2-48)] on linux2\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Type the following text at the Python prompt and press the Enter \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'>>> print "Hello, Python!"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you are running new version of Python, then you would need to use print statement with parenthesis as in ",(0,s.jsx)(n.strong,{children:'print ("Hello, Python!");'}),". However in Python version 2.4.3, this produces the following result \u2212"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Hello, Python!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"script-mode-programming",children:"Script Mode Programming"}),"\n",(0,s.jsx)(n.p,{children:"Invoking the interpreter with a script parameter begins execution of the script and continues until the script is finished. When the script is finished, the interpreter is no longer active."}),"\n",(0,s.jsxs)(n.p,{children:["Let us write a simple Python program in a script. Python files have extension ",(0,s.jsx)(n.strong,{children:".py"}),". Type the following source code in a test.py file \u2212"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'print "Hello, Python!"\n'})}),"\n",(0,s.jsx)(n.p,{children:"We assume that you have Python interpreter set in PATH variable. Now, try to run this program as follows \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python test.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Hello, Python!\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let us try another way to execute a Python script. Here is the modified test.py file \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/usr/bin/python\n\nprint "Hello, Python!"\n'})}),"\n",(0,s.jsx)(n.p,{children:"We assume that you have Python interpreter available in /usr/bin directory. Now, try to run this program as follows \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ chmod +x test.py     # This is to make file executable\n$./test.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Hello, Python!\n"})}),"\n",(0,s.jsx)(n.h2,{id:"python-identifiers",children:"Python Identifiers"}),"\n",(0,s.jsx)(n.p,{children:"A Python identifier is a name used to identify a variable, function, class, module or other object. An identifier starts with a letter A to Z or a to z or an underscore (_) followed by zero or more letters, underscores and digits (0 to 9)."}),"\n",(0,s.jsxs)(n.p,{children:["Python does not allow punctuation characters such as @, $, and % within identifiers. Python is a case sensitive programming language. Thus, ",(0,s.jsx)(n.strong,{children:"Manpower"})," and ",(0,s.jsx)(n.strong,{children:"manpower"})," are two different identifiers in Python."]}),"\n",(0,s.jsx)(n.p,{children:"Here are naming conventions for Python identifiers \u2212"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Class names start with an uppercase letter. All other identifiers start with a lowercase letter."}),"\n",(0,s.jsx)(n.li,{children:"Starting an identifier with a single leading underscore indicates that the identifier is private."}),"\n",(0,s.jsx)(n.li,{children:"Starting an identifier with two leading underscores indicates a strongly private identifier."}),"\n",(0,s.jsx)(n.li,{children:"If the identifier also ends with two trailing underscores, the identifier is a language-defined special name."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reserved-words",children:"Reserved Words"}),"\n",(0,s.jsx)(n.p,{children:"The following list shows the Python keywords. These are reserved words and you cannot use them as constant or variable or any other identifier names. All the Python keywords contain lowercase letters only."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"and"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"exec"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"not"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"assert"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"finally"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"or"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"break"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"for"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"pass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"class"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"from"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"print"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"continue"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"global"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"raise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"def"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"if"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"return"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"del"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"import"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"try"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"elif"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"in"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"while"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"else"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"is"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"with"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"except"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"lambda"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"yield"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"lines-and-indentation",children:"Lines and Indentation"}),"\n",(0,s.jsx)(n.p,{children:"Python provides no braces to indicate blocks of code for class and function definitions or flow control. Blocks of code are denoted by line indentation, which is rigidly enforced."}),"\n",(0,s.jsx)(n.p,{children:"The number of spaces in the indentation is variable, but all statements within the block must be indented the same amount. For example \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'if True:\nprint "True"\nelse:\nprint "False"\n'})}),"\n",(0,s.jsx)(n.p,{children:"However, the following block generates an error \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'if True:\nprint "Answer"\nprint "True"\nelse:\nprint "Answer"\nprint "False"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Thus, in Python all the continuous lines indented with same number of spaces would form a block. The following example has various statement blocks \u2212"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," \u2212 Do not try to understand the logic at this point of time. Just make sure you understood various blocks even if they are without braces."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/usr/bin/python\n\nimport sys\n\ntry:\n   # open file stream\n   file = open(file_name, "w")\nexcept IOError:\n   print "There was an error writing to", file_name\n   sys.exit()\nprint "Enter \'", file_finish,\nprint "\' When finished"\nwhile file_text != file_finish:\n   file_text = raw_input("Enter text: ")\n   if file_text == file_finish:\n      # close the file\n      file.close\n      break\n   file.write(file_text)\n   file.write("\\n")\nfile.close()\nfile_name = raw_input("Enter filename: ")\nif len(file_name) == 0:\n   print "Next time please enter something"\n   sys.exit()\ntry:\n   file = open(file_name, "r")\nexcept IOError:\n   print "There was an error reading file"\n   sys.exit()\nfile_text = file.read()\nfile.close()\nprint file_text\n'})}),"\n",(0,s.jsx)(n.h2,{id:"multi-line-statements",children:"Multi-Line Statements"}),"\n",(0,s.jsx)(n.p,{children:"Statements in Python typically end with a new line. Python does, however, allow the use of the line continuation character () to denote that the line should continue. For example \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"total = item_one + \\\nitem_two + \\\nitem_three\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Statements contained within the [], ",", or () brackets do not need to use the line continuation character. For example \u2212"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"days = ['Monday', 'Tuesday', 'Wednesday',\n'Thursday', 'Friday']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"quotation-in-python",children:"Quotation in Python"}),"\n",(0,s.jsx)(n.p,{children:"Python accepts single ('), double (\") and triple (''' or \"\"\") quotes to denote string literals, as long as the same type of quote starts and ends the string."}),"\n",(0,s.jsx)(n.p,{children:"The triple quotes are used to span the string across multiple lines. For example, all the following are legal \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'word = \'word\'\nsentence = "This is a sentence."\nparagraph = """This is a paragraph. It is\nmade up of multiple lines and sentences."""\n'})}),"\n",(0,s.jsx)(n.h2,{id:"comments-in-python",children:"Comments in Python"}),"\n",(0,s.jsx)(n.p,{children:"A hash sign (#) that is not inside a string literal begins a comment. All characters after the # and up to the end of the physical line are part of the comment and the Python interpreter ignores them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/usr/bin/python\n\n# First comment\nprint "Hello, Python!" # second comment\n'})}),"\n",(0,s.jsx)(n.p,{children:"This produces the following result \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Hello, Python!\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can type a comment on the same line after a statement or expression \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'name = "Madisetti" # This is again comment\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can comment multiple lines as follows \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# This is a comment.\n# This is a comment, too.\n# This is a comment, too.\n# I said that already.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Following triple-quoted string is also ignored by Python interpreter and can be used as a multiline comments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"'''\nThis is a multiline\ncomment.\n'''\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-blank-lines",children:"Using Blank Lines"}),"\n",(0,s.jsx)(n.p,{children:"A line containing only whitespace, possibly with a comment, is known as a blank line and Python totally ignores it."}),"\n",(0,s.jsx)(n.p,{children:"In an interactive interpreter session, you must enter an empty physical line to terminate a multiline statement."}),"\n",(0,s.jsx)(n.h2,{id:"waiting-for-the-user",children:"Waiting for the User"}),"\n",(0,s.jsx)(n.p,{children:"The following line of the program displays the prompt, the statement saying \u201cPress the enter key to exit\u201d, and waits for the user to take action \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/usr/bin/python\n\nraw_input("\\n\\nPress the enter key to exit.")\n'})}),"\n",(0,s.jsx)(n.p,{children:'Here, "\\n\\n" is used to create two new lines before displaying the actual line. Once the user presses the key, the program ends. This is a nice trick to keep a console window open until the user is done with an application.'}),"\n",(0,s.jsx)(n.h2,{id:"multiple-statements-on-a-single-line",children:"Multiple Statements on a Single Line"}),"\n",(0,s.jsx)(n.p,{children:"The semicolon ( ; ) allows multiple statements on the single line given that neither statement starts a new code block. Here is a sample snip using the semicolon \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"import sys; x = 'foo'; sys.stdout.write(x + '\\n')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"multiple-statement-groups-as-suites",children:"Multiple Statement Groups as Suites"}),"\n",(0,s.jsxs)(n.p,{children:["A group of individual statements, which make a single code block are called ",(0,s.jsx)(n.strong,{children:"suites"})," in Python. Compound or complex statements, such as if, while, def, and class require a header line and a suite."]}),"\n",(0,s.jsx)(n.p,{children:"Header lines begin the statement (with the keyword) and terminate with a colon ( : ) and are followed by one or more lines which make up the suite. For example \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"if expression :\nsuite\nelif expression :\nsuite\nelse :\nsuite\n"})}),"\n",(0,s.jsx)(n.h2,{id:"command-line-arguments",children:"Command Line Arguments"}),"\n",(0,s.jsx)(n.p,{children:"Many programs can be run to provide you with some basic information about how they should be run. Python enables you to do this with -h \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ python -h\nusage: python [option] ... [-c cmd | -m mod | file | -] [arg] ...\nOptions and arguments (and corresponding environment variables):\n-c cmd : program passed in as string (terminates option list)\n-d     : debug output from parser (also PYTHONDEBUG=x)\n-E     : ignore environment variables (such as PYTHONPATH)\n-h     : print this help message and exit\n\n[ etc. ]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also program your script in such a way that it should accept various options. ",(0,s.jsx)(n.a,{href:"https://www.tutorialspoint.com/python/python_command_line_arguments.htm",children:"Command Line Arguments"})," is an advanced topic and should be studied a bit later once you have gone through rest of the Python concepts."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);