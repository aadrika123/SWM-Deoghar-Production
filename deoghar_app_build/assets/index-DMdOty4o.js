import{j as e,B as u,d as R}from"./index-DkGTr8py.js";import{d as k,r as F}from"./router-CxMlH8iW.js";import{C as D,b as $}from"./card-PeekMVMd.js";import{P as I}from"./index-DG-YjzDj.js";import{P as E}from"./index-BHsG9LAZ.js";import{u as z,o as B,F as W,S as g,c as G,a as c}from"./SelectField-Ck3PxKFf.js";import{R as T}from"./RHFTextField-DDT445Gq.js";import{a as O}from"./useCustomQuery-IJyj9qiq.js";import{u as V,a as H,b as Y}from"./useComonData--7Vu7jos.js";import{S as m}from"./separator-CQwNH3jY.js";import{I as _}from"./Image-CkmC2H9L.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";function q({reminderListData:a}){var i,o;const r=k();return a!=null&&a.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((s,l)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},l+1))}):e.jsx(e.Fragment,{children:a.status==="success"&&((o=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:o.length)>0?a.data.data.map((s,l)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?"Consumer Name :":"Apartment Name :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500 w-30 truncate",children:s.consumerNo!==""?s.consumerName:s.apartmentName}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Ward No :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.wardNo}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?"Consumer No :":"Apartment Code :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?s.consumerNo:s.apartmentCode}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Reminder Date :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.reminderDate}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Date :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.date}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Address :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.address}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Remarks :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.remarks}),e.jsx(m,{className:"col-span-2 w-full"}),e.jsx("div",{children:e.jsx(u,{onClick:()=>{s.consumerNo!==""&&r("/deoghar-app/consumer-actions/".concat(s.id)),s.apartmentCode!==""&&r("/deoghar-app/apartment-actions/".concat(s.id))},variant:"outline",className:"w-full rounded-lg ",size:"sm",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"VIEW DETAILS"})})}),e.jsx("div",{children:e.jsx(u,{variant:"outline",onClick:()=>{s.consumerNo!==""&&r("/deoghar-app/consumer-payment/".concat(s.id)),s.apartmentCode!==""&&r("/deoghar-app/apartment-payment/".concat(s.id))},className:"w-full rounded-lg",size:"sm",children:"PAY"})})]})},l+1)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"No Data Found"})})})})}const J=G().shape({category:c(),consumerType:c(),wardNo:c(),fromDate:c(),toDate:c()});function oe(){var h,p,N,j,f,y,v,b,w,S,C,P;const{getAllUser:a}=V(),{getConsumerAddFormData:r}=H(),[i,o]=F.useState(1),[s,l]=F.useState(10),d=z({resolver:B(J),defaultValues:{fromDate:new Date().toISOString().split("T")[0],toDate:new Date().toISOString().split("T")[0],category:"",consumerType:"",wardNo:""}}),n=O({api:"".concat(R.getReminderList),config:{fromDate:d.watch("fromDate"),toDate:d.watch("toDate"),category:d.watch("category"),type:d.watch("consumerType"),wardNo:d.watch("wardNo")},key:"reminderList",options:{enabled:!0}}),A=async t=>{o(1),l(10),n.refetch()},{consumerCategoryData:x}=Y(String(d.watch("category")));return e.jsx(E,{title:"Reminder List",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(_,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Reminder List"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(m,{}),e.jsx(D,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx($,{className:"px-6 text-sm",children:e.jsxs(W,{methods:d,onSubmit:d.handleSubmit(A),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(T,{name:"fromDate",label:"From Date",type:"date",className:"w-full"})}),e.jsx("div",{children:e.jsx(T,{name:"toDate",label:"To Date",type:"date",className:"w-full"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(g,{name:"wardNo",label:"Ward No",className:"w-full",data:(j=(N=(p=(h=a==null?void 0:a.data)==null?void 0:h.data[0].ulbDetails[0])==null?void 0:p.wards)==null?void 0:N.map(t=>({label:String(t),value:String(t)})))!=null?j:[]})}),e.jsx("div",{children:e.jsx(g,{name:"category",label:"Category",className:"w-full",data:(b=(v=(y=(f=r==null?void 0:r.data)==null?void 0:f.data)==null?void 0:y.consumerCategory)==null?void 0:v.map(t=>({label:String(t.name),value:String(t.id)})))!=null?b:[]})}),e.jsx("div",{children:e.jsx(g,{name:"consumerType",label:"Consumer Type",className:"w-full",data:(P=(C=(S=(w=x==null?void 0:x.data)==null?void 0:w.data)==null?void 0:S.consumerTypeList)==null?void 0:C.map(t=>({label:String(t.name),value:String(t.id)})))!=null?P:[]})})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(u,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})}),e.jsx(m,{}),e.jsx(q,{reminderListData:n}),(n==null?void 0:n.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(I,{page:i,perPage:s,totalPage:10,setPage:t=>o(t)}),e.jsx(m,{})]})]})})}export{oe as default};
