var it=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(it(i,t,"read from private field"),e?e.call(i):t.get(i)),h=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},u=(i,t,e,r)=>(it(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var d=(i,t,e)=>(it(i,t,"access private method"),e);import{a6 as Mt,a7 as J,a8 as At,a9 as Ot,aa as Ct,ab as Kt,ac as Bt,ad as jt,ae as St,af as Y,ag as Et,ah as kt,ai as xt,aj as ft}from"./index-CIaZ666a.js";import{r as m}from"./router-DQohkvhc.js";var y,c,j,b,M,P,C,k,T,L,x,U,w,A,D,B,q,rt,W,nt,_,at,V,ht,z,ot,H,ut,N,ct,X,Ut,It,qt=(It=class extends Mt{constructor(t,e){super();h(this,D);h(this,q);h(this,W);h(this,_);h(this,V);h(this,z);h(this,H);h(this,N);h(this,X);h(this,y,void 0);h(this,c,void 0);h(this,j,void 0);h(this,b,void 0);h(this,M,void 0);h(this,P,void 0);h(this,C,void 0);h(this,k,void 0);h(this,T,void 0);h(this,L,void 0);h(this,x,void 0);h(this,U,void 0);h(this,w,void 0);h(this,A,new Set);this.options=e,u(this,y,t),u(this,C,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,c).addObserver(this),wt(s(this,c),this.options)?d(this,D,B).call(this):this.updateResult(),d(this,V,ht).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return lt(s(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return lt(s(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,z,ot).call(this),d(this,H,ut).call(this),s(this,c).removeObserver(this)}setOptions(t,e){const r=this.options,a=s(this,c);if(this.options=s(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");d(this,N,ct).call(this),s(this,c).setOptions(this.options),r._defaulted&&!J(this.options,r)&&s(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,c),observer:this});const o=this.hasListeners();o&&Ft(s(this,c),a,this.options,r)&&d(this,D,B).call(this),this.updateResult(e),o&&(s(this,c)!==a||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&d(this,q,rt).call(this);const n=d(this,W,nt).call(this);o&&(s(this,c)!==a||this.options.enabled!==r.enabled||n!==s(this,w))&&d(this,_,at).call(this,n)}getOptimisticResult(t){const e=s(this,y).getQueryCache().build(s(this,y),t),r=this.createResult(e,t);return _t(this,r)&&(u(this,b,r),u(this,P,this.options),u(this,M,s(this,c).state)),r}getCurrentResult(){return s(this,b)}trackResult(t,e){const r={};return Object.keys(t).forEach(a=>{Object.defineProperty(r,a,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(a),e==null||e(a),t[a])})}),r}trackProp(t){s(this,A).add(t)}getCurrentQuery(){return s(this,c)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,y).defaultQueryOptions(t),r=s(this,y).getQueryCache().build(s(this,y),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return d(this,D,B).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,b)))}createResult(t,e){var gt;const r=s(this,c),a=this.options,o=s(this,b),n=s(this,M),f=s(this,P),S=t!==r?t.state:s(this,j),{state:p}=t;let l={...p},bt=!1,O;if(e._optimisticResults){const g=this.hasListeners(),st=!g&&wt(t,e),Lt=g&&Ft(t,r,e,a);(st||Lt)&&(l={...l,...jt(p.data,t.options)}),e._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:yt,errorUpdatedAt:vt,status:Q}=l;if(e.select&&l.data!==void 0)if(o&&l.data===(n==null?void 0:n.data)&&e.select===s(this,k))O=s(this,T);else try{u(this,k,e.select),O=e.select(l.data),O=St(o==null?void 0:o.data,O,e),u(this,T,O),u(this,C,null)}catch(g){u(this,C,g)}else O=l.data;if(e.placeholderData!==void 0&&O===void 0&&Q==="pending"){let g;if(o!=null&&o.isPlaceholderData&&e.placeholderData===(f==null?void 0:f.placeholderData))g=o.data;else if(g=typeof e.placeholderData=="function"?e.placeholderData((gt=s(this,L))==null?void 0:gt.state.data,s(this,L)):e.placeholderData,e.select&&g!==void 0)try{g=e.select(g),u(this,C,null)}catch(st){u(this,C,st)}g!==void 0&&(Q="success",O=St(o==null?void 0:o.data,g,e),bt=!0)}s(this,C)&&(yt=s(this,C),O=s(this,T),vt=Date.now(),Q="error");const Z=l.fetchStatus==="fetching",tt=Q==="pending",et=Q==="error",mt=tt&&Z,Rt=O!==void 0;return{status:Q,fetchStatus:l.fetchStatus,isPending:tt,isSuccess:Q==="success",isError:et,isInitialLoading:mt,isLoading:mt,data:O,dataUpdatedAt:l.dataUpdatedAt,error:yt,errorUpdatedAt:vt,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>S.dataUpdateCount||l.errorUpdateCount>S.errorUpdateCount,isFetching:Z,isRefetching:Z&&!tt,isLoadingError:et&&!Rt,isPaused:l.fetchStatus==="paused",isPlaceholderData:bt,isRefetchError:et&&Rt,isStale:pt(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,b),r=this.createResult(s(this,c),this.options);if(u(this,M,s(this,c).state),u(this,P,this.options),s(this,M).data!==void 0&&u(this,L,s(this,c)),J(r,e))return;u(this,b,r);const a={},o=()=>{if(!e)return!0;const{notifyOnChangeProps:n}=this.options,f=typeof n=="function"?n():n;if(f==="all"||!f&&!s(this,A).size)return!0;const R=new Set(f??s(this,A));return this.options.throwOnError&&R.add("error"),Object.keys(s(this,b)).some(S=>{const p=S;return s(this,b)[p]!==e[p]&&R.has(p)})};(t==null?void 0:t.listeners)!==!1&&o()&&(a.listeners=!0),d(this,X,Ut).call(this,{...a,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,V,ht).call(this)}},y=new WeakMap,c=new WeakMap,j=new WeakMap,b=new WeakMap,M=new WeakMap,P=new WeakMap,C=new WeakMap,k=new WeakMap,T=new WeakMap,L=new WeakMap,x=new WeakMap,U=new WeakMap,w=new WeakMap,A=new WeakMap,D=new WeakSet,B=function(t){d(this,N,ct).call(this);let e=s(this,c).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(At)),e},q=new WeakSet,rt=function(){if(d(this,z,ot).call(this),Ot||s(this,b).isStale||!Ct(this.options.staleTime))return;const e=Kt(s(this,b).dataUpdatedAt,this.options.staleTime)+1;u(this,x,setTimeout(()=>{s(this,b).isStale||this.updateResult()},e))},W=new WeakSet,nt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,c)):this.options.refetchInterval)??!1},_=new WeakSet,at=function(t){d(this,H,ut).call(this),u(this,w,t),!(Ot||this.options.enabled===!1||!Ct(s(this,w))||s(this,w)===0)&&u(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||Bt.isFocused())&&d(this,D,B).call(this)},s(this,w)))},V=new WeakSet,ht=function(){d(this,q,rt).call(this),d(this,_,at).call(this,d(this,W,nt).call(this))},z=new WeakSet,ot=function(){s(this,x)&&(clearTimeout(s(this,x)),u(this,x,void 0))},H=new WeakSet,ut=function(){s(this,U)&&(clearInterval(s(this,U)),u(this,U,void 0))},N=new WeakSet,ct=function(){const t=s(this,y).getQueryCache().build(s(this,y),this.options);if(t===s(this,c))return;const e=s(this,c);u(this,c,t),u(this,j,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},X=new WeakSet,Ut=function(t){Y.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,b))}),s(this,y).getQueryCache().notify({query:s(this,c),type:"observerResultsUpdated"})})},It);function Wt(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function wt(i,t){return Wt(i,t)||i.state.data!==void 0&&lt(i,t,t.refetchOnMount)}function lt(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&pt(i,t)}return!1}function Ft(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&pt(i,e)}function pt(i,t){return t.enabled!==!1&&i.isStaleByTime(t.staleTime)}function _t(i,t){return!J(i.getCurrentResult(),t)}var F,I,v,E,K,$,G,dt,Qt,Vt=(Qt=class extends Mt{constructor(t,e){super();h(this,K);h(this,G);h(this,F,void 0);h(this,I,void 0);h(this,v,void 0);h(this,E,void 0);u(this,F,t),this.setOptions(e),this.bindMethods(),d(this,K,$).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const e=this.options;this.options=s(this,F).defaultMutationOptions(t),J(this.options,e)||s(this,F).getMutationCache().notify({type:"observerOptionsUpdated",mutation:s(this,v),observer:this}),e!=null&&e.mutationKey&&this.options.mutationKey&&Et(e.mutationKey)!==Et(this.options.mutationKey)?this.reset():((r=s(this,v))==null?void 0:r.state.status)==="pending"&&s(this,v).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=s(this,v))==null||t.removeObserver(this)}onMutationUpdate(t){d(this,K,$).call(this),d(this,G,dt).call(this,t)}getCurrentResult(){return s(this,I)}reset(){var t;(t=s(this,v))==null||t.removeObserver(this),u(this,v,void 0),d(this,K,$).call(this),d(this,G,dt).call(this)}mutate(t,e){var r;return u(this,E,e),(r=s(this,v))==null||r.removeObserver(this),u(this,v,s(this,F).getMutationCache().build(s(this,F),this.options)),s(this,v).addObserver(this),s(this,v).execute(t)}},F=new WeakMap,I=new WeakMap,v=new WeakMap,E=new WeakMap,K=new WeakSet,$=function(){var e;const t=((e=s(this,v))==null?void 0:e.state)??kt();u(this,I,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},G=new WeakSet,dt=function(t){Y.batch(()=>{var e,r,a,o,n,f,R,S;if(s(this,E)&&this.hasListeners()){const p=s(this,I).variables,l=s(this,I).context;(t==null?void 0:t.type)==="success"?((r=(e=s(this,E)).onSuccess)==null||r.call(e,t.data,p,l),(o=(a=s(this,E)).onSettled)==null||o.call(a,t.data,null,p,l)):(t==null?void 0:t.type)==="error"&&((f=(n=s(this,E)).onError)==null||f.call(n,t.error,p,l),(S=(R=s(this,E)).onSettled)==null||S.call(R,void 0,t.error,p,l))}this.listeners.forEach(p=>{p(s(this,I))})})},Qt),Dt=m.createContext(!1),zt=()=>m.useContext(Dt);Dt.Provider;function Ht(){let i=!1;return{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i}}var Nt=m.createContext(Ht()),Gt=()=>m.useContext(Nt);function Pt(i,t){return typeof i=="function"?i(...t):!!i}function $t(){}var Jt=(i,t)=>{(i.suspense||i.throwOnError)&&(t.isReset()||(i.retryOnMount=!1))},Xt=i=>{m.useEffect(()=>{i.clearReset()},[i])},Yt=({result:i,errorResetBoundary:t,throwOnError:e,query:r})=>i.isError&&!t.isReset()&&!i.isFetching&&r&&Pt(e,[i.error,r]),Zt=i=>{i.suspense&&typeof i.staleTime!="number"&&(i.staleTime=1e3)},te=(i,t)=>(i==null?void 0:i.suspense)&&t.isPending,ee=(i,t,e)=>t.fetchOptimistic(i).catch(()=>{e.clearReset()});function se(i,t,e){const r=xt(),a=zt(),o=Gt(),n=r.defaultQueryOptions(i);n._optimisticResults=a?"isRestoring":"optimistic",Zt(n),Jt(n,o),Xt(o);const[f]=m.useState(()=>new t(r,n)),R=f.getOptimisticResult(n);if(m.useSyncExternalStore(m.useCallback(S=>{const p=a?()=>{}:f.subscribe(Y.batchCalls(S));return f.updateResult(),p},[f,a]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),m.useEffect(()=>{f.setOptions(n,{listeners:!1})},[n,f]),te(n,R))throw ee(n,f,o);if(Yt({result:R,errorResetBoundary:o,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash)}))throw R.error;return n.notifyOnChangeProps?R:f.trackResult(R)}function Tt(i,t){return se(i,qt)}function ie(i,t){const e=xt(),[r]=m.useState(()=>new Vt(e,i));m.useEffect(()=>{r.setOptions(i)},[r,i]);const a=m.useSyncExternalStore(m.useCallback(n=>r.subscribe(Y.batchCalls(n)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=m.useCallback((n,f)=>{r.mutate(n,f).catch($t)},[r]);if(a.error&&Pt(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:o,mutateAsync:a.mutate}}const re=async(i,t)=>(await ft.get(i,{...t})).data;function ce({key:i,api:t,options:e,value:r,config:a}){return Tt({queryKey:[i??t,...r??[]],queryFn:async()=>re(t,a),refetchOnReconnect:"always",refetchOnWindowFocus:!1,...e})}function le({key:i,api:t,options:e,value:r,config:a}){return Tt({queryKey:[i??t,...r??[]],queryFn:async()=>(await ft.post(t,{...a})).data,refetchOnReconnect:"always",refetchOnWindowFocus:!1,...e})}const ne=(i,t)=>ft.post(i,t),de=({options:i})=>ie({mutationFn:({api:t,data:e})=>ne(t,e),...i});export{le as a,ce as b,de as u};