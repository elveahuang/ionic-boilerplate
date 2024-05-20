import {
  calculateHourFromAMPM,
  clampDate,
  convertDataToISO,
  convertToArrayOfNumbers,
  formatValue,
  generateDayAriaLabel,
  generateMonths,
  getClosestValidDate,
  getCombinedDateColumnData,
  getDay,
  getDayColumnData,
  getDaysOfMonth,
  getDaysOfWeek,
  getEndOfWeek,
  getHourCycle,
  getLocalizedDateTime,
  getLocalizedTime,
  getMonthAndYear,
  getMonthColumnData,
  getNextDay,
  getNextMonth,
  getNextWeek,
  getNextYear,
  getNumDaysInMonth,
  getPartsFromCalendarDay,
  getPreviousDay,
  getPreviousMonth,
  getPreviousWeek,
  getPreviousYear,
  getStartOfWeek,
  getTimeColumnsData,
  getToday,
  getYearColumnData,
  isAfter,
  isBefore,
  isLocaleDayPeriodRTL,
  isMonthFirstLocale,
  isSameDay,
  parseAmPm,
  parseDate,
  parseMaxParts,
  parseMinParts,
  validateParts,
  warnIfValueOutOfBounds
} from "./chunk-RVX4F7LM.js";
import {
  isRTL
} from "./chunk-5QLINL5J.js";
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-2JR57BSM.js";
import {
  createLockController
} from "./chunk-LVSI6EF4.js";
import "./chunk-J6NTUUTK.js";
import {
  startFocusVisible
} from "./chunk-BWS6LYEL.js";
import {
  BACKDROP,
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
import "./chunk-54LAR2PU.js";
import {
  caretDownSharp,
  caretUpSharp,
  chevronBack,
  chevronDown,
  chevronForward
} from "./chunk-QIGKOG5K.js";
import {
  getIonMode
} from "./chunk-STVEE43Z.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance,
  writeTask
} from "./chunk-2YSWQYGY.js";
import {
  printIonError,
  printIonWarning
} from "./chunk-AB2YFIZ6.js";
import {
  clamp,
  getElementRoot,
  raf,
  renderHiddenInput
} from "./chunk-TTWJLGM2.js";
import "./chunk-RAVBCX6T.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js
var isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
var isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  if (refParts.day === null) {
    return true;
  }
  if (dayValues !== void 0 && !dayValues.includes(refParts.day)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts)) {
    return true;
  }
  if (maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  const isActive = activePartsArray.find((parts) => isSameDay(refParts, parts)) !== void 0;
  const isToday = isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? "true" : null,
    ariaLabel: generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? getDay(locale, refParts) : null
  };
};
var isMonthDisabled = (refParts, { minParts, maxParts }) => {
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts) || maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, getPreviousMonth(refParts)), { day: null });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts
  });
};
var isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, getNextMonth(refParts)), { day: null });
  return isMonthDisabled(nextMonth, {
    maxParts
  });
};
var getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split("T")[0];
    const matchingHighlight = highlightedDates.find((hd) => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor
      };
    }
  } else {
    try {
      return highlightedDates(dateIsoString);
    } catch (e) {
      printIonError("Exception thrown from provided `highlightedDates` callback. Please check your function and try again.", el, e);
    }
  }
  return void 0;
};
var warnIfTimeZoneProvided = (el, formatOptions) => {
  var _a, _b, _c, _d;
  if (((_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _a === void 0 ? void 0 : _a.timeZone) || ((_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _b === void 0 ? void 0 : _b.timeZoneName) || ((_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _c === void 0 ? void 0 : _c.timeZone) || ((_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _d === void 0 ? void 0 : _d.timeZoneName)) {
    printIonWarning('Datetime: "timeZone" and "timeZoneName" are not supported in "formatOptions".', el);
  }
};
var checkForPresentationFormatMismatch = (el, presentation, formatOptions) => {
  if (!formatOptions)
    return;
  switch (presentation) {
    case "date":
    case "month-year":
    case "month":
    case "year":
      if (formatOptions.date === void 0) {
        printIonWarning(`Datetime: The '${presentation}' presentation requires a date object in formatOptions.`, el);
      }
      break;
    case "time":
      if (formatOptions.time === void 0) {
        printIonWarning(`Datetime: The 'time' presentation requires a time object in formatOptions.`, el);
      }
      break;
    case "date-time":
    case "time-date":
      if (formatOptions.date === void 0 && formatOptions.time === void 0) {
        printIonWarning(`Datetime: The '${presentation}' presentation requires either a date or time object (or both) in formatOptions.`, el);
      }
      break;
  }
};
var datetimeIosCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-light, #f4f5f8);--background-rgb:var(--ion-color-light-rgb, 244, 245, 248);--title-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc));font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}.calendar-month-year-toggle{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-height:44px;font-size:min(1rem, 25.6px);font-weight:600}.calendar-month-year-toggle.ion-focused::after{opacity:0.15}.calendar-month-year-toggle #toggle-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host .calendar-action-buttons .calendar-month-year-toggle ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3));font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2);font-size:min(1.375rem, 35.2px)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc))}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}';
var IonDatetimeIosStyle0 = datetimeIosCss;
var datetimeMdCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #ffffff));--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}.calendar-month-year-toggle{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;min-height:48px;background:transparent;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959));z-index:1}.calendar-month-year-toggle.ion-focused::after{opacity:0.04}.calendar-month-year-toggle ion-ripple-effect{color:currentColor}@media (any-hover: hover){.calendar-month-year-toggle.ion-activatable:not(.ion-focused):hover::after{background:currentColor;opacity:0.04}}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray));font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}';
var IonDatetimeMdStyle0 = datetimeMdCss;
var Datetime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionRender = createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    this.warnIfIncorrectValueUsage = () => {
      const { multiple, value } = this;
      if (!multiple && Array.isArray(value)) {
        printIonWarning(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
      }
    };
    this.setValue = (value) => {
      this.value = value;
      this.ionChange.emit({ value });
    };
    this.getActivePartsWithFallback = () => {
      var _a;
      const { defaultParts } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const { activeParts } = this;
      return Array.isArray(activeParts) ? activeParts[0] : activeParts;
    };
    this.closeParentOverlay = (role) => {
      const popoverOrModal = this.el.closest("ion-modal, ion-popover");
      if (popoverOrModal) {
        popoverOrModal.dismiss(void 0, role);
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      if (this.readonly) {
        return;
      }
      const { multiple, minParts, maxParts, activeParts } = this;
      const validatedParts = validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !isSameDay(p, validatedParts));
        } else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      } else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      const currentMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(2)");
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes("ion-focused")) || !calendarBodyRef.classList.contains("ion-focused")) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, { attributeFilter: ["class"], attributeOldValue: true });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      calendarBodyRef.addEventListener("keydown", (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains("calendar-day")) {
          return;
        }
        const parts = getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case "ArrowDown":
            ev.preventDefault();
            partsToFocus = getNextWeek(parts);
            break;
          case "ArrowUp":
            ev.preventDefault();
            partsToFocus = getPreviousWeek(parts);
            break;
          case "ArrowRight":
            ev.preventDefault();
            partsToFocus = getNextDay(parts);
            break;
          case "ArrowLeft":
            ev.preventDefault();
            partsToFocus = getPreviousDay(parts);
            break;
          case "Home":
            ev.preventDefault();
            partsToFocus = getStartOfWeek(parts);
            break;
          case "End":
            ev.preventDefault();
            partsToFocus = getEndOfWeek(parts);
            break;
          case "PageUp":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getPreviousYear(parts) : getPreviousMonth(parts);
            break;
          case "PageDown":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getNextYear(parts) : getNextMonth(parts);
            break;
          default:
            return;
        }
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      const padding = currentMonth.querySelectorAll(".calendar-day-padding");
      const { day } = this.workingParts;
      if (day === null) {
        return;
      }
      const dayEl = currentMonth.querySelector(`.calendar-day-wrapper:nth-of-type(${padding.length + day}) .calendar-day`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const { min, defaultParts } = this;
      if (min === void 0) {
        this.minParts = void 0;
        return;
      }
      this.minParts = parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const { max, defaultParts } = this;
      if (max === void 0) {
        this.maxParts = void 0;
        return;
      }
      this.maxParts = parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const months = calendarBodyRef.querySelectorAll(".calendar-month");
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = getIonMode(this);
      const needsiOSRubberBandFix = mode === "ios" && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1;
      writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          const condition = isRTL(this.el) ? calendarBodyRef.scrollLeft >= -2 : calendarBodyRef.scrollLeft <= 2;
          const month = condition ? startMonth : endMonth;
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2)
            return;
          const { forceRenderDate } = this;
          if (forceRenderDate !== void 0) {
            return { month: forceRenderDate.month, year: forceRenderDate.year, day: forceRenderDate.day };
          }
          if (month === startMonth) {
            return getPreviousMonth(parts);
          } else if (month === endMonth) {
            return getNextMonth(parts);
          } else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty("pointer-events");
            appliediOSRubberBandFix = false;
          }
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate)
            return;
          const { month, day, year } = newDate;
          if (isMonthDisabled({ month, year, day: null }, {
            minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null })
          })) {
            return;
          }
          calendarBodyRef.style.setProperty("overflow", "hidden");
          writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month, day, year }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty("overflow");
            if (this.resolveForceDateScrolling) {
              this.resolveForceDateScrolling();
            }
          });
        };
        let scrollTimeout;
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty("pointer-events", "none");
            appliediOSRubberBandFix = true;
          }
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener("scroll", scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener("scroll", scrollCallback);
        };
      });
    };
    this.destroyInteractionListeners = () => {
      const { destroyCalendarListener, destroyKeyboardMO } = this;
      if (destroyCalendarListener !== void 0) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== void 0) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      const hasValue = value !== null && value !== void 0 && (!Array.isArray(value) || value.length > 0);
      const valueToProcess = hasValue ? parseDate(value) : this.defaultParts;
      const { minParts, maxParts, workingParts, el } = this;
      this.warnIfIncorrectValueUsage();
      if (!valueToProcess) {
        return;
      }
      if (hasValue) {
        warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const targetValue = clampDate(singleValue, minParts, maxParts);
      const { month, day, year, hour, minute } = targetValue;
      const ampm = parseAmPm(hour);
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        } else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          };
        }
      } else {
        this.activeParts = [];
      }
      const didChangeMonth = month !== void 0 && month !== workingParts.month || year !== void 0 && year !== workingParts.year;
      const bodyIsVisible = el.classList.contains("datetime-ready");
      const { isGridStyle, showMonthAndYear } = this;
      let areAllSelectedDatesInSameMonth = true;
      if (Array.isArray(valueToProcess)) {
        const firstMonth = valueToProcess[0].month;
        for (const date of valueToProcess) {
          if (date.month !== firstMonth) {
            areAllSelectedDatesInSameMonth = false;
            break;
          }
        }
      }
      if (areAllSelectedDatesInSameMonth) {
        if (isGridStyle && didChangeMonth && bodyIsVisible && !showMonthAndYear) {
          this.animateToDate(targetValue);
        } else {
          this.setWorkingParts({
            month,
            day,
            year,
            hour,
            minute,
            ampm
          });
        }
      }
    };
    this.animateToDate = (targetValue) => __async(this, null, function* () {
      const { workingParts } = this;
      this.forceRenderDate = targetValue;
      const forceDateScrollingPromise = new Promise((resolve) => {
        this.resolveForceDateScrolling = resolve;
      });
      const targetMonthIsBefore = isBefore(targetValue, workingParts);
      targetMonthIsBefore ? this.prevMonth() : this.nextMonth();
      yield forceDateScrollingPromise;
      this.resolveForceDateScrolling = void 0;
      this.forceRenderDate = void 0;
    });
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector(".calendar-month:last-of-type");
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (isRTL(this.el) ? -1 : 1),
        behavior: "smooth"
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector(".calendar-month:first-of-type");
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: "pm"
    };
    this.isTimePopoverOpen = false;
    this.forceRenderDate = void 0;
    this.color = "primary";
    this.name = this.inputId;
    this.disabled = false;
    this.formatOptions = void 0;
    this.readonly = false;
    this.isDateEnabled = void 0;
    this.min = void 0;
    this.max = void 0;
    this.presentation = "date-time";
    this.cancelText = "Cancel";
    this.doneText = "Done";
    this.clearText = "Clear";
    this.yearValues = void 0;
    this.monthValues = void 0;
    this.dayValues = void 0;
    this.hourValues = void 0;
    this.minuteValues = void 0;
    this.locale = "default";
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = void 0;
    this.multiple = false;
    this.highlightedDates = void 0;
    this.value = void 0;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = void 0;
    this.size = "fixed";
    this.preferWheel = false;
  }
  formatOptionsChanged() {
    const { el, formatOptions, presentation } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
    warnIfTimeZoneProvided(el, formatOptions);
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  presentationChanged() {
    const { el, formatOptions, presentation } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
  }
  get isGridStyle() {
    const { presentation, preferWheel } = this;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    return hasDatePresentation && !preferWheel;
  }
  yearValuesChanged() {
    this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    return __async(this, null, function* () {
      const { value } = this;
      if (this.hasValue()) {
        this.processValue(value);
      }
      this.emitStyle();
      this.ionValueChange.emit({ value });
    });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  confirm(closeOverlay = false) {
    return __async(this, null, function* () {
      const { isCalendarPicker, activeParts, preferWheel, workingParts } = this;
      if (activeParts !== void 0 || !isCalendarPicker) {
        const activePartsIsArray = Array.isArray(activeParts);
        if (activePartsIsArray && activeParts.length === 0) {
          if (preferWheel) {
            this.setValue(convertDataToISO(workingParts));
          } else {
            this.setValue(void 0);
          }
        } else {
          this.setValue(convertDataToISO(activeParts));
        }
      }
      if (closeOverlay) {
        this.closeParentOverlay(CONFIRM_ROLE);
      }
    });
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  reset(startDate) {
    return __async(this, null, function* () {
      this.processValue(startDate);
    });
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  cancel(closeOverlay = false) {
    return __async(this, null, function* () {
      this.ionCancel.emit();
      if (closeOverlay) {
        this.closeParentOverlay(CANCEL_ROLE);
      }
    });
  }
  get isCalendarPicker() {
    const { presentation } = this;
    return presentation === "date" || presentation === "date-time" || presentation === "time-date";
  }
  connectedCallback() {
    this.clearFocusVisible = startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = void 0;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    const { el, intersectionTrackerRef } = this;
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      writeTask(() => {
        this.el.classList.add("datetime-ready");
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01, root: el });
    raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(intersectionTrackerRef));
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      this.showMonthAndYear = false;
      writeTask(() => {
        this.el.classList.remove("datetime-ready");
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, { threshold: 0, root: el });
    raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(intersectionTrackerRef));
    const root = getElementRoot(this.el);
    root.addEventListener("ionFocus", (ev) => ev.stopPropagation());
    root.addEventListener("ionBlur", (ev) => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const { presentation, prevPresentation, calendarBodyRef, minParts, preferWheel, forceRenderDate } = this;
    const hasCalendarGrid = !preferWheel && ["date-time", "time-date", "date"].includes(presentation);
    if (minParts !== void 0 && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(1)");
      if (workingMonth && forceRenderDate === void 0) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    this.showMonthAndYear = false;
    raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const { el, formatOptions, highlightedDates, multiple, presentation, preferWheel } = this;
    if (multiple) {
      if (presentation !== "date") {
        printIonWarning('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        printIonWarning('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== void 0) {
      if (presentation !== "date" && presentation !== "date-time" && presentation !== "time-date") {
        printIonWarning("The highlightedDates property is only supported with the date, date-time, and time-date presentations.", el);
      }
      if (preferWheel) {
        printIonWarning('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    if (formatOptions) {
      checkForPresentationFormatMismatch(el, presentation, formatOptions);
      warnIfTimeZoneProvided(el, formatOptions);
    }
    const hourValues = this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
    const minuteValues = this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
    const monthValues = this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
    const yearValues = this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
    const dayValues = this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
    const todayParts = this.todayParts = parseDate(getToday());
    this.processMinParts();
    this.processMaxParts();
    this.defaultParts = getClosestValidDate({
      refParts: todayParts,
      monthValues,
      dayValues,
      yearValues,
      hourValues,
      minuteValues,
      minParts: this.minParts,
      maxParts: this.maxParts
    });
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      "interactive-disabled": this.disabled
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const { disabled, readonly, showDefaultButtons, showClearButton } = this;
    const isButtonDisabled = disabled || readonly;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(void 0);
    };
    return h("div", { class: "datetime-footer" }, h("div", { class: "datetime-buttons" }, h("div", { class: {
      ["datetime-action-buttons"]: true,
      ["has-clear-button"]: this.showClearButton
    } }, h("slot", { name: "buttons" }, h("ion-buttons", null, showDefaultButtons && h("ion-button", { id: "cancel-button", color: this.color, onClick: () => this.cancel(true), disabled: isButtonDisabled }, this.cancelText), h("div", { class: "datetime-action-buttons-container" }, showClearButton && h("ion-button", { id: "clear-button", color: this.color, onClick: () => clearButtonClick(), disabled: isButtonDisabled }, this.clearText), showDefaultButtons && h("ion-button", { id: "confirm-button", color: this.color, onClick: () => this.confirm(true), disabled: isButtonDisabled }, this.doneText)))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    const renderArray = forcePresentation === "time-date" ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)] : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return h("ion-picker", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === "date-time" || forcePresentation === "time-date" ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const { defaultParts, disabled, workingParts, locale, minParts, maxParts, todayParts, isDateEnabled } = this;
    const activePart = this.getActivePartsWithFallback();
    const monthsToRender = generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    monthsToRender[0].day = 1;
    lastMonth.day = getNumDaysInMonth(lastMonth.month, lastMonth.year);
    const min = minParts !== void 0 && isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== void 0 && isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled2;
        try {
          disabled2 = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, itemObject), { disabled: disabled2 });
      });
    }
    const todayString = workingParts.day !== null ? `${workingParts.year}-${workingParts.month}-${workingParts.day}` : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return h("ion-picker-column", { "aria-label": "Select a date", class: "date-column", color: this.color, disabled, value: todayString, onIonChange: (ev) => {
      const { value } = ev.detail;
      const findPart = parts.find(({ month, day, year }) => value === `${year}-${month}-${day}`);
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
      ev.stopPropagation();
    } }, items.map((item) => h("ion-picker-column-option", { part: item.value === todayString ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: item.value, disabled: item.disabled, value: item.value }, item.text)));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const { workingParts, isDateEnabled } = this;
    const shouldRenderMonths = forcePresentation !== "year" && forcePresentation !== "time";
    const months = shouldRenderMonths ? getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues) : [];
    const shouldRenderDays = forcePresentation === "date";
    let days = shouldRenderDays ? getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues) : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const { value } = dayObject;
        const valueNum = typeof value === "string" ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year
        };
        let disabled;
        try {
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, dayObject), { disabled });
      });
    }
    const shouldRenderYears = forcePresentation !== "month" && forcePresentation !== "time";
    const years = shouldRenderYears ? getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
    const showMonthFirst = isMonthFirstLocale(this.locale, { month: "numeric", day: "numeric" });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [
        this.renderMonthPickerColumn(months),
        this.renderDayPickerColumn(days),
        this.renderYearPickerColumn(years)
      ];
    } else {
      renderArray = [
        this.renderDayPickerColumn(days),
        this.renderMonthPickerColumn(months),
        this.renderYearPickerColumn(years)
      ];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const { disabled, workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    const pickerColumnValue = (_a = workingParts.day !== null ? workingParts.day : this.defaultParts.day) !== null && _a !== void 0 ? _a : void 0;
    return h("ion-picker-column", { "aria-label": "Select a day", class: "day-column", color: this.color, disabled, value: pickerColumnValue, onIonChange: (ev) => {
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { day: ev.detail.value }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { day: ev.detail.value }));
      ev.stopPropagation();
    } }, days.map((day) => h("ion-picker-column-option", { part: day.value === pickerColumnValue ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: day.value, disabled: day.disabled, value: day.value }, day.text)));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const { disabled, workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", { "aria-label": "Select a month", class: "month-column", color: this.color, disabled, value: workingParts.month, onIonChange: (ev) => {
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { month: ev.detail.value }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { month: ev.detail.value }));
      ev.stopPropagation();
    } }, months.map((month) => h("ion-picker-column-option", { part: month.value === workingParts.month ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: month.value, disabled: month.disabled, value: month.value }, month.text)));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const { disabled, workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", { "aria-label": "Select a year", class: "year-column", color: this.color, disabled, value: workingParts.year, onIonChange: (ev) => {
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { year: ev.detail.value }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { year: ev.detail.value }));
      ev.stopPropagation();
    } }, years.map((year) => h("ion-picker-column-option", { part: year.value === workingParts.year ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: year.value, disabled: year.disabled, value: year.value }, year.text)));
  }
  renderTimePickerColumns(forcePresentation) {
    if (["date", "month", "month-year", "year"].includes(forcePresentation)) {
      return [];
    }
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== void 0;
    const { hoursData, minutesData, dayPeriodData } = getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : void 0, userHasSelectedDate ? this.maxParts : void 0, this.parsedHourValues, this.parsedMinuteValues);
    return [
      this.renderHourPickerColumn(hoursData),
      this.renderMinutePickerColumn(minutesData),
      this.renderDayPeriodPickerColumn(dayPeriodData)
    ];
  }
  renderHourPickerColumn(hoursData) {
    const { disabled, workingParts } = this;
    if (hoursData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", { "aria-label": "Select an hour", color: this.color, disabled, value: activePart.hour, numericInput: true, onIonChange: (ev) => {
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { hour: ev.detail.value }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { hour: ev.detail.value }));
      ev.stopPropagation();
    } }, hoursData.map((hour) => h("ion-picker-column-option", { part: hour.value === activePart.hour ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: hour.value, disabled: hour.disabled, value: hour.value }, hour.text)));
  }
  renderMinutePickerColumn(minutesData) {
    const { disabled, workingParts } = this;
    if (minutesData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", { "aria-label": "Select a minute", color: this.color, disabled, value: activePart.minute, numericInput: true, onIonChange: (ev) => {
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { minute: ev.detail.value }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { minute: ev.detail.value }));
      ev.stopPropagation();
    } }, minutesData.map((minute) => h("ion-picker-column-option", { part: minute.value === activePart.minute ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: minute.value, disabled: minute.disabled, value: minute.value }, minute.text)));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const { disabled, workingParts } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = isLocaleDayPeriodRTL(this.locale);
    return h("ion-picker-column", { "aria-label": "Select a day period", style: isDayPeriodRTL ? { order: "-1" } : {}, color: this.color, disabled, value: activePart.ampm, onIonChange: (ev) => {
      const hour = calculateHourFromAMPM(workingParts, ev.detail.value);
      this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm: ev.detail.value, hour }));
      this.setActiveParts(Object.assign(Object.assign({}, activePart), { ampm: ev.detail.value, hour }));
      ev.stopPropagation();
    } }, dayPeriodData.map((dayPeriod) => h("ion-picker-column-option", { part: dayPeriod.value === activePart.ampm ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART, key: dayPeriod.value, disabled: dayPeriod.disabled, value: dayPeriod.value }, dayPeriod.text)));
  }
  renderWheelView(forcePresentation) {
    const { locale } = this;
    const showMonthFirst = isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? "month-first" : "year-first";
    return h("div", { class: {
      [`wheel-order-${columnOrder}`]: true
    } }, this.renderWheelPicker(forcePresentation));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const { disabled } = this;
    const expandedIcon = mode === "ios" ? chevronDown : caretUpSharp;
    const collapsedIcon = mode === "ios" ? chevronForward : caretDownSharp;
    const prevMonthDisabled = disabled || isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = disabled || isNextMonthDisabled(this.workingParts, this.maxParts);
    const hostDir = this.el.getAttribute("dir") || void 0;
    return h("div", { class: "calendar-header" }, h("div", { class: "calendar-action-buttons" }, h("div", { class: "calendar-month-year" }, h("button", { class: {
      "calendar-month-year-toggle": true,
      "ion-activatable": true,
      "ion-focusable": true
    }, part: "month-year-button", disabled, "aria-label": this.showMonthAndYear ? "Hide year picker" : "Show year picker", onClick: () => this.toggleMonthAndYearView() }, h("span", { id: "toggle-wrapper" }, getMonthAndYear(this.locale, this.workingParts), h("ion-icon", { "aria-hidden": "true", icon: this.showMonthAndYear ? expandedIcon : collapsedIcon, lazy: false, flipRtl: true })), mode === "md" && h("ion-ripple-effect", null))), h("div", { class: "calendar-next-prev" }, h("ion-buttons", null, h("ion-button", { "aria-label": "Previous month", disabled: prevMonthDisabled, onClick: () => this.prevMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronBack, lazy: false, flipRtl: true })), h("ion-button", { "aria-label": "Next month", disabled: nextMonthDisabled, onClick: () => this.nextMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronForward, lazy: false, flipRtl: true }))))), h("div", { class: "calendar-days-of-week", "aria-hidden": "true" }, getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return h("div", { class: "day-of-week" }, d);
    })));
  }
  renderMonth(month, year) {
    const { disabled, readonly } = this;
    const yearAllowed = this.parsedYearValues === void 0 || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === void 0 || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const isDatetimeDisabled = disabled || readonly;
    const swipeDisabled = disabled || isMonthDisabled({
      month,
      year,
      day: null
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null })
    });
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return h("div", { "aria-hidden": !isWorkingMonth ? "true" : null, class: {
      "calendar-month": true,
      // Prevents scroll snap swipe gestures for months outside of the min/max bounds
      "calendar-month-disabled": !isWorkingMonth && swipeDisabled
    } }, h("div", { class: "calendar-month-grid" }, getDaysOfMonth(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const { day, dayOfWeek } = dateObject;
      const { el, highlightedDates, isDateEnabled, multiple } = this;
      const referenceParts = { month, day, year };
      const isCalendarPadding = day === null;
      const { isActive, isToday, ariaLabel, ariaSelected, disabled: isDayDisabled2, text } = getCalendarDayState(this.locale, referenceParts, this.activeParts, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = convertDataToISO(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || isDayDisabled2;
      if (!isCalDayDisabled && isDateEnabled !== void 0) {
        try {
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", el, e);
        }
      }
      const isCalDayConstrained = isCalDayDisabled && isDatetimeDisabled;
      const isButtonDisabled = isCalDayDisabled || isDatetimeDisabled;
      let dateStyle = void 0;
      if (highlightedDates !== void 0 && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      let dateParts = void 0;
      if (!isCalendarPadding) {
        dateParts = `calendar-day${isActive ? " active" : ""}${isToday ? " today" : ""}${isCalDayDisabled ? " disabled" : ""}`;
      }
      return h("div", { class: "calendar-day-wrapper" }, h("button", {
        // We need to use !important for the inline styles here because
        // otherwise the CSS shadow parts will override these styles.
        // See https://github.com/WICG/webcomponents/issues/847
        // Both the CSS shadow parts and highlightedDates styles are
        // provided by the developer, but highlightedDates styles should
        // always take priority.
        ref: (el2) => {
          if (el2) {
            el2.style.setProperty("color", `${dateStyle ? dateStyle.textColor : ""}`, "important");
            el2.style.setProperty("background-color", `${dateStyle ? dateStyle.backgroundColor : ""}`, "important");
          }
        },
        tabindex: "-1",
        "data-day": day,
        "data-month": month,
        "data-year": year,
        "data-index": index,
        "data-day-of-week": dayOfWeek,
        disabled: isButtonDisabled,
        class: {
          "calendar-day-padding": isCalendarPadding,
          "calendar-day": true,
          "calendar-day-active": isActive,
          "calendar-day-constrained": isCalDayConstrained,
          "calendar-day-today": isToday
        },
        part: dateParts,
        "aria-hidden": isCalendarPadding ? "true" : null,
        "aria-selected": ariaSelected,
        "aria-label": ariaLabel,
        onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
            month,
            day,
            year
          }));
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year
            }, isActive);
          } else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), {
              month,
              day,
              year
            }));
          }
        }
      }, text));
    })));
  }
  renderCalendarBody() {
    return h("div", { class: "calendar-body ion-focusable", ref: (el) => this.calendarBodyRef = el, tabindex: "0" }, generateMonths(this.workingParts, this.forceRenderDate).map(({ month, year }) => {
      return this.renderMonth(month, year);
    }));
  }
  renderCalendar(mode) {
    return h("div", { class: "datetime-calendar", key: "datetime-calendar" }, this.renderCalendarHeader(mode), this.renderCalendarBody());
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return h("slot", { name: "time-label" }, "Time");
  }
  renderTimeOverlay() {
    const { disabled, hourCycle, isTimePopoverOpen, locale, formatOptions } = this;
    const computedHourCycle = getHourCycle(locale, hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [
      h("div", { class: "time-header" }, this.renderTimeLabel()),
      h("button", { class: {
        "time-body": true,
        "time-body-active": isTimePopoverOpen
      }, part: `time-button${isTimePopoverOpen ? " active" : ""}`, "aria-expanded": "false", "aria-haspopup": "true", disabled, onClick: (ev) => __async(this, null, function* () {
        const { popoverRef } = this;
        if (popoverRef) {
          this.isTimePopoverOpen = true;
          popoverRef.present(new CustomEvent("ionShadowTarget", {
            detail: {
              ionShadowTarget: ev.target
            }
          }));
          yield popoverRef.onWillDismiss();
          this.isTimePopoverOpen = false;
        }
      }) }, getLocalizedTime(locale, activePart, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time)),
      h("ion-popover", {
        alignment: "center",
        translucent: true,
        overlayIndex: 1,
        arrow: false,
        onWillPresent: (ev) => {
          const cols = ev.target.querySelectorAll("ion-picker-column");
          cols.forEach((col) => col.scrollActiveItemIntoView());
        },
        style: {
          "--offset-y": "-10px",
          "--min-width": "fit-content"
        },
        // Allow native browser keyboard events to support up/down/home/end key
        // navigation within the time picker.
        keyboardEvents: true,
        ref: (el) => this.popoverRef = el
      }, this.renderWheelPicker("time"))
    ];
  }
  getHeaderSelectedDateText() {
    var _a;
    const { activeParts, formatOptions, multiple, titleSelectedDatesFormatter } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`;
      if (titleSelectedDatesFormatter !== void 0) {
        try {
          headerText = titleSelectedDatesFormatter(convertDataToISO(activeParts));
        } catch (e) {
          printIonError("Exception in provided `titleSelectedDatesFormatter`: ", e);
        }
      }
    } else {
      headerText = getLocalizedDateTime(this.locale, this.getActivePartsWithFallback(), (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : { weekday: "short", month: "short", day: "numeric" });
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return h("div", { class: "datetime-header" }, h("div", { class: "datetime-title" }, h("slot", { name: "title" }, "Select Date")), showExpandedHeader && h("div", { class: "datetime-selected-date" }, this.getHeaderSelectedDateText()));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const { presentation } = this;
    const timeOnlyPresentation = presentation === "time";
    return h("div", { class: "datetime-time" }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay());
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return h("div", { class: "datetime-year" }, this.renderWheelView("month-year"));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const { presentation, preferWheel } = this;
    const hasWheelVariant = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case "date-time":
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderTime(),
          this.renderFooter()
        ];
      case "time-date":
        return [
          this.renderHeader(),
          this.renderTime(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter()
        ];
      case "time":
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case "month":
      case "month-year":
      case "year":
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter()
        ];
    }
  }
  render() {
    const { name, value, disabled, el, color, readonly, showMonthAndYear, preferWheel, presentation, size, isGridStyle } = this;
    const mode = getIonMode(this);
    const isMonthAndYearPresentation = presentation === "year" || presentation === "month" || presentation === "month-year";
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    const hasWheelVariant = hasDatePresentation && preferWheel;
    renderHiddenInput(true, el, name, formatValue(value), disabled);
    return h(Host, { key: "48313af4ec8e2a2666cd8c89932c5131dfa7b556", "aria-disabled": disabled ? "true" : null, onFocus: this.onFocus, onBlur: this.onBlur, class: Object.assign({}, createColorClasses(color, {
      [mode]: true,
      ["datetime-readonly"]: readonly,
      ["datetime-disabled"]: disabled,
      "show-month-and-year": shouldShowMonthAndYear,
      "month-year-picker-open": monthYearPickerOpen,
      [`datetime-presentation-${presentation}`]: true,
      [`datetime-size-${size}`]: true,
      [`datetime-prefer-wheel`]: hasWheelVariant,
      [`datetime-grid`]: isGridStyle
    })) }, h("div", { key: "b72570048236415aed915488305046d987d51dcf", class: "intersection-tracker", ref: (el2) => this.intersectionTrackerRef = el2 }), this.renderDatetime(mode));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "formatOptions": ["formatOptionsChanged"],
      "disabled": ["disabledChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "presentation": ["presentationChanged"],
      "yearValues": ["yearValuesChanged"],
      "monthValues": ["monthValuesChanged"],
      "dayValues": ["dayValuesChanged"],
      "hourValues": ["hourValuesChanged"],
      "minuteValues": ["minuteValuesChanged"],
      "value": ["valueChanged"]
    };
  }
};
var datetimeIds = 0;
var CANCEL_ROLE = "datetime-cancel";
var CONFIRM_ROLE = "datetime-confirm";
var WHEEL_ITEM_PART = "wheel-item";
var WHEEL_ITEM_ACTIVE_PART = `active`;
Datetime.style = {
  ios: IonDatetimeIosStyle0,
  md: IonDatetimeMdStyle0
};
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0.01);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var pickerIosCss = ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}";
var IonPickerLegacyIosStyle0 = pickerIosCss;
var pickerMdCss = ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}";
var IonPickerLegacyMdStyle0 = pickerMdCss;
var Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.buttons.find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.presented = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.buttons = [];
    this.columns = [];
    this.cssClass = void 0;
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
    this.htmlAttributes = void 0;
    this.isOpen = false;
    this.trigger = void 0;
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
    printIonWarning("ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.", this.el);
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the picker overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "pickerEnter", iosEnterAnimation, iosEnterAnimation, void 0);
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
      }
      unlock();
    });
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }
      const dismissed = yield dismiss(this, data, role, "pickerLeave", iosLeaveAnimation, iosLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionPickerDidDismiss");
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionPickerWillDismiss");
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find((column) => column.name === name));
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(this.getSelected(), button.role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button) {
        const rtn = yield safeCall(button.handler, this.getSelected());
        if (rtn === false) {
          return false;
        }
      }
      return true;
    });
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== void 0 ? col.options[col.selectedIndex] : void 0;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : void 0,
        value: selectedColumn ? selectedColumn.value : void 0,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const { htmlAttributes } = this;
    const mode = getIonMode(this);
    return h(Host, Object.assign({ key: "26e3144adcdf01605271d01e468bb4a75ce854b1", "aria-modal": "true", tabindex: "-1" }, htmlAttributes, { style: {
      zIndex: `${2e4 + this.overlayIndex}`
    }, class: Object.assign({
      [mode]: true,
      // Used internally for styling
      [`picker-${mode}`]: true,
      "overlay-hidden": true
    }, getClassMap(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonPickerWillDismiss: this.dispatchCancelHandler }), h("ion-backdrop", { key: "fa212d21406606186cd95f8c7a4f119696ac8d4a", visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { key: "19ea889f65cb6a68a9db26cf9f83c6587cfcf07e", tabindex: "0" }), h("div", { key: "5fc0f5d26915ba353b9f0335946f94b6fda95e1e", class: "picker-wrapper ion-overlay-wrapper", role: "dialog" }, h("div", { key: "3fa5bff4ac0013ef31845482a27a14caebbdcd2f", class: "picker-toolbar" }, this.buttons.map((b) => h("div", { class: buttonWrapperClass(b) }, h("button", { type: "button", onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text)))), h("div", { key: "2ff6376956d01dcd9ec01b8d6972dd4b37ffb1a1", class: "picker-columns" }, h("div", { key: "4adcef77429f10a3faa50b41d1eaf3404387997c", class: "picker-above-highlight" }), this.presented && this.columns.map((c) => h("ion-picker-legacy-column", { col: c })), h("div", { key: "e0f37d3e9896eb2bc0f0aef4762a897130851963", class: "picker-below-highlight" }))), h("div", { key: "671bb7d0f487b0d7c7fa70388f8fa1de77448b9f", tabindex: "0" }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonWrapperClass = (button) => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== void 0,
    "picker-toolbar-button": true
  };
};
var buttonClass = (button) => {
  return Object.assign({ "picker-button": true, "ion-activatable": true }, getClassMap(button.cssClass));
};
Picker.style = {
  ios: IonPickerLegacyIosStyle0,
  md: IonPickerLegacyMdStyle0
};
var pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";
var IonPickerLegacyColumnIosStyle0 = pickerColumnIosCss;
var pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}";
var IonPickerLegacyColumnMdStyle0 = pickerColumnMdCss;
var PickerColumnCmp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.colDidChange = false;
    this.col = void 0;
  }
  colChanged() {
    this.colDidChange = true;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let pickerRotateFactor = 0;
      let pickerScaleFactor = 0.81;
      const mode = getIonMode(this);
      if (mode === "ios") {
        pickerRotateFactor = -0.46;
        pickerScaleFactor = 1;
      }
      this.rotateFactor = pickerRotateFactor;
      this.scaleFactor = pickerScaleFactor;
      this.gesture = (yield import("./chunk-V2FECDHO.js")).createGesture({
        el: this.el,
        gestureName: "picker-swipe",
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.gesture.enable();
      this.tmrId = setTimeout(() => {
        this.noAnimate = false;
        this.refresh(true);
      }, 250);
    });
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    if (this.colDidChange) {
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== void 0)
      cancelAnimationFrame(this.rafId);
    if (this.tmrId)
      clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    if (this.rafId !== void 0)
      cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    let translateY = 0;
    let translateZ = 0;
    const { col, rotateFactor } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = col.selectedIndex = this.indexForY(-y);
    const durationStr = duration === 0 ? "" : duration + "ms";
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = "";
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = "";
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      } else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      this.velocity *= DECELERATION_FRICTION;
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
        hapticSelectionEnd();
      }
    } else if (this.y % this.optHeight !== 0) {
      const currentPos = Math.abs(this.y % this.optHeight);
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    hapticSelectionStart();
    if (this.rafId !== void 0)
      cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest(".picker-opt");
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute("opt-index")) {
        this.setSelected(parseInt(opt.getAttribute("opt-index"), 10), TRANSITION_DURATION);
      }
    } else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = Math.abs(this.y) % this.optHeight / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        } else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = getIonMode(this);
    return h(Host, { key: "56289a294e5c580f3e7fe5fc12777aa7f80ad19b", class: Object.assign({ [mode]: true, "picker-col": true, "picker-opts-left": this.col.align === "left", "picker-opts-right": this.col.align === "right" }, getClassMap(col.cssClass)), style: {
      "max-width": this.col.columnWidth
    } }, col.prefix && h("div", { key: "d21f44667b5df567d6879723fe643ea7c2c60bef", class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix), h("div", { key: "bb427e5f24fd832703926e0e847ad05567597262", class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: (el) => this.optsEl = el }, col.options.map((o, index) => h("button", { "aria-label": o.ariaLabel, class: { "picker-opt": true, "picker-opt-disabled": !!o.disabled }, "opt-index": index }, o.text))), col.suffix && h("div", { key: "0413f7c074b6534b8967387ecb9957a79a267aff", class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "col": ["colChanged"]
    };
  }
};
var PICKER_OPT_SELECTED = "picker-opt-selected";
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: IonPickerLegacyColumnIosStyle0,
  md: IonPickerLegacyColumnMdStyle0
};
export {
  Datetime as ion_datetime,
  Picker as ion_picker_legacy,
  PickerColumnCmp as ion_picker_legacy_column
};
