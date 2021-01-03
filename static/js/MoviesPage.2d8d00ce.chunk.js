(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{114:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return x}));var n=r(77),o=r(65),a=r(1),i=r(0),c=r(3),u=r(20),s=(r(25),r(90)),f=r.n(s);var l=function(t){var e=t.onSubmit,r=Object(i.useState)(""),n=Object(o.a)(r,2),c=n[0],s=n[1];return Object(a.jsx)("header",{className:f.a.header,children:Object(a.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault(),""!==c.trim()?(e(c),s("")):u.b.error("Enter a value to search")},children:[Object(a.jsx)("button",{type:"submit",className:f.a.btn,children:Object(a.jsx)("span",{className:f.a.label,children:"Search"})}),Object(a.jsx)("input",{value:c,onChange:function(t){return s(t.currentTarget.value.toLowerCase())},className:f.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"})]})})},h=r(66),p=r(82),y=r(18),d=r(11),v=r(91),m=r.n(v);function b(t){var e=t.films,r=Object(c.i)().url;return Object(a.jsx)("ul",{className:m.a.list,children:e.map((function(t){return Object(a.jsx)(a.Fragment,{children:t.poster_path&&Object(a.jsx)("li",{className:m.a.item,children:Object(a.jsxs)(d.b,{to:"".concat(r,"/").concat(t.id),className:m.a.link,children:[Object(a.jsx)("img",{className:m.a.image,src:h.a+t.poster_path,alt:t.title,width:"300",height:"450"}),Object(a.jsx)("p",{className:m.a.filmTitle,children:t.title})]})},t.id)})}))})}var g=r(92),j=r.n(g),O=r(78);var w=function(t){var e=t.filmName,r=t.queryURL,n=Object(i.useState)({}),c=Object(o.a)(n,2),u=c[0],s=c[1],f=Object(i.useState)(O.a.IDLE),l=Object(o.a)(f,2),d=l[0],v=l[1],m=Object(i.useState)([]),g=Object(o.a)(m,2),w=g[0],x=g[1],_=function(t){Object(h.e)(t).then((function(t){if(!(t.total_results>0))return Promise.reject(new Error("Invalid request"));x(t.results),v(O.a.RESOLVED)})).catch((function(t){s(t),v(O.a.REJECTED)}))};return Object(i.useEffect)((function(){""!==e||null===r?e&&_(e):_(r)}),[e,r]),d===O.a.IDLE?Object(a.jsx)("p",{className:j.a.message,children:"Please enter your search term"}):d===O.a.PENDING?Object(a.jsx)(y.a,{}):d===O.a.REJECTED?Object(a.jsx)(p.a,{message:u.message}):d===O.a.RESOLVED?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b,{films:w})}):void 0};function x(){var t=Object(c.f)(),e=Object(c.g)(),r=Object(i.useState)(""),u=Object(o.a)(r,2),s=u[0],f=u[1],h=Object(i.useState)([]),p=Object(o.a)(h,2)[1],y=new URLSearchParams(e.search).get("query");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{onSubmit:function(r){var o;f(r),p([]),o=r,t.push(Object(n.a)(Object(n.a)({},e),{},{search:"query=".concat(o)}))}}),Object(a.jsx)(w,{filmName:s,queryURL:y})]})}},65:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(71);var o=r(67),a=r(72);function i(t,e){return Object(n.a)(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||Object(o.a)(t,e)||Object(a.a)()}},66:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return y})),r.d(e,"d",(function(){return d}));var n=r(73),o=r.n(n),a=r(75),i="https://api.themoviedb.org/3",c="98821d28938ee5f201a6b9b7afe95fef",u="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(o.a.mark((function t(){var e,r,n,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return s("".concat(i,"/trending/movie/day?api_key=").concat(c,"&page=").concat(t))}function h(t){return s("".concat(i,"/search/movie?api_key=").concat(c,"&query=").concat(t))}function p(t){return s("".concat(i,"/movie/").concat(t,"?api_key=").concat(c))}function y(t){return s("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(c))}function d(t){return s("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(c))}},67:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(68);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},68:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},70:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},71:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return n}))},72:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(e,"a",(function(){return n}))},73:function(t,e,r){t.exports=r(74)},74:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function m(){}function b(){}var g={};g[a]=function(){return this};var j=Object.getPrototypeOf,O=j&&j(j(k([])));O&&O!==r&&n.call(O,a)&&(g=O);var w=b.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=w.constructor=b,b.constructor=m,m.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,c,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},75:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},77:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(70);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},78:function(t,e,r){"use strict";e.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},80:function(t,e,r){t.exports={ErrorWrapper:"ErrorMovies_ErrorWrapper__3s5E9",text:"ErrorMovies_text__2tA6L"}},82:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(1),o=r.p+"static/media/\u2014Pngtree\u2014red gradient ring fork symbol_4609561.1589bf7d.png",a=r(80),i=r.n(a);var c=function(t){var e=t.message;return Object(n.jsxs)("div",{role:"alert",className:i.a.errorWrapper,children:[Object(n.jsx)("img",{src:o,width:"650",alt:"Error"}),Object(n.jsxs)("p",{text:e,className:i.a.text,children:["Sorry, something went wrong. Error: ",e]})]})}},90:function(t,e,r){t.exports={header:"Searchbar_header__22U1V",form:"Searchbar_form__3ZGe0",btn:"Searchbar_btn__2cWgY",label:"Searchbar_label__Y09y_",input:"Searchbar_input__3nGnV"}},91:function(t,e,r){t.exports={list:"MoviesGallery_list__1M6MT",item:"MoviesGallery_item__3O2Kv",link:"MoviesGallery_link__KTgyq",image:"MoviesGallery_image__1NG7f",title:"MoviesGallery_title__2a3pm"}},92:function(t,e,r){}}]);
//# sourceMappingURL=MoviesPage.2d8d00ce.chunk.js.map