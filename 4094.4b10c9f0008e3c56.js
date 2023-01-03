"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4094],{4094:(y,g,a)=>{a.r(g),a.d(g,{ion_loading:()=>x});var f=a(7374),n=a(7502),p=a(1118),c=a(828),_=a(5145),b=a(1403),e=a(2830);a(9965);const t=i=>{const l=(0,e.c)(),s=(0,e.c)(),d=(0,e.c)();return s.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),d.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),l.addElement(i).easing("ease-in-out").duration(200).addAnimation([s,d])},r=i=>{const l=(0,e.c)(),s=(0,e.c)(),d=(0,e.c)();return s.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),d.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),l.addElement(i).easing("ease-in-out").duration(200).addAnimation([s,d])},h=i=>{const l=(0,e.c)(),s=(0,e.c)(),d=(0,e.c)();return s.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),d.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),l.addElement(i).easing("ease-in-out").duration(200).addAnimation([s,d])},u=i=>{const l=(0,e.c)(),s=(0,e.c)(),d=(0,e.c)();return s.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),d.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),l.addElement(i).easing("ease-in-out").duration(200).addAnimation([s,d])},x=class{constructor(i){(0,n.r)(this,i),this.didPresent=(0,n.e)(this,"ionLoadingDidPresent",7),this.willPresent=(0,n.e)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,n.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,c.B)}}connectedCallback(){(0,c.e)(this.el)}componentWillLoad(){if(void 0===this.spinner){const i=(0,p.b)(this);this.spinner=p.c.get("loadingSpinner",p.c.get("spinner","ios"===i?"lines":"crescent"))}}present(){var i=this;return(0,f.Z)(function*(){yield(0,c.d)(i,"loadingEnter",t,h),i.duration>0&&(i.durationTimeout=setTimeout(()=>i.dismiss(),i.duration+10))})()}dismiss(i,l){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,c.f)(this,i,l,"loadingLeave",r,u)}onDidDismiss(){return(0,c.g)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return(0,c.g)(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:l,htmlAttributes:s}=this,d=(0,p.b)(this);return(0,n.h)(n.H,Object.assign({tabindex:"-1"},s,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[d]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),(0,n.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,n.h)("div",{tabindex:"0"}),(0,n.h)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},l&&(0,n.h)("div",{class:"loading-spinner"},(0,n.h)("ion-spinner",{name:l,"aria-hidden":"true"})),void 0!==i&&(0,n.h)("div",{class:"loading-content",innerHTML:(0,_.s)(i)})),(0,n.h)("div",{tabindex:"0"}))}get el(){return(0,n.i)(this)}};x.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},1403:(y,g,a)=>{a.d(g,{c:()=>p,g:()=>_,h:()=>n,o:()=>e});var f=a(7374);const n=(o,t)=>null!==t.closest(o),p=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,_=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(r=>null!=r).map(r=>r.trim()).filter(r=>""!==r):[])(o).forEach(r=>t[r]=!0),t},b=/^[a-z][a-z0-9+\-.]*:/,e=function(){var o=(0,f.Z)(function*(t,r,h,u){if(null!=t&&"#"!==t[0]&&!b.test(t)){const m=document.querySelector("ion-router");if(m)return r?.preventDefault(),m.push(t,h,u)}return!1});return function(r,h,u,m){return o.apply(this,arguments)}}()}}]);