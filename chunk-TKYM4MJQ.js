import {
  printIonWarning
} from "./chunk-WLQP6QNR.js";
import {
  raf
} from "./chunk-TPN6VLID.js";
import {
  config
} from "./chunk-57OCKW6Z.js";
import {
  Build,
  writeTask
} from "./chunk-TRVR4476.js";
import {
  win
} from "./chunk-IIY3WTVD.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/components/animation.js
var animationPrefix;
var getAnimationPrefix = (el) => {
  if (animationPrefix === void 0) {
    const supportsUnprefixed = el.style.animationName !== void 0;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.setProperty(prefix + propertyName, value);
};
var addClassToArray = (classes = [], className) => {
  if (className !== void 0) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
var createAnimation = (animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = (clearStyleSheets) => {
    childAnimations.forEach((childAnimation) => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  const cleanUp = (clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = void 0;
    forceDurationValue = void 0;
    forceDelayValue = void 0;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex((callbackObject) => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({ c: callback, o: opts });
    return ani;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({ c: callback, o: opts });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.cancel();
      });
      webAnimations.length = 0;
    }
  };
  const cleanUpStyleSheets = () => {
    stylesheets.forEach((stylesheet) => {
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = (readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = (writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = (readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = (writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = (className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = (className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = "";
    }
    return ani;
  };
  const afterAddClass = (className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = (className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = "";
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== void 0) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return "both";
  };
  const getDirection = () => {
    if (forceDirectionValue !== void 0) {
      return forceDirectionValue;
    }
    if (_direction !== void 0) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return "normal";
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return "linear";
    }
    if (_easing !== void 0) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return "linear";
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== void 0) {
      return forceDurationValue;
    }
    if (_duration !== void 0) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== void 0) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== void 0) {
      return forceDelayValue;
    }
    if (_delay !== void 0) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = (animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = (animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = (animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = (animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = (animationDuration) => {
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = (animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = (animation2) => {
    parentAnimation = animation2;
    return ani;
  };
  const addElement = (el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return ani;
  };
  const addAnimation = (animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation2 of animationToAdd) {
          animation2.parent(ani);
          childAnimations.push(animation2);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = (keyframeValues) => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = (keyframeValues) => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach((animation2) => {
        const keyframeEffect = animation2.effect;
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation2.effect = newEffect;
        }
      });
    }
  };
  const beforeAnimation = () => {
    _beforeAddReadFunctions.forEach((callback) => callback());
    _beforeAddWriteFunctions.forEach((callback) => callback());
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  const afterAnimation = () => {
    _afterAddReadFunctions.forEach((callback) => callback());
    _afterAddWriteFunctions.forEach((callback) => callback());
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    forceDurationValue = void 0;
    forceDirectionValue = void 0;
    forceDelayValue = void 0;
    onFinishCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeWebAnimation = () => {
    elements.forEach((element) => {
      const animation2 = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation2.pause();
      webAnimations.push(animation2);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = () => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  };
  const setAnimationStep = (step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.currentTime = animation2.effect.getComputedTiming().delay + getDuration() * step;
        animation2.pause();
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach((animation2) => {
      animation2.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== void 0) {
      setAnimationStep(step);
    }
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach((animation2) => {
        animation2.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = (step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation2) => {
      animation2.progressEnd(playTo, step, dur);
    });
    if (dur !== void 0) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
      if (forceDirectionValue === "reverse") {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== void 0 && !parentAnimation) {
      play();
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach((animation2) => {
          animation2.pause();
        });
      } else {
        elements.forEach((element) => {
          setStyleProperty(element, "animation-play-state", "paused");
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach((animation2) => {
      animation2.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach((animation2) => {
      animation2.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  };
  const play = (opts) => {
    return new Promise((resolve) => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };
      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      onFinish(onFinishCallback, { oneTimeCallback: true });
      onStop(onStopCallback, { oneTimeCallback: true });
      childAnimations.forEach((animation2) => {
        animation2.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  const stop = () => {
    childAnimations.forEach((animation2) => {
      animation2.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach((onStopCallback) => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{ offset: 0, [property]: value }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, { offset: 1, [property]: value }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/components/index2.js
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
var iosTransitionAnimation = () => import("./chunk-XTPDFE5D.js");
var mdTransitionAnimation = () => import("./chunk-TH4FWY2M.js");
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
  createAnimation,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_DID_ENTER,
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
