import {
  findClosestIonContent,
  getScrollElement,
  scrollByPoint
} from "./chunk-YUOIEUAI.js";
import {
  Keyboard,
  KeyboardResize
} from "./chunk-4GZUXIOX.js";
import "./chunk-J6NTUUTK.js";
import {
  doc,
  win
} from "./chunk-54LAR2PU.js";
import "./chunk-AB2YFIZ6.js";
import {
  addEventListener,
  componentOnReady,
  raf,
  removeEventListener
} from "./chunk-TTWJLGM2.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/input-shims-0314bbe5.js
var cloneMap = /* @__PURE__ */ new WeakMap();
var relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0, disabledClonedInput = false) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
  } else {
    removeClone(componentEl, inputEl);
  }
};
var isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
var addClone = (componentEl, inputEl, inputRelativeY, disabledClonedInput = false) => {
  const parentEl = inputEl.parentNode;
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add("cloned-input");
  clonedEl.tabIndex = -1;
  if (disabledClonedInput) {
    clonedEl.disabled = true;
  }
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc2 = componentEl.ownerDocument;
  const tx = doc2.dir === "rtl" ? 9999 : -9999;
  componentEl.style.pointerEvents = "none";
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
var removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = "";
  inputEl.style.transform = "";
};
var SCROLL_AMOUNT_PADDING = 50;
var enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => {
      return;
    };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  addEventListener(scrollEl, "ionScrollStart", hideCaret);
  addEventListener(scrollEl, "ionScrollEnd", showCaret);
  inputEl.addEventListener("blur", onBlur);
  return () => {
    removeEventListener(scrollEl, "ionScrollStart", hideCaret);
    removeEventListener(scrollEl, "ionScrollEnd", showCaret);
    inputEl.removeEventListener("blur", onBlur);
  };
};
var SKIP_SELECTOR = "input, textarea, [no-blur], [contenteditable]";
var enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc2 = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc2.activeElement;
    if (!active) {
      return;
    }
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  addEventListener(doc2, "ionScrollStart", onScroll);
  doc2.addEventListener("focusin", onFocusin, true);
  doc2.addEventListener("touchend", onTouchend, false);
  return () => {
    removeEventListener(doc2, "ionScrollStart", onScroll, true);
    doc2.removeEventListener("focusin", onFocusin, true);
    doc2.removeEventListener("touchend", onTouchend, false);
  };
};
var SCROLL_ASSIST_SPEED = 0.3;
var getScrollData = (componentEl, contentEl, keyboardHeight, platformHeight) => {
  var _a;
  const itemEl = (_a = componentEl.closest("ion-item,[ion-item]")) !== null && _a !== void 0 ? _a : componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, platformHeight);
};
var calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom - SCROLL_AMOUNT_PADDING;
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  const desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};
var PADDING_TIMER_KEY = "$ionPaddingTimer";
var setScrollPadding = (contentEl, paddingAmount, clearCallback) => {
  const timer = contentEl[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (paddingAmount > 0) {
    contentEl.style.setProperty("--keyboard-offset", `${paddingAmount}px`);
  } else {
    contentEl[PADDING_TIMER_KEY] = setTimeout(() => {
      contentEl.style.setProperty("--keyboard-offset", "0px");
      if (clearCallback) {
        clearCallback();
      }
    }, 120);
  }
};
var setClearScrollPaddingListener = (inputEl, contentEl, doneCallback) => {
  const clearScrollPadding = () => {
    if (contentEl) {
      setScrollPadding(contentEl, 0, doneCallback);
    }
  };
  inputEl.addEventListener("focusout", clearScrollPadding, { once: true });
};
var currentPadding = 0;
var SKIP_SCROLL_ASSIST = "data-ionic-skip-scroll-assist";
var enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, keyboardResize, disableClonedInput = false) => {
  const addScrollPadding = enableScrollPadding && (keyboardResize === void 0 || keyboardResize.mode === KeyboardResize.None);
  let hasKeyboardBeenPresentedForTextField = false;
  const platformHeight = win !== void 0 ? win.innerHeight : 0;
  const keyboardShow = (ev) => {
    if (hasKeyboardBeenPresentedForTextField === false) {
      hasKeyboardBeenPresentedForTextField = true;
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, ev.detail.keyboardHeight, addScrollPadding, disableClonedInput, platformHeight, false);
  };
  const focusOut = () => {
    hasKeyboardBeenPresentedForTextField = false;
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
  const focusIn = () => __async(void 0, null, function* () {
    if (inputEl.hasAttribute(SKIP_SCROLL_ASSIST)) {
      inputEl.removeAttribute(SKIP_SCROLL_ASSIST);
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, addScrollPadding, disableClonedInput, platformHeight);
    win === null || win === void 0 ? void 0 : win.addEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.addEventListener("focusout", focusOut);
  });
  componentEl.addEventListener("focusin", focusIn);
  return () => {
    componentEl.removeEventListener("focusin", focusIn);
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
};
var setManualFocus = (el) => {
  if (document.activeElement === el) {
    return;
  }
  el.setAttribute(SKIP_SCROLL_ASSIST, "true");
  el.focus();
};
var jsSetFocus = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, disableClonedInput = false, platformHeight = 0, waitForResize = true) => __async(void 0, null, function* () {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight, platformHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    setManualFocus(inputEl);
    if (enableScrollPadding && contentEl !== null) {
      setScrollPadding(contentEl, currentPadding);
      setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
    }
    return;
  }
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
  setManualFocus(inputEl);
  raf(() => componentEl.click());
  if (enableScrollPadding && contentEl) {
    currentPadding = scrollData.scrollPadding;
    setScrollPadding(contentEl, currentPadding);
  }
  if (typeof window !== "undefined") {
    let scrollContentTimeout;
    const scrollContent = () => __async(void 0, null, function* () {
      if (scrollContentTimeout !== void 0) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.removeEventListener("ionKeyboardDidShow", scrollContent);
      if (contentEl) {
        yield scrollByPoint(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      setManualFocus(inputEl);
      if (enableScrollPadding) {
        setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
      }
    });
    const doubleKeyboardEventListener = () => {
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.addEventListener("ionKeyboardDidShow", scrollContent);
    };
    if (contentEl) {
      const scrollEl = yield getScrollElement(contentEl);
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (waitForResize && scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop) {
        if (inputEl.type === "password") {
          scrollData.scrollAmount += SCROLL_AMOUNT_PADDING;
          window.addEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
        } else {
          window.addEventListener("ionKeyboardDidShow", scrollContent);
        }
        scrollContentTimeout = setTimeout(scrollContent, 1e3);
        return;
      }
    }
    scrollContent();
  }
});
var INPUT_BLURRING = true;
var startInputShims = (config, platform) => __async(void 0, null, function* () {
  if (doc === void 0) {
    return;
  }
  const isIOS = platform === "ios";
  const isAndroid = platform === "android";
  const keyboardHeight = config.getNumber("keyboardHeight", 290);
  const scrollAssist = config.getBoolean("scrollAssist", true);
  const hideCaret = config.getBoolean("hideCaretOnScroll", isIOS);
  const inputBlurring = config.getBoolean("inputBlurring", false);
  const scrollPadding = config.getBoolean("scrollPadding", true);
  const inputs = Array.from(doc.querySelectorAll("ion-input, ion-textarea"));
  const hideCaretMap = /* @__PURE__ */ new WeakMap();
  const scrollAssistMap = /* @__PURE__ */ new WeakMap();
  const keyboardResizeMode = yield Keyboard.getResizeMode();
  const registerInput = (componentEl) => __async(void 0, null, function* () {
    yield new Promise((resolve) => componentOnReady(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector("input") || inputRoot.querySelector("textarea");
    const scrollEl = findClosestIonContent(componentEl);
    const footerEl = !scrollEl ? componentEl.closest("ion-footer") : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    const isDateInput = inputEl.type === "date" || inputEl.type === "datetime-local";
    if (!isDateInput && (!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, scrollPadding, keyboardResizeMode, isAndroid);
      scrollAssistMap.set(componentEl, rmFn);
    }
  });
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  for (const input of inputs) {
    registerInput(input);
  }
  doc.addEventListener("ionInputDidLoad", (ev) => {
    registerInput(ev.detail);
  });
  doc.addEventListener("ionInputDidUnload", (ev) => {
    unregisterInput(ev.detail);
  });
});
export {
  startInputShims
};
