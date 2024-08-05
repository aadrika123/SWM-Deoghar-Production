import{u as Y,h as y,e as x,j as e,B as Z,C as B,_ as C}from"./index-Bg7ERlhF.js";import{P as G}from"./index-CG2x7DO7.js";import{C as D,b as ee}from"./card-BCpDzxcN.js";import{c as ae,a as d,u as re,F as se,S as p,o as te}from"./SelectField-CpGzaXaD.js";import{R as b}from"./RHFTextField-fZ4Oht-I.js";import{R as de}from"./RHFTextArea-DQCoW3hO.js";import{d as ne,r as w}from"./router-CTqkcgir.js";import{a as oe,u as ie,b as me}from"./useComonData-BGT9xsbT.js";import{I as le}from"./Image-BKtOH8nL.js";import{S as ue}from"./separator-D35cJwmC.js";import{u as ce}from"./useMonthMap-C8hLMgQU.js";import{O as pe}from"./OverLayLoader-CUY-yID6.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./moment-BjLXg0w5.js";import"./module-1qrXv3fv.js";function Le(){var S,q,F,R,$,A,L,T,P,M,V,E,I,W,_,H,O,z;const k=ne(),h=Y({}),J=window.location.search,i=new URLSearchParams(J).get("id"),{resultList:K}=ce("4-1-2022"),{getConsumerAddFormData:g}=oe(),{getAllUser:j}=ie(),Q=ae().shape({wardNo:d().required().label("Ward no"),apartmentId:d().required().label("Choose Apartment"),consumerName:d().required().label("Consumer name"),mobileNo:d().required().label("Mobile no"),consumerCategory:d().required().label("Consumer category"),consumerType:d().required().label("Consumer type"),demandFrom:d().required().label("Demand from"),firmName:d().when("consumerCategory",{is:"2",then:()=>d().required().label("Firm name")}),licenseNo:d().when("consumerCategory",{is:"2",then:()=>d().required().label("License no")}),address:d().notRequired().label("Address"),pinCode:d().notRequired().label("Pin code")}),t=re({resolver:te(Q),defaultValues:{wardNo:"",apartmentId:"",address:"",pinCode:"",consumerName:"",mobileNo:"",consumerCategory:"",consumerType:"",demandFrom:"",firmName:"",licenseNo:""}}),r=y({api:`${x.getApartmentDetailsById}/${i}`,options:{enabled:!!i}}),v=w.useMemo(()=>{var a,o,s,m,l,u,c,U;return{wardNo:`${(o=(a=r==null?void 0:r.data)==null?void 0:a.data[0])==null?void 0:o.wardNo}`??"",apartmentId:`${(m=(s=r==null?void 0:r.data)==null?void 0:s.data[0])==null?void 0:m.id}`??"",address:((u=(l=r==null?void 0:r.data)==null?void 0:l.data[0])==null?void 0:u.address)??"",pinCode:((U=(c=r==null?void 0:r.data)==null?void 0:c.data[0])==null?void 0:U.pinCode)??"",consumerName:"",mobileNo:"",consumerCategory:"",consumerType:"",demandFrom:"",firmName:"",licenseNo:""}},[(q=(S=r==null?void 0:r.data)==null?void 0:S.data[0])==null?void 0:q.id,(R=(F=r==null?void 0:r.data)==null?void 0:F.data[0])==null?void 0:R.wardNo]);w.useEffect(()=>{i&&t.reset(v)},[i,v]);const{consumerCategoryData:N}=me(String(t.watch("consumerCategory"))),f=y({api:`${x.getApartmentListByWardNo}/${t.watch("wardNo")}`,options:{enabled:!!t.watch("wardNo")}}),n=y({api:`${x.getApartmentDetailsById}/${t.watch("apartmentId")}`,options:{enabled:!!t.watch("apartmentId")}});w.useEffect(()=>{var a,o,s,m,l,u,c;(o=(a=n==null?void 0:n.data)==null?void 0:a.data)!=null&&o[0]&&(t.setValue("address",`${(l=(m=(s=n==null?void 0:n.data)==null?void 0:s.data)==null?void 0:m[0])==null?void 0:l.address}`),t.setValue("pinCode",(c=(u=n==null?void 0:n.data)==null?void 0:u.data[0])==null?void 0:c.pinCode))},[(A=($=n==null?void 0:n.data)==null?void 0:$.data)==null?void 0:A[0]]);const X=async a=>{B("Are you sure?","Please confirm",async()=>{var o;try{const s=await(h==null?void 0:h.mutateAsync({api:(o=x)==null?void 0:o.postConsumerAdd,data:a}));s!=null&&s.data.status?(C.success(s==null?void 0:s.data.msg),k(`/deoghar-app/apartment-actions/${t.watch("apartmentId")}`)):C.error(s==null?void 0:s.data.msg)}catch{C.error("Something went wrong")}})};return e.jsxs(G,{title:"Add Flats",children:[h.isPending&&e.jsx(pe,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(le,{src:"/assets/image/category.png",alt:"Add Flats",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Add flats"}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Solid waste management system",t.watch("address")]})]})]}),e.jsx(ue,{}),e.jsx(D,{children:e.jsx(ee,{children:e.jsxs(se,{methods:t,onSubmit:t.handleSubmit(X),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(p,{isRequired:!0,disabled:!!i,name:"wardNo",label:"Ward No",data:((P=(T=(L=j==null?void 0:j.data)==null?void 0:L.data[0].ulbDetails[0])==null?void 0:T.wards)==null?void 0:P.map(a=>({label:String(a),value:String(a)})))??[]})}),e.jsx("div",{children:e.jsx(p,{isRequired:!0,disabled:!!i,name:"apartmentId",label:"Choose Apartment",data:((E=(V=(M=f==null?void 0:f.data)==null?void 0:M.data)==null?void 0:V.apartmentList)==null?void 0:E.map(a=>({label:String(a.apt_name),value:String(a.id)})))??[]})}),e.jsx("div",{children:e.jsx(p,{isRequired:!0,name:"consumerCategory",label:"Consumer Category",data:((_=(W=(I=g==null?void 0:g.data)==null?void 0:I.data)==null?void 0:W.consumerCategory)==null?void 0:_.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),e.jsx("div",{children:e.jsx(p,{isRequired:!0,name:"consumerType",label:"Consumer Type",data:((z=(O=(H=N==null?void 0:N.data)==null?void 0:H.data)==null?void 0:O.consumerTypeList)==null?void 0:z.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),{2:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(b,{isRequired:!0,name:"firmName",label:"Firm Name",type:"text"})}),e.jsx("div",{children:e.jsx(b,{name:"licenseNo",isRequired:!0,label:"License No",type:"text"})})]})}[t.watch("consumerCategory")],e.jsx("div",{children:e.jsx(b,{name:"consumerName",isRequired:!0,label:"Consumer Name",type:"text",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(b,{type:"number",isRequired:!0,name:"mobileNo",label:"Mobile No",inputValidation:["mobile"]})}),e.jsx("div",{children:e.jsx(de,{name:"address",isRequired:!0,label:"Address",disabled:!0})}),e.jsx("div",{children:e.jsx(p,{name:"demandFrom",isRequired:!0,label:"Demand From",data:K.map(a=>({label:String(a.str),value:String(a.str)}))??[]})})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(Z,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Add"})})]})})})]})]})}export{Le as default};
