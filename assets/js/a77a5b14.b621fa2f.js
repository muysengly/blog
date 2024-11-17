"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[6581],{9417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Document 001/014","title":"14. Date & Time","description":"A Python...","source":"@site/docs/Document 001/014.md","sourceDirName":"Document 001","slug":"/Document 001/014","permalink":"/docs/Document 001/014","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"14. Date & Time","description":"A Python...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":14},"sidebar":"sidebar_doc_001","previous":{"title":"13. Dictionary","permalink":"/docs/Document 001/013"},"next":{"title":"15. Functions","permalink":"/docs/Document 001/015"}}');var s=n(4848),r=n(8453);const l={title:"14. Date & Time",description:"A Python...",lead:"",date:new Date("2022-01-25T13:41:39.000Z"),lastmod:new Date("2022-01-25T13:41:39.000Z"),draft:!1,images:[],type:"docs",toc:!0,weight:14},c=void 0,d={},a=[{value:"What is Tick?",id:"what-is-tick",level:2},{value:"Example",id:"example",level:2},{value:"What is TimeTuple?",id:"what-is-timetuple",level:2},{value:"Getting current time",id:"getting-current-time",level:2},{value:"Getting formatted time",id:"getting-formatted-time",level:2},{value:"Getting calendar for a month",id:"getting-calendar-for-a-month",level:2},{value:"The <em>time</em> Module",id:"the-time-module",level:2},{value:"The <em>calendar</em> Module",id:"the-calendar-module",level:2},{value:"Other Modules &amp; Functions",id:"other-modules--functions",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A Python program can handle date and time in several ways. Converting between date formats is a common chore for computers. Python's time and calendar modules help track dates and times."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-tick",children:"What is Tick?"}),"\n",(0,s.jsx)(t.p,{children:"Time intervals are floating-point numbers in units of seconds. Particular instants in time are expressed in seconds since 00:00:00 hrs January 1, 1970(epoch)."}),"\n",(0,s.jsxs)(t.p,{children:["There is a popular ",(0,s.jsx)(t.strong,{children:"time"})," module available in Python which provides functions for working with times, and for converting between representations. The function ",(0,s.jsx)(t.em,{children:"time.time()"})," returns the current system time in ticks since 00:00:00 hrs January 1, 1970(epoch)."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/AiJa9O",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'#!/usr/bin/python\nimport time;  # This is required to include time module.\n\nticks = time.time()\nprint "Number of ticks since 12:00am, January 1, 1970:", ticks\n'})}),"\n",(0,s.jsx)(t.p,{children:"This would produce a result something as follows \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Number of ticks since 12:00am, January 1, 1970: 7186862.73399\n"})}),"\n",(0,s.jsx)(t.p,{children:"Date arithmetic is easy to do with ticks. However, dates before the epoch cannot be represented in this form. Dates in the far future also cannot be represented this way - the cutoff point is sometime in 2038 for UNIX and Windows."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-timetuple",children:"What is TimeTuple?"}),"\n",(0,s.jsx)(t.p,{children:"Many of Python's time functions handle time as a tuple of 9 numbers, as shown below \u2212"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Index"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Field"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Values"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4-digit year"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2008"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Month"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 12"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Day"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 31"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Hour"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 23"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Minute"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 59"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Second"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 61 (60 or 61 are leap-seconds)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Day of Week"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 6 (0 is Monday)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Day of year"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 366 (Julian day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Daylight savings"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-1, 0, 1, -1 means library determines DST"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The above tuple is equivalent to ",(0,s.jsx)(t.strong,{children:"struct_time"})," structure. This structure has following attributes \u2212"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Index"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Attributes"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Values"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_year"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2008"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_mon"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 12"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_mday"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 31"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_hour"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 23"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_min"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 59"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_sec"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 61 (60 or 61 are leap-seconds)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_wday"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0 to 6 (0 is Monday)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_yday"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1 to 366 (Julian day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tm_isdst"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-1, 0, 1, -1 means library determines DST"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"getting-current-time",children:"Getting current time"}),"\n",(0,s.jsxs)(t.p,{children:["To translate a time instant from a ",(0,s.jsx)(t.em,{children:"seconds since the epoch"})," floating-point value into a time-tuple, pass the floating-point value to a function (e.g., localtime) that returns a time-tuple with all nine items valid."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/T9ZAOe",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'#!/usr/bin/python\nimport time;\n\nlocaltime = time.localtime(time.time())\nprint "Local current time :", localtime\n'})}),"\n",(0,s.jsx)(t.p,{children:"This would produce the following result, which could be formatted in any other presentable form \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Local current time : time.struct_time(tm_year=2013, tm_mon=7,\ntm_mday=17, tm_hour=21, tm_min=26, tm_sec=3, tm_wday=2, tm_yday=198, tm_isdst=0)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getting-formatted-time",children:"Getting formatted time"}),"\n",(0,s.jsx)(t.p,{children:"You can format any time as per your requirement, but simple method to get time in readable format is asctime() \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/Pn2IUS",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'#!/usr/bin/python\nimport time;\n\nlocaltime = time.asctime( time.localtime(time.time()) )\nprint "Local current time :", localtime\n'})}),"\n",(0,s.jsx)(t.p,{children:"This would produce the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Local current time : Tue Jan 13 10:17:09 2009\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getting-calendar-for-a-month",children:"Getting calendar for a month"}),"\n",(0,s.jsx)(t.p,{children:"The calendar module gives a wide range of methods to play with yearly and monthly calendars. Here, we print a calendar for a given month ( Jan 2008 ) \u2212"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://tpcg.io/R9vlY8",children:"Live Demo"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'#!/usr/bin/python\nimport calendar\n\ncal = calendar.month(2008, 1)\nprint "Here is the calendar:"\nprint cal\n'})}),"\n",(0,s.jsx)(t.p,{children:"This would produce the following result \u2212"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Here is the calendar:\nJanuary 2008\nMo Tu We Th Fr Sa Su\n1 2 3 4 5 6\n7 8 9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"the-time-module",children:["The ",(0,s.jsx)(t.em,{children:"time"})," Module"]}),"\n",(0,s.jsxs)(t.p,{children:["There is a popular ",(0,s.jsx)(t.strong,{children:"time"})," module available in Python which provides functions for working with times and for converting between representations. Here is the list of all available methods \u2212"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Function with Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_altzone.htm",children:"time.altzone"}),"The offset of the local DST timezone, in seconds west of UTC, if one is defined. This is negative if the local DST timezone is east of UTC (as in Western Europe, including the UK). Only use this if daylight is nonzero."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["[time.asctime(",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_asctime.htm",children:"tupletime])"}),"Accepts a time-tuple and returns a readable 24-character string such as 'Tue Dec 11 18:07:14 2008'."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_clock.htm",children:"time.clock( )"}),"Returns the current CPU time as a floating-point number of seconds. To measure computational costs of different approaches, the value of time.clock is more useful than that of time.time()."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["[time.ctime(",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_ctime.htm",children:"secs])"}),"Like asctime(localtime(secs)) and without arguments is like asctime( )"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["[time.gmtime(",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_gmtime.htm",children:"secs])"}),"Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the UTC time. Note : t.tm_isdst is always 0"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["[time.localtime(",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_localtime.htm",children:"secs])"}),"Accepts an instant expressed in seconds since the epoch and returns a time-tuple t with the local time (t.tm_isdst is 0 or 1, depending on whether DST applies to instant secs by local rules)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_mktime.htm",children:"time.mktime(tupletime)"}),"Accepts an instant expressed as a time-tuple in local time and returns a floating-point value with the instant expressed in seconds since the epoch."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_sleep.htm",children:"time.sleep(secs)"}),"Suspends the calling thread for secs seconds."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["[time.strftime(fmt",(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_strftime.htm",children:",tupletime])"}),"Accepts an instant expressed as a time-tuple in local time and returns a string representing the instant as specified by string fmt."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_strptime.htm",children:"time.strptime(str,fmt='%a %b %d %H:%M:%S %Y')"}),"Parses str according to format string fmt and returns the instant in time-tuple format."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_time.htm",children:"time.time( )"}),"Returns the current time instant, a floating-point number of seconds since the epoch."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.a,{href:"https://www.tutorialspoint.com/python/time_tzset.htm",children:"time.tzset()"}),"Resets the time conversion rules used by the library routines. The environment variable TZ specifies how this is done."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Let us go through the functions briefly \u2212"}),"\n",(0,s.jsx)(t.p,{children:"There are following two important attributes available with time module \u2212"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Attribute with Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"time.timezone"})," Attribute time.timezone is the offset in seconds of the local time zone (without DST) from UTC (",(0,s.jsx)(t.code,{children:">0"})," in the Americas; ",(0,s.jsx)(t.code,{children:"<=0"})," in most of Europe, Asia, Africa)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.strong,{children:"time.tzname"})," Attribute time.tzname is a pair of locale-dependent strings, which are the names of the local time zone without and with DST, respectively."]})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"the-calendar-module",children:["The ",(0,s.jsx)(t.em,{children:"calendar"})," Module"]}),"\n",(0,s.jsx)(t.p,{children:"The calendar module supplies calendar-related functions, including functions to print a text calendar for a given month or year."}),"\n",(0,s.jsx)(t.p,{children:"By default, calendar takes Monday as the first day of the week and Sunday as the last one. To change this, call calendar.setfirstweekday() function."}),"\n",(0,s.jsxs)(t.p,{children:["Here is a list of functions available with the ",(0,s.jsx)(t.em,{children:"calendar"})," module \u2212"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sr.No."}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Function with Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["**calendar.calendar(year,w=2,l=1,c=6)**Returns a multiline string with a calendar for year year formatted into three columns separated by c spaces. w is the width in characters of each date; each line has length 21",(0,s.jsx)(t.em,{children:"w+18+2"}),"c. l is the number of lines for each week."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.firstweekday( )**Returns the current setting for the weekday that starts each week. By default, when calendar is first imported, this is 0, meaning Monday."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.isleap(year)**Returns True if year is a leap year; otherwise, False."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.leapdays(y1,y2)**Returns the total number of leap days in the years within range(y1,y2)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.month(year,month,w=2,l=1)**Returns a multiline string with a calendar for month month of year year, one line per week plus two header lines. w is the width in characters of each date; each line has length 7*w+6. l is the number of lines for each week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.monthcalendar(year,month)**Returns a list of lists of ints. Each sublist denotes a week. Days outside month month of year year are set to 0; days within the month are set to their day-of-month, 1 and up."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.monthrange(year,month)**Returns two integers. The first one is the code of the weekday for the first day of the month month in year year; the second one is the number of days in the month. Weekday codes are 0 (Monday) to 6 (Sunday); month numbers are 1 to 12."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.prcal(year,w=2,l=1,c=6)**Like print calendar.calendar(year,w,l,c)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.prmonth(year,month,w=2,l=1)**Like print calendar.month(year,month,w,l)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.setfirstweekday(weekday)**Sets the first day of each week to weekday code weekday. Weekday codes are 0 (Monday) to 6 (Sunday)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.timegm(tupletime)**The inverse of time.gmtime: accepts a time instant in time-tuple form and returns the same instant as a floating-point number of seconds since the epoch."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**calendar.weekday(year,month,day)**Returns the weekday code for the given date. Weekday codes are 0 (Monday) to 6 (Sunday); month numbers are 1 (January) to 12 (December)."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"other-modules--functions",children:"Other Modules & Functions"}),"\n",(0,s.jsx)(t.p,{children:"If you are interested, then here you would find a list of other important modules and functions to play with date & time in Python \u2212"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"http://docs.python.org/library/datetime.html#module-datetime",children:["The ",(0,s.jsx)(t.em,{children:"datetime"})," Module"]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"http://www.twinsun.com/tz/tz-link.htm",children:["The ",(0,s.jsx)(t.em,{children:"pytz"})," Module"]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"http://labix.org/python-dateutil",children:["The ",(0,s.jsx)(t.em,{children:"dateutil"})," Module"]})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);