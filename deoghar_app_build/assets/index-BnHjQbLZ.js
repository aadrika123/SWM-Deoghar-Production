import{j as s,g as h}from"./index-BcSDAYQy.js";import{P as m}from"./index-J44beZ8l.js";import{h as c}from"./moment-BjLXg0w5.js";import{I as j}from"./Image-Bg3N0v8H.js";import{S as p}from"./separator-CnGhRSp5.js";import{a as N}from"./useCustomQuery-Dq0ecwmr.js";import{C as f,b as g}from"./card-BGFnyxWs.js";import"./router-CTqkcgir.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function H(){var t,i,d;const x=window.location.search,r=new URLSearchParams(x),o=r.get("tranType"),n=r.get("id"),a=N({api:(t=h)==null?void 0:t.getConsumerPastTransactions,config:{[`${o}`]:n},options:{enabled:!!n}});return s.jsx(m,{title:"Transaction History",children:s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(j,{src:"/assets/image/category.png",alt:"Transaction History",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"Transaction History"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Transaction History details here."})]})]}),s.jsx(p,{}),(d=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:d.map((e,l)=>s.jsx(f,{children:s.jsx(g,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Transaction ID:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.transactionNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Transaction Date:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.transactionDate})}),e.consumerNo?s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.consumerNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.consumerName})})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Code:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.apartmentCode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.apartmentName})})]}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Transaction Amount:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.amount})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mode:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:e.mode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:c(e.demandFrom,"DD-MM-YYYY").format("DD-MMM-YYYY")})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:c(e.demandUpto,"DD-MM-YYYY").format("DD-MMM-YYYY")})})]})})},l+1))]})})}export{H as default};
