import{j as e,g as w,_ as c}from"./index-D9SUnkI2.js";import{b as M,f as P,r as R}from"./router-DQohkvhc.js";import{a as $,o as B,F as E,S as u,c as H,b as s}from"./SelectField-WJfBqNjK.js";import{P as I}from"./index-BhPwl-Wc.js";import{I as V}from"./Image-C1TMCRx8.js";import{C as k,b as W}from"./card-BocCdTs6.js";import{S as _}from"./separator-ZtTJhbg_.js";import{a as z,b as G}from"./useComonData-BiZaX7UW.js";import{u as J}from"./useMonthMap-C8hLMgQU.js";import{u as K,b as L}from"./useCustomQuery-DgvKAbQU.js";import{g as O}from"./services-KQnp_8oA.js";import{R as n}from"./RHFTextField-BdHjFRnA.js";import{R as Q}from"./RHFTextArea-Cmq2qkMm.js";import{B as U}from"./button-IjAY8dzr.js";import{C as X}from"./index-DIInLEzD.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./moment-BjLXg0w5.js";const Y=H().shape({wardNo:s().required().label("Ward no"),holdingNo:s().required().label("Holding no"),consumerNo:s().required().label("Consumer no"),mobileNo:s().required().label("Mobile no"),demandFrom:s().required().label("Demand from"),consumerCategory:s().required().label("Consumer category"),consumerType:s().required().label("Consumer type"),renterName:s().required().label("Renter name"),pinCode:s(),address:s()});function xe(){var g,b,x,h,N,y;const A=K({}),T=M(),{id:d}=P(),{getConsumerAddFormData:m}=z(),{resultList:i}=J("4-1-2022"),r=L({api:`${w.getConsumerDetailsById}/${d}`,options:{enabled:!!d}}),p=R.useMemo(()=>{var a,o,j,f,C,v,S,F;return{wardNo:String((o=(a=r==null?void 0:r.data)==null?void 0:a.data[0])==null?void 0:o.wardNo)??"",holdingNo:String((f=(j=r==null?void 0:r.data)==null?void 0:j.data[0])==null?void 0:f.holdingNo)??"",consumerNo:String((v=(C=r==null?void 0:r.data)==null?void 0:C.data[0])==null?void 0:v.consumerNo)??"",consumerName:String((F=(S=r==null?void 0:r.data)==null?void 0:S.data[0])==null?void 0:F.consumerName)??"",mobileNo:"",demandFrom:"",consumerCategory:"",consumerType:"",renterName:"",address:""}},[(g=r==null?void 0:r.data)==null?void 0:g.data[0]]),t=$({resolver:B(Y),defaultValues:p}),q=async a=>{X("Are you sure to pay?","Please confirm",async()=>{try{const o=await A.mutateAsync({api:w.postRenterForn,data:{consumerId:d,consumerCategory:a.consumerCategory,consumerName:a.renterName,consumerType:a.consumerType,demandFrom:a.demandFrom,holdingNo:a.holdingNo,mobileNo:a.mobileNo,pinCode:a.pinCode,address:a.address,wardNo:a.wardNo}});o.data.status?(c.success(o.data.msg),T(`/deoghar-app/consumer-actions/${d}`)):c.error(o.data.msg)}catch(o){c.error(O(o))}})};R.useEffect(()=>{var a;(a=r==null?void 0:r.data)!=null&&a.data[0]&&t.reset(p)},[(b=r==null?void 0:r.data)==null?void 0:b.data[0].id]);const{consumerCategoryData:l}=G(t.watch("consumerCategory"));return e.jsx(I,{title:"Add Renter",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(V,{src:"/assets/icons/searchConsumer.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Add Renter"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(_,{}),e.jsx(k,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(W,{className:"px-6 text-sm",children:e.jsx(E,{methods:t,onSubmit:t.handleSubmit(q),children:e.jsxs("div",{className:"grid grid-cols-1 gap-3 space-x-1",children:[e.jsx(n,{name:"wardNo",label:"Ward no",disabled:!0}),e.jsx(n,{name:"holdingNo",label:"Holding no",disabled:!0}),e.jsx(n,{name:"consumerName",label:"Consumer no",disabled:!0}),e.jsx("div",{children:e.jsx(u,{name:"consumerCategory",label:"Consumer Category",data:((N=(h=(x=m==null?void 0:m.data)==null?void 0:x.data)==null?void 0:h.consumerCategory)==null?void 0:N.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),e.jsx("div",{children:e.jsx(u,{name:"consumerType",label:"Consumer Type",data:((y=l==null?void 0:l.data)==null?void 0:y.data.consumerTypeList.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),e.jsx("div",{children:e.jsx(n,{name:"renterName",label:"Renter Name"})}),e.jsx("div",{children:e.jsx(n,{type:"number",name:"mobileNo",label:"Mobile no",inputValidation:["mobile"]})}),e.jsx("div",{children:e.jsx(Q,{name:"address",label:"Address"})}),e.jsx("div",{children:e.jsx(n,{type:"number",name:"pinCode",label:"Pin Code",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(u,{name:"demandFrom",label:"Demand From",data:(i==null?void 0:i.map(a=>({label:String(a.str),value:String(a.str)})))??[]})}),e.jsx("div",{children:e.jsx(U,{type:"submit",className:"w-full mt-4",children:"Add Renter"})})]})})})})]})})}export{xe as default};
