import{j as s,E as p,a as h,u as g,b as j,_ as d}from"./index-BcSDAYQy.js";import{R as f,L as N}from"./router-CTqkcgir.js";import{u as y,C as w,I as v,a as b,o as F,F as L,c as E,b as x}from"./SelectField-K2-9aOpB.js";import{R as S}from"./RHFTextField-BRu0HiXJ.js";import{g as C}from"./services-KQnp_8oA.js";import{B as P}from"./ButtonLoading-D-mbbD-b.js";import{u as R}from"./useCustomQuery-Dq0ecwmr.js";import{P as k}from"./index-J44beZ8l.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./button-CsnK0fxW.js";function A(){return s.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm py-6",children:[s.jsx("div",{className:"flex justify-center"}),s.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"SWM DEOGHAR"}),s.jsx("p",{className:"text-center mt-2 text-muted-foreground",children:"Login to your account"})]})}function I({name:i,label:r,inputSize:t,...c}){const{control:m}=y(),[o,n]=f.useState(!1);return s.jsx(w,{name:i,control:m,render:({field:{ref:l,...e},fieldState:{error:a}})=>s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:r,children:[r," ",a&&r&&s.jsx("span",{className:"text-red-400",children:"*"})]}),s.jsxs("div",{className:"relative mt-1",children:[s.jsx(v,{...e,value:typeof e.value=="number"&&e.value===0?"":e.value,ref:l,className:`mt-1 ${a?"border-red-400":null}
              ${t==="small"&&"h-8"||t==="medium"&&"h-10"||t==="large"&&"h-12"||"h-9"}`,type:o?"text":"password",...c}),s.jsx("button",{style:{backgroundColor:"none"},type:"button",className:"absolute right-3 top-4",onClick:()=>n(u=>!u),children:o?s.jsx(p,{width:20,height:20}):s.jsx(h,{width:20,height:20})})]}),a&&s.jsx("span",{className:"text-red-400 text-xs",children:a==null?void 0:a.message})]})})}const $=E({userName:x().required(),password:x().min(3)});function H(){const i=R({}),{login:r}=g(),t=b({defaultValues:{userName:"",password:""},resolver:F($)}),c=async m=>{var o,n,l;try{const e=await i.mutateAsync({api:j.login,data:m});(o=e==null?void 0:e.data)!=null&&o.status?(await r(e),d.success((n=e==null?void 0:e.data)==null?void 0:n.msg)):d.error((l=e==null?void 0:e.data)==null?void 0:l.msg)}catch(e){d.error(C(e.msg))}};return s.jsx(L,{methods:t,onSubmit:t.handleSubmit(c),children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"space-y-2",children:s.jsx(S,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"userName",inputValidation:["removeSpace"],placeholder:"Enter your User Name"})}),s.jsx("div",{className:"space-y-2",children:s.jsx(I,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"password",placeholder:"Enter your password"})}),s.jsx("div",{children:s.jsx(P,{type:"submit",isLoading:t.formState.isSubmitting,className:"w-full rounded-xl py-6 px-4 mt-2 shadow-none",variant:"outline",children:"Login"})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("hr",{className:"flex-1"}),s.jsx("span",{children:"or"}),s.jsx("hr",{className:"flex-1"})]}),s.jsx("div",{className:"text-center",children:s.jsx(N,{to:"/auth/forgot-password",children:s.jsx("span",{className:"text-sm text-primary",children:"Forgot password?"})})})]})})}function J(){return s.jsx(k,{title:"Login",children:s.jsxs("div",{className:"flex flex-col w-full justify-center h-screen px-6 lg:px-0 mx-auto max-w-sm",children:[s.jsx(A,{}),s.jsx(H,{})]})})}export{J as default};
