import{g as ls,e as rs,j as s,B as os}from"./index-Bg7ERlhF.js";import{P as ts}from"./index-CG2x7DO7.js";import{I as D}from"./Image-BKtOH8nL.js";import{S as l}from"./separator-D35cJwmC.js";import{C as ds,a as cs,c as ss,b as ns}from"./card-BCpDzxcN.js";import{h as a}from"./moment-BjLXg0w5.js";import{h as ms}from"./router-CTqkcgir.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function ys(){var o,t,d,c,n,m,i,x,h,N,j,p,f,u,b,y,g,v,M,k,w,Y,S,C;const{id:r}=ms(),e=ls({api:`${rs.printDemand}`,config:{consumerId:r},options:{enabled:!!r}}),es=()=>{var P,R,T,A,U,B,W,F,I,H,O,q,V,_,z,E,J,K,$,G,L,Q,X,Z;return[{key:"Dep/Sec",value:"Revenue Section"},{key:"Description",value:"Solid Waste Charges"},{key:"Consumer No",value:(R=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:R.consumerNo},{key:"Consumer Name",value:(A=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:A.consumerName},{key:"Mobile",value:(B=(U=e==null?void 0:e.data)==null?void 0:U.data)==null?void 0:B.mobileNo},{key:"Demand No",value:(F=(W=e==null?void 0:e.data)==null?void 0:W.data)==null?void 0:F.demandNo},{key:"Holding no",value:(H=(I=e==null?void 0:e.data)==null?void 0:I.data)==null?void 0:H.holdingNo},{key:"Name",value:(q=(O=e==null?void 0:e.data)==null?void 0:O.data)==null?void 0:q.consumerName},{key:"Ward",value:(_=(V=e==null?void 0:e.data)==null?void 0:V.data)==null?void 0:_.wardNo},{key:"Address",value:(E=(z=e==null?void 0:e.data)==null?void 0:z.data)==null?void 0:E.address},{key:"Tax type",value:"Solid Waste User Charges"},{key:"Bill Month From",value:a((K=(J=e==null?void 0:e.data)==null?void 0:J.data)==null?void 0:K.demandFrom).format("MMMM YYYY")},{key:"Bill Month Upto",value:a((G=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:G.demandUpto).format("MMMM YYYY")},{key:"Rate Per Month",value:(Q=(L=e==null?void 0:e.data)==null?void 0:L.data)==null?void 0:Q.monthlyRate},{key:"Amount",value:(Z=(X=e==null?void 0:e.data)==null?void 0:X.data)==null?void 0:Z.demandAmount}]},as=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BONUSHUB",keyData:{printData:es(),title:"Deoghar Nagar Nigam",subTitle:"Demand Receipt",footerTitle:"********** Thank You ***********",footerSubTitle:"Deoghar Nagar Nigam",notes:"This is a mobile-generated demand and does not require physical signature. "}}))};return s.jsx(ts,{title:"Print Demand",children:s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(D,{src:"/assets/image/category.png",alt:"Print Demand",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"Print Demand"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(l,{}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsxs(ds,{className:"w-full md:w-[50%]",children:[s.jsxs(cs,{children:[s.jsx(D,{className:"h-14 w-14 flex justify-center items-center mx-auto",src:"/logo1.png",alt:""}),s.jsxs("h1",{className:"text-2xl font-medium text-center ",children:["Deoghar Nagar Nigam"," "]}),s.jsx(ss,{className:"text-center",children:"User Charge Demand Receipt"})]}),s.jsxs(ns,{children:[s.jsxs("p",{children:[s.jsxs("span",{className:"font-bold text-sm p-1",children:["Department/Section:"," "]}),s.jsx("span",{className:"font-normal text-sm p-1",children:"Revenue Section"})]}),s.jsxs("p",{children:[s.jsxs("span",{className:"font-bold text-sm p-1",children:["Account Discription:"," "]}),s.jsxs("span",{className:"font-normal text-sm p-1",children:["Solid Waste Charges"," "]})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Consumer No: "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(t=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:t.consumerNo})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Consumer Name: "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(c=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:c.consumerName})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Mobile : "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(m=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:m.mobileNo})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Demand No: "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(x=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:x.demandNo})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Holding no : "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(N=(h=e==null?void 0:e.data)==null?void 0:h.data)==null?void 0:N.holdingNo})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Name : "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(p=(j=e==null?void 0:e.data)==null?void 0:j.data)==null?void 0:p.consumerName})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Ward : "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(u=(f=e==null?void 0:e.data)==null?void 0:f.data)==null?void 0:u.wardNo})]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-bold text-sm p-1",children:"Address : "}),s.jsx("span",{className:"font-normal text-sm p-1",children:(y=(b=e==null?void 0:e.data)==null?void 0:b.data)==null?void 0:y.address})]}),s.jsx(l,{className:"mt-2 mb-1"}),s.jsx(ss,{className:"mt-4 p-2 ",children:"Demand Details"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsx("table",{className:"min-w-full bg-white border border-gray-200",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-bold text-sm",children:"Tax type:"})}),s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-normal text-sm ",children:"Solid Waste User Charges"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-bold text-sm",children:"Bill Month From:"})}),s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-normal",children:a((v=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:v.demandFrom).format("MMMM YYYY")})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-bold text-sm",children:"Bill Month Upto:"})}),s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-normal",children:a((k=(M=e==null?void 0:e.data)==null?void 0:M.data)==null?void 0:k.demandUpto).format("MMMM YYYY")})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-bold text-sm",children:"Rate Per Month:"})}),s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-normal",children:(Y=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:Y.monthlyRate})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-bold text-sm",children:"Amount"})}),s.jsx("td",{className:"border border-gray-300 py-2 px-4",children:s.jsx("span",{className:"font-normal",children:(C=(S=e==null?void 0:e.data)==null?void 0:S.data)==null?void 0:C.demandAmount})})]})]})})}),s.jsx(l,{className:"mt-2 mb-1"}),s.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-3",children:[s.jsx("p",{className:"font-bold",children:"Note:"}),s.jsxs("ul",{className:"list-disc ml-6",children:[s.jsx("li",{className:"text-sm",children:"This is a mobile-generated receipt and does not require physical signature."}),s.jsx("li",{className:"text-sm",children:"***You will receive an SMS on your registered mobile number for the amount paid. If SMS is not received, verify your paid amount by calling ***."}),s.jsx("li",{className:"text-sm",children:"Print Date: 20-02-2024"})]})]}),s.jsx("div",{className:"flex justify-center items-center mt-4",children:s.jsxs("div",{className:"text-center text-black",children:[s.jsx("h1",{className:" font-bold ",children:"********** Thank You ***********"}),s.jsx("h1",{className:" font-semibold",children:"Deoghar Nagar Nigam"})]})}),s.jsx("div",{className:"flex justify-center items-center w-full py-6",children:s.jsx(os,{size:"sm",variant:"default",onClick:as,children:"Print"})})]})]})})]})})}export{ys as default};
