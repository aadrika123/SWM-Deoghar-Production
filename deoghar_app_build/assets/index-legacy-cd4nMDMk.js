!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["children","title","meta"];function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy-2_RsFPup.js","./router-legacy-DYc8ozZp.js"],(function(t,r){"use strict";var o,i,c,u;return{setters:[function(t){o=t.u,i=t.j,c=t.H},function(t){u=t.r}],execute:function(){var r=u.forwardRef((function(t,r){var f=t.children,l=t.title,s=void 0===l?"":l,a=t.meta,y=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,e);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=o().setTitle;u.useEffect((function(){e(t)}),[t])}(s),u.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[s]),i.jsxs(i.Fragment,{children:[i.jsxs(c,{children:[i.jsx("title",{children:"".concat(s," | SWM")}),a]}),i.jsx("div",n(n({ref:r},y),{},{children:f}))]})}));t("P",r)}}}))}();
