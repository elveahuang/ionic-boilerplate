import {
  createColorClasses
} from "./chunk-HSGDXAPU.js";
import {
  eye,
  eyeOff
} from "./chunk-J5G3FL6P.js";
import {
  getIonMode
} from "./chunk-C7BVS75L.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-LVAVXFQB.js";
import {
  printIonWarning
} from "./chunk-ZM7N4A2I.js";
import "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js
var iosInputPasswordToggleCss = "";
var IonInputPasswordToggleIosStyle0 = iosInputPasswordToggleCss;
var mdInputPasswordToggleCss = "";
var IonInputPasswordToggleMdStyle0 = mdInputPasswordToggleCss;
var InputPasswordToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.togglePasswordVisibility = () => {
      const { inputElRef } = this;
      if (!inputElRef) {
        return;
      }
      inputElRef.type = inputElRef.type === "text" ? "password" : "text";
    };
    this.color = void 0;
    this.showIcon = void 0;
    this.hideIcon = void 0;
    this.type = "password";
  }
  /**
   * Whenever the input type changes we need to re-run validation to ensure the password
   * toggle is being used with the correct input type. If the application changes the type
   * outside of this component we also need to re-render so the correct icon is shown.
   */
  onTypeChange(newValue) {
    if (newValue !== "text" && newValue !== "password") {
      printIonWarning(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${newValue}" is not compatible.`, this.el);
      return;
    }
  }
  connectedCallback() {
    const { el } = this;
    const inputElRef = this.inputElRef = el.closest("ion-input");
    if (!inputElRef) {
      printIonWarning("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.", el);
      return;
    }
    this.type = inputElRef.type;
  }
  disconnectedCallback() {
    this.inputElRef = null;
  }
  render() {
    var _a, _b;
    const { color, type } = this;
    const mode = getIonMode(this);
    const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : eye;
    const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : eyeOff;
    const isPasswordVisible = type === "text";
    return h(Host, { key: "ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d", class: createColorClasses(color, {
      [mode]: true
    }) }, h("ion-button", { key: "9698eccdaedb86cf12d20acc53660371b3af3c55", mode, color, fill: "clear", shape: "round", "aria-checked": isPasswordVisible ? "true" : "false", "aria-label": "show password", role: "switch", type: "button", onPointerDown: (ev) => {
      ev.preventDefault();
    }, onClick: this.togglePasswordVisibility }, h("ion-icon", { key: "1f2119c30b56c800d9af44e6499445a0ebb466cf", slot: "icon-only", "aria-hidden": "true", icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "type": ["onTypeChange"]
    };
  }
};
InputPasswordToggle.style = {
  ios: IonInputPasswordToggleIosStyle0,
  md: IonInputPasswordToggleMdStyle0
};
export {
  InputPasswordToggle as ion_input_password_toggle
};
