import {
  findClosestIonContent,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-ZD57LWNR.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-PB3C3JLH.js";
import {
  config,
  getIonMode
} from "./chunk-C7BVS75L.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-LVAVXFQB.js";
import "./chunk-ZM7N4A2I.js";
import "./chunk-A6W4RR5W.js";
import {
  __async
} from "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js
var infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
var IonInfiniteScrollStyle0 = infiniteScrollCss;
var InfiniteScroll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInfinite = createEvent(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === "bottom" ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      }
      return 4;
    };
    this.isLoading = false;
    this.threshold = "15%";
    this.disabled = false;
    this.position = "bottom";
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf("%") > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    } else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const contentEl = findClosestIonContent(this.el);
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      this.scrollEl = yield getScrollElement(contentEl);
      this.thresholdChanged();
      this.disabledChanged();
      if (this.position === "top") {
        writeTask(() => {
          if (this.scrollEl) {
            this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
          }
        });
      }
    });
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = void 0;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  complete() {
    return __async(this, null, function* () {
      const scrollEl = this.scrollEl;
      if (!this.isLoading || !scrollEl) {
        return;
      }
      this.isLoading = false;
      if (this.position === "top") {
        this.isBusy = true;
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
        requestAnimationFrame(() => {
          readTask(() => {
            const scrollHeight = scrollEl.scrollHeight;
            const newScrollTop = scrollHeight - prev;
            requestAnimationFrame(() => {
              writeTask(() => {
                scrollEl.scrollTop = newScrollTop;
                this.isBusy = false;
                this.didFire = false;
              });
            });
          });
        });
      } else {
        this.didFire = false;
      }
    });
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener("scroll", this.onScroll);
      } else {
        this.scrollEl.removeEventListener("scroll", this.onScroll);
      }
    }
  }
  render() {
    const mode = getIonMode(this);
    const disabled = this.disabled;
    return h(Host, { key: "1444429a86950c449953cbf578436cc8cabf40ec", class: {
      [mode]: true,
      "infinite-scroll-loading": this.isLoading,
      "infinite-scroll-enabled": !disabled
    } });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "threshold": ["thresholdChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
InfiniteScroll.style = IonInfiniteScrollStyle0;
var infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var IonInfiniteScrollContentIosStyle0 = infiniteScrollContentIosCss;
var infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var IonInfiniteScrollContentMdStyle0 = infiniteScrollContentMdCss;
var InfiniteScrollContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.loadingSpinner = void 0;
    this.loadingText = void 0;
  }
  componentDidLoad() {
    if (this.loadingSpinner === void 0) {
      const mode = getIonMode(this);
      this.loadingSpinner = config.get("infiniteLoadingSpinner", config.get("spinner", mode === "ios" ? "lines" : "crescent"));
    }
  }
  renderLoadingText() {
    const { customHTMLEnabled, loadingText } = this;
    if (customHTMLEnabled) {
      return h("div", { class: "infinite-loading-text", innerHTML: sanitizeDOMString(loadingText) });
    }
    return h("div", { class: "infinite-loading-text" }, this.loadingText);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "060278bf9cb0321e182352f9613be4ebbb028259", class: {
      [mode]: true,
      // Used internally for styling
      [`infinite-scroll-content-${mode}`]: true
    } }, h("div", { key: "07d3cada920145f979ad315bd187fb878e0c3da3", class: "infinite-loading" }, this.loadingSpinner && h("div", { key: "6254f175d7543d09f3dd47cd0589a2809182cd8c", class: "infinite-loading-spinner" }, h("ion-spinner", { key: "a6a816d1c65b60b786333b209b63492aa716a283", name: this.loadingSpinner })), this.loadingText !== void 0 && this.renderLoadingText()));
  }
};
InfiniteScrollContent.style = {
  ios: IonInfiniteScrollContentIosStyle0,
  md: IonInfiniteScrollContentMdStyle0
};
export {
  InfiniteScroll as ion_infinite_scroll,
  InfiniteScrollContent as ion_infinite_scroll_content
};
