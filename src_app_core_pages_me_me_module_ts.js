"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pages_me_me_module_ts"],{

/***/ 6765:
/*!****************************************************!*\
  !*** ./src/app/core/pages/me/me-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MePageRoutingModule": () => (/* binding */ MePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_core_pages_me_me_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/core/pages/me/me.page */ 6942);




let MePageRoutingModule = class MePageRoutingModule {
};
MePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                {
                    path: '',
                    component: _app_core_pages_me_me_page__WEBPACK_IMPORTED_MODULE_0__.MePage,
                },
            ]),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MePageRoutingModule);



/***/ }),

/***/ 2437:
/*!********************************************!*\
  !*** ./src/app/core/pages/me/me.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MePageModule": () => (/* binding */ MePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_core_pages_me_me_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/core/pages/me/me.page */ 6942);
/* harmony import */ var _app_core_pages_me_me_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/core/pages/me/me-routing.module */ 6765);







let MePageModule = class MePageModule {
};
MePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _app_core_pages_me_me_routing_module__WEBPACK_IMPORTED_MODULE_1__.MePageRoutingModule],
        declarations: [_app_core_pages_me_me_page__WEBPACK_IMPORTED_MODULE_0__.MePage],
    })
], MePageModule);



/***/ }),

/***/ 6942:
/*!******************************************!*\
  !*** ./src/app/core/pages/me/me.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MePage": () => (/* binding */ MePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _me_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./me.page.html?ngResource */ 5537);
/* harmony import */ var _me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me.page.scss?ngResource */ 9717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MePage = class MePage {
    constructor() { }
    static ctorParameters = () => [];
};
MePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-me',
        template: _me_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MePage);



/***/ }),

/***/ 9717:
/*!*******************************************************!*\
  !*** ./src/app/core/pages/me/me.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5537:
/*!*******************************************************!*\
  !*** ./src/app/core/pages/me/me.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>Me</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>Me</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pages_me_me_module_ts.js.map