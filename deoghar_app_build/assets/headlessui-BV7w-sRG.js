import{r as S,a as Nt}from"./router-CTqkcgir.js";const Vt=["top","right","bottom","left"],B=Math.min,D=Math.max,rt=Math.round,ot=Math.floor,I=t=>({x:t,y:t}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},_t={start:"end",end:"start"};function ut(t,e,o){return D(t,B(e,o))}function z(t,e){return typeof t=="function"?t(e):t}function _(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function mt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(_(t))?"y":"x"}function ht(t){return mt(Q(t))}function jt(t,e,o){o===void 0&&(o=!1);const n=J(t),i=ht(t),r=gt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function It(t){const e=st(t);return[dt(t),e,dt(e)]}function dt(t){return t.replace(/start|end/g,e=>_t[e])}function Yt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Xt(t,e,o,n){const i=J(t);let r=Yt(_(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(dt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>zt[e])}function qt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Pt(t){return typeof t!="number"?qt(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function vt(t,e,o){let{reference:n,floating:i}=t;const r=Q(e),s=ht(e),l=gt(s),c=_(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,m=n[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(J(e)){case"start":a[s]-=m*(o&&f?-1:1);break;case"end":a[s]+=m*(o&&f?-1:1);break}return a}const Ut=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=vt(f,n,c),m=n,a={},g=0;for(let h=0;h<l.length;h++){const{name:w,fn:p}=l[h],{x:y,y:v,data:b,reset:x}=await p({x:d,y:u,initialPlacement:n,placement:m,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=y??d,u=v??u,a={...a,[w]:{...a[w],...b}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(f=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:d,y:u}=vt(f,m,c)),h=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:a}};async function tt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=z(e,t),g=Pt(a),w=l[m?u==="floating"?"reference":"floating":u],p=ct(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),y=u==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),b=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},x=ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:c}):y);return{top:(p.top-x.top+g.top)/b.y,bottom:(x.bottom-p.bottom+g.bottom)/b.y,left:(p.left-x.left+g.left)/b.x,right:(x.right-p.right+g.right)/b.x}}const Kt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=z(t,e)||{};if(f==null)return{};const u=Pt(d),m={x:o,y:n},a=ht(i),g=gt(a),h=await s.getDimensions(f),w=a==="y",p=w?"top":"left",y=w?"bottom":"right",v=w?"clientHeight":"clientWidth",b=r.reference[g]+r.reference[a]-m[a]-r.floating[g],x=m[a]-r.reference[a],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let O=A?A[v]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[v]||r.floating[g]);const P=b/2-x/2,W=O/2-h[g]/2-1,k=B(u[p],W),F=B(u[y],W),C=k,V=O-h[g]-F,L=O/2-h[g]/2+P,E=ut(C,L,V),T=!c.arrow&&J(i)!=null&&L!==E&&r.reference[g]/2-(L<C?k:F)-h[g]/2<0,R=T?L<C?L-C:L-V:0;return{[a]:m[a]+R,data:{[a]:E,centerOffset:L-E-R,...T&&{alignmentOffset:R}},reset:T}}}),Gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=z(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const p=_(i),y=_(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=m||(y||!h?[st(l)]:It(l));!m&&g!=="none"&&b.push(...Xt(l,h,g,v));const x=[l,...b],A=await tt(e,w),O=[];let P=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&O.push(A[p]),u){const C=jt(i,s,v);O.push(A[C[0]],A[C[1]])}if(P=[...P,{placement:i,overflows:O}],!O.every(C=>C<=0)){var W,k;const C=(((W=r.flip)==null?void 0:W.index)||0)+1,V=x[C];if(V)return{data:{index:C,overflows:P},reset:{placement:V}};let L=(k=P.filter(E=>E.overflows[0]<=0).sort((E,T)=>E.overflows[1]-T.overflows[1])[0])==null?void 0:k.placement;if(!L)switch(a){case"bestFit":{var F;const E=(F=P.map(T=>[T.placement,T.overflows.filter(R=>R>0).reduce((R,q)=>R+q,0)]).sort((T,R)=>T[1]-R[1])[0])==null?void 0:F[0];E&&(L=E);break}case"initialPlacement":L=l;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function bt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function At(t){return Vt.some(e=>t[e]>=0)}const Jt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:o}=e,{strategy:n="referenceHidden",...i}=z(t,e);switch(n){case"referenceHidden":{const r=await tt(e,{...i,elementContext:"reference"}),s=bt(r,o.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:At(s)}}}case"escaped":{const r=await tt(e,{...i,altBoundary:!0}),s=bt(r,o.floating);return{data:{escapedOffsets:s,escaped:At(s)}}}default:return{}}}}};async function Qt(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=_(o),l=J(o),c=Q(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=z(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*d,y:m*f}:{x:m*f,y:a*d}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Qt(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...c}=z(t,e),f={x:o,y:n},d=await tt(e,c),u=Q(_(i)),m=mt(u);let a=f[m],g=f[u];if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",y=a+d[w],v=a-d[p];a=ut(y,a,v)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=g+d[w],v=g-d[p];g=ut(y,g,v)}const h=l.fn({...e,[m]:a,[u]:g});return{...h,data:{x:h.x-o,y:h.y-n}}}}},ee=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:o,y:n,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=z(t,e),d={x:o,y:n},u=Q(i),m=mt(u);let a=d[m],g=d[u];const h=z(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const v=m==="y"?"height":"width",b=r.reference[m]-r.floating[v]+w.mainAxis,x=r.reference[m]+r.reference[v]-w.mainAxis;a<b?a=b:a>x&&(a=x)}if(f){var p,y;const v=m==="y"?"width":"height",b=["top","left"].includes(_(i)),x=r.reference[u]-r.floating[v]+(b&&((p=s.offset)==null?void 0:p[u])||0)+(b?0:w.crossAxis),A=r.reference[u]+r.reference[v]+(b?0:((y=s.offset)==null?void 0:y[u])||0)-(b?w.crossAxis:0);g<x?g=x:g>A&&(g=A)}return{[m]:a,[u]:g}}}},ne=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:i,elements:r}=e,{apply:s=()=>{},...l}=z(t,e),c=await tt(e,l),f=_(o),d=J(o),u=Q(o)==="y",{width:m,height:a}=n.floating;let g,h;f==="top"||f==="bottom"?(g=f,h=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=f,g=d==="end"?"top":"bottom");const w=a-c.top-c.bottom,p=m-c.left-c.right,y=B(a-c[g],w),v=B(m-c[h],p),b=!e.middlewareData.shift;let x=y,A=v;if(u?A=d||b?B(v,p):p:x=d||b?B(y,w):w,b&&!d){const P=D(c.left,0),W=D(c.right,0),k=D(c.top,0),F=D(c.bottom,0);u?A=m-2*(P!==0||W!==0?P+W:D(c.left,c.right)):x=a-2*(k!==0||F!==0?k+F:D(c.top,c.bottom))}await s({...e,availableWidth:A,availableHeight:x});const O=await i.getDimensions(r.floating);return m!==O.width||a!==O.height?{reset:{rects:!0}}:{}}}};function Z(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return t instanceof Node||t instanceof M(t).Node}function H(t){return t instanceof Element||t instanceof M(t).Element}function N(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function oe(t){return["table","td","th"].includes(Z(t))}function pt(t){const e=wt(),o=$(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function ie(t){let e=Y(t);for(;N(e)&&!G(e);){if(pt(e))return e;e=Y(e)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(Z(t))}function $(t){return M(t).getComputedStyle(t)}function ft(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||j(t);return Rt(e)?e.host:e}function Dt(t){const e=Y(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&nt(e)?e:Dt(e)}function et(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Dt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=M(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&o?et(s.frameElement):[]):e.concat(i,et(i,[],o))}function Mt(t){const e=$(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,l=rt(o)!==r||rt(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function xt(t){return H(t)?t:t.contextElement}function K(t){const e=xt(t);if(!N(e))return I(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Mt(e);let s=(r?rt(o.width):o.width)/n,l=(r?rt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const re=I(0);function kt(t){const e=M(t);return!wt()||!e.visualViewport?re:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function se(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==M(t)?!1:e}function X(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=xt(t);let s=I(1);e&&(n?H(n)&&(s=K(n)):s=K(t));const l=se(r,o,n)?kt(r):I(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=M(r),a=n&&H(n)?M(n):n;let g=m,h=g.frameElement;for(;h&&n&&a!==g;){const w=K(h),p=h.getBoundingClientRect(),y=$(h),v=p.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=v,f+=b,g=M(h),h=g.frameElement}}return ct({width:d,height:u,x:c,y:f})}const ce=[":popover-open",":modal"];function yt(t){return ce.some(e=>{try{return t.matches(e)}catch{return!1}})}function le(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=j(n),l=e?yt(e.floating):!1;if(n===s||l&&r)return o;let c={scrollLeft:0,scrollTop:0},f=I(1);const d=I(0),u=N(n);if((u||!u&&!r)&&((Z(n)!=="body"||nt(s))&&(c=ft(n)),N(n))){const m=X(n);f=K(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-c.scrollLeft*f.x+d.x,y:o.y*f.y-c.scrollTop*f.y+d.y}}function fe(t){return Array.from(t.getClientRects())}function Ft(t){return X(j(t)).left+ft(t).scrollLeft}function ae(t){const e=j(t),o=ft(t),n=t.ownerDocument.body,i=D(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=D(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Ft(t);const l=-o.scrollTop;return $(n).direction==="rtl"&&(s+=D(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function ue(t,e){const o=M(t),n=j(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=wt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function de(t,e){const o=X(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=N(t)?K(t):I(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=n*r.y;return{width:s,height:l,x:c,y:f}}function Ot(t,e,o){let n;if(e==="viewport")n=ue(t,o);else if(e==="document")n=ae(j(t));else if(H(e))n=de(e,o);else{const i=kt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return ct(n)}function $t(t,e){const o=Y(t);return o===e||!H(o)||G(o)?!1:$(o).position==="fixed"||$t(o,e)}function me(t,e){const o=e.get(t);if(o)return o;let n=et(t,[],!1).filter(l=>H(l)&&Z(l)!=="body"),i=null;const r=$(t).position==="fixed";let s=r?Y(t):t;for(;H(s)&&!G(s);){const l=$(s),c=pt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!c&&$t(t,s))?n=n.filter(d=>d!==s):i=l,s=Y(s)}return e.set(t,n),n}function ge(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?yt(e)?[]:me(e,this._c):[].concat(o),n],l=s[0],c=s.reduce((f,d)=>{const u=Ot(e,d,i);return f.top=D(u.top,f.top),f.right=B(u.right,f.right),f.bottom=B(u.bottom,f.bottom),f.left=D(u.left,f.left),f},Ot(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function he(t){const{width:e,height:o}=Mt(t);return{width:e,height:o}}function pe(t,e,o){const n=N(e),i=j(e),r=o==="fixed",s=X(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=I(0);if(n||!n&&!r)if((Z(e)!=="body"||nt(i))&&(l=ft(e)),n){const u=X(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Ft(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function at(t){return $(t).position==="static"}function Ct(t,e){return!N(t)||$(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wt(t,e){const o=M(t);if(yt(t))return o;if(!N(t)){let i=Y(t);for(;i&&!G(i);){if(H(i)&&!at(i))return i;i=Y(i)}return o}let n=Ct(t,e);for(;n&&oe(n)&&at(n);)n=Ct(n,e);return n&&G(n)&&at(n)&&!pt(n)?o:n||ie(t)||o}const we=async function(t){const e=this.getOffsetParent||Wt,o=this.getDimensions,n=await o(t.floating);return{reference:pe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xe(t){return $(t).direction==="rtl"}const ye={convertOffsetParentRelativeRectToViewportRelativeRect:le,getDocumentElement:j,getClippingRect:ge,getOffsetParent:Wt,getElementRects:we,getClientRects:fe,getDimensions:he,getScale:K,isElement:H,isRTL:xe};function ve(t,e){let o=null,n;const i=j(t);function r(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const a=ot(d),g=ot(i.clientWidth-(f+u)),h=ot(i.clientHeight-(d+m)),w=ot(f),y={rootMargin:-a+"px "+-g+"px "+-h+"px "+-w+"px",threshold:D(0,B(1,c))||1};let v=!0;function b(x){const A=x[0].intersectionRatio;if(A!==c){if(!v)return s();A?s(!1,A):n=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,y)}o.observe(t)}return s(!0),r}function Te(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,f=xt(t),d=i||r?[...f?et(f):[],...et(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),r&&p.addEventListener("resize",o)});const u=f&&l?ve(f,o):null;let m=-1,a=null;s&&(a=new ResizeObserver(p=>{let[y]=p;y&&y.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=a)==null||v.observe(e)})),o()}),f&&!c&&a.observe(f),a.observe(e));let g,h=c?X(t):null;c&&w();function w(){const p=X(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,g=requestAnimationFrame(w)}return o(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",o),r&&y.removeEventListener("resize",o)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const be=Zt,Ae=te,Re=Gt,Oe=ne,Ce=Jt,Et=Kt,Ee=ee,Se=(t,e,o)=>{const n=new Map,i={platform:ye,...o},r={...i.platform,_c:n};return Ut(t,e,{...i,platform:r})};var it=typeof document<"u"?S.useLayoutEffect:S.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let o,n,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!==e.length)return!1;for(n=o;n--!==0;)if(!lt(t[n],e[n]))return!1;return!0}if(i=Object.keys(t),o=i.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!{}.hasOwnProperty.call(e,i[n]))return!1;for(n=o;n--!==0;){const r=i[n];if(!(r==="_owner"&&t.$$typeof)&&!lt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Bt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function St(t,e){const o=Bt(t);return Math.round(e*o)/o}function Lt(t){const e=S.useRef(t);return it(()=>{e.current=t}),e}function De(t){t===void 0&&(t={});const{placement:e="bottom",strategy:o="absolute",middleware:n=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[d,u]=S.useState({x:0,y:0,strategy:o,placement:e,middlewareData:{},isPositioned:!1}),[m,a]=S.useState(n);lt(m,n)||a(n);const[g,h]=S.useState(null),[w,p]=S.useState(null),y=S.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),v=S.useCallback(R=>{R!==O.current&&(O.current=R,p(R))},[]),b=r||g,x=s||w,A=S.useRef(null),O=S.useRef(null),P=S.useRef(d),W=c!=null,k=Lt(c),F=Lt(i),C=S.useCallback(()=>{if(!A.current||!O.current)return;const R={placement:e,strategy:o,middleware:m};F.current&&(R.platform=F.current),Se(A.current,O.current,R).then(q=>{const U={...q,isPositioned:!0};V.current&&!lt(P.current,U)&&(P.current=U,Nt.flushSync(()=>{u(U)}))})},[m,e,o,F]);it(()=>{f===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[f]);const V=S.useRef(!1);it(()=>(V.current=!0,()=>{V.current=!1}),[]),it(()=>{if(b&&(A.current=b),x&&(O.current=x),b&&x){if(k.current)return k.current(b,x,C);C()}},[b,x,C,k,W]);const L=S.useMemo(()=>({reference:A,floating:O,setReference:y,setFloating:v}),[y,v]),E=S.useMemo(()=>({reference:b,floating:x}),[b,x]),T=S.useMemo(()=>{const R={position:o,left:0,top:0};if(!E.floating)return R;const q=St(E.floating,d.x),U=St(E.floating,d.y);return l?{...R,transform:"translate("+q+"px, "+U+"px)",...Bt(E.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:q,top:U}},[o,l,E.floating,d.x,d.y]);return S.useMemo(()=>({...d,update:C,refs:L,elements:E,floatingStyles:T}),[d,C,L,E,T])}const Le=t=>{function e(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:t,fn(o){const{element:n,padding:i}=typeof t=="function"?t(o):t;return n&&e(n)?n.current!=null?Et({element:n.current,padding:i}).fn(o):{}:n?Et({element:n,padding:i}).fn(o):{}}}},Me=(t,e)=>({...be(t),options:[t,e]}),ke=(t,e)=>({...Ae(t),options:[t,e]}),Fe=(t,e)=>({...Ee(t),options:[t,e]}),$e=(t,e)=>({...Re(t),options:[t,e]}),We=(t,e)=>({...Oe(t),options:[t,e]}),Be=(t,e)=>({...Ce(t),options:[t,e]}),He=(t,e)=>({...Le(t),options:[t,e]});function Ht(t){var e,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(o=Ht(t[e]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}function Ne(){for(var t,e,o=0,n="",i=arguments.length;o<i;o++)(t=arguments[o])&&(e=Ht(t))&&(n&&(n+=" "),n+=e);return n}export{Te as a,We as b,He as c,Ne as d,$e as f,Be as h,Fe as l,Me as o,ke as s,De as u};
