import{a as l,n as c}from"./chunk-AW6PF7EA.js";import{i as s}from"./chunk-QROHCJ72.js";import{e as t}from"./chunk-XD4PSF4R.js";var v="ionViewWillEnter",y="ionViewDidEnter",L="ionViewWillLeave",C="ionViewDidLeave",D="ionViewWillUnload",b=()=>import("./chunk-3WWXSXBD.js"),A=()=>import("./chunk-QCTZNQKM.js"),V=n=>new Promise((e,i)=>{c(()=>{I(n),P(n).then(a=>{a.animation&&a.animation.destroy(),d(n),e(a)},a=>{d(n),i(a)})})}),I=n=>{let e=n.enteringEl,i=n.leavingEl;k(e,i,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),m(e,!1),e.style.setProperty("pointer-events","none"),i&&(m(i,!1),i.style.setProperty("pointer-events","none"))},P=n=>t(void 0,null,function*(){let e=yield h(n);return e&&l.isBrowser?p(e,n):_(n)}),d=n=>{let e=n.enteringEl,i=n.leavingEl;e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"),i!==void 0&&(i.classList.remove("ion-page-invisible"),i.style.removeProperty("pointer-events"))},h=n=>t(void 0,null,function*(){return!n.leavingEl||!n.animated||n.duration===0?void 0:n.animationBuilder?n.animationBuilder:n.mode==="ios"?(yield b()).iosTransitionAnimation:(yield A()).mdTransitionAnimation}),p=(n,e)=>t(void 0,null,function*(){yield E(e,!0);let i=n(e.baseEl,e);f(e.enteringEl,e.leavingEl);let a=yield F(i,e);return e.progressCallback&&e.progressCallback(void 0),a&&g(e.enteringEl,e.leavingEl),{hasCompleted:a,animation:i}}),_=n=>t(void 0,null,function*(){let e=n.enteringEl,i=n.leavingEl;return yield E(n,!1),f(e,i),g(e,i),{hasCompleted:!0}}),E=(n,e)=>t(void 0,null,function*(){(n.deepWait!==void 0?n.deepWait:e)&&(yield Promise.all([r(n.enteringEl),r(n.leavingEl)])),yield T(n.viewIsReady,n.enteringEl)}),T=(n,e)=>t(void 0,null,function*(){n&&(yield n(e))}),F=(n,e)=>{let i=e.progressCallback,a=new Promise(u=>{n.onFinish(w=>u(w===1))});return i?(n.progressStart(!0),i(n)):n.play(),a},f=(n,e)=>{o(e,L),o(n,v)},g=(n,e)=>{o(n,y),o(e,C)},o=(n,e)=>{if(n){let i=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(i)}},R=()=>new Promise(n=>s(()=>s(()=>n()))),r=n=>t(void 0,null,function*(){let e=n;if(e){if(e.componentOnReady!=null){if((yield e.componentOnReady())!=null)return}else if(e.__registerHost!=null){yield new Promise(a=>s(a));return}yield Promise.all(Array.from(e.children).map(r))}}),m=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},k=(n,e,i)=>{n!==void 0&&(n.style.zIndex=i==="back"?"99":"101"),e!==void 0&&(e.style.zIndex="100")},Y=n=>{if(n.classList.contains("ion-page"))return n;let e=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||n};export{L as a,C as b,D as c,V as d,o as e,R as f,r as g,m as h,Y as i};
