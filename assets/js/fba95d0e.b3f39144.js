"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[9171],{255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Document 002/005","title":"5. ...","description":"Variables are nothing but reserved memory locations to store values. This means that when you create a variable you reserve some space in memory.","source":"@site/docs/Document 002/005.md","sourceDirName":"Document 002","slug":"/Document 002/005","permalink":"/blog/docs/Document 002/005","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"5. ..."},"sidebar":"sidebar_doc_002","previous":{"title":"4. ...","permalink":"/blog/docs/Document 002/004"},"next":{"title":"6. ...","permalink":"/blog/docs/Document 002/006"}}');var l=n(4848),i=n(8453);const r={title:"5. ..."},a=void 0,o={},d=[{value:"Assigning Values to Variables",id:"assigning-values-to-variables",level:2},{value:"Multiple Assignment",id:"multiple-assignment",level:2},{value:"Standard Data Types",id:"standard-data-types",level:2},{value:"Python Numbers",id:"python-numbers",level:2},{value:"Examples",id:"examples",level:3},{value:"Python Strings",id:"python-strings",level:2},{value:"Python Lists",id:"python-lists",level:2},{value:"Python Tuples",id:"python-tuples",level:2},{value:"Python Dictionary",id:"python-dictionary",level:2},{value:"Data Type Conversion",id:"data-type-conversion",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Variables are nothing but reserved memory locations to store values. This means that when you create a variable you reserve some space in memory."}),"\n",(0,l.jsx)(t.p,{children:"Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to variables, you can store integers, decimals or characters in these variables."}),"\n",(0,l.jsx)(t.h2,{id:"assigning-values-to-variables",children:"Assigning Values to Variables"}),"\n",(0,l.jsxs)(t.p,{children:["Python variables do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable. The equal sign (",(0,l.jsx)(t.code,{children:"="}),") is used to assign values to variables."]}),"\n",(0,l.jsxs)(t.p,{children:["The operand to the left of the ",(0,l.jsx)(t.code,{children:"="})," operator is the name of the variable and the operand to the right of the ",(0,l.jsx)(t.code,{children:"="})," operator is the value stored in the variable. For example \u2212"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'#!/usr/bin/python\n\ncounter = 100          # An integer assignment\nmiles = 1000.0       # A floating point\nname = "John"       # A string\n\nprint counter\nprint miles\nprint name\n\n'})}),"\n",(0,l.jsxs)(t.p,{children:['Here, 100, 1000.0 and "John" are the values assigned to ',(0,l.jsx)(t.em,{children:"counter"}),", ",(0,l.jsx)(t.em,{children:"miles"}),", and ",(0,l.jsx)(t.em,{children:"name"})," variables, respectively. This produces the following result \u2212"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"100\n1000.0\nJohn\n"})}),"\n",(0,l.jsx)(t.h2,{id:"multiple-assignment",children:"Multiple Assignment"}),"\n",(0,l.jsx)(t.p,{children:"Python allows you to assign a single value to several variables simultaneously. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"a = b = c = 1\n"})}),"\n",(0,l.jsx)(t.p,{children:"Here, an integer object is created with the value 1, and all three variables are assigned to the same memory location. You can also assign multiple objects to multiple variables. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'a, b, c = 1, 2, "john"\n'})}),"\n",(0,l.jsx)(t.p,{children:'Here, two integer objects with values 1 and 2 are assigned to variables a and b respectively, and one string object with the value "john" is assigned to the variable c.'}),"\n",(0,l.jsx)(t.h2,{id:"standard-data-types",children:"Standard Data Types"}),"\n",(0,l.jsx)(t.p,{children:"The data stored in memory can be of many types. For example, a person's age is stored as a numeric value and his or her address is stored as alphanumeric characters. Python has various standard data types that are used to define the operations possible on them and the storage method for each of them."}),"\n",(0,l.jsx)(t.p,{children:"Python has five standard data types \u2212"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Numbers"}),"\n",(0,l.jsx)(t.li,{children:"String"}),"\n",(0,l.jsx)(t.li,{children:"List"}),"\n",(0,l.jsx)(t.li,{children:"Tuple"}),"\n",(0,l.jsx)(t.li,{children:"Dictionary"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"python-numbers",children:"Python Numbers"}),"\n",(0,l.jsx)(t.p,{children:"Number data types store numeric values. Number objects are created when you assign a value to them. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"var1 = 1\nvar2 = 10\n"})}),"\n",(0,l.jsx)(t.p,{children:"You can also delete the reference to a number object by using the del statement. The syntax of the del statement is \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"del var1[,var2[,var3[....,varN]]]]\n"})}),"\n",(0,l.jsx)(t.p,{children:"You can delete a single object or multiple objects by using the del statement. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"del var\ndel var_a, var_b\n"})}),"\n",(0,l.jsx)(t.p,{children:"Python supports four different numerical types \u2212"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"int (signed integers)"}),"\n",(0,l.jsx)(t.li,{children:"long (long integers, they can also be represented in octal and hexadecimal)"}),"\n",(0,l.jsx)(t.li,{children:"float (floating point real values)"}),"\n",(0,l.jsx)(t.li,{children:"complex (complex numbers)"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Here are some examples of numbers \u2212"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"int"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"long"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"complex"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"51924361L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0.0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"3.14j"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"100"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-0x19323L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"15.20"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"45.j"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-786"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0122L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-21.9"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"9.322e-36j"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"080"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0xDEFABCECBDAECBFBAEl"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"32.3+e18"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:".876j"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-0490"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"535633629843L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-90."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-.6545+0J"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-0x260"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-052318172735L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-32.54e100"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"3e+26J"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0x69"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-4721885298529L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"70.2-E12"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4.53e-7j"})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Python allows you to use a lowercase l with long, but it is recommended that you use only an uppercase L to avoid confusion with the number 1. Python displays long integers with an uppercase L."}),"\n",(0,l.jsx)(t.li,{children:"A complex number consists of an ordered pair of real floating-point numbers denoted by x + yj, where x and y are the real numbers and j is the imaginary unit."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"python-strings",children:"Python Strings"}),"\n",(0,l.jsx)(t.p,{children:"Strings in Python are identified as a contiguous set of characters represented in the quotation marks. Python allows for either pairs of single or double quotes. Subsets of strings can be taken using the slice operator ([ ] and [:] ) with indexes starting at 0 in the beginning of the string and working their way from -1 at the end."}),"\n",(0,l.jsx)(t.p,{children:"The plus (+) sign is the string concatenation operator and the asterisk (*) is the repetition operator. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/python\n\nstr = 'Hello World!'\n\nprint str          # Prints complete string\nprint str[0]       # Prints first character of the string\nprint str[2:5]     # Prints characters starting from 3rd to 5th\nprint str[2:]      # Prints string starting from 3rd character\nprint str * 2      # Prints string two times\nprint str + \"TEST\" # Prints concatenated string\n"})}),"\n",(0,l.jsx)(t.p,{children:"This will produce the following result \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"Hello World!\nH\nllo\nllo World!\nHello World!Hello World!\nHello World!TEST\n"})}),"\n",(0,l.jsx)(t.h2,{id:"python-lists",children:"Python Lists"}),"\n",(0,l.jsx)(t.p,{children:"Lists are the most versatile of Python's compound data types. A list contains items separated by commas and enclosed within square brackets ([]). To some extent, lists are similar to arrays in C. One difference between them is that all the items belonging to a list can be of different data type."}),"\n",(0,l.jsx)(t.p,{children:"The values stored in a list can be accessed using the slice operator ([ ] and [:]) with indexes starting at 0 in the beginning of the list and working their way to end -1. The plus (+) sign is the list concatenation operator, and the asterisk (*) is the repetition operator. For example \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/python\n\nlist = ['abcd', 786, 2.23, 'john', 70.2]\ntinylist = [123, 'john']\n\nprint list          \t# Prints complete list\nprint list[0]       \t# Prints first element of the list\nprint list[1:3]     \t# Prints elements starting from 2nd till 3rd\nprint list[2:]      \t# Prints elements starting from 3rd element\nprint tinylist * 2  \t# Prints list two times\nprint list + tinylist  # Prints concatenated lists\n"})}),"\n",(0,l.jsx)(t.p,{children:"This produce the following result \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"['abcd', 786, 2.23, 'john', 70.2]\nabcd\n[786, 2.23]\n[2.23, 'john', 70.2]\n[123, 'john', 123, 'john']\n['abcd', 786, 2.23, 'john', 70.2, 123, 'john']\n"})}),"\n",(0,l.jsx)(t.h2,{id:"python-tuples",children:"Python Tuples"}),"\n",(0,l.jsx)(t.p,{children:"A tuple is another sequence data type that is similar to the list. A tuple consists of a number of values separated by commas. Unlike lists, however, tuples are enclosed within parentheses."}),"\n",(0,l.jsxs)(t.p,{children:["The main differences between lists and tuples are: Lists are enclosed in brackets ( [ ] ) and their elements and size can be changed, while tuples are enclosed in parentheses ( ( ) ) and cannot be updated. Tuples can be thought of as ",(0,l.jsx)(t.strong,{children:"read-only"})," lists. For example \u2212"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/python\n\ntuple = ( 'abcd', 786 , 2.23, 'john', 70.2  )\ntinytuple = (123, 'john')\n\nprint tuple               # Prints the complete tuple\nprint tuple[0]            # Prints first element of the tuple\nprint tuple[1:3]          # Prints elements of the tuple starting from 2nd till 3rd\nprint tuple[2:]           # Prints elements of the tuple starting from 3rd element\nprint tinytuple * 2       # Prints the contents of the tuple twice\nprint tuple + tinytuple   # Prints concatenated tuples\n"})}),"\n",(0,l.jsx)(t.p,{children:"This produce the following result \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"('abcd', 786, 2.23, 'john', 70.2)\nabcd\n(786, 2.23)\n(2.23, 'john', 70.2)\n(123, 'john', 123, 'john')\n('abcd', 786, 2.23, 'john', 70.2, 123, 'john')\n"})}),"\n",(0,l.jsx)(t.p,{children:"The following code is invalid with tuple, because we attempted to update a tuple, which is not allowed. Similar case is possible with lists \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/python\n\ntuple = ( 'abcd', 786 , 2.23, 'john', 70.2  )\nlist = [ 'abcd', 786 , 2.23, 'john', 70.2  ]\ntuple[2] = 1000    # Invalid syntax with tuple\nlist[2] = 1000     # Valid syntax with list\n"})}),"\n",(0,l.jsx)(t.h2,{id:"python-dictionary",children:"Python Dictionary"}),"\n",(0,l.jsx)(t.p,{children:"Python's dictionaries are kind of hash table type. They work like associative arrays or hashes found in Perl and consist of key-value pairs. A dictionary key can be almost any Python type, but are usually numbers or strings. Values, on the other hand, can be any arbitrary Python object."}),"\n",(0,l.jsxs)(t.p,{children:["Dictionaries are enclosed by curly braces (",") and values can be assigned and accessed using square braces ([]). For example \u2212"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/python\n\ndict = {}\ndict['one'] = \"This is one\"\ndict[2]     = \"This is two\"\n\ntinydict = {'name': 'john','code':6734, 'dept': 'sales'}\n\n\nprint dict['one']       # Prints value for 'one' key\nprint dict[2]           # Prints value for 2 key\nprint tinydict          # Prints complete dictionary\nprint tinydict.keys()   # Prints all the keys\nprint tinydict.values() # Prints all the values\n"})}),"\n",(0,l.jsx)(t.p,{children:"This produce the following result \u2212"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"This is one\nThis is two\n{'dept': 'sales', 'code': 6734, 'name': 'john'}\n['dept', 'code', 'name']\n['sales', 6734, 'john']\n"})}),"\n",(0,l.jsx)(t.p,{children:'Dictionaries have no concept of order among elements. It is incorrect to say that the elements are "out of order"; they are simply unordered.'}),"\n",(0,l.jsx)(t.h2,{id:"data-type-conversion",children:"Data Type Conversion"}),"\n",(0,l.jsx)(t.p,{children:"Sometimes, you may need to perform conversions between the built-in types. To convert between types, you simply use the type name as a function."}),"\n",(0,l.jsx)(t.p,{children:"There are several built-in functions to perform conversion from one data type to another. These functions return a new object representing the converted value."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"No."}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Function & Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"int(x [,base])"})," Converts x to an integer. base specifies the base if x is a string."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"long(x [,base] )"})," Converts x to a long integer. base specifies the base if x is a string."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"float(x)"})," Converts x to a floating-point number."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"complex(real [,imag])"})," Creates a complex number."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"str(x)"})," Converts object x to a string representation."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"repr(x)"})," Converts object x to an expression string."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"eval(str)"})," Evaluates a string and returns an object."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"tuple(s)"})," Converts s to a tuple."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"list(s)"})," Converts s to a list."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"set(s)"})," Converts s to a set."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"dict(d)"})," Creates a dictionary. d must be a sequence of (key,value) tuples."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"frozenset(s)"})," Converts s to a frozen set."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"13"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"chr(x)"})," Converts an integer to a character."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"unichr(x)"})," Converts an integer to a Unicode character."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"ord(x)"})," Converts a single character to its integer value."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"16"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.strong,{children:"hex(x)"})," Converts an integer to a hexadecimal string."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"17"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**oct(x) **Converts an integer to an octal string."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);