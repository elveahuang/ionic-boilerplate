import {
  createColorClasses,
  openURL
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
import {
  componentOnReady,
  debounce
} from "./chunk-A6W4RR5W.js";
import {
  __async
} from "./chunk-R6AEDFCP.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/ion-route_4.entry.js
var Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
    this.url = "";
    this.component = void 0;
    this.componentProps = void 0;
    this.beforeLeave = void 0;
    this.beforeEnter = void 0;
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      "url": ["onUpdate"],
      "component": ["onUpdate"],
      "componentProps": ["onComponentProps"]
    };
  }
};
var RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
    this.from = void 0;
    this.to = void 0;
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      "from": ["propDidChange"],
      "to": ["propDidChange"]
    };
  }
};
var ROUTER_INTENT_NONE = "root";
var ROUTER_INTENT_FORWARD = "forward";
var ROUTER_INTENT_BACK = "back";
var generatePath = (segments) => {
  const path = segments.filter((s) => s.length > 0).join("/");
  return "/" + path;
};
var generateUrl = (segments, useHash, queryString) => {
  let url = generatePath(segments);
  if (useHash) {
    url = "#" + url;
  }
  if (queryString !== void 0) {
    url += "?" + queryString;
  }
  return url;
};
var writeSegments = (history, root, useHash, segments, direction, state, queryString) => {
  const url = generateUrl([...parsePath(root).segments, ...segments], useHash, queryString);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, "", url);
  } else {
    history.replaceState(state, "", url);
  }
};
var chainToSegments = (chain) => {
  const segments = [];
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        segments.push(param);
      } else if (segment !== "") {
        segments.push(segment);
      }
    }
  }
  return segments;
};
var removePrefix = (prefix, segments) => {
  if (prefix.length > segments.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === "") {
    return segments;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== segments[i]) {
      return null;
    }
  }
  if (segments.length === prefix.length) {
    return [""];
  }
  return segments.slice(prefix.length);
};
var readSegments = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const segments = parsePath(pathname).segments;
  return removePrefix(prefix, segments);
};
var parsePath = (path) => {
  let segments = [""];
  let queryString;
  if (path != null) {
    const qsStart = path.indexOf("?");
    if (qsStart > -1) {
      queryString = path.substring(qsStart + 1);
      path = path.substring(0, qsStart);
    }
    segments = path.split("/").map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length === 0) {
      segments = [""];
    }
  }
  return { segments, queryString };
};
var printRoutes = (routes) => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const segments = [];
    chain.forEach((r) => segments.push(...r.segments));
    const ids = chain.map((r) => r.id);
    console.debug(`%c ${generatePath(segments)}`, "font-weight: bold; padding-left: 20px", "=>	", `(${ids.join(", ")})`);
  }
  console.groupEnd();
};
var printRedirects = (redirects) => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug("FROM: ", `$c ${generatePath(redirect.from)}`, "font-weight: bold", " TO: ", `$c ${generatePath(redirect.to.segments)}`, "font-weight: bold");
    }
  }
  console.groupEnd();
};
var writeNavState = (root, chain, direction, index, changed = false, animation) => __async(void 0, null, function* () {
  try {
    const outlet = searchNavNode(root);
    if (index >= chain.length || !outlet) {
      return changed;
    }
    yield new Promise((resolve) => componentOnReady(outlet, resolve));
    const route = chain[index];
    const result = yield outlet.setRouteId(route.id, route.params, direction, animation);
    if (result.changed) {
      direction = ROUTER_INTENT_NONE;
      changed = true;
    }
    changed = yield writeNavState(result.element, chain, direction, index + 1, changed, animation);
    if (result.markVisible) {
      yield result.markVisible();
    }
    return changed;
  } catch (e) {
    console.error(e);
    return false;
  }
});
var readNavState = (root) => __async(void 0, null, function* () {
  const ids = [];
  let outlet;
  let node = root;
  while (outlet = searchNavNode(node)) {
    const id = yield outlet.getRouteId();
    if (id) {
      node = id.element;
      id.element = void 0;
      ids.push(id);
    } else {
      break;
    }
  }
  return { ids, outlet };
});
var waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.addEventListener("ionNavWillLoad", () => resolve(), { once: true });
  });
};
var OUTLET_SELECTOR = ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";
var searchNavNode = (root) => {
  if (!root) {
    return void 0;
  }
  if (root.matches(OUTLET_SELECTOR)) {
    return root;
  }
  const outlet = root.querySelector(OUTLET_SELECTOR);
  return outlet !== null && outlet !== void 0 ? outlet : void 0;
};
var matchesRedirect = (segments, redirect) => {
  const { from, to } = redirect;
  if (to === void 0) {
    return false;
  }
  if (from.length > segments.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === "*") {
      return true;
    }
    if (expected !== segments[i]) {
      return false;
    }
  }
  return from.length === segments.length;
};
var findRouteRedirect = (segments, redirects) => {
  return redirects.find((redirect) => matchesRedirect(segments, redirect));
};
var matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let score = 0;
  for (let i = 0; i < len; i++) {
    const routeId = ids[i];
    const routeChain = chain[i];
    if (routeId.id.toLowerCase() !== routeChain.id) {
      break;
    }
    if (routeId.params) {
      const routeIdParams = Object.keys(routeId.params);
      if (routeIdParams.length === routeChain.segments.length) {
        const pathWithParams = routeIdParams.map((key) => `:${key}`);
        for (let j = 0; j < pathWithParams.length; j++) {
          if (pathWithParams[j].toLowerCase() !== routeChain.segments[j]) {
            break;
          }
          score++;
        }
      }
    }
    score++;
  }
  return score;
};
var matchesSegments = (segments, chain) => {
  const inputSegments = new RouterSegments(segments);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const chainSegments = chain[i].segments;
    if (chainSegments[0] === "") {
      matchesDefault = true;
    } else {
      for (const segment of chainSegments) {
        const data = inputSegments.next();
        if (segment[0] === ":") {
          if (data === "") {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        } else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = matchesDefault ? matchesDefault === (inputSegments.next() === "") : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
var mergeParams = (a, b) => {
  return a || b ? Object.assign(Object.assign({}, a), b) : void 0;
};
var findChainForIDs = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  for (const chain of chains) {
    const score = matchesIDs(ids, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => {
      var _a;
      return {
        id: route.id,
        segments: route.segments,
        params: mergeParams(route.params, (_a = ids[i]) === null || _a === void 0 ? void 0 : _a.params)
      };
    });
  }
  return null;
};
var findChainForSegments = (segments, chains) => {
  let match = null;
  let bestScore = 0;
  for (const chain of chains) {
    const matchedChain = matchesSegments(segments, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > bestScore) {
        bestScore = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
var computePriority = (chain) => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        score += Math.pow(1, level);
      } else if (segment !== "") {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
var RouterSegments = class {
  constructor(segments) {
    this.segments = segments.slice();
  }
  next() {
    if (this.segments.length > 0) {
      return this.segments.shift();
    }
    return "";
  }
};
var readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
var readRedirects = (root) => {
  return Array.from(root.children).filter((el) => el.tagName === "ION-ROUTE-REDIRECT").map((el) => {
    const to = readProp(el, "to");
    return {
      from: parsePath(readProp(el, "from")).segments,
      to: to == null ? void 0 : parsePath(to)
    };
  });
};
var readRoutes = (root) => {
  return flattenRouterTree(readRouteNodes(root));
};
var readRouteNodes = (node) => {
  return Array.from(node.children).filter((el) => el.tagName === "ION-ROUTE" && el.component).map((el) => {
    const component = readProp(el, "component");
    return {
      segments: parsePath(readProp(el, "url")).segments,
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(el)
    };
  });
};
var flattenRouterTree = (nodes) => {
  const chains = [];
  for (const node of nodes) {
    flattenNode([], chains, node);
  }
  return chains;
};
var flattenNode = (chain, chains, node) => {
  chain = [
    ...chain,
    {
      id: node.id,
      segments: node.segments,
      params: node.params,
      beforeLeave: node.beforeLeave,
      beforeEnter: node.beforeEnter
    }
  ];
  if (node.children.length === 0) {
    chains.push(chain);
    return;
  }
  for (const child of node.children) {
    flattenNode(chain, chains, child);
  }
};
var Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteWillChange = createEvent(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = createEvent(this, "ionRouteDidChange", 7);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    this.root = "/";
    this.useHash = true;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield waitUntilNavNode();
      const canProceed = yield this.runGuards(this.getSegments());
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          const { redirect } = canProceed;
          const path = parsePath(redirect);
          this.setSegments(path.segments, ROUTER_INTENT_NONE, path.queryString);
          yield this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
        }
      } else {
        yield this.onRoutesChanged();
      }
    });
  }
  componentDidLoad() {
    window.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
  }
  onPopState() {
    return __async(this, null, function* () {
      const direction = this.historyDirection();
      let segments = this.getSegments();
      const canProceed = yield this.runGuards(segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          segments = parsePath(canProceed.redirect).segments;
        } else {
          return false;
        }
      }
      return this.writeNavStateRoot(segments, direction);
    });
  }
  onBackButton(ev) {
    ev.detail.register(0, (processNextHandler) => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  canTransition() {
    return __async(this, null, function* () {
      const canProceed = yield this.runGuards();
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          return canProceed.redirect;
        } else {
          return false;
        }
      }
      return true;
    });
  }
  /**
   * Navigate to the specified path.
   *
   * @param path The path to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   */
  push(path, direction = "forward", animation) {
    return __async(this, null, function* () {
      var _a;
      if (path.startsWith(".")) {
        const currentPath = (_a = this.previousPath) !== null && _a !== void 0 ? _a : "/";
        const url = new URL(path, `https://host/${currentPath}`);
        path = url.pathname + url.search;
      }
      let parsedPath = parsePath(path);
      const canProceed = yield this.runGuards(parsedPath.segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          parsedPath = parsePath(canProceed.redirect);
        } else {
          return false;
        }
      }
      this.setSegments(parsedPath.segments, direction, parsedPath.queryString);
      return this.writeNavStateRoot(parsedPath.segments, direction, animation);
    });
  }
  /** Go back to previous page in the window.history. */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  printDebug() {
    return __async(this, null, function* () {
      printRoutes(readRoutes(this.el));
      printRedirects(readRedirects(this.el));
    });
  }
  /** @internal */
  navChanged(direction) {
    return __async(this, null, function* () {
      if (this.busy) {
        console.warn("[ion-router] router is busy, navChanged was cancelled");
        return false;
      }
      const { ids, outlet } = yield readNavState(window.document.body);
      const routes = readRoutes(this.el);
      const chain = findChainForIDs(ids, routes);
      if (!chain) {
        console.warn("[ion-router] no matching URL for ", ids.map((i) => i.id));
        return false;
      }
      const segments = chainToSegments(chain);
      if (!segments) {
        console.warn("[ion-router] router could not match path because some required param is missing");
        return false;
      }
      this.setSegments(segments, direction);
      yield this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, segments, null, ids.length);
      return true;
    });
  }
  /** This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes. */
  onRedirectChanged() {
    const segments = this.getSegments();
    if (segments && findRouteRedirect(segments, readRedirects(this.el))) {
      this.writeNavStateRoot(segments, ROUTER_INTENT_NONE);
    }
  }
  /** This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes. */
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getSegments(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    var _a;
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || state >= lastState && lastState > 0) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  writeNavStateRoot(segments, direction, animation) {
    return __async(this, null, function* () {
      if (!segments) {
        console.error("[ion-router] URL is not part of the routing set");
        return false;
      }
      const redirects = readRedirects(this.el);
      const redirect = findRouteRedirect(segments, redirects);
      let redirectFrom = null;
      if (redirect) {
        const { segments: toSegments, queryString } = redirect.to;
        this.setSegments(toSegments, direction, queryString);
        redirectFrom = redirect.from;
        segments = toSegments;
      }
      const routes = readRoutes(this.el);
      const chain = findChainForSegments(segments, routes);
      if (!chain) {
        console.error("[ion-router] the path does not match any route");
        return false;
      }
      return this.safeWriteNavState(document.body, chain, direction, segments, redirectFrom, 0, animation);
    });
  }
  safeWriteNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      const unlock = yield this.lock();
      let changed = false;
      try {
        changed = yield this.writeNavState(node, chain, direction, segments, redirectFrom, index, animation);
      } catch (e) {
        console.error(e);
      }
      unlock();
      return changed;
    });
  }
  lock() {
    return __async(this, null, function* () {
      const p = this.waitPromise;
      let resolve;
      this.waitPromise = new Promise((r) => resolve = r);
      if (p !== void 0) {
        yield p;
      }
      return resolve;
    });
  }
  /**
   * Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
   *
   * When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
   * Otherwise the beforeEnterHook hook of the target route is executed.
   */
  runGuards() {
    return __async(this, arguments, function* (to = this.getSegments(), from) {
      if (from === void 0) {
        from = parsePath(this.previousPath).segments;
      }
      if (!to || !from) {
        return true;
      }
      const routes = readRoutes(this.el);
      const fromChain = findChainForSegments(from, routes);
      const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
      const canLeave = beforeLeaveHook ? yield beforeLeaveHook() : true;
      if (canLeave === false || typeof canLeave === "object") {
        return canLeave;
      }
      const toChain = findChainForSegments(to, routes);
      const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
      return beforeEnterHook ? beforeEnterHook() : true;
    });
  }
  writeNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      if (this.busy) {
        console.warn("[ion-router] router is busy, transition was cancelled");
        return false;
      }
      this.busy = true;
      const routeEvent = this.routeChangeEvent(segments, redirectFrom);
      if (routeEvent) {
        this.ionRouteWillChange.emit(routeEvent);
      }
      const changed = yield writeNavState(node, chain, direction, index, false, animation);
      this.busy = false;
      if (routeEvent) {
        this.ionRouteDidChange.emit(routeEvent);
      }
      return changed;
    });
  }
  setSegments(segments, direction, queryString) {
    this.state++;
    writeSegments(window.history, this.root, this.useHash, segments, direction, this.state, queryString);
  }
  getSegments() {
    return readSegments(window.location, this.root, this.useHash);
  }
  routeChangeEvent(toSegments, redirectFromSegments) {
    const from = this.previousPath;
    const to = generatePath(toSegments);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromSegments ? generatePath(redirectFromSegments) : null;
    return {
      from,
      redirectedFrom,
      to
    };
  }
  get el() {
    return getElement(this);
  }
};
var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
var IonRouterLinkStyle0 = routerLinkCss;
var RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
    this.color = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.routerDirection = "forward";
    this.routerAnimation = void 0;
    this.target = void 0;
  }
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(Host, { key: "f876442cab5b14b7e83c6d6ad2c2d878a9c57439", onClick: this.onClick, class: createColorClasses(this.color, {
      [mode]: true,
      "ion-activatable": true
    }) }, h("a", Object.assign({ key: "c44b78ec1fd10a40c23bfe548860ac2b346646a8" }, attrs), h("slot", { key: "d32180a567613f79f89885135bd0d776ffc1eb8e" })));
  }
};
RouterLink.style = IonRouterLinkStyle0;
export {
  Route as ion_route,
  RouteRedirect as ion_route_redirect,
  Router as ion_router,
  RouterLink as ion_router_link
};
