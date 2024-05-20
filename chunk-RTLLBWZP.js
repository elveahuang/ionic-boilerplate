import {
  menuController
} from "./chunk-WJXIT5XE.js";
import {
  getTimeGivenProgression
} from "./chunk-HAVZYRFL.js";
import {
  focusFirstDescendant,
  focusLastDescendant,
  getPresentedOverlay
} from "./chunk-A5I45CAB.js";
import "./chunk-F67Q7A63.js";
import "./chunk-5QKFFA3H.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QPJI5M5R.js";
import {
  shouldUseCloseWatcher
} from "./chunk-VTJM6AMA.js";
import "./chunk-54LAR2PU.js";
import {
  menuOutline,
  menuSharp
} from "./chunk-QIGKOG5K.js";
import {
  config,
  getIonMode
} from "./chunk-STVEE43Z.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2YSWQYGY.js";
import "./chunk-AB2YFIZ6.js";
import {
  assert,
  clamp,
  inheritAriaAttributes,
  isEndSide
} from "./chunk-TTWJLGM2.js";
import {
  GESTURE_CONTROLLER
} from "./chunk-RAVBCX6T.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js
var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
var IonMenuIosStyle0 = menuIosCss;
var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
var IonMenuMdStyle0 = menuMdCss;
var iosEasing = "cubic-bezier(0.32,0.72,0,1)";
var mdEasing = "cubic-bezier(0.0,0.0,0.2,1)";
var iosEasingReverse = "cubic-bezier(1, 0, 0.68, 0.28)";
var mdEasingReverse = "cubic-bezier(0.4, 0, 0.6, 1)";
var Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionWillOpen = createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = createEvent(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = GESTURE_CONTROLLER.createBlocker({ disableScroll: true });
    this.didLoad = false;
    this.operationCancelled = false;
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = (ev) => {
      const lastOverlay = getPresentedOverlay(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.contentId = void 0;
    this.menuId = void 0;
    this.type = void 0;
    this.disabled = false;
    this.side = "start";
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== void 0) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute("style");
    }
    if (this.menuInnerEl) {
      this.menuInnerEl.removeAttribute("style");
    }
    this.animation = void 0;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = isEndSide(this.side);
    this.animation = void 0;
  }
  swipeGestureChanged() {
    this.updateState();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (typeof customElements !== "undefined" && customElements != null) {
        yield customElements.whenDefined("ion-menu");
      }
      if (this.type === void 0) {
        this.type = config.get("menuType", "overlay");
      }
      const content = this.contentId !== void 0 ? document.getElementById(this.contentId) : null;
      if (content === null) {
        console.error('Menu: must have a "content" element to listen for drag events on.');
        return;
      }
      if (this.el.contains(content)) {
        console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
      }
      this.contentEl = content;
      content.classList.add("menu-content");
      this.typeChanged(this.type, void 0);
      this.sideChanged();
      menuController._register(this);
      this.menuChanged();
      this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
        el: document,
        gestureName: "menu-swipe",
        gesturePriority: 30,
        threshold: 10,
        blurOnStart: true,
        canStart: (ev) => this.canStart(ev),
        onWillStart: () => this.onWillStart(),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.updateState();
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      const splitPane = this.el.closest("ion-split-pane");
      if (splitPane !== null) {
        this.isPaneVisible = yield splitPane.isVisible();
      }
      this.menuChanged();
      this.updateState();
    });
  }
  menuChanged() {
    if (this.didLoad) {
      this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
    }
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      yield this.close(false);
      this.blocker.destroy();
      menuController._unregister(this);
      if (this.animation) {
        this.animation.destroy();
      }
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = void 0;
      }
      this.animation = void 0;
      this.contentEl = void 0;
    });
  }
  onSplitPaneChanged(ev) {
    const closestSplitPane = this.el.closest("ion-split-pane");
    if (closestSplitPane !== null && closestSplitPane === ev.target) {
      this.isPaneVisible = ev.detail.visible;
      this.updateState();
    }
  }
  onBackdropClick(ev) {
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
    if (ev.key === "Escape") {
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
    return menuController._setOpen(this, shouldOpen, animated);
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    if (this.el.contains(target)) {
      this.lastFocus = target;
    } else {
      const { el } = this;
      focusFirstDescendant(el);
      if (this.lastFocus === doc.activeElement) {
        focusLastDescendant(el);
      }
    }
  }
  _setOpen(shouldOpen, animated = true) {
    return __async(this, null, function* () {
      if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
        return false;
      }
      this.beforeAnimation(shouldOpen);
      yield this.loadAnimation();
      yield this.startAnimation(shouldOpen, animated);
      if (this.operationCancelled) {
        this.operationCancelled = false;
        return false;
      }
      this.afterAnimation(shouldOpen);
      return true;
    });
  }
  loadAnimation() {
    return __async(this, null, function* () {
      const width = this.menuInnerEl.offsetWidth;
      const isEndSide$1 = isEndSide(this.side);
      if (width === this.width && this.animation !== void 0 && isEndSide$1 === this.isEndSide) {
        return;
      }
      this.width = width;
      this.isEndSide = isEndSide$1;
      if (this.animation) {
        this.animation.destroy();
        this.animation = void 0;
      }
      const animation = this.animation = yield menuController._createAnimation(this.type, this);
      if (!config.getBoolean("animated", true)) {
        animation.duration(0);
      }
      animation.fill("both");
    });
  }
  startAnimation(shouldOpen, animated) {
    return __async(this, null, function* () {
      const isReversed = !shouldOpen;
      const mode = getIonMode(this);
      const easing = mode === "ios" ? iosEasing : mdEasing;
      const easingReverse = mode === "ios" ? iosEasingReverse : mdEasingReverse;
      const ani = this.animation.direction(isReversed ? "reverse" : "normal").easing(isReversed ? easingReverse : easing);
      if (animated) {
        yield ani.play();
      } else {
        ani.play({ sync: true });
      }
      if (ani.getDirection() === "reverse") {
        ani.direction("normal");
      }
    });
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    const isModalPresented = !!document.querySelector("ion-modal.show-modal");
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    } else if (menuController._getOpenSync()) {
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
      assert(false, "isAnimating has to be true");
      return;
    }
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide2 = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide2);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen ? isEndSide2 ? shouldCompleteRight : shouldCompleteLeft : isEndSide2 ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    let newStepValue = shouldComplete ? 1e-3 : -1e-3;
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    newStepValue += getTimeGivenProgression([0, 0], [0.4, 0], [0.6, 1], [1, 1], clamp(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(() => this.afterAnimation(shouldOpen), { oneTimeCallback: true }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen) {
    assert(!this.isAnimating, "_before() should not be called while animating");
    this.el.classList.add(SHOW_MENU);
    this.el.setAttribute("tabindex", "0");
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      this.contentEl.setAttribute("aria-hidden", "true");
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
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      this.ionDidOpen.emit();
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest("ion-menu");
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      document.addEventListener("focus", this.handleFocus, true);
    } else {
      this.el.classList.remove(SHOW_MENU);
      this.el.removeAttribute("tabindex");
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        this.contentEl.removeAttribute("aria-hidden");
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      this.ionDidClose.emit();
      document.removeEventListener("focus", this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    if (!isActive) {
      if (this.isAnimating) {
        this.operationCancelled = true;
      }
      this.afterAnimation(false);
    }
  }
  render() {
    const { type, disabled, el, isPaneVisible, inheritedAttributes, side } = this;
    const mode = getIonMode(this);
    return h(Host, { key: "30c0c9bfb8973e4a6feb658f8c4ee8e362f464ed", onKeyDown: shouldUseCloseWatcher() ? null : this.onKeydown, role: "navigation", "aria-label": inheritedAttributes["aria-label"] || "menu", class: {
      [mode]: true,
      [`menu-type-${type}`]: true,
      "menu-enabled": !disabled,
      [`menu-side-${side}`]: true,
      "menu-pane-visible": isPaneVisible,
      "split-pane-side": hostContext("ion-split-pane", el)
    } }, h("div", { key: "34b0e5840906862cf1bc27207e089004b0402c56", class: "menu-inner", part: "container", ref: (el2) => this.menuInnerEl = el2 }, h("slot", { key: "2cd7e61a8c0987ca4b3f1f8b33cba7152f1275fe" })), h("ion-backdrop", { key: "d190b1f9b66c76e276f27bfe074d3aab796180fb", ref: (el2) => this.backdropEl = el2, class: "menu-backdrop", tappable: false, stopPropagation: false, part: "backdrop" }));
  }
  get el() {
    return getElement(this);
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
var computeDelta = (deltaX, isOpen, isEndSide2) => {
  return Math.max(0, isOpen !== isEndSide2 ? -deltaX : deltaX);
};
var checkEdgeSide = (win, posX, isEndSide2, maxEdgeStart) => {
  if (isEndSide2) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
var SHOW_MENU = "show-menu";
var SHOW_BACKDROP = "show-backdrop";
var MENU_CONTENT_OPEN = "menu-content-open";
Menu.style = {
  ios: IonMenuIosStyle0,
  md: IonMenuMdStyle0
};
var updateVisibility = (menu) => __async(void 0, null, function* () {
  const menuEl = yield menuController.get(menu);
  return !!(menuEl && (yield menuEl.isActive()));
});
var menuButtonIosCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';
var IonMenuButtonIosStyle0 = menuButtonIosCss;
var menuButtonMdCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';
var IonMenuButtonMdStyle0 = menuButtonMdCss;
var MenuButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.onClick = () => __async(this, null, function* () {
      return menuController.toggle(this.menu);
    });
    this.visible = false;
    this.color = void 0;
    this.disabled = false;
    this.menu = void 0;
    this.autoHide = true;
    this.type = "button";
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const { color, disabled, inheritedAttributes } = this;
    const mode = getIonMode(this);
    const menuIcon = config.get("menuIcon", mode === "ios" ? menuOutline : menuSharp);
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    const ariaLabel = inheritedAttributes["aria-label"] || "menu";
    return h(Host, { key: "95a8b9f09c7fae9713a8dc003ed277f6f31403da", onClick: this.onClick, "aria-disabled": disabled ? "true" : null, "aria-hidden": hidden ? "true" : null, class: createColorClasses(color, {
      [mode]: true,
      button: true,
      // ion-buttons target .button
      "menu-button-hidden": hidden,
      "menu-button-disabled": disabled,
      "in-toolbar": hostContext("ion-toolbar", this.el),
      "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
      "ion-activatable": true,
      "ion-focusable": true
    }) }, h("button", Object.assign({ key: "39f3ce20c400d2fac4890a042e8e44426709fca5" }, attrs, { disabled, class: "button-native", part: "native", "aria-label": ariaLabel }), h("span", { key: "310978dc1cdef668de6720cde2a2304253679176", class: "button-inner" }, h("slot", { key: "2a2b9de524c1fc3c526fe9559cb077b976852725" }, h("ion-icon", { key: "9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d", part: "icon", icon: menuIcon, mode, lazy: false, "aria-hidden": "true" }))), mode === "md" && h("ion-ripple-effect", { key: "c58c9e29c763070383472f65a9d322a684bcb564", type: "unbounded" })));
  }
  get el() {
    return getElement(this);
  }
};
MenuButton.style = {
  ios: IonMenuButtonIosStyle0,
  md: IonMenuButtonMdStyle0
};
var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
var IonMenuToggleStyle0 = menuToggleCss;
var MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = void 0;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return h(Host, { key: "90e621f09792383f1badcc1b402b1ac7d08c5f98", onClick: this.onClick, "aria-hidden": hidden ? "true" : null, class: {
      [mode]: true,
      "menu-toggle-hidden": hidden
    } }, h("slot", { key: "c0abdd1d91e9d80ee3704e3e374ebe1f29078460" }));
  }
};
MenuToggle.style = IonMenuToggleStyle0;
export {
  Menu as ion_menu,
  MenuButton as ion_menu_button,
  MenuToggle as ion_menu_toggle
};
