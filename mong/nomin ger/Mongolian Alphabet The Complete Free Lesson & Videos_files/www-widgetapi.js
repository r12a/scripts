(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.F=b.prototype}
function ma(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.B=this.j=null}
function na(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
ma.prototype.v=function(a){this.i=a};
function oa(a,b){a.j={ja:b,ka:!0};a.h=a.s||a.m}
ma.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
ma.prototype.u=function(a){this.h=a};
function pa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function qa(a){a.s=0;var b=a.j.ja;a.j=null;return b}
function ra(a){a.B=[a.j];a.s=0;a.m=0}
function sa(a){var b=a.B.splice(0)[0];(b=a.j=a.j||b)?b.ka?a.h=a.s||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function ta(a){this.h=new ma;this.i=a}
function ua(a,b){na(a.h);var c=a.h.l;if(c)return va(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return xa(a)}
function va(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,oa(a.h,g),xa(a)}a.h.l=null;d.call(a.h,f);return xa(a)}
function xa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,oa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ka)throw b.ja;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){na(a.h);a.h.l?b=va(a,a.h.l.next,b,a.h.v):(a.h.v(b),b=xa(a));return b};
this.throw=function(b){na(a.h);a.h.l?b=va(a,a.h.l["throw"],b,a.h.v):(oa(a.h,b),b=xa(a));return b};
this.return=function(b){return ua(a,b)};
this[Symbol.iterator]=function(){return this}}
function y(a,b){b=new ya(new ta(b));la&&a.prototype&&la(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function za(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!za(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!za(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&za(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&za(h.i,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,A:n}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.A),this.h.previous.next=l.A,this.h.previous=l.A,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
var Ba="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)za(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ba});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.m)}};
b.prototype.U=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.s(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.sa(h,g):this.s(g)};
b.prototype.m=function(g){this.v(2,g)};
b.prototype.s=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.V();this.B()};
b.prototype.V=function(){var g=this;e(function(){if(g.M()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.M=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.X(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(x){try{l(r(x))}catch(B){m(B)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.X(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.X=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).X(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(x){return function(B){r[x]=B;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).X(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Da(){}
function Ea(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Fa(a){return Object.prototype.hasOwnProperty.call(a,Ga)&&a[Ga]||(a[Ga]=++Ha)}
var Ga="closure_uid_"+(1E9*Math.random()>>>0),Ha=0;function Ia(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ka(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ka=Ia:Ka=Ja;return Ka.apply(null,arguments)}
function E(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ya=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function La(a){return a}
;function Ma(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ma);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.wa=b)}
F(Ma,Error);Ma.prototype.name="CustomError";function Na(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Oa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ra(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Sa(a,b){b=Pa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ta(a){return Array.prototype.concat.apply([],arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a){var b=Ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Za(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function $a(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=$a(a[c]);return b}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var cb;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},eb=/&/g,fb=/</g,gb=/>/g,hb=/"/g,ib=/'/g,jb=/\x00/g,kb=/[\x00&<>"']/;var lb;a:{var mb=A.navigator;if(mb){var nb=mb.userAgent;if(nb){lb=nb;break a}}lb=""}function I(a){return-1!=lb.indexOf(a)}
;function ob(a){this.h=pb===pb?a:""}
ob.prototype.toString=function(){return this.h.toString()};
var pb={};var qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rb(a){return a?decodeURI(a):a}
function sb(a){return rb(a.match(qb)[3]||null)}
function tb(a){var b=a.match(qb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ub(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ub(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function vb(a){var b=[],c;for(c in a)ub(c,a[c],b);return b.join("&")}
var wb=/#|$/;function xb(a,b){var c=a.search(wb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function J(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function yb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function zb(a){zb[" "](a);return a}
zb[" "]=Da;var Ab=I("Opera"),Bb=I("Trident")||I("MSIE"),Cb=I("Edge"),Db=I("Gecko")&&!(-1!=lb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Eb=-1!=lb.toLowerCase().indexOf("webkit")&&!I("Edge");function Fb(){var a=A.document;return a?a.documentMode:void 0}
var Gb;a:{var Hb="",Ib=function(){var a=lb;if(Db)return/rv:([^\);]+)(\)|;)/.exec(a);if(Cb)return/Edge\/([\d\.]+)/.exec(a);if(Bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Eb)return/WebKit\/(\S+)/.exec(a);if(Ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ib&&(Hb=Ib?Ib[1]:"");if(Bb){var Jb=Fb();if(null!=Jb&&Jb>parseFloat(Hb)){Gb=String(Jb);break a}}Gb=Hb}var Kb=Gb,Lb;if(A.document&&Bb){var Mb=Fb();Lb=Mb?Mb:parseInt(Kb,10)||void 0}else Lb=void 0;var Nb=Lb;var Ob=yb()||I("iPod"),Pb=I("iPad"),Qb=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(yb()||I("iPad")||I("iPod"));var Rb={},Sb=null;var K=window;function Tb(a,b){this.width=a;this.height=b}
q=Tb.prototype;q.clone=function(){return new Tb(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ub(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Vb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wb(a){var b=Xb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Yb(){var a=[];Wb(function(b){a.push(b)});
return a}
var Xb={La:"allow-forms",Ma:"allow-modals",Na:"allow-orientation-lock",Oa:"allow-pointer-lock",Pa:"allow-popups",Qa:"allow-popups-to-escape-sandbox",Ra:"allow-presentation",Sa:"allow-same-origin",Ta:"allow-scripts",Ua:"allow-top-navigation",Va:"allow-top-navigation-by-user-activation"},Zb=Oa(function(){return Yb()});
function $b(){var a=Ub(),b={};H(Zb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var ac=(new Date).getTime();function bc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function cc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],B=e[2],z=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^x&(B^z);var G=1518500249}else P=x^B^z,G=1859775393;else 60>p?(P=x&B|z&(x|B),G=2400959708):(P=x^B^z,G=3395469782);P=((n<<5|n>>>27)&4294967295)+P+O+G+r[p]&4294967295;O=z;z=B;B=(x<<30|x>>>2)&4294967295;x=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+B&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,B=n.length;x<B;++x)p.push(n.charCodeAt(x));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var x=24;0<=x;x-=8)n[r++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,xa:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function dc(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,ec(bc(d),a,c||null)].join(" "):null}
function ec(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),fc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=fc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fc(a){var b=cc();b.update(a);return b.xa().toLowerCase()}
;var gc={};function hc(a){this.h=a||{cookie:""}}
q=hc.prototype;q.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ea:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.eb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ea}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ea:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ic=new hc("undefined"==typeof document?null:document);function jc(a){return!!gc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function kc(a,b,c,d){(a=A[a])||(a=(new hc(document)).get(b));return a?dc(a,c,d):null}
function lc(a){var b=void 0===b?!1:b;var c=bc(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;jc(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new hc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");jc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new hc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?dc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&jc(b)&&((b=kc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=kc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function mc(){this.h=[];this.i=-1}
mc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
mc.prototype.get=function(a){return!!this.h[a]};
function nc(a){-1==a.i&&(a.i=Qa(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function oc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
oc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function pc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var qc;function rc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ub();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ka(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ha;c.ha=null;e()}};
return function(e){d.next={ha:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function sc(a){A.setTimeout(function(){throw a;},0)}
;function tc(){this.i=this.h=null}
tc.prototype.add=function(a,b){var c=uc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
tc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var uc=new oc(function(){return new vc},function(a){return a.reset()});
function vc(){this.next=this.scope=this.h=null}
vc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
vc.prototype.reset=function(){this.next=this.scope=this.h=null};function wc(a,b){xc||yc();zc||(xc(),zc=!0);Ac.add(a,b)}
var xc;function yc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);xc=function(){a.then(Bc)}}else xc=function(){var b=Bc;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(qc||(qc=rc()),qc(b)):A.setImmediate(b)}}
var zc=!1,Ac=new tc;function Bc(){for(var a;a=Ac.remove();){try{a.h.call(a.scope)}catch(b){sc(b)}pc(uc,a)}zc=!1}
;function Cc(){this.i=-1}
;function Dc(){this.i=64;this.h=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Dc,Cc);Dc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Ec(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Dc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Ec(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Ec(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Ec(this,e);f=0;break}}this.j=f;this.m+=b}};
Dc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.s[c]=b&255,b/=256;Ec(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Fc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Gc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Hc[c])c=Hc[c];else{c=String(c);if(!Hc[c]){var f=/function\s+([^\(]+)/m.exec(c);Hc[c]=f?f[1]:"[Anonymous]"}c=Hc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Gc(a,b){b||(b={});b[Ic(a)]=!0;var c=a.stack||"";(a=a.wa)&&!b[Ic(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Gc(a,b));return c}
function Ic(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Hc={};function Jc(){this.m=this.m;this.s=this.s}
Jc.prototype.m=!1;Jc.prototype.dispose=function(){this.m||(this.m=!0,this.R())};
Jc.prototype.R=function(){if(this.s)for(;this.s.length;)this.s.shift()()};var Kc="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function Lc(){}
Lc.prototype.next=function(){throw Kc;};
Lc.prototype.G=function(){return this};function Mc(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mc)for(c=Nc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Nc(a){Oc(a);return a.h.concat()}
q=Mc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Pc;Oc(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pc(a,b){return a===b}
q.isEmpty=function(){return 0==this.j};
q.clear=function(){this.i={};this.l=this.j=this.h.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&Oc(this),!0):!1};
function Oc(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Nc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Mc(this)};
q.G=function(a){Oc(this);var b=0,c=this.l,d=this,e=new Lc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Kc;var f=d.h[b++];return a?f:d.i[f]};
return e};var Qc=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",Da,b),A.removeEventListener("test",Da,b)}catch(c){}return a}();function Rc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Rc.prototype.stopPropagation=function(){this.j=!0};
Rc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Sc(a,b){Rc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(Sc,Rc);var Tc={2:"touch",3:"pen",4:"mouse"};
Sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Db){a:{try{zb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Tc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Sc.F.preventDefault.call(this)};
Sc.prototype.stopPropagation=function(){Sc.F.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sc.prototype.preventDefault=function(){Sc.F.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Uc="closure_listenable_"+(1E6*Math.random()|0);var Vc=0;function Wc(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.aa=e;this.key=++Vc;this.S=this.W=!1}
function Xc(a){a.S=!0;a.listener=null;a.h=null;a.src=null;a.aa=null}
;function Yc(a){this.src=a;this.listeners={};this.h=0}
Yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Zc(a,b,d,e);-1<g?(b=a[g],c||(b.W=!1)):(b=new Wc(b,this.src,f,!!d,e),b.W=c,a.push(b));return b};
Yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Zc(e,b,c,d);return-1<b?(Xc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function $c(a,b){var c=b.type;c in a.listeners&&Sa(a.listeners[c],b)&&(Xc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.S&&f.listener==b&&f.capture==!!c&&f.aa==d)return e}return-1}
;var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if(d&&d.once)ed(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.ba(b,c,D(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=hd(a);h||(a[ad]=h=new Yc(a));c=h.add(b,c,d,g,f);if(!c.h){d=id();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Qc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");cd++}}
function id(){function a(c){return b.call(a.src,a.listener,c)}
var b=kd;return a}
function ed(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.i.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=fd(c),a&&a[Uc])?a.i.remove(String(b),c,d,e):a&&(a=hd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Zc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if("number"!==typeof a&&a&&!a.S){var b=a.src;if(b&&b[Uc])$c(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);cd--;(c=hd(b))?($c(c,a),0==c.h&&(c.src=null,b[ad]=null)):Xc(a)}}}
function jd(a){return a in bd?bd[a]:bd[a]="on"+a}
function kd(a,b){if(a.S)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.aa||a.src;a.W&&md(a);a=c.call(d,b)}return a}
function hd(a){a=a[ad];return a instanceof Yc?a:null}
var nd="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if("function"===typeof a)return a;a[nd]||(a[nd]=function(b){return a.handleEvent(b)});
return a[nd]}
;function L(){Jc.call(this);this.i=new Yc(this);this.da=this;this.M=null}
F(L,Jc);L.prototype[Uc]=!0;L.prototype.addEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
L.prototype.removeEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
function M(a,b){var c=a.M;if(c){var d=[];for(var e=1;c;c=c.M)d.push(c),++e}a=a.da;c=b.type||b;"string"===typeof b?b=new Rc(b,a):b instanceof Rc?b.target=b.target||a:(e=b,b=new Rc(c,a),bb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=od(g,c,!0,b)&&e}b.j||(g=b.h=a,e=od(g,c,!0,b)&&e,b.j||(e=od(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=od(g,c,!1,b)&&e}
L.prototype.R=function(){L.F.R.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Xc(d[e]);delete a.listeners[c];a.h--}}this.M=null};
L.prototype.ba=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function od(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.S&&g.capture==c){var h=g.listener,k=g.aa||g.src;g.W&&$c(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function pd(a){if(a instanceof qd||a instanceof rd||a instanceof sd)return a;if("function"==typeof a.next)return new qd(function(){return td(a)});
if("function"==typeof a[Symbol.iterator])return new qd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.G)return new qd(function(){return td(a.G())});
throw Error("Not an iterator or iterable.");}
function td(a){if(!(a instanceof Lc))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Kc)throw d;b=!0}return{value:c,done:b}}}}
function qd(a){this.h=a}
qd.prototype.G=function(){return new rd(this.h())};
qd.prototype[Symbol.iterator]=function(){return new sd(this.h())};
qd.prototype.i=function(){return new sd(this.h())};
function rd(a){this.h=a}
v(rd,Lc);rd.prototype.next=function(){var a=this.h.next();if(a.done)throw Kc;return a.value};
rd.prototype[Symbol.iterator]=function(){return new sd(this.h)};
rd.prototype.i=function(){return new sd(this.h)};
function sd(a){qd.call(this,function(){return a});
this.j=a}
v(sd,qd);sd.prototype.next=function(){return this.j.next()};var ud=A.JSON.stringify;function Q(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Da)try{var b=this;a.call(void 0,function(c){vd(b,2,c)},function(c){vd(b,3,c)})}catch(c){vd(this,3,c)}}
function wd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
wd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var xd=new oc(function(){return new wd},function(a){a.reset()});
function yd(a,b,c){var d=xd.get();d.i=a;d.onRejected=b;d.context=c;return d}
Q.prototype.then=function(a,b,c){return zd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Q.prototype.$goog_Thenable=!0;Q.prototype.cancel=function(a){if(0==this.h){var b=new Ad(a);wc(function(){Bd(this,b)},this)}};
function Bd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Bd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Cd(c),Dd(c,e,3,b)))}a.j=null}else vd(a,3,b)}
function Ed(a,b){a.i||2!=a.h&&3!=a.h||Fd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zd(a,b,c,d){var e=yd(null,null,null);e.h=new Q(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ad?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ed(a,e);return e.h}
Q.prototype.B=function(a){this.h=0;vd(this,2,a)};
Q.prototype.M=function(a){this.h=0;vd(this,3,a)};
function vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.M;if(d instanceof Q){Ed(d,yd(e||Da,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Gd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.h=b,a.j=null,Fd(a),3!=b||c instanceof Ad||Hd(a,c))}}
function Gd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fd(a){a.s||(a.s=!0,wc(a.v,a))}
function Cd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Q.prototype.v=function(){for(var a;a=Cd(this);)Dd(this,a,this.h,this.o);this.s=!1};
function Dd(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Id(b,c,d);else try{b.j?b.i.call(b.context):Id(b,c,d)}catch(e){Jd.call(null,e)}pc(xd,b)}
function Id(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Hd(a,b){a.m=!0;wc(function(){a.m&&Jd.call(null,b)})}
var Jd=sc;function Ad(a){Ma.call(this,a)}
F(Ad,Ma);Ad.prototype.name="cancel";function R(a){Jc.call(this);this.o=1;this.j=[];this.l=0;this.h=[];this.i={};this.v=!!a}
F(R,Jc);q=R.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function Kd(a,b,c){var d=Ld;if(a=d.i[a]){var e=d.h;(a=Ra(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.T(a)}}
q.T=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=Da):(c&&Sa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.O=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Md(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.T(c)}}return 0!=e}return!1};
function Md(a,b,c){wc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(H(b,this.T,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.R=function(){R.F.R.call(this);this.clear();this.j.length=0};function Nd(a){this.h=a}
Nd.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,ud(b))};
Nd.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Nd.prototype.remove=function(a){this.h.remove(a)};function Od(a){this.h=a}
F(Od,Nd);function Pd(a){this.data=a}
function Qd(a){return void 0===a||a instanceof Pd?a:new Pd(a)}
Od.prototype.set=function(a,b){Od.F.set.call(this,a,Qd(b))};
Od.prototype.i=function(a){a=Od.F.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Od.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rd(a){this.h=a}
F(Rd,Od);Rd.prototype.set=function(a,b,c){if(b=Qd(b)){if(c){if(c<Date.now()){Rd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Rd.F.set.call(this,a,b)};
Rd.prototype.i=function(a){var b=Rd.F.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Rd.prototype.remove.call(this,a);else return b}};function Sd(){}
;function Td(){}
F(Td,Sd);Td.prototype[Symbol.iterator]=function(){return pd(this.G(!0)).i()};
Td.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ud(a){this.h=a}
F(Ud,Td);q=Ud.prototype;q.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.G=function(a){var b=0,c=this.h,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function Vd(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(Vd,Ud);function Wd(a,b){this.i=a;this.h=null;if(Bb&&!(9<=Number(Nb))){Xd||(Xd=new Mc);this.h=Xd.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xd.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(Wd,Td);var Yd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xd=null;function Zd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Yd[b]})}
q=Wd.prototype;q.isAvailable=function(){return!!this.h};
q.set=function(a,b){this.h.setAttribute(Zd(a),b);$d(this)};
q.get=function(a){a=this.h.getAttribute(Zd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Zd(a));$d(this)};
q.G=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$d(this)};
function $d(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ae(a,b){this.i=a;this.h=b+"::"}
F(ae,Td);ae.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ae.prototype.get=function(a){return this.i.get(this.h+a)};
ae.prototype.remove=function(a){this.i.remove(this.h+a)};
ae.prototype.G=function(a){var b=this.i.G(!0),c=this,d=new Lc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var be=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",be);function ce(a){var b=arguments;1<b.length?be[b[0]]=b[1]:1===b.length&&Object.assign(be,b[0])}
function S(a,b){return a in be?be[a]:b}
;var de=[];function ee(a){de.forEach(function(b){return b(a)})}
function fe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ge(b)}}:a}
function ge(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ce("ERRORS",b));ee(a)}
function he(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ce("ERRORS",b))}
;var ie=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++ie});var je={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ke(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in je||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
ke.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ke.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ke.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ya=A.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Ya);var le=A.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",le);
function me(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Xa(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ne(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Ya){var c=Ya[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?oe()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ya[b]}}))}
var oe=Oa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function pe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=me(a,b,c,d);if(!e){e=++le.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ke(h);if(!Vb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ke(h);
h.currentTarget=a;return c.call(a,h)};
g=fe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),oe()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ya[e]=[a,b,c,g,d]}}}
;function qe(a,b){"function"===typeof a&&(a=fe(a));return window.setTimeout(a,b)}
function re(a){"function"===typeof a&&(a=fe(a));return window.setInterval(a,250)}
;var se=/^[\w.]*$/,te={q:!0,search_query:!0};function ue(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ve(f[0]||""),h=ve(f[1]||"");g in c?Array.isArray(c[g])?Va(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(ue);k.args=[{key:l,value:f[1],query:a,method:we==m?"unchanged":m}];te.hasOwnProperty(l)||he(k)}}return c}
var we=String(ue);function xe(a){var b=[];Wa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ye(a){"?"==a.charAt(0)&&(a=a.substr(1));return ue(a,"&")}
function ze(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ye(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=vb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Ae(a){if(!b)var b=window.location.href;var c=a.match(qb)[1]||null,d=sb(a);c&&d?(a=a.match(qb),b=b.match(qb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?sb(b)==d&&(Number(b.match(qb)[4]||null)||null)==(Number(a.match(qb)[4]||null)||null):!0;return a}
function ve(a){return a&&a.match(se)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function T(a){a=Be(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ce(a,b){a=Be(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Be(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;function De(){}
function Ee(a,b){return Fe(a,0,b)}
function Ge(a,b){return Fe(a,1,b)}
;function He(){De.apply(this,arguments)}
v(He,De);function Fe(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qe(a,c||0)}
function Ie(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
He.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};He.h||(He.h=new He);function Je(a){var b=Ke;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ac;e.flash="0";a:{try{var f=b.h.top.location.href}catch(wa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(wa){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(wa){}try{var m=h.outerWidth;var n=h.outerHeight}catch(wa){}try{var r=h.innerWidth;var p=h.innerHeight}catch(wa){}try{var x=h.screenLeft;var B=h.screenTop}catch(wa){}try{r=h.innerWidth,p=h.innerHeight}catch(wa){}try{var z=
h.screen.availWidth;var O=h.screen.availTop}catch(wa){}k=[x,B,k,l,z,O,m,n,r,p];l=b.h.top;try{var P=(l||window).document,G="CSS1Compat"==P.compatMode?P.documentElement:P.body;var N=(new Tb(G.clientWidth,G.clientHeight)).round()}catch(wa){N=new Tb(-12245933,-12245933)}P=N;N={};G=new mc;A.SVGElement&&A.document.createElementNS&&G.set(0);l=$b();l["allow-top-navigation-by-user-activation"]&&G.set(1);l["allow-popups-to-escape-sandbox"]&&G.set(2);A.crypto&&A.crypto.subtle&&G.set(3);A.TextDecoder&&A.TextEncoder&&
G.set(4);G=nc(G);N.bc=G;N.bih=P.height;N.biw=P.width;N.brdim=k.join();b=b.i;b=(N.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,N.wgl=!!K.WebGLRenderingContext,N);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ke=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return xe(Je(a))});var Le="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Me(){if(!Le)return null;var a=Le();return"open"in a?a:null}
;var Ne={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Oe="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Pe=!1;
function Qe(a,b){b=void 0===b?{}:b;var c=Ae(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in Ne){var f=S(Ne[e]);!f||!c&&sb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!sb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!sb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!sb(a))b["X-YouTube-Ad-Signals"]=xe(Je(void 0));return b}
function Re(a){var b=window.location.search,c=sb(a);T("debug_handle_relative_url_for_query_forward_killswitch")||c||!Ae(a)||(c=document.location.hostname);var d=rb(a.match(qb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ye(b),f={};H(Oe,function(g){e[g]&&(f[g]=e[g])});
return ze(a,f||{},!1)}
function Se(a,b){var c=b.format||"JSON";a=Te(a,b);var d=Ue(a,b),e=!1,f=Ve(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=We(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=qe(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function Te(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=ze(a,b||{},!0);return a}
function Ue(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||sb(a)&&!b.withCredentials&&sb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ye(e),bb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):vb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Pe&&a&&"POST"!=b.method&&(Pe=!0,ge(Error("AJAX request with postData should use POST")));return e}
function We(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,he(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Xe(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ye(g)})}d&&Ze(e);
return e}
function Ze(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===cb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:La,createScript:La,createScriptURL:La})}catch(g){A.console&&A.console.error(g.message)}cb=e}else cb=e}d=(e=cb)?e.createHTML(d):d;a[c]=new ob(d)}else Ze(a[b])}}
function Xe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ye(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ve(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&fe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Me();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=Re(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Qe(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var $e=Ob||Pb;var af={},bf=0;function cf(a,b,c){c=void 0===c?"":c;if(df(a,c))b&&b();else if(c=void 0===c?"":c,a)if(c)Ve(a,b,"POST",c,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ve(a,b,"GET","",void 0);else{b:{try{var d=new Na({url:a});if(d.j&&d.i||d.l){var e=rb(a.match(qb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==xb(a,"ri"));break b}}catch(g){}f=!1}f?df(a)?(b&&b(),f=!0):f=!1:f=!1;f||ef(a,b)}}
function df(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ef(a,b){var c=new Image,d=""+bf++;af[d]=c;c.onload=c.onerror=function(){b&&af[d]&&b();delete af[d]};
c.src=a}
;var ff=A.ytPubsubPubsubInstance||new R,gf=A.ytPubsubPubsubSubscribedKeys||{},hf=A.ytPubsubPubsubTopicToKeys||{},jf=A.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.T;R.prototype.publish=R.prototype.O;R.prototype.clear=R.prototype.clear;E("ytPubsubPubsubInstance",ff);E("ytPubsubPubsubTopicToKeys",hf);E("ytPubsubPubsubIsSynchronous",jf);E("ytPubsubPubsubSubscribedKeys",gf);var kf=window,U=kf.ytcsi&&kf.ytcsi.now?kf.ytcsi.now:kf.performance&&kf.performance.timing&&kf.performance.now&&kf.performance.timing.navigationStart?function(){return kf.performance.timing.navigationStart+kf.performance.now()}:function(){return(new Date).getTime()};var lf=Ce("initial_gel_batch_timeout",2E3),mf=Math.pow(2,16)-1,nf=null,of=0,pf=void 0,qf=0,rf=0,sf=0,tf=!0,uf=A.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",uf);var vf=A.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",vf);
function wf(a,b){if("log_event"===a.endpoint){var c="";a.Y?c="visitorOnlyApprovedKey":a.H&&(vf[a.H.token]=xf(a.H),c=a.H.token);var d=uf.get(c)||[];uf.set(c,d);d.push(a.payload);b&&(pf=new b);a=Ce("tvhtml5_logging_max_batch")||Ce("web_logging_max_batch")||100;b=U();d.length>=a?yf({writeThenSend:!0}):10<=b-sf&&(zf(),sf=b)}}
function Af(a,b){if("log_event"===a.endpoint){var c="";a.Y?c="visitorOnlyApprovedKey":a.H&&(vf[a.H.token]=xf(a.H),c=a.H.token);var d=new Map;d.set(c,[a.payload]);b&&(pf=new b);return new Q(function(e){pf&&pf.isReady()?Bf(d,e,{bypassNetworkless:!0}):e()})}}
function yf(a){a=void 0===a?{}:a;new Q(function(b){window.clearTimeout(qf);window.clearTimeout(rf);rf=0;pf&&pf.isReady()?(Bf(uf,b,a),uf.clear()):(zf(),b())})}
function zf(){T("web_gel_timeout_cap")&&!rf&&(rf=qe(function(){yf({writeThenSend:!0})},6E4));
window.clearTimeout(qf);var a=S("LOGGING_BATCH_TIMEOUT",Ce("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&tf&&(a=lf);qf=qe(function(){yf({writeThenSend:!0})},a)}
function Bf(a,b,c){var d=pf;c=void 0===c?{}:c;var e=Math.round(U()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=$a({context:Cf(d.h||Df())});h.events=k;(k=vf[g])&&Ef(h,g,k);delete vf[g];g="visitorOnlyApprovedKey"===g;Ff(h,e,g);T("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&cf("/generate_204");Gf(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();of=Math.round(U()-e)},
onError:function(){f--;f||b()},
na:c,Y:g});tf=!1}}
function Ff(a,b,c){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID",void 0))&&((c=S("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*mf/2)),c++,c>mf&&(c=1),ce("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,nf&&of&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:nf,roundtripMs:String(of)}),nf=b,of=0)}
function Ef(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Hf=A.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Hf);function If(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Jf={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kf={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Lf(){var a=A.navigator;return a?a.connection:void 0}
;function Mf(){return"INNERTUBE_API_KEY"in be&&"INNERTUBE_API_VERSION"in be}
function Df(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),Aa:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ba:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Da:S("INNERTUBE_CONTEXT_HL",void 0),Ca:S("INNERTUBE_CONTEXT_GL",void 0),Ea:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ga:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Fa:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Cf(a){var b={client:{hl:a.Da,gl:a.Ca,clientName:a.Ba,clientVersion:a.innertubeContextClientVersion,configInfo:a.Aa}},c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=S("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=S("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!T("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=If()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!T("music_web_display_mode_killswitch")){var h;b.client.ma=null!=(h=b.client.ma)?h:{};b.client.ma.webDisplayMode=If()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a:{if(h=Lf()){a=Jf[h.type||"unknown"]||"CONN_UNKNOWN";h=Jf[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=Lf(),a=null!==a&&void 0!==a&&a.effectiveType?Kf.hasOwnProperty(a.effectiveType)?Kf[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(ye(S("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Nf(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Xa||S("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Wa:b=lc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
;function Of(a){a=Object.assign({},a);delete a.Authorization;var b=lc();if(b){var c=new Dc;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ea(b);void 0===c&&(c=0);if(!Sb){Sb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Rb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Sb[k]&&(Sb[k]=h)}}}c=Rb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Pf(a){var b=new Vd;(b=b.isAvailable()?a?new ae(b,a):b:null)||(a=new Wd(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Rd(a):null;this.i=document.domain||window.location.hostname}
Pf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ud(b))}catch(f){return}else e=escape(b);b=this.i;ic.set(""+a,e,{ea:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Pf.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ic.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Pf.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ic.remove(""+a,"/",void 0===b?"youtube.com":b)};var Qf;function Rf(){Qf||(Qf=new Pf("yt.innertube"));return Qf}
function Sf(a,b,c,d){if(d)return null;d=Rf().get("nextId",!0)||1;var e=Rf().get("requests",!0)||{};e[d]={method:a,request:b,authState:Of(c),requestTime:Math.round(U())};Rf().set("nextId",d+1,86400,!0);Rf().set("requests",e,86400,!0);return d}
function Tf(a){var b=Rf().get("requests",!0)||{};delete b[a];Rf().set("requests",b,86400,!0)}
function Uf(a){var b=Rf().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Of(Nf(!1));Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Gf(a,d.method,e,{}));delete b[c]}}Rf().set("requests",b,86400,!0)}}
;var Vf=C("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.T;R.prototype.publish=R.prototype.O;R.prototype.clear=R.prototype.clear;E("ytPubsub2Pubsub2Instance",Vf);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Wf(){}
;var Xf=function(){var a;return function(){a||(a=new Pf("ytidb"));return a}}();
function Yf(){var a;return null===(a=Xf())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Zf(a){this.h=void 0===a?!1:a;(a=Yf())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;T("ytidb_analyze_is_supported")&&(null===(c=Xf())||void 0===c?0:c.h)&&(c={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(b=Xf())||void 0===b?void 0:b.set("LAST_RESULT_ENTRY_KEY",c,2592E3,!0))}
Zf.prototype.isSupported=function(){return this.h};var $f=[],ag=!1;function bg(a){ag||($f.push({type:"ERROR",payload:a}),10<$f.length&&$f.shift())}
function cg(a,b){ag||($f.push({type:"EVENT",eventType:a,payload:b}),10<$f.length&&$f.shift())}
;function dg(){if(void 0!==S("DATASYNC_ID",void 0))return S("DATASYNC_ID",void 0);throw Error("Datasync ID not set");}
;function eg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
v(eg,Error);function fg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function gg(a){return a.substr(0,a.indexOf(":"))||a}
;var hg={},ig=(hg.AUTH_INVALID="No user identifier specified.",hg.EXPLICIT_ABORT="Transaction was explicitly aborted.",hg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",hg.MISSING_OBJECT_STORE="Object store not created.",hg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",hg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",hg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",hg.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",hg),jg={},kg=(jg.AUTH_INVALID="ERROR",jg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",jg.EXPLICIT_ABORT="IGNORED",jg.IDB_NOT_SUPPORTED="ERROR",jg.MISSING_OBJECT_STORE="ERROR",jg.QUOTA_EXCEEDED="WARNING",jg.QUOTA_MAYBE_EXCEEDED="WARNING",jg.UNKNOWN_ABORT="WARNING",jg),lg={},mg=(lg.AUTH_INVALID=!1,lg.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,lg.EXPLICIT_ABORT=!1,lg.IDB_NOT_SUPPORTED=!1,lg.MISSING_OBJECT_STORE=!1,lg.QUOTA_EXCEEDED=!1,lg.QUOTA_MAYBE_EXCEEDED=!0,
lg.UNKNOWN_ABORT=!0,lg);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ig[a]:c;d=void 0===d?kg[a]:d;e=void 0===e?mg[a]:e;eg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,V.prototype)}
v(V,eg);function ng(a){V.call(this,"MISSING_OBJECT_STORE",{bb:a},ig.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,ng.prototype)}
v(ng,V);var og=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function pg(a,b,c){b=gg(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof V)return d;if("QuotaExceededError"===d.name)return new V("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Qb&&"UnknownError"===d.name)return new V("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&og.some(function(e){return d.message.includes(e)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new V("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",cb:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function qg(a){if(!a)throw Error();throw a;}
function rg(a){return a}
function W(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
W.all=function(a){return new W(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={N:0};f.N<a.length;f={N:f.N},++f.N)sg(W.resolve(a[f.N]).then(function(g){return function(h){d[g.N]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
W.resolve=function(a){return new W(function(b,c){a instanceof W?a.then(b,c):b(a)})};
W.reject=function(a){return new W(function(b,c){c(a)})};
W.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:rg,e=null!==b&&void 0!==b?b:qg;return new W(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){tg(c,c,d,f,g)}),c.onRejected.push(function(){ug(c,c,e,f,g)})):"FULFILLED"===c.state.status?tg(c,c,d,f,g):"REJECTED"===c.state.status&&ug(c,c,e,f,g)})};
function sg(a,b){a.then(void 0,b)}
function tg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ug(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?vg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function wg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function xg(a){return new Promise(function(b,c){wg(a,b,c)})}
function X(a){return new W(function(b,c){wg(a,b,c)})}
;function yg(a,b){return new W(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function zg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
q=zg.prototype;q.add=function(a,b,c){return Ag(this,[a],{mode:"readwrite",C:!0},function(d){return Bg(d,a).add(b,c)})};
q.clear=function(a){return Ag(this,[a],{mode:"readwrite",C:!0},function(b){return Bg(b,a).clear()})};
q.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
q.count=function(a,b){return Ag(this,[a],{mode:"readonly",C:!0},function(c){return Bg(c,a).count(b)})};
function Cg(a,b,c){a=a.h.createObjectStore(b,c);return new Dg(a)}
q.delete=function(a,b){return Ag(this,[a],{mode:"readwrite",C:!0},function(c){return Bg(c,a).delete(b)})};
q.get=function(a,b){return Ag(this,[a],{mode:"readonly",C:!0},function(c){return Bg(c,a).get(b)})};
function Eg(a,b){return Ag(a,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(c){c=Bg(c,"LogsRequestsStore");return X(c.h.put(b,void 0))})}
function Ag(a,b,c,d){return J(a,function f(){var g=this,h,k,l,m,n,r,p,x,B,z,O,P;return y(f,function(G){switch(G.h){case 1:var N={mode:"readonly",C:!1};"string"===typeof c?N.mode=c:N=c;h=N;g.transactionCount++;k=h.C?Ce("ytidb_transaction_try_count",1):1;l=0;case 2:if(m){G.u(3);break}l++;n=Math.round(U());pa(G,4);r=g.h.transaction(b,h.mode);N=new Fg(r);N=Gg(N,d);return w(G,N,6);case 6:return p=G.i,x=Math.round(U()),Hg(g,n,x,l,void 0,b.join(),h),G.return(p);case 4:B=qa(G);z=Math.round(U());O=pg(B,g.h.name,
b.join());if((P=O instanceof V&&!O.h)||l>=k)Hg(g,n,z,l,O,b.join(),h),m=O;G.u(2);break;case 3:return G.return(Promise.reject(m))}})})}
function Hg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&cg("QUOTA_EXCEEDED",{dbName:gg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(cg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Ig(a,!1,d,f,b),bg(e)):Ig(a,!0,d,f,b)}
function Ig(a,b,c,d,e){cg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Dg(a){this.h=a}
q=Dg.prototype;q.add=function(a,b){return X(this.h.add(a,b))};
q.clear=function(){return X(this.h.clear()).then(function(){})};
q.count=function(a){return X(this.h.count(a))};
function Jg(a,b){return Kg(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Jg(this,a):X(this.h.delete(a))};
q.get=function(a){return X(this.h.get(a))};
q.index=function(a){return new Lg(this.h.index(a))};
q.getName=function(){return this.h.name};
function Kg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Mg(a).then(function(d){return yg(d,c)})}
function Fg(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Gg(a,b){var c=new Promise(function(d,e){sg(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Fg.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new V("EXPLICIT_ABORT");};
Fg.prototype.commit=function(){if(!T("ytidb_stop_transaction_commit")){var a=this.h;a.commit&&!this.aborted&&a.commit()}};
function Bg(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Dg(b),a.i.set(b,c));return c}
function Lg(a){this.h=a}
Lg.prototype.count=function(a){return X(this.h.count(a))};
Lg.prototype.delete=function(a){return Ng(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Lg.prototype.get=function(a){return X(this.h.get(a))};
Lg.prototype.getKey=function(a){return X(this.h.getKey(a))};
function Ng(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Mg(a).then(function(d){return yg(d,c)})}
function Og(a,b){this.request=a;this.cursor=b}
function Mg(a){return X(a).then(function(b){return null===b?null:new Og(a,b)})}
q=Og.prototype;q.advance=function(a){this.cursor.advance(a);return Mg(this.request)};
q.continue=function(a){this.cursor.continue(a);return Mg(this.request)};
q.delete=function(){return X(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.update=function(a){return X(this.cursor.update(a))};function Pg(a,b,c){return J(this,function e(){var f,g,h,k,l,m,n,r,p,x;return y(e,function(B){if(1==B.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.Ja,m=g.upgrade,n=g.closed,p=function(){r||(r=new zg(f.result,{closed:n}));return r},f.addEventListener("upgradeneeded",function(z){if(null===z.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");z.dataLoss&&"none"!==z.dataLoss&&cg("IDB_DATA_CORRUPTED",{reason:z.dataLossMessage||"unknown reason",dbName:gg(a)});var O=p(),P=new Fg(f.transaction);m&&m(O,z.oldVersion,z.newVersion,P)}),h&&f.addEventListener("blocked",function(){h()}),w(B,xg(f),2);
x=B.i;k&&x.addEventListener("versionchange",function(){k(p())});
x.addEventListener("close",function(){cg("IDB_UNEXPECTEDLY_CLOSED",{dbName:gg(a),dbVersion:x.version});l&&l()});
return B.return(p())})})}
function Qg(a,b,c){c=void 0===c?{}:c;return Pg(a,b,c)}
function Rg(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f,g;return y(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,xg(e),0)})})}
;function Sg(a,b){this.name=a;this.options=b;this.j=!1}
Sg.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Qg(a,b,c)};
Sg.prototype.delete=function(a){a=void 0===a?{}:a;return Rg(this.name,a)};
Sg.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,Ja:c,upgrade:this.options.upgrade},e=function(){return J(a,function g(){var h=this,k,l,m;return y(g,function(n){switch(n.h){case 1:return pa(n,2),w(n,h.i(h.name,h.options.version,d),4);case 4:k=n.i;a:{var r=u(Object.keys(h.options.oa));for(var p=r.next();!p.done;p=r.next())if(p=p.value,!k.h.objectStoreNames.contains(p)){r=p;break a}r=void 0}l=r;if(void 0===l){n.u(5);break}if(h.j){n.u(6);break}h.j=!0;return w(n,h.delete(),7);case 7:return n.return(e());case 6:throw new ng(l);case 5:return n.return(k);
case 2:m=qa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Tg=new Sg("YtIdbMeta",{oa:{databases:!0},upgrade:function(a,b){1>b&&Cg(a,"databases",{keyPath:"actualName"})}});
function Ug(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,Tg.open(),2);d=e.i;return e.return(Ag(d,["databases"],{C:!0,mode:"readwrite"},function(f){var g=Bg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.h.put(a,void 0)).then(function(){})})}))})})}
function Vg(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,Tg.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
;var Wg;
function Xg(){return J(this,function b(){var c,d,e;return y(b,function(f){switch(f.h){case 1:if(T("ytidb_is_supported_cache_success_result")&&(c=Yf(),null===c||void 0===c?0:c.hasSucceededOnce))return f.return(new Zf(!0));var g;if(g=$e)g=/WebKit\/([0-9]+)/.exec(lb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(lb),g=!(g&&602<=parseInt(g[1],10)));if(g||Cb)return f.return(new Zf(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new Zf(!1))}catch(h){return f.return(new Zf(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new Zf(!1));pa(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,Ug(e),4);case 4:return w(f,Vg("yt-idb-test-do-not-use"),5);case 5:return f.return(new Zf(!0));case 2:return qa(f),f.return(new Zf(!1))}})})}
function Yg(){if(void 0!==Wg)return Wg;ag=!0;return Wg=Xg().then(function(a){ag=!1;return a.isSupported()})}
;function Zg(a){try{dg();var b=!0}catch(c){b=!1}if(!b)throw a=new V("AUTH_INVALID"),bg(a),a;b=dg();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $g(a,b,c,d){var e;return J(this,function g(){var h,k;return y(g,function(l){switch(l.h){case 1:return w(l,ah({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return fg(a),h=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zg(a),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,pa(l,3),w(l,Ug(h),5);case 5:return w(l,Qg(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=qa(l),pa(l,7),w(l,Vg(h.actualName),9);case 9:l.h=8;l.s=0;break;case 7:qa(l);
case 8:throw k;}})})}
function ah(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,Yg(),2);if(!e.i)throw d=new V("IDB_NOT_SUPPORTED",{context:a}),bg(d),d;e.h=0})})}
function bh(a,b,c){c=void 0===c?{}:c;return $g(a,b,!1,c)}
function ch(a,b,c){c=void 0===c?{}:c;return $g(a,b,!0,c)}
function dh(a,b){b=void 0===b?{}:b;return J(this,function d(){var e;return y(d,function(f){if(1==f.h)return w(f,Yg(),2);if(3!=f.h){if(!f.i)return f.return();fg(a);e=Zg(a);return w(f,Rg(e.actualName,b),3)}return w(f,Vg(e.actualName),0)})})}
function eh(a,b){b=void 0===b?{}:b;return J(this,function d(){return y(d,function(e){if(1==e.h)return w(e,Yg(),2);if(3!=e.h){if(!e.i)return e.return();fg(a);return w(e,Rg(a,b),3)}return w(e,Vg(a),0)})})}
;function fh(a,b){Sg.call(this,a,b);this.options=b;fg(a)}
v(fh,Sg);fh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.ra?ch:bh)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
fh.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.ra?eh:dh)(this.name,a)};
function gh(a){var b;return function(){b||(b=new fh("LogsDatabaseV2",a));return b}}
;function hh(){W.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(hh,W);hh.reject=W.reject;hh.resolve=W.resolve;hh.all=W.all;var ih;function jh(){if(!ih){var a={};ih=gh({oa:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),ra:!T("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Cg(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Cg(b,"sapisid"));3>c&&Cg(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return ih().open()}
function kh(a){return J(this,function c(){var d,e,f,g,h;return y(c,function(k){switch(k.h){case 1:return d={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,lh(),2);case 2:return e=k.i,w(k,jh(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Eg(f,g),4);case 4:return h=k.i,d.Ka=U(),mh(d),k.return(h)}})})}
function nh(){return J(this,function b(){var c,d,e,f,g,h,k,l;return y(b,function(m){switch(m.h){case 1:return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,lh(),2);case 2:return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=["NEW",d,e,0],g=["NEW",d,e,U()],h=IDBKeyRange.bound(f,g),w(m,jh(),3);case 3:return k=m.i,l=void 0,w(m,Ag(k,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(n){return Ng(Bg(n,"LogsRequestsStore").index("newRequest"),{query:h,direction:"prev"},function(r){r.cursor.value&&
(l=r.cursor.value,l.status="QUEUED",r.update(l))})}),4);
case 4:return c.Ka=U(),mh(c),m.return(l)}})})}
function oh(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,jh(),2);d=e.i;return e.return(Ag(d,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(f){var g=Bg(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",X(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function ph(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,jh(),2);d=e.i;return e.return(Ag(d,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(f){var g=Bg(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,X(g.h.put(h,void 0)).then(function(){return h})):hh.resolve(void 0)})}))})})}
function qh(a){return J(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,jh(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function lh(){return J(this,function b(){var c;return y(b,function(d){if(1==d.h){Wf.h||(Wf.h=new Wf);var e={};var f=lc([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(S("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in be||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in be&&(e["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));e instanceof Q||(f=new Q(Da),vd(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Of(c);var g=
new Dc;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function mh(a){var b=Ce("nwl_latency_sampling_rate",.01);!(.02<b)&&Math.random()<=b&&(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}
;var rh;function sh(){rh||(rh=new Pf("yt.offline"));return rh}
function th(a){if(T("offline_error_handling")){var b=sh().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);sh().set("errors",b,2592E3,!0)}}
function uh(){if(T("offline_error_handling")){var a=sh().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new eg(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;ge(c)}sh().set("errors",{},2592E3,!0)}}}
;var vh=Ce("network_polling_interval",3E4);function Y(){L.call(this);this.V=0;this.o=this.j=!1;this.v=0;this.l=this.P=!1;this.h=this.Z();this.l=T("validate_network_status");wh(this);xh(this)}
v(Y,L);function yh(){if(!Y.h){var a=C("yt.networkStatusManager.instance")||new Y;E("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
q=Y.prototype;q.J=function(){this.l||this.h===this.Z()||he(new eg("NetworkStatusManager isOnline does not match window status"));return this.h};
q.Ia=function(a){this.j=!0;if(void 0===a?0:a)this.V||zh(this)};
q.Z=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.ya=function(){this.P=!0};
q.ba=function(a,b){return L.prototype.ba.call(this,a,b)};
function xh(a){window.addEventListener("online",function(){return J(a,function c(){var d=this;return y(c,function(e){if(1==e.h)return d.l?w(e,d.L(),2):(d.h=!0,d.j&&M(d,"ytnetworkstatus-online"),e.u(2));Ah(d);d.P&&uh();e.h=0})})})}
function wh(a){window.addEventListener("offline",function(){return J(a,function c(){var d=this;return y(c,function(e){if(1==e.h)return d.l?w(e,d.L(),2):(d.h=!1,d.j&&M(d,"ytnetworkstatus-offline"),e.u(2));Ah(d);e.h=0})})})}
function zh(a){a.V=Ee(function(){return J(a,function c(){var d=this;return y(c,function(e){if(1==e.h){if(T("trigger_nsm_validation_checks_with_nwl")&&!d.h)return w(e,d.L(),3);if(d.Z()){if(!1!==d.h)return e.u(3);d.o=!0;d.v=U();return d.j?d.l?w(e,d.L(),11):(d.h=!0,M(d,"ytnetworkstatus-online"),e.u(11)):e.u(11)}if(!0!==d.h)return e.u(3);d.o=!0;d.v=U();return d.j?d.l?w(e,d.L(),3):(d.h=!1,M(d,"ytnetworkstatus-offline"),e.u(3)):e.u(3)}if(3!=e.h)return d.P&&uh(),e.u(3);zh(d);e.h=0})})},vh)}
function Ah(a){a.o&&(he(new eg("NetworkStatusManager state did not match poll",U()-a.v)),a.o=!1)}
q.L=function(a){var b=this;return this.B?this.B:this.B=new Promise(function(c){return J(b,function e(){var f,g,h,k=this;return y(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,pa(l,2,3),f&&(k.U=Ge(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ra(l);k.B=void 0;k.U&&Ie(k.U);h!==k.h&&(k.h=h,k.h&&k.j?M(k,"ytnetworkstatus-online"):k.j&&M(k,"ytnetworkstatus-offline"));c(h);sa(l);break;case 2:qa(l),h=!1,l.u(3)}})})})};
Y.prototype.sendNetworkCheckRequest=Y.prototype.L;Y.prototype.listen=Y.prototype.ba;Y.prototype.enableErrorFlushing=Y.prototype.ya;Y.prototype.getWindowStatus=Y.prototype.Z;Y.prototype.monitorNetworkStatusChange=Y.prototype.Ia;Y.prototype.isNetworkAvailable=Y.prototype.J;Y.getInstance=yh;function Bh(a){a=void 0===a?{}:a;L.call(this);var b=this;this.j=this.o=0;this.h=yh();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.h);c&&c(a.za);a.Ha&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.h))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.h))a.ca?(this.ca=a.ca,c("ytnetworkstatus-online",function(){Ch(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Ch(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){M(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){M(b,"publicytnetworkstatus-offline")}))}
v(Bh,L);Bh.prototype.J=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.h);return a?a():!0};
Bh.prototype.L=function(a){return J(this,function c(){var d=this,e;return y(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.h))?f.return(e(a)):f.return(!0)})})};
function Ch(a,b){a.ca?a.j?(Ie(a.o),a.o=Ge(function(){a.l!==b&&(M(a,b),a.l=b,a.j=U())},a.ca-(U()-a.j))):(M(a,b),a.l=b,a.j=U()):M(a,b)}
;var Dh=0,Eh=0,Fh,Gh=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,isIdbSupported:!1,potentialEsfErrorCounter:Eh};T("export_networkless_options")&&E("ytNetworklessLoggingInitializationOptions",Gh);function Hh(a,b){function c(d){var e=Ih().J();if(!Jh()||!d||e&&T("vss_networkless_bypass_write"))Kh(a,b);else{var f={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};kh(f).then(function(g){f.id=g;(Ih().J()||T("networkless_always_online"))&&Lh(f)}).catch(function(g){Lh(f);
Ih().J()?ge(g):th(g)})}}
b=void 0===b?{}:b;T("skip_is_supported_killswitch")?Yg().then(function(d){c(d)}):c(Mh())}
function Nh(a,b){function c(d){if(Jh()&&d){var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?qh(e.id):f=!0;g(h,k)};
Kh(e.url,e.options);kh(e).then(function(h){e.id=h;f&&qh(e.id)}).catch(function(h){Ih().J()?ge(h):th(h)})}else Kh(a,b)}
b=void 0===b?{}:b;T("skip_is_supported_killswitch")?Yg().then(function(d){c(d)}):c(Mh())}
function Oh(){var a=this;Dh||(Dh=Ge(function(){return J(a,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,nh(),2);if(3!=e.h)return d=e.i,d?w(e,Lh(d),3):(Ie(Dh),Dh=0,e.return());Dh=0;Oh();e.h=0})})},100))}
function Lh(a){return J(this,function c(){var d;return y(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.u(2);break}return w(e,oh(a.id),3);case 3:(d=e.i)?a=d:he(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.u(4);break}he(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return w(e,qh(a.id),5);case 5:return e.return();case 4:f=a=Ph(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:
f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(U());(a=f)&&Kh(a.url,a.options);e.h=0}})})}
function Ph(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return J(b,function h(){return y(h,function(k){switch(k.h){case 1:if(!(T("trigger_nsm_validation_checks_with_nwl")&&(C("ytNetworklessLoggingInitializationOptions")?Gh.potentialEsfErrorCounter:Eh)<=Ce("potential_esf_error_limit",10))){k.u(2);break}return w(k,Ih().L(),3);case 3:if(Ih().J())C("ytNetworklessLoggingInitializationOptions")&&Gh.potentialEsfErrorCounter++,Eh++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.u(4);break}return 1>
a.sendCount?w(k,ph(a.id),8):w(k,qh(a.id),4);case 8:Ge(function(){Ih().J()&&Oh()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return J(b,function h(){return y(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.u(2):w(k,qh(a.id),2);d(e,f);k.h=0})})};
return a}
function Ih(){Fh||(Fh=new Bh({Ha:!0,za:T("trigger_nsm_validation_checks_with_nwl")}));return Fh}
function Kh(a,b){if(T("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Se(a,b):cf(a,void 0,b.postBody)}else Se(a,b)}
function Jh(){return C("ytNetworklessLoggingInitializationOptions")?Gh.isNwlInitialized:!1}
function Mh(){return C("ytNetworklessLoggingInitializationOptions")?Gh.isIdbSupported:!1}
;function Qh(a){var b=this;this.h=null;a?this.h=a:Mf()&&(this.h=Df());Ee(function(){Uf(b)},5E3)}
Qh.prototype.isReady=function(){!this.h&&Mf()&&(this.h=Df());return!!this.h};
function Gf(a,b,c,d){function e(r){r=void 0===r?!1:r;var p;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(p=Sf(b,c,l,k)),p)){var x=g.onSuccess,B=g.onFetchSuccess;g.onSuccess=function(z,O){Tf(p);x(z,O)};
c.onFetchSuccess=function(z,O){Tf(p);B(z,O)}}try{r&&d.retry&&!d.na.bypassNetworkless?(g.method="POST",!d.na.writeThenSend&&T("nwl_send_fast_on_unload")?Nh(n,g):Hh(n,g)):(g.method="POST",g.postParams||(g.postParams={}),Se(n,g))}catch(z){if("InvalidAccessError"==z.name)p&&(Tf(p),p=0),he(Error("An extension is blocking network request."));
else throw z;}p&&Ee(function(){Uf(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&he(new eg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new eg("innertube xhrclient not ready",b,c,d);ge(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.Ea)&&(h=f);var k=a.h.Ga||!1,l=Nf(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var m={alt:"json"};a.h.Fa&&g.headers.Authorization||(m.key=a.h.innertubeApiKey);var n=ze(""+h+f,m||{},!0);Jh()?Yg().then(function(r){e(r)}):e(!1)}
;function Rh(a,b){var c=void 0===c?{}:c;var d=Qh;S("ytLoggingEventsDefaultDisabled",!1)&&Qh==Qh&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};T("log_sequence_info_on_gel_web")&&c.qa&&(a=e.context,b=c.qa,Hf[b]=b in Hf?Hf[b]+1:0,a.sequence={index:Hf[b],groupKey:b},c.Za&&delete Hf[c.qa]);(c.fb?Af:wf)({endpoint:"log_event",
payload:e,H:c.H,Y:c.Y},d)}
;var Sh=[{la:function(a){return"Cannot read property '"+a.key+"'"},
fa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{la:function(a){return"Cannot call '"+a.key+"'"},
fa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var Uh={K:[],I:[{va:Th,weight:500}]};function Th(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vh(){this.I=[];this.K=[]}
var Wh;function Xh(){if(!Wh){var a=Wh=new Vh;a.K.length=0;a.I.length=0;Uh.K&&a.K.push.apply(a.K,Uh.K);Uh.I&&a.I.push.apply(a.I,Uh.I)}return Wh}
;var Yh=new R;function Zh(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$h(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=$h(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=$h(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function $h(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ai(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bi(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Zh(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?bi(f+".ve",g,h,k):0;d+=f;d+=bi(e,a[e],b,c);if(500<d)break}}else c[b]=ci(a),d+=c[b].length;else c[b]=ci(a),d+=c[b].length;return d}
function bi(a,b,c,d){c+="."+a;a=ci(b);d[c]=a;return c.length+a.length}
function ci(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var di=new Set,ei=0,fi=0,gi=0,hi=[],ii=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var ji={};function ki(a){return ji[a]||(ji[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var li={},mi=[],Ld=new R,ni={};function oi(){for(var a=u(mi),b=a.next();!b.done;b=a.next())b=b.value,b()}
function pi(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[ki(b)]:a.getAttribute("data-"+b):null;return c}
function qi(a,b){for(var c=1;c<arguments.length;++c);Ld.O.apply(Ld,arguments)}
;function ri(a){this.j=this.h=!1;this.i=a||{};a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"===document.location.protocol||a&&0===a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}}
function Z(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function si(a,b,c){ti||(ti={},pe(window,"message",function(d){a:{if(d.origin===Z(a,"host")||d.origin===Z(a,"host").toString().replace(/^http:/,"https:")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}a.j=!0;a.h||0!==d.origin.indexOf("https:")||(a.h=!0);if(d=ti[e.id])d.o=!0,d.o&&(H(d.s,d.sendMessage,d),d.s.length=0),d.ga(e)}e=void 0}return e}));
ti[c]=b}
var ti=null;function ui(a,b,c){this.m=this.h=this.i=null;this.j=0;this.o=!1;this.s=[];this.l=null;this.B={};if(!a)throw Error("YouTube player element ID required.");this.id=Fa(this);this.v=c;this.setup(a,b)}
q=ui.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.ta=function(){return this.h};
q.ga=function(a){vi(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);wi(this,a);return this};
function xi(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.v===b[0]&&wi(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(li[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);ti&&(ti[this.id]=null);this.i=null;a=this.h;for(var c in Ya)Ya[c][0]==a&&ne(c);this.m=this.h=null};
q.ia=function(){return{}};
function yi(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.sendMessage(b):a.s.push(b)}
function vi(a,b,c){a.l.m||(c={target:a,data:c},a.l.O(b,c),qi(a.v+"."+b,c))}
function zi(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.i,"title"));(b=Z(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.ia();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&H(["debugjs","debugcss"],function(h){var k=xb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Z(a.i,"host")+("/embed/"+Z(a.i,"videoId"))+"?"+vb(g);return c}
q.pa=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Ai(a){si(a.i,a,a.id);a.j=re(a.pa.bind(a));pe(a.h,"load",function(){window.clearInterval(a.j);a.j=re(a.pa.bind(a))})}
q.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?tb(a.src):"https://www.youtube.com"),this.i=new ri(b),c||(b=zi(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Fa(this.h)),li[this.h.id]=this,window.postMessage){this.l=new R;Ai(this);b=Z(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in ni)ni.hasOwnProperty(e)&&
xi(this,e)}};
function wi(a,b){a.B[b]||(a.B[b]=!0,yi(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";a=ud(a);var b=this.i;var c=tb(this.h.src||"");b=0===c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(z){if(z.name&&"SyntaxError"===z.name){if(!(z.message&&0<z.message.indexOf("target origin ''"))){var d=void 0,e=z;d=void 0===d?{}:d;d.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&e.level&&(d=e.level);if(T("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=ei)){g=void 0;var k=f,l=Fc(e);f=l.message||
"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+": "+f)){var n=m.split("\n");n.shift();m=n.join("\n")}n=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=ai(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var x="params."+g,B=ci(p[g]);k[x]=B;r+=x.length+
B.length;if(500<r)break}}else k.params=ci(p)}if(hi.length)for(g=0;g<hi.length&&!(r=ai(hi[g],"params.context."+g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:n,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Xh();f=u(e.K);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.ab)){e=h.weight;
break a}e=u(e.I);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.va(g)){e=f.weight;break a}e=1}g.sampleWeight=e;e=g;g=u(Sh);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.fa[e.name])for(n=u(f.fa[e.name]),h=n.next();!h.done;h=n.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];n=l.groups;l={};for(m=0;m<n.length;m++)l[n[m]]=h[m+1],e.params["params.error."+n[m]]=h[m+1];e.message=f.la(l);break}e.params||(e.params={});g=Xh();e.params["params.errorServiceSignature"]=
"msg="+g.K.length+"&cb="+g.I.length;e.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!di.has(e.message)){"ERROR"===d?(Yh.O("handleError",e),T("record_app_crashed_web")&&0===gi&&1===e.sampleWeight&&(gi++,Rh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),fi++):"WARNING"===d&&Yh.O("handleWarning",
e);if(T("kevlar_gel_error_routing")){g=d;h=e;b:{f=u(ii);for(n=f.next();!n.done;n=f.next())if((l=lb)&&0<=l.toLowerCase().indexOf(n.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{n={stackTrace:h.stack};h.fileName&&(n.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(n.lineNumber=Number(f[0]),n.columnNumber=Number(f[1])):n.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",
message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");n={isObfuscated:!0,browserStackInfo:n};l={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(l.experimentIds=S("FEXP_EXPERIMENTS"));if(h=h.params)for(m=u(Object.keys(h)),k=m.next();!k.done;k=m.next())k=k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=S("SERVER_NAME",void 0);m=S("SERVER_VERSION",void 0);h&&m&&(l.kvPairs.push({key:"server.name",
value:h}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:n,logMessage:f}}f&&(Rh("clientError",f),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&yf())}if(!T("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:S("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&
(d.postParams.stack=f.stack);f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=S("SERVER_NAME",void 0);f=S("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}Se(S("ECATCHER_REPORT_HOST","")+"/error_204",d)}di.add(e.message);ei++}}}}}else throw z;}else console&&console.warn&&
console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Bi(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ci(a){return 0===a.search("get")||0===a.search("is")}
;function Di(a,b){ui.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.D={};this.playerInfo={}}
v(Di,ui);q=Di.prototype;q.ia=function(){var a=Z(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.ga=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.D[c]=a[c]);break;case "infoDelivery":Ei(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.D={},Fi(this,a.apiInterface),Ei(this,a));break;default:vi(this,b,a)}};
function Ei(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Fi(a,b){H(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Bi(c)?this[c]=function(){this.playerInfo={};
this.D={};yi(this,c,arguments);return this}:Ci(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){yi(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Z(this.i,"host")+("/embed/"+Z(this.i,"videoId")),b=Number(Z(this.i,"width")),c=Number(Z(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);kb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(eb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(fb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(gb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(hb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(ib,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(jb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.D.namespaces?a?this.D[a]?this.D[a].options||[]:[]:this.D.namespaces||[]:[]};
q.getOption=function(a,b){if(this.D.namespaces&&a&&b&&this.D[a])return this.D[a][b]};
function Gi(a){if("iframe"!==a.tagName.toLowerCase()){var b=pi(a,"videoid");b&&(b={videoId:b,width:pi(a,"width"),height:pi(a,"height")},new Di(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return li[a]});
E("YT.scan",oi);E("YT.subscribe",function(a,b,c){Ld.subscribe(a,b,c);ni[a]=!0;for(var d in li)li.hasOwnProperty(d)&&xi(li[d],a)});
E("YT.unsubscribe",function(a,b,c){Kd(a,b,c)});
E("YT.Player",Di);ui.prototype.destroy=ui.prototype.destroy;ui.prototype.setSize=ui.prototype.setSize;ui.prototype.getIframe=ui.prototype.ta;ui.prototype.addEventListener=ui.prototype.addEventListener;Di.prototype.getVideoEmbedCode=Di.prototype.getVideoEmbedCode;Di.prototype.getOptions=Di.prototype.getOptions;Di.prototype.getOption=Di.prototype.getOption;
mi.push(function(a){var b=a;b||(b=document);a=Ua(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Pa(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Ua(b);H(Ta(a,b),Gi)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||oi();var Hi=A.onYTReady;Hi&&Hi();var Ii=A.onYouTubeIframeAPIReady;Ii&&Ii();var Ji=A.onYouTubePlayerAPIReady;Ji&&Ji();}).call(this);
