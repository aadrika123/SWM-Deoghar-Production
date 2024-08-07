import{u as S,h as $,j as e,$ as E,e as w,C as V,_ as l}from"./index-CedogC9c.js";import{d as F,h as y,r as U}from"./router-CTqkcgir.js";import{u as D,o as T,F as W,S as z,c as M,a as d}from"./SelectField-BEi-0vcW.js";import{u as _}from"./useComonData-CQTrx4dx.js";import{R as o}from"./RHFTextField-JypUoSY-.js";import{g as G}from"./services-KQnp_8oA.js";import{B as H}from"./ButtonLoading-DknVTMOi.js";import{R as k}from"./RotatingLoader-C5RJ5s0H.js";import{P as J}from"./index-C-xT_-z1.js";import{I as K}from"./Image-yazJxCgq.js";import{C as O,b as Q}from"./card-eO1MZjmk.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-Chrpx8yC.js";const X=M().shape({aptName:d().required("Apartment Name is required"),wardNo:d().required("Ward No is required"),aptCode:d().required("Apartment Type is required"),aptAddress:d().required("Apartment Category is required"),pinCode:d().required("Apartment Status is required")});function me(){var p,c,u,x,g;const P=F(),n=S({}),{getAllUser:m}=_(),{id:i}=y(),a=$({api:`${(p=w)==null?void 0:p.getApartmentById}?id=${i}`,options:{enabled:!!i}}),t=D({resolver:T(X),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:""}});U.useEffect(()=>{var s,r,h,j,N,f,A,C,b,v,q;(s=a==null?void 0:a.data)!=null&&s.data&&(t.setValue("aptName",((h=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:h.aptName)??""),t.setValue("wardNo",((N=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:N.wardNo)??""),t.setValue("aptCode",((A=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:A.aptCode)??""),t.setValue("aptAddress",((b=(C=a==null?void 0:a.data)==null?void 0:C.data)==null?void 0:b.aptAddress)??""),t.setValue("pinCode",((q=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:q.pinCode)??""))},[(c=a==null?void 0:a.data)==null?void 0:c.data]);const R=async s=>{V("Are you sure?","Please confirm",async()=>{try{const r=await n.mutateAsync({api:w.updateApartment,data:{apartmentId:i,apartmentName:s.aptName,wardNo:s.wardNo,apartmentCode:s.aptCode,address:s.aptAddress}});r.data.status?(l.success(r.data.msg),P(`/deoghar-app/apartment-actions/${i}`)):l.error(r.data.msg)}catch(r){l.error(G(r))}})};return e.jsx(J,{title:"Update Apartment",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(K,{src:"/assets/image/category.png",alt:"Update Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Update Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"solid west management system"})]})]}),e.jsx(E,{}),e.jsx(O,{children:e.jsx(Q,{children:e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(k,{})}):e.jsxs(W,{methods:t,onSubmit:t.handleSubmit(R),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(z,{name:"wardNo",isRequired:!0,label:"Ward No",selectedText:"Select Ward No",data:((g=(x=(u=m==null?void 0:m.data)==null?void 0:u.data[0].ulbDetails[0])==null?void 0:x.wards)==null?void 0:g.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(o,{name:"aptCode",isRequired:!0,label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(o,{name:"aptAddress",isRequired:!0,label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(o,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsx("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:e.jsx(H,{isLoading:n.isPending,disabled:n.isPending,size:"sm",type:"submit",className:"w-20",children:"Update"})})]})})})})]})})}export{me as default};
