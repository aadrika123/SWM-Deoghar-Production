import{d as y,j as s}from"./index-DwHfpNlX.js";import{h as C,r as G}from"./router-CxMlH8iW.js";import{P as S}from"./index-B1FKUPV7.js";import{C as u,b as A}from"./card-CP_wK8K2.js";import{I as L}from"./Image-C1aMTGBV.js";import{b as P,a as R}from"./useCustomQuery-CJHa6I0o.js";import{S as I}from"./separator-BoijPV8d.js";import{S as i}from"./SkeletonLoader-B2orm8Zf.js";import{V}from"./index-AGPwTN09.js";import{R as $}from"./index-AxdjreEK.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";function Q(){var r,o,n,l,x,m,c,p,h,j,g,f,N,b,v;const{id:a}=C(),[w,d]=G.useState(!1),e=P({api:"".concat(y.getApartmentDetailsById,"/").concat(a),options:{enabled:!!a}}),t=R({api:"".concat(y.getGeoLocation),config:{apartmentId:a},options:{enabled:!!((o=(r=e==null?void 0:e.data)==null?void 0:r.data[0])!=null&&o.id)}});return e!=null&&e.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(u,{children:s.jsxs(A,{children:[s.jsx(i,{}),s.jsx(i,{}),s.jsx(i,{})]})})}):s.jsxs(S,{title:"GeoMap",children:[s.jsx($,{slides:[{src:(x=(l=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:l.photo)!=null?x:"",title:"Geo Tagging Image"}],open:w,close:()=>d(!1)}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(L,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(I,{}),s.jsx(u,{children:s.jsxs(A,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(m=e==null?void 0:e.data)==null?void 0:m.data[0])==null?void 0:c.apartmentCode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(h=(p=e==null?void 0:e.data)==null?void 0:p.data[0])==null?void 0:h.apartmentName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(g=(j=e==null?void 0:e.data)==null?void 0:j.data[0])==null?void 0:g.mobileNo})})]}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("button",{onClick:()=>d(!0),type:"button",className:"text-blue-600 text-sm font-bold",children:"View Geo Tagging Image"})})]})}),s.jsx(I,{}),s.jsx(V,{lat:(N=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:N.latitude,lng:(v=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:v.longitude,height:"500px"})]})]})}export{Q as default};