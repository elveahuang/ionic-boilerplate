import {
  CoreModule,
  CoreService,
  EnvironmentInjector,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonicRouteStrategy,
  RouteReuseStrategy,
  bootstrapApplication,
  enableProdMode,
  environment,
  importProvidersFrom,
  inject,
  provideIonicAngular,
  provideRouter,
  withHashLocation,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-5QYILTA5.js";
import "./chunk-RH7BNPRI.js";
import "./chunk-36TA7WLR.js";
import "./chunk-TYL5RNFT.js";
import "./chunk-OA4EOQUJ.js";
import "./chunk-G6YGRZES.js";
import "./chunk-JM7JSBGI.js";
import "./chunk-ASQZ32QD.js";
import "./chunk-WJXIT5XE.js";
import "./chunk-U5OMRBML.js";
import "./chunk-HAVZYRFL.js";
import "./chunk-DX4XHBGI.js";
import "./chunk-A5I45CAB.js";
import "./chunk-F67Q7A63.js";
import "./chunk-5QKFFA3H.js";
import "./chunk-QPJI5M5R.js";
import "./chunk-VTJM6AMA.js";
import "./chunk-54LAR2PU.js";
import "./chunk-GY2OULYR.js";
import "./chunk-YQBF2RQ6.js";
import "./chunk-TKYM4MJQ.js";
import "./chunk-WLQP6QNR.js";
import "./chunk-TPN6VLID.js";
import "./chunk-SD5FEXXT.js";
import "./chunk-GZ2S4NZR.js";
import "./chunk-57OCKW6Z.js";
import "./chunk-TRVR4476.js";
import "./chunk-IIY3WTVD.js";
import "./chunk-STVEE43Z.js";
import "./chunk-2YSWQYGY.js";
import "./chunk-AB2YFIZ6.js";
import "./chunk-TTWJLGM2.js";
import "./chunk-A5LXLC4Q.js";
import "./chunk-RAVBCX6T.js";
import "./chunk-L44VN3HG.js";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(coreService) {
    this.coreService = coreService;
    this.injector = inject(EnvironmentInjector);
    void this.coreService.init().then();
  }
  ngOnInit() {
    void this.coreService.init().then();
    this.coreService.ready().subscribe((ready) => {
      console.log(`ready...${ready}`);
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(CoreService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [CoreModule, IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// node_modules/.pnpm/ionicons@7.4.0/node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach(function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  });
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/.pnpm/ionicons@7.4.0/node_modules/ionicons/icons/index.mjs
var ellipse = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>";
var square = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>";
var triangle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>";

// src/app/core/pages/tabs/tabs.page.ts
var _TabsPage = class _TabsPage {
  constructor(environmentInjector, coreService) {
    this.environmentInjector = environmentInjector;
    this.coreService = coreService;
    addIcons({ triangle, ellipse, square });
    void this.coreService.init().then();
  }
};
_TabsPage.\u0275fac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)(\u0275\u0275directiveInject(EnvironmentInjector), \u0275\u0275directiveInject(CoreService));
};
_TabsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsPage, selectors: [["app-tabs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [["slot", "bottom"], ["tab", "home"], ["aria-hidden", "true", "name", "triangle"], ["tab", "discover"], ["tab", "me"]], template: function TabsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tabs");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementStart(2, "ion-tab-bar", 0)(3, "ion-tab-button", 1);
    \u0275\u0275element(4, "ion-icon", 2);
    \u0275\u0275elementStart(5, "ion-label");
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-tab-button", 3);
    \u0275\u0275element(8, "ion-icon", 2);
    \u0275\u0275elementStart(9, "ion-label");
    \u0275\u0275text(10, "Discover");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-tab-button", 4);
    \u0275\u0275element(12, "ion-icon", 2);
    \u0275\u0275elementStart(13, "ion-label");
    \u0275\u0275text(14, "Me");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [CoreModule, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet] });
var TabsPage = _TabsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsPage, { className: "TabsPage", filePath: "src/app/core/pages/tabs/tabs.page.ts", lineNumber: 15 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadComponent: () => import("./chunk-XSGNXKHX.js").then((m) => m.HomePage)
      },
      {
        path: "discover",
        loadComponent: () => import("./chunk-P7ELYCNV.js").then((m) => m.DiscoverPage)
      },
      {
        path: "me",
        loadComponent: () => import("./chunk-IMWAHFVH.js").then((m) => m.MePage)
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  },
  {
    path: "settings",
    loadComponent: () => import("./chunk-3KHCPRVO.js").then((m) => m.SettingsPage)
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-VCBS3J5J.js").then((m) => m.AboutPage)
  }
];

// src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom(CoreModule.forRoot())
  ]
}).catch((e) => console.error(e));
