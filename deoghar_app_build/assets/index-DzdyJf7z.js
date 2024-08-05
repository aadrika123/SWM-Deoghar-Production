import{d as l,j as e,B as V,C as W,_ as x}from"./index-DwHfpNlX.js";import{u as X,o as Y,F as Z,S as D,c as ee,a as H,e as ae}from"./SelectField-DCQpvyE5.js";import{g as se}from"./services-KQnp_8oA.js";import{R as de}from"./RHFTextArea-Bi2Av3mx.js";import{d as te,h as ie}from"./router-CxMlH8iW.js";import{R as re}from"./RHFUploadFiled-D2Jrz2OK.js";import{P as ne}from"./index-B1FKUPV7.js";import{C as c,b as h}from"./card-CP_wK8K2.js";import{I as oe}from"./Image-C1aMTGBV.js";import{u as le,b as me,a as G}from"./useCustomQuery-CJHa6I0o.js";import{S as J}from"./separator-BoijPV8d.js";import{S as p}from"./SkeletonLoader-B2orm8Zf.js";import{O as xe}from"./OverLayLoader-8kHSgIe9.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-BOCHwcoi.js";const ce=ee().shape({paymentUpToMonth:H().required("Month is required"),remarks:H().required("Remark is required"),billFile:ae().required("Bill File is required").test("fileSize","File Size is too large. Max 900kb allowed.",r=>r&&r.size<=9e5)});function we(){var j,g,f,u,b,v,N,y,F,S,M,U,C,R,w,T,q,P,k,A,I,L,B,$,z,_;const r=le({}),K=te(),{id:d}=ie(),a=me({api:"".concat(l.getConsumerDetailsById,"/").concat(d),options:{enabled:!!d}}),m=G({api:l.getPaymentData,config:{consumerId:d},options:{enabled:!!d}}),n=X({resolver:Y(ce)}),Q=async t=>{var O,E;const i=new FormData;i.append("consumerId",String(d)),i.append("adjustUpto",t.paymentUpToMonth),i.append("adjustAmount",String((E=(O=s==null?void 0:s.data)==null?void 0:O.data)==null?void 0:E.totaldemand)),i.append("remarks",t.remarks),i.append("billFile",t.billFile),W("Are you sure?","Please confirm",async()=>{try{const o=await r.mutateAsync({api:l.paymentAdjustment,data:i});o.data.status?(x.success(o.data.msg),K("/deoghar-app/consumer-actions/".concat(d))):x.error(o.data.msg)}catch(o){x.error(se(o))}})},s=G({api:l.getCalculatedAmount,config:{consumerId:d,payUpto:n.watch("paymentUpToMonth")},value:[n.watch("paymentUpToMonth")],options:{enabled:!!n.watch("paymentUpToMonth")&&!!d}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]})})}):e.jsxs(ne,{title:"Demand Update",children:[r.isLoading&&e.jsx(xe,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(oe,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Demand Update"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(J,{}),e.jsx(c,{children:e.jsx(h,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(g=(j=a==null?void 0:a.data)==null?void 0:j.data[0])==null?void 0:g.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:u.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:v.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(y=(N=a==null?void 0:a.data)==null?void 0:N.data[0])==null?void 0:y.monthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(F=a==null?void 0:a.data)==null?void 0:F.data[0])==null?void 0:S.totalDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(U=(M=a==null?void 0:a.data)==null?void 0:M.data[0])==null?void 0:U.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(R=(C=a==null?void 0:a.data)==null?void 0:C.data[0])==null?void 0:R.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=(w=a==null?void 0:a.data)==null?void 0:w.data)==null?void 0:T.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(q=a==null?void 0:a.data)==null?void 0:q.data[0])==null?void 0:P.Address})})]})})}),e.jsx(J,{}),e.jsx(c,{children:e.jsx(h,{children:e.jsx(Z,{methods:n,onSubmit:n.handleSubmit(Q),children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(D,{isRequired:!0,name:"paymentUpToMonth",label:"Payment upto month",data:(L=(I=(A=(k=m==null?void 0:m.data)==null?void 0:k.data)==null?void 0:A.demand)==null?void 0:I.map(t=>({label:t.payment_to,value:t.payment_to})))!=null?L:[]})}),e.jsx("div",{children:e.jsx(de,{name:"remarks",label:"Remarks",isRequired:!0})}),e.jsx("div",{children:e.jsx(re,{isRequired:!0,name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsxs(V,{type:"submit",size:"sm",children:[s.isLoading?"Loading...":"SUBMIT"," ",(($=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:$.totaldemand)&&((_=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:_.totaldemand)]})})]})})})})]})]})}export{we as default};