import {
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  lifecycle,
  setPageHidden,
  transition
} from "./chunk-U5OMRBML.js";
import {
  getTimeGivenProgression
} from "./chunk-HAVZYRFL.js";
import {
  attachComponent
} from "./chunk-5QKFFA3H.js";
import {
  config,
  getIonMode
} from "./chunk-STVEE43Z.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2YSWQYGY.js";
import "./chunk-AB2YFIZ6.js";
import {
  assert,
  shallowEqualStringMap
} from "./chunk-TTWJLGM2.js";
import {
  __async
} from "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js
var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = class {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  init(container) {
    return __async(this, null, function* () {
      this.state = VIEW_STATE_ATTACHED;
      if (!this.element) {
        const component = this.component;
        this.element = yield attachComponent(this.delegate, container, component, ["ion-page", "ion-page-invisible"], this.params);
      }
    });
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    assert(this.state !== VIEW_STATE_DESTROYED, "view state must be ATTACHED");
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }
    this.nav = void 0;
    this.state = VIEW_STATE_DESTROYED;
  }
};
var matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return shallowEqualStringMap(view.params, params);
};
var convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
var convertToViews = (pages) => {
  return pages.map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ("component" in page) {
      return convertToView(page.component, page.componentProps === null ? void 0 : page.componentProps);
    }
    return convertToView(page, void 0);
  }).filter((v) => v !== null);
};
var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var IonNavStyle0 = navCss;
var Nav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.gestureOrAnimationInProgress = false;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.didLoad = false;
    this.delegate = void 0;
    this.swipeGesture = void 0;
    this.animated = true;
    this.animation = void 0;
    this.rootParams = void 0;
    this.root = void 0;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    if (this.root === void 0) {
      return;
    }
    if (this.didLoad === false) {
      return;
    }
    if (!this.useRouter) {
      if (this.root !== void 0) {
        this.setRoot(this.root, this.rootParams);
      }
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null;
    if (this.swipeGesture === void 0) {
      const mode = getIonMode(this);
      this.swipeGesture = config.getBoolean("swipeBackEnabled", mode === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      this.rootChanged();
      this.gesture = (yield import("./chunk-22VVQPG4.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
      this.swipeGestureChanged();
    });
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{ component, componentProps }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === "number") {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{ component, componentProps }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {};
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }
    let resolve;
    const promise = new Promise((r) => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: () => __async(this, null, function* () {
            mark();
            yield finish;
          })
        });
        return p;
      }
    };
    if (direction === "root") {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: "back", animationBuilder: animation }));
      } else if (direction === "forward") {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), { animationBuilder: animation }));
      } else if (direction === "back") {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: "back", animated: true, animationBuilder: animation }));
      }
    }
    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  getRouteId() {
    return __async(this, null, function* () {
      const active = this.getActiveSync();
      if (active) {
        return {
          id: active.element.tagName,
          params: active.params,
          element: active.element
        };
      }
      return void 0;
    });
  }
  /**
   * Get the active view.
   */
  getActive() {
    return __async(this, null, function* () {
      return this.getActiveSync();
    });
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  getByIndex(index) {
    return __async(this, null, function* () {
      return this.views[index];
    });
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  canGoBack(view) {
    return __async(this, null, function* () {
      return this.canGoBackSync(view);
    });
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  getPrevious(view) {
    return __async(this, null, function* () {
      return this.getPreviousSync(view);
    });
  }
  /**
   * Returns the number of views in the stack.
   */
  getLength() {
    return __async(this, null, function* () {
      return Promise.resolve(this.views.length);
    });
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return void 0;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  queueTrns(ti, done) {
    return __async(this, null, function* () {
      var _a, _b;
      if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
        return false;
      }
      const promise = new Promise((resolve, reject) => {
        ti.resolve = resolve;
        ti.reject = reject;
      });
      ti.done = done;
      if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
        const router = document.querySelector("ion-router");
        if (router) {
          const canTransition = yield router.canTransition();
          if (canTransition === false) {
            return false;
          }
          if (typeof canTransition === "string") {
            router.push(canTransition, ti.opts.direction || "back");
            return false;
          }
        }
      }
      if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        ti.insertViews = void 0;
      }
      this.transInstr.push(ti);
      this.nextTrns();
      return promise;
    });
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const direction = result.direction === "back" ? "back" : "forward";
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */
  runTransition(ti) {
    return __async(this, null, function* () {
      try {
        this.ionNavWillChange.emit();
        this.isTransitioning = true;
        this.prepareTI(ti);
        const leavingView = this.getActiveSync();
        const enteringView = this.getEnteringView(ti, leavingView);
        if (!leavingView && !enteringView) {
          throw new Error("no views in the stack to be removed");
        }
        if (enteringView && enteringView.state === VIEW_STATE_NEW) {
          yield enteringView.init(this.el);
        }
        this.postViewInit(enteringView, leavingView, ti);
        const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        if (requiresTransition && ti.opts && leavingView) {
          const isBackDirection = ti.opts.direction === "back";
          if (isBackDirection) {
            ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
          }
          leavingView.animationBuilder = ti.opts.animationBuilder;
        }
        let result;
        if (requiresTransition) {
          result = yield this.transition(enteringView, leavingView, ti);
        } else {
          result = {
            hasCompleted: true,
            requiresTransition: false
          };
        }
        this.success(result, ti);
        this.ionNavDidChange.emit();
      } catch (rejectReason) {
        this.failed(rejectReason, ti);
      }
      this.isTransitioning = false;
      this.nextTrns();
    });
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;
    if (ti.removeView !== void 0) {
      assert(ti.removeStart !== void 0, "removeView needs removeStart");
      assert(ti.removeCount !== void 0, "removeView needs removeCount");
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error("removeView was not found");
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== void 0) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, "length can not be zero");
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error("invalid views to insert");
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error("inserted view was already inserted");
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error("inserted view was already destroyed");
      }
    }
    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== void 0) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== void 0) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return void 0;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    assert(leavingView || enteringView, "Both leavingView and enteringView are null");
    assert(ti.resolve, "resolve must be valid");
    assert(ti.reject, "reject must be valid");
    const opts = ti.opts;
    const { insertViews, removeStart, removeCount } = ti;
    let destroyQueue;
    if (removeStart !== void 0 && removeCount !== void 0) {
      assert(removeStart >= 0, "removeStart can not be negative");
      assert(removeCount >= 0, "removeCount can not be negative");
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== void 0 && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = "back";
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    assert(finalNumViews >= 0, "final balance can not be negative");
    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error("navigation stack needs at least one root page");
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = "forward";
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  transition(enteringView, leavingView, ti) {
    return __async(this, null, function* () {
      const opts = ti.opts;
      const progressCallback = opts.progressAnimation ? (ani) => {
        if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
          }, { oneTimeCallback: true });
          ani.progressEnd(0, 0, 0);
        } else {
          this.sbAni = ani;
        }
      } : void 0;
      const mode = getIonMode(this);
      const enteringEl = enteringView.element;
      const leavingEl = leavingView && leavingView.element;
      const animationOpts = Object.assign(Object.assign({
        mode,
        showGoBack: this.canGoBackSync(enteringView),
        baseEl: this.el,
        progressCallback,
        animated: this.animated && config.getBoolean("animated", true),
        enteringEl,
        leavingEl
      }, opts), { animationBuilder: opts.animationBuilder || this.animation || config.get("navAnimation") });
      const { hasCompleted } = yield transition(animationOpts);
      return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    });
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      assert(view.nav === this, "view is not part of the nav");
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    } else {
      assert(!view.nav, "nav is used");
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(view) {
    assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, "view state should be loaded or destroyed");
    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, "view must be part of the stack");
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          lifecycle(element, LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = true;
    this.pop({ direction: "back", progressAnimation: true });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = false;
      }, { oneTimeCallback: true });
      let newStepValue = shouldComplete ? -1e-3 : 1e-3;
      if (!shouldComplete) {
        this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
        newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    } else {
      this.gestureOrAnimationInProgress = false;
    }
  }
  render() {
    return h("slot", { key: "e9d99a8a0b84f02f9964d8143cd5e647e43334f9" });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }
};
Nav.style = IonNavStyle0;
var navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
  const nav = el.closest("ion-nav");
  if (nav) {
    if (routerDirection === "forward") {
      if (component !== void 0) {
        return nav.push(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    } else if (routerDirection === "root") {
      if (component !== void 0) {
        return nav.setRoot(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    } else if (routerDirection === "back") {
      return nav.pop({ skipIfBusy: true, animationBuilder: routerAnimation });
    }
  }
  return Promise.resolve(false);
};
var NavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
    };
    this.component = void 0;
    this.componentProps = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
  }
  render() {
    return h(Host, { key: "42c23dcdec5fdb25defebaf6e8a9fa75754ff8eb", onClick: this.onClick });
  }
  get el() {
    return getElement(this);
  }
};
export {
  Nav as ion_nav,
  NavLink as ion_nav_link
};
