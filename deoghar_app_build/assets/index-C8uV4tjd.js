import{u as v,j as e,g as N,_ as p}from"./index-DTqi6V4d.js";import{r as y,b as U,f as Y}from"./router-DQohkvhc.js";import{P as J}from"./index-DF8FeEK0.js";import{C as f,b as S,c as K}from"./card-B9F8ECvu.js";import{I as j}from"./Image-D8lGoGB4.js";import{u as z,b as Q}from"./useCustomQuery-Cds4yl3w.js";import{S as D}from"./separator-BgV1p01n.js";import{S as b}from"./SkeletonLoader-D9ob3bpH.js";import{a as I,o as q,F as V,c as B,b as h,S as X}from"./SelectField-BdY82NJy.js";import{R as T}from"./RHFTextField-D8qgjpI2.js";import{R as O}from"./RHFTextArea-Dd3_XEjK.js";import{B as W}from"./ButtonLoading-hsgNgxTR.js";import{B as G}from"./button-4Q2i98ua.js";import{C as H}from"./index-lo2-SXG4.js";import{u as Z}from"./useGeoLocation-Busbjqm0.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";const ee=B().shape({reminderDate:h().required("Apartment Type is required"),reminderTime:h().required("Apartment Category is required"),remarks:h().required("Apartment Status is required")});function te({open:d,setOpen:i,title:g,aptData:m}){const r=z({}),{user:l}=v(),s=()=>i(!d),t=I({resolver:q(ee),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),x=async n=>{H("Are you sure to pay?","Please confirm",async()=>{try{const o=await r.mutateAsync({api:N.postReminder,data:{...n,userId:l==null?void 0:l.id,apartmentId:m}});o.data.status?(p.success(o.data.msg),i(!1)):p.error(o.data.msg)}catch(o){p.error(o.msg)}})};return e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${d?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(V,{methods:t,onSubmit:t.handleSubmit(x),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(T,{name:"reminderDate",label:"Reminder Date",type:"date"})}),e.jsx("div",{children:e.jsx(T,{name:"reminderTime",label:"Reminder Time",type:"time"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(O,{name:"remarks",label:"Remarks"})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(G,{disabled:r.isPending,size:"sm",type:"button",onClick:s,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(W,{disabled:r.isPending,isLoading:r.isPending,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}const ae=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],se=B().shape({denyList:h().required("Deny List is required"),latitude:h(),longitude:h(),remarks:h().required("Remarks is required")});function ie({open:d,setOpen:i,title:g,aptData:m}){const r=z({}),{user:l}=v(),{coords:s,isGeolocationEnabled:t}=Z(),x=()=>i(!d),n=I({resolver:q(se),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),o=async u=>{H("Are you sure to pay?","Please confirm",async()=>{try{const c=await r.mutateAsync({api:N.postPaymentDeny,data:{...u,userId:l==null?void 0:l.id,apartmentId:m}});c.data.status?(p.success(c.data.msg),i(!1)):p.error(c.data.msg)}catch(c){p.error(c.msg)}})};return y.useEffect(()=>{m&&(n.setValue("latitude",String(s==null?void 0:s.latitude)),n.setValue("longitude",String(s==null?void 0:s.longitude))),n.watch("denyList")!=="other"&&n.setValue("remarks",n.watch("denyList")),n.watch("denyList")==="other"&&n.setValue("remarks","")},[n.watch("denyList")]),e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${d?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Deny"}),e.jsxs("button",{style:{background:"none"},onClick:x,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:t?e.jsxs(V,{methods:n,onSubmit:n.handleSubmit(o),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(X,{name:"denyList",label:"Deny List",data:ae})}),n.watch("denyList")==="other"&&e.jsx("div",{className:"col-span-2",children:e.jsx(O,{name:"remarks",label:"Remarks"})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(G,{size:"sm",disabled:r.isPending,type:"button",onClick:x,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(W,{isLoading:r.isPending,disabled:r.isPending,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]}):e.jsx("div",{className:"text-center py-4",children:e.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}const ne=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/apartment-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny List",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/apt-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"All Flats List",icon:"/icons/flats2.svg",link:"/deoghar-app/all-flats-list",bg:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE]",accessMenu:["4","5"]},{title:"Update Apartment",icon:"/icons/update.svg",link:"/deoghar-app/update-apartment",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Apartment",icon:"/icons/deactivate.svg",link:"/deoghar-app/deactivate-apt",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-apt-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/print-demand",accessMenu:["4"]}];function ke(){var x,n,o,u,c,k,w,F,C,A,E,L,P,$,M,R;const{user:d}=v(),i=U(),[g,m]=y.useState(!1),[r,l]=y.useState(!1),{id:s}=Y(),t=Q({api:`${N.getApartmentDetailsById}/${s}`,options:{enabled:!!s}});return t!=null&&t.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(f,{children:e.jsxs(S,{children:[e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{})]})})}):e.jsxs(J,{title:"Apartment Action",children:[g&&e.jsx(te,{open:g,setOpen:m,aptData:(x=t==null?void 0:t.data)==null?void 0:x.data[0].id}),r&&e.jsx(ie,{open:r,setOpen:l,aptData:(n=t==null?void 0:t.data)==null?void 0:n.data[0].id}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(j,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Apartment Action"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(D,{}),e.jsx(f,{children:e.jsx(S,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(o=t==null?void 0:t.data)==null?void 0:o.data[0])==null?void 0:u.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(k=(c=t==null?void 0:t.data)==null?void 0:c.data[0])==null?void 0:k.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(w=t==null?void 0:t.data)==null?void 0:w.data[0])==null?void 0:F.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=t==null?void 0:t.data)==null?void 0:C.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=t==null?void 0:t.data)==null?void 0:A.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(E=t==null?void 0:t.data)==null?void 0:E.data)==null?void 0:L.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:($=(P=t==null?void 0:t.data)==null?void 0:P.data[0])==null?void 0:$.address})})]})})}),e.jsx(D,{}),((R=(M=t==null?void 0:t.data)==null?void 0:M.data[0])==null?void 0:R.consumerNo)!=null?e.jsx("div",{className:"grid grid-cols-3 gap-2",children:ne.map((a,_)=>a.accessMenu.includes(`${d==null?void 0:d.userTypeId}`)&&e.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-2",children:[e.jsx(f,{onClick:()=>{a.title=="View & Pay"&&i(`${a.link}/${s}`),a.title=="All Flats List"&&i(`${a.link}/${s}`),a.title=="Transaction History"&&i(`${a.link}?id=${s}&tranType=apartmentId`),a.title=="Update Apartment"&&i(`${a.link}/${s}`),a.title=="Payment Adjustment"&&i(`${a.link}/${s}`),a.title=="Deactivate Apartment"&&i(`${a.link}/${s}`),a.title=="Geo Tagging"&&i(`${a.link}/${s}`),a.title=="Geo Map"&&i(`${a.link}/${s}`),a.title=="Print Demand"&&i(`${a.link}/${s}`),a.title=="Reminder"&&m(!0),a.title=="Deny List"&&l(!0)},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:e.jsx(j,{src:a.icon,alt:"icon"})}),e.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:a.title})]},_+1))}):e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsx(f,{className:"bg-gradient-to-tl from-[#EEEFF2] to-[#D4D8DE] h-full w-full px-2",onClick:()=>{i(`/deoghar-app/add-flat?id=${s}`)},children:e.jsxs("div",{className:"py-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(j,{src:"/assets/image/apartment.png",alt:"Avatar",className:"overflow-hidden w-10 h-10"})}),e.jsx(K,{className:"text-xs text-center mt-1",children:"Add Flat"})]})})})]})]})}export{ke as default};
