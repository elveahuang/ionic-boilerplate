"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_demo_pages_swiper_swiper_module_ts"],{

/***/ 5961:
/*!************************************************************!*\
  !*** ./src/app/demo/pages/swiper/swiper-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperPageRoutingModule": () => (/* binding */ SwiperPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _swiper_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.page */ 8449);




let SwiperPageRoutingModule = class SwiperPageRoutingModule {
};
SwiperPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                {
                    path: '',
                    component: _swiper_page__WEBPACK_IMPORTED_MODULE_0__.SwiperPage,
                },
            ]),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SwiperPageRoutingModule);



/***/ }),

/***/ 1035:
/*!****************************************************!*\
  !*** ./src/app/demo/pages/swiper/swiper.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperPageModule": () => (/* binding */ SwiperPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _swiper_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-routing.module */ 5961);
/* harmony import */ var _swiper_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.page */ 8449);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);








let SwiperPageModule = class SwiperPageModule {
};
SwiperPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _swiper_routing_module__WEBPACK_IMPORTED_MODULE_0__.SwiperPageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
        declarations: [_swiper_page__WEBPACK_IMPORTED_MODULE_1__.SwiperPage],
    })
], SwiperPageModule);



/***/ }),

/***/ 8449:
/*!**************************************************!*\
  !*** ./src/app/demo/pages/swiper/swiper.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperPage": () => (/* binding */ SwiperPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _swiper_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.page.html?ngResource */ 6242);
/* harmony import */ var _swiper_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.page.scss?ngResource */ 6966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);





swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_2__.A11y]);
let SwiperPage = class SwiperPage {
    onSegmentChange($event) {
        console.log($event);
    }
    onSwiper(swiper) {
        console.log(swiper);
    }
    onSlideChange() {
        console.log('slide change');
    }
};
SwiperPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-swiper',
        template: _swiper_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_swiper_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SwiperPage);



/***/ }),

/***/ 6966:
/*!***************************************************************!*\
  !*** ./src/app/demo/pages/swiper/swiper.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/**\n * Swiper 8.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: July 13, 2022\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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');font-weight:400;font-style:normal}\n\n:root{--swiper-theme-color:#007aff}\n\n.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n\n.swiper-vertical>.swiper-wrapper{flex-direction:column}\n\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}\n\n.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}\n\n.swiper-pointer-events{touch-action:pan-y}\n\n.swiper-pointer-events.swiper-vertical{touch-action:pan-x}\n\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}\n\n.swiper-slide-invisible-blank{visibility:hidden}\n\n.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}\n\n.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}\n\n.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}\n\n.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}\n\n.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}\n\n.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n\n.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}\n\n.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}\n\n.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}\n\n.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}\n\n.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}\n\n.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}\n\n.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}\n\n.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}\n\n.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}\n\n.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFVRTs7QUFFRixXQUFXLHdCQUF3QixDQUFDLDRyRUFBNHJFLENBQUMsZUFBZSxDQUFDLGlCQUFpQjs7QUFBQyxNQUFNLDRCQUE0Qjs7QUFBQyxRQUFRLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVM7O0FBQUMsaUNBQWlDLHFCQUFxQjs7QUFBQyxnQkFBZ0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLHNCQUFzQjs7QUFBQyw4Q0FBOEMsOEJBQThCOztBQUFDLHVCQUF1QixrQkFBa0I7O0FBQUMsdUNBQXVDLGtCQUFrQjs7QUFBQyxjQUFjLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLDZCQUE2Qjs7QUFBQyw4QkFBOEIsaUJBQWlCOztBQUFDLG9EQUFvRCxXQUFXOztBQUFDLG1DQUFtQyxzQkFBc0IsQ0FBQyxvQ0FBb0M7O0FBQUMsc0NBQXNDLHVCQUF1QixDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjs7QUFBQyxzREFBc0Qsa0JBQWtCOztBQUFDLHlRQUF5USwyQkFBMkI7O0FBQUMsc0xBQXNMLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVOztBQUFDLGdDQUFnQywwQkFBMEI7O0FBQUMscUNBQXFDLHNFQUFzRTs7QUFBQyxzQ0FBc0MsdUVBQXVFOztBQUFDLG9DQUFvQyxxRUFBcUU7O0FBQUMsdUNBQXVDLHdFQUF3RTs7QUFBQyxpQ0FBaUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1Qjs7QUFBQyxvREFBb0QsWUFBWTs7QUFBQywrQ0FBK0MsNkJBQTZCOztBQUFDLG1EQUFtRCw0QkFBNEI7O0FBQUMsaURBQWlELDRCQUE0Qjs7QUFBQyx5Q0FBeUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVOztBQUFDLDZFQUE2RSx3REFBd0Q7O0FBQUMsMkRBQTJELFdBQVcsQ0FBQyxjQUFjLENBQUMseUNBQXlDOztBQUFDLDJFQUEyRSx1REFBdUQ7O0FBQUMseURBQXlELFVBQVUsQ0FBQyxhQUFhLENBQUMsMENBQTBDOztBQUFDLCtDQUErQywrQkFBK0IiLCJmaWxlIjoic3dpcGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDguMy4xXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIyIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEp1bHkgMTMsIDIwMjJcbiAqL1xuXG5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnN3aXBlci1pY29ucztzcmM6dXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH06cm9vdHstLXN3aXBlci10aGVtZS1jb2xvcjojMDA3YWZmfS5zd2lwZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwwLDApfS5zd2lwZXItcG9pbnRlci1ldmVudHN7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLXZlcnRpY2Fse3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLXNsaWRle2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybX0uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua3t2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWF1dG9oZWlnaHQsLnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodH0uc3dpcGVyLWJhY2tmYWNlLWhpZGRlbiAuc3dpcGVyLXNsaWRle3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci0zZCwuc3dpcGVyLTNkLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXJ7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLTNkIC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvd3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7b3ZlcmZsb3c6YXV0bztzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQgc3RhcnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2NvbnRlbnQ6Jyc7ZmxleC1zaHJpbms6MDtvcmRlcjo5OTk5fS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjFweDt3aWR0aDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4tYmxvY2stc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle3dpZHRoOjEwMCU7bWluLXdpZHRoOjFweDtoZWlnaHQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpjZW50ZXIgY2VudGVyfSJdfQ== */";

/***/ }),

/***/ 6242:
/*!***************************************************************!*\
  !*** ./src/app/demo/pages/swiper/swiper.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Swiper</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-toolbar>\n        <ion-segment (ionChange)=\"onSegmentChange($event)\">\n            <ion-segment-button value=\"camera\">\n                <ion-icon name=\"camera\"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value=\"bookmark\">\n                <ion-icon name=\"bookmark\"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n    <swiper [slidesPerView]=\"3\" [spaceBetween]=\"50\" (swiper)=\"onSwiper($event)\" (slideChange)=\"onSlideChange()\">\n        <ng-template swiperSlide>Slide 1</ng-template>\n        <ng-template swiperSlide>Slide 2</ng-template>\n        <ng-template swiperSlide>Slide 3</ng-template>\n    </swiper>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_swiper_swiper_module_ts.js.map