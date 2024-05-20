"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4280],{

/***/ 4280:
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;
const Text = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: '4b76333b1ea5cab134b9dc1f5670c0d5a253fc32',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.color, {
        [mode]: true
      })
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '3dee5f16bc58b3d92547d910bd4f441a00ce2039'
    }));
  }
};
Text.style = IonTextStyle0;


/***/ })

}]);