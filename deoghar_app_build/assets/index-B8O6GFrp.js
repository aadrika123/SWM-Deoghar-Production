import{c as u,j as e,B as m,C as y,d as g,_ as o}from"./index-DkGTr8py.js";import{r as j,L as f}from"./router-CxMlH8iW.js";import{P as N}from"./index-BHsG9LAZ.js";import{I as b}from"./Image-CkmC2H9L.js";import{S as v}from"./separator-CQwNH3jY.js";import{u as w,a as k}from"./useCustomQuery-IJyj9qiq.js";import{u as R,o as L,F as C,c as S,a as x}from"./SelectField-Ck3PxKFf.js";import{R as h}from"./RHFTextField-DDT445Gq.js";import{B as A}from"./ButtonLoading-dCTh3U0u.js";import{R as $}from"./RotatingLoader-e2c5rSpZ.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-D9RQCQ1g.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=u("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),B=S().shape({routeName:x().required().label("Route Name"),selectedDate:x().required().label("Select Date")});function P({open:t,setOpen:r,title:a,refetch:d}){const i=w({}),n=()=>r(!t),s=R({resolver:L(B),defaultValues:{routeName:"",selectedDate:""}}),c=async p=>{r(!1),y("Are you sure?","Please confirm",async()=>{try{const l=await i.mutateAsync({api:g.postNewRoute,data:p});l.data.status?(o.success(l.data.msg),d&&d()):o.error(l.data.msg)}catch(l){o.error(l.msg)}})};return e.jsxs("div",{children:[t&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:a!=null?a:"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:n,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(C,{methods:s,onSubmit:s.handleSubmit(c),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(h,{name:"routeName",label:"Route Name"})}),e.jsx("div",{children:e.jsx(h,{name:"selectedDate",label:"Select Date",type:"date"})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(m,{size:"sm",type:"button",onClick:n,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(A,{isLoading:i.isLoading,disabled:i.isLoading,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]})})]})})})]})}function G(){var d,i,n;const[t,r]=j.useState(!1),a=k({api:"".concat(g.getRouteList),config:{},options:{enabled:!0}});return a!=null&&a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx($,{})}):e.jsxs(N,{title:"Route List",children:[t&&e.jsx(P,{open:t,setOpen:r,refetch:a.refetch}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(b,{src:"/assets/image/category.png",alt:"Route List",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Route List"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx("div",{className:"flex space-x-3 items-center justify-end",children:e.jsx(m,{size:"sm",onClick:()=>{r(!0)},children:"Add Route."})}),e.jsx(v,{}),((i=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:i.length)>0?e.jsx("div",{className:"grid grid-cols-1 gap-4",children:(n=a.data)==null?void 0:n.data.map((s,c)=>e.jsxs("div",{className:"flex justify-between items-center p-4 bg-gray-100 rounded-lg",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(z,{className:"w-8 h-8 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold",children:s==null?void 0:s.routeName}),e.jsx("p",{className:"text-xs text-gray-500",children:s==null?void 0:s.totalConsumerCount})]})]}),e.jsx(f,{to:"/deoghar-app/route-list-details/".concat(s==null?void 0:s.id,"/").concat(s==null?void 0:s.routeName,"/").concat(s==null?void 0:s.totalConsumerCount),children:e.jsx(m,{size:"sm",children:"View"})})]},c+1))}):e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("p",{className:"text-gray-500",children:"No data found"})})]})]})}export{G as default};
