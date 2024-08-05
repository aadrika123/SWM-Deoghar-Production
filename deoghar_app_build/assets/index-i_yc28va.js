import{d as c,j as e,B as _e,C as ke,g as qe,F as we,_ as Ce}from"./index-DwHfpNlX.js";import{h as Me}from"./moment-CbGOrKEH.js";import{u as Ae,o as Pe,F as Be,S as Re,c as Te,a as l}from"./SelectField-DCQpvyE5.js";import{R as o}from"./RHFTextField-C7tJVrRN.js";import{d as Fe,h as Oe}from"./router-CxMlH8iW.js";import{P as Le}from"./index-B1FKUPV7.js";import{C as p,b as u}from"./card-CP_wK8K2.js";import{T as Ye,a as Ee,b as Ue,c as N,d as He,e as y,H as $e}from"./table-D_ZcXqpV.js";import{u as We,b as Qe,a as De}from"./useCustomQuery-CJHa6I0o.js";import{S as b}from"./separator-BoijPV8d.js";import{S as f}from"./SkeletonLoader-B2orm8Zf.js";import{I as Ve}from"./Image-C1aMTGBV.js";import{O as Je}from"./OverLayLoader-8kHSgIe9.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-BOCHwcoi.js";const Ke=Te().shape({paymentMode:l().required("Payment mode is required"),paidUpto:l().required("Payment amount is required"),bankName:l().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>l().required("Bank name is required")}),branchName:l().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>l().required("Branch name is required")}),chequeDate:l().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>l().required("Cheque/DD date is required")}),chequeNo:l().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>l().required("Cheque/DD number is required")})});function ha(){var q,w,C,M,R,U,D,I,S,_,k,A,P,B,T,F,O,L,Y,E,H,$,W,Q,V,J,K,z,G,X,Z,ee,ae,de;const t=Fe(),{mutateAsync:g,isLoading:Ie}=We({}),{id:i}=Oe(),a=Qe({api:"".concat(c.getConsumerDetailsById,"/").concat(i),options:{enabled:!!i}}),h=Ae({resolver:Pe(Ke)}),j=De({api:c.getPaymentData,config:{consumerId:i},options:{enabled:!!i}}),n=De({api:c.getCalculatedAmount,config:{consumerId:i,payUpto:h.watch("paidUpto")},value:[h.watch("paidUpto")],options:{enabled:!!h.watch("paidUpto")&&!!i}}),v=async()=>{var d,m,x;try{const r=await g({api:c.generateOrder,data:{amount:(m=(d=n.data)==null?void 0:d.data)==null?void 0:m.totaldemand,consumerId:i,consumerType:"consumer"}});return(x=r==null?void 0:r.data)!=null&&x.status,r}catch(r){return r}},Se=async d=>{ke("Are you sure to pay?","Please confirm",async()=>{var m,x,r,se,te,ie,ne,re,le,oe,me,ce,he,xe,pe,ue,je,Ne,ye,be,fe,ge,ve;try{if((d==null?void 0:d.paymentMode)=="Card"){if(window.ReactNativeWebView){const s=await v();(m=s==null?void 0:s.data)!=null&&m.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE",keyData:{amount:(r=(x=n.data)==null?void 0:x.data)==null?void 0:r.totaldemand,consumerId:i,paidUpto:d.paidUpto,paymentMode:d.paymentMode,api:qe+c.addOrder,token:localStorage.getItem("token"),tranId:(te=(se=s.data)==null?void 0:se.data)==null?void 0:te.order_id,redirectUrl:we+"/deoghar-app/payment-receipt",payload:{amount:(ne=(ie=n.data)==null?void 0:ie.data)==null?void 0:ne.totaldemand,consumerId:i,consumerType:"consumer",orderId:(le=(re=s.data)==null?void 0:re.data)==null?void 0:le.order_id,payUpto:d.paidUpto}}}))}return}if((d==null?void 0:d.paymentMode)=="QR"){if(window.ReactNativeWebView){const s=await v();(oe=s==null?void 0:s.data)!=null&&oe.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE_WITH_QR",keyData:{amount:(ce=(me=n.data)==null?void 0:me.data)==null?void 0:ce.totaldemand,consumerId:i,paidUpto:d.paidUpto,paymentMode:d.paymentMode,api:qe+c.addOrder,tranId:(xe=(he=s.data)==null?void 0:he.data)==null?void 0:xe.order_id,token:localStorage.getItem("token"),redirectUrl:we+"/deoghar-app/payment-receipt",payload:{amount:(ue=(pe=n.data)==null?void 0:pe.data)==null?void 0:ue.totaldemand,consumerId:i,consumerType:"consumer",orderId:(Ne=(je=s.data)==null?void 0:je.data)==null?void 0:Ne.order_id,payUpto:d.paidUpto}}}))}return}else{const s=await g({api:c.postPayment,data:d.paymentMode==="Cash"?{consumerId:i,paidAmount:(ye=n.data)==null?void 0:ye.data.totaldemand,paymentMode:d.paymentMode,paidUpto:d.paidUpto}:{consumerId:i,paidAmount:(be=n.data)==null?void 0:be.data.totaldemand,paymentMode:d.paymentMode,paidUpto:d.paidUpto,bankName:d.bankName,branchName:d.branchName,chequeNo:d.chequeNo,chequeDate:d.chequeDate}});(fe=s==null?void 0:s.data)!=null&&fe.status?(Ce.success(s==null?void 0:s.data.msg),t("/deoghar-app/payment-receipt/".concat((ve=(ge=s==null?void 0:s.data)==null?void 0:ge.data)==null?void 0:ve.transactionNo),{replace:!0})):Ce.error(s==null?void 0:s.data.msg)}}catch(s){}})};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]})})}):e.jsxs(Le,{title:"Consumer Payment",children:[Ie&&e.jsx(Je,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(Ve,{src:"/assets/image/category.png",alt:"Consumer Payment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Consumer Payment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Consumer payment details here."})]})]}),e.jsx(b,{}),e.jsx(p,{children:e.jsx(u,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(w=(q=a==null?void 0:a.data)==null?void 0:q.data[0])==null?void 0:w.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(M=(C=a==null?void 0:a.data)==null?void 0:C.data[0])==null?void 0:M.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Mobile:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(U=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:U.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(D=a==null?void 0:a.data)==null?void 0:D.data[0])==null?void 0:I.monthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(_=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:_.totalDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=(k=a==null?void 0:a.data)==null?void 0:k.data[0])==null?void 0:A.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(B=(P=a==null?void 0:a.data)==null?void 0:P.data[0])==null?void 0:B.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:F.cansumerType})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(O=a==null?void 0:a.data)==null?void 0:O.data[0])==null?void 0:L.Address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply Date:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(E=(Y=a==null?void 0:a.data)==null?void 0:Y.data[0])==null?void 0:E.applyDate})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apply By:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:($=(H=a==null?void 0:a.data)==null?void 0:H.data[0])==null?void 0:$.applyBy})})]})})}),e.jsx(b,{}),((V=(Q=(W=a==null?void 0:a.data)==null?void 0:W.data[0])==null?void 0:Q.activeDemandDetails)==null?void 0:V.length)>0?e.jsxs(e.Fragment,{children:[" ",e.jsx(p,{children:e.jsx(u,{children:e.jsxs("div",{className:"py-6",children:[e.jsx("div",{className:"px-4 mb-2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand Detail"})}),e.jsx(b,{}),e.jsx("div",{children:e.jsxs(Ye,{children:[e.jsx(Ee,{children:e.jsxs(Ue,{children:[e.jsx(N,{children:"Demand from"}),e.jsx(N,{children:"Demand upto"}),e.jsx(N,{children:"Amount"}),e.jsx(N,{children:"Status"})]})}),e.jsx(He,{children:(z=(K=(J=a==null?void 0:a.data)==null?void 0:J.data[0])==null?void 0:K.activeDemandDetails)==null?void 0:z.map((d,m)=>e.jsxs(Ue,{children:[e.jsx(y,{children:Me(d.payment_from).format("DD-MMM-YYYY")}),e.jsx(y,{children:Me(d.payment_to).format("DD-MMM-YYYY")}),e.jsx(y,{children:d.total_tax}),e.jsx(y,{children:d.paid_status==0?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})})]},m+1))})]})})]})})}),e.jsx(b,{}),e.jsx(p,{"x-chunk":"dashboard-05-chunk-4",children:e.jsx(u,{children:e.jsxs(Be,{methods:h,onSubmit:h.handleSubmit(Se),children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{children:e.jsx(Re,{isRequired:!0,name:"paidUpto",label:"Payment Amount",className:"w-full",data:(ee=(Z=(X=(G=j==null?void 0:j.data)==null?void 0:G.data)==null?void 0:X.demand)==null?void 0:Z.map(d=>({label:String(d.payment_to),value:String(d.payment_to)})))!=null?ee:[]})}),e.jsx("div",{children:e.jsx(Re,{isRequired:!0,name:"paymentMode",label:"Payment Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"DD",value:"Dd"},{label:"Card",value:"Card"},{label:"QR",value:"QR"}]})}),{Cheque:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"chequeNo",label:"Cheque Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,type:"date",name:"chequeDate",label:"Cheque Date",className:"w-full"})})]}),Dd:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"chequeNo",label:"DD Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(o,{isRequired:!0,name:"chequeDate",type:"date",label:"DD Date",className:"w-full"})})]})}[h.watch("paymentMode")]]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-4",children:e.jsxs(_e,{type:"submit",className:"mx-auto",disabled:n.isLoading||j.isLoading,children:[e.jsx($e,{className:"mr-2 h-4 w-4"}),n!=null&&n.isLoading?"Calculating...":"Pay Now ₹ ".concat((de=(ae=n.data)==null?void 0:ae.data.totaldemand)!=null?de:0)]})})]})})})]}):e.jsx(p,{children:e.jsx(u,{children:e.jsx("div",{className:"py-2 flex justify-center items-center",children:e.jsx("h1",{className:"text-base font-semibold text-center text-green-600",children:"You have no outstanding demand"})})})})]})]})}export{ha as default};