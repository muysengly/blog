"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[7721],{9240:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Document 001/011","title":"11. Lists","description":"The most...","source":"@site/docs/Document 001/011.md","sourceDirName":"Document 001","slug":"/Document 001/011","permalink":"/docs/Document 001/011","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"11. Lists","description":"The most...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":11},"sidebar":"sidebar_doc_001","previous":{"title":"10. Strings","permalink":"/docs/Document 001/010"},"next":{"title":"12. Tuples","permalink":"/docs/Document 001/012"}}');var i=s(4848),l=s(8453);const r={title:"11. Lists",description:"The most...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:11},c=void 0,d={},h=[{value:"Python Lists",id:"python-lists",level:2},{value:"Accessing Values in Lists",id:"accessing-values-in-lists",level:2},{value:"Updating Lists",id:"updating-lists",level:2},{value:"Delete List Elements",id:"delete-list-elements",level:2},{value:"Basic List Operations",id:"basic-list-operations",level:2},{value:"Indexing, Slicing, and Matrixes",id:"indexing-slicing-and-matrixes",level:2},{value:"Built-in List Functions &amp; Methods",id:"built-in-list-functions--methods",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The most basic data structure in Python is the ",(0,i.jsx)(t.strong,{children:"sequence"}),". Each element of a sequence is assigned a number - its position or index. The first index is zero, the second index is one, and so forth."]}),"\n",(0,i.jsx)(t.p,{children:"Python has six built-in types of sequences, but the most common ones are lists and tuples, which we would see in this tutorial."}),"\n",(0,i.jsx)(t.p,{children:"There are certain things you can do with all sequence types. These operations include indexing, slicing, adding, multiplying, and checking for membership. In addition, Python has built-in functions for finding the length of a sequence and for finding its largest and smallest elements."}),"\n",(0,i.jsx)(t.h2,{id:"python-lists",children:"Python Lists"}),"\n",(0,i.jsx)(t.p,{children:"The list is a most versatile datatype available in Python which can be written as a list of comma-separated values (items) between square brackets. Important thing about a list is that items in a list need not be of the same type."}),"\n",(0,i.jsx)(t.p,{children:"Creating a list is as simple as putting different comma-separated values between square brackets. For example \u2212"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'list1 = [\'physics\', \'chemistry\', 1997, 2000];\nlist2 = [1, 2, 3, 4, 5 ];\nlist3 = ["a", "b", "c", "d"]\n'})}),"\n",(0,i.jsx)(t.p,{children:"Similar to string indices, list indices start at 0, and lists can be sliced, concatenated and so on."}),"\n",(0,i.jsx)(t.h2,{id:"accessing-values-in-lists",children:"Accessing Values in Lists"}),"\n",(0,i.jsx)(t.p,{children:"To access values in lists, use the square brackets for slicing along with the index or indices to obtain value available at that index. For example \u2212"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"http://tpcg.io/GWTzcq",children:"Live Demo"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"#!/usr/bin/python\n\nlist1 = ['physics', 'chemistry', 1997, 2000];\nlist2 = [1, 2, 3, 4, 5, 6, 7 ];\nprint \"list1[0]: \", list1[0]\nprint \"list2[1:5]: \", list2[1:5]\n"})}),"\n",(0,i.jsx)(t.p,{children:"When the above code is executed, it produces the following result \u2212"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"list1[0]: physics\nlist2[1:5]: [2, 3, 4, 5]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"updating-lists",children:"Updating Lists"}),"\n",(0,i.jsx)(t.p,{children:"You can update single or multiple elements of lists by giving the slice on the left-hand side of the assignment operator, and you can add to elements in a list with the append() method. For example \u2212"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"http://tpcg.io/PHXpBD",children:"Live Demo"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"#!/usr/bin/python\n\nlist = ['physics', 'chemistry', 1997, 2000];\nprint \"Value available at index 2 : \"\nprint list[2]\nlist[2] = 2001;\nprint \"New value available at index 2 : \"\nprint list[2]\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"})," \u2212 append() method is discussed in subsequent section."]}),"\n",(0,i.jsx)(t.p,{children:"When the above code is executed, it produces the following result \u2212"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Value available at index 2 :\n1997\nNew value available at index 2 :\n2001\n"})}),"\n",(0,i.jsx)(t.h2,{id:"delete-list-elements",children:"Delete List Elements"}),"\n",(0,i.jsx)(t.p,{children:"To remove a list element, you can use either the del statement if you know exactly which element(s) you are deleting or the remove() method if you do not know. For example \u2212"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"http://tpcg.io/k3xK1x",children:"Live Demo"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"#!/usr/bin/python\n\nlist1 = ['physics', 'chemistry', 1997, 2000];\nprint list1\ndel list1[2];\nprint \"After deleting value at index 2 : \"\nprint list1\n"})}),"\n",(0,i.jsx)(t.p,{children:"When the above code is executed, it produces following result \u2212"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"['physics', 'chemistry', 1997, 2000]\nAfter deleting value at index 2 :\n['physics', 'chemistry', 2000]\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"})," \u2212 remove() method is discussed in subsequent section."]}),"\n",(0,i.jsx)(t.h2,{id:"basic-list-operations",children:"Basic List Operations"}),"\n",(0,i.jsx)(t.p,{children:"Lists respond to the + and * operators much like strings; they mean concatenation and repetition here too, except that the result is a new list, not a string."}),"\n",(0,i.jsx)(t.p,{children:"In fact, lists respond to all of the general sequence operations we used on strings in the prior chapter."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Python Expression"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Results"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"len([1, 2, 3])"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Length"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[1, 2, 3] + [4, 5, 6]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"[1, 2, 3, 4, 5, 6]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Concatenation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"['Hi!'] * 4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"['Hi!', 'Hi!', 'Hi!', 'Hi!']"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Repetition"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3 in [1, 2, 3]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"True"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Membership"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"for x in [1, 2, 3]: print x,"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1 2 3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Iteration"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"indexing-slicing-and-matrixes",children:"Indexing, Slicing, and Matrixes"}),"\n",(0,i.jsx)(t.p,{children:"Because lists are sequences, indexing and slicing work the same way for lists as they do for strings."}),"\n",(0,i.jsx)(t.p,{children:"Assuming following input \u2212"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"L = ['spam', 'Spam', 'SPAM!']\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Python Expression"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Results"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"L[2]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"SPAM!"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Offsets start at zero"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"L[-2]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Spam"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Negative: count from the right"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"L[1:]"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"['Spam', 'SPAM!']"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Slicing fetches sections"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"built-in-list-functions--methods",children:"Built-in List Functions & Methods"}),"\n",(0,i.jsx)(t.p,{children:"Python includes the following list functions \u2212"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Function with Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_cmp.htm",children:"cmp(list1, list2)"}),"Compares elements of both lists."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_len.htm",children:"len(list)"}),"Gives the total length of the list."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_max.htm",children:"max(list)"}),"Returns item from the list with max value."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_min.htm",children:"min(list)"}),"Returns item from the list with min value."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_list.htm",children:"list(seq)"}),"Converts a tuple into list."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Python includes following list methods"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Methods with Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_append.htm",children:"list.append(obj)"}),"Appends object obj to list"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_count.htm",children:"list.count(obj)"}),"Returns count of how many times obj occurs in list"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_extend.htm",children:"list.extend(seq)"}),"Appends the contents of seq to list"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_index.htm",children:"list.index(obj)"}),"Returns the lowest index in list that obj appears"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_insert.htm",children:"list.insert(index, obj)"}),"Inserts object obj into list at offset index"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["[list.pop(obj=list",(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_pop.htm",children:"-1])"}),"Removes and returns last object or obj from list"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_remove.htm",children:"list.remove(obj)"}),"Removes object obj from list"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_reverse.htm",children:"list.reverse()"}),"Reverses objects of list in place"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["[list.sort(",(0,i.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/list_sort.htm",children:"func])"}),"Sorts objects of list, use compare func if given"]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);