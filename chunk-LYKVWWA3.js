import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-QPJI5M5R.js";
import {
  getIonMode
} from "./chunk-STVEE43Z.js";
import {
  Host,
  createEvent,
  getAssetPath,
  getElement,
  h,
  registerInstance
} from "./chunk-2YSWQYGY.js";
import {
  printIonWarning
} from "./chunk-AB2YFIZ6.js";
import {
  hasShadowDom,
  inheritAriaAttributes
} from "./chunk-TTWJLGM2.js";
import "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-button_2.entry.js
var CACHED_MAP;
var getIconMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      const win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url, i);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
var getNamedUrl = (iconName, iconEl) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  try {
    return getAssetPath(`svg/${iconName}.svg`);
  } catch (e) {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
  }
};
var getName = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower(ios);
  } else if (md && mode === "md") {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
var getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
var isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
var isStr = (val) => typeof val === "string";
var toLower = (val) => val.toLowerCase();
var inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
var buttonIosCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}';
var IonButtonIosStyle0 = buttonIosCss;
var buttonMdCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}';
var IonButtonMdStyle0 = buttonMdCss;
var Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.formButtonEl = null;
    this.formEl = null;
    this.inheritedAttributes = {};
    this.handleClick = (ev) => {
      const { el } = this;
      if (this.type === "button") {
        openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      } else if (hasShadowDom(el)) {
        this.submitForm(ev);
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.slotChanged = () => {
      this.isCircle = this.hasIconOnly;
    };
    this.isCircle = false;
    this.color = void 0;
    this.buttonType = "button";
    this.disabled = false;
    this.expand = void 0;
    this.fill = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.strong = false;
    this.target = void 0;
    this.type = "button";
    this.form = void 0;
  }
  disabledChanged() {
    const { disabled } = this;
    if (this.formButtonEl) {
      this.formButtonEl.disabled = disabled;
    }
  }
  /**
   * This is responsible for rendering a hidden native
   * button element inside the associated form. This allows
   * users to submit a form by pressing "Enter" when a text
   * field inside of the form is focused. The native button
   * rendered inside of `ion-button` is in the Shadow DOM
   * and therefore does not participate in form submission
   * which is why the following code is necessary.
   */
  renderHiddenButton() {
    const formEl = this.formEl = this.findForm();
    if (formEl) {
      const { formButtonEl } = this;
      if (formButtonEl !== null && formEl.contains(formButtonEl)) {
        return;
      }
      const newFormButtonEl = this.formButtonEl = document.createElement("button");
      newFormButtonEl.type = this.type;
      newFormButtonEl.style.display = "none";
      newFormButtonEl.disabled = this.disabled;
      formEl.appendChild(newFormButtonEl);
    }
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons");
    this.inListHeader = !!this.el.closest("ion-list-header");
    this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider");
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === void 0 || this.fill === "clear";
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return "unbounded";
    }
    return "bounded";
  }
  /**
   * Finds the form element based on the provided `form` selector
   * or element reference provided.
   */
  findForm() {
    const { form } = this;
    if (form instanceof HTMLFormElement) {
      return form;
    }
    if (typeof form === "string") {
      const el = document.getElementById(form);
      if (el) {
        if (el instanceof HTMLFormElement) {
          return el;
        } else {
          printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is attached to a <form> element.`, this.el);
          return null;
        }
      } else {
        printIonWarning(`Form with selector: "#${form}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, this.el);
        return null;
      }
    }
    if (form !== void 0) {
      printIonWarning(`The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.`, this.el);
      return null;
    }
    return this.el.closest("form");
  }
  submitForm(ev) {
    if (this.formEl && this.formButtonEl) {
      ev.preventDefault();
      this.formButtonEl.click();
    }
  }
  render() {
    const mode = getIonMode(this);
    const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === void 0 && this.inItem ? "small" : size;
    const TagType = href === void 0 ? "button" : "a";
    const attrs = TagType === "button" ? { type } : {
      download: this.download,
      href,
      rel,
      target
    };
    let fill = this.fill;
    if (fill == null) {
      fill = this.inToolbar || this.inListHeader ? "clear" : "solid";
    }
    {
      type !== "button" && this.renderHiddenButton();
    }
    return h(Host, { key: "8f3a0363d46ef888d22b0b0812c70cb4f79e6efa", onClick: this.handleClick, "aria-disabled": disabled ? "true" : null, class: createColorClasses(color, {
      [mode]: true,
      [buttonType]: true,
      [`${buttonType}-${expand}`]: expand !== void 0,
      [`${buttonType}-${finalSize}`]: finalSize !== void 0,
      [`${buttonType}-${shape}`]: shape !== void 0,
      [`${buttonType}-${fill}`]: true,
      [`${buttonType}-strong`]: strong,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "in-buttons": hostContext("ion-buttons", this.el),
      "button-has-icon-only": hasIconOnly,
      "button-disabled": disabled,
      "ion-activatable": true,
      "ion-focusable": true
    }) }, h(TagType, Object.assign({ key: "a517c7d06aab15ad4c2a51b8ec224c1aeb4ed565" }, attrs, { class: "button-native", part: "native", disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h("span", { key: "127c26dd97c0bf5097433df77df7313d59784899", class: "button-inner" }, h("slot", { key: "39d9a9cad8e1addbe63406062e555e05c2cb541b", name: "icon-only", onSlotchange: this.slotChanged }), h("slot", { key: "cfdebdd89155c6c21eb80e51e06456a3a6d877e0", name: "start" }), h("slot", { key: "eac497e0f97ab55baa834ae23155d89b0f7069c6" }), h("slot", { key: "c99f7900f8856b32a0b4ac11092d461f5e9a1109", name: "end" })), mode === "md" && h("ion-ripple-effect", { key: "c681edb0480879fbd801575f2233f6e118898638", type: this.rippleType })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Button.style = {
  ios: IonButtonIosStyle0,
  md: IonButtonMdStyle0
};
var validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
var isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
var isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
var ioniconContent = /* @__PURE__ */ new Map();
var requests = /* @__PURE__ */ new Map();
var parser;
var getSvgContent = (url, sanitize) => {
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && typeof document !== "undefined") {
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          parser = new DOMParser();
        }
        const doc = parser.parseFromString(url, "text/html");
        const svg = doc.querySelector("svg");
        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        req = fetch(url).then((rsp) => {
          if (rsp.ok) {
            return rsp.text().then((svgContent) => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }
              ioniconContent.set(url, svgContent || "");
            });
          }
          ioniconContent.set(url, "");
        });
        requests.set(url, req);
      }
    } else {
      ioniconContent.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var IonIconStyle0 = iconCss;
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.svgContent = void 0;
    this.isVisible = false;
    this.mode = getIonMode2();
    this.color = void 0;
    this.ios = void 0;
    this.md = void 0;
    this.flipRtl = void 0;
    this.name = void 0;
    this.src = void 0;
    this.icon = void 0;
    this.size = void 0;
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  componentDidLoad() {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && typeof window !== "undefined" && window.IntersectionObserver) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = void 0;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    } else {
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl, iconName, inheritedAttributes, el } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({ role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses2(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": shouldBeFlippable, "icon-rtl": shouldBeFlippable && isRTL(el) }) }, inheritedAttributes), this.svgContent ? h("div", { class: "icon-inner", innerHTML: this.svgContent }) : h("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
};
var getIonMode2 = () => typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
var createColorClasses2 = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
Icon.style = IonIconStyle0;
export {
  Button as ion_button,
  Icon as ion_icon
};
