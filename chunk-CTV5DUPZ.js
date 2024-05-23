import {
  createColorClasses
} from "./chunk-HSGDXAPU.js";
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
  inheritAttributes
} from "./chunk-A6W4RR5W.js";
import "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-picker-column-option.entry.js
var pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
var IonPickerColumnOptionIosStyle0 = pickerColumnOptionIosCss;
var pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
var IonPickerColumnOptionMdStyle0 = pickerColumnOptionMdCss;
var PickerColumnOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pickerColumn = null;
    this.ariaLabel = null;
    this.disabled = false;
    this.value = void 0;
    this.color = "primary";
  }
  /**
   * The aria-label of the option has changed after the
   * first render and needs to be updated within the component.
   *
   * @param ariaLbl The new aria-label value.
   */
  onAriaLabelChange(ariaLbl) {
    this.ariaLabel = ariaLbl;
  }
  componentWillLoad() {
    const inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
    this.ariaLabel = inheritedAttributes["aria-label"] || null;
  }
  connectedCallback() {
    this.pickerColumn = this.el.closest("ion-picker-column");
  }
  disconnectedCallback() {
    this.pickerColumn = null;
  }
  /**
   * The column options can load at any time
   * so the options needs to tell the
   * parent picker column when it is loaded
   * so the picker column can ensure it is
   * centered in the view.
   *
   * We intentionally run this for every
   * option. If we only ran this from
   * the selected option then if the newly
   * loaded options were not selected then
   * scrollActiveItemIntoView would not be called.
   */
  componentDidLoad() {
    const { pickerColumn } = this;
    if (pickerColumn !== null) {
      pickerColumn.scrollActiveItemIntoView();
    }
  }
  /**
   * When an option is clicked, update the
   * parent picker column value. This
   * component will handle centering the option
   * in the column view.
   */
  onClick() {
    const { pickerColumn } = this;
    if (pickerColumn !== null) {
      pickerColumn.setValue(this.value);
    }
  }
  render() {
    const { color, disabled, ariaLabel } = this;
    const mode = getIonMode(this);
    return h(Host, { key: "cc4435a0ce0e55be1321bcabaf342ed68cf5ba1e", class: createColorClasses(color, {
      [mode]: true,
      ["option-disabled"]: disabled
    }) }, h("button", { key: "0187fb967771e0787807a8538dce4e59f6a98565", tabindex: "-1", "aria-label": ariaLabel, disabled, onClick: () => this.onClick() }, h("slot", { key: "dbe52552f3f27332816748c12d929cc81060841d" })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "aria-label": ["onAriaLabelChange"]
    };
  }
};
PickerColumnOption.style = {
  ios: IonPickerColumnOptionIosStyle0,
  md: IonPickerColumnOptionMdStyle0
};
export {
  PickerColumnOption as ion_picker_column_option
};
