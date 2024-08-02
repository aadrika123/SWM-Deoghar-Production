import{h as ze,i as Me,k as He,l as u,m as Re,n as Ve,o as We,p as Qe,q as Je,r as Ke,s as Ge,t as qe,v as Xe,w as Ze,x as ea,j as e,y as v,z as Ce,B as Ye,d as y,C as aa,g as $e,F as Ne,_ as ye}from"./index-DkGTr8py.js";import{h as w}from"./moment-CbGOrKEH.js";import{u as ta,o as sa,F as ra,S as Ae,c as da,a as p}from"./SelectField-Ck3PxKFf.js";import{R as g}from"./RHFTextField-DDT445Gq.js";import{r as n,d as oa,h as na,R as ca}from"./router-CxMlH8iW.js";import{P as la}from"./index-BHsG9LAZ.js";import{C as M,b as R}from"./card-PeekMVMd.js";import{T as we,a as ve,b as q,c as x,d as De,e as h,H as ia}from"./table-FT3o17ay.js";import{u as ma,b as pa,a as _e}from"./useCustomQuery-IJyj9qiq.js";import{S as C}from"./separator-CQwNH3jY.js";import{S as Y}from"./SkeletonLoader-Bfytabav.js";import{I as xa}from"./Image-CkmC2H9L.js";import{O as ha}from"./OverLayLoader-Dd3NujSM.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-D9RQCQ1g.js";const fa="AlertDialog",[ua,tt]=ze(fa,[Me]),b=Me(),ba=t=>{const{__scopeAlertDialog:d,...r}=t,o=b(d);return n.createElement(Ze,u({},o,r,{modal:!0}))},ja=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,s=b(r);return n.createElement(ea,u({},s,o,{ref:d}))}),ga=t=>{const{__scopeAlertDialog:d,...r}=t,o=b(d);return n.createElement(Xe,u({},o,r))},$a=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,s=b(r);return n.createElement(He,u({},s,o,{ref:d}))}),Se="AlertDialogContent",[Na,ya]=ua(Se),Aa=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,children:o,...s}=t,m=b(r),j=n.useRef(null),i=Re(d,j),D=n.useRef(null);return n.createElement(Ve,{contentName:Se,titleName:wa,docsSlug:"alert-dialog"},n.createElement(Na,{scope:r,cancelRef:D},n.createElement(We,u({role:"alertdialog"},m,s,{ref:i,onOpenAutoFocus:Qe(s.onOpenAutoFocus,$=>{var _;$.preventDefault(),(_=D.current)===null||_===void 0||_.focus({preventScroll:!0})}),onPointerDownOutside:$=>$.preventDefault(),onInteractOutside:$=>$.preventDefault()}),n.createElement(Je,null,o),!1)))}),wa="AlertDialogTitle",va=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,s=b(r);return n.createElement(Ke,u({},s,o,{ref:d}))}),Da=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,s=b(r);return n.createElement(Ge,u({},s,o,{ref:d}))}),_a=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,s=b(r);return n.createElement(qe,u({},s,o,{ref:d}))}),Ma="AlertDialogCancel",Ra=n.forwardRef((t,d)=>{const{__scopeAlertDialog:r,...o}=t,{cancelRef:s}=ya(Ma,r),m=b(r),j=Re(d,s);return n.createElement(qe,u({},m,o,{ref:j}))}),qa=ba,Ca=ja,Ya=ga,Pe=$a,Ee=Aa,Ue=_a,Ie=Ra,ke=va,Oe=Da,Sa=qa,Pa=Ca,Ea=Ya,Te=n.forwardRef(({className:t,...d},r)=>e.jsx(Pe,{className:v("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...d,ref:r}));Te.displayName=Pe.displayName;const Le=n.forwardRef(({className:t,...d},r)=>e.jsxs(Ea,{children:[e.jsx(Te,{}),e.jsx(Ee,{ref:r,className:v("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...d})]}));Le.displayName=Ee.displayName;const Fe=n.forwardRef(({className:t,...d},r)=>e.jsx(ke,{ref:r,className:v("text-lg font-semibold",t),...d}));Fe.displayName=ke.displayName;const Ua=n.forwardRef(({className:t,...d},r)=>e.jsx(Oe,{ref:r,className:v("text-sm text-muted-foreground",t),...d}));Ua.displayName=Oe.displayName;const Ia=n.forwardRef(({className:t,...d},r)=>e.jsx(Ue,{ref:r,className:v(Ce(),t),...d}));Ia.displayName=Ue.displayName;const Be=n.forwardRef(({className:t,...d},r)=>e.jsx(Ie,{ref:r,className:v(Ce({variant:"outline"}),"mt-2 sm:mt-0",t),...d}));Be.displayName=Ie.displayName;function ka({children:t,buttonTitle:d,title:r}){return e.jsxs(Sa,{children:[e.jsx(Pa,{asChild:!0,children:e.jsx(Ye,{variant:"outline",size:"sm",children:d!=null?d:"Open"})}),e.jsxs(Le,{className:"rounded-lg w-[95%] p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Fe,{children:r!=null?r:"Alert Dialog Title"}),e.jsx(Be,{className:"w-8 h-8 px-2 rounded-lg hover:bg-gray-200",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 8.586l3.293-3.293 1.414 1.414L11.414 10l3.293 3.293-1.414 1.414L10 11.414l-3.293 3.293-1.414-1.414L8.586 10 5.293 6.707l1.414-1.414L10 8.586z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"py-2 overflow-scroll",children:t})]})]})}const Oa=da().shape({paymentMode:p().required("Payment mode is required"),paidUpto:p().required("Payment amount is required"),bankName:p().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>p().required("Bank name is required")}),branchName:p().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>p().required("Branch name is required")}),chequeDate:p().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>p().required("Cheque/DD date is required")}),chequeNo:p().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>p().required("Cheque/DD number is required")})});function st(){var S,P,E,U,I,k,O,T,L,F,B,z,H,V,W,Q,J,K,G,X,Z,ee;const t=oa(),{mutateAsync:d,isLoading:r}=ma({}),{id:o}=na(),s=pa({api:"".concat(y.getApartmentDetailsById,"/").concat(o),options:{enabled:!!o}}),m=ta({resolver:sa(Oa)}),j=_e({api:y.getPaymentData,config:{apartmentId:o},options:{enabled:!!o}}),i=_e({api:y.getCalculatedAmount,config:{apartmentId:o,payUpto:m.watch("paidUpto")},value:[m.watch("paidUpto")],options:{enabled:!!m.watch("paidUpto")&&!!o}}),D=async()=>{var a,f,N;try{const l=await d({api:y.generateOrder,data:{amount:(f=(a=i.data)==null?void 0:a.data)==null?void 0:f.totaldemand,consumerId:o,consumerType:"apartment"}});return(N=l==null?void 0:l.data)!=null&&N.status,l}catch(l){return l}},$=async a=>{aa("Are you sure to pay?","Please confirm",async()=>{var f,N,l,A,ae,te,se,re,de,oe,ne,ce,le,ie,me,pe,xe,he,fe,ue,be,je,ge;try{if((a==null?void 0:a.paymentMode)=="Card"){if(window.ReactNativeWebView){const c=await D();(f=c==null?void 0:c.data)!=null&&f.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE",keyData:{amount:(l=(N=i.data)==null?void 0:N.data)==null?void 0:l.totaldemand,apartmentId:o,paidUpto:a.paidUpto,paymentMode:a.paymentMode,api:$e+y.addOrder,token:localStorage.getItem("token"),tranId:(ae=(A=c.data)==null?void 0:A.data)==null?void 0:ae.order_id,redirectUrl:Ne+"/deoghar-app/payment-receipt",payload:{amount:(se=(te=i.data)==null?void 0:te.data)==null?void 0:se.totaldemand,consumerId:o,consumerType:"apartment",orderId:(de=(re=c.data)==null?void 0:re.data)==null?void 0:de.order_id,payUpto:a.paidUpto}}}))}return}if((a==null?void 0:a.paymentMode)=="QR"){if(window.ReactNativeWebView){const c=await D();(oe=c==null?void 0:c.data)!=null&&oe.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE_WITH_QR",keyData:{amount:(ce=(ne=i.data)==null?void 0:ne.data)==null?void 0:ce.totaldemand,apartmentId:o,paidUpto:a.paidUpto,paymentMode:a.paymentMode,api:$e+y.addOrder,token:localStorage.getItem("token"),redirectUrl:Ne+"/deoghar-app/payment-receipt",payload:{amount:(ie=(le=i.data)==null?void 0:le.data)==null?void 0:ie.totaldemand,consumerId:o,consumerType:"apartment",orderId:(pe=(me=c.data)==null?void 0:me.data)==null?void 0:pe.order_id,payUpto:a.paidUpto}}}))}return}else{const c=await d({api:y.apartmentPayment,data:a.paymentMode==="Cash"?{apartmentId:o,paidAmount:(xe=i.data)==null?void 0:xe.data.totaldemand,paymentMode:a.paymentMode,paidUpto:a.paidUpto}:{apartmentId:o,paidAmount:(he=i.data)==null?void 0:he.data.totaldemand,paymentMode:a.paymentMode,paidUpto:a.paidUpto,bankName:a.bankName,branchName:a.branchName,chequeNo:a.chequeNo,chequeDate:a.chequeDate}});(fe=c==null?void 0:c.data)!=null&&fe.status?(ye.success((ue=c==null?void 0:c.data)==null?void 0:ue.msg),t("/deoghar-app/payment-receipt/".concat((je=(be=c==null?void 0:c.data)==null?void 0:be.data)==null?void 0:je.transactionNo),{replace:!0})):ye.error((ge=c==null?void 0:c.data)==null?void 0:ge.msg)}}catch(c){}})},_=(a,f)=>{const N=a==null?void 0:a.reduce((l,A)=>l+Number(A.total_tax),0);return e.jsx(ka,{title:"".concat(f,"-(").concat(N,")"),buttonTitle:"View",children:e.jsx("div",{className:"h-96",children:e.jsxs(we,{children:[e.jsx(ve,{children:e.jsxs(q,{children:[e.jsx(x,{children:"Demand from"}),e.jsx(x,{children:"Demand upto"}),e.jsx(x,{children:"Amount"}),e.jsx(x,{children:"Status"})]})}),e.jsx(De,{children:a==null?void 0:a.map((l,A)=>e.jsxs(q,{children:[e.jsx(h,{children:w(l.payment_from,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(h,{children:w(l.payment_to,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(h,{children:l.total_tax}),e.jsx(h,{children:l.paid_status=="0"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})})]},A+1))})]})})})};return s!=null&&s.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(M,{children:e.jsxs(R,{children:[e.jsx(Y,{}),e.jsx(Y,{}),e.jsx(Y,{})]})})}):e.jsxs(la,{title:"Apartment Payment",children:[r&&e.jsx(ha,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(xa,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Apartment Payment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(C,{}),e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(S=s==null?void 0:s.data)==null?void 0:S.data[0])==null?void 0:P.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(U=(E=s==null?void 0:s.data)==null?void 0:E.data[0])==null?void 0:U.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(k=(I=s==null?void 0:s.data)==null?void 0:I.data[0])==null?void 0:k.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(O=s==null?void 0:s.data)==null?void 0:O.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=s==null?void 0:s.data)==null?void 0:T.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:F.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(z=(B=s==null?void 0:s.data)==null?void 0:B.data[0])==null?void 0:z.address})})]})})}),e.jsx(C,{}),((H=s==null?void 0:s.data)==null?void 0:H.totalAptDemand)>0?e.jsxs(ca.Fragment,{children:[e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"py-6",children:[e.jsx("div",{className:"px-4 mb-2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand Detail"})}),e.jsx(C,{}),e.jsx("div",{children:e.jsxs(we,{children:[e.jsx(ve,{children:e.jsxs(q,{children:[e.jsx(x,{children:"Consumer"}),e.jsx(x,{children:"Demand from"}),e.jsx(x,{children:"Demand upto"}),e.jsx(x,{children:"Amount"}),e.jsx(x,{children:"Status"}),e.jsx(x,{children:"Action"})]})}),e.jsx(De,{children:(Q=(W=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:W.filter(a=>a.paidStatus!=="Paid"))==null?void 0:Q.map((a,f)=>e.jsxs(q,{children:[e.jsx(h,{children:a.consumerName}),e.jsx(h,{children:w(a.demandFrom,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(h,{children:w(a.demandUpto,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(h,{children:a.totaldemand}),e.jsx(h,{children:a.paidStatus=="Unpaid"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})}),e.jsx(h,{children:_(a==null?void 0:a.activeDemandDetails,a.consumerName)})]},f+1))})]})})]})})}),e.jsx(C,{}),e.jsx(M,{"x-chunk":"dashboard-05-chunk-4",children:e.jsx(R,{children:e.jsxs(ra,{methods:m,onSubmit:m.handleSubmit($),children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{children:e.jsx(Ae,{isRequired:!0,name:"paidUpto",label:"Payment Amount",className:"w-full",data:(X=(G=(K=(J=j==null?void 0:j.data)==null?void 0:J.data)==null?void 0:K.demand)==null?void 0:G.map(a=>({label:String(a.payment_to),value:String(a.payment_to)})))!=null?X:[]})}),e.jsx("div",{children:e.jsx(Ae,{isRequired:!0,name:"paymentMode",label:"Payment Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"DD",value:"Dd"},{label:"Card",value:"Card"},{label:"QR",value:"QR"}]})}),{Cheque:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"chequeNo",label:"Cheque Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,type:"date",min:w().format("YYYY-MM-DD"),name:"chequeDate",label:"Cheque Date",className:"w-full"})})]}),Dd:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"chequeNo",label:"DD Number",className:"w-full"})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"chequeDate",min:w().format("YYYY-MM-DD"),type:"date",label:"DD Date",className:"w-full"})})]})}[m.watch("paymentMode")]]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-4",children:e.jsxs(Ye,{type:"submit",className:"mx-auto",disabled:i.isLoading||j.isLoading,children:[e.jsx(ia,{className:"mr-2 h-4 w-4"}),i!=null&&i.isLoading?"Calculating...":"Pay Now ₹ ".concat((ee=(Z=i.data)==null?void 0:Z.data.totaldemand)!=null?ee:0)]})})]})})})]}):e.jsx(M,{children:e.jsx(R,{children:e.jsx("div",{className:"py-2 flex justify-center items-center mt-4",children:e.jsx("h1",{className:"text-base font-semibold text-center text-green-600",children:"You have no outstanding demand"})})})})]})]})}export{st as default};
