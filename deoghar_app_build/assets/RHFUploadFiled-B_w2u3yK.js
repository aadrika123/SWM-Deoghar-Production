import{j as e}from"./index-CIaZ666a.js";import{u as m,C as o,I as d}from"./SelectField-FXwVpMLJ.js";function j({name:s,label:a,isDynamic:c,...n}){const{control:r,setValue:x}=m();return e.jsx(o,{name:s,control:r,render:({field:{ref:i},fieldState:{error:t}})=>e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:a,children:[a," ",t&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx(d,{type:"file",onChange:l=>{x(s,l.target.files?l.target.files[0]:null)},ref:i,className:`mt-1 ${t?"border-red-400":null}`,...n}),t&&e.jsx("span",{className:"text-red-400 text-xs",children:t.message})]})})}export{j as R};