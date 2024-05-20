import {
  isRTL
} from "./chunk-5QLINL5J.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-YUOIEUAI.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-QPJI5M5R.js";
import {
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
  clamp,
  debounceEvent,
  inheritAriaAttributes,
  renderHiddenInput
} from "./chunk-TTWJLGM2.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-range.entry.js
function getDecimalPlaces(n) {
  if (n % 1 === 0)
    return 0;
  return n.toString().split(".")[1].length;
}
function roundToMaxDecimalPlaces(n, ...references) {
  const maxPlaces = Math.max(...references.map((r) => getDecimalPlaces(r)));
  return Number(n.toFixed(maxPlaces));
}
var rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}";
var IonRangeIosStyle0 = rangeIosCss;
var rangeMdCss = ':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}';
var IonRangeMdStyle0 = rangeMdCss;
var Range = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionKnobMoveStart = createEvent(this, "ionKnobMoveStart", 7);
    this.ionKnobMoveEnd = createEvent(this, "ionKnobMoveEnd", 7);
    this.rangeId = `ion-r-${rangeIds++}`;
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.inheritedAttributes = {};
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.clampBounds = (value) => {
      return clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper)
        };
      } else {
        return this.clampBounds(value);
      }
    };
    this.setupGesture = () => __async(this, null, function* () {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
          el: rangeSlider,
          gestureName: "range",
          gesturePriority: 100,
          /**
           * Provide a threshold since the drag movement
           * might be a user scrolling the view.
           * If this is true, then the range
           * should not move.
           */
          threshold: 10,
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev)
        });
        this.gesture.enable(!this.disabled);
      }
    });
    this.handleKeyboard = (knob, isIncrease) => {
      const { ensureValueInBounds } = this;
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === "A") {
        this.ratioA = clamp(0, this.ratioA + step, 1);
      } else {
        this.ratioB = clamp(0, this.ratioB + step, 1);
      }
      this.ionKnobMoveStart.emit({ value: ensureValueInBounds(this.value) });
      this.updateValue();
      this.emitValueChange();
      this.ionKnobMoveEnd.emit({ value: ensureValueInBounds(this.value) });
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
      }
    };
    this.ratioA = 0;
    this.ratioB = 0;
    this.pressedKnob = void 0;
    this.color = void 0;
    this.debounce = void 0;
    this.name = this.rangeId;
    this.label = void 0;
    this.dualKnobs = false;
    this.min = 0;
    this.max = 100;
    this.pin = false;
    this.pinFormatter = (value) => Math.round(value);
    this.snaps = false;
    this.step = 1;
    this.ticks = true;
    this.activeBarStart = void 0;
    this.disabled = false;
    this.value = 0;
    this.labelPlacement = "start";
  }
  debounceChanged() {
    const { ionInput, debounce, originalIonInput } = this;
    this.ionInput = debounce === void 0 ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  minChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  activeBarStartChanged() {
    const { activeBarStart } = this;
    if (activeBarStart !== void 0) {
      if (activeBarStart > this.max) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.max;
      } else if (activeBarStart < this.min) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.min;
      }
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  valueChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  componentWillLoad() {
    if (this.el.hasAttribute("id")) {
      this.rangeId = this.el.getAttribute("id");
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.setupGesture();
    this.updateRatio();
    this.didLoad = true;
  }
  connectedCallback() {
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    this.activeBarStartChanged();
    if (this.didLoad) {
      this.setupGesture();
    }
    this.contentEl = findClosestIonContent(this.el);
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  getValue() {
    var _a;
    const value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    if (this.dualKnobs) {
      if (typeof value === "object") {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    } else {
      if (typeof value === "object") {
        return value.upper;
      }
      return value;
    }
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    this.value = this.ensureValueInBounds(this.value);
    this.ionChange.emit({ value: this.value });
  }
  /**
   * The value should be updated on touch end or
   * when the component is being dragged.
   * This follows the native behavior of mobile devices.
   *
   * For example: When the user lifts their finger from the
   * screen after tapping the bar or dragging the bar or knob.
   */
  onStart() {
    this.ionKnobMoveStart.emit({ value: this.ensureValueInBounds(this.value) });
  }
  /**
   * The value should be updated while dragging the
   * bar or knob.
   *
   * While the user is dragging, the view
   * should not scroll. This is to prevent the user from
   * feeling disoriented while dragging.
   *
   * The user can scroll on the view if the knob or
   * bar is not being dragged.
   *
   * @param detail The details of the gesture event.
   */
  onMove(detail) {
    const { contentEl, pressedKnob } = this;
    const currentX = detail.currentX;
    if (contentEl && this.initialContentScrollY === void 0) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    if (pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    this.update(currentX);
  }
  /**
   * The value should be updated on touch end:
   * - When the user lifts their finger from the screen after
   * tapping the bar.
   *
   * @param detail The details of the gesture or mouse event.
   */
  onEnd(detail) {
    const { contentEl, initialContentScrollY } = this;
    const currentX = detail.currentX || detail.clientX;
    if (this.pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    if (contentEl && initialContentScrollY !== void 0) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    this.update(currentX);
    this.pressedKnob = void 0;
    this.emitValueChange();
    this.ionKnobMoveEnd.emit({ value: this.ensureValueInBounds(this.value) });
  }
  update(currentX) {
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    if (this.pressedKnob === "A") {
      this.ratioA = ratio;
    } else {
      this.ratioB = ratio;
    }
    this.updateValue();
  }
  setPressedKnob(currentX) {
    const rect = this.rect = this.rangeSlider.getBoundingClientRect();
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? "A" : "B";
    this.setFocus(this.pressedKnob);
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    const { activeBarStart } = this;
    if (activeBarStart == null) {
      return 0;
    }
    return valueToRatio(activeBarStart, this.min, this.max);
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const { min, max } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    } else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const { valA, valB } = this;
    this.value = !this.dualKnobs ? valA : {
      lower: Math.min(valA, valB),
      upper: Math.max(valA, valB)
    };
    this.ionInput.emit({ value: this.value });
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === "A" ? ".range-knob-a" : ".range-knob-b");
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  /**
   * Returns true if content was passed to the "start" slot
   */
  get hasStartSlotContent() {
    return this.el.querySelector('[slot="start"]') !== null;
  }
  /**
   * Returns true if content was passed to the "end" slot
   */
  get hasEndSlotContent() {
    return this.el.querySelector('[slot="end"]') !== null;
  }
  get hasLabel() {
    return this.label !== void 0 || this.el.querySelector('[slot="label"]') !== null;
  }
  renderRangeSlider() {
    var _a;
    const { min, max, step, handleKeyboard, pressedKnob, disabled, pin, ratioLower, ratioUpper, pinFormatter, inheritedAttributes } = this;
    let barStart = `${ratioLower * 100}%`;
    let barEnd = `${100 - ratioUpper * 100}%`;
    const rtl = isRTL(this.el);
    const start = rtl ? "right" : "left";
    const end = rtl ? "left" : "right";
    const tickStyle = (tick) => {
      return {
        [start]: tick[start]
      };
    };
    if (this.dualKnobs === false) {
      if (this.valA < ((_a = this.activeBarStart) !== null && _a !== void 0 ? _a : this.min)) {
        barStart = `${ratioUpper * 100}%`;
        barEnd = `${100 - ratioLower * 100}%`;
      } else {
        barStart = `${ratioLower * 100}%`;
        barEnd = `${100 - ratioUpper * 100}%`;
      }
    }
    const barStyle = {
      [start]: barStart,
      [end]: barEnd
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const ratioMin = Math.min(ratioLower, ratioUpper);
        const ratioMax = Math.max(ratioLower, ratioUpper);
        const tick = {
          ratio,
          /**
           * Sets the tick mark as active when the tick is between the min bounds and the knob.
           * When using activeBarStart, the tick mark will be active between the knob and activeBarStart.
           */
          active: ratio >= ratioMin && ratio <= ratioMax
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    return h("div", {
      class: "range-slider",
      ref: (rangeEl) => this.rangeSlider = rangeEl,
      /**
       * Since the gesture has a threshold, the value
       * won't change until the user has dragged past
       * the threshold. This is to prevent the range
       * from moving when the user is scrolling.
       *
       * This results in the value not being updated
       * and the event emitters not being triggered
       * if the user taps on the range. This is why
       * we need to listen for the "pointerUp" event.
       */
      onPointerUp: (ev) => {
        if (this.pressedKnob === void 0) {
          this.onStart();
          this.onEnd(ev);
        }
      }
    }, ticks.map((tick) => h("div", { style: tickStyle(tick), role: "presentation", class: {
      "range-tick": true,
      "range-tick-active": tick.active
    }, part: tick.active ? "tick-active" : "tick" })), h("div", { class: "range-bar-container" }, h("div", { class: "range-bar", role: "presentation", part: "bar" }), h("div", { class: {
      "range-bar": true,
      "range-bar-active": true,
      "has-ticks": ticks.length > 0
    }, role: "presentation", style: barStyle, part: "bar-active" })), renderKnob(rtl, {
      knob: "A",
      pressed: pressedKnob === "A",
      value: this.valA,
      ratio: this.ratioA,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes
    }), this.dualKnobs && renderKnob(rtl, {
      knob: "B",
      pressed: pressedKnob === "B",
      value: this.valB,
      ratio: this.ratioB,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes
    }));
  }
  render() {
    const { disabled, el, hasLabel, rangeId, pin, pressedKnob, labelPlacement, label } = this;
    const inItem = hostContext("ion-item", el);
    const hasStartContent = hasLabel && (labelPlacement === "start" || labelPlacement === "fixed") || this.hasStartSlotContent;
    const needsStartAdjustment = inItem && !hasStartContent;
    const hasEndContent = hasLabel && labelPlacement === "end" || this.hasEndSlotContent;
    const needsEndAdjustment = inItem && !hasEndContent;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return h(Host, { key: "7ad5ca892fd46c64ce5583e91e6812410a869921", onFocusin: this.onFocus, onFocusout: this.onBlur, id: rangeId, class: createColorClasses(this.color, {
      [mode]: true,
      "in-item": inItem,
      "range-disabled": disabled,
      "range-pressed": pressedKnob !== void 0,
      "range-has-pin": pin,
      [`range-label-placement-${labelPlacement}`]: true,
      "range-item-start-adjustment": needsStartAdjustment,
      "range-item-end-adjustment": needsEndAdjustment
    }) }, h("label", { key: "eb8d46a9572341b4cc3c91d8a5de0667bd166ca4", class: "range-wrapper", id: "range-label" }, h("div", { key: "21acd6ff6eba17bf6923bf723fea055b95fd29ca", class: {
      "label-text-wrapper": true,
      "label-text-wrapper-hidden": !hasLabel
    }, part: "label" }, label !== void 0 ? h("div", { class: "label-text" }, label) : h("slot", { name: "label" })), h("div", { key: "7644c86a6ad3edf2c27f02dd2a14795b3720ea0d", class: "native-wrapper" }, h("slot", { key: "1bbeccee57addc126b36de395e28ba655248695b", name: "start" }), this.renderRangeSlider(), h("slot", { key: "2963dd84e4116fc3956c304eb53deefd0d1291df", name: "end" }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "activeBarStart": ["activeBarStartChanged"],
      "disabled": ["disabledChanged"],
      "value": ["valueChanged"]
    };
  }
};
var renderKnob = (rtl, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard, pinFormatter, inheritedAttributes }) => {
  const start = rtl ? "right" : "left";
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  const ariaLabel = inheritedAttributes["aria-label"];
  return h("div", { onKeyDown: (ev) => {
    const key = ev.key;
    if (key === "ArrowLeft" || key === "ArrowDown") {
      handleKeyboard(knob, false);
      ev.preventDefault();
      ev.stopPropagation();
    } else if (key === "ArrowRight" || key === "ArrowUp") {
      handleKeyboard(knob, true);
      ev.preventDefault();
      ev.stopPropagation();
    }
  }, class: {
    "range-knob-handle": true,
    "range-knob-a": knob === "A",
    "range-knob-b": knob === "B",
    "range-knob-pressed": pressed,
    "range-knob-min": value === min,
    "range-knob-max": value === max,
    "ion-activatable": true,
    "ion-focusable": true
  }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-label": ariaLabel !== void 0 ? ariaLabel : null, "aria-labelledby": ariaLabel === void 0 ? "range-label" : null, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? "true" : null, "aria-valuenow": value }, pin && h("div", { class: "range-pin", role: "presentation", part: "pin" }, pinFormatter(value)), h("div", { class: "range-knob", role: "presentation", part: "knob" }));
};
var ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  const clampedValue = clamp(min, value, max);
  return roundToMaxDecimalPlaces(clampedValue, min, max, step);
};
var valueToRatio = (value, min, max) => {
  return clamp(0, (value - min) / (max - min), 1);
};
var rangeIds = 0;
Range.style = {
  ios: IonRangeIosStyle0,
  md: IonRangeMdStyle0
};
export {
  Range as ion_range
};
