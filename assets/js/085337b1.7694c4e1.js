"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[8858],{2140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"Document 001/003","title":"3. Environment Setup","description":"Python is...","source":"@site/docs/Document 001/003.md","sourceDirName":"Document 001","slug":"/Document 001/003","permalink":"/docs/Document 001/003","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"3. Environment Setup","description":"Python is...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":3},"sidebar":"sidebar_doc_001","previous":{"title":"2. Overview","permalink":"/docs/Document 001/002"},"next":{"title":"4. Basic Syntax","permalink":"/docs/Document 001/004"}}');var s=t(4848),l=t(8453);const r={title:"3. Environment Setup",description:"Python is...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:3},o=void 0,a={},h=[{value:"Local Environment Setup",id:"local-environment-setup",level:2},{value:"Getting Python",id:"getting-python",level:2},{value:"Installing Python",id:"installing-python",level:2},{value:"Unix and Linux Installation",id:"unix-and-linux-installation",level:3},{value:"Windows Installation",id:"windows-installation",level:3},{value:"Macintosh Installation",id:"macintosh-installation",level:3},{value:"Setting up PATH",id:"setting-up-path",level:2},{value:"Setting path at Unix/Linux",id:"setting-path-at-unixlinux",level:2},{value:"Setting path at Windows",id:"setting-path-at-windows",level:2},{value:"Python Environment Variables",id:"python-environment-variables",level:2},{value:"Running Python",id:"running-python",level:2},{value:"Interactive Interpreter",id:"interactive-interpreter",level:3},{value:"Script from the Command-line",id:"script-from-the-command-line",level:3},{value:"Integrated Development Environment",id:"integrated-development-environment",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Python is available on a wide variety of platforms including Linux and Mac OS X. Let's understand how to set up our Python environment."}),"\n",(0,s.jsx)(n.h2,{id:"local-environment-setup",children:"Local Environment Setup"}),"\n",(0,s.jsx)(n.p,{children:'Open a terminal window and type "python" to find out if it is already installed and which version is installed.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unix (Solaris, Linux, FreeBSD, AIX, HP/UX, SunOS, IRIX, etc.)"}),"\n",(0,s.jsx)(n.li,{children:"Win 9x/NT/2000"}),"\n",(0,s.jsx)(n.li,{children:"Macintosh (Intel, PPC, 68K)"}),"\n",(0,s.jsx)(n.li,{children:"OS/2"}),"\n",(0,s.jsx)(n.li,{children:"DOS (multiple versions)"}),"\n",(0,s.jsx)(n.li,{children:"PalmOS"}),"\n",(0,s.jsx)(n.li,{children:"Nokia mobile phones"}),"\n",(0,s.jsx)(n.li,{children:"Windows CE"}),"\n",(0,s.jsx)(n.li,{children:"Acorn/RISC OS"}),"\n",(0,s.jsx)(n.li,{children:"BeOS"}),"\n",(0,s.jsx)(n.li,{children:"Amiga"}),"\n",(0,s.jsx)(n.li,{children:"VMS/OpenVMS"}),"\n",(0,s.jsx)(n.li,{children:"QNX"}),"\n",(0,s.jsx)(n.li,{children:"VxWorks"}),"\n",(0,s.jsx)(n.li,{children:"Psion"}),"\n",(0,s.jsx)(n.li,{children:"Python has also been ported to the Java and .NET virtual machines"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-python",children:"Getting Python"}),"\n",(0,s.jsxs)(n.p,{children:["The most up-to-date and current source code, binaries, documentation, news, etc., is available on the official website of Python ",(0,s.jsx)(n.a,{href:"https://www.python.org/",children:"https://www.python.org/"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can download Python documentation from ",(0,s.jsx)(n.a,{href:"https://www.python.org/doc/",children:"https://www.python.org/doc/"}),". The documentation is available in HTML, PDF, and PostScript formats."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-python",children:"Installing Python"}),"\n",(0,s.jsx)(n.p,{children:"Python distribution is available for a wide variety of platforms. You need to download only the binary code applicable for your platform and install Python."}),"\n",(0,s.jsx)(n.p,{children:"If the binary code for your platform is not available, you need a C compiler to compile the source code manually. Compiling the source code offers more flexibility in terms of choice of features that you require in your installation."}),"\n",(0,s.jsx)(n.p,{children:"Here is a quick overview of installing Python on various platforms \u2212"}),"\n",(0,s.jsx)(n.h3,{id:"unix-and-linux-installation",children:"Unix and Linux Installation"}),"\n",(0,s.jsx)(n.p,{children:"Here are the simple steps to install Python on Unix/Linux machine."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open a Web browser and go to ",(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Follow the link to download zipped source code available for Unix/Linux."}),"\n",(0,s.jsx)(n.li,{children:"Download and extract files."}),"\n",(0,s.jsxs)(n.li,{children:["Editing the ",(0,s.jsx)(n.em,{children:"Modules/Setup"})," file if you want to customize some options."]}),"\n",(0,s.jsx)(n.li,{children:"run ./configure script"}),"\n",(0,s.jsx)(n.li,{children:"make"}),"\n",(0,s.jsx)(n.li,{children:"make install"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This installs Python at standard location ",(0,s.jsx)(n.em,{children:"/usr/local/bin"})," and its libraries at ",(0,s.jsx)(n.em,{children:"/usr/local/lib/pythonXX"})," where XX is the version of Python."]}),"\n",(0,s.jsx)(n.h3,{id:"windows-installation",children:"Windows Installation"}),"\n",(0,s.jsx)(n.p,{children:"Here are the steps to install Python on Windows machine."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open a Web browser and go to ",(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Follow the link for the Windows installer ",(0,s.jsx)(n.em,{children:"python-XYZ.msi"})," file where XYZ is the version you need to install."]}),"\n",(0,s.jsxs)(n.li,{children:["To use this installer ",(0,s.jsx)(n.em,{children:"python-XYZ.msi"}),", the Windows system must support Microsoft Installer 2.0. Save the installer file to your local machine and then run it to find out if your machine supports MSI."]}),"\n",(0,s.jsx)(n.li,{children:"Run the downloaded file. This brings up the Python install wizard, which is really easy to use. Just accept the default settings, wait until the install is finished, and you are done."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"macintosh-installation",children:"Macintosh Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Recent Macs come with Python installed, but it may be several years out of date. See ",(0,s.jsx)(n.a,{href:"https://www.python.org/download/mac/",children:"http://www.python.org/download/mac/"})," for instructions on getting the current version along with extra tools to support development on the Mac. For older Mac OS's before Mac OS X 10.3 (released in 2003), MacPython is available."]}),"\n",(0,s.jsxs)(n.p,{children:["Jack Jansen maintains it and you can have full access to the entire documentation at his website \u2212 ",(0,s.jsx)(n.a,{href:"http://www.cwi.nl/~jack/macpython.html",children:"http://www.cwi.nl/~jack/macpython.html"}),". You can find complete installation details for Mac OS installation."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-path",children:"Setting up PATH"}),"\n",(0,s.jsx)(n.p,{children:"Programs and other executable files can be in many directories, so operating systems provide a search path that lists the directories that the OS searches for executables."}),"\n",(0,s.jsx)(n.p,{children:"The path is stored in an environment variable, which is a named string maintained by the operating system. This variable contains information available to the command shell and other programs."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"path"})," variable is named as PATH in Unix or Path in Windows (Unix is case sensitive; Windows is not)."]}),"\n",(0,s.jsx)(n.p,{children:"In Mac OS, the installer handles the path details. To invoke the Python interpreter from any particular directory, you must add the Python directory to your path."}),"\n",(0,s.jsx)(n.h2,{id:"setting-path-at-unixlinux",children:"Setting path at Unix/Linux"}),"\n",(0,s.jsx)(n.p,{children:"To add the Python directory to the path for a particular session in Unix \u2212"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In the csh shell"}),' \u2212 type setenv PATH "$PATH:/usr/local/bin/python" and press Enter.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In the bash shell (Linux)"}),' \u2212 type export PATH="$PATH:/usr/local/bin/python" and press Enter.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In the sh or ksh shell"}),' \u2212 type PATH="$PATH:/usr/local/bin/python" and press Enter.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Note"})," \u2212 /usr/local/bin/python is the path of the Python directory"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-path-at-windows",children:"Setting path at Windows"}),"\n",(0,s.jsx)(n.p,{children:"To add the Python directory to the path for a particular session in Windows \u2212"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"At the command prompt"})," \u2212 type path %path%;C:\\Python and press Enter."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," \u2212 C:\\Python is the path of the Python directory"]}),"\n",(0,s.jsx)(n.h2,{id:"python-environment-variables",children:"Python Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Here are important environment variables, which can be recognized by Python \u2212"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"No."}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Variable & Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.strong,{children:"PYTHONPATH"})," It has a role similar to PATH. This variable tells the Python interpreter where to locate the module files imported into a program. It should include the Python source library directory and the directories containing Python source code. PYTHONPATH is sometimes preset by the Python installer."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.strong,{children:"PYTHONSTARTUP"})," It contains the path of an initialization file containing Python source code. It is executed every time you start the interpreter. It is named as .pythonrc.py in Unix and it contains commands that load utilities or modify PYTHONPATH."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.strong,{children:"PYTHONCASEOK"})," It is used in Windows to instruct Python to find the first case-insensitive match in an import statement. Set this variable to any value to activate it."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.strong,{children:"PYTHONHOME"})," It is an alternative module search path. It is usually embedded in the PYTHONSTARTUP or PYTHONPATH directories to make switching module libraries easy."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"running-python",children:"Running Python"}),"\n",(0,s.jsx)(n.p,{children:"There are three different ways to start Python \u2212"}),"\n",(0,s.jsx)(n.h3,{id:"interactive-interpreter",children:"Interactive Interpreter"}),"\n",(0,s.jsx)(n.p,{children:"You can start Python from Unix, DOS, or any other system that provides you a command-line interpreter or shell window."}),"\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.strong,{children:"python"})," the command line."]}),"\n",(0,s.jsx)(n.p,{children:"Start coding right away in the interactive interpreter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$python # Unix/Linux\nor\npython% # Unix/Linux\nor\nC:> python # Windows/DOS\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the list of all the available command line options \u2212"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"No."}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Option & Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-d"})," It provides debug output."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-O"})," It generates optimized bytecode (resulting in .pyo files)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-S"})," Do not run import site to look for Python paths on startup."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-v"})," verbose output (detailed trace on import statements)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-X"}),"disable class-based built-in exceptions (just use strings); obsolete starting with version 1.6."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-c"})," cmdrun Python script sent in as cmd string"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"file"})," run Python script from given file"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"script-from-the-command-line",children:"Script from the Command-line"}),"\n",(0,s.jsx)(n.p,{children:"A Python script can be executed at command line by invoking the interpreter on your application, as in the following \u2212"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$python script.py # Unix/Linux\n\nor\n\npython% script.py # Unix/Linux\n\nor\n\nC: >python script.py # Windows/DOS\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," \u2212 Be sure the file permission mode allows execution."]}),"\n",(0,s.jsx)(n.h3,{id:"integrated-development-environment",children:"Integrated Development Environment"}),"\n",(0,s.jsx)(n.p,{children:"You can run Python from a Graphical User Interface (GUI) environment as well, if you have a GUI application on your system that supports Python."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unix"})," \u2212 IDLE is the very first Unix IDE for Python."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Windows"})," \u2212 PythonWin is the first Windows interface for Python and is an IDE with a GUI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Macintosh"})," \u2212 The Macintosh version of Python along with the IDLE IDE is available from the main website, downloadable as either MacBinary or BinHex'd files."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you are not able to set up the environment properly, then you can take help from your system admin. Make sure the Python environment is properly set up and working perfectly fine."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," \u2212 All the examples given in subsequent chapters are executed with Python 2.4.3 version available on CentOS flavor of Linux."]}),"\n",(0,s.jsx)(n.p,{children:"We already have set up Python Programming environment online, so that you can execute all the available examples online at the same time when you are learning theory. Feel free to modify any example and execute it online."})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);