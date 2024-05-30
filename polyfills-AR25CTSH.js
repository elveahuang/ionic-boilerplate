var it=globalThis;function tt(e){return(it.__Zone_symbol_prefix||"__zone_symbol__")+e}function _e(){let e=it.performance;function t(Z){e&&e.mark&&e.mark(Z)}function c(Z,r){e&&e.measure&&e.measure(Z,r)}t("Zone");let Y=class Y{static assertZonePatched(){if(it.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=Y.current;for(;r.parent;)r=r.parent;return r}static get current(){return y.zone}static get currentTask(){return I}static __load_patch(r,i,s=!1){if(O.hasOwnProperty(r)){let v=it[tt("forceDuplicateZoneCheck")]===!0;if(!s&&v)throw Error("Already loaded patch: "+r)}else if(!it["__Zone_disable_"+r]){let v="Zone:"+r;t(v),O[r]=i(it,Y,N),c(v,v)}}get parent(){return this._parent}get name(){return this._name}constructor(r,i){this._parent=r,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,i)}get(r){let i=this.getZoneWith(r);if(i)return i._properties[r]}getZoneWith(r){let i=this;for(;i;){if(i._properties.hasOwnProperty(r))return i;i=i._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,i){if(typeof r!="function")throw new Error("Expecting function got: "+r);let s=this._zoneDelegate.intercept(this,r,i),v=this;return function(){return v.runGuarded(s,this,arguments,i)}}run(r,i,s,v){y={parent:y,zone:this};try{return this._zoneDelegate.invoke(this,r,i,s,v)}finally{y=y.parent}}runGuarded(r,i=null,s,v){y={parent:y,zone:this};try{try{return this._zoneDelegate.invoke(this,r,i,s,v)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{y=y.parent}}runTask(r,i,s){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||nt).name+"; Execution: "+this.name+")");if(r.state===q&&(r.type===U||r.type===E))return;let v=r.state!=H;v&&r._transitionTo(H,d),r.runCount++;let $=I;I=r,y={parent:y,zone:this};try{r.type==E&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,i,s)}catch(M){if(this._zoneDelegate.handleError(this,M))throw M}}finally{r.state!==q&&r.state!==X&&(r.type==U||r.data&&r.data.isPeriodic?v&&r._transitionTo(d,H):(r.runCount=0,this._updateTaskCount(r,-1),v&&r._transitionTo(q,H,q))),y=y.parent,I=$}}scheduleTask(r){if(r.zone&&r.zone!==this){let s=this;for(;s;){if(s===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);s=s.parent}}r._transitionTo(k,q);let i=[];r._zoneDelegates=i,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(s){throw r._transitionTo(X,k,q),this._zoneDelegate.handleError(this,s),s}return r._zoneDelegates===i&&this._updateTaskCount(r,1),r.state==k&&r._transitionTo(d,k),r}scheduleMicroTask(r,i,s,v){return this.scheduleTask(new _(B,r,i,s,v,void 0))}scheduleMacroTask(r,i,s,v,$){return this.scheduleTask(new _(E,r,i,s,v,$))}scheduleEventTask(r,i,s,v,$){return this.scheduleTask(new _(U,r,i,s,v,$))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||nt).name+"; Execution: "+this.name+")");if(!(r.state!==d&&r.state!==H)){r._transitionTo(V,d,H);try{this._zoneDelegate.cancelTask(this,r)}catch(i){throw r._transitionTo(X,V),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(r,-1),r._transitionTo(q,V),r.runCount=0,r}}_updateTaskCount(r,i){let s=r._zoneDelegates;i==-1&&(r._zoneDelegates=null);for(let v=0;v<s.length;v++)s[v]._updateTaskCount(r.type,i)}};Y.__symbol__=tt;let n=Y,a={name:"",onHasTask:(Z,r,i,s)=>Z.hasTask(i,s),onScheduleTask:(Z,r,i,s)=>Z.scheduleTask(i,s),onInvokeTask:(Z,r,i,s,v,$)=>Z.invokeTask(i,s,v,$),onCancelTask:(Z,r,i,s)=>Z.cancelTask(i,s)};class u{get zone(){return this._zone}constructor(r,i,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=r,this._parentDelegate=i,this._forkZS=s&&(s&&s.onFork?s:i._forkZS),this._forkDlgt=s&&(s.onFork?i:i._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:i._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:i._interceptZS),this._interceptDlgt=s&&(s.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:i._invokeZS),this._invokeDlgt=s&&(s.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:i._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:i._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:i._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:i._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let v=s&&s.onHasTask,$=i&&i._hasTaskZS;(v||$)&&(this._hasTaskZS=v?s:a,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone))}fork(r,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,i):new n(r,i)}intercept(r,i,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,i,s):i}invoke(r,i,s,v,$){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,i,s,v,$):i.apply(s,v)}handleError(r,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,i):!0}scheduleTask(r,i){let s=i;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,i),s||(s=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==B)G(i);else throw new Error("Task is missing scheduleFn.");return s}invokeTask(r,i,s,v){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,i,s,v):i.callback.apply(s,v)}cancelTask(r,i){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");s=i.cancelFn(i)}return s}hasTask(r,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,i)}catch(s){this.handleError(r,s)}}_updateTaskCount(r,i){let s=this._taskCounts,v=s[r],$=s[r]=v+i;if($<0)throw new Error("More tasks executed then were scheduled.");if(v==0||$==0){let M={microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:r};this.hasTask(this._zone,M)}}}class _{constructor(r,i,s,v,$,M){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=i,this.data=v,this.scheduleFn=$,this.cancelFn=M,!s)throw new Error("callback is not defined");this.callback=s;let _t=this;r===U&&v&&v.useG?this.invoke=_.invokeTask:this.invoke=function(){return _.invokeTask.call(it,_t,this,arguments)}}static invokeTask(r,i,s){r||(r=this),J++;try{return r.runCount++,r.zone.runTask(r,i,s)}finally{J==1&&j(),J--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,k)}_transitionTo(r,i,s){if(this._state===i||this._state===s)this._state=r,r==q&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${i}'${s?" or '"+s+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let T=tt("setTimeout"),p=tt("Promise"),C=tt("then"),g=[],D=!1,R;function A(Z){if(R||it[p]&&(R=it[p].resolve(0)),R){let r=R[C];r||(r=R.then),r.call(R,Z)}else it[T](Z,0)}function G(Z){J===0&&g.length===0&&A(j),Z&&g.push(Z)}function j(){if(!D){for(D=!0;g.length;){let Z=g;g=[];for(let r=0;r<Z.length;r++){let i=Z[r];try{i.zone.runTask(i,null,null)}catch(s){N.onUnhandledError(s)}}}N.microtaskDrainDone(),D=!1}}let nt={name:"NO ZONE"},q="notScheduled",k="scheduling",d="scheduled",H="running",V="canceling",X="unknown",B="microTask",E="macroTask",U="eventTask",O={},N={symbol:tt,currentZoneFrame:()=>y,onUnhandledError:F,microtaskDrainDone:F,scheduleMicroTask:G,showUncaughtError:()=>!n[tt("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:F,patchMethod:()=>F,bindArguments:()=>[],patchThen:()=>F,patchMacroTask:()=>F,patchEventPrototype:()=>F,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>F,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>F,wrapWithCurrentZone:()=>F,filterProperties:()=>[],attachOriginToPatched:()=>F,_redefineProperty:()=>F,patchCallbacks:()=>F,nativeScheduleMicroTask:A},y={parent:null,zone:new n(null,null)},I=null,J=0;function F(){}return c("Zone","Zone"),n}function Te(){var c;let e=globalThis,t=e[tt("forceDuplicateZoneCheck")]===!0;if(e.Zone&&(t||typeof e.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(c=e.Zone)!=null||(e.Zone=_e()),e.Zone}var kt=Object.getOwnPropertyDescriptor,jt=Object.defineProperty,Zt=Object.getPrototypeOf,ge=Object.create,Ee=Array.prototype.slice,xt="addEventListener",$t="removeEventListener",Dt=tt(xt),Mt=tt($t),ct="true",at="false",vt=tt("");function Ht(e,t){return Zone.current.wrap(e,t)}function Bt(e,t,c,n,a){return Zone.current.scheduleMacroTask(e,t,c,n,a)}var x=tt,Nt=typeof window<"u",mt=Nt?window:void 0,K=Nt&&mt||globalThis,me="removeAttribute";function Ut(e,t){for(let c=e.length-1;c>=0;c--)typeof e[c]=="function"&&(e[c]=Ht(e[c],t+"_"+c));return e}function pe(e,t){let c=e.constructor.name;for(let n=0;n<t.length;n++){let a=t[n],u=e[a];if(u){let _=kt(e,a);if(!te(_))continue;e[a]=(T=>{let p=function(){return T.apply(this,Ut(arguments,c+"."+a))};return ut(p,T),p})(u)}}}function te(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var ee=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ct=!("nw"in K)&&typeof K.process<"u"&&K.process.toString()==="[object process]",zt=!Ct&&!ee&&!!(Nt&&mt.HTMLElement),ne=typeof K.process<"u"&&K.process.toString()==="[object process]"&&!ee&&!!(Nt&&mt.HTMLElement),Rt={},Yt=function(e){if(e=e||K.event,!e)return;let t=Rt[e.type];t||(t=Rt[e.type]=x("ON_PROPERTY"+e.type));let c=this||e.target||K,n=c[t],a;if(zt&&c===mt&&e.type==="error"){let u=e;a=n&&n.call(this,u.message,u.filename,u.lineno,u.colno,u.error),a===!0&&e.preventDefault()}else a=n&&n.apply(this,arguments),a!=null&&!a&&e.preventDefault();return a};function Kt(e,t,c){let n=kt(e,t);if(!n&&c&&kt(c,t)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let a=x("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete n.writable,delete n.value;let u=n.get,_=n.set,T=t.slice(2),p=Rt[T];p||(p=Rt[T]=x("ON_PROPERTY"+T)),n.set=function(C){let g=this;if(!g&&e===K&&(g=K),!g)return;typeof g[p]=="function"&&g.removeEventListener(T,Yt),_&&_.call(g,null),g[p]=C,typeof C=="function"&&g.addEventListener(T,Yt,!1)},n.get=function(){let C=this;if(!C&&e===K&&(C=K),!C)return null;let g=C[p];if(g)return g;if(u){let D=u.call(this);if(D)return n.set.call(this,D),typeof C[me]=="function"&&C.removeAttribute(t),D}return null},jt(e,t,n),e[a]=!0}function re(e,t,c){if(t)for(let n=0;n<t.length;n++)Kt(e,"on"+t[n],c);else{let n=[];for(let a in e)a.slice(0,2)=="on"&&n.push(a);for(let a=0;a<n.length;a++)Kt(e,n[a],c)}}var rt=x("originalInstance");function yt(e){let t=K[e];if(!t)return;K[x(e)]=t,K[e]=function(){let a=Ut(arguments,e);switch(a.length){case 0:this[rt]=new t;break;case 1:this[rt]=new t(a[0]);break;case 2:this[rt]=new t(a[0],a[1]);break;case 3:this[rt]=new t(a[0],a[1],a[2]);break;case 4:this[rt]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},ut(K[e],t);let c=new t(function(){}),n;for(n in c)e==="XMLHttpRequest"&&n==="responseBlob"||function(a){typeof c[a]=="function"?K[e].prototype[a]=function(){return this[rt][a].apply(this[rt],arguments)}:jt(K[e].prototype,a,{set:function(u){typeof u=="function"?(this[rt][a]=Ht(u,e+"."+a),ut(this[rt][a],u)):this[rt][a]=u},get:function(){return this[rt][a]}})}(n);for(n in t)n!=="prototype"&&t.hasOwnProperty(n)&&(K[e][n]=t[n])}function lt(e,t,c){let n=e;for(;n&&!n.hasOwnProperty(t);)n=Zt(n);!n&&e[t]&&(n=e);let a=x(t),u=null;if(n&&(!(u=n[a])||!n.hasOwnProperty(a))){u=n[a]=n[t];let _=n&&kt(n,t);if(te(_)){let T=c(u,a,t);n[t]=function(){return T(this,arguments)},ut(n[t],u)}}return u}function ye(e,t,c){let n=null;function a(u){let _=u.data;return _.args[_.cbIdx]=function(){u.invoke.apply(this,arguments)},n.apply(_.target,_.args),u}n=lt(e,t,u=>function(_,T){let p=c(_,T);return p.cbIdx>=0&&typeof T[p.cbIdx]=="function"?Bt(p.name,T[p.cbIdx],p,a):u.apply(_,T)})}function ut(e,t){e[x("OriginalDelegate")]=t}var Jt=!1,Lt=!1;function ke(){try{let e=mt.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function ve(){if(Jt)return Lt;Jt=!0;try{let e=mt.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Lt=!0)}catch{}return Lt}var Et=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){Et=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Et=!1}var be={useG:!0},et={},oe={},se=new RegExp("^"+vt+"(\\w+)(true|false)$"),ie=x("propagationStopped");function ce(e,t){let c=(t?t(e):e)+at,n=(t?t(e):e)+ct,a=vt+c,u=vt+n;et[e]={},et[e][at]=a,et[e][ct]=u}function we(e,t,c,n){let a=n&&n.add||xt,u=n&&n.rm||$t,_=n&&n.listeners||"eventListeners",T=n&&n.rmAll||"removeAllListeners",p=x(a),C="."+a+":",g="prependListener",D="."+g+":",R=function(k,d,H){if(k.isRemoved)return;let V=k.callback;typeof V=="object"&&V.handleEvent&&(k.callback=E=>V.handleEvent(E),k.originalDelegate=V);let X;try{k.invoke(k,d,[H])}catch(E){X=E}let B=k.options;if(B&&typeof B=="object"&&B.once){let E=k.originalDelegate?k.originalDelegate:k.callback;d[u].call(d,H.type,E,B)}return X};function A(k,d,H){if(d=d||e.event,!d)return;let V=k||d.target||e,X=V[et[d.type][H?ct:at]];if(X){let B=[];if(X.length===1){let E=R(X[0],V,d);E&&B.push(E)}else{let E=X.slice();for(let U=0;U<E.length&&!(d&&d[ie]===!0);U++){let O=R(E[U],V,d);O&&B.push(O)}}if(B.length===1)throw B[0];for(let E=0;E<B.length;E++){let U=B[E];t.nativeScheduleMicroTask(()=>{throw U})}}}let G=function(k){return A(this,k,!1)},j=function(k){return A(this,k,!0)};function nt(k,d){if(!k)return!1;let H=!0;d&&d.useG!==void 0&&(H=d.useG);let V=d&&d.vh,X=!0;d&&d.chkDup!==void 0&&(X=d.chkDup);let B=!1;d&&d.rt!==void 0&&(B=d.rt);let E=k;for(;E&&!E.hasOwnProperty(a);)E=Zt(E);if(!E&&k[a]&&(E=k),!E||E[p])return!1;let U=d&&d.eventNameToString,O={},N=E[p]=E[a],y=E[x(u)]=E[u],I=E[x(_)]=E[_],J=E[x(T)]=E[T],F;d&&d.prepend&&(F=E[x(d.prepend)]=E[d.prepend]);function Y(o,l){return!Et&&typeof o=="object"&&o?!!o.capture:!Et||!l?o:typeof o=="boolean"?{capture:o,passive:!0}:o?typeof o=="object"&&o.passive!==!1?{...o,passive:!0}:o:{passive:!0}}let Z=function(o){if(!O.isExisting)return N.call(O.target,O.eventName,O.capture?j:G,O.options)},r=function(o){if(!o.isRemoved){let l=et[o.eventName],h;l&&(h=l[o.capture?ct:at]);let b=h&&o.target[h];if(b){for(let w=0;w<b.length;w++)if(b[w]===o){b.splice(w,1),o.isRemoved=!0,b.length===0&&(o.allRemoved=!0,o.target[h]=null);break}}}if(o.allRemoved)return y.call(o.target,o.eventName,o.capture?j:G,o.options)},i=function(o){return N.call(O.target,O.eventName,o.invoke,O.options)},s=function(o){return F.call(O.target,O.eventName,o.invoke,O.options)},v=function(o){return y.call(o.target,o.eventName,o.invoke,o.options)},$=H?Z:i,M=H?r:v,_t=function(o,l){let h=typeof l;return h==="function"&&o.callback===l||h==="object"&&o.originalDelegate===l},pt=d&&d.diff?d.diff:_t,ht=Zone[x("UNPATCHED_EVENTS")],bt=e[x("PASSIVE_EVENTS")],f=function(o,l,h,b,w=!1,m=!1){return function(){let P=this||e,S=arguments[0];d&&d.transferEventName&&(S=d.transferEventName(S));let L=arguments[1];if(!L)return o.apply(this,arguments);if(Ct&&S==="uncaughtException")return o.apply(this,arguments);let z=!1;if(typeof L!="function"){if(!L.handleEvent)return o.apply(this,arguments);z=!0}if(V&&!V(o,L,P,arguments))return;let W=Et&&!!bt&&bt.indexOf(S)!==-1,Q=Y(arguments[2],W),ft=Q==null?void 0:Q.signal;if(ft!=null&&ft.aborted)return;if(ht){for(let st=0;st<ht.length;st++)if(S===ht[st])return W?o.call(P,S,L,Q):o.apply(this,arguments)}let It=Q?typeof Q=="boolean"?!0:Q.capture:!1,Vt=Q&&typeof Q=="object"?Q.once:!1,de=Zone.current,Ot=et[S];Ot||(ce(S,U),Ot=et[S]);let Ft=Ot[It?ct:at],Tt=P[Ft],Wt=!1;if(Tt){if(Wt=!0,X){for(let st=0;st<Tt.length;st++)if(pt(Tt[st],L))return}}else Tt=P[Ft]=[];let wt,qt=P.constructor.name,Xt=oe[qt];Xt&&(wt=Xt[S]),wt||(wt=qt+l+(U?U(S):S)),O.options=Q,Vt&&(O.options.once=!1),O.target=P,O.capture=It,O.eventName=S,O.isExisting=Wt;let dt=H?be:void 0;dt&&(dt.taskData=O),ft&&(O.options.signal=void 0);let ot=de.scheduleEventTask(wt,L,dt,h,b);if(ft){O.options.signal=ft;let st=()=>ot.zone.cancelTask(ot);o.call(ft,"abort",st,{once:!0}),dt&&(dt.removeAbortListener=()=>ft.removeEventListener("abort",st))}if(O.target=null,dt&&(dt.taskData=null),Vt&&(Q.once=!0),!Et&&typeof ot.options=="boolean"||(ot.options=Q),ot.target=P,ot.capture=It,ot.eventName=S,z&&(ot.originalDelegate=L),m?Tt.unshift(ot):Tt.push(ot),w)return P}};return E[a]=f(N,C,$,M,B),F&&(E[g]=f(F,D,s,M,B,!0)),E[u]=function(){let o=this||e,l=arguments[0];d&&d.transferEventName&&(l=d.transferEventName(l));let h=arguments[2],b=h?typeof h=="boolean"?!0:h.capture:!1,w=arguments[1];if(!w)return y.apply(this,arguments);if(V&&!V(y,w,o,arguments))return;let m=et[l],P;m&&(P=m[b?ct:at]);let S=P&&o[P];if(S)for(let L=0;L<S.length;L++){let z=S[L];if(pt(z,w)){if(S.splice(L,1),z.isRemoved=!0,S.length===0&&(z.allRemoved=!0,o[P]=null,!b&&typeof l=="string")){let Q=vt+"ON_PROPERTY"+l;o[Q]=null}let W=z.data;return W!=null&&W.removeAbortListener&&(W.removeAbortListener(),W.removeAbortListener=null),z.zone.cancelTask(z),B?o:void 0}}return y.apply(this,arguments)},E[_]=function(){let o=this||e,l=arguments[0];d&&d.transferEventName&&(l=d.transferEventName(l));let h=[],b=ae(o,U?U(l):l);for(let w=0;w<b.length;w++){let m=b[w],P=m.originalDelegate?m.originalDelegate:m.callback;h.push(P)}return h},E[T]=function(){let o=this||e,l=arguments[0];if(l){d&&d.transferEventName&&(l=d.transferEventName(l));let h=et[l];if(h){let b=h[at],w=h[ct],m=o[b],P=o[w];if(m){let S=m.slice();for(let L=0;L<S.length;L++){let z=S[L],W=z.originalDelegate?z.originalDelegate:z.callback;this[u].call(this,l,W,z.options)}}if(P){let S=P.slice();for(let L=0;L<S.length;L++){let z=S[L],W=z.originalDelegate?z.originalDelegate:z.callback;this[u].call(this,l,W,z.options)}}}}else{let h=Object.keys(o);for(let b=0;b<h.length;b++){let w=h[b],m=se.exec(w),P=m&&m[1];P&&P!=="removeListener"&&this[T].call(this,P)}this[T].call(this,"removeListener")}if(B)return this},ut(E[a],N),ut(E[u],y),J&&ut(E[T],J),I&&ut(E[_],I),!0}let q=[];for(let k=0;k<c.length;k++)q[k]=nt(c[k],n);return q}function ae(e,t){if(!t){let u=[];for(let _ in e){let T=se.exec(_),p=T&&T[1];if(p&&(!t||p===t)){let C=e[_];if(C)for(let g=0;g<C.length;g++)u.push(C[g])}}return u}let c=et[t];c||(ce(t),c=et[t]);let n=e[c[at]],a=e[c[ct]];return n?a?n.concat(a):n.slice():a?a.slice():[]}function Pe(e,t){let c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(a,u){a[ie]=!0,n&&n.apply(a,u)})}function Re(e,t){t.patchMethod(e,"queueMicrotask",c=>function(n,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}var Pt=x("zoneTask");function gt(e,t,c,n){let a=null,u=null;t+=n,c+=n;let _={};function T(C){let g=C.data;return g.args[0]=function(){return C.invoke.apply(this,arguments)},g.handleId=a.apply(e,g.args),C}function p(C){return u.call(e,C.data.handleId)}a=lt(e,t,C=>function(g,D){if(typeof D[0]=="function"){let R={isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?D[1]||0:void 0,args:D},A=D[0];D[0]=function(){try{return A.apply(this,arguments)}finally{R.isPeriodic||(typeof R.handleId=="number"?delete _[R.handleId]:R.handleId&&(R.handleId[Pt]=null))}};let G=Bt(t,D[0],R,T,p);if(!G)return G;let j=G.data.handleId;return typeof j=="number"?_[j]=G:j&&(j[Pt]=G),j&&j.ref&&j.unref&&typeof j.ref=="function"&&typeof j.unref=="function"&&(G.ref=j.ref.bind(j),G.unref=j.unref.bind(j)),typeof j=="number"||j?j:G}else return C.apply(e,D)}),u=lt(e,c,C=>function(g,D){let R=D[0],A;typeof R=="number"?A=_[R]:(A=R&&R[Pt],A||(A=R)),A&&typeof A.type=="string"?A.state!=="notScheduled"&&(A.cancelFn&&A.data.isPeriodic||A.runCount===0)&&(typeof R=="number"?delete _[R]:R&&(R[Pt]=null),A.zone.cancelTask(A)):C.apply(e,D)})}function Ne(e,t){let{isBrowser:c,isMix:n}=t.getGlobalObjects();if(!c&&!n||!e.customElements||!("customElements"in e))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",a)}function Ce(e,t){if(Zone[t.symbol("patchEventTarget")])return;let{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:a,FALSE_STR:u,ZONE_SYMBOL_PREFIX:_}=t.getGlobalObjects();for(let p=0;p<c.length;p++){let C=c[p],g=C+u,D=C+a,R=_+g,A=_+D;n[C]={},n[C][u]=R,n[C][a]=A}let T=e.EventTarget;if(!(!T||!T.prototype))return t.patchEventTarget(e,t,[T&&T.prototype]),!0}function Se(e,t){t.patchEventPrototype(e,t)}function le(e,t,c){if(!c||c.length===0)return t;let n=c.filter(u=>u.target===e);if(!n||n.length===0)return t;let a=n[0].ignoreProperties;return t.filter(u=>a.indexOf(u)===-1)}function Qt(e,t,c,n){if(!e)return;let a=le(e,t,c);re(e,a,n)}function At(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function Ie(e,t){if(Ct&&!ne||Zone[e.symbol("patchEvents")])return;let c=t.__Zone_ignore_on_properties,n=[];if(zt){let a=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let u=ke()?[{target:a,ignoreProperties:["error"]}]:[];Qt(a,At(a),c&&c.concat(u),Zt(a))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<n.length;a++){let u=t[n[a]];u&&u.prototype&&Qt(u.prototype,At(u.prototype),c)}}function Oe(e){e.__load_patch("legacy",t=>{let c=t[e.__symbol__("legacyPatch")];c&&c()}),e.__load_patch("timers",t=>{let c="set",n="clear";gt(t,c,n,"Timeout"),gt(t,c,n,"Interval"),gt(t,c,n,"Immediate")}),e.__load_patch("requestAnimationFrame",t=>{gt(t,"request","cancel","AnimationFrame"),gt(t,"mozRequest","mozCancel","AnimationFrame"),gt(t,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(t,c)=>{let n=["alert","prompt","confirm"];for(let a=0;a<n.length;a++){let u=n[a];lt(t,u,(_,T,p)=>function(C,g){return c.current.run(_,t,g,p)})}}),e.__load_patch("EventTarget",(t,c,n)=>{Se(t,n),Ce(t,n);let a=t.XMLHttpRequestEventTarget;a&&a.prototype&&n.patchEventTarget(t,n,[a.prototype])}),e.__load_patch("MutationObserver",(t,c,n)=>{yt("MutationObserver"),yt("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(t,c,n)=>{yt("IntersectionObserver")}),e.__load_patch("FileReader",(t,c,n)=>{yt("FileReader")}),e.__load_patch("on_property",(t,c,n)=>{Ie(n,t)}),e.__load_patch("customElements",(t,c,n)=>{Ne(t,n)}),e.__load_patch("XHR",(t,c)=>{C(t);let n=x("xhrTask"),a=x("xhrSync"),u=x("xhrListener"),_=x("xhrScheduled"),T=x("xhrURL"),p=x("xhrErrorBeforeScheduled");function C(g){let D=g.XMLHttpRequest;if(!D)return;let R=D.prototype;function A(N){return N[n]}let G=R[Dt],j=R[Mt];if(!G){let N=g.XMLHttpRequestEventTarget;if(N){let y=N.prototype;G=y[Dt],j=y[Mt]}}let nt="readystatechange",q="scheduled";function k(N){let y=N.data,I=y.target;I[_]=!1,I[p]=!1;let J=I[u];G||(G=I[Dt],j=I[Mt]),J&&j.call(I,nt,J);let F=I[u]=()=>{if(I.readyState===I.DONE)if(!y.aborted&&I[_]&&N.state===q){let Z=I[c.__symbol__("loadfalse")];if(I.status!==0&&Z&&Z.length>0){let r=N.invoke;N.invoke=function(){let i=I[c.__symbol__("loadfalse")];for(let s=0;s<i.length;s++)i[s]===N&&i.splice(s,1);!y.aborted&&N.state===q&&r.call(N)},Z.push(N)}else N.invoke()}else!y.aborted&&I[_]===!1&&(I[p]=!0)};return G.call(I,nt,F),I[n]||(I[n]=N),U.apply(I,y.args),I[_]=!0,N}function d(){}function H(N){let y=N.data;return y.aborted=!0,O.apply(y.target,y.args)}let V=lt(R,"open",()=>function(N,y){return N[a]=y[2]==!1,N[T]=y[1],V.apply(N,y)}),X="XMLHttpRequest.send",B=x("fetchTaskAborting"),E=x("fetchTaskScheduling"),U=lt(R,"send",()=>function(N,y){if(c.current[E]===!0||N[a])return U.apply(N,y);{let I={target:N,url:N[T],isPeriodic:!1,args:y,aborted:!1},J=Bt(X,d,I,k,H);N&&N[p]===!0&&!I.aborted&&J.state===q&&J.invoke()}}),O=lt(R,"abort",()=>function(N,y){let I=A(N);if(I&&typeof I.type=="string"){if(I.cancelFn==null||I.data&&I.data.aborted)return;I.zone.cancelTask(I)}else if(c.current[B]===!0)return O.apply(N,y)})}}),e.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&pe(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(t,c)=>{function n(a){return function(u){ae(t,a).forEach(T=>{let p=t.PromiseRejectionEvent;if(p){let C=new p(a,{promise:u.promise,reason:u.rejection});T.invoke(C)}})}}t.PromiseRejectionEvent&&(c[x("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[x("rejectionHandledHandler")]=n("rejectionhandled"))}),e.__load_patch("queueMicrotask",(t,c,n)=>{Re(t,n)})}function De(e){e.__load_patch("ZoneAwarePromise",(t,c,n)=>{let a=Object.getOwnPropertyDescriptor,u=Object.defineProperty;function _(f){if(f&&f.toString===Object.prototype.toString){let o=f.constructor&&f.constructor.name;return(o||"")+": "+JSON.stringify(f)}return f?f.toString():Object.prototype.toString.call(f)}let T=n.symbol,p=[],C=t[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,g=T("Promise"),D=T("then"),R="__creationTrace__";n.onUnhandledError=f=>{if(n.showUncaughtError()){let o=f&&f.rejection;o?console.error("Unhandled Promise rejection:",o instanceof Error?o.message:o,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",o,o instanceof Error?o.stack:void 0):console.error(f)}},n.microtaskDrainDone=()=>{for(;p.length;){let f=p.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(o){G(o)}}};let A=T("unhandledPromiseRejectionHandler");function G(f){n.onUnhandledError(f);try{let o=c[A];typeof o=="function"&&o.call(this,f)}catch{}}function j(f){return f&&f.then}function nt(f){return f}function q(f){return M.reject(f)}let k=T("state"),d=T("value"),H=T("finally"),V=T("parentPromiseValue"),X=T("parentPromiseState"),B="Promise.then",E=null,U=!0,O=!1,N=0;function y(f,o){return l=>{try{Y(f,o,l)}catch(h){Y(f,!1,h)}}}let I=function(){let f=!1;return function(l){return function(){f||(f=!0,l.apply(null,arguments))}}},J="Promise resolved with itself",F=T("currentTaskTrace");function Y(f,o,l){let h=I();if(f===l)throw new TypeError(J);if(f[k]===E){let b=null;try{(typeof l=="object"||typeof l=="function")&&(b=l&&l.then)}catch(w){return h(()=>{Y(f,!1,w)})(),f}if(o!==O&&l instanceof M&&l.hasOwnProperty(k)&&l.hasOwnProperty(d)&&l[k]!==E)r(l),Y(f,l[k],l[d]);else if(o!==O&&typeof b=="function")try{b.call(l,h(y(f,o)),h(y(f,!1)))}catch(w){h(()=>{Y(f,!1,w)})()}else{f[k]=o;let w=f[d];if(f[d]=l,f[H]===H&&o===U&&(f[k]=f[X],f[d]=f[V]),o===O&&l instanceof Error){let m=c.currentTask&&c.currentTask.data&&c.currentTask.data[R];m&&u(l,F,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<w.length;)i(f,w[m++],w[m++],w[m++],w[m++]);if(w.length==0&&o==O){f[k]=N;let m=l;try{throw new Error("Uncaught (in promise): "+_(l)+(l&&l.stack?`
`+l.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=l,m.promise=f,m.zone=c.current,m.task=c.currentTask,p.push(m),n.scheduleMicroTask()}}}return f}let Z=T("rejectionHandledHandler");function r(f){if(f[k]===N){try{let o=c[Z];o&&typeof o=="function"&&o.call(this,{rejection:f[d],promise:f})}catch{}f[k]=O;for(let o=0;o<p.length;o++)f===p[o].promise&&p.splice(o,1)}}function i(f,o,l,h,b){r(f);let w=f[k],m=w?typeof h=="function"?h:nt:typeof b=="function"?b:q;o.scheduleMicroTask(B,()=>{try{let P=f[d],S=!!l&&H===l[H];S&&(l[V]=P,l[X]=w);let L=o.run(m,void 0,S&&m!==q&&m!==nt?[]:[P]);Y(l,!0,L)}catch(P){Y(l,!1,P)}},l)}let s="function ZoneAwarePromise() { [native code] }",v=function(){},$=t.AggregateError;class M{static toString(){return s}static resolve(o){return o instanceof M?o:Y(new this(null),U,o)}static reject(o){return Y(new this(null),O,o)}static withResolvers(){let o={};return o.promise=new M((l,h)=>{o.resolve=l,o.reject=h}),o}static any(o){if(!o||typeof o[Symbol.iterator]!="function")return Promise.reject(new $([],"All promises were rejected"));let l=[],h=0;try{for(let m of o)h++,l.push(M.resolve(m))}catch{return Promise.reject(new $([],"All promises were rejected"))}if(h===0)return Promise.reject(new $([],"All promises were rejected"));let b=!1,w=[];return new M((m,P)=>{for(let S=0;S<l.length;S++)l[S].then(L=>{b||(b=!0,m(L))},L=>{w.push(L),h--,h===0&&(b=!0,P(new $(w,"All promises were rejected")))})})}static race(o){let l,h,b=new this((P,S)=>{l=P,h=S});function w(P){l(P)}function m(P){h(P)}for(let P of o)j(P)||(P=this.resolve(P)),P.then(w,m);return b}static all(o){return M.allWithCallback(o)}static allSettled(o){return(this&&this.prototype instanceof M?this:M).allWithCallback(o,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(o,l){let h,b,w=new this((L,z)=>{h=L,b=z}),m=2,P=0,S=[];for(let L of o){j(L)||(L=this.resolve(L));let z=P;try{L.then(W=>{S[z]=l?l.thenCallback(W):W,m--,m===0&&h(S)},W=>{l?(S[z]=l.errorCallback(W),m--,m===0&&h(S)):b(W)})}catch(W){b(W)}m++,P++}return m-=2,m===0&&h(S),w}constructor(o){let l=this;if(!(l instanceof M))throw new Error("Must be an instanceof Promise.");l[k]=E,l[d]=[];try{let h=I();o&&o(h(y(l,U)),h(y(l,O)))}catch(h){Y(l,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return M}then(o,l){var m;let h=(m=this.constructor)==null?void 0:m[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||M);let b=new h(v),w=c.current;return this[k]==E?this[d].push(w,b,o,l):i(this,w,b,o,l),b}catch(o){return this.then(null,o)}finally(o){var w;let l=(w=this.constructor)==null?void 0:w[Symbol.species];(!l||typeof l!="function")&&(l=M);let h=new l(v);h[H]=H;let b=c.current;return this[k]==E?this[d].push(b,h,o,o):i(this,b,h,o,o),h}}M.resolve=M.resolve,M.reject=M.reject,M.race=M.race,M.all=M.all;let _t=t[g]=t.Promise;t.Promise=M;let pt=T("thenPatched");function ht(f){let o=f.prototype,l=a(o,"then");if(l&&(l.writable===!1||!l.configurable))return;let h=o.then;o[D]=h,f.prototype.then=function(b,w){return new M((P,S)=>{h.call(this,P,S)}).then(b,w)},f[pt]=!0}n.patchThen=ht;function bt(f){return function(o,l){let h=f.apply(o,l);if(h instanceof M)return h;let b=h.constructor;return b[pt]||ht(b),h}}return _t&&(ht(_t),lt(t,"fetch",f=>bt(f))),Promise[c.__symbol__("uncaughtPromiseErrors")]=p,M})}function Me(e){e.__load_patch("toString",t=>{let c=Function.prototype.toString,n=x("OriginalDelegate"),a=x("Promise"),u=x("Error"),_=function(){if(typeof this=="function"){let g=this[n];if(g)return typeof g=="function"?c.call(g):Object.prototype.toString.call(g);if(this===Promise){let D=t[a];if(D)return c.call(D)}if(this===Error){let D=t[u];if(D)return c.call(D)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;let T=Object.prototype.toString,p="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?p:T.call(this)}})}function Le(e,t,c,n,a){let u=Zone.__symbol__(n);if(t[u])return;let _=t[u]=t[n];t[n]=function(T,p,C){return p&&p.prototype&&a.forEach(function(g){let D=`${c}.${n}::`+g,R=p.prototype;try{if(R.hasOwnProperty(g)){let A=e.ObjectGetOwnPropertyDescriptor(R,g);A&&A.value?(A.value=e.wrapWithCurrentZone(A.value,D),e._redefineProperty(p.prototype,g,A)):R[g]&&(R[g]=e.wrapWithCurrentZone(R[g],D))}else R[g]&&(R[g]=e.wrapWithCurrentZone(R[g],D))}catch{}}),_.call(t,T,p,C)},e.attachOriginToPatched(t[n],_)}function Ae(e){e.__load_patch("util",(t,c,n)=>{let a=At(t);n.patchOnProperties=re,n.patchMethod=lt,n.bindArguments=Ut,n.patchMacroTask=ye;let u=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");t[_]&&(t[u]=t[_]),t[u]&&(c[u]=c[_]=t[u]),n.patchEventPrototype=Pe,n.patchEventTarget=we,n.isIEOrEdge=ve,n.ObjectDefineProperty=jt,n.ObjectGetOwnPropertyDescriptor=kt,n.ObjectCreate=ge,n.ArraySlice=Ee,n.patchClass=yt,n.wrapWithCurrentZone=Ht,n.filterProperties=le,n.attachOriginToPatched=ut,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Le,n.getGlobalObjects=()=>({globalSources:oe,zoneSymbolEventNames:et,eventNames:a,isBrowser:zt,isMix:ne,isNode:Ct,TRUE_STR:ct,FALSE_STR:at,ZONE_SYMBOL_PREFIX:vt,ADD_EVENT_LISTENER_STR:xt,REMOVE_EVENT_LISTENER_STR:$t})})}function je(e){De(e),Me(e),Ae(e)}var ue=Te();je(ue);Oe(ue);var Ze=":";var Gt=class{visitText(t,c){return t.value}visitContainer(t,c){return`[${t.children.map(n=>n.visit(this)).join(", ")}]`}visitIcu(t,c){let n=Object.keys(t.cases).map(a=>`${a} {${t.cases[a].visit(this)}}`);return`{${t.expression}, ${t.type}, ${n.join(", ")}}`}visitTagPlaceholder(t,c){return t.isVoid?`<ph tag name="${t.startName}"/>`:`<ph tag name="${t.startName}">${t.children.map(n=>n.visit(this)).join(", ")}</ph name="${t.closeName}">`}visitPlaceholder(t,c){return t.value?`<ph name="${t.name}">${t.value}</ph>`:`<ph name="${t.name}"/>`}visitIcuPlaceholder(t,c){return`<ph icu name="${t.name}">${t.value.visit(this)}</ph>`}visitBlockPlaceholder(t,c){return`<ph block name="${t.startName}">${t.children.map(n=>n.visit(this)).join(", ")}</ph name="${t.closeName}">`}},He=new Gt;var fe;(function(e){e[e.Little=0]="Little",e[e.Big=1]="Big"})(fe||(fe={}));function xe(e,t){for(let c=1,n=1;c<e.length;c++,n++)if(t[n]==="\\")n++;else if(e[c]===Ze)return c;throw new Error(`Unterminated $localize metadata block in "${t}".`)}var St=function(e,...t){if(St.translate){let n=St.translate(e,t);e=n[0],t=n[1]}let c=he(e[0],e.raw[0]);for(let n=1;n<e.length;n++)c+=t[n-1]+he(e[n],e.raw[n]);return c},$e=":";function he(e,t){return t.charAt(0)===$e?e.substring(xe(e,t)+1):e}globalThis.$localize=St;