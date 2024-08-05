!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},i=Object.prototype,a=i.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),s=new P(n||[]);return o(a,"_invoke",{value:_(t,r,s)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var v="suspendedStart",m="suspendedYield",p="executing",x="completed",y={};function g(){}function j(){}function b(){}var w={};d(w,c,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(F([])));L&&L!==i&&a.call(L,c)&&(w=L);var E=b.prototype=g.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(i,o,s,c){var l=f(e[i],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,i){n(t,e,r,i)}))}return i=i?i.then(a,a):a()}})}function _(t,e,n){var i=v;return function(a,o){if(i===p)throw Error("Generator is already running");if(i===x){if("throw"===a)throw o;return{value:r,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=O(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===v)throw i=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var l=f(t,e,n);if("normal"===l.type){if(i=n.done?x:m,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=x,n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,i=t.iterator[n];if(i===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function t(){for(;++i<e.length;)if(a.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}throw new TypeError(t(e)+" is not iterable")}return j.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},S(k.prototype),d(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,i,a){void 0===a&&(a=Promise);var o=new k(h(t,e,r,i),a);return n.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(E),d(E,u,"Generator"),d(E,c,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;D(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},n}function r(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}}System.register(["./index-legacy-DNKTp0nq.js","./SelectField-legacy-CDe210nZ.js","./services-legacy-BAvdU-qa.js","./RHFTextArea-legacy-K8Q6qfkg.js","./ButtonLoading-legacy-Dtw4UhUc.js","./router-legacy-DYc8ozZp.js","./index-legacy-BBXE4eys.js","./card-legacy-lAtMyrsJ.js","./Image-legacy-CzfxQAMc.js","./useCustomQuery-legacy-kyMEKemC.js","./separator-legacy-BndLkwaE.js","./SkeletonLoader-legacy-CaPiPJMm.js","./headlessui-legacy-D7WMeg35.js","./axios-legacy-DkcwMedN.js"],(function(t,r){"use strict";var i,a,o,s,c,l,u,d,h,f,v,m,p,x,y,g,j,b,w,N,L,E;return{setters:[function(t){i=t.j,a=t.d,o=t.C,s=t._},function(t){c=t.u,l=t.o,u=t.F,d=t.c,h=t.a},function(t){f=t.g},function(t){v=t.R},function(t){m=t.B},function(t){p=t.d,x=t.h},function(t){y=t.P},function(t){g=t.C,j=t.b},function(t){b=t.I},function(t){w=t.u,N=t.b},function(t){L=t.S},function(t){E=t.S},null,null],execute:function(){t("default",(function(){var t,d,h,S,k,_,O,A,D,P=p(),F=w({}),T=x().id,G=N({api:"".concat(a.getApartmentDetailsById,"/").concat(T),options:{enabled:!!T}}),I=c({resolver:l(r),defaultValues:{remarks:""}}),R=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o("Are you sure?","Please confirm",n(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.mutateAsync({api:a.apartmentDeactivate,data:{apartmentId:T,remarks:r.remarks}});case 3:(n=t.sent).data.status?(s.success(n.data.msg),P("/deoghar-app/apartment-actions/".concat(T))):s.error(n.data.msg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s.error(f(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if(null!=G&&G.isLoading)return i.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:i.jsx(g,{children:i.jsxs(j,{children:[i.jsx(E,{}),i.jsx(E,{}),i.jsx(E,{})]})})});return i.jsx(y,{title:"Deactivate Apartment",children:i.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[i.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[i.jsx(b,{src:"/assets/image/category.png",alt:"Deactivate Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),i.jsxs("div",{className:"",children:[i.jsx("h1",{className:"font-semibold",children:"Deactivate Apartment"}),i.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),i.jsx(L,{}),i.jsx(g,{children:i.jsx(j,{children:i.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(t=G.data)||void 0===t||null===(t=t.data[0])||void 0===t?void 0:t.apartmentCode})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(d=G.data)||void 0===d||null===(d=d.data[0])||void 0===d?void 0:d.apartmentName})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(h=G.data)||void 0===h||null===(h=h.data[0])||void 0===h?void 0:h.mobileNo})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(S=G.data)||void 0===S?void 0:S.totalAptMonthlyDemand})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(k=G.data)||void 0===k?void 0:k.totalAptDemand})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(_=G.data)||void 0===_||null===(_=_.data[0])||void 0===_?void 0:_.demandFrom})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(O=G.data)||void 0===O||null===(O=O.data[0])||void 0===O?void 0:O.demandUpto})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(A=G.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.length})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:null==G||null===(D=G.data)||void 0===D||null===(D=D.data[0])||void 0===D?void 0:D.address})})]})})}),i.jsx(L,{}),i.jsx(g,{children:i.jsx(j,{children:i.jsx(u,{methods:I,onSubmit:I.handleSubmit(R),children:i.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[i.jsx("div",{children:i.jsx(v,{name:"remarks",label:"Remarks",isRequired:!0})}),i.jsx("div",{className:"flex justify-end",children:i.jsx(m,{isLoading:F.isLoading,disabled:F.isLoading,type:"submit",size:"sm",variant:"destructive",children:"Deactivate"})})]})})})})]})})}));var r=d().shape({remarks:h().required("Remark is required")})}}}))}();