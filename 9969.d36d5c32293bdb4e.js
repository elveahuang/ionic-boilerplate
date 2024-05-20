"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9969],{

/***/ 9969:
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-select_3.entry.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_select: () => (/* binding */ Select),
/* harmony export */   ion_select_option: () => (/* binding */ SelectOption),
/* harmony export */   ion_select_popover: () => (/* binding */ SelectPopover)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2235);
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notch-controller-55b09e11.js */ 2590);
/* harmony import */ var _compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare-with-utils-a96ff2ea.js */ 4451);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-df2c06b2.js */ 1325);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir-babeabeb.js */ 4098);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _watch_options_c2911ace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./watch-options-c2911ace.js */ 6978);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 6001);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-a5d50daf.js */ 1829);
/* harmony import */ var _hardware_back_button_2d9760b6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hardware-back-button-2d9760b6.js */ 7008);
/* harmony import */ var _framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./framework-delegate-63d1a679.js */ 6266);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 1533);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 5332);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */















const selectIosCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host{--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
const IonSelectIosStyle0 = selectIosCss;
const selectMdCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{-ms-flex-positive:1;flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}.select-icon{width:0.8125rem;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{-webkit-transform:scale(1);transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
const IonSelectMdStyle0 = selectMdCss;
const Select = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionCancel = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionCancel", 7);
    this.ionDismiss = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionDismiss", 7);
    this.ionFocus = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.inputId = `ion-sel-${selectIds++}`;
    this.inheritedAttributes = {};
    this.onClick = ev => {
      const target = ev.target;
      const closestSlot = target.closest('[slot="start"], [slot="end"]');
      if (target === this.el || closestSlot === null) {
        this.setFocus();
        this.open(ev);
      } else {
        /**
         * Prevent clicks to the start/end slots from opening the select.
         * We ensure the target isn't this element in case the select is slotted
         * in, for example, an item. This would prevent the select from ever
         * being opened since the element itself has slot="start"/"end".
         *
         * Clicking a slotted element also causes a click
         * on the <label> element (since it wraps the slots).
         * Clicking <label> dispatches another click event on
         * the native form control that then bubbles up to this
         * listener. This additional event targets the host
         * element, so the select overlay is opened.
         *
         * When the slotted elements are clicked (and therefore
         * the ancestor <label> element) we want to prevent the label
         * from dispatching another click event.
         *
         * Do not call stopPropagation() because this will cause
         * click handlers on the slotted elements to never fire in React.
         * When developers do onClick in React a native "click" listener
         * is added on the root element, not the slotted element. When that
         * native click listener fires, React then dispatches the synthetic
         * click event on the slotted element. However, if stopPropagation
         * is called then the native click event will never bubble up
         * to the root element.
         */
        ev.preventDefault();
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.isExpanded = false;
    this.cancelText = 'Cancel';
    this.color = undefined;
    this.compareWith = undefined;
    this.disabled = false;
    this.fill = undefined;
    this.interface = 'alert';
    this.interfaceOptions = {};
    this.justify = 'space-between';
    this.label = undefined;
    this.labelPlacement = 'start';
    this.multiple = false;
    this.name = this.inputId;
    this.okText = 'OK';
    this.placeholder = undefined;
    this.selectedText = undefined;
    this.toggleIcon = undefined;
    this.expandedIcon = undefined;
    this.shape = undefined;
    this.value = undefined;
  }
  styleChanged() {
    this.emitStyle();
  }
  setValue(value) {
    this.value = value;
    this.ionChange.emit({
      value
    });
  }
  connectedCallback() {
    var _this = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        el
      } = _this;
      _this.notchController = (0,_notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__.c)(el, () => _this.notchSpacerEl, () => _this.labelSlot);
      _this.updateOverlayOptions();
      _this.emitStyle();
      _this.mutationO = (0,_watch_options_c2911ace_js__WEBPACK_IMPORTED_MODULE_8__.w)(_this.el, 'ion-select-option', /*#__PURE__*/(0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.updateOverlayOptions();
        /**
         * We need to re-render the component
         * because one of the new ion-select-option
         * elements may match the value. In this case,
         * the rendered selected text should be updated.
         */
        (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.j)(_this);
      }));
    })();
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.el, ['aria-label']);
  }
  componentDidLoad() {
    /**
     * If any of the conditions that trigger the styleChanged callback
     * are met on component load, it is possible the event emitted
     * prior to a parent web component registering an event listener.
     *
     * To ensure the parent web component receives the event, we
     * emit the style event again after the component has loaded.
     *
     * This is often seen in Angular with the `dist` output target.
     */
    this.emitStyle();
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  open(event) {
    var _this2 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.disabled || _this2.isExpanded) {
        return undefined;
      }
      _this2.isExpanded = true;
      const overlay = _this2.overlay = yield _this2.createOverlay(event);
      overlay.onDidDismiss().then(() => {
        _this2.overlay = undefined;
        _this2.isExpanded = false;
        _this2.ionDismiss.emit();
        _this2.setFocus();
      });
      yield overlay.present();
      // focus selected option for popovers
      if (_this2.interface === 'popover') {
        const indexOfSelected = _this2.childOpts.map(o => o.value).indexOf(_this2.value);
        if (indexOfSelected > -1) {
          const selectedItem = overlay.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
          if (selectedItem) {
            (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.f)(selectedItem);
            /**
             * Browsers such as Firefox do not
             * correctly delegate focus when manually
             * focusing an element with delegatesFocus.
             * We work around this by manually focusing
             * the interactive element.
             * ion-radio and ion-checkbox are the only
             * elements that ion-select-popover uses, so
             * we only need to worry about those two components
             * when focusing.
             */
            const interactiveEl = selectedItem.querySelector('ion-radio, ion-checkbox');
            if (interactiveEl) {
              interactiveEl.focus();
            }
          }
        } else {
          /**
           * If no value is set then focus the first enabled option.
           */
          const firstEnabledOption = overlay.querySelector('ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)');
          if (firstEnabledOption) {
            (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.f)(firstEnabledOption.closest('ion-item'));
            /**
             * Focus the option for the same reason as we do above.
             */
            firstEnabledOption.focus();
          }
        }
      }
      return overlay;
    })();
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (selectInterface === 'action-sheet' && this.multiple) {
      console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'popover' && !ev) {
      console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'action-sheet') {
      return this.openActionSheet();
    }
    if (selectInterface === 'popover') {
      return this.openPopover(ev);
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case 'action-sheet':
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case 'popover':
        const popover = overlay.querySelector('ion-select-popover');
        if (popover) {
          popover.options = this.createPopoverOptions(childOpts, value);
        }
        break;
      case 'alert':
        const inputType = this.multiple ? 'checkbox' : 'radio';
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }
  createActionSheetButtons(data, selectValue) {
    const actionSheetButtons = data.map(option => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        role: (0,_compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__.i)(selectValue, value, this.compareWith) ? 'selected' : '',
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.setValue(value);
        }
      };
    });
    // Add "cancel" button
    actionSheetButtons.push({
      text: this.cancelText,
      role: 'cancel',
      handler: () => {
        this.ionCancel.emit();
      }
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType, selectValue) {
    const alertInputs = data.map(option => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || '',
        value,
        checked: (0,_compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__.i)(selectValue, value, this.compareWith),
        disabled: option.disabled
      };
    });
    return alertInputs;
  }
  createPopoverOptions(data, selectValue) {
    const popoverOptions = data.map(option => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || '',
        cssClass: optClass,
        value,
        checked: (0,_compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__.i)(selectValue, value, this.compareWith),
        disabled: option.disabled,
        handler: selected => {
          this.setValue(selected);
          if (!this.multiple) {
            this.close();
          }
        }
      };
    });
    return popoverOptions;
  }
  openPopover(ev) {
    var _this3 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        fill,
        labelPlacement
      } = _this3;
      const interfaceOptions = _this3.interfaceOptions;
      const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(_this3);
      const showBackdrop = mode === 'md' ? false : true;
      const multiple = _this3.multiple;
      const value = _this3.value;
      let event = ev;
      let size = 'auto';
      const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
      /**
       * The popover should take up the full width
       * when using a fill in MD mode or if the
       * label is floating/stacked.
       */
      if (hasFloatingOrStackedLabel || mode === 'md' && fill !== undefined) {
        size = 'cover';
        /**
         * Otherwise the popover
         * should be positioned relative
         * to the native element.
         */
      } else {
        event = Object.assign(Object.assign({}, ev), {
          detail: {
            ionShadowTarget: _this3.nativeWrapperEl
          }
        });
      }
      const popoverOpts = Object.assign(Object.assign({
        mode,
        event,
        alignment: 'center',
        size,
        showBackdrop
      }, interfaceOptions), {
        component: 'ion-select-popover',
        cssClass: ['select-popover', interfaceOptions.cssClass],
        componentProps: {
          header: interfaceOptions.header,
          subHeader: interfaceOptions.subHeader,
          message: interfaceOptions.message,
          multiple,
          value,
          options: _this3.createPopoverOptions(_this3.childOpts, value)
        }
      });
      return _overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_5__.c.create(popoverOpts);
    })();
  }
  openActionSheet() {
    var _this4 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(_this4);
      const interfaceOptions = _this4.interfaceOptions;
      const actionSheetOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        buttons: _this4.createActionSheetButtons(_this4.childOpts, _this4.value),
        cssClass: ['select-action-sheet', interfaceOptions.cssClass]
      });
      return _overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_5__.b.create(actionSheetOpts);
    })();
  }
  openAlert() {
    var _this5 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const interfaceOptions = _this5.interfaceOptions;
      const inputType = _this5.multiple ? 'checkbox' : 'radio';
      const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(_this5);
      const alertOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        header: interfaceOptions.header ? interfaceOptions.header : _this5.labelText,
        inputs: _this5.createAlertInputs(_this5.childOpts, inputType, _this5.value),
        buttons: [{
          text: _this5.cancelText,
          role: 'cancel',
          handler: () => {
            _this5.ionCancel.emit();
          }
        }, {
          text: _this5.okText,
          handler: selectedValues => {
            _this5.setValue(selectedValues);
          }
        }],
        cssClass: ['select-alert', interfaceOptions.cssClass, _this5.multiple ? 'multiple-select-alert' : 'single-select-alert']
      });
      return _overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_5__.a.create(alertOpts);
    })();
  }
  /**
   * Close the select interface.
   */
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ion-select-option'));
  }
  /**
   * Returns any plaintext associated with
   * the label (either prop or slot).
   * Note: This will not return any custom
   * HTML. Use the `hasLabel` getter if you
   * want to know if any slotted label content
   * was passed.
   */
  get labelText() {
    const {
      label
    } = this;
    if (label !== undefined) {
      return label;
    }
    const {
      labelSlot
    } = this;
    if (labelSlot !== null) {
      return labelSlot.textContent;
    }
    return;
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== '') {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    const {
      disabled
    } = this;
    const style = {
      'interactive-disabled': disabled
    };
    this.ionStyle.emit(style);
  }
  renderLabel() {
    const {
      label
    } = this;
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel
      },
      part: "label"
    }, label === undefined ? (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "label"
    }) : (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "label-text"
    }, label));
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== undefined || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      /**
       * The outline fill has a special outline
       * that appears around the select and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [(0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "select-outline-container"
      }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "select-outline-start"
      }), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'select-outline-notch': true,
          'select-outline-notch-hidden': !this.hasLabel
        }
      }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: el => this.notchSpacerEl = el
      }, this.label)), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "select-outline-end"
      })), this.renderLabel()];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  /**
   * Renders either the placeholder
   * or the selected values based on
   * the state of the select.
   */
  renderSelectText() {
    const {
      placeholder
    } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    };
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      "aria-hidden": "true",
      class: selectTextClasses,
      part: textPart
    }, selectText);
  }
  /**
   * Renders the chevron icon
   * next to the select text.
   */
  renderSelectIcon() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(this);
    const {
      isExpanded,
      toggleIcon,
      expandedIcon
    } = this;
    let icon;
    if (isExpanded && expandedIcon !== undefined) {
      icon = expandedIcon;
    } else {
      const defaultIcon = mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_9__.w : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_9__.q;
      icon = toggleIcon !== null && toggleIcon !== void 0 ? toggleIcon : defaultIcon;
    }
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      class: "select-icon",
      part: "icon",
      "aria-hidden": "true",
      icon: icon
    });
  }
  get ariaLabel() {
    var _a;
    const {
      placeholder,
      inheritedAttributes
    } = this;
    const displayValue = this.getText();
    // The aria label should be preferred over visible text if both are specified
    const definedLabel = (_a = inheritedAttributes['aria-label']) !== null && _a !== void 0 ? _a : this.labelText;
    /**
     * If developer has specified a placeholder
     * and there is nothing selected, the selectText
     * should have the placeholder value.
     */
    let renderedLabel = displayValue;
    if (renderedLabel === '' && placeholder !== undefined) {
      renderedLabel = placeholder;
    }
    /**
     * If there is a developer-defined label,
     * then we need to concatenate the developer label
     * string with the current current value.
     * The label for the control should be read
     * before the values of the control.
     */
    if (definedLabel !== undefined) {
      renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
  }
  renderListbox() {
    const {
      disabled,
      inputId,
      isExpanded
    } = this;
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      disabled: disabled,
      id: inputId,
      "aria-label": this.ariaLabel,
      "aria-haspopup": "dialog",
      "aria-expanded": `${isExpanded}`,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      ref: focusEl => this.focusEl = focusEl
    });
  }
  render() {
    const {
      disabled,
      el,
      isExpanded,
      expandedIcon,
      labelPlacement,
      justify,
      placeholder,
      fill,
      shape,
      name,
      value
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(this);
    const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
    const justifyEnabled = !hasFloatingOrStackedLabel;
    const rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_6__.i)(el) ? 'rtl' : 'ltr';
    const inItem = (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    const hasValue = this.hasValue();
    const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.d)(true, el, name, parseValue(value), disabled);
    /**
     * If the label is stacked, it should always sit above the select.
     * For floating labels, the label should move above the select if
     * the select has a value, is open, or has anything in either
     * the start or end slot.
     *
     * If there is content in the start slot, the label would overlap
     * it if not forced to float. This is also applied to the end slot
     * because with the default or solid fills, the select is not
     * vertically centered in the container, but the label is. This
     * causes the slots and label to appear vertically offset from each
     * other when the label isn't floating above the input. This doesn't
     * apply to the outline fill, but this was not accounted for to keep
     * things consistent.
     *
     * TODO(FW-5592): Remove hasStartEndSlots condition
     */
    const labelShouldFloat = labelPlacement === 'stacked' || labelPlacement === 'floating' && (hasValue || isExpanded || hasStartEndSlots);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: 'e14586e887c0b73457b9f1e8f0585dfc7d590051',
      onClick: this.onClick,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.color, {
        [mode]: true,
        'in-item': inItem,
        'in-item-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item.ion-color', el),
        'select-disabled': disabled,
        'select-expanded': isExpanded,
        'has-expanded-icon': expandedIcon !== undefined,
        'has-value': hasValue,
        'label-floating': labelShouldFloat,
        'has-placeholder': placeholder !== undefined,
        'ion-focusable': true,
        [`select-${rtl}`]: true,
        [`select-fill-${fill}`]: fill !== undefined,
        [`select-justify-${justify}`]: justifyEnabled,
        [`select-shape-${shape}`]: shape !== undefined,
        [`select-label-placement-${labelPlacement}`]: true
      })
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      key: 'b44929542c809f2dca25afc588701762a083edd1',
      class: "select-wrapper",
      id: "select-label"
    }, this.renderLabelContainer(), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '195e3fad9cea0363ff00bf257ec2975fe5aa6887',
      class: "select-wrapper-inner"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '9da7161a69b92d6fd124a478348d3fa420092f26',
      name: "start"
    }), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '49c589c164d167de0ba5741a0c80fba58ea0bec6',
      class: "native-wrapper",
      ref: el => this.nativeWrapperEl = el,
      part: "container"
    }, this.renderSelectText(), this.renderListbox()), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'de1536d910fceb8e2dbdda13abcf88ee969888b8',
      name: "end"
    }), !hasFloatingOrStackedLabel && this.renderSelectIcon()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'e821b7b32cd1996eaa6d471df9b531ad0d491098',
      class: "select-highlight"
    })));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "disabled": ["styleChanged"],
      "isExpanded": ["styleChanged"],
      "placeholder": ["styleChanged"],
      "value": ["styleChanged"]
    };
  }
};
const getOptionValue = el => {
  const value = el.value;
  return value === undefined ? el.textContent || '' : value;
};
const parseValue = value => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value.toString();
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value.map(v => textForValue(opts, v, compareWith)).filter(opt => opt !== null).join(', ');
  } else {
    return textForValue(opts, value, compareWith) || '';
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find(opt => {
    return (0,_compare_with_utils_a96ff2ea_js__WEBPACK_IMPORTED_MODULE_3__.c)(value, getOptionValue(opt), compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
Select.style = {
  ios: IonSelectIosStyle0,
  md: IonSelectMdStyle0
};
const selectOptionCss = ":host{display:none}";
const IonSelectOptionStyle0 = selectOptionCss;
const SelectOption = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    this.disabled = false;
    this.value = undefined;
  }
  render() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: 'ba5a9c695c53fe0802af11a49f4305a9b8f71773',
      role: "option",
      id: this.inputId,
      class: (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(this)
    });
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
let selectOptionIds = 0;
SelectOption.style = IonSelectOptionStyle0;
const selectPopoverIosCss = ".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-ios-h{overflow-y:auto}";
const IonSelectPopoverIosStyle0 = selectPopoverIosCss;
const selectPopoverMdCss = ".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-md-h{overflow-y:auto}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(container){display:none}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
const IonSelectPopoverMdStyle0 = selectPopoverMdCss;
const SelectPopover = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.header = undefined;
    this.subHeader = undefined;
    this.message = undefined;
    this.multiple = undefined;
    this.options = [];
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find(o => o.value === ev.target.value);
  }
  /**
   * When an option is selected we need to get the value(s)
   * of the selected option(s) and return it in the option
   * handler
   */
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      (0,_overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_5__.s)(option.handler, values);
    }
  }
  /**
   * Dismisses the host popover that the `ion-select-popover`
   * is rendered within.
   */
  dismissParentPopover() {
    const popover = this.el.closest('ion-popover');
    if (popover) {
      popover.dismiss();
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    // this is a popover with checkboxes (multiple value select)
    // we need to set the checked value for this option
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      // this is a popover with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter(o => o.checked).map(o => o.value);
    }
    // this is a popover with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = this.findOptionFromEvent(ev);
    return option ? option.value : undefined;
  }
  renderOptions(options) {
    const {
      multiple
    } = this;
    switch (multiple) {
      case true:
        return this.renderCheckboxOptions(options);
      default:
        return this.renderRadioOptions(options);
    }
  }
  renderCheckboxOptions(options) {
    return options.map(option => (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        'item-checkbox-checked': option.checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__.g)(option.cssClass))
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: ev => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        // TODO FW-4784
        (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.j)(this);
      }
    }, option.text)));
  }
  renderRadioOptions(options) {
    const checked = options.filter(o => o.checked).map(o => o.value)[0];
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-radio-group", {
      value: checked,
      onIonChange: ev => this.callOptionHandler(ev)
    }, options.map(option => (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        'item-radio-checked': option.value === checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_7__.g)(option.cssClass))
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      onClick: () => this.dismissParentPopover(),
      onKeyUp: ev => {
        if (ev.key === ' ') {
          /**
           * Selecting a radio option with keyboard navigation,
           * either through the Enter or Space keys, should
           * dismiss the popover.
           */
          this.dismissParentPopover();
        }
      }
    }, option.text))));
  }
  render() {
    const {
      header,
      message,
      options,
      subHeader
    } = this;
    const hasSubHeaderOrMessage = subHeader !== undefined || message !== undefined;
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '302553a2eec4d1442751b8af28b7c9bd3487fd5d',
      class: (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_10__.b)(this)
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-list", {
      key: '39ae8579e6fe3bae2c7504147268ad5c82fd27e6'
    }, header !== undefined && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-list-header", {
      key: 'e0e6686380d188f46c593e1bb25287dcf08c75c2'
    }, header), hasSubHeaderOrMessage && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-item", {
      key: '8a2d8652db269593c0ba7d767277e12c2b06144d'
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-label", {
      key: 'a30cc0ecf95d5bdd6421ee1683922c1b853e98ea',
      class: "ion-text-wrap"
    }, subHeader !== undefined && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("h3", {
      key: 'c298459ca450123808a08d65660825b2c26d00e5'
    }, subHeader), message !== undefined && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("p", {
      key: 'ed895fbaec020e809021138401341b6fd7675035'
    }, message))), this.renderOptions(options)));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
SelectPopover.style = {
  ios: IonSelectPopoverIosStyle0,
  md: IonSelectPopoverMdStyle0
};


/***/ }),

/***/ 2590:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/notch-controller-55b09e11.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createNotchController)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 1829);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * A utility to calculate the size of an outline notch
 * width relative to the content passed. This is used in
 * components such as `ion-select` with `fill="outline"`
 * where we need to pass slotted HTML content. This is not
 * needed when rendering plaintext content because we can
 * render the plaintext again hidden with `opacity: 0` inside
 * of the notch. As a result we can rely on the intrinsic size
 * of the element to correctly compute the notch width. We
 * cannot do this with slotted content because we cannot project
 * it into 2 places at once.
 *
 * @internal
 * @param el: The host element
 * @param getNotchSpacerEl: A function that returns a reference to the notch spacer element inside of the component template.
 * @param getLabelSlot: A function that returns a reference to the slotted content.
 */
const createNotchController = (el, getNotchSpacerEl, getLabelSlot) => {
  let notchVisibilityIO;
  const needsExplicitNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (
    /**
     * If the notch is not being used
     * then we do not need to set the notch width.
     */
    notchSpacerEl === undefined ||
    /**
     * If either the label property is being
     * used or the label slot is not defined,
     * then we do not need to estimate the notch width.
     */
    el.label !== undefined || getLabelSlot() === null) {
      return false;
    }
    return true;
  };
  const calculateNotchWidth = () => {
    if (needsExplicitNotchWidth()) {
      /**
       * Run this the frame after
       * the browser has re-painted the host element.
       * Otherwise, the label element may have a width
       * of 0 and the IntersectionObserver will be used.
       */
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
        setNotchWidth();
      });
    }
  };
  /**
   * When using a label prop we can render
   * the label value inside of the notch and
   * let the browser calculate the size of the notch.
   * However, we cannot render the label slot in multiple
   * places so we need to manually calculate the notch dimension
   * based on the size of the slotted content.
   *
   * This function should only be used to set the notch width
   * on slotted label content. The notch width for label prop
   * content is automatically calculated based on the
   * intrinsic size of the label text.
   */
  const setNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (notchSpacerEl === undefined) {
      return;
    }
    if (!needsExplicitNotchWidth()) {
      notchSpacerEl.style.removeProperty('width');
      return;
    }
    const width = getLabelSlot().scrollWidth;
    if (
    /**
     * If the computed width of the label is 0
     * and notchSpacerEl's offsetParent is null
     * then that means the element is hidden.
     * As a result, we need to wait for the element
     * to become visible before setting the notch width.
     *
     * We do not check el.offsetParent because
     * that can be null if the host element has
     * position: fixed applied to it.
     * notchSpacerEl does not have position: fixed.
     */
    width === 0 && notchSpacerEl.offsetParent === null && _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined && "IntersectionObserver" in _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w) {
      /**
       * If there is an IO already attached
       * then that will update the notch
       * once the element becomes visible.
       * As a result, there is no need to create
       * another one.
       */
      if (notchVisibilityIO !== undefined) {
        return;
      }
      const io = notchVisibilityIO = new IntersectionObserver(ev => {
        /**
         * If the element is visible then we
         * can try setting the notch width again.
         */
        if (ev[0].intersectionRatio === 1) {
          setNotchWidth();
          io.disconnect();
          notchVisibilityIO = undefined;
        }
      },
      /**
       * Set the root to be the host element
       * This causes the IO callback
       * to be fired in WebKit as soon as the element
       * is visible. If we used the default root value
       * then WebKit would only fire the IO callback
       * after any animations (such as a modal transition)
       * finished, and there would potentially be a flicker.
       */
      {
        threshold: 0.01,
        root: el
      });
      io.observe(notchSpacerEl);
      return;
    }
    /**
     * If the element is visible then we can set the notch width.
     * The notch is only visible when the label is scaled,
     * which is why we multiply the width by 0.75 as this is
     * the same amount the label element is scaled by in the host CSS.
     * (See $form-control-label-stacked-scale in ionic.globals.scss).
     */
    notchSpacerEl.style.setProperty('width', `${width * 0.75}px`);
  };
  const destroy = () => {
    if (notchVisibilityIO) {
      notchVisibilityIO.disconnect();
      notchVisibilityIO = undefined;
    }
  };
  return {
    calculateNotchWidth,
    destroy
  };
};


/***/ })

}]);