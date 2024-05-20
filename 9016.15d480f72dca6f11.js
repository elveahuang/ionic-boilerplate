"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9016],{

/***/ 9016:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-picker-column-option.entry.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_picker_column_option: () => (/* binding */ PickerColumnOption)
/* harmony export */ });
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
const IonPickerColumnOptionIosStyle0 = pickerColumnOptionIosCss;
const pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
const IonPickerColumnOptionMdStyle0 = pickerColumnOptionMdCss;
const PickerColumnOption = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /**
     * We keep track of the parent picker column
     * so we can update the value of it when
     * clicking an enable option.
     */
    this.pickerColumn = null;
    this.ariaLabel = null;
    this.disabled = false;
    this.value = undefined;
    this.color = 'primary';
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
    const inheritedAttributes = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.el, ['aria-label']);
    /**
     * The initial value of `aria-label` needs to be set for
     * the first render.
          */
    this.ariaLabel = inheritedAttributes['aria-label'] || null;
  }
  connectedCallback() {
    this.pickerColumn = this.el.closest('ion-picker-column');
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
    const {
      pickerColumn
    } = this;
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
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.setValue(this.value);
    }
  }
  render() {
    const {
      color,
      disabled,
      ariaLabel
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: 'cc4435a0ce0e55be1321bcabaf342ed68cf5ba1e',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__.c)(color, {
        [mode]: true,
        ['option-disabled']: disabled
      })
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      key: '0187fb967771e0787807a8538dce4e59f6a98565',
      tabindex: "-1",
      "aria-label": ariaLabel,
      disabled: disabled,
      onClick: () => this.onClick()
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'dbe52552f3f27332816748c12d929cc81060841d'
    })));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
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


/***/ })

}]);