import{j as s,E as h,f as i}from"./index-CedogC9c.js";import{R as u}from"./router-CTqkcgir.js";import{d as j,C as p,I as g}from"./SelectField-BEi-0vcW.js";function v({name:n,label:a,inputSize:o,...d}){const{control:m}=j(),[l,c]=u.useState(!1);return s.jsx(p,{name:n,control:m,render:({field:{ref:r,...e},fieldState:{error:t}})=>s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:a,children:[a," ",t&&a&&s.jsx("span",{className:"text-red-400",children:"*"})]}),s.jsxs("div",{className:"relative mt-1",children:[s.jsx(g,{...e,value:typeof e.value=="number"&&e.value===0?"":e.value,ref:r,className:`mt-1 ${t?"border-red-400":null}
              ${o==="small"&&"h-8"||o==="medium"&&"h-10"||o==="large"&&"h-12"||"h-9"}`,type:l?"text":"password",...d}),s.jsx("button",{style:{backgroundColor:"none"},type:"button",className:"absolute right-3 top-4",onClick:()=>c(x=>!x),children:l?s.jsx(h,{width:20,height:20}):s.jsx(i,{width:20,height:20})})]}),t&&s.jsx("span",{className:"text-red-400 text-xs",children:t==null?void 0:t.message})]})})}export{v as R};
