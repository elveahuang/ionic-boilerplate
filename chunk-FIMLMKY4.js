import{b as d}from"./chunk-U7PXISNF.js";import{q as a,r as c}from"./chunk-7XBW2OS7.js";import{c as h}from"./chunk-A7N4D5IJ.js";import{c as s,d as l,g as p,k as u}from"./chunk-6WE2NCLC.js";import{a as e}from"./chunk-WWGT3PXV.js";import"./chunk-XD4PSF4R.js";var b="",m=b,I="",P=I,C=class{constructor(t){u(this,t),this.togglePasswordVisibility=()=>{let{inputElRef:o}=this;o&&(o.type=o.type==="text"?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(t){if(t!=="text"&&t!=="password"){e(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${t}" is not compatible.`,this.el);return}}connectedCallback(){let{el:t}=this,o=this.inputElRef=t.closest("ion-input");if(!o){e("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",t);return}this.type=o.type}disconnectedCallback(){this.inputElRef=null}render(){var t,o;let{color:n,type:f}=this,i=h(this),g=(t=this.showIcon)!==null&&t!==void 0?t:a,y=(o=this.hideIcon)!==null&&o!==void 0?o:c,r=f==="text";return s(l,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:d(n,{[i]:!0})},s("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:i,color:n,fill:"clear",shape:"round","aria-checked":r?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},s("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:r?y:g})))}get el(){return p(this)}static get watchers(){return{type:["onTypeChange"]}}};C.style={ios:m,md:P};export{C as ion_input_password_toggle};