"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4165],{

/***/ 4165:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_radio: () => (/* binding */ Radio),
/* harmony export */   ion_radio_group: () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2235);
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare-with-utils-a96ff2ea.js */ 4451);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:\"\";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}";
const IonRadioIosStyle0 = radioIosCss;
const radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:\"\";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}";
const IonRadioMdStyle0 = radioMdCss;
const Radio = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionFocus = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    this.radioGroup = null;
    this.updateState = () => {
      if (this.radioGroup) {
        const {
          compareWith,
          value: radioGroupValue
        } = this.radioGroup;
        this.checked = (0,_compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__.i)(radioGroupValue, this.value, compareWith);
      }
    };
    this.onClick = () => {
      const {
        radioGroup,
        checked,
        disabled
      } = this;
      if (disabled) {
        return;
      }
      /**
       * The modern control does not use a native input
       * inside of the radio host, so we cannot rely on the
       * ev.preventDefault() behavior above. If the radio
       * is checked and the parent radio group allows for empty
       * selection, then we can set the checked state to false.
       * Otherwise, the checked state should always be set
       * to true because the checked state cannot be toggled.
       */
      if (checked && (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowEmptySelection)) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.checked = false;
    this.buttonTabindex = -1;
    this.color = undefined;
    this.name = this.inputId;
    this.disabled = false;
    this.value = undefined;
    this.labelPlacement = 'start';
    this.justify = 'space-between';
    this.alignment = 'center';
  }
  valueChanged() {
    /**
     * The new value of the radio may
     * match the radio group's value,
     * so we see if it should be checked.
     */
    this.updateState();
  }
  componentDidLoad() {
    /**
     * The value may be `undefined` if it
     * gets set before the radio is
     * rendered. This ensures that the radio
     * is checked if the value matches. This
     * happens most often when Angular is
     * rendering the radio.
     */
    this.updateState();
  }
  /** @internal */
  setFocus(ev) {
    var _this = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ev.stopPropagation();
      ev.preventDefault();
      _this.el.focus();
    })();
  }
  /** @internal */
  setButtonTabindex(value) {
    var _this2 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.buttonTabindex = value;
    })();
  }
  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = this.radioGroup = this.el.closest('ion-radio-group');
    if (radioGroup) {
      this.updateState();
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.a)(radioGroup, 'ionValueChange', this.updateState);
    }
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.b)(radioGroup, 'ionValueChange', this.updateState);
      this.radioGroup = null;
    }
  }
  get hasLabel() {
    return this.el.textContent !== '';
  }
  renderRadioControl() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-icon",
      part: "container"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-inner",
      part: "mark"
    }), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-ripple"
    }));
  }
  render() {
    const {
      checked,
      disabled,
      color,
      el,
      justify,
      labelPlacement,
      hasLabel,
      buttonTabindex,
      alignment
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    const inItem = (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-item', el);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '43c95effb6acb119733270e8a5e02fe18b47ee4b',
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'in-item': inItem,
        'radio-checked': checked,
        'radio-disabled': disabled,
        [`radio-justify-${justify}`]: true,
        [`radio-alignment-${alignment}`]: true,
        [`radio-label-placement-${labelPlacement}`]: true,
        // Focus and active styling should not apply when the radio is in an item
        'ion-activatable': !inItem,
        'ion-focusable': !inItem
      }),
      role: "radio",
      "aria-checked": checked ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : null,
      tabindex: buttonTabindex
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      key: '168ea77c08fde9832077d617662b93dc9986b544',
      class: "radio-wrapper"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'ce1e6eee63fbab1e5a66b18f767f4eecc2a227f1',
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !hasLabel
      },
      part: "label"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '7d849e43d4356b5c3978c2bba9a6fba5d21ca69d'
    })), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'e741f7822364958b050a232bdfccdc413095c244',
      class: "native-wrapper"
    }, this.renderRadioControl())));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
let radioButtonIds = 0;
Radio.style = {
  ios: IonRadioIosStyle0,
  md: IonRadioMdStyle0
};
const RadioGroup = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionValueChange = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionValueChange", 7);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.labelId = `${this.inputId}-lbl`;
    this.setRadioTabindex = value => {
      const radios = this.getRadios();
      // Get the first radio that is not disabled and the checked one
      const first = radios.find(radio => !radio.disabled);
      const checked = radios.find(radio => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      // If an enabled checked radio exists, set it to be the focusable radio
      // otherwise we default to focus the first radio
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = ev => {
      ev.preventDefault();
      /**
       * The Radio Group component mandates that only one radio button
       * within the group can be selected at any given time. Since `ion-radio`
       * is a shadow DOM component, it cannot natively perform this behavior
       * using the `name` attribute.
       */
      const selectedRadio = ev.target && ev.target.closest('ion-radio');
      /**
       * Our current disabled prop definition causes Stencil to mark it
       * as optional. While this is not desired, fixing this behavior
       * in Stencil is a significant breaking change, so this effort is
       * being de-risked in STENCIL-917. Until then, we compromise
       * here by checking for falsy `disabled` values instead of strictly
       * checking `disabled === false`.
       */
      if (selectedRadio && !selectedRadio.disabled) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
          this.emitValueChange(ev);
        } else if (this.allowEmptySelection) {
          this.value = undefined;
          this.emitValueChange(ev);
        }
      }
    };
    this.allowEmptySelection = false;
    this.compareWith = undefined;
    this.name = this.inputId;
    this.value = undefined;
  }
  valueChanged(value) {
    this.setRadioTabindex(value);
    this.ionValueChange.emit({
      value
    });
  }
  componentDidLoad() {
    /**
     * There's an issue when assigning a value to the radio group
     * within the Angular primary content (rendering within the
     * app component template). When the template is isolated to a route,
     * the value is assigned correctly.
     * To address this issue, we need to ensure that the watcher is
     * called after the component has finished loading,
     * allowing the emit to be dispatched correctly.
     */
    this.valueChanged(this.value);
  }
  connectedCallback() {
    var _this3 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get the list header if it exists and set the id
      // this is used to set aria-labelledby
      const header = _this3.el.querySelector('ion-list-header') || _this3.el.querySelector('ion-item-divider');
      if (header) {
        const label = _this3.label = header.querySelector('ion-label');
        if (label) {
          _this3.labelId = label.id = _this3.name + '-lbl';
        }
      }
    })();
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll('ion-radio'));
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    this.ionChange.emit({
      value,
      event
    });
  }
  onKeydown(ev) {
    const inSelectPopover = !!this.el.closest('ion-select-popover');
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const radios = this.getRadios().filter(radio => !radio.disabled);
    // Only move the radio if the current focus is in the radio group
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex(radio => radio === ev.target);
      const current = radios[index];
      let next;
      // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio
      if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio
      if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        if (!inSelectPopover) {
          this.value = next.value;
          this.emitValueChange(ev);
        }
      }
      // Update the radio group value when a user presses the
      // space bar on top of a selected radio
      if ([' '].includes(ev.key)) {
        const previousValue = this.value;
        this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value;
        if (previousValue !== this.value || this.allowEmptySelection) {
          /**
           * Value change should only be emitted if the value is different,
           * such as selecting a new radio with the space bar or if
           * the radio group allows for empty selection and the user
           * is deselecting a checked radio.
           */
          this.emitValueChange(ev);
        }
        // Prevent browsers from jumping
        // to the bottom of the screen
        ev.preventDefault();
      }
    }
  }
  render() {
    const {
      label,
      labelId,
      el,
      name,
      value
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.d)(true, el, name, value, false);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '7a8ad7eb6a05c6f96a348dcf30fd0c610a95688c',
      role: "radiogroup",
      "aria-labelledby": label ? labelId : null,
      onClick: this.onClick,
      class: mode
    });
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
let radioGroupIds = 0;


/***/ })

}]);