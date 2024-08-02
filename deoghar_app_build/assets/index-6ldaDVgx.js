import{j as a,d as C,C as F,_ as r}from"./index-DkGTr8py.js";import{u as M,o as $,F as I,c as q,a as B}from"./SelectField-Ck3PxKFf.js";import{g as E}from"./services-KQnp_8oA.js";import{R as T}from"./RHFTextArea-DcyasjVa.js";import{B as _}from"./ButtonLoading-dCTh3U0u.js";import{d as z,h as H}from"./router-CxMlH8iW.js";import{P as O}from"./index-BHsG9LAZ.js";import{C as i,b as n}from"./card-PeekMVMd.js";import{I as U}from"./Image-CkmC2H9L.js";import{u as V,b as G}from"./useCustomQuery-IJyj9qiq.js";import{S as R}from"./separator-CQwNH3jY.js";import{S as x}from"./SkeletonLoader-Bfytabav.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";const J=q().shape({remarks:B().required("Remark is required")});function na(){var m,c,o,h,j,p,g,v,f,N,b,u,y,A,k,S;const L=z(),d=V({}),{id:t}=H(),s=G({api:"".concat(C.getApartmentDetailsById,"/").concat(t),options:{enabled:!!t}}),l=M({resolver:$(J),defaultValues:{remarks:""}}),P=async w=>{F("Are you sure?","Please confirm",async()=>{try{const e=await d.mutateAsync({api:C.apartmentDeactivate,data:{apartmentId:t,remarks:w.remarks}});e.data.status?(r.success(e.data.msg),L("/deoghar-app/apartment-actions/".concat(t))):r.error(e.data.msg)}catch(e){r.error(E(e))}})};return s!=null&&s.isLoading?a.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:a.jsx(i,{children:a.jsxs(n,{children:[a.jsx(x,{}),a.jsx(x,{}),a.jsx(x,{})]})})}):a.jsx(O,{title:"Deactivate Apartment",children:a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(U,{src:"/assets/image/category.png",alt:"Deactivate Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Deactivate Apartment"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx(R,{}),a.jsx(i,{children:a.jsx(n,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(c=(m=s==null?void 0:s.data)==null?void 0:m.data[0])==null?void 0:c.apartmentCode})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(h=(o=s==null?void 0:s.data)==null?void 0:o.data[0])==null?void 0:h.apartmentName})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(p=(j=s==null?void 0:s.data)==null?void 0:j.data[0])==null?void 0:p.mobileNo})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(g=s==null?void 0:s.data)==null?void 0:g.totalAptMonthlyDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(v=s==null?void 0:s.data)==null?void 0:v.totalAptDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(N=(f=s==null?void 0:s.data)==null?void 0:f.data[0])==null?void 0:N.demandFrom})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(u=(b=s==null?void 0:s.data)==null?void 0:b.data[0])==null?void 0:u.demandUpto})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(A=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:A.length})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(S=(k=s==null?void 0:s.data)==null?void 0:k.data[0])==null?void 0:S.address})})]})})}),a.jsx(R,{}),a.jsx(i,{children:a.jsx(n,{children:a.jsx(I,{methods:l,onSubmit:l.handleSubmit(P),children:a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(T,{name:"remarks",label:"Remarks",isRequired:!0})}),a.jsx("div",{className:"flex justify-end",children:a.jsx(_,{isLoading:d.isLoading,disabled:d.isLoading,type:"submit",size:"sm",variant:"destructive",children:"Deactivate"})})]})})})})]})})}export{na as default};
