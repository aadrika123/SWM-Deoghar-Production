import{h as w,g as C,e as v,j as s}from"./index-CedogC9c.js";import{h as G,r as S}from"./router-CTqkcgir.js";import{P as L}from"./index-C-xT_-z1.js";import{C as y,b as u}from"./card-eO1MZjmk.js";import{I as P}from"./Image-yazJxCgq.js";import{S as A}from"./separator-D_Tcs8wJ.js";import{S as i}from"./SkeletonLoader-B4u5S7_E.js";import{V as R}from"./index-CtQEwZpY.js";import{R as V}from"./index-DzzC7D-Y.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function K(){var r,n,o,l,x,c,m,p,h,j,g,f,N,b;const{id:a}=G(),[I,d]=S.useState(!1),e=w({api:`${v.getApartmentDetailsById}/${a}`,options:{enabled:!!a}}),t=C({api:`${v.getGeoLocation}`,config:{apartmentId:a},options:{enabled:!!((n=(r=e==null?void 0:e.data)==null?void 0:r.data[0])!=null&&n.id)}});return e!=null&&e.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(y,{children:s.jsxs(u,{children:[s.jsx(i,{}),s.jsx(i,{}),s.jsx(i,{})]})})}):s.jsxs(L,{title:"GeoMap",children:[s.jsx(V,{slides:[{src:((l=(o=t==null?void 0:t.data)==null?void 0:o.data)==null?void 0:l.photo)??"",title:"Geo Tagging Image"}],open:I,close:()=>d(!1)}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(P,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(A,{}),s.jsx(y,{children:s.jsxs(u,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(x=e==null?void 0:e.data)==null?void 0:x.data[0])==null?void 0:c.apartmentCode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(p=(m=e==null?void 0:e.data)==null?void 0:m.data[0])==null?void 0:p.apartmentName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(j=(h=e==null?void 0:e.data)==null?void 0:h.data[0])==null?void 0:j.mobileNo})})]}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("button",{onClick:()=>d(!0),type:"button",className:"text-blue-600 text-sm font-bold",children:"View Geo Tagging Image"})})]})}),s.jsx(A,{}),s.jsx(R,{lat:(f=(g=t==null?void 0:t.data)==null?void 0:g.data)==null?void 0:f.latitude,lng:(b=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:b.longitude,height:"500px"})]})]})}export{K as default};
