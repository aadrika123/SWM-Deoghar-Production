import{g as f,j as s}from"./index-BcSDAYQy.js";import{P as v}from"./index-J44beZ8l.js";import{C as N,b}from"./card-BGFnyxWs.js";import{I as y}from"./Image-Bg3N0v8H.js";import{b as C,a as w}from"./useCustomQuery-Dq0ecwmr.js";import{S as u}from"./separator-CnGhRSp5.js";import{S as i}from"./SkeletonLoader-OY0Dt_0V.js";import{V as A}from"./index-C1ENkj92.js";import{h as S}from"./router-CTqkcgir.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function q(){var t,r,o,n,x,l,m,c,h,j,p,g;const{id:d}=S(),a=C({api:`${f.getConsumerDetailsById}/${d}`,options:{enabled:!!d}}),e=w({api:`${f.getGeoLocation}`,config:{consumerId:d},options:{enabled:!!((r=(t=a==null?void 0:a.data)==null?void 0:t.data[0])!=null&&r.id)}});return a!=null&&a.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(N,{children:s.jsxs(b,{children:[s.jsx(i,{}),s.jsx(i,{}),s.jsx(i,{})]})})}):s.jsx(v,{title:"GeoMap",children:s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(y,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(u,{}),s.jsx(N,{children:s.jsx(b,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(n=(o=a==null?void 0:a.data)==null?void 0:o.data[0])==null?void 0:n.consumerNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(l=(x=a==null?void 0:a.data)==null?void 0:x.data[0])==null?void 0:l.consumerName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(m=a==null?void 0:a.data)==null?void 0:m.data[0])==null?void 0:c.mobileNo})})]})})}),s.jsx(u,{}),s.jsx(A,{lat:(j=(h=e==null?void 0:e.data)==null?void 0:h.data)==null?void 0:j.latitude,lng:(g=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:g.longitude,height:"500px"})]})})}export{q as default};
