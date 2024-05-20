"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6230],{

/***/ 6230:
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_menu: () => (/* binding */ Menu),
/* harmony export */   ion_menu_button: () => (/* binding */ MenuButton),
/* harmony export */   ion_menu_toggle: () => (/* binding */ MenuToggle)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2235);
/* harmony import */ var _index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9aab3bcf.js */ 9878);
/* harmony import */ var _cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic-bezier-fe2083dc.js */ 148);
/* harmony import */ var _overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-df2c06b2.js */ 1325);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 1533);
/* harmony import */ var _hardware_back_button_2d9760b6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hardware-back-button-2d9760b6.js */ 7008);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-da915de8.js */ 2853);
/* harmony import */ var _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-7ae7186a.js */ 751);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 3724);
/* harmony import */ var _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-global-4528d288.js */ 3432);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 6001);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-a5d50daf.js */ 1829);
/* harmony import */ var _framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./framework-delegate-63d1a679.js */ 6266);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 5332);
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 2843);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */














const menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
const IonMenuIosStyle0 = menuIosCss;
const menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
const IonMenuMdStyle0 = menuMdCss;
const iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
const mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
const iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
const mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
const Menu = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionWillOpen = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionWillOpen", 7);
    this.ionWillClose = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionWillClose", 7);
    this.ionDidOpen = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionDidOpen", 7);
    this.ionDidClose = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionDidClose", 7);
    this.ionMenuChange = (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_4__.G.createBlocker({
      disableScroll: true
    });
    this.didLoad = false;
    /**
     * Flag used to determine if an open/close
     * operation was cancelled. For example, if
     * an app calls "menu.open" then disables the menu
     * part way through the animation, then this would
     * be considered a cancelled operation.
     */
    this.operationCancelled = false;
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = ev => {
      /**
       * Overlays have their own focus trapping listener
       * so we do not want the two listeners to conflict
       * with each other. If the top-most overlay that is
       * open does not contain this ion-menu, then ion-menu's
       * focus trapping should not run.
       */
      const lastOverlay = (0,_overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_3__.o)(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.contentId = undefined;
    this.menuId = undefined;
    this.type = undefined;
    this.disabled = false;
    this.side = 'start';
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute('style');
    }
    if (this.menuInnerEl) {
      // Remove effects of previous animations
      this.menuInnerEl.removeAttribute('style');
    }
    this.animation = undefined;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.n)(this.side);
    /**
     * Menu direction animation is calculated based on the document direction.
     * If the document direction changes, we need to create a new animation.
     */
    this.animation = undefined;
  }
  swipeGestureChanged() {
    this.updateState();
  }
  connectedCallback() {
    var _this = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO: connectedCallback is fired in CE build
      // before WC is defined. This needs to be fixed in Stencil.
      if (typeof customElements !== 'undefined' && customElements != null) {
        yield customElements.whenDefined('ion-menu');
      }
      if (_this.type === undefined) {
        _this.type = _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.c.get('menuType', 'overlay');
      }
      const content = _this.contentId !== undefined ? document.getElementById(_this.contentId) : null;
      if (content === null) {
        console.error('Menu: must have a "content" element to listen for drag events on.');
        return;
      }
      if (_this.el.contains(content)) {
        console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
      }
      _this.contentEl = content;
      // add menu's content classes
      content.classList.add('menu-content');
      _this.typeChanged(_this.type, undefined);
      _this.sideChanged();
      // register this menu with the app's menu controller
      _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m._register(_this);
      _this.menuChanged();
      _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-39782642.js */ 5342))).createGesture({
        el: document,
        gestureName: 'menu-swipe',
        gesturePriority: 30,
        threshold: 10,
        blurOnStart: true,
        canStart: ev => _this.canStart(ev),
        onWillStart: () => _this.onWillStart(),
        onStart: () => _this.onStart(),
        onMove: ev => _this.onMove(ev),
        onEnd: ev => _this.onEnd(ev)
      });
      _this.updateState();
    })();
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.el);
  }
  componentDidLoad() {
    var _this2 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.didLoad = true;
      /**
       * A menu inside of a split pane is assumed
       * to be a side pane.
       *
       * When the menu is loaded it needs to
       * see if it should be considered visible inside
       * of the split pane. If the split pane is
       * hidden then the menu should be too.
       */
      const splitPane = _this2.el.closest('ion-split-pane');
      if (splitPane !== null) {
        _this2.isPaneVisible = yield splitPane.isVisible();
      }
      _this2.menuChanged();
      _this2.updateState();
    })();
  }
  menuChanged() {
    /**
     * Inform dependent components such as ion-menu-button
     * that the menu is ready. Note that we only want to do this
     * once the menu has been rendered which is why we check for didLoad.
     */
    if (this.didLoad) {
      this.ionMenuChange.emit({
        disabled: this.disabled,
        open: this._isOpen
      });
    }
  }
  disconnectedCallback() {
    var _this3 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * The menu should be closed when it is
       * unmounted from the DOM.
       * This is an async call, so we need to wait for
       * this to finish otherwise contentEl
       * will not have MENU_CONTENT_OPEN removed.
       */
      yield _this3.close(false);
      _this3.blocker.destroy();
      _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m._unregister(_this3);
      if (_this3.animation) {
        _this3.animation.destroy();
      }
      if (_this3.gesture) {
        _this3.gesture.destroy();
        _this3.gesture = undefined;
      }
      _this3.animation = undefined;
      _this3.contentEl = undefined;
    })();
  }
  onSplitPaneChanged(ev) {
    const closestSplitPane = this.el.closest('ion-split-pane');
    if (closestSplitPane !== null && closestSplitPane === ev.target) {
      this.isPaneVisible = ev.detail.visible;
      this.updateState();
    }
  }
  onBackdropClick(ev) {
    // TODO(FW-2832): type (CustomEvent triggers errors which should be sorted)
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  }
  onKeydown(ev) {
    if (ev.key === 'Escape') {
      this.close();
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  close(animated = true) {
    return this.setOpen(false, animated);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  setOpen(shouldOpen, animated = true) {
    return _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m._setOpen(this, shouldOpen, animated);
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    /**
     * If the target is inside the menu contents, let the browser
     * focus as normal and keep a log of the last focused element.
     */
    if (this.el.contains(target)) {
      this.lastFocus = target;
    } else {
      /**
       * Otherwise, we are about to have focus go out of the menu.
       * Wrap the focus to either the first or last element.
       */
      const {
        el
      } = this;
      /**
       * Once we call `focusFirstDescendant`, another focus event
       * will fire, which will cause `lastFocus` to be updated
       * before we can run the code after that. We cache the value
       * here to avoid that.
       */
      (0,_overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_3__.n)(el);
      /**
       * If the cached last focused element is the same as the now-
       * active element, that means the user was on the first element
       * already and pressed Shift + Tab, so we need to wrap to the
       * last descendant.
       */
      if (this.lastFocus === doc.activeElement) {
        (0,_overlays_df2c06b2_js__WEBPACK_IMPORTED_MODULE_3__.q)(el);
      }
    }
  }
  _setOpen(shouldOpen, animated = true) {
    var _this4 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If the menu is disabled or it is currently being animated, let's do nothing
      if (!_this4._isActive() || _this4.isAnimating || shouldOpen === _this4._isOpen) {
        return false;
      }
      _this4.beforeAnimation(shouldOpen);
      yield _this4.loadAnimation();
      yield _this4.startAnimation(shouldOpen, animated);
      /**
       * If the animation was cancelled then
       * return false because the operation
       * did not succeed.
       */
      if (_this4.operationCancelled) {
        _this4.operationCancelled = false;
        return false;
      }
      _this4.afterAnimation(shouldOpen);
      return true;
    })();
  }
  loadAnimation() {
    var _this5 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Menu swipe animation takes the menu's inner width as parameter,
      // If `offsetWidth` changes, we need to create a new animation.
      const width = _this5.menuInnerEl.offsetWidth;
      /**
       * Menu direction animation is calculated based on the document direction.
       * If the document direction changes, we need to create a new animation.
       */
      const isEndSide$1 = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.n)(_this5.side);
      if (width === _this5.width && _this5.animation !== undefined && isEndSide$1 === _this5.isEndSide) {
        return;
      }
      _this5.width = width;
      _this5.isEndSide = isEndSide$1;
      // Destroy existing animation
      if (_this5.animation) {
        _this5.animation.destroy();
        _this5.animation = undefined;
      }
      // Create new animation
      const animation = _this5.animation = yield _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m._createAnimation(_this5.type, _this5);
      if (!_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.c.getBoolean('animated', true)) {
        animation.duration(0);
      }
      animation.fill('both');
    })();
  }
  startAnimation(shouldOpen, animated) {
    var _this6 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isReversed = !shouldOpen;
      const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.b)(_this6);
      const easing = mode === 'ios' ? iosEasing : mdEasing;
      const easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
      const ani = _this6.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? easingReverse : easing);
      if (animated) {
        yield ani.play();
      } else {
        ani.play({
          sync: true
        });
      }
      /**
       * We run this after the play invocation
       * instead of using ani.onFinish so that
       * multiple onFinish callbacks do not get
       * run if an animation is played, stopped,
       * and then played again.
       */
      if (ani.getDirection() === 'reverse') {
        ani.direction('normal');
      }
    })();
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    // Do not allow swipe gesture if a modal is open
    const isModalPresented = !!document.querySelector('ion-modal.show-modal');
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    } else if (_index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.m)(false, 'isAnimating has to be true');
      return;
    }
    // the cloned animation should not use an easing curve during seek
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.m)(false, 'isAnimating has to be true');
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.m)(false, 'isAnimating has to be true');
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2.0;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    // Account for rounding errors in JS
    let newStepValue = shouldComplete ? 0.001 : -0.001;
    /**
     * stepValue can sometimes return a negative
     * value, but you can't have a negative time value
     * for the cubic bezier curve (at least with web animations)
     */
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    /**
     * Animation will be reversed here, so need to
     * reverse the easing curve as well
     *
     * Additionally, we need to account for the time relative
     * to the new easing curve, as `stepValue` is going to be given
     * in terms of a linear curve.
     */
    newStepValue += (0,_cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_2__.g)([0, 0], [0.4, 0], [0.6, 1], [1, 1], (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.j)(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(() => this.afterAnimation(shouldOpen), {
      oneTimeCallback: true
    }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen) {
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.m)(!this.isAnimating, '_before() should not be called while animating');
    // this places the menu into the correct location before it animates in
    // this css class doesn't actually kick off any animations
    this.el.classList.add(SHOW_MENU);
    /**
     * We add a tabindex here so that focus trapping
     * still works even if the menu does not have
     * any focusable elements slotted inside. The
     * focus trapping utility will fallback to focusing
     * the menu so focus does not leave when the menu
     * is open.
     */
    this.el.setAttribute('tabindex', '0');
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    // add css class and hide content behind menu from screen readers
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      /**
       * When the menu is open and overlaying the main
       * content, the main content should not be announced
       * by the screenreader as the menu is the main
       * focus. This is useful with screenreaders that have
       * "read from top" gestures that read the entire
       * page from top to bottom when activated.
       * This should be done before the animation starts
       * so that users cannot accidentally scroll
       * the content while dragging a menu open.
       */
      this.contentEl.setAttribute('aria-hidden', 'true');
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    } else {
      this.ionWillClose.emit();
    }
  }
  afterAnimation(isOpen) {
    var _a;
    // keep opening/closing the menu disabled for a touch more yet
    // only add listeners/css if it's enabled and isOpen
    // and only remove listeners/css if it's not open
    // emit opened/closed events
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      // emit open event
      this.ionDidOpen.emit();
      /**
       * Move focus to the menu to prepare focus trapping, as long as
       * it isn't already focused. Use the host element instead of the
       * first descendant to avoid the scroll position jumping around.
       */
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest('ion-menu');
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      // start focus trapping
      document.addEventListener('focus', this.handleFocus, true);
    } else {
      // remove css classes and unhide content from screen readers
      this.el.classList.remove(SHOW_MENU);
      /**
       * Remove tabindex from the menu component
       * so that is cannot be tabbed to.
       */
      this.el.removeAttribute('tabindex');
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        /**
         * Remove aria-hidden so screen readers
         * can announce the main content again
         * now that the menu is not the main focus.
         */
        this.contentEl.removeAttribute('aria-hidden');
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      // emit close event
      this.ionDidClose.emit();
      // undo focus trapping so multiple menus don't collide
      document.removeEventListener('focus', this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    /**
     * If the menu is disabled but it is still open
     * then we should close the menu immediately.
     * Additionally, if the menu is in the process
     * of animating {open, close} and the menu is disabled
     * then it should still be closed immediately.
     */
    if (!isActive) {
      /**
       * It is possible to disable the menu while
       * it is mid-animation. When this happens, we
       * need to set the operationCancelled flag
       * so that this._setOpen knows to return false
       * and not run the "afterAnimation" callback.
       */
      if (this.isAnimating) {
        this.operationCancelled = true;
      }
      /**
       * If the menu is disabled then we should
       * forcibly close the menu even if it is open.
       */
      this.afterAnimation(false);
    }
  }
  render() {
    const {
      type,
      disabled,
      el,
      isPaneVisible,
      inheritedAttributes,
      side
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    /**
     * If the Close Watcher is enabled then
     * the ionBackButton listener in the menu controller
     * will handle closing the menu when Escape is pressed.
     */
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '30c0c9bfb8973e4a6feb658f8c4ee8e362f464ed',
      onKeyDown: (0,_hardware_back_button_2d9760b6_js__WEBPACK_IMPORTED_MODULE_5__.shouldUseCloseWatcher)() ? null : this.onKeydown,
      role: "navigation",
      "aria-label": inheritedAttributes['aria-label'] || 'menu',
      class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        'menu-enabled': !disabled,
        [`menu-side-${side}`]: true,
        'menu-pane-visible': isPaneVisible,
        'split-pane-side': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_8__.h)('ion-split-pane', el)
      }
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '34b0e5840906862cf1bc27207e089004b0402c56',
      class: "menu-inner",
      part: "container",
      ref: el => this.menuInnerEl = el
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '2cd7e61a8c0987ca4b3f1f8b33cba7152f1275fe'
    })), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      key: 'd190b1f9b66c76e276f27bfe074d3aab796180fb',
      ref: el => this.backdropEl = el,
      class: "menu-backdrop",
      tappable: false,
      stopPropagation: false,
      part: "backdrop"
    }));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "type": ["typeChanged"],
      "disabled": ["disabledChanged"],
      "side": ["sideChanged"],
      "swipeGesture": ["swipeGestureChanged"]
    };
  }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';
Menu.style = {
  ios: IonMenuIosStyle0,
  md: IonMenuMdStyle0
};

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = /*#__PURE__*/function () {
  var _ref = (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
    const menuEl = yield _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m.get(menu);
    return !!(menuEl && (yield menuEl.isActive()));
  });
  return function updateVisibility(_x) {
    return _ref.apply(this, arguments);
  };
}();
const menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
const IonMenuButtonIosStyle0 = menuButtonIosCss;
const menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";
const IonMenuButtonMdStyle0 = menuButtonMdCss;
const MenuButton = class {
  constructor(hostRef) {
    var _this7 = this;
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.inheritedAttributes = {};
    this.onClick = /*#__PURE__*/(0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m.toggle(_this7.menu);
    });
    this.visible = false;
    this.color = undefined;
    this.disabled = false;
    this.menu = undefined;
    this.autoHide = true;
    this.type = 'button';
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.el);
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    var _this8 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.visible = yield updateVisibility(_this8.menu);
    })();
  }
  render() {
    const {
      color,
      disabled,
      inheritedAttributes
    } = this;
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const menuIcon = _ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.c.get('menuIcon', mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_10__.u : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_10__.v);
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    const ariaLabel = inheritedAttributes['aria-label'] || 'menu';
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '95a8b9f09c7fae9713a8dc003ed277f6f31403da',
      onClick: this.onClick,
      "aria-disabled": disabled ? 'true' : null,
      "aria-hidden": hidden ? 'true' : null,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_8__.c)(color, {
        [mode]: true,
        button: true,
        // ion-buttons target .button
        'menu-button-hidden': hidden,
        'menu-button-disabled': disabled,
        'in-toolbar': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_8__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_8__.h)('ion-toolbar[color]', this.el),
        'ion-activatable': true,
        'ion-focusable': true
      })
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({
      key: '39f3ce20c400d2fac4890a042e8e44426709fca5'
    }, attrs, {
      disabled: disabled,
      class: "button-native",
      part: "native",
      "aria-label": ariaLabel
    }), (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      key: '310978dc1cdef668de6720cde2a2304253679176',
      class: "button-inner"
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '2a2b9de524c1fc3c526fe9559cb077b976852725'
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      key: '9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d',
      part: "icon",
      icon: menuIcon,
      mode: mode,
      lazy: false,
      "aria-hidden": "true"
    }))), mode === 'md' && (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: 'c58c9e29c763070383472f65a9d322a684bcb564',
      type: "unbounded"
    })));
  }
  get el() {
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
MenuButton.style = {
  ios: IonMenuButtonIosStyle0,
  md: IonMenuButtonMdStyle0
};
const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
const IonMenuToggleStyle0 = menuToggleCss;
const MenuToggle = class {
  constructor(hostRef) {
    (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.onClick = () => {
      return _index_7ae7186a_js__WEBPACK_IMPORTED_MODULE_7__.m.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    var _this9 = this;
    return (0,_home_runner_work_ionic_boilerplate_ionic_boilerplate_node_modules_pnpm_babel_runtime_7_24_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.visible = yield updateVisibility(_this9.menu);
    })();
  }
  render() {
    const mode = (0,_ionic_global_4528d288_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const hidden = this.autoHide && !this.visible;
    return (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '90e621f09792383f1badcc1b402b1ac7d08c5f98',
      onClick: this.onClick,
      "aria-hidden": hidden ? 'true' : null,
      class: {
        [mode]: true,
        'menu-toggle-hidden': hidden
      }
    }, (0,_index_9aab3bcf_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'c0abdd1d91e9d80ee3704e3e374ebe1f29078460'
    }));
  }
};
MenuToggle.style = IonMenuToggleStyle0;


/***/ })

}]);