"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9214],{

/***/ 9214:
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ionicons@7.4.0/node_modules/ionicons/dist/esm-es5/ion-icon.entry.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b72adede.js */ 6377);
/* harmony import */ var _utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-2c56d1c8.js */ 7248);


var validateContent = function (e) {
  var t = document.createElement("div");
  t.innerHTML = e;
  for (var o = t.childNodes.length - 1; o >= 0; o--) {
    if (t.childNodes[o].nodeName.toLowerCase() !== "svg") {
      t.removeChild(t.childNodes[o]);
    }
  }
  var n = t.firstElementChild;
  if (n && n.nodeName.toLowerCase() === "svg") {
    var i = n.getAttribute("class") || "";
    n.setAttribute("class", (i + " s-ion-icon").trim());
    if (isValid(n)) {
      return t.innerHTML;
    }
  }
  return "";
};
var isValid = function (e) {
  if (e.nodeType === 1) {
    if (e.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (var t = 0; t < e.attributes.length; t++) {
      var o = e.attributes[t].name;
      if ((0,_utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__.i)(o) && o.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (var t = 0; t < e.childNodes.length; t++) {
      if (!isValid(e.childNodes[t])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = function (e) {
  return e.startsWith("data:image/svg+xml");
};
var isEncodedDataUrl = function (e) {
  return e.indexOf(";utf8,") !== -1;
};
var ioniconContent = new Map();
var requests = new Map();
var parser;
var getSvgContent = function (e, t) {
  var o = requests.get(e);
  if (!o) {
    if (typeof fetch !== "undefined" && typeof document !== "undefined") {
      if (isSvgDataUrl(e) && isEncodedDataUrl(e)) {
        if (!parser) {
          parser = new DOMParser();
        }
        var n = parser.parseFromString(e, "text/html");
        var i = n.querySelector("svg");
        if (i) {
          ioniconContent.set(e, i.outerHTML);
        }
        return Promise.resolve();
      } else {
        o = fetch(e).then(function (o) {
          if (o.ok) {
            return o.text().then(function (o) {
              if (o && t !== false) {
                o = validateContent(o);
              }
              ioniconContent.set(e, o || "");
            });
          }
          ioniconContent.set(e, "");
        });
        requests.set(e, o);
      }
    } else {
      ioniconContent.set(e, "");
      return Promise.resolve();
    }
  }
  return o;
};
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var Icon = function () {
  function e(e) {
    (0,_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, e);
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.svgContent = undefined;
    this.isVisible = false;
    this.mode = getIonMode();
    this.color = undefined;
    this.ios = undefined;
    this.md = undefined;
    this.flipRtl = undefined;
    this.name = undefined;
    this.src = undefined;
    this.icon = undefined;
    this.size = undefined;
    this.lazy = false;
    this.sanitize = true;
  }
  e.prototype.componentWillLoad = function () {
    this.inheritedAttributes = (0,_utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el, ["aria-label"]);
  };
  e.prototype.connectedCallback = function () {
    var e = this;
    this.waitUntilVisible(this.el, "50px", function () {
      e.isVisible = true;
      e.loadIcon();
    });
  };
  e.prototype.componentDidLoad = function () {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  };
  e.prototype.disconnectedCallback = function () {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  };
  e.prototype.waitUntilVisible = function (e, t, o) {
    var n = this;
    if (this.lazy && typeof window !== "undefined" && window.IntersectionObserver) {
      var i = this.io = new window.IntersectionObserver(function (e) {
        if (e[0].isIntersecting) {
          i.disconnect();
          n.io = undefined;
          o();
        }
      }, {
        rootMargin: t
      });
      i.observe(e);
    } else {
      o();
    }
  };
  e.prototype.loadIcon = function () {
    var e = this;
    if (this.isVisible) {
      var t = (0,_utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
      if (t) {
        if (ioniconContent.has(t)) {
          this.svgContent = ioniconContent.get(t);
        } else {
          getSvgContent(t, this.sanitize).then(function () {
            return e.svgContent = ioniconContent.get(t);
          });
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = (0,_utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this.name, this.icon, this.mode, this.ios, this.md);
  };
  e.prototype.render = function () {
    var e, t;
    var o = this,
      n = o.flipRtl,
      i = o.iconName,
      r = o.inheritedAttributes,
      s = o.el;
    var a = this.mode || "md";
    var c = i ? (i.includes("arrow") || i.includes("chevron")) && n !== false : false;
    var l = n || c;
    return (0,_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: "img",
      class: Object.assign(Object.assign((e = {}, e[a] = true, e), createColorClasses(this.color)), (t = {}, t["icon-".concat(this.size)] = !!this.size, t["flip-rtl"] = l, t["icon-rtl"] = l && (0,_utils_2c56d1c8_js__WEBPACK_IMPORTED_MODULE_0__.d)(s), t))
    }, r), this.svgContent ? (0,_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "icon-inner",
      innerHTML: this.svgContent
    }) : (0,_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "icon-inner"
    }));
  };
  Object.defineProperty(e, "assetsDirs", {
    get: function () {
      return ["svg"];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "el", {
    get: function () {
      return (0,_index_b72adede_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e, "watchers", {
    get: function () {
      return {
        name: ["loadIcon"],
        src: ["loadIcon"],
        icon: ["loadIcon"],
        ios: ["loadIcon"],
        md: ["loadIcon"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return e;
}();
var getIonMode = function () {
  return typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
};
var createColorClasses = function (e) {
  var t;
  return e ? (t = {
    "ion-color": true
  }, t["ion-color-".concat(e)] = true, t) : null;
};
Icon.style = iconCss;


/***/ })

}]);