import{b as a}from"./chunk-OBJR2C2W.js";import{c as n}from"./chunk-KBSOTDQ5.js";import{c as i,d as r,g as l,k as s}from"./chunk-C6IVXB7Y.js";import{d as e}from"./chunk-MARZMKXQ.js";import"./chunk-XD4PSF4R.js";var p="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}",h=p,b="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}",u=b,m=class{constructor(t){s(this,t),this.pickerColumn=null,this.ariaLabel=null,this.disabled=!1,this.value=void 0,this.color="primary"}onAriaLabelChange(t){this.ariaLabel=t}componentWillLoad(){let t=e(this.el,["aria-label"]);this.ariaLabel=t["aria-label"]||null}connectedCallback(){this.pickerColumn=this.el.closest("ion-picker-column")}disconnectedCallback(){this.pickerColumn=null}componentDidLoad(){let{pickerColumn:t}=this;t!==null&&t.scrollActiveItemIntoView()}onClick(){let{pickerColumn:t}=this;t!==null&&t.setValue(this.value)}render(){let{color:t,disabled:o,ariaLabel:c}=this,d=n(this);return i(r,{key:"9333d9ac8e9990fc840f31e00391177d9cd563b3",class:a(t,{[d]:!0,"option-disabled":o})},i("button",{key:"6ca92bc584587230135982106eab542589fc4c9d",tabindex:"-1","aria-label":c,disabled:o,onClick:()=>this.onClick()},i("slot",{key:"d9a68906017f77143a0691b9bbc59ae2142da6aa"})))}get el(){return l(this)}static get watchers(){return{"aria-label":["onAriaLabelChange"]}}};m.style={ios:h,md:u};export{m as ion_picker_column_option};
