(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(i,h,f){function g(c,a){var b;
function d(){var n=arguments;var j=this;var o=function(){b=null;c.apply(j,n)};clearTimeout(b);
b=setTimeout(o,a)}function k(){clearTimeout(b)}d.cancel=k;return d}h.exports=g},{}],2:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],3:[function(f,i,g){i.exports=function h(a){var b;return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)
}return b}}},{}],4:[function(f,i,g){i.exports=function h(c,a){var b=null;return function(){if(b===null){c.apply(this,arguments);
b=setTimeout(function(){b=null},a)}}}},{}],5:[function(i,h,g){var f=(function(){var s=["","-webkit-","-moz-","-o-","-ms-"];
var u={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
var d={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
var r={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
var a={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
var t=document.createElement("_");var q=["","-webkit-","-moz-","-o-","-ms-"];function b(j){for(var l=0;
l<q.length;l++){var k=s[l]+j;if(t.style[k]!==undefined){return k}}return undefined
}var c=["-webkit-","","-moz-","-o-","-ms-"];function p(j){for(var l=0;l<c.length;
l++){var k=c[l]+j;if(t.style[k]!==undefined){return k}}return undefined}return{filter:p("filter"),transform:b("transform"),transformOrigin:b("transform-origin"),transition:b("transition"),transitionDelay:b("transition-delay"),transitionDuration:b("transition-duration"),transitionProperty:b("transition-property"),transitionTimingFunction:b("transition-timing-function"),transitionEnd:u[b("animation-delay")],animation:b("animation"),animationDelay:b("animation-delay"),animationDirection:b("animation-direction"),animationDuration:b("animation-duration"),animationFillMode:b("animation-fill-mode"),animationIterationCount:b("animation-iteration-count"),animationName:b("animation-name"),animationTimingFunction:b("animation-timing-function"),animationPlayState:b("animation-play-state"),animationStart:d[b("animation-delay")],animationIteration:r[b("animation-delay")],animationEnd:a[b("animation-delay")]}
}());h.exports=f},{}],6:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");
g("@marcom/ac-polyfills/Element/prototype.classList");var j=g("./className/add");
k.exports=function i(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);return
}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":8,"@marcom/ac-polyfills/Array/prototype.slice":14,"@marcom/ac-polyfills/Element/prototype.classList":15}],7:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":8,"./className/contains":9,"./className/remove":11}],8:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":9}],9:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":10}],10:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],11:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":9,"./getTokenRegExp":10}],12:[function(g,j,h){g("@marcom/ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":9,"@marcom/ac-polyfills/Element/prototype.classList":15}],13:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":6,"./contains":12,"./remove":16,"./toggle":17}],14:[function(d,g,f){(function(){var b=Array.prototype.slice;
try{b.call(document.documentElement)}catch(a){Array.prototype.slice=function(u,q){q=(typeof q!=="undefined")?q:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return b.call(this,u,q)
}var i,r=[],p,s=this.length;var t=u||0;t=(t>=0)?t:s+t;var c=(q)?q:s;if(q<0){c=s+q
}p=c-t;if(p>0){r=new Array(p);if(this.charAt){for(i=0;i<p;i++){r[i]=this.charAt(t+i)
}}else{for(i=0;i<p;i++){r[i]=this[t+i]}}}return r}}}())},{}],15:[function(d,g,f){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(t){if(!("Element" in t)){return
}var C="classList",x="prototype",b=t.Element[x],B=Object,s=String[x].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},A=Array[x].indexOf||function(h){var i=0,j=this.length;for(;i<j;i++){if(i in this&&this[i]===h){return i
}}return -1},a=function(i,h){this.name=i;this.code=DOMException[i];this.message=h
},w=function(h,i){if(i===""){throw new a("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(i)){throw new a("INVALID_CHARACTER_ERR","String contains an invalid character")
}return A.call(h,i)},z=function(h){var i=s.call(h.getAttribute("class")||""),j=i?i.split(/\s+/):[],k=0,l=j.length;
for(;k<l;k++){this.push(j[k])}this._updateClassName=function(){h.setAttribute("class",this.toString())
}},y=z[x]=[],u=function(){return new z(this)};a[x]=Error[x];y.item=function(h){return this[h]||null
};y.contains=function(h){h+="";return w(this,h)!==-1};y.add=function(){var h=arguments,i=0,k=h.length,j,l=false;
do{j=h[i]+"";if(w(this,j)===-1){this.push(j);l=true}}while(++i<k);if(l){this._updateClassName()
}};y.remove=function(){var h=arguments,i=0,l=h.length,j,m=false,k;do{j=h[i]+"";
k=w(this,j);while(k!==-1){this.splice(k,1);m=true;k=w(this,j)}}while(++i<l);if(m){this._updateClassName()
}};y.toggle=function(j,i){j+="";var k=this.contains(j),h=k?i!==true&&"remove":i!==false&&"add";
if(h){this[h](j)}if(i===true||i===false){return i}else{return !k}};y.toString=function(){return this.join(" ")
};if(B.defineProperty){var c={get:u,enumerable:true,configurable:true};try{B.defineProperty(b,C,c)
}catch(v){if(v.number===-2146823252){c.enumerable=false;B.defineProperty(b,C,c)
}}}else{if(B[x].__defineGetter__){b.__defineGetter__(C,u)}}}(self))}else{(function(){var b=document.createElement("_");
b.classList.add("c1","c2");if(!b.classList.contains("c2")){var a=function(j){var k=DOMTokenList.prototype[j];
DOMTokenList.prototype[j]=function(h){var i,m=arguments.length;for(i=0;i<m;i++){h=arguments[i];
k.call(this,h)}}};a("add");a("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(k,j){if(1 in arguments&&!this.contains(k)===!j){return j
}else{return c.call(this,k)}}}b=null}())}}},{}],16:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":11,"@marcom/ac-polyfills/Array/prototype.slice":14,"@marcom/ac-polyfills/Element/prototype.classList":15}],17:[function(k,j,g){k("@marcom/ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":7,"@marcom/ac-polyfills/Element/prototype.classList":15}],18:[function(f,i,g){if(document.createEvent){try{new window.CustomEvent("click")
}catch(h){window.CustomEvent=(function(){function a(c,b){b=b||{bubbles:false,cancelable:false,detail:undefined};
var d=document.createEvent("CustomEvent");d.initCustomEvent(c,b.bubbles,b.cancelable,b.detail);
return d}a.prototype=window.Event.prototype;return a}())}}},{}],19:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":20,"./shared/prefixHelper":21,"./shared/windowFallbackEventTypes":22,"./utils/eventTypeAvailable":23}],20:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],21:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],22:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],23:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],24:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":25,"./dispatchEvent":26,"./preventDefault":27,"./removeEventListener":28,"./stop":30,"./stopPropagation":31,"./target":32}],25:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":29,"./utils/addEventListener":33}],26:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":29,"./utils/dispatchEvent":34}],27:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],28:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":29,"./utils/removeEventListener":35}],29:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":19}],30:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":27,"./stopPropagation":31}],31:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],32:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],33:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],34:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":18}],35:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,d)
}else{a.detachEvent("on"+c,b)}return a}},{}],36:[function(d,g,f){g.exports=8},{}],37:[function(d,g,f){g.exports=11
},{}],38:[function(d,g,f){g.exports=9},{}],39:[function(d,g,f){g.exports=1},{}],40:[function(d,g,f){g.exports=3
},{}],41:[function(g,k,h){var j=g("../isNode");k.exports=function i(a,b){if(!j(a)){return false
}if(typeof b==="number"){return(a.nodeType===b)}return(b.indexOf(a.nodeType)!==-1)
}},{"../isNode":45}],42:[function(z,B,w){var D=z("./isNodeType");var C=z("../COMMENT_NODE");
var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");var y=z("../TEXT_NODE");
var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":36,"../DOCUMENT_FRAGMENT_NODE":37,"../ELEMENT_NODE":39,"../TEXT_NODE":40,"./isNodeType":41}],43:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":37,"./internal/isNodeType":41}],44:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":39,"./internal/isNodeType":41}],45:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],46:[function(k,j,g){var i=k("./internal/validate");j.exports=function h(a){i.childNode(a,true,"remove");
if(!a.parentNode){return a}return a.parentNode.removeChild(a)}},{"./internal/validate":42}],47:[function(f,i,g){if(!Array.prototype.indexOf){Array.prototype.indexOf=function h(c,b){var a=b||0;
var d=0;if(a<0){a=this.length+b-1;if(a<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(d=0;d<this.length;d++){if(this[d]===c){return d}}return(-1)}}},{}],48:[function(d,g,f){arguments[4][14][0].apply(f,arguments)
},{dup:14}],49:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");var j=o("./matchesSelector");
var k=o("./internal/validate");n.exports=function m(a,d,f,b){var c=[];k.childNode(a,true,"ancestors");
k.selector(d,false,"ancestors");if(f&&l(a)&&(!d||j(a,d))){c.push(a)}b=b||document.body;
if(a!==b){while((a=a.parentNode)&&l(a)){if(!d||j(a,d)){c.push(a)}if(a===b){break
}}}return c}},{"./internal/validate":51,"./matchesSelector":52,"@marcom/ac-dom-nodes/isElement":44}],50:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],51:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":36,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":37,"@marcom/ac-dom-nodes/DOCUMENT_NODE":38,"@marcom/ac-dom-nodes/ELEMENT_NODE":39,"@marcom/ac-dom-nodes/TEXT_NODE":40,"@marcom/ac-dom-nodes/isNode":45,"@marcom/ac-polyfills/Array/prototype.indexOf":47}],52:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":50,"./internal/validate":51,"./shims/matchesSelector":55,"@marcom/ac-dom-nodes/isElement":44}],53:[function(o,n,j){var k=o("./internal/validate");
var i=o("./shims/querySelector");var l=("querySelector" in document);n.exports=function m(b,a){a=a||document;
k.parentNode(a,true,"querySelector","context");k.selector(b,true,"querySelector");
if(!l){return i(b,a)}return a.querySelector(b)}},{"./internal/validate":51,"./shims/querySelector":56}],54:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":51,"./shims/querySelectorAll":57,"@marcom/ac-polyfills/Array/prototype.slice":48}],55:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":54}],56:[function(g,k,h){var j=g("./querySelectorAll");
k.exports=function i(b,a){var c=j(b,a);return c.length?c[0]:null}},{"./querySelectorAll":57}],57:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":43,"@marcom/ac-dom-nodes/isElement":44,"@marcom/ac-dom-nodes/remove":46,"@marcom/ac-polyfills/Array/prototype.indexOf":47}],58:[function(m,l,h){var j=m("./ac-clock/Clock"),k=m("./ac-clock/ThrottledClock"),i=m("./ac-clock/sharedClockInstance");
i.Clock=j;i.ThrottledClock=k;l.exports=i},{"./ac-clock/Clock":59,"./ac-clock/ThrottledClock":60,"./ac-clock/sharedClockInstance":61}],59:[function(o,n,i){o("@marcom/ac-polyfills/Function/prototype.bind");
o("@marcom/ac-polyfills/requestAnimationFrame");var l;var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=new Date().getTime();function k(){m.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}l=k.prototype=new m(null);
l.start=function(){if(this._active){return}this._tick()};l.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};l.destroy=function(){this.stop();
this.off();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};l.isRunning=function(){return this._active
};l._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};l._onAnimationFrame=function(b){if(this.lastFrameTime===null){this.lastFrameTime=b
}var a=b-this.lastFrameTime;var c=0;if(a>=1000){a=0}if(a!==0){c=1000/a}if(this._firstFrame===true){a=0;
this._firstFrame=false}if(c===0){this._firstFrame=true}else{var d={time:b,delta:a,fps:c,naturalFps:c,timeNow:this._getTime()};
this.trigger("update",d);this.trigger("draw",d)}this._animationFrame=null;this.lastFrameTime=b;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};n.exports=k
},{"@marcom/ac-event-emitter-micro":107,"@marcom/ac-polyfills/Function/prototype.bind":115,"@marcom/ac-polyfills/requestAnimationFrame":116}],60:[function(o,n,i){o("@marcom/ac-polyfills/requestAnimationFrame");
var l;var j=o("./sharedClockInstance"),m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function k(a,b){if(a===null){return}m.call(this);b=b||{};this._fps=a||null;this._clock=b.clock||j;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}l=k.prototype=new m(null);l.setFps=function(a){this._fps=a;return this};l.getFps=function(){return this._fps
};l.start=function(){this._clock.start();return this};l.stop=function(){this._clock.stop();
return this};l.isRunning=function(){return this._clock.isRunning()};l.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};l._onClockUpdate=function(b){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var a=b.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/a)>=this._fps+2){return}this._clockEvent=b;this._clockEvent.delta=a;
this._clockEvent.fps=1000/a;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};l._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};n.exports=k},{"./sharedClockInstance":61,"@marcom/ac-event-emitter-micro":107,"@marcom/ac-polyfills/requestAnimationFrame":116}],61:[function(f,i,g){var h=f("./Clock");
i.exports=new h()},{"./Clock":59}],62:[function(d,g,f){g.exports={Clip:d("./ac-clip/Clip")}
},{"./ac-clip/Clip":63}],63:[function(u,v,t){u("@marcom/ac-polyfills/Array/isArray");
var r=u("@marcom/ac-object/create");var m=u("@marcom/ac-easing").createPredefined;
var w=u("@marcom/ac-clock");var o=u("@marcom/ac-easing").Ease;var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p="ease";function q(d,f,b,a){a=a||{};this._options=a;this._isYoyo=a.yoyo;this._direction=1;
this._timeScale=1;this._loop=a.loop||0;this._loopCount=0;this._target=d;this.duration(f);
this._delay=(a.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=a.clock||w;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=b||{};this._propsFrom=a.propsFrom||{};this._onStart=a.onStart||null;
this._onUpdate=a.onUpdate||null;this._onDraw=a.onDraw||null;this._onComplete=a.onComplete||null;
var c=a.ease||p;this._ease=(typeof c==="function")?new o(c):m(c);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
q._add(this);n.call(this)}var s=q.prototype=r(n.prototype);q.COMPLETE="complete";
q.PAUSE="pause";q.PLAY="play";s.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};s.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(q.PAUSE,this)}return this
};s.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;q._remove(this);n.prototype.destroy.call(this);
return this};s.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};s.playing=function(){return this._playing
};s.target=function(){return this._target};s.duration=function(a){if(a!==undefined){this._duration=a;
this._durationMs=(a*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};s.timeScale=function(a){if(a!==undefined){this._timeScale=a;
this.duration(this._duration)}return this._timeScale};s.currentTime=function(a){if(a!==undefined){return this.progress(a/this._duration)*this._duration
}return(this.progress()*this._duration)};s.progress=function(a){if(a!==undefined){this._progress=Math.min(1,Math.max(0,a));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&a===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};s._resetLoop=function(c,a){var b;
for(b in a){if(a.hasOwnProperty(b)){if(a[b]!==null){if(typeof a[b]==="object"){this._resetLoop(c[b],a[b])
}else{c[b]=a[b]}}}}};s._cloneObjects=function(){var b={};var c={};var a={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,b,c,a);
return{target:b,propsTo:c,propsFrom:a}};s._cloneObjectsLoop=function(g,b,c,d,i,a){var h;
var f;for(f in c){if(c.hasOwnProperty(f)&&b[f]===undefined&&g[f]!==undefined){d[f]=g[f];
i[f]=g[f];a[f]=c[f]}}for(f in b){if(g.hasOwnProperty(f)){h=typeof g[f];if(g[f]!==null&&h==="object"){if(Array.isArray(g[f])){d[f]=[];
i[f]=[];a[f]=[]}else{d[f]={};i[f]={};a[f]={}}this._cloneObjectsLoop(g[f],b[f]||{},c[f]||{},d[f],i[f],a[f])
}else{if(b[f]!==null&&h==="number"){d[f]=g[f];i[f]=b[f];if(c&&c[f]!==undefined){a[f]=c[f]
}}}}}};s._prepareProperties=function(){if(!this._isPrepared){var a=this._cloneObjects();
this._storeTarget=a.target;this._propsTo=a.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=a.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};s._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};s._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
s._setDiffLoop=function(b,c,f,g){var a;var d;for(d in b){if(b.hasOwnProperty(d)){a=typeof b[d];
if(b[d]!==null&&a==="object"){c[d]=c[d]||{};g[d]=g[d]||{};this._setDiffLoop(b[d],c[d],f[d],g[d])
}else{if(a==="number"&&f[d]!==undefined){if(c[d]!==undefined){f[d]=c[d]}else{c[d]=f[d]
}g[d]=b[d]-f[d]}else{b[d]=null;c[d]=null}}}}};s._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(q.PLAY,this)};s._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};s._updateProps=function(){var a;
if(this._direction===1){a=this._ease.getValue(this._progress)}else{a=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,a)
};s._updatePropsLoop=function(b,c,f,g,a){var d;for(d in b){if(b.hasOwnProperty(d)&&b[d]!==null){if(typeof b[d]!=="number"){this._updatePropsLoop(b[d],c[d],f[d],g[d],a)
}else{f[d]=c[d]+(g[d]*a)}}}};s._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};s._completePropsLoop=function(b,a){var c;for(c in b){if(b.hasOwnProperty(c)&&b[c]!==null){if(typeof b[c]!=="number"){this._completePropsLoop(b[c],a[c])
}else{a[c]=b[c]}}}};s._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(q.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};s._update=function(a){if(this._running){this._progress=(a.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
s._draw=function(a){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};q._instantiate=function(){this._clips=[];
return this};q._add=function(a){this._clips.push(a)};q._remove=function(b){var a=this._clips.indexOf(b);
if(a>-1){this._clips.splice(a,1)}};q.getAll=function(b){if(b!==undefined){var a=[];
var c=this._clips.length;while(c--){if(this._clips[c].target()===b){a.push(this._clips[c])
}}return a}return Array.prototype.slice.call(this._clips)};q.destroyAll=function(b){var a=this.getAll(b);
if(this._clips.length===a.length){this._clips=[]}var c=a.length;while(c--){a[c].destroy()
}return a};q.to=function(c,d,b,a){a=a||{};if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new q(c,d,b,a).play()};q.from=function(b,c,a,d){d=d||{};d.propsFrom=a;if(d.destroyOnComplete===undefined){d.destroyOnComplete=true
}return new q(b,c,d.propsTo,d).play()};v.exports=q._instantiate()},{"@marcom/ac-clock":58,"@marcom/ac-easing":99,"@marcom/ac-event-emitter-micro":107,"@marcom/ac-object/create":110,"@marcom/ac-polyfills/Array/isArray":112}],64:[function(f,i,g){var h=f("./ac-color/Color");
h.decimalToHex=f("./ac-color/static/decimalToHex");h.hexToDecimal=f("./ac-color/static/hexToDecimal");
h.hexToRgb=f("./ac-color/static/hexToRgb");h.isColor=f("./ac-color/static/isColor");
h.isHex=f("./ac-color/static/isHex");h.isRgb=f("./ac-color/static/isRgb");h.isRgba=f("./ac-color/static/isRgba");
h.mixColors=f("./ac-color/static/mixColors");h.rgbaToArray=f("./ac-color/static/rgbaToArray");
h.rgbToArray=f("./ac-color/static/rgbToArray");h.rgbToDecimal=f("./ac-color/static/rgbToDecimal");
h.rgbToHex=f("./ac-color/static/rgbToHex");h.rgbToHsl=f("./ac-color/static/rgbToHsl");
h.rgbToHsv=f("./ac-color/static/rgbToHsv");h.rgbaToObject=f("./ac-color/static/rgbaToObject");
h.rgbToObject=f("./ac-color/static/rgbToObject");h.shortToLongHex=f("./ac-color/static/shortToLongHex");
i.exports={Color:h}},{"./ac-color/Color":65,"./ac-color/static/decimalToHex":67,"./ac-color/static/hexToDecimal":68,"./ac-color/static/hexToRgb":69,"./ac-color/static/isColor":70,"./ac-color/static/isHex":71,"./ac-color/static/isRgb":72,"./ac-color/static/isRgba":73,"./ac-color/static/mixColors":74,"./ac-color/static/rgbToArray":75,"./ac-color/static/rgbToDecimal":76,"./ac-color/static/rgbToHex":77,"./ac-color/static/rgbToHsl":78,"./ac-color/static/rgbToHsv":79,"./ac-color/static/rgbToObject":80,"./ac-color/static/rgbaToArray":81,"./ac-color/static/rgbaToObject":82,"./ac-color/static/shortToLongHex":83}],65:[function(H,K,v){var E=H("./helpers/cssColorNames");
var z=H("./static/hexToRgb");var A=H("./static/isColor");var G=H("./static/isHex");
var J=H("./static/isRgba");var w=H("./static/mixColors");var B=H("./static/rgbaToArray");
var y=H("./static/rgbToArray");var t=H("./static/rgbToDecimal");var D=H("./static/rgbToHex");
var I=H("./static/rgbaToObject");var C=H("./static/rgbToObject");var x=H("./static/shortToLongHex");
function u(a){if(!A(a)&&!E.nameToRgbObject[a]){throw new Error(a+" is not a supported color.")
}this._setColor(a)}var F=u.prototype;F._setColor=function(c){this._color={};if(G(c)){this._color.hex=x(c);
this._color.rgb={color:z(c)}}else{if(J(c)){this._color.rgba={color:c};var a=this.rgbaObject();
this._color.rgb={color:"rgb("+a.r+", "+a.g+", "+a.b+")"}}else{if(E.nameToRgbObject[c]){var b=E.nameToRgbObject[c];
this._color.rgb={object:b,color:"rgb("+b.r+", "+b.g+", "+b.b+")"}}else{this._color.rgb={color:c}
}}}};F.rgb=function(){return this._color.rgb.color};F.rgba=function(){if(this._color.rgba===undefined){var a=this.rgbObject();
this._color.rgba={color:"rgba("+a.r+", "+a.g+", "+a.b+", 1)"}}return this._color.rgba.color
};F.hex=function(){if(this._color.hex===undefined){this._color.hex=D.apply(this,this.rgbArray())
}return this._color.hex};F.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=t(this.rgb())
}return this._color.decimal};F.cssName=function(){return E.rgbToName[this.rgb()]||null
};F.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=y(this.rgb())
}return this._color.rgb.array};F.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=B(this.rgba())}return this._color.rgba.array
};F.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=C(this.rgb())
}return this._color.rgb.object};F.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=I(this.rgba())
}return this._color.rgba.object};F.getRed=function(){return this.rgbObject().r};
F.getGreen=function(){return this.rgbObject().g};F.getBlue=function(){return this.rgbObject().b
};F.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};F.setRed=function(a){if(a!==this.getRed()){this._setColor("rgba("+a+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};F.setGreen=function(a){if(a!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+a+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};F.setBlue=function(a){if(a!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+a+", "+this.getAlpha()+")")
}return this.rgbObject().b};F.setAlpha=function(a){if(a!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+a+")")
}return this.rgbaObject().a};F.mix=function(c,b){var a=C(w(this.rgb(),c,b));this._setColor("rgba("+a.r+", "+a.g+", "+a.b+", "+this.getAlpha()+")");
return this.rgb()};F.clone=function(){return new u(this.rgb())};K.exports=u},{"./helpers/cssColorNames":66,"./static/hexToRgb":69,"./static/isColor":70,"./static/isHex":71,"./static/isRgba":73,"./static/mixColors":74,"./static/rgbToArray":75,"./static/rgbToDecimal":76,"./static/rgbToHex":77,"./static/rgbToObject":80,"./static/rgbaToArray":81,"./static/rgbaToObject":82,"./static/shortToLongHex":83}],66:[function(g,k,h){var j={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var i={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
k.exports={rgbToName:j,nameToRgbObject:i}},{}],67:[function(i,h,f){h.exports=function g(a){return"#"+(a).toString(16)
}},{}],68:[function(i,h,g){h.exports=function f(a){return parseInt(a.substr(1),16)
}},{}],69:[function(j,i,k){var h=j("./shortToLongHex");i.exports=function g(a){a=h(a);
var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?"rgb("+parseInt(b[1],16)+", "+parseInt(b[2],16)+", "+parseInt(b[3],16)+")":null
}},{"./shortToLongHex":83}],70:[function(o,m,i){var k=o("./isRgb");var l=o("./isRgba");
var j=o("./isHex");m.exports=function n(a){return j(a)||k(a)||l(a)}},{"./isHex":71,"./isRgb":72,"./isRgba":73}],71:[function(i,h,f){h.exports=function g(a){var b=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return b.test(a)}},{}],72:[function(f,i,g){i.exports=function h(a){var b=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return b.exec(a)!==null}},{}],73:[function(f,i,g){i.exports=function h(a){var b=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return b.exec(a)!==null}},{}],74:[function(n,m,o){var i=n("./isHex");var j=n("./hexToRgb");
var k=n("./rgbToObject");m.exports=function l(g,a,b){g=i(g)?j(g):g;a=i(a)?j(a):a;
g=k(g);a=k(a);var c=g.r+((a.r-g.r)*b);var d=g.g+((a.g-g.g)*b);var f=g.b+((a.b-g.b)*b);
return"rgb("+Math.round(c)+", "+Math.round(d)+", "+Math.round(f)+")"}},{"./hexToRgb":69,"./isHex":71,"./rgbToObject":80}],75:[function(g,k,h){var j=g("./rgbToObject");
k.exports=function i(b){var a=j(b);return[a.r,a.g,a.b]}},{"./rgbToObject":80}],76:[function(n,m,i){var o=n("./hexToDecimal");
var k=n("./rgbToArray");var l=n("./rgbToHex");m.exports=function j(b){var a=l.apply(this,k(b));
return o(a)}},{"./hexToDecimal":68,"./rgbToArray":75,"./rgbToHex":77}],77:[function(f,i,g){i.exports=function h(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)
}},{}],78:[function(i,h,f){h.exports=function g(v,l,c){if(arguments.length!==3){return false
}v/=255;l/=255;c/=255;var b=Math.max(v,l,c);var s=Math.min(v,l,c);var d=b+s;var a=b-s;
var r;var w;var u=(d/2);if(b===s){r=w=0}else{w=u>0.5?a/(2-b-s):a/d;switch(b){case v:r=(l-c)/a;
break;case l:r=2+((c-v)/a);break;case c:r=4+((v-l)/a);break}r*=60;if(r<0){r+=360
}}return([r,Math.round(100*w),Math.round(100*u)])}},{}],79:[function(i,h,g){h.exports=function f(y,r,d){if(arguments.length!==3){return false
}var x=y/255;var w=r/255;var b=d/255;var c=Math.max(x,w,b);var v=Math.min(x,w,b);
var s;var z;var A=c;var a=c-v;z=c===0?0:a/c;if(c===v){s=0}else{switch(c){case x:s=(w-b)/a+(w<b?6:0);
break;case w:s=(b-x)/a+2;break;case b:s=(x-w)/a+4;break}s/=6}return[Math.round(360*s),Math.round(100*z),Math.round(100*A)]
}},{}],80:[function(f,i,g){i.exports=function h(b){var a=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3])}}},{}],81:[function(g,k,h){var i=g("./rgbaToObject");
k.exports=function j(b){var a=i(b);return[a.r,a.g,a.b,a.a]}},{"./rgbaToObject":82}],82:[function(f,i,g){i.exports=function h(b){var a=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3]),a:Number(c[4])}
}},{}],83:[function(i,h,f){h.exports=function g(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(l,c,d,m){return"#"+c+c+d+d+m+m});return a}},{}],84:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":85}],85:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],86:[function(n,m,o){var i=n("./shared/stylePropertyCache");var k=n("./getStyleProperty");
var l=n("./getStyleValue");m.exports=function j(a,b){var c;a=k(a);if(!a){return false
}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false}c+=":"+b+";"
}return c}},{"./getStyleProperty":87,"./getStyleValue":88,"./shared/stylePropertyCache":91}],87:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":89,"./shared/prefixHelper":90,"./shared/stylePropertyCache":91,"./utils/toCSS":94,"./utils/toDOM":95}],88:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":87,"./shared/prefixHelper":90,"./shared/stylePropertyCache":91,"./shared/styleValueAvailable":92}],89:[function(k,j,g){var i;
j.exports=function h(){if(!i){i=document.createElement("_")}else{i.style.cssText="";
i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null}},{}],90:[function(d,g,f){arguments[4][21][0].apply(f,arguments)
},{dup:21}],91:[function(d,g,f){g.exports={}},{}],92:[function(s,t,r){var u=s("./stylePropertyCache");
var q=s("./getStyleTestElement");var n=false;var l;var m;var p=function(){var b;
if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);m=false;b=q();try{b.style.width="invalid"
}catch(a){m=true}}};t.exports=function o(d,f){var a;var b;p();if(l){d=u[d].css;
return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f}catch(c){return false
}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":89,"./stylePropertyCache":91}],93:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],94:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;j.exports=function h(a){var b;
if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],95:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],96:[function(m,l,h){var k=m("@marcom/ac-prefixer/getStyleProperty");
var j=m("@marcom/ac-prefixer/stripPrefixes");l.exports=function i(){var c=Array.prototype.slice.call(arguments);
var g=c.shift(c);var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;
if(typeof c[0]!=="string"){c=c[0]}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);
r=a[f];if(!r||r==="auto"){r=null}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"@marcom/ac-prefixer/getStyleProperty":87,"@marcom/ac-prefixer/stripPrefixes":93}],97:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],98:[function(n,m,o){var j=n("@marcom/ac-prefixer/getStyleCSS");
var l=n("@marcom/ac-prefixer/getStyleProperty");var i=n("./internal/normalizeValue");
m.exports=function k(h,b){var c="";var d;var q;var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":97,"@marcom/ac-prefixer/getStyleCSS":86,"@marcom/ac-prefixer/getStyleProperty":87}],99:[function(d,g,f){g.exports={createBezier:d("./ac-easing/createBezier"),createPredefined:d("./ac-easing/createPredefined"),createStep:d("./ac-easing/createStep"),Ease:d("./ac-easing/Ease")}
},{"./ac-easing/Ease":100,"./ac-easing/createBezier":101,"./ac-easing/createPredefined":102,"./ac-easing/createStep":103}],100:[function(h,m,i){var j="Ease expects an easing function.";
function k(a,b){if(typeof a!=="function"){throw new TypeError(j)}this.easingFunction=a;
this.cssString=b||null}var l=k.prototype;l.getValue=function(a){return this.easingFunction(a,0,1,1)
};m.exports=k},{}],101:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.every");
var m=i("./Ease");var k=i("./helpers/KeySpline");var n="Bezier curve expects exactly four (4) numbers. Given: ";
o.exports=function l(r,b,s,c){var a=Array.prototype.slice.call(arguments);var f=a.every(function(p){return(typeof p==="number")
});if(a.length!==4||!f){throw new TypeError(n+a)}var d=new k(r,b,s,c);var h=function(q,w,p,v){return d.get(q/v)*p+w
};var g="cubic-bezier("+a.join(", ")+")";return new m(h,g)}},{"./Ease":100,"./helpers/KeySpline":104,"@marcom/ac-polyfills/Array/prototype.every":113}],102:[function(q,s,p){var l=q("./createStep");
var o=q("./helpers/cssAliases");var r=q("./helpers/easingFunctions");var m=q("./Ease");
var n='Easing function "%TYPE%" not recognized among the following: '+Object.keys(r).join(", ");
s.exports=function k(b){var a;if(b==="step-start"){return l(1,"start")}else{if(b==="step-end"){return l(1,"end")
}else{a=r[b]}}if(!a){throw new Error(n.replace("%TYPE%",b))}return new m(a,o[b])
}},{"./Ease":100,"./createStep":103,"./helpers/cssAliases":105,"./helpers/easingFunctions":106}],103:[function(n,m,o){var l=n("./Ease");
var i="Step function expects a numeric value greater than zero. Given: ";var j='Step function direction must be either "start" or "end" (default). Given: ';
m.exports=function k(d,a){a=a||"end";if(typeof d!=="number"||d<1){throw new TypeError(i+d)
}if(a!=="start"&&a!=="end"){throw new TypeError(j+a)}var b=function(h,f,g,s){var t=g/d;
var u=Math[(a==="start")?"floor":"ceil"](h/s*d);return f+t*u};var c="steps("+d+", "+a+")";
return new l(b,c)}},{"./Ease":100}],104:[function(f,i,g){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j
}return t(p(j),d,q)};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k
}function u(j){return 3*j}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],105:[function(i,h,f){var g={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
g.easeIn=g["ease-in"];g.easeOut=g["ease-out"];g.easeInOut=g["ease-in-out"];g.easeInCubic=g["ease-in-cubic"];
g.easeOutCubic=g["ease-out-cubic"];g.easeInOutCubic=g["ease-in-out-cubic"];g.easeInQuad=g["ease-in-quad"];
g.easeOutQuad=g["ease-out-quad"];g.easeInOutQuad=g["ease-in-out-quad"];g.easeInQuart=g["ease-in-quart"];
g.easeOutQuart=g["ease-out-quart"];g.easeInOutQuart=g["ease-in-out-quart"];g.easeInQuint=g["ease-in-quint"];
g.easeOutQuint=g["ease-out-quint"];g.easeInOutQuint=g["ease-in-out-quint"];g.easeInSine=g["ease-in-sine"];
g.easeOutSine=g["ease-out-sine"];g.easeInOutSine=g["ease-in-out-sine"];g.easeInExpo=g["ease-in-expo"];
g.easeOutExpo=g["ease-out-expo"];g.easeInOutExpo=g["ease-in-out-expo"];g.easeInCirc=g["ease-in-circ"];
g.easeOutCirc=g["ease-out-circ"];g.easeInOutCirc=g["ease-in-out-circ"];g.easeInBack=g["ease-in-back"];
g.easeOutBack=g["ease-out-back"];g.easeInOutBack=g["ease-in-out-back"];h.exports=g
},{}],106:[function(ay,aA,W){var S=ay("../createBezier");var af=S(0.25,0.1,0.25,1).easingFunction;
var aw=S(0.42,0,1,1).easingFunction;var Z=S(0,0,0.58,1).easingFunction;var ae=S(0.42,0,0.58,1).easingFunction;
var ah=function(b,d,a,c){return a*b/c+d};var av=function(b,d,a,c){return a*(b/=c)*b+d
};var O=function(b,d,a,c){return -a*(b/=c)*(b-2)+d};var Y=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b+d
}return -a/2*((--b)*(b-2)-1)+d};var au=function(b,d,a,c){return a*(b/=c)*b*b+d};
var aB=function(b,d,a,c){return a*((b=b/c-1)*b*b+1)+d};var at=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b+d
}return a/2*((b-=2)*b*b+2)+d};var an=function(b,d,a,c){return a*(b/=c)*b*b*b+d};
var ap=function(b,d,a,c){return -a*((b=b/c-1)*b*b*b-1)+d};var am=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b+d
}return -a/2*((b-=2)*b*b*b-2)+d};var ad=function(b,d,a,c){return a*(b/=c)*b*b*b*b+d
};var ag=function(b,d,a,c){return a*((b=b/c-1)*b*b*b*b+1)+d};var ac=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b*b+d
}return a/2*((b-=2)*b*b*b*b+2)+d};var az=function(b,d,a,c){return -a*Math.cos(b/c*(Math.PI/2))+a+d
};var Q=function(b,d,a,c){return a*Math.sin(b/c*(Math.PI/2))+d};var aa=function(b,d,a,c){return -a/2*(Math.cos(Math.PI*b/c)-1)+d
};var V=function(b,d,a,c){return(b===0)?d:a*Math.pow(2,10*(b/c-1))+d};var ab=function(b,d,a,c){return(b===c)?d+a:a*(-Math.pow(2,-10*b/c)+1)+d
};var ak=function(b,d,a,c){if(b===0){return d}else{if(b===c){return d+a}else{if((b/=c/2)<1){return a/2*Math.pow(2,10*(b-1))+d
}}}return a/2*(-Math.pow(2,-10*--b)+2)+d};var aq=function(b,d,a,c){return -a*(Math.sqrt(1-(b/=c)*b)-1)+d
};var ax=function(b,d,a,c){return a*Math.sqrt(1-(b=b/c-1)*b)+d};var T=function(b,d,a,c){if((b/=c/2)<1){return -a/2*(Math.sqrt(1-b*b)-1)+d
}return a/2*(Math.sqrt(1-(b-=2)*b)+1)+d};var X=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a}}if(!b){b=d*0.3
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}return -(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
};var U=function(c,f,a,d){var h=1.70158;var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a
}}if(!b){b=d*0.3}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)
}return g*Math.pow(2,-10*c)*Math.sin((c*d-h)*(2*Math.PI)/b)+a+f};var ai=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d/2)===2){return f+a}}if(!b){b=d*(0.3*1.5)
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}if(c<1){return -0.5*(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
}return g*Math.pow(2,-10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b)*0.5+a+f};var aj=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*(b/=c)*b*((f+1)*b-f)+d};var al=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*((b=b/c-1)*b*((f+1)*b+f)+1)+d};var ar=function(b,d,a,c,f){if(f===undefined){f=1.70158
}if((b/=c/2)<1){return a/2*(b*b*(((f*=(1.525))+1)*b-f))+d}return a/2*((b-=2)*b*(((f*=(1.525))+1)*b+f)+2)+d
};var R=function(b,d,a,c){if((b/=c)<(1/2.75)){return a*(7.5625*b*b)+d}else{if(b<(2/2.75)){return a*(7.5625*(b-=(1.5/2.75))*b+0.75)+d
}else{if(b<(2.5/2.75)){return a*(7.5625*(b-=(2.25/2.75))*b+0.9375)+d}}}return a*(7.5625*(b-=(2.625/2.75))*b+0.984375)+d
};var ao=function(b,d,a,c){return a-R(c-b,0,a,c)+d};var P=function(b,d,a,c){if(b<c/2){return ao(b*2,0,a,c)*0.5+d
}return R(b*2-c,0,a,c)*0.5+a*0.5+d};aA.exports={linear:ah,ease:af,easeIn:aw,"ease-in":aw,easeOut:Z,"ease-out":Z,easeInOut:ae,"ease-in-out":ae,easeInCubic:au,"ease-in-cubic":au,easeOutCubic:aB,"ease-out-cubic":aB,easeInOutCubic:at,"ease-in-out-cubic":at,easeInQuad:av,"ease-in-quad":av,easeOutQuad:O,"ease-out-quad":O,easeInOutQuad:Y,"ease-in-out-quad":Y,easeInQuart:an,"ease-in-quart":an,easeOutQuart:ap,"ease-out-quart":ap,easeInOutQuart:am,"ease-in-out-quart":am,easeInQuint:ad,"ease-in-quint":ad,easeOutQuint:ag,"ease-out-quint":ag,easeInOutQuint:ac,"ease-in-out-quint":ac,easeInSine:az,"ease-in-sine":az,easeOutSine:Q,"ease-out-sine":Q,easeInOutSine:aa,"ease-in-out-sine":aa,easeInExpo:V,"ease-in-expo":V,easeOutExpo:ab,"ease-out-expo":ab,easeInOutExpo:ak,"ease-in-out-expo":ak,easeInCirc:aq,"ease-in-circ":aq,easeOutCirc:ax,"ease-out-circ":ax,easeInOutCirc:T,"ease-in-out-circ":T,easeInBack:aj,"ease-in-back":aj,easeOutBack:al,"ease-out-back":al,easeInOutBack:ar,"ease-in-out-back":ar,easeInElastic:X,"ease-in-elastic":X,easeOutElastic:U,"ease-out-elastic":U,easeInOutElastic:ai,"ease-in-out-elastic":ai,easeInBounce:ao,"ease-in-bounce":ao,easeOutBounce:R,"ease-out-bounce":R,easeInOutBounce:P,"ease-in-out-bounce":P}
},{"../createBezier":101}],107:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":108}],108:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],109:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");
var k=o("./extend");var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;
for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};
m(c[a],b[a])}else{c[a]=b[a]}}}}return c};n.exports=function l(a,b){if(b){return m({},a)
}return k({},a)}},{"./extend":111,"@marcom/ac-polyfills/Array/isArray":112}],110:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],111:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":114}],112:[function(d,g,f){if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}}},{}],113:[function(f,i,g){if(!Array.prototype.every){Array.prototype.every=function h(a,b){var c=Object(this);
var l=c.length>>>0;var d;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(d=0;d<l;d+=1){if(d in c&&!a.call(b,c[d],d,c)){return false}}return true}}},{}],114:[function(f,i,g){if(!Array.prototype.forEach){Array.prototype.forEach=function h(a,b){var c=Object(this);
var n;var m;if(typeof a!=="function"){throw new TypeError("No function object passed to forEach.")
}var d=this.length;for(n=0;n<d;n+=1){m=c[n];a.call(b,m,n,c)}}}},{}],115:[function(d,g,f){if(!Function.prototype.bind){Function.prototype.bind=function(k){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var a=Array.prototype.slice.call(arguments,1);var b=this;var j=function(){};var c=function(){return b.apply((this instanceof j&&k)?this:k,a.concat(Array.prototype.slice.call(arguments)))
};j.prototype=this.prototype;c.prototype=new j();return c}}},{}],116:[function(d,g,f){(function(){var b=0;
var a=["ms","moz","webkit","o"];for(var c=0;c<a.length&&!window.requestAnimationFrame;
++c){window.requestAnimationFrame=window[a[c]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[a[c]+"CancelAnimationFrame"]||window[a[c]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(m,p){var q=Date.now();
var o=Math.max(0,16-(q-b));var n=window.setTimeout(function(){m(q+o)},o);b=q+o;
return n}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(i){clearTimeout(i)
}}}())},{}],117:[function(f,i,g){i.exports=h;function h(b){var a=new Float32Array(16);
a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];
a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];
a[15]=b[15];return a}},{}],118:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(16);
a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;
a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}},{}],119:[function(f,i,g){i.exports=h;
function h(b,v,z){var G=v[0],H=v[1],I=v[2],F=v[3],a=G+G,M=H+H,E=I+I,J=G*a,K=G*M,L=G*E,c=H*M,y=H*E,q=I*E,d=F*a,w=F*M,x=F*E;
b[0]=1-(c+q);b[1]=K+x;b[2]=L-w;b[3]=0;b[4]=K-x;b[5]=1-(J+q);b[6]=y+d;b[7]=0;b[8]=L+w;
b[9]=y-d;b[10]=1-(J+c);b[11]=0;b[12]=z[0];b[13]=z[1];b[14]=z[2];b[15]=1;return b
}},{}],120:[function(i,h,f){h.exports=g;function g(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;
a[15]=1;return a}},{}],121:[function(f,i,g){i.exports=h;function h(c,U){var L=U[0],P=U[1],S=U[2],Y=U[3],ag=U[4],ah=U[5],ai=U[6],aj=U[7],K=U[8],M=U[9],O=U[10],Q=U[11],b=U[12],d=U[13],N=U[14],W=U[15],R=L*ah-P*ag,T=L*ai-S*ag,V=L*aj-Y*ag,X=P*ai-S*ah,aa=P*aj-Y*ah,ab=S*aj-Y*ai,ac=K*d-M*b,ad=K*N-O*b,ae=K*W-Q*b,af=M*N-O*d,Z=M*W-Q*d,a=O*W-Q*N,ak=R*a-T*Z+V*af+X*ae-aa*ad+ab*ac;
if(!ak){return null}ak=1/ak;c[0]=(ah*a-ai*Z+aj*af)*ak;c[1]=(S*Z-P*a-Y*af)*ak;c[2]=(d*ab-N*aa+W*X)*ak;
c[3]=(O*aa-M*ab-Q*X)*ak;c[4]=(ai*ae-ag*a-aj*ad)*ak;c[5]=(L*a-S*ae+Y*ad)*ak;c[6]=(N*V-b*ab-W*T)*ak;
c[7]=(K*ab-O*V+Q*T)*ak;c[8]=(ag*Z-ah*ae+aj*ac)*ak;c[9]=(P*ae-L*Z-Y*ac)*ak;c[10]=(b*aa-d*V+W*R)*ak;
c[11]=(M*V-K*aa-Q*R)*ak;c[12]=(ah*ad-ag*af-ai*ac)*ak;c[13]=(L*af-P*ad+S*ac)*ak;
c[14]=(d*T-b*X-N*R)*ak;c[15]=(K*X-M*T+O*R)*ak;return c}},{}],122:[function(i,h,f){h.exports=g;
function g(G,C,F){var a=C[0],b=C[1],d=C[2],E=C[3],O=C[4],Q=C[5],S=C[6],U=C[7],I=C[8],K=C[9],L=C[10],M=C[11],H=C[12],J=C[13],c=C[14],D=C[15];
var N=F[0],P=F[1],R=F[2],T=F[3];G[0]=N*a+P*O+R*I+T*H;G[1]=N*b+P*Q+R*K+T*J;G[2]=N*d+P*S+R*L+T*c;
G[3]=N*E+P*U+R*M+T*D;N=F[4];P=F[5];R=F[6];T=F[7];G[4]=N*a+P*O+R*I+T*H;G[5]=N*b+P*Q+R*K+T*J;
G[6]=N*d+P*S+R*L+T*c;G[7]=N*E+P*U+R*M+T*D;N=F[8];P=F[9];R=F[10];T=F[11];G[8]=N*a+P*O+R*I+T*H;
G[9]=N*b+P*Q+R*K+T*J;G[10]=N*d+P*S+R*L+T*c;G[11]=N*E+P*U+R*M+T*D;N=F[12];P=F[13];
R=F[14];T=F[15];G[12]=N*a+P*O+R*I+T*H;G[13]=N*b+P*Q+R*K+T*J;G[14]=N*d+P*S+R*L+T*c;
G[15]=N*E+P*U+R*M+T*D;return G}},{}],123:[function(i,h,g){h.exports=f;function f(V,s,c,am){var ac=am[0],ad=am[1],ae=am[2],U=Math.sqrt(ac*ac+ad*ad+ae*ae),Q,x,S,a,b,d,t,af,ag,ah,ai,W,Y,aa,ab,T,X,Z,y,z,R,aj,ak,al;
if(Math.abs(U)<0.000001){return null}U=1/U;ac*=U;ad*=U;ae*=U;Q=Math.sin(c);x=Math.cos(c);
S=1-x;a=s[0];b=s[1];d=s[2];t=s[3];af=s[4];ag=s[5];ah=s[6];ai=s[7];W=s[8];Y=s[9];
aa=s[10];ab=s[11];T=ac*ac*S+x;X=ad*ac*S+ae*Q;Z=ae*ac*S-ad*Q;y=ac*ad*S-ae*Q;z=ad*ad*S+x;
R=ae*ad*S+ac*Q;aj=ac*ae*S+ad*Q;ak=ad*ae*S-ac*Q;al=ae*ae*S+x;V[0]=a*T+af*X+W*Z;V[1]=b*T+ag*X+Y*Z;
V[2]=d*T+ah*X+aa*Z;V[3]=t*T+ai*X+ab*Z;V[4]=a*y+af*z+W*R;V[5]=b*y+ag*z+Y*R;V[6]=d*y+ah*z+aa*R;
V[7]=t*y+ai*z+ab*R;V[8]=a*aj+af*ak+W*al;V[9]=b*aj+ag*ak+Y*al;V[10]=d*aj+ah*ak+aa*al;
V[11]=t*aj+ai*ak+ab*al;if(s!==V){V[12]=s[12];V[13]=s[13];V[14]=s[14];V[15]=s[15]
}return V}},{}],124:[function(i,h,g){h.exports=f;function f(A,t,u){var a=Math.sin(u),v=Math.cos(u),b=t[4],c=t[5],d=t[6],s=t[7],w=t[8],x=t[9],y=t[10],z=t[11];
if(t!==A){A[0]=t[0];A[1]=t[1];A[2]=t[2];A[3]=t[3];A[12]=t[12];A[13]=t[13];A[14]=t[14];
A[15]=t[15]}A[4]=b*v+w*a;A[5]=c*v+x*a;A[6]=d*v+y*a;A[7]=s*v+z*a;A[8]=w*v-b*a;A[9]=x*v-c*a;
A[10]=y*v-d*a;A[11]=z*v-s*a;return A}},{}],125:[function(i,h,f){h.exports=g;function g(w,b,c){var a=Math.sin(c),d=Math.cos(c),x=b[0],y=b[1],z=b[2],A=b[3],s=b[8],t=b[9],u=b[10],v=b[11];
if(b!==w){w[4]=b[4];w[5]=b[5];w[6]=b[6];w[7]=b[7];w[12]=b[12];w[13]=b[13];w[14]=b[14];
w[15]=b[15]}w[0]=x*d-s*a;w[1]=y*d-t*a;w[2]=z*d-u*a;w[3]=A*d-v*a;w[8]=x*a+s*d;w[9]=y*a+t*d;
w[10]=z*a+u*d;w[11]=A*a+v*d;return w}},{}],126:[function(i,h,f){h.exports=g;function g(w,t,u){var a=Math.sin(u),v=Math.cos(u),x=t[0],y=t[1],z=t[2],A=t[3],b=t[4],c=t[5],d=t[6],s=t[7];
if(t!==w){w[8]=t[8];w[9]=t[9];w[10]=t[10];w[11]=t[11];w[12]=t[12];w[13]=t[13];w[14]=t[14];
w[15]=t[15]}w[0]=x*v+b*a;w[1]=y*v+c*a;w[2]=z*v+d*a;w[3]=A*v+s*a;w[4]=b*v-x*a;w[5]=c*v-y*a;
w[6]=d*v-z*a;w[7]=s*v-A*a;return w}},{}],127:[function(f,i,g){i.exports=h;function h(c,l,d){var m=d[0],a=d[1],b=d[2];
c[0]=l[0]*m;c[1]=l[1]*m;c[2]=l[2]*m;c[3]=l[3]*m;c[4]=l[4]*a;c[5]=l[5]*a;c[6]=l[6]*a;
c[7]=l[7]*a;c[8]=l[8]*b;c[9]=l[9]*b;c[10]=l[10]*b;c[11]=l[11]*b;c[12]=l[12];c[13]=l[13];
c[14]=l[14];c[15]=l[15];return c}},{}],128:[function(f,i,g){i.exports=h;function h(v,c,D){var E=D[0],F=D[1],G=D[2],y,a,b,d,H,I,J,K,x,z,B,C;
if(c===v){v[12]=c[0]*E+c[4]*F+c[8]*G+c[12];v[13]=c[1]*E+c[5]*F+c[9]*G+c[13];v[14]=c[2]*E+c[6]*F+c[10]*G+c[14];
v[15]=c[3]*E+c[7]*F+c[11]*G+c[15]}else{y=c[0];a=c[1];b=c[2];d=c[3];H=c[4];I=c[5];
J=c[6];K=c[7];x=c[8];z=c[9];B=c[10];C=c[11];v[0]=y;v[1]=a;v[2]=b;v[3]=d;v[4]=H;
v[5]=I;v[6]=J;v[7]=K;v[8]=x;v[9]=z;v[10]=B;v[11]=C;v[12]=y*E+H*F+x*G+c[12];v[13]=a*E+I*F+z*G+c[13];
v[14]=b*E+J*F+B*G+c[14];v[15]=d*E+K*F+C*G+c[15]}return v}},{}],129:[function(f,i,g){i.exports=h;
function h(n,o){if(n===o){var a=o[1],c=o[2],d=o[3],q=o[6],b=o[7],p=o[11];n[1]=o[4];
n[2]=o[8];n[3]=o[12];n[4]=a;n[6]=o[9];n[7]=o[13];n[8]=c;n[9]=q;n[11]=o[14];n[12]=d;
n[13]=b;n[14]=p}else{n[0]=o[0];n[1]=o[4];n[2]=o[8];n[3]=o[12];n[4]=o[1];n[5]=o[5];
n[6]=o[9];n[7]=o[13];n[8]=o[2];n[9]=o[6];n[10]=o[10];n[11]=o[14];n[12]=o[3];n[13]=o[7];
n[14]=o[11];n[15]=o[15]}return n}},{}],130:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(3);
a[0]=0;a[1]=0;a[2]=0;return a}},{}],131:[function(f,i,g){i.exports=h;function h(r,c,d){var s=c[0],a=c[1],b=c[2],o=d[0],p=d[1],q=d[2];
r[0]=a*q-b*p;r[1]=b*o-s*q;r[2]=s*p-a*o;return r}},{}],132:[function(i,h,f){h.exports=g;
function g(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},{}],133:[function(f,i,g){i.exports=h;
function h(d,a,b){var c=new Float32Array(3);c[0]=d;c[1]=a;c[2]=b;return c}},{}],134:[function(f,i,g){i.exports=h;
function h(c){var d=c[0],a=c[1],b=c[2];return Math.sqrt(d*d+a*a+b*b)}},{}],135:[function(i,h,f){h.exports=g;
function g(c,d){var l=d[0],a=d[1],b=d[2];var m=l*l+a*a+b*b;if(m>0){m=1/Math.sqrt(m);
c[0]=d[0]*m;c[1]=d[1]*m;c[2]=d[2]*m}return c}},{}],136:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a}},{}],137:[function(f,i,g){i.exports=h;
function h(k,a,b,d){var c=new Float32Array(4);c[0]=k;c[1]=a;c[2]=b;c[3]=d;return c
}},{}],138:[function(f,h,g){h.exports=i;function i(c,d,n){var o=d[0],a=d[1],b=d[2],m=d[3];
c[0]=n[0]*o+n[4]*a+n[8]*b+n[12]*m;c[1]=n[1]*o+n[5]*a+n[9]*b+n[13]*m;c[2]=n[2]*o+n[6]*a+n[10]*b+n[14]*m;
c[3]=n[3]*o+n[7]*a+n[11]*b+n[15]*m;return c}},{}],139:[function(d,g,f){g.exports={Transform:d("./ac-transform/Transform")}
},{"./ac-transform/Transform":140}],140:[function(ae,al,L){var af=ae("./gl-matrix/mat4");
var an=ae("./gl-matrix/vec3");var ao=ae("./gl-matrix/vec4");var ak=Math.PI/180;
var am=180/Math.PI;var Q=0,J=0,U=1,K=1,Y=2,I=3;var ag=4,M=4,ah=5,O=5,ai=6,aj=7;
var S=8,X=9,ab=10,ac=11;var N=12,P=12,R=13,T=13,W=14,aa=15;function Z(){this.m=af.create()
}var V=Z.prototype;V.rotateX=function(a){var b=ak*a;af.rotateX(this.m,this.m,b);
return this};V.rotateY=function(a){var b=ak*a;af.rotateY(this.m,this.m,b);return this
};V.rotateZ=function(a){var b=ak*a;af.rotateZ(this.m,this.m,b);return this};V.rotate=V.rotateZ;
V.rotate3d=function(c,f,a,b){if(f===null||f===undefined){f=c}if(a===null||f===undefined){a=c
}var d=ak*b;af.rotate(this.m,this.m,d,[c,f,a]);return this};V.rotateAxisAngle=V.rotate3d;
V.scale=function(a,b){b=b||a;af.scale(this.m,this.m,[a,b,1]);return this};V.scaleX=function(a){af.scale(this.m,this.m,[a,1,1]);
return this};V.scaleY=function(a){af.scale(this.m,this.m,[1,a,1]);return this};
V.scaleZ=function(a){af.scale(this.m,this.m,[1,1,a]);return this};V.scale3d=function(a,b,c){af.scale(this.m,this.m,[a,b,c]);
return this};V.skew=function(a,b){if(b===null||b===undefined){return this.skewX(a)
}a=ak*a;b=ak*b;var c=af.create();c[M]=Math.tan(a);c[K]=Math.tan(b);af.multiply(this.m,this.m,c);
return this};V.skewX=function(a){a=ak*a;var b=af.create();b[M]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.skewY=function(a){a=ak*a;var b=af.create();b[K]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.translate=function(a,b){b=b||0;af.translate(this.m,this.m,[a,b,0]);
return this};V.translate3d=function(b,c,a){af.translate(this.m,this.m,[b,c,a]);
return this};V.translateX=function(a){af.translate(this.m,this.m,[a,0,0]);return this
};V.translateY=function(a){af.translate(this.m,this.m,[0,a,0]);return this};V.translateZ=function(a){af.translate(this.m,this.m,[0,0,a]);
return this};V.perspective=function(a){var b=af.create();if(a!==0){b[ac]=-1/a}af.multiply(this.m,this.m,b)
};V.inverse=function(){var a=this.clone();a.m=af.invert(a.m,this.m);return a};V.reset=function(){af.identity(this.m);
return this};V.getTranslateXY=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T]]
}return[a[N],a[R]]};V.getTranslateXYZ=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T],0]
}return[a[N],a[R],a[W]]};V.getTranslateX=function(){var a=this.m;if(this.isAffine()){return a[P]
}return a[N]};V.getTranslateY=function(){var a=this.m;if(this.isAffine()){return a[T]
}return a[R]};V.getTranslateZ=function(){var a=this.m;if(this.isAffine()){return 0
}return a[W]};V.clone=function(){var a=new Z();a.m=af.clone(this.m);return a};V.toArray=function(){var a=this.m;
if(this.isAffine()){return[a[J],a[K],a[M],a[O],a[P],a[T]]}return[a[Q],a[U],a[Y],a[I],a[ag],a[ah],a[ai],a[aj],a[S],a[X],a[ab],a[ac],a[N],a[R],a[W],a[aa]]
};V.fromArray=function(a){this.m=Array.prototype.slice.call(a);return this};V.setMatrixValue=function(c){c=String(c).trim();
var d=af.create();if(c==="none"){this.m=d;return this}var a=c.slice(0,c.indexOf("(")),f,b;
if(a==="matrix3d"){f=c.slice(9,-1).split(",");for(b=0;b<f.length;b++){d[b]=parseFloat(f[b])
}}else{if(a==="matrix"){f=c.slice(7,-1).split(",");for(b=f.length;b--;){f[b]=parseFloat(f[b])
}d[Q]=f[0];d[U]=f[1];d[N]=f[4];d[ag]=f[2];d[ah]=f[3];d[R]=f[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=d;return this};var ad=function(a){return Math.abs(a)<0.0001};V.decompose=function(h){h=h||false;
var c=af.clone(this.m);var m=an.create();var v=an.create();var p=an.create();var k=ao.create();
var r=ao.create();var q=an.create();for(var a=0;a<16;a++){c[a]/=c[aa]}var f=af.clone(c);
f[I]=0;f[aj]=0;f[ac]=0;f[aa]=1;var y=c[3],o=c[7],l=c[11],t=c[12],u=c[13],w=c[14],x=c[15];
var i=ao.create();if(!ad(c[I])||!ad(c[aj])||!ad(c[ac])){i[0]=c[I];i[1]=c[aj];i[2]=c[ac];
i[3]=c[aa];var b=af.invert(af.create(),f);var j=af.transpose(af.create(),b);k=ao.transformMat4(k,i,j)
}else{k=ao.fromValues(0,0,0,1)}m[0]=t;m[1]=u;m[2]=w;var n=[an.create(),an.create(),an.create()];
n[0][0]=c[0];n[0][1]=c[1];n[0][2]=c[2];n[1][0]=c[4];n[1][1]=c[5];n[1][2]=c[6];n[2][0]=c[8];
n[2][1]=c[9];n[2][2]=c[10];v[0]=an.length(n[0]);an.normalize(n[0],n[0]);p[0]=an.dot(n[0],n[1]);
n[1]=this._combine(n[1],n[0],1,-p[0]);v[1]=an.length(n[1]);an.normalize(n[1],n[1]);
p[0]/=v[1];p[1]=an.dot(n[0],n[2]);n[2]=this._combine(n[2],n[0],1,-p[1]);p[2]=an.dot(n[1],n[2]);
n[2]=this._combine(n[2],n[1],1,-p[2]);v[2]=an.length(n[2]);an.normalize(n[2],n[2]);
p[1]/=v[2];p[2]/=v[2];var d=an.cross(an.create(),n[1],n[2]);if(an.dot(n[0],d)<0){for(a=0;
a<3;a++){v[a]*=-1;n[a][0]*=-1;n[a][1]*=-1;n[a][2]*=-1}}r[0]=0.5*Math.sqrt(Math.max(1+n[0][0]-n[1][1]-n[2][2],0));
r[1]=0.5*Math.sqrt(Math.max(1-n[0][0]+n[1][1]-n[2][2],0));r[2]=0.5*Math.sqrt(Math.max(1-n[0][0]-n[1][1]+n[2][2],0));
r[3]=0.5*Math.sqrt(Math.max(1+n[0][0]+n[1][1]+n[2][2],0));if(n[2][1]>n[1][2]){r[0]=-r[0]
}if(n[0][2]>n[2][0]){r[1]=-r[1]}if(n[1][0]>n[0][1]){r[2]=-r[2]}var s=ao.fromValues(r[0],r[1],r[2],2*Math.acos(r[3]));
var g=this._rotationFromQuat(r);if(h){p[0]=Math.round(p[0]*am*100)/100;p[1]=Math.round(p[1]*am*100)/100;
p[2]=Math.round(p[2]*am*100)/100;g[0]=Math.round(g[0]*am*100)/100;g[1]=Math.round(g[1]*am*100)/100;
g[2]=Math.round(g[2]*am*100)/100;s[3]=Math.round(s[3]*am*100)/100}return{translation:m,scale:v,skew:p,perspective:k,quaternion:r,eulerRotation:g,axisAngle:s}
};V.recompose=function(f,g,b,a,h){f=f||an.create();g=g||an.create();b=b||an.create();
a=a||ao.create();h=h||ao.create();var c=af.fromRotationTranslation(af.create(),h,f);
c[I]=a[0];c[aj]=a[1];c[ac]=a[2];c[aa]=a[3];var d=af.create();if(b[2]!==0){d[X]=b[2];
af.multiply(c,c,d)}if(b[1]!==0){d[X]=0;d[S]=b[1];af.multiply(c,c,d)}if(b[0]){d[S]=0;
d[4]=b[0];af.multiply(c,c,d)}af.scale(c,c,g);this.m=c;return this};V.isAffine=function(){return(this.m[Y]===0&&this.m[I]===0&&this.m[ai]===0&&this.m[aj]===0&&this.m[S]===0&&this.m[X]===0&&this.m[ab]===1&&this.m[ac]===0&&this.m[W]===0&&this.m[aa]===1)
};V.toString=function(){var a=this.m;if(this.isAffine()){return"matrix("+a[J]+", "+a[K]+", "+a[M]+", "+a[O]+", "+a[P]+", "+a[T]+")"
}return"matrix3d("+a[Q]+", "+a[U]+", "+a[Y]+", "+a[I]+", "+a[ag]+", "+a[ah]+", "+a[ai]+", "+a[aj]+", "+a[S]+", "+a[X]+", "+a[ab]+", "+a[ac]+", "+a[N]+", "+a[R]+", "+a[W]+", "+a[aa]+")"
};V.toCSSString=V.toString;V._combine=function(c,f,a,b){var d=an.create();d[0]=(a*c[0])+(b*f[0]);
d[1]=(a*c[1])+(b*f[1]);d[2]=(a*c[2])+(b*f[2]);return d};V._matrix2dToMat4=function(d){var b=af.create();
for(var a=0;a<4;a++){for(var c=0;c<4;c++){b[a*4+c]=d[a][c]}}return b};V._mat4ToMatrix2d=function(a){var d=[];
for(var b=0;b<4;b++){d[b]=[];for(var c=0;c<4;c++){d[b][c]=a[b*4+c]}}return d};V._rotationFromQuat=function(k){var g=k[3]*k[3];
var h=k[0]*k[0];var i=k[1]*k[1];var j=k[2]*k[2];var a=h+i+j+g;var f=k[0]*k[1]+k[2]*k[3];
var b,c,d;if(f>0.499*a){c=2*Math.atan2(k[0],k[3]);d=Math.PI/2;b=0;return an.fromValues(b,c,d)
}if(f<-0.499*a){c=-2*Math.atan2(k[0],k[3]);d=-Math.PI/2;b=0;return an.fromValues(b,c,d)
}c=Math.atan2(2*k[1]*k[3]-2*k[0]*k[2],h-i-j+g);d=Math.asin(2*f/a);b=Math.atan2(2*k[0]*k[3]-2*k[1]*k[2],-h+i-j+g);
return an.fromValues(b,c,d)};al.exports=Z},{"./gl-matrix/mat4":141,"./gl-matrix/vec3":142,"./gl-matrix/vec4":143}],141:[function(i,h,g){var f={create:i("gl-mat4/create"),rotate:i("gl-mat4/rotate"),rotateX:i("gl-mat4/rotateX"),rotateY:i("gl-mat4/rotateY"),rotateZ:i("gl-mat4/rotateZ"),scale:i("gl-mat4/scale"),multiply:i("gl-mat4/multiply"),translate:i("gl-mat4/translate"),invert:i("gl-mat4/invert"),clone:i("gl-mat4/clone"),transpose:i("gl-mat4/transpose"),identity:i("gl-mat4/identity"),fromRotationTranslation:i("gl-mat4/fromRotationTranslation")};
h.exports=f},{"gl-mat4/clone":117,"gl-mat4/create":118,"gl-mat4/fromRotationTranslation":119,"gl-mat4/identity":120,"gl-mat4/invert":121,"gl-mat4/multiply":122,"gl-mat4/rotate":123,"gl-mat4/rotateX":124,"gl-mat4/rotateY":125,"gl-mat4/rotateZ":126,"gl-mat4/scale":127,"gl-mat4/translate":128,"gl-mat4/transpose":129}],142:[function(f,h,g){var i={create:f("gl-vec3/create"),dot:f("gl-vec3/dot"),normalize:f("gl-vec3/normalize"),length:f("gl-vec3/length"),cross:f("gl-vec3/cross"),fromValues:f("gl-vec3/fromValues")};
h.exports=i},{"gl-vec3/create":130,"gl-vec3/cross":131,"gl-vec3/dot":132,"gl-vec3/fromValues":133,"gl-vec3/length":134,"gl-vec3/normalize":135}],143:[function(i,h,g){var f={create:i("gl-vec4/create"),transformMat4:i("gl-vec4/transformMat4"),fromValues:i("gl-vec4/fromValues")};
h.exports=f},{"gl-vec4/create":136,"gl-vec4/fromValues":137,"gl-vec4/transformMat4":138}],144:[function(p,r,o){p("./helpers/Float32Array");
var s=p("./helpers/transitionEnd");var n=p("@marcom/ac-clip").Clip;var l=p("./clips/ClipEasing");
var q=p("./clips/ClipInlineCss");var m=p("./clips/ClipTransitionCss");function t(d,a,c,b){if(d.nodeType){if(s===undefined||(b&&b.inlineStyles)){return new q(d,a,c,b)
}return new m(d,a,c,b)}return new l(d,a,c,b)}for(var u in n){if(typeof n[u]==="function"&&u.substr(0,1)!=="_"){t[u]=n[u].bind(n)
}}t.to=function(d,a,c,b){b=b||{};if(b.destroyOnComplete===undefined){b.destroyOnComplete=true
}return new t(d,a,c,b).play()};t.from=function(c,d,b,a){a=a||{};a.propsFrom=b;if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new t(c,d,a.propsTo,a).play()};r.exports=t},{"./clips/ClipEasing":147,"./clips/ClipInlineCss":148,"./clips/ClipTransitionCss":149,"./helpers/Float32Array":152,"./helpers/transitionEnd":161,"@marcom/ac-clip":62}],145:[function(d,g,f){g.exports=d("./timeline/Timeline")
},{"./timeline/Timeline":163}],146:[function(d,g,f){g.exports={Clip:d("./Clip"),Timeline:d("./Timeline")}
},{"./Clip":144,"./Timeline":145}],147:[function(z,A,y){var r=z("@marcom/ac-object/clone");
var v=z("@marcom/ac-object/create");var o=z("@marcom/ac-easing").createPredefined;
var q=z("../helpers/isCssCubicBezierString");var w=z("../helpers/BezierCurveCssManager");
var t=z("@marcom/ac-clip").Clip;var s=z("@marcom/ac-easing").Ease;function p(b,c,a,d){if(d&&q(d.ease)){d.ease=w.create(d.ease).toEasingFunction()
}d=d||{};this._propsEase=d.propsEase||{};t.call(this,b,c,a,d)}var u=t.prototype;
var x=p.prototype=v(u);x.reset=function(){var a=u.reset.call(this);if(this._clips){var b=this._clips.length;
while(b--){this._clips[b].reset()}}return a};x.destroy=function(){if(this._clips){var a=this._clips.length;
while(a--){this._clips[a].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return u.destroy.call(this)};x._prepareProperties=function(){var i=0;var f={};var h={};
var d={};var a;var b;if(this._propsEase){for(a in this._propsTo){if(this._propsTo.hasOwnProperty(a)){b=this._propsEase[a];
if(q(b)){b=w.create(b).toEasingFunction()}if(b===undefined){if(f[this._ease]===undefined){f[this._ease]={};
h[this._ease]={};d[this._ease]=this._ease.easingFunction;i++}f[this._ease][a]=this._propsTo[a];
h[this._ease][a]=this._propsFrom[a]}else{if(typeof b==="function"){f[i]={};h[i]={};
f[i][a]=this._propsTo[a];h[i][a]=this._propsFrom[a];d[i]=b;i++}else{if(f[b]===undefined){f[b]={};
h[b]={};d[b]=b;i++}f[b][a]=this._propsTo[a];h[b][a]=this._propsFrom[a]}}}}if(i>1){var g=r(this._options||{},true);
var c=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
g.onStart=null;g.onUpdate=null;g.onDraw=null;g.onComplete=null;this._clips=[];for(b in f){if(f.hasOwnProperty(b)){g.ease=d[b];
g.propsFrom=h[b];this._clips.push(new t(this._target,c,f[b],g))}}b="linear";this._propsTo={};
this._propsFrom={}}else{for(a in d){if(d.hasOwnProperty(a)){b=d[a]}}}if(b!==undefined){this._ease=(typeof b==="function")?new s(b):o(b)
}}return u._prepareProperties.call(this)};x._onUpdateClips=function(a){var c=(this._direction===1)?a.progress():1-a.progress();
var b=this._clips.length;while(b--){this._clips[b].progress(c)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};A.exports=p},{"../helpers/BezierCurveCssManager":151,"../helpers/isCssCubicBezierString":157,"@marcom/ac-clip":62,"@marcom/ac-easing":99,"@marcom/ac-object/clone":109,"@marcom/ac-object/create":110}],148:[function(u,w,t){var o=u("@marcom/ac-dom-styles/setStyle");
var x=u("../helpers/convertToStyleObject");var v=u("../helpers/convertToTransitionableObjects");
var r=u("@marcom/ac-object/create");var q=u("../helpers/removeTransitions");var n=u("./ClipEasing");
function y(b,c,a,d){d=d||{};this._el=b;this._storeOnStart=d.onStart||null;this._storeOnDraw=d.onDraw||null;
this._storeOnComplete=d.onComplete||null;d.onStart=this._onStart;d.onDraw=this._onDraw;
d.onComplete=this._onComplete;n.call(this,{},c,a,d)}var p=n.prototype;var s=y.prototype=r(p);
s.play=function(){var a=p.play.call(this);if(this._remainingDelay!==0){o(this._el,x(this._target))
}return a};s.reset=function(){var a=p.reset.call(this);o(this._el,x(this._target));
return a};s.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return p.destroy.call(this)};
s.target=function(){return this._el};s._prepareProperties=function(){var b=v(this._el,this._propsTo,this._propsFrom);
this._target=b.target;this._propsFrom=b.propsFrom;this._propsTo=b.propsTo;q(this._el,this._target);
var d=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=x(d);if(this._options.removeStylesOnComplete!==undefined){var a;
var c=this._options.removeStylesOnComplete;if(typeof c==="boolean"&&c){for(a in this._completeStyles){if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}else{if(typeof c==="object"&&c.length){var f=c.length;while(f--){a=c[f];if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}}}return p._prepareProperties.call(this)};s._onStart=function(a){if(this.playing()&&this._direction===1&&this._delay===0){o(this._el,x(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
s._onDraw=function(a){o(this._el,x(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};s._onComplete=function(a){o(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};w.exports=y},{"../helpers/convertToStyleObject":154,"../helpers/convertToTransitionableObjects":155,"../helpers/removeTransitions":158,"./ClipEasing":147,"@marcom/ac-dom-styles/setStyle":98,"@marcom/ac-object/create":110}],149:[function(N,V,z){var T=N("@marcom/ac-dom-styles/setStyle");
var S=N("@marcom/ac-dom-styles/getStyle");var U=N("../helpers/convertToStyleObject");
var I=N("../helpers/convertToTransitionableObjects");var A=N("@marcom/ac-object/clone");
var K=N("@marcom/ac-object/create");var D=N("@marcom/ac-easing").createPredefined;
var L=N("../helpers/isCssCubicBezierString");var C=N("../helpers/removeTransitions");
var O=N("../helpers/transitionEnd");var J=N("../helpers/waitAnimationFrames");var B=N("../helpers/BezierCurveCssManager");
var W=N("@marcom/ac-clip").Clip;var F=N("./ClipEasing");var E=N("@marcom/ac-page-visibility").PageVisibilityManager;
var R="ease";var P="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var M="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function Q(d,a,c,b){b=b||{};this._el=d;this._storeEase=b.ease;if(typeof this._storeEase==="function"){throw new Error(M)
}this._storeOnStart=b.onStart||null;this._storeOnComplete=b.onComplete||null;b.onStart=this._onStart.bind(this);
b.onComplete=this._onComplete.bind(this);this._stylesTo=A(c,true);this._stylesFrom=(b.propsFrom)?A(b.propsFrom,true):{};
this._propsEase=(b.propsEase)?A(b.propsEase,true):{};if(L(b.ease)){b.ease=B.create(b.ease).toEasingFunction()
}W.call(this,{},a,{},b);this._propsFrom={}}var H=W.prototype;var G=Q.prototype=K(H);
G.play=function(){var a=H.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,U(this._stylesFrom))
}return a};G.reset=function(){var a=H.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,U(this._styles));return a};G.destroy=function(){E.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return H.destroy.call(this)};G.target=function(){return this._el};G.duration=function(a){var b=H.duration.call(this,a);
if(a===undefined){return b}if(this.playing()){this.progress(this._progress)}return b
};G.progress=function(b){var a=H.progress.call(this,b);if(b===undefined){return a
}b=(this._direction===1)?b:1-b;this._stylesClip.progress(b);this._applyStyles(0,U(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;J(this._setStylesAfterWaiting,2)
}return a};G._prepareProperties=function(){var g=I(this._el,this._stylesTo,this._stylesFrom);
this._styles=g.target;this._stylesTo=g.propsTo;this._stylesFrom=g.propsFrom;var f=this._storeEase||R;
this._eases={};this._propsArray=[];var b;this._styleCompleteTo=U(this._stylesTo);
this._styleCompleteFrom=U(this._stylesFrom);this._propsEaseKeys={};var c;for(c in this._stylesTo){if(this._stylesTo.hasOwnProperty(c)){this._propsArray[this._propsArray.length]=c;
if(this._propsEase[c]===undefined){if(this._eases[f]===undefined){b=this._convertEase(f);
this._eases[f]=b.css}this._propsEaseKeys[c]=f}else{if(this._eases[this._propsEase[c]]===undefined){b=this._convertEase(this._propsEase[c]);
this._eases[this._propsEase[c]]=b.css;this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=b.js}else{if(L(this._propsEase[c])){this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=this._eases[this._propsEase[c]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=U((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var a=this._options.removeStylesOnComplete;
if(typeof a==="boolean"&&a){for(c in this._stylesTo){this._completeStyles[c]=null
}}else{if(typeof a==="object"&&a.length){var d=a.length;while(d--){this._completeStyles[a[d]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);E.on(E.CHANGED,this._onVisibilityChanged);
this._stylesClip=new F(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
W._remove(this._stylesClip);return H._prepareProperties.call(this)};G._convertEase=function(d){if(typeof d==="function"){throw new Error(M)
}var c;var a;if(L(d)){c=B.create(d);a=c.toEasingFunction()}else{var b=D(d);if(b.cssString===null){throw new Error(P.replace(/%EASE%/g,d))
}c=B.create(b.cssString);a=d}return{css:{"1":c,"-1":c.reversed()},js:a}};G._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
H._complete.call(this)}};G._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};G._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(O,this._onTransitionEnded)
}};G._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(O,this._onTransitionEnded)
}};G._applyStyles=function(f,d){if(f>0){var c="";var a={};var b;for(b in this._eases){if(this._eases.hasOwnProperty(b)){a[b]=this._eases[b][this._direction].splitAt(this.progress()).toCSSString()
}}for(b in this._stylesTo){if(this._stylesTo.hasOwnProperty(b)){c+=b+" "+f+"ms "+a[this._propsEaseKeys[b]]+" 0ms, "
}}this._currentTransitionStyles=c.substr(0,c.length-2);if(!this._doStylesMatchCurrentStyles(d)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}d.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
T(this._el,d)};G._doStylesMatchCurrentStyles=function(c){var a=S.apply(this,[this._el].concat([this._propsArray]));
var b;for(b in c){if(c.hasOwnProperty(b)&&a.hasOwnProperty(b)&&c[b]!==a[b]){return false
}}return true};G._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var a=this._durationMs*(1-this.progress());var b=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(a,b)}};G._setOtherTransitions=function(){C(this._el,this._stylesTo);
var b=W.getAll(this._el);var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._otherTransitions&&b[a]._otherTransitions.length){this._otherTransitions=b[a]._otherTransitions;
return}}this._otherTransitions=S(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};G._getTransitionStyles=function(){var a=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){a+=this._otherTransitions}else{if(a.length){a=a.substr(0,a.length-2)
}}return a};G._getOtherClipTransitionStyles=function(){var c="";var b=W.getAll(this._el);
var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._currentTransitionStyles&&b[a]._currentTransitionStyles.length){c+=b[a]._currentTransitionStyles+", "
}}return c};G._onVisibilityChanged=function(b){if(this.playing()&&!b.isHidden){this._update({timeNow:this._getTime()});
var a=this.progress();if(a<1){this.progress(a)}}};G._onPaused=function(a){var b=S.apply(this,[this._el].concat([this._propsArray]));
b.transition=this._getTransitionStyles();this._removeTransitionListener();T(this._el,b)
};G._onStart=function(b){var a=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(a){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}J(this._setStylesAfterWaiting,a);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};G._onComplete=function(a){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
T(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};V.exports=Q},{"../helpers/BezierCurveCssManager":151,"../helpers/convertToStyleObject":154,"../helpers/convertToTransitionableObjects":155,"../helpers/isCssCubicBezierString":157,"../helpers/removeTransitions":158,"../helpers/transitionEnd":161,"../helpers/waitAnimationFrames":162,"./ClipEasing":147,"@marcom/ac-clip":62,"@marcom/ac-dom-styles/getStyle":96,"@marcom/ac-dom-styles/setStyle":98,"@marcom/ac-easing":99,"@marcom/ac-object/clone":109,"@marcom/ac-object/create":110,"@marcom/ac-page-visibility":287}],150:[function(m,l,i){var j=m("@marcom/ac-easing").createBezier;
function h(a,b){this.manager=b;this.p1={x:a[0],y:a[1]};this.p2={x:a[2],y:a[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var k=h.prototype;k.splitAt=function(t){if(this._isLinear){return this}t=Math.round(t*40)/40;
if(t===0){return this}else{if(this._cacheSplits[t]!==undefined){return this._cacheSplits[t]
}}var b=[this.p1.x,this.p2.x];var f=[this.p1.y,this.p2.y];var g=0;var d=t;var v=0;
var c=1;var u=this._getStartX(t,b);while(d!==u&&g<1000){if(d<u){c=t}else{v=t}t=v+((c-v)*0.5);
u=this._getStartX(t,b);++g}var s=this._splitBezier(t,b,f);var a=this._normalize(s);
var w=this.manager.create(a);this._cacheSplits[d]=w;return w};k.reversed=function(){var a=this.toArray();
return this.manager.create([0.5-(a[2]-0.5),0.5-(a[3]-0.5),0.5-(a[0]-0.5),0.5-(a[1]-0.5)])
};k.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};k.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};k.toEasingFunction=function(){return j.apply(this,this.toArray()).easingFunction
};k._getStartX=function(a,g){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return f-3*c*b*g[1]+3*a*d*g[0]
};k._splitBezier=function(a,g,o){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return[f-3*c*b*g[1]+3*a*d*g[0],f-3*c*b*o[1]+3*a*d*o[0],c-2*a*b*g[1]+d*g[0],c-2*a*b*o[1]+d*o[0],a-b*g[1],a-b*o[1]]
};k._normalize=function(a){return[(a[2]-a[0])/(1-a[0]),(a[3]-a[1])/(1-a[1]),(a[4]-a[0])/(1-a[0]),(a[5]-a[1])/(1-a[1])]
};l.exports=h},{"@marcom/ac-easing":99}],151:[function(m,l,i){var h=m("./BezierCurveCss");
function j(){this._instances={}}var k=j.prototype;k.create=function(a){var b;if(typeof a==="string"){b=a.replace(/ /g,"")
}else{b="cubic-bezier("+a.join(",")+")"}if(this._instances[b]===undefined){if(typeof a==="string"){a=a.match(/\d*\.?\d+/g);
var c=a.length;while(c--){a[c]=Number(a[c])}}this._instances[b]=new h(a,this)}return this._instances[b]
};l.exports=new j()},{"./BezierCurveCss":150}],152:[function(d,g,f){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],153:[function(o,n,p){var k=o("@marcom/ac-dom-metrics/getDimensions");var q=o("./splitUnits");
var j={translateX:"width",translateY:"height"};function l(d,b,a){this._transform=d;
var c;var g;var f;for(f in a){if(a.hasOwnProperty(f)&&typeof this._transform[f]==="function"){c=q(a[f]);
if(c.unit==="%"){g=this._convertPercentToPixelValue(f,c.value,b)}else{g=c.value
}this._transform[f].call(this._transform,g)}}}var m=l.prototype;m._convertPercentToPixelValue=function(a,b,c){a=j[a];
var d=k(c);if(d[a]){b*=0.01;return d[a]*b}return b};m.toArray=function(){return this._transform.toArray()
};m.toCSSString=function(){return this._transform.toCSSString()};n.exports=l},{"./splitUnits":159,"@marcom/ac-dom-metrics/getDimensions":84}],154:[function(f,i,g){i.exports=function h(b){var c={};
var d;var a;for(a in b){if(b.hasOwnProperty(a)&&b[a]!==null){if(b[a].isColor){if(b[a].isRgb){c[a]="rgb("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+")"
}else{if(b[a].isRgba){c[a]="rgba("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+", "+b[a].a+")"
}}}else{if(a==="transform"){d=(b[a].length===6)?"matrix":"matrix3d";c[a]=d+"("+b[a].join(",")+")"
}else{if(!b[a].unit){c[a]=b[a].value}else{c[a]=b[a].value+b[a].unit}}}}}return c
}},{}],155:[function(C,F,A){var x=C("@marcom/ac-dom-styles/getStyle");var v=C("@marcom/ac-object/clone");
var E=C("./splitUnits");var H=C("./toCamCase");var G=C("@marcom/ac-color").Color;
var y=C("@marcom/ac-feature/cssPropertyAvailable");var B=C("@marcom/ac-transform").Transform;
var I=C("./TransformMatrix");var w=function(a){if(G.isRgba(a)){a=new G(a).rgbaObject();
a.isRgba=true}else{a=new G(a).rgbObject();a.isRgb=true}a.isColor=true;return a};
var s=function(a){if(a.isRgb){a.isRgb=false;a.isRgba=true;a.a=1}};var t=function(b,c,a){if(b.isRgba||c.isRgba||a.isRgba){s(b);
s(c);s(a)}};var u=function(a){return[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]
};var z=function(b,c,a){if(b.transform.length===16||c.transform.length===16||a.transform.length===16){if(b.transform.length===6){b.transform=u(b.transform)
}if(c.transform.length===6){c.transform=u(c.transform)}if(a.transform.length===6){a.transform=u(a.transform)
}}};F.exports=function D(i,b,c){var g={};b=v(b,true);c=v(c,true);var j;var a;var f;
var d;var h=y("transform");var k;for(k in b){if(b.hasOwnProperty(k)&&b[k]!==null){if(k==="transform"){if(h){a=new B();
j=x(i,"transform")["transform"]||"none";a.setMatrixValue(j);f=new I(new B(),i,b[k])
}if(f&&f.toCSSString()!==a.toCSSString()){d=new I(c[k]?new B():a.clone(),i,c[k]);
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null}}else{j=x(i,k)[H(k)]||c[k];
if(G.isColor(j)){g[k]=w(j);c[k]=(c[k]!==undefined)?w(c[k]):v(g[k],true);b[k]=w(b[k])
}else{g[k]=E(j);c[k]=(c[k]!==undefined)?E(c[k]):v(g[k],true);b[k]=E(b[k])}}}}for(k in c){if(c.hasOwnProperty(k)&&c[k]!==null&&(b[k]===undefined||b[k]===null)){if(k==="transform"){if(h){a=new B();
a.setMatrixValue(getComputedStyle(i).transform||getComputedStyle(i).webkitTransform||"none");
d=new I(new B(),i,c[k])}if(d&&d.toCSSString()!==a.toCSSString()){f=new I(a.clone());
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null;c[k]=null
}}else{j=x(i,k)[H(k)];if(G.isColor(j)){g[k]=w(j);b[k]=v(g[k],true);c[k]=w(c[k])
}else{g[k]=E(j);c[k]=E(c[k]);b[k]=v(g[k],true)}}}if(g[k]&&g[k].isColor){t(g[k],c[k],b[k])
}}if(g.transform){z(g,c,b)}return{target:g,propsTo:b,propsFrom:c}}},{"./TransformMatrix":153,"./splitUnits":159,"./toCamCase":160,"@marcom/ac-color":64,"@marcom/ac-dom-styles/getStyle":96,"@marcom/ac-feature/cssPropertyAvailable":185,"@marcom/ac-object/clone":109,"@marcom/ac-transform":139}],156:[function(f,i,g){i.exports=function h(d){if(d.transitionProperty){var a="";
var n=d.transitionProperty.split(", ");var c=d.transitionDuration.split(", ");var b=d.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(j){return j.substr(0,j.length-1)
}).split(", ");var p=d.transitionDelay.split(", ");var o=n.length;while(o--){a+=n[o]+" "+c[o]+" "+b[o]+" "+p[o]+", "
}return a.substr(0,a.length-2)}return false}},{}],157:[function(i,h,f){h.exports=function g(a){return typeof a==="string"&&a.substr(0,13)==="cubic-bezier("
}},{}],158:[function(n,m,o){var k=n("@marcom/ac-dom-styles/setStyle");var j=n("@marcom/ac-dom-styles/getStyle");
var l=n("./getShorthandTransition");m.exports=function i(b,g){var a=j(b,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
a=a.transition||l(a);if(a&&a.length){a=a.split(",");var c=0;var f;var d=a.length;
while(d--){f=a[d].trim().split(" ")[0];if(g[f]!==undefined){a.splice(d,1);++c}}if(c){if(a.length===0){a=["all"]
}k(b,{transition:a.join(",").trim()})}}}},{"./getShorthandTransition":156,"@marcom/ac-dom-styles/getStyle":96,"@marcom/ac-dom-styles/setStyle":98}],159:[function(i,h,f){h.exports=function g(a){a=String(a);
if(a.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var b=/(\d*\.?\d*)(.*)/;var d=1;if(a&&a.substr(0,1)==="-"){a=a.substr(1);d=-1}var c=String(a).match(b);
return{value:Number(c[1])*d,unit:c[2]}}},{}],160:[function(i,h,f){h.exports=function g(a){var b=function(l,d,c,m){return(c===0)&&(m.substr(1,3)!=="moz")?d:d.toUpperCase()
};return a.replace(/-(\w)/g,b)}},{}],161:[function(j,i,k){var h;i.exports=(function g(){if(h){return h
}var c;var b=document.createElement("fakeelement");var a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(c in a){if(b.style[c]!==undefined){h=a[c];return h}}})()},{}],162:[function(j,i,g){var h=j("@marcom/ac-page-visibility").PageVisibilityManager;
i.exports=function k(a,c){if(c){var b=function(m){if(h.isHidden){setTimeout(m,16)
}else{window.requestAnimationFrame(m)}};var d=0;var f=function(){if(d===c){a.call(this)
}else{++d;b(f)}};f()}else{a.call(this)}}},{"@marcom/ac-page-visibility":287}],163:[function(u,w,t){var q=u("@marcom/ac-object/create");
var p=u("@marcom/ac-clip").Clip;var s=u("./TimelineClip");var v=u("./TimelineCallback");
var m=u("./TimelineItemList");var n=p.prototype;function o(a){a=a||{};a.ease=a.ease||"linear";
a.destroyOnComplete=false;this.options=a;p.call(this,{t:0},0,{t:1},a);this._itemList=new m()
}var r=o.prototype=q(n);o.prototype.constructor=o;r._update=function(a){n._update.call(this,a);
this._render()};r.progress=function(a){n.progress.call(this,a);if(a!==undefined){this._render()
}return this._progress};r._render=function(){if(this._itemList.length===0){return
}var b=this._target.t*this._duration;var a=this._itemList.head;var d=a;while(d){d=a.next;
var c=(b-a.position);a.currentTime(c);a=d}};r.addClip=function(b,c){c=(c===undefined)?this.duration():c;
var a=b._delay/1000;this._itemList.append(new s(b,c+a));this._updateDuration()};
r.addCallback=function(b,a){a=(a===undefined)?this.duration():a;this._itemList.append(new v(b,a));
this._updateDuration()};r.remove=function(a){var b=this._itemList.getItem(a);if(b){this._itemList.remove(b);
this._updateDuration()}};r._updateDuration=function(){var a=this._itemList.head;
var b=a.position+a.duration();this._itemList.forEach(function(c){var d=c.position+c.duration();
if(d>=b){a=c;b=d}});this.duration(b)};r.destroy=function(){var a=this._itemList.head;
while(a){var b=a;a=b.next;this._itemList.remove(b)}this._duration=0;return n.destroy.call(this)
};w.exports=o},{"./TimelineCallback":164,"./TimelineClip":165,"./TimelineItemList":166,"@marcom/ac-clip":62,"@marcom/ac-object/create":110}],164:[function(g,k,h){function i(a,b){this.callback=a;
this._delay=0;this.position=b;this._hasTriggered=false;this.prev=null;this.next=null
}var j=i.prototype;j.duration=function(){return 0};j.currentTime=function(a){if(a>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(a<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};k.exports=i},{}],165:[function(g,k,h){function i(a,b){this.clip=a;this.position=b;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var j=i.prototype;j.currentTime=function(a){var b=Math.min(1,Math.max(0,a/this.clip._duration));
if(b!==b){b=1}if(this.lastProgress===b){return this.lastProgress}if(this.lastProgress===0||b===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(b*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(b);
return this.lastProgress};j.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};k.exports=i},{}],166:[function(i,o,j){var k=i("./TimelineClip");
var m=i("./TimelineCallback");var l=function(){this.head=null;this.tail=null;this.length=0
};var n=l.prototype;n.append=function(a){a.prev=null;a.next=null;if(this.tail){this.tail.next=a;
a.prev=this.tail}else{this.head=a}this.tail=a;this.length++};n.remove=function(a){if(a===this.head){this.head=this.head.next
}else{if(a===this.tail){this.tail=this.tail.prev}}if(a.prev){a.prev.next=a.next
}if(a.next){a.next.prev=a.prev}a.next=a.prev=null;if(this.head===null){this.tail=null
}this.length--};n.getItem=function(c){var b=this.head;while(b){var a=b;if((a instanceof k&&a.clip===c)||(a instanceof m&&a.callback===c)){return a
}b=a.next}return null};n.forEach=function(a){var d=0;var c=this.head;while(c){var b=c;
a(b,d,this.length);c=b.next}};n.destroy=function(){while(this.head){var a=this.head;
this.remove(a);a.destroy()}};o.exports=l},{"./TimelineCallback":164,"./TimelineClip":165}],167:[function(d,g,f){window.matchMedia=window.matchMedia||(function(c,b){var m,o=c.documentElement,n=o.firstElementChild||o.firstChild,l=c.createElement("body"),a=c.createElement("div");
a.id="mq-test-1";a.style.cssText="position:absolute;top:-100em";l.style.background="none";
l.appendChild(a);return function(h){a.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width:42px; }</style>';
o.insertBefore(l,n);m=a.offsetWidth===42;o.removeChild(l);return{matches:m,media:h}
}}(document))},{}],168:[function(d,g,f){arguments[4][19][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":171,"./shared/prefixHelper":173,"./shared/windowFallbackEventTypes":176,"./utils/eventTypeAvailable":177,dup:19}],169:[function(d,g,f){arguments[4][87][0].apply(f,arguments)
},{"./shared/getStyleTestElement":172,"./shared/prefixHelper":173,"./shared/stylePropertyCache":174,"./utils/toCSS":178,"./utils/toDOM":179,dup:87}],170:[function(d,g,f){arguments[4][88][0].apply(f,arguments)
},{"./getStyleProperty":169,"./shared/prefixHelper":173,"./shared/stylePropertyCache":174,"./shared/styleValueAvailable":175,dup:88}],171:[function(d,g,f){arguments[4][20][0].apply(f,arguments)
},{dup:20}],172:[function(d,g,f){arguments[4][89][0].apply(f,arguments)},{dup:89}],173:[function(d,g,f){arguments[4][21][0].apply(f,arguments)
},{dup:21}],174:[function(d,g,f){arguments[4][91][0].apply(f,arguments)},{dup:91}],175:[function(d,g,f){arguments[4][92][0].apply(f,arguments)
},{"./getStyleTestElement":172,"./stylePropertyCache":174,dup:92}],176:[function(d,g,f){arguments[4][22][0].apply(f,arguments)
},{dup:22}],177:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],178:[function(d,g,f){arguments[4][94][0].apply(f,arguments)
},{dup:94}],179:[function(d,g,f){arguments[4][95][0].apply(f,arguments)},{dup:95}],180:[function(d,g,f){g.exports={canvasAvailable:d("./canvasAvailable"),continuousScrollEventsAvailable:d("./continuousScrollEventsAvailable"),cookiesAvailable:d("./cookiesAvailable"),cssLinearGradientAvailable:d("./cssLinearGradientAvailable"),cssPropertyAvailable:d("./cssPropertyAvailable"),cssViewportUnitsAvailable:d("./cssViewportUnitsAvailable"),elementAttributeAvailable:d("./elementAttributeAvailable"),eventTypeAvailable:d("./eventTypeAvailable"),isDesktop:d("./isDesktop"),isHandheld:d("./isHandheld"),isRetina:d("./isRetina"),isTablet:d("./isTablet"),localStorageAvailable:d("./localStorageAvailable"),mediaElementsAvailable:d("./mediaElementsAvailable"),mediaQueriesAvailable:d("./mediaQueriesAvailable"),sessionStorageAvailable:d("./sessionStorageAvailable"),svgAvailable:d("./svgAvailable"),threeDTransformsAvailable:d("./threeDTransformsAvailable"),touchAvailable:d("./touchAvailable"),webGLAvailable:d("./webGLAvailable")}
},{"./canvasAvailable":181,"./continuousScrollEventsAvailable":182,"./cookiesAvailable":183,"./cssLinearGradientAvailable":184,"./cssPropertyAvailable":185,"./cssViewportUnitsAvailable":186,"./elementAttributeAvailable":187,"./eventTypeAvailable":188,"./isDesktop":190,"./isHandheld":191,"./isRetina":192,"./isTablet":193,"./localStorageAvailable":194,"./mediaElementsAvailable":195,"./mediaQueriesAvailable":196,"./sessionStorageAvailable":197,"./svgAvailable":198,"./threeDTransformsAvailable":199,"./touchAvailable":200,"./webGLAvailable":201}],181:[function(h,m,i){var j=h("./helpers/globals");
var k=h("@marcom/ac-function/once");var l=function(){var b=j.getDocument();var a=b.createElement("canvas");
return !!(typeof a.getContext==="function"&&a.getContext("2d"))};m.exports=k(l);
m.exports.original=l},{"./helpers/globals":189,"@marcom/ac-function/once":3}],182:[function(o,m,i){var n=o("@marcom/ac-useragent");
var j=o("./touchAvailable").original;var l=o("@marcom/ac-function/once");function k(){return(!j()||(n.os.ios&&n.os.version.major>=8)||n.browser.chrome)
}m.exports=l(k);m.exports.original=k},{"./touchAvailable":200,"@marcom/ac-function/once":3,"@marcom/ac-useragent":401}],183:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=false;var d=j.getDocument();
var b=j.getNavigator();try{if("cookie" in d&&!!b.cookieEnabled){d.cookie="ac_feature_cookie=1";
a=(d.cookie.indexOf("ac_feature_cookie")!==-1);d.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(c){}return a}l.exports=k(i);l.exports.original=i},{"./helpers/globals":189,"@marcom/ac-function/once":3}],184:[function(m,l,h){var j=m("@marcom/ac-prefixer/getStyleValue");
var k=m("@marcom/ac-function/once");function i(){var a=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return a.some(function(b){return !!j("background-image",b)})}l.exports=k(i);l.exports.original=i
},{"@marcom/ac-function/once":3,"@marcom/ac-prefixer/getStyleValue":170}],185:[function(o,n,i){var l=o("@marcom/ac-prefixer/getStyleValue");
var m=o("@marcom/ac-prefixer/getStyleProperty");var k=o("@marcom/ac-function/memoize");
function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)}else{return !!m(a)}}n.exports=k(j);
n.exports.original=j},{"@marcom/ac-function/memoize":2,"@marcom/ac-prefixer/getStyleProperty":169,"@marcom/ac-prefixer/getStyleValue":170}],186:[function(h,m,i){var k=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function j(){return !!k("margin","1vw 1vh")
}m.exports=l(j);m.exports.original=j},{"@marcom/ac-function/once":3,"@marcom/ac-prefixer/getStyleValue":170}],187:[function(h,l,i){var k=h("./helpers/globals");
var j=h("@marcom/ac-function/memoize");function m(d,b){var c=k.getDocument();var a;
b=b||"div";a=c.createElement(b);return(d in a)}l.exports=j(m);l.exports.original=m
},{"./helpers/globals":189,"@marcom/ac-function/memoize":2}],188:[function(m,k,h){var i=m("@marcom/ac-prefixer/getEventType");
var j=m("@marcom/ac-function/memoize");function l(a,b){return !!i(a,b)}k.exports=j(l);
k.exports.original=l},{"@marcom/ac-function/memoize":2,"@marcom/ac-prefixer/getEventType":168}],189:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],190:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":189,"./touchAvailable":200,"@marcom/ac-function/once":3}],191:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":190,"./isTablet":193,"@marcom/ac-function/once":3}],192:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":189}],193:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":189,"./isDesktop":190,"@marcom/ac-function/once":3}],194:[function(m,l,i){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function h(){var a=j.getWindow();var b=false;
try{b=!!(a.localStorage&&a.localStorage.non_existent!==null)}catch(c){}return b
}l.exports=k(h);l.exports.original=h},{"./helpers/globals":189,"@marcom/ac-function/once":3}],195:[function(h,m,i){var j=h("./helpers/globals");
var l=h("@marcom/ac-function/once");function k(){var a=j.getWindow();return("HTMLMediaElement" in a)
}m.exports=l(k);m.exports.original=k},{"./helpers/globals":189,"@marcom/ac-function/once":3}],196:[function(m,l,h){m("@marcom/ac-polyfills/matchMedia");
var j=m("./helpers/globals");var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();
var b=a.matchMedia("only all");return !!(b&&b.matches)}l.exports=k(i);l.exports.original=i
},{"./helpers/globals":189,"@marcom/ac-function/once":3,"@marcom/ac-polyfills/matchMedia":167}],197:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=false;
try{if("sessionStorage" in a&&typeof a.sessionStorage.setItem==="function"){a.sessionStorage.setItem("ac_feature","test");
c=true;a.sessionStorage.removeItem("ac_feature","test")}}catch(b){}return c}l.exports=k(i);
l.exports.original=i},{"./helpers/globals":189,"@marcom/ac-function/once":3}],198:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":189,"@marcom/ac-function/once":3}],199:[function(h,m,i){var j=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function k(){return !!(j("perspective","1px")&&j("transform","translateZ(0)"))
}m.exports=l(k);m.exports.original=k},{"@marcom/ac-function/once":3,"@marcom/ac-prefixer/getStyleValue":170}],200:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":189,"@marcom/ac-function/once":3}],201:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var b=j.getDocument();var a=b.createElement("canvas");
if(typeof a.getContext==="function"){return !!(a.getContext("webgl")||a.getContext("experimental-webgl"))
}return false}l.exports=k(i);l.exports.original=i},{"./helpers/globals":189,"@marcom/ac-function/once":3}],202:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":210,"./utils/addEventListener":211}],203:[function(d,g,f){arguments[4][19][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":204,"./shared/prefixHelper":205,"./shared/windowFallbackEventTypes":206,"./utils/eventTypeAvailable":207,dup:19}],204:[function(d,g,f){arguments[4][20][0].apply(f,arguments)
},{dup:20}],205:[function(d,g,f){arguments[4][21][0].apply(f,arguments)},{dup:21}],206:[function(d,g,f){arguments[4][22][0].apply(f,arguments)
},{dup:22}],207:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],208:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],209:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":210,"./utils/removeEventListener":212}],210:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":203}],211:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],212:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],213:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b=1;if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":223}],214:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":223,dup:84}],215:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;if(f){b=p(d);g=j();a=k();return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}
}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};while((d=d.offsetParent)){b.top+=d.offsetTop;
b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":214,"./getScrollX":219,"./getScrollY":220,"./utils/getBoundingClientRect":223}],216:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":214,"./getPixelsInViewport":217}],217:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=document.documentElement.clientHeight;var f=h(d,a);
var c;if(f.top>=b||f.bottom<=0){return 0}c=(f.bottom-f.top);if(f.top<0){c+=f.top
}if(f.bottom>b){c-=f.bottom-b}return c}},{"./getViewportPosition":221}],218:[function(l,k,m){var i=l("./getDimensions");
var h=l("./utils/getBoundingClientRect");k.exports=function j(d,a){var b;var f;
var c;if(a){b=h(d);if(d.offsetParent){f=h(d.offsetParent);b.top-=f.top;b.left-=f.left
}}else{c=i(d,a);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height}
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":214,"./utils/getBoundingClientRect":223}],219:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],220:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],221:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":215,"./getScrollX":219,"./getScrollY":220,"./utils/getBoundingClientRect":223}],222:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":216,"./getPixelsInViewport":217}],223:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{dup:85}],224:[function(d,g,f){arguments[4][86][0].apply(f,arguments)},{"./getStyleProperty":225,"./getStyleValue":226,"./shared/stylePropertyCache":229,dup:86}],225:[function(d,g,f){arguments[4][87][0].apply(f,arguments)
},{"./shared/getStyleTestElement":227,"./shared/prefixHelper":228,"./shared/stylePropertyCache":229,"./utils/toCSS":232,"./utils/toDOM":233,dup:87}],226:[function(d,g,f){arguments[4][88][0].apply(f,arguments)
},{"./getStyleProperty":225,"./shared/prefixHelper":228,"./shared/stylePropertyCache":229,"./shared/styleValueAvailable":230,dup:88}],227:[function(d,g,f){arguments[4][89][0].apply(f,arguments)
},{dup:89}],228:[function(d,g,f){arguments[4][21][0].apply(f,arguments)},{dup:21}],229:[function(d,g,f){arguments[4][91][0].apply(f,arguments)
},{dup:91}],230:[function(d,g,f){arguments[4][92][0].apply(f,arguments)},{"./getStyleTestElement":227,"./stylePropertyCache":229,dup:92}],231:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{dup:93}],232:[function(d,g,f){arguments[4][94][0].apply(f,arguments)},{dup:94}],233:[function(d,g,f){arguments[4][95][0].apply(f,arguments)
},{dup:95}],234:[function(d,g,f){g.exports={getStyle:d("./getStyle"),setStyle:d("./setStyle")}
},{"./getStyle":235,"./setStyle":237}],235:[function(d,g,f){arguments[4][96][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":225,"@marcom/ac-prefixer/stripPrefixes":231,dup:96}],236:[function(d,g,f){arguments[4][97][0].apply(f,arguments)
},{dup:97}],237:[function(d,g,f){arguments[4][98][0].apply(f,arguments)},{"./internal/normalizeValue":236,"@marcom/ac-prefixer/getStyleCSS":224,"@marcom/ac-prefixer/getStyleProperty":225,dup:98}],238:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":239}],239:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],240:[function(d,g,f){arguments[4][109][0].apply(f,arguments)
},{"./extend":242,"@marcom/ac-polyfills/Array/isArray":243,dup:109}],241:[function(d,g,f){arguments[4][110][0].apply(f,arguments)
},{dup:110}],242:[function(d,g,f){arguments[4][111][0].apply(f,arguments)},{"@marcom/ac-polyfills/Array/prototype.forEach":244,dup:111}],243:[function(d,g,f){arguments[4][112][0].apply(f,arguments)
},{dup:112}],244:[function(d,g,f){arguments[4][114][0].apply(f,arguments)},{dup:114}],245:[function(d,g,f){arguments[4][116][0].apply(f,arguments)
},{dup:116}],246:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;var i=l("@marcom/ac-feature/cssPropertyAvailable");
k.exports=function j(d,a,b,c,f){if(i("opacity")){f=f||{};if(c){f.propsFrom=f.propsFrom||{};
f.propsFrom.opacity=a;return m.to(d,c,{opacity:b},f)}else{d.style.opacity=b;if(typeof f.onStart==="function"){f.onStart()
}if(typeof f.onComplete==="function"){f.onComplete()}}}else{d.style.visibility=(b)?"visible":"hidden";
if(typeof f.onStart==="function"){f.onStart()}if(typeof f.onComplete==="function"){f.onComplete()
}}}},{"@marcom/ac-eclipse":146,"@marcom/ac-feature/cssPropertyAvailable":185}],247:[function(k,j,m){var l=k("@marcom/ac-eclipse").Clip;
var h=k("@marcom/ac-feature/cssPropertyAvailable");j.exports=function i(b,a,c){c=c||{};
if(h("opacity")){if(a){return l.to(b,a,{opacity:1},c)}else{b.style.opacity=1;if(typeof c.onStart==="function"){c.onStart()
}if(typeof c.onComplete==="function"){c.onComplete()}}}else{b.style.visibility="visible";
if(typeof c.onStart==="function"){c.onStart()}if(typeof c.onComplete==="function"){c.onComplete()
}}}},{"@marcom/ac-eclipse":146,"@marcom/ac-feature/cssPropertyAvailable":185}],248:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(b,a,c){c=c||{};
if(i("opacity")){if(a){return m.to(b,a,{opacity:0},c)}else{b.style.opacity=0;if(typeof c.onStart==="function"){c.onStart()
}if(typeof c.onComplete==="function"){c.onComplete()}}}else{b.style.visibility="hidden";
if(typeof c.onStart==="function"){c.onStart()}if(typeof c.onComplete==="function"){c.onComplete()
}}}},{"@marcom/ac-eclipse":146,"@marcom/ac-feature/cssPropertyAvailable":185}],249:[function(m,l,o){var n=m("@marcom/ac-eclipse").Clip;
var k=m("@marcom/ac-dom-styles");var i=m("@marcom/ac-feature/cssPropertyAvailable");
l.exports=function j(c,f,g,b,d){d=d||{};var a;if(i("transition")){a={transform:{translateX:f+"px",translateY:g+"px"}}
}else{a={left:f+"px",top:g+"px"}}if(b){return n.to(c,b,a,d)}else{k.setStyle(c,a);
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}}},{"@marcom/ac-dom-styles":234,"@marcom/ac-eclipse":146,"@marcom/ac-feature/cssPropertyAvailable":185}],250:[function(l,k,m){var h=l("@marcom/ac-feature/cssPropertyAvailable");
var i=l("./move");k.exports=function j(b,d,a,c){return i(b,d,0,a,c)}},{"./move":249,"@marcom/ac-feature/cssPropertyAvailable":185}],251:[function(j,i,g){var k=j("@marcom/ac-eclipse").Clip;
i.exports=function h(y,d,u,w,a){a=a||{};var x=y===window;var b;var f;if(x){b=y.scrollX;
f=y.scrollY}else{b=y.scrollLeft;f=y.scrollTop}var s={x:b,y:f};var c={x:d,y:u};if(typeof a.onDraw==="function"){var t=a.onDraw
}var v=function(l){if(x){y.scrollTo(s.x,s.y)}else{y.scrollLeft=s.x;y.scrollTop=s.y
}if(t){t.call(this,l)}};a.onDraw=v;return k.to(s,w,c,a)}},{"@marcom/ac-eclipse":146}],252:[function(k,j,g){var h=k("./scroll");
j.exports=function i(b,m,a,c){var d=b===window;var f;if(d){f=b.scrollY}else{f=b.scrollTop
}return h(b,m,f,a,c)}},{"./scroll":251}],253:[function(v,w,s){var t=v("@marcom/ac-classlist");
var o=v("./singletons/analyticsManager");var q=v("@marcom/ac-object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var u=v("./Item");function p(a){a=a||{};this._wrapAround=a.wrapAround||false;this._itemType=a.itemType||u;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
m.call(this);if(a.startAt){this._startAt(a.startAt)}p._add(this,a.analyticsOptions)
}p.FADE="fade";p.FADE_SELECTOR="[data-ac-gallery-fade]";p.SLIDE="slide";p.SLIDE_SELECTOR="[data-ac-gallery-slide]";
p.UPDATE="update";p.UPDATE_COMPLETE="update:complete";var n=m.prototype;var r=p.prototype=q(n);
r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)}else{if(this._items.indexOf(b)>-1){return b
}}if(typeof a==="number"){this._items.splice(a,0,b)}else{this._items.push(b)}if(this._items.length===1){b.show();
this._setCurrentItem(b)}else{b.hide();if(this.getNextItem()===b){this._setNextItem(b)
}if(this.getPreviousItem()===b){this._setPreviousItem(b)}}if(b.getElementId()!==null){this._itemsIdLookup[b.getElementId()]=b
}b.on(u.SELECTED,this._update);return b};r.removeItem=function(b,c){c=c||{};if(typeof b==="number"){b=this._items[b]
}var d=this._items.indexOf(b);if(d>-1){var a=this.getNextItem();var f=this.getPreviousItem();
this._items.splice(d,1);b.off(u.SELECTED,this._update);if(a===b){this._setNextItem(this.getNextItem())
}if(f===b){this._setPreviousItem(this.getPreviousItem())}}if(b===this._currentItem&&this._items.length&&c.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(c.destroyItem&&b.getElement()){b.destroy()}return b};
r.show=function(b,a){if(typeof b==="number"){b=this._items[b]}else{if(typeof b==="string"){b=this._itemsIdLookup[b]
}}if(b){a=a||{};this._update({item:b,interactionEvent:a.interactionEvent})}return b||null
};r.showNext=function(a){var b=this.getNextItem();if(b){this.show(b,a)}return b
};r.showPrevious=function(a){var b=this.getPreviousItem();if(b){this.show(b,a)}return b
};r.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
r.getTotalItems=function(){return this._items.length};r.getItems=function(){return this._items
};r.getItem=function(a){if(typeof a==="number"){return this.getItemAt(a)}else{if(typeof a==="string"){return this.getItemById(a)
}}};r.getItemAt=function(a){return this._items[a]||null};r.getItemById=function(a){return this._itemsIdLookup[a]||null
};r.getItemIndex=function(a){return this._items.indexOf(a)};r.getCurrentItem=function(){return this._currentItem||null
};r.getLastItem=function(){return this._lastItem||null};r.getNextItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a<this._items.length-1){b=this._items[a+1]
}else{if(this._wrapAround){b=this._items[0]}}return b||null};r.getPreviousItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a>0){b=this._items[a-1]}else{if(this._wrapAround){b=this._items[this._items.length-1]
}}return b||null};r.getId=function(){return this._id};r.destroy=function(a){a=a||{};
if(a.destroyItems===undefined){a.destroyItems=true}this._setCurrentItem(null);if(a.destroyItems){var b;
while(this._items.length){b=this._items[0];b.off(u.SELECTED,this._update);this.removeItem(b,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;p._remove(this);return n.destroy.call(this)
};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.hide();
this._setCurrentItem(b);this._currentItem.show();this.trigger(p.UPDATE,this._items)
}};r._setCurrentItem=function(a){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==a){t.remove(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=a;if(this._currentItem&&this._currentItem.getElement()){t.add(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};r._setLastItem=function(a){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==a){t.remove(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}this._lastItem=a;if(this._lastItem&&this._lastItem.getElement()){t.add(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}};r._setNextItem=function(a){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==a){t.remove(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}this._nextItem=a;if(this._nextItem&&this._nextItem.getElement()){t.add(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}};r._setPreviousItem=function(a){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==a){t.remove(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}this._previousItem=a;if(this._previousItem&&this._previousItem.getElement()){t.add(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}};r._updateItems=function(b,a){if(b.outgoing[0]){b.outgoing[0].hide()}b.incoming[0].show();
if(!a){this.trigger(p.UPDATE_COMPLETE,b)}};r._update=function(a){var b=this._currentItem!==a.item;
if(b){this._setCurrentItem(a.item)}var c={incoming:[a.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:a.interactionEvent||null};
if(b){this.trigger(p.UPDATE,c)}this._updateItems(c,!b)};p._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};p._add=function(b,a){this._galleries.push(b);b._id=++this._idCounter;
o.add(b,a)};p._remove=function(a){var b=this._galleries.indexOf(a);if(b>-1){this._galleries.splice(b,1);
o.remove(a)}};p.getAll=function(){return Array.prototype.slice.call(this._galleries)
};p.getAllInView=function(){var b=[];var a=this._galleries.length;while(a--){if(this._galleries[a].isInView()){b.push(this._galleries[a])
}}return b};p.destroyAll=function(){var a=this._galleries.length;while(a--){this._galleries[a].destroy()
}this._galleries=[]};w.exports=p._instantiate()},{"./Item":254,"./singletons/analyticsManager":268,"@marcom/ac-classlist":13,"@marcom/ac-event-emitter-micro":238,"@marcom/ac-object/create":241}],254:[function(z,J,t){var I=z("@marcom/ac-classlist");
var D=z("@marcom/ac-dom-events/addEventListener");var B=z("@marcom/ac-dom-events/removeEventListener");
var A=z("@marcom/ac-dom-events/preventDefault");var E=z("@marcom/ac-dom-metrics/isInViewport");
var K=z("@marcom/ac-dom-metrics/getPercentInViewport");var u=z("@marcom/ac-dom-traversal/querySelectorAll");
var y=z("@marcom/ac-object/create");var F=z("./singletons/tabManager");var v=z("@marcom/ac-keyboard/keyMap");
var x=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;var G=z("@marcom/ac-keyboard");
var C="current";function H(a,b){this._el=a;b=b||{};this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._isACaption=(b.isACaption===undefined)?false:b.isACaption;
this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=u(F.focusableSelectors,a);
x.call(this)}H.CSS_CURRENT_ITEM="ac-gallery-currentitem";H.CSS_LAST_ITEM="ac-gallery-lastitem";
H.CSS_NEXT_ITEM="ac-gallery-nextitem";H.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
H.SELECTED="selected";H.SHOW="show";H.HIDE="hide";var w=H.prototype=y(x.prototype);
w.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(H.SHOW,this)};w.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(H.HIDE,this)};w.addElementTrigger=function(b,c){c=c||"click";
if(this._triggerEls[c]===undefined){this._triggerEls[c]=[]}var d=this._triggerEls[c].indexOf(b);
if(d<0){b.setAttribute("role","tab");b.setAttribute("tabindex","0");var a=this.getElementId();
if(a){b.setAttribute("aria-controls",a)}a=b.getAttribute("id");if(a&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",a)
}D(b,c,this._onTriggered);this._triggerEls[c].push(b);if(this._isShown){b.setAttribute("aria-selected","true");
I.add(b,C)}else{b.setAttribute("aria-selected","false")}}};w.removeElementTrigger=function(a,b){b=b||"click";
if(this._triggerEls[b]===undefined){return}var c=this._triggerEls[b].indexOf(a);
if(c>-1){this._cleanElementTrigger(a,b)}if(this._triggerEls[b].length===0){this._triggerEls[b]=undefined
}};w.addKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);
if(b<0){G.onDown(a,this._onKeyboardInteraction);this._triggerKeys.push(a)}}};w.removeKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]
}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);if(b>-1){G.offDown(a,this._onKeyboardInteraction);
this._triggerKeys.splice(b,1)}}};w.removeAllTriggers=function(){var c;var d=this._triggerKeys.length;
while(d--){c=this._triggerKeys[d];G.offDown(c,this._onKeyboardInteraction)}this._triggerKeys=[];
var a;var b;for(b in this._triggerEls){d=this._triggerEls[b].length;while(d--){a=this._triggerEls[b][d];
this._cleanElementTrigger(a,b)}}this._triggerEls={}};w.isInView=function(){if(this._el){return E(this._el)
}return false};w.percentageInView=function(){if(this._el){return K(this._el)}return 0
};w.getElement=function(){return this._el};w.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};w.destroy=function(){if(this._isShown){this._isShown=null;
I.remove(this._el,H.CSS_CURRENT_ITEM,H.CSS_LAST_ITEM,H.CSS_NEXT_ITEM,H.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
};w._addCurrentClassToTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","true");I.add(a,C)
}}};w._removeCurrentClassFromTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","false");I.remove(a,C)
}}};w._cleanElementTrigger=function(a,b){a.removeAttribute("aria-selected");a.removeAttribute("role");
a.removeAttribute("tabindex");a.removeAttribute("aria-controls");B(a,b,this._onTriggered);
if(this._isShown){I.remove(a,C)}};w._onKeyboardInteraction=function(a){if(this.isInView()){this._onTriggered(a)
}};w._setTabIndexOnFocusableItems=function(c){var d=c===null;var a=[];this._currentTabbableEls=this._currentTabbableEls||F.getTabbable(this._focusableEls);
if(!d){a=F.getTabbable(this._focusableEls);this._currentTabbableEls=a}var b=this._currentTabbableEls.length;
while(b--){if(d){this._currentTabbableEls[b].removeAttribute("tabindex")}else{this._currentTabbableEls[b].setAttribute("tabindex",c)
}}};w._onTriggered=function(a){A(a);this.trigger(H.SELECTED,{item:this,interactionEvent:a})
};J.exports=H},{"./singletons/tabManager":269,"@marcom/ac-classlist":13,"@marcom/ac-dom-events/addEventListener":202,"@marcom/ac-dom-events/preventDefault":208,"@marcom/ac-dom-events/removeEventListener":209,"@marcom/ac-dom-metrics/getPercentInViewport":216,"@marcom/ac-dom-metrics/isInViewport":222,"@marcom/ac-dom-traversal/querySelectorAll":54,"@marcom/ac-event-emitter-micro":238,"@marcom/ac-keyboard":281,"@marcom/ac-keyboard/keyMap":283,"@marcom/ac-object/create":241}],255:[function(t,w,r){var q=t("./helpers/extendProto");
var o=t("./Gallery");var v=t("./auto/AutoGallery");var p=t("./fade/FadeGallery");
var m=t("./fade/FadeItem");var u=t("./slide/SlideGallery");var n=t("./slide/SlideItem");
var s=t("./Item");o.create=t("./factories/create");o.autoCreate=t("./factories/autoCreate");
o.extend=q;v.extend=q;p.extend=q;m.extend=q;u.extend=q;n.extend=q;s.extend=q;w.exports={Gallery:o,AutoGallery:v,FadeGallery:p,FadeGalleryItem:m,SlideGallery:u,SlideGalleryItem:n,Item:s,ToggleNav:t("./navigation/ToggleNav")}
},{"./Gallery":253,"./Item":254,"./auto/AutoGallery":257,"./factories/autoCreate":258,"./factories/create":259,"./fade/FadeGallery":260,"./fade/FadeItem":261,"./helpers/extendProto":262,"./navigation/ToggleNav":267,"./slide/SlideGallery":270,"./slide/SlideItem":271}],256:[function(j,p,k){var l;
try{l=j("ac-analytics").observer.Gallery}catch(m){}var n="data-analytics-gallery-id";
function q(){this._observers={}}var o=q.prototype;o.add=function(d,b){var a=d.getId();
if(!l||this._observers[a]){return}b=b||{};if(!b.galleryName){b.galleryName=this._getAnalyticsId(d,b.dataAttribute)||a
}if(!b.beforeUpdateEvent){b.beforeUpdateEvent="update"}if(!b.afterUpdateEvent){b.afterUpdateEvent="update:complete"
}var c=new l(d,b);if(c.gallery){this._observers[a]=c}};o.remove=function(b){var a=b.getId();
if(!l||!this._observers[a]){return}if(typeof this._observers[a].destroy==="function"){this._observers[a].destroy()
}this._observers[a]=null};o._getAnalyticsId=function(c,b){if(typeof c.getElement==="function"){b=b||n;
var a=c.getElement();return a.getAttribute(b)||a.getAttribute("id")}return null
};p.exports=q},{"ac-analytics":"ac-analytics"}],257:[function(ad,ap,N){ad("@marcom/ac-polyfills/requestAnimationFrame");
var ao=ad("@marcom/ac-classlist");var ai=ad("@marcom/ac-dom-events/addEventListener");
var af=ad("@marcom/ac-dom-events/removeEventListener");var ae=ad("@marcom/ac-dom-events/preventDefault");
var Q=ad("@marcom/ac-dom-styles");var al=ad("@marcom/ac-dom-traversal/querySelector");
var U=ad("@marcom/ac-dom-traversal/querySelectorAll");var aa=ad("@marcom/ac-object/create");
var S=ad("@marcom/ac-dom-metrics/getContentDimensions");var O=ad("@marcom/ac-keyboard/keyMap");
var W=ad("./../helpers/selectElementFromDataAttributeValue");var ac=ad("./../helpers/selectElementThatHasDataAttribute");
var ag=ad("./../helpers/inputHasFocus");var aj=ad("@marcom/ac-function/throttle");
var ah=ad("@marcom/ac-feature/touchAvailable");var V=ad("./../Gallery");var an=ad("@marcom/ac-keyboard");
var K=ad("@marcom/ac-page-visibility").PageVisibilityManager;var ak=ad("@marcom/ac-pointer-tracker").PointerTracker;
var R=ad("./../navigation/ToggleNav");var ab="disabled";var J=3;var am=0.5;var M="[data-ac-gallery-item]";
var Y=0.12;var Z=ad("../templates/paddlenav.js");var P="No element supplied.";var L='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
function X(f,a){a=a||{};if(!f||f.nodeType===undefined){throw new Error(P)}this._el=f;
V.call(this,a);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=a.toggleNavDuration;
this._isRightToLeft=(a.rightToLeft===undefined)?Q.getStyle(f,"direction").direction==="rtl":a.rightToLeft;
this._keyboardThrottleDelay=((a.keyboardThrottleDelay===undefined)?Y:a.keyboardThrottleDelay)*1000;
this._resizeContainer=!!a.resizeContainer;this._setUpContainerAutoResize(a.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(a.addPaddleNav);this._isACaptionsGallery=f.getAttribute("data-ac-gallery-captions")==="";
this._addItems(a.itemSelector||M);if(!this._wrapAround){this._updatePaddleNavState()
}if(a.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(a.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
ai(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(a.container);
if(a.startAt){this._startAt(a.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(a.autoPlay){if(!this._componentsContainer){throw new Error(L)}var b=(typeof a.autoPlay==="number")?a.autoPlay:J;
this.startAutoPlay(b)}if(a.deeplink!==false){var d=this._getDeeplinkedItem();if(d&&d!==this._currentItem){this.show(d)
}}if(this._containerResizeDuration!==false){var c=this._itemHeightsLookup[this._currentItem.getElementId()];
if(c){this._setElHeight(c)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(a.touch&&ah(),a.desktopSwipe);
if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
}}X.RESIZED="resized";X.UPDATE=V.UPDATE;X.UPDATE_COMPLETE=V.UPDATE_COMPLETE;var aq=V.prototype;
var T=X.prototype=aa(aq);T.addItem=function(a,c){if(a.nodeType){var b=this._isACaptionsGallery;
a=new this._itemType(a,{isACaption:b})}else{if(this._items.indexOf(a)>-1){return a
}}if(this._resizeContainer){this._storeItemHeight(a,this._containerResizeDuration===false)
}this._addItemTriggers(a);return aq.addItem.call(this,a,c)};T.removeItem=function(a,b){if(this._resizeContainer){var c=this._itemHeights.length;
while(c--){if(this._itemHeights[c].item===a){this._itemHeights.splice(c,1);if(c===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return aq.removeItem.call(this,a,b)};T.startAutoPlay=function(a,b){b=b||{};
this._isAutoPlaying=true;this._autoPlayDelay=(a||J)*1000;this._cancelAutoPlayOnInteraction=(b.cancelOnInteraction===undefined)?true:b.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}if(this._componentsContainer){ai(this._componentsContainer,"focus",this.stopAutoPlay,true);
ai(this._componentsContainer,"touchend",this.stopAutoPlay,true);ai(this._componentsContainer,"click",this.stopAutoPlay,true)
}else{throw new Error(L)}};T.stopAutoPlay=function(){this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}};T.getElement=function(){return this._el};T.getToggleNav=function(){return this._toggleNav||null
};T.resize=function(b,c){if(this._resizeContainer){this._itemHeights=[];var a=this._items.length;
while(a--){this._storeItemHeight(this._items[a],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(X.RESIZED,this)};T.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
this._addKeyboardListener()}};T.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);an.offDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
}};T.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(ak.END,this._onSwipeEnd);
this._touchSwipe.destroy();this._touchSwipe=null}};T.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
}};T.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(ak.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}};T.destroy=function(a){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}if(this._resizeContainer){Q.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);
an.offDown(O.ARROW_LEFT,this._leftArrowFunc)}var b;if(this._previousButtons){b=this._previousButtons.length;
while(b--){af(this._previousButtons[b],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
}if(this._nextButtons){b=this._nextButtons.length;while(b--){af(this._nextButtons[b],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(V.UPDATE,this._updatePaddleNavState)
}this.disableTouch();this.disableDesktopSwipe();if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}af(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
return aq.destroy.call(this,a)};T._getDeeplinkedItem=function(){var a=window.location.hash.substr(1);
var b;var c=this._items.length;while(c--){b=this._items[c];if(a===b.getElementId()){return b
}}return null};T._addItems=function(b){var d;var c;var g=/(^\[).*(\]$)/.test(b);
if(g){b=b.replace(/\[|\]/g,"");c=ac(b,this._el)}else{c=U(b,this._el)}var a=0;var f=c.length;
var h=this._isACaptionsGallery;for(a;a<f;a++){d=new this._itemType(c[a],{isACaption:h});
this.addItem(d);this._addItemTriggers(d)}};T._createToggleNav=function(){var a=this._getElementId();
var c='[data-ac-gallery-togglenav="'+a+'"], [data-ac-gallery-tabnav="'+a+'"]';var b=al(c);
if(b){this._toggleNav=new R(b,this,{duration:this._toggleNavDuration})}};T._addItemTriggers=function(d,c){var a=W("data-ac-gallery-trigger",d.getElementId());
if(c&&c.length){a=a.concat(c)}var b=0;var f=a.length;for(b;b<f;b++){d.addElementTrigger(a[b]);
if(this._toggleNav){this._toggleNav.addTrigger(a[b],d)}}};T._addPaddleNav=function(g){var a;
var d=this._getElementId();if(g){var h=(typeof g==="string")?g:Z;h=h.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=h;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=W("data-ac-gallery-previous-trigger",d);
this._nextButtons=W("data-ac-gallery-next-trigger",d);var c=this._el.getAttribute("aria-label")||"";
if(c.length){c="("+c+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
a=this._previousButtons.length;if(a){var f=this._el.getAttribute("data-ac-gallery-previouslabel");
if(f&&c.length){if(this._isRightToLeft){f=c+" "+f}else{f+=" "+c}}while(a--){if(f&&this._previousButtons[a].getAttribute("aria-label")===null){this._previousButtons[a].setAttribute("aria-label",f)
}ai(this._previousButtons[a],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
a=this._nextButtons.length;if(a){var b=this._el.getAttribute("data-ac-gallery-nextlabel");
if(b&&c.length){if(this._isRightToLeft){b=c+" "+b}else{b+=" "+c}}while(a--){if(b&&this._nextButtons[a].getAttribute("aria-label")===null){this._nextButtons[a].setAttribute("aria-label",b)
}ai(this._nextButtons[a],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(V.UPDATE,this._updatePaddleNavState)
}};T._onPaddleInteraction=function(a,b){ae(b);a.call(null,{interactionEvent:b})
};T._updatePaddleNavState=function(){if(!this._wrapAround){var a=this._items.indexOf(this._currentItem);
if(a===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(a===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}};T._setPaddleDisabledState=function(a,c){var b=a.length;
while(b--){a[b].disabled=c;if(c){ao.add(a[b],ab)}else{ao.remove(a[b],ab)}}};T._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var b;var a;if(this._isRightToLeft){b=this.showPrevious;a=this.showNext}else{b=this.showNext;
a=this.showPrevious}this._rightArrowFunc=aj(this._onKeyboardInteraction.bind(null,b),this._keyboardThrottleDelay);
this._leftArrowFunc=aj(this._onKeyboardInteraction.bind(null,a),this._keyboardThrottleDelay);
an.onDown(O.ARROW_RIGHT,this._rightArrowFunc);an.onDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T._onKeyboardInteraction=function(a,b){if(this.isInView()&&!ag()){var c=V.getAllInView();
if(c.length>1){c.sort(function(d,f){d=(d._enableArrowKeys)?d.getCurrentItem().percentageInView():0;
f=(f._enableArrowKeys)?f.getCurrentItem().percentageInView():0;return f-d});if(this!==c[0]){return
}}a.call(null,{interactionEvent:b})}};T._setUpSwiping=function(a,b){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(a){this._touchSwipe=new ak(this._el,ak.TOUCH_EVENTS);this._touchSwipe.on(ak.END,this._onSwipeEnd)
}if(b){this._clickSwipe=new ak(this._el,ak.MOUSE_EVENTS);this._clickSwipe.on(ak.END,this._onSwipeEnd)
}};T._onSwipeEnd=function(b){var d;var c=b.interactionEvent;var g=c.type!=="touchend"||c.type!=="touchstart"||c.type!=="touchmove";
if(g){var f={type:"touchmove",target:c.target,srcElement:c.srcElement}}var a={interactionEvent:f||c};
if(b.swipe===ak.SWIPE_RIGHT){d=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(b.swipe===ak.SWIPE_LEFT){d=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(d){return d.call(this,a)}c=null;return null};T._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};T._setUpContainerAutoResize=function(a){if(typeof a==="number"){this._containerResizeDuration=a
}else{if(a){this._containerResizeDuration=am}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(V.UPDATE,this._updateContainerSize)}};T._updateContainerSize=function(a){var b=this._itemHeightsLookup[a.incoming[0].getElementId()];
if(b){this._setElHeight(b,this._containerResizeDuration)}};T._storeItemHeight=function(b,a){var c=S(b.getElement());
this._itemHeights.push({item:b,height:c.height});this._itemHeightsLookup[b.getElementId()]=c.height;
this._itemHeights.sort(function(d,f){return f.height-d.height});if(a&&this._itemHeights[0].item===b){this._setElHeight(c.height)
}};T._setElHeight=function(c,a){var b={height:c+"px"};if(a){b.transition="height "+a+"s"
}else{b.transition=null}Q.setStyle(this._el,b)};T._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!K.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)
}var a=this.showNext();if(a!==null){if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};T._onWindowResize=function(a){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};ap.exports=X},{"../templates/paddlenav.js":273,"./../Gallery":253,"./../helpers/inputHasFocus":264,"./../helpers/selectElementFromDataAttributeValue":265,"./../helpers/selectElementThatHasDataAttribute":266,"./../navigation/ToggleNav":267,"@marcom/ac-classlist":13,"@marcom/ac-dom-events/addEventListener":202,"@marcom/ac-dom-events/preventDefault":208,"@marcom/ac-dom-events/removeEventListener":209,"@marcom/ac-dom-metrics/getContentDimensions":213,"@marcom/ac-dom-styles":234,"@marcom/ac-dom-traversal/querySelector":53,"@marcom/ac-dom-traversal/querySelectorAll":54,"@marcom/ac-feature/touchAvailable":200,"@marcom/ac-function/throttle":4,"@marcom/ac-keyboard":281,"@marcom/ac-keyboard/keyMap":283,"@marcom/ac-object/create":241,"@marcom/ac-page-visibility":287,"@marcom/ac-pointer-tracker":330,"@marcom/ac-polyfills/requestAnimationFrame":245}],258:[function(q,r,p){var m=q("./create");
var k=q("./../helpers/selectElementThatHasDataAttribute");var l=q("./../Gallery");
var s=l.FADE_SELECTOR.replace(/\[|\]/g,"");var n=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
r.exports=function o(b){b=b||{};var a=b.context||document.body;var d;var c;d=k(n,a);
c=d.length;while(c--){m(d[c],l.SLIDE,b)}d=k(s,a);c=d.length;while(c--){m(d[c],l.FADE,b)
}return l.getAll()}},{"./../Gallery":253,"./../helpers/selectElementThatHasDataAttribute":266,"./create":259}],259:[function(r,t,q){var n=r("./../fade/FadeGallery");
var l=r("./../Gallery");var s=r("./../slide/SlideGallery");var m="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var u=l.FADE_SELECTOR.replace(/\[|\]/g,"");var o=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
t.exports=function p(c,d,a){var b;if(typeof d==="string"){if(d===l.SLIDE){b=s}else{if(d===l.FADE){b=n
}}}if(b===undefined){if(c.getAttribute(o)!==null){b=s}else{if(c.getAttribute(u)!==null){b=n
}}}if(b===undefined){throw new Error(m.replace(/%TYPE%/g,d))}return new b(c,a)}
},{"./../Gallery":253,"./../fade/FadeGallery":260,"./../slide/SlideGallery":270}],260:[function(u,w,s){var o=u("@marcom/ac-object/clone");
var q=u("@marcom/ac-object/create");var t=u("./FadeItem");var v=u("./../auto/AutoGallery");
var n=0.5;function p(b,a){a=o(a)||{};a.itemType=a.itemType||t;this._fadeDuration=a.duration||n;
a.toggleNavDuration=(a.toggleNavDuration===undefined)?this._fadeDuration:a.toggleNavDuration;
this._crossFade=a.crossFade;this._zIndexCount=a.startZIndex||1;this._ease=a.ease;
if(a.resizeContainerOnUpdate===true){a.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);v.call(this,b,a);
if(this._currentItem){this._currentItem.fadeIn(0)}}p.RESIZED=v.RESIZED;p.UPDATE=v.UPDATE;
p.UPDATE_COMPLETE=v.UPDATE_COMPLETE;var m=v.prototype;var r=p.prototype=q(m);r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=m.addItem.call(this,b,a);if(b!==this._currentItem){b.fadeOut()}else{b.fadeIn(0)
}return c};r.destroy=function(a){var b=m.destroy.call(this,a);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return b};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.fadeOut(0);
this._currentItem.hide();this._setCurrentItem(b);this._currentItem.show();this._currentItem.fadeIn(0);
this.trigger(p.UPDATE,this._items)}};r._onItemShowComplete=function(b){if(b&&b.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var c;var a=this._items.length;while(a--){c=this._items[a];if(c!==this._currentItem){c.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(p.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};r._updateItems=function(c,a){if(a){return}if(this._crossFade){var b=(a)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,c);
c.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,b)
}else{this._incomingOutgoingItems=(a)?false:c;if(!c.outgoing[0].isFading()){c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}c.outgoing[0].hide();c.incoming[0].show()};w.exports=p},{"./../auto/AutoGallery":257,"./FadeItem":261,"@marcom/ac-object/clone":240,"@marcom/ac-object/create":241}],261:[function(x,y,t){var p=x("@marcom/ac-dom-styles/setStyle");
var q=x("@marcom/ac-object/create");var u=x("@marcom/ac-solar/fade");var o=x("@marcom/ac-solar/fadeIn");
var r=x("@marcom/ac-solar/fadeOut");var v=x("./../Item");function w(a,b){v.call(this,a,b);
p(a,{position:"absolute"})}w.SELECTED=v.SELECTED;w.SHOW=v.SHOW;w.HIDE=v.HIDE;var n=v.prototype;
var s=w.prototype=q(n);s.fadeIn=function(d,c,a,b){if(d){p(this._el,{zIndex:a||1});
this._destroyCurrentClip();this._clip=u(this._el,0,1,d,{ease:c,onComplete:b})}else{o(this._el,0);
p(this._el,{zIndex:a||1})}};s.fadeOut=function(b,a){if(b){this._destroyCurrentClip();
this._clip=r(this._el,b,{ease:a})}else{r(this._el,0)}};s.isFading=function(){return !!(this._clip&&this._clip.playing())
};s.destroy=function(){p(this._el,{position:null,opacity:null,zIndex:null});n.destroy.call(this);
this._destroyCurrentClip();this._clip=null};s._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};y.exports=w},{"./../Item":254,"@marcom/ac-dom-styles/setStyle":237,"@marcom/ac-object/create":241,"@marcom/ac-solar/fade":246,"@marcom/ac-solar/fadeIn":247,"@marcom/ac-solar/fadeOut":248}],262:[function(m,k,h){var l=m("@marcom/ac-object/create");
var j=m("@marcom/ac-object/extend");k.exports=function i(a){var c=this;var b=function(){c.apply(this,arguments)
};var d=l(this.prototype);b.prototype=j(d,a);j(b,this);return b}},{"@marcom/ac-object/create":241,"@marcom/ac-object/extend":242}],263:[function(l,k,m){var h=l("@marcom/ac-dom-styles/getStyle");
var i=l("@marcom/ac-dom-metrics/getContentDimensions");k.exports=function j(b){var a=h(b,"margin-right","margin-left");
return Math.round(i(b).width)+parseInt(a.marginRight,10)+parseInt(a.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":213,"@marcom/ac-dom-styles/getStyle":235}],264:[function(f,i,g){i.exports=function h(){var a=["input","select","textarea"];
return a.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],265:[function(m,k,h){var j=m("@marcom/ac-dom-traversal/querySelectorAll");
var i=function(f,o){var d;var a=document.getElementsByTagName("*");var g=0;var c=a.length;
var b=[];for(g;g<c;g++){d=a[g];if(d.getAttribute(f)!==null&&d.getAttribute(f).split(" ").indexOf(o)>-1){b[b.length]=d
}}return b};k.exports=function l(d,a){var b=j("["+d+'*="'+a+'"]');if(b.length===0&&document.documentMode===7){return i(d,a)
}var o=[];var f=0;var c=b.length;var g;for(f;f<c;f++){g=b[f].getAttribute(d);if(g===a){o.push(b[f])
}else{if(g&&g.length){g=g.split(" ");if(g.indexOf(a)>-1){o.push(b[f])}}}}return o
}},{"@marcom/ac-dom-traversal/querySelectorAll":54}],266:[function(o,n,i){var k=o("@marcom/ac-dom-traversal/querySelectorAll");
var m=o("@marcom/ac-dom-traversal/ancestors");var j=function(d,c){var b;var g=document.getElementsByTagName("*");
var f=0;var a=g.length;var h=[];for(f;f<a;f++){b=g[f];if(b.getAttribute(d)!==null&&(!c||m(b).indexOf(c)>-1)){h[h.length]=b
}}return h};n.exports=function l(c,b){b=b||document.body;var a=k("["+c+"]",b);if(a.length===0&&document.documentMode===7){return j(c,b)
}return a}},{"@marcom/ac-dom-traversal/ancestors":49,"@marcom/ac-dom-traversal/querySelectorAll":54}],267:[function(D,I,t){var F=D("@marcom/ac-dom-events/addEventListener");
var E=D("@marcom/ac-dom-events/removeEventListener");var z=D("@marcom/ac-dom-metrics/getDimensions");
var u=D("@marcom/ac-dom-metrics/getPosition");var G=D("@marcom/ac-dom-styles/getStyle");
var H=D("@marcom/ac-dom-styles/setStyle");var K=D("@marcom/ac-dom-traversal/ancestors");
var C=D("@marcom/ac-object/create");var v=D("@marcom/ac-solar/scrollX");var B=D("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=D("./../Gallery");var A=0.5;function w(a,c,b){b=b||{};this._el=a;this._isRightToLeft=(b.rightToLeft===undefined)?G(a,"direction").direction==="rtl":b.rightToLeft;
this._scrollType=this._scrollDirection();this._gallery=c;this._triggers={};this._ordered=[];
this._containerEl=this._el.children[0];this._slideDuration=(b.duration===undefined)?A:b.duration;
B.call(this)}var J=B.prototype;var x=w.prototype=C(J);x.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(y.UPDATE,this._onGalleryUpdated);
this.resize();F(window,"load",this._onWindowLoad)};x.addTrigger=function(c,b){if(this._triggers[b.getElementId()]!==undefined){return
}var d=K(c);if(d.indexOf(this._el)>-1){var a={el:c};this._triggers[b.getElementId()]=a;
this._ordered.push(a)}};x.resize=function(){if(!this._ordered.length){return}H(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=z(this._containerEl).width;this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);
var c=this._ordered.length;while(c--){this._setTriggerData(this._ordered[c])}this._ordered.sort(function(h,i){return h.left-i.left
});if(this._containerWidth>this._width){var a=this._ordered[0];var b=this._ordered[this._ordered.length-1];
var d=(this._width-a.width)*0.5;var g=(this._width-b.width)*0.5;H(this._containerEl,{paddingLeft:d+"px",paddingRight:g+"px"});
var f=this._triggers[this._gallery.getCurrentItem().getElementId()];if(f){this._centerNav(f)
}}};x.destroy=function(){this._gallery.off(y.UPDATE,this._onGalleryUpdated);E(window,"load",this._onWindowLoad);
H(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
this._clip=null;return J.destroy.call(this)};x._onWindowLoad=function(){E(window,"load",this._onWindowLoad);
this.resize()};x._setTriggerData=function(a){a.width=z(a.el).width;var b=u(a.el);
a.left=b.left;a.right=b.right;a.center=a.left+(a.width*0.5)};x._centerNav=function(c,a){this._setTriggerData(c);
this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);var b=Math.round(c.center-this._viewCenter);
if(this._isRightToLeft){if(this._scrollType!=="negative"){b=Math.abs(b)}if(this._scrollType==="default"){b=this._el.scrollWidth-this._el.clientWidth-b
}}this._destroyCurrentClip();if(a){this._clip=v(this._el,b,a)}else{this._el.scrollLeft=b
}};x._onGalleryUpdated=function(b){var a=this._triggers[b.incoming[0].getElementId()];
if(a){this._centerNav(a,this._slideDuration)}};x._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};x._scrollDirection=function(){var a="reverse";var b=document.createElement("div");
b.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
b.style.direction="rtl";b.innerHTML="test";document.body.appendChild(b);if(b.scrollLeft>0){a="default"
}else{b.scrollLeft=1;if(b.scrollLeft===0){a="negative"}}document.body.removeChild(b);
return a};I.exports=w},{"./../Gallery":253,"@marcom/ac-dom-events/addEventListener":202,"@marcom/ac-dom-events/removeEventListener":209,"@marcom/ac-dom-metrics/getDimensions":214,"@marcom/ac-dom-metrics/getPosition":218,"@marcom/ac-dom-styles/getStyle":235,"@marcom/ac-dom-styles/setStyle":237,"@marcom/ac-dom-traversal/ancestors":49,"@marcom/ac-event-emitter-micro":238,"@marcom/ac-object/create":241,"@marcom/ac-solar/scrollX":252}],268:[function(f,h,g){var i=f("./../analytics/AnalyticsManager");
h.exports=new i()},{"./../analytics/AnalyticsManager":256}],269:[function(o,n,i){var l=["input","select","textarea","button","object"];
var k=["href","tabindex","contenteditable"];var j=function(){this.focusableSelectors=l.concat(k.map(function(a){return(a==="href")?"a["+a+"]":"*["+a+"]"
})).join(",")};var m=j.prototype;m.isFocusable=function(b,d){var a=b.nodeName.toLowerCase();
var c=l.indexOf(a)>-1;if(a==="a"){return true}if(c){return !b.disabled}if(!b.contentEditable){return true
}d=d||b.tabIndex;return isNaN(d)};m.isTabbable=function(a){var b=a.getAttribute("tabindex");
if(!isNaN(b)){return(b>=0)}else{return this.isFocusable(a,b)}};m.getTabbable=function(d){var b=d.length;
var c=[];for(var a=0;a<b;a++){if(this.isTabbable(d[a])){c.push(d[a])}}return c};
n.exports=new j()},{}],270:[function(N,Q,x){var P=N("@marcom/ac-classlist");var F=N("@marcom/ac-dom-styles");
var z=N("@marcom/ac-dom-traversal/querySelectorAll");var B=N("@marcom/ac-object/clone");
var L=N("@marcom/ac-object/create");var y=N("./../helpers/getElementFullWidth");
var H=N("@marcom/ac-solar/moveX");var A=N("./../helpers/selectElementFromDataAttributeValue");
var M=N("./../helpers/selectElementThatHasDataAttribute");var I=N("./../auto/AutoGallery");
var O=N("@marcom/ac-pointer-tracker").PointerTracker;var D=N("./SlideItem");var K=N("./SlideItemWrapper");
var S=0.5;var J=0.5;var C=true;function E(c,d){d=B(d)||{};d.itemType=d.itemType||D;
this._itemsPerSlide=d.itemsPerSlide||1;var b=d.deeplink!==false;d.deeplink=false;
this._slideDuration=(d.duration!==undefined)?d.duration:J;d.toggleNavDuration=(d.toggleNavDuration===undefined)?this._slideDuration:d.toggleNavDuration;
this._itemCenterPoint=(d.itemCenterPoint!==undefined)?d.itemCenterPoint:S;this._edgePullResistance=(d.edgePullResistance?d.edgePullResistance:C);
this._slideOptions={ease:d.ease};if(d.resizeContainerOnUpdate===true){d.resizeContainerOnUpdate=this._slideDuration
}d.touch=d.touch!==false;this._originalWrapAround=d.wrapAround||false;I.call(this,c,d);
if(b){var a=this._getDeeplinkedItem();if(a){if(this._currentItem!==a){this._currentItem.hide();
this._setCurrentItem(a);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
}E.RESIZED=I.RESIZED;E.UPDATE=I.UPDATE;E.UPDATE_COMPLETE=I.UPDATE_COMPLETE;var R=I.prototype;
var G=E.prototype=L(R);G.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=R.addItem.call(this,b,a);if(this._containerEl!==undefined){this._addItemToContainer(b);
this._positionItems()}this._updateWrapAround();return c};G.removeItem=function(b,d){if(this._containerEl&&b.getElement().parentElement===this._containerEl){var a=b.getOriginalParentElement();
if(a){a.appendChild(b.getElement())}else{if(typeof b.removeItems==="function"){b.removeItems();
d.destroyItem=true}}var c=R.removeItem.call(this,b,d);if(this._currentItem){this._positionItems(this._currentItem)
}this._updateWrapAround();return c}return R.removeItem.call(this,b,d)};G.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return R.resize.call(this)};
G.destroy=function(d){this._destroyCurrentClip();this._clip=null;var b=this._items.length;
while(b--){this._items[b].off(D.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(O.START,this._onSwipeStart);
this._touchSwipe.off(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(O.START,this._onSwipeStart);
this._clickSwipe.off(O.UPDATE,this._onSwipeUpdate)}var a=this._el;var c=R.destroy.call(this,d);
a.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return c
};G._addItems=function(d){if(this._itemsPerSlide>1){var i;var f=/(^\[).*(\]$)/.test(d);
if(f){i=M(d.replace(/\[|\]/g,""),this._el)}else{i=z(d,this._el)}var h;var j;var c;
var b=0;var a=0;var g=i.length;for(a;a<g;a++){if(b===0){h=new K()}h.addItem(i[a]);
c=i[a].getAttribute("id");if(c){j=A("data-ac-gallery-trigger",c);this._addItemTriggers(h,j)
}if(++b===this._itemsPerSlide||a===g-1){b=0;h.resize();this.addItem(h)}}}else{R._addItems.call(this,d)
}};G._createContainer=function(){this._containerEl=document.createElement("div");
P.add(this._containerEl,"ac-gallery-slidecontainer");F.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var a=0;var b=this._items.length;for(a;
a<b;a++){this._addItemToContainer(this._items[a])}};G._addItemToContainer=function(a){this._containerEl.appendChild(a.getElement());
a.on(D.CENTER_POINT_CHANGED,this._positionItems)};G._positionItems=function(c){c=c||this._currentItem;
var l=this._items;if(this._wrapAround){l=this._shuffleItems()}var j=(this._getActualPositionX()-c.position())||0;
var k=parseInt(F.getStyle(this._el,"width").width,10);var g=0;var a=0;var d=l.length;
var i;var f;var h;var b;var m;for(a;a<d;a++){i=l[a];i.resize();f=i.getElement();
F.setStyle(f,{left:g+"px"});h=y(f);b=k-h;m=(i.centerPoint&&i.centerPoint()!==null)?i.centerPoint():this._itemCenterPoint;
i.position((g*-1)+(b*m));if(this._isRightToLeft){g-=h}else{g+=h}}g=c.position()+j;
this._snapToPosition(g)};G._getActualPositionX=function(){var c=F.getStyle(this._containerEl,"transform").transform;
if(!c||c==="none"){var b=F.getStyle(this._containerEl,"left").left;return parseInt(b,10)
}else{if(c===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=c;var a=this._transformStyles.split(",");this._actualPositionX=a[4]||this._currentItem.position();
return this._actualPositionX*1};G._snapToPosition=function(a){this._destroyCurrentClip();
this._positionX=a;F.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
H(this._containerEl,a,0,this._slideOptions)};G._slideToPosition=function(a,c,b){this._positionX=a;
this._clip=H(this._containerEl,a,c,{ease:this._slideOptions.ease,onComplete:b})
};G._setUpSwiping=function(c,a){var b=R._setUpSwiping.call(this,c,a);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(O.START,this._onSwipeStart);
this._touchSwipe.on(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(O.START,this._onSwipeStart);
this._clickSwipe.on(O.UPDATE,this._onSwipeUpdate)}return b};G._onSwipeStart=function(a){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};G._onSwipeUpdate=function(b){this._destroyCurrentClip();
var c=this.getItems().slice(-1)[0].position();var a=this._positionX>0||this._positionX<c;
var d=b.diffX;if(this._edgePullResistance&&!this._wrapAround&&a){d*=0.5}this._snapToPosition(this._positionX-d)
};G._onSwipeEnd=function(a){var b=R._onSwipeEnd.call(this,a);if(b===null){b=this.show(this._currentItem,{interactionEvent:a.interactionEvent})
}return b};G._shuffleItems=function(){var i=this._items.length===2&&!this._isAutoPlaying;
if(i){return this._items.slice()}var c=this._items.length;var h=this._items.indexOf(this._currentItem);
var d=Math.floor(c*0.5);var b;var a;var g;if(h<d){b=d-h;var f=c-b;a=this._items.slice(f);
g=this._items.slice(0,f);return a.concat(g)}else{if(h>d){b=h-d;a=this._items.slice(0,b);
g=this._items.slice(b);return g.concat(a)}}return this._items};G._updateItems=function(d,b){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(d.outgoing[0])}if(this.getItemIndex(d.outgoing[0])>-1){var a=(b)?null:this.trigger.bind(this,E.UPDATE_COMPLETE,d);
var c=this._slideDuration;this._slideToPosition(d.incoming[0].position(),c,a);if(d.incoming[0]!==d.outgoing[0]){d.incoming[0].show();
d.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
d.incoming[0].show();if(!b){this.trigger(E.UPDATE_COMPLETE,d)}}};G._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
}else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
}};G._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};Q.exports=E},{"./../auto/AutoGallery":257,"./../helpers/getElementFullWidth":263,"./../helpers/selectElementFromDataAttributeValue":265,"./../helpers/selectElementThatHasDataAttribute":266,"./SlideItem":271,"./SlideItemWrapper":272,"@marcom/ac-classlist":13,"@marcom/ac-dom-styles":234,"@marcom/ac-dom-traversal/querySelectorAll":54,"@marcom/ac-object/clone":240,"@marcom/ac-object/create":241,"@marcom/ac-pointer-tracker":330,"@marcom/ac-solar/moveX":250}],271:[function(r,s,p){var m=r("@marcom/ac-dom-styles/setStyle");
var n=r("@marcom/ac-object/create");var q=r("./../Item");function l(a,b){q.call(this,a,b);
m(a,{position:"absolute",transform:{translateZ:0}});this._parentElement=a.parentElement
}l.CENTER_POINT_CHANGED="centerpointchanged";l.SELECTED=q.SELECTED;l.SHOW=q.SHOW;
l.HIDE=q.HIDE;var k=q.prototype;var o=l.prototype=n(k);o.position=function(a){if(a!==undefined){this._position=a
}return this._position||0};o.centerPoint=function(a){if(a!==undefined){this._centerPoint=a;
this.trigger(l.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};o.getOriginalParentElement=function(){return this._parentElement};o.resize=function(){};
o.destroy=function(){m(this._el,{position:null,left:null,transform:null});k.destroy.call(this)
};s.exports=l},{"./../Item":254,"@marcom/ac-dom-styles/setStyle":237,"@marcom/ac-object/create":241}],272:[function(x,z,w){var q=x("@marcom/ac-classlist");
var t=x("@marcom/ac-dom-styles/setStyle");var A=x("@marcom/ac-dom-traversal/querySelectorAll");
var u=x("@marcom/ac-object/create");var p=x("./../singletons/tabManager");var C=x("./../helpers/getElementFullWidth");
var s=x("./SlideItem");var B="ac-gallery-slideitemwrapper";function y(){s.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;q.add(this._el,B)}var r=s.prototype;var v=y.prototype=u(r);
v.addItem=function(b){this._items.push({el:b,parentElement:b.parentElement});this._el.appendChild(b);
var d=b.getAttribute("id");if(d){var a=this._el.getAttribute("id")||"";var c=(a.length)?"-":"";
a+=c+d;this._el.setAttribute("id",a)}this._focusableEls=this._focusableEls.concat(A(p.focusableSelectors,b))
};v.removeItems=function(){var b;var d;var c=0;var a=this._items.length;for(c;c<a;
c++){b=this._items[c].el;t(b,{position:null,left:null});d=this._items[c].parentElement;
if(d){d.appendChild(b)}}};v.resize=function(){this._currentWidth=0;var b;var c=0;
var a=this._items.length;for(c;c<a;c++){b=this._items[c].el;t(b,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=C(b)}t(this._el,{width:this._currentWidth+"px"})};v.destroy=function(){this.removeItems();
this._items=null;this._currentWidth=null;var a=this._el.parentElement;if(a){a.removeChild(this._el)
}r.destroy.call(this)};z.exports=y},{"./../helpers/getElementFullWidth":263,"./../singletons/tabManager":269,"./SlideItem":271,"@marcom/ac-classlist":13,"@marcom/ac-dom-styles/setStyle":237,"@marcom/ac-dom-traversal/querySelectorAll":54,"@marcom/ac-object/create":241}],273:[function(f,i,g){var h="";
h+='<nav class="paddlenav">';h+="<ul>";h+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
h+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
h+="</ul>";h+="</nav>";i.exports=h},{}],274:[function(q,r,p){var k="data-focus-method";
var m="touch";var l="mouse";var s="key";function n(a,b){this._target=a||document.body;
this._attr=b||k;this._focusMethod=this._lastFocusMethod=false;this._onKeyDown=this._onKeyDown.bind(this);
this._onMouseDown=this._onMouseDown.bind(this);this._onTouchStart=this._onTouchStart.bind(this);
this._onFocus=this._onFocus.bind(this);this._onBlur=this._onBlur.bind(this);this._onWindowBlur=this._onWindowBlur.bind(this);
this._bindEvents()}var o=n.prototype;o._bindEvents=function(){if(this._target.addEventListener){this._target.addEventListener("keydown",this._onKeyDown);
this._target.addEventListener("mousedown",this._onMouseDown);this._target.addEventListener("touchstart",this._onTouchStart);
this._target.addEventListener("focus",this._onFocus,true);this._target.addEventListener("blur",this._onBlur,true);
window.addEventListener("blur",this._onWindowBlur)}};o._onKeyDown=function(a){this._focusMethod=s
};o._onMouseDown=function(a){if(this._focusMethod===m){return}this._focusMethod=l
};o._onTouchStart=function(a){this._focusMethod=m};o._onFocus=function(a){if(!this._focusMethod){this._focusMethod=this._lastFocusMethod
}a.target.setAttribute(this._attr,this._focusMethod);this._lastFocusMethod=this._focusMethod;
this._focusMethod=false};o._onBlur=function(a){a.target.removeAttribute(this._attr)
};o._onWindowBlur=function(a){this._focusMethod=false};r.exports=n},{}],275:[function(d,g,f){arguments[4][211][0].apply(f,arguments)
},{dup:211}],276:[function(d,g,f){arguments[4][212][0].apply(f,arguments)},{dup:212}],277:[function(d,g,f){arguments[4][238][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":278,dup:238}],278:[function(d,g,f){arguments[4][239][0].apply(f,arguments)
},{dup:239}],279:[function(d,g,f){arguments[4][110][0].apply(f,arguments)},{dup:110}],280:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=v("@marcom/ac-dom-events/utils/addEventListener");var x=v("@marcom/ac-dom-events/utils/removeEventListener");
var r=v("@marcom/ac-object/create");var u=v("./internal/KeyEvent");var p="keydown";
var o="keyup";function y(a){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=a||document;q(this._context,p,this._DOMKeyDown,true);
q(this._context,o,this._DOMKeyUp,true);n.call(this)}var s=y.prototype=r(n.prototype);
s.onDown=function(b,a){return this.on(p+":"+b,a)};s.onceDown=function(b,a){return this.once(p+":"+b,a)
};s.offDown=function(b,a){return this.off(p+":"+b,a)};s.onUp=function(b,a){return this.on(o+":"+b,a)
};s.onceUp=function(b,a){return this.once(o+":"+b,a)};s.offUp=function(b,a){return this.off(o+":"+b,a)
};s.isDown=function(a){a+="";return this._keysDown[a]||false};s.isUp=function(a){return !this.isDown(a)
};s.destroy=function(){x(this._context,p,this._DOMKeyDown,true);x(this._context,o,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;n.prototype.destroy.call(this);return this
};s._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode+="";
this._trackKeyDown(a);this.trigger(p+":"+a,c)};s._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode+="";this._trackKeyUp(a);this.trigger(o+":"+a,c)};s._normalizeKeyboardEvent=function(a){return new u(a)
};s._trackKeyUp=function(a){if(this._keysDown[a]){this._keysDown[a]=false}};s._trackKeyDown=function(a){if(!this._keysDown[a]){this._keysDown[a]=true
}};w.exports=y},{"./internal/KeyEvent":282,"@marcom/ac-dom-events/utils/addEventListener":275,"@marcom/ac-dom-events/utils/removeEventListener":276,"@marcom/ac-event-emitter-micro":277,"@marcom/ac-object/create":279}],281:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":280}],282:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],283:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],284:[function(d,g,f){arguments[4][238][0].apply(f,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":285,dup:238}],285:[function(d,g,f){arguments[4][239][0].apply(f,arguments)
},{dup:239}],286:[function(d,g,f){arguments[4][110][0].apply(f,arguments)},{dup:110}],287:[function(d,g,f){g.exports={PageVisibilityManager:d("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":288}],288:[function(o,m,i){var n=o("@marcom/ac-object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;function j(){if(typeof document.addEventListener==="undefined"){return
}var a;if(typeof document.hidden!=="undefined"){this._hidden="hidden";a="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";a="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";a="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
a="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(a){document.addEventListener(a,this._handleVisibilityChange.bind(this),false)
}k.call(this)}var l=j.prototype=n(k.prototype);l.CHANGED="changed";l._handleVisibilityChange=function(a){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};m.exports=new j()},{"@marcom/ac-event-emitter-micro":284,"@marcom/ac-object/create":286}],289:[function(f,i,g){if(!Array.prototype.filter){Array.prototype.filter=function h(a,b){var c=Object(this);
var n=c.length>>>0;var d;var m=[];if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(d=0;d<n;d+=1){if(d in c&&a.call(b,c[d],d,c)){m.push(c[d])}}return m}}},{}],290:[function(f,i,g){if(!Array.prototype.some){Array.prototype.some=function h(a,b){var d=Object(this);
var l=d.length>>>0;var c;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(c=0;c<l;c+=1){if(c in d&&a.call(b,d[c],c,d)===true){return true}}return false
}}},{}],291:[function(n,m,i){var l=n("./ac-browser/BrowserData");var j=/applewebkit/i;
var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":292,"./ac-browser/IE":293}],292:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.filter");
g("@marcom/ac-polyfills/Array/prototype.some");var j=g("./data");function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;
if(!c||!b){return}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":294,"@marcom/ac-polyfills/Array/prototype.filter":289,"@marcom/ac-polyfills/Array/prototype.some":290}],293:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],294:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],295:[function(d,g,f){arguments[4][202][0].apply(f,arguments)},{"./shared/getEventType":306,"./utils/addEventListener":310,dup:202}],296:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":306,"./utils/dispatchEvent":311}],297:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":295,"./dispatchEvent":296,"./preventDefault":304,"./removeEventListener":305,"./stop":307,"./stopPropagation":308,"./target":309}],298:[function(d,g,f){arguments[4][18][0].apply(f,arguments)
},{dup:18}],299:[function(d,g,f){arguments[4][19][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":300,"./shared/prefixHelper":301,"./shared/windowFallbackEventTypes":302,"./utils/eventTypeAvailable":303,dup:19}],300:[function(d,g,f){arguments[4][20][0].apply(f,arguments)
},{dup:20}],301:[function(d,g,f){arguments[4][21][0].apply(f,arguments)},{dup:21}],302:[function(d,g,f){arguments[4][22][0].apply(f,arguments)
},{dup:22}],303:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],304:[function(d,g,f){arguments[4][208][0].apply(f,arguments)
},{dup:208}],305:[function(d,g,f){arguments[4][209][0].apply(f,arguments)},{"./shared/getEventType":306,"./utils/removeEventListener":312,dup:209}],306:[function(d,g,f){arguments[4][210][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":299,dup:210}],307:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":304,"./stopPropagation":308}],308:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],309:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],310:[function(d,g,f){arguments[4][211][0].apply(f,arguments)
},{dup:211}],311:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");i.exports=function h(a,b,c){var d;
if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)}else{d=new CustomEvent(b)}a.dispatchEvent(d)
}else{d=document.createEventObject();if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)
}return a}},{"@marcom/ac-polyfills/CustomEvent":298}],312:[function(d,g,f){arguments[4][212][0].apply(f,arguments)
},{dup:212}],313:[function(d,g,f){arguments[4][86][0].apply(f,arguments)},{"./getStyleProperty":314,"./getStyleValue":315,"./shared/stylePropertyCache":318,dup:86}],314:[function(d,g,f){arguments[4][87][0].apply(f,arguments)
},{"./shared/getStyleTestElement":316,"./shared/prefixHelper":317,"./shared/stylePropertyCache":318,"./utils/toCSS":321,"./utils/toDOM":322,dup:87}],315:[function(d,g,f){arguments[4][88][0].apply(f,arguments)
},{"./getStyleProperty":314,"./shared/prefixHelper":317,"./shared/stylePropertyCache":318,"./shared/styleValueAvailable":319,dup:88}],316:[function(d,g,f){arguments[4][89][0].apply(f,arguments)
},{dup:89}],317:[function(d,g,f){arguments[4][21][0].apply(f,arguments)},{dup:21}],318:[function(d,g,f){arguments[4][91][0].apply(f,arguments)
},{dup:91}],319:[function(d,g,f){arguments[4][92][0].apply(f,arguments)},{"./getStyleTestElement":316,"./stylePropertyCache":318,dup:92}],320:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{dup:93}],321:[function(d,g,f){arguments[4][94][0].apply(f,arguments)},{dup:94}],322:[function(d,g,f){arguments[4][95][0].apply(f,arguments)
},{dup:95}],323:[function(d,g,f){arguments[4][234][0].apply(f,arguments)},{"./getStyle":324,"./setStyle":326,dup:234}],324:[function(d,g,f){arguments[4][96][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":314,"@marcom/ac-prefixer/stripPrefixes":320,dup:96}],325:[function(d,g,f){arguments[4][97][0].apply(f,arguments)
},{dup:97}],326:[function(d,g,f){arguments[4][98][0].apply(f,arguments)},{"./internal/normalizeValue":325,"@marcom/ac-prefixer/getStyleCSS":313,"@marcom/ac-prefixer/getStyleProperty":314,dup:98}],327:[function(d,g,f){arguments[4][238][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":328,dup:238}],328:[function(d,g,f){arguments[4][239][0].apply(f,arguments)
},{dup:239}],329:[function(d,g,f){arguments[4][110][0].apply(f,arguments)},{dup:110}],330:[function(d,g,f){g.exports={PointerTracker:d("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":331}],331:[function(z,A,w){var o=z("@marcom/ac-browser");
var q=z("@marcom/ac-dom-events");var r=z("@marcom/ac-dom-styles");var u=z("@marcom/ac-object/create");
var y=o.os==="Android"||(o.name==="IE"&&o.version<=8);var s=z("@marcom/ac-feature/touchAvailable")();
var p=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;function x(b,a,c){this._el=b;
c=c||{};this._lockVertical=c.lockVertical!==false;this._swipeThreshold=c.swipeThreshold||x.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=a||{};this._pointerEvents.down=this._pointerEvents.down||((s)?x.TOUCH_EVENTS.down:x.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((s)?x.TOUCH_EVENTS.up:x.MOUSE_EVENTS.up);
this._pointerEvents.out=this._pointerEvents.out||((s)?x.TOUCH_EVENTS.out:x.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((s)?x.TOUCH_EVENTS.move:x.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
p.call(this);q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}x.START="start";x.END="end";x.UPDATE="update";x.SWIPE_RIGHT="swiperight";
x.SWIPE_LEFT="swipeleft";x.DEFAULT_SWIPE_THRESHOLD=(y)?2:8;x.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
x.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove"};
var t=p.prototype;var v=x.prototype=u(t);v.destroy=function(){if(this._isDragging){this._onMouseUp()
}q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return t.destroy.call(this)
};v._onMouseDown=function(b){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(b.touches&&b.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(b)}var a=this._storeAndGetValues(b);
this._velocityX=a.diffX=0;this._velocityY=a.diffY=0;this.trigger(x.START,a)};v._onMouseUp=function(c){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var a;if(this._checkForTouchScrollY){a=null}else{if(this._velocityX>this._swipeThreshold){a=x.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){a=x.SWIPE_RIGHT}}}var b=this._storeAndGetValues(c);
b.swipe=a;this.trigger(x.END,b);if(a){this.trigger(a,b)}};v._onMouseOut=function(b){b=(b)?b:window.event;
var a=b.relatedTarget||b.toElement;if(!a||a.nodeName==="HTML"){this._onMouseUp(b)
}};v._onMouseMove=function(a){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(a)){this._onMouseUp(a);
return}q.preventDefault(a);this.trigger(x.UPDATE,this._storeAndGetValues(a))};v._storeAndGetValues=function(b){if(b===undefined){return{}
}this._currentX=this._getPointerX(b);this._currentY=this._getPointerY(b);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var a={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:b};
this._lastX=this._currentX;this._lastY=this._currentY;return a};v._getPointerX=function(a){if(a.pageX){return a.pageX
}else{if(a.touches&&a.touches[0]){return a.touches[0].pageX}else{if(a.clientX){return a.clientX
}}}return 0};v._getPointerY=function(a){if(a.pageY){return a.pageY}else{if(a.touches&&a.touches[0]){return a.touches[0].pageY
}else{if(a.clientY){return a.clientY}}}return 0};v._getTouchX=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageX
}return 0};v._getTouchY=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageY
}return 0};v._isVerticalTouchMove=function(d){var f=this._getTouchX(d);var a=this._getTouchY(d);
var b=Math.abs(f-this._lastX);var c=Math.abs(a-this._lastY);this._checkForTouchScrollY=(b<c);
return this._checkForTouchScrollY};v._setCursorStyle=function(a){r.setStyle(this._el,{cursor:a})
};A.exports=x},{"@marcom/ac-browser":291,"@marcom/ac-dom-events":297,"@marcom/ac-dom-styles":323,"@marcom/ac-event-emitter-micro":327,"@marcom/ac-feature/touchAvailable":200,"@marcom/ac-object/create":329}],332:[function(d,g,f){g.exports={log:d("./ac-console/log")}
},{"./ac-console/log":333}],333:[function(l,k,h){var i="f7c9180f-5c45-47b4-8de4-428015f096c0";
var m=!!(function(){try{return window.localStorage.getItem(i)}catch(a){}}());k.exports=function j(){if(window.console&&typeof console.log!=="undefined"&&m){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],334:[function(d,g,f){arguments[4][289][0].apply(f,arguments)},{dup:289}],335:[function(d,g,f){arguments[4][47][0].apply(f,arguments)
},{dup:47}],336:[function(d,g,f){arguments[4][14][0].apply(f,arguments)},{dup:14}],337:[function(d,g,f){arguments[4][36][0].apply(f,arguments)
},{dup:36}],338:[function(d,g,f){arguments[4][37][0].apply(f,arguments)},{dup:37}],339:[function(d,g,f){arguments[4][38][0].apply(f,arguments)
},{dup:38}],340:[function(d,g,f){g.exports=10},{}],341:[function(d,g,f){arguments[4][39][0].apply(f,arguments)
},{dup:39}],342:[function(d,g,f){arguments[4][40][0].apply(f,arguments)},{dup:40}],343:[function(d,g,f){g.exports={createDocumentFragment:d("./createDocumentFragment"),filterByNodeType:d("./filterByNodeType"),hasAttribute:d("./hasAttribute"),indexOf:d("./indexOf"),insertAfter:d("./insertAfter"),insertBefore:d("./insertBefore"),insertFirstChild:d("./insertFirstChild"),insertLastChild:d("./insertLastChild"),isComment:d("./isComment"),isDocument:d("./isDocument"),isDocumentFragment:d("./isDocumentFragment"),isDocumentType:d("./isDocumentType"),isElement:d("./isElement"),isNode:d("./isNode"),isNodeList:d("./isNodeList"),isTextNode:d("./isTextNode"),remove:d("./remove"),replace:d("./replace"),COMMENT_NODE:d("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:d("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:d("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:d("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:d("./ELEMENT_NODE"),TEXT_NODE:d("./TEXT_NODE")}
},{"./COMMENT_NODE":337,"./DOCUMENT_FRAGMENT_NODE":338,"./DOCUMENT_NODE":339,"./DOCUMENT_TYPE_NODE":340,"./ELEMENT_NODE":341,"./TEXT_NODE":342,"./createDocumentFragment":344,"./filterByNodeType":345,"./hasAttribute":346,"./indexOf":347,"./insertAfter":348,"./insertBefore":349,"./insertFirstChild":350,"./insertLastChild":351,"./isComment":354,"./isDocument":355,"./isDocumentFragment":356,"./isDocumentType":357,"./isElement":358,"./isNode":359,"./isNodeList":360,"./isTextNode":361,"./remove":362,"./replace":363}],344:[function(i,h,f){h.exports=function g(b){var c=document.createDocumentFragment();
var a;if(b){a=document.createElement("div");a.innerHTML=b;while(a.firstChild){c.appendChild(a.firstChild)
}}return c}},{}],345:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var j=l("./internal/isNodeType");
var i=l("./ELEMENT_NODE");k.exports=function h(a,b){b=b||i;a=Array.prototype.slice.call(a);
return a.filter(function(c){return j(c,b)})}},{"./ELEMENT_NODE":341,"./internal/isNodeType":352,"@marcom/ac-polyfills/Array/prototype.filter":334,"@marcom/ac-polyfills/Array/prototype.slice":336}],346:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],347:[function(m,l,h){m("@marcom/ac-polyfills/Array/prototype.indexOf");
m("@marcom/ac-polyfills/Array/prototype.slice");var j=m("./internal/validate");
var i=m("./filterByNodeType");l.exports=function k(a,c){var d=a.parentNode;var b;
if(!d){return 0}b=d.childNodes;if(c!==false){b=i(b,c)}else{b=Array.prototype.slice.call(b)
}return b.indexOf(a)}},{"./filterByNodeType":345,"./internal/validate":353,"@marcom/ac-polyfills/Array/prototype.indexOf":335,"@marcom/ac-polyfills/Array/prototype.slice":336}],348:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":353}],349:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":353}],350:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(b,a){i.insertNode(b,true,"insertFirstChild");i.parentNode(a,true,"insertFirstChild");
if(!a.firstChild){return a.appendChild(b)}return a.insertBefore(b,a.firstChild)
}},{"./internal/validate":353}],351:[function(g,k,h){var j=g("./internal/validate");
k.exports=function i(b,a){j.insertNode(b,true,"insertLastChild");j.parentNode(a,true,"insertLastChild");
return a.appendChild(b)}},{"./internal/validate":353}],352:[function(d,g,f){arguments[4][41][0].apply(f,arguments)
},{"../isNode":359,dup:41}],353:[function(d,g,f){arguments[4][42][0].apply(f,arguments)
},{"../COMMENT_NODE":337,"../DOCUMENT_FRAGMENT_NODE":338,"../ELEMENT_NODE":341,"../TEXT_NODE":342,"./isNodeType":352,dup:42}],354:[function(m,l,i){var j=m("./internal/isNodeType");
var k=m("./COMMENT_NODE");l.exports=function h(a){return j(a,k)}},{"./COMMENT_NODE":337,"./internal/isNodeType":352}],355:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_NODE":339,"./internal/isNodeType":352}],356:[function(d,g,f){arguments[4][43][0].apply(f,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":338,"./internal/isNodeType":352,dup:43}],357:[function(h,m,i){var j=h("./internal/isNodeType");
var k=h("./DOCUMENT_TYPE_NODE");m.exports=function l(a){return j(a,k)}},{"./DOCUMENT_TYPE_NODE":340,"./internal/isNodeType":352}],358:[function(d,g,f){arguments[4][44][0].apply(f,arguments)
},{"./ELEMENT_NODE":341,"./internal/isNodeType":352,dup:44}],359:[function(d,g,f){arguments[4][45][0].apply(f,arguments)
},{dup:45}],360:[function(k,j,g){var i=/^\[object (HTMLCollection|NodeList|Object)\]$/;
j.exports=function h(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return i.test(Object.prototype.toString.call(a))
}},{}],361:[function(m,l,i){var j=m("./internal/isNodeType");var h=m("./TEXT_NODE");
l.exports=function k(a){return j(a,h)}},{"./TEXT_NODE":342,"./internal/isNodeType":352}],362:[function(d,g,f){arguments[4][46][0].apply(f,arguments)
},{"./internal/validate":353,dup:46}],363:[function(g,j,h){var i=g("./internal/validate");
j.exports=function k(b,a){i.insertNode(b,true,"insertFirstChild","newNode");i.childNode(a,true,"insertFirstChild","oldNode");
i.hasParentNode(a,"insertFirstChild","oldNode");return a.parentNode.replaceChild(b,a)
}},{"./internal/validate":353}],364:[function(d,g,f){arguments[4][112][0].apply(f,arguments)
},{dup:112}],365:[function(d,g,f){arguments[4][114][0].apply(f,arguments)},{dup:114}],366:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":367,"./create":368,"./defaults":369,"./extend":370,"./getPrototypeOf":371,"./isDate":372,"./isEmpty":373,"./isRegExp":374,"./toQueryParameters":375}],367:[function(d,g,f){arguments[4][109][0].apply(f,arguments)
},{"./extend":370,"@marcom/ac-polyfills/Array/isArray":364,dup:109}],368:[function(d,g,f){arguments[4][110][0].apply(f,arguments)
},{dup:110}],369:[function(g,k,h){var i=g("./extend");k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":370}],370:[function(d,g,f){arguments[4][111][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":365,dup:111}],371:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],372:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],373:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],374:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],375:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":389}],376:[function(d,g,f){g.exports={adler32:d("./ac-checksum/adler32")}
},{"./ac-checksum/adler32":377}],377:[function(f,i,g){i.exports=function h(d){var n=65521;
var b=1;var m=0;var a;var c;for(c=0;c<d.length;c+=1){a=d.charCodeAt(c);b=(b+a)%n;
m=(m+b)%n}return(m<<16)|b}},{}],378:[function(p,n,k){var m="ac-storage-";var q=p("./ac-storage/Item");
var l=p("./ac-storage/Storage");var j=p("./ac-storage/Storage/storageAvailable");
var o=new l(m);o.Item=q;o.storageAvailable=j;n.exports=o},{"./ac-storage/Item":379,"./ac-storage/Storage":386,"./ac-storage/Storage/storageAvailable":388}],379:[function(t,v,o){var w=t("@marcom/ac-checksum").adler32;
var p=t("@marcom/ac-object");var n=t("./Item/apis");var u=t("./Item/createExpirationDate");
var m=t("./Item/encoder");var q=1000*60*60*24;var r=30;function s(a){if(!a||typeof a!=="string"){throw"ac-storage/Item: Key for Item must be a string"
}this._key=a;this._checksum=null;this._expirationDate=null;this._metadata=null;
this._value=null;this.setExpirationDate(s.createExpirationDate(r))}s.prototype={save:function(){var c;
var d;var b;var a={};c=n.best(a);if(c){if(this.value()===null&&typeof c.removeItem==="function"){return c.removeItem(this.key())
}else{if(typeof c.setItem==="function"){d=this.__state();b=m.encode(d);return c.setItem(this.key(),b,this.expirationDate())
}}}return false},load:function(){var a;var b;a=n.best();if(a&&typeof a.getItem==="function"){b=a.getItem(this.key());
this.__updateState(m.decode(b));if(b===null||this.hasExpired()){this.remove();return false
}else{return true}}else{return false}},remove:function(){var a;this.__updateState(null);
a=n.best();return a.removeItem(this.key())},hasExpired:function(a){if(((this.expirationDate()!==false)&&(this.expirationDate()<=Date.now()))||!this.__checksumIsValid(a)){return true
}return false},value:function(a){if(this.hasExpired(a)){this.remove()}return this._value
},setValue:function(a){this._value=a},setChecksum:function(a){if(a===null){this._checksum=a
}else{if(typeof a==="string"&&a!==""){this._checksum=w(a)}else{throw"ac-storage/Item#setChecksum: Checksum must be null or a string"
}}},checksum:function(){return this._checksum},setExpirationDate:function(a){if(a===null){a=s.createExpirationDate(r)
}if(a!==false){if(typeof a==="string"){a=new Date(a).getTime()}if(a&&typeof a.getTime==="function"){a=a.getTime()
}if(!a||isNaN(a)){throw"ac-storage/Item: Invalid date object provided as expirationDate"
}a-=a%q;if(a<=Date.now()){a=false}}this._expirationDate=a},expirationDate:function(){return this._expirationDate
},__state:function(){var a={};a.checksum=this.checksum();a.expirationDate=this.expirationDate();
a.metadata=this.metadata();a.value=this.value();return a},__updateState:function(a){var b;
var c;if(a===null){a={checksum:null,expirationDate:null,metadata:null,value:null}
}for(b in a){c="set"+b.charAt(0).toUpperCase()+b.slice(1);if(typeof this[c]==="function"){this[c](a[b])
}}},__checksumIsValid:function(a){if(a){a=w(a);if(!this.checksum()){throw"ac-storage/Item: No checksum exists to determine if this Item’s value is valid. Try loading context from persistent storage first."
}else{if(a===this.checksum()){return true}}return false}else{if(this.checksum()){throw"ac-storage/Item: No checksum passed, but checksum exists in Item’s state."
}}return true},setKey:function(){throw"ac-storage/Item: Cannot set key /after/ initialization!"
},key:function(){return this._key},metadata:function(){return this._metadata},setMetadata:function(a){this._metadata=a
}};s.createExpirationDate=u;v.exports=s},{"./Item/apis":380,"./Item/createExpirationDate":383,"./Item/encoder":384,"@marcom/ac-checksum":376,"@marcom/ac-object":366}],380:[function(n,l,i){var k=n("@marcom/ac-console").log;
var o=n("./apis/localStorage");var j=n("./apis/userData");var m={_list:[o,j],list:function(){return this._list
},all:function(a){k("ac-storage/Item/apis.all: Method is deprecated");var c=Array.prototype.slice.call(arguments,1);
if(typeof a!=="string"){throw"ac-storage/Item/apis.all: Method name must be provided as a string"
}var b=this.list().map(function(d){if(d.available()){if(typeof d[a]==="function"){return d[a].apply(d,c)
}else{throw"ac-storage/Item/apis.all: Method not available on api"}}return false
});return b},best:function(){var a=null;this.list().some(function(b){if(b.available()){a=b;
return true}});return a}};l.exports=m},{"./apis/localStorage":381,"./apis/userData":382,"@marcom/ac-console":332}],381:[function(p,s,n){var q=p("@marcom/ac-feature");
var r;try{var m=window.localStorage;var k=window.sessionStorage}catch(l){r=false
}var o={name:"localStorage",available:function(){try{m.setItem("localStorage",1);
m.removeItem("localStorage")}catch(a){r=false}if(r===undefined){r=q.localStorageAvailable()
}return r},getItem:function(a){return m.getItem(a)||k.getItem(a)},setItem:function(b,a,c){if(c===false){k.setItem(b,a)
}else{m.setItem(b,a)}return true},removeItem:function(a){m.removeItem(a);k.removeItem(a);
return true}};s.exports=o},{"@marcom/ac-feature":180}],382:[function(p,o,q){var n=p("@marcom/ac-dom-nodes");
var l=1000*60*60*24;var k="ac-storage";var m;var j={name:"userData",available:function(){if(m===undefined){m=false;
if(document&&document.body){var a=this.element();if(n.isElement(a)&&a.addBehavior!==undefined){m=true
}if(m===false){this.removeElement()}}else{throw"ac-storage/Item/apis/userData: DOM must be ready before using #userData."
}}return m},getItem:function(b){var a=this.element();a.load(k);return a.getAttribute(b)||null
},setItem:function(c,a,d){var b=this.element();b.setAttribute(c,a);if(d===false){d=new Date(Date.now()+l)
}if(d&&typeof d.toUTCString==="function"){b.expires=d.toUTCString()}b.save(k);return true
},removeItem:function(b){var a=this.element();a.removeAttribute(b);a.save(k);return true
},_element:null,element:function(){if(this._element===null){this._element=document.createElement("meta");
this._element.setAttribute("id","userData");this._element.setAttribute("name","ac-storage");
this._element.style.behavior="url('#default#userData')";document.getElementsByTagName("head")[0].appendChild(this._element)
}return this._element},removeElement:function(){if(this._element!==null){n.remove(this._element)
}return this._element}};o.exports=j},{"@marcom/ac-dom-nodes":343}],383:[function(g,k,h){var i=1000*60*60*24;
var j=function(a,b){if(typeof a!=="number"){throw"ac-storage/Item/createExpirationDate: days parameter must be a number."
}if(b===undefined||typeof b==="number"){b=b===undefined?new Date():new Date(b)}if(typeof b.toUTCString!=="function"||b.toUTCString()==="Invalid Date"){throw"ac-storage/Item/createExpirationDate: fromDate must be a date object, timestamp, or undefined."
}b.setTime(b.getTime()+(a*i));return b.getTime()};k.exports=j},{}],384:[function(g,k,h){var i=g("./encoder/compressor");
var j={encode:function(b){var d;var c;c=i.compress(b);try{d=JSON.stringify(c)}catch(a){}if(!this.__isValidStateObjString(d)){throw"ac-storage/Item/encoder/encode: state object is invalid or cannot be saved as string"
}return d},decode:function(d){var c;var b;if(!this.__isValidStateObjString(d)){if(d===undefined||d===null||d===""){return null
}throw"ac-storage/Item/encoder/decode: state string does not contain a valid state object"
}try{c=JSON.parse(d)}catch(a){throw"ac-storage/Item/encoder/decode: Item state object could not be decoded"
}b=i.decompress(c);return b},__isValidStateObjString:function(b){try{if(b!==undefined&&b.substring(0,1)==="{"){return true
}return false}catch(a){return false}}};k.exports=j},{"./encoder/compressor":385}],385:[function(h,m,i){var j=1000*60*60*24;
var l=14975;var k={mapping:{key:"k",checksum:"c",expirationDate:"e",metadata:"m",value:"v"},compress:function(c){var f={};
var d=k.mapping;for(var a in d){if(c.hasOwnProperty(a)&&c[a]){if(a==="expirationDate"){var b=this.millisecondsToOffsetDays(c[a]);
f[d[a]]=b}else{f[d[a]]=c[a]}}}return f},decompress:function(f){var b={};var c=k.mapping;
for(var a in c){if(f.hasOwnProperty(c[a])){if(a==="expirationDate"){var d=this.offsetDaysToMilliseconds(f[c[a]]);
b[a]=d}else{b[a]=f[c[a]]}}}return b},millisecondsToOffsetDays:function(a){return Math.floor(a/j)-l
},offsetDaysToMilliseconds:function(a){return(a+l)*j}};m.exports=k},{}],386:[function(n,m,p){var q=n("@marcom/ac-object");
var o=n("./Item/apis/localStorage");var j=n("./Storage/registry");var k={};function l(a,b){this._namespace=a||"";
this._options=q.extend(q.clone(k),b||{})}l.prototype={getItem:function(b){var a=this.__item(b);
a.load();return a.value()},setItem:function(c,a){var b=this.__item(c);if(a===undefined){throw"ac-storage/Storage#setItem: Must provide value to set key to. Use #removeItem to remove."
}b.setValue(a);return b.save()},removeItem:function(b){var a=this.__item(b);j.remove(a.key(),true);
return a.save()},removeExpired:function(){var g;var i;if(o.available()){for(i=0;
i<window.localStorage.length;i++){g=this.__item(window.localStorage.key(i));if(g.hasExpired()&&JSON.parse(window.localStorage[window.localStorage.key(i)]).v!=="undefined"){g.remove()
}}}else{var b="ac-storage";var h=document.getElementById("userData");h.load(b);
var c;var f=h.xmlDocument;var a=f.firstChild.attributes;var d=a.length;i=-1;while(++i<d){c=a[i];
g=this.__item(c.nodeName);if(g.hasExpired()&&JSON.parse(c.nodeValue).v!=="undefined"){g.remove()
}}}},__item:function(b){if(typeof b!=="string"||b===""){throw"ac-storage/Storage: Key must be a String."
}var a=j.item(this.namespace()+b);return a},namespace:function(){return this._namespace
},setNamespace:function(a){this._namespace=a},options:function(){return this._namespace
},setOptions:function(a){this._namespace=a}};m.exports=l},{"./Item/apis/localStorage":381,"./Storage/registry":387,"@marcom/ac-object":366}],387:[function(k,j,m){var l=k("../Item");
var h={};var i={item:function(b){var a=h[b];if(!a){a=this.register(b)}return a},register:function(b){var a=h[b];
if(!a){a=new l(b);h[b]=a}return a},clear:function(a){var b;for(b in h){this.remove(b,a)
}return true},remove:function(c,b){var a=h[c];if(a&&!!b){a.remove()}h[c]=null;return true
}};j.exports=i},{"../Item":379}],388:[function(m,k,i){var l=m("../Item/apis");var j;
k.exports=function h(){if(j!==undefined){return j}j=!!l.best();return j}},{"../Item/apis":380}],389:[function(j,i,k){var h=j("qs");
i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});if(a&&c!==false){a="?"+a
}return a}},{qs:390}],390:[function(h,l,i){var j=h("./stringify");var m=h("./parse");
var k={};l.exports={stringify:j,parse:m}},{"./parse":391,"./stringify":392}],391:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
j.parseValues=function(f,a){var s={};var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]="";if(a.strictNullHandling){s[i.decode(v)]=null}}else{var b=i.decode(v.slice(0,d));
var u=i.decode(v.slice(d+1));if(!Object.prototype.hasOwnProperty.call(s,b)){s[b]=u
}else{s[b]=[].concat(s[b]).concat(u)}}}return s};j.parseObject=function(b,q,c){if(!b.length){return q
}var p=b.shift();var a;if(p==="[]"){a=[];a=a.concat(j.parseObject(b,q,c))}else{a=c.plainObjects?Object.create(null):{};
var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;var f=parseInt(d,10);
var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&(c.parseArrays&&f<=c.arrayLimit)){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}if(p.allowDots){d=d.replace(/\.([^\.\[]+)/g,"[$1]")}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;
var a=c.exec(d);var b=[];if(a[1]){if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1])){if(!p.allowPrototypes){return
}}b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){if(!p.allowPrototypes){continue
}}b.push(a[1])}if(a){b.push("["+d.slice(a.index)+"]")}return j.parseObject(b,r,p)
};k.exports=function(q,a){a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parseArrays=a.parseArrays!==false;a.allowDots=a.allowDots!==false;a.plainObjects=typeof a.plainObjects==="boolean"?a.plainObjects:j.plainObjects;
a.allowPrototypes=typeof a.allowPrototypes==="boolean"?a.allowPrototypes:j.allowPrototypes;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
a.strictNullHandling=typeof a.strictNullHandling==="boolean"?a.strictNullHandling:j.strictNullHandling;
if(q===""||q===null||typeof q==="undefined"){return a.plainObjects?Object.create(null):{}
}var f=typeof q==="string"?j.parseValues(q,a):q;var s=a.plainObjects?Object.create(null):{};
var b=Object.keys(f);for(var r=0,d=b.length;r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":393}],392:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",arrayPrefixGenerators:{brackets:function(a,b){return a+"[]"
},indices:function(a,b){return a+"["+b+"]"},repeat:function(a,b){return a}},strictNullHandling:false};
j.stringify=function(r,d,v,t,u){if(typeof u==="function"){r=u(d,r)}else{if(i.isBuffer(r)){r=r.toString()
}else{if(r instanceof Date){r=r.toISOString()}else{if(r===null){if(t){return i.encode(d)
}r=""}}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[i.encode(d)+"="+i.encode(r)]
}var a=[];if(typeof r==="undefined"){return a}var s=Array.isArray(u)?u:Object.keys(r);
for(var f=0,c=s.length;f<c;++f){var b=s[f];if(Array.isArray(r)){a=a.concat(j.stringify(r[b],v(d,b),v,t,u))
}else{a=a.concat(j.stringify(r[b],d+"["+b+"]",v,t,u))}}return a};k.exports=function(d,z){z=z||{};
var w=typeof z.delimiter==="undefined"?j.delimiter:z.delimiter;var u=typeof z.strictNullHandling==="boolean"?z.strictNullHandling:j.strictNullHandling;
var f;var v;if(typeof z.filter==="function"){v=z.filter;d=v("",d)}else{if(Array.isArray(z.filter)){f=v=z.filter
}}var a=[];if(typeof d!=="object"||d===null){return""}var y;if(z.arrayFormat in j.arrayPrefixGenerators){y=z.arrayFormat
}else{if("indices" in z){y=z.indices?"indices":"repeat"}else{y="indices"}}var x=j.arrayPrefixGenerators[y];
if(!f){f=Object.keys(d)}for(var t=0,c=f.length;t<c;++t){var b=f[t];a=a.concat(j.stringify(d[b],b,x,u,v))
}return a.join(w)}},{"./utils":393}],393:[function(g,k,h){var i={};i.hexTable=new Array(256);
for(var j=0;j<256;++j){i.hexTable[j]="%"+((j<16?"0":"")+j.toString(16)).toUpperCase()
}h.arrayToObject=function(b,d){var a=d.plainObjects?Object.create(null):{};for(var c=0,f=b.length;
c<f;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]}}return a};h.merge=function(q,r,f){if(!r){return q
}if(typeof r!=="object"){if(Array.isArray(q)){q.push(r)}else{if(typeof q==="object"){q[r]=true
}else{q=[q,r]}}return q}if(typeof q!=="object"){q=[q].concat(r);return q}if(Array.isArray(q)&&!Array.isArray(r)){q=h.arrayToObject(q,f)
}var b=Object.keys(r);for(var p=0,c=b.length;p<c;++p){var d=b[p];var a=r[d];if(!Object.prototype.hasOwnProperty.call(q,d)){q[d]=a
}else{q[d]=h.merge(q[d],a,f)}}return q};h.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};h.encode=function(b){if(b.length===0){return b}if(typeof b!=="string"){b=""+b
}var d="";for(var c=0,f=b.length;c<f;++c){var a=b.charCodeAt(c);if(a===45||a===46||a===95||a===126||(a>=48&&a<=57)||(a>=65&&a<=90)||(a>=97&&a<=122)){d+=b[c];
continue}if(a<128){d+=i.hexTable[a];continue}if(a<2048){d+=i.hexTable[192|(a>>6)]+i.hexTable[128|(a&63)];
continue}if(a<55296||a>=57344){d+=i.hexTable[224|(a>>12)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)];
continue}++c;a=65536+(((a&1023)<<10)|(b.charCodeAt(c)&1023));d+=i.hexTable[240|(a>>18)]+i.hexTable[128|((a>>12)&63)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)]
}return d};h.compact=function(q,d){if(typeof q!=="object"||q===null){return q}d=d||[];
var r=d.indexOf(q);if(r!==-1){return d[r]}d.push(q);if(Array.isArray(q)){var p=[];
for(var b=0,f=q.length;b<f;++b){if(typeof q[b]!=="undefined"){p.push(q[b])}}return p
}var a=Object.keys(q);for(b=0,f=a.length;b<f;++b){var c=a[b];q[c]=h.compact(q[c],d)
}return q};h.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};h.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],394:[function(k,j,g){var h=k("qs");j.exports=function i(a){a=a||window.location.search;
a=a.replace(/^\?/,"");return h.parse(a,{strictNullHandling:true})}},{qs:390}],395:[function(k,j,g){var i=k("./parseSearchParams");
j.exports=function h(c){var a;var b;if(!c){a=window.location}else{if(window.URL){a=new URL(c,window.location)
}else{a=document.createElement("a");a.href=c;//noinspection SillyAssignmentJS,SillyAssignmentJS
    a.href=a.href}}return{hash:a.hash,host:a.host,hostname:a.hostname,href:a.href,origin:a.origin||a.protocol+"//"+a.host,pathname:a.pathname,port:a.port,protocol:a.protocol,search:a.search,searchParams:i(a.search)}
}},{"./parseSearchParams":394}],396:[function(q,r,p){var k=q("@marcom/ac-console").log;
var s=q("@marcom/ac-dom-traversal/querySelectorAll");var m=q("./PromoManager");
var l=q("./PromoManager/selectors");function n(a,b){this._options=b||{};this._el=a;
this._selectors=l;this.promoManagers={};this._initialize()}var o=n.prototype;o._setUpPromoManagersProp=function(){var a=this._selectors.manager.types.length;
for(var b=0;b<a;b++){this.promoManagers[this._selectors.manager.types[b]]=[]}};
o._initialize=function(){var b=s(this._selectors.manager.selector,this._el);var a=b.length;
var d;this._setUpPromoManagersProp();for(var c=0;c<a;c++){d=b[c].getAttribute(this._selectors.manager.dataAttribute);
if(this.promoManagers[d]){this.promoManagers[d].push(new m(b[c],this._options))
}else{k(d+" is not a valid manager type.")}}};r.exports=n},{"./PromoManager":397,"./PromoManager/selectors":400,"@marcom/ac-console":332,"@marcom/ac-dom-traversal/querySelectorAll":54}],397:[function(s,t,q){var m=s("@marcom/ac-url/parseURL");
var u=s("@marcom/ac-dom-traversal/querySelectorAll");var r=s("./PromoManager/History");
var n=s("./PromoManager/Promo");var l=s("./PromoManager/selectors");function o(a,b){this._options=b;
this._id=a.id;this._selectors=l;this._history=null;this._type=null;this.el=a;this.promos={all:null,current:null};
this._removeManagerAttr=this._removeManagerAttr.bind(this);this._initialize()}var p=o.prototype;
p.setCurrentPromo=function(a){this.promos.current=a;this._history.addValue(a.historyValue)
};p._getManagerType=function(){var a=this.el.getAttribute(this._selectors.manager.dataAttribute);
if(this._selectors.manager.types.indexOf(a)!==-1){return a}};p._createPromoArr=function(a){var c=u(this._selectors.promo.selector,a);
var d=c.length-1;var f=[];var b;while(d>=0){b=new n(c[d]);b.index=d;f.unshift(b);
d--}return f};p._getURLIdentifier=function(){var a=m().pathname;a=a.replace(/\/+/g,"/");
a=a.substring(1,a.lastIndexOf("/")+1);a=a.replace(/\//g,"-");return a};p._assembleHistoryKey=function(c){var a=this._getURLIdentifier();
var b=c.concat("-",this._type);return a.concat(b)};p._setupHistory=function(){var b=this.promos.all.length-1;
var a=this._assembleHistoryKey(this._id);return new r(a,b,this._options)};p._getPromosNotInHistory=function(){var b=this._history.getValue();
var a=function(c){return b.indexOf(c.historyValue)===-1};return this.promos.all.filter(a)
};p._selectFirstPromo=function(){var a=this.promos.all.length;var d=this._getPromosNotInHistory();
var c=d.length;var b;if(a>1&&c>0){b=d[0]}else{b=this.promos.all[0];if(c<1){this._history.resetValue()
}}return b};p._removeHiddenPromos=function(){var a=this.promos.all.length-1;while(a>=0){if(this.promos.all[a].historyValue!==this.promos.current.historyValue){this.promos.all[a].remove()
}a--}};p._reorderPromoArr=function(){var a=this.promos.all.splice(this.promos.current.index);
var b;this.promos.all=a.concat(this.promos.all);b=this.promos.all.length-1;while(b>=0){this.promos.all[b].index=b;
b--}};p._appendPromoArrToDom=function(){var b=document.createDocumentFragment();
var c=this.promos.all.length;var a=0;var d;while(a<c){d=this.promos.all[a].el;b.appendChild(d);
a++}this.el.appendChild(b)};p._removeManagerAttr=function(){this.el.removeAttribute(this._selectors.manager.dataAttribute)
};p._initialize=function(){var a;this._type=this._getManagerType();this.promos.all=this._createPromoArr(this.el);
this._history=this._setupHistory();a=this._selectFirstPromo();this.setCurrentPromo(a);
if(this._type===this._selectors.manager.types[0]){this._removeHiddenPromos()}else{if(this._type===this._selectors.manager.types[1]){this._reorderPromoArr();
this._appendPromoArrToDom()}else{throw new Error("PromoManager must be supplied with a valid manager type")
}}window.requestAnimationFrame(this._removeManagerAttr)};t.exports=o},{"./PromoManager/History":398,"./PromoManager/Promo":399,"./PromoManager/selectors":400,"@marcom/ac-dom-traversal/querySelectorAll":54,"@marcom/ac-url/parseURL":395}],398:[function(r,t,o){var s=r("@marcom/ac-storage");
var m=s.Item;var l=r("@marcom/ac-console").log;var p=r("@marcom/ac-object/defaults");
var u={daysUntilExpires:null};function q(c,b,a){this._key=c;this._maxLen=b;this._options=p(u,a);
this._item=null;this._initialize()}var n=q.prototype;n.getValue=function(){this._item.load();
return this._item.value()||[]};n.addValue=function(a){var b=this.getValue();b.unshift(a);
b=this._maxLenArrTrim(b);this._item.setValue(b);this._item.save()};n.resetValue=function(){this._item.setValue([]);
this._item.save()};n._setHistoryExpiration=function(a){var b=this._options.daysUntilExpires;
var c=a;if(b!==30&&b!==null){if(typeof b!=="number"){l("daysUntilExpires option must be a number.")
}else{b=m.createExpirationDate(b);a.setExpirationDate(b)}}return c};n._createLocalStorageItem=function(){var a;
a=new s.Item(this._key);a.load();if(!a.value()){a.setValue([]);a.save();a=this._setHistoryExpiration(a)
}return a};n._maxLenArrTrim=function(b){var a=b;if(a.length>this._maxLen){a.pop()
}return a};n._initialize=function(){this._item=this._createLocalStorageItem();this._item.save()
};t.exports=q},{"@marcom/ac-console":332,"@marcom/ac-object/defaults":369,"@marcom/ac-storage":378}],399:[function(i,n,j){var m=i("@marcom/ac-dom-nodes/remove");
var o=i("./selectors");function k(a){this.el=a;this.index=null;this.historyValue=this._getDataAttribPromoId()
}var l=k.prototype;l.remove=function(){m(this.el)};l._getDataAttribPromoId=function(){var a=o.promo.dataAttribute;
return this.el.getAttribute(a)};n.exports=k},{"./selectors":400,"@marcom/ac-dom-nodes/remove":362}],400:[function(g,j,h){function k(){this.dataAttributePrefix="data-promo-";
this.promo={attribute:"id",dataAttribute:null,selector:null};this.manager={types:["show-hide","reorder"],attribute:"type",dataAttribute:null,selector:null};
this._initialize()}var i=k.prototype;i._assembleDataAttribute=function(a){return this.dataAttributePrefix+a
};i._assembleDataAttribSelector=function(a){return"["+a+"]"};i._initialize=function(){this.promo.dataAttribute=this._assembleDataAttribute(this.promo.attribute);
this.promo.selector=this._assembleDataAttribSelector(this.promo.dataAttribute);
this.manager.dataAttribute=this._assembleDataAttribute(this.manager.attribute);
this.manager.selector=this._assembleDataAttribSelector(this.manager.dataAttribute)
};j.exports=new k()},{}],401:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":404}],402:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],403:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(a){return(a.ua.indexOf("Safari")>-1&&a.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(a){return(a.ua.indexOf("IE")>-1||a.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var a=false;if(document.documentMode){a=parseInt(document.documentMode,10)
}return a}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(a){return(a.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(a){return(a.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(a){return(a.ua.indexOf("iPhone")>-1||a.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(a){return(a.platform.indexOf("Linux")>-1&&a.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],404:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":402,"./dictionary":403}],405:[function(d,g,f){arguments[4][211][0].apply(f,arguments)
},{dup:211}],406:[function(d,g,f){arguments[4][238][0].apply(f,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":407,dup:238}],407:[function(d,g,f){arguments[4][239][0].apply(f,arguments)
},{dup:239}],408:[function(d,g,f){arguments[4][115][0].apply(f,arguments)},{dup:115}],409:[function(f,i,g){if(!Object.create){var h=function(){};
Object.create=function(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}h.prototype=a;return new h()}}},{}],410:[function(f,i,g){if(!Object.keys){Object.keys=function h(b){var c=[];
var a;if((!b)||(typeof b.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(a in b){if(b.hasOwnProperty(a)){c.push(a)}}return c}}},{}],411:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
v("@marcom/ac-polyfills/Object/keys");v("@marcom/ac-polyfills/Object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=v("@marcom/ac-dom-events/utils/addEventListener");var q=v("@marcom/ac-feature/mediaQueriesAvailable");
var u="viewport-emitter";var o="::before";var t="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function n(a){m.call(this);this._initializeElement(a);if(q()){this._updateViewport=this._updateViewport.bind(this);
p(window,"resize",this._updateViewport);p(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(t);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var r=n.prototype=Object.create(m.prototype);
r.viewport=false;r.retina=false;r._initializeElement=function(b){var a;b=b||u;a=document.getElementById(b);
if(!a){a=document.createElement("div");a.id=b;a=document.body.appendChild(a)}this._el=a
};r._getElementContent=function(){var a;if("currentStyle" in this._el){a=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();a=window.getComputedStyle(this._el,o).content}if(a){a=a.replace(/["']/g,"")
}if(a){return a}return false};r._updateViewport=function(){var a=this.viewport;
var c;var b;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(a&&this.viewport!==a){b={from:a,to:this.viewport};this.trigger("change",b);
this.trigger("from:"+a,b);this.trigger("to:"+this.viewport,b)}};r._updateRetina=function(a){var b=this.retina;
this.retina=this._retinaQuery.matches;if(b!==this.retina){this.trigger("retinachange",{from:b,to:this.retina})
}};r._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};w.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":405,"@marcom/ac-event-emitter-micro":406,"@marcom/ac-feature/mediaQueriesAvailable":196,"@marcom/ac-polyfills/Function/prototype.bind":408,"@marcom/ac-polyfills/Object/create":409,"@marcom/ac-polyfills/Object/keys":410}],412:[function(i,h,f){var g=i("./ViewportEmitter");
h.exports=new g()},{"./ViewportEmitter":411}],413:[function(d,g,f){g.exports={lerp:function(b,a,c){return a+(c-a)*b
},map:function(a,b,j,c,k){return this.lerp(this.norm(a,b,j),c,k)},mapClamp:function(a,b,j,c,k){var a=this.lerp(this.norm(a,b,j),c,k);
return Math.max(c,Math.min(k,a))},norm:function(a,b,c){return(a-b)/(c-b)},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))
},randFloat:function(a,b){return(Math.random()*(b-a))+a},randInt:function(a,b){return Math.floor((Math.random()*(b-a))+a)
}}},{}],414:[function(J,P,w){var E=J("@marcom/ac-gallery").Gallery;var C=J("@marcom/ac-gallery").SlideGallery;
var M=J("@marcom/ac-dom-events").addEventListener;var A=J("@marcom/ac-feature/isTablet");
var L=J("@marcom/ac-feature/touchAvailable");var z=J("./js/home/HomepageGallery/HomepageGallery");
var B=J("./js/home/HomepageGallery/SlideScaleItem");var N=J("./js/home/HomepageGallery/createDashnav");
var F=J("./js/home/HomepageGallery/setBackingLinks");var O=J("./js/home/Promos");
var I=".gallery-slide-wrapper";var Q="a.backing-link";var y="has-backing-link";
var K="showing-first-slide";var x="showing-last-slide";var D="is-autoplaying";var G="is-interacting";
var H=(function(){return{initialize:function(){this.initializePromos();if(document.documentElement.classList.contains("enhanced-gallery")){this.initializeGallery()
}if(A&&L){M(window,"orientationchange",this._fixIosOverscrollOnRotation)}},initializeGallery:function(){var b=document.getElementById("promos")!=null;
var d="homepage-gallery";var g=document.getElementById(d);var c=document.getElementById(d).classList.contains("infinite-gallery");
var a={container:d,wrapAround:c,enableArrowKeys:true,touch:true,desktopSwipe:false,movementRateMultiplier:1.15,velocityMultiplier:8,autoPlay:3.5,promos:b};
var f=g.querySelectorAll("[data-ac-gallery-item]").length;F(g);if(f>1){N(g);a.itemType=B;
this.slideGallery=new z(g,a)}else{this.slideGallery=new C(g,a)}},initializePromos:function(){this.promos=new O();
this.promos.initialize()},_fixIosOverscrollOnRotation:function(){var a=document.body.scrollTop;
var b=document.body.offsetHeight-window.innerHeight+1;if(a>b){window.scrollTo(0,b)
}}}}());P.exports=H},{"./js/home/HomepageGallery/HomepageGallery":416,"./js/home/HomepageGallery/SlideScaleItem":417,"./js/home/HomepageGallery/createDashnav":418,"./js/home/HomepageGallery/setBackingLinks":420,"./js/home/Promos":421,"@marcom/ac-dom-events":24,"@marcom/ac-feature/isTablet":193,"@marcom/ac-feature/touchAvailable":200,"@marcom/ac-gallery":255}],415:[function(f,h,g){var i={Gallery:{animationDuration:1,promoImageOffset:200},Item:{Incoming:{CopyXScaleFactor:-0.2},Outgoing:{CopyXScaleFactor:0.95}},updateConstants:function(a){switch(a){case"x-large":this.Gallery.promoImageOffset=200;
case"large":this.Gallery.animationDuration=1;this.Gallery.promoImageOffset=100;
break;case"medium":this.Gallery.animationDuration=0.8;this.Gallery.promoImageOffset=80;
break;case"small":this.Gallery.animationDuration=0.4;this.Gallery.promoImageOffset=74;
break;default:}}};h.exports=i},{}],416:[function(X,ah,M){var J=X("@marcom/ac-gallery").Gallery;
var O=X("@marcom/ac-gallery").AutoGallery;var aj=O.prototype;var Y=X("@marcom/ac-useragent").browser.edge;
var ab=X("@marcom/ac-headjs/FocusManager");var K=X("@marcom/ac-keyboard/keyMap");
var ac=X("@marcom/ac-pointer-tracker").PointerTracker;var G=X("@marcom/ac-page-visibility").PageVisibilityManager;
var T=X("@marcom/sm-math-utils");var U=X("@marcom/ac-browser-prefixed");var ai=X("@marcom/ac-eclipse").Clip;
var aa=X("@marcom/ac-dom-events").addEventListener;var ad=X("@marcom/ac-viewport-emitter");
var af=X("./Constants");var S=".gallery-slide-wrapper";var ak="a.backing-link";
var Q="has-backing-link";var Z="showing-first-slide";var N="showing-last-slide";
var H="is-autoplaying";var P="is-interacting";var L=!(document.getElementsByTagName("html")[0].classList.contains("no-touch"));
var ae=!(document.getElementsByTagName("html")[0].classList.contains("no-android"));
var W=L?"easeOutCubic":"easeInOutCubic";if(!Date.now){Date.now=function ag(){return new Date().getTime()
}}var R=function(a,b){this._lastReportedWidth=document.body.offsetWidth;O.apply(this,arguments);
this._wrapAround=b.wrapAround;this.hasPromos=b.promos||false;this.movementRateMultiplier=b.movementRateMultiplier||2;
this.positionX=0;this.swipeVelocity=0;this.velocityMultiplier=b.velocityMultiplier||8;
this.autoPlayerTimeTracker=0;this._wasAutoPlaying=this._isAutoPlaying;this._onResizeDebouncedTimeout=-1;
this._onOrientationChangeDebouncedTimeout=-1;this.currentSlideIndex=-1;this.widthOfSlideItem=this.getWidthOfSingleSlide();
this.galleryContainer=this._el.parentNode;this.slideWrapperElement=this._el.querySelector(S);
this.previousPaddle=this._el.querySelector("[data-ac-gallery-previous-trigger]");
this.nextPaddle=this._el.querySelector("[data-ac-gallery-next-trigger]");this.previousPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-previous");
this.nextPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-next");
this.lastInteractionEvent=null;this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);
this._onPreviousPaddleClick=this._onPreviousPaddleClick.bind(this);this._onNextPaddleClick=this._onNextPaddleClick.bind(this);
this._onDashnavTriggerClicked=this._onDashnavTriggerClicked.bind(this);this._onResizeDebounced=this._onResizeDebounced.bind(this);
this._onBreakpointChanged=this._onBreakpointChanged.bind(this);this._onOrientationChange=this._onOrientationChange.bind(this);
this._validateGalleryHeight=this._validateGalleryHeight.bind(this);this._onVisibilityChanged=this._onVisibilityChanged.bind(this);
this._onPaddleNavContainerClick=this._onPaddleNavContainerClick.bind(this);this._onFocusChangePreventShifts=this._onFocusChangePreventShifts.bind(this);
this._setSlideSpecificWrapperClasses=this._setSlideSpecificWrapperClasses.bind(this);
this._killAutoPlayOnFiniteGalleries=this._killAutoPlayOnFiniteGalleries.bind(this);
af.updateConstants(ad.viewport);this._setupEvents();this._validateGalleryHeight();
this._setInitialPositions();this._onFocusChangePreventShifts();this._setSlideSpecificWrapperClasses();
this.lastTime=Date.now();this._onRequestAnimationFrame()};var I=R.prototype=Object.create(O.prototype);
R.prototype.constructor=R;I._onVisibilityChanged=function(){if(G.isHidden){this._wasAutoPlaying=this._isAutoPlaying;
this.stopAutoPlay()}if(!G.isHidden&&this._wasAutoPlaying){this.startAutoPlay()}};
I._onFocusChangePreventShifts=function(){this._el.scrollLeft=0};I._setSlideSpecificWrapperClasses=function(){var b=this.getCurrentItem();
var c=this.getItemIndex(b);var a=b.getElement().querySelector(ak);this._el.classList[(a&&a.getAttribute("href"))?"add":"remove"](Q);
this._el.classList[(c===0)?"add":"remove"](Z);this._el.classList[(c===this.getTotalItems()-1)?"add":"remove"](N)
};I._killAutoPlayOnFiniteGalleries=function(){if(this.getItemIndex(this.getCurrentItem())===this.getTotalItems()-1){this.stopAutoPlay()
}};I._setupEvents=function(){[this.previousPaddleContainer,this.nextPaddleContainer,this.previousPaddle,this.nextPaddle].forEach(function(b){new ab(b)
}.bind(this));aa(this.previousPaddle,"click",this._onPreviousPaddleClick);aa(this.nextPaddle,"click",this._onNextPaddleClick);
aa(this.previousPaddleContainer,"click",this._onPaddleNavContainerClick);aa(this.nextPaddleContainer,"click",this._onPaddleNavContainerClick);
aa(this._el,"scroll",this._onFocusChangePreventShifts,true);aa(window,"orientationchange",this._onOrientationChange);
G.on("changed",this._onVisibilityChanged);this.on(J.UPDATE_COMPLETE,this._setSlideSpecificWrapperClasses);
if(!this._wrapAround){this.on(J.UPDATE_COMPLETE,this._killAutoPlayOnFiniteGalleries)
}ad.on("change",this._onBreakpointChanged);for(var a=0;a<this._items.length;a++){this._items[a].on("selected",this._onDashnavTriggerClicked)
}};I._onPaddleNavContainerClick=function(b){var a=this.getCurrentItem().getElement().querySelector(ak);
if(Y&&b.target.getAttribute("data-focus-method")==="mouse"){b.target.blur()}if(a&&a.getAttribute("href")){window.location.href=a.getAttribute("href")
}};I._validateGalleryHeight=function(){if(!L){return}var a=window.innerHeight;if(this.hasPromos){a=a-af.Gallery.promoImageOffset
}this.galleryContainer.style.height=a+"px"};I.startAutoPlay=function(a,b){this._el.classList.add(H);
this._el.classList.remove(P);this.autoPlayerTimeTracker=this._autoPlayDelay*this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());
this.lastTime=Date.now();aj.startAutoPlay.call(this,a,b)};I.stopAutoPlay=function(a){this._el.classList.remove(H);
this._el.classList.add(P);aj.stopAutoPlay.call(this)};I._setInitialPositions=function(){var b=this._items[this._items.length-1];
for(var a=0;a<this._items.length;a++){this._items[a].prev=b;this._items[a].next=this._items[a+1];
this._items[a].zIndex=1000+a;var c=this.widthOfSlideItem*this._items.length;this._items[a]._el.style[U.transform]="translate3d("+c+"px, 0, 0)";
this._items[a].x=this._items[a].width*a;b=this._items[a]}b.next=this._items[0];
this._items[0]._el.style[U.transform]="translate3d("+0+"px, 0, 0)"};I._setUpSwiping=function(a,b){this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeEnd=this._onSwipeEnd.bind(this);this._onSwipeUpdate=this._onSwipeUpdate.bind(this);
if(a){this._touchSwipe=new ac(this._el,ac.TOUCH_EVENTS);this._touchSwipe.on(ac.START,this._onSwipeStart);
this._touchSwipe.on(ac.END,this._onSwipeEnd);this._touchSwipe.on(ac.UPDATE,this._onSwipeUpdate);
window.addEventListener("touchmove",function(){})}if(b){this._clickSwipe=new ac(this._el,ac.MOUSE_EVENTS);
this._clickSwipe.on(ac.START,this._onSwipeStart);this._clickSwipe.on(ac.END,this._onSwipeEnd);
this._clickSwipe.on(ac.UPDATE,this._onSwipeUpdate)}};I._onSwipeStart=function(a){if(this.clip){this.clip.destroy()
}if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}this.lastInteractionEvent=a;this.swipeVelocity=0};I._onSwipeUpdate=function(b){var a=this.positionX;
this.lastPositionX=this.positionX;this.positionX+=b.diffX*this.movementRateMultiplier;
this.lastInteractionEvent=b;this.swipeVelocity=(this.positionX-a)*this.velocityMultiplier
};I._onSwipeEnd=function(b){var c=[this.currentSlideIndex-1,this.currentSlideIndex,this.currentSlideIndex+1];
var d=0;var f=Number.MAX_VALUE;for(var j=0,i=c.length;j<i;j++){var a=c[j]*this.widthOfSlideItem;
var k=Math.abs(a-(this.positionX+this.swipeVelocity));if(k<f){f=k;d=j}}this.lastInteractionEvent=b;
var h=this.wrapSlideIndex(c[d]),g=(h+1)%2;this.animateToSlide(c[d]);if(this._items.length==2){this._items[h]._addCurrentClassToTriggers();
this._items[g]._removeCurrentClassFromTriggers()}};I._onWindowResize=function(a){if(this._lastReportedWidth!=document.body.offsetWidth){this._lastReportedWidth=document.body.offsetWidth;
if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay(a)
}window.clearTimeout(this._onResizeDebouncedTimeout);this._onResizeDebouncedTimeout=setTimeout(this._onResizeDebounced,500);
aj._onWindowResize.call(this,a)}};I._onOrientationChange=function(){if(ae){window.clearTimeout(this._onOrientationChangeDebouncedTimeout);
this._onOrientationChangeDebouncedTimeout=setTimeout(this._validateGalleryHeight,200)
}else{this._validateGalleryHeight()}};I._onResizeDebounced=function(){if(this.clip&&this.clip._running){this.clip.destroy()
}this.widthOfSlideItem=this.getWidthOfSingleSlide(true);for(var c=0;c<this._items.length;
c++){var a=this._items[c];a.x=this.widthOfSlideItem*c;a.width=a.updateWidth()}for(c=0;
c<this._items.length;c++){a=this._items[c];a.slideElement.style[U.transform]="translate3d("+a.x+"px, 0,0)"
}var b=this.wrapSlideIndex(this.currentSlideIndex);this.lastPositionX=this.positionX;
this.positionX=this._items[b].x;this.currentSlideIndex=-1};I._onBreakpointChanged=function(a){af.updateConstants(a.to)
};I._onRequestAnimationFrame=function(){window.requestAnimationFrame(this._onRequestAnimationFrame);
this.msSinceLastRenderTime=(typeof this.lastRenderTime!=="undefined")?new Date()-this.lastRenderTime:1000;
if(this.msSinceLastRenderTime>=1000/25){this.lastRenderTime=new Date();this.throttledDashnavFrameHasArrived=true
}else{this.throttledDashnavFrameHasArrived=false}this.slideWrapperElement.style[U.transform]="translate3d("+(-this.positionX)+"px, 0,0)";
this.updateAutoPlayTimeTracker();if(this._items.length==2){this.checkForCurrentSlideUpdateForTwoSlideGallery()
}else{this.checkForCurrentSlideUpdate()}var m=this._isAutoPlaying?this.getDashTForAutoPlay():this.getDashTForInteraction();
var j=1/this._items.length;for(var i=0,f=this._items.length;i<f;i++){var a=this._items[i];
var h=this.positionX-a.x;var g=h/this.widthOfSlideItem;a.onRequestAnimationFrame(g);
var l=1;if(this._isAutoPlaying){var k=i*j;var b=(i+1)*j;l=T.norm(m,k,b)}else{var d=this.wrapSlideIndex(this.currentSlideIndex);
var c=this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());l=(i===d||i===c)?1:0
}if(a.lastTValue!=l&&this.throttledDashnavFrameHasArrived){a.updateDash(l)}}};I.animateToSlide=function(c,f){var a=W;
if(this.clip){if(this.clip._running){a="easeOutQuint"}this.clip.destroy()}if(this._isAutoPlaying&&L){a="easeInOutCubic"
}var b=c*this.widthOfSlideItem;var d={slideIndex:c,x:this.positionX,extraOptions:null};
var g=this;this.clip=new ai(d,af.Gallery.animationDuration,{x:b},{ease:a,destroyOnComplete:true,onUpdate:function(){g.lastPositionX=g.positionX;
g.positionX=d.x}});this.clip.play()};I._onAutoPlayToNextItem=function(){this.lastInteractionEvent=null;
if(!G.isHidden){if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.animateToSlide(this.currentSlideIndex+1)
}}aj._onAutoPlayToNextItem.call(this)};I._onDashnavTriggerClicked=function(c){this.lastInteractionEvent=null;
if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()}var b=this.getCurrentItemIndex();
var a=this.getItemIndex(c.item);var d=a-b;this.animateToSlide(this.currentSlideIndex+d)
};I._onPreviousPaddleClick=function(b){b.stopPropagation();if(Y&&b.target.getAttribute("data-focus-method")==="mouse"){b.target.blur()
}this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}var a=this.getSlideIndexTakingAnimationIntoAccount();if(a>0||this._wrapAround){this.animateToSlide(a-1)
}};I._onNextPaddleClick=function(b){b.stopPropagation();if(Y&&b.target.getAttribute("data-focus-method")==="mouse"){b.target.blur()
}this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}var a=this.getSlideIndexTakingAnimationIntoAccount();if(a<this.getTotalItems()-1||this._wrapAround){this.animateToSlide(a+1)
}};I._onKeyboardInteraction=function(a,c){this.lastInteractionEvent=null;var b=this.getSlideIndexTakingAnimationIntoAccount();
if(c.keyCode==K.ARROW_RIGHT&&(b<this.getTotalItems()-1||this._wrapAround)){this.animateToSlide(b+1)
}if(c.keyCode==K.ARROW_LEFT&&(b>0||this._wrapAround)){this.animateToSlide(b-1)}aj._onKeyboardInteraction.call(this,a,c)
};I.getSlideIndexTakingAnimationIntoAccount=function(){var a=this.currentSlideIndex;
if(this.clip&&this.clip.target()){a=this.clip.target().slideIndex}return a};I.checkForCurrentSlideUpdate=function(){var d=Math.floor((this.positionX+this.widthOfSlideItem*0.5)/this.widthOfSlideItem);
if(d==this.currentSlideIndex){return}this.currentSlideIndex=d;var b=this.getCurrentItemIndex();
var a=this._items[b];var f=null;if(this.lastInteractionEvent){f={interactionEvent:this.lastInteractionEvent.interactionEvent}
}this.show(a,f);var c;c=a.next;c.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
c.slideElement.style[U.transform]="translate3d("+c.x+"px, 0,0)";c=a.prev;c.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
c.slideElement.style[U.transform]="translate3d("+c.x+"px, 0,0)"};I.checkForCurrentSlideUpdateForTwoSlideGallery=function(){var h=this.positionX<this.lastPositionX?1:-1;
var g=h==-1?0.001:0.9999;var d=Math.floor((this.positionX+this.widthOfSlideItem*g)/this.widthOfSlideItem);
if(this.currentSlideIndex!=d){var f=null;if(this.lastInteractionEvent){f={interactionEvent:this.lastInteractionEvent.interactionEvent}
}this.show(this.wrapSlideIndex(d),f)}this.currentSlideIndex=d;var b=this.getCurrentItemIndex();
var a=this._items[b];var c;if(h<0){c=a.next;c.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
c.slideElement.style[U.transform]="translate3d("+c.x+"px, 0,0)"}else{c=a.prev;c.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
c.slideElement.style[U.transform]="translate3d("+c.x+"px, 0,0)"}};I.updateAutoPlayTimeTracker=function(){if(!G.isHidden){var b=Date.now();
var a=(b-this.lastTime);this.lastTime=b;this.autoPlayerTimeTracker+=a}};I.getDashTForAutoPlay=function(){var a=(this._autoPlayDelay*this._items.length);
var c=(this.autoPlayerTimeTracker)%a;var b=c/a;return b};I.getDashTForInteraction=function(){return 1
};I.getCurrentItemIndex=function(){var a=this.currentSlideIndex%this._items.length;
if(a<0){a=this._items.length+a}return a};I.getWidthOfSingleSlide=function(a){if(a){return this._items[0].updateWidth()
}return this._items[0].width};I.wrapSlideIndex=function(a){a=a%this._items.length;
if(a<0){return this._items.length+a}return a};var V=function(){O.prototype.startAutoPlay=function(a,b){b=b||{};
this.options=b||{};this._isAutoPlaying=true;this._autoPlayDelay=this._autoPlayDelay||(a*1000);
this._cancelAutoPlayOnInteraction=(b.cancelOnInteraction===undefined)?true:b.cancelOnInteraction;
clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);
if(this._cancelAutoPlayOnInteraction){this.on(J.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){aa(this._componentsContainer,"focus",this.stopAutoPlay,true);
aa(this._componentsContainer,"touchend",this.stopAutoPlay,true);aa(this._componentsContainer,"click",this.stopAutoPlay,true)
}};O.prototype.stopAutoPlay=function(){clearTimeout(this._autoPlayTimeoutId);this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(J.UPDATE,this.stopAutoPlay)}};O.prototype._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!G.isHidden){if(this._cancelAutoPlayOnInteraction){this.off(J.UPDATE,this.stopAutoPlay)
}var a=this.showNext();if(a!==null){if(this._cancelAutoPlayOnInteraction){this.on(J.UPDATE,this.stopAutoPlay)
}clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}else{clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}}};V();ah.exports=R},{"./Constants":415,"@marcom/ac-browser-prefixed":5,"@marcom/ac-dom-events":24,"@marcom/ac-eclipse":146,"@marcom/ac-gallery":255,"@marcom/ac-headjs/FocusManager":274,"@marcom/ac-keyboard/keyMap":283,"@marcom/ac-page-visibility":287,"@marcom/ac-pointer-tracker":330,"@marcom/ac-useragent":401,"@marcom/ac-viewport-emitter":412,"@marcom/sm-math-utils":413}],417:[function(u,v,s){var n=u("@marcom/ac-browser-prefixed");
var r=u("@marcom/sm-math-utils");var w=u("./Constants");var t=u("@marcom/ac-gallery").Item;
var i=t.prototype;var p=0;var q=function(){t.apply(this,arguments);this.zIndex=1000;
this.mI=p++;this.slideElement=this._el;this.imageElement=this.slideElement.querySelector(".gallery-item-image-element");
this.copyElement=this.slideElement.querySelector(".gallery-item-copy-wrapper");
this.width=this.slideElement.clientWidth;this.dashnavElement=document.querySelector('[data-ac-gallery-trigger="'+this._el.id+'"]');
this.dashnavProgressElement=this.dashnavElement.querySelector(".dashnav-progress");
this.dashnavMaxWidth=this.dashnavElement.clientWidth};var o=q.prototype=Object.create(t.prototype);
o.onRequestAnimationFrame=function(c){var a,b;c=r.clamp(c,-1,1);if(c>=0){a=c*this.width*w.Item.Outgoing.CopyXScaleFactor;
b=r.map(c,0,1,1,0.9);this.copyElement.style[n.transform]="translate3d("+a+"px, 0, 0) scale3d("+b+","+b+", 1)";
b=r.map(c,0,1,1,0.9);a=r.map(c,0,1,0,this.width*0.9);if(this.imageElement){this.imageElement.style[n.transform]="translate3d("+a+"px, 0, 0) scale3d("+b+","+b+", 1)"
}}else{a=c*this.width*w.Item.Incoming.CopyXScaleFactor;b=1;this.copyElement.style[n.transform]="translate3d("+a+"px, 0, 0) scale3d("+b+","+b+", 1)";
a=0;b=1;if(this.imageElement){this.imageElement.style[n.transform]="translate3d("+a+"px, 0, 0) scale3d("+b+","+b+", 1)"
}}};o.updateDash=function(a){this.lastTValue=a;a=r.clamp(a,0,1);this.dashnavProgressElement.style[n.transform]="scaleX("+a+")"
};o.setZIndex=function(a){this.zIndex=a;this.slideElement.style.zIndex=a};o.updateWidth=function(){this.width=this._el.clientWidth;
return this.width};v.exports=q},{"./Constants":415,"@marcom/ac-browser-prefixed":5,"@marcom/ac-gallery":255,"@marcom/sm-math-utils":413}],418:[function(m,l,i){var j=m("@marcom/ac-gallery").SlideGallery;
var k=m("./safewarn");var h=function(c){var b=document.querySelector(".dashnav ul");
if(b){var a=c.querySelectorAll(".gallery-item");[].forEach.call(a,function(f){var p=document.createElement("li");
var q=document.createElement("a");var d=f.querySelector("h2");var g="";if(d){g=d.textContent
}else{k("Per SEO, our header for each slide should be wrapped in an H2. See: https://aa.apple.com//#technical-structure")
}q.setAttribute("href","#"+f.id);q.setAttribute("data-ac-gallery-trigger",f.id);
q.setAttribute("id",f.id+"-trigger");q.className="dashnav-item";q.innerHTML='<div class="dashnav-dash"><span class="dashnav-progress"></span><span class="dashnav-label">'+g+"</span></div>";
p.setAttribute("role","presentation");p.appendChild(q);b.appendChild(p)})}};l.exports=h
},{"./safewarn":419,"@marcom/ac-gallery":255}],419:[function(f,i,g){var h=function(b){if(/^ic[^\.]+\-dev\.apple\.com/.test(document.location.host)){try{console.warn(b)
}catch(a){}}};i.exports=h},{}],420:[function(p,o,j){var l=p("@marcom/ac-gallery").SlideGallery;
var m=p("./safewarn");var k="backing-link";var n="data-backing-link";var q=function(b){var c=function(d,f){var g=f.getAttribute("href");
d.setAttribute("href",g);d.setAttribute("data-analytics-click","prop3:"+g+",prefix:h")
};var a=b.querySelectorAll(".gallery-item");[].forEach.call(a,function(h){var d=(h.querySelectorAll("a").length>1);
var g=h.querySelector("["+n+"][href]:not(."+k+")"),g=g||h.querySelector("a[href]:not(."+k+")");
if(g){var f=document.createElement("a");f.classList.add(k);f.setAttribute("aria-hidden","true");
f.setAttribute("tabindex","-1");f.setAttribute("data-analytics-title",h.id.split("homepage-gallery-")[1]);
f=h.insertBefore(f,h.firstChild);c(f,g);if(!g.hasAttribute(n)&&d){m('Gallery slide "'+h.id+'" has multiple links,but no "data-backing-link" data attribute')
}}})};o.exports=q},{"./safewarn":419,"@marcom/ac-gallery":255}],421:[function(o,n,i){var j=o("@marcom/ac-promomanager/AutoPromoManager");
var l=o("@marcom/ac-gallery").FadeGallery;var k=function(a){this._options=a||{};
this.intervalPromos=null};var m=k.prototype;m.initialize=function(){var a=this._initAutoPromoManager();
this.intervalPromoArr=this._initIntervalGalleries(a);this._addIntervalGalleryItems(this.intervalPromoArr);
this._initUpdateIntervalCurrentPromos(this.intervalPromoArr);this._startIntervalGallery(this.intervalPromoArr)
};m._initAutoPromoManager=function(){var a=document.getElementById("promos");return new j(a,this._options)
};m._initIntervalGalleries=function(f){var g=f.promoManagers.reorder;var b=g.length;
var r=[];var h={enableArrowKeys:false,deeplink:false,wrapAround:true};var c;var d;
if(b>0){for(var a=0;a<b;a++){c=g[a];d=new l(c.el,h);r.push({promoManager:c,gallery:d})
}}return r};m._addIntervalGalleryItems=function(f){var a=f.length;var d;var b;var g;
var c;for(var h=0;h<a;h++){b=f[h].gallery;g=f[h].promoManager.promos.all;c=g.length;
for(var s=0;s<c;s++){b.addItem(g[s].el)}}};m._onIntervalGalleryUpdate=function(b){var a=this;
var c=a.gallery.getItemIndex(b.incoming[0]);var d=a.promoManager.promos.all[c];
a.promoManager.setCurrentPromo(d)};m._bindIntervalGalleryUpdate=function(b){var d=b.length;
var a;for(var c=0;c<d;c++){a=b[c];a.boundUpdate=this._onIntervalGalleryUpdate.bind(b[c])
}};m._initUpdateIntervalCurrentPromos=function(a){var b=a.length;this._bindIntervalGalleryUpdate(a);
for(var c=0;c<b;c++){a[c].gallery.on("update",a[c].boundUpdate)}};m._startIntervalGallery=function(a){var c=a.length;
for(var b=0;b<c;b++){a[b].gallery.startAutoPlay()}};n.exports=k},{"@marcom/ac-gallery":255,"@marcom/ac-promomanager/AutoPromoManager":396}],422:[function(l,k,m){var h=l("@marcom/ac-function/debounce");
var j=l("@marcom/ac-homepage/main");var i=(function(){var c=document.querySelectorAll(".gallery-item-copy-wrapper");
c=Array.prototype.slice.call(c);var b=function(){c.forEach(function(f){var g=f.querySelector(".inner");
f.style.height="";g.style.height="";var o=f.offsetHeight;var d=g.clientHeight;f.style.height=Math.round(o)+"px";
if(d%2!==0){g.style.height=d+1+"px"}})};var a=h(b,300);return{initialize:function(){j.initialize();
window.onload=b;window.addEventListener("resize",a)}}})().initialize()},{"@marcom/ac-function/debounce":1,"@marcom/ac-homepage/main":414}]},{},[422]);
 * Created by root on 31.0
