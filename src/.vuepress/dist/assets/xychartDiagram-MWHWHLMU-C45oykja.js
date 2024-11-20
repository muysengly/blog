import{m as h,a_ as ci,a$ as Bt,J as Ot,aA as Mt,j as zt,aZ as gi,at as bt,as as Ft,ar as ui,v as xi,aT as di,k as pi,N as fi,A as Nt,w as yi,B as mi,L as bi,M as Ai,F as Si}from"./mermaid.esm.min-J-voptPM.js";import"./app-mrkV_V0i.js";var pt=function(){var s=h(function(B,o,l,c){for(l=l||{},c=B.length;c--;l[B[c]]=o);return l},"o"),t=[1,10,12,14,16,18,19,21,23],i=[2,6],e=[1,3],a=[1,5],g=[1,6],u=[1,7],y=[1,5,10,12,14,16,18,19,21,23,34,35,36],m=[1,25],R=[1,26],k=[1,28],L=[1,29],$=[1,30],I=[1,31],_=[1,32],v=[1,33],p=[1,34],S=[1,35],r=[1,36],D=[1,37],Z=[1,43],Lt=[1,42],Dt=[1,47],it=[1,50],b=[1,10,12,14,16,18,19,21,23,34,35,36],rt=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],P=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],Pt=[1,64],lt={trace:h(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:h(function(B,o,l,c,f,n,C){var x=n.length-1;switch(f){case 5:c.setOrientation(n[x]);break;case 9:c.setDiagramTitle(n[x].text.trim());break;case 12:c.setLineData({text:"",type:"text"},n[x]);break;case 13:c.setLineData(n[x-1],n[x]);break;case 14:c.setBarData({text:"",type:"text"},n[x]);break;case 15:c.setBarData(n[x-1],n[x]);break;case 16:this.$=n[x].trim(),c.setAccTitle(this.$);break;case 17:case 18:this.$=n[x].trim(),c.setAccDescription(this.$);break;case 19:this.$=n[x-1];break;case 20:this.$=[Number(n[x-2]),...n[x]];break;case 21:this.$=[Number(n[x])];break;case 22:c.setXAxisTitle(n[x]);break;case 23:c.setXAxisTitle(n[x-1]);break;case 24:c.setXAxisTitle({type:"text",text:""});break;case 25:c.setXAxisBand(n[x]);break;case 26:c.setXAxisRangeData(Number(n[x-2]),Number(n[x]));break;case 27:this.$=n[x-1];break;case 28:this.$=[n[x-2],...n[x]];break;case 29:this.$=[n[x]];break;case 30:c.setYAxisTitle(n[x]);break;case 31:c.setYAxisTitle(n[x-1]);break;case 32:c.setYAxisTitle({type:"text",text:""});break;case 33:c.setYAxisRangeData(Number(n[x-2]),Number(n[x]));break;case 37:this.$={text:n[x],type:"text"};break;case 38:this.$={text:n[x],type:"text"};break;case 39:this.$={text:n[x],type:"markdown"};break;case 40:this.$=n[x];break;case 41:this.$=n[x-1]+""+n[x];break}},"anonymous"),table:[s(t,i,{3:1,4:2,7:4,5:e,34:a,35:g,36:u}),{1:[3]},s(t,i,{4:2,7:4,3:8,5:e,34:a,35:g,36:u}),s(t,i,{4:2,7:4,6:9,3:10,5:e,8:[1,11],34:a,35:g,36:u}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},s(y,[2,34]),s(y,[2,35]),s(y,[2,36]),{1:[2,1]},s(t,i,{4:2,7:4,3:21,5:e,34:a,35:g,36:u}),{1:[2,3]},s(y,[2,5]),s(t,[2,7],{4:22,34:a,35:g,36:u}),{11:23,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},{11:39,13:38,24:Z,27:Lt,29:40,30:41,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},{11:45,15:44,27:Dt,33:46,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},{11:49,17:48,24:it,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},{11:52,17:51,24:it,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},{20:[1,53]},{22:[1,54]},s(b,[2,18]),{1:[2,2]},s(b,[2,8]),s(b,[2,9]),s(rt,[2,37],{40:55,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D}),s(rt,[2,38]),s(rt,[2,39]),s(P,[2,40]),s(P,[2,42]),s(P,[2,43]),s(P,[2,44]),s(P,[2,45]),s(P,[2,46]),s(P,[2,47]),s(P,[2,48]),s(P,[2,49]),s(P,[2,50]),s(P,[2,51]),s(b,[2,10]),s(b,[2,22],{30:41,29:56,24:Z,27:Lt}),s(b,[2,24]),s(b,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},s(b,[2,11]),s(b,[2,30],{33:60,27:Dt}),s(b,[2,32]),{31:[1,61]},s(b,[2,12]),{17:62,24:it},{25:63,27:Pt},s(b,[2,14]),{17:65,24:it},s(b,[2,16]),s(b,[2,17]),s(P,[2,41]),s(b,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},s(b,[2,31]),{27:[1,69]},s(b,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},s(b,[2,15]),s(b,[2,26]),s(b,[2,27]),{11:59,32:72,37:24,38:m,39:R,40:27,41:k,42:L,43:$,44:I,45:_,46:v,47:p,48:S,49:r,50:D},s(b,[2,33]),s(b,[2,19]),{25:73,27:Pt},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:h(function(B,o){if(o.recoverable)this.trace(B);else{var l=new Error(B);throw l.hash=o,l}},"parseError"),parse:h(function(B){var o=this,l=[0],c=[],f=[null],n=[],C=this.table,x="",st=0,Et=0,ni=0,hi=2,vt=1,oi=n.slice.call(arguments,1),A=Object.create(this.lexer),z={yy:{}};for(var ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ct)&&(z.yy[ct]=this.yy[ct]);A.setInput(B,z.yy),z.yy.lexer=A,z.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var gt=A.yylloc;n.push(gt);var ri=A.options&&A.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function li(T){l.length=l.length-2*T,f.length=f.length-T,n.length=n.length-T}h(li,"popStack");function $t(){var T;return T=c.pop()||A.lex()||vt,typeof T!="number"&&(T instanceof Array&&(c=T,T=c.pop()),T=o.symbols_[T]||T),T}h($t,"lex");for(var w,ut,O,E,Bi,xt,F={},at,M,It,nt;;){if(O=l[l.length-1],this.defaultActions[O]?E=this.defaultActions[O]:((w===null||typeof w>"u")&&(w=$t()),E=C[O]&&C[O][w]),typeof E>"u"||!E.length||!E[0]){var dt="";nt=[];for(at in C[O])this.terminals_[at]&&at>hi&&nt.push("'"+this.terminals_[at]+"'");A.showPosition?dt="Parse error on line "+(st+1)+`:
`+A.showPosition()+`
Expecting `+nt.join(", ")+", got '"+(this.terminals_[w]||w)+"'":dt="Parse error on line "+(st+1)+": Unexpected "+(w==vt?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(dt,{text:A.match,token:this.terminals_[w]||w,line:A.yylineno,loc:gt,expected:nt})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+w);switch(E[0]){case 1:l.push(w),f.push(A.yytext),n.push(A.yylloc),l.push(E[1]),w=null,ut?(w=ut,ut=null):(Et=A.yyleng,x=A.yytext,st=A.yylineno,gt=A.yylloc,ni>0);break;case 2:if(M=this.productions_[E[1]][1],F.$=f[f.length-M],F._$={first_line:n[n.length-(M||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(M||1)].first_column,last_column:n[n.length-1].last_column},ri&&(F._$.range=[n[n.length-(M||1)].range[0],n[n.length-1].range[1]]),xt=this.performAction.apply(F,[x,Et,st,z.yy,E[1],f,n].concat(oi)),typeof xt<"u")return xt;M&&(l=l.slice(0,-1*M*2),f=f.slice(0,-1*M),n=n.slice(0,-1*M)),l.push(this.productions_[E[1]][0]),f.push(F.$),n.push(F._$),It=C[l[l.length-2]][l[l.length-1]],l.push(It);break;case 3:return!0}}return!0},"parse")},ai=function(){var B={EOF:1,parseError:h(function(o,l){if(this.yy.parser)this.yy.parser.parseError(o,l);else throw new Error(o)},"parseError"),setInput:h(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:h(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:h(function(o){var l=o.length,c=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===f.length?this.yylloc.first_column:0)+f[f.length-c.length].length-c[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:h(function(){return this._more=!0,this},"more"),reject:h(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:h(function(o){this.unput(this.match.slice(o))},"less"),pastInput:h(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:h(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:h(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:h(function(o,l){var c,f,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),f=o[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],c=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var C in n)this[C]=n[C];return!1}return!1},"test_match"),next:h(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,c,f;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),C=0;C<n.length;C++)if(c=this._input.match(this.rules[n[C]]),c&&(!l||c[0].length>l[0].length)){if(l=c,f=C,this.options.backtrack_lexer){if(o=this.test_match(c,n[C]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,n[f]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:h(function(){var o=this.next();return o||this.lex()},"lex"),begin:h(function(o){this.conditionStack.push(o)},"begin"),popState:h(function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:h(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:h(function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:h(function(o){this.begin(o)},"pushState"),stateStackSize:h(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:h(function(o,l,c,f){switch(c){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return B}();lt.lexer=ai;function et(){this.yy={}}return h(et,"Parser"),et.prototype=lt,lt.Parser=et,new et}();pt.parser=pt;var wi=pt;function ft(s){return s.type==="bar"}h(ft,"isBarPlot");function At(s){return s.type==="band"}h(At,"isBandAxisData");function N(s){return s.type==="linear"}h(N,"isLinearAxisData");var X,Xt=(X=class{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((g,u)=>Math.max(u.length,g),0)*i,height:i};let e={width:0,height:0},a=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(let g of t){let u=ci(a,1,g),y=u?u.width:g.length*i,m=u?u.height:i;e.width=Math.max(e.width,y),e.height=Math.max(e.height,m)}return a.remove(),e}},h(X,"TextDimensionCalculatorWithFont"),X),W,Wt=(W=class{constructor(t,i,e,a){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=a,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){let t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){.7*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(.7*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let e=this.getLabelDimension(),a=.2*t.width;this.outerPadding=Math.min(e.width/2,a);let g=e.height+this.axisConfig.labelPadding*2;this.labelTextHeight=e.height,g<=i&&(i-=g,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),a=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,a<=i&&(i-=a,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let e=this.getLabelDimension(),a=.2*t.height;this.outerPadding=Math.min(e.height/2,a);let g=e.width+this.axisConfig.labelPadding*2;g<=i&&(i-=g,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),a=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,a<=i&&(i-=a,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){let i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${i},${this.getScaleValue(e)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(e)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i} L ${this.getScaleValue(e)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(e)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},h(W,"BaseAxis"),W),Y,Ci=(Y=class extends Wt{constructor(t,i,e,a,g){super(t,a,g,i),this.categories=e,this.scale=Bt().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=Bt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Ot.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},h(Y,"BandAxis"),Y),V,ki=(V=class extends Wt{constructor(t,i,e,a,g){super(t,a,g,i),this.domain=e,this.scale=Mt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){let t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=Mt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}},h(V,"LinearAxis"),V);function yt(s,t,i,e){let a=new Xt(e);return At(s)?new Ci(t,i,s.categories,s.title,a):new ki(t,i,[s.min,s.max],s.title,a)}h(yt,"getAxis");var U,_i=(U=class{constructor(t,i,e,a){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=a,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){let i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),a=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=a&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=a,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){let t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}},h(U,"ChartTitle"),U);function Yt(s,t,i,e){let a=new Xt(e);return new _i(a,s,t,i)}h(Yt,"getChartTitleComponent");var H,Ti=(H=class{constructor(t,i,e,a,g){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=a,this.plotIndex=g}getDrawableElement(){let t=this.plotData.data.map(e=>[this.xAxis.getScaleValue(e[0]),this.yAxis.getScaleValue(e[1])]),i;return this.orientation==="horizontal"?i=zt().y(e=>e[0]).x(e=>e[1])(t):i=zt().x(e=>e[0]).y(e=>e[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},h(H,"LinePlot"),H),j,Ri=(j=class{constructor(t,i,e,a,g,u){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=a,this.orientation=g,this.plotIndex=u}getDrawableElement(){let t=this.barData.data.map(a=>[this.xAxis.getScaleValue(a[0]),this.yAxis.getScaleValue(a[1])]),i=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),e=i/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(a=>({x:this.boundingRect.x,y:a[0]-e,height:i,width:a[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(a=>({x:a[0]-e,y:a[1],width:i,height:this.boundingRect.y+this.boundingRect.height-a[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},h(j,"BarPlot"),j),G,Li=(G=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");let t=[];for(let[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{let a=new Ti(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...a.getDrawableElement())}break;case"bar":{let a=new Ri(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...a.getDrawableElement())}break}return t}},h(G,"BasePlot"),G);function Vt(s,t,i){return new Li(s,t,i)}h(Vt,"getPlotComponent");var Q,Di=(Q=class{constructor(t,i,e,a){this.chartConfig=t,this.chartData=i,this.componentStore={title:Yt(t,i,e,a),plot:Vt(t,i,e),xAxis:yt(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},a),yAxis:yt(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},a)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,a=0,g=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),u=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),y=this.componentStore.plot.calculateSpace({width:g,height:u});t-=y.width,i-=y.height,y=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),a=y.height,i-=y.height,this.componentStore.xAxis.setAxisPosition("bottom"),y=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=y.height,this.componentStore.yAxis.setAxisPosition("left"),y=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=y.width,t-=y.width,t>0&&(g+=t,t=0),i>0&&(u+=i,i=0),this.componentStore.plot.calculateSpace({width:g,height:u}),this.componentStore.plot.setBoundingBoxXY({x:e,y:a}),this.componentStore.xAxis.setRange([e,e+g]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:a+u}),this.componentStore.yAxis.setRange([a,a+u]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:a}),this.chartData.plots.some(m=>ft(m))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,a=0,g=0,u=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),y=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),m=this.componentStore.plot.calculateSpace({width:u,height:y});t-=m.width,i-=m.height,m=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=m.height,i-=m.height,this.componentStore.xAxis.setAxisPosition("left"),m=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=m.width,a=m.width,this.componentStore.yAxis.setAxisPosition("top"),m=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=m.height,g=e+m.height,t>0&&(u+=t,t=0),i>0&&(y+=i,i=0),this.componentStore.plot.calculateSpace({width:u,height:y}),this.componentStore.plot.setBoundingBoxXY({x:a,y:g}),this.componentStore.yAxis.setRange([a,a+u]),this.componentStore.yAxis.setBoundingBoxXY({x:a,y:e}),this.componentStore.xAxis.setRange([g,g+y]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:g}),this.chartData.plots.some(R=>ft(R))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();let t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(let i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},h(Q,"Orchestrator"),Q),q,Pi=(q=class{static build(t,i,e,a){return new Di(t,i,e,a).getDrawableElement()}},h(q,"XYChartBuilder"),q),J=0,Ut,K=Ct(),tt=wt(),d=kt(),mt=tt.plotColorPalette.split(",").map(s=>s.trim()),ht=!1,St=!1;function wt(){let s=gi(),t=bt();return Ft(s.xyChart,t.themeVariables.xyChart)}h(wt,"getChartDefaultThemeConfig");function Ct(){let s=bt();return Ft(ui.xyChart,s.xyChart)}h(Ct,"getChartDefaultConfig");function kt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}h(kt,"getChartDefaultData");function ot(s){let t=bt();return fi(s.trim(),t)}h(ot,"textSanitizer");function Ht(s){Ut=s}h(Ht,"setTmpSVGG");function jt(s){s==="horizontal"?K.chartOrientation="horizontal":K.chartOrientation="vertical"}h(jt,"setOrientation");function Gt(s){d.xAxis.title=ot(s.text)}h(Gt,"setXAxisTitle");function _t(s,t){d.xAxis={type:"linear",title:d.xAxis.title,min:s,max:t},ht=!0}h(_t,"setXAxisRangeData");function Qt(s){d.xAxis={type:"band",title:d.xAxis.title,categories:s.map(t=>ot(t.text))},ht=!0}h(Qt,"setXAxisBand");function qt(s){d.yAxis.title=ot(s.text)}h(qt,"setYAxisTitle");function Zt(s,t){d.yAxis={type:"linear",title:d.yAxis.title,min:s,max:t},St=!0}h(Zt,"setYAxisRangeData");function Jt(s){let t=Math.min(...s),i=Math.max(...s),e=N(d.yAxis)?d.yAxis.min:1/0,a=N(d.yAxis)?d.yAxis.max:-1/0;d.yAxis={type:"linear",title:d.yAxis.title,min:Math.min(e,t),max:Math.max(a,i)}}h(Jt,"setYAxisRangeFromPlotData");function Tt(s){let t=[];if(s.length===0)return t;if(!ht){let i=N(d.xAxis)?d.xAxis.min:1/0,e=N(d.xAxis)?d.xAxis.max:-1/0;_t(Math.min(i,1),Math.max(e,s.length))}if(St||Jt(s),At(d.xAxis)&&(t=d.xAxis.categories.map((i,e)=>[i,s[e]])),N(d.xAxis)){let i=d.xAxis.min,e=d.xAxis.max,a=(e-i)/(s.length-1),g=[];for(let u=i;u<=e;u+=a)g.push(`${u}`);t=g.map((u,y)=>[u,s[y]])}return t}h(Tt,"transformDataWithoutCategory");function Rt(s){return mt[s===0?0:s%mt.length]}h(Rt,"getPlotColorFromPalette");function Kt(s,t){let i=Tt(t);d.plots.push({type:"line",strokeFill:Rt(J),strokeWidth:2,data:i}),J++}h(Kt,"setLineData");function ti(s,t){let i=Tt(t);d.plots.push({type:"bar",fill:Rt(J),data:i}),J++}h(ti,"setBarData");function ii(){if(d.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return d.title=Nt(),Pi.build(K,d,tt,Ut)}h(ii,"getDrawableElem");function ei(){return tt}h(ei,"getChartThemeConfig");function si(){return K}h(si,"getChartConfig");var Ei=h(function(){xi(),J=0,K=Ct(),d=kt(),tt=wt(),mt=tt.plotColorPalette.split(",").map(s=>s.trim()),ht=!1,St=!1},"clear"),vi={getDrawableElem:ii,clear:Ei,setAccTitle:yi,getAccTitle:mi,setDiagramTitle:bi,getDiagramTitle:Nt,getAccDescription:Ai,setAccDescription:Si,setOrientation:jt,setXAxisTitle:Gt,setXAxisRangeData:_t,setXAxisBand:Qt,setYAxisTitle:qt,setYAxisRangeData:Zt,setLineData:Kt,setBarData:ti,setTmpSVGG:Ht,getChartThemeConfig:ei,getChartConfig:si},$i=h((s,t,i,e)=>{let a=e.db,g=a.getChartThemeConfig(),u=a.getChartConfig();function y(p){return p==="top"?"text-before-edge":"middle"}h(y,"getDominantBaseLine");function m(p){return p==="left"?"start":p==="right"?"end":"middle"}h(m,"getTextAnchor");function R(p){return`translate(${p.x}, ${p.y}) rotate(${p.rotation||0})`}h(R,"getTextTransformation"),Ot.debug(`Rendering xychart chart
`+s);let k=di(t),L=k.append("g").attr("class","main"),$=L.append("rect").attr("width",u.width).attr("height",u.height).attr("class","background");pi(k,u.height,u.width,!0),k.attr("viewBox",`0 0 ${u.width} ${u.height}`),$.attr("fill",g.backgroundColor),a.setTmpSVGG(k.append("g").attr("class","mermaid-tmp-group"));let I=a.getDrawableElem(),_={};function v(p){let S=L,r="";for(let[D]of p.entries()){let Z=L;D>0&&_[r]&&(Z=_[r]),r+=p[D],S=_[r],S||(S=_[r]=Z.append("g").attr("class",p[D]))}return S}h(v,"getGroup");for(let p of I){if(p.data.length===0)continue;let S=v(p.groupTexts);switch(p.type){case"rect":S.selectAll("rect").data(p.data).enter().append("rect").attr("x",r=>r.x).attr("y",r=>r.y).attr("width",r=>r.width).attr("height",r=>r.height).attr("fill",r=>r.fill).attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break;case"text":S.selectAll("text").data(p.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",r=>r.fill).attr("font-size",r=>r.fontSize).attr("dominant-baseline",r=>y(r.verticalPos)).attr("text-anchor",r=>m(r.horizontalPos)).attr("transform",r=>R(r)).text(r=>r.text);break;case"path":S.selectAll("path").data(p.data).enter().append("path").attr("d",r=>r.path).attr("fill",r=>r.fill?r.fill:"none").attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break}}},"draw"),Ii={draw:$i},Oi={parser:wi,db:vi,renderer:Ii};export{Oi as diagram};
