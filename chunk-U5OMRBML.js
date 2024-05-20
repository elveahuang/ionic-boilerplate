import {
  config
} from "./chunk-STVEE43Z.js";
import {
  Build,
  writeTask
} from "./chunk-2YSWQYGY.js";
import {
  printIonWarning
} from "./chunk-AB2YFIZ6.js";
import {
  raf
} from "./chunk-TTWJLGM2.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/index-8e6b6a24.js
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
var moveFocus = (el) => {
  el.tabIndex = -1;
  el.focus();
};
var isVisible = (el) => {
  return el.offsetParent !== null;
};
var createFocusController = () => {
  const saveViewFocus = (referenceEl) => {
    const focusManagerEnabled = config.get("focusManagerPriority", false);
    if (focusManagerEnabled) {
      const activeEl = document.activeElement;
      if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) {
        activeEl.setAttribute(LAST_FOCUS, "true");
      }
    }
  };
  const setViewFocus = (referenceEl) => {
    const focusManagerPriorities = config.get("focusManagerPriority", false);
    if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
      const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
      if (lastFocus && isVisible(lastFocus)) {
        moveFocus(lastFocus);
        return;
      }
      for (const priority of focusManagerPriorities) {
        switch (priority) {
          case "content":
            const content = referenceEl.querySelector('main, [role="main"]');
            if (content && isVisible(content)) {
              moveFocus(content);
              return;
            }
            break;
          case "heading":
            const headingOne = referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');
            if (headingOne && isVisible(headingOne)) {
              moveFocus(headingOne);
              return;
            }
            break;
          case "banner":
            const header = referenceEl.querySelector('header, [role="banner"]');
            if (header && isVisible(header)) {
              moveFocus(header);
              return;
            }
            break;
          default:
            printIonWarning(`Unrecognized focus manager priority value ${priority}`);
            break;
        }
      }
      moveFocus(referenceEl);
    }
  };
  return {
    saveViewFocus,
    setViewFocus
  };
};
var LAST_FOCUS = "ion-last-focus";
var iosTransitionAnimation = () => import("./chunk-ZM3CODQM.js");
var mdTransitionAnimation = () => import("./chunk-7AIA6QGF.js");
var focusController = createFocusController();
var transition = (opts) => {
  return new Promise((resolve, reject) => {
    writeTask(() => {
      beforeTransition(opts);
      runTransition(opts).then((result) => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, (error) => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
var beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  focusController.saveViewFocus(leavingEl);
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add("can-go-back");
  } else {
    enteringEl.classList.remove("can-go-back");
  }
  setPageHidden(enteringEl, false);
  enteringEl.style.setProperty("pointer-events", "none");
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty("pointer-events", "none");
  }
};
var runTransition = (opts) => __async(void 0, null, function* () {
  const animationBuilder = yield getAnimationBuilder(opts);
  const ani = animationBuilder && Build.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts);
  return ani;
});
var afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove("ion-page-invisible");
  enteringEl.style.removeProperty("pointer-events");
  if (leavingEl !== void 0) {
    leavingEl.classList.remove("ion-page-invisible");
    leavingEl.style.removeProperty("pointer-events");
  }
  focusController.setViewFocus(enteringEl);
};
var getAnimationBuilder = (opts) => __async(void 0, null, function* () {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return void 0;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = opts.mode === "ios" ? (yield iosTransitionAnimation()).iosTransitionAnimation : (yield mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
});
var animation = (animationBuilder, opts) => __async(void 0, null, function* () {
  yield waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = yield playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(void 0);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
});
var noAnimation = (opts) => __async(void 0, null, function* () {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const focusManagerEnabled = config.get("focusManagerPriority", false);
  yield waitForReady(opts, focusManagerEnabled);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
});
var waitForReady = (opts, defaultDeep) => __async(void 0, null, function* () {
  const deep = opts.deepWait !== void 0 ? opts.deepWait : defaultDeep;
  if (deep) {
    yield Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
  }
  yield notifyViewReady(opts.viewIsReady, opts.enteringEl);
});
var notifyViewReady = (viewIsReady, enteringEl) => __async(void 0, null, function* () {
  if (viewIsReady) {
    yield viewIsReady(enteringEl);
  }
});
var playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise((resolve) => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  if (progressCallback) {
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    trans.play();
  }
  return promise;
};
var fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
var fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
var lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
var waitForMount = () => {
  return new Promise((resolve) => raf(() => raf(() => resolve())));
};
var deepReady = (el) => __async(void 0, null, function* () {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = yield element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    } else if (element.__registerHost != null) {
      const waitForCustomElement = new Promise((resolve) => raf(resolve));
      yield waitForCustomElement;
      return;
    }
    yield Promise.all(Array.from(element.children).map(deepReady));
  }
});
var setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute("aria-hidden", "true");
    el.classList.add("ion-page-hidden");
  } else {
    el.hidden = false;
    el.removeAttribute("aria-hidden");
    el.classList.remove("ion-page-hidden");
  }
};
var setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== void 0) {
    enteringEl.style.zIndex = direction === "back" ? "99" : "101";
  }
  if (leavingEl !== void 0) {
    leavingEl.style.zIndex = "100";
  }
};
var getIonPageElement = (element) => {
  if (element.classList.contains("ion-page")) {
    return element;
  }
  const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (ionPage) {
    return ionPage;
  }
  return element;
};

export {
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  transition,
  lifecycle,
  waitForMount,
  deepReady,
  setPageHidden,
  getIonPageElement
};
