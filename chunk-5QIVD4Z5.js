import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-HSGDXAPU.js";
import {
  arrowBackSharp,
  chevronBack
} from "./chunk-J5G3FL6P.js";
import {
  config,
  getIonMode
} from "./chunk-C7BVS75L.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-LVAVXFQB.js";
import {
  inheritAriaAttributes
} from "./chunk-A6W4RR5W.js";
import {
  __async
} from "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-back-button.entry.js
var backButtonIosCss = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';
var IonBackButtonIosStyle0 = backButtonIosCss;
var backButtonMdCss = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}';
var IonBackButtonMdStyle0 = backButtonMdCss;
var BackButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.onClick = (ev) => __async(this, null, function* () {
      const nav = this.el.closest("ion-nav");
      ev.preventDefault();
      if (nav && (yield nav.canGoBack())) {
        return nav.pop({ animationBuilder: this.routerAnimation, skipIfBusy: true });
      }
      return openURL(this.defaultHref, ev, "back", this.routerAnimation);
    });
    this.color = void 0;
    this.defaultHref = void 0;
    this.disabled = false;
    this.icon = void 0;
    this.text = void 0;
    this.type = "button";
    this.routerAnimation = void 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    if (this.defaultHref === void 0) {
      this.defaultHref = config.get("backButtonDefaultHref");
    }
  }
  get backButtonIcon() {
    const icon = this.icon;
    if (icon != null) {
      return icon;
    }
    if (getIonMode(this) === "ios") {
      return config.get("backButtonIcon", chevronBack);
    }
    return config.get("backButtonIcon", arrowBackSharp);
  }
  get backButtonText() {
    const defaultBackButtonText = getIonMode(this) === "ios" ? "Back" : null;
    return this.text != null ? this.text : config.get("backButtonText", defaultBackButtonText);
  }
  get hasIconOnly() {
    return this.backButtonIcon && !this.backButtonText;
  }
  get rippleType() {
    if (this.hasIconOnly) {
      return "unbounded";
    }
    return "bounded";
  }
  render() {
    const { color, defaultHref, disabled, type, hasIconOnly, backButtonIcon, backButtonText, icon, inheritedAttributes } = this;
    const showBackButton = defaultHref !== void 0;
    const mode = getIonMode(this);
    const ariaLabel = inheritedAttributes["aria-label"] || backButtonText || "back";
    return h(Host, { key: "8351c93a1812c94c979fb115f07a9ad7b3152188", onClick: this.onClick, class: createColorClasses(color, {
      [mode]: true,
      button: true,
      // ion-buttons target .button
      "back-button-disabled": disabled,
      "back-button-has-icon-only": hasIconOnly,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "ion-activatable": true,
      "ion-focusable": true,
      "show-back-button": showBackButton
    }) }, h("button", { key: "991b8baa784dbfbdf8d3581cbbf6a858ac1f1e6e", type, disabled, class: "button-native", part: "native", "aria-label": ariaLabel }, h("span", { key: "929fcd83a4fdb00cf97ca803f234719171602a5e", class: "button-inner" }, backButtonIcon && h("ion-icon", { key: "0c10d412ae8342d96f221e626b421c9abadac748", part: "icon", icon: backButtonIcon, "aria-hidden": "true", lazy: false, "flip-rtl": icon === void 0 }), backButtonText && h("span", { key: "96f505880a80f36ee8b8c78268b450f3629ee613", part: "text", "aria-hidden": "true", class: "button-text" }, backButtonText)), mode === "md" && h("ion-ripple-effect", { key: "0aecf5d415c608069eb1a10043530bd0929b6383", type: this.rippleType })));
  }
  get el() {
    return getElement(this);
  }
};
BackButton.style = {
  ios: IonBackButtonIosStyle0,
  md: IonBackButtonMdStyle0
};
export {
  BackButton as ion_back_button
};
