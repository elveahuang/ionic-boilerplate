import {
  SPINNERS
} from "./chunk-GYDT3KZ5.js";
import {
  ImpactStyle,
  hapticImpact
} from "./chunk-2JR57BSM.js";
import {
  ION_CONTENT_CLASS_SELECTOR,
  ION_CONTENT_ELEMENT_SELECTOR,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-YUOIEUAI.js";
import "./chunk-J6NTUUTK.js";
import {
  getTimeGivenProgression
} from "./chunk-HAVZYRFL.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-DX4XHBGI.js";
import {
  createAnimation
} from "./chunk-F67Q7A63.js";
import "./chunk-54LAR2PU.js";
import {
  arrowDown,
  caretBackSharp
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
  readTask,
  registerInstance,
  writeTask
} from "./chunk-2YSWQYGY.js";
import "./chunk-AB2YFIZ6.js";
import {
  clamp,
  componentOnReady,
  getElementRoot,
  raf,
  transitionEndAsync
} from "./chunk-TTWJLGM2.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js
var getRefresherAnimationType = (contentEl) => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === "ION-HEADER";
  return hasHeader ? "translate" : "scale";
};
var createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === "scale" ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
var createBaseAnimation = (pullingRefresherIcon) => {
  const spinner = pullingRefresherIcon.querySelector("ion-spinner");
  const circle = spinner.shadowRoot.querySelector("circle");
  const spinnerArrowContainer = pullingRefresherIcon.querySelector(".spinner-arrow-container");
  const arrowContainer = pullingRefresherIcon.querySelector(".arrow-container");
  const arrow = arrowContainer ? arrowContainer.querySelector("ion-icon") : null;
  const baseAnimation = createAnimation().duration(1e3).easing("ease-out");
  const spinnerArrowContainerAnimation = createAnimation().addElement(spinnerArrowContainer).keyframes([
    { offset: 0, opacity: "0.3" },
    { offset: 0.45, opacity: "0.3" },
    { offset: 0.55, opacity: "1" },
    { offset: 1, opacity: "1" }
  ]);
  const circleInnerAnimation = createAnimation().addElement(circle).keyframes([
    { offset: 0, strokeDasharray: "1px, 200px" },
    { offset: 0.2, strokeDasharray: "1px, 200px" },
    { offset: 0.55, strokeDasharray: "100px, 200px" },
    { offset: 1, strokeDasharray: "100px, 200px" }
  ]);
  const circleOuterAnimation = createAnimation().addElement(spinner).keyframes([
    { offset: 0, transform: "rotate(-90deg)" },
    { offset: 1, transform: "rotate(210deg)" }
  ]);
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = createAnimation().addElement(arrowContainer).keyframes([
      { offset: 0, transform: "rotate(0deg)" },
      { offset: 0.3, transform: "rotate(0deg)" },
      { offset: 0.55, transform: "rotate(280deg)" },
      { offset: 1, transform: "rotate(400deg)" }
    ]);
    const arrowAnimation = createAnimation().addElement(arrow).keyframes([
      { offset: 0, transform: "translateX(2px) scale(0)" },
      { offset: 0.3, transform: "translateX(2px) scale(0)" },
      { offset: 0.55, transform: "translateX(-1.5px) scale(1)" },
      { offset: 1, transform: "translateX(-1.5px) scale(1)" }
    ]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
var createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([
    { offset: 0, transform: `scale(0) translateY(-${height}px)` },
    { offset: 1, transform: "scale(1) translateY(100px)" }
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([
    { offset: 0, transform: `translateY(-${height}px)` },
    { offset: 1, transform: "translateY(100px)" }
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createSnapBackAnimation = (pullingRefresherIcon) => {
  return createAnimation().duration(125).addElement(pullingRefresherIcon).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)");
};
var setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty("opacity", opacity.toString());
};
var handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  writeTask(() => {
    ticks.forEach((el, i) => {
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = clamp(0, start / range, 1);
      el.style.setProperty("opacity", progression.toString());
    });
  });
};
var handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  writeTask(() => {
    spinner.style.setProperty("--refreshing-rotation-duration", lastVelocityY >= 1 ? "0.5s" : "2s");
    spinner.style.setProperty("opacity", "1");
  });
};
var translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = transitionEndAsync(el, duration);
  writeTask(() => {
    el.style.setProperty("transition", `${duration}ms all ease-out`);
    if (value === void 0) {
      el.style.removeProperty("transform");
    } else {
      el.style.setProperty("transform", `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
var supportsRubberBandScrolling = () => {
  return navigator.maxTouchPoints > 0 && CSS.supports("background: -webkit-named-image(apple-pay-logo-black)");
};
var shouldUseNativeRefresher = (referenceEl, mode) => __async(void 0, null, function* () {
  const refresherContent = referenceEl.querySelector("ion-refresher-content");
  if (!refresherContent) {
    return Promise.resolve(false);
  }
  yield new Promise((resolve) => componentOnReady(refresherContent, resolve));
  const pullingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
  const refreshingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
  return pullingSpinner !== null && refreshingSpinner !== null && (mode === "ios" && supportsRubberBandScrolling() || mode === "md");
});
var refresherIosCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
var IonRefresherIosStyle0 = refresherIosCss;
var refresherMdCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";
var IonRefresherMdStyle0 = refresherMdCss;
var Refresher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRefresh = createEvent(this, "ionRefresh", 7);
    this.ionPull = createEvent(this, "ionPull", 7);
    this.ionStart = createEvent(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = "280ms";
    this.snapbackDuration = "280ms";
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  checkNativeRefresher() {
    return __async(this, null, function* () {
      const useNativeRefresher = yield shouldUseNativeRefresher(this.el, getIonMode(this));
      if (useNativeRefresher && !this.nativeRefresher) {
        const contentEl = this.el.closest("ion-content");
        this.setupNativeRefresher(contentEl);
      } else if (!useNativeRefresher) {
        this.destroyNativeRefresher();
      }
    });
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback);
      this.scrollListenerCallback = void 0;
    }
    this.nativeRefresher = false;
  }
  resetNativeRefresher(el, state) {
    return __async(this, null, function* () {
      this.state = state;
      if (getIonMode(this) === "ios") {
        yield translateElement(el, void 0, 300);
      } else {
        yield transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"), 200);
      }
      this.didRefresh = false;
      this.needsCompletion = false;
      this.pointerDown = false;
      this.animations.forEach((ani) => ani.destroy());
      this.animations = [];
      this.progress = 0;
      this.state = 1;
    });
  }
  setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      this.elementToTransform = this.scrollEl;
      const ticks = pullingSpinner.shadowRoot.querySelectorAll("svg");
      let MAX_PULL = this.scrollEl.clientHeight * 0.16;
      const NUM_TICKS = ticks.length;
      writeTask(() => ticks.forEach((el) => el.style.setProperty("animation", "none")));
      this.scrollListenerCallback = () => {
        if (!this.pointerDown && this.state === 1) {
          return;
        }
        readTask(() => {
          const scrollTop = this.scrollEl.scrollTop;
          const refresherHeight = this.el.clientHeight;
          if (scrollTop > 0) {
            if (this.state === 8) {
              const ratio = clamp(0, scrollTop / (refresherHeight * 0.5), 1);
              writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
              return;
            }
            return;
          }
          if (this.pointerDown) {
            if (!this.didStart) {
              this.didStart = true;
              this.ionStart.emit();
            }
            if (this.pointerDown) {
              this.ionPull.emit();
            }
          }
          const offset = this.didStart ? 30 : 0;
          const pullAmount = this.progress = clamp(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
          const shouldShowRefreshingSpinner = this.state === 8 || pullAmount === 1;
          if (shouldShowRefreshingSpinner) {
            if (this.pointerDown) {
              handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
            }
            if (!this.didRefresh) {
              this.beginRefresh();
              this.didRefresh = true;
              hapticImpact({ style: ImpactStyle.Light });
              if (!this.pointerDown) {
                translateElement(this.elementToTransform, `${refresherHeight}px`);
              }
            }
          } else {
            this.state = 2;
            handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
          }
        });
      };
      this.scrollEl.addEventListener("scroll", this.scrollListenerCallback);
      this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        onStart: () => {
          this.pointerDown = true;
          if (!this.didRefresh) {
            translateElement(this.elementToTransform, "0px");
          }
          if (MAX_PULL === 0) {
            MAX_PULL = this.scrollEl.clientHeight * 0.16;
          }
        },
        onMove: (ev) => {
          this.lastVelocityY = ev.velocityY;
        },
        onEnd: () => {
          this.pointerDown = false;
          this.didStart = false;
          if (this.needsCompletion) {
            this.resetNativeRefresher(
              this.elementToTransform,
              32
              /* RefresherState.Completing */
            );
            this.needsCompletion = false;
          } else if (this.didRefresh) {
            readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
          }
        }
      });
      this.disabledChanged();
    });
  }
  setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      const circle = getElementRoot(pullingSpinner).querySelector("circle");
      const pullingRefresherIcon = this.el.querySelector("ion-refresher-content .refresher-pulling-icon");
      const refreshingCircle = getElementRoot(refreshingSpinner).querySelector("circle");
      if (circle !== null && refreshingCircle !== null) {
        writeTask(() => {
          circle.style.setProperty("animation", "none");
          refreshingSpinner.style.setProperty("animation-delay", "-655ms");
          refreshingCircle.style.setProperty("animation-delay", "-655ms");
        });
      }
      this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        canStart: () => this.state !== 8 && this.state !== 32 && this.scrollEl.scrollTop === 0,
        onStart: (ev) => {
          this.progress = 0;
          ev.data = { animation: void 0, didStart: false, cancelled: false };
        },
        onMove: (ev) => {
          if (ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
            ev.data.cancelled = true;
            return;
          }
          if (!ev.data.didStart) {
            ev.data.didStart = true;
            this.state = 2;
            const { scrollEl } = this;
            const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
            writeTask(() => scrollEl.style.setProperty(overflowProperty, "hidden"));
            const animationType = getRefresherAnimationType(contentEl);
            const animation = createPullingAnimation(animationType, pullingRefresherIcon, this.el);
            ev.data.animation = animation;
            animation.progressStart(false, 0);
            this.ionStart.emit();
            this.animations.push(animation);
            return;
          }
          this.progress = clamp(0, ev.deltaY / 180 * 0.5, 1);
          ev.data.animation.progressStep(this.progress);
          this.ionPull.emit();
        },
        onEnd: (ev) => {
          if (!ev.data.didStart) {
            return;
          }
          this.gesture.enable(false);
          const { scrollEl } = this;
          const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
          writeTask(() => scrollEl.style.removeProperty(overflowProperty));
          if (this.progress <= 0.4) {
            ev.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
              this.animations.forEach((ani) => ani.destroy());
              this.animations = [];
              this.gesture.enable(true);
              this.state = 1;
            });
            return;
          }
          const progress = getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
          const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
          this.animations.push(snapBackAnimation);
          writeTask(() => __async(this, null, function* () {
            pullingRefresherIcon.style.setProperty("--ion-pulling-refresher-translate", `${progress * 100}px`);
            ev.data.animation.progressEnd();
            yield snapBackAnimation.play();
            this.beginRefresh();
            ev.data.animation.destroy();
            this.gesture.enable(true);
          }));
        }
      });
      this.disabledChanged();
    });
  }
  setupNativeRefresher(contentEl) {
    return __async(this, null, function* () {
      if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
        return;
      }
      this.setCss(0, "", false, "");
      this.nativeRefresher = true;
      const pullingSpinner = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
      const refreshingSpinner = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
      if (getIonMode(this) === "ios") {
        this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
      } else {
        this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
      }
    });
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (this.el.getAttribute("slot") !== "fixed") {
        console.error('Make sure you use: <ion-refresher slot="fixed">');
        return;
      }
      const contentEl = this.el.closest(ION_CONTENT_ELEMENT_SELECTOR);
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      componentOnReady(contentEl, () => __async(this, null, function* () {
        const customScrollTarget = contentEl.querySelector(ION_CONTENT_CLASS_SELECTOR);
        this.scrollEl = yield getScrollElement(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
        this.backgroundContentEl = yield contentEl.getBackgroundElement();
        if (yield shouldUseNativeRefresher(this.el, getIonMode(this))) {
          this.setupNativeRefresher(contentEl);
        } else {
          this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
            el: contentEl,
            gestureName: "refresher",
            gesturePriority: 31,
            direction: "y",
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: (ev) => this.onMove(ev),
            onEnd: () => this.onEnd()
          });
          this.disabledChanged();
        }
      }));
    });
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = void 0;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  complete() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        this.needsCompletion = true;
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            32
            /* RefresherState.Completing */
          )));
        }
      } else {
        this.close(32, "120ms");
      }
    });
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  cancel() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            16
            /* RefresherState.Cancelling */
          )));
        }
      } else {
        this.close(16, "");
      }
    });
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1) {
      return false;
    }
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1;
    this.memoizeOverflowStyle();
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    const ev = detail.event;
    if (ev.touches !== void 0 && ev.touches.length > 1) {
      return;
    }
    if ((this.state & 56) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    if (deltaY <= 0) {
      this.progress = 0;
      this.state = 1;
      if (this.appliedStyles) {
        this.setCss(0, "", false, "");
        return;
      }
      return;
    }
    if (this.state === 1) {
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      this.state = 2;
    }
    if (ev.cancelable) {
      ev.preventDefault();
    }
    this.setCss(deltaY, "0ms", true, "");
    if (deltaY === 0) {
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    this.progress = deltaY / pullMin;
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    this.ionPull.emit();
    if (deltaY < pullMin) {
      this.state = 2;
      return;
    }
    if (deltaY > this.pullMax) {
      this.beginRefresh();
      return;
    }
    this.state = 4;
    return;
  }
  onEnd() {
    if (this.state === 4) {
      this.beginRefresh();
    } else if (this.state === 2) {
      this.cancel();
    } else if (this.state === 1) {
      this.restoreOverflowStyle();
    }
  }
  beginRefresh() {
    this.state = 8;
    this.setCss(this.pullMin, this.snapbackDuration, true, "");
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    setTimeout(() => {
      this.state = 1;
      this.progress = 0;
      this.didStart = false;
      this.setCss(0, "0ms", false, "", true);
    }, 600);
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    writeTask(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : "";
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = overflowVisible ? "hidden" : "";
      }
      if (shouldRestoreOverflowStyle) {
        this.restoreOverflowStyle();
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const { overflow, overflowX, overflowY } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : "",
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : "",
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : ""
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== void 0 && this.scrollEl !== void 0) {
      const { overflow, overflowX, overflowY } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = void 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "1696f66f62d18c9075294f17cb24263325fcf35d", slot: "fixed", class: {
      [mode]: true,
      // Used internally for styling
      [`refresher-${mode}`]: true,
      "refresher-native": this.nativeRefresher,
      "refresher-active": this.state !== 1,
      "refresher-pulling": this.state === 2,
      "refresher-ready": this.state === 4,
      "refresher-refreshing": this.state === 8,
      "refresher-cancelling": this.state === 16,
      "refresher-completing": this.state === 32
    } });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Refresher.style = {
  ios: IonRefresherIosStyle0,
  md: IonRefresherMdStyle0
};
var RefresherContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.pullingIcon = void 0;
    this.pullingText = void 0;
    this.refreshingSpinner = void 0;
    this.refreshingText = void 0;
  }
  componentWillLoad() {
    if (this.pullingIcon === void 0) {
      const hasRubberBandScrolling = supportsRubberBandScrolling();
      const mode = getIonMode(this);
      const overflowRefresher = hasRubberBandScrolling ? "lines" : arrowDown;
      this.pullingIcon = config.get("refreshingIcon", mode === "ios" && hasRubberBandScrolling ? config.get("spinner", overflowRefresher) : "circular");
    }
    if (this.refreshingSpinner === void 0) {
      const mode = getIonMode(this);
      this.refreshingSpinner = config.get("refreshingSpinner", config.get("spinner", mode === "ios" ? "lines" : "circular"));
    }
  }
  renderPullingText() {
    const { customHTMLEnabled, pullingText } = this;
    if (customHTMLEnabled) {
      return h("div", { class: "refresher-pulling-text", innerHTML: sanitizeDOMString(pullingText) });
    }
    return h("div", { class: "refresher-pulling-text" }, pullingText);
  }
  renderRefreshingText() {
    const { customHTMLEnabled, refreshingText } = this;
    if (customHTMLEnabled) {
      return h("div", { class: "refresher-refreshing-text", innerHTML: sanitizeDOMString(refreshingText) });
    }
    return h("div", { class: "refresher-refreshing-text" }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] !== void 0;
    const mode = getIonMode(this);
    return h(Host, { key: "1bec5b4da221c69d856f3f5ddf40f2e03ebf2a4c", class: mode }, h("div", { key: "4fcc526c4f1881e9368d9cd16bd7030919bd3841", class: "refresher-pulling" }, this.pullingIcon && hasSpinner && h("div", { key: "a4e9e2e12c2d7faefc8303ec8c021f999ddf308e", class: "refresher-pulling-icon" }, h("div", { key: "5a2d215feb7fb4b64d540d3a65c0f24b415a2433", class: "spinner-arrow-container" }, h("ion-spinner", { key: "abef2621d671ac6ff0abac43a702cbd825b7f127", name: this.pullingIcon, paused: true }), mode === "md" && this.pullingIcon === "circular" && h("div", { key: "30087d672c3780672a05874cd93cd099b2855462", class: "arrow-container" }, h("ion-icon", { key: "5e30333dee469aec0d8efc8c4e6dabb619c6f363", icon: caretBackSharp, "aria-hidden": "true" })))), this.pullingIcon && !hasSpinner && h("div", { key: "48fe72b5ce8ded633c6ee799cebb520b9c8be528", class: "refresher-pulling-icon" }, h("ion-icon", { key: "d8dfd5d42056b1c0a436c5006affb255407816c0", icon: this.pullingIcon, lazy: false, "aria-hidden": "true" })), this.pullingText !== void 0 && this.renderPullingText()), h("div", { key: "c2cbfb94f157c82601ffe7bb815ff82ebc7c0a49", class: "refresher-refreshing" }, this.refreshingSpinner && h("div", { key: "17f3ebe6a31768d5e389f45a2c12f68600185db9", class: "refresher-refreshing-icon" }, h("ion-spinner", { key: "e8e61f8d7189c9939bba184201c9509d1d5b0fad", name: this.refreshingSpinner })), this.refreshingText !== void 0 && this.renderRefreshingText()));
  }
  get el() {
    return getElement(this);
  }
};
export {
  Refresher as ion_refresher,
  RefresherContent as ion_refresher_content
};
