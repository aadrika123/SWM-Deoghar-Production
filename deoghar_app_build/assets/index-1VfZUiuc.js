import{u as R,j as e,C as A,e as T,_ as u}from"./index-Bg7ERlhF.js";import{P}from"./index-CG2x7DO7.js";import{C as L,b as M}from"./card-BCpDzxcN.js";import{c as V,a,u as B,F as D,S as d,o as I}from"./SelectField-CpGzaXaD.js";import{R as i}from"./RHFTextField-fZ4Oht-I.js";import{B as $}from"./ButtonLoading-BtRUnwEr.js";import{d as z}from"./router-CTqkcgir.js";import{a as G,u as H,b as W}from"./useComonData-BGT9xsbT.js";import{I as _}from"./Image-BKtOH8nL.js";import{S as E}from"./separator-D35cJwmC.js";import{u as k}from"./useMonthMap-C8hLMgQU.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./moment-BjLXg0w5.js";function ne(){var c,p,x,g,h,b,j,y,N;const q=z(),t=R({}),{resultList:S}=k("4-1-2022"),{getConsumerAddFormData:o}=G(),{getAllUser:l}=H(),w=V().shape({wardNo:a().required().label("Ward no"),holdingNo:a(),consumerName:a().required().label("Consumer name"),mobileNo:a().required().label("Mobile no"),address:a().required().label("Address"),pinCode:a().required().label("Pin code"),consumerCategory:a().required().label("Consumer category"),consumerType:a().required().label("Consumer type"),demandFrom:a().required().label("Demand from"),firmName:a().when("consumerCategory",{is:"2",then:()=>a().required().label("Firm name")}),licenseNo:a().when("consumerCategory",{is:"2",then:()=>a().required().label("License no")}),selectText:a()}),n=B({resolver:I(w),defaultValues:{wardNo:"",holdingNo:"",consumerName:"",mobileNo:"",address:"",pinCode:"",consumerCategory:"",consumerType:"",demandFrom:"",firmName:"",licenseNo:"",selectText:""}}),{consumerCategoryData:m}=W(String(n.watch("consumerCategory"))),F=async r=>{A("Are you sure?","Please confirm",async()=>{var C,f,v;try{const s=await(t==null?void 0:t.mutateAsync({api:(C=T)==null?void 0:C.postConsumerAdd,data:r}));s!=null&&s.data.status?(u.success(s==null?void 0:s.data.msg),q(`/deoghar-app/consumer-actions/${(v=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:v.consumerId}`)):u.error(s==null?void 0:s.data.msg)}catch{u.error("Something went wrong")}})};return e.jsx(P,{title:"Add Consumer",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(_,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Add Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Add consumer details here."})]})]}),e.jsx(E,{}),e.jsx(L,{children:e.jsx(M,{children:e.jsxs(D,{methods:n,onSubmit:n.handleSubmit(F),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(d,{selectedText:"selectText",isRequired:!0,name:"consumerCategory",label:"Consumer Category",data:((x=(p=(c=o==null?void 0:o.data)==null?void 0:c.data)==null?void 0:p.consumerCategory)==null?void 0:x.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),e.jsx("div",{children:e.jsx(d,{name:"consumerType",isRequired:!0,label:"Consumer Type",data:((b=(h=(g=m==null?void 0:m.data)==null?void 0:g.data)==null?void 0:h.consumerTypeList)==null?void 0:b.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),{2:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(i,{isRequired:!0,name:"firmName",label:"Firm Name",type:"text"})}),e.jsx("div",{children:e.jsx(i,{isRequired:!0,name:"licenseNo",label:"License No",type:"text"})})]})}[n.watch("consumerCategory")],e.jsx("div",{children:e.jsx(d,{name:"wardNo",isRequired:!0,label:"Ward No",data:((N=(y=(j=l==null?void 0:l.data)==null?void 0:j.data[0].ulbDetails[0])==null?void 0:y.wards)==null?void 0:N.map(r=>({label:String(r),value:String(r)})))??[]})}),e.jsx("div",{children:e.jsx(i,{name:"holdingNo",label:"Holding No",type:"text",inputValidation:["removeSpace"]})}),e.jsx("div",{children:e.jsx(i,{name:"consumerName",isRequired:!0,label:"Consumer Name",type:"text",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(i,{name:"mobileNo",isRequired:!0,type:"number",label:"Mobile No",inputValidation:["mobile","number"]})}),e.jsx("div",{children:e.jsx(i,{name:"address",label:"Address",type:"text",isRequired:!0})}),e.jsx("div",{children:e.jsx(i,{isRequired:!0,name:"pinCode",label:"Pin Code",type:"text",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(d,{name:"demandFrom",isRequired:!0,label:"Demand From",data:S.map(r=>({label:String(r.str),value:String(r.str)}))??[]})})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx($,{isLoading:t.isPending,disabled:t.isPending,type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Add Consumer"})})]})})})]})})}export{ne as default};
