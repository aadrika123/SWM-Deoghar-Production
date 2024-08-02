import{j as s,B as I,d as P,C as M,_ as t}from"./index-DkGTr8py.js";import{u as q,o as B,F as O,c as E,a as T}from"./SelectField-Ck3PxKFf.js";import{g as _}from"./services-KQnp_8oA.js";import{R as z}from"./RHFTextArea-DcyasjVa.js";import{d as H,h as U}from"./router-CxMlH8iW.js";import{P as V}from"./index-BHsG9LAZ.js";import{C as r,b as i}from"./card-PeekMVMd.js";import{I as G}from"./Image-CkmC2H9L.js";import{u as J,b as K}from"./useCustomQuery-IJyj9qiq.js";import{S as w}from"./separator-CQwNH3jY.js";import{S as n}from"./SkeletonLoader-Bfytabav.js";import{O as Q}from"./OverLayLoader-Dd3NujSM.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-D9RQCQ1g.js";const W=E().shape({remarks:T().required("Remark is required")});function cs(){var o,c,l,h,j,p,v,g,f,N,u,b,y,C,k,S,A,R;const x=J({}),F=H(),{id:d}=U(),e=K({api:"".concat(P.getConsumerDetailsById,"/").concat(d),options:{enabled:!!d}}),m=q({resolver:B(W),defaultValues:{remarks:""}}),L=async $=>{M("Are you sure?","Please confirm",async()=>{try{const a=await x.mutateAsync({api:P.postDeactivateConsumer,data:{consumerId:d,remarks:$.remarks}});a.data.status?(t.success(a.data.msg),F("/deoghar-app/consumer-actions/".concat(d))):t.error(a.data.msg)}catch(a){t.error(_(a))}})};return e!=null&&e.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(r,{children:s.jsxs(i,{children:[s.jsx(n,{}),s.jsx(n,{}),s.jsx(n,{})]})})}):s.jsxs(V,{title:"Deactivate Consumer",children:[x.isLoading&&s.jsx(Q,{}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(G,{src:"/assets/image/category.png",alt:"Deactivate Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"Deactivate Consumer"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(w,{}),s.jsx(r,{children:s.jsx(i,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(o=e==null?void 0:e.data)==null?void 0:o.data[0])==null?void 0:c.consumerNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(h=(l=e==null?void 0:e.data)==null?void 0:l.data[0])==null?void 0:h.consumerName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(p=(j=e==null?void 0:e.data)==null?void 0:j.data[0])==null?void 0:p.mobileNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(g=(v=e==null?void 0:e.data)==null?void 0:v.data[0])==null?void 0:g.monthlyDemand})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(N=(f=e==null?void 0:e.data)==null?void 0:f.data[0])==null?void 0:N.totalDemand})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(b=(u=e==null?void 0:e.data)==null?void 0:u.data[0])==null?void 0:b.demandFrom})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(C=(y=e==null?void 0:e.data)==null?void 0:y.data[0])==null?void 0:C.demandUpto})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(S=(k=e==null?void 0:e.data)==null?void 0:k.data)==null?void 0:S.length})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(R=(A=e==null?void 0:e.data)==null?void 0:A.data[0])==null?void 0:R.Address})})]})})}),s.jsx(w,{}),s.jsx(r,{children:s.jsx(i,{children:s.jsx(O,{methods:m,onSubmit:m.handleSubmit(L),children:s.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[s.jsx("div",{children:s.jsx(z,{name:"remarks",label:"Remarks",isRequired:!0})}),s.jsx("div",{className:"flex justify-end",children:s.jsx(I,{type:"submit",size:"sm",variant:"destructive",children:"Deactivate"})})]})})})})]})]})}export{cs as default};
