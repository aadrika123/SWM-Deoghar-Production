import{j as e,u as P,d as I,B as S}from"./index-DwHfpNlX.js";import{L as F,r as v}from"./router-CxMlH8iW.js";import{C as R,b as A}from"./card-CP_wK8K2.js";import{P as Y}from"./index-8nRRnDWJ.js";import{P as M}from"./index-B1FKUPV7.js";import{h as w}from"./moment-CbGOrKEH.js";import{u as D,o as k,F as $,S as C,c as L,a as r,g as q}from"./SelectField-DCQpvyE5.js";import{R as T}from"./RHFTextField-C7tJVrRN.js";import{a as B}from"./useCustomQuery-CJHa6I0o.js";import{c as E}from"./useComonData-WfKdZXcd.js";import{S as x}from"./separator-BoijPV8d.js";import{I as O}from"./Image-C1aMTGBV.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";function V({collectionData:a}){var d,c,l,m,i,t;return a!=null&&a.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((s,o)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},o+1))}):e.jsx("div",{children:a.status==="success"&&((m=(l=(c=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:c.details)==null?void 0:l.transactions)==null?void 0:m.length)>0?(t=(i=a.data.data)==null?void 0:i.details)==null?void 0:t.transactions.map((s,o)=>e.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 justify-center items-center",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer no/APT no :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:s!=null&&s.apartmentCode?s==null?void 0:s.apartmentCode:s==null?void 0:s.consumerNo}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name / APT Name :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s!=null&&s.apartmentName?s==null?void 0:s.apartmentName:s==null?void 0:s.consumerName}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.wardNo}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Amount :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.amount}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Mode :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.transactionMode}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment from :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.demandFrom}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment upto :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.demandUpto})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(F,{to:"/deoghar-app/payment-receipt/".concat(s==null?void 0:s.transactionNo),className:"text-sm text-blue-500",children:"View Receipt"})})]},o+1)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"No Data Found"})})})})}const z=L().shape({fromDate:r(),toDate:r(),tcId:r(),consumerCategory:r(),consumerType:r(),buildingType:r(),mode:r(),wardNo:r().nullable(),reportType:r(),userId:q()});function re(){var h,p,u,g,j,f,N,y,b;const{user:a}=P(),{getTcList:d}=E(),[c,l]=v.useState(1),[m,i]=v.useState(10),t=D({resolver:k(z),defaultValues:{fromDate:w().format("YYYY-MM-DD"),toDate:w().format("YYYY-MM-DD"),tcId:"",consumerCategory:"",consumerType:"",buildingType:"",mode:"",wardNo:null,reportType:"dailyCollection",userId:a==null?void 0:a.id}}),s=B({api:I.getReportData,config:{fromDate:t.watch("fromDate"),toDate:t.watch("toDate"),tcId:(a==null?void 0:a.userTypeId)==5||t.watch("tcId")!=""?t.watch("tcId"):"",consumerCategory:t.watch("consumerCategory"),consumerType:t.watch("consumerType"),buildingType:t.watch("buildingType"),mode:t.watch("mode"),wardNo:t.watch("wardNo"),reportType:t.watch("reportType"),userId:t.watch("userId")},options:{enabled:!0}}),o=async n=>{l(1),i(10),s.refetch()};return e.jsx(M,{title:"Collection Report",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(O,{src:"/assets/icons/coins.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Collection Report"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),e.jsx(x,{}),e.jsx(R,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(A,{className:"px-6 text-sm",children:e.jsx($,{methods:t,onSubmit:t.handleSubmit(o),children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{children:e.jsx(T,{name:"fromDate",label:"From Date",className:"w-full",type:"date"})}),e.jsx("div",{children:e.jsx(T,{name:"toDate",label:"To Date",className:"w-full",type:"date"})}),(a==null?void 0:a.userTypeId)==4&&e.jsx("div",{className:"col-span-2",children:e.jsx(C,{name:"tcId",label:"TC",className:"w-full",data:(u=(p=(h=d==null?void 0:d.data)==null?void 0:h.data)==null?void 0:p.map(n=>({label:String(n.tcName),value:String(n.tcId)})))!=null?u:[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(C,{name:"mode",label:"Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"Dd",value:"DD"},{label:"Online",value:"Online"}]})}),e.jsx("div",{className:"col-span-2 mt-2",children:e.jsx(S,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})})}),e.jsx(x,{}),e.jsxs("div",{className:"flex justify-between item-center",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Total Transaction:"}),e.jsx("h1",{className:"text-xs text-green-800 font-bold",children:(f=(j=(g=s==null?void 0:s.data)==null?void 0:g.data.details)==null?void 0:j.transactions.length)!=null?f:0})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Total Collection:"}),e.jsxs("h1",{className:"text-xs text-green-800 font-bold",children:["Rs. ",(b=(y=(N=s==null?void 0:s.data)==null?void 0:N.data.details)==null?void 0:y.totalCollection)!=null?b:0]})]})]}),e.jsx(V,{collectionData:s}),(s==null?void 0:s.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(Y,{page:c,perPage:m,totalPage:10,setPage:n=>l(n)}),e.jsx(x,{})]})]})})}export{re as default};