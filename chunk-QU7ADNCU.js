import{b as d}from"./chunk-OBJR2C2W.js";import{q as c,r as a}from"./chunk-W75ZVI5L.js";import{c as l}from"./chunk-KBSOTDQ5.js";import{c as s,d as p,g as f,k as u}from"./chunk-C6IVXB7Y.js";import{a as e}from"./chunk-XCWNX4UY.js";import"./chunk-XD4PSF4R.js";var m="",I=m,b="",P=b,C=class{constructor(t){u(this,t),this.togglePasswordVisibility=()=>{let{inputElRef:o}=this;o&&(o.type=o.type==="text"?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(t){if(t!=="text"&&t!=="password"){e(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${t}" is not compatible.`,this.el);return}}connectedCallback(){let{el:t}=this,o=this.inputElRef=t.closest("ion-input");if(!o){e("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",t);return}this.type=o.type}disconnectedCallback(){this.inputElRef=null}render(){var t,o;let{color:n,type:h}=this,i=l(this),g=(t=this.showIcon)!==null&&t!==void 0?t:c,y=(o=this.hideIcon)!==null&&o!==void 0?o:a,r=h==="text";return s(p,{key:"1cb075999e41c2fde3a3d6cafe6f37c9b5429299",class:d(n,{[i]:!0})},s("ion-button",{key:"cfaaec221f530ecc475690b6508c2333e32ff609",mode:i,color:n,fill:"clear",shape:"round","aria-checked":r?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},s("ion-icon",{key:"dc0fc5fe8df4df4c145e29b30e589f159aab9cd9",slot:"icon-only","aria-hidden":"true",icon:r?y:g})))}get el(){return f(this)}static get watchers(){return{type:["onTypeChange"]}}};C.style={ios:I,md:P};export{C as ion_input_password_toggle};
