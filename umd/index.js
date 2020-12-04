parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wKTd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.globalState=void 0,exports.globalState={currentFn:void 0};
},{}],"mxom":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./globalState"),e=function(){function e(){this.deps=new Set}return e.prototype.depend=function(){t.globalState.currentFn&&this.deps.add(t.globalState.currentFn)},e.prototype.notify=function(){this.deps.forEach(function(t){return t()})},e}();exports.default=e;
},{"./globalState":"wKTd"}],"epem":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeObjectReactive=void 0;var t=e(require("./dependency"));function r(e){var r=new t.default;return new Proxy(e,{get:function(e,t,n){return r.depend(),Reflect.get(e,t,n)},set:function(e,t,n,u){var i=Reflect.set(e,t,n,u);return r.notify(),i}})}exports.makeObjectReactive=r;
},{"./dependency":"mxom"}],"mIWh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createState=void 0;var e=require("./makeObjReactive");function t(t){return e.makeObjectReactive(t)}exports.createState=t;
},{"./makeObjReactive":"epem"}],"IFkd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeFuncReactive=void 0;var e=require("./globalState");function t(t){e.globalState.currentFn=t,t(),e.globalState.currentFn=void 0}exports.makeFuncReactive=t;
},{"./globalState":"wKTd"}],"v5qW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createComponent=void 0;var e=require("./makeFuncReactive");function t(t,n){e.makeFuncReactive(function(){document.querySelector(t).innerHTML=n()})}exports.createComponent=t;
},{"./makeFuncReactive":"IFkd"}],"ZkQd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.on=void 0;var e=[];function t(t){return{click:function(n){e.some(function(e){return e===n})||document.querySelector(t).addEventListener("click",n)},event:function(n,o){e.some(function(e){return e===o})||document.querySelector(t).addEventListener(n,o)}}}exports.on=t;
},{}],"ZQSk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useEffect=exports.clearEffect=void 0;var e=[];function t(){e=[]}function o(t){setTimeout(function(){e.some(function(e){return e===t})||(e.push(t),t())},0)}exports.clearEffect=t,exports.useEffect=o;
},{}],"N8lG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Router=void 0;var t=require("./createComponent"),e=require("./useEffect"),r=function(){function r(){this.routes=Object.create(null)}return r.prototype.route=function(t,e){for(;t.startsWith("/");)t=t.substring(1);this.routes[t]=e},r.getPath=function(){r.params={},e.clearEffect();for(var t=location.hash;t.startsWith("/")||t.startsWith("#");)t=t.substring(1);return t},r.prototype.match=function(e,o){if("function"!=typeof this.routes[e]){for(var n=Object.keys(this.routes),s=function(n){if(n.includes(":")){var s=e.split("/"),u=n.split("/"),a=[];if(u.forEach(function(t,e){t.startsWith(":")&&a.push(e)}),a.forEach(function(t){s[t]=u[t]}),s.join("/")===n){var c=e.split("/");return a.forEach(function(t){r.params[u[t].substring(1)]=c[t]}),t.createComponent(o,i.routes[n]),{value:void 0}}}if(n.endsWith("**")){var f=n.slice(0,-2);if(e.startsWith(f))return t.createComponent(o,i.routes[n]),{value:void 0}}},i=this,u=0,a=n;u<a.length;u++){var c=s(a[u]);if("object"==typeof c)return c.value}"function"!=typeof this.routes["*"]?t.createComponent(o,function(){return"404 Not Found"}):t.createComponent(o,this.routes["*"])}else t.createComponent(o,this.routes[e])},r.prototype.render=function(t){var e=this;window.addEventListener("hashchange",function(){e.match(r.getPath(),t)},!1),this.match(r.getPath(),t)},r.params=Object.create(null),r}();exports.Router=r;
},{"./createComponent":"v5qW","./useEffect":"ZQSk"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./state"),r=require("./createComponent"),t=require("./mountHandler"),u=require("./useEffect"),o=require("./router"),a={useState:e.createState,render:r.createComponent,useEffect:u.useEffect,on:t.on,Router:o.Router};exports.default=a;
},{"./state":"mIWh","./createComponent":"v5qW","./mountHandler":"ZkQd","./useEffect":"ZQSk","./router":"N8lG"}]},{},["QCba"], "ReOdd")