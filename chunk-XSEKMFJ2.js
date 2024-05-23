import {
  watchForOptions
} from "./chunk-FNN3P45J.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-ZD57LWNR.js";
import {
  createColorClasses
} from "./chunk-HSGDXAPU.js";
import {
  getIonMode
} from "./chunk-C7BVS75L.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-LVAVXFQB.js";
import "./chunk-ZM7N4A2I.js";
import {
  isEndSide
} from "./chunk-A6W4RR5W.js";
import {
  __async
} from "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js
var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
var IonItemOptionIosStyle0 = itemOptionIosCss;
var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}";
var IonItemOptionMdStyle0 = itemOptionMdCss;
var ItemOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      const el = ev.target.closest("ion-item-option");
      if (el) {
        ev.preventDefault();
      }
    };
    this.color = void 0;
    this.disabled = false;
    this.download = void 0;
    this.expandable = false;
    this.href = void 0;
    this.rel = void 0;
    this.target = void 0;
    this.type = "button";
  }
  render() {
    const { disabled, expandable, href } = this;
    const TagType = href === void 0 ? "button" : "a";
    const mode = getIonMode(this);
    const attrs = TagType === "button" ? { type: this.type } : {
      download: this.download,
      href: this.href,
      target: this.target
    };
    return h(Host, { key: "1900e015f593fefd710478a2088e052399c957eb", onClick: this.onClick, class: createColorClasses(this.color, {
      [mode]: true,
      "item-option-disabled": disabled,
      "item-option-expandable": expandable,
      "ion-activatable": true
    }) }, h(TagType, Object.assign({ key: "5db2bb9bc72b7b00c324e4189cd1b5f862680ebb" }, attrs, { class: "button-native", part: "native", disabled }), h("span", { key: "6927e812ad001c5e7bd17f440d82c3830c58957b", class: "button-inner" }, h("slot", { key: "0fde4333def94c55d1318868c2bc71e780d5876a", name: "top" }), h("div", { key: "7ecc9ae8ddf66d7ed5d9f30becc9faf820e1c62e", class: "horizontal-wrapper" }, h("slot", { key: "a15567fd4bd91080e9fbb6bb0c9b0e67d8a67051", name: "start" }), h("slot", { key: "7f86cdd28063e23f9d78997623333c5037c4f364", name: "icon-only" }), h("slot", { key: "4abb69ce3ad6c4917dd87b7b1eb0fa1c69917d73" }), h("slot", { key: "8b35a29f48722040465f182679ac17209937578d", name: "end" })), h("slot", { key: "fa15a00891b41d66a4ccb51575dec54b72d0059e", name: "bottom" })), mode === "md" && h("ion-ripple-effect", { key: "0c071910c90fafca8026f59d78f4d9d5224d150a" })));
  }
  get el() {
    return getElement(this);
  }
};
ItemOption.style = {
  ios: IonItemOptionIosStyle0,
  md: IonItemOptionMdStyle0
};
var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
var IonItemOptionsIosStyle0 = itemOptionsIosCss;
var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
var IonItemOptionsMdStyle0 = itemOptionsMdCss;
var ItemOptions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSwipe = createEvent(this, "ionSwipe", 7);
    this.side = "end";
  }
  /** @internal */
  fireSwipeEvent() {
    return __async(this, null, function* () {
      this.ionSwipe.emit({
        side: this.side
      });
    });
  }
  render() {
    const mode = getIonMode(this);
    const isEnd = isEndSide(this.side);
    return h(Host, { key: "e28cd6a236323b5cc203c9b96782aa81024da924", class: {
      [mode]: true,
      // Used internally for styling
      [`item-options-${mode}`]: true,
      /**
       * Note: The "start" and "end" terms refer to the
       * direction ion-item-option instances within ion-item-options flow.
       * They do not refer to how ion-item-options flows within ion-item-sliding.
       * As a result, "item-options-start" means the ion-item-options container
       * always appears on the left, and "item-options-end" means the ion-item-options
       * container always appears on the right.
       */
      "item-options-start": !isEnd,
      "item-options-end": isEnd
    } });
  }
  get el() {
    return getElement(this);
  }
};
ItemOptions.style = {
  ios: IonItemOptionsIosStyle0,
  md: IonItemOptionsMdStyle0
};
var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}";
var IonItemSlidingStyle0 = itemSlidingCss;
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;
var ItemSliding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionDrag = createEvent(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0;
    this.optsDirty = true;
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.state = 2;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const { el } = this;
      this.item = el.querySelector("ion-item");
      this.contentEl = findClosestIonContent(el);
      this.mutationObserver = watchForOptions(el, "ion-item-option", () => __async(this, null, function* () {
        yield this.updateOptions();
      }));
      yield this.updateOptions();
      this.gesture = (yield import("./chunk-SUAJF7RD.js")).createGesture({
        el,
        gestureName: "item-swipe",
        gesturePriority: 100,
        threshold: 5,
        canStart: (ev) => this.canStart(ev),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.disabledChanged();
    });
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.item = null;
    this.leftOptions = this.rightOptions = void 0;
    if (openSlidingItem === this.el) {
      openSlidingItem = void 0;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = void 0;
    }
  }
  /**
   * Get the amount the item is open in pixels.
   */
  getOpenAmount() {
    return Promise.resolve(this.openAmount);
  }
  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  getSlidingRatio() {
    return Promise.resolve(this.getSlidingRatioSync());
  }
  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  open(side) {
    return __async(this, null, function* () {
      var _a;
      const item = this.item = (_a = this.item) !== null && _a !== void 0 ? _a : this.el.querySelector("ion-item");
      if (item === null) {
        return;
      }
      const optionsToOpen = this.getOptions(side);
      if (!optionsToOpen) {
        return;
      }
      if (side === void 0) {
        side = optionsToOpen === this.leftOptions ? "start" : "end";
      }
      side = isEndSide(side) ? "end" : "start";
      const isStartOpen = this.openAmount < 0;
      const isEndOpen = this.openAmount > 0;
      if (isStartOpen && optionsToOpen === this.leftOptions) {
        return;
      }
      if (isEndOpen && optionsToOpen === this.rightOptions) {
        return;
      }
      this.closeOpened();
      this.state = 4;
      requestAnimationFrame(() => {
        this.calculateOptsWidth();
        const width = side === "end" ? this.optsWidthRightSide : -this.optsWidthLeftSide;
        openSlidingItem = this.el;
        this.setOpenAmount(width, false);
        this.state = side === "end" ? 8 : 16;
      });
    });
  }
  /**
   * Close the sliding item. Items can also be closed from the [List](./list).
   */
  close() {
    return __async(this, null, function* () {
      this.setOpenAmount(0, true);
    });
  }
  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
   */
  closeOpened() {
    return __async(this, null, function* () {
      if (openSlidingItem !== void 0) {
        openSlidingItem.close();
        openSlidingItem = void 0;
        return true;
      }
      return false;
    });
  }
  /**
   * Given an optional side, return the ion-item-options element.
   *
   * @param side This side of the options to get. If a side is not provided it will
   * return the first one available.
   */
  getOptions(side) {
    if (side === void 0) {
      return this.leftOptions || this.rightOptions;
    } else if (side === "start") {
      return this.leftOptions;
    } else {
      return this.rightOptions;
    }
  }
  updateOptions() {
    return __async(this, null, function* () {
      const options = this.el.querySelectorAll("ion-item-options");
      let sides = 0;
      this.leftOptions = this.rightOptions = void 0;
      for (let i = 0; i < options.length; i++) {
        const item = options.item(i);
        const option = item.componentOnReady !== void 0 ? yield item.componentOnReady() : item;
        const side = isEndSide(option.side) ? "end" : "start";
        if (side === "start") {
          this.leftOptions = option;
          sides |= 1;
        } else {
          this.rightOptions = option;
          sides |= 2;
        }
      }
      this.optsDirty = true;
      this.sides = sides;
    });
  }
  canStart(gesture) {
    const rtl = document.dir === "rtl";
    const atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }
    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
    }
    return !!(this.rightOptions || this.leftOptions);
  }
  onStart() {
    this.item = this.el.querySelector("ion-item");
    const { contentEl } = this;
    if (contentEl) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    openSlidingItem = this.el;
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = 4;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = "none";
    }
  }
  onMove(gesture) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;
    switch (this.sides) {
      case 2:
        openAmount = Math.max(0, openAmount);
        break;
      case 1:
        openAmount = Math.min(0, openAmount);
        break;
      case 3:
        break;
      case 0:
        return;
      default:
        console.warn("invalid ItemSideFlags value", this.sides);
        break;
    }
    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    } else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    this.setOpenAmount(openAmount, false);
  }
  onEnd(gesture) {
    const { contentEl, initialContentScrollY } = this;
    if (contentEl) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    const velocity = gesture.velocityX;
    let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide;
    const isResetDirection = this.openAmount > 0 === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }
    const state = this.state;
    this.setOpenAmount(restingPoint, true);
    if ((state & 32) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    } else if ((state & 64) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }
  calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = "flex";
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = "";
    }
    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = "flex";
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = "";
    }
    this.optsDirty = false;
  }
  setOpenAmount(openAmount, isFinal) {
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (!this.item) {
      return;
    }
    const { el } = this;
    const style = this.item.style;
    this.openAmount = openAmount;
    if (isFinal) {
      style.transition = "";
    }
    if (openAmount > 0) {
      this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8 | 32 : 8;
    } else if (openAmount < 0) {
      this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16 | 64 : 16;
    } else {
      el.classList.add("item-sliding-closing");
      if (this.gesture) {
        this.gesture.enable(false);
      }
      this.tmr = setTimeout(() => {
        this.state = 2;
        this.tmr = void 0;
        if (this.gesture) {
          this.gesture.enable(!this.disabled);
        }
        el.classList.remove("item-sliding-closing");
      }, 600);
      openSlidingItem = void 0;
      style.transform = "";
      return;
    }
    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }
  getSlidingRatioSync() {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    } else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    } else {
      return 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "99f87c8bd794ae69830b407ba55013ac44793c26", class: {
      [mode]: true,
      "item-sliding-active-slide": this.state !== 2,
      "item-sliding-active-options-end": (this.state & 8) !== 0,
      "item-sliding-active-options-start": (this.state & 16) !== 0,
      "item-sliding-active-swipe-end": (this.state & 32) !== 0,
      "item-sliding-active-swipe-start": (this.state & 64) !== 0
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
var swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
  return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
};
ItemSliding.style = IonItemSlidingStyle0;
export {
  ItemOption as ion_item_option,
  ItemOptions as ion_item_options,
  ItemSliding as ion_item_sliding
};
