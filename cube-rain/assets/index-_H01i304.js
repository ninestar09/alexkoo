(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dh={exports:{}},Ho={};var k_;function YS(){if(k_)return Ho;k_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var X_;function jS(){return X_||(X_=1,dh.exports=YS()),dh.exports}var Le=jS(),ph={exports:{}},ue={};var W_;function ZS(){if(W_)return ue;W_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function v(U,tt,gt){this.props=U,this.context=tt,this.refs=y,this.updater=gt||R}v.prototype.isReactComponent={},v.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function N(){}N.prototype=v.prototype;function O(U,tt,gt){this.props=U,this.context=tt,this.refs=y,this.updater=gt||R}var P=O.prototype=new N;P.constructor=O,b(P,v.prototype),P.isPureReactComponent=!0;var B=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(U,tt,gt){var Ct=gt.ref;return{$$typeof:o,type:U,key:tt,ref:Ct!==void 0?Ct:null,props:gt}}function D(U,tt){return w(U.type,tt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function at(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return tt[gt]})}var st=/\/+/g;function ht(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?at(""+U.key):tt.toString(36)}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,tt,gt,Ct,Ht){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var ft=!1;if(U===null)ft=!0;else switch($){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(U.$$typeof){case o:case t:ft=!0;break;case x:return ft=U._init,F(ft(U._payload),tt,gt,Ct,Ht)}}if(ft)return Ht=Ht(U),ft=Ct===""?"."+ht(U,0):Ct,B(Ht)?(gt="",ft!=null&&(gt=ft.replace(st,"$&/")+"/"),F(Ht,tt,gt,"",function(Gt){return Gt})):Ht!=null&&(X(Ht)&&(Ht=D(Ht,gt+(Ht.key==null||U&&U.key===Ht.key?"":(""+Ht.key).replace(st,"$&/")+"/")+ft)),tt.push(Ht)),1;ft=0;var wt=Ct===""?".":Ct+":";if(B(U))for(var Xt=0;Xt<U.length;Xt++)Ct=U[Xt],$=wt+ht(Ct,Xt),ft+=F(Ct,tt,gt,$,Ht);else if(Xt=E(U),typeof Xt=="function")for(U=Xt.call(U),Xt=0;!(Ct=U.next()).done;)Ct=Ct.value,$=wt+ht(Ct,Xt++),ft+=F(Ct,tt,gt,$,Ht);else if($==="object"){if(typeof U.then=="function")return F(ut(U),tt,gt,Ct,Ht);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function G(U,tt,gt){if(U==null)return U;var Ct=[],Ht=0;return F(U,Ct,"","",function($){return tt.call(gt,$,Ht++)}),Ct}function et(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var St=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:G,forEach:function(U,tt,gt){G(U,function(){tt.apply(this,arguments)},gt)},count:function(U){var tt=0;return G(U,function(){tt++}),tt},toArray:function(U){return G(U,function(tt){return tt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ue.Activity=_,ue.Children=xt,ue.Component=v,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=O,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(U,tt,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ct=b({},U.props),Ht=U.key;if(tt!=null)for($ in tt.key!==void 0&&(Ht=""+tt.key),tt)!j.call(tt,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&tt.ref===void 0||(Ct[$]=tt[$]);var $=arguments.length-2;if($===1)Ct.children=gt;else if(1<$){for(var ft=Array($),wt=0;wt<$;wt++)ft[wt]=arguments[wt+2];Ct.children=ft}return w(U.type,Ht,Ct)},ue.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ue.createElement=function(U,tt,gt){var Ct,Ht={},$=null;if(tt!=null)for(Ct in tt.key!==void 0&&($=""+tt.key),tt)j.call(tt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Ht[Ct]=tt[Ct]);var ft=arguments.length-2;if(ft===1)Ht.children=gt;else if(1<ft){for(var wt=Array(ft),Xt=0;Xt<ft;Xt++)wt[Xt]=arguments[Xt+2];Ht.children=wt}if(U&&U.defaultProps)for(Ct in ft=U.defaultProps,ft)Ht[Ct]===void 0&&(Ht[Ct]=ft[Ct]);return w(U,$,Ht)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:d,render:U}},ue.isValidElement=X,ue.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:et}},ue.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},ue.startTransition=function(U){var tt=z.T,gt={};z.T=gt;try{var Ct=U(),Ht=z.S;Ht!==null&&Ht(gt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(H,St)}catch($){St($)}finally{tt!==null&&gt.types!==null&&(tt.types=gt.types),z.T=tt}},ue.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ue.use=function(U){return z.H.use(U)},ue.useActionState=function(U,tt,gt){return z.H.useActionState(U,tt,gt)},ue.useCallback=function(U,tt){return z.H.useCallback(U,tt)},ue.useContext=function(U){return z.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,tt){return z.H.useDeferredValue(U,tt)},ue.useEffect=function(U,tt){return z.H.useEffect(U,tt)},ue.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ue.useId=function(){return z.H.useId()},ue.useImperativeHandle=function(U,tt,gt){return z.H.useImperativeHandle(U,tt,gt)},ue.useInsertionEffect=function(U,tt){return z.H.useInsertionEffect(U,tt)},ue.useLayoutEffect=function(U,tt){return z.H.useLayoutEffect(U,tt)},ue.useMemo=function(U,tt){return z.H.useMemo(U,tt)},ue.useOptimistic=function(U,tt){return z.H.useOptimistic(U,tt)},ue.useReducer=function(U,tt,gt){return z.H.useReducer(U,tt,gt)},ue.useRef=function(U){return z.H.useRef(U)},ue.useState=function(U){return z.H.useState(U)},ue.useSyncExternalStore=function(U,tt,gt){return z.H.useSyncExternalStore(U,tt,gt)},ue.useTransition=function(){return z.H.useTransition()},ue.version="19.2.3",ue}var q_;function jd(){return q_||(q_=1,ph.exports=ZS()),ph.exports}var Fn=jd(),mh={exports:{}},Go={},gh={exports:{}},_h={};var Y_;function KS(){return Y_||(Y_=1,(function(o){function t(F,G){var et=F.length;F.push(G);t:for(;0<et;){var St=et-1>>>1,xt=F[St];if(0<l(xt,G))F[St]=G,F[et]=xt,et=St;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],et=F.pop();if(et!==G){F[0]=et;t:for(var St=0,xt=F.length,U=xt>>>1;St<U;){var tt=2*(St+1)-1,gt=F[tt],Ct=tt+1,Ht=F[Ct];if(0>l(gt,et))Ct<xt&&0>l(Ht,gt)?(F[St]=Ht,F[Ct]=et,St=Ct):(F[St]=gt,F[tt]=et,St=tt);else if(Ct<xt&&0>l(Ht,et))F[St]=Ht,F[Ct]=et,St=Ct;else break t}}return G}function l(F,G){var et=F.sortIndex-G.sortIndex;return et!==0?et:F.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,_=null,S=3,E=!1,R=!1,b=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function B(F){if(b=!1,P(F),!R)if(i(m)!==null)R=!0,H||(H=!0,at());else{var G=i(p);G!==null&&ut(B,G.startTime-F)}}var H=!1,z=-1,j=5,w=-1;function D(){return y?!0:!(o.unstable_now()-w<j)}function X(){if(y=!1,H){var F=o.unstable_now();w=F;var G=!0;try{t:{R=!1,b&&(b=!1,N(z),z=-1),E=!0;var et=S;try{e:{for(P(F),_=i(m);_!==null&&!(_.expirationTime>F&&D());){var St=_.callback;if(typeof St=="function"){_.callback=null,S=_.priorityLevel;var xt=St(_.expirationTime<=F);if(F=o.unstable_now(),typeof xt=="function"){_.callback=xt,P(F),G=!0;break e}_===i(m)&&s(m),P(F)}else s(m);_=i(m)}if(_!==null)G=!0;else{var U=i(p);U!==null&&ut(B,U.startTime-F),G=!1}}break t}finally{_=null,S=et,E=!1}G=void 0}}finally{G?at():H=!1}}}var at;if(typeof O=="function")at=function(){O(X)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ht=st.port2;st.port1.onmessage=X,at=function(){ht.postMessage(null)}}else at=function(){v(X,0)};function ut(F,G){z=v(function(){F(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(F){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var et=S;S=G;try{return F()}finally{S=et}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var et=S;S=F;try{return G()}finally{S=et}},o.unstable_scheduleCallback=function(F,G,et){var St=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?St+et:St):et=St,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=et+xt,F={id:x++,callback:G,priorityLevel:F,startTime:et,expirationTime:xt,sortIndex:-1},et>St?(F.sortIndex=et,t(p,F),i(m)===null&&F===i(p)&&(b?(N(z),z=-1):b=!0,ut(B,et-St))):(F.sortIndex=xt,t(m,F),R||E||(R=!0,H||(H=!0,at()))),F},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(F){var G=S;return function(){var et=S;S=G;try{return F.apply(this,arguments)}finally{S=et}}}})(_h)),_h}var j_;function QS(){return j_||(j_=1,gh.exports=KS()),gh.exports}var vh={exports:{}},Nn={};var Z_;function JS(){if(Z_)return Nn;Z_=1;var o=jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var K_;function $S(){if(K_)return vh.exports;K_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vh.exports=JS(),vh.exports}var Q_;function ty(){if(Q_)return Go;Q_=1;var o=QS(),t=jd(),i=$S();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,r=f;break}if(A===r){g=!0,r=u,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=u;break}if(A===r){g=!0,r=f,a=u;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case O:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function U(e){return{current:e}}function tt(e){0>xt||(e.current=St[xt],St[xt]=null,xt--)}function gt(e,n){xt++,St[xt]=e.current,e.current=n}var Ct=U(null),Ht=U(null),$=U(null),ft=U(null);function wt(e,n){switch(gt($,n),gt(Ht,e),gt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?h_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=h_(n),e=d_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Ct),gt(Ct,e)}function Xt(){tt(Ct),tt(Ht),tt($)}function Gt(e){e.memoizedState!==null&&gt(ft,e);var n=Ct.current,a=d_(n,e.type);n!==a&&(gt(Ht,e),gt(Ct,a))}function me(e){Ht.current===e&&(tt(Ct),tt(Ht)),ft.current===e&&(tt(ft),Fo._currentValue=et)}var Ze,ve;function ge(e){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+ve}var Ae=!1;function re(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var it=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){it=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){it=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var I=g.split(`
`),J=A.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===J.length)for(r=I.length-1,u=J.length-1;1<=r&&0<=u&&I[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==J[u]){var dt=`
`+I[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function Et(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return ge("Activity");default:return""}}function L(e){try{var n="",a=null;do n+=Et(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Kt=Object.prototype.hasOwnProperty,$t=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,bt=o.unstable_shouldYield,T=o.unstable_requestPaint,M=o.unstable_now,V=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,mt=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,Ot=o.unstable_LowPriority,Tt=o.unstable_IdlePriority,zt=o.log,Qt=o.unstable_setDisableYieldValue,Mt=null,At=null;function Vt(e){if(typeof zt=="function"&&Qt(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Mt,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Ut=Math.log,he=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ut(e)/he|0)|0}var Nt=256,Rt=262144,It=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=yt(r):(g&=A,g!==0?u=yt(g):a||(a=A&~e,a!==0&&(u=yt(a))))):(A=r&~f,A!==0?u=yt(A):g!==0?u=yt(g):a||(a=r&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,n,a,r,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Bt(a),_t=1<<dt;A[dt]=0,I[dt]=-1;var it=J[dt];if(it!==null)for(J[dt]=null,dt=0;dt<it.length;dt++){var ct=it[dt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}r!==0&&rl(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function rl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Yr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Fs(e,n){var a=n&-n;return a=(a&42)!==0?1:jr(a),(a&(e.suspendedLanes|n))!==0?0:a}function jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function zi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ui=Math.random().toString(36).slice(2),on="__reactFiber$"+ui,yn="__reactProps$"+ui,Ri="__reactContainer$"+ui,Bs="__reactEvents$"+ui,Is="__reactListeners$"+ui,ol="__reactHandles$"+ui,Kr="__reactResources$"+ui,ss="__reactMarker$"+ui;function Qr(e){delete e[on],delete e[yn],delete e[Bs],delete e[Is],delete e[ol]}function Ea(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=S_(e);e!==null;){if(a=e[on])return a;e=S_(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[on]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[Kr];return n||(n=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[ss]=!0}var q=new Set,ot={};function nt(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(ot[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},Pt={};function Wt(e){return Kt.call(Pt,e)?!0:Kt.call(kt,e)?!1:Lt.test(e)?Pt[e]=!0:(kt[e]=!0,!1)}function Yt(e,n,a){if(Wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function jt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){if(!e._valueTracker){var n=Ne(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ne(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function le(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,r,u,f,g,A){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?En(e,g,ie(n)):a!=null?En(e,g,ie(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ie(A):e.removeAttribute("name")}function Ki(e,n,a,r,u,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){je(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),je(e)}function En(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function bn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),je(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&An(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Xv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var cu=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function fp(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[yn]||null;if(!u)throw Error(s(90));Mn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Fe(r)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fi(e,!!a.multiple,n,!1)}}}var fu=!1;function hp(e,n,a){if(fu)return e(n,a);fu=!0;try{var r=e(n);return r}finally{if(fu=!1,(Gs!==null||Vs!==null)&&(Zl(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,fp(n),e)))for(n=0;n<e.length;n++)fp(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Ji)try{var $r={};Object.defineProperty($r,"passive",{get:function(){hu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{hu=!1}var Aa=null,du=null,cl=null;function dp(){if(cl)return cl;var e,n=du,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return cl=u.slice(e,1<r?1-r:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function pp(){return!1}function Vn(e){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:pp,this.isPropagationStopped=pp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Vn(os),to=_({},os,{view:0,detail:0}),Wv=Vn(to),pu,mu,eo,dl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(pu=e.screenX-eo.screenX,mu=e.screenY-eo.screenY):mu=pu=0,eo=e),pu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),mp=Vn(dl),qv=_({},dl,{dataTransfer:0}),Yv=Vn(qv),jv=_({},to,{relatedTarget:0}),gu=Vn(jv),Zv=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Vn(Zv),Qv=_({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=Vn(Qv),$v=_({},os,{data:0}),gp=Vn($v),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nx[e])?!!n[e]:!1}function _u(){return ix}var ax=_({},to,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Vn(ax),rx=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Vn(rx),ox=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),lx=Vn(ox),cx=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Vn(cx),fx=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Vn(fx),dx=_({},os,{newState:0,oldState:0}),px=Vn(dx),mx=[9,13,27,32],vu=Ji&&"CompositionEvent"in window,no=null;Ji&&"documentMode"in document&&(no=document.documentMode);var gx=Ji&&"TextEvent"in window&&!no,vp=Ji&&(!vu||no&&8<no&&11>=no),xp=" ",Sp=!1;function yp(e,n){switch(e){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function _x(e,n){switch(e){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,xp);case"textInput":return e=n.data,e===xp&&Sp?null:e;default:return null}}function vx(e,n){if(ks)return e==="compositionend"||!vu&&yp(e,n)?(e=dp(),cl=du=Aa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xx[e.type]:n==="textarea"}function bp(e,n,a,r){Gs?Vs?Vs.push(r):Vs=[r]:Gs=r,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var io=null,ao=null;function Sx(e){r_(e,0)}function pl(e){var n=rs(e);if(Fe(n))return e}function Tp(e,n){if(e==="change")return n}var Ap=!1;if(Ji){var xu;if(Ji){var Su="oninput"in document;if(!Su){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Su=typeof Rp.oninput=="function"}xu=Su}else xu=!1;Ap=xu&&(!document.documentMode||9<document.documentMode)}function Cp(){io&&(io.detachEvent("onpropertychange",wp),ao=io=null)}function wp(e){if(e.propertyName==="value"&&pl(ao)){var n=[];bp(n,ao,e,uu(e)),hp(Sx,n)}}function yx(e,n,a){e==="focusin"?(Cp(),io=n,ao=a,io.attachEvent("onpropertychange",wp)):e==="focusout"&&Cp()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ao)}function Ex(e,n){if(e==="click")return pl(n)}function bx(e,n){if(e==="input"||e==="change")return pl(n)}function Tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Tx;function so(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Kt.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,n){var a=Dp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ax=Ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,Mu=null,ro=null,Eu=!1;function Op(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Xs==null||Xs!==Jt(r)||(r=Xs,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=nc(Mu,"onSelect"),0<r.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Xs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},bu={},Pp={};Ji&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function cs(e){if(bu[e])return bu[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return bu[e]=n[a];return e}var Fp=cs("animationend"),zp=cs("animationiteration"),Bp=cs("animationstart"),Rx=cs("transitionrun"),Cx=cs("transitionstart"),wx=cs("transitioncancel"),Ip=cs("transitionend"),Hp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function wi(e,n){Hp.set(e,n),nt(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],qs=0,Au=0;function gl(){for(var e=qs,n=Au=qs=0;n<e;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&Gp(a,u,f)}}function _l(e,n,a,r){hi[qs++]=e,hi[qs++]=n,hi[qs++]=a,hi[qs++]=r,Au|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ru(e,n,a,r){return _l(e,n,a,r),vl(e)}function us(e,n){return _l(e,null,null,n),vl(e)}function Gp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<wo)throw wo=0,zf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function Dx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,r){return new Dx(e,n,a,r)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,r,u,f){var g=0;if(r=e,typeof e=="function")Cu(e)&&(g=1);else if(typeof e=="string")g=PS(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=$n(31,a,n,u),e.elementType=w,e.lanes=f,e;case b:return fs(a.children,u,f,n);case y:g=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case B:return e=$n(13,a,n,u),e.elementType=B,e.lanes=f,e;case H:return e=$n(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:g=10;break t;case N:g=9;break t;case P:g=11;break t;case z:g=14;break t;case j:g=16,r=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=$n(g,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function fs(e,n,a,r){return e=$n(7,e,r,n),e.lanes=a,e}function wu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function kp(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Du(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Xp=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:L(n)},Xp.set(e,n),n)}return{value:e,source:n,stack:L(n)}}var js=[],Zs=0,Sl=null,oo=0,pi=[],mi=0,Ra=null,Bi=1,Ii="";function ta(e,n){js[Zs++]=oo,js[Zs++]=Sl,Sl=e,oo=n}function Wp(e,n,a){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=Ra,Ra=e;var r=Bi;e=Ii;var u=32-Bt(r)-1;r&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Bi=1<<32-Bt(n)+u|a<<u|r,Ii=f+e}else Bi=1<<f|a<<u|r,Ii=e}function Uu(e){e.return!==null&&(ta(e,1),Wp(e,1,0))}function Lu(e){for(;e===Sl;)Sl=js[--Zs],js[Zs]=null,oo=js[--Zs],js[Zs]=null;for(;e===Ra;)Ra=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function qp(e,n){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=Ra,Bi=n.id,Ii=n.overflow,Ra=e}var Rn=null,Ke=null,Te=!1,Ca=null,gi=!1,Nu=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(di(n,e)),Nu}function Yp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[yn]=r,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)ye(Uo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ki(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||u_(n.textContent,a)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||wa(e,!0)}function jp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Rn=Rn.return}}function Ks(e){if(e!==Rn)return!1;if(!Te)return jp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Jf(e.type,e.memoizedProps)),a=!a),a&&Ke&&wa(e),jp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=x_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=x_(e)}else n===27?(n=Ke,ka(e.type)?(e=ih,ih=null,Ke=e):Ke=n):Ke=Rn?vi(e.stateNode.nextSibling):null;return!0}function hs(){Ke=Rn=null,Te=!1}function Ou(){var e=Ca;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ca=null),e}function lo(e){Ca===null?Ca=[e]:Ca.push(e)}var Pu=U(null),ds=null,ea=null;function Da(e,n,a){gt(Pu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Pu.current,tt(Pu)}function Fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Fu(f.return,a,e),r||(g=null);break t}f=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Fu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Qs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=u.type;Jn(u.pendingProps.value,g.value)||(e!==null?e.push(A):e=[A])}}else if(u===ft.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&zu(n,e,a,r),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Zp(ds,e)}function Ml(e,n){return ds===null&&ps(e),Zp(e,n)}function Zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var Ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lx=o.unstable_scheduleCallback,Nx=o.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Ux,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Lx(Nx,function(){e.controller.abort()})}var uo=null,Iu=0,Js=0,$s=null;function Ox(e,n){if(uo===null){var a=uo=[];Iu=0,Js=kf(),$s={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Iu++,n.then(Kp,Kp),n}function Kp(){if(--Iu===0&&uo!==null){$s!==null&&($s.status="fulfilled");var e=uo;uo=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Px(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Qp=F.S;F.S=function(e,n){Og=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(e,n),Qp!==null&&Qp(e,n)};var ms=U(null);function Hu(){var e=ms.current;return e!==null?e:Ye.pooledCache}function El(e,n){n===null?gt(ms,ms.current):gt(ms,n.pool)}function Jp(){var e=Hu();return e===null?null:{parent:ln._currentValue,pool:e}}var tr=Error(s(460)),Gu=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function $p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e}throw _s=n,tr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,tr):a}}var _s=null;function em(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function nm(e){if(e===tr||e===bl)throw Error(s(483))}var er=null,fo=0;function Al(e){var n=fo;return fo+=1,er===null&&(er=[]),tm(er,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function im(e){function n(Y,k){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[k],Y.flags|=16):Q.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=$i(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<k?(Y.flags|=67108866,k):Q):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,Q,pt){return k===null||k.tag!==6?(k=wu(Q,Y.mode,pt),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function I(Y,k,Q,pt){var te=Q.type;return te===b?dt(Y,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&gs(te)===k.type)?(k=u(k,Q.props),ho(k,Q),k.return=Y,k):(k=xl(Q.type,Q.key,Q.props,null,Y.mode,pt),ho(k,Q),k.return=Y,k)}function J(Y,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Du(Q,Y.mode,pt),k.return=Y,k):(k=u(k,Q.children||[]),k.return=Y,k)}function dt(Y,k,Q,pt,te){return k===null||k.tag!==7?(k=fs(Q,Y.mode,pt,te),k.return=Y,k):(k=u(k,Q),k.return=Y,k)}function _t(Y,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wu(""+k,Y.mode,Q),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return Q=xl(k.type,k.key,k.props,null,Y.mode,Q),ho(Q,k),Q.return=Y,Q;case R:return k=Du(k,Y.mode,Q),k.return=Y,k;case j:return k=gs(k),_t(Y,k,Q)}if(ut(k)||at(k))return k=fs(k,Y.mode,Q,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,Al(k),Q);if(k.$$typeof===O)return _t(Y,Ml(Y,k),Q);Rl(Y,k)}return null}function it(Y,k,Q,pt){var te=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return te!==null?null:A(Y,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===te?I(Y,k,Q,pt):null;case R:return Q.key===te?J(Y,k,Q,pt):null;case j:return Q=gs(Q),it(Y,k,Q,pt)}if(ut(Q)||at(Q))return te!==null?null:dt(Y,k,Q,pt,null);if(typeof Q.then=="function")return it(Y,k,Al(Q),pt);if(Q.$$typeof===O)return it(Y,k,Ml(Y,Q),pt);Rl(Y,Q)}return null}function ct(Y,k,Q,pt,te){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Q)||null,A(k,Y,""+pt,te);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?Q:pt.key)||null,I(k,Y,pt,te);case R:return Y=Y.get(pt.key===null?Q:pt.key)||null,J(k,Y,pt,te);case j:return pt=gs(pt),ct(Y,k,Q,pt,te)}if(ut(pt)||at(pt))return Y=Y.get(Q)||null,dt(k,Y,pt,te,null);if(typeof pt.then=="function")return ct(Y,k,Q,Al(pt),te);if(pt.$$typeof===O)return ct(Y,k,Q,Ml(k,pt),te);Rl(k,pt)}return null}function qt(Y,k,Q,pt){for(var te=null,De=null,Zt=k,de=k=0,be=null;Zt!==null&&de<Q.length;de++){Zt.index>de?(be=Zt,Zt=null):be=Zt.sibling;var Ue=it(Y,Zt,Q[de],pt);if(Ue===null){Zt===null&&(Zt=be);break}e&&Zt&&Ue.alternate===null&&n(Y,Zt),k=f(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue,Zt=be}if(de===Q.length)return a(Y,Zt),Te&&ta(Y,de),te;if(Zt===null){for(;de<Q.length;de++)Zt=_t(Y,Q[de],pt),Zt!==null&&(k=f(Zt,k,de),De===null?te=Zt:De.sibling=Zt,De=Zt);return Te&&ta(Y,de),te}for(Zt=r(Zt);de<Q.length;de++)be=ct(Zt,Y,de,Q[de],pt),be!==null&&(e&&be.alternate!==null&&Zt.delete(be.key===null?de:be.key),k=f(be,k,de),De===null?te=be:De.sibling=be,De=be);return e&&Zt.forEach(function(ja){return n(Y,ja)}),Te&&ta(Y,de),te}function ae(Y,k,Q,pt){if(Q==null)throw Error(s(151));for(var te=null,De=null,Zt=k,de=k=0,be=null,Ue=Q.next();Zt!==null&&!Ue.done;de++,Ue=Q.next()){Zt.index>de?(be=Zt,Zt=null):be=Zt.sibling;var ja=it(Y,Zt,Ue.value,pt);if(ja===null){Zt===null&&(Zt=be);break}e&&Zt&&ja.alternate===null&&n(Y,Zt),k=f(ja,k,de),De===null?te=ja:De.sibling=ja,De=ja,Zt=be}if(Ue.done)return a(Y,Zt),Te&&ta(Y,de),te;if(Zt===null){for(;!Ue.done;de++,Ue=Q.next())Ue=_t(Y,Ue.value,pt),Ue!==null&&(k=f(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue);return Te&&ta(Y,de),te}for(Zt=r(Zt);!Ue.done;de++,Ue=Q.next())Ue=ct(Zt,Y,de,Ue.value,pt),Ue!==null&&(e&&Ue.alternate!==null&&Zt.delete(Ue.key===null?de:Ue.key),k=f(Ue,k,de),De===null?te=Ue:De.sibling=Ue,De=Ue);return e&&Zt.forEach(function(qS){return n(Y,qS)}),Te&&ta(Y,de),te}function We(Y,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var te=Q.key;k!==null;){if(k.key===te){if(te=Q.type,te===b){if(k.tag===7){a(Y,k.sibling),pt=u(k,Q.props.children),pt.return=Y,Y=pt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&gs(te)===k.type){a(Y,k.sibling),pt=u(k,Q.props),ho(pt,Q),pt.return=Y,Y=pt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}Q.type===b?(pt=fs(Q.props.children,Y.mode,pt,Q.key),pt.return=Y,Y=pt):(pt=xl(Q.type,Q.key,Q.props,null,Y.mode,pt),ho(pt,Q),pt.return=Y,Y=pt)}return g(Y);case R:t:{for(te=Q.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(Y,k.sibling),pt=u(k,Q.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}pt=Du(Q,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case j:return Q=gs(Q),We(Y,k,Q,pt)}if(ut(Q))return qt(Y,k,Q,pt);if(at(Q)){if(te=at(Q),typeof te!="function")throw Error(s(150));return Q=te.call(Q),ae(Y,k,Q,pt)}if(typeof Q.then=="function")return We(Y,k,Al(Q),pt);if(Q.$$typeof===O)return We(Y,k,Ml(Y,Q),pt);Rl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(Y,k.sibling),pt=u(k,Q),pt.return=Y,Y=pt):(a(Y,k),pt=wu(Q,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,k)}return function(Y,k,Q,pt){try{fo=0;var te=We(Y,k,Q,pt);return er=null,te}catch(Zt){if(Zt===tr||Zt===bl)throw Zt;var De=$n(29,Zt,null,Y.mode);return De.lanes=pt,De.return=Y,De}}}var vs=im(!0),am=im(!1),Ua=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=vl(e),Gp(e,null,a),n}return _l(e,r,n,a),vl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Yr(e,a)}}function Xu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wu=!1;function mo(){if(Wu){var e=$s;if(e!==null)throw e}}function go(e,n,a,r){Wu=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,J=I.next;I.next=null,g===null?f=J:g.next=J,g=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==g&&(A===null?dt.firstBaseUpdate=J:A.next=J,dt.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;g=0,dt=J=I=null,A=f;do{var it=A.lane&-536870913,ct=it!==A.lane;if(ct?(Ee&it)===it:(r&it)===it){it!==0&&it===Js&&(Wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var qt=e,ae=A;it=n;var We=a;switch(ae.tag){case 1:if(qt=ae.payload,typeof qt=="function"){_t=qt.call(We,_t,it);break t}_t=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ae.payload,it=typeof qt=="function"?qt.call(We,_t,it):qt,it==null)break t;_t=_({},_t,it);break t;case 2:Ua=!0}}it=A.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(J=dt=ct,I=_t):dt=dt.next=ct,g|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ba|=g,e.lanes=g,e.memoizedState=_t}}function sm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sm(a[e],n)}var nr=U(null),Cl=U(0);function om(e,n){e=fa,gt(Cl,e),gt(nr,n),fa=e|n.baseLanes}function qu(){gt(Cl,fa),gt(nr,nr.current)}function Yu(){fa=Cl.current,tt(nr),tt(Cl)}var ti=U(null),_i=null;function Oa(e){var n=e.alternate;gt(sn,sn.current&1),gt(ti,e),_i===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(_i=e)}function ju(e){gt(sn,sn.current),gt(ti,e),_i===null&&(_i=e)}function lm(e){e.tag===22?(gt(sn,sn.current),gt(ti,e),_i===null&&(_i=e)):Pa()}function Pa(){gt(sn,sn.current),gt(ti,ti.current)}function ei(e){tt(ti),_i===e&&(_i=null),tt(sn)}var sn=U(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eh(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,fe=null,ke=null,cn=null,Dl=!1,ir=!1,xs=!1,Ul=0,_o=0,ar=null,Fx=0;function en(){throw Error(s(321))}function Zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Ku(e,n,a,r,u,f){return ia=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Wm:hf,xs=!1,f=a(r,u),xs=!1,ir&&(f=um(n,a,r,u)),cm(e),f}function cm(e){F.H=So;var n=ke!==null&&ke.next!==null;if(ia=0,cn=ke=fe=null,Dl=!1,_o=0,ar=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&yl(e)&&(un=!0))}function um(e,n,a,r){fe=e;var u=0;do{if(ir&&(ar=null),_o=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,cn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=qm,f=n(a,r)}while(ir);return f}function zx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(fe.flags|=1024),n}function Qu(){var e=Ul!==0;return Ul=0,e}function Ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $u(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}ia=0,cn=ke=fe=null,ir=!1,_o=Ul=0,ar=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,ke=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?fe.memoizedState=cn=e:cn=cn.next=e}return cn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,ar===null&&(ar=[]),e=tm(ar,e,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Wm:hf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===O)return Cn(e)}throw Error(s(438,String(e)))}function tf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=rn();return ef(n,ke,e)}function ef(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=g=null,I=null,J=n,dt=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Ee&_t)===_t:(ia&_t)===_t){var it=J.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Js&&(dt=!0);else if((ia&it)===it){J=J.next,it===Js&&(dt=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=_t,g=f):I=I.next=_t,fe.lanes|=it,Ba|=it;_t=J.action,xs&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else it={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=it,g=f):I=I.next=it,fe.lanes|=_t,Ba|=_t;J=J.next}while(J!==null&&J!==n);if(I===null?g=f:I.next=A,!Jn(f,e.memoizedState)&&(un=!0,dt&&(a=$s,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function nf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function fm(e,n,a){var r=fe,u=rn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Jn((ke||u).memoizedState,a);if(g&&(u.memoizedState=a,un=!0),u=u.queue,rf(pm.bind(null,r,u,e),[e]),u.getSnapshot!==n||g||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,sr(9,{destroy:void 0},dm.bind(null,r,u,a,n),null),Ye===null)throw Error(s(349));f||(ia&127)!==0||hm(r,n,a)}return a}function hm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Ll(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function dm(e,n,a,r){n.value=a,n.getSnapshot=r,mm(n)&&gm(e)}function pm(e,n,a){return a(function(){mm(n)&&gm(e)})}function mm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function gm(e){var n=us(e,2);n!==null&&Yn(n,e,2)}function af(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),xs){Vt(!0);try{a()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function _m(e,n,a,r){return e.baseState=a,ef(e,ke,typeof r=="function"?r:aa)}function Bx(e,n,a,r,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,vm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=F.T,g={};F.T=g;try{var A=a(u,r),I=F.S;I!==null&&I(g,A),xm(e,n,A)}catch(J){sf(e,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),F.T=f}}else try{f=a(u,r),xm(e,n,f)}catch(J){sf(e,n,J)}}function xm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Sm(e,n,r)},function(r){return sf(e,n,r)}):Sm(e,n,a)}function Sm(e,n,a){n.status="fulfilled",n.value=a,ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,vm(e,a)))}function sf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==r)}e.action=null}function ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mm(e,n){return n}function Em(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var r=fe;if(Te){if(Ke){e:{for(var u=Ke,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=vi(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=r,a=Vm.bind(null,fe,r),r.dispatch=a,r=af(!1),f=ff.bind(null,fe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Bx.bind(null,fe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function bm(e){var n=rn();return Tm(n,ke,e)}function Tm(e,n,a){if(n=ef(e,n,Mm)[0],e=Ol(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=vo(n)}catch(g){throw g===tr?bl:g}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,sr(9,{destroy:void 0},Ix.bind(null,u,a),null)),[r,f,e]}function Ix(e,n){e.action=n}function Am(e){var n=rn(),a=ke;if(a!==null)return Tm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function sr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Ll(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Rm(){return rn().memoizedState}function Pl(e,n,a,r){var u=Bn();fe.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Fl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&Zu(r,ke.memoizedState.deps)?u.memoizedState=sr(n,f,a,r):(fe.flags|=e,u.memoizedState=sr(1|n,f,a,r))}function Cm(e,n){Pl(8390656,8,e,n)}function rf(e,n){Fl(2048,8,e,n)}function Hx(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Ll(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function wm(e){var n=rn().memoizedState;return Hx({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Dm(e,n){return Fl(4,2,e,n)}function Um(e,n){return Fl(4,4,e,n)}function Lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nm(e,n,a){a=a!=null?a.concat([e]):null,Fl(4,4,Lm.bind(null,n,e),a)}function of(){}function Om(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Zu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Pm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Zu(n,r[1]))return r[0];if(r=e(),xs){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[r,n],r}function lf(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Fg(),fe.lanes|=e,Ba|=e,a)}function Fm(e,n,a,r){return Jn(a,n)?a:nr.current!==null?(e=lf(e,a,r),Jn(e,n)||(un=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Ee&261930)===0?(un=!0,e.memoizedState=a):(e=Fg(),fe.lanes|=e,Ba|=e,n)}function zm(e,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var g=F.T,A={};F.T=A,ff(e,!1,n,a);try{var I=u(),J=F.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=Px(I,r);xo(e,n,dt,ai(e))}else xo(e,n,r,ai(e))}catch(_t){xo(e,n,{then:function(){},status:"rejected",reason:_t},ai())}finally{G.p=f,g!==null&&A.types!==null&&(g.types=A.types),F.T=g}}function Gx(){}function cf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Bm(e).queue;zm(e,u,n,et,a===null?Gx:function(){return Im(e),a(r)})}function Bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=Bm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ai())}function uf(){return Cn(Fo)}function Hm(){return rn().memoizedState}function Gm(){return rn().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=La(a);var r=Na(n,e,a);r!==null&&(Yn(r,n,a),po(r,n,a)),n={cache:Bu()},e.payload=n;return}n=n.return}}function kx(e,n,a){var r=ai();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?km(n,a):(a=Ru(e,n,a,r),a!==null&&(Yn(a,e,r),Xm(a,n,r)))}function Vm(e,n,a){var r=ai();xo(e,n,a,r)}function xo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))km(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,g))return _l(e,n,u,0),Ye===null&&gl(),!1}catch{}if(a=Ru(e,n,u,r),a!==null)return Yn(a,e,r),Xm(a,n,r),!0}return!1}function ff(e,n,a,r){if(r={lane:2,revertLane:kf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Ru(e,a,r,2),n!==null&&Yn(n,e,2)}function zl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function km(e,n){ir=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Xm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Yr(e,a)}}var So={readContext:Cn,use:Nl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};So.useEffectEvent=en;var Wm={readContext:Cn,use:Nl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(xs){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(xs){Vt(!0);try{a(n)}finally{Vt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=kx.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=Vm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:of,useDeferredValue:function(e,n){var a=Bn();return lf(a,e,n)},useTransition:function(){var e=af(!1);return e=zm.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=fe,u=Bn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Ee&127)!==0||hm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Cm(pm.bind(null,r,f,e),[e]),r.flags|=2048,sr(9,{destroy:void 0},dm.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(Te){var a=Ii,r=Bi;a=(r&~(1<<32-Bt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:uf,useFormState:Em,useActionState:Em,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:tf,useCacheRefresh:function(){return Bn().memoizedState=Vx.bind(null,fe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Cn,use:Nl,useCallback:Om,useContext:Cn,useEffect:rf,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Ol,useRef:Rm,useState:function(){return Ol(aa)},useDebugValue:of,useDeferredValue:function(e,n){var a=rn();return Fm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ol(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:uf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=rn();return _m(a,ke,e,n)},useMemoCache:tf,useCacheRefresh:Gm};hf.useEffectEvent=wm;var qm={readContext:Cn,use:Nl,useCallback:Om,useContext:Cn,useEffect:rf,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:nf,useRef:Rm,useState:function(){return nf(aa)},useDebugValue:of,useDeferredValue:function(e,n){var a=rn();return ke===null?lf(a,e,n):Fm(a,ke.memoizedState,e,n)},useTransition:function(){var e=nf(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(e,n){var a=rn();return ke!==null?_m(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Gm};qm.useEffectEvent=wm;function df(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ai(),u=La(r);u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,r),n!==null&&(Yn(n,e,r),po(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ai(),u=La(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,r),n!==null&&(Yn(n,e,r),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),r=La(a);r.tag=2,n!=null&&(r.callback=n),n=Na(e,r,a),n!==null&&(Yn(n,e,a),po(n,e,a))}};function Ym(e,n,a,r,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!so(a,r)||!so(u,f):!0}function jm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&pf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Zm(e){ml(e)}function Km(e){console.error(e)}function Qm(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Jm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function $m(e){return e=La(e),e.tag=3,e}function tg(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Jm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Jm(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Xx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Hf(e,r,u)),!1;case 22:return a.flags|=65536,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Hf(e,r,u)),!1}throw Error(s(435,a.tag))}return Hf(e,r,u),Kl(),!1}if(Te)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Nu&&(e=Error(s(422),{cause:r}),lo(di(e,a)))):(r!==Nu&&(n=Error(s(423),{cause:r}),lo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=di(r,a),u=mf(e.stateNode,r,u),Xu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=di(f,a),Co===null?Co=[f]:Co.push(f),nn!==4&&(nn=2),n===null)return!0;r=di(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mf(a.stateNode,r,e),Xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),tg(u,e,a,r),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(s(461)),un=!1;function wn(e,n,a,r){n.child=e===null?am(n,null,a,r):vs(n,e.child,a,r)}function eg(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return ps(n),r=Ku(e,n,a,g,f,u),A=Qu(),e!==null&&!un?(Ju(e,n,u),sa(e,n,u)):(Te&&A&&Uu(n),n.flags|=1,wn(e,n,r,u),n.child)}function ng(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ig(e,n,f,r,u)):(e=xl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!bf(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(g,r)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(f,r),e.ref=n.ref,e.return=n,n.child=e}function ig(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(so(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,bf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,sa(e,n,u)}return _f(e,n,a,r,u)}function ag(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return sg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?om(n,f):qu(),lm(n);else return r=n.lanes=536870912,sg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(El(n,f.cachePool),om(n,f),Pa(),n.memoizedState=null):(e!==null&&El(n,null),qu(),Pa());return wn(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function sg(e,n,a,r,u){var f=Hu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),qu(),lm(n),e!==null&&Qs(e,n,r,!0),n.childLanes=u,null}function Il(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function rg(e,n,a){return vs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function Wx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Il(n,r),n.lanes=536870912,yo(null,e);if(ju(n),(e=Ke)?(e=v_(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=kp(e),a.return=n,n.child=a,Rn=n,Ke=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Il(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=rg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=Ye,r!==null&&(g=Fs(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,us(e,g),Yn(r,e,g),gf;Kl(),n=rg(e,n,a)}else e=f.treeContext,Ke=vi(g.nextSibling),Rn=n,Te=!0,Ca=null,gi=!1,e!==null&&qp(n,e),n=Il(n,r),n.flags|=4096;return n}return e=$i(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function _f(e,n,a,r,u){return ps(n),a=Ku(e,n,a,r,void 0,u),r=Qu(),e!==null&&!un?(Ju(e,n,u),sa(e,n,u)):(Te&&r&&Uu(n),n.flags|=1,wn(e,n,a,u),n.child)}function og(e,n,a,r,u,f){return ps(n),n.updateQueue=null,a=um(n,r,a,u),cm(e),r=Qu(),e!==null&&!un?(Ju(e,n,f),sa(e,n,f)):(Te&&r&&Uu(n),n.flags|=1,wn(e,n,a,f),n.child)}function lg(e,n,a,r,u){if(ps(n),n.stateNode===null){var f=Ys,g=a.contextType;typeof g=="object"&&g!==null&&(f=Cn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Vu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Cn(g):Ys,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(df(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&pf.enqueueReplaceState(f,f.state,null),go(n,r,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=Ss(a,A);f.props=I;var J=f.context,dt=a.contextType;g=Ys,typeof dt=="object"&&dt!==null&&(g=Cn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==g)&&jm(n,f,r,g),Ua=!1;var it=n.memoizedState;f.state=it,go(n,r,f,u),mo(),J=n.memoizedState,A||it!==J||Ua?(typeof _t=="function"&&(df(n,a,_t,r),J=n.memoizedState),(I=Ua||Ym(n,a,I,r,it,J,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,ku(e,n),g=n.memoizedProps,dt=Ss(a,g),f.props=dt,_t=n.pendingProps,it=f.context,J=a.contextType,I=Ys,typeof J=="object"&&J!==null&&(I=Cn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||it!==I)&&jm(n,f,r,I),Ua=!1,it=n.memoizedState,f.state=it,go(n,r,f,u),mo();var ct=n.memoizedState;g!==_t||it!==ct||Ua||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof A=="function"&&(df(n,a,A,r),ct=n.memoizedState),(dt=Ua||Ym(n,a,dt,r,it,ct,I)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Hl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=sa(e,n,u),e}function cg(e,n,a,r){return hs(),n.flags|=256,wn(e,n,a,r),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:Jp()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function ug(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Oa(n):Pa(),(e=Ke)?(e=v_(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=kp(e),a.return=n,n.child=a,Rn=n,Ke=null)):e=null,e===null)throw wa(n);return nh(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Pa(),u=n.mode,A=Gl({mode:"hidden",children:A},u),r=fs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=xf(a),r.childLanes=Sf(e,g,a),n.memoizedState=vf,yo(null,r)):(Oa(n),yf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=Mf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=r.fallback,u=n.mode,r=Gl({mode:"visible",children:r.children},u),A=fs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,vs(n,e.child,null,a),r=n.child,r.memoizedState=xf(a),r.childLanes=Sf(e,g,a),n.memoizedState=vf,n=yo(null,r));else if(Oa(n),nh(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var J=g.dgst;g=J,r=Error(s(419)),r.stack="",r.digest=g,lo({value:r,source:null,stack:null}),n=Mf(e,n,a)}else if(un||Qs(e,n,a,!1),g=(a&e.childLanes)!==0,un||g){if(g=Ye,g!==null&&(r=Fs(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,us(e,r),Yn(g,e,r),gf;eh(A)||Kl(),n=Mf(e,n,a)}else eh(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ke=vi(A.nextSibling),Rn=n,Te=!0,Ca=null,gi=!1,e!==null&&qp(n,e),n=yf(n,r.children),n.flags|=4096);return n}return u?(Pa(),A=r.fallback,u=n.mode,I=e.child,J=I.sibling,r=$i(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?A=$i(J,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,yo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=xf(a):(u=A.cachePool,u!==null?(I=ln._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Jp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=Sf(e,g,a),n.memoizedState=vf,yo(e.child,r)):(Oa(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function yf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Mf(e,n,a){return vs(n,e.child,null,a),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fu(e.return,n,a)}function Ef(e,n,a,r,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function hg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=sn.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,gt(sn,g),wn(e,n,r,a),r=Te?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,a,n);else if(e.tag===19)fg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ef(n,!0,a,null,f,r);break;case"together":Ef(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function qx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Da(n,ln,e.memoizedState.cache),hs();break;case 27:case 5:Gt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ug(e,n,a):(Oa(n),e=sa(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Qs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return hg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,ag(e,n,a,n.pendingProps);case 24:Da(n,ln,e.memoizedState.cache)}return sa(e,n,a)}function dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return un=!1,qx(e,n,a);un=(e.flags&131072)!==0}else un=!1,Te&&(n.flags&1048576)!==0&&Wp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Cu(e)?(r=Ss(e,r),n.tag=1,n=lg(null,n,e,r,a)):(n.tag=0,n=_f(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=eg(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=ng(null,n,e,r,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return _f(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),lg(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,ku(e,n),go(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Da(n,ln,r),r!==f.cache&&zu(n,[ln],a,!0),mo(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cg(e,n,r,a);break t}else if(r!==u){u=di(Error(s(424)),n),lo(u),n=cg(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=vi(e.firstChild),Rn=n,Te=!0,Ca=null,gi=!0,a=am(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),r===u){n=sa(e,n,a);break t}wn(e,n,r,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=b_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,r=ic($.current).createElement(a),r[on]=n,r[yn]=e,Dn(r,a,e),C(r),n.stateNode=r):n.memoizedState=b_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Te&&(r=n.stateNode=y_(n.type,n.pendingProps,$.current),Rn=n,gi=!0,u=Ke,ka(n.type)?(ih=u,Ke=vi(r.firstChild)):Ke=u),wn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=r=Ke)&&(r=MS(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,Rn=n,Ke=vi(r.firstChild),gi=!1,u=!0):u=!1),u||wa(n)),Gt(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Jf(u,f)?r=null:g!==null&&Jf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(e,n,zx,null,null,a),Fo._currentValue=u),Hl(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Ke)&&(a=ES(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Rn=n,Ke=null,e=!0):e=!1),e||wa(n)),null;case 13:return ug(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vs(n,null,r,a):wn(e,n,r,a),n.child;case 11:return eg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ps(n),u=Cn(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return ng(e,n,n.type,n.pendingProps,a);case 15:return ig(e,n,n.type,n.pendingProps,a);case 19:return hg(e,n,a);case 31:return Wx(e,n,a);case 22:return ag(e,n,a,n.pendingProps);case 24:return ps(n),r=Cn(ln),e===null?(u=Hu(),u===null&&(u=Ye,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Vu(n),Da(n,ln,u)):((e.lanes&a)!==0&&(ku(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,ln,r)):(r=f.cache,Da(n,ln,r),r!==u.cache&&zu(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Tf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Hg())e.flags|=8192;else throw _s=Tl,Gu}else e.flags&=-16777217}function pg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!w_(n))if(Hg())e.flags|=8192;else throw _s=Tl,Gu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,cr|=n)}function Mo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Yx(e,n,a){var r=n.pendingProps;switch(Lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),na(ln),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Qe(n),pg(n,f)):(Qe(n),Tf(n,u,null,r,a))):f?f!==e.memoizedState?(ra(n),Qe(n),pg(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ra(n),Qe(n),Tf(n,u,e,r,a)),null;case 27:if(me(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=Ct.current,Ks(n)?Yp(n):(e=y_(u,r,a),n.stateNode=e,ra(n))}return Qe(n),null;case 5:if(me(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=Ct.current,Ks(n))Yp(n);else{var g=ic($.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[on]=n,f[yn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ra(n)}}return Qe(n),Tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=$.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||wa(n,!0)}else e=ic(e).createTextNode(r),e[on]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ks(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Qe(n),null);case 4:return Xt(),e===null&&Yf(n.stateNode.containerInfo),Qe(n),null;case 10:return na(n.type),Qe(n),null;case 19:if(tt(sn),r=n.memoizedState,r===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Mo(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,Mo(r,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Vp(a,e),a=a.sibling;return gt(sn,sn.current&1|2),Te&&ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Yl&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Te)return Qe(n),null}else 2*M()-r.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=sn.current,gt(sn,u?a&1|2:a&1),Te&&ta(n,r.treeForkCount),e):(Qe(n),null);case 22:case 23:return ei(n),Yu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(ln),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function jx(e,n){switch(Lu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(ln),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(sn),null;case 4:return Xt(),null;case 10:return na(n.type),null;case 22:case 23:return ei(n),Yu(),e!==null&&tt(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(ln),null;case 25:return null;default:return null}}function mg(e,n){switch(Lu(n),n.tag){case 3:na(ln),Xt();break;case 26:case 27:case 5:me(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:tt(sn);break;case 10:na(n.type);break;case 22:case 23:ei(n),Yu(),e!==null&&tt(ms);break;case 24:na(ln)}}function Eo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Fa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var I=a,J=A;try{J()}catch(dt){Ge(u,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){Ge(n,n.return,dt)}}function gg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rm(n,a)}catch(r){Ge(e,e.return,r)}}}function _g(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function Hi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function vg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Af(e,n,a){try{var r=e.stateNode;gS(r,e.type,a,n),r[yn]=n}catch(u){Ge(e,e.return,u)}}function xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Cf(e,n,a),e=e.sibling;e!==null;)Cf(e,n,a),e=e.sibling}function kl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function Sg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[on]=e,n[yn]=a}catch(f){Ge(e,e.return,f)}}var oa=!1,fn=!1,wf=!1,yg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Zx(e,n){if(e=e.containerInfo,Kf=uc,e=Np(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,I=-1,J=0,dt=0,_t=e,it=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(A=g+u),_t!==f||r!==0&&_t.nodeType!==3||(I=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)it=_t,_t=ct;for(;;){if(_t===e)break e;if(it===a&&++J===u&&(A=g),it===f&&++dt===r&&(I=g),(ct=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ct}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:e,selectionRange:a},uc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qt=Ss(a.type,u);e=r.getSnapshotBeforeUpdate(qt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ge(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)th(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":th(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Mg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),r&4&&Eo(5,a);break;case 1:if(ca(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ge(a,a.return,g)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ge(a,a.return,g)}}r&64&&gg(a),r&512&&bo(a,a.return);break;case 3:if(ca(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rm(e,n)}catch(g){Ge(a,a.return,g)}}break;case 27:n===null&&r&4&&Sg(a);case 26:case 5:ca(e,a),n===null&&r&4&&vg(a),r&512&&bo(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),r&4&&Tg(e,a);break;case 13:ca(e,a),r&4&&Ag(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=aS.bind(null,a),bS(e,a))));break;case 22:if(r=a.memoizedState!==null||oa,!r){n=n!==null&&n.memoizedState!==null||fn,u=oa;var f=fn;oa=r,(fn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,fn=f}break;case 30:break;default:ca(e,a)}}function Eg(e){var n=e.alternate;n!==null&&(e.alternate=null,Eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,kn=!1;function la(e,n,a){for(a=a.child;a!==null;)bg(e,n,a),a=a.sibling}function bg(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Hi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Hi(a,n);var r=$e,u=kn;ka(a.type)&&($e=a.stateNode,kn=!1),la(e,n,a),No(a.stateNode),$e=r,kn=u;break;case 5:fn||Hi(a,n);case 6:if(r=$e,u=kn,$e=null,la(e,n,a),$e=r,kn=u,$e!==null)if(kn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(kn?(e=$e,g_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):g_($e,a.stateNode));break;case 4:r=$e,u=kn,$e=a.stateNode.containerInfo,kn=!0,la(e,n,a),$e=r,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),fn||Fa(4,a,n),la(e,n,a);break;case 1:fn||(Hi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&_g(a,n,r)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,la(e,n,a),fn=r;break;default:la(e,n,a)}}function Tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Ge(n,n.return,a)}}}function Ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Ge(n,n.return,a)}}function Kx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new yg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new yg),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=Kx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=sS.bind(null,e,r);r.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){$e=A.stateNode,kn=!1;break t}break;case 5:$e=A.stateNode,kn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if($e===null)throw Error(s(160));bg(f,g,u),$e=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Rg(n,e),n=n.sibling}var Di=null;function Rg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),r&4&&(Fa(3,e,e.return),Eo(3,e),Fa(5,e,e.return));break;case 1:Xn(n,e),Wn(e),r&512&&(fn||a===null||Hi(a,a.return)),r&64&&oa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Di;if(Xn(n,e),Wn(e),r&512&&(fn||a===null||Hi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[on]=e,C(f),r=f;break t;case"link":var g=R_("link","href",u).get(r+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(g=R_("meta","content",u).get(r+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,C(f),r=f}e.stateNode=r}else C_(u,e.type,e.stateNode);else e.stateNode=A_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?C_(u,e.type,e.stateNode):A_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Af(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),r&512&&(fn||a===null||Hi(a,a.return)),a!==null&&r&4&&Af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),r&512&&(fn||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{dn(u,"")}catch(qt){Ge(e,e.return,qt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Af(e,u,a!==null?a.memoizedProps:u)),r&1024&&(wf=!0);break;case 6:if(Xn(n,e),Wn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(rc=null,u=Di,Di=ac(n.containerInfo),Xn(n,e),Di=u,Wn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}wf&&(wf=!1,Cg(e));break;case 4:r=Di,Di=ac(e.stateNode.containerInfo),Xn(n,e),Wn(e),Di=r;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=oa,dt=fn;if(oa=J||u,fn=dt||I,Xn(n,e),fn=dt,oa=J,Wn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||oa||fn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(qt){Ge(I,I.return,qt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(qt){Ge(I,I.return,qt)}}}else if(n.tag===18){if(a===null){I=n;try{var ct=I.stateNode;u?__(ct,!0):__(I.stateNode,!1)}catch(qt){Ge(I,I.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Xl(e,a))));break;case 19:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(xg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Rf(e);kl(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(dn(g,""),a.flags&=-33);var A=Rf(e);kl(e,A,g);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Rf(e);Cf(e,J,I);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),ys(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_g(n,n.return,a),ys(n);break;case 27:No(n.stateNode);case 26:case 5:Hi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Eo(4,f);break;case 1:if(ua(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ge(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)sm(I[u],A)}catch(J){Ge(r,r.return,J)}}a&&g&64&&gg(f),bo(f,f.return);break;case 27:Sg(f);case 26:case 5:ua(u,f,a),a&&r===null&&g&4&&vg(f),bo(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&g&4&&Tg(u,f);break;case 13:ua(u,f,a),a&&g&4&&Ag(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),bo(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Uf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ui(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wg(e,n,a,r),n=n.sibling}function wg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,r),u&2048&&Eo(9,n);break;case 1:Ui(e,n,a,r);break;case 3:Ui(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ui(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else Ui(e,n,a,r);break;case 31:Ui(e,n,a,r);break;case 13:Ui(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,r):To(e,n):f._visibility&2?Ui(e,n,a,r):(f._visibility|=2,rr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(g,n);break;case 24:Ui(e,n,a,r),u&2048&&Uf(n.alternate,n);break;default:Ui(e,n,a,r)}}function rr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,A=a,I=r,J=g.flags;switch(g.tag){case 0:case 11:case 15:rr(f,g,A,I,u),Eo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?rr(f,g,A,I,u):To(f,g):(dt._visibility|=2,rr(f,g,A,I,u)),u&&J&2048&&Df(g.alternate,g);break;case 24:rr(f,g,A,I,u),u&&J&2048&&Uf(g.alternate,g);break;default:rr(f,g,A,I,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:To(a,r),u&2048&&Df(r.alternate,r);break;case 24:To(a,r),u&2048&&Uf(r.alternate,r);break;default:To(a,r)}n=n.sibling}}var Ao=8192;function or(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)Dg(e,n,a),e=e.sibling}function Dg(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&Ao&&e.memoizedState!==null&&FS(a,Di,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var r=Di;Di=ac(e.stateNode.containerInfo),or(e,n,a),Di=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,or(e,n,a),Ao=r):or(e,n,a));break;default:or(e,n,a)}}function Ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Ng(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lg(e),e=e.sibling}function Lg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Ro(e);break;default:Ro(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Ng(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function Ng(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:co(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(Eg(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Qx={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(ln).controller.signal}},Jx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Se=null,Ee=0,He=0,ni=null,za=!1,lr=!1,Lf=!1,fa=0,nn=0,Ba=0,Ms=0,Nf=0,ii=0,cr=0,Co=null,qn=null,Of=!1,ql=0,Og=0,Yl=1/0,jl=null,Ia=null,pn=0,Ha=null,ur=null,ha=0,Pf=0,Ff=null,Pg=null,wo=0,zf=null;function ai(){return(Pe&2)!==0&&Ee!==0?Ee&-Ee:F.T!==null?kf():Zr()}function Fg(){if(ii===0)if((Ee&536870912)===0||Te){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Yn(e,n,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ga(e,Ee,ii,!1)),Ln(e,a),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(Ms|=a),nn===4&&Ga(e,Ee,ii,!1)),Gi(e))}function zg(e,n,a){if((Pe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=r?eS(e,n):If(e,n,!0),f=r;do{if(u===0){lr&&!r&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$x(a)){u=If(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=e;u=Co;var I=A.current.memoizedState.isDehydrated;if(I&&(fr(A,g).flags|=256),g=If(A,g,!1),g!==2){if(Lf&&!I){A.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){fr(e,0),Ga(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,ii,!za);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-M(),10<u)){if(Ga(r,n,ii,!za),vt(r,0,!0)!==0)break t;ha=n,r.timeoutHandle=p_(Bg.bind(null,r,a,qn,jl,Of,n,ii,Ms,cr,za,f,"Throttled",-0,0),u);break t}Bg(r,a,qn,jl,Of,n,ii,Ms,cr,za,f,null,-0,0)}}break}while(!0);Gi(e)}function Bg(e,n,a,r,u,f,g,A,I,J,dt,_t,it,ct){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},Dg(n,f,_t);var qt=(f&62914560)===f?ql-M():(f&4194048)===f?Og-M():0;if(qt=zS(_t,qt),qt!==null){ha=f,e.cancelPendingCommit=qt(qg.bind(null,e,n,f,a,r,u,g,A,I,dt,_t,null,it,ct)),Ga(e,f,g,!J);return}}qg(e,n,f,a,r,u,g,A,I)}function $x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,r){n&=~Nf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&rl(e,a,n)}function Zl(){return(Pe&6)===0?(Do(0),!1):!0}function Bf(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,ea=ds=null,$u(e),er=null,fo=0,e=Se;for(;e!==null;)mg(e.alternate,e),e=e.return;Se=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Bf(),Ye=e,Se=a=$i(e.current,null),Ee=n,He=0,ni=null,za=!1,lr=Dt(e,n),Lf=!1,cr=ii=Nf=Ms=Ba=nn=0,qn=Co=null,Of=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Bt(r),f=1<<u;n|=e[u],r&=~f}return fa=n,gl(),a}function Ig(e,n){fe=null,F.H=So,n===tr||n===bl?(n=em(),He=3):n===Gu?(n=em(),He=4):He=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&(nn=1,Bl(e,di(n,e.current)))}function Hg(){var e=ti.current;return e===null?!0:(Ee&4194048)===Ee?_i===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===_i:!1}function Gg(){var e=F.H;return F.H=So,e===null?So:e}function Vg(){var e=F.A;return F.A=Qx,e}function Kl(){nn=4,za||(Ee&4194048)!==Ee&&ti.current!==null||(lr=!0),(Ba&134217727)===0&&(Ms&134217727)===0||Ye===null||Ga(Ye,Ee,ii,!1)}function If(e,n,a){var r=Pe;Pe|=2;var u=Gg(),f=Vg();(Ye!==e||Ee!==n)&&(jl=null,fr(e,n)),n=!1;var g=nn;t:do try{if(He!==0&&Se!==null){var A=Se,I=ni;switch(He){case 8:Bf(),g=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var J=He;if(He=0,ni=null,hr(e,A,I,J),a&&lr){g=0;break t}break;default:J=He,He=0,ni=null,hr(e,A,I,J)}}tS(),g=nn;break}catch(dt){Ig(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ea=ds=null,Pe=r,F.H=u,F.A=f,Se===null&&(Ye=null,Ee=0,gl()),g}function tS(){for(;Se!==null;)kg(Se)}function eS(e,n){var a=Pe;Pe|=2;var r=Gg(),u=Vg();Ye!==e||Ee!==n?(jl=null,Yl=M()+500,fr(e,n)):lr=Dt(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=ni;e:switch(He){case 1:He=0,ni=null,hr(e,n,f,1);break;case 2:case 9:if($p(f)){He=0,ni=null,Xg(n);break}n=function(){He!==2&&He!==9||Ye!==e||(He=7),Gi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:$p(f)?(He=0,ni=null,Xg(n)):(He=0,ni=null,hr(e,n,f,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var A=Se;if(g?w_(g):A.stateNode.complete){He=0,ni=null;var I=A.sibling;if(I!==null)Se=I;else{var J=A.return;J!==null?(Se=J,Ql(J)):Se=null}break e}}He=0,ni=null,hr(e,n,f,5);break;case 6:He=0,ni=null,hr(e,n,f,6);break;case 8:Bf(),nn=6;break t;default:throw Error(s(462))}}nS();break}catch(dt){Ig(e,dt)}while(!0);return ea=ds=null,F.H=r,F.A=u,Pe=a,Se!==null?0:(Ye=null,Ee=0,gl(),nn)}function nS(){for(;Se!==null&&!bt();)kg(Se)}function kg(e){var n=dg(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?Ql(e):Se=n}function Xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=og(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=og(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:$u(n);default:mg(a,n),n=Se=Vp(n,fa),n=dg(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):Se=n}function hr(e,n,a,r){ea=ds=null,$u(n),er=null,fo=0;var u=n.return;try{if(Xx(e,u,n,a,Ee)){nn=1,Bl(e,di(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;nn=1,Bl(e,di(a,e.current)),Se=null;return}n.flags&32768?(Te||r===1?e=!0:lr||(Ee&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=ti.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wg(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Wg(n,za);return}e=n.return;var a=Yx(n.alternate,n,fa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);nn===0&&(nn=5)}function Wg(e,n){do{var a=jx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);nn=6,Se=null}function qg(e,n,a,r,u,f,g,A,I){e.cancelPendingCommit=null;do Jl();while(pn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Au,Ai(e,a,f,g,A,I),e===Ye&&(Se=Ye=null,Ee=0),ur=n,Ha=e,ha=a,Pf=f,Ff=u,Pg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rS(rt,function(){return Qg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,u=G.p,G.p=2,g=Pe,Pe|=4;try{Zx(e,n,a)}finally{Pe=g,G.p=u,F.T=r}}pn=1,Yg(),jg(),Zg()}}function Yg(){if(pn===1){pn=0;var e=Ha,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=G.p;G.p=2;var u=Pe;Pe|=4;try{Rg(n,e);var f=Qf,g=Np(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&Lp(A.ownerDocument.documentElement,A)){if(I!==null&&yu(A)){var J=I.start,dt=I.end;if(dt===void 0&&(dt=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(dt,A.value.length);else{var _t=A.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ct=it.getSelection(),qt=A.textContent.length,ae=Math.min(I.start,qt),We=I.end===void 0?ae:Math.min(I.end,qt);!ct.extend&&ae>We&&(g=We,We=ae,ae=g);var Y=Up(A,ae),k=Up(A,We);if(Y&&k&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var Q=_t.createRange();Q.setStart(Y.node,Y.offset),ct.removeAllRanges(),ae>We?(ct.addRange(Q),ct.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ct.addRange(Q))}}}}for(_t=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var pt=_t[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}uc=!!Kf,Qf=Kf=null}finally{Pe=u,G.p=r,F.T=a}}e.current=n,pn=2}}function jg(){if(pn===2){pn=0;var e=Ha,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=G.p;G.p=2;var u=Pe;Pe|=4;try{Mg(e,n.alternate,n)}finally{Pe=u,G.p=r,F.T=a}}pn=3}}function Zg(){if(pn===4||pn===3){pn=0,T();var e=Ha,n=ur,a=ha,r=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ur=Ha=null,Kg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),zs(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var A=r[g];f(A.value,{componentStack:A.stack})}}finally{F.T=n,G.p=u}}(ha&3)!==0&&Jl(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?wo++:(wo=0,zf=e):wo=0,Do(0)}}function Kg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function Jl(){return Yg(),jg(),Zg(),Qg()}function Qg(){if(pn!==5)return!1;var e=Ha,n=Pf;Pf=0;var a=zs(ha),r=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Ff,Ff=null;var f=Ha,g=ha;if(pn=0,ur=Ha=null,ha=0,(Pe&6)!==0)throw Error(s(331));var A=Pe;if(Pe|=4,Lg(f.current),wg(f,f.current,g,a),Pe=A,Do(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{G.p=u,F.T=r,Kg(e,n)}}function Jg(e,n,a){n=di(a,n),n=mf(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Ln(e,2),Gi(e))}function Ge(e,n,a){if(e.tag===3)Jg(e,e,a);else for(;n!==null;){if(n.tag===3){Jg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=di(a,e),a=$m(2),r=Na(n,a,2),r!==null&&(tg(a,r,n,e),Ln(r,2),Gi(r));break}}n=n.return}}function Hf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Jx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Lf=!0,u.add(a),e=iS.bind(null,e,n,a),n.then(e,e))}function iS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ee&a)===a&&(nn===4||nn===3&&(Ee&62914560)===Ee&&300>M()-ql?(Pe&2)===0&&fr(e,0):Nf|=a,cr===Ee&&(cr=0)),Gi(e)}function $g(e,n){n===0&&(n=Be()),e=us(e,n),e!==null&&(Ln(e,n),Gi(e))}function aS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$g(e,a)}function sS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),$g(e,a)}function rS(e,n){return $t(e,n)}var $l=null,dr=null,Gf=!1,tc=!1,Vf=!1,Va=0;function Gi(e){e!==dr&&e.next===null&&(dr===null?$l=dr=e:dr=dr.next=e),tc=!0,Gf||(Gf=!0,lS())}function Do(e,n){if(!Vf&&tc){Vf=!0;do for(var a=!1,r=$l;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,i_(r,f))}else f=Ee,f=vt(r,r===Ye?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Dt(r,f)||(a=!0,i_(r,f));r=r.next}while(a);Vf=!1}}function oS(){t_()}function t_(){tc=Gf=!1;var e=0;Va!==0&&vS()&&(e=Va);for(var n=M(),a=null,r=$l;r!==null;){var u=r.next,f=e_(r,n);f===0?(r.next=null,a===null?$l=u:a.next=u,u===null&&(dr=a)):(a=r,(e!==0||(f&3)!==0)&&(tc=!0)),r=u}pn!==0&&pn!==5||Do(e),Va!==0&&(Va=0)}function e_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Bt(f),A=1<<g,I=u[g];I===-1?((A&a)===0||(A&r)!==0)&&(u[g]=oe(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ye,a=Ee,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ne(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ne(r),zs(a)){case 2:case 8:a=mt;break;case 32:a=rt;break;case 268435456:a=Tt;break;default:a=rt}return r=n_.bind(null,e),a=$t(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ne(r),e.callbackPriority=2,e.callbackNode=null,2}function n_(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var r=Ee;return r=vt(e,e===Ye?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(zg(e,r,n),e_(e,M()),e.callbackNode!=null&&e.callbackNode===a?n_.bind(null,e):null)}function i_(e,n){if(Jl())return null;zg(e,n,!0)}function lS(){SS(function(){(Pe&6)!==0?$t(lt,oS):t_()})}function kf(){if(Va===0){var e=Js;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Va=e}return Va}function a_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function s_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=a_((u[yn]||null).action),g=r.submitter;g&&(n=(n=g[yn]||null)?a_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new hl("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var I=g?s_(u,g):new FormData(u);cf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=g?s_(u,g):new FormData(u),cf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],uS=Wf.toLowerCase(),fS=Wf[0].toUpperCase()+Wf.slice(1);wi(uS,"on"+fS)}wi(Fp,"onAnimationEnd"),wi(zp,"onAnimationIteration"),wi(Bp,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Rx,"onTransitionRun"),wi(Cx,"onTransitionStart"),wi(wx,"onTransitionCancel"),wi(Ip,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function r_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(A=r[g],I=A.instance,J=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=I}}}}function ye(e,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var r=e+"__bubble";a.has(r)||(o_(n,e,2,!1),a.add(r))}function qf(e,n,a){var r=0;n&&(r|=4),o_(a,e,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[ec]){e[ec]=!0,q.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||qf(a,!1,e),qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,qf("selectionchange",!1,n))}}function o_(e,n,a,r){switch(F_(n)){case 2:var u=HS;break;case 8:u=GS;break;default:u=lh}a=u.bind(null,n,a,e),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=Ea(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue t}A=A.parentNode}}r=r.return}hp(function(){var J=f,dt=uu(a),_t=[];t:{var it=Hp.get(e);if(it!==void 0){var ct=hl,qt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ct=sx;break;case"focusin":qt="focus",ct=gu;break;case"focusout":qt="blur",ct=gu;break;case"beforeblur":case"afterblur":ct=gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=lx;break;case Fp:case zp:case Bp:ct=Kv;break;case Ip:ct=ux;break;case"scroll":case"scrollend":ct=Wv;break;case"wheel":ct=hx;break;case"copy":case"cut":case"paste":ct=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=_p;break;case"toggle":case"beforetoggle":ct=px}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),Y=ae?it!==null?it+"Capture":null:it;ae=[];for(var k=J,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Y===null||(pt=Jr(k,Y),pt!=null&&ae.push(Lo(k,pt,Q))),We)break;k=k.return}0<ae.length&&(it=new ct(it,qt,null,a,dt),_t.push({event:it,listeners:ae}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&a!==cu&&(qt=a.relatedTarget||a.fromElement)&&(Ea(qt)||qt[Ri]))break t;if((ct||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(qt=a.relatedTarget||a.toElement,ct=J,qt=qt?Ea(qt):null,qt!==null&&(We=c(qt),ae=qt.tag,qt!==We||ae!==5&&ae!==27&&ae!==6)&&(qt=null)):(ct=null,qt=J),ct!==qt)){if(ae=mp,pt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=_p,pt="onPointerLeave",Y="onPointerEnter",k="pointer"),We=ct==null?it:rs(ct),Q=qt==null?it:rs(qt),it=new ae(pt,k+"leave",ct,a,dt),it.target=We,it.relatedTarget=Q,pt=null,Ea(dt)===J&&(ae=new ae(Y,k+"enter",qt,a,dt),ae.target=Q,ae.relatedTarget=We,pt=ae),We=pt,ct&&qt)e:{for(ae=dS,Y=ct,k=qt,Q=0,pt=Y;pt;pt=ae(pt))Q++;pt=0;for(var te=k;te;te=ae(te))pt++;for(;0<Q-pt;)Y=ae(Y),Q--;for(;0<pt-Q;)k=ae(k),pt--;for(;Q--;){if(Y===k||k!==null&&Y===k.alternate){ae=Y;break e}Y=ae(Y),k=ae(k)}ae=null}else ae=null;ct!==null&&l_(_t,it,ct,ae,!1),qt!==null&&We!==null&&l_(_t,We,qt,ae,!0)}}t:{if(it=J?rs(J):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var De=Tp;else if(Ep(it))if(Ap)De=bx;else{De=Mx;var Zt=yx}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Ci(J.elementType)&&(De=Tp):De=Ex;if(De&&(De=De(e,J))){bp(_t,De,a,dt);break t}Zt&&Zt(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&En(it,"number",it.value)}switch(Zt=J?rs(J):window,e){case"focusin":(Ep(Zt)||Zt.contentEditable==="true")&&(Xs=Zt,Mu=J,ro=null);break;case"focusout":ro=Mu=Xs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Op(_t,a,dt);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Op(_t,a,dt)}var de;if(vu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else ks?yp(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(vp&&a.locale!=="ko"&&(ks||be!=="onCompositionStart"?be==="onCompositionEnd"&&ks&&(de=dp()):(Aa=dt,du="value"in Aa?Aa.value:Aa.textContent,ks=!0)),Zt=nc(J,be),0<Zt.length&&(be=new gp(be,e,null,a,dt),_t.push({event:be,listeners:Zt}),de?be.data=de:(de=Mp(a),de!==null&&(be.data=de)))),(de=gx?_x(e,a):vx(e,a))&&(be=nc(J,"onBeforeInput"),0<be.length&&(Zt=new gp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:Zt,listeners:be}),Zt.data=de)),cS(_t,e,J,a,dt)}r_(_t,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&r.unshift(Lo(e,u,f)),u=Jr(e,n),u!=null&&r.push(Lo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function dS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function l_(e,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||J===null||(I=J,u?(J=Jr(a,f),J!=null&&g.unshift(Lo(a,J,I))):u||(J=Jr(a,f),J!=null&&g.push(Lo(a,J,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function c_(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(mS,"")}function u_(e,n){return n=c_(n),c_(e)===n}function Xe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||dn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&dn(e,""+r);break;case"className":ee(e,"class",r);break;case"tabIndex":ee(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,r);break;case"style":Hs(e,r,f);break;case"data":if(n!=="object"){ee(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ll(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ll(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Qi);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Yt(e,"popover",r);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Yt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kv.get(a)||a,Yt(e,a,r))}}function Zf(e,n,a,r,u,f){switch(a){case"style":Hs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?dn(e,r):(typeof r=="number"||typeof r=="bigint")&&dn(e,""+r);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Yt(e,a,r)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,g,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=f=g=u=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":g=dt;break;case"checked":I=dt;break;case"defaultChecked":J=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Xe(e,n,r,dt,a,null)}}Ki(e,f,A,I,J,g,u,!1);return;case"select":ye("invalid",e),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Xe(e,n,u,A,a,null)}n=f,a=g,e.multiple=!!r,n!=null?fi(e,!!r,n,!1):a!=null&&fi(e,!!r,a,!0);return;case"textarea":ye("invalid",e),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,g,A,a,null)}bn(e,r,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,n,I,r,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(r=0;r<Uo.length;r++)ye(Uo[r],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,J,r,a,null)}return;default:if(Ci(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Zf(e,n,dt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(e,n,A,r,a,null))}function gS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,A=null,I=null,J=null,dt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=_t;default:r.hasOwnProperty(ct)||Xe(e,n,ct,null,r,_t)}}for(var it in r){var ct=r[it];if(_t=a[it],r.hasOwnProperty(it)&&(ct!=null||_t!=null))switch(it){case"type":f=ct;break;case"name":u=ct;break;case"checked":J=ct;break;case"defaultChecked":dt=ct;break;case"value":g=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==_t&&Xe(e,n,it,ct,r,_t)}}Mn(e,g,A,I,J,dt,f,u);return;case"select":ct=g=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ct=I;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==I&&Xe(e,n,u,f,r,I)}n=A,a=g,r=ct,it!=null?fi(e,!!a,it,!1):!!r!=!!a&&(n!=null?fi(e,!!a,n,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,g,u,r,f)}Ie(e,it,ct);return;case"option":for(var qt in a)it=a[qt],a.hasOwnProperty(qt)&&it!=null&&!r.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:Xe(e,n,qt,null,r,it));for(I in r)it=r[I],ct=a[I],r.hasOwnProperty(I)&&it!==ct&&(it!=null||ct!=null)&&(I==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Xe(e,n,I,it,r,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)it=a[ae],a.hasOwnProperty(ae)&&it!=null&&!r.hasOwnProperty(ae)&&Xe(e,n,ae,null,r,it);for(J in r)if(it=r[J],ct=a[J],r.hasOwnProperty(J)&&it!==ct&&(it!=null||ct!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Xe(e,n,J,it,r,ct)}return;default:if(Ci(n)){for(var We in a)it=a[We],a.hasOwnProperty(We)&&it!==void 0&&!r.hasOwnProperty(We)&&Zf(e,n,We,void 0,r,it);for(dt in r)it=r[dt],ct=a[dt],!r.hasOwnProperty(dt)||it===ct||it===void 0&&ct===void 0||Zf(e,n,dt,it,r,ct);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!r.hasOwnProperty(Y)&&Xe(e,n,Y,null,r,it);for(_t in r)it=r[_t],ct=a[_t],!r.hasOwnProperty(_t)||it===ct||it==null&&ct==null||Xe(e,n,_t,it,r,ct)}function f_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,A=u.duration;if(f&&A&&f_(g)){for(g=0,A=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>A)break;var dt=I.transferSize,_t=I.initiatorType;dt&&f_(_t)&&(I=I.responseEnd,g+=dt*(I<A?1:(A-J)/(I-J)))}if(--r,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kf=null,Qf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function h_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function vS(){var e=window.event;return e&&e.type==="popstate"?e===$f?!1:($f=e,!0):($f=null,!1)}var p_=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(e){return m_.resolve(null).then(e).catch(yS)}:p_;function yS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function g_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),_r(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);_r(n)}function __(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function th(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":th(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function ES(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function v_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function eh(e){return e.data==="$?"||e.data==="$~"}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ih=null;function x_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function S_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function y_(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var xi=new Map,M_=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=G.d;G.d={f:TS,r:AS,D:RS,C:CS,L:wS,m:DS,X:LS,S:US,M:NS};function TS(){var e=da.f(),n=Zl();return e||n}function AS(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):da.r(e)}var pr=typeof document>"u"?null:document;function E_(e,n,a){var r=pr;if(r&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),M_.has(u)||(M_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",e),C(n),r.head.appendChild(n)))}}function RS(e){da.D(e),E_("dns-prefetch",e,null)}function CS(e,n){da.C(e,n),E_("preconnect",e,n)}function wS(e,n,a){da.L(e,n,a);var r=pr;if(r&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var f=u;switch(n){case"style":f=mr(e);break;case"script":f=gr(e)}xi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Oo(f))||n==="script"&&r.querySelector(Po(f))||(n=r.createElement("link"),Dn(n,"link",e),C(n),r.head.appendChild(n)))}}function DS(e,n){da.m(e,n);var a=pr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(r)+'"][href="'+le(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(e)}if(!xi.has(f)&&(e=_({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}r=a.createElement("link"),Dn(r,"link",e),C(r),a.head.appendChild(r)}}}function US(e,n,a){da.S(e,n,a);var r=pr;if(r&&e){var u=Ta(r).hoistableStyles,f=mr(e);n=n||"default";var g=u.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(Oo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&ah(e,a);var I=g=r.createElement("link");C(I),Dn(I,"link",e),I._p=new Promise(function(J,dt){I.onload=J,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,sc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(f,g)}}}function LS(e,n){da.X(e,n);var a=pr;if(a&&e){var r=Ta(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=_({src:e,async:!0},n),(n=xi.get(u))&&sh(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function NS(e,n){da.M(e,n);var a=pr;if(a&&e){var r=Ta(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&sh(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function b_(e,n,a,r){var u=(u=$.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var f=Ta(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(Oo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||OS(u,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+le(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function T_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),C(n),e.head.appendChild(n))}function gr(e){return'[src="'+le(e)+'"]'}function Po(e){return"script[async]"+e}function A_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(r)return n.instance=r,C(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),C(r),Dn(r,"style",u),sc(r,a.precedence,e),n.instance=r;case"stylesheet":u=mr(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;r=T_(a),(u=xi.get(u))&&ah(r,u),f=(e.ownerDocument||e).createElement("link"),C(f);var g=f;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Dn(f,"link",r),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=gr(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,C(u),u):(r=a,(u=xi.get(f))&&(r=_({},a),sh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Dn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,sc(r,a.precedence,e));return n.instance}function sc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function R_(e,n,a){if(rc===null){var r=new Map,u=rc=new Map;u.set(a,r)}else u=rc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function C_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function FS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(r.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,r=T_(r),(u=xi.get(u))&&ah(r,u),f=f.createElement("link"),C(f);var g=f;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Dn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var rh=0;function zS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&rh===0&&(rh=62500*_S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>rh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(BS,e),lc=null,oc.call(e))}function BS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var r=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=oc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:O,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function IS(e,n,a,r,u,f,g,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function D_(e,n,a,r,u,f,g,A,I,J,dt,_t){return e=new IS(e,n,a,g,I,J,dt,_t,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Vu(f),e}function U_(e){return e?(e=Ys,e):Ys}function L_(e,n,a,r,u,f){u=U_(u),r.context===null?r.context=u:r.pendingContext=u,r=La(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Na(e,r,n),a!==null&&(Yn(a,e,n),po(a,e,n))}function N_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function oh(e,n){N_(e,n),(e=e.alternate)&&N_(e,n)}function O_(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&Yn(n,e,67108864),oh(e,67108864)}}function P_(e){if(e.tag===13||e.tag===31){var n=ai();n=jr(n);var a=us(e,n);a!==null&&Yn(a,e,n),oh(e,n)}}var uc=!0;function HS(e,n,a,r){var u=F.T;F.T=null;var f=G.p;try{G.p=2,lh(e,n,a,r)}finally{G.p=f,F.T=u}}function GS(e,n,a,r){var u=F.T;F.T=null;var f=G.p;try{G.p=8,lh(e,n,a,r)}finally{G.p=f,F.T=u}}function lh(e,n,a,r){if(uc){var u=ch(r);if(u===null)jf(e,n,r,fc,a),z_(e,r);else if(kS(u,e,n,a,r))r.stopPropagation();else if(z_(e,r),n&4&&-1<VS.indexOf(e)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-Bt(g);A.entanglements[1]|=I,g&=~I}Gi(f),(Pe&6)===0&&(Yl=M()+500,Do(0))}}break;case 31:case 13:A=us(f,2),A!==null&&Yn(A,f,2),Zl(),oh(f,2)}if(f=ch(r),f===null&&jf(e,n,r,fc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else jf(e,n,r,null,a)}}function ch(e){return e=uu(e),uh(e)}var fc=null;function uh(e){if(fc=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V()){case lt:return 2;case mt:return 8;case rt:case Ot:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var fh=!1,Xa=null,Wa=null,qa=null,zo=new Map,Bo=new Map,Ya=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&O_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function kS(e,n,a,r,u){switch(n){case"focusin":return Xa=Io(Xa,e,n,a,r,u),!0;case"dragenter":return Wa=Io(Wa,e,n,a,r,u),!0;case"mouseover":return qa=Io(qa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Io(zo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Io(Bo.get(f)||null,e,n,a,r,u)),!0}return!1}function B_(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zi(e.priority,function(){P_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zi(e.priority,function(){P_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ch(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);cu=r,a.target.dispatchEvent(r),cu=null}else return n=ba(a),n!==null&&O_(n),e.blockedOn=a,!1;n.shift()}return!0}function I_(e,n,a){hc(e)&&a.delete(n)}function XS(){fh=!1,Xa!==null&&hc(Xa)&&(Xa=null),Wa!==null&&hc(Wa)&&(Wa=null),qa!==null&&hc(qa)&&(qa=null),zo.forEach(I_),Bo.forEach(I_)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,XS)))}var pc=null;function H_(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(uh(r||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function _r(e){function n(I){return dc(I,e)}Xa!==null&&dc(Xa,e),Wa!==null&&dc(Wa,e),qa!==null&&dc(qa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)B_(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[yn]||null;if(typeof f=="function")g||H_(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[yn]||null)A=g.formAction;else if(uh(u)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),H_(a)}}}function G_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(e){this._internalRoot=e}mc.prototype.render=hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ai();L_(a,r,e,n,null,null)},mc.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;L_(e.current,2,null,e,null,null),Zl(),n[Ri]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&B_(e)}};var V_=t.version;if(V_!=="19.2.3")throw Error(s(527,V_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var WS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{Mt=gc.inject(WS),At=gc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Zm,f=Km,g=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=D_(e,1,!1,null,null,a,r,null,u,f,g,G_),e[Ri]=n.current,Yf(e),new hh(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Zm,g=Km,A=Qm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=D_(e,1,!0,n,a??null,r,u,I,f,g,A,G_),n.context=U_(null),a=n.current,r=ai(),r=jr(r),u=La(r),u.callback=null,Na(a,u,r),a=r,n.current.lanes=a,Ln(n,a),Gi(n),e[Ri]=n.current,Yf(e),new mc(n)},Go.version="19.2.3",Go}var J_;function ey(){if(J_)return mh.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),mh.exports=ty(),mh.exports}var ny=ey();const Zd="182",Or={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,$_=1,ay=2,Xc=1,sy=2,Zo=3,as=0,Zn=1,xa=2,Fi=0,Pr=1,t0=2,e0=3,n0=4,ry=5,ws=100,oy=101,ly=102,cy=103,uy=104,fy=200,hy=201,dy=202,py=203,$h=204,td=205,my=206,gy=207,_y=208,vy=209,xy=210,Sy=211,yy=212,My=213,Ey=214,ed=0,nd=1,id=2,Br=3,ad=4,sd=5,rd=6,od=7,ov=0,by=1,Ty=2,qi=0,lv=1,cv=2,uv=3,fv=4,hv=5,dv=6,pv=7,mv=300,Ns=301,Ir=302,ld=303,cd=304,iu=306,ud=1e3,Sa=1001,fd=1002,gn=1003,Ay=1004,_c=1005,zn=1006,xh=1007,Us=1008,li=1009,gv=1010,_v=1011,Jo=1012,Kd=1013,ji=1014,Xi=1015,Ei=1016,Qd=1017,Jd=1018,$o=1020,vv=35902,xv=35899,Sv=1021,yv=1022,Pi=1023,Ma=1026,Ls=1027,Mv=1028,$d=1029,Hr=1030,tp=1031,ep=1033,Wc=33776,qc=33777,Yc=33778,jc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37488,Sd=37489,yd=37490,Md=37491,Ed=37808,bd=37809,Td=37810,Ad=37811,Rd=37812,Cd=37813,wd=37814,Dd=37815,Ud=37816,Ld=37817,Nd=37818,Od=37819,Pd=37820,Fd=37821,zd=36492,Bd=36494,Id=36495,Hd=36283,Gd=36284,Vd=36285,kd=36286,Ry=3200,Ev=0,Cy=1,ns="",yi="srgb",Gr="srgb-linear",Qc="linear",Ve="srgb",vr=7680,i0=519,wy=512,Dy=513,Uy=514,np=515,Ly=516,Ny=517,ip=518,Oy=519,a0=35044,s0="300 es",Wi=2e3,Jc=2001;function bv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function $c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Py(){const o=$c("canvas");return o.style.display="block",o}const r0={};function o0(...o){const t="THREE."+o.shift();console.log(t,...o)}function se(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ce(...o){const t="THREE."+o.shift();console.error(t,...o)}function tl(...o){const t=o.join(" ");t in r0||(r0[t]=!0,se(...o))}function Fy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l0=1234567;const Fr=Math.PI/180,el=180/Math.PI;function kr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function xe(o,t,i){return Math.max(t,Math.min(i,o))}function ap(o,t){return(o%t+t)%t}function zy(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function By(o,t,i){return o!==t?(i-o)/(t-o):0}function Qo(o,t,i){return(1-i)*o+i*t}function Iy(o,t,i,s){return Qo(o,t,1-Math.exp(-i*s))}function Hy(o,t=1){return t-Math.abs(ap(o,t*2)-t)}function Gy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Vy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function ky(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Xy(o,t){return o+Math.random()*(t-o)}function Wy(o){return o*(.5-Math.random())}function qy(o){o!==void 0&&(l0=o);let t=l0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yy(o){return o*Fr}function jy(o){return o*el}function Zy(o){return(o&o-1)===0&&o!==0}function Ky(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Qy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Jy(o,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),x=h((t+s)/2),_=c((t-s)/2),S=h((t-s)/2),E=c((s-t)/2),R=h((s-t)/2);switch(l){case"XYX":o.set(d*x,m*_,m*S,d*p);break;case"YZY":o.set(m*S,d*x,m*_,d*p);break;case"ZXZ":o.set(m*_,m*S,d*x,d*p);break;case"XZX":o.set(d*x,m*R,m*E,d*p);break;case"YXY":o.set(m*E,d*x,m*R,d*p);break;case"ZYZ":o.set(m*R,m*E,d*x,d*p);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:Fr,RAD2DEG:el,generateUUID:kr,clamp:xe,euclideanModulo:ap,mapLinear:zy,inverseLerp:By,lerp:Qo,damp:Iy,pingpong:Hy,smoothstep:Gy,smootherstep:Vy,randInt:ky,randFloat:Xy,randFloatSpread:Wy,seededRandom:qy,degToRad:Yy,radToDeg:jy,isPowerOfTwo:Zy,ceilPowerOfTwo:Ky,floorPowerOfTwo:Qy,setQuaternionFromProperEuler:Jy,normalize:In,denormalize:Lr};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],_=s[l+3],S=c[h+0],E=c[h+1],R=c[h+2],b=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=R,t[i+3]=b;return}if(_!==b||m!==S||p!==E||x!==R){let y=m*S+p*E+x*R+_*b;y<0&&(S=-S,E=-E,R=-R,b=-b,y=-y);let v=1-d;if(y<.9995){const N=Math.acos(y),O=Math.sin(N);v=Math.sin(v*N)/O,d=Math.sin(d*N)/O,m=m*v+S*d,p=p*v+E*d,x=x*v+R*d,_=_*v+b*d}else{m=m*v+S*d,p=p*v+E*d,x=x*v+R*d,_=_*v+b*d;const N=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=N,p*=N,x*=N,_*=N}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],_=c[h],S=c[h+1],E=c[h+2],R=c[h+3];return t[i]=d*R+x*_+m*E-p*S,t[i+1]=m*R+x*S+p*_-d*E,t[i+2]=p*R+x*E+d*S-m*_,t[i+3]=x*R-d*_-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),_=d(c/2),S=m(s/2),E=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"YXZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"ZXY":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"ZYX":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"YZX":this._x=S*x*_+p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_-S*E*R;break;case"XZY":this._x=S*x*_-p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_+S*E*R;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(c0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(c0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*x,this.y=s+m*x+d*p-c*_,this.z=l+m*_+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new Z,c0=new Os;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],_=s[7],S=s[2],E=s[5],R=s[8],b=l[0],y=l[3],v=l[6],N=l[1],O=l[4],P=l[7],B=l[2],H=l[5],z=l[8];return c[0]=h*b+d*N+m*B,c[3]=h*y+d*O+m*H,c[6]=h*v+d*P+m*z,c[1]=p*b+x*N+_*B,c[4]=p*y+x*O+_*H,c[7]=p*v+x*P+_*z,c[2]=S*b+E*N+R*B,c[5]=S*y+E*O+R*H,c[8]=S*v+E*P+R*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=x*h-d*p,S=d*m-x*c,E=p*c-h*m,R=i*_+s*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=_*b,t[1]=(l*p-x*s)*b,t[2]=(d*s-l*h)*b,t[3]=S*b,t[4]=(x*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=E*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(yh.makeScale(t,i)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new pe,u0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $y(){const o={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Gr]:{primaries:t,whitePoint:s,transfer:Qc,toXYZ:u0,fromXYZ:f0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:u0,fromXYZ:f0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const we=$y();function ya(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xr;class tM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=$c("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$c("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ya(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eM=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Mh(l[h].image)):c.push(Mh(l[h]))}else c=Mh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let nM=0;const Eh=new Z;class Gn extends Ps{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Sa,l=Sa,c=zn,h=Us,d=Pi,m=li,p=Gn.DEFAULT_ANISOTROPY,x=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=kr(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=mv;Gn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],_=m[8],S=m[1],E=m[5],R=m[9],b=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-b)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+b)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,P=(E+1)/2,B=(v+1)/2,H=(x+S)/4,z=(_+b)/4,j=(R+y)/4;return O>P&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=H/s,c=z/s):P>B?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=H/l,c=j/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=j/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-R)*(y-R)+(_-b)*(_-b)+(S-x)*(S-x));return Math.abs(N)<.001&&(N=1),this.x=(y-R)/N,this.y=(_-b)/N,this.z=(S-x)/N,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends Ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends iM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Tv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),xc.subVectors(this.max,Vo),Sr.subVectors(t.a,Vo),yr.subVectors(t.b,Vo),Mr.subVectors(t.c,Vo),Za.subVectors(yr,Sr),Ka.subVectors(Mr,yr),Es.subVectors(Sr,Mr);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Es.z,Es.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Es.z,0,-Es.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Es.y,Es.x,0];return!bh(i,Sr,yr,Mr,xc)||(i=[1,0,0,0,1,0,0,0,1],!bh(i,Sr,yr,Mr,xc))?!1:(Sc.crossVectors(Za,Ka),i=[Sc.x,Sc.y,Sc.z],bh(i,Sr,yr,Mr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Li=new Z,vc=new il,Sr=new Z,yr=new Z,Mr=new Z,Za=new Z,Ka=new Z,Es=new Z,Vo=new Z,xc=new Z,Sc=new Z,bs=new Z;function bh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){bs.fromArray(o,c);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),x=s.dot(bs);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const sM=new il,ko=new Z,Th=new Z;class au{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):sM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Th)),this.expandByPoint(ko.copy(t.center).sub(Th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Z,Ah=new Z,yc=new Z,Qa=new Z,Rh=new Z,Mc=new Z,Ch=new Z;class su{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ah.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Ah);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Qa.dot(this.direction),m=-Qa.dot(yc),p=Qa.lengthSq(),x=Math.abs(1-h*h);let _,S,E,R;if(x>0)if(_=h*m-d,S=h*d-m,R=c*x,_>=0)if(S>=-R)if(S<=R){const b=1/x;_*=b,S*=b,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ah).addScaledVector(yc,S),E}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(c=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(c=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){Rh.subVectors(i,t),Mc.subVectors(s,t),Ch.crossVectors(Rh,Mc);let h=this.direction.dot(Ch),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,t);const m=d*this.direction.dot(Mc.crossVectors(Qa,Mc));if(m<0)return null;const p=d*this.direction.dot(Rh.cross(Qa));if(p<0||m+p>h)return null;const x=-d*Qa.dot(Ch);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,h,d,m,p,x,_,S,E,R,b,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,_,S,E,R,b,y)}set(t,i,s,l,c,h,d,m,p,x,_,S,E,R,b,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=E,v[7]=R,v[11]=b,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),h=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*x,E=h*_,R=d*x,b=d*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-b*p,i[9]=-d*m,i[2]=b-S*p,i[6]=R+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,E=m*_,R=p*x,b=p*_;i[0]=S+b*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=E*d-R,i[6]=b+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,E=m*_,R=p*x,b=p*_;i[0]=S-b*d,i[4]=-h*_,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*x,i[9]=b-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,E=h*_,R=d*x,b=d*_;i[0]=m*x,i[4]=R*p-E,i[8]=S*p+b,i[1]=m*_,i[5]=b*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,R=d*m,b=d*p;i[0]=m*x,i[4]=b-S*_,i[8]=R*_+E,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*_+R,i[10]=S-b*_}else if(t.order==="XZY"){const S=h*m,E=h*p,R=d*m,b=d*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+b,i[5]=h*x,i[9]=E*_-R,i[2]=R*_-E,i[6]=d*x,i[10]=b*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rM,t,oM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ja.crossVectors(s,si),Ja.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ja.crossVectors(s,si)),Ja.normalize(),Ec.crossVectors(si,Ja),l[0]=Ja.x,l[4]=Ec.x,l[8]=si.x,l[1]=Ja.y,l[5]=Ec.y,l[9]=si.y,l[2]=Ja.z,l[6]=Ec.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],_=s[5],S=s[9],E=s[13],R=s[2],b=s[6],y=s[10],v=s[14],N=s[3],O=s[7],P=s[11],B=s[15],H=l[0],z=l[4],j=l[8],w=l[12],D=l[1],X=l[5],at=l[9],st=l[13],ht=l[2],ut=l[6],F=l[10],G=l[14],et=l[3],St=l[7],xt=l[11],U=l[15];return c[0]=h*H+d*D+m*ht+p*et,c[4]=h*z+d*X+m*ut+p*St,c[8]=h*j+d*at+m*F+p*xt,c[12]=h*w+d*st+m*G+p*U,c[1]=x*H+_*D+S*ht+E*et,c[5]=x*z+_*X+S*ut+E*St,c[9]=x*j+_*at+S*F+E*xt,c[13]=x*w+_*st+S*G+E*U,c[2]=R*H+b*D+y*ht+v*et,c[6]=R*z+b*X+y*ut+v*St,c[10]=R*j+b*at+y*F+v*xt,c[14]=R*w+b*st+y*G+v*U,c[3]=N*H+O*D+P*ht+B*et,c[7]=N*z+O*X+P*ut+B*St,c[11]=N*j+O*at+P*F+B*xt,c[15]=N*w+O*st+P*G+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],_=t[6],S=t[10],E=t[14],R=t[3],b=t[7],y=t[11],v=t[15],N=m*E-p*S,O=d*E-p*_,P=d*S-m*_,B=h*E-p*x,H=h*S-m*x,z=h*_-d*x;return i*(b*N-y*O+v*P)-s*(R*N-y*B+v*H)+l*(R*O-b*B+v*z)-c*(R*P-b*H+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=t[9],S=t[10],E=t[11],R=t[12],b=t[13],y=t[14],v=t[15],N=_*y*p-b*S*p+b*m*E-d*y*E-_*m*v+d*S*v,O=R*S*p-x*y*p-R*m*E+h*y*E+x*m*v-h*S*v,P=x*b*p-R*_*p+R*d*E-h*b*E-x*d*v+h*_*v,B=R*_*m-x*b*m-R*d*S+h*b*S+x*d*y-h*_*y,H=i*N+s*O+l*P+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=N*z,t[1]=(b*S*c-_*y*c-b*l*E+s*y*E+_*l*v-s*S*v)*z,t[2]=(d*y*c-b*m*c+b*l*p-s*y*p-d*l*v+s*m*v)*z,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*E-s*m*E)*z,t[4]=O*z,t[5]=(x*y*c-R*S*c+R*l*E-i*y*E-x*l*v+i*S*v)*z,t[6]=(R*m*c-h*y*c-R*l*p+i*y*p+h*l*v-i*m*v)*z,t[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*E+i*m*E)*z,t[8]=P*z,t[9]=(R*_*c-x*b*c-R*s*E+i*b*E+x*s*v-i*_*v)*z,t[10]=(h*b*c-R*d*c+R*s*p-i*b*p-h*s*v+i*d*v)*z,t[11]=(x*d*c-h*_*c-x*s*p+i*_*p+h*s*E-i*d*E)*z,t[12]=B*z,t[13]=(x*b*l-R*_*l+R*s*S-i*b*S-x*s*y+i*_*y)*z,t[14]=(R*d*l-h*b*l-R*s*m+i*b*m+h*s*y-i*d*y)*z,t[15]=(h*_*l-x*d*l+x*s*m-i*_*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,_=d+d,S=c*p,E=c*x,R=c*_,b=h*x,y=h*_,v=d*_,N=m*p,O=m*x,P=m*_,B=s.x,H=s.y,z=s.z;return l[0]=(1-(b+v))*B,l[1]=(E+P)*B,l[2]=(R-O)*B,l[3]=0,l[4]=(E-P)*H,l[5]=(1-(S+v))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(R+O)*z,l[9]=(y-N)*z,l[10]=(1-(S+b))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const h=Er.set(l[4],l[5],l[6]).length(),d=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ni.copy(this);const p=1/c,x=1/h,_=1/d;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,x=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let R,b;if(m)R=c/(h-c),b=h*c/(h-c);else if(d===Wi)R=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Jc)R=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,x=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let R,b;if(m)R=1/(h-c),b=h/(h-c);else if(d===Wi)R=-2/(h-c),b=-(h+c)/(h-c);else if(d===Jc)R=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new Z,Ni=new tn,rM=new Z(0,0,0),oM=new Z(1,1,1),Ja=new Z,Ec=new Z,si=new Z,h0=new tn,d0=new Os;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return h0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(h0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return d0.setFromEuler(this),this.setFromQuaternion(d0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lM=0;const p0=new Z,br=new Os,ga=new tn,bc=new Z,Xo=new Z,cM=new Z,uM=new Os,m0=new Z(1,0,0),g0=new Z(0,1,0),_0=new Z(0,0,1),v0={type:"added"},fM={type:"removed"},Tr={type:"childadded",child:null},wh={type:"childremoved",child:null};class Un extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new Z,i=new Zi,s=new Os,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(m0,t)}rotateY(t){return this.rotateOnAxis(g0,t)}rotateZ(t){return this.rotateOnAxis(_0,t)}translateOnAxis(t,i){return p0.copy(t).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(m0,t)}translateY(t){return this.translateOnAxis(g0,t)}translateZ(t){return this.translateOnAxis(_0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Xo,bc,this.up):ga.lookAt(bc,Xo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ga),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fM),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,cM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,uM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),_=h(t.shapes),S=h(t.skeletons),E=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new Z(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new Z,_a=new Z,Dh=new Z,va=new Z,Ar=new Z,Rr=new Z,x0=new Z,Uh=new Z,Lh=new Z,Nh=new Z,Oh=new an,Ph=new an,Fh=new an;class Mi{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oi.subVectors(l,i),_a.subVectors(s,i),Dh.subVectors(t,i);const h=Oi.dot(Oi),d=Oi.dot(_a),m=Oi.dot(Dh),p=_a.dot(_a),x=_a.dot(Dh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(p*m-d*x)*S,R=(h*x-d*m)*S;return c.set(1-E-R,R,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Oh.setScalar(0),Ph.setScalar(0),Fh.setScalar(0),Oh.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,s),Fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Oh,c.x),h.addScaledVector(Ph,c.y),h.addScaledVector(Fh,c.z),h}static isFrontFacing(t,i,s,l){return Oi.subVectors(s,i),_a.subVectors(t,i),Oi.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Oi.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Ar.subVectors(l,s),Rr.subVectors(c,s),Uh.subVectors(t,s);const m=Ar.dot(Uh),p=Rr.dot(Uh);if(m<=0&&p<=0)return i.copy(s);Lh.subVectors(t,l);const x=Ar.dot(Lh),_=Rr.dot(Lh);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Ar,h);Nh.subVectors(t,c);const E=Ar.dot(Nh),R=Rr.dot(Nh);if(R>=0&&E<=R)return i.copy(c);const b=E*p-m*R;if(b<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(Rr,d);const y=x*R-E*_;if(y<=0&&_-x>=0&&E-R>=0)return x0.subVectors(c,l),d=(_-x)/(_-x+(E-R)),i.copy(l).addScaledVector(x0,d);const v=1/(y+b+S);return h=b*v,d=S*v,i.copy(s).addScaledVector(Ar,h).addScaledVector(Rr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function zh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=ap(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=zh(h,c,t+1/3),this.g=zh(h,c,t),this.b=zh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yi){const s=Av[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return we.workingToColorSpace(Pn.copy(this),t),Math.round(xe(Pn.r*255,0,255))*65536+Math.round(xe(Pn.g*255,0,255))*256+Math.round(xe(Pn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=x<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=yi){we.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==yi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Tc);const s=Qo($a.h,Tc.h,i),l=Qo($a.s,Tc.s,i),c=Qo($a.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Me;Me.NAMES=Av;let hM=0;class Xr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Pr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$h&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class op extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Z,Ac=new ce;let dM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=a0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lr(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lr(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lr(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==a0&&(t.usage=this.usage),t}}class Rv extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Cv extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Kn extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let pM=0;const Si=new tn,Bh=new Un,Cr=new Z,ri=new il,Wo=new il,Sn=new Z;class Ti extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bv(t)?Cv:Rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,i,s){return Si.makeTranslation(t,i,s),this.applyMatrix4(Si),this}scale(t,i,s){return Si.makeScale(t,i,s),this.applyMatrix4(Si),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Kn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ri.min,Wo.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,Wo.max),ri.expandByPoint(Sn)):(ri.expandByPoint(Wo.min),ri.expandByPoint(Wo.max))}ri.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Sn.fromBufferAttribute(d,p),m&&(Cr.fromBufferAttribute(t,p),Sn.add(Cr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new Z,m[j]=new Z;const p=new Z,x=new Z,_=new Z,S=new ce,E=new ce,R=new ce,b=new Z,y=new Z;function v(j,w,D){p.fromBufferAttribute(s,j),x.fromBufferAttribute(s,w),_.fromBufferAttribute(s,D),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,w),R.fromBufferAttribute(c,D),x.sub(p),_.sub(p),E.sub(S),R.sub(S);const X=1/(E.x*R.y-R.x*E.y);isFinite(X)&&(b.copy(x).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(X),y.copy(_).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(X),d[j].add(b),d[w].add(b),d[D].add(b),m[j].add(y),m[w].add(y),m[D].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let j=0,w=N.length;j<w;++j){const D=N[j],X=D.start,at=D.count;for(let st=X,ht=X+at;st<ht;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const O=new Z,P=new Z,B=new Z,H=new Z;function z(j){B.fromBufferAttribute(l,j),H.copy(B);const w=d[j];O.copy(w),O.sub(B.multiplyScalar(B.dot(w))).normalize(),P.crossVectors(H,w);const X=P.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,X)}for(let j=0,w=N.length;j<w;++j){const D=N[j],X=D.start,at=D.count;for(let st=X,ht=X+at;st<ht;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,x=new Z,_=new Z;if(t)for(let S=0,E=t.count;S<E;S+=3){const R=t.getX(S+0),b=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,_=d.normalized,S=new p.constructor(m.length*x);let E=0,R=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?E=m[b]*d.data.stride+d.offset:E=m[b]*x;for(let v=0;v<x;v++)S[R++]=p[E++]}return new Yi(S,x,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,_=p.length;x<_;x++){const S=p[x],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],_=c[p];for(let S=0,E=_.length;S<E;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new tn,Ts=new su,Rc=new au,y0=new Z,Cc=new Z,wc=new Z,Dc=new Z,Ih=new Z,Uc=new Z,M0=new Z,Lc=new Z;class bi extends Un{constructor(t=new Ti,i=new op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],_=c[m];x!==0&&(Ih.fromBufferAttribute(_,t),h?Uc.addScaledVector(Ih,x):Uc.addScaledVector(Ih.sub(i),x))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Rc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Rc,y0)===null||Ts.origin.distanceToSquared(y0)>(t.far-t.near)**2))&&(S0.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(S0),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,b=S.length;R<b;R++){const y=S[R],v=h[y.materialIndex],N=Math.max(y.start,E.start),O=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let P=N,B=O;P<B;P+=3){const H=d.getX(P),z=d.getX(P+1),j=d.getX(P+2);l=Nc(this,v,t,s,p,x,_,H,z,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),b=Math.min(d.count,E.start+E.count);for(let y=R,v=b;y<v;y+=3){const N=d.getX(y),O=d.getX(y+1),P=d.getX(y+2);l=Nc(this,h,t,s,p,x,_,N,O,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,b=S.length;R<b;R++){const y=S[R],v=h[y.materialIndex],N=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let P=N,B=O;P<B;P+=3){const H=P,z=P+1,j=P+2;l=Nc(this,v,t,s,p,x,_,H,z,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let y=R,v=b;y<v;y+=3){const N=y,O=y+1,P=y+2;l=Nc(this,h,t,s,p,x,_,N,O,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function mM(o,t,i,s,l,c,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===as,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:o}}function Nc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Cc),o.getVertexPosition(m,wc),o.getVertexPosition(p,Dc);const x=mM(o,t,i,s,Cc,wc,Dc,M0);if(x){const _=new Z;Mi.getBarycoord(M0,Cc,wc,Dc,_),l&&(x.uv=Mi.getInterpolatedAttribute(l,d,m,p,_,new ce)),c&&(x.uv1=Mi.getInterpolatedAttribute(c,d,m,p,_,new ce)),h&&(x.normal=Mi.getInterpolatedAttribute(h,d,m,p,_,new Z),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Z,materialIndex:0};Mi.getNormal(Cc,wc,Dc,S.normal),x.face=S,x.barycoord=_}return x}class Wr extends Ti{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,s,i,t,h,c,0),R("z","y","x",1,-1,s,i,-t,h,c,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,c,4),R("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Kn(p,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(_,2));function R(b,y,v,N,O,P,B,H,z,j,w){const D=P/z,X=B/j,at=P/2,st=B/2,ht=H/2,ut=z+1,F=j+1;let G=0,et=0;const St=new Z;for(let xt=0;xt<F;xt++){const U=xt*X-st;for(let tt=0;tt<ut;tt++){const gt=tt*D-at;St[b]=gt*N,St[y]=U*O,St[v]=ht,p.push(St.x,St.y,St.z),St[b]=0,St[y]=0,St[v]=H>0?1:-1,x.push(St.x,St.y,St.z),_.push(tt/z),_.push(1-xt/j),G+=1}}for(let xt=0;xt<j;xt++)for(let U=0;U<z;U++){const tt=S+U+ut*xt,gt=S+U+ut*(xt+1),Ct=S+(U+1)+ut*(xt+1),Ht=S+(U+1)+ut*xt;m.push(tt,gt,Ht),m.push(gt,Ct,Ht),et+=6}d.addGroup(E,et,w),E+=et,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=Vr(o[i]);for(const l in s)t[l]=s[l]}return t}function gM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function wv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const tu={clone:Vr,merge:Hn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=gM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Dv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new Z,E0=new ce,b0=new ce;class oi extends Dv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,E0,b0),i.subVectors(b0,E0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Dr=1;class xM extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new oi(wr,Dr,t,i);c.layers=this.layers,this.add(c);const h=new oi(wr,Dr,t,i);h.layers=this.layers,this.add(h);const d=new oi(wr,Dr,t,i);d.layers=this.layers,this.add(d);const m=new oi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new oi(wr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(_,S,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class Uv extends Gn{constructor(t=[],i=Ns,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lv extends ci{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wr(5,5,5),c=new Qn({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Fi});c.uniforms.tEquirect.value=i;const h=new bi(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=zn),new xM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Oc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const y=i.getJointPose(b,s),v=this._getHandJoint(p,b);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class yM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class MM extends Gn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=gn,x=gn,_,S){super(null,h,d,m,p,x,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new Z,EM=new Z,bM=new pe;class es{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Gh.subVectors(s,i).cross(EM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||bM.getNormalMatrix(t),l=this.coplanarPoint(Gh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new au,TM=new ce(.5,.5),Pc=new Z;class lp{constructor(t=new es,i=new es,s=new es,l=new es,c=new es,h=new es){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],_=c[5],S=c[6],E=c[7],R=c[8],b=c[9],y=c[10],v=c[11],N=c[12],O=c[13],P=c[14],B=c[15];if(l[0].setComponents(p-h,E-x,v-R,B-N).normalize(),l[1].setComponents(p+h,E+x,v+R,B+N).normalize(),l[2].setComponents(p+d,E+_,v+b,B+O).normalize(),l[3].setComponents(p-d,E-_,v-b,B-O).normalize(),s)l[4].setComponents(m,S,y,P).normalize(),l[5].setComponents(p-m,E-S,v-y,B-P).normalize();else if(l[4].setComponents(p-m,E-S,v-y,B-P).normalize(),i===Wi)l[5].setComponents(p+m,E+S,v+y,B+P).normalize();else if(i===Jc)l[5].setComponents(m,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const i=TM.distanceTo(t.center);return As.radius=.7071067811865476+i,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new Z,nu=new Z,T0=new tn,qo=new su,Fc=new au,Vh=new Z,A0=new Z;class AM extends Un{constructor(t=new Ti,i=new Nv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)eu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new Kn(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;T0.copy(l).invert(),qo.copy(t.ray).applyMatrix4(T0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,S=s.attributes.position;if(x!==null){const E=Math.max(0,h.start),R=Math.min(x.count,h.start+h.count);for(let b=E,y=R-1;b<y;b+=p){const v=x.getX(b),N=x.getX(b+1),O=zc(this,t,qo,m,v,N,b);O&&i.push(O)}if(this.isLineLoop){const b=x.getX(R-1),y=x.getX(E),v=zc(this,t,qo,m,b,y,R-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),R=Math.min(S.count,h.start+h.count);for(let b=E,y=R-1;b<y;b+=p){const v=zc(this,t,qo,m,b,b+1,b);v&&i.push(v)}if(this.isLineLoop){const b=zc(this,t,qo,m,R-1,E,R-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(eu.fromBufferAttribute(d,l),nu.fromBufferAttribute(d,c),i.distanceSqToSegment(eu,nu,Vh,A0)>s)return;Vh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Vh);if(!(p<t.near||p>t.far))return{distance:p,point:A0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const R0=new Z,C0=new Z;class RM extends AM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)R0.fromBufferAttribute(i,l),C0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+R0.distanceTo(C0);t.setAttribute("lineDistance",new Kn(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nl extends Gn{constructor(t,i,s=ji,l,c,h,d=gn,m=gn,p,x=Ma,_=1){if(x!==Ma&&x!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CM extends nl{constructor(t,i=ji,s=Ns,l,c,h=gn,d=gn,m,p=Ma){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ov extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Bc=new Z,Ic=new Z,kh=new Z,Hc=new Mi;class wM extends Ti{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Fr*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],x=["a","b","c"],_=new Array(3),S={},E=[];for(let R=0;R<m;R+=3){h?(p[0]=h.getX(R),p[1]=h.getX(R+1),p[2]=h.getX(R+2)):(p[0]=R,p[1]=R+1,p[2]=R+2);const{a:b,b:y,c:v}=Hc;if(b.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Hc.getNormal(kh),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let N=0;N<3;N++){const O=(N+1)%3,P=_[N],B=_[O],H=Hc[x[N]],z=Hc[x[O]],j=`${P}_${B}`,w=`${B}_${P}`;w in S&&S[w]?(kh.dot(S[w].normal)<=c&&(E.push(H.x,H.y,H.z),E.push(z.x,z.y,z.z)),S[w]=null):j in S||(S[j]={index0:p[N],index1:p[O],normal:kh.clone()})}}for(const R in S)if(S[R]){const{index0:b,index1:y}=S[R];Bc.fromBufferAttribute(d,b),Ic.fromBufferAttribute(d,y),E.push(Bc.x,Bc.y,Bc.z),E.push(Ic.x,Ic.y,Ic.z)}this.setAttribute("position",new Kn(E,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class al extends Ti{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,_=t/d,S=i/m,E=[],R=[],b=[],y=[];for(let v=0;v<x;v++){const N=v*S-h;for(let O=0;O<p;O++){const P=O*_-c;R.push(P,-N,0),b.push(0,0,1),y.push(O/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const O=N+p*v,P=N+p*(v+1),B=N+1+p*(v+1),H=N+1+p*v;E.push(O,P,H),E.push(P,B,H)}this.setIndex(E),this.setAttribute("position",new Kn(R,3)),this.setAttribute("normal",new Kn(b,3)),this.setAttribute("uv",new Kn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.widthSegments,t.heightSegments)}}class DM extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UM extends Xr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LM extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NM extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cp extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Xh=new tn,w0=new Z,D0=new Z;class Pv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;w0.setFromMatrixPosition(t.matrixWorld),i.position.copy(w0),D0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(D0),i.updateMatrixWorld(),Xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class OM extends Pv{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class PM extends cp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ru extends Dv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FM extends Pv{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zM extends cp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new FM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class BM extends cp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class IM extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Fv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const U0=new tn;class HM{constructor(t,i,s=0,l=1/0){this.ray=new su(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return U0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(U0),this}intersectObject(t,i=!0,s=[]){return Xd(t,this,s,i),s.sort(L0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Xd(t[l],this,s,i);return s.sort(L0),s}}function L0(o,t){return o.distance-t.distance}function Xd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Xd(c[h],t,i,!0)}}class N0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GM extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function O0(o,t,i,s){const l=VM(s);switch(i){case Sv:return o*t;case Mv:return o*t/l.components*l.byteLength;case $d:return o*t/l.components*l.byteLength;case Hr:return o*t*2/l.components*l.byteLength;case tp:return o*t*2/l.components*l.byteLength;case yv:return o*t*3/l.components*l.byteLength;case Pi:return o*t*4/l.components*l.byteLength;case ep:return o*t*4/l.components*l.byteLength;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(o,16)*Math.max(t,8)/4;case hd:case pd:return Math.max(o,8)*Math.max(t,8)/2;case gd:case _d:case xd:case Sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vd:case yd:case Md:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case wd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case zd:case Bd:case Id:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vd:case kd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VM(o){switch(o){case li:case gv:return{byteLength:1,components:1};case Jo:case _v:case Ei:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case ji:case Kd:case Xi:return{byteLength:4,components:1};case vv:case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);function zv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function kM(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,x);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],b=_[E];b.start<=R.start+R.count+1?R.count=Math.max(R.count,b.start+b.count-R.start):(++S,_[S]=b)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const b=_[E];o.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:XM,alphahash_pars_fragment:WM,alphamap_fragment:qM,alphamap_pars_fragment:YM,alphatest_fragment:jM,alphatest_pars_fragment:ZM,aomap_fragment:KM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:$M,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:FE,envmap_vertex:AE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:wE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:LE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:IE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:XE,lights_fragment_end:WE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:$E,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:Sb,dithering_fragment:yb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:Cb,skinbase_vertex:wb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:Fb,transmission_fragment:zb,transmission_pars_fragment:Bb,uv_pars_fragment:Ib,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distance_vert:Qb,distance_frag:Jb,equirect_vert:$b,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:ST,sprite_vert:yT,sprite_frag:MT},Ft={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Hn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Hn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Hn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Hn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Hn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Hn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Hn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Hn([Ft.lights,Ft.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Gc={r:0,b:0,g:0},Rs=new Zi,ET=new tn;function bT(o,t,i,s,l,c,h){const d=new Me(0);let m=c===!0?0:1,p,x,_=null,S=0,E=null;function R(O){let P=O.isScene===!0?O.background:null;return P&&P.isTexture&&(P=(O.backgroundBlurriness>0?i:t).get(P)),P}function b(O){let P=!1;const B=R(O);B===null?v(d,m):B&&B.isColor&&(v(B,1),P=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,P){const B=R(P);B&&(B.isCubeTexture||B.mapping===iu)?(x===void 0&&(x=new bi(new Wr(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Vr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(H,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Rs.copy(P.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),x.material.uniforms.envMap.value=B,x.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Rs)),x.material.toneMapped=we.getTransfer(B.colorSpace)!==Ve,(_!==B||S!==B.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,_=B,S=B.version,E=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new bi(new al(2,2),new Qn({name:"BackgroundMaterial",uniforms:Vr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=we.getTransfer(B.colorSpace)!==Ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,P){O.getRGB(Gc,wv(o)),s.buffers.color.setClear(Gc.r,Gc.g,Gc.b,P,h)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,P=1){d.set(O),m=P,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(d,m)},render:b,addToRenderList:y,dispose:N}}function TT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(D,X,at,st,ht){let ut=!1;const F=_(st,at,X);c!==F&&(c=F,p(c.object)),ut=E(D,st,at,ht),ut&&R(D,st,at,ht),ht!==null&&t.update(ht,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,P(D,X,at,st),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function _(D,X,at){const st=at.wireframe===!0;let ht=s[D.id];ht===void 0&&(ht={},s[D.id]=ht);let ut=ht[X.id];ut===void 0&&(ut={},ht[X.id]=ut);let F=ut[st];return F===void 0&&(F=S(m()),ut[st]=F),F}function S(D){const X=[],at=[],st=[];for(let ht=0;ht<i;ht++)X[ht]=0,at[ht]=0,st[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:at,attributeDivisors:st,object:D,attributes:{},index:null}}function E(D,X,at,st){const ht=c.attributes,ut=X.attributes;let F=0;const G=at.getAttributes();for(const et in G)if(G[et].location>=0){const xt=ht[et];let U=ut[et];if(U===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function R(D,X,at,st){const ht={},ut=X.attributes;let F=0;const G=at.getAttributes();for(const et in G)if(G[et].location>=0){let xt=ut[et];xt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),ht[et]=U,F++}c.attributes=ht,c.attributesNum=F,c.index=st}function b(){const D=c.newAttributes;for(let X=0,at=D.length;X<at;X++)D[X]=0}function y(D){v(D,0)}function v(D,X){const at=c.newAttributes,st=c.enabledAttributes,ht=c.attributeDivisors;at[D]=1,st[D]===0&&(o.enableVertexAttribArray(D),st[D]=1),ht[D]!==X&&(o.vertexAttribDivisor(D,X),ht[D]=X)}function N(){const D=c.newAttributes,X=c.enabledAttributes;for(let at=0,st=X.length;at<st;at++)X[at]!==D[at]&&(o.disableVertexAttribArray(at),X[at]=0)}function O(D,X,at,st,ht,ut,F){F===!0?o.vertexAttribIPointer(D,X,at,ht,ut):o.vertexAttribPointer(D,X,at,st,ht,ut)}function P(D,X,at,st){b();const ht=st.attributes,ut=at.getAttributes(),F=X.defaultAttributeValues;for(const G in ut){const et=ut[G];if(et.location>=0){let St=ht[G];if(St===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const xt=St.normalized,U=St.itemSize,tt=t.get(St);if(tt===void 0)continue;const gt=tt.buffer,Ct=tt.type,Ht=tt.bytesPerElement,$=Ct===o.INT||Ct===o.UNSIGNED_INT||St.gpuType===Kd;if(St.isInterleavedBufferAttribute){const ft=St.data,wt=ft.stride,Xt=St.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<et.locationSize;Gt++)v(et.location+Gt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<et.locationSize;Gt++)y(et.location+Gt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Gt=0;Gt<et.locationSize;Gt++)O(et.location+Gt,U/et.locationSize,Ct,xt,wt*Ht,(Xt+U/et.locationSize*Gt)*Ht,$)}else{if(St.isInstancedBufferAttribute){for(let ft=0;ft<et.locationSize;ft++)v(et.location+ft,St.meshPerAttribute);D.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ft=0;ft<et.locationSize;ft++)y(et.location+ft);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ft=0;ft<et.locationSize;ft++)O(et.location+ft,U/et.locationSize,Ct,xt,U*Ht,U/et.locationSize*ft*Ht,$)}}else if(F!==void 0){const xt=F[G];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(et.location,xt);break;case 3:o.vertexAttrib3fv(et.location,xt);break;case 4:o.vertexAttrib4fv(et.location,xt);break;default:o.vertexAttrib1fv(et.location,xt)}}}}N()}function B(){j();for(const D in s){const X=s[D];for(const at in X){const st=X[at];for(const ht in st)x(st[ht].object),delete st[ht];delete X[at]}delete s[D]}}function H(D){if(s[D.id]===void 0)return;const X=s[D.id];for(const at in X){const st=X[at];for(const ht in st)x(st[ht].object),delete st[ht];delete X[at]}delete s[D.id]}function z(D){for(const X in s){const at=s[X];if(at[D.id]===void 0)continue;const st=at[D.id];for(const ht in st)x(st[ht].object),delete st[ht];delete at[D.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function AT(o,t,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,_){_!==0&&(o.drawArraysInstanced(s,p,x,_),i.update(x,s,_))}function d(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,_);let E=0;for(let R=0;R<_;R++)E+=x[R];i.update(E,s,1)}function m(p,x,_,S){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],x[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,_);let R=0;for(let b=0;b<_;b++)R+=x[b]*S[b];i.update(R,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function RT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Pi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==li&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(se("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:b,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:P,maxSamples:B,samples:H}}function CT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new es,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||R===null||R.length===0||c&&!y)c?x(null):p();else{const N=c?0:s,O=N*4;let P=v.clippingState||null;m.value=P,P=x(R,S,O,E);for(let B=0;B!==O;++B)P[B]=i[B];v.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,S,E,R){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,R!==!0||y===null){const v=E+b*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,P=E;O!==b;++O,P+=4)h.copy(_[O]).applyMatrix4(N,d),h.normal.toArray(y,P),y[P+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function wT(o){let t=new WeakMap;function i(h,d){return d===ld?h.mapping=Ns:d===cd&&(h.mapping=Ir),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Lv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,P0=[.125,.215,.35,.446,.526,.582],Ds=20,DT=256,Yo=new ru,F0=new Me;let Wh=null,qh=0,Yh=0,jh=!1;const UT=new Z;class z0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=UT}=c;Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,qh,Yh),this._renderer.xr.enabled=jh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ei,format:Pi,colorSpace:Gr,depthBuffer:!1},l=B0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LT(c)),this._blurMaterial=OT(c,t,i),this._ggxMaterial=NT(c,t,i)}return l}_compileMaterial(t){const i=new bi(new Ti,t);this._renderer.compile(i,Yo)}_sceneToCubeUV(t,i,s,l,c){const m=new oi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(F0),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Wr,new op({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let v=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,v=!0):(y.color.copy(F0),v=!0);for(let O=0;O<6;O++){const P=O%3;P===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[O],c.y,c.z)):P===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[O]));const B=this._cubeSize;Ur(l,P*B,O>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(b,m),_.render(t,m)}_.toneMapping=E,_.autoClear=S,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ns||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Yo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=0+p*1.25,E=_*S,{_lodMax:R}=this,b=this._sizeLods[s],y=3*b*(s>R-is?s-R+is:0),v=4*(this._cubeSize-b);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=R-i,Ur(c,y,v,3*b,2*b),l.setRenderTarget(c),l.render(d,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-s,Ur(t,y,v,3*b,2*b),l.setRenderTarget(t),l.render(d,Yo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ds-1),b=c/R,y=isFinite(c)?1+Math.floor(x*b):Ds;y>Ds&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const v=[];let N=0;for(let z=0;z<Ds;++z){const j=z/b,w=Math.exp(-j*j/2);v.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-s;const P=this._sizeLods[l],B=3*P*(l>O-is?l-O+is:0),H=4*(this._cubeSize-P);Ur(i,B,H,3*P,2*P),m.setRenderTarget(i),m.render(_,Yo)}}function LT(o){const t=[],i=[],s=[];let l=o;const c=o-is+1+P0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-is?m=P0[h-o+is-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],E=6,R=6,b=3,y=2,v=1,N=new Float32Array(b*R*E),O=new Float32Array(y*R*E),P=new Float32Array(v*R*E);for(let H=0;H<E;H++){const z=H%3*2/3-1,j=H>2?0:-1,w=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];N.set(w,b*R*H),O.set(S,y*R*H);const D=[H,H,H,H,H,H];P.set(D,v*R*H)}const B=new Ti;B.setAttribute("position",new Yi(N,b)),B.setAttribute("uv",new Yi(O,y)),B.setAttribute("faceIndex",new Yi(P,v)),s.push(new bi(B,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function B0(o,t,i){const s=new ci(o,t,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function NT(o,t,i){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function OT(o,t,i){const s=new Float32Array(Ds),l=new Z(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function I0(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function H0(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,x=m===Ns||m===Ir;if(p||x){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new z0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new z0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function FT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function zT(o,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let b=0;if(E!==null){const N=E.array;b=E.version;for(let O=0,P=N.length;O<P;O+=3){const B=N[O+0],H=N[O+1],z=N[O+2];S.push(B,H,H,z,z,B)}}else if(R!==void 0){const N=R.array;b=R.version;for(let O=0,P=N.length/3-1;O<P;O+=3){const B=O+0,H=O+1,z=O+2;S.push(B,H,H,z,z,B)}}else return;const y=new(bv(S)?Cv:Rv)(S,1);y.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function x(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:x}}function BT(o,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(s,E,c,S*h,R),i.update(E,s,R))}function x(S,E,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,R);let y=0;for(let v=0;v<R;v++)y+=E[v];i.update(y,s,1)}function _(S,E,R,b){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,E[v],b[v]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,b,0,R);let v=0;for(let N=0;N<R;N++)v+=E[N]*b[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function IT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function HT(o,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let D=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let P=0;R===!0&&(P=1),b===!0&&(P=2),y===!0&&(P=3);let B=d.attributes.position.count*P,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*H*4*_),j=new Tv(z,B,H,_);j.type=Xi,j.needsUpdate=!0;const w=P*4;for(let X=0;X<_;X++){const at=v[X],st=N[X],ht=O[X],ut=B*H*4*X;for(let F=0;F<at.count;F++){const G=F*w;R===!0&&(l.fromBufferAttribute(at,F),z[ut+G+0]=l.x,z[ut+G+1]=l.y,z[ut+G+2]=l.z,z[ut+G+3]=0),b===!0&&(l.fromBufferAttribute(st,F),z[ut+G+4]=l.x,z[ut+G+5]=l.y,z[ut+G+6]=l.z,z[ut+G+7]=0),y===!0&&(l.fromBufferAttribute(ht,F),z[ut+G+8]=l.x,z[ut+G+9]=l.y,z[ut+G+10]=l.z,z[ut+G+11]=ht.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new ce(B,H)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const b=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function GT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const VT={[lv]:"LINEAR_TONE_MAPPING",[cv]:"REINHARD_TONE_MAPPING",[uv]:"CINEON_TONE_MAPPING",[fv]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[pv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function kT(o,t,i,s,l){const c=new ci(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new ci(t,i,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),d=new Ti;d.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Kn([0,2,0,0,2,0],2));const m=new DM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new bi(d,m),x=new ru(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,b=null,y=[],v=!1;this.setSize=function(N,O){c.setSize(N,O),h.setSize(N,O);for(let P=0;P<y.length;P++){const B=y[P];B.setSize&&B.setSize(N,O)}},this.setEffects=function(N){y=N,v=y.length>0&&y[0].isRenderPass===!0;const O=c.width,P=c.height;for(let B=0;B<y.length;B++){const H=y[B];H.setSize&&H.setSize(O,P)}},this.begin=function(N,O){if(E||N.toneMapping===qi&&y.length===0)return!1;if(b=O,O!==null){const P=O.width,B=O.height;(c.width!==P||c.height!==B)&&this.setSize(P,B)}return v===!1&&N.setRenderTarget(c),R=N.toneMapping,N.toneMapping=qi,!0},this.hasRenderPass=function(){return v},this.end=function(N,O){N.toneMapping=R,E=!0;let P=c,B=h;for(let H=0;H<y.length;H++){const z=y[H];if(z.enabled!==!1&&(z.render(N,B,P,O),z.needsSwap!==!1)){const j=P;P=B,B=j}}if(_!==N.outputColorSpace||S!==N.toneMapping){_=N.outputColorSpace,S=N.toneMapping,m.defines={},we.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const H=VT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(b),N.render(p,x),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Bv=new Gn,Wd=new nl(1,1),Iv=new Tv,Hv=new aM,Gv=new Uv,G0=[],V0=[],k0=new Float32Array(16),X0=new Float32Array(9),W0=new Float32Array(4);function qr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=G0[l];if(c===void 0&&(c=new Float32Array(l),G0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function lu(o,t){let i=V0[t];i===void 0&&(i=new Int32Array(t),V0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function XT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function jT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;W0.set(s),o.uniformMatrix2fv(this.addr,!1,W0),vn(i,s)}}function ZT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;X0.set(s),o.uniformMatrix3fv(this.addr,!1,X0),vn(i,s)}}function KT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;k0.set(s),o.uniformMatrix4fv(this.addr,!1,k0),vn(i,s)}}function QT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function t1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function e1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function n1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function i1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function s1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Wd.compareFunction=i.isReversedDepthBuffer()?ip:np,c=Wd):c=Bv,i.setTexture2D(t||c,l)}function r1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Hv,l)}function o1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Gv,l)}function l1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Iv,l)}function c1(o){switch(o){case 5126:return XT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}function u1(o,t){o.uniform1fv(this.addr,t)}function f1(o,t){const i=qr(t,this.size,2);o.uniform2fv(this.addr,i)}function h1(o,t){const i=qr(t,this.size,3);o.uniform3fv(this.addr,i)}function d1(o,t){const i=qr(t,this.size,4);o.uniform4fv(this.addr,i)}function p1(o,t){const i=qr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function m1(o,t){const i=qr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function g1(o,t){const i=qr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _1(o,t){o.uniform1iv(this.addr,t)}function v1(o,t){o.uniform2iv(this.addr,t)}function x1(o,t){o.uniform3iv(this.addr,t)}function S1(o,t){o.uniform4iv(this.addr,t)}function y1(o,t){o.uniform1uiv(this.addr,t)}function M1(o,t){o.uniform2uiv(this.addr,t)}function E1(o,t){o.uniform3uiv(this.addr,t)}function b1(o,t){o.uniform4uiv(this.addr,t)}function T1(o,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Wd:h=Bv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function A1(o,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Hv,c[h])}function R1(o,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Gv,c[h])}function C1(o,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Iv,c[h])}function w1(o){switch(o){case 5126:return u1;case 35664:return f1;case 35665:return h1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return y1;case 36294:return M1;case 36295:return E1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}class D1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=c1(i.type)}}class U1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class L1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function q0(o,t){o.seq.push(t),o.map[t.id]=t}function N1(o,t,i){const s=o.name,l=s.length;for(Zh.lastIndex=0;;){const c=Zh.exec(s),h=Zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){q0(i,p===void 0?new D1(d,o,t):new U1(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new L1(d),q0(i,_)),i=_}}}class Zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);N1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Y0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const O1=37297;let P1=0;function F1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const j0=new pe;function z1(o){we._getMatrix(j0,we.workingColorSpace,o);const t=`mat3( ${j0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Qc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Z0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+F1(o.getShaderSource(t),d)}else return c}function B1(o,t){const i=z1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const I1={[lv]:"Linear",[cv]:"Reinhard",[uv]:"Cineon",[fv]:"ACESFilmic",[dv]:"AgX",[pv]:"Neutral",[hv]:"Custom"};function H1(o,t){const i=I1[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new Z;function G1(){we.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),t=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function k1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function X1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ko(o){return o!==""}function K0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Q0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(o){return o.replace(W1,Y1)}const q1=new Map;function Y1(o,t){let i=_e[t];if(i===void 0){const s=q1.get(t);if(s!==void 0)i=_e[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return qd(i)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(o){return o.replace(j1,Z1)}function Z1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const K1={[Xc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function Q1(o){return K1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J1={[Ns]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function $1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":J1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[Ir]:"ENVMAP_MODE_REFRACTION"};function eA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nA={[ov]:"ENVMAP_BLENDING_MULTIPLY",[by]:"ENVMAP_BLENDING_MIX",[Ty]:"ENVMAP_BLENDING_ADD"};function iA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":nA[o.combine]||"ENVMAP_BLENDING_NONE"}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Q1(i),p=$1(i),x=eA(i),_=iA(i),S=aA(i),E=V1(i),R=k1(c),b=l.createProgram();let y,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ko).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ko).join(`
`),v.length>0&&(v+=`
`)):(y=[$0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),v=[$0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?_e.tonemapping_pars_fragment:"",i.toneMapping!==qi?H1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,B1("linearToOutputTexel",i.outputColorSpace),G1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=qd(h),h=K0(h,i),h=Q0(h,i),d=qd(d),d=K0(d,i),d=Q0(d,i),h=J0(h),d=J0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=N+y+h,P=N+v+d,B=Y0(l,l.VERTEX_SHADER,O),H=Y0(l,l.FRAGMENT_SHADER,P);l.attachShader(b,B),l.attachShader(b,H),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(X){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(b)||"",st=l.getShaderInfoLog(B)||"",ht=l.getShaderInfoLog(H)||"",ut=at.trim(),F=st.trim(),G=ht.trim();let et=!0,St=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,B,H);else{const xt=Z0(l,B,"vertex"),U=Z0(l,H,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+xt+`
`+U)}else ut!==""?se("WebGLProgram: Program Info Log:",ut):(F===""||G==="")&&(St=!1);St&&(X.diagnostics={runnable:et,programLog:ut,vertexShader:{log:F,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(B),l.deleteShader(H),j=new Zc(l,b),w=X1(l,b)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,O1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=H,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lA(t),i.set(t,s)),s}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function cA(o,t,i,s,l,c,h){const d=new rp,m=new oA,p=new Set,x=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,X,at,st){const ht=at.fog,ut=st.geometry,F=w.isMeshStandardMaterial?at.environment:null,G=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),et=G&&G.mapping===iu?G.image.height:null,St=R[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&se("WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,U=xt!==void 0?xt.length:0;let tt=0;ut.morphAttributes.position!==void 0&&(tt=1),ut.morphAttributes.normal!==void 0&&(tt=2),ut.morphAttributes.color!==void 0&&(tt=3);let gt,Ct,Ht,$;if(St){const Re=ki[St];gt=Re.vertexShader,Ct=Re.fragmentShader}else gt=w.vertexShader,Ct=w.fragmentShader,m.update(w),Ht=m.getVertexShaderID(w),$=m.getFragmentShaderID(w);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Xt=st.isInstancedMesh===!0,Gt=st.isBatchedMesh===!0,me=!!w.map,Ze=!!w.matcap,ve=!!G,ge=!!w.aoMap,Ae=!!w.lightMap,re=!!w.bumpMap,Et=!!w.normalMap,L=!!w.displacementMap,Kt=!!w.emissiveMap,$t=!!w.metalnessMap,ne=!!w.roughnessMap,bt=w.anisotropy>0,T=w.clearcoat>0,M=w.dispersion>0,V=w.iridescence>0,lt=w.sheen>0,mt=w.transmission>0,rt=bt&&!!w.anisotropyMap,Ot=T&&!!w.clearcoatMap,Tt=T&&!!w.clearcoatNormalMap,zt=T&&!!w.clearcoatRoughnessMap,Qt=V&&!!w.iridescenceMap,Mt=V&&!!w.iridescenceThicknessMap,At=lt&&!!w.sheenColorMap,Vt=lt&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Ut=!!w.specularColorMap,he=!!w.specularIntensityMap,W=mt&&!!w.transmissionMap,Nt=mt&&!!w.thicknessMap,Rt=!!w.gradientMap,It=!!w.alphaMap,yt=w.alphaTest>0,vt=!!w.alphaHash,Dt=!!w.extensions;let oe=qi;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(oe=o.toneMapping);const Be={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:gt,fragmentShader:Ct,defines:w.defines,customVertexShaderID:Ht,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Gt,batchingColor:Gt&&st._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&st.instanceColor!==null,instancingMorph:Xt&&st.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Gr,alphaToCoverage:!!w.alphaToCoverage,map:me,matcap:Ze,envMap:ve,envMapMode:ve&&G.mapping,envMapCubeUVHeight:et,aoMap:ge,lightMap:Ae,bumpMap:re,normalMap:Et,displacementMap:L,emissiveMap:Kt,normalMapObjectSpace:Et&&w.normalMapType===Cy,normalMapTangentSpace:Et&&w.normalMapType===Ev,metalnessMap:$t,roughnessMap:ne,anisotropy:bt,anisotropyMap:rt,clearcoat:T,clearcoatMap:Ot,clearcoatNormalMap:Tt,clearcoatRoughnessMap:zt,dispersion:M,iridescence:V,iridescenceMap:Qt,iridescenceThicknessMap:Mt,sheen:lt,sheenColorMap:At,sheenRoughnessMap:Vt,specularMap:Bt,specularColorMap:Ut,specularIntensityMap:he,transmission:mt,transmissionMap:W,thicknessMap:Nt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===Pr&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:yt,alphaHash:vt,combine:w.combine,mapUv:me&&b(w.map.channel),aoMapUv:ge&&b(w.aoMap.channel),lightMapUv:Ae&&b(w.lightMap.channel),bumpMapUv:re&&b(w.bumpMap.channel),normalMapUv:Et&&b(w.normalMap.channel),displacementMapUv:L&&b(w.displacementMap.channel),emissiveMapUv:Kt&&b(w.emissiveMap.channel),metalnessMapUv:$t&&b(w.metalnessMap.channel),roughnessMapUv:ne&&b(w.roughnessMap.channel),anisotropyMapUv:rt&&b(w.anisotropyMap.channel),clearcoatMapUv:Ot&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(w.sheenRoughnessMap.channel),specularMapUv:Bt&&b(w.specularMap.channel),specularColorMapUv:Ut&&b(w.specularColorMap.channel),specularIntensityMapUv:he&&b(w.specularIntensityMap.channel),transmissionMapUv:W&&b(w.transmissionMap.channel),thicknessMapUv:Nt&&b(w.thicknessMap.channel),alphaMapUv:It&&b(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Et||bt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(me||It),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:oe,decodeVideoTexture:me&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xa,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Gt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)D.push(X),D.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(N(D,w),O(D,w),D.push(o.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function N(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function O(w,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function P(w){const D=R[w.type];let X;if(D){const at=ki[D];X=tu.clone(at.uniforms)}else X=w.uniforms;return X}function B(w,D){let X=_.get(D);return X!==void 0?++X.usedTimes:(X=new sA(o,D,w,c),x.push(X),_.set(D,X)),X}function H(w){if(--w.usedTimes===0){const D=x.indexOf(w);x[D]=x[x.length-1],x.pop(),_.delete(w.cacheKey),w.destroy()}}function z(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:B,releaseProgram:H,releaseShaderCache:z,programs:x,dispose:j}}function uA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function tv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ev(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,R,b,y){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:b,group:y},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=E,v.groupOrder=R,v.renderOrder=_.renderOrder,v.z=b,v.group=y),t++,v}function d(_,S,E,R,b,y){const v=h(_,S,E,R,b,y);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,S,E,R,b,y){const v=h(_,S,E,R,b,y);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||fA),s.length>1&&s.sort(S||tv),l.length>1&&l.sort(S||tv)}function x(){for(let _=t,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function hA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new ev,o.set(s,[h])):l>=c.length?(h=new ev,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function dA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Me};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new dA,i=pA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new tn,h=new tn;function d(p){let x=0,_=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let E=0,R=0,b=0,y=0,v=0,N=0,O=0,P=0,B=0,H=0,z=0;p.sort(gA);for(let w=0,D=p.length;w<D;w++){const X=p[w],at=X.color,st=X.intensity,ht=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Hr?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=at.r*st,_+=at.g*st,S+=at.b*st;else if(X.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(X.sh.coefficients[F],st);z++}else if(X.isDirectionalLight){const F=t.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.directionalShadow[E]=et,s.directionalShadowMap[E]=ut,s.directionalShadowMatrix[E]=X.shadow.matrix,N++}s.directional[E]=F,E++}else if(X.isSpotLight){const F=t.get(X);F.position.setFromMatrixPosition(X.matrixWorld),F.color.copy(at).multiplyScalar(st),F.distance=ht,F.coneCos=Math.cos(X.angle),F.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),F.decay=X.decay,s.spot[b]=F;const G=X.shadow;if(X.map&&(s.spotLightMap[B]=X.map,B++,G.updateMatrices(X),X.castShadow&&H++),s.spotLightMatrix[b]=G.matrix,X.castShadow){const et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.spotShadow[b]=et,s.spotShadowMap[b]=ut,P++}b++}else if(X.isRectAreaLight){const F=t.get(X);F.color.copy(at).multiplyScalar(st),F.halfWidth.set(X.width*.5,0,0),F.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=F,y++}else if(X.isPointLight){const F=t.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),F.distance=X.distance,F.decay=X.decay,X.castShadow){const G=X.shadow,et=i.get(X);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,et.shadowCameraNear=G.camera.near,et.shadowCameraFar=G.camera.far,s.pointShadow[R]=et,s.pointShadowMap[R]=ut,s.pointShadowMatrix[R]=X.shadow.matrix,O++}s.point[R]=F,R++}else if(X.isHemisphereLight){const F=t.get(X);F.skyColor.copy(X.color).multiplyScalar(st),F.groundColor.copy(X.groundColor).multiplyScalar(st),s.hemi[v]=F,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==E||j.pointLength!==R||j.spotLength!==b||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==N||j.numPointShadows!==O||j.numSpotShadows!==P||j.numSpotMaps!==B||j.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=b,s.rectArea.length=y,s.point.length=R,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=P+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,j.directionalLength=E,j.pointLength=R,j.spotLength=b,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=N,j.numPointShadows=O,j.numSpotShadows=P,j.numSpotMaps=B,j.numLightProbes=z,s.version=mA++)}function m(p,x){let _=0,S=0,E=0,R=0,b=0;const y=x.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const O=p[v];if(O.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),_++}else if(O.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const P=s.rectArea[R];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),P.halfWidth.set(O.width*.5,0,0),P.halfHeight.set(0,O.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const P=s.point[S];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const P=s.hemi[b];P.direction.setFromMatrixPosition(O.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:s}}function nv(o){const t=new _A(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function vA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new nv(o),t.set(l,[d])):c>=h.length?(d=new nv(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],MA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],iv=new tn,jo=new Z,Kh=new Z;function EA(o,t,i){let s=new lp;const l=new ce,c=new ce,h=new an,d=new LM,m=new NM,p={},x=i.maxTextureSize,_={[as]:Zn,[Zn]:as,[xa]:xa},S=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:xA,fragmentShader:SA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ti;R.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bi(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let v=this.type;this.render=function(H,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===sy&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Xc);const w=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),at=o.state;at.setBlending(Fi),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const st=v!==this.type;st&&z.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ut=>ut.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ut=H.length;ht<ut;ht++){const F=H[ht],G=F.shadow;if(G===void 0){se("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const et=G.getFrameExtents();if(l.multiply(et),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/et.x),l.x=c.x*et.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/et.y),l.y=c.y*et.y,G.mapSize.y=c.y)),G.map===null||st===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zo){if(F.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ci(l.x,l.y,{format:Hr,type:Ei,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new nl(l.x,l.y,Xi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn}else{F.isPointLight?(G.map=new Lv(l.x),G.map.depthTexture=new CM(l.x,ji)):(G.map=new ci(l.x,l.y),G.map.depthTexture=new nl(l.x,l.y,ji)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ma;const xt=o.state.buffers.depth.getReversed();this.type===Xc?(G.map.depthTexture.compareFunction=xt?ip:np,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn)}G.camera.updateProjectionMatrix()}const St=G.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<St;xt++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(xt);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),at.viewport(h)}if(F.isPointLight){const U=G.camera,tt=G.matrix,gt=F.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),jo.setFromMatrixPosition(F.matrixWorld),U.position.copy(jo),Kh.copy(U.position),Kh.add(yA[xt]),U.up.copy(MA[xt]),U.lookAt(Kh),U.updateMatrixWorld(),tt.makeTranslation(-jo.x,-jo.y,-jo.z),iv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(iv,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),P(z,j,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===Zo&&N(G,j),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,D,X)};function N(H,z){const j=t.update(b);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ci(l.x,l.y,{format:Hr,type:Ei})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,b,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(z,null,j,E,b,null)}function O(H,z,j,w){let D=null;const X=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)D=X;else if(D=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const at=D.uuid,st=z.uuid;let ht=p[at];ht===void 0&&(ht={},p[at]=ht);let ut=ht[st];ut===void 0&&(ut=D.clone(),ht[st]=ut,z.addEventListener("dispose",B)),D=ut}if(D.visible=z.visible,D.wireframe=z.wireframe,w===Zo?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const at=o.properties.get(D);at.light=j}return D}function P(H,z,j,w,D){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===Zo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const st=t.update(H),ht=H.material;if(Array.isArray(ht)){const ut=st.groups;for(let F=0,G=ut.length;F<G;F++){const et=ut[F],St=ht[et.materialIndex];if(St&&St.visible){const xt=O(H,St,w,D);H.onBeforeShadow(o,H,z,j,st,xt,et),o.renderBufferDirect(j,null,st,xt,H,et),H.onAfterShadow(o,H,z,j,st,xt,et)}}}else if(ht.visible){const ut=O(H,ht,w,D);H.onBeforeShadow(o,H,z,j,st,ut,null),o.renderBufferDirect(j,null,st,ut,H,null),H.onAfterShadow(o,H,z,j,st,ut,null)}}const at=H.children;for(let st=0,ht=at.length;st<ht;st++)P(at[st],z,j,w,D)}function B(H){H.target.removeEventListener("dispose",B);for(const j in p){const w=p[j],D=H.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const bA={[ed]:nd,[id]:rd,[ad]:od,[Br]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:Br};function TA(o,t){function i(){let W=!1;const Nt=new an;let Rt=null;const It=new an(0,0,0,0);return{setMask:function(yt){Rt!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),Rt=yt)},setLocked:function(yt){W=yt},setClear:function(yt,vt,Dt,oe,Be){Be===!0&&(yt*=oe,vt*=oe,Dt*=oe),Nt.set(yt,vt,Dt,oe),It.equals(Nt)===!1&&(o.clearColor(yt,vt,Dt,oe),It.copy(Nt))},reset:function(){W=!1,Rt=null,It.set(-1,0,0,0)}}}function s(){let W=!1,Nt=!1,Rt=null,It=null,yt=null;return{setReversed:function(vt){if(Nt!==vt){const Dt=t.get("EXT_clip_control");vt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const oe=yt;yt=null,this.setClear(oe)}},getReversed:function(){return Nt},setTest:function(vt){vt?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!W&&(o.depthMask(vt),Rt=vt)},setFunc:function(vt){if(Nt&&(vt=bA[vt]),It!==vt){switch(vt){case ed:o.depthFunc(o.NEVER);break;case nd:o.depthFunc(o.ALWAYS);break;case id:o.depthFunc(o.LESS);break;case Br:o.depthFunc(o.LEQUAL);break;case ad:o.depthFunc(o.EQUAL);break;case sd:o.depthFunc(o.GEQUAL);break;case rd:o.depthFunc(o.GREATER);break;case od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=vt}},setLocked:function(vt){W=vt},setClear:function(vt){yt!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),yt=vt)},reset:function(){W=!1,Rt=null,It=null,yt=null,Nt=!1}}}function l(){let W=!1,Nt=null,Rt=null,It=null,yt=null,vt=null,Dt=null,oe=null,Be=null;return{setTest:function(Re){W||(Re?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!W&&(o.stencilMask(Re),Nt=Re)},setFunc:function(Re,Ln,Ai){(Rt!==Re||It!==Ln||yt!==Ai)&&(o.stencilFunc(Re,Ln,Ai),Rt=Re,It=Ln,yt=Ai)},setOp:function(Re,Ln,Ai){(vt!==Re||Dt!==Ln||oe!==Ai)&&(o.stencilOp(Re,Ln,Ai),vt=Re,Dt=Ln,oe=Ai)},setLocked:function(Re){W=Re},setClear:function(Re){Be!==Re&&(o.clearStencil(Re),Be=Re)},reset:function(){W=!1,Nt=null,Rt=null,It=null,yt=null,vt=null,Dt=null,oe=null,Be=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,E=[],R=null,b=!1,y=null,v=null,N=null,O=null,P=null,B=null,H=null,z=new Me(0,0,0),j=0,w=!1,D=null,X=null,at=null,st=null,ht=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(et)[1]),F=G>=1):et.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),F=G>=2);let St=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),gt=new an().fromArray(U),Ct=new an().fromArray(tt);function Ht(W,Nt,Rt,It){const yt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Dt=0;Dt<Rt;Dt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Nt+Dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return vt}const $={};$[o.TEXTURE_2D]=Ht(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Br),re(!1),Et($_),ft(o.CULL_FACE),ge(Fi);function ft(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function wt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Xt(W,Nt){return _[W]!==Nt?(o.bindFramebuffer(W,Nt),_[W]=Nt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Gt(W,Nt){let Rt=E,It=!1;if(W){Rt=S.get(Nt),Rt===void 0&&(Rt=[],S.set(Nt,Rt));const yt=W.textures;if(Rt.length!==yt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Dt=yt.length;vt<Dt;vt++)Rt[vt]=o.COLOR_ATTACHMENT0+vt;Rt.length=yt.length,It=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,It=!0);It&&o.drawBuffers(Rt)}function me(W){return R!==W?(o.useProgram(W),R=W,!0):!1}const Ze={[ws]:o.FUNC_ADD,[oy]:o.FUNC_SUBTRACT,[ly]:o.FUNC_REVERSE_SUBTRACT};Ze[cy]=o.MIN,Ze[uy]=o.MAX;const ve={[fy]:o.ZERO,[hy]:o.ONE,[dy]:o.SRC_COLOR,[$h]:o.SRC_ALPHA,[xy]:o.SRC_ALPHA_SATURATE,[_y]:o.DST_COLOR,[my]:o.DST_ALPHA,[py]:o.ONE_MINUS_SRC_COLOR,[td]:o.ONE_MINUS_SRC_ALPHA,[vy]:o.ONE_MINUS_DST_COLOR,[gy]:o.ONE_MINUS_DST_ALPHA,[Sy]:o.CONSTANT_COLOR,[yy]:o.ONE_MINUS_CONSTANT_COLOR,[My]:o.CONSTANT_ALPHA,[Ey]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Nt,Rt,It,yt,vt,Dt,oe,Be,Re){if(W===Fi){b===!0&&(wt(o.BLEND),b=!1);return}if(b===!1&&(ft(o.BLEND),b=!0),W!==ry){if(W!==y||Re!==w){if((v!==ws||P!==ws)&&(o.blendEquation(o.FUNC_ADD),v=ws,P=ws),Re)switch(W){case Pr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t0:o.blendFunc(o.ONE,o.ONE);break;case e0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case e0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}N=null,O=null,B=null,H=null,z.set(0,0,0),j=0,y=W,w=Re}return}yt=yt||Nt,vt=vt||Rt,Dt=Dt||It,(Nt!==v||yt!==P)&&(o.blendEquationSeparate(Ze[Nt],Ze[yt]),v=Nt,P=yt),(Rt!==N||It!==O||vt!==B||Dt!==H)&&(o.blendFuncSeparate(ve[Rt],ve[It],ve[vt],ve[Dt]),N=Rt,O=It,B=vt,H=Dt),(oe.equals(z)===!1||Be!==j)&&(o.blendColor(oe.r,oe.g,oe.b,Be),z.copy(oe),j=Be),y=W,w=!1}function Ae(W,Nt){W.side===xa?wt(o.CULL_FACE):ft(o.CULL_FACE);let Rt=W.side===Zn;Nt&&(Rt=!Rt),re(Rt),W.blending===Pr&&W.transparent===!1?ge(Fi):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function Et(W){W!==iy?(ft(o.CULL_FACE),W!==X&&(W===$_?o.cullFace(o.BACK):W===ay?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),X=W}function L(W){W!==at&&(F&&o.lineWidth(W),at=W)}function Kt(W,Nt,Rt){W?(ft(o.POLYGON_OFFSET_FILL),(st!==Nt||ht!==Rt)&&(o.polygonOffset(Nt,Rt),st=Nt,ht=Rt)):wt(o.POLYGON_OFFSET_FILL)}function $t(W){W?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function ne(W){W===void 0&&(W=o.TEXTURE0+ut-1),St!==W&&(o.activeTexture(W),St=W)}function bt(W,Nt,Rt){Rt===void 0&&(St===null?Rt=o.TEXTURE0+ut-1:Rt=St);let It=xt[Rt];It===void 0&&(It={type:void 0,texture:void 0},xt[Rt]=It),(It.type!==W||It.texture!==Nt)&&(St!==Rt&&(o.activeTexture(Rt),St=Rt),o.bindTexture(W,Nt||$[W]),It.type=W,It.texture=Nt)}function T(){const W=xt[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function V(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function lt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function mt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Tt(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function zt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Qt(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function At(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Vt(W){Ct.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ct.copy(W))}function Bt(W,Nt){let Rt=p.get(Nt);Rt===void 0&&(Rt=new WeakMap,p.set(Nt,Rt));let It=Rt.get(W);It===void 0&&(It=o.getUniformBlockIndex(Nt,W.name),Rt.set(W,It))}function Ut(W,Nt){const It=p.get(Nt).get(W);m.get(Nt)!==It&&(o.uniformBlockBinding(Nt,It,W.__bindingPointIndex),m.set(Nt,It))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},St=null,xt={},_={},S=new WeakMap,E=[],R=null,b=!1,y=null,v=null,N=null,O=null,P=null,B=null,H=null,z=new Me(0,0,0),j=0,w=!1,D=null,X=null,at=null,st=null,ht=null,gt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:Xt,drawBuffers:Gt,useProgram:me,setBlending:ge,setMaterial:Ae,setFlipSided:re,setCullFace:Et,setLineWidth:L,setPolygonOffset:Kt,setScissorTest:$t,activeTexture:ne,bindTexture:bt,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Qt,texImage3D:Mt,updateUBOMapping:Bt,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:zt,texSubImage2D:lt,texSubImage3D:mt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ot,scissor:At,viewport:Vt,reset:he}}function AA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,x=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(T,M){return E?new OffscreenCanvas(T,M):$c("canvas")}function b(T,M,V){let lt=1;const mt=bt(T);if((mt.width>V||mt.height>V)&&(lt=V/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const rt=Math.floor(lt*mt.width),Ot=Math.floor(lt*mt.height);_===void 0&&(_=R(rt,Ot));const Tt=M?R(rt,Ot):_;return Tt.width=rt,Tt.height=Ot,Tt.getContext("2d").drawImage(T,0,0,rt,Ot),se("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+rt+"x"+Ot+")."),Tt}else return"data"in T&&se("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),T;return T}function y(T){return T.generateMipmaps}function v(T){o.generateMipmap(T)}function N(T){return T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?o.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(T,M,V,lt,mt=!1){if(T!==null){if(o[T]!==void 0)return o[T];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let rt=M;if(M===o.RED&&(V===o.FLOAT&&(rt=o.R32F),V===o.HALF_FLOAT&&(rt=o.R16F),V===o.UNSIGNED_BYTE&&(rt=o.R8)),M===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(rt=o.R8UI),V===o.UNSIGNED_SHORT&&(rt=o.R16UI),V===o.UNSIGNED_INT&&(rt=o.R32UI),V===o.BYTE&&(rt=o.R8I),V===o.SHORT&&(rt=o.R16I),V===o.INT&&(rt=o.R32I)),M===o.RG&&(V===o.FLOAT&&(rt=o.RG32F),V===o.HALF_FLOAT&&(rt=o.RG16F),V===o.UNSIGNED_BYTE&&(rt=o.RG8)),M===o.RG_INTEGER&&(V===o.UNSIGNED_BYTE&&(rt=o.RG8UI),V===o.UNSIGNED_SHORT&&(rt=o.RG16UI),V===o.UNSIGNED_INT&&(rt=o.RG32UI),V===o.BYTE&&(rt=o.RG8I),V===o.SHORT&&(rt=o.RG16I),V===o.INT&&(rt=o.RG32I)),M===o.RGB_INTEGER&&(V===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),V===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),V===o.UNSIGNED_INT&&(rt=o.RGB32UI),V===o.BYTE&&(rt=o.RGB8I),V===o.SHORT&&(rt=o.RGB16I),V===o.INT&&(rt=o.RGB32I)),M===o.RGBA_INTEGER&&(V===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),V===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),V===o.UNSIGNED_INT&&(rt=o.RGBA32UI),V===o.BYTE&&(rt=o.RGBA8I),V===o.SHORT&&(rt=o.RGBA16I),V===o.INT&&(rt=o.RGBA32I)),M===o.RGB&&(V===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),V===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),M===o.RGBA){const Ot=mt?Qc:we.getTransfer(lt);V===o.FLOAT&&(rt=o.RGBA32F),V===o.HALF_FLOAT&&(rt=o.RGBA16F),V===o.UNSIGNED_BYTE&&(rt=Ot===Ve?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function P(T,M){let V;return T?M===null||M===ji||M===$o?V=o.DEPTH24_STENCIL8:M===Xi?V=o.DEPTH32F_STENCIL8:M===Jo&&(V=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ji||M===$o?V=o.DEPTH_COMPONENT24:M===Xi?V=o.DEPTH_COMPONENT32F:M===Jo&&(V=o.DEPTH_COMPONENT16),V}function B(T,M){return y(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function H(T){const M=T.target;M.removeEventListener("dispose",H),j(M),M.isVideoTexture&&x.delete(M)}function z(T){const M=T.target;M.removeEventListener("dispose",z),D(M)}function j(T){const M=s.get(T);if(M.__webglInit===void 0)return;const V=T.source,lt=S.get(V);if(lt){const mt=lt[M.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(T),Object.keys(lt).length===0&&S.delete(V)}s.remove(T)}function w(T){const M=s.get(T);o.deleteTexture(M.__webglTexture);const V=T.source,lt=S.get(V);delete lt[M.__cacheKey],h.memory.textures--}function D(T){const M=s.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),s.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(M.__webglFramebuffer[lt]))for(let mt=0;mt<M.__webglFramebuffer[lt].length;mt++)o.deleteFramebuffer(M.__webglFramebuffer[lt][mt]);else o.deleteFramebuffer(M.__webglFramebuffer[lt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[lt])}else{if(Array.isArray(M.__webglFramebuffer))for(let lt=0;lt<M.__webglFramebuffer.length;lt++)o.deleteFramebuffer(M.__webglFramebuffer[lt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let lt=0;lt<M.__webglColorRenderbuffer.length;lt++)M.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[lt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let lt=0,mt=V.length;lt<mt;lt++){const rt=s.get(V[lt]);rt.__webglTexture&&(o.deleteTexture(rt.__webglTexture),h.memory.textures--),s.remove(V[lt])}s.remove(T)}let X=0;function at(){X=0}function st(){const T=X;return T>=l.maxTextures&&se("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l.maxTextures),X+=1,T}function ht(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ut(T,M){const V=s.get(T);if(T.isVideoTexture&&$t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const lt=T.image;if(lt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,T,M);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+M)}function F(T,M){const V=s.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){$(V,T,M);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+M)}function G(T,M){const V=s.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){$(V,T,M);return}i.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+M)}function et(T,M){const V=s.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&V.__version!==T.version){ft(V,T,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+M)}const St={[ud]:o.REPEAT,[Sa]:o.CLAMP_TO_EDGE,[fd]:o.MIRRORED_REPEAT},xt={[gn]:o.NEAREST,[Ay]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},U={[wy]:o.NEVER,[Oy]:o.ALWAYS,[Dy]:o.LESS,[np]:o.LEQUAL,[Uy]:o.EQUAL,[ip]:o.GEQUAL,[Ly]:o.GREATER,[Ny]:o.NOTEQUAL};function tt(T,M){if(M.type===Xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===xh||M.magFilter===_c||M.magFilter===Us||M.minFilter===zn||M.minFilter===xh||M.minFilter===_c||M.minFilter===Us)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(T,o.TEXTURE_WRAP_S,St[M.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,St[M.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,St[M.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==_c&&M.minFilter!==Us||M.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");o.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function gt(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",H));const lt=M.source;let mt=S.get(lt);mt===void 0&&(mt={},S.set(lt,mt));const rt=ht(M);if(rt!==T.__cacheKey){mt[rt]===void 0&&(mt[rt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,V=!0),mt[rt].usedTimes++;const Ot=mt[T.__cacheKey];Ot!==void 0&&(mt[T.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(M)),T.__cacheKey=rt,T.__webglTexture=mt[rt].texture}return V}function Ct(T,M,V){return Math.floor(Math.floor(T/V)/M)}function Ht(T,M,V,lt){const rt=T.updateRanges;if(rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,V,lt,M.data);else{rt.sort((Mt,At)=>Mt.start-At.start);let Ot=0;for(let Mt=1;Mt<rt.length;Mt++){const At=rt[Ot],Vt=rt[Mt],Bt=At.start+At.count,Ut=Ct(Vt.start,M.width,4),he=Ct(At.start,M.width,4);Vt.start<=Bt+1&&Ut===he&&Ct(Vt.start+Vt.count-1,M.width,4)===Ut?At.count=Math.max(At.count,Vt.start+Vt.count-At.start):(++Ot,rt[Ot]=Vt)}rt.length=Ot+1;const Tt=o.getParameter(o.UNPACK_ROW_LENGTH),zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,At=rt.length;Mt<At;Mt++){const Vt=rt[Mt],Bt=Math.floor(Vt.start/4),Ut=Math.ceil(Vt.count/4),he=Bt%M.width,W=Math.floor(Bt/M.width),Nt=Ut,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,he),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,he,W,Nt,Rt,V,lt,M.data)}T.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Tt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function $(T,M,V){let lt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=o.TEXTURE_3D);const mt=gt(T,M),rt=M.source;i.bindTexture(lt,T.__webglTexture,o.TEXTURE0+V);const Ot=s.get(rt);if(rt.version!==Ot.__version||mt===!0){i.activeTexture(o.TEXTURE0+V);const Tt=we.getPrimaries(we.workingColorSpace),zt=M.colorSpace===ns?null:we.getPrimaries(M.colorSpace),Qt=M.colorSpace===ns||Tt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Mt=b(M.image,!1,l.maxTextureSize);Mt=ne(M,Mt);const At=c.convert(M.format,M.colorSpace),Vt=c.convert(M.type);let Bt=O(M.internalFormat,At,Vt,M.colorSpace,M.isVideoTexture);tt(lt,M);let Ut;const he=M.mipmaps,W=M.isVideoTexture!==!0,Nt=Ot.__version===void 0||mt===!0,Rt=rt.dataReady,It=B(M,Mt);if(M.isDepthTexture)Bt=P(M.format===Ls,M.type),Nt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Bt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,At,Vt,null));else if(M.isDataTexture)if(he.length>0){W&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,he[0].width,he[0].height);for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],W?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,At,Vt,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,At,Vt,Ut.data);M.generateMipmaps=!1}else W?(Nt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,Mt.width,Mt.height),Rt&&Ht(M,Mt,At,Vt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,At,Vt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Bt,he[0].width,he[0].height,Mt.depth);for(let yt=0,vt=he.length;yt<vt;yt++)if(Ut=he[yt],M.format!==Pi)if(At!==null)if(W){if(Rt)if(M.layerUpdates.size>0){const Dt=O0(Ut.width,Ut.height,M.format,M.type);for(const oe of M.layerUpdates){const Be=Ut.data.subarray(oe*Dt/Ut.data.BYTES_PER_ELEMENT,(oe+1)*Dt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,oe,Ut.width,Ut.height,1,At,Be)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,At,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,At,Vt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ut.width,Ut.height,Mt.depth,0,At,Vt,Ut.data)}else{W&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,he[0].width,he[0].height);for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],M.format!==Pi?At!==null?W?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,At,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,At,Vt,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,At,Vt,Ut.data)}else if(M.isDataArrayTexture)if(W){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Bt,Mt.width,Mt.height,Mt.depth),Rt)if(M.layerUpdates.size>0){const yt=O0(Mt.width,Mt.height,M.format,M.type);for(const vt of M.layerUpdates){const Dt=Mt.data.subarray(vt*yt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,At,Vt,Dt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Vt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Mt.width,Mt.height,Mt.depth,0,At,Vt,Mt.data);else if(M.isData3DTexture)W?(Nt&&i.texStorage3D(o.TEXTURE_3D,It,Bt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Vt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Mt.width,Mt.height,Mt.depth,0,At,Vt,Mt.data);else if(M.isFramebufferTexture){if(Nt)if(W)i.texStorage2D(o.TEXTURE_2D,It,Bt,Mt.width,Mt.height);else{let yt=Mt.width,vt=Mt.height;for(let Dt=0;Dt<It;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Bt,yt,vt,0,At,Vt,null),yt>>=1,vt>>=1}}else if(he.length>0){if(W&&Nt){const yt=bt(he[0]);i.texStorage2D(o.TEXTURE_2D,It,Bt,yt.width,yt.height)}for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],W?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,At,Vt,Ut):i.texImage2D(o.TEXTURE_2D,yt,Bt,At,Vt,Ut);M.generateMipmaps=!1}else if(W){if(Nt){const yt=bt(Mt);i.texStorage2D(o.TEXTURE_2D,It,Bt,yt.width,yt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At,Vt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,At,Vt,Mt);y(M)&&v(lt),Ot.__version=rt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ft(T,M,V){if(M.image.length!==6)return;const lt=gt(T,M),mt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+V);const rt=s.get(mt);if(mt.version!==rt.__version||lt===!0){i.activeTexture(o.TEXTURE0+V);const Ot=we.getPrimaries(we.workingColorSpace),Tt=M.colorSpace===ns?null:we.getPrimaries(M.colorSpace),zt=M.colorSpace===ns||Ot===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Qt=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,At=[];for(let vt=0;vt<6;vt++)!Qt&&!Mt?At[vt]=b(M.image[vt],!0,l.maxCubemapSize):At[vt]=Mt?M.image[vt].image:M.image[vt],At[vt]=ne(M,At[vt]);const Vt=At[0],Bt=c.convert(M.format,M.colorSpace),Ut=c.convert(M.type),he=O(M.internalFormat,Bt,Ut,M.colorSpace),W=M.isVideoTexture!==!0,Nt=rt.__version===void 0||lt===!0,Rt=mt.dataReady;let It=B(M,Vt);tt(o.TEXTURE_CUBE_MAP,M);let yt;if(Qt){W&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,he,Vt.width,Vt.height);for(let vt=0;vt<6;vt++){yt=At[vt].mipmaps;for(let Dt=0;Dt<yt.length;Dt++){const oe=yt[Dt];M.format!==Pi?Bt!==null?W?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,oe.width,oe.height,Bt,oe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,he,oe.width,oe.height,0,oe.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,oe.width,oe.height,Bt,Ut,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,he,oe.width,oe.height,0,Bt,Ut,oe.data)}}}else{if(yt=M.mipmaps,W&&Nt){yt.length>0&&It++;const vt=bt(At[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,he,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,At[vt].width,At[vt].height,Bt,Ut,At[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,At[vt].width,At[vt].height,0,Bt,Ut,At[vt].data);for(let Dt=0;Dt<yt.length;Dt++){const Be=yt[Dt].image[vt].image;W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Be.width,Be.height,Bt,Ut,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,he,Be.width,Be.height,0,Bt,Ut,Be.data)}}else{W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,Ut,At[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Bt,Ut,At[vt]);for(let Dt=0;Dt<yt.length;Dt++){const oe=yt[Dt];W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Bt,Ut,oe.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,he,Bt,Ut,oe.image[vt])}}}y(M)&&v(o.TEXTURE_CUBE_MAP),rt.__version=mt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function wt(T,M,V,lt,mt,rt){const Ot=c.convert(V.format,V.colorSpace),Tt=c.convert(V.type),zt=O(V.internalFormat,Ot,Tt,V.colorSpace),Qt=s.get(M),Mt=s.get(V);if(Mt.__renderTarget=M,!Qt.__hasExternalTextures){const At=Math.max(1,M.width>>rt),Vt=Math.max(1,M.height>>rt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,rt,zt,At,Vt,M.depth,0,Ot,Tt,null):i.texImage2D(mt,rt,zt,At,Vt,0,Ot,Tt,null)}i.bindFramebuffer(o.FRAMEBUFFER,T),Kt(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,mt,Mt.__webglTexture,0,L(M)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,mt,Mt.__webglTexture,rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(T,M,V){if(o.bindRenderbuffer(o.RENDERBUFFER,T),M.depthBuffer){const lt=M.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,rt=P(M.stencilBuffer,mt),Ot=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Kt(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,L(M),rt,M.width,M.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,L(M),rt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,rt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,T)}else{const lt=M.textures;for(let mt=0;mt<lt.length;mt++){const rt=lt[mt],Ot=c.convert(rt.format,rt.colorSpace),Tt=c.convert(rt.type),zt=O(rt.internalFormat,Ot,Tt,rt.colorSpace);Kt(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,L(M),zt,M.width,M.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,L(M),zt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,zt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(T,M,V){const lt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(M.depthTexture);if(mt.__renderTarget=M,(!mt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),lt){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),mt.__webglTexture===void 0){mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Qt=c.convert(M.depthTexture.format),Mt=c.convert(M.depthTexture.type);let At;M.depthTexture.format===Ma?At=o.DEPTH_COMPONENT24:M.depthTexture.format===Ls&&(At=o.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,At,M.width,M.height,0,Qt,Mt,null)}}else ut(M.depthTexture,0);const rt=mt.__webglTexture,Ot=L(M),Tt=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+V:o.TEXTURE_2D,zt=M.depthTexture.format===Ls?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ma)Kt(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Tt,rt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,zt,Tt,rt,0);else if(M.depthTexture.format===Ls)Kt(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Tt,rt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,zt,Tt,rt,0);else throw new Error("Unknown depthTexture format")}function me(T){const M=s.get(T),V=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const lt=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){const mt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),M.__depthDisposeCallback=mt}M.__boundDepthTexture=lt}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let lt=0;lt<6;lt++)Gt(M.__webglFramebuffer[lt],T,lt);else{const lt=T.texture.mipmaps;lt&&lt.length>0?Gt(M.__webglFramebuffer[0],T,0):Gt(M.__webglFramebuffer,T,0)}else if(V){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=o.createRenderbuffer(),Xt(M.__webglDepthbuffer[lt],T,!1);else{const mt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,rt)}}else{const lt=T.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Xt(M.__webglDepthbuffer,T,!1);else{const mt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(T,M,V){const lt=s.get(T);M!==void 0&&wt(lt.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&me(T)}function ve(T){const M=T.texture,V=s.get(T),lt=s.get(M);T.addEventListener("dispose",z);const mt=T.textures,rt=T.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=M.version,h.memory.textures++),rt){V.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[Tt]=[];for(let zt=0;zt<M.mipmaps.length;zt++)V.__webglFramebuffer[Tt][zt]=o.createFramebuffer()}else V.__webglFramebuffer[Tt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)V.__webglFramebuffer[Tt]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Tt=0,zt=mt.length;Tt<zt;Tt++){const Qt=s.get(mt[Tt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(T.samples>0&&Kt(T)===!1){V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Tt=0;Tt<mt.length;Tt++){const zt=mt[Tt];V.__webglColorRenderbuffer[Tt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[Tt]);const Qt=c.convert(zt.format,zt.colorSpace),Mt=c.convert(zt.type),At=O(zt.internalFormat,Qt,Mt,zt.colorSpace,T.isXRRenderTarget===!0),Vt=L(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,At,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,V.__webglColorRenderbuffer[Tt])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(V.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(rt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M);for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0)for(let zt=0;zt<M.mipmaps.length;zt++)wt(V.__webglFramebuffer[Tt][zt],T,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,zt);else wt(V.__webglFramebuffer[Tt],T,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);y(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Tt=0,zt=mt.length;Tt<zt;Tt++){const Qt=mt[Tt],Mt=s.get(Qt);let At=o.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(At=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,Mt.__webglTexture),tt(At,Qt),wt(V.__webglFramebuffer,T,Qt,o.COLOR_ATTACHMENT0+Tt,At,0),y(Qt)&&v(At)}i.unbindTexture()}else{let Tt=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Tt=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,lt.__webglTexture),tt(Tt,M),M.mipmaps&&M.mipmaps.length>0)for(let zt=0;zt<M.mipmaps.length;zt++)wt(V.__webglFramebuffer[zt],T,M,o.COLOR_ATTACHMENT0,Tt,zt);else wt(V.__webglFramebuffer,T,M,o.COLOR_ATTACHMENT0,Tt,0);y(M)&&v(Tt),i.unbindTexture()}T.depthBuffer&&me(T)}function ge(T){const M=T.textures;for(let V=0,lt=M.length;V<lt;V++){const mt=M[V];if(y(mt)){const rt=N(T),Ot=s.get(mt).__webglTexture;i.bindTexture(rt,Ot),v(rt),i.unbindTexture()}}}const Ae=[],re=[];function Et(T){if(T.samples>0){if(Kt(T)===!1){const M=T.textures,V=T.width,lt=T.height;let mt=o.COLOR_BUFFER_BIT;const rt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(T),Tt=M.length>1;if(Tt)for(let Qt=0;Qt<M.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const zt=T.texture.mipmaps;zt&&zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Qt=0;Qt<M.length;Qt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Tt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Qt]);const Mt=s.get(M[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,V,lt,0,0,V,lt,mt,o.NEAREST),m===!0&&(Ae.length=0,re.length=0,Ae.push(o.COLOR_ATTACHMENT0+Qt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ae.push(rt),re.push(rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Tt)for(let Qt=0;Qt<M.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Qt]);const Mt=s.get(M[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&m){const M=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function L(T){return Math.min(l.maxSamples,T.samples)}function Kt(T){const M=s.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $t(T){const M=h.render.frame;x.get(T)!==M&&(x.set(T,M),T.update())}function ne(T,M){const V=T.colorSpace,lt=T.format,mt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Gr&&V!==ns&&(we.getTransfer(V)===Ve?(lt!==Pi||mt!==li)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",V)),M}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(p.width=T.naturalWidth||T.width,p.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(p.width=T.displayWidth,p.height=T.displayHeight):(p.width=T.width,p.height=T.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=at,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=et,this.rebindTextures=Ze,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function RA(o,t){function i(s,l=ns){let c;const h=we.getTransfer(l);if(s===li)return o.UNSIGNED_BYTE;if(s===Qd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===vv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===xv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===gv)return o.BYTE;if(s===_v)return o.SHORT;if(s===Jo)return o.UNSIGNED_SHORT;if(s===Kd)return o.INT;if(s===ji)return o.UNSIGNED_INT;if(s===Xi)return o.FLOAT;if(s===Ei)return o.HALF_FLOAT;if(s===Sv)return o.ALPHA;if(s===yv)return o.RGB;if(s===Pi)return o.RGBA;if(s===Ma)return o.DEPTH_COMPONENT;if(s===Ls)return o.DEPTH_STENCIL;if(s===Mv)return o.RED;if(s===$d)return o.RED_INTEGER;if(s===Hr)return o.RG;if(s===tp)return o.RG_INTEGER;if(s===ep)return o.RGBA_INTEGER;if(s===Wc||s===qc||s===Yc||s===jc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===_d)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xd)return c.COMPRESSED_R11_EAC;if(s===Sd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===yd)return c.COMPRESSED_RG11_EAC;if(s===Md)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zd||s===Bd||s===Id)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===zd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ov(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qn({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new al(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends Ps{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,_=null,S=null,E=null,R=null;const b=typeof XRWebGLBinding<"u",y=new DA,v={},N=i.getContextAttributes();let O=null,P=null;const B=[],H=[],z=new ce;let j=null;const w=new oi;w.viewport=new an;const D=new oi;D.viewport=new an;const X=[w,D],at=new IM;let st=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ft=B[$];return ft===void 0&&(ft=new Hh,B[$]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function($){let ft=B[$];return ft===void 0&&(ft=new Hh,B[$]=ft),ft.getGripSpace()},this.getHand=function($){let ft=B[$];return ft===void 0&&(ft=new Hh,B[$]=ft),ft.getHandSpace()};function ut($){const ft=H.indexOf($.inputSource);if(ft===-1)return;const wt=B[ft];wt!==void 0&&(wt.update($.inputSource,$.frame,p||h),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let $=0;$<B.length;$++){const ft=H[$];ft!==null&&(H[$]=null,B[$].disconnect(ft))}st=null,ht=null,y.reset();for(const $ in v)delete v[$];t.setRenderTarget(O),E=null,S=null,_=null,l=null,P=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),N.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Xt=null,Gt=null;N.depth&&(Gt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=N.stencil?Ls:Ma,Xt=N.stencil?$o:ji);const me={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(me),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new ci(S.textureWidth,S.textureHeight,{format:Pi,type:li,depthTexture:new nl(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new ci(E.framebufferWidth,E.framebufferHeight,{format:Pi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G($){for(let ft=0;ft<$.removed.length;ft++){const wt=$.removed[ft],Xt=H.indexOf(wt);Xt>=0&&(H[Xt]=null,B[Xt].disconnect(wt))}for(let ft=0;ft<$.added.length;ft++){const wt=$.added[ft];let Xt=H.indexOf(wt);if(Xt===-1){for(let me=0;me<B.length;me++)if(me>=H.length){H.push(wt),Xt=me;break}else if(H[me]===null){H[me]=wt,Xt=me;break}if(Xt===-1)break}const Gt=B[Xt];Gt&&Gt.connect(wt)}}const et=new Z,St=new Z;function xt($,ft,wt){et.setFromMatrixPosition(ft.matrixWorld),St.setFromMatrixPosition(wt.matrixWorld);const Xt=et.distanceTo(St),Gt=ft.projectionMatrix.elements,me=wt.projectionMatrix.elements,Ze=Gt[14]/(Gt[10]-1),ve=Gt[14]/(Gt[10]+1),ge=(Gt[9]+1)/Gt[5],Ae=(Gt[9]-1)/Gt[5],re=(Gt[8]-1)/Gt[0],Et=(me[8]+1)/me[0],L=Ze*re,Kt=Ze*Et,$t=Xt/(-re+Et),ne=$t*-re;if(ft.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ($t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Gt[10]===-1)$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const bt=Ze+$t,T=ve+$t,M=L-ne,V=Kt+(Xt-ne),lt=ge*ve/T*bt,mt=Ae*ve/T*bt;$.projectionMatrix.makePerspective(M,V,lt,mt,bt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,ft){ft===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ft.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ft=$.near,wt=$.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),at.near=D.near=w.near=ft,at.far=D.far=w.far=wt,(st!==at.near||ht!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),st=at.near,ht=at.far),at.layers.mask=$.layers.mask|6,w.layers.mask=at.layers.mask&3,D.layers.mask=at.layers.mask&5;const Xt=$.parent,Gt=at.cameras;U(at,Xt);for(let me=0;me<Gt.length;me++)U(Gt[me],Xt);Gt.length===2?xt(at,w,D):at.projectionMatrix.copy(w.projectionMatrix),tt($,at,Xt)};function tt($,ft,wt){wt===null?$.matrix.copy(ft.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ft.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=el*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function($){return v[$]};let gt=null;function Ct($,ft){if(x=ft.getViewerPose(p||h),R=ft,x!==null){const wt=x.views;E!==null&&(t.setRenderTargetFramebuffer(P,E.framebuffer),t.setRenderTarget(P));let Xt=!1;wt.length!==at.cameras.length&&(at.cameras.length=0,Xt=!0);for(let ve=0;ve<wt.length;ve++){const ge=wt[ve];let Ae=null;if(E!==null)Ae=E.getViewport(ge);else{const Et=_.getViewSubImage(S,ge);Ae=Et.viewport,ve===0&&(t.setRenderTargetTextures(P,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(P))}let re=X[ve];re===void 0&&(re=new oi,re.layers.enable(ve),re.viewport=new an,X[ve]=re),re.matrix.fromArray(ge.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ge.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ve===0&&(at.matrix.copy(re.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Xt===!0&&at.cameras.push(re)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const ve=_.getDepthInformation(wt[0]);ve&&ve.isValid&&ve.texture&&y.init(ve,l.renderState)}if(Gt&&Gt.includes("camera-access")&&b){t.state.unbindTexture(),_=s.getBinding();for(let ve=0;ve<wt.length;ve++){const ge=wt[ve].camera;if(ge){let Ae=v[ge];Ae||(Ae=new Ov,v[ge]=Ae);const re=_.getCameraImage(ge);Ae.sourceTexture=re}}}}for(let wt=0;wt<B.length;wt++){const Xt=H[wt],Gt=B[wt];Xt!==null&&Gt!==void 0&&Gt.update(Xt,ft,p||h)}gt&&gt($,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),R=null}const Ht=new zv;Ht.setAnimationLoop(Ct),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}}const Cs=new Zi,LA=new tn;function NA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,wv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,N,O,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&E(y,v,P)):v.isMeshMatcapMaterial?(c(y,v),R(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),b(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,N,O):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=t.get(v),O=N.envMap,P=N.envMapRotation;O&&(y.envMap.value=O,Cs.copy(P),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),y.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Cs)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,N,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,v){v.matcap&&(y.matcap.value=v.matcap)}function b(y,v){const N=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const P=O.program;s.uniformBlockBinding(N,P)}function p(N,O){let P=l[N.id];P===void 0&&(R(N),P=x(N),l[N.id]=P,N.addEventListener("dispose",y));const B=O.program;s.updateUBOMapping(N,B);const H=t.render.frame;c[N.id]!==H&&(S(N),c[N.id]=H)}function x(N){const O=_();N.__bindingPointIndex=O;const P=o.createBuffer(),B=N.__size,H=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,P),P}function _(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const O=l[N.id],P=N.uniforms,B=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,z=P.length;H<z;H++){const j=Array.isArray(P[H])?P[H]:[P[H]];for(let w=0,D=j.length;w<D;w++){const X=j[w];if(E(X,H,w,B)===!0){const at=X.__offset,st=Array.isArray(X.value)?X.value:[X.value];let ht=0;for(let ut=0;ut<st.length;ut++){const F=st[ut],G=b(F);typeof F=="number"||typeof F=="boolean"?(X.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,at+ht,X.__data)):F.isMatrix3?(X.__data[0]=F.elements[0],X.__data[1]=F.elements[1],X.__data[2]=F.elements[2],X.__data[3]=0,X.__data[4]=F.elements[3],X.__data[5]=F.elements[4],X.__data[6]=F.elements[5],X.__data[7]=0,X.__data[8]=F.elements[6],X.__data[9]=F.elements[7],X.__data[10]=F.elements[8],X.__data[11]=0):(F.toArray(X.__data,ht),ht+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(N,O,P,B){const H=N.value,z=O+"_"+P;if(B[z]===void 0)return typeof H=="number"||typeof H=="boolean"?B[z]=H:B[z]=H.clone(),!0;{const j=B[z];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return B[z]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function R(N){const O=N.uniforms;let P=0;const B=16;for(let z=0,j=O.length;z<j;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let D=0,X=w.length;D<X;D++){const at=w[D],st=Array.isArray(at.value)?at.value:[at.value];for(let ht=0,ut=st.length;ht<ut;ht++){const F=st[ht],G=b(F),et=P%B,St=et%G.boundary,xt=et+St;P+=St,xt!==0&&B-xt<G.storage&&(P+=B-xt),at.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=P,P+=G.storage}}}const H=P%B;return H>0&&(P+=B-H),N.__size=P,N.__cache={},this}function b(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",N),O}function y(N){const O=N.target;O.removeEventListener("dispose",y);const P=h.indexOf(O.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function FA(){return Vi===null&&(Vi=new MM(PA,16,16,Hr,Ei),Vi.name="DFG_LUT",Vi.minFilter=zn,Vi.magFilter=zn,Vi.wrapS=Sa,Vi.wrapT=Sa,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class zA{constructor(t={}){const{canvas:i=Py(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=li}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const b=E,y=new Set([ep,tp,$d]),v=new Set([li,ji,Jo,$o,Qd,Jd]),N=new Uint32Array(4),O=new Int32Array(4);let P=null,B=null;const H=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1;this._outputColorSpace=yi;let X=0,at=0,st=null,ht=-1,ut=null;const F=new an,G=new an;let et=null;const St=new Me(0);let xt=0,U=i.width,tt=i.height,gt=1,Ct=null,Ht=null;const $=new an(0,0,U,tt),ft=new an(0,0,U,tt);let wt=!1;const Xt=new lp;let Gt=!1,me=!1;const Ze=new tn,ve=new Z,ge=new an,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Et(){return st===null?gt:1}let L=s;function Kt(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",oe,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",Re,!1),L===null){const q="webgl2";if(L=Kt(q,C),L===null)throw Kt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ce("WebGLRenderer: "+C.message),C}let $t,ne,bt,T,M,V,lt,mt,rt,Ot,Tt,zt,Qt,Mt,At,Vt,Bt,Ut,he,W,Nt,Rt,It,yt;function vt(){$t=new FT(L),$t.init(),Rt=new RA(L,$t),ne=new RT(L,$t,t,Rt),bt=new TA(L,$t),ne.reversedDepthBuffer&&S&&bt.buffers.depth.setReversed(!0),T=new IT(L),M=new uA,V=new AA(L,$t,bt,M,ne,Rt,T),lt=new wT(w),mt=new PT(w),rt=new kM(L),It=new TT(L,rt),Ot=new zT(L,rt,T,It),Tt=new GT(L,Ot,rt,T),he=new HT(L,ne,V),Vt=new CT(M),zt=new cA(w,lt,mt,$t,ne,It,Vt),Qt=new NA(w,M),Mt=new hA,At=new vA($t),Ut=new bT(w,lt,mt,bt,Tt,R,m),Bt=new EA(w,Tt,ne),yt=new OA(L,T,ne,bt),W=new AT(L,$t,T),Nt=new BT(L,$t,T),T.programs=zt.programs,w.capabilities=ne,w.extensions=$t,w.properties=M,w.renderLists=Mt,w.shadowMap=Bt,w.state=bt,w.info=T}vt(),b!==li&&(j=new kT(b,i.width,i.height,l,c));const Dt=new UA(w,L);this.xr=Dt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=$t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(U,tt,!1))},this.getSize=function(C){return C.set(U,tt)},this.setSize=function(C,q,ot=!0){if(Dt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,tt=q,i.width=Math.floor(C*gt),i.height=Math.floor(q*gt),ot===!0&&(i.style.width=C+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(U*gt,tt*gt).floor()},this.setDrawingBufferSize=function(C,q,ot){U=C,tt=q,gt=ot,i.width=Math.floor(C*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(b===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,q,ot,nt){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,q,ot,nt),bt.viewport(F.copy($).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,q,ot,nt){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,q,ot,nt),bt.scissor(G.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){bt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){Ct=C},this.setTransparentSort=function(C){Ht=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ot=!0){let nt=0;if(C){let K=!1;if(st!==null){const Lt=st.texture.format;K=y.has(Lt)}if(K){const Lt=st.texture.type,kt=v.has(Lt),Pt=Ut.getClearColor(),Wt=Ut.getClearAlpha(),Yt=Pt.r,ee=Pt.g,jt=Pt.b;kt?(N[0]=Yt,N[1]=ee,N[2]=jt,N[3]=Wt,L.clearBufferuiv(L.COLOR,0,N)):(O[0]=Yt,O[1]=ee,O[2]=jt,O[3]=Wt,L.clearBufferiv(L.COLOR,0,O))}else nt|=L.COLOR_BUFFER_BIT}q&&(nt|=L.DEPTH_BUFFER_BIT),ot&&(nt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",oe,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Ut.dispose(),Mt.dispose(),At.dispose(),M.dispose(),lt.dispose(),mt.dispose(),Tt.dispose(),It.dispose(),yt.dispose(),zt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",zs),Dt.removeEventListener("sessionend",Zr),zi.stop()};function oe(C){C.preventDefault(),o0("WebGLRenderer: Context Lost."),D=!0}function Be(){o0("WebGLRenderer: Context Restored."),D=!1;const C=T.autoReset,q=Bt.enabled,ot=Bt.autoUpdate,nt=Bt.needsUpdate,K=Bt.type;vt(),T.autoReset=C,Bt.enabled=q,Bt.autoUpdate=ot,Bt.needsUpdate=nt,Bt.type=K}function Re(C){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const q=C.target;q.removeEventListener("dispose",Ln),Ai(q)}function Ai(C){rl(C),M.remove(C)}function rl(C){const q=M.get(C).programs;q!==void 0&&(q.forEach(function(ot){zt.releaseProgram(ot)}),C.isShaderMaterial&&zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ot,nt,K,Lt){q===null&&(q=Ae);const kt=K.isMesh&&K.matrixWorld.determinant()<0,Pt=ss(C,q,ot,nt,K);bt.setMaterial(nt,kt);let Wt=ot.index,Yt=1;if(nt.wireframe===!0){if(Wt=Ot.getWireframeAttribute(ot),Wt===void 0)return;Yt=2}const ee=ot.drawRange,jt=ot.attributes.position;let ie=ee.start*Yt,Ne=(ee.start+ee.count)*Yt;Lt!==null&&(ie=Math.max(ie,Lt.start*Yt),Ne=Math.min(Ne,(Lt.start+Lt.count)*Yt)),Wt!==null?(ie=Math.max(ie,0),Ne=Math.min(Ne,Wt.count)):jt!=null&&(ie=Math.max(ie,0),Ne=Math.min(Ne,jt.count));const Je=Ne-ie;if(Je<0||Je===1/0)return;It.setup(K,nt,Pt,ot,Wt);let je,Fe=W;if(Wt!==null&&(je=rt.get(Wt),Fe=Nt,Fe.setIndex(je)),K.isMesh)nt.wireframe===!0?(bt.setLineWidth(nt.wireframeLinewidth*Et()),Fe.setMode(L.LINES)):Fe.setMode(L.TRIANGLES);else if(K.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),bt.setLineWidth(Jt*Et()),K.isLineSegments?Fe.setMode(L.LINES):K.isLineLoop?Fe.setMode(L.LINE_LOOP):Fe.setMode(L.LINE_STRIP)}else K.isPoints?Fe.setMode(L.POINTS):K.isSprite&&Fe.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Oe=K._multiDrawCounts,le=K._multiDrawCount,Mn=Wt?rt.get(Wt).bytesPerElement:1,Ki=M.get(nt).currentProgram.getUniforms();for(let En=0;En<le;En++)Ki.setValue(L,"_gl_DrawID",En),Fe.render(Jt[En]/Mn,Oe[En])}else if(K.isInstancedMesh)Fe.renderInstances(ie,Je,K.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Oe=Math.min(ot.instanceCount,Jt);Fe.renderInstances(ie,Je,Oe)}else Fe.render(ie,Je)};function Yr(C,q,ot){C.transparent===!0&&C.side===xa&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Is(C,q,ot),C.side=as,C.needsUpdate=!0,Is(C,q,ot),C.side=xa):Is(C,q,ot)}this.compile=function(C,q,ot=null){ot===null&&(ot=C),B=At.get(ot),B.init(q),z.push(B),ot.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),C!==ot&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),B.setupLights();const nt=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Lt=K.material;if(Lt)if(Array.isArray(Lt))for(let kt=0;kt<Lt.length;kt++){const Pt=Lt[kt];Yr(Pt,ot,K),nt.add(Pt)}else Yr(Lt,ot,K),nt.add(Lt)}),B=z.pop(),nt},this.compileAsync=function(C,q,ot=null){const nt=this.compile(C,q,ot);return new Promise(K=>{function Lt(){if(nt.forEach(function(kt){M.get(kt).currentProgram.isReady()&&nt.delete(kt)}),nt.size===0){K(C);return}setTimeout(Lt,10)}$t.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Fs=null;function jr(C){Fs&&Fs(C)}function zs(){zi.stop()}function Zr(){zi.start()}const zi=new zv;zi.setAnimationLoop(jr),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){Fs=C,Dt.setAnimationLoop(C),C===null?zi.stop():zi.start()},Dt.addEventListener("sessionstart",zs),Dt.addEventListener("sessionend",Zr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ot=Dt.enabled===!0&&Dt.isPresenting===!0,nt=j!==null&&(st===null||ot)&&j.begin(w,st);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,st),B=At.get(C,z.length),B.init(q),z.push(B),Ze.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xt.setFromProjectionMatrix(Ze,Wi,q.reversedDepth),me=this.localClippingEnabled,Gt=Vt.init(this.clippingPlanes,me),P=Mt.get(C,H.length),P.init(),H.push(P),Dt.enabled===!0&&Dt.isPresenting===!0){const kt=w.xr.getDepthSensingMesh();kt!==null&&ui(kt,q,-1/0,w.sortObjects)}ui(C,q,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Ct,Ht),re=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,re&&Ut.addToRenderList(P,C),this.info.render.frame++,Gt===!0&&Vt.beginShadows();const K=B.state.shadowsArray;if(Bt.render(K,C,q),Gt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&j.hasRenderPass())===!1){const kt=P.opaque,Pt=P.transmissive;if(B.setupLights(),q.isArrayCamera){const Wt=q.cameras;if(Pt.length>0)for(let Yt=0,ee=Wt.length;Yt<ee;Yt++){const jt=Wt[Yt];yn(kt,Pt,C,jt)}re&&Ut.render(C);for(let Yt=0,ee=Wt.length;Yt<ee;Yt++){const jt=Wt[Yt];on(P,C,jt,jt.viewport)}}else Pt.length>0&&yn(kt,Pt,C,q),re&&Ut.render(C),on(P,C,q)}st!==null&&at===0&&(V.updateMultisampleRenderTarget(st),V.updateRenderTargetMipmap(st)),nt&&j.end(w),C.isScene===!0&&C.onAfterRender(w,C,q),It.resetDefaultState(),ht=-1,ut=null,z.pop(),z.length>0?(B=z[z.length-1],Gt===!0&&Vt.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?P=H[H.length-1]:P=null};function ui(C,q,ot,nt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xt.intersectsSprite(C)){nt&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ze);const kt=Tt.update(C),Pt=C.material;Pt.visible&&P.push(C,kt,Pt,ot,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xt.intersectsObject(C))){const kt=Tt.update(C),Pt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ge.copy(kt.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(Ze)),Array.isArray(Pt)){const Wt=kt.groups;for(let Yt=0,ee=Wt.length;Yt<ee;Yt++){const jt=Wt[Yt],ie=Pt[jt.materialIndex];ie&&ie.visible&&P.push(C,kt,ie,ot,ge.z,jt)}}else Pt.visible&&P.push(C,kt,Pt,ot,ge.z,null)}}const Lt=C.children;for(let kt=0,Pt=Lt.length;kt<Pt;kt++)ui(Lt[kt],q,ot,nt)}function on(C,q,ot,nt){const{opaque:K,transmissive:Lt,transparent:kt}=C;B.setupLightsView(ot),Gt===!0&&Vt.setGlobalState(w.clippingPlanes,ot),nt&&bt.viewport(F.copy(nt)),K.length>0&&Ri(K,q,ot),Lt.length>0&&Ri(Lt,q,ot),kt.length>0&&Ri(kt,q,ot),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function yn(C,q,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[nt.id]===void 0){const ie=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[nt.id]=new ci(1,1,{generateMipmaps:!0,type:ie?Ei:li,minFilter:Us,samples:ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Lt=B.state.transmissionRenderTarget[nt.id],kt=nt.viewport||F;Lt.setSize(kt.z*w.transmissionResolutionScale,kt.w*w.transmissionResolutionScale);const Pt=w.getRenderTarget(),Wt=w.getActiveCubeFace(),Yt=w.getActiveMipmapLevel();w.setRenderTarget(Lt),w.getClearColor(St),xt=w.getClearAlpha(),xt<1&&w.setClearColor(16777215,.5),w.clear(),re&&Ut.render(ot);const ee=w.toneMapping;w.toneMapping=qi;const jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),B.setupLightsView(nt),Gt===!0&&Vt.setGlobalState(w.clippingPlanes,nt),Ri(C,ot,nt),V.updateMultisampleRenderTarget(Lt),V.updateRenderTargetMipmap(Lt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ne=0,Je=q.length;Ne<Je;Ne++){const je=q[Ne],{object:Fe,geometry:Jt,material:Oe,group:le}=je;if(Oe.side===xa&&Fe.layers.test(nt.layers)){const Mn=Oe.side;Oe.side=Zn,Oe.needsUpdate=!0,Bs(Fe,ot,nt,Jt,Oe,le),Oe.side=Mn,Oe.needsUpdate=!0,ie=!0}}ie===!0&&(V.updateMultisampleRenderTarget(Lt),V.updateRenderTargetMipmap(Lt))}w.setRenderTarget(Pt,Wt,Yt),w.setClearColor(St,xt),jt!==void 0&&(nt.viewport=jt),w.toneMapping=ee}function Ri(C,q,ot){const nt=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Lt=C.length;K<Lt;K++){const kt=C[K],{object:Pt,geometry:Wt,group:Yt}=kt;let ee=kt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Pt.layers.test(ot.layers)&&Bs(Pt,q,ot,Wt,ee,Yt)}}function Bs(C,q,ot,nt,K,Lt){C.onBeforeRender(w,q,ot,nt,K,Lt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,q,ot,nt,C,Lt),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,w.renderBufferDirect(ot,q,nt,K,C,Lt),K.side=as,K.needsUpdate=!0,w.renderBufferDirect(ot,q,nt,K,C,Lt),K.side=xa):w.renderBufferDirect(ot,q,nt,K,C,Lt),C.onAfterRender(w,q,ot,nt,K,Lt)}function Is(C,q,ot){q.isScene!==!0&&(q=Ae);const nt=M.get(C),K=B.state.lights,Lt=B.state.shadowsArray,kt=K.state.version,Pt=zt.getParameters(C,K.state,Lt,q,ot),Wt=zt.getProgramCacheKey(Pt);let Yt=nt.programs;nt.environment=C.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(C.isMeshStandardMaterial?mt:lt).get(C.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",Ln),Yt=new Map,nt.programs=Yt);let ee=Yt.get(Wt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===kt)return Kr(C,Pt),ee}else Pt.uniforms=zt.getUniforms(C),C.onBeforeCompile(Pt,w),ee=zt.acquireProgram(Pt,Wt),Yt.set(Wt,ee),nt.uniforms=Pt.uniforms;const jt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=Vt.uniform),Kr(C,Pt),nt.needsLights=Ea(C),nt.lightsStateVersion=kt,nt.needsLights&&(jt.ambientLightColor.value=K.state.ambient,jt.lightProbe.value=K.state.probe,jt.directionalLights.value=K.state.directional,jt.directionalLightShadows.value=K.state.directionalShadow,jt.spotLights.value=K.state.spot,jt.spotLightShadows.value=K.state.spotShadow,jt.rectAreaLights.value=K.state.rectArea,jt.ltc_1.value=K.state.rectAreaLTC1,jt.ltc_2.value=K.state.rectAreaLTC2,jt.pointLights.value=K.state.point,jt.pointLightShadows.value=K.state.pointShadow,jt.hemisphereLights.value=K.state.hemi,jt.directionalShadowMap.value=K.state.directionalShadowMap,jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,jt.spotShadowMap.value=K.state.spotShadowMap,jt.spotLightMatrix.value=K.state.spotLightMatrix,jt.spotLightMap.value=K.state.spotLightMap,jt.pointShadowMap.value=K.state.pointShadowMap,jt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function ol(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Kr(C,q){const ot=M.get(C);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function ss(C,q,ot,nt,K){q.isScene!==!0&&(q=Ae),V.resetTextureUnits();const Lt=q.fog,kt=nt.isMeshStandardMaterial?q.environment:null,Pt=st===null?w.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Gr,Wt=(nt.isMeshStandardMaterial?mt:lt).get(nt.envMap||kt),Yt=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),jt=!!ot.morphAttributes.position,ie=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let Je=qi;nt.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Je=w.toneMapping);const je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=je!==void 0?je.length:0,Jt=M.get(nt),Oe=B.state.lights;if(Gt===!0&&(me===!0||C!==ut)){const Tn=C===ut&&nt.id===ht;Vt.setState(nt,C,Tn)}let le=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Oe.state.version||Jt.outputColorSpace!==Pt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Wt||nt.fog===!0&&Jt.fog!==Lt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Vt.numPlanes||Jt.numIntersection!==Vt.numIntersection)||Jt.vertexAlphas!==Yt||Jt.vertexTangents!==ee||Jt.morphTargets!==jt||Jt.morphNormals!==ie||Jt.morphColors!==Ne||Jt.toneMapping!==Je||Jt.morphTargetsCount!==Fe)&&(le=!0):(le=!0,Jt.__version=nt.version);let Mn=Jt.currentProgram;le===!0&&(Mn=Is(nt,q,K));let Ki=!1,En=!1,fi=!1;const Ie=Mn.getUniforms(),bn=Jt.uniforms;if(bt.useProgram(Mn.program)&&(Ki=!0,En=!0,fi=!0),nt.id!==ht&&(ht=nt.id,En=!0),Ki||ut!==C){bt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(L,"projectionMatrix",C.projectionMatrix),Ie.setValue(L,"viewMatrix",C.matrixWorldInverse);const An=Ie.map.cameraPosition;An!==void 0&&An.setValue(L,ve.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),ut!==C&&(ut=C,En=!0,fi=!0)}if(Jt.needsLights&&(Oe.state.directionalShadowMap.length>0&&Ie.setValue(L,"directionalShadowMap",Oe.state.directionalShadowMap,V),Oe.state.spotShadowMap.length>0&&Ie.setValue(L,"spotShadowMap",Oe.state.spotShadowMap,V),Oe.state.pointShadowMap.length>0&&Ie.setValue(L,"pointShadowMap",Oe.state.pointShadowMap,V)),K.isSkinnedMesh){Ie.setOptional(L,K,"bindMatrix"),Ie.setOptional(L,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ie.setValue(L,"boneTexture",Tn.boneTexture,V))}K.isBatchedMesh&&(Ie.setOptional(L,K,"batchingTexture"),Ie.setValue(L,"batchingTexture",K._matricesTexture,V),Ie.setOptional(L,K,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",K._indirectTexture,V),Ie.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",K._colorsTexture,V));const dn=ot.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&he.update(K,ot,Mn),(En||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ie.setValue(L,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(bn.envMap.value=Wt,bn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=FA()),En&&(Ie.setValue(L,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&Qr(bn,fi),Lt&&nt.fog===!0&&Qt.refreshFogUniforms(bn,Lt),Qt.refreshMaterialUniforms(bn,nt,gt,tt,B.state.transmissionRenderTarget[C.id]),Zc.upload(L,ol(Jt),bn,V)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Zc.upload(L,ol(Jt),bn,V),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ie.setValue(L,"center",K.center),Ie.setValue(L,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(L,"normalMatrix",K.normalMatrix),Ie.setValue(L,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Tn=nt.uniformsGroups;for(let An=0,Hs=Tn.length;An<Hs;An++){const Ci=Tn[An];yt.update(Ci,Mn),yt.bind(Ci,Mn)}}return Mn}function Qr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ea(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(C,q,ot){const nt=M.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=q,M.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ot=M.get(C);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const ba=L.createFramebuffer();this.setRenderTarget=function(C,q=0,ot=0){st=C,X=q,at=ot;let nt=null,K=!1,Lt=!1;if(C){const Pt=M.get(C);if(Pt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(L.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),et=C.scissorTest,bt.viewport(F),bt.scissor(G),bt.setScissorTest(et),ht=-1;return}else if(Pt.__webglFramebuffer===void 0)V.setupRenderTarget(C);else if(Pt.__hasExternalTextures)V.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(Pt.__boundDepthTexture!==ee){if(ee!==null&&M.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Lt=!0);const Yt=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?nt=Yt[q][ot]:nt=Yt[q],K=!0):C.samples>0&&V.useMultisampledRTT(C)===!1?nt=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Yt)?nt=Yt[ot]:nt=Yt,F.copy(C.viewport),G.copy(C.scissor),et=C.scissorTest}else F.copy($).multiplyScalar(gt).floor(),G.copy(ft).multiplyScalar(gt).floor(),et=wt;if(ot!==0&&(nt=ba),bt.bindFramebuffer(L.FRAMEBUFFER,nt)&&bt.drawBuffers(C,nt),bt.viewport(F),bt.scissor(G),bt.setScissorTest(et),K){const Pt=M.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,ot)}else if(Lt){const Pt=q;for(let Wt=0;Wt<C.textures.length;Wt++){const Yt=M.get(C.textures[Wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Wt,Yt.__webglTexture,ot,Pt)}}else if(C!==null&&ot!==0){const Pt=M.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,ot)}ht=-1},this.readRenderTargetPixels=function(C,q,ot,nt,K,Lt,kt,Pt=0){if(!(C&&C.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){bt.bindFramebuffer(L.FRAMEBUFFER,Wt);try{const Yt=C.textures[Pt],ee=Yt.format,jt=Yt.type;if(!ne.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-nt&&ot>=0&&ot<=C.height-K&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pt),L.readPixels(q,ot,nt,K,Rt.convert(ee),Rt.convert(jt),Lt))}finally{const Yt=st!==null?M.get(st).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ot,nt,K,Lt,kt,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(q>=0&&q<=C.width-nt&&ot>=0&&ot<=C.height-K){bt.bindFramebuffer(L.FRAMEBUFFER,Wt);const Yt=C.textures[Pt],ee=Yt.format,jt=Yt.type;if(!ne.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.bufferData(L.PIXEL_PACK_BUFFER,Lt.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pt),L.readPixels(q,ot,nt,K,Rt.convert(ee),Rt.convert(jt),0);const Ne=st!==null?M.get(st).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,Ne);const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fy(L,Je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Lt),L.deleteBuffer(ie),L.deleteSync(Je),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ot=0){const nt=Math.pow(2,-ot),K=Math.floor(C.image.width*nt),Lt=Math.floor(C.image.height*nt),kt=q!==null?q.x:0,Pt=q!==null?q.y:0;V.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,ot,0,0,kt,Pt,K,Lt),bt.unbindTexture()};const rs=L.createFramebuffer(),Ta=L.createFramebuffer();this.copyTextureToTexture=function(C,q,ot=null,nt=null,K=0,Lt=null){Lt===null&&(K!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=K,K=0):Lt=0);let kt,Pt,Wt,Yt,ee,jt,ie,Ne,Je;const je=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(ot!==null)kt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,ee=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const dn=Math.pow(2,-K);kt=Math.floor(je.width*dn),Pt=Math.floor(je.height*dn),C.isDataArrayTexture?Wt=je.depth:C.isData3DTexture?Wt=Math.floor(je.depth*dn):Wt=1,Yt=0,ee=0,jt=0}nt!==null?(ie=nt.x,Ne=nt.y,Je=nt.z):(ie=0,Ne=0,Je=0);const Fe=Rt.convert(q.format),Jt=Rt.convert(q.type);let Oe;q.isData3DTexture?(V.setTexture3D(q,0),Oe=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(V.setTexture2DArray(q,0),Oe=L.TEXTURE_2D_ARRAY):(V.setTexture2D(q,0),Oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const le=L.getParameter(L.UNPACK_ROW_LENGTH),Mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),En=L.getParameter(L.UNPACK_SKIP_ROWS),fi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,je.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jt);const Ie=C.isDataArrayTexture||C.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const dn=M.get(C),Tn=M.get(q),An=M.get(dn.__renderTarget),Hs=M.get(Tn.__renderTarget);bt.bindFramebuffer(L.READ_FRAMEBUFFER,An.__webglFramebuffer),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Ci=0;Ci<Wt;Ci++)Ie&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(C).__webglTexture,K,jt+Ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Lt,Je+Ci)),L.blitFramebuffer(Yt,ee,kt,Pt,ie,Ne,kt,Pt,L.DEPTH_BUFFER_BIT,L.NEAREST);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||M.has(C)){const dn=M.get(C),Tn=M.get(q);bt.bindFramebuffer(L.READ_FRAMEBUFFER,rs),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ta);for(let An=0;An<Wt;An++)Ie?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,K,jt+An):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,K),bn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,Lt,Je+An):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,Lt),K!==0?L.blitFramebuffer(Yt,ee,kt,Pt,ie,Ne,kt,Pt,L.COLOR_BUFFER_BIT,L.NEAREST):bn?L.copyTexSubImage3D(Oe,Lt,ie,Ne,Je+An,Yt,ee,kt,Pt):L.copyTexSubImage2D(Oe,Lt,ie,Ne,Yt,ee,kt,Pt);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Oe,Lt,ie,Ne,Je,kt,Pt,Wt,Fe,Jt,je.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,Lt,ie,Ne,Je,kt,Pt,Wt,Fe,je.data):L.texSubImage3D(Oe,Lt,ie,Ne,Je,kt,Pt,Wt,Fe,Jt,je):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Lt,ie,Ne,kt,Pt,Fe,Jt,je.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Lt,ie,Ne,je.width,je.height,Fe,je.data):L.texSubImage2D(L.TEXTURE_2D,Lt,ie,Ne,kt,Pt,Fe,Jt,je);L.pixelStorei(L.UNPACK_ROW_LENGTH,le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,En),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fi),Lt===0&&q.generateMipmaps&&L.generateMipmap(Oe),bt.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&V.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),bt.unbindTexture()},this.resetState=function(){X=0,at=0,st=null,bt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const av={type:"change"},up={type:"start"},Vv={type:"end"},kc=new su,sv=new es,BA=Math.cos(70*ze.DEG2RAD),mn=new Z,jn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class IA extends GM{constructor(t,i=null){super(t,i),this.state=qe.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Os,this._lastTargetPosition=new Z,this._quat=new Os().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new N0,this._sphericalDelta=new N0,this._scale=1,this._panOffset=new Z,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new Z,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GA.bind(this),this._onPointerDown=HA.bind(this),this._onPointerUp=VA.bind(this),this._onContextMenu=ZA.bind(this),this._onMouseWheel=WA.bind(this),this._onKeyDown=qA.bind(this),this._onTouchStart=YA.bind(this),this._onTouchMove=jA.bind(this),this._onMouseDown=kA.bind(this),this._onMouseMove=XA.bind(this),this._interceptControlDown=KA.bind(this),this._interceptControlUp=QA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(av),this.update(),this.state=qe.NONE}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=mn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<BA?this.object.lookAt(this.target):(sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(sv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function HA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function GA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function VA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vv),this.state=qe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function kA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qe.DOLLY;break;case Or.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}break;case Or.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(up)}function XA(o){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function WA(o){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(o.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Vv))}function qA(o){this.enabled!==!1&&this._handleKeyDown(o)}function YA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qe.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qe.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(up)}function jA(o){switch(this._trackPointer(o),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qe.NONE}}function ZA(o){this.enabled!==!1&&o.preventDefault()}function KA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Kc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class sl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JA=new ru(-1,1,1,-1,0,1);class $A extends Ti{constructor(){super(),this.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kn([0,2,0,0,2,0],2))}}const tR=new $A;class Yd{constructor(t){this._mesh=new bi(tR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,JA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class eR extends sl{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Qn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tu.clone(t.uniforms),this.material=new Qn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yd(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rv extends sl{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class nR extends sl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class iR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new ce);this._width=s.width,this._height=s.height,i=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eR(Kc),this.copyPass.material.blending=Fi,this.clock=new Fv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}rv!==void 0&&(h instanceof rv?s=!0:h instanceof nR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aR extends sl{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Me}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const Jh={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class sR extends sl{constructor(t=.96){super(),this.uniforms=tu.clone(Jh.uniforms),this.damp=t,this.compFsMaterial=new Qn({uniforms:this.uniforms,vertexShader:Jh.vertexShader,fragmentShader:Jh.fragmentShader}),this.copyFsMaterial=new Qn({uniforms:tu.clone(Kc.uniforms),vertexShader:Kc.vertexShader,fragmentShader:Kc.fragmentShader,blending:Fi,depthTest:!1,depthWrite:!1}),this._textureComp=new ci(window.innerWidth,window.innerHeight,{magFilter:gn,type:Ei}),this._textureOld=new ci(window.innerWidth,window.innerHeight,{magFilter:gn,type:Ei}),this._compFsQuad=new Yd(this.compFsMaterial),this._copyFsQuad=new Yd(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(t){this.uniforms.damp.value=t}render(t,i,s){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=s.texture,t.setRenderTarget(this._textureComp),this._compFsQuad.render(t),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this._copyFsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(),this._copyFsQuad.render(t));const l=this._textureOld;this._textureOld=this._textureComp,this._textureComp=l}setSize(t,i){this._textureComp.setSize(t,i),this._textureOld.setSize(t,i)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}const rR={spawnRate:8,gravity:-9.8,floorY:0,maxCubes:360,spawnHeight:20,fieldWidth:18,fieldDepth:12,cubeMin:.15,cubeMax:.4,dissolveDelay:2,dissolveSpeed:1.1,gridSize:.8,splitImpact:3.4,minCubeSize:.15,maxSplitDepth:1,colorMode:"random",baseColor:"#7aa2ff",baseBounce:.2,splitBounce:.65,soundEnabled:!1,soundVolume:.25,toneIndex:0,rhythmJitter:.45,rampSpeed:.6,motionBlur:.86};function oR(){return new op({color:"#ffffff",transparent:!0,opacity:.2,depthWrite:!1})}function lR(){const o=Fn.useRef(null),[t,i]=Fn.useState(rR),[s,l]=Fn.useState("light"),[c,h]=Fn.useState(!1),d=Fn.useRef(t),m=Fn.useRef(t.spawnRate),p=Fn.useRef(t.spawnRate),x=Fn.useRef(0),_=Fn.useRef(1),S=Fn.useRef({width:t.fieldWidth,depth:t.fieldDepth}),E=Fn.useRef(()=>{});Fn.useEffect(()=>{d.current=t},[t]),Fn.useEffect(()=>{if(s==="none"){p.current=0,i(v=>({...v,maxCubes:0,spawnRate:0}));return}const b=s==="light"?1:s==="medium"?9:13,y=s==="light"?60:s==="medium"?360:520;p.current=b,i(v=>({...v,maxCubes:y,spawnRate:b}))},[s]);const R=Fn.useMemo(()=>[{key:"spawnRate",label:"Spawn rate",min:1,max:30,step:1},{key:"spawnHeight",label:"Spawn height",min:5,max:40,step:1},{key:"gravity",label:"Gravity",min:-25,max:-1,step:.1},{key:"cubeMin",label:"Cube min",min:.1,max:1.5,step:.05},{key:"cubeMax",label:"Cube max",min:.15,max:2,step:.05},{key:"splitImpact",label:"Split impact",min:1,max:8,step:.1},{key:"minCubeSize",label:"Min cube size",min:.08,max:.6,step:.02},{key:"maxSplitDepth",label:"Split depth",min:0,max:2,step:1},{key:"dissolveDelay",label:"Dissolve delay",min:.5,max:6,step:.1},{key:"dissolveSpeed",label:"Dissolve speed",min:.2,max:3,step:.1},{key:"maxCubes",label:"Max cubes",min:60,max:800,step:20},{key:"fieldWidth",label:"Field width",min:6,max:30,step:1},{key:"fieldDepth",label:"Field depth",min:6,max:20,step:1},{key:"gridSize",label:"Grid size",min:.6,max:2.2,step:.05},{key:"baseBounce",label:"Base bounce",min:0,max:.9,step:.05},{key:"splitBounce",label:"Split bounce",min:0,max:.95,step:.05},{key:"soundVolume",label:"Sound volume",min:0,max:1,step:.05},{key:"rhythmJitter",label:"Rhythm jitter",min:0,max:.9,step:.05},{key:"rampSpeed",label:"Ramp speed",min:.1,max:2,step:.1},{key:"motionBlur",label:"Motion blur",min:0,max:.98,step:.01}],[]);return Fn.useEffect(()=>{if(!o.current)return;const b=new zA({antialias:!0});b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.setSize(o.current.clientWidth,o.current.clientHeight),o.current.appendChild(b.domElement);const y=new yM;y.background=new Me("#050505");const v=new oi(55,o.current.clientWidth/o.current.clientHeight,.1,300);v.position.set(16,2,16);const N=new IA(v,b.domElement);N.enableDamping=!0,N.dampingFactor=.08,N.target.set(0,8,0),N.enabled=!1,_.current=v.position.distanceTo(N.target);const O=new BM("#d6ddff",.75);y.add(O);const P=new zM("#ffffff",1.3);P.position.set(10,16,6),y.add(P);const B=new PM("#88aaff",1.2,40);B.position.set(-6,6,6),y.add(B);const H=new bi(new al(50,50),new UM({color:"#000000",roughness:1,transparent:!0,opacity:0}));H.rotation.x=-Math.PI/2,H.position.y=d.current.floorY,y.add(H);const z=new Wr(1,1,1);let j=null,w=null,D=!1;const X=()=>{D||(j=new(window.AudioContext||window.webkitAudioContext),w=j.createGain(),w.gain.value=d.current.soundVolume,w.connect(j.destination),D=!0)};E.current=X;const at=(Et,L)=>{if(!d.current.soundEnabled||(X(),!j||!w))return;const Kt=j.currentTime,M=[[261.63,293.66,329.63,392,440,493.88],[261.63,293.66,311.13,392,415.3,466.16],[261.63,293.66,329.63,392,440,466.16]][Math.max(0,Math.min(2,d.current.toneIndex))],V=Math.floor(Math.random()*M.length),lt=L?2:1,mt=M[V]*lt,rt=j.createOscillator(),Ot=j.createOscillator(),Tt=j.createGain(),zt=j.createBiquadFilter(),Qt=j.createBiquadFilter();rt.type="triangle",Ot.type="sine",rt.frequency.setValueAtTime(mt,Kt),Ot.frequency.setValueAtTime(mt*2,Kt),zt.type="highpass",zt.frequency.setValueAtTime(220,Kt),Qt.type="lowpass",Qt.frequency.setValueAtTime(5200,Kt),Qt.Q.value=.6;const Mt=L?.07:.055;Tt.gain.setValueAtTime(1e-4,Kt),Tt.gain.exponentialRampToValueAtTime(Mt,Kt+.008),Tt.gain.exponentialRampToValueAtTime(1e-4,Kt+.28),rt.connect(zt),Ot.connect(zt),zt.connect(Qt),Qt.connect(Tt),Tt.connect(w),rt.start(Kt),Ot.start(Kt),rt.stop(Kt+.3),Ot.stop(Kt+.3)},st=()=>{if(!d.current.soundEnabled||(X(),!j||!w))return;const Et=j.currentTime,L=j.createOscillator(),Kt=j.createGain();L.type="sine",L.frequency.setValueAtTime(110,Et),L.frequency.exponentialRampToValueAtTime(70,Et+.25),Kt.gain.setValueAtTime(1e-4,Et),Kt.gain.exponentialRampToValueAtTime(.09,Et+.02),Kt.gain.exponentialRampToValueAtTime(1e-4,Et+.5),L.connect(Kt),Kt.connect(w),L.start(Et),L.stop(Et+.55)},ht=[],ut=new Map,F=new Fv;let G=0;const et=new HM,St=new ce,xt=new Me("#ff4d6d"),U=Et=>{const L=b.domElement.getBoundingClientRect();St.x=(Et.clientX-L.left)/L.width*2-1,St.y=-((Et.clientY-L.top)/L.height)*2+1,et.setFromCamera(St,v);const Kt=et.ray;let $t=null,ne=1/0;for(const bt of ht){if(bt.splitDepth!==0||bt.state!=="falling")continue;const T=Kt.distanceToPoint(bt.mesh.position),M=Math.max(6,bt.size*16);T<M&&T<ne&&($t=bt,ne=T)}if($t){$t.flash=1,$t.edgeMaterial.opacity=1,$t.forceSplit=!0;for(const bt of ht){if(bt.state!=="falling")continue;const T=new Z().subVectors(bt.mesh.position,$t.mesh.position),M=Math.max(.6,T.length());if(M>10)continue;T.normalize();const V=6/(M*M);bt.velocity.addScaledVector(T,V)}st()}},tt=o.current.querySelector(".hud");if(tt){const Et=tt.querySelector("div");Et&&(Et.textContent="CUBE RAIN FOR FUN")}const gt=(Et,L,Kt)=>{const $t=Math.floor(Et/Kt),ne=Math.floor(L/Kt);return`${$t}:${ne}`},Ct=Et=>{ut.clear();for(const L of ht){if(L.state!=="rest")continue;const Kt=gt(L.mesh.position.x,L.mesh.position.z,Et.gridSize),$t=L.mesh.position.y+L.size/2,ne=ut.get(Kt)??Et.floorY;$t>ne&&ut.set(Kt,$t)}},Ht=(Et,L=null,Kt=null,$t=null,ne={})=>{if(ht.length>=Et.maxCubes)return;const bt=L??ze.randFloat(Et.cubeMin,Et.cubeMax),T=Et.colorMode==="random"?new Me().setHSL(ze.randFloat(.55,.7),.5,.6):new Me(Et.baseColor),M=oR(),V=new bi(z,M),lt=new wM(z),mt=new Nv({color:T,transparent:!0,opacity:.85}),rt=new RM(lt,mt);if(V.add(rt),V.scale.set(bt,bt,bt),Kt)V.position.copy(Kt);else{const Tt=Math.random()<.5,zt=S.current;V.position.set(Tt?ze.randFloat(-4,4):ze.randFloatSpread(zt.width),Et.spawnHeight+ze.randFloat(0,4),Tt?ze.randFloat(-3,3):ze.randFloatSpread(zt.depth))}y.add(V);const Ot={mesh:V,size:bt,velocity:$t??new Z(0,ze.randFloat(-.5,-2),0),angularVelocity:ne.angularVelocity??new Z(ze.randFloatSpread(2.2),ze.randFloatSpread(2.2),ze.randFloatSpread(2.2)),state:"falling",restTime:0,dissolve:0,dissolveDelayMultiplier:ne.dissolveDelayMultiplier??1,dissolveSpeedMultiplier:ne.dissolveSpeedMultiplier??1,dissolveDelayOverride:ne.dissolveDelayOverride,dissolveSpeedOverride:ne.dissolveSpeedOverride,splitDepth:ne.splitDepth??0,bounce:ne.bounce??d.current.baseBounce,baseOpacity:M.opacity,material:M,edgeGeometry:lt,edgeMaterial:mt,edgeBaseColor:T.clone(),flash:0,forceSplit:!1};V.userData.cube=Ot,ht.push(Ot)},$=Et=>{const L=ht[Et];y.remove(L.mesh),L.mesh.material.dispose(),L.edgeGeometry.dispose(),L.edgeMaterial.dispose(),L.mesh.userData.cube=null,ht.splice(Et,1)},ft=(Et,L)=>{const Kt=d.current.maxSplitDepth;if(Et.splitDepth>=Kt)return!1;const $t=Et.size/2;if($t<d.current.minCubeSize)return!1;const ne=Et.splitDepth+1,bt=[-.25,.25],T=ze.clamp(L*.3,.8,3.4),M=new Z(ze.randFloatSpread(1),0,ze.randFloatSpread(1)).normalize();for(const lt of bt)for(const mt of bt)for(const rt of bt){const Ot=Et.mesh.position.clone();Ot.x+=lt*Et.size,Ot.y+=mt*Et.size,Ot.z+=rt*Et.size;const zt=new Z(ze.randFloatSpread(1),0,ze.randFloatSpread(1)).normalize().addScaledVector(M,.6).normalize(),Qt=new Z(zt.x*T,Math.min(L*.35,3.2)+ze.randFloat(.2,1.2),zt.z*T);Ht(d.current,$t,Ot,Qt,{splitDepth:ne,bounce:d.current.splitBounce,dissolveDelayOverride:1,dissolveSpeedOverride:.6})}const V=6;for(let lt=0;lt<V;lt+=1){const mt=new Z(ze.randFloatSpread(Et.size*.3),ze.randFloat(.1,Et.size*.35),ze.randFloatSpread(Et.size*.3)),rt=Et.mesh.position.clone().add(mt),Ot=new Z(ze.randFloatSpread(3.2),ze.randFloat(1.2,3.4),ze.randFloatSpread(3.2));Ht(d.current,$t*.55,rt,Ot,{dissolveDelayMultiplier:.4,dissolveSpeedMultiplier:2.4,dissolveDelayOverride:1,dissolveSpeedOverride:.6,angularVelocity:new Z(ze.randFloatSpread(4.5),ze.randFloatSpread(4.5),ze.randFloatSpread(4.5)),splitDepth:ne,bounce:d.current.splitBounce})}return!0},wt=new iR(b),Xt=new aR(y,v),Gt=new sR;Gt.uniforms.damp.value=d.current.motionBlur,wt.addPass(Xt),wt.addPass(Gt);const me=Et=>{Et.key==="Control"&&(N.enabled=!0)},Ze=Et=>{Et.key==="Control"&&(N.enabled=!1)},ve=Et=>{(Et.key==="i"||Et.key==="I")&&h(L=>!L)},ge=()=>{if(!o.current)return;const{clientWidth:Et,clientHeight:L}=o.current;b.setSize(Et,L),wt.setSize(Et,L),v.aspect=Et/L,v.updateProjectionMatrix()};let Ae=!0;const re=()=>{if(!Ae)return;const Et=Math.min(F.getDelta(),.05),L=d.current;G+=Et,D&&w&&(w.gain.value=L.soundVolume),m.current=ze.lerp(m.current,p.current,Math.min(1,Et*L.rampSpeed));const Kt=v.position.distanceTo(N.target),$t=ze.clamp(Kt/_.current,.6,1.8);S.current={width:L.fieldWidth*$t,depth:L.fieldDepth*$t};const ne=m.current;if(ne>0)for(;G>=x.current;){Ht(L);const bt=1/ne,T=bt*L.rhythmJitter*ze.randFloat(-.5,.5);x.current=G+Math.max(.03,bt+T)}Ct(L);for(let bt=ht.length-1;bt>=0;bt-=1){const T=ht[bt];if(T.flash>0?(T.flash=Math.max(0,T.flash-Et*2.2),T.edgeMaterial.color.copy(T.edgeBaseColor).lerp(xt,T.flash)):T.edgeMaterial.color.copy(T.edgeBaseColor),T.state==="falling"){if(T.forceSplit&&(T.forceSplit=!1,ft(T,L.splitImpact+2))){$(bt);continue}T.velocity.y+=L.gravity*Et,T.mesh.position.addScaledVector(T.velocity,Et),T.mesh.rotation.x+=T.angularVelocity.x*Et,T.mesh.rotation.y+=T.angularVelocity.y*Et,T.mesh.rotation.z+=T.angularVelocity.z*Et,Gt.uniforms.damp.value=L.motionBlur;const M=gt(T.mesh.position.x,T.mesh.position.z,L.gridSize),V=(ut.get(M)??L.floorY)+T.size/2;if(T.mesh.position.y<=V){const lt=Math.abs(T.velocity.y);if(T.mesh.position.y=V,lt>L.splitImpact&&ft(T,lt)){T.splitDepth===0&&at(lt,!0),$(bt);continue}T.bounce>.01&&lt>.2?(T.mesh.position.y=V+.001,T.velocity.y=lt*T.bounce,T.velocity.x*=.85,T.velocity.z*=.85,T.angularVelocity.multiplyScalar(.75),T.bounce*=.6,T.splitDepth===0&&at(lt,!1)):(T.state="rest",T.velocity.set(0,0,0),T.angularVelocity.multiplyScalar(.15),T.splitDepth===0&&at(lt,!1))}}else if(T.state==="rest"){T.restTime+=Et;const M=T.dissolveDelayOverride??L.dissolveDelay*T.dissolveDelayMultiplier;T.restTime>=M&&(T.state="dissolve")}else if(T.state==="dissolve"){const M=T.dissolveSpeedOverride??L.dissolveSpeed*T.dissolveSpeedMultiplier;T.dissolve=Math.min(1,T.dissolve+Et*M),T.material.opacity=T.baseOpacity*(1-T.dissolve),T.edgeMaterial.opacity=1-T.dissolve,T.mesh.rotation.x+=T.angularVelocity.x*Et,T.mesh.rotation.y+=T.angularVelocity.y*Et,T.mesh.rotation.z+=T.angularVelocity.z*Et,Gt.uniforms.damp.value=L.motionBlur,T.dissolve>=1&&$(bt)}}N.update(),wt.render(),b.setAnimationLoop(re)};return b.setAnimationLoop(re),window.addEventListener("resize",ge),window.addEventListener("keydown",ve),window.addEventListener("keydown",me),window.addEventListener("keyup",Ze),b.domElement.addEventListener("pointerdown",X),b.domElement.addEventListener("pointerdown",U),()=>{Ae=!1,window.removeEventListener("resize",ge),window.removeEventListener("keydown",ve),window.removeEventListener("keydown",me),window.removeEventListener("keyup",Ze),b.domElement.removeEventListener("pointerdown",X),b.domElement.removeEventListener("pointerdown",U),b.setAnimationLoop(null),N.dispose(),j&&j.close(),ht.splice(0).forEach(Et=>{Et.mesh.material.dispose(),Et.edgeGeometry.dispose(),Et.edgeMaterial.dispose(),y.remove(Et.mesh)}),z.dispose(),H.geometry.dispose(),H.material.dispose(),wt.dispose(),b.dispose(),b.domElement&&b.domElement.parentNode&&b.domElement.parentNode.removeChild(b.domElement)}},[]),Le.jsxs("div",{className:"app",children:[Le.jsxs("aside",{className:`controlPanel ${c?"":"hidden"}`,children:[Le.jsx("div",{className:"panelTitle",children:"Simulation"}),Le.jsxs("label",{className:"controlRow",children:[Le.jsx("span",{children:"Sound on/off"}),Le.jsx("input",{type:"range",min:"0",max:"1",step:"1",value:t.soundEnabled?1:0,onChange:b=>{const y=Number(b.target.value)===1;i(v=>({...v,soundEnabled:y}))}}),Le.jsx("strong",{children:t.soundEnabled?"on":"off"})]}),Le.jsxs("div",{className:"controlRow",children:[Le.jsx("span",{children:"Tone"}),Le.jsx("div",{className:"buttonGroup",children:["major","minor","mixolydian"].map((b,y)=>Le.jsx("button",{type:"button",className:t.toneIndex===y?"active":"",onClick:()=>i(v=>({...v,toneIndex:y})),children:b},b))})]}),Le.jsxs("div",{className:"controlRow",children:[Le.jsx("span",{children:"Color mode"}),Le.jsxs("div",{className:"buttonGroup",children:[Le.jsx("button",{type:"button",className:t.colorMode==="random"?"active":"",onClick:()=>i(b=>({...b,colorMode:"random"})),children:"Random"}),Le.jsx("button",{type:"button",className:t.colorMode==="fixed"?"active":"",onClick:()=>i(b=>({...b,colorMode:"fixed"})),children:"Fixed"})]})]}),Le.jsxs("label",{className:"controlRow",children:[Le.jsx("span",{children:"Base color"}),Le.jsx("input",{type:"color",value:t.baseColor,onChange:b=>i(y=>({...y,baseColor:b.target.value}))}),Le.jsx("strong",{children:t.baseColor})]}),R.map(b=>Le.jsxs("label",{className:"controlRow",children:[Le.jsx("span",{children:b.label}),Le.jsx("input",{type:"range",min:b.min,max:b.max,step:b.step,value:t[b.key],onChange:y=>{const v=Number(y.target.value);i(N=>({...N,[b.key]:v}))}}),Le.jsx("strong",{children:t[b.key]})]},b.key))]}),Le.jsxs("div",{className:"canvasWrap",ref:o,children:[Le.jsx("div",{className:"topControls",children:["none","light","medium","heavy"].map(b=>Le.jsx("button",{type:"button",className:`topButton ${s===b?"active":""}`,onClick:()=>{l(b)},children:b},b))}),Le.jsxs("div",{className:"hud",children:[Le.jsx("div",{children:"Loading..."}),Le.jsx("button",{type:"button",className:`hudButton ${t.soundEnabled?"active":""}`,onClick:()=>{i(b=>({...b,soundEnabled:!b.soundEnabled})),E.current()},children:"LISTEN"})]})]})]})}ny.createRoot(document.getElementById("root")).render(Le.jsx(Fn.StrictMode,{children:Le.jsx(lR,{})}));
