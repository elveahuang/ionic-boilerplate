import{a}from"./chunk-T2ZCX7TV.js";var c=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(c||{});var t={getEngine(){let n=a();if(n!=null&&n.isPluginAvailable("Haptics"))return n.Plugins.Haptics},available(){if(!this.getEngine())return!1;let e=a();return(e==null?void 0:e.getPlatform())==="web"?typeof navigator<"u"&&navigator.vibrate!==void 0:!0},impact(n){let e=this.getEngine();e&&e.impact({style:n.style})},notification(n){let e=this.getEngine();e&&e.notification({type:n.type})},selection(){this.impact({style:c.Light})},selectionStart(){let n=this.getEngine();n&&n.selectionStart()},selectionChanged(){let n=this.getEngine();n&&n.selectionChanged()},selectionEnd(){let n=this.getEngine();n&&n.selectionEnd()}},i=()=>t.available(),o=()=>{i()&&t.selection()},r=()=>{i()&&t.selectionStart()},g=()=>{i()&&t.selectionChanged()},l=()=>{i()&&t.selectionEnd()},u=n=>{i()&&t.impact(n)};export{c as a,o as b,r as c,g as d,l as e,u as f};
