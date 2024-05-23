import {
  win
} from "./chunk-NU6NIPSH.js";
import {
  raf
} from "./chunk-A6W4RR5W.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/notch-controller-55b09e11.js
var createNotchController = (el, getNotchSpacerEl, getLabelSlot) => {
  let notchVisibilityIO;
  const needsExplicitNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (
      /**
       * If the notch is not being used
       * then we do not need to set the notch width.
       */
      notchSpacerEl === void 0 || /**
       * If either the label property is being
       * used or the label slot is not defined,
       * then we do not need to estimate the notch width.
       */
      el.label !== void 0 || getLabelSlot() === null
    ) {
      return false;
    }
    return true;
  };
  const calculateNotchWidth = () => {
    if (needsExplicitNotchWidth()) {
      raf(() => {
        setNotchWidth();
      });
    }
  };
  const setNotchWidth = () => {
    const notchSpacerEl = getNotchSpacerEl();
    if (notchSpacerEl === void 0) {
      return;
    }
    if (!needsExplicitNotchWidth()) {
      notchSpacerEl.style.removeProperty("width");
      return;
    }
    const width = getLabelSlot().scrollWidth;
    if (
      /**
       * If the computed width of the label is 0
       * and notchSpacerEl's offsetParent is null
       * then that means the element is hidden.
       * As a result, we need to wait for the element
       * to become visible before setting the notch width.
       *
       * We do not check el.offsetParent because
       * that can be null if the host element has
       * position: fixed applied to it.
       * notchSpacerEl does not have position: fixed.
       */
      width === 0 && notchSpacerEl.offsetParent === null && win !== void 0 && "IntersectionObserver" in win
    ) {
      if (notchVisibilityIO !== void 0) {
        return;
      }
      const io = notchVisibilityIO = new IntersectionObserver(
        (ev) => {
          if (ev[0].intersectionRatio === 1) {
            setNotchWidth();
            io.disconnect();
            notchVisibilityIO = void 0;
          }
        },
        /**
         * Set the root to be the host element
         * This causes the IO callback
         * to be fired in WebKit as soon as the element
         * is visible. If we used the default root value
         * then WebKit would only fire the IO callback
         * after any animations (such as a modal transition)
         * finished, and there would potentially be a flicker.
         */
        { threshold: 0.01, root: el }
      );
      io.observe(notchSpacerEl);
      return;
    }
    notchSpacerEl.style.setProperty("width", `${width * 0.75}px`);
  };
  const destroy = () => {
    if (notchVisibilityIO) {
      notchVisibilityIO.disconnect();
      notchVisibilityIO = void 0;
    }
  };
  return {
    calculateNotchWidth,
    destroy
  };
};

export {
  createNotchController
};
