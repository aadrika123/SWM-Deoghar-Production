import{j as s,u as x,a as u,b as p,_ as t}from"./index-CedogC9c.js";import{L as f}from"./router-CTqkcgir.js";import{u as g,o as h,F as j,c as N,a as n}from"./SelectField-BEi-0vcW.js";import{R as y}from"./RHFTextField-JypUoSY-.js";import{g as w}from"./services-KQnp_8oA.js";import{B as v}from"./ButtonLoading-DknVTMOi.js";import{R as b}from"./RHFPasswordField-BKRx1T4w.js";import{P as L}from"./index-C-xT_-z1.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function F(){return s.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm py-6",children:[s.jsx("div",{className:"flex justify-center"}),s.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"SWM DEOGHAR"}),s.jsx("p",{className:"text-center mt-2 text-muted-foreground",children:"Login to your account"})]})}const S=N({userName:n().required(),password:n().min(3)});function R(){const l=x({}),{login:m}=u(),a=g({defaultValues:{userName:"",password:""},resolver:h(S)}),c=async d=>{var r,o,i;try{const e=await l.mutateAsync({api:p.login,data:d});(r=e==null?void 0:e.data)!=null&&r.status?(await m(e),t.success((o=e==null?void 0:e.data)==null?void 0:o.msg)):t.error((i=e==null?void 0:e.data)==null?void 0:i.msg)}catch(e){t.error(w(e.msg))}};return s.jsx(j,{methods:a,onSubmit:a.handleSubmit(c),children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"space-y-2",children:s.jsx(y,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"userName",inputValidation:["removeSpace"],placeholder:"Enter your User Name"})}),s.jsx("div",{className:"space-y-2",children:s.jsx(b,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"password",placeholder:"Enter your password"})}),s.jsx("div",{children:s.jsx(v,{type:"submit",isLoading:a.formState.isSubmitting,className:"w-full rounded-xl py-6 px-4 mt-2 shadow-none",variant:"outline",children:"Login"})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("hr",{className:"flex-1"}),s.jsx("span",{children:"or"}),s.jsx("hr",{className:"flex-1"})]}),s.jsx("div",{className:"text-center",children:s.jsx(f,{to:"/auth/forgot-password",children:s.jsx("span",{className:"text-sm text-primary",children:"Forgot password?"})})})]})})}function $(){return s.jsx(L,{title:"Login",children:s.jsxs("div",{className:"flex flex-col w-full justify-center h-screen px-6 lg:px-0 mx-auto max-w-sm",children:[s.jsx(F,{}),s.jsx(R,{})]})})}export{$ as default};
