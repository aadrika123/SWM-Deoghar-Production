!function(){function a(a){return function(a){if(Array.isArray(a))return l(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,e){if(a){if("string"==typeof a)return l(a,e);var n={}.toString.call(a).slice(8,-1);return"Object"===n&&a.constructor&&(n=a.constructor.name),"Map"===n||"Set"===n?Array.from(a):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(a,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(a,l){(null==l||l>a.length)&&(l=a.length);for(var e=0,n=Array(l);e<l;e++)n[e]=a[e];return n}System.register(["./index-legacy-2_RsFPup.js","./index-legacy-cd4nMDMk.js","./useCustomQuery-legacy-BeKmFAzZ.js","./Image-legacy-COQhmTnm.js","./separator-legacy-aCRIZKv7.js","./card-legacy-BDC32D1Q.js","./moment-legacy-CUxMYvYC.js","./router-legacy-DYc8ozZp.js","./headlessui-legacy-D7WMeg35.js","./axios-legacy-DkcwMedN.js"],(function(l,e){"use strict";var n,t,d,o,s,i,u,r,c,v,m,x,p;return{setters:[function(a){n=a.j,t=a.B,d=a.d},function(a){o=a.P},function(a){s=a.a},function(a){i=a.I},function(a){u=a.S},function(a){r=a.C,c=a.a,v=a.c,m=a.b},function(a){x=a.h},function(a){p=a.h},null,null],execute:function(){l("default",(function(){var l,e,N,h,f,j,y,b,g,D,A,Y,k,M,C,S,T,q,w,P,R,W,F,U=p().id,B=s({api:"".concat(d.getReprintData),config:{transactionNo:U},options:{enabled:!!U}});return n.jsx(o,{title:"Print Receipt",children:n.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[n.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[n.jsx(i,{src:"/assets/image/category.png",alt:"Print Receipt",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),n.jsxs("div",{className:"",children:[n.jsx("h1",{className:"font-semibold",children:"Print Receipt"}),n.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),n.jsx(u,{}),n.jsx("div",{className:"flex justify-center items-center",children:n.jsxs(r,{className:"w-full md:w-[50%]",children:[n.jsxs(c,{children:[n.jsx(i,{className:"h-14 w-14 flex justify-center items-center mx-auto",src:"/logo1.png",alt:""}),n.jsxs("h1",{className:"text-2xl font-medium text-center ",children:["Deoghar Nagar Nigam"," "]}),n.jsx(v,{className:"text-center",children:"User Charge Collection Receipt"})]}),n.jsxs(m,{children:[n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Department/Section:"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:"Revenue Section"})]}),n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Account Discription:"," "]}),n.jsxs("span",{className:"font-normal text-xs p-1",children:["Solid Waste Charges"," "]})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Transaction No : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:U})]}),n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Transaction Date :"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:x(null==B||null===(l=B.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.transactionDate).format("DD-MM-YYYY")})]}),n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Transaction Time :"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:x(null==B||null===(e=B.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.transactionDate).format("hh:mm:ss")})]}),null!=(null==B||null===(N=B.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.consumerNo)&&n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Consumer Name: "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(h=B.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.consumerName})]}),null!=(null==B||null===(f=B.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.apartmentName)&&n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Apartment Name:"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(j=B.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.apartmentName})]}),n.jsxs("p",{children:[null!=(null==B||null===(y=B.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.consumerNo)&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Consumer No: "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(b=B.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.consumerNo})]}),null!=(null==B||null===(g=B.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.apartmentCode)&&n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Apartment code:"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(D=B.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.apartmentCode})]})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Mobile : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(A=B.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.mobileNo})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Demand Amount: "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(Y=B.data)||void 0===Y||null===(Y=Y.data)||void 0===Y?void 0:Y.demandAmount})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Ward : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(k=B.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.ReceiptWard})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Address : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(M=B.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.address})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Paid amount : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(C=B.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.paidAmount})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Mode : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(S=B.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.paymentMode})]}),null!=(null==B||null===(T=B.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.chequeNo)&&n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Cheque No : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(q=B.data)||void 0===q||null===(q=q.data)||void 0===q?void 0:q.chequeNo})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Bank Name : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(w=B.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.bankName})]}),n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Branch Name :"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:null==B||null===(P=B.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.branchName})]}),n.jsxs("p",{children:[n.jsxs("span",{className:"font-bold text-xs p-1",children:["Cheque Date :"," "]}),n.jsx("span",{className:"font-normal text-xs p-1",children:x(null==B||null===(R=B.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.chequeDate).format("DD-MM-YYYY")})]})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Payment From : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:x(null==B||null===(W=B.data)||void 0===W||null===(W=W.data)||void 0===W?void 0:W.paidFrom).format("DD-MM-YYYY")})]}),n.jsxs("p",{children:[n.jsx("span",{className:"font-bold text-xs p-1",children:"Payment Upto : "}),n.jsx("span",{className:"font-normal text-xs p-1",children:x(null==B||null===(F=B.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.paidUpto).format("DD-MM-YYYY")})]}),n.jsx(u,{className:"mt-2 mb-1"}),n.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-3",children:[n.jsx("p",{className:"font-bold",children:"Note:"}),n.jsxs("ul",{className:"list-disc ml-6",children:[n.jsx("li",{className:"text-xs",children:"This is a mobile-generated receipt and does not require physical signature."}),n.jsx("li",{className:"text-xs",children:"***You will receive an SMS on your registered mobile number for the amount paid. If SMS is not received, verify your paid amount by calling ***."}),n.jsx("li",{className:"text-xs",children:"Print Date: 20-02-2024"})]})]}),n.jsx("div",{className:"flex justify-center items-center mt-4",children:n.jsxs("div",{className:"text-center text-black",children:[n.jsx("h1",{className:" font-bold ",children:"********** Thank You ***********"}),n.jsx("h1",{className:" font-semibold",children:"Deoghar Nagar Nigam"})]})}),n.jsx("div",{className:"flex justify-center items-center w-full py-6",children:n.jsx(t,{size:"sm",variant:"default",onClick:function(){var l,e,n,t,d,o,s,i,u,r,c,v,m,p,N,h,f,j,y,b,g,D,A,Y,k,M,C,S,T,q,w,P,R,W,F,I,O,Q;window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BONUSHUB",keyData:{printData:null!=(null==B||null===(l=B.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.apartmentCode)?[{key:"Dep/Sec :",value:"Revenue Section"},{key:"Description :",value:"Solid Waste Charges"},{key:"Tran No :",value:U},{key:"Tran Date :",value:x(null==B||null===(n=B.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.transactionDate).format("DD-MM-YYYY")||"N/A"},{key:"Tran Time :",value:x(null==B||null===(t=B.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.transactionDate).format("hh:mm:ss")||"N/A"},{key:"Apartment Name :",value:(null==B||null===(d=B.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.apartmentName)||"N/A"},{key:"Apartment code :",value:(null==B||null===(o=B.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.apartmentCode)||"N/A"},{key:"Mobile :",value:(null==B||null===(s=B.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.mobileNo)||"N/A"},{key:"Demand Amount :",value:(null==B||null===(i=B.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.demandAmount)||"N/A"},{key:"Ward :",value:(null==B||null===(u=B.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.ReceiptWard)||"N/A"},{key:"Address :",value:(null==B||null===(r=B.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.address)||"N/A"},{key:"Paid amount :",value:(null==B||null===(c=B.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.paidAmount)||"N/A"},{key:"Mode :",value:(null==B||null===(v=B.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.paymentMode)||"N/A"}].concat(a("Cheque"==(null==B||null===(m=B.data)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.paymentMode)||"DD"==(null==B||null===(p=B.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.paymentMode)?[{key:"Cheque No :",value:(null==B||null===(N=B.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.chequeNo)||"N/A"},{key:"Bank Name :",value:(null==B||null===(h=B.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.bankName)||"N/A"},{key:"Branch Name :",value:(null==B||null===(f=B.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.branchName)||"N/A"},{key:"Cheque Date :",value:x(null==B||null===(j=B.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.chequeDate).format("DD-MM-YYYY")||"N/A"}]:[]),[{key:"Payment From :",value:x(null==B||null===(y=B.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.paidFrom).format("DD-MM-YYYY")||"N/A"},{key:"Payment Upto :",value:x(null==B||null===(b=B.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.paidUpto).format("DD-MM-YYYY")||"N/A"}]):null!=(null==B||null===(e=B.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.consumerNo)?[{key:"Dep/Sec :",value:"Revenue Section"},{key:"Description :",value:"Solid Waste Charges"},{key:"Tran No :",value:U},{key:"Tran Date :",value:x(null==B||null===(g=B.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.transactionDate).format("DD-MM-YYYY")||"N/A"},{key:"Tran Time :",value:x(null==B||null===(D=B.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.transactionDate).format("hh:mm:ss")||"N/A"},{key:"Consumer Name :",value:(null==B||null===(A=B.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.consumerName)||"N/A"},{key:"Consumer No :",value:(null==B||null===(Y=B.data)||void 0===Y||null===(Y=Y.data)||void 0===Y?void 0:Y.consumerNo)||"N/A"},{key:"Mobile :",value:(null==B||null===(k=B.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.mobileNo)||"N/A"},{key:"Demand Amount :",value:(null==B||null===(M=B.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.demandAmount)||"N/A"},{key:"Ward :",value:(null==B||null===(C=B.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.ReceiptWard)||"N/A"},{key:"Address :",value:(null==B||null===(S=B.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.address)||"N/A"},{key:"Paid amount :",value:(null==B||null===(T=B.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.paidAmount)||"N/A"},{key:"Mode",value:(null==B||null===(q=B.data)||void 0===q||null===(q=q.data)||void 0===q?void 0:q.paymentMode)||"N/A"}].concat(a("Cheque"==(null==B||null===(w=B.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.paymentMode)||"DD"==(null==B||null===(P=B.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.paymentMode)?[{key:"Cheque No :",value:(null==B||null===(R=B.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.chequeNo)||"N/A"},{key:"Bank Name :",value:(null==B||null===(W=B.data)||void 0===W||null===(W=W.data)||void 0===W?void 0:W.bankName)||"N/A"},{key:"Branch Name :",value:(null==B||null===(F=B.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.branchName)||"N/A"},{key:"Cheque Date :",value:x(null==B||null===(I=B.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.chequeDate).format("DD-MM-YYYY")||"N/A"}]:[]),[{key:"Payment From :",value:x(null==B||null===(O=B.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.paidFrom).format("DD-MM-YYYY")||"N/A"},{key:"Payment Upto :",value:x(null==B||null===(Q=B.data)||void 0===Q||null===(Q=Q.data)||void 0===Q?void 0:Q.paidUpto).format("DD-MM-YYYY")||"N/A"}]):void 0,title:"Deoghar Nagar Nigam",subTitle:"Collection Receipt",footerTitle:"********** Thank You ***********",footerSubTitle:"Deoghar Nagar Nigam",notes:"This is a mobile-generated receipt and does not require physical signature. "}}))},children:"Print"})})]})]})})]})})}))}}}))}();
