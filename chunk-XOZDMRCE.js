import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-2JR57BSM.js";
import {
  writeTask
} from "./chunk-2YSWQYGY.js";
import {
  createGesture
} from "./chunk-A5LXLC4Q.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/button-active-920addb8.js
var createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === "undefined") {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target) || target.disabled) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.add("ion-activated"));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.remove("ion-activated"));
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = void 0;
  };
  return createGesture({
    el,
    gestureName: "buttonActiveDrag",
    threshold: 0,
    onStart: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart),
    onMove: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged),
    onEnd: () => {
      clearActiveButton(true);
      hapticSelectionEnd();
      initialTouchedButton = void 0;
    }
  });
};

export {
  createButtonActiveGesture
};
