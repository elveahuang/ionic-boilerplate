"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6022:(M,f,h)=>{h.d(f,{c:()=>a});var l=h(9816),g=h(7864),c=h(1898);const a=(s,n)=>{let e,t;const i=(d,p,w)=>{if(typeof document>"u")return;const _=document.elementFromPoint(d,p);_&&n(_)?_!==e&&(v(),r(_,w)):v()},r=(d,p)=>{e=d,t||(t=e);const w=e;(0,l.w)(()=>w.classList.add("ion-activated")),p()},v=(d=!1)=>{if(!e)return;const p=e;(0,l.w)(()=>p.classList.remove("ion-activated")),d&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>i(d.currentX,d.currentY,g.a),onMove:d=>i(d.currentX,d.currentY,g.b),onEnd:()=>{v(!0),(0,g.h)(),t=void 0}})}},2225:(M,f,h)=>{h.d(f,{g:()=>l});const l=(n,e,t,i,r)=>c(n[1],e[1],t[1],i[1],r).map(v=>g(n[0],e[0],t[0],i[0],v)),g=(n,e,t,i,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*t*r+3*t+i*r))-n*Math.pow(r-1,3),c=(n,e,t,i,r)=>s((i-=r)-3*(t-=r)+3*(e-=r)-(n-=r),3*t-6*e+3*n,3*e-3*n,n).filter(d=>d>=0&&d<=1),s=(n,e,t,i)=>{if(0===n)return((n,e,t)=>{const i=e*e-4*n*t;return i<0?[]:[(-e+Math.sqrt(i))/(2*n),(-e-Math.sqrt(i))/(2*n)]})(e,t,i);const r=(3*(t/=n)-(e/=n)*e)/3,v=(2*e*e*e-9*e*t+27*(i/=n))/27;if(0===r)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-r),-Math.sqrt(-r)];const d=Math.pow(v/2,2)+Math.pow(r/3,3);if(0===d)return[Math.pow(v/2,.5)-e/3];if(d>0)return[Math.pow(-v/2+Math.sqrt(d),1/3)-Math.pow(v/2+Math.sqrt(d),1/3)-e/3];const p=Math.sqrt(Math.pow(-r/3,3)),w=Math.acos(-v/(2*Math.sqrt(Math.pow(-r/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(w/3)-e/3,_*Math.cos((w+2*Math.PI)/3)-e/3,_*Math.cos((w+4*Math.PI)/3)-e/3]}},5062:(M,f,h)=>{h.d(f,{i:()=>l});const l=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(M,f,h)=>{h.r(f),h.d(f,{startFocusVisible:()=>a});const l="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,i=s||document.body,r=E=>{n.forEach(u=>u.classList.remove(l)),E.forEach(u=>u.classList.add(l)),n=E},v=()=>{e=!1,r([])},d=E=>{e=c.includes(E.key),e||r([])},p=E=>{if(e&&void 0!==E.composedPath){const u=E.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));r(u)}},w=()=>{t.activeElement===i&&r([])};return t.addEventListener("keydown",d),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",d),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:r}}},2509:(M,f,h)=>{h.d(f,{c:()=>l});const l=s=>{const n=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const i=void 0!==n.label||g(n),r=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot;e=!0===n.legacy||!i&&!r}return e}}},g=s=>null!==s.shadowRoot&&!!(c.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||a.includes(s.tagName)&&""!==s.textContent),c=["ION-RANGE"],a=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,f,h)=>{h.d(f,{a:()=>a,b:()=>s,c:()=>c,d:()=>e,h:()=>n});const l={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:r})},notification(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>l.available(),c=()=>{g()&&l.selection()},a=()=>{g()&&l.selectionStart()},s=()=>{g()&&l.selectionChanged()},n=()=>{g()&&l.selectionEnd()},e=t=>{g()&&l.impact(t)}},109:(M,f,h)=>{h.d(f,{a:()=>l,b:()=>d,c:()=>e,d:()=>p,e:()=>L,f:()=>n,g:()=>w,h:()=>c,i:()=>g,j:()=>o,k:()=>y,l:()=>t,m:()=>r,n:()=>_,o:()=>i,p:()=>s,q:()=>a,r:()=>m,s:()=>C,t:()=>v,u:()=>E,v:()=>u});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9279:(M,f,h)=>{h.d(f,{I:()=>s,a:()=>r,b:()=>n,c:()=>p,d:()=>_,f:()=>v,g:()=>i,i:()=>t,p:()=>w,r:()=>E,s:()=>d});var l=h(5861),g=h(9397),c=h(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=u=>"ION-CONTENT"===u.tagName,i=function(){var u=(0,l.Z)(function*(m){return t(m)?(yield new Promise(o=>(0,g.c)(m,o)),m.getScrollElement()):m});return function(o){return u.apply(this,arguments)}}(),r=u=>u.querySelector(n)||u.querySelector(e),v=u=>u.closest(e),d=(u,m)=>t(u)?u.scrollToTop(m):Promise.resolve(u.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(u,m,o,y)=>t(u)?u.scrollByPoint(m,o,y):Promise.resolve(u.scrollBy({top:o,left:m,behavior:y>0?"smooth":"auto"})),w=u=>(0,c.b)(u,s),_=u=>{if(t(u)){const o=u.scrollY;return u.scrollY=!1,o}return u.style.setProperty("overflow","hidden"),!0},E=(u,m)=>{t(u)?u.scrollY=m:u.style.removeProperty("overflow")}},9888:(M,f,h)=>{h.d(f,{s:()=>l});const l=t=>{try{if(t instanceof e)return t.value;if(!a()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const i=document.createDocumentFragment(),r=document.createElement("div");i.appendChild(r),r.innerHTML=t,n.forEach(w=>{const _=i.querySelectorAll(w);for(let E=_.length-1;E>=0;E--){const u=_[E];u.parentNode?u.parentNode.removeChild(u):i.removeChild(u);const m=c(u);for(let o=0;o<m.length;o++)g(m[o])}});const v=c(i);for(let w=0;w<v.length;w++)g(v[w]);const d=document.createElement("div");d.appendChild(i);const p=d.querySelector("div");return null!==p?p.innerHTML:d.innerHTML}catch(i){return console.error(i),""}},g=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let r=t.attributes.length-1;r>=0;r--){const v=t.attributes.item(r),d=v.name;if(!s.includes(d.toLowerCase())){t.removeAttribute(d);continue}const p=v.value,w=t[d];(null!=p&&p.toLowerCase().includes("javascript:")||null!=w&&w.toLowerCase().includes("javascript:"))&&t.removeAttribute(d)}const i=c(t);for(let r=0;r<i.length;r++)g(i[r])},c=t=>null!=t.children?t.children:t.childNodes,a=()=>{var t;const r=null===(t=window?.Ionic)||void 0===t?void 0:t.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(i){this.value=i}}},9240:(M,f,h)=>{h.d(f,{g:()=>g});var l=h(1178);const g=(a,s,n)=>{const e=null==a?0:a.toString().length,t=c(e,s);if(void 0===n)return t;try{return n(e,s)}catch(i){return(0,l.a)("Exception in provided `counterFormatter`.",i),t}},c=(a,s)=>`${a} / ${s}`},5234:(M,f,h)=>{h.r(f),h.d(f,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>m,keyboardDidClose:()=>w,keyboardDidOpen:()=>d,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>v,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>u});const l="ionKeyboardDidShow",g="ionKeyboardDidHide";let a={},s={},n=!1;const e=()=>{a={},s={},n=!1},t=o=>{i(o),o.visualViewport&&(s=m(o.visualViewport),o.visualViewport.onresize=()=>{u(o),d()||p(o)?r(o):w(o)&&v(o)})},i=o=>{o.addEventListener("keyboardDidShow",y=>r(o,y)),o.addEventListener("keyboardDidHide",()=>v(o))},r=(o,y)=>{_(o,y),n=!0},v=o=>{E(o),n=!1},d=()=>!n&&a.width===s.width&&(a.height-s.height)*s.scale>150,p=o=>n&&!w(o),w=o=>n&&s.height===o.innerHeight,_=(o,y)=>{const L=new CustomEvent(l,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(L)},E=o=>{const y=new CustomEvent(g);o.dispatchEvent(y)},u=o=>{a=Object.assign({},s),s=m(o.visualViewport)},m=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,f,h)=>{h.d(f,{c:()=>g});var l=h(3457);const g=c=>{let a,s,n;const e=()=>{a=()=>{n=!0,c&&c(!0)},s=()=>{n=!1,c&&c(!1)},null==l.w||l.w.addEventListener("keyboardWillShow",a),null==l.w||l.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",a),null==l.w||l.w.removeEventListener("keyboardWillHide",s),a=s=void 0},isKeyboardVisible:()=>n}}},7741:(M,f,h)=>{h.d(f,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(c,a,s)=>{const n=c*a/s-c+"ms",e=2*Math.PI*a/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,a,s)=>{const n=a/s,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":c*a/s-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":c*a/s-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/s-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/s-c+"ms"}})}}},7135:(M,f,h)=>{h.r(f),h.d(f,{createSwipeBackGesture:()=>s});var l=h(9397),g=h(5062),c=h(1898);h(4349);const s=(n,e,t,i,r)=>{const v=n.ownerDocument.defaultView;let d=(0,g.i)(n);const w=o=>d?-o.deltaX:o.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(d=(0,g.i)(n),(o=>{const{startX:C}=o;return d?C>=v.innerWidth-50:C<=50})(o)&&e()),onStart:t,onMove:o=>{const C=w(o)/v.innerWidth;i(C)},onEnd:o=>{const y=w(o),C=v.innerWidth,L=y/C,b=(o=>d?-o.velocityX:o.velocityX)(o),O=b>=0&&(b>.2||y>C/2),x=(O?1-L:L)*C;let D=0;if(x>5){const S=x/Math.abs(b);D=Math.min(S,540)}r(O,L<=0?.01:(0,l.l)(0,L,.9999),D)}})}}}]);