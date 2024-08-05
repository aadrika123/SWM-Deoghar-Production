import{i as I,u as N,j as e,B as F,C as L,e as v,_ as i}from"./index-Bg7ERlhF.js";import{d as O,r as W}from"./router-CTqkcgir.js";import{P as k}from"./index-CG2x7DO7.js";import{C as B,b as V}from"./card-BCpDzxcN.js";import{c as G,a as t,e as U,u as T,F as M,S as f,o as _}from"./SelectField-CpGzaXaD.js";import{R as n}from"./RHFTextField-fZ4Oht-I.js";import{R as y}from"./RHFTextArea-DQCoW3hO.js";import{u as $}from"./useComonData-BGT9xsbT.js";import{r as z}from"./resizeImage-CrB9ZKdU.js";import{I as C}from"./Image-BKtOH8nL.js";import{S as E}from"./separator-D35cJwmC.js";import{O as S}from"./OverLayLoader-CUY-yID6.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-1qrXv3fv.js";function ne(){var p,g,b,h,x;const w=O(),[u,R]=W.useState(""),{coords:o}=I(),c=N({}),d=N({}),{getAllUser:m}=$(),q=G().shape({latitude:t().required().label("Latitude"),longitude:t().required().label("Longitude"),remarks:t().required().label("Remarks"),complain:t().required().label("Complain"),consumerNo:t().required().label("Consumer no"),consumerWard:t().required().label("Ward no"),consumerName:t().required().label("Consumer name"),mobileNo:t().required().label("Mobile no"),consumerAddress:t().required().label("consumerAddress"),photo:U().required().label("Photo").nullable()}),r=T({resolver:_(q),defaultValues:{latitude:"",longitude:"",remarks:"",complain:"",consumerNo:"",consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:"",photo:null}}),A=async s=>{L("Are you sure?","Please confirm",async()=>{try{const a=new FormData;a.append("photo",s.photo),a.append("latitude",s.latitude),a.append("longitude",s.longitude),a.append("remarks",s.remarks),a.append("complain",s.complain),a.append("consumerNo",s.consumerNo),a.append("consumerWard",s.consumerWard),a.append("consumerName",s.consumerName),a.append("mobileNo",s.mobileNo),a.append("consumerAddress",s.consumerAddress);const l=await c.mutateAsync({api:v.postTcComplain,data:a});l.data.status?(i.success(l.data.msg),r.reset({...r.getValues(),latitude:"",longitude:"",remarks:"",complain:"",consumerNo:"",consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:"",photo:""}),w("/deoghar-app/view-complain-list")):i.error(l.data.msg)}catch{}})},P=async()=>{try{const s=await d.mutateAsync({api:v.consumerDetails,data:{consumerNo:r.watch("consumerNo")}});s.data.status?(i.success(s.data.msg),r.reset({...r.getValues(),consumerWard:String(s.data.data.ward_no??""),consumerName:String(s.data.data.name??""),mobileNo:String(s.data.data.mobile_no??""),consumerAddress:String(s.data.data.address??"")})):(r.reset({...r.getValues(),consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:""}),i.error(s.data.msg))}catch{i.error("Something went wrong")}},D=async s=>{const a=s.target.files[0];if(!a)return;const l=await z(a),j=new File([l],a==null?void 0:a.name,{type:"image/*"});r.setValue("photo",j),r.setValue("latitude",String(o==null?void 0:o.latitude)),r.setValue("longitude",String(o==null?void 0:o.longitude)),R(URL.createObjectURL(j)||URL.createObjectURL(a))};return e.jsxs(k,{title:"Grievances Post Complain",children:[c.isPending&&e.jsx(S,{}),d.isPending&&e.jsx(S,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(C,{src:"/assets/image/category.png",alt:"Grievances Post Complain",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Grievances Post Complain"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(E,{}),e.jsx(B,{children:e.jsx(V,{children:e.jsxs(M,{methods:r,onSubmit:r.handleSubmit(A),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(n,{isRequired:!0,name:"consumerNo",label:"Consumer No",onBlur:P})}),e.jsx("div",{children:e.jsx(f,{isRequired:!0,name:"consumerWard",label:"Ward No",disabled:!0,data:((b=(g=(p=m==null?void 0:m.data)==null?void 0:p.data[0].ulbDetails[0])==null?void 0:g.wards)==null?void 0:b.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(n,{name:"consumerName",isRequired:!0,label:"Consumer Name",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{disabled:!0,name:"mobileNo",label:"Mobile No",isRequired:!0,type:"number",inputValidation:["mobile"]})}),e.jsx("div",{children:e.jsx(y,{disabled:!0,name:"consumerAddress",isRequired:!0,label:"Consumer Address"})}),e.jsx("div",{children:e.jsx(f,{name:"complain",label:"Complain",isRequired:!0,data:[{label:"Delayed Collection",value:"Delayed Collection"},{label:"Improper Disposal",value:"Improper Disposal"},{label:"Overflowing Bins",value:"Overflowing Bins"},{label:"Unhygienic Conditions",value:"Unhygienic Conditions"},{label:"Damaged Bins",value:"Damaged Bins"},{label:"Non-Collection of Recyclables",value:"Non-Collection of Recyclables"},{label:"Illegal Dumping",value:"Illegal Dumping"},{label:"Odor Issues",value:"Odor Issues"},{label:"Pest Problems",value:"Pest Problems"},{label:"Customer Service Issues",value:"Customer Service Issues"},{label:"Others",value:"Others"}]})}),e.jsxs("div",{children:[e.jsx(n,{type:"file",isRequired:!0,label:"Photo",accept:"image/*",onChange:s=>{D(s)}}),e.jsx("p",{className:"text-xs text-red-500",children:(h=r.formState.errors.photo)==null?void 0:h.message}),r.watch("latitude")&&r.watch("longitude")&&e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h1",{className:"text-xs font-semibold",children:["Latitude: ",r.watch("latitude")]}),e.jsxs("h1",{className:"text-xs font-semibold",children:["Longitude: ",r.watch("longitude")]})]})]}),e.jsx("div",{className:"flex justify-center",children:u&&e.jsx(C,{src:u,alt:"Geo Tagging Consumer",className:"object-cover rounded-lg bg-gray-200 p-0.5"})}),e.jsx("div",{children:e.jsx(y,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(F,{disabled:!((x=d.data)!=null&&x.data.status),type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"SUBMIT"})})]})})})]})]})}export{ne as default};
