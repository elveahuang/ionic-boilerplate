import {
  getMode,
  setMode,
  setPlatformHelpers
} from "./chunk-2YSWQYGY.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ionic-global-4528d288.js
var Config = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== void 0 ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === void 0) {
      return fallback;
    }
    if (typeof val === "string") {
      return val === "true";
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
};
var config = /* @__PURE__ */ new Config();
var configFromSession = (win) => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};
var saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};
var configFromURL = (win) => {
  const configObj = {};
  win.location.search.slice(1).split("&").map((entry) => entry.split("=")).map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)]).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
var startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var getPlatforms = (win) => setupPlatforms(win);
var isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = (win = window) => {
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
var detectPlatforms = (win) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
var isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
var isIpad = (win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
var isIphone = (win) => testUserAgent(win, /iPhone/i);
var isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
var isAndroid = (win) => testUserAgent(win, /android|sink/i);
var isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
var isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
var isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
var isDesktop = (win) => !isMobile(win);
var isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
var isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
var isCapacitorNative = (win) => {
  const capacitor = win["Capacitor"];
  return !!(capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative);
};
var isElectron = (win) => testUserAgent(win, /electron/i);
var isPWA = (win) => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
};
var testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
var matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
var defaultMode;
var getIonMode = (ref) => {
  return ref && getMode(ref) || defaultMode;
};
var initialize = (userConfig = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  const platformHelpers = {};
  if (userConfig._ael) {
    platformHelpers.ael = userConfig._ael;
  }
  if (userConfig._rel) {
    platformHelpers.rel = userConfig._rel;
  }
  if (userConfig._ce) {
    platformHelpers.ce = userConfig._ce;
  }
  setPlatformHelpers(platformHelpers);
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), { persistConfig: false }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean("persistConfig")) {
    saveConfig(win, configObj);
  }
  setupPlatforms(win);
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get("mode", doc.documentElement.getAttribute("mode") || (isPlatform(win, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  doc.documentElement.setAttribute("mode", defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  const isIonicElement = (elm) => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith("ION-");
  };
  const isAllowedIonicModeValue = (elmMode) => ["ios", "md"].includes(elmMode);
  setMode((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute("mode");
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};

export {
  config,
  isPlatform,
  getIonMode,
  initialize
};
