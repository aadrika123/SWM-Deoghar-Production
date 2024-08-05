import{j as e,B as S,g as F,e as w,h as T}from"./index-Bg7ERlhF.js";import{d as A,r as C}from"./router-CTqkcgir.js";import{C as W,b as $}from"./card-BCpDzxcN.js";import{P as B}from"./index-SG1gBzak.js";import{P as E}from"./index-CG2x7DO7.js";import{u as I,o as L,F as R,S as u,c as k,a as n}from"./SelectField-CpGzaXaD.js";import{R as q}from"./RHFTextField-fZ4Oht-I.js";import{u as z,a as V}from"./useComonData-BGT9xsbT.js";import{S as c}from"./separator-D35cJwmC.js";import{I as G}from"./Image-BKtOH8nL.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function H({consumerData:s}){var d,l;const i=A();return s!=null&&s.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((a,m)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},m+1))}):e.jsx(e.Fragment,{children:s.status==="success"&&((l=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:l.length)>0?s.data.data.map(a=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:a.consumerName})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward No :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:a.wardNo})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Category :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:a.cansumerCategory})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Type :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:a.cansumerType})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Paid Status :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:a.paidStatus==="Paid"?e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-green-500 text-green-500 rounded-lg",children:a.paidStatus}):e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-red-500 text-red-500 rounded-lg",children:a.paidStatus})})]}),e.jsx(c,{}),e.jsx("div",{className:"col-span-1 w-full",children:e.jsx(S,{onClick:()=>i(`/deoghar-app/consumer-actions/${a.id}`),variant:"outline",className:"w-full rounded-lg ",size:"sm",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"VIEW DETAILS"})})})]})},a.id)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"No Data Found"})})})})}const _=k().shape({consumerCategory:n(),consumerNo:n(),consumertype:n(),wardNo:n().when("consumerNo",{is:s=>s=="",then:()=>n().required().label("Ward no"),otherwise:()=>n().notRequired().label("Ward no")})});function ae(){var g,h,j,p,N,y,f,b,v;const{getAllUser:s}=z(),{getConsumerAddFormData:i}=V(),[d,l]=C.useState(1),[a,m]=C.useState(10),t=I({resolver:L(_),defaultValues:{consumerCategory:"0",consumerNo:"",consumertype:"",wardNo:""}}),o=F({api:w.getConsumerListByCategory,config:{consumerCategory:t.watch("consumerCategory")=="0"?"":t.watch("consumerCategory"),consumerNo:t.watch("consumerNo"),consumertype:t.watch("consumertype"),wardNo:t.watch("wardNo"),page:d,perPage:a},value:[d,l],options:{enabled:d>1||d>10}}),x=T({api:`${w.getConsumerTypeByCategory}/${t.watch("consumerCategory")}`,options:{enabled:!!t.watch("consumerCategory")&&t.watch("consumerCategory")!="0"}}),P=async r=>{l(1),m(10),o.refetch()};return e.jsx(E,{title:"Search Consumer",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(G,{src:"/assets/icons/searchConsumer.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Search Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Search consumer details here."})]})]}),e.jsx(c,{}),e.jsx(W,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx($,{className:"px-6 text-sm",children:e.jsx(R,{methods:t,onSubmit:t.handleSubmit(P),children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx(q,{name:"consumerNo",label:"Consumer No",className:"w-full"}),e.jsx("div",{children:e.jsx(u,{name:"wardNo",label:"Ward No",className:"w-full",data:((j=(h=(g=s==null?void 0:s.data)==null?void 0:g.data[0].ulbDetails[0])==null?void 0:h.wards)==null?void 0:j.map(r=>({label:String(r),value:String(r)})))??[]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(u,{name:"consumerCategory",label:"Consumer Category",className:"w-full",data:((y=(N=(p=i==null?void 0:i.data)==null?void 0:p.data)==null?void 0:N.consumerCategory)==null?void 0:y.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),e.jsx("div",{children:e.jsx(u,{name:"consumertype",label:"Consumer Type",className:"w-full",data:((v=(b=(f=x==null?void 0:x.data)==null?void 0:f.data)==null?void 0:b.consumerTypeList)==null?void 0:v.map(r=>({label:String(r.name),value:String(r.id)})))??[]})})]}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsx(S,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})})}),e.jsx(c,{}),e.jsx(H,{consumerData:o}),(o==null?void 0:o.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(B,{page:d,perPage:a,totalPage:10,setPage:r=>l(r)}),e.jsx(c,{})]})]})})}export{ae as default};
