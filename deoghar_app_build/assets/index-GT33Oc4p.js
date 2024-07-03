import{j as e,g as Z}from"./index-BcSDAYQy.js";import{P as D}from"./index-J44beZ8l.js";import{a as ee}from"./useCustomQuery-Dq0ecwmr.js";import{I as se}from"./Image-Bg3N0v8H.js";import{S as l}from"./separator-CnGhRSp5.js";import{C as ae,a as le,c as L,b as te}from"./card-BGFnyxWs.js";import{B as re}from"./button-CsnK0fxW.js";import{h as a}from"./moment-BjLXg0w5.js";import{h as oe}from"./router-CTqkcgir.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function be(){var r,o,d,c,n,m,i,x,h,N,p,j,f,b,y,g,u,v,M,w,k,Y;const{id:t}=oe(),s=ee({api:`${Z.printDemand}`,config:{apartmentId:t},options:{enabled:!!t}}),Q=()=>{var S,C,P,A,R,T,U,B,W,F,I,O,V,q,H,_,z,E,J,K,$,G;return[{key:"Dep/Sec",value:"Revenue Section"},{key:"Description",value:"Solid Waste Charges"},{key:"Apartment No",value:(C=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:C.apartmentCode},{key:"Apartment Name",value:(A=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:A.apartmentName},{key:"Mobile",value:(T=(R=s==null?void 0:s.data)==null?void 0:R.data)==null?void 0:T.mobileNo},{key:"Demand No",value:(B=(U=s==null?void 0:s.data)==null?void 0:U.data)==null?void 0:B.demandNo},{key:"Name",value:(F=(W=s==null?void 0:s.data)==null?void 0:W.data)==null?void 0:F.apartmentName},{key:"Ward",value:(O=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:O.wardNo},{key:"Address",value:(q=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:q.apartmentName},{key:"Tax type",value:"Solid Waste User Charges"},{key:"Bill Month From",value:a((_=(H=s==null?void 0:s.data)==null?void 0:H.data)==null?void 0:_.demandFrom).format("MMMM YYYY")},{key:"Bill Month Upto",value:a((E=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:E.demandUpto).format("MMMM YYYY")},{key:"Rate Per Month",value:(K=(J=s==null?void 0:s.data)==null?void 0:J.data)==null?void 0:K.monthlyRate},{key:"Amount",value:(G=($=s==null?void 0:s.data)==null?void 0:$.data)==null?void 0:G.demandAmount}]},X=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BONUSHUB",keyData:{printData:Q(),title:"Deoghar Nagar Nigam",subTitle:"Demand Receipt",footerTitle:"********** Thank You ***********",footerSubTitle:"Deoghar Nagar Nigam",notes:"This is a mobile-generated demand and does not require physical signature. "}}))};return e.jsx(D,{title:"Print Demand",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(se,{src:"/assets/image/category.png",alt:"Print Demand",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Print Demand"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(l,{}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs(ae,{className:"w-full md:w-[50%]",children:[e.jsxs(le,{children:[e.jsx("img",{className:"h-14 w-14 flex justify-center items-center mx-auto",src:"https://i.ibb.co/c1V5cNt/deoghar-logo-removebg-preview.png",alt:""}),e.jsxs("h1",{className:"text-2xl font-medium text-center ",children:["Deoghar Nagar Nigam"," "]}),e.jsx(L,{className:"text-center",children:"User Charge Demand Receipt"})]}),e.jsxs(te,{children:[e.jsxs("p",{children:[e.jsxs("span",{className:"font-bold text-sm p-1",children:["Department/Section:"," "]}),e.jsx("span",{className:"font-normal text-sm p-1",children:"Revenue Section"})]}),e.jsxs("p",{children:[e.jsxs("span",{className:"font-bold text-sm p-1",children:["Account Discription:"," "]}),e.jsxs("span",{className:"font-normal text-sm p-1",children:["Solid Waste Charges"," "]})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Apartment No: "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(o=(r=s==null?void 0:s.data)==null?void 0:r.data)==null?void 0:o.apartmentCode})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Apartment Name: "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(c=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:c.apartmentName})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Mobile : "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(m=(n=s==null?void 0:s.data)==null?void 0:n.data)==null?void 0:m.mobileNo})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Demand No: "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(x=(i=s==null?void 0:s.data)==null?void 0:i.data)==null?void 0:x.demandNo})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Name : "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(N=(h=s==null?void 0:s.data)==null?void 0:h.data)==null?void 0:N.apartmentName})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Ward : "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(j=(p=s==null?void 0:s.data)==null?void 0:p.data)==null?void 0:j.wardNo})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-sm p-1",children:"Address : "}),e.jsx("span",{className:"font-normal text-sm p-1",children:(b=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:b.apartmentName})]}),e.jsx(l,{className:"mt-2 mb-1"}),e.jsx(L,{className:"mt-4 p-2 ",children:"Demand Details"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsx("table",{className:"min-w-full bg-white border border-gray-200",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-bold text-sm",children:"Tax type:"})}),e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-normal text-sm ",children:"Solid Waste User Charges"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-bold text-sm",children:"Bill Month From:"})}),e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-normal",children:a((g=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:g.demandFrom).format("MMMM YYYY")})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-bold text-sm",children:"Bill Month Upto:"})}),e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-normal",children:a((v=(u=s==null?void 0:s.data)==null?void 0:u.data)==null?void 0:v.demandUpto).format("MMMM YYYY")})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-bold text-sm",children:"Rate Per Month:"})}),e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-normal",children:(w=(M=s==null?void 0:s.data)==null?void 0:M.data)==null?void 0:w.monthlyRate})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-bold text-sm",children:"Amount"})}),e.jsx("td",{className:"border border-gray-300 py-2 px-4",children:e.jsx("span",{className:"font-normal",children:(Y=(k=s==null?void 0:s.data)==null?void 0:k.data)==null?void 0:Y.demandAmount})})]})]})})}),e.jsx(l,{className:"mt-2 mb-1"}),e.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-3",children:[e.jsx("p",{className:"font-bold",children:"Note:"}),e.jsxs("ul",{className:"list-disc ml-6",children:[e.jsx("li",{className:"text-sm",children:"This is a mobile-generated receipt and does not require physical signature."}),e.jsx("li",{className:"text-sm",children:"***You will receive an SMS on your registered mobile number for the amount paid. If SMS is not received, verify your paid amount by calling ***."}),e.jsx("li",{className:"text-sm",children:"Print Date: 20-02-2024"})]})]}),e.jsx("div",{className:"flex justify-center items-center mt-4",children:e.jsxs("div",{className:"text-center text-black",children:[e.jsx("h1",{className:" font-bold ",children:"********** Thank You ***********"}),e.jsx("h1",{className:" font-semibold",children:"Deoghar Nagar Nigam"})]})}),e.jsx("div",{className:"flex justify-center items-center w-full py-6",children:e.jsx(re,{size:"sm",variant:"default",onClick:X,children:"Print"})})]})]})})]})})}export{be as default};
