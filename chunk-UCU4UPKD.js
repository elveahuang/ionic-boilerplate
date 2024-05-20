import {
  createLockController
} from "./chunk-LVSI6EF4.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-DX4XHBGI.js";
import {
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  isCancel,
  prepareOverlay,
  present,
  safeCall,
  setOverlayId
} from "./chunk-A5I45CAB.js";
import {
  createAnimation
} from "./chunk-F67Q7A63.js";
import "./chunk-5QKFFA3H.js";
import {
  createColorClasses,
  getClassMap
} from "./chunk-QPJI5M5R.js";
import "./chunk-VTJM6AMA.js";
import {
  win
} from "./chunk-54LAR2PU.js";
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
import {
  printIonWarning
} from "./chunk-AB2YFIZ6.js";
import {
  getElementRoot,
  raf
} from "./chunk-TTWJLGM2.js";
import {
  createGesture
} from "./chunk-A5LXLC4Q.js";
import "./chunk-RAVBCX6T.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-toast.entry.js
function getAnimationPosition(position, positionAnchor, mode, toast) {
  let offset;
  if (mode === "md") {
    offset = position === "top" ? 8 : -8;
  } else {
    offset = position === "top" ? 10 : -10;
  }
  if (positionAnchor && win) {
    warnIfAnchorIsHidden(positionAnchor, toast);
    const box = positionAnchor.getBoundingClientRect();
    if (position === "top") {
      offset += box.bottom;
    } else if (position === "bottom") {
      offset -= win.innerHeight - box.top;
    }
    return {
      top: `${offset}px`,
      bottom: `${offset}px`
    };
  } else {
    return {
      top: `calc(${offset}px + var(--ion-safe-area-top, 0px))`,
      bottom: `calc(${offset}px - var(--ion-safe-area-bottom, 0px))`
    };
  }
}
function warnIfAnchorIsHidden(positionAnchor, toast) {
  if (positionAnchor.offsetParent === null) {
    printIonWarning("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.", toast);
  }
}
var getOffsetForMiddlePosition = (toastHeight, wrapperHeight) => {
  return Math.floor(toastHeight / 2 - wrapperHeight / 2);
};
var iosEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const { position, top, bottom } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", "translateY(-100%)", `translateY(${top})`);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo("transform", "translateY(100%)", `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation);
};
var iosLeaveAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const { position, top, bottom } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", `translateY(${top})`, "translateY(-100%)");
      break;
    case "middle":
      wrapperAnimation.fromTo("opacity", 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo("transform", `translateY(${bottom})`, "translateY(100%)");
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var mdEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const { position, top, bottom } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperEl.style.setProperty("transform", `translateY(${top})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperEl.style.setProperty("transform", `translateY(${bottom})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl).fromTo("opacity", 0.99, 0);
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var createSwipeToDismissGesture = (el, toastPosition, onDismiss) => {
  const wrapperEl = getElementRoot(el).querySelector(".toast-wrapper");
  const hostElHeight = el.clientHeight;
  const wrapperElBox = wrapperEl.getBoundingClientRect();
  let MAX_SWIPE_DISTANCE = 0;
  const DISMISS_THRESHOLD = 0.5;
  const STEP_OFFSET = el.position === "middle" ? 0.5 : 0;
  const INVERSION_FACTOR = el.position === "top" ? -1 : 1;
  const topPosition = getOffsetForMiddlePosition(hostElHeight, wrapperElBox.height);
  const SWIPE_UP_DOWN_KEYFRAMES = [
    { offset: 0, transform: `translateY(-${topPosition + wrapperElBox.height}px)` },
    { offset: 0.5, transform: `translateY(0px)` },
    { offset: 1, transform: `translateY(${topPosition + wrapperElBox.height}px)` }
  ];
  const swipeAnimation = createAnimation("toast-swipe-to-dismiss-animation").addElement(wrapperEl).duration(100);
  switch (el.position) {
    case "middle":
      MAX_SWIPE_DISTANCE = hostElHeight + wrapperElBox.height;
      swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES);
      swipeAnimation.progressStart(true, 0.5);
      break;
    case "top":
      MAX_SWIPE_DISTANCE = wrapperElBox.bottom;
      swipeAnimation.keyframes([
        { offset: 0, transform: `translateY(${toastPosition.top})` },
        { offset: 1, transform: "translateY(-100%)" }
      ]);
      swipeAnimation.progressStart(true, 0);
      break;
    case "bottom":
    default:
      MAX_SWIPE_DISTANCE = hostElHeight - wrapperElBox.top;
      swipeAnimation.keyframes([
        { offset: 0, transform: `translateY(${toastPosition.bottom})` },
        { offset: 1, transform: "translateY(100%)" }
      ]);
      swipeAnimation.progressStart(true, 0);
      break;
  }
  const computeStep = (delta) => {
    return delta * INVERSION_FACTOR / MAX_SWIPE_DISTANCE;
  };
  const onMove = (detail) => {
    const step = STEP_OFFSET + computeStep(detail.deltaY);
    swipeAnimation.progressStep(step);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 1e3) / MAX_SWIPE_DISTANCE * INVERSION_FACTOR;
    gesture.enable(false);
    let shouldDismiss = true;
    let playTo = 1;
    let step = 0;
    let remainingDistance = 0;
    if (el.position === "middle") {
      shouldDismiss = threshold >= DISMISS_THRESHOLD / 2 || threshold <= -DISMISS_THRESHOLD / 2;
      playTo = 1;
      step = 0;
      const wrapperElBox2 = wrapperEl.getBoundingClientRect();
      const startOffset = wrapperElBox2.top - topPosition;
      const startPosition = `${startOffset}px`;
      const offsetFactor = detail.deltaY <= 0 ? -1 : 1;
      const endOffset = (topPosition + wrapperElBox2.height) * offsetFactor;
      const endPosition = shouldDismiss ? `${endOffset}px` : "0px";
      const KEYFRAMES = [
        { offset: 0, transform: `translateY(${startPosition})` },
        { offset: 1, transform: `translateY(${endPosition})` }
      ];
      swipeAnimation.keyframes(KEYFRAMES);
      remainingDistance = endOffset - startOffset;
    } else {
      shouldDismiss = threshold >= DISMISS_THRESHOLD;
      playTo = shouldDismiss ? 1 : 0;
      step = computeStep(detail.deltaY);
      const remainingStepAmount = shouldDismiss ? 1 - step : step;
      remainingDistance = remainingStepAmount * MAX_SWIPE_DISTANCE;
    }
    const duration = Math.min(Math.abs(remainingDistance) / Math.abs(velocity), 200);
    swipeAnimation.onFinish(() => {
      if (shouldDismiss) {
        onDismiss();
        swipeAnimation.destroy();
      } else {
        if (el.position === "middle") {
          swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES).progressStart(true, 0.5);
        } else {
          swipeAnimation.progressStart(true, 0);
        }
        gesture.enable(true);
      }
    }, { oneTimeCallback: true }).progressEnd(playTo, step, duration);
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "toast-swipe-to-dismiss",
    gesturePriority: OVERLAY_GESTURE_PRIORITY,
    /**
     * Toast only supports vertical swipes.
     * This needs to be updated if we later
     * support horizontal swipes.
     */
    direction: "y",
    onMove,
    onEnd
  });
  return gesture;
};
var toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
var IonToastIosStyle0 = toastIosCss;
var toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
var IonToastMdStyle0 = toastMdCss;
var Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionToastDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.createSwipeGesture = (toastPosition) => {
      const gesture = this.gesture = createSwipeToDismissGesture(this.el, toastPosition, () => {
        this.dismiss(void 0, GESTURE);
      });
      gesture.enable(true);
    };
    this.destroySwipeGesture = () => {
      const { gesture } = this;
      if (gesture === void 0) {
        return;
      }
      gesture.destroy();
      this.gesture = void 0;
    };
    this.prefersSwipeGesture = () => {
      const { swipeGesture } = this;
      return swipeGesture === "vertical";
    };
    this.revealContentToScreenReader = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.color = void 0;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.cssClass = void 0;
    this.duration = config.getNumber("toastDuration", 0);
    this.header = void 0;
    this.layout = "baseline";
    this.message = void 0;
    this.keyboardClose = false;
    this.position = "bottom";
    this.positionAnchor = void 0;
    this.buttons = void 0;
    this.translucent = false;
    this.animated = true;
    this.icon = void 0;
    this.htmlAttributes = void 0;
    this.swipeGesture = void 0;
    this.isOpen = false;
    this.trigger = void 0;
  }
  swipeGestureChanged() {
    this.destroySwipeGesture();
    if (this.presented && this.prefersSwipeGesture()) {
      this.createSwipeGesture(this.lastPresentedPosition);
    }
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const { trigger, el, triggerController } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    setOverlayId(this.el);
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the toast overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      const { el, position } = this;
      const anchor = this.getAnchorElement();
      const animationPosition = getAnimationPosition(position, anchor, getIonMode(this), el);
      this.lastPresentedPosition = animationPosition;
      yield present(this, "toastEnter", iosEnterAnimation, mdEnterAnimation, {
        position,
        top: animationPosition.top,
        bottom: animationPosition.bottom
      });
      this.revealContentToScreenReader = true;
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(void 0, "timeout"), this.duration);
      }
      if (this.prefersSwipeGesture()) {
        this.createSwipeGesture(animationPosition);
      }
      unlock();
    });
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      var _a, _b;
      const unlock = yield this.lockController.lock();
      const { durationTimeout, position, lastPresentedPosition } = this;
      if (durationTimeout) {
        clearTimeout(durationTimeout);
      }
      const dismissed = yield dismiss(
        this,
        data,
        role,
        "toastLeave",
        iosLeaveAnimation,
        mdLeaveAnimation,
        /**
         * Fetch the cached position that was calculated back in the present
         * animation. We always want to animate the dismiss from the same
         * position the present stopped at, so the animation looks continuous.
         */
        {
          position,
          top: (_a = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.top) !== null && _a !== void 0 ? _a : "",
          bottom: (_b = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.bottom) !== null && _b !== void 0 ? _b : ""
        }
      );
      if (dismissed) {
        this.delegateController.removeViewFromDom();
        this.revealContentToScreenReader = false;
      }
      this.lastPresentedPosition = void 0;
      this.destroySwipeGesture();
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionToastDidDismiss");
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionToastWillDismiss");
  }
  getButtons() {
    const buttons = this.buttons ? this.buttons.map((b) => {
      return typeof b === "string" ? { text: b } : b;
    }) : [];
    return buttons;
  }
  /**
   * Returns the element specified by the positionAnchor prop,
   * or undefined if prop's value is an ID string and the element
   * is not found in the DOM.
   */
  getAnchorElement() {
    const { position, positionAnchor, el } = this;
    if (positionAnchor === void 0) {
      return;
    }
    if (position === "middle" && positionAnchor !== void 0) {
      printIonWarning('The positionAnchor property is ignored when using position="middle".', this.el);
      return void 0;
    }
    if (typeof positionAnchor === "string") {
      const foundEl = document.getElementById(positionAnchor);
      if (foundEl === null) {
        printIonWarning(`An anchor element with an ID of "${positionAnchor}" was not found in the DOM.`, el);
        return void 0;
      }
      return foundEl;
    }
    if (positionAnchor instanceof HTMLElement) {
      return positionAnchor;
    }
    printIonWarning("Invalid positionAnchor value:", positionAnchor, el);
    return void 0;
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(void 0, role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        try {
          const rtn = yield safeCall(button.handler);
          if (rtn === false) {
            return false;
          }
        } catch (e) {
          console.error(e);
        }
      }
      return true;
    });
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = getIonMode(this);
    const buttonGroupsClasses = {
      "toast-button-group": true,
      [`toast-button-group-${side}`]: true
    };
    return h("div", { class: buttonGroupsClasses }, buttons.map((b) => h("button", Object.assign({}, b.htmlAttributes, { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b), part: buttonPart(b) }), h("div", { class: "toast-button-inner" }, b.icon && h("ion-icon", { "aria-hidden": "true", icon: b.icon, slot: b.text === void 0 ? "icon-only" : void 0, class: "toast-button-icon" }), b.text), mode === "md" && h("ion-ripple-effect", { type: b.icon !== void 0 && b.text === void 0 ? "unbounded" : "bounded" }))));
  }
  /**
   * Render the `message` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderToastMessage(key, ariaHidden = null) {
    const { customHTMLEnabled, message } = this;
    if (customHTMLEnabled) {
      return h("div", { key, "aria-hidden": ariaHidden, class: "toast-message", part: "message", innerHTML: sanitizeDOMString(message) });
    }
    return h("div", { key, "aria-hidden": ariaHidden, class: "toast-message", part: "message" }, message);
  }
  /**
   * Render the `header` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderHeader(key, ariaHidden = null) {
    return h("div", { key, class: "toast-header", "aria-hidden": ariaHidden, part: "header" }, this.header);
  }
  render() {
    const { layout, el, revealContentToScreenReader, header, message } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter((b) => b.side === "start");
    const endButtons = allButtons.filter((b) => b.side !== "start");
    const mode = getIonMode(this);
    const wrapperClass = {
      "toast-wrapper": true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true
    };
    if (layout === "stacked" && startButtons.length > 0 && endButtons.length > 0) {
      printIonWarning("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.", el);
    }
    return h(Host, Object.assign({ key: "da148788489146a20b42023fdc6401e53c044767", tabindex: "-1" }, this.htmlAttributes, { style: {
      zIndex: `${6e4 + this.overlayIndex}`
    }, class: createColorClasses(this.color, Object.assign(Object.assign({ [mode]: true }, getClassMap(this.cssClass)), { "overlay-hidden": true, "toast-translucent": this.translucent })), onIonToastWillDismiss: this.dispatchCancelHandler }), h("div", { key: "ab0a4d783aa43ba961492b3eb8beb60a38153057", class: wrapperClass }, h("div", { key: "83e49027fd1ca6553d6910ff91befeea43576f3c", class: "toast-container", part: "container" }, this.renderButtons(startButtons, "start"), this.icon !== void 0 && h("ion-icon", { key: "025cb4b6b170a89548969a25bcce4ab7a3817898", class: "toast-icon", part: "icon", icon: this.icon, lazy: false, "aria-hidden": "true" }), h("div", { key: "b811b4e1cbc1528c2cfb57898f5615692120f840", class: "toast-content", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !revealContentToScreenReader && header !== void 0 && this.renderHeader("oldHeader", "true"), !revealContentToScreenReader && message !== void 0 && this.renderToastMessage("oldMessage", "true"), revealContentToScreenReader && header !== void 0 && this.renderHeader("header"), revealContentToScreenReader && message !== void 0 && this.renderToastMessage("header")), this.renderButtons(endButtons, "end"))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonClass = (button) => {
  return {
    "toast-button": true,
    "toast-button-icon-only": button.icon !== void 0 && button.text === void 0,
    [`toast-button-${button.role}`]: button.role !== void 0,
    "ion-focusable": true,
    "ion-activatable": true
  };
};
var buttonPart = (button) => {
  return isCancel(button.role) ? "button cancel" : "button";
};
Toast.style = {
  ios: IonToastIosStyle0,
  md: IonToastMdStyle0
};
export {
  Toast as ion_toast
};
