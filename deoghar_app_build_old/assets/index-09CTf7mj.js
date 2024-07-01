import{g as l,j as a,_ as x}from"./index-Cn5xDO1F.js";import{a as G,o as J,F as K,S as Q,c as W,b as E,d as X}from"./SelectField-3rS98xnU.js";import{g as Y}from"./services-KQnp_8oA.js";import{R as Z}from"./RHFTextArea-DApfdEjo.js";import{B as D}from"./ButtonLoading-D2C87dBc.js";import{b as aa,f as ea}from"./router-DQohkvhc.js";import{R as sa}from"./RHFUploadFiled-CSCns7sf.js";import{P as ta}from"./index-CivxP6ki.js";import{C as c,b as h}from"./card-C8izw3rS.js";import{I as da}from"./Image-0tXDnn-F.js";import{u as ia,b as ra,a as H}from"./useCustomQuery-DkwPn-t_.js";import{S as z}from"./separator-D7xTCwRY.js";import{S as p}from"./SkeletonLoader-KrJJX8dt.js";import{C as na}from"./index-C5qIt-LQ.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./button-BUjwbGzf.js";const la=W().shape({paymentUpToMonth:E().required("Month is required"),remarks:E().required("Remark is required"),billFile:X().required("Bill File is required")});function Sa(){var j,g,f,b,v,y,N,u,F,M,U,S,A,P,T,w,k,C,L,R,I,q,B;const O=aa(),o=ia({}),{id:t}=ea(),e=ra({api:`${l.getApartmentDetailsById}/${t}`,options:{enabled:!!t}}),m=H({api:l.getPaymentData,config:{apartmentId:t},options:{enabled:!!t}}),r=G({resolver:J(la),defaultValues:{paymentUpToMonth:"",remarks:"",billFile:""}}),V=async d=>{var $,_;const i=new FormData;i.append("apartmentId",String(t)),i.append("adjustUpto",d.paymentUpToMonth),i.append("adjustAmount",String((_=($=s==null?void 0:s.data)==null?void 0:$.data)==null?void 0:_.totaldemand)),i.append("remarks",d.remarks),i.append("billFile",d.billFile),na("Are you sure to pay?","Please confirm",async()=>{try{const n=await o.mutateAsync({api:l.paymentAdjustment,data:i});n.data.status?(x.success(n.data.msg),O(`/deoghar-app/apartment-actions/${t}`)):x.error(n.data.msg)}catch(n){x.error(Y(n))}})},s=H({api:l.getCalculatedAmount,config:{apartmentId:t,payUpto:r.watch("paymentUpToMonth")},value:[r.watch("paymentUpToMonth")],options:{enabled:!!r.watch("paymentUpToMonth")&&!!t}});return e!=null&&e.isLoading?a.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:a.jsx(c,{children:a.jsxs(h,{children:[a.jsx(p,{}),a.jsx(p,{}),a.jsx(p,{})]})})}):a.jsx(ta,{title:"Demand Update",children:a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(da,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Demand Update"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx(z,{}),a.jsx(c,{children:a.jsx(h,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(g=(j=e==null?void 0:e.data)==null?void 0:j.data[0])==null?void 0:g.apartmentCode})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(b=(f=e==null?void 0:e.data)==null?void 0:f.data[0])==null?void 0:b.apartmentName})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(y=(v=e==null?void 0:e.data)==null?void 0:v.data[0])==null?void 0:y.mobileNo})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(N=e==null?void 0:e.data)==null?void 0:N.totalAptMonthlyDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(u=e==null?void 0:e.data)==null?void 0:u.totalAptDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(M=(F=e==null?void 0:e.data)==null?void 0:F.data[0])==null?void 0:M.demandFrom})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(S=(U=e==null?void 0:e.data)==null?void 0:U.data[0])==null?void 0:S.demandUpto})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(P=(A=e==null?void 0:e.data)==null?void 0:A.data)==null?void 0:P.length})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(w=(T=e==null?void 0:e.data)==null?void 0:T.data[0])==null?void 0:w.address})})]})})}),a.jsx(z,{}),a.jsx(c,{children:a.jsx(h,{children:a.jsx(K,{methods:r,onSubmit:r.handleSubmit(V),children:a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(Q,{name:"paymentUpToMonth",label:"Payment upto month",data:((L=(C=(k=m==null?void 0:m.data)==null?void 0:k.data)==null?void 0:C.demand)==null?void 0:L.map(d=>({label:d.payment_to,value:d.payment_to})))??[]})}),a.jsx("div",{children:a.jsx(Z,{name:"remarks",label:"Remarks"})}),a.jsx("div",{children:a.jsx(sa,{name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),a.jsx("div",{className:"flex justify-end mt-2",children:a.jsxs(D,{type:"submit",size:"sm",isLoading:o.isPending||s.isLoading,disabled:s.isLoading||o.isPending,children:[s.isLoading?"Loading...":"SUBMIT"," ",((I=(R=s==null?void 0:s.data)==null?void 0:R.data)==null?void 0:I.totaldemand)&&((B=(q=s==null?void 0:s.data)==null?void 0:q.data)==null?void 0:B.totaldemand)]})})]})})})})]})})}export{Sa as default};