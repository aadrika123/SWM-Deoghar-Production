import{d as v,j as s}from"./index-DwHfpNlX.js";import{r as G,h as S}from"./router-CxMlH8iW.js";import{P as A}from"./index-B1FKUPV7.js";import{C as y,b as C}from"./card-CP_wK8K2.js";import{I as L}from"./Image-C1aMTGBV.js";import{R as P}from"./index-AxdjreEK.js";import{b as R,a as V}from"./useCustomQuery-CJHa6I0o.js";import{S as I}from"./separator-BoijPV8d.js";import{S as i}from"./SkeletonLoader-B2orm8Zf.js";import{V as $}from"./index-AGPwTN09.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";function Q(){var r,o,n,l,x,c,m,h,p,j,g,f,N,b,u;const[w,d]=G.useState(!1),{id:t}=S(),e=R({api:"".concat(v.getConsumerDetailsById,"/").concat(t),options:{enabled:!!t}}),a=V({api:"".concat(v.getGeoLocation),config:{consumerId:t},options:{enabled:!!((o=(r=e==null?void 0:e.data)==null?void 0:r.data[0])!=null&&o.id)}});return e!=null&&e.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(y,{children:s.jsxs(C,{children:[s.jsx(i,{}),s.jsx(i,{}),s.jsx(i,{})]})})}):s.jsxs(A,{title:"GeoMap",children:[s.jsx(P,{slides:[{src:(x=(l=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:l.photo)!=null?x:"",title:"Geo Tagging Image"}],open:w,close:()=>d(!1)}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(L,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(I,{}),s.jsx(y,{children:s.jsxs(C,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(m=(c=e==null?void 0:e.data)==null?void 0:c.data[0])==null?void 0:m.consumerNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(p=(h=e==null?void 0:e.data)==null?void 0:h.data[0])==null?void 0:p.consumerName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(g=(j=e==null?void 0:e.data)==null?void 0:j.data[0])==null?void 0:g.mobileNo})})]}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("button",{onClick:()=>d(!0),type:"button",className:"text-blue-600 text-sm font-bold",children:"View Geo Tagging Image"})})]})}),s.jsx(I,{}),s.jsx($,{lat:(N=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:N.latitude,lng:(u=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:u.longitude,height:"500px"})]})]})}export{Q as default};