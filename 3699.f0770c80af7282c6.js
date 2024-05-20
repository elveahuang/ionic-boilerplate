"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3699],{

/***/ 3699:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-datetime-button.entry.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_datetime_button: () => (/* binding */ DatetimeButton)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2235);
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 5332);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/* harmony import */ var _data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-ae11fd43.js */ 2386);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const datetimeButtonIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
const IonDatetimeButtonIosStyle0 = datetimeButtonIosCss;
const datetimeButtonMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}";
const IonDatetimeButtonMdStyle0 = datetimeButtonMdCss;
const DatetimeButton = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.datetimeEl = null;
    this.overlayEl = null;
    /**
     * Accepts one or more string values and converts
     * them to DatetimeParts. This is done so datetime-button
     * can work with an array internally and not need
     * to keep checking if the datetime value is `string` or `string[]`.
     */
    this.getParsedDateValues = value => {
      if (value === undefined || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    /**
     * Check the value property on the linked
     * ion-datetime and then format it according
     * to the locale specified on ion-datetime.
     */
    this.setDateTimeText = () => {
      var _a, _b, _c, _d, _e;
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      const {
        value,
        locale,
        formatOptions,
        hourCycle,
        preferWheel,
        multiple,
        titleSelectedDatesFormatter
      } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      /**
       * Both ion-datetime and ion-datetime-button default
       * to today's date and time if no value is set.
       */
      const parsedDatetimes = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.s)(parsedValues.length > 0 ? parsedValues : [(0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.x)()]);
      if (!parsedDatetimes) {
        return;
      }
      /**
       * If developers incorrectly use multiple="true"
       * with non "date" datetimes, then just select
       * the first value so the interface does
       * not appear broken. Datetime will provide a
       * warning in the console.
       */
      const firstParsedDatetime = parsedDatetimes[0];
      const computedHourCycle = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.L)(locale, hourCycle);
      this.dateText = this.timeText = undefined;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const dateText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.N)(locale, firstParsedDatetime, (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
          const timeText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.M)(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          } else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case 'date':
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`; // default/fallback for multiple selection
            if (titleSelectedDatesFormatter !== undefined) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              } catch (e) {
                (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_3__.a)('Exception in provided `titleSelectedDatesFormatter`: ', e);
              }
            }
            this.dateText = headerText;
          } else {
            this.dateText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.N)(locale, firstParsedDatetime, (_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _b !== void 0 ? _b : {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });
          }
          break;
        case 'time':
          this.timeText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.M)(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          break;
        case 'month-year':
          this.dateText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.N)(locale, firstParsedDatetime, (_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _c !== void 0 ? _c : {
            month: 'long',
            year: 'numeric'
          });
          break;
        case 'month':
          this.dateText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.N)(locale, firstParsedDatetime, (_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _d !== void 0 ? _d : {
            month: 'long'
          });
          break;
        case 'year':
          this.dateText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_6__.N)(locale, firstParsedDatetime, (_e = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _e !== void 0 ? _e : {
            year: 'numeric'
          });
          break;
      }
    };
    /**
     * Waits for the ion-datetime to re-render.
     * This is needed in order to correctly position
     * a popover relative to the trigger element.
     */
    this.waitForDatetimeChanges = /*#__PURE__*/(0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        datetimeEl
      } = _this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise(resolve => {
        (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.a)(datetimeEl, 'ionRender', resolve, {
          once: true
        });
      });
    });
    this.handleDateClick = /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        const {
          datetimeEl,
          datetimePresentation
        } = _this;
        if (!datetimeEl) {
          return;
        }
        let needsPresentationChange = false;
        /**
         * When clicking the date button,
         * we need to make sure that only a date
         * picker is displayed. For presentation styles
         * that display content other than a date picker,
         * we need to update the presentation style.
         */
        switch (datetimePresentation) {
          case 'date-time':
          case 'time-date':
            const needsChange = datetimeEl.presentation !== 'date';
            /**
             * The date+time wheel picker
             * shows date and time together,
             * so do not adjust the presentation
             * in that case.
             */
            if (!datetimeEl.preferWheel && needsChange) {
              datetimeEl.presentation = 'date';
              needsPresentationChange = true;
            }
            break;
        }
        /**
         * Track which button was clicked
         * so that it can have the correct
         * activated styles applied when
         * the modal/popover containing
         * the datetime is opened.
         */
        _this.selectedButton = 'date';
        _this.presentOverlay(ev, needsPresentationChange, _this.dateTargetEl);
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.handleTimeClick = ev => {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      /**
       * When clicking the time button,
       * we need to make sure that only a time
       * picker is displayed. For presentation styles
       * that display content other than a time picker,
       * we need to update the presentation style.
       */
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'time';
          if (needsChange) {
            datetimeEl.presentation = 'time';
            needsPresentationChange = true;
          }
          break;
      }
      /**
       * Track which button was clicked
       * so that it can have the correct
       * activated styles applied when
       * the modal/popover containing
       * the datetime is opened.
       */
      this.selectedButton = 'time';
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    /**
     * If the datetime is presented in an
     * overlay, the datetime and overlay
     * should be appropriately sized.
     * These classes provide default sizing values
     * that developers can customize.
     * The goal is to provide an overlay that is
     * reasonably sized with a datetime that
     * fills the entire container.
     */
    this.presentOverlay = /*#__PURE__*/function () {
      var _ref3 = (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev, needsPresentationChange, triggerEl) {
        const {
          overlayEl
        } = _this;
        if (!overlayEl) {
          return;
        }
        if (overlayEl.tagName === 'ION-POPOVER') {
          /**
           * When the presentation on datetime changes,
           * we need to wait for the component to re-render
           * otherwise the computed width/height of the
           * popover content will be wrong, causing
           * the popover to not align with the trigger element.
           */
          if (needsPresentationChange) {
            yield _this.waitForDatetimeChanges();
          }
          /**
           * We pass the trigger button element
           * so that the popover aligns with the individual
           * button that was clicked, not the component container.
           */
          overlayEl.present(Object.assign(Object.assign({}, ev), {
            detail: {
              ionShadowTarget: triggerEl
            }
          }));
        } else {
          overlayEl.present();
        }
      });
      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.datetimePresentation = 'date-time';
    this.dateText = undefined;
    this.timeText = undefined;
    this.datetimeActive = false;
    this.selectedButton = undefined;
    this.color = 'primary';
    this.disabled = false;
    this.datetime = undefined;
  }
  componentWillLoad() {
    var _this2 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        datetime
      } = _this2;
      if (!datetime) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_3__.a)('An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.', _this2.el);
        return;
      }
      const datetimeEl = _this2.datetimeEl = document.getElementById(datetime);
      if (!datetimeEl) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_3__.a)(`No ion-datetime instance found for ID '${datetime}'.`, _this2.el);
        return;
      }
      /**
       * The element reference must be an ion-datetime. Print an error
       * if a non-datetime element was provided.
       */
      if (datetimeEl.tagName !== 'ION-DATETIME') {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_3__.a)(`Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`, datetimeEl);
        return;
      }
      /**
       * Since the datetime can be used in any context (overlays, accordion, etc)
       * we track when it is visible to determine when it is active.
       * This informs which button is highlighted as well as the
       * aria-expanded state.
       */
      const io = new IntersectionObserver(entries => {
        const ev = entries[0];
        _this2.datetimeActive = ev.isIntersecting;
      }, {
        threshold: 0.01
      });
      io.observe(datetimeEl);
      /**
       * Get a reference to any modal/popover
       * the datetime is being used in so we can
       * correctly size it when it is presented.
       */
      const overlayEl = _this2.overlayEl = datetimeEl.closest('ion-modal, ion-popover');
      /**
       * The .ion-datetime-button-overlay class contains
       * styles that allow any modal/popover to be
       * sized according to the dimensions of the datetime.
       * If developers want a smaller/larger overlay all they need
       * to do is change the width/height of the datetime.
       * Additionally, this lets us avoid having to set
       * explicit widths on each variant of datetime.
       */
      if (overlayEl) {
        overlayEl.classList.add('ion-datetime-button-overlay');
      }
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.c)(datetimeEl, () => {
        const datetimePresentation = _this2.datetimePresentation = datetimeEl.presentation || 'date-time';
        /**
         * Set the initial display
         * in the rendered buttons.
         *
         * From there, we need to listen
         * for ionChange to be emitted
         * from datetime so we know when
         * to re-render the displayed
         * text in the buttons.
         */
        _this2.setDateTimeText();
        (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_2__.a)(datetimeEl, 'ionValueChange', _this2.setDateTimeText);
        /**
         * Configure the initial selected button
         * in the event that the datetime is displayed
         * without clicking one of the datetime buttons.
         * For example, a datetime could be expanded
         * in an accordion. In this case users only
         * need to click the accordion header to show
         * the datetime.
         */
        switch (datetimePresentation) {
          case 'date-time':
          case 'date':
          case 'month-year':
          case 'month':
          case 'year':
            _this2.selectedButton = 'date';
            break;
          case 'time-date':
          case 'time':
            _this2.selectedButton = 'time';
            break;
        }
      });
    })();
  }
  render() {
    const {
      color,
      dateText,
      timeText,
      selectedButton,
      datetimeActive,
      disabled
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '0be955404133adbb31ae16a6599014bb29765f19',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ['datetime-button-disabled']: disabled
      })
    }, dateText && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: '812dcb50b17768cc13a5cfa0bcce8b113cee0f09',
      class: "ion-activatable",
      id: "date-button",
      "aria-expanded": datetimeActive ? 'true' : 'false',
      onClick: this.handleDateClick,
      disabled: disabled,
      part: "native",
      ref: el => this.dateTargetEl = el
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '46930c740a32a78502df9e651f9bd5914d6a9fea',
      name: "date-target"
    }, dateText), mode === 'md' && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: '0602999cc8435dc37aa22da7f5531bc8cb71e1b4'
    })), timeText && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: 'ecdd21da5181ecbdce03209f9f6673b7dcbc1f78',
      class: "ion-activatable",
      id: "time-button",
      "aria-expanded": datetimeActive ? 'true' : 'false',
      onClick: this.handleTimeClick,
      disabled: disabled,
      part: "native",
      ref: el => this.timeTargetEl = el
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'b5b093b5166d12d11e27360788edaac916d44390',
      name: "time-target"
    }, timeText), mode === 'md' && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: '70bb3a04f4748d13233eeb257503968dbd1161a9'
    })));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
DatetimeButton.style = {
  ios: IonDatetimeButtonIosStyle0,
  md: IonDatetimeButtonMdStyle0
};


/***/ })

}]);