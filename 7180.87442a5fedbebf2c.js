"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7180],{

/***/ 7180:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_infinite_scroll: () => (/* binding */ InfiniteScroll),
/* harmony export */   ion_infinite_scroll_content: () => (/* binding */ InfiniteScrollContent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2235);
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-5cc724f3.js */ 3128);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/* harmony import */ var _config_49c88215_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-49c88215.js */ 3835);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 5332);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
const IonInfiniteScrollStyle0 = infiniteScrollCss;
const InfiniteScroll = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInfinite = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    /**
     * didFire exists so that ionInfinite
     * does not fire multiple times if
     * users continue to scroll after
     * scrolling into the infinite
     * scroll threshold.
     */
    this.didFire = false;
    this.isBusy = false;
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        // if there is no height of this element then do nothing
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === 'bottom' ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      }
      return 4;
    };
    this.isLoading = false;
    this.threshold = '15%';
    this.disabled = false;
    this.position = 'bottom';
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf('%') > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    } else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  connectedCallback() {
    var _this = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contentEl = (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_this.el);
      if (!contentEl) {
        (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.p)(_this.el);
        return;
      }
      _this.scrollEl = yield (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.g)(contentEl);
      _this.thresholdChanged();
      _this.disabledChanged();
      if (_this.position === 'top') {
        (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
          if (_this.scrollEl) {
            _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
          }
        });
      }
    })();
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = undefined;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  complete() {
    var _this2 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollEl = _this2.scrollEl;
      if (!_this2.isLoading || !scrollEl) {
        return;
      }
      _this2.isLoading = false;
      if (_this2.position === 'top') {
        /**
         * New content is being added at the top, but the scrollTop position stays the same,
         * which causes a scroll jump visually. This algorithm makes sure to prevent this.
         * (Frame 1)
         *    - complete() is called, but the UI hasn't had time to update yet.
         *    - Save the current content dimensions.
         *    - Wait for the next frame using _dom.read, so the UI will be updated.
         * (Frame 2)
         *    - Read the new content dimensions.
         *    - Calculate the height difference and the new scroll position.
         *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
         * (Still frame 2, if I'm correct)
         *    - Change the scroll position (= visually maintain the scroll position).
         *    - Change the state to re-enable the InfiniteScroll.
         *    - This should be after changing the scroll position, or it could
         *    cause the InfiniteScroll to be triggered again immediately.
         * (Frame 3)
         *    Done.
         */
        _this2.isBusy = true;
        // ******** DOM READ ****************
        // Save the current content dimensions before the UI updates
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
        // ******** DOM READ ****************
        requestAnimationFrame(() => {
          (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
            // UI has updated, save the new content dimensions
            const scrollHeight = scrollEl.scrollHeight;
            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
            const newScrollTop = scrollHeight - prev;
            // ******** DOM WRITE ****************
            requestAnimationFrame(() => {
              (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
                scrollEl.scrollTop = newScrollTop;
                _this2.isBusy = false;
                _this2.didFire = false;
              });
            });
          });
        });
      } else {
        _this2.didFire = false;
      }
    })();
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener('scroll', this.onScroll);
      } else {
        this.scrollEl.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  render() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const disabled = this.disabled;
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '1444429a86950c449953cbf578436cc8cabf40ec',
      class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled
      }
    });
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "threshold": ["thresholdChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
InfiniteScroll.style = IonInfiniteScrollStyle0;
const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
const IonInfiniteScrollContentIosStyle0 = infiniteScrollContentIosCss;
const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
const IonInfiniteScrollContentMdStyle0 = infiniteScrollContentMdCss;
const InfiniteScrollContent = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.customHTMLEnabled = _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.c.get('innerHTMLTemplatesEnabled', _config_49c88215_js__WEBPACK_IMPORTED_MODULE_4__.E);
    this.loadingSpinner = undefined;
    this.loadingText = undefined;
  }
  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
      this.loadingSpinner = _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.c.get('infiniteLoadingSpinner', _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.c.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
  }
  renderLoadingText() {
    const {
      customHTMLEnabled,
      loadingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "infinite-loading-text",
        innerHTML: (0,_config_49c88215_js__WEBPACK_IMPORTED_MODULE_4__.a)(loadingText)
      });
    }
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading-text"
    }, this.loadingText);
  }
  render() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '060278bf9cb0321e182352f9613be4ebbb028259',
      class: {
        [mode]: true,
        // Used internally for styling
        [`infinite-scroll-content-${mode}`]: true
      }
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '07d3cada920145f979ad315bd187fb878e0c3da3',
      class: "infinite-loading"
    }, this.loadingSpinner && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '6254f175d7543d09f3dd47cd0589a2809182cd8c',
      class: "infinite-loading-spinner"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      key: 'a6a816d1c65b60b786333b209b63492aa716a283',
      name: this.loadingSpinner
    })), this.loadingText !== undefined && this.renderLoadingText()));
  }
};
InfiniteScrollContent.style = {
  ios: IonInfiniteScrollContentIosStyle0,
  md: IonInfiniteScrollContentMdStyle0
};


/***/ })

}]);