!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,s=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},a=Object.prototype,i=a.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var a=t&&t.prototype instanceof x?t:x,i=Object.create(a.prototype),s=new S(n||[]);return o(i,"_invoke",{value:A(e,r,s)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var f="suspendedStart",p="suspendedYield",g="executing",v="completed",y={};function x(){}function b(){}function j(){}var w={};u(w,l,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(P([])));k&&k!==a&&i.call(k,l)&&(w=k);var F=j.prototype=x.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function n(a,o,s,l){var c=m(t[a],t,o);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==e(u)&&i.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):r.resolve(u).then((function(e){d.value=e,s(d)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(i,i):i()}})}function A(e,r,n){var a=f;return function(i,o){if(a===g)throw Error("Generator is already running");if(a===v){if("throw"===i)throw o;return{value:t,done:!0}}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var l=C(s,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var c=m(e,r,n);if("normal"===c.type){if(a=n.done?v:p,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function C(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=m(a,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[l];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,o=function e(){for(;++a<r.length;)if(i.call(r,a))return e.value=r[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=j,o(F,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:b,configurable:!0}),b.displayName=u(j,d,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u(e,d,"GeneratorFunction")),e.prototype=Object.create(F),e},r.awrap=function(e){return{__await:e}},E(L.prototype),u(L.prototype,c,(function(){return this})),r.AsyncIterator=L,r.async=function(e,t,n,a,i){void 0===i&&(i=Promise);var o=new L(h(e,t,n,a),i);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(F),u(F,d,"Generator"),u(F,l,(function(){return this})),u(F,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)}))}}System.register(["./index-legacy-2_RsFPup.js","./router-legacy-DYc8ozZp.js","./index-legacy-cd4nMDMk.js","./card-legacy-BDC32D1Q.js","./Image-legacy-COQhmTnm.js","./useCustomQuery-legacy-BeKmFAzZ.js","./separator-legacy-aCRIZKv7.js","./SkeletonLoader-legacy-C4fRAwBj.js","./SelectField-legacy-mUqqAy8m.js","./RHFTextField-legacy-8Due_DP4.js","./RHFTextArea-legacy-BjhpgMUz.js","./ButtonLoading-legacy-DOreBl4V.js","./headlessui-legacy-D7WMeg35.js","./axios-legacy-DkcwMedN.js"],(function(e,r){"use strict";var a,o,s,c,d,u,h,m,f,p,g,v,y,x,b,j,w,N,k,F,E,L,A,C,D,O,S,P;return{setters:[function(e){a=e.u,o=e.j,s=e.B,c=e.C,d=e.d,u=e._,h=e.f},function(e){m=e.r,f=e.d,p=e.h},function(e){g=e.P},function(e){v=e.C,y=e.b,x=e.c},function(e){b=e.I},function(e){j=e.u,w=e.b},function(e){N=e.S},function(e){k=e.S},function(e){F=e.u,E=e.o,L=e.F,A=e.c,C=e.a,D=e.S},function(e){O=e.R},function(e){S=e.R},function(e){P=e.B},null,null],execute:function(){e("default",(function(){var e,r,n,i,s,l,c,u,h,j,F=a().user,E=f(),L=t(m.useState(!1),2),A=L[0],C=L[1],D=t(m.useState(!1),2),O=D[0],S=D[1],P=p().id,R=w({api:"".concat(d.getApartmentDetailsById,"/").concat(P),options:{enabled:!!P}});if(null!=R&&R.isLoading)return o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsx(v,{children:o.jsxs(y,{children:[o.jsx(k,{}),o.jsx(k,{}),o.jsx(k,{})]})})});return o.jsxs(g,{title:"Apartment Action",children:[A&&o.jsx(M,{open:A,setOpen:C,aptData:null==R||null===(e=R.data)||void 0===e?void 0:e.data[0].id}),O&&o.jsx(I,{open:O,setOpen:S,aptData:null==R||null===(r=R.data)||void 0===r?void 0:r.data[0].id}),o.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[o.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[o.jsx(b,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),o.jsxs("div",{className:"",children:[o.jsx("h1",{className:" font-semibold",children:"Apartment Action"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),o.jsx(N,{}),o.jsx(v,{children:o.jsx(y,{children:o.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(n=R.data)||void 0===n||null===(n=n.data[0])||void 0===n?void 0:n.apartmentCode})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(i=R.data)||void 0===i||null===(i=i.data[0])||void 0===i?void 0:i.apartmentName})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(s=R.data)||void 0===s||null===(s=s.data[0])||void 0===s?void 0:s.mobileNo})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(l=R.data)||void 0===l?void 0:l.totalAptMonthlyDemand})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(c=R.data)||void 0===c?void 0:c.totalAptDemand})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(u=R.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.length})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs",children:null==R||null===(h=R.data)||void 0===h||null===(h=h.data[0])||void 0===h?void 0:h.address})})]})})}),o.jsx(N,{}),null!=(null==R||null===(j=R.data)||void 0===j||null===(j=j.data[0])||void 0===j?void 0:j.consumerNo)?o.jsx("div",{className:"grid grid-cols-3 gap-2",children:_.map((function(e,t){return e.accessMenu.includes("".concat(null==F?void 0:F.userTypeId))&&o.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-2",children:[o.jsx(v,{onClick:function(){"View & Pay"==e.title&&E("".concat(e.link,"/").concat(P)),"All Flats List"==e.title&&E("".concat(e.link,"/").concat(P)),"Transaction History"==e.title&&E("".concat(e.link,"?id=").concat(P,"&tranType=apartmentId")),"Update Apartment"==e.title&&E("".concat(e.link,"/").concat(P)),"Payment Adjustment"==e.title&&E("".concat(e.link,"/").concat(P)),"Deactivate Apartment"==e.title&&E("".concat(e.link,"/").concat(P)),"Geo Tagging"==e.title&&E("".concat(e.link,"/").concat(P)),"Geo Map"==e.title&&E("".concat(e.link,"/").concat(P)),"Print Demand"==e.title&&E("".concat(e.link,"/").concat(P)),"Reminder"==e.title&&C(!0),"Deny"==e.title&&S(!0)},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:o.jsx(b,{src:e.icon,alt:"icon"})}),o.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:e.title})]},t+1)}))}):o.jsx("div",{className:"grid grid-cols-1 gap-4",children:o.jsx(v,{className:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE] h-full w-full px-2",onClick:function(){E("/deoghar-app/add-flat?id=".concat(P))},children:o.jsxs("div",{className:"py-4",children:[o.jsx("div",{className:"flex justify-center",children:o.jsx(b,{src:"/assets/image/apartment.png",alt:"Avatar",className:"overflow-hidden w-10 h-10"})}),o.jsx(x,{className:"text-xs text-center mt-1",children:"Add Flat"})]})})})]})]})}));var r=A().shape({reminderDate:C().required("Apartment Type is required"),reminderTime:C().required("Apartment Category is required"),remarks:C().required("Apartment Status is required")});function M(e){var t=e.open,h=e.setOpen,m=e.title,f=e.aptData,p=j({}),g=a().user,v=function(){return h(!t)},y=F({resolver:E(r),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),x=function(){var e=l(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c("Are you sure?","Please confirm",l(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.mutateAsync({api:d.postReminder,data:i(i({},t),{},{userId:null==g?void 0:g.id,apartmentId:f})});case 3:(r=e.sent).data.status?(u.success(r.data.msg),h(!1)):u.error(r.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.jsxs("div",{children:[t&&o.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),o.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:o.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:o.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[o.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[o.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:null!=m?m:"Add Reminder"}),o.jsxs("button",{style:{background:"none"},onClick:v,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[o.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),o.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),o.jsx("div",{className:"p-4 md:p-5",children:o.jsxs(L,{methods:y,onSubmit:y.handleSubmit(x),children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsx("div",{children:o.jsx(O,{isRequired:!0,name:"reminderDate",label:"Reminder Date",type:"date",min:(new Date).toISOString().split("T")[0]})}),o.jsx("div",{children:o.jsx(O,{isRequired:!0,name:"reminderTime",label:"Reminder Time",type:"time"})}),o.jsx("div",{className:"col-span-2",children:o.jsx(S,{name:"remarks",label:"Remarks",isRequired:!0})})]}),o.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[o.jsx(s,{disabled:p.isLoading,size:"sm",type:"button",onClick:v,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),o.jsx(P,{disabled:p.isLoading,isLoading:p.isLoading,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}var R=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],T=A().shape({denyList:C().required("Deny List is required"),latitude:C(),longitude:C(),remarks:C().required("Remarks is required")});function I(e){var t=e.open,r=e.setOpen,f=e.title,p=e.aptData,g=j({}),v=a().user,y=h(),x=y.coords,b=y.isGeolocationEnabled,w=function(){return r(!t)},N=F({resolver:E(T),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),k=function(){var e=l(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c("Are you sure?","Please confirm",l(n().mark((function e(){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.mutateAsync({api:d.postPaymentDeny,data:i(i({},t),{},{userId:null==v?void 0:v.id,apartmentId:p})});case 3:(a=e.sent).data.status?(u.success(a.data.msg),r(!1)):u.error(a.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.useEffect((function(){p&&(N.setValue("latitude",String(null==x?void 0:x.latitude)),N.setValue("longitude",String(null==x?void 0:x.longitude))),"other"!==N.watch("denyList")&&N.setValue("remarks",N.watch("denyList")),"other"===N.watch("denyList")&&N.setValue("remarks","")}),[N.watch("denyList")]),o.jsxs("div",{children:[t&&o.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),o.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:o.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:o.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[o.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[o.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:null!=f?f:"Add Deny"}),o.jsxs("button",{style:{background:"none"},onClick:w,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[o.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),o.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),o.jsx("div",{className:"p-4 md:p-5",children:b?o.jsxs(L,{methods:N,onSubmit:N.handleSubmit(k),children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsx("div",{className:"col-span-2",children:o.jsx(D,{name:"denyList",label:"Deny List",data:R,isRequired:!0})}),"other"===N.watch("denyList")&&o.jsx("div",{className:"col-span-2",children:o.jsx(S,{name:"remarks",label:"Remarks",isRequired:!0})})]}),o.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[o.jsx(s,{size:"sm",disabled:g.isLoading,type:"button",onClick:w,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),o.jsx(P,{isLoading:g.isLoading,disabled:g.isLoading,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]}):o.jsx("div",{className:"text-center py-4",children:o.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}var _=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/apartment-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"All Flats List",icon:"/icons/flats2.svg",link:"/deoghar-app/all-flats-list",bg:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE]",accessMenu:["4","5"]},{title:"Update Apartment",icon:"/icons/update.svg",link:"/deoghar-app/update-apartment",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Apartment",icon:"/icons/deactivate.svg",link:"/deoghar-app/deactivate-apt",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-apt-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/print-demand",accessMenu:["4"]}]}}}))}();