import{e as a,f as c}from"./chunk-74N54D3F.js";import{a as i}from"./chunk-76DS5KTM.js";import{k as r,l as s}from"./chunk-FPS5FUBG.js";import{e as n}from"./chunk-XD4PSF4R.js";var h=()=>{let e=window;e.addEventListener("statusTap",()=>{r(()=>{let m=e.innerWidth,d=e.innerHeight,o=document.elementFromPoint(m/2,d/2);if(!o)return;let t=a(o);t&&new Promise(l=>i(t,l)).then(()=>{s(()=>n(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield c(t,300),t.style.removeProperty("--overflow")}))})})})};export{h as startStatusTap};
