function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet>\n</router-outlet>\n<spinner></spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"dashboard\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"w100\">\n            <app-header (toggleSidebar)=\"toggleSidebar()\"></app-header>\n        </div>\n    </div>\n    <div class=\"row\" id=\"dashboard-content\">\n        <div id=\"mobile-menu-overlay\" *ngIf=\"sidebar.isOpen\" (click)=\"toggleSidebar()\"></div>\n        <div class=\"\" id=\"navbar\" *ngIf=\"sidebar.isOpen\" [@toggleSidebar] #sidebar>\n            <div id=\"sidebar-header\">\n                <div class=\"logo\">\n                    <a class=\"logo\" [routerLink]=\"['/']\">\n                        <div id=\"logo-img\"></div>\n                    </a>\n                </div>\n                <div class=\"header\">Modules</div>\n                <i class=\"fa fa-bars link\" [hidden]=\"isFirstLoad\" (click)=\"toggleSidebar()\"></i>\n                <!--???-->\n            </div>\n            <sidebar *ngIf=\"rootModules\" [rootModules]=\"rootModules\" [currentSetInfo]=\"currentSetInfo\" [isFirstLoad]=\"isFirstLoad\" (getSets)=\"getSets($event, true)\"></sidebar>\n        </div>\n\n        <div class=\"col-12\" id=\"content\" [ngSwitch]=\"tab\" #content>\n            <div class=\"container-fluid h100\">\n                <div id=\"header\" class=\"row\">\n\n                    <div class=\"\" id=\"show-sidebar\" *ngIf=\"!sidebar.isOpen\">\n                        <i class=\"fa fa-bars link\" (click)=\"toggleSidebar()\"></i>\n                        <!--???-->\n                    </div>\n\n                    <div class=\"col\">\n                        {{currentSetInfo? currentSetInfo.rootModule.name + \" > \" + currentSetInfo.module.name + \" > \" + currentSetInfo.level.name : 'Header'}}\n\n                        <span class=\"level-word-count\">{{currentSetInfo? \"   (\" +  currentSetInfo.level.totalWords + \" Words)\" : ''}}</span>\n                    </div>\n\n                </div>\n\n                <ng-container *ngIf=\"(setList.length && setState) || (setList.length && resumeUserState)\">\n                    <div id=\"set-list\" *ngSwitchDefault class=\"row\">\n                        <table class=\"state-list\" cellspacing=\"0\" border=\"1\">\n                            <thead>\n                                <tr>\n                                    <th>\n                                        <i class=\"fa fa-folder\"></i> Packet\n                                    </th>\n                                    <th colspan=\"3\">\n                                        <img src=\"assets/images/open-book.png\" width=\"30\"> Practice\n                                    </th>\n                                    <th colspan=\"3\">\n                                        <img src=\"assets/images/test.png\" width=\"25\"> Quiz\n                                    </th>\n                                </tr>\n                                <tr>\n                                    <th class=\"sub-col\">(400)</th>\n                                    <th class=\"sub-col\">Start over</th>\n                                    <th class=\"sub-col\">Resume</th>\n                                    <th class=\"sub-col\">Starred</th>\n                                    <th class=\"sub-col\">Start over</th>\n                                    <th class=\"sub-col\">Resume</th>\n                                    <th class=\"sub-col\">Misspelled</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"set-item\" *ngFor=\"let setItem of setList\" [class.disable]=\"(!userData && !setItem.isFree) || (!setItem.isRegional && userData && userSubscription && userSubscription.planType === planType.REGIONAL)\">\n                                    <td class=\"set-info\">{{ setItem.name }}</td>\n                                    <!-- PRACTICE -->\n                                    <!-- practice - start from the beginning -->\n                                    <td class=\"set-info link\" (click)=\"start(setItem, 'practice',0, false)\">\n                                        <i class=\"fa fa-refresh\"></i>\n                                    </td>\n\n                                    <!-- practice - start from the last word -->\n                                    <td class=\"set-info link\" [class.disable]=\"!userData\" (click)=\"start(setItem, 'practice', setState[setItem.id] && setState[setItem.id].practice && setState[setItem.id].practice.lastwordindex!==undefined? setState[setItem.id].practice.lastwordindex : 0, true)\">\n                                        <div class=\"td-content\">\n                                            <i class=\"fa fa-pause\"></i>\n                                            <div class=\"count\">\n                                                {{ setState[setItem.id] && setState[setItem.id].practice && setState[setItem.id].practice.lastwordindex!==undefined? setState[setItem.id].practice.lastwordindex + 1: 0}}\n                                            </div>\n                                        </div>\n                                    </td>\n\n                                    <!-- practice - number of favorite words -->\n                                    <td class=\"set-info link\" [class.disable]=\"!userData\" (click)=\"startFavoriteWords(setItem, setState[setItem.id] ? setState[setItem.id].practice.favorite: null)\">\n                                        <i class=\"fa fa-star favorite-word-icon\"></i>\n                                        <div class=\"count\">\n                                            {{ setState[setItem.id] && setState[setItem.id].practice? setState[setItem.id].practice.favorite.length : 0}}\n                                        </div>\n                                    </td>\n\n                                    <!-- TEST -->\n                                    <!-- test - start from the beginning -->\n                                    <td class=\"set-info link\" (click)=\"start(setItem, 'test',0, false)\">\n                                        <i class=\"fa fa-refresh\"></i></td>\n\n                                    <!-- test - start from the last word -->\n                                    <td class=\"set-info link\" [class.disable]=\"!userData\" (click)=\"start(setItem, 'test', setState[setItem.id] && setState[setItem.id].test.lastwordindex!==undefined? setState[setItem.id].test.lastwordindex : 0, true)\">\n                                        <i class=\"fa fa-pause\"></i>\n                                        <div class=\"count\">\n                                            {{ setState[setItem.id] && setState[setItem.id].test && setState[setItem.id].test.lastwordindex!==undefined? setState[setItem.id].test.lastwordindex + 1: 0}}\n                                        </div>\n                                    </td>\n\n                                    <!-- test - number of misspelled words -->\n                                    <td class=\"set-info link\" [class.disable]=\"!userData\" (click)=\"startMisspelledWords(setItem, setState[setItem.id]? setState[setItem.id].test.misspelled: null)\">\n                                        <i class=\"fa fa-times\"></i>\n                                        <div class=\"count\">\n                                            {{ setState[setItem.id] && setState[setItem.id].test? setState[setItem.id].test.misspelled.length : 0}}\n                                        </div>\n                                    </td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div *ngSwitchCase=\"'play'\" id=\"details-container\">\n                        <div class=\"row\" [hidden]=\"!words.length && !details\">\n                            <div class=\"col-6\" id=\"set-name\">\n                                {{ currentSetInfo.set.name }}\n                            </div>\n                            <div class=\"col-6\" [class.col-12]=\"isMobileView\" id=\"nav-buttons\">\n                                <button class=\"nav-btn sd-btn\" (click)=\"next()\" #nextBtn>\n                    <span class=\"web-view\">Next</span>\n                    <i class=\"fa fa-arrow-circle-right link mobile-view\"></i>\n                  </button>\n                                <div id=\"word-index\">{{ (currentIndex + 1) + \" / \" + words.length}}</div>\n                                <button class=\"nav-btn sd-btn\" (click)=\"previous()\" [disabled]=\"currentIndex===0\">\n                    <span class=\"web-view\">Previous</span>\n                    <i class=\"fa fa-arrow-circle-left link mobile-view\"></i>\n                  </button>\n                                <ng-container *ngIf=\"userData && userData.role==role.ADMIN\">\n                                    <button (click)=\"gotoWord()\" id=\"goto-btn\">Go to</button>\n                                    <input type=\"text\" id=\"gotoindex\" [(ngModel)]=\"gotoIndex\" (keydown.enter)=\"gotoWord()\">\n                                </ng-container>\n                            </div>\n                        </div>\n                        <word-detail [details]=\"details\" [session]=\"currentScreen\" (gotoNext)=\"gotoNext()\" (logStatus)=\"logState($event)\" (addFavorite)=\"addFavorite($event)\" (removeFavorite)=\"removeFavorite($event)\" (edit)=\"edit($event)\" (add)=\"add($event)\" *ngIf=\"details\" #worddetail>\n                        </word-detail>\n                        <div class=\"error-msg\" *ngIf=\"errorMsg\">{{words[currentIndex] + \" - \" + errorMsg}}</div>\n                        <button (click)=\"updateWord()\" *ngIf=\"userData && userData.role==role.ADMIN\">Save</button>\n                    </div>\n\n                </ng-container>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"feedback-btn\" *ngIf=\"userData && currentWord && !openFeedback\" (click)=\"openFeedback = true;\" title=\"Send your feedback\">\n        <i class=\"fa fa-flag\"></i>\n    </div>\n    <feedback *ngIf=\"openFeedback\" [currentWord]=\"currentWord\" (close)=\"closeFeedback()\"></feedback>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/feedback/feedback.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/feedback/feedback.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div id=\"overlay\" *ngIf=\"isMobileView\" (click)=\"closeFeedback($event)\"></div>\n  <div id=\"feedback-box\">\n    <div class=\"header\">\n      Feedback\n      <div class=\"fa fa-times close-feedback\" (click)=\"closeFeedback($event)\"></div>\n    </div>\n    <div class=\"feedback-body\">\n      <!-- <div id=\"rating\">\n        <i class=\"fa fa-star star\" *ngFor=\"let i of [5,4,3,2,1]\" [class.rate]=\"currentRate && i<=currentRate\" (click)=\"rate($event, i)\"></i>\n    </div> -->\n\n      <div class=\"field\">\n        <div class=\"field-name\">Word</div>\n        <div class=\"field-value\">{{currentWord.id}}</div>\n      </div>\n      <div class=\"field\">\n        <div class=\"field-name\">About</div>\n        <div class=\"field-value\">\n          <select name=\"\" id=\"\" [(ngModel)]=\"about\">\n            <option [ngValue]=\"undefined\">Select a value</option>\n            <option [ngValue]=\"'origin'\">Language of origin</option>\n            <option [ngValue]=\"'pos'\">Parts of speech</option>\n            <option [ngValue]=\"'pronunciations'\">Pronunciations</option>\n            <option [ngValue]=\"'definition'\">Definition</option>\n            <option [ngValue]=\"'sentence'\">Sentence</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"comment\">\n        <textarea name=\"\" id=\"comment\" [(ngModel)]=\"comment\"\n          placeholder=\"Write your comments about this word...\"></textarea>\n      </div>\n      <div class=\"footer-btn\">\n        <span class=\"fb-sent\" *ngIf=\"fbSent\">Thank you for your feedback.</span>\n        <button id=\"send\" class=\"mb-button\" (click)=\"sendFeedback()\" [disabled]=\"!about || !comment\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/nav-footer/nav-footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/nav-footer/nav-footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardNavFooterNavFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"actions w100\">\n  <ul *ngIf=\"userData\">\n    <li class=\"nav-links\">\n      <a [routerLink]=\"['/dashboard']\">\n        Dashboard\n      </a>\n    </li>\n    <li class=\"nav-links\">\n      <a class=\"link\" [routerLink]=\"['/profile']\">\n        Profile\n      </a>\n    </li>\n    <li class=\"nav-links\" (click)=\"logout()\">Logout</li>\n  </ul>\n\n  <ul *ngIf=\"!userData\">\n    <li class=\"nav-links\">\n      <a class=\"link\" [routerLink]=\"['/signup']\">\n        Register\n      </a>\n    </li>\n  </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar-container\">\n  <div class=\"options\" *ngIf=\"!embedInDashboard\">\n    <img src=\"assets/images/expandall.png\" class=\"link\" (click)=\"toggleModules(false)\" width=\"30px\" alt=\"\">\n    <img src=\"assets/images/collapse-all.png\" class=\"link\" (click)=\"toggleModules(true)\" width=\"30px\" alt=\"\">\n  </div>\n  <div id=\"list-container\">\n    <ul *ngIf=\"rootModules && rootModules.length\" id=\"module-list\">\n      <li class=\"level-1\" *ngFor=\"let rootModule of rootModules\">\n        <div class=\"root-module-name title\"\n          [class.active-rm]=\"currentSetInfo && currentSetInfo.rootModule && currentSetInfo.rootModule.id===rootModule.id\"\n          (click)=\"toggleRootModule($event, rootModule)\" id=\"rm-{{rootModule.id}}\">\n          <div class=\"item-name\">{{ rootModule.name }}</div>\n          <div class=\"item-expand\"><i class=\"fa fa-chevron-right\" [ngClass]=\"{'open':rootModule.expand}\"></i></div>\n        </div>\n        <ul class=\"level-2\" [class.expand]=\"rootModule.expand\"\n          [class.loading]=\"(loading && rootModule.expand) || (expandAll && rootModule.expand)\"\n          [class.collapseall]=\"rootModule.collapseAll\">\n          <li *ngFor=\"let module of rootModule.modules\">\n            <div class=\"root-module-name title\"\n              [class.active-md]=\"currentSetInfo && currentSetInfo.module && currentSetInfo.module.id===module.id\"\n              id=\"md-{{module.id}}\" (click)=\"toggleModule($event, module)\">\n              <div class=\"item-name\">{{ module.name }}</div>\n              <div class=\"item-expand\"><i class=\"fa fa-chevron-right\" [ngClass]=\"{'open':module.expand}\"></i></div>\n            </div>\n            <ul class=\"level-3\" [class.expand]=\"module.expand\"\n              [class.loading]=\"(loading && module.expand) || (expandAll && module.expand)\"\n              [class.collapseall]=\"module.collapseAll\">\n              <li *ngFor=\"let level of module.levels\"\n                [class.active-lv]=\"currentSetInfo && currentSetInfo.level && currentSetInfo.level.id===level.id\"\n                (click)=\"getSetsDetail(rootModule, module, level)\">\n                <div class=\"level-id title\">{{ level.name }}</div>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <nav-footer></nav-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/free-signup/free-signup.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/free-signup/free-signup.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeFreeSignupFreeSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Sign up for FREE 14 day trial</h1>\n<div mat-dialog-content>\n    <div [ngSwitch]=\"screen\" class=\"options\">\n        <ng-container *ngSwitchCase=\"'options'\">\n            <!-- GOOGLE -->\n            <div class=\"row option\">\n                <div class=\"customBtn customGPlusSignIn col-sm-7\" (click)=\"signUpUsingGoogle()\">\n                    <span class=\"icon gicon\"></span>\n                    <span class=\"buttonText\">Sign up with Google</span>\n                </div>\n            </div>\n\n            <!-- FACEBOOK -->\n            <div class=\"row option\">\n                <div class=\"customBtn customGPlusSignIn col-sm-7\" (click)=\"signUpUsingFacebook()\">\n                    <span class=\"icon ficon\"></span>\n                    <span class=\"buttonText\">Sign up with Facebook</span>\n                </div>\n            </div>\n\n            <!-- EMAIL/PASSWORD -->\n            <div class=\"row option\">\n                <div class=\"customBtn customGPlusSignIn col-sm-7\" (click)=\"screen='email'\">\n                    <span class=\"icon fa fa-envelope-o\"></span>\n                    <span class=\"buttonText\">Sign up with Email ID</span>\n                </div>\n            </div>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'email'\">\n            <form [formGroup]=\"signUpForm\">\n\n                <div class=\"row\">\n                    <div class=\"col-sm-8 offset-sm-2\">\n                        <div class=\"form-row\">\n                            <i class=\"material-icons\">email</i>\n                            <mat-form-field color=\"accent\">\n                                <input (keydown.enter)=\"login()\" id=\"email\" type=\"text\" formControlName=\"email\" matInput placeholder=\"Email address\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n                <div formGroupName=\"passwordGroup\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 offset-sm-2\">\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-form-field color=\"accent\">\n                                    <input (keydown.enter)=\"login()\" id=\"password\" type=\"password\" formControlName=\"password\" matInput placeholder=\"Password\" />\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 offset-sm-2\">\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-form-field color=\"accent\">\n                                    <input (keydown.enter)=\"login()\" id=\"password\" type=\"password\" formControlName=\"confirmPassword\" matInput placeholder=\"Confirm password\" />\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 offset-sm-3 btn-wrap\" id=\"signup\">\n                            <button mat-button class=\"secondary\" (click)=\"screen='options'\">Back</button>\n                            <button mat-button class=\"primary\" (click)=\"signUpWithEmail()\" [disabled]=\"!signUpForm.valid\">Sign Up</button>\n                        </div>\n                    </div>\n                </div>\n\n            </form>\n        </ng-container>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid h100\" id=\"home-container\">\n\n    <div class=\"row h100\">\n        <div class=\"col-md-6 col-sm-12 h100\" id=\"img-wrap\">\n            <div class=\"row\" id=\"logo\">\n                <div id=\"logo-img\"></div>\n                <span class=\"name\">Spelldone</span>\n            </div>\n            <div id=\"btn-group\">\n                <a id=\"trial\" [routerLink]=\"['login']\">FREE 14 DAY TRIAL</a>\n            </div>\n            <div id=\"home-img\" class=\"h100\"></div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 h100\" id=\"right-panel\">\n            <div class=\"row\" id=\"topbar\">\n                <div class=\"col-12 col-md-10 offset-md-2\" id=\"home-options\">\n                    <a [class.active]=\"active=='mission'\" (click)=\"active='mission'\" href=\"#mission\">Mission</a>\n                    <a [class.active]=\"active=='whyspelldone'\" (click)=\"active='whyspelldone'\" href=\"#whyspelldone\">Why\n              Spelldone</a>\n                    <a [class.active]=\"active=='features'\" (click)=\"active='features'\" href=\"#features\">Features</a>\n\n                    <ng-container *ngIf=\"!userData && !isLoading\">\n                        <a class=\"link2\" [routerLink]=\"['login']\">Login</a>\n                        <a class=\"link2\" [routerLink]=\"['signup']\">Register</a>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"userData && !isLoading\">\n                        <a class=\"link2\" [routerLink]=\"['dashboard']\" id=\"dashboard\">\n                            <i class=\"fa fa-table\"></i>\n                            <span>Dashboard</span>\n                        </a>\n\n                        <button id=\"username\" class=\"hightlight\" mat-button [matMenuTriggerFor]=\"menu\">\n                <i class=\"fa fa-ellipsis-v\"></i>\n              </button>\n                        <mat-menu #menu=\"matMenu\">\n                            <a [routerLink]=\"['/profile']\">\n                                <button mat-menu-item>\n                    <i class=\"fa fa-user-circle action-icon\"></i>\n                    Profile\n                  </button>\n                            </a>\n                            <mat-divider></mat-divider>\n                            <button mat-menu-item (click)=\"logout()\">\n                  <i class=\"fa fa-sign-out action-icon\"></i>\n                  Logout\n                </button>\n                        </mat-menu>\n                    </ng-container>\n                </div>\n            </div>\n            <div id=\"home-text-content\">\n                <section class=\"content-section\" id=\"mission\">\n                    <h2>Mission</h2>\n                    <p>Our Mission is to provide a reliable spelling bee resource at a low-cost without compromising any quality feature, volume, and accessibility.</p>\n                </section>\n                <section class=\"content-section\" id=\"whyspelldone\">\n                    <h2>Why Spelldone?</h2>\n                    <ul>\n                        <li>Designed and tested by National Champions, Finalists and experienced Teachers</li>\n                        <li>Reasonable Price </li>\n                        <li>Professional & licensed content and audio (24K plus words) </li>\n                        <li>Our commitment to make Spelldone better</li>\n                    </ul>\n                </section>\n                <section class=\"content-section\" id=\"features\">\n                    <h2>Features</h2>\n                    <ul>\n                        <li>“Easy to use” interface</li>\n                        <li>Definition, Parts of Speech, Etymology with Language of Origin</li>\n                        <li>Pronunciation and sentence for word usage</li>\n                        <li>User activity logging at each word level</li>\n                        <li>Practice and Quiz Modes</li>\n                    </ul>\n                </section>\n            </div>\n        </div>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/forgot-password/forgot-password.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/forgot-password/forgot-password.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLoginForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Forgot Password</h1>\n<div mat-dialog-content>\n  <div style=\"font-size: 14px;\">Please enter your registered Email ID. We'll send password reset link.</div>\n  <mat-form-field color=\"accent\">\n    <input (keydown.enter)=\"send()\" (focus)=\"inValidEmailId=false;\" id=\"email\" type=\"text\" [(ngModel)]=\"email\" matInput\n      placeholder=\"Email address\" />\n  </mat-form-field>\n  <div *ngIf=\"inValidEmailId\" style=\"color: red;\">\n    Please enter a valid Email ID\n  </div>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" (click)=\"send()\" cdkFocusInitial>Send</button>\n  <button mat-button class=\"sd-btn-sec\" [mat-dialog-close]=\"false\">Cancel</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n    <div class=\"row justify-center\">\n      <div class=\"col-lg-4  col-md-6 col-sm-8 text-center\">\n        <a class=\"logo\" [routerLink]=\"['/']\">\n          <div id=\"logo-img\"></div>\n          <div class=\"logo-name\">Spelldone</div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row justify-center\" id=\"learnmode\">\n      <div id=\"trial\" class=\"\" (click)=\"signUpForTrail()\">\n        FREE 14 day trial\n      </div>\n    </div>\n    <div class=\"row justify-content-md-center justify-content-sm-center\">\n      <div class=\"col-lg-4  col-md-6\" [ngClass]=\"{'col-sm-8': !isMobileLandscape, 'col-sm-12': isMobileLandscape}\">\n        <div class=\"card\">\n          <form [formGroup]=\"loginForm\">\n            <div class=\"card-form\">\n              <div class=\"form-row\">\n                <i class=\"material-icons\">email</i>\n                <mat-form-field color=\"accent\">\n                  <input (keydown.enter)=\"login()\" id=\"email\" type=\"text\" required [(ngModel)]=\"username\" matInput\n                    placeholder=\"Email address\" formControlName=\"email\" />\n                </mat-form-field>\n              </div>\n              <div class=\"form-row\">\n                <i class=\"material-icons\">lock_outline</i>\n                <mat-form-field color=\"accent\">\n                  <input (keydown.enter)=\"login()\" id=\"password\" type=\"password\" required [(ngModel)]=\"password\"\n                    matInput placeholder=\"Password\" formControlName=\"password\" />\n                </mat-form-field>\n              </div>\n            </div>\n\n            <div class=\"card-footer\">\n              <div class=\"row card-footer-row\">\n                <div class=\"col-sm-6 btn-wrap\">\n                  <button mat-button (click)=\"login()\" [disabled]=\"!loginForm.valid\">Login</button>\n                </div>\n                <div class=\"col-sm-6 btn-wrap\">\n                  <button mat-button (click)=\"register()\">Register</button>\n                </div>\n              </div>\n              <div class=\"row card-footer-row\">\n                <div class=\"col-md-6 offset-md-3 link\" (click)=\"forgotPassword()\">Forgot password?</div>\n                <div class=\"col-md-6 offset-md-3 link\">\n                  <div id=\"guest\" (click)=\"continueAsGuest()\">Continue as guest</div>\n                </div>\n              </div>\n\n              <div class=\"row card-footer-row\">\n                <div class=\"customBtn customGPlusSignIn col-sm-10 offset-sm-1\" (click)=\"signInWithGoogle()\">\n                  <span class=\"icon gicon\"></span>\n                  <span class=\"buttonText\">Sign in with Google</span>\n                </div>\n              </div>\n\n              <div class=\"row card-footer-row\">\n                <div class=\"customBtn customGPlusSignIn col-sm-10 offset-sm-1\" (click)=\"signInWithFacebook()\">\n                  <span class=\"icon ficon\"></span>\n                  <span class=\"buttonText\">Sign in with Facebook</span>\n                </div>\n              </div>\n\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n\n    <div id=\"footer\" class=\"row justify-content-between\">\n      <div class=\"col-xs-6\" style=\"flex:1\">\n        <span>© 2019 G2L LLC. All rights reserved</span>\n      </div>\n      <div class=\"col-xs-4 more-links\">\n        <span class=\"link\">\n          <a href=\"mailto:support@great2learn.com\">\n            Contact\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/privacypolicy/privacypolicy.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/privacypolicy/privacypolicy.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupPrivacypolicyPrivacypolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Privacy Policy</h1>\n<div mat-dialog-content>\n  <div class=\"\" style=\"margin-top: 20px; color: #444; text-align: justify;\">\n    <label class=\"desc\">This privacy policy has been compiled to better serve\n      those who are concerned with how their 'Personally identifiable\n      information' (PII) is being used online. PII, as used in US privacy\n      law and information security, is information that can be used on its\n      own or with other information to identify, contact, or locate a\n      single person, or to identify an individual in context. Please read\n      our privacy policy carefully to get a clear understanding of how we\n      collect, use, protect or otherwise handle your Personally\n      Identifiable Information in accordance with our website.</label>\n    <h5>What personal information do we collect from the people that\n      visit our blog, website or app?</h5>\n    <label class=\"desc\">We do not collect information from visitors of our\n      site.</label>\n    <h5>When do we collect information?</h5>\n    <label class=\"desc\">We collect information from you when you register on\n      our site, place an order, subscribe to a newsletter, respond to a\n      survey or enter information on our site.</label>\n    <h5>How do we use your information?</h5>\n    <div>\n      <h5>We may use the information we collect from you when you\n        register, make a purchase, sign up for our newsletter, respond to a\n        survey or marketing communication, surf the website, or use certain\n        other site features in the following ways:</h5>\n      <ul>\n\n        <li>To quickly process your transactions.</li>\n        <li>To send periodic emails regarding your order or other\n          products and services.</li>\n\n      </ul>\n    </div>\n    <div>\n      <h5>How do we protect visitor information?</h5>\n      <label class=\"desc\">We do not use vulnerability scanning and/or scanning\n        to PCI standards. We use regular Malware Scanning.</label> <label class=\"desc\">Your\n        personal information is contained behind secured networks and is\n        only accessible by a limited number of persons who have special\n        access rights to such systems, and are required to keep the\n        information confidential. In addition, all sensitive/credit\n        information you supply is encrypted via Secure Socket Layer (SSL)\n        technology.</label> <label class=\"desc\">We implement a variety of security\n        measures when a user places an order enters, submits, or accesses\n        their information to maintain the safety of your personal\n        information.</label> <label class=\"desc\">All transactions are processed through\n        a gateway provider and are not stored or processed on our servers.</label>\n    </div>\n    <div>\n      <h5>Do we use 'cookies'?</h5>\n      <label class=\"desc\">We do not use cookies for tracking purposes</label> <label class=\"desc\">You\n        can choose to have your computer warn you each time a cookie is\n        being sent, or you can choose to turn off all cookies. You do this\n        through your browser (like Internet Explorer) settings. Each\n        browser is a little different, so look at your browser's Help menu\n        to learn the correct way to modify your cookies.</label> <label class=\"desc\">If\n        you disable cookies off, some features will be disabled that make\n        your site experience more efficient and some of our services will\n        not function properly.</label> <label class=\"desc\">However, you can still place\n        orders .</label>\n    </div>\n    <div>\n      <h5>Third-party disclosure</h5>\n      <label class=\"desc\">We do not sell, trade, or otherwise transfer to\n        outside parties your personally identifiable information.</label>\n    </div>\n    <div>\n      <h5>Third-party links</h5>\n      <label class=\"desc\">We do not include or offer third-party products or\n        services on our website.</label>\n    </div>\n    <div>\n      <h5>Google</h5>\n      <label class=\"desc\"> Google's advertising requirements can be summed up\n        by Google's Advertising Principles. They are put in place to\n        provide a positive experience for users. <a href=\"https://support.google.com/adwordspolicy/answer/1316548?hl=en\"\n          style=\"color: blue\">\n          https://support.google.com/adwordspolicy/answer/1316548?hl=en</a>\n      </label> <label class=\"desc\">We have not enabled Google AdSense on our site but\n        we may do so in the future.</label>\n    </div>\n    <div>\n      <h5>California Online Privacy Protection Act</h5>\n      <label class=\"desc\"> CalOPPA is the first state law in the nation to\n        require commercial websites and online services to post a privacy\n        policy. The law's reach stretches well beyond California to require\n        a person or company in the United States (and conceivably the\n        world) that operates websites collecting personally identifiable\n        information from California consumers to post a conspicuous privacy\n        policy on its website stating exactly the information being\n        collected and those individuals with whom it is being shared, and\n        to comply with this policy.<br> See more at: <a\n          href=\"http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf\"\n          style=\"color: blue\">\n          http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a>\n      </label>\n    </div>\n    <div>\n      <h5>California Online Privacy Protection Act</h5>\n      <label class=\"desc\"> CalOPPA is the first state law in the nation to\n        require commercial websites and online services to post a privacy\n        policy. The law's reach stretches well beyond California to require\n        a person or company in the United States (and conceivably the\n        world) that operates websites collecting personally identifiable\n        information from California consumers to post a conspicuous privacy\n        policy on its website stating exactly the information being\n        collected and those individuals with whom it is being shared, and\n        to comply with this policy.<br> See more at: <a\n          href=\"http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf\"\n          style=\"color: blue\">\n          http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a>\n      </label>\n    </div>\n    <div>\n      <h5>According to CalOPPA we agree to the following:</h5>\n      <label class=\"desc\">Users can visit our site anonymously.</label><br> <label class=\"desc\">Once\n        this privacy policy is created, we will add a link to it on our\n        home page or as a minimum on the first significant page after\n        entering our website.</label> <label class=\"desc\">Our Privacy Policy link\n        includes the word 'Privacy' and can be easily be found on the page\n        specified above.</label>\n      <h5>Users will be notified of any privacy policy changes:</h5>\n      <ul>\n        <li>On our Privacy Policy Page</li>\n      </ul>\n      <h5>Users are able to change their personal information:</h5>\n      <ul>\n        <li>By logging in to their account</li>\n      </ul>\n    </div>\n    <div>\n      <h5>How does our site handle do not track signals?</h5>\n      <label class=\"desc\">We do not include or offer third-party products or\n        services on our website.</label>\n    </div>\n    <div>\n      <h5>Does our site allow third-party behavioral tracking?</h5>\n      <label class=\"desc\">It's also important to note that we do not allow\n        third-party behavioral tracking</label>\n    </div>\n    <div>\n      <h5>COPPA (Children Online Privacy Protection Act)</h5>\n      <label class=\"desc\">When it comes to the collection of personal\n        information from children under 13, the Children's Online Privacy\n        Protection Act (COPPA) puts parents in control. The Federal Trade\n        Commission, the nation's consumer protection agency, enforces the\n        COPPA Rule, which spells out what operators of websites and online\n        services must do to protect children's privacy and safety online.</label> <label class=\"desc\">We\n        market to</label><br> <label class=\"desc\">We do not collect information\n        from children under 13</label><br> <label class=\"desc\">children under 13.</label><br>\n      <label class=\"desc\">No</label>\n    </div>\n    <div>\n      <h5>In order to remove your child's information please contact\n        the following personnel:</h5>\n    </div>\n    <div>\n      <h5>We adhere to the following COPPA tenants:</h5>\n      <ul>\n        <li>Parents can review, delete, manage or refuse with whom\n          their child's information is shared through contacting us\n          directly. or contacting us directly.</li>\n      </ul>\n    </div>\n    <div>\n      <h5>Fair Information Practices</h5>\n      <label class=\"desc\">The Fair Information Practices Principles form the\n        backbone of privacy law in the United States and the concepts they\n        include have played a significant role in the development of data\n        protection laws around the globe. Understanding the Fair\n        Information Practice Principles and how they should be implemented\n        is critical to comply with the various privacy laws that protect\n        personal information.</label>\n    </div>\n    <div>\n      <h5>In order to be in line with Fair Information Practices we\n        will take the following responsive action, should a data breach\n        occur:</h5>\n      <label class=\"desc\">We will notify the users via email</label>\n      <ul>\n        <li>Within 7 business days</li>\n      </ul>\n      <label class=\"desc\">We also agree to the Individual Redress Principle,\n        which requires that individuals have a right to pursue legally\n        enforceable rights against data collectors and processors who fail\n        to adhere to the law. This principle requires not only that\n        individuals have enforceable rights against data users, but also\n        that individuals have recourse to courts or government agencies to\n        investigate and/or prosecute non-compliance by data processors.</label>\n    </div>\n    <div>\n      <h5>CAN SPAM Act</h5>\n      <label class=\"desc\">The CAN-SPAM Act is a law that sets the rules for\n        commercial email, establishes requirements for commercial messages,\n        gives recipients the right to have emails stopped from being sent\n        to them, and spells out tough penalties for violations.</label>\n    </div>\n    <div>\n      <h5>We collect your email address in order to:</h5>\n    </div>\n    <div>\n      <h5>To be in accordance with CANSPAM we agree to the following:</h5>\n    </div>\n    <div>\n      <h5>If at any time you would like to unsubscribe from receiving\n        future emails, you can email us at</h5>\n      and we will promptly remove you from ALL correspondence.\n    </div>\n    <div>\n      <h5>Contacting Us</h5>\n      <label class=\"desc\">If there are any questions regarding this privacy\n        policy you may contact us using the information below.</label> <a href=\"#\"\n        style=\"color: blue\">www.spelldone.com</a>\n      <h5>\n        <b>ADDRESS:</b>\n      </h5>\n      <address>\n        8006 Brookpark Ave<br> Franklin, Tennessee 37064<br> <label class=\"desc\">USA</label>\n      </address>\n      <a href=\"mailto:support@great2learn.com\" style=\"color: blue\">support@great2learn.com</a><br>\n      Last Edited on 2019-05-17\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" mat-dialog-close>Close</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-status/signup-status.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-status/signup-status.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupSignupStatusSignupStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Account status</h1>\n<div mat-dialog-content id=\"content\">\n  <div class=\"step\">\n    <div class=\"particular\">Account creation</div>\n    <i class=\"fa\"\n      [ngClass]=\"{'fa-check':data.account, 'fa-times': !data.account, green: data.account,'red': !data.account}\"></i>\n  </div>\n  <div class=\"step\">\n    <div class=\"particular\">Payment</div>\n    <i class=\"fa\"\n      [ngClass]=\"{'fa-check':data.payment, 'fa-times': !data.payment, green: data.payment,'red': !data.payment}\"></i>\n  </div>\n\n  <div *ngIf=\"data.account\">\n    <div>\n      Verification Email has been sent to your registered Email ID. Please verify your Email ID to continue using the\n      application.\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" (click)=\"onPrimaryClick()\">Login</button>\n  <button mat-button class=\"sd-btn-sec\" *ngIf=\"data.account\" (click)=\"onSecondaryClick()\">Close</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" id=\"register-container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 mb-floatright\">\n        <a [routerLink]=\"['/']\" class=\"logo\">\n          <img src=\"assets/images/Logo-Full-Black.png\" style=\"width: 50px;\">\n        </a>\n        <a [routerLink]=\"['/login']\" id=\"login\"> Already a member? Login</a>\n      </div>\n    </div>\n    <div class=\"row register-panel\">\n\n      <div class=\"col-md-10 offset-md-1\">\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp(signUpForm)\">\n          <div class=\"card\">\n            <h2>Register</h2>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-part\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <i class=\"material-icons mb-icon\">face</i>\n                        <mat-form-field color=\"accent\">\n                          <input type=\"text\" matInput required placeholder=\"Name\"\n                            formControlName=\"name\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <i class=\"material-icons mb-icon\">email</i>\n                        <mat-form-field color=\"accent\">\n                          <input type=\"email\" matInput required placeholder=\"Email\"\n                            formControlName=\"email\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n\n                    <div formGroupName=\"passwordGroup\" class=\"row\" id=\"passwordGroup\">\n                      <div class=\"col-md-6\">\n                        <i class=\"material-icons mb-icon\">lock_outline</i>\n                        <mat-form-field color=\"accent\">\n                          <input type=\"password\" name=\"password\" matInput required placeholder=\"Password\"\n                            formControlName=\"password\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <i class=\"material-icons mb-icon\">lock_outline</i>\n                        <mat-form-field color=\"accent\">\n                          <input type=\"password\" name=\"confirmPassword\" matInput required placeholder=\"Confirm Password\"\n                            formControlName=\"confirmPassword\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-part\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label for=\"\">Plan type</label>\n                        <div>\n                          <div class=\"plan-type\">\n                            <input type=\"radio\" name=\"planType\" id=\"regional\" value=\"Regional\"\n                              formControlName=\"planType\">\n                            <label for=\"regional\" class=\"type-name\">Regional</label>\n                          </div>\n                          <div class=\"plan-type\">\n                            <input type=\"radio\" name=\"planType\" id=\"national\" value=\"National\" disabled\n                              formControlName=\"planType\">\n                            <label for=\"national\" class=\"type-name disabled-text\">National\n                              (Coming soon)\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\" id=\"payment\">\n                  <div class=\"row pay-row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"payment-group\">\n                        <div class=\"form-part\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <i class=\"material-icons mb-icon\">face</i>\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput placeholder=\"Card Holder Name\" required maxlength=\"50\"\n                                  formControlName=\"cardHolderName\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <i class=\"material-icons mb-icon\">home</i>\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput placeholder=\"Address\" required maxlength=\"50\"\n                                  formControlName=\"cardAddress\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n\n                          <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput placeholder=\"City\" required maxlength=\"50\"\n                                  formControlName=\"cardCity\">\n                              </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                              <mat-form-field>\n                                <mat-select placeholder=\"Country\" formControlName=\"cardCountry\" required>\n                                  <mat-option *ngFor=\"let country of countries\" [value]=\"country.name\">\n                                    {{country.name}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>\n\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput placeholder=\"Zip/Postal code\" formControlName=\"addressZip\"\n                                  required maxlength=\"6\" (keypress)=\"validateNumber($event)\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-6 card-details\">\n                      <div class=\"payment-group\">\n                        <div class=\"form-part\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <i class=\"material-icons mb-icon\">credit_card</i>\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput placeholder=\"Credit Card Number\" required maxlength=\"16\"\n                                  (keypress)=\"validateNumber($event)\" formControlName=\"creditCardNumber\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n\n                          <div class=\"row\">\n                            <div class=\"col-8\" formGroupName=\"cardExpiryDate\">\n                              <label class=\"mb-label\">Expiration Date</label>\n                              <div id=\"exp-date\">\n                                <div class=\"input-group mb-3 mb-input-group\">\n\n                                  <select class=\"custom-select\" id=\"expirationDate\"\n                                    formControlName=\"creditCardExpirationMonth\">\n\n                                    <option *ngFor=\"let month of months\" [value]=\"month.value\">{{month.viewValue}}\n                                    </option>\n\n                                  </select>\n                                </div>\n                                <label>/</label>\n                                <div class=\"input-group mb-3 mb-input-group\">\n\n                                  <select class=\"custom-select\" id=\"expirationYear\"\n                                    formControlName=\"creditCardExpirationYear\">\n\n                                    <option *ngFor=\"let year of years;let i=index;\" [value]=\"year.value\">\n                                      {{year.viewValue}}</option>\n\n                                  </select>\n                                </div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-4\">\n                              <label class=\"mb-label\">CVC</label>\n                              <mat-form-field color=\"accent\">\n                                <input type=\"text\" matInput formControlName=\"securityCode\" required maxlength=\"3\"\n                                  (keypress)=\"validateNumber($event)\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n\n                          <div class=\"row amount-due\">\n                            <div class=\"col-md-12\">\n                              <div class=\"amount\">Amount due: ${{getPrice()}} US/Year</div>\n                            </div>\n                          </div>\n\n                          <div class=\"row stripe-badge\">\n                            <div class=\"col-sm-12\" style=\"text-align: center\">\n                              <img src=\"assets/languages/100-Common/images/stripe_badge.png\" alt=\"\" width=\"120px\">\n                            </div>\n                          </div>\n\n\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 mb-margintop\">\n              <div class=\"row\">\n                <div class=\"col-md-9 offset-md-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8 terms\">\n                      <mat-checkbox style=\"margin-left: 2px\" formControlName=\"agreeConditions\">\n                        <div style=\"margin-left: 8px\">\n                          I agree to the\n                          <div class=\"term-links\">\n                            <span style=\"color: #9c27b0; cursor: pointer; font-weight: 400;\"\n                              (click)=\"termsandconditions()\">Terms and Conditions</span>\n                            <span style=\"font-size: 15px\">&nbsp;&nbsp;|&nbsp; &nbsp; </span>\n                            <span style=\"color: #9c27b0; cursor: pointer; font-weight: 400;\"\n                              (click)=\"privacyPolicy()\">Privacy Policy</span>\n                          </div>\n                        </div>\n                      </mat-checkbox>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <button mat-raised-button id=\"signup\" class=\"btn btn-primary btn-round\" type=\"submit\"\n                        [disabled]=\"!(signUpForm.valid && signUpForm.controls.agreeConditions.value)\">Sign\n                        Up\n                      </button>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- terms and conditions -->\n<!-- <div class=\"modal fade in\" id=\"termsandconditions\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"termsandconditionsModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"termsandconditionsModal\">Terms and conditions</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <iframe src=\"assets/languages/199-Other/terms-conditions.html\" width=\"100%\" height=\"100%\"\n            frameborder=\"0\"></iframe>\n  \n        </div>\n        <div class=\"modal-footer mb-modal-footer\">\n          <button type=\"button\" class=\"mb-button pull-right\" data-dismiss=\"modal\">Close</button>\n  \n        </div>\n  \n      </div>\n    </div>\n  </div> -->\n\n<!-- privacy policy -->\n<!-- <div class=\"modal fade in\" id=\"privacypolicy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"privacypolicyModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"privacypolicyModal\">Privacy Policy</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <iframe src=\"assets/languages/199-Other/privacy-policy.html\" width=\"100%\" height=\"100%\"\n            frameborder=\"0\"></iframe>\n  \n        </div>\n        <div class=\"modal-footer mb-modal-footer\">\n          <button type=\"button\" class=\"mb-button pull-right\" data-dismiss=\"modal\">Close</button>\n  \n        </div>\n  \n      </div>\n    </div>\n  </div> -->\n\n<!-- terms and conditions -->\n<!-- <div class=\"modal fade in\" id=\"registrationStatus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationStatusModal\"\n    aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\n    <div class=\"modal-dialog modal-md\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"registrationStatusModal\">Registration Status</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"goToLogin()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <div class=\"row registration-status\">\n              <div class=\"col-sm-3 step\">\n                Account :\n              </div>\n              <div class=\"col-sm-7\">\n                {{ accountStatus.message }}\n                <br><span *ngIf=\"errorMessage\">{{errorMessage}}</span>\n              </div>\n              <div class=\"col-sm-2\">\n                <i class=\"fa fa-check success\" *ngIf=\"accountStatus.status\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-times failure\" *ngIf=\"!accountStatus.status\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n  \n            <div class=\"row registration-status\" *ngIf=\"accountStatus.status\">\n              <div class=\"col-sm-3 step\">\n                Payment :\n              </div>\n              <div class=\"col-sm-7\">\n                {{ paymentStatus.message }}\n              </div>\n              <div class=\"col-sm-2\">\n                <i class=\"fa fa-check success\" *ngIf=\"paymentStatus.status\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-times failure\" *ngIf=\"!paymentStatus.status\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n  \n          </div>\n  \n        </div>\n        <div class=\"modal-footer mb-modal-footer\">\n          <button type=\"button\" class=\"mb-button pull-right\" data-dismiss=\"modal\" (click)=\"goToLogin()\">Close</button>\n        </div>\n  \n      </div>\n    </div>\n  </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/termsandconditions/termsandconditions.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/termsandconditions/termsandconditions.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupTermsandconditionsTermsandconditionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Terms And Conditions</h1>\n<div mat-dialog-content>\n  <div class=\"\" style=\"margin-top: 20px; color: #444; text-align: justify;\">\n    <div>\n      <h5>1. ACCEPTANCE OF TERMS</h5>\n      <label class=\"desc\">Welcome to Spelldone, which is owned and operated by Great 2 Learn LLC Inc. Great 2 Learn LLC\n        (hereafter called \"G2L/Spelldone\") provides\n        its service to you, subject to the following Terms of Service\n        (\"TOS\"), which may be updated by us from time to time without\n        notice to you. When using particular G2L/Spelldone services, you and G2L/Spelldone\n        shall be subject to any posted guidelines or rules applicable to\n        such services which may be posted from time to time. All such\n        guidelines or rules are hereby incorporated by reference into the\n        TOS.</label>\n    </div>\n    <div>\n      <h5>2. DESCRIPTION OF SERVICE</h5>\n      <label class=\"desc\">G2L/Spelldone currently provides users with a service to help\n        learn and practice Spelling in English. Unless explicitly stated\n        otherwise, any new features that augment or enhance the current\n        Service, including the release of new G2L/Spelldone properties, shall be\n        subject to the TOS. You understand and agree that the Service is\n        provided \"as-is\" and that G2L/Spelldone assumes no responsibility for the\n        timeliness, deletion, misdelivery or failure to store any user\n        communications or personalization settings.</label> <label class=\"desc\">In order\n        to use the Service, you must obtain access to the Internet, either\n        directly or through devices that access web-based content, and pay\n        any service fees associated with such access. In addition, you must\n        provide all equipment necessary to make such connection to the\n        Internet, including a computer and modem or other access device.</label>\n    </div>\n    <div>\n      <h5>3. YOUR REGISTRATION OBLIGATIONS</h5>\n      <label class=\"desc\">In consideration of your use of the Service, you\n        agree to: (a) provide true, accurate, current and complete\n        information about yourself as prompted by the Service's\n        registration form (such information being the \"Registration Data\")\n        and (b) maintain and promptly update the Registration Data to keep\n        it true, accurate, current and complete. If you provide any\n        information that is untrue, inaccurate, not current or incomplete,\n        or G2L/Spelldone has reasonable grounds to suspect that such information is\n        untrue, inaccurate, not current or incomplete, G2L/Spelldone has the right to\n        suspend or terminate your account and refuse any and all current or\n        future use of the Service (or any portion thereof).</label>\n    </div>\n    <div>\n      <h5>4. MEMBERSHIP AND BILLING</h5>\n      <span>Memberships</span><br> <br> <label class=\"desc\">You can\n        find the specific details regarding your membership with G2L/Spelldoneat any\n        time. Simply sign in to your G2L/Spelldone to Manage your account.</label>\n    </div>\n    <div>\n      <span>a. Billing</span><br> <br> <label class=\"desc\">By\n        starting your G2L/Spelldone membership, you are expressly agreeing that we\n        are authorized to charge you the membership fee associated with the\n        type of membership (monthly or yearly) you chose during\n        registration. You agree that we are authorized to charge you the\n        membership fee at the then-current rate to the Payment Method you\n        provided during registration (or to a different Payment Method if\n        you change your account information). Please note that prices and\n        charges are subject to change with notice. As used in these Terms\n        of Service, \"billing\" shall indicate either a charge or debit, as\n        applicable, against your Payment Method. The membership fee will be\n        billed at the beginning of the paying portion of your membership\n        and each month or year thereafter unless and until you cancel your\n        membership. Sign in to your G2L/Spelldone account to see the commencement\n        date for your next renewal period. We automatically bill your\n        Payment Method each month or year on the calendar day corresponding\n        to the commencement of your paying membership. Membership charges\n        are fully earned upon payment.</label> <label class=\"desc\">Note: In the event\n        your monthly membership began on a day not contained in a given\n        month, we bill your Payment Method on the last day of such month.\n        For example, if you became a paying member on January 31, your\n        Payment Method would next be billed on February 28.</label> <label class=\"desc\">You\n        acknowledge that the amount billed each billing period may vary for\n        reasons that include differing amounts due to changes in your\n        membership plan, and you authorize us to charge your Payment Method\n        for such varying amounts. Payments are nonrefundable and there are\n        no refunds or credits for partially used periods. We may change the\n        fees and charges in effect, or add new fees and charges from time\n        to time, but we will give you advance notice of these changes by\n        e-mail. If you want to use a different Payment Method or if there\n        is a change in Payment Method, such as your credit card validity or\n        expiration date, you may edit your Payment Method information. If\n        your Payment Method reaches its expiration date and you do not edit\n        your Payment Method information or cancel your account (see,\n        \"Cancellation\" below), you authorize us to continue billing that\n        Payment Method and you remain responsible for any uncollected\n        amounts.</label>\n    </div>\n    <div>\n      <span>b. Ongoing Membership</span><br> <br> <label class=\"desc\">Your\n        G2L/Spelldone membership will continue in effect unless and until you cancel\n        your membership or we terminate it. You must cancel your membership\n        before it renews each billing period in order to avoid billing of\n        the next membership fee to your Payment Method. We will bill the\n        membership fee at the then-current rate plus any applicable tax to\n        the Payment Method you provide to us during registration (or to a\n        different Payment Method if you change your account information).\n        Membership fees are fully earned upon payment.</label>\n    </div>\n    <div>\n      <span>c. Holds</span><br> <br> <label class=\"desc\">You may\n        place a monthly membership on hold at any time, and the hold will\n        take effect at the start of your next billing cycle. When the hold\n        period has ended, your membership will resume and we will\n        automatically bill the membership fee at the then-current rate plus\n        any applicable tax to the Payment Method you provide to us during\n        registration (or to a different Payment Method if you change your\n        account information).</label> <label class=\"desc\">You may cancel a hold status\n        at any time by clicking the words \"Remove hold\" on your Account\n        management page. When you cancel a hold period, your membership\n        will resume immediately and we will automatically bill the\n        membership fee at the then-current rate plus any applicable tax to\n        the Payment Method you provide to us during registration (or to a\n        different Payment Method if you change your account information).</label>\n    </div>\n    <div>\n      <span>d. Cancellation</span><br> <br> <label class=\"desc\">You\n        may cancel your G2L/Spelldone membership at any time, and cancellation will\n        be effective immediately. You will continue to have access to the\n        program until the current billing period ends. We do not provide\n        refunds or credits for any partially used membership periods. To\n        cancel your membership, sign in to your parent account and click\n        the words \"Cancel membership\" on your Account management page.\n        Follow the instructions for cancellation under the heading \"Cancel\n        Membership.\"</label>\n    </div>\n    <div>\n      <h5>5. G2L/Spelldone PRIVACY POLICY</h5>\n      <label class=\"desc\">Registration Data and certain other information about\n        you is subject to our Privacy Policy.</label>\n    </div>\n    <div>\n      <h5>6. MEMBER ACCOUNT, PASSWORD AND SECURITY</h5>\n      <label class=\"desc\">You will have a password and account designation upon\n        completing the Service's registration process. You are responsible\n        for maintaining the confidentiality of the password and account and\n        are fully responsible for all activities that occur under your\n        password or account. You agree to (a) immediately notify G2L/Spelldone of any\n        unauthorized use of your password or account or any other breach of\n        security, and (b) ensure that you exit from your account at the end\n        of each session. G2L/Spelldone cannot and will not be liable for any loss or\n        damage arising from your failure to comply with this Section 6.</label> <label class=\"desc\">G2L/Spelldone\n        accounts may not be shared by more than one person unless express\n        authorization is given by G2L LLC.</label>\n    </div>\n    <div>\n      <h5>7. MEMBER CONDUCT</h5>\n      <label class=\"desc\">You understand that all information including but not\n        limited to data, text, software, photographs, graphics,\n        illustrations, artwork, video, music, sound, messages, names,\n        logos, trademarks, service marks and other materials (\"Content\"),\n        whether publicly posted or privately transmitted, are the sole\n        responsibility of the person from which such Content originated.\n        This means that you, and not G2L, are entirely responsible for all\n        Content that you upload, post, e-mail, transmit or otherwise make\n        available via the Service. G2L/Spelldone does not control the Content posted\n        via the Service and, as such, does not guarantee the accuracy,\n        integrity or quality of such Content. Under no circumstances will\n        G2L/Spelldone be liable in any way for any Content, including, but not\n        limited to, for any errors or omissions in any Content, or for any\n        loss or damage of any kind incurred as a result of the use of any\n        Content posted, e-mailed, transmitted or otherwise made available\n        via the Service.</label> <label class=\"desc\">You understand that the technical\n        processing and transmission of the Service, including your Content,\n        may involve (a) transmissions over various networks; and (b)\n        changes to conform and adapt to technical requirements of\n        connecting networks or devices.</label>\n    </div>\n    <div>\n      <h5>8. SPECIAL ADMONITIONS FOR INTERNATIONAL USE</h5>\n      <label class=\"desc\">Recognizing the global nature of the Internet, you\n        agree to comply with all local rules regarding online conduct and\n        acceptable Content. Specifically, you agree to comply with all\n        applicable laws regarding the transmission of technical data\n        exported from the United States or the country in which you reside.</label>\n    </div>\n    <div>\n      <h5>9. INDEMNITY</h5>\n      <label class=\"desc\">You agree to indemnify and hold G2L/Spelldone, and its\n        subsidiaries, affiliates, officers, agents, co-branders or other\n        partners, and employees, harmless from any claim or demand,\n        including reasonable attorneys' fees, made by any third party due\n        to or arising out of Content you submit, post, transmit or make\n        available through the Service, your use of the Service, your\n        connection to the Service, your violation of the TOS, or your\n        violation of any rights of another.</label>\n    </div>\n    <div>\n      <h5>10. NO RESALE OF SERVICE</h5>\n      <label class=\"desc\">You agree not to reproduce, duplicate, copy, sell,\n        resell or exploit for any commercial purposes, any portion of the\n        Service, use of the Service, or access to the Service.</label>\n    </div>\n    <div>\n      <h5>11. MODIFICATIONS TO SERVICE</h5>\n      <label class=\"desc\">G2L/Spelldone reserves the right at any time and from time to\n        time to modify or temporarily discontinue the Service (or any part\n        thereof) with or without notice. You agree that G2L/Spelldone shall not be\n        liable to you or to any third party for any modification,\n        suspension or temporary discontinuance of the Service. In the event\n        of permanent discontinuance of the Service, liability is limited to\n        the paid subscription price, pro-rated to the amount of time\n        remaining on the subscription.</label>\n    </div>\n    <div>\n      <h5>12. TERMINATION</h5>\n      <label class=\"desc\">You agree that G2L/Spelldone, in its sole discretion, may\n        terminate your password, account (or any part thereof) or use of\n        the Service, for any reason, including, without limitation, for\n        lack of use or if G2L/Spelldone believes that you have violated or acted\n        inconsistently with the letter or spirit of the TOS. G2L/Spelldone may also\n        in its sole discretion and at any time discontinue providing the\n        Service, or any part thereof, with or without notice. You agree\n        that any termination of your access to the Service under any\n        provision of this TOS may be effected without prior notice, and\n        acknowledge and agree that G2L/Spelldone may immediately deactivate or delete\n        your account and all related information and files in your account\n        and/or bar any further access to such files or the Service.\n        Further, you agree that G2L/Spelldone shall not be liable to you or any\n        third-party for any termination of your access to the Service.</label>\n    </div>\n    <div>\n      <h5>13. LINKS</h5>\n      <label class=\"desc\">The Service may provide, or third parties may\n        provide, links to other Internet websites or resources. Because G2L/Spelldone\n        has no control over such sites and resources, you acknowledge and\n        agree that G2L/Spelldone is not responsible for the availability of such\n        external sites or resources, and does not endorse and is not\n        responsible or liable for any Content, advertising, products, or\n        other materials on or available from such sites or resources. You\n        further acknowledge and agree that G2L/Spelldone shall not be responsible or\n        liable, directly or indirectly, for any damage or loss caused or\n        alleged to be caused by or in connection with use of or reliance on\n        any such Content, goods or services available on or through any\n        such site or resource.</label>\n    </div>\n    <div>\n      <h5>14. G2L/Spelldone'S PROPRIETARY RIGHTS</h5>\n      <label class=\"desc\">You acknowledge and agree that the Service and any\n        necessary software used in connection with the Service (\"Software\")\n        contain proprietary and confidential information that is protected\n        by applicable intellectual property and other laws. You further\n        acknowledge and agree that information presented to you through the\n        Service is protected by copyrights, trademarks, service marks,\n        patents or other proprietary rights and laws. Except as expressly\n        authorized by G2L/Spelldone or advertisers, you agree not to modify, rent,\n        lease, loan, sell, distribute or create derivative works based on\n        the Service or the Software, in whole or in part.</label> <label class=\"desc\">G2L/Spelldone\n        grants you a personal, non-transferable and non-exclusive right and\n        license to use the Service. You agree that you will not copy,\n        modify, create a derivative work of, reverse engineer, reverse\n        assemble or otherwise attempt to discover any source code, sell,\n        assign, sublicense, grant a security interest in or otherwise\n        transfer any right in the Software. You agree not to modify the\n        Software in any manner or form, or to use modified versions of the\n        Software, including (without limitation) for the purpose of\n        obtaining unauthorized access to the Service. You agree not to\n        access the Service by any means other than through the interface\n        that is provided by G2L/Spelldone for use in accessing the Service.</label> <label class=\"desc\">Furthermore,\n        you understand that the Content is protected by copyright and other\n        laws in both the United States and elsewhere. Under the terms of\n        this agreement, it is expressly forbidden to distribute the Content\n        or any portion thereof by any means, including but not limited to\n        electronic and print, to any person or entity who does not have a\n        valid account. G2L/Spelldone reserves the right to cancel your organization's\n        license without refund if it is determined that you have violated\n        this portion of the agreement.</label>\n    </div>\n    <div>\n      <h5>\n        15. DISCLAIMER OF WARRANTIES <br> <br> YOU EXPRESSLY\n        UNDERSTAND AND AGREE THAT :\n      </h5>\n      <ol type=\"a\" style=\"margin-left: -20px;\">\n        <li>YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE\n          IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. G2L/Spelldone EXPRESSLY\n          DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,\n          INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF\n          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n          NON-INFRINGEMENT.</li>\n        <li>G2L/Spelldone MAKES NO WARRANTY THAT\n          <ol type=\"i\">\n            <li>THE SERVICE WILL MEET YOUR REQUIREMENTS,</li>\n            <li>THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR\n              ERROR-FREE,</li>\n            <li>THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE\n              SERVICE WILL BE ACCURATE OR RELIABLE,</li>\n            <li>THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR\n              OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE\n              WILL MEET YOUR EXPECTATIONS, AND</li>\n            <li>ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.</li>\n          </ol>\n        </li>\n        <li>ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE\n          USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND\n          THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR\n          COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF\n          ANY SUCH MATERIAL.</li>\n        <li>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,\n          OBTAINED BY YOU FROM G2L/Spelldone OR THROUGH OR FROM THE SERVICE SHALL\n          CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.</li>\n      </ol>\n    </div>\n    <div>\n      <h5>16. LIMITATION OF LIABILITY</h5>\n      <label class=\"desc\">YOU EXPRESSLY UNDERSTAND AND AGREE THAT G2L/Spelldone SHALL NOT\n        BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n        CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO,\n        DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER\n        INTANGIBLE LOSSES (EVEN IF G2L/Spelldone HAS BEEN ADVISED OF THE POSSIBILITY\n        OF SUCH DAMAGES), RESULTING FROM:</label>\n      <ol type=\"i\">\n        <li>THE USE OR THE INABILITY TO USE THE SERVICE;</li>\n        <li>THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES\n          RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED\n          OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO\n          THROUGH OR FROM THE SERVICE;</li>\n        <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS\n          OR DATA;</li>\n        <li>STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE;\n          OR (v) ANY OTHER MATTER RELATING TO THE SERVICE.</li>\n      </ol>\n    </div>\n    <div>\n      <h5>17. EXCLUSIONS AND LIMITATIONS</h5>\n      <label class=\"desc\">SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF\n        CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR\n        INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE\n        LIMITATIONS OF SECTIONS 15 AND 16 MAY NOT APPLY TO</label>\n    </div>\n    <div>\n      <h5>18. TRADEMARK INFORMATION</h5>\n      <label class=\"desc\">G2L is a registered trademark of G2L LLC.</label>\n    </div>\n    <div>\n      <h5>19. GENERAL INFORMATION</h5>\n      <label class=\"desc\">The TOS constitute the entire agreement between you\n        and G2L/Spelldone and govern your use of the Service, superseding any prior\n        agreements between you and G2L/Spelldone. You also may be subject to\n        additional terms and conditions that may apply when you use\n        affiliate services, third-party content or third-party software.\n        The TOS and the relationship between you and G2L/Spelldone shall be governed\n        by the laws of the State of California without regard to conflict\n        of law provisions. The failure of G2L/Spelldone to exercise or enforce any\n        right or provision of the TOS shall not constitute a waiver of such\n        right or provision. If any provision of the TOS is found by a court\n        of competent jurisdiction to be invalid, the parties nevertheless\n        agree that the court should endeavor to give effect to the parties'\n        intentions as reflected in the provision, and the other provisions\n        of the TOS remain in full force and effect. You agree that\n        regardless of any statute or law to the contrary, any claim or\n        cause of action arising out of or related to use of the Service or\n        the TOS must be filed within one (1) year after such claim or cause\n        of action arose or be forever barred.</label> <label class=\"desc\">The section\n        titles in the TOS are for convenience only and have no legal or\n        contractual effect.</label>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" mat-dialog-close>Close</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/change-password/change-password.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/change-password/change-password.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Reset password</h1>\n<div mat-dialog-content>\n  Please click the below reset button to send a password reset link to <span class=\"bold\">{{data.email}}</span>\n</div>\n<div mat-dialog-actions id=\"dialog-actions\">\n  <button mat-button class=\"sd-btn\" (click)=\"sendResetPasswordLink()\">Reset</button>\n  <button mat-button class=\"sd-btn-sec\" mat-dialog-close>Close</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid profile-container\">\n    <div class=\"row\">\n        <div class=\"w100\">\n            <app-header [hideToggleButton]=\"true\" [isProfilePage]=\"true\"></app-header>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"userData\">\n        <div class=\"col-sm-12\">\n            <div id=\"profile-detail\" class=\"info-block container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 info-header\">\n                        Account Information\n                        <div id=\"edit-profile\" class=\"pull-right\">\n                            <!-- <div class=\"glyphicon glyphicon-pencil\"></div> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Name:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{userData.name}}\n                    </div>\n                </div>\n\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Email:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{userData.email}}\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Password:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        *******\n                        <span class=\"edit-link\" (click)=\"resetPassword()\">Change</span>\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Status:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{userData.isActive?'ACTIVE':'INACTIVE - Please update your billing info below.'}}\n                    </div>\n                </div>\n\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Plan type:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{ selectedPlanType }}\n                        <!-- <input type=\"radio\" name=\"planType\" id=\"regional\" [value]=\"planType.REGIONAL\"\n              [(ngModel)]=\"selectedPlanType\"><label for=\"regional\" class=\"type-name\">Regional</label>\n            <input type=\"radio\" name=\"planType\" id=\"national\" [value]=\"planType.NATIONAL\"\n              [(ngModel)]=\"selectedPlanType\"><label for=\"national\" class=\"type-name\">National</label> -->\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"col-sm-12\">\n            <div id=\"billing-detail\" class=\"info-block container\">\n                <div class=\"row\">\n                    <div class=\"col-5 col-md-3 info-header\">\n                        Billing Details\n                    </div>\n                    <div class=\"col-7 col-md-9 info-header\">\n                        <img src=\"assets/images/stripe_badge.png\" alt=\"\" width=\"90px\">\n                    </div>\n                </div>\n\n\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Name on Card:\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{ cardDetails? cardDetails.card.name : '' }}\n                        <span class=\"edit-link\" *ngIf=\"userData.isActive\" (click)=\"changeCardDetails()\">\n              Change\n            </span>\n                        <span class=\"edit-link\" *ngIf=\"!userData.isActive\" (click)=\"openCheckout(true)\">\n              Add/Update\n            </span>\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Card :\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{cardDetails? '**** **** **** ' + cardDetails.card.last4: ''}}\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        Expiry (MM/YYYY):\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{cardDetails? cardDetails.card.exp_month + '/' + cardDetails.card.exp_year: ''}}\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        {{ userData.isTrial? 'Trial Start Date:' : 'Subscription Date:' }}\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{subscriptionData && subscriptionData.subscriptionDate &&getDate(subscriptionData.subscriptionDate)}}\n                    </div>\n                </div>\n                <div class=\"row mb-field\">\n                    <div class=\"col-5 col-md-3 field-label\">\n                        {{ userData.isTrial? 'Trial End Date:' : 'Next Billing Date:' }}\n                    </div>\n                    <div class=\"col-7 col-md-9 field-value\">\n                        {{subscriptionData && subscriptionData.nextBillingDate && getDate(subscriptionData.nextBillingDate)}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <nav-footer></nav-footer>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"dictionary-container\">\n  <div id=\"search-box\">\n    <input type=\"text\" [(ngModel)]=\"wordId\" (focus)=\"errorMsg=''\">\n    <button class=\"sd-btn\" (click)=\"getWordDetails()\">Search</button>\n  </div>\n  <div class=\"error-msg\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\n\n  <word-detail [details]=\"details\"></word-detail>\n\n  <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{ data.message }}</h1>\n<div mat-dialog-content>\n  <p>{{ data.description }}</p>\n  \n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"1\">{{ data.buttons ? data.buttons.primary : 'Confirm'}}</button>\n  <button mat-button [mat-dialog-close]=\"2\" *ngIf=\"data.buttons && data.buttons.primary2\">{{ data.buttons ? data.buttons.primary2 : ''}}</button>\n  <button mat-button (click)=\"onNoClick()\" cdkFocusInitial>{{ data.buttons ? data.buttons.secondary : 'Cancel'}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/edit-dialog/edit-dialog.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/edit-dialog/edit-dialog.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsEditDialogEditDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Edit Field</h1>\n<div mat-dialog-content>\n  <input type=\"text\" [(ngModel)]=\"data.value\">\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" (click)=\"onPrimaryClick()\">Save</button>\n  <button mat-button class=\"sd-btn-sec\" (click)=\"onSecondaryClick()\">Cancel</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/message-dialog/message-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/message-dialog/message-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsMessageDialogMessageDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{ data.message }}</h1>\n<div mat-dialog-content>\n  <p>{{ data.description }}</p>  \n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"sd-btn\" *ngIf=\"data.primaryBtn\" (click)=\"onPrimaryClick()\">{{data.primaryBtn}}</button>\n  <button mat-button class=\"sd-btn-sec\" style=\"margin-right: 10px;\" *ngIf=\"data.secondaryBtn\" (click)=\"onSecondaryClick()\">{{data.secondaryBtn}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"dashboard-header\">\n  <div class=\"logo\">\n    <a class=\"logo\" [routerLink]=\"['/']\">\n      <div id=\"logo-img\"></div>\n      <span class=\"name\">Spelldone</span>\n    </a>\n  </div>\n\n  <div id=\"toggle-menu\" [hidden]=\"hideToggleButton\" (click)=\"toggleNavbar()\">\n    <i class=\"fa fa-bars link\"></i>\n  </div>\n  <div class=\"acitons\">\n    <div class=\"action\" *ngIf=\"userData\">\n      <a class=\"link hightlight\" *ngIf=\"isProfilePage\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n\n      <button id=\"username\" class=\"hightlight\" mat-button [matMenuTriggerFor]=\"menu\">\n        {{userData.name}}\n        <i style=\"margin-left: 10px\" class=\"fa fa-caret-down\"></i>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <a [routerLink]=\"['/profile']\">\n          <button mat-menu-item>\n            <i class=\"fa fa-user-circle action-icon\"></i>\n            Profile\n          </button>\n        </a>\n        <mat-divider></mat-divider>\n        <button mat-menu-item (click)=\"logout()\">\n          <i class=\"fa fa-sign-out action-icon\"></i>\n          Logout\n        </button>\n      </mat-menu>\n\n    </div>\n\n    <!-- <div class=\"action link\" *ngIf=\"userData\" (click)=\"logout()\">Logout</div> -->\n\n    <div class=\"action\" *ngIf=\"!userData\">\n      <a class=\"link\" [routerLink]=\"['/signup']\">\n        Register\n      </a>\n    </div>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/word-detail/word-detail.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/word-detail/word-detail.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedWordDetailWordDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"details-container container-fluid\" *ngIf=\"_details && _details.id\">\n  <div class=\"field row\" *ngIf=\"session===sessionType.PRACTICE\">\n    <div class=\"field-label col-md-2\">Word: </div>\n    <div class=\"field-value col-md-10 word-id\">{{_details.id}}\n      <div class=\"favorite-icon\" *ngIf=\"userData\">\n        <i class=\"fa fa-star star\" [class.favorite]=\"_details.isFavorite\" (click)=\"markAsFavorite()\"></i>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"field row\" *ngIf=\"session===sessionType.TEST\">\n    <div class=\"field-label col-md-2\">Word: </div>\n    <div class=\"field-value11 col-md-3\" id=\"user-input\">\n      <input type=\"text\" id=\"user-response\" [(ngModel)]=\"userAnswer\" (keydown.enter)=\"submitAnswer()\" autofocus\n        #responseBox>\n      <div class=\"result\" *ngIf=\"submitted && userAnswer !== _details.id\">\n        {{ formatSentence(_details.id) }}\n      </div>\n    </div>\n    <div class=\"field-value col-md-4\" id=\"user-input\" style=\"align-items: start;\">\n      <button (click)=\"showHint()\">Hint</button>\n      <button (click)=\"showWord()\">Show word</button>\n    </div>\n\n  </div>\n\n  <div class=\"field row\">\n    <div class=\"field-label col-md-2\">Language of origin: </div>\n    <div class=\"field-value col-md-9\">\n      <ol>\n        <ng-container *ngFor=\"let origin of _details.languageOfOrigin; let i = index\">\n          <li class=\"order-index\" [innerHTML]=\"getSentence(origin)\" (click)=\"pronunceWord()\"></li>\n\n          <i class=\"fa fa-pencil\" *ngIf=\"userData && userData.role==role.ADMIN\"\n            (click)=\"editField('etymologies', {category: _details.selectedCategory, etymologiesindex: i})\"></i>\n        </ng-container>\n      </ol>\n    </div>\n    <div class=\"col-md-1\" *ngIf=\"userData && userData.role==role.ADMIN\">\n      <i class=\"fa fa-plus\" (click)=\"addField('etymologies', {category: _details.selectedCategory})\"></i>\n    </div>\n  </div>\n\n  <div class=\"field row\" [ngStyle]=\"{paddingBottom: 0}\">\n    <div class=\"field-label col-md-2\">Part of speech: </div>\n    <div class=\"field-value col-md-10\">\n      <div *ngFor=\"let category of _details.lexicalEntries\" class=\"type\"\n        [class.default]=\"_details.lexicalEntries.length === 1\"\n        [class.active]=\"_details.lexicalEntries.length > 1 && category.lexicalCategory.id===_details.selectedCategory.lexicalCategory.id\"\n        (click)=\"setCategory(category)\">\n        {{category.lexicalCategory.text}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"field row\">\n    <div class=\"field-label col-md-2\">Pronunciations: </div>\n    <div class=\"field-value col-md-10\">\n      <ol id=\"pronunciations\">\n        <li class=\"order-index\" *ngFor=\"let pronunciation of _details.selectedCategory.pronunciations; let i=index;\">\n          {{ pronunciation.phoneticSpelling}}\n          <span (click)=\"playAudio($event)\" *ngIf=\"pronunciation.audioFile\" #audioelm>\n            <audio [src]=\"getAudioUrl(pronunciation.audioFile)\">Play</audio>\n            <i class=\"fa fa-volume-up link\"></i>\n          </span>&nbsp;&nbsp;\n        </li>\n      </ol>\n    </div>\n  </div>\n\n  <div class=\"field row\">\n    <div class=\"field-label col-md-2\">Definition: </div>\n    <div class=\"field-value col-md-9\">\n      <ol>\n        <ng-container *ngFor=\"let entry of _details.selectedCategory.entries;let entriesindex = index;\">\n          <ng-container *ngFor=\"let sense of entry.senses;let sensesindex = index;\">\n            <ng-container *ngFor=\"let definition of sense.definitions;let definitionsindex = index;\">\n              <li class=\"order-index\">{{formatSentence(definition)}}</li>\n              <i class=\"fa fa-pencil\" *ngIf=\"userData && userData.role==role.ADMIN\"\n                (click)=\"editField('definitions', {category: _details.selectedCategory, entriesindex: entriesindex, sensesindex: sensesindex, definitionsindex: definitionsindex})\"></i>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </ol>\n    </div>\n    <div class=\"col-md-1\" *ngIf=\"userData && userData.role==role.ADMIN\">\n      <i class=\"fa fa-plus\" (click)=\"addField('definitions', {category: _details.selectedCategory})\"></i>\n    </div>\n  </div>\n\n  <div class=\"field row\">\n    <div class=\"field-label col-md-2\">Sentence: </div>\n    <div class=\"field-value col-md-9\">\n      <ol>\n        <ng-container *ngFor=\"let entry of _details.selectedCategory.entries;let entriesindex = index;\">\n          <ng-container *ngFor=\"let sense of entry.senses;let sensesindex = index;\">\n            <ng-container *ngFor=\"let example of sense.examples;let exampleindex = index;\">\n              <li class=\"order-index\" [innerHTML]=\"getSentence(example.text)\" (click)=\"pronunceWord()\"></li>\n              <i class=\"fa fa-pencil\" *ngIf=\"userData && userData.role==role.ADMIN\"\n                (click)=\"editField('examples', {category: _details.selectedCategory, entriesindex: entriesindex, sensesindex: sensesindex, exampleindex: exampleindex})\"></i>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </ol>\n    </div>\n    <div class=\"col-md-1\" *ngIf=\"userData && userData.role==role.ADMIN\">\n      <i class=\"fa fa-plus\" (click)=\"addField('examples', {category: _details.selectedCategory})\"></i>\n    </div>\n  </div>\n\n  <div class=\"field row\" *ngIf=\"session===sessionType.TEST && userData\">\n    <div class=\"field-label col-md-2\">\n      <button (click)=\"getPreviousResults()\" class=\"sd-btn custom-btn\" title=\"Previous attempts\">\n        <i class=\"fa fa-history\"></i>\n      </button>\n    </div>\n    <div class=\"field-value col-md-10\">\n      <div class=\"previous-attempts\">\n        <span *ngFor=\"let result of previousAttempts; let i = index\">\n          <span class=\"log-date\" *ngIf=\"i===(previousAttempts.length-1)\">{{getDate(result.logdatetime)}}</span>&nbsp;\n          <i class=\"fa\" [class.fa-times-circle]=\"!result.iscorrect\" [class.fa-check-circle]=\"result.iscorrect\"\n            [class.incorrect]=\"!result.iscorrect\" [class.correct]=\"result.iscorrect\"\n            [title]=\"getDate(result.logdatetime)\"></i> &nbsp;\n          <span class=\"log-date\" *ngIf=\"previousAttempts.length > 1 && i===0\">{{getDate(result.logdatetime)}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <span [hidden]=\"true\" #correctAudio>\n    <audio src=\"assets/audio/Tink.mp3\">Play</audio>\n  </span>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"visible\" class=\"dialog_overlay_wrap\">\n  <div class=\"dialog_overlay\" [class.hide_overlay]=\"hideOverlay\"></div>\n  <img src=\"assets/images/loading.gif\" class=\"spinner\" width=\"200\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/signup/signup.component */
    "./src/app/home/signup/signup.component.ts");
    /* harmony import */


    var _shared_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/route-guards/auth.guard */
    "./src/app/shared/route-guards/auth.guard.ts");
    /* harmony import */


    var _shared_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/route-guards/login.guard */
    "./src/app/shared/route-guards/login.guard.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");

    var routes = [{
      path: '',
      component: _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'login',
      component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_shared_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_9__["LoginGuard"]]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
      canActivate: [_shared_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'signup',
      component: _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_shared_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _home_home_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home/home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./profile/change-password/change-password.component */
    "./src/app/profile/change-password/change-password.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"], _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]],
      entryComponents: [],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_28__["DashboardModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_29__["HomeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_26__["CoreModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot()],
      providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"], _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_21__["SpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrService"], _home_home_service__WEBPACK_IMPORTED_MODULE_27__["HomeService"], _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_23__["StorageService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicRouteStrategy"]
      }, {
        provide: ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrService"],
        useClass: ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrService"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./security/security.service */
    "./src/app/core/security/security.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_sd_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./interceptors/sd-interceptor */
    "./src/app/core/interceptors/sd-interceptor.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"]],
      declarations: [],
      providers: [_security_security_service__WEBPACK_IMPORTED_MODULE_11__["SecurityService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_sd_interceptor__WEBPACK_IMPORTED_MODULE_13__["SDInterceptor"],
        multi: true
      }],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/enum/enum.ts":
  /*!***********************************!*\
    !*** ./src/app/core/enum/enum.ts ***!
    \***********************************/

  /*! exports provided: SessionType, Languages, PlanType, Role, Price, OauthProvider */

  /***/
  function srcAppCoreEnumEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionType", function () {
      return SessionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Languages", function () {
      return Languages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanType", function () {
      return PlanType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Price", function () {
      return Price;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OauthProvider", function () {
      return OauthProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SessionType;

    (function (SessionType) {
      SessionType["PRACTICE"] = "practice";
      SessionType["TEST"] = "test";
    })(SessionType || (SessionType = {}));

    var Languages;

    (function (Languages) {
      Languages["ENGLISH"] = "English";
    })(Languages || (Languages = {}));

    var PlanType;

    (function (PlanType) {
      PlanType["REGIONAL"] = "Regional";
      PlanType["NATIONAL"] = "National";
    })(PlanType || (PlanType = {}));

    var Role;

    (function (Role) {
      Role["ADMIN"] = "admin";
    })(Role || (Role = {}));

    var Price;

    (function (Price) {
      Price[Price["REGIONAL"] = 60] = "REGIONAL";
      Price[Price["NATIONAL"] = 80] = "NATIONAL";
    })(Price || (Price = {}));

    var OauthProvider;

    (function (OauthProvider) {
      OauthProvider["GOOGLE"] = "GOOGLE";
      OauthProvider["FACEBOOK"] = "FACEBOOK";
    })(OauthProvider || (OauthProvider = {}));
    /***/

  },

  /***/
  "./src/app/core/interceptors/sd-interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/interceptors/sd-interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: SDInterceptor */

  /***/
  function srcAppCoreInterceptorsSdInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SDInterceptor", function () {
      return SDInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../security/security.service */
    "./src/app/core/security/security.service.ts");

    var SDInterceptor = /*#__PURE__*/function () {
      function SDInterceptor(securityService, _router, _storageService) {
        _classCallCheck(this, SDInterceptor);

        this.securityService = securityService;
        this._router = _router;
        this._storageService = _storageService;
      }

      _createClass(SDInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          if (this.isAuthenticated()) {
            // add headers
            req = this.addHeaders(req);
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                return event;
              }
            }, function (err) {
              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                  // delete the cookie if the call is unauthenticated
                  _this2._storageService.logout(); // navigate to login page


                  _this2._router.navigate(['/login']);
                }

                return err;
              }
            }));
          } else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]().asObservable();
          }
        } // Redirect to login if user is not authenticated

      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (!this.securityService.isAuthenticated()) {
            this._router.navigate(['/login']);

            return false;
          } else {
            return true;
          }
        } // add headers

      }, {
        key: "addHeaders",
        value: function addHeaders(request) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](); // append unique session identifier and content type in the header.
          // Note: HttpHeaders and HttpRequest are immutable

          headers = headers.append('Content-Type', 'application/json'); // add auth token if authorization is required for the request

          if (this.isTokenRequired()) {
            headers = headers.append('Authorization', "JWT " + this._storageService.getToken());
          }

          return request.clone({
            headers: headers
          });
        }
      }, {
        key: "isTokenRequired",
        value: function isTokenRequired() {
          return this.securityService.isTokenRequired();
        }
      }]);

      return SDInterceptor;
    }();

    SDInterceptor.ctorParameters = function () {
      return [{
        type: _security_security_service__WEBPACK_IMPORTED_MODULE_7__["SecurityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    SDInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_security_service__WEBPACK_IMPORTED_MODULE_7__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])], SDInterceptor);
    /***/
  },

  /***/
  "./src/app/core/sdconfig.ts":
  /*!**********************************!*\
    !*** ./src/app/core/sdconfig.ts ***!
    \**********************************/

  /*! exports provided: sdconfig */

  /***/
  function srcAppCoreSdconfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sdconfig", function () {
      return sdconfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //let backendHost = location.host.indexOf('localhost') == 0 ? 'http://localhost:8080/api' : 'https://spelldoneapi.appspot.com/api';
    // let backendHost = location.host.indexOf('localhost') == 0 ? 'http://localhost:8080/api' : 'https://spelldoneapi-test.appspot.com/api';


    var backendHost = 'https://spelldoneapi-test.appspot.com/api';
    var sdconfig = {
      backendHost: backendHost,
      baseResourceUrl: 'assets/data/'
    };
    /***/
  },

  /***/
  "./src/app/core/security/security.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/security/security.service.ts ***!
    \***************************************************/

  /*! exports provided: SecurityService */

  /***/
  function srcAppCoreSecuritySecurityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityService", function () {
      return SecurityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var SecurityService = /*#__PURE__*/function () {
      function SecurityService(_storageService) {
        _classCallCheck(this, SecurityService);

        this._storageService = _storageService;
        this.bypassAuthentication = false;
      }

      _createClass(SecurityService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (this.bypassAuthentication) {
            /* Bypass authentication */
            return true;
          } else {
            return this._storageService.checkToken();
          }
        }
      }, {
        key: "isTokenRequired",
        value: function isTokenRequired() {
          if (this.bypassAuthentication) {
            /* Bypass authentication */
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "bypassAuth",
        value: function bypassAuth(bypass) {
          this.bypassAuthentication = bypass;
        }
      }]);

      return SecurityService;
    }();

    SecurityService.ctorParameters = function () {
      return [{
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }];
    };

    SecurityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])], SecurityService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#dashboard {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  position: relative;\n}\n\n#navbar {\n  width: 250px;\n  border-right: 1px solid #efebeb;\n  margin-top: 10px;\n  overflow: hidden;\n}\n\n#header {\n  /* width: 100%; */\n  padding: 10px;\n  background: #006341;\n  color: #fff;\n  /* margin: 0 0 20px 0; */\n}\n\n#dashboard-content {\n  flex: 1;\n  flex-flow: nowrap;\n}\n\n#content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  padding-top: 10px;\n  height: calc(100% - 45px);\n}\n\n#details-container {\n  margin-top: 10px;\n  margin-bottom: 25px;\n  height: calc(100% - 79px);\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.level-id {\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.set-id {\n  font-size: 15px;\n  cursor: pointer;\n}\n\n#set-list {\n  margin-top: 20px;\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n.set-item {\n  margin-bottom: 5px;\n}\n\n.set-item:nth-child(odd){\n  background: #f1f3f1;\n}\n\n.set-item:nth-child(even){\n  background: #fdfdfd;\n}\n\n.set-info {\n  flex: 1;\n  white-space: nowrap;\n}\n\n.active {\n  color: #1698d8;\n}\n\n.active .title {\n  font-weight: 600;\n}\n\n.error-msg {\n  color: red;\n  text-align: center;\n}\n\n.state-list {\n  width: 100%;\n}\n\n.favorite-word-icon {\n  text-shadow: 0px 0px 2px #555;\n  font-size: 20px;\n  color: gold;\n}\n\n#nav-buttons {\n  display: flex;\n  align-items: center;\n  flex-flow: row-reverse;\n}\n\n.nav-btn {\n  margin-right: 10px;\n  font-weight: 600;\n  font-size: 17px !important;\n}\n\n#word-index {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\nul{\n  padding: 0;\n}\n\n.level-1, .level-2, .level-3 {\n  cursor: pointer;\n  padding: 0;\n}\n\n.level-2 {\n  margin-left: 10px;\n  max-height: 0;\n  transition: max-height 300ms ease-in-out;\n}\n\n.level-3 {\n  margin-left: 10px;\n  max-height: 0;\n  transition: max-height 200ms ease-in-out;\n}\n\n.fa {\n  transition: transform 300ms;\n}\n\n.fa.open {\n  transform: rotate(90deg);\n}\n\n.level-1 {\n  overflow: hidden;\n}\n\n.level-1 .title {\n  padding: 3px 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n  font-size: 18px;\n}\n\n.level-2 .title {\n  padding: 3px 0;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\n.level-3 .title {\n  padding: 6px 0;\n  display: flex;\n  align-items: center;\n}\n\n.title .item-name {\n  flex: 1;\n}\n\n.item-expand {\n  padding: 5px;\n}\n\n.hide {\n  visibility: hidden;\n}\n\nth, td {\n  text-align: center;\n}\n\nth {\n  background: #006341;\n  color: #fff;\n  padding: 3px 0;\n}\n\ntd {\n  padding: 3px 0;\n}\n\n#sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 9px;\n  background: #006341;\n  color: #fff;\n}\n\n#sidebar-header .header {\n  flex: 1;\n  text-align: center;\n  font-weight: 600;\n}\n\n.count {\n  display: inline-block;\n  width: 30px;\n  text-align: left;\n  padding-left: 5px;\n}\n\n.hide {\n  /* transform: translateX(-250px); */\n  display: none;\n}\n\n.mobile-view {\n  display: none;\n}\n\n#mobile-menu-overlay {\n  background: #827e7e8f;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: none;\n}\n\n.disable {\n  color: #ddd;\n  cursor: default !important;\n}\n\n.disable .link {\n  cursor: default !important;\n}\n\n.disable .favorite-word-icon {\n  color: #ddd;\n  text-shadow: none;\n}\n\n#feedback-btn {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background: #ffcc32;\n  color: #555;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sub-col {\n  font-size: 13px;\n}\n\n.level-word-count {\n  font-size: 14px;\n  color: #ffe000;\n}\n\n#set-name {\n  display: flex;\n  align-items: center;\n  font-size: 22px;\n  color: #ffcc32;\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n#gotoindex {\n  width: 50px;\n  height: 30px;\n}\n\n#goto-btn {\n  height: 30px;\n  margin-right: 20px;\n}\n\n.logo {\n  display: none;\n}\n\n/* ----media query----- */\n\n@media only screen and (max-width: 800px) {\n  #navbar {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    z-index: 30;\n    margin-top: 0;\n  }\n\n  #show-sidebar {\n    display: none;\n  }\n\n  #sidebar-header {\n    padding: 5px 10px;\n    font-size: 20px;\n  }\n\n  #sidebar-header .header {\n    margin-left: 15px;\n    text-align: left;\n  }\n\n  .logo {\n    display: flex;\n  }\n\n  #logo-img {\n    width: 60px;\n    height: 40px;\n    border-radius: 0;\n  }\n\n  .web-view {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block;\n  }\n\n  #nav-buttons {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0;\n    left: 0;\n    background: #006341;\n    z-index: 20;\n    text-align: center;\n    justify-content: center;\n  }\n\n  .nav-btn {\n    font-size: 35px !important;\n    padding: 0;\n    margin-right: 0;\n  }\n\n  #word-index {\n    color: #fff;\n  }\n\n  #mobile-menu-overlay {\n    display: block;\n  }\n\n  .set-info{\n    font-size: 11px;\n  }\n\n  .count {\n    width: 15px;\n  }\n\n  .favorite-word-icon {\n    font-size: 12px;\n  }\n\n  #feedback-btn {\n    right: 8px;\n    bottom: 40px;\n  }\n}\n\n/* ----media query for iphone 5/SE----- */\n\n@media only screen and (max-width: 320px) {\n  .sub-col {\n    font-size: 12px;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFHOUIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUc5QixzQkFBc0I7RUFDdEIscUNBQXFDO0VBR3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI25hdmJhciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWJlYjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2hlYWRlciB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogbWFyZ2luOiAwIDAgMjBweCAwOyAqL1xufVxuXG4jZGFzaGJvYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBmbGV4LWZsb3c6IG5vd3JhcDtcbn1cblxuI2NvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbiNkZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzlweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5sZXZlbC1pZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2V0LWlkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzZXQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtby1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uc2V0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zZXQtaXRlbTpudGgtY2hpbGQob2RkKXtcbiAgYmFja2dyb3VuZDogI2YxZjNmMTtcbn1cblxuLnNldC1pdGVtOm50aC1jaGlsZChldmVuKXtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbn1cblxuLnNldC1pbmZvIHtcbiAgZmxleDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMTY5OGQ4O1xufVxuXG4uYWN0aXZlIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0ZS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYXZvcml0ZS13b3JkLWljb24ge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzU1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogZ29sZDtcbn1cblxuI25hdi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbn1cblxuLm5hdi1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4jd29yZC1pbmRleCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWx7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sZXZlbC0xLCAubGV2ZWwtMiwgLmxldmVsLTMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sZXZlbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5sZXZlbC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbn1cblxuLmZhLm9wZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5sZXZlbC0xIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxldmVsLTEgLnRpdGxlIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxldmVsLTIgLnRpdGxlIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxldmVsLTMgLnRpdGxlIHtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSAuaXRlbS1uYW1lIHtcbiAgZmxleDogMTtcbn1cblxuLml0ZW0tZXhwYW5kIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICMwMDYzNDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxuI3NpZGViYXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3NpZGViYXItaGVhZGVyIC5oZWFkZXIge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uaGlkZSB7XG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpOyAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLXZpZXcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbW9iaWxlLW1lbnUtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6ICM4MjdlN2U4ZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzYWJsZSB7XG4gIGNvbG9yOiAjZGRkO1xuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUgLmxpbmsge1xuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUgLmZhdm9yaXRlLXdvcmQtaWNvbiB7XG4gIGNvbG9yOiAjZGRkO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuI2ZlZWRiYWNrLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmY2MzMjtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWItY29sIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGV2ZWwtd29yZC1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmUwMDA7XG59XG5cbiNzZXQtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmNjMzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jZ290b2luZGV4IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuI2dvdG8tYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLS0tLW1lZGlhIHF1ZXJ5LS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI25hdmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiAzMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgI3Nob3ctc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzaWRlYmFyLWhlYWRlciB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgI3NpZGViYXItaGVhZGVyIC5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICNsb2dvLWltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAud2ViLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgI25hdi1idXR0b25zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICN3b3JkLWluZGV4IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gICNtb2JpbGUtbWVudS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zZXQtaW5mb3tcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuICAuY291bnQge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5cbiAgLmZhdm9yaXRlLXdvcmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgI2ZlZWRiYWNrLWJ0biB7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBib3R0b206IDQwcHg7XG4gIH1cbn1cblxuLyogLS0tLW1lZGlhIHF1ZXJ5IGZvciBpcGhvbmUgNS9TRS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5zdWItY29sIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _shared_serch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/serch.service */
    "./src/app/shared/serch.service.ts");
    /* harmony import */


    var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var _shared_word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/word-detail/word-detail.component */
    "./src/app/shared/word-detail/word-detail.component.ts");
    /* harmony import */


    var _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/enum/enum */
    "./src/app/core/enum/enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/log.service */
    "./src/app/shared/log.service.ts");
    /* harmony import */


    var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../shared/dialogs/message-dialog/message-dialog.component */
    "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../shared/utility/utility */
    "./src/app/shared/utility/utility.ts");
    /* harmony import */


    var _shared_dialogs_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../shared/dialogs/edit-dialog/edit-dialog.component */
    "./src/app/shared/dialogs/edit-dialog/edit-dialog.component.ts");
    /* harmony import */


    var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../shared/services/message.service */
    "./src/app/shared/services/message.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService, searchService, spinnerService, logService, storageService, router, toastService, dialog, messageService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.searchService = searchService;
        this.spinnerService = spinnerService;
        this.logService = logService;
        this.storageService = storageService;
        this.router = router;
        this.toastService = toastService;
        this.dialog = dialog;
        this.messageService = messageService;
        this.planType = _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["PlanType"]; //??? private

        this.words = [];
        this.currentIndex = 0;
        this.details = {};
        this.setList = [];
        this.showList = true;
        this.lastLoggedIndex = -1;
        this.sidebar = {
          isOpen: true
        };
        this.isMobileView = false;
        this.role = _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["Role"];
        this.messageService.toggleSidbar = this.toggleSidebar.bind(this);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (window.screen.width <= 800) {
            // this.sidebar.isOpen = false;
            this.isMobileView = true;
          }

          this.userData = this.storageService.getUser();
          this.userSubscription = this.storageService.getSubscription();
          this.language = _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["Languages"].ENGLISH;
          this.dashboardService.getModules(this.language).subscribe(function (response) {
            _this3.rootModules = response.json();
            var defaultModule = {
              rootModule: _this3.rootModules[0],
              module: _this3.rootModules[0].modules[0],
              level: _this3.rootModules[0].modules[0].levels[0]
            }; // if user clicks on levels on the sidebar, then clear user state from db.

            var clearUserState = true;

            if (_this3.userData && _this3.userData.userLastState) {
              var rootModule = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findObjectByKey(_this3.userData.userLastState.rootmodule, _this3.rootModules, 'id');

              if (rootModule) {
                var _module = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findObjectByKey(_this3.userData.userLastState.module, rootModule.modules, 'id');

                if (_module) {
                  var level = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findObjectByKey(_this3.userData.userLastState.level, _module.levels, 'id');

                  if (level) {
                    defaultModule = {
                      rootModule: rootModule,
                      module: _module,
                      level: level
                    }; // if loading user's last state, then do not clear user state from db.

                    clearUserState = false;
                  }
                }
              }
            }

            _this3.getSets(defaultModule, clearUserState);

            _this3.isFirstLoad = true;
          }, function (error) {
            console.log(error);
          });
        } // clearUserState - this flag indicates whether to clear user state from db, when a level is clicked in sidebar.

      }, {
        key: "getSets",
        value: function getSets(data, clearUserState) {
          var _this4 = this;

          this.tab = undefined;
          this.currentScreen = undefined;
          this.currentIndex = 0;
          this.details = undefined;
          this.currentSetInfo = {
            language: this.language,
            rootModule: data.rootModule,
            module: data.module,
            level: data.level
          };

          if (this.isMobileView) {
            this.toggleSidebar();
          }

          this.spinnerService.show();
          this.storageService.setCurrentState(this.currentSetInfo);
          this.dashboardService.getSets(this.language, data.rootModule.id, data.module.id, data.level.id).subscribe(function (response) {
            _this4.setList = response.json(); // get user logs by level if he is not a guest user.

            if (_this4.userData) {
              _this4.logService.getLogsByLevel({
                language: _this4.currentSetInfo.language,
                rootModule: _this4.currentSetInfo.rootModule.id,
                module: _this4.currentSetInfo.module.id,
                level: _this4.currentSetInfo.level.id
              }, _this4.userData.uid).subscribe(function (response) {
                _this4.setState = response.json();

                if (_this4.userData.userLastState && !_this4.resumeUserState) {
                  var setData = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findObjectByKey(_this4.userData.userLastState.set, _this4.setList, 'id');

                  _this4.resumeUserState = true;

                  _this4.start(setData, _this4.userData.userLastState.mode, _this4.userData.userLastState.lastwordindex, true);
                }

                _this4.spinnerService.hide();
              }, function (error) {
                console.log(error);

                _this4.spinnerService.hide();
              });
            } else {
              _this4.setState = {};

              _this4.spinnerService.hide();
            }
          }, function (error) {
            console.log(error);

            _this4.spinnerService.hide();
          });

          if (this.userData && this.userData.userLastState && clearUserState) {
            this.logService.clearUserState(this.userData.uid).subscribe(function (res) {
              console.log(res);
            });
          }
        }
      }, {
        key: "start",
        value: function start(set, type, index, isResume) {
          if (this.userData || this.storageService.isGuestUser() && set.isFree && !isResume) {
            this.tab = 'play';
            this.currentScreen = type;
            this.currentSetInfo.set = set;
            this.storageService.updateCurrentState('setId', set.id);
            this.currentIndex = index;
            this.getWords(this.currentSetInfo);
          } else {
            this.showSignUpMessage();
          }
        }
      }, {
        key: "startMisspelledWords",
        value: function startMisspelledWords(set, words) {
          if (this.userData) {
            this.tab = 'play';
            this.currentScreen = _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["SessionType"].TEST;
            this.currentSetInfo.set = set;
            this.storageService.updateCurrentState('setId', set.id);
            this.words = words;
            this.currentIndex = 0;

            if (this.words.length) {
              this.getWordDetail();
            }
          } else {
            this.showSignUpMessage();
          }
        }
      }, {
        key: "startFavoriteWords",
        value: function startFavoriteWords(set, words) {
          if (this.userData) {
            this.tab = 'play';
            this.currentScreen = _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["SessionType"].PRACTICE;
            this.currentSetInfo.set = set;
            this.storageService.updateCurrentState('setId', set.id);
            this.words = words;
            this.currentIndex = 0;

            if (this.words.length) {
              this.getWordDetail();
            }
          } else {
            this.showSignUpMessage();
          }
        }
      }, {
        key: "showSignUpMessage",
        value: function showSignUpMessage() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MessageDialogComponent"], {
            width: '500px',
            data: {
              message: 'Please register to get access to all the content.',
              description: '',
              primaryBtn: 'Register',
              secondaryBtn: 'Close'
            }
          });
          dialogRef.afterClosed().subscribe(function (response) {
            if (response === 'SUCCESS') {
              _this5.storageService.endGuestSession();

              _this5.router.navigate(['signup']);
            }
          });
        }
      }, {
        key: "getWords",
        value: function getWords(currentSetInfo) {
          var _this6 = this;

          this.dashboardService.getWords(_core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["Languages"].ENGLISH, currentSetInfo).subscribe(function (response) {
            _this6.words = response.json();

            if (_this6.words.length) {
              _this6.getWordDetail();

              _this6.registerDebounce();

              _this6.lastLoggedIndex = -1;

              _this6.logState({
                word: _this6.words[0]
              });
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getWordDetail",
        value: function getWordDetail() {
          var _this7 = this;

          this.spinnerService.show();
          this.errorMsg = undefined;
          this.searchService.getWordDetails(this.currentSetInfo.language, this.words[this.currentIndex]).subscribe(function (response) {
            var result = response.json().result;

            if (result) {
              _this7.currentWord = result;

              _this7.formatData(result);
            } else {
              _this7.details = undefined;
              _this7.errorMsg = "Word not found!";

              _this7.spinnerService.hide();
            }
          }, function (error) {
            console.log(error);

            _this7.spinnerService.hide();
          });
        }
      }, {
        key: "formatData",
        value: function formatData(result) {
          var entries = result.lexicalEntries;
          var details = {
            id: result.id,
            word: result.word,
            languageOfOrigin: entries[0].entries[0].etymologies,
            lexicalEntries: entries,
            selectedCategory: entries[0],
            isFavorite: false
          };

          if (this.setState && this.setState[this.currentSetInfo.set.id] && this.setState[this.currentSetInfo.set.id].practice) {
            if (this.setState[this.currentSetInfo.set.id].practice.favorite.includes(result.id)) {
              details.isFavorite = true;
            }
          }

          this.details = details;
          this.spinnerService.hide();
        }
      }, {
        key: "previous",
        value: function previous() {
          this.errorMsg = '';

          if (this.currentIndex > 0) {
            this.currentIndex--;
            this.getWordDetail();
          }
        }
      }, {
        key: "next",
        value: function next() {
          this.errorMsg = '';

          if (this.details && this.currentScreen === _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["SessionType"].TEST) {
            this.worddetail.submitAnswer();
          } else {
            if (this.currentIndex < this.words.length - 1) {
              this.getNextWord();
            }
          }
        } // go to a word using index.

      }, {
        key: "gotoWord",
        value: function gotoWord() {
          this.currentIndex = Number(this.gotoIndex);
          this.getWordDetail();
        }
      }, {
        key: "getNextWord",
        value: function getNextWord() {
          this.currentIndex++;
          this.getWordDetail();
        }
      }, {
        key: "gotoNext",
        value: function gotoNext() {
          if (this.currentIndex < this.words.length - 1) {
            this.getNextWord();
          } else {// show result
          }
        }
      }, {
        key: "registerDebounce",
        value: function registerDebounce() {
          var _this8 = this;

          var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.nextBtn.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (i) {
            return true;
          }));
          var debouncedInput = example.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(3000));
          debouncedInput.subscribe(function (val) {
            _this8.logState({
              word: _this8.words[_this8.currentIndex]
            });
          });
        }
      }, {
        key: "logState",
        value: function logState(data) {
          var _this9 = this;

          var index = this.currentIndex;

          if (this.lastLoggedIndex < this.currentIndex) {
            var logMethod = 'logPracticeState';

            if (this.currentScreen === _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["SessionType"].TEST) {
              logMethod = 'logTestState';
            } //log values if the user is not a guest user.


            if (this.userData) {
              this.logService[logMethod]({
                language: _core_enum_enum__WEBPACK_IMPORTED_MODULE_6__["Languages"].ENGLISH,
                rootModule: this.currentSetInfo.rootModule.id,
                module: this.currentSetInfo.module.id,
                level: this.currentSetInfo.level.id,
                set: this.currentSetInfo.set.id,
                word: data.word,
                wordIndex: index
              }, this.userData.uid).subscribe(function (response) {
                _this9.lastLoggedIndex = index;
              }, function (error) {
                console.log(error);
              });
            }
          }

          if (data.exit) {
            setTimeout(function () {
              _this9.openFeedback = false;
              _this9.currentWord = null;
            }, 100);
          }
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(word) {
          this.setState[this.currentSetInfo.set.id].practice.favorite.push(word);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(word) {
          var index = this.setState[this.currentSetInfo.set.id].practice.favorite.indexOf(word);

          if (index >= 0) {
            this.setState[this.currentSetInfo.set.id].practice.favorite.splice(index, 1);
          }
        }
      }, {
        key: "toggleRootModule",
        value: function toggleRootModule(event, rootModule) {
          rootModule.expand = !rootModule.expand;

          if (rootModule.expand) {
            event.currentTarget['nextSibling'].style.maxHeight = rootModule.modules.length * 40 + 'px';
          } else {
            event.currentTarget['nextSibling'].style.maxHeight = 0;
            rootModule.modules.map(function (item) {
              item.expand = false;
            });
          }
        }
      }, {
        key: "toggleModule",
        value: function toggleModule(event, subModule) {
          subModule.expand = !subModule.expand;

          if (subModule.expand) {
            event.currentTarget['parentElement'].parentElement.style.maxHeight = parseInt(event.currentTarget['parentElement'].parentElement.style.maxHeight) + subModule.levels.length * 40 + 'px';
            event.currentTarget['nextSibling'].style.maxHeight = subModule.levels.length * 40 + 'px';
          } else {
            event.currentTarget['nextSibling'].style.maxHeight = 0;
          }
        }
      }, {
        key: "hideSidebar",
        value: function hideSidebar() {
          var _this10 = this;

          this.contentElm.nativeElement.style.transform = 'translateX(-235px)';
          this.contentElm.nativeElement.style.transition = 'all 300ms';
          this.sidebarElm.nativeElement.style.transform = 'translateX(-3000px)';
          setTimeout(function () {
            _this10.contentElm.nativeElement.style.transition = 'none';
            _this10.contentElm.nativeElement.style.transform = 'translateX(0px)';
            _this10.sidebarElm.nativeElement.style.transform = 'translateX(0px)';
            _this10.sidebar.isOpen = false;
          }, 300);
        }
      }, {
        key: "showSidebar",
        value: function showSidebar() {
          var _this11 = this;

          this.sidebarElm.nativeElement.style.transform = 'translateX(-3000px)';
          this.contentElm.nativeElement.style.transform = 'translateX(-250px)';
          this.sidebar.isOpen = true;
          setTimeout(function () {
            _this11.sidebarElm.nativeElement.style.transform = 'translateX(0px)';
            _this11.contentElm.nativeElement.style.transition = 'all 300ms';
            _this11.contentElm.nativeElement.style.transform = 'translateX(0px)';
          }, 200);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.sidebar.isOpen = !this.sidebar.isOpen;
          this.isFirstLoad = false;
        }
      }, {
        key: "edit",
        value: function edit(data) {
          var _this12 = this;

          console.log(data);
          var categoty;
          var definition;
          var example;
          var langOfOrigin;

          switch (data.property) {
            case 'definitions':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              definition = this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex].senses[data.info.sensesindex].definitions[data.info.definitionsindex];
              this.editField(definition).afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  _this12.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex].senses[data.info.sensesindex].definitions[data.info.definitionsindex] = response.value;
                }
              });
              break;

            case 'examples':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              example = this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex].senses[data.info.sensesindex].examples[data.info.exampleindex];
              this.editField(example.text).afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  _this12.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex].senses[data.info.sensesindex].examples[data.info.exampleindex].text = response.value;
                }
              });
              break;

            case 'etymologies':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              langOfOrigin = this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies[data.info.etymologiesindex];
              this.editField(langOfOrigin).afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  _this12.currentWord.lexicalEntries[categoty.index].entries[0].etymologies[data.info.etymologiesindex] = response.value;
                }
              });
              break;
          }
        }
      }, {
        key: "add",
        value: function add(data) {
          var _this13 = this;

          console.log(data);
          var categoty;
          var definition;
          var example;
          var langOfOrigin;

          switch (data.property) {
            case 'definitions':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              this.editField(definition).afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  var definitions = _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions;

                  if (definitions && definitions.length) {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions.push(response.value);
                  } else {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions = [response.value];
                  }

                  _this13.details.lexicalEntries[categoty.index].entries[0].senses[0].definitions = _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions;
                }
              });
              break;

            case 'examples':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              this.editField('').afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  var examples = _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples;

                  if (examples && examples.length) {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples.push({
                      text: response.value
                    });
                  } else {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples = [{
                      text: response.value
                    }];
                  }

                  _this13.details.lexicalEntries[categoty.index].entries[0].senses[0].examples = _this13.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples;
                }
              });
              break;

            case 'etymologies':
              categoty = _shared_utility_utility__WEBPACK_IMPORTED_MODULE_16__["Utility"].findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id, this.currentWord.lexicalEntries, 'lexicalCategory', 'id');
              this.editField('').afterClosed().subscribe(function (response) {
                if (response && response.status === 'SUCCESS') {
                  var etymologies = _this13.currentWord.lexicalEntries[categoty.index].entries[0].etymologies;

                  if (etymologies && etymologies.length) {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].etymologies.push(response.value);
                  } else {
                    _this13.currentWord.lexicalEntries[categoty.index].entries[0].etymologies = [response.value];
                  }

                  _this13.details.languageOfOrigin = _this13.currentWord.lexicalEntries[categoty.index].entries[0].etymologies;
                }
              });
              break;
          }
        }
      }, {
        key: "editField",
        value: function editField(value) {
          var dialogRef = this.dialog.open(_shared_dialogs_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditDialogComponent"], {
            width: '800px',
            data: {
              value: value
            }
          });
          return dialogRef;
        }
      }, {
        key: "updateWord",
        value: function updateWord() {
          var _this14 = this;

          this.dashboardService.updateWord('English', this.currentWord).subscribe(function (response) {
            console.log(response);

            _this14.toastService.success('Updated word successfully.');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "closeFeedback",
        value: function closeFeedback() {
          this.openFeedback = false;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: _shared_serch_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]
      }, {
        type: _shared_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"]
      }, {
        type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
      }, {
        type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('worddetail', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_5__["WordDetailComponent"])], DashboardComponent.prototype, "worddetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nextBtn', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DashboardComponent.prototype, "nextBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DashboardComponent.prototype, "contentElm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DashboardComponent.prototype, "sidebarElm", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('toggleSidebar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        opacity: 0,
        marginLeft: '-250px'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        opacity: 0,
        marginLeft: '-250px'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _shared_serch_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"], _shared_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"], _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__["MessageService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/dashboard/sidebar/sidebar.component.ts");
    /* harmony import */


    var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feedback/feedback.component */
    "./src/app/dashboard/feedback/feedback.component.ts");
    /* harmony import */


    var _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./nav-footer/nav-footer.component */
    "./src/app/dashboard/nav-footer/nav-footer.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"], _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_8__["NavFooterComponent"]],
      imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [_nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_8__["NavFooterComponent"]],
      providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.service.ts ***!
    \************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _core_sdconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/sdconfig */
    "./src/app/core/sdconfig.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
      }

      _createClass(DashboardService, [{
        key: "getModules",
        value: function getModules(language) {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/words/" + language, {
            headers: this.headers
          });
        }
      }, {
        key: "getSets",
        value: function getSets(language, rootModuleId, moduleId, levelId) {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/words/" + language + "/" + rootModuleId + "/" + moduleId + "/" + levelId, {
            headers: this.headers
          });
        }
      }, {
        key: "getWords",
        value: function getWords(language, currentSetInfo) {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/words/" + language + "/" + currentSetInfo.rootModule.id + "/" + currentSetInfo.module.id + "/" + currentSetInfo.level.id + "/" + currentSetInfo.set.id, {
            headers: this.headers
          });
        }
      }, {
        key: "updateWord",
        value: function updateWord(language, word) {
          return this.http.put(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/search/" + word.word, {
            params: {
              language: language,
              word: word
            }
          });
        }
      }, {
        key: "sendFeedback",
        value: function sendFeedback(uid, feedback) {
          return this.http.post(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/words/feedback/" + uid, {
            feedback: feedback
          });
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], DashboardService);
    /***/
  },

  /***/
  "./src/app/dashboard/feedback/feedback.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/dashboard/feedback/feedback.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardFeedbackFeedbackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#feedback-box {\n  width: 286px;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  font-size: 15px;\n  background: #fff;\n  box-shadow: 0 0 2px 2px #555;\n  border: 1px solid white;\n  border-width: 1px 1px 0 1px;\n  transition: all 300ms;\n}\n\n.expand {\n  width: 350px !important;\n  /* height: 227px !important; */\n}\n\n#feedback-box .header {\n  background: #ffcc32;\n  padding: 5px 10px;\n  color: #000;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.feedback-body {\n  padding: 0 10px;\n}\n\n#comment {\n  width: 100%;\n  height: 250px;\n  resize: none;\n  margin: 4px 0 0 1px;\n}\n\n#rating {\n  display: flex;\n  justify-content: center;\n  flex-direction: row-reverse;\n}\n\n#rating > .star {\n  margin: 10px;\n  font-size: 20px;\n  flex-direction: column;\n  text-shadow: 0px 0px 0px #556;\n  color: #e8e6e6;\n  float: right;\n}\n\n#rating > .star:hover,\n#rating > .star:hover ~ .star,\n#rating > .star.rate {\n  color: gold;\n  cursor: pointer;\n}\n\n.footer-btn {\n  text-align: right;\n  padding: 10px 0;\n}\n\n.close-feedback {\n  right: 0;\n  position: absolute;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.fb-sent {\n  float: left;\n  color: green;\n  font-weight: 600;\n}\n\n#send:disabled {\n  background: #aaa;\n}\n\n.field {\n  display: flex;\n  margin: 10px 0;\n}\n\n.field-name {\n  width: 80px;\n}\n\n#send {\n  background: #ffcc32;\n  border: 0;\n  padding: 4px 10px;\n  font-weight: 600;\n  width: 100%;\n  border-radius: 3px;\n}\n\n/* ----mewdia query----- */\n\n@media only screen and (max-width: 800px) {\n  #feedback-box {\n    bottom: 40px;\n    right: 17px;\n  }\n\n  #overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #5555554f;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmVlZGJhY2stYm94IHtcbiAgd2lkdGg6IDI4NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggIzU1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAwIDFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG4uZXhwYW5kIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIC8qIGhlaWdodDogMjI3cHggIWltcG9ydGFudDsgKi9cbn1cblxuI2ZlZWRiYWNrLWJveCAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmY2MzMjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mZWVkYmFjay1ib2R5IHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4jY29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICByZXNpemU6IG5vbmU7XG4gIG1hcmdpbjogNHB4IDAgMCAxcHg7XG59XG5cbiNyYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4jcmF0aW5nID4gLnN0YXIge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4ICM1NTY7XG4gIGNvbG9yOiAjZThlNmU2O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNyYXRpbmcgPiAuc3Rhcjpob3ZlcixcbiNyYXRpbmcgPiAuc3Rhcjpob3ZlciB+IC5zdGFyLFxuI3JhdGluZyA+IC5zdGFyLnJhdGUge1xuICBjb2xvcjogZ29sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyLWJ0biB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5jbG9zZS1mZWVkYmFjayB7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYi1zZW50IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3NlbmQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmZpZWxkLW5hbWUge1xuICB3aWR0aDogODBweDtcbn1cblxuI3NlbmQge1xuICBiYWNrZ3JvdW5kOiAjZmZjYzMyO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiAtLS0tbWV3ZGlhIHF1ZXJ5LS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI2ZlZWRiYWNrLWJveCB7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIHJpZ2h0OiAxN3B4O1xuICB9XG5cbiAgI292ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzU1NTU1NTRmO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/feedback/feedback.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dashboard/feedback/feedback.component.ts ***!
    \**********************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppDashboardFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(dashboardService, storageService, toastService) {
        _classCallCheck(this, FeedbackComponent);

        this.dashboardService = dashboardService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fbSent = false;
        this.comment = '';
        this.currentRate = 0;
        this.showFeedback = true;
        this.aboutList = {
          origin: 'Language of origin',
          pos: 'Parts of speech',
          pronunciations: 'Pronunciations',
          definition: 'Definition',
          sentence: 'Sentence'
        };
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.screen.width <= 800) {
            this.isMobileView = true;
          }

          this.userData = this.storageService.getUser();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "rate",
        value: function rate(event, point) {
          this.currentRate = point;
        }
      }, {
        key: "sendFeedback",
        value: function sendFeedback() {
          var _this15 = this;

          if (this.comment.trim()) {
            var feedback = {
              word: this.currentWord.id,
              about: this.aboutList[this.about],
              comment: this.comment
            };
            this.dashboardService.sendFeedback(this.userData.uid, feedback).subscribe(function (response) {
              _this15.toastService.success('Feedback sent successfully.');

              _this15.comment = null;
              _this15.about = undefined;
            }, function (error) {
              _this15.toastService.error('Unable to send feedback at the moment. Please try later.');
            });
          }
        }
      }, {
        key: "closeFeedback",
        value: function closeFeedback(event) {
          this.close.emit();
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeedbackComponent.prototype, "currentWord", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeedbackComponent.prototype, "close", void 0);
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.css */
      "./src/app/dashboard/feedback/feedback.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/nav-footer/nav-footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/dashboard/nav-footer/nav-footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardNavFooterNavFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".actions {\n  display: none;\n  box-shadow: 0px 11px 20px 0px #afaeae;\n}\n\n.nav-links {\n  padding: 5px;\n}\n\nul {\n  margin: 0;\n}\n\n/* ----mewdia query----- */\n\n@media only screen and (max-width: 800px) {\n\n  .actions {\n    display: block;\n    background: #006341;\n    color: #ffcc32;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n  }\n\n  .actions a {\n    color: #ffcc32\n  }\n\n  .actions ul {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25hdi1mb290ZXIvbmF2LWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFDQSwwQkFBMEI7O0FBQzFCOztFQUVFO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9uYXYtZm9vdGVyL25hdi1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMjBweCAwcHggI2FmYWVhZTtcbn1cblxuLm5hdi1saW5rcyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG59XG4vKiAtLS0tbWV3ZGlhIHF1ZXJ5LS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzAwNjM0MTtcbiAgICBjb2xvcjogI2ZmY2MzMjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAuYWN0aW9ucyBhIHtcbiAgICBjb2xvcjogI2ZmY2MzMlxuICB9XG5cbiAgLmFjdGlvbnMgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/nav-footer/nav-footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/dashboard/nav-footer/nav-footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavFooterComponent */

  /***/
  function srcAppDashboardNavFooterNavFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavFooterComponent", function () {
      return NavFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var NavFooterComponent = /*#__PURE__*/function () {
      function NavFooterComponent(router, storageService) {
        _classCallCheck(this, NavFooterComponent);

        this.router = router;
        this.storageService = storageService;
      }

      _createClass(NavFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = this.storageService.getUser();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storageService.logout();
          this.router.navigate(['login']);
        }
      }]);

      return NavFooterComponent;
    }();

    NavFooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    NavFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'nav-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/nav-footer/nav-footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-footer.component.css */
      "./src/app/dashboard/nav-footer/nav-footer.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])], NavFooterComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/sidebar/sidebar.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/dashboard/sidebar/sidebar.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul{\n  padding: 0 10px;\n}\n\nli {\n  overflow: hidden;\n}\n\n#sidebar-container {\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 51px);\n}\n\n#module-list {\n  flex: 1;\n}\n\n.level-1, .level-2, .level-3 {\n  cursor: pointer;\n  padding: 0;\n}\n\n.level-2 {\n  margin-left: 10px;\n  max-height: 0;\n  transition: max-height 300ms ease-in-out;\n}\n\n.level-3 {\n  margin-left: 10px;\n  max-height: 0;\n  transition: max-height 200ms ease-in-out;\n}\n\n.fa {\n  transition: transform 300ms;\n}\n\n.fa.open {\n  transform: rotate(90deg);\n}\n\n.level-1 {\n  overflow: hidden;\n}\n\n.level-1 .title {\n  padding: 3px 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.level-1 .item-name {\n  font-size: 19px;\n}\n\n.level-2 .title {\n  padding: 3px 0;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.level-2 .item-name {\n  font-size: 16px;\n}\n\n.level-3 .title {\n  padding: 6px 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.title .item-name {\n  flex: 1;\n  color: #006341;\n  font-weight: 600;\n}\n\n.item-expand {\n  padding: 5px;\n}\n\n.loading {\n  max-height: 500px !important;\n}\n\n.collapseall {\n  max-height: 0 !important;\n}\n\n.options {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n\n/* .active-rm {\n  background: #006341;\n}\n\n.active-md {\n  background: #139b6b;\n}\n*/\n\n.active-lv {\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n#list-container {\n  overflow: auto;\n  height: calc(100% - 71px);\n}\n\n/* ----mewdia query----- */\n\n@media only screen and (max-width: 800px) {\n  #navbar {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    background: #fff;\n  }\n\n  #show-sidebar {\n    display: none;\n  }\n\n  #module-list {\n    padding: 0 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7Ozs7Q0FPQzs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbmxpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NpZGViYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MXB4KTtcbn1cblxuI21vZHVsZS1saXN0IHtcbiAgZmxleDogMTtcbn1cblxuLmxldmVsLTEsIC5sZXZlbC0yLCAubGV2ZWwtMyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxldmVsLTIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmxldmVsLTMge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmZhIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xufVxuXG4uZmEub3BlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmxldmVsLTEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGV2ZWwtMSAudGl0bGUge1xuICBwYWRkaW5nOiAzcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZXZlbC0xIC5pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5sZXZlbC0yIC50aXRsZSB7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxldmVsLTIgLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxldmVsLTMgLnRpdGxlIHtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUgLml0ZW0tbmFtZSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjMDA2MzQxO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaXRlbS1leHBhbmQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sb2FkaW5nIHtcbiAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbGxhcHNlYWxsIHtcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogLmFjdGl2ZS1ybSB7XG4gIGJhY2tncm91bmQ6ICMwMDYzNDE7XG59XG5cbi5hY3RpdmUtbWQge1xuICBiYWNrZ3JvdW5kOiAjMTM5YjZiO1xufVxuKi9cbi5hY3RpdmUtbHYge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI2xpc3QtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzFweCk7XG59XG5cbi8qIC0tLS1tZXdkaWEgcXVlcnktLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAjbmF2YmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgI3Nob3ctc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNtb2R1bGUtbGlzdCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/sidebar/sidebar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppDashboardSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(router, storageService, cdr) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.storageService = storageService;
        this.cdr = cdr;
        this.getSets = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.userData = this.storageService.getUser();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this16 = this;

          setTimeout(function () {
            _this16.rootModules.map(function (rootModule) {
              if (rootModule.expand || _this16.isFirstLoad) {
                if (_this16.isFirstLoad) {
                  rootModule.expand = true;
                }

                rootModule.collapseAll = false;
                var rootElm = document.getElementById('rm-' + rootModule.id).nextSibling;
                rootElm.style.maxHeight = rootModule.modules.length * 40 + 'px';
                rootModule.modules.map(function (item) {
                  if (item.expand || _this16.isFirstLoad) {
                    if (_this16.isFirstLoad) {
                      item.expand = true;
                    }

                    item.collapseAll = false;
                    var elm = document.getElementById('md-' + item.id);
                    elm['parentElement'].parentElement.style.maxHeight = parseInt(elm['parentElement'].parentElement.style.maxHeight) + item.levels.length * 40 + 'px';
                    elm['nextSibling'].style.maxHeight = item.levels.length * 40 + 'px';
                  }
                });
              }
            });
          });
        }
      }, {
        key: "getSetsDetail",
        value: function getSetsDetail(rootModule, subModule, level) {
          this.activeRootModule = rootModule.id;
          this.activeModule = subModule.id;
          this.activeLevel = level.id;
          this.getSets.emit({
            rootModule: rootModule,
            module: subModule,
            level: level
          });
        }
      }, {
        key: "toggleRootModule",
        value: function toggleRootModule(event, rootModule) {
          rootModule.expand = !rootModule.expand;
          this.loading = false;

          if (rootModule.expand) {
            rootModule.collapseAll = false;
            event.currentTarget['nextSibling'].style.maxHeight = rootModule.modules.length * 40 + 'px';
          } else {
            event.currentTarget['nextSibling'].style.maxHeight = 0;
            event.currentTarget['nextSibling'].querySelector('ul').style.maxHeight = 0;
            rootModule.modules.map(function (item) {
              item.expand = false;
            });
          }
        }
      }, {
        key: "toggleModule",
        value: function toggleModule(event, subModule) {
          subModule.expand = !subModule.expand;
          this.loading = false;

          if (subModule.expand) {
            subModule.collapseAll = false;
            event.currentTarget['parentElement'].parentElement.style.maxHeight = parseInt(event.currentTarget['parentElement'].parentElement.style.maxHeight) + subModule.levels.length * 40 + 'px';
            event.currentTarget['nextSibling'].style.maxHeight = subModule.levels.length * 40 + 'px';
          } else {
            event.currentTarget['nextSibling'].style.maxHeight = 0;
          }
        }
      }, {
        key: "toggleModules",
        value: function toggleModules(open) {
          this.collapseAll = open;

          if (this.collapseAll) {
            this.expandAll = false;
            this.rootModules.map(function (rootModule) {
              rootModule.expand = false;
              rootModule.collapseAll = true;
              rootModule.modules.map(function (item) {
                item.expand = false;
                item.collapseAll = true;
              });
            });
          } else {
            this.expandAll = true;
            this.rootModules.map(function (rootModule) {
              rootModule.expand = true;
              rootModule.collapseAll = false;
              rootModule.modules.map(function (item) {
                item.expand = true;
                item.collapseAll = false;
              });
            });
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SidebarComponent.prototype, "rootModules", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SidebarComponent.prototype, "currentSetInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SidebarComponent.prototype, "isFirstLoad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SidebarComponent.prototype, "embedInDashboard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SidebarComponent.prototype, "getSets", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/dashboard/sidebar/sidebar.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/home/free-signup/free-signup.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/home/free-signup/free-signup.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeFreeSignupFreeSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customBtn {\n  display: flex;\n  align-items: center;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  margin-top: 20px;\n}\n\n.customBtn:hover {\n  cursor: pointer;\n}\n\nspan.label {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.gicon {\n  background: url(\"/assets/images/g-normal.png\") transparent 5px 50% no-repeat;\n}\n\nspan.ficon {\n  background: url(\"/assets/images/fb-logo.svg\") transparent 5px 50% no-repeat;\n}\n\nspan.icon {\n  display: flex;\n  flex-direction: column;\n  vertical-align: middle;\n  width: 42px;\n  height: 42px;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  background-position: center;\n}\n\nspan.buttonText {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 18px;\n  font-size: 14px;\n  font-weight: bold;\n  /* Use the Roboto font that is loaded in the <head> */\n  font-family: \"Roboto\", sans-serif;\n}\n\n#signup {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#signup button.primary {\n  color: white;\n  background-color: #e91e63;\n  margin: 0 10px;\n  width: 85px;\n}\n\n#signup button.secondary {\n  background: #fff;\n  border: 1px solid #e91e63;\n  color: #e91e63;\n  width: 85px;\n}\n\nbutton:disabled {\n  background-color: #e97a9f !important;\n}\n\n.options .option {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mcmVlLXNpZ251cC9DOlxcQXBwIFdvcmtzcGFjZVxcUGVyc29uYWxcXFNwZWxsZG9uZW1vYmlsZWFwcF90cnkxXFxzcGVsbGRvbmVtb2JpbGVhcHAvc3JjXFxhcHBcXGhvbWVcXGZyZWUtc2lnbnVwXFxmcmVlLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9mcmVlLXNpZ251cC9mcmVlLXNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLDRFQUFBO0FDQ0o7O0FERUE7RUFDSSwyRUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mcmVlLXNpZ251cC9mcmVlLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21CdG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICM4ODg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBncmV5O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b21CdG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zcGFuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbnNwYW4uZ2ljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9nLW5vcm1hbC5wbmcnKSB0cmFuc3BhcmVudCA1cHggNTAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuc3Bhbi5maWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ZiLWxvZ28uc3ZnJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbnNwYW4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuc3Bhbi5idXR0b25UZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jc2lnbnVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzaWdudXAgYnV0dG9uLnByaW1hcnkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbn1cclxuXHJcbiNzaWdudXAgYnV0dG9uLnNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5MWU2MztcclxuICAgIGNvbG9yOiAjZTkxZTYzO1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3YTlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcHRpb25zIC5vcHRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuY3VzdG9tQnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjODg4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBncmV5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY3VzdG9tQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5zcGFuLmdpY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZy1ub3JtYWwucG5nXCIpIHRyYW5zcGFyZW50IDVweCA1MCUgbm8tcmVwZWF0O1xufVxuXG5zcGFuLmZpY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZmItbG9nby5zdmdcIikgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG59XG5cbnNwYW4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuc3Bhbi5idXR0b25UZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuI3NpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jc2lnbnVwIGJ1dHRvbi5wcmltYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICBtYXJnaW46IDAgMTBweDtcbiAgd2lkdGg6IDg1cHg7XG59XG5cbiNzaWdudXAgYnV0dG9uLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOTFlNjM7XG4gIGNvbG9yOiAjZTkxZTYzO1xuICB3aWR0aDogODVweDtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5N2E5ZiAhaW1wb3J0YW50O1xufVxuXG4ub3B0aW9ucyAub3B0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/free-signup/free-signup.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/free-signup/free-signup.component.ts ***!
    \***********************************************************/

  /*! exports provided: FreeSignupComponent */

  /***/
  function srcAppHomeFreeSignupFreeSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeSignupComponent", function () {
      return FreeSignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/validators/custom-validators */
    "./src/app/shared/validators/custom-validators.ts");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var FreeSignupComponent = /*#__PURE__*/function () {
      function FreeSignupComponent(dialogRef, authService, firebaseAuth) {
        _classCallCheck(this, FreeSignupComponent);

        this.dialogRef = dialogRef;
        this.authService = authService;
        this.firebaseAuth = firebaseAuth;
        this.inValidEmailId = false;
        this.screen = 'options';
      }

      _createClass(FreeSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])
            }, [src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].areEqual])
          });
        }
      }, {
        key: "signUpUsingGoogle",
        value: function signUpUsingGoogle() {
          var _this17 = this;

          this.authService.signInWithGoogle().then(function (result) {
            _this17.dialogRef.close(result);
          })["catch"](function (error) {
            console.log('Unable to sign in with Google.');
          });
        }
      }, {
        key: "signUpUsingFacebook",
        value: function signUpUsingFacebook() {
          var _this18 = this;

          this.authService.signInWithFacebook().then(function (result) {
            _this18.dialogRef.close(result);
          })["catch"](function (error) {
            console.log('Unable to sign in with Facebook.');
          });
        }
      }, {
        key: "signUpWithEmail",
        value: function signUpWithEmail() {
          var _this19 = this;

          var customer = {
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.passwordGroup.password,
            isTrial: true
          };
          this.authService.signUp({
            customer: customer
          }).subscribe(function (result) {
            _this19.authService.sendVerificationMail(customer.email, customer.password, true);

            _this19.dialogRef.close(result);
          }, function (error) {
            var errorMsg = error.json().error.message;
            alert('Unable to sign up with Email and Password. - ' + errorMsg);
          });
        }
      }, {
        key: "login",
        value: function login() {}
      }]);

      return FreeSignupComponent;
    }();

    FreeSignupComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }];
    };

    FreeSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./free-signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/free-signup/free-signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./free-signup.component.scss */
      "./src/app/home/free-signup/free-signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])], FreeSignupComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/home/signup/signup.component.ts");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/home/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _signup_signup_status_signup_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup/signup-status/signup-status.component */
    "./src/app/home/signup/signup-status/signup-status.component.ts");
    /* harmony import */


    var _signup_termsandconditions_termsandconditions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./signup/termsandconditions/termsandconditions.component */
    "./src/app/home/signup/termsandconditions/termsandconditions.component.ts");
    /* harmony import */


    var _signup_privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signup/privacypolicy/privacypolicy.component */
    "./src/app/home/signup/privacypolicy/privacypolicy.component.ts");
    /* harmony import */


    var _free_signup_free_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./free-signup/free-signup.component */
    "./src/app/home/free-signup/free-signup.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _signup_signup_status_signup_status_component__WEBPACK_IMPORTED_MODULE_9__["SignupStatusComponent"], _signup_privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"], _signup_termsandconditions_termsandconditions_component__WEBPACK_IMPORTED_MODULE_10__["TermsAndConditionsComponent"], _free_signup_free_signup_component__WEBPACK_IMPORTED_MODULE_12__["FreeSignupComponent"]],
      entryComponents: [_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _signup_signup_status_signup_status_component__WEBPACK_IMPORTED_MODULE_9__["SignupStatusComponent"], _signup_privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"], _signup_termsandconditions_termsandconditions_component__WEBPACK_IMPORTED_MODULE_10__["TermsAndConditionsComponent"], _free_signup_free_signup_component__WEBPACK_IMPORTED_MODULE_12__["FreeSignupComponent"]],
      providers: [_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#home-container {\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n#img-wrap {\n  padding-bottom: 10px;\n}\n\n.name {\n  font-size: 27px;\n  font-weight: 600;\n}\n\n#right-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n#home-img {\n  background-image: url(\"/assets/images/Logo-Full-White.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 24px;\n  height: calc(100% - 64px);\n}\n\n#topbar {\n  border-bottom: 1px solid #ddd;\n  background: #006341;\n  color: #fff;\n}\n\n#home-options {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n#home-options a {\n  margin: 0 10px;\n  color: #fff;\n}\n\n#home-options a:hover {\n  text-decoration: underline !important;\n}\n\n#home-text-content {\n  flex: 1;\n  overflow: auto;\n  scroll-behavior: smooth;\n  margin-top: 10px;\n}\n\n.content-section {\n  margin-bottom: 35px;\n}\n\nli {\n  list-style-type: square;\n}\n\n#logo {\n  background: #006341;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n#logo-img {\n  width: 70px;\n  height: 50px;\n}\n\n#home-options a.link2 {\n  color: #ffcc32;\n}\n\n.active {\n  text-decoration: underline;\n}\n\n#username {\n  margin-left: 60px;\n}\n\n#btn-group {\n  display: flex;\n  justify-content: center;\n}\n\n#trial {\n  background: #f77d00;\n  color: #fff;\n  padding: 13px 65px;\n  border: 0;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n/* ----mewdia query----- */\n\n@media only screen and (max-width: 800px) {\n  #btn-group {\n    margin-top: 55px;\n  }\n\n  #img-wrap {\n    height: 50%;\n  }\n\n  #topbar {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    border-top: 1px solid #eee;\n  }\n\n  #home-text-content {\n    /* height: calc(100% - 396px); */\n    overflow: hidden;\n    flex: auto;\n    margin-bottom: 50px;\n    scroll-behavior: smooth;\n  }\n\n  #right-panel {\n    display: block;\n    flex-direction: unset;\n  }\n\n  #home-img {\n    background-position: center;\n    height: calc(100% - 50px);\n  }\n\n  #logo {\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n  }\n\n  #home-options a {\n    margin: 0 6px;\n    font-size: 14px;\n  }\n\n  #username {\n    width: 20px;\n    min-width: auto;\n    border-bottom: 0;\n    margin-bottom: 4px;\n    margin-left: 10px;\n    font-size: 22px;\n  }\n\n  #dashboard > span {\n    display: none;\n  }\n\n  #dashboard {\n    font-size: 22px !important;\n    margin-top: 4px !important;\n  }\n}\n\n/* CSS for mobile landscape view */\n\n@media only screen and (max-height: 411px) {\n  #home-img {\n    width: 208px;\n    height: 150px;\n    background-position: 1px -59px;\n    background-size: 208px;\n    justify-self: center;\n    align-self: center;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #btn-group {\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcQXBwIFdvcmtzcGFjZVxcUGVyc29uYWxcXFNwZWxsZG9uZW1vYmlsZWFwcF90cnkxXFxzcGVsbGRvbmVtb2JpbGVhcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFHQSxzQkFBQTtFQUNBLDhCQUFBO0VBR0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUdBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLDJEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREdBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLHFDQUFBO0FDQUo7O0FER0E7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0FKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDREo7O0FES0EsMEJBQUE7O0FBRUE7RUFDSTtJQUNJLGdCQUFBO0VDSE47O0VES0U7SUFDSSxXQUFBO0VDRk47O0VESUU7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtFQ0ROOztFREdFO0lBQ0ksZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VDQU47O0VERUU7SUFDSSxjQUFBO0lBQ0EscUJBQUE7RUNDTjs7RURDRTtJQUNJLDJCQUFBO0lBQ0EseUJBQUE7RUNFTjs7RURDRTtJQUNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0VOOztFREFFO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUNHTjs7RURERTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0lOOztFREZFO0lBQ0ksYUFBQTtFQ0tOOztFREhFO0lBQ0ksMEJBQUE7SUFDQSwwQkFBQTtFQ01OO0FBQ0Y7O0FERkEsa0NBQUE7O0FBRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDR047O0VEREU7SUFDSSxnQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtY29udGFpbmVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gICAgLW1vei1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbiNpbWctd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3JpZ2h0LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNob21lLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9Mb2dvLUZ1bGwtV2hpdGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICAvLyBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4jdG9wYmFyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jaG9tZS1vcHRpb25zIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbiNob21lLW9wdGlvbnMgYSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbiNob21lLW9wdGlvbnMgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuI2hvbWUtdGV4dC1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuI2xvZ28ge1xuICAgIGJhY2tncm91bmQ6ICMwMDYzNDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNsb2dvLWltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jaG9tZS1vcHRpb25zIGEubGluazIge1xuICAgIGNvbG9yOiAjZmZjYzMyO1xufVxuXG4uYWN0aXZlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI3VzZXJuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuI2J0bi1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvL21hcmdpbi10b3A6IDE3JTsgLy8/Pz9cbn1cblxuI3RyaWFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAxMjUsIDApO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEzcHggNjVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiAtLS0tbWV3ZGlhIHF1ZXJ5LS0tLS0gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICNidG4tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1NXB4OyAvLz8/P1xuICAgIH1cbiAgICAjaW1nLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG4gICAgI3RvcGJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgfVxuICAgICNob21lLXRleHQtY29udGVudCB7XG4gICAgICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMzk2cHgpOyAqL1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICB9XG4gICAgI3JpZ2h0LXBhbmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcbiAgICB9XG4gICAgI2hvbWUtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvLz8/PzBweCAtOTJweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNjBweDsgPz8/XG4gICAgfVxuICAgICNsb2dvIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgI2hvbWUtb3B0aW9ucyBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAjdXNlcm5hbWUge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgICNkYXNoYm9hcmQ+c3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNkYXNoYm9hcmQge1xuICAgICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbi8qIENTUyBmb3IgbW9iaWxlIGxhbmRzY2FwZSB2aWV3ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQxMXB4KSB7XG4gICAgI2hvbWUtaW1nIHtcbiAgICAgICAgd2lkdGg6IDIwOHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggLTU5cHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjA4cHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgICNidG4tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyAvLz8/P1xuICAgIH1cbn0iLCIjaG9tZS1jb250YWluZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuI2ltZy13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jcmlnaHQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jaG9tZS1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9Mb2dvLUZ1bGwtV2hpdGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn1cblxuI3RvcGJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2hvbWUtb3B0aW9ucyB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuI2hvbWUtb3B0aW9ucyBhIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jaG9tZS1vcHRpb25zIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4jaG9tZS10ZXh0LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG4jbG9nbyB7XG4gIGJhY2tncm91bmQ6ICMwMDYzNDE7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jbG9nby1pbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jaG9tZS1vcHRpb25zIGEubGluazIge1xuICBjb2xvcjogI2ZmY2MzMjtcbn1cblxuLmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuI2J0bi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jdHJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZjc3ZDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTNweCA2NXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIC0tLS1tZXdkaWEgcXVlcnktLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAjYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICB9XG5cbiAgI2ltZy13cmFwIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gICN0b3BiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIH1cblxuICAjaG9tZS10ZXh0LWNvbnRlbnQge1xuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMzk2cHgpOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB9XG5cbiAgI3JpZ2h0LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gIH1cblxuICAjaG9tZS1pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB9XG5cbiAgI2xvZ28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgI2hvbWUtb3B0aW9ucyBhIHtcbiAgICBtYXJnaW46IDAgNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gICN1c2VybmFtZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gICNkYXNoYm9hcmQgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Rhc2hib2FyZCB7XG4gICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIENTUyBmb3IgbW9iaWxlIGxhbmRzY2FwZSB2aWV3ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MTFweCkge1xuICAjaG9tZS1pbWcge1xuICAgIHdpZHRoOiAyMDhweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDFweCAtNTlweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwOHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAjYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, route, router, storageService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.active = 'mission';
        this.isLoading = true;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.userData = this.storageService.getUser();

          if (!this.userData) {
            if (this.storageService.checkToken()) {
              var token = this.storageService.getToken(); // this.spinnerService.show();
              // get user data from DB.

              this.authService.signIn({
                token: token
              }).subscribe(function (response) {
                var data = response.json();

                _this20.storageService.setUser(data.userData);

                _this20.storageService.setSubscription(data.subscription);

                _this20.userData = _this20.storageService.getUser();
                _this20.isLoading = false; // this.spinnerService.hide();

                /* if (data.userData.isActive) {
                  observer.next(true);
                } else {
                  this.router.navigate(['/profile']);
                } */
              }, function (error) {
                // this.spinnerService.hide();
                _this20.isLoading = false;
              });
            } else {
              this.isLoading = false;
            }
          } else {
            this.isLoading = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storageService.logout();
          this.router.navigate(['login']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.service.ts":
  /*!**************************************!*\
    !*** ./src/app/home/home.service.ts ***!
    \**************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _core_sdconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/sdconfig */
    "./src/app/core/sdconfig.ts");

    var HomeService = /*#__PURE__*/function () {
      function HomeService(http) {
        _classCallCheck(this, HomeService);

        this.http = http;
      }

      _createClass(HomeService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].baseResourceUrl + "countries.json");
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/subscription/plans", {});
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], HomeService);
    /***/
  },

  /***/
  "./src/app/home/login/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/home/login/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppHomeLoginForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(dialogRef) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.dialogRef = dialogRef;
        this.inValidEmailId = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "send",
        value: function send() {
          var emailRegEx = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");

          if (emailRegEx.test(this.email)) {
            this.dialogRef.close(this.email);
          } else {
            this.inValidEmailId = true;
          }
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/forgot-password/forgot-password.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/home/login/login.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/home/login/login.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n.card {\n  position: relative;\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 29px;\n}\n\n#learn-more {\n  color: white;\n  background-color: #11b0ca;\n  padding: 4px 16px;\n  font-size: 12px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n#learn-more:hover {\n  color: #11b0ca;\n  background-color: #fff;\n  border: 1px solid #11b0ca;\n}\n\n#footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  align-items: center;\n  font-size: 12px;\n}\n\n#trial {\n  padding: 10px 30px;\n  background: #f77d00;\n  color: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.card-header {\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 100%;\n  border-radius: 3px;\n  background: #006341;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 99, 65, 0.48);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card-header h4 {\n  font-weight: 400;\n  color: #fff;\n  margin-top: 5px;\n}\n\n.social-btns i {\n  font-size: 21px;\n  color: #fff;\n}\n\n.social-btns button {\n  margin: 0 8px;\n}\n\n.tip {\n  margin-top: -20px;\n}\n\n.form-row,\n.card-form,\n.mat-input-container {\n  width: 100%;\n}\n\n.card-form {\n  padding: 5px;\n}\n\n.card-form .mat-form-field {\n  flex: 1;\n}\n\n.form-row {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-top: 13px;\n}\n\n.form-row i {\n  position: relative;\n  top: -5px;\n  margin-right: 15px;\n  color: #555;\n}\n\n.card-footer {\n  margin: 10px;\n  background-color: transparent;\n  border: none;\n}\n\n.card-footer button {\n  color: #fff;\n  margin: 0 10px;\n  background-color: #006341;\n  width: 85px;\n}\n\n.card-footer button:hover {\n  color: #fff;\n  background-color: #37af86;\n}\n\n#email,\n#password {\n  font-size: 15px;\n  height: 20px;\n}\n\n.link {\n  margin: 20px 0 0 0;\n  color: darkblue;\n  font-size: 12px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.card-footer-row {\n  flex-wrap: nowrap;\n}\n\n#alertModal .modal-body {\n  font-size: 14px;\n  text-align: center;\n}\n\n.modalCenter {\n  display: flex !important;\n  align-items: center;\n}\n\n.logo-name {\n  color: #006341;\n  font-size: 25px;\n}\n\n#logo-img {\n  margin-top: 20px;\n}\n\n.customBtn {\n  display: flex;\n  align-items: center;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  margin-top: 20px;\n}\n\n.customBtn:hover {\n  cursor: pointer;\n}\n\nspan.icon {\n  display: flex;\n  flex-direction: column;\n  vertical-align: middle;\n  width: 42px;\n  height: 42px;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  background-position: center;\n}\n\nspan.buttonText {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: bold;\n  /* Use the Roboto font that is loaded in the <head> */\n  font-family: \"Roboto\", sans-serif;\n}\n\nspan.gicon {\n  background: url(\"/assets/images/g-normal.png\") transparent 5px 50% no-repeat;\n}\n\nspan.ficon {\n  background: url(\"/assets/images/fb-logo.svg\") transparent 5px 50% no-repeat;\n}\n\nbutton:disabled {\n  background-color: #37af86 !important;\n}\n\n/* ----media query for iphone 5/SE----- */\n\n@media only screen and (max-width: 320px) {\n  #logo-img {\n    margin-top: 10px;\n  }\n\n  .form-row {\n    margin-top: 0;\n    flex-flow: row;\n  }\n\n  .card-header {\n    padding: 10px;\n  }\n\n  #footer {\n    font-size: 10px;\n  }\n}\n\n/* CSS for mobile landscape view */\n\n@media only screen and (max-height: 411px) {\n  .logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 24px;\n  }\n\n  #logo-img {\n    margin-top: 0;\n    margin-right: 10px;\n    width: 40px;\n    height: 40px;\n  }\n\n  .card {\n    margin-top: 0;\n    padding: 0 5px;\n  }\n\n  .card-header {\n    padding: 0;\n    top: -15px;\n    width: 50%;\n  }\n\n  .card-header h4 {\n    margin: 0;\n    font-size: 22px;\n  }\n\n  .form-row {\n    margin-top: 0;\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  .card-footer {\n    margin: 0 10px;\n  }\n\n  .card-form {\n    display: flex;\n  }\n\n  .card-footer-row .btn-wrap {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9DOlxcQXBwIFdvcmtzcGFjZVxcUGVyc29uYWxcXFNwZWxsZG9uZW1vYmlsZWFwcF90cnkxXFxzcGVsbGRvbmVtb2JpbGVhcHAvc3JjXFxhcHBcXGhvbWVcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUdBLHNCQUFBO0VBQ0EsOEJBQUE7RUFHQSxzQkFBQTtFQUNBLHFDQUFBO0VBR0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7OztFQUdJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLE9BQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBOztFQUVJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNEVBQUE7QUNDSjs7QURFQTtFQUNJLDJFQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREdBLHlDQUFBOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0ROOztFREdFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUNBTjs7RURFRTtJQUNJLGFBQUE7RUNDTjs7RURDRTtJQUNJLGVBQUE7RUNFTjtBQUNGOztBREVBLGtDQUFBOztBQUVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNETjs7RURHRTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQU47O0VERUU7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFQ0NOOztFRENFO0lBQ0ksVUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDRU47O0VEQUU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQ0dOOztFRERFO0lBQ0ksYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDSU47O0VERkU7SUFDSSxjQUFBO0VDS047O0VESEU7SUFDSSxhQUFBO0VDTU47O0VESkU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcclxuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcclxuICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbn1cclxuXHJcbiNsZWFybi1tb3JlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIwY2E7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4jbGVhcm4tbW9yZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzExYjBjYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTFiMGNhO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI3RyaWFsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsIDEyNSwgMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmp1c3RpZnktY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDYzNDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgwLCA5OSwgNjUsIDAuNDgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc29jaWFsLWJ0bnMgaSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNvY2lhbC1idG5zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4udGlwIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uZm9ybS1yb3csXHJcbi5jYXJkLWZvcm0sXHJcbi5tYXQtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhcmQtZm9ybSAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLmZvcm0tcm93IGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjM0MTtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3YWY4NjtcclxufVxyXG5cclxuI2VtYWlsLFxyXG4jcGFzc3dvcmQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3Rlci1yb3cge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbiNhbGVydE1vZGFsIC5tb2RhbC1ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsQ2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvLW5hbWUge1xyXG4gICAgY29sb3I6ICMwMDYzNDE7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiNsb2dvLWltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tQnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjODg4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggZ3JleTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tQnRuOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc3Bhbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5zcGFuLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogVXNlIHRoZSBSb2JvdG8gZm9udCB0aGF0IGlzIGxvYWRlZCBpbiB0aGUgPGhlYWQ+ICovXHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnNwYW4uZ2ljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9nLW5vcm1hbC5wbmcnKSB0cmFuc3BhcmVudCA1cHggNTAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuc3Bhbi5maWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ZiLWxvZ28uc3ZnJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdhZjg2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tbWVkaWEgcXVlcnkgZm9yIGlwaG9uZSA1L1NFLS0tLS0gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICNsb2dvLWltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5mb3JtLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIH1cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgICNmb290ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIENTUyBmb3IgbW9iaWxlIGxhbmRzY2FwZSB2aWV3ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MTFweCkge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAjbG9nby1pbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5jYXJkLWhlYWRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5jYXJkLWZvb3Rlci1yb3cgLmJ0bi13cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjlweDtcbn1cblxuI2xlYXJuLW1vcmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMWIwY2E7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbiNsZWFybi1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMxMWIwY2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWIwY2E7XG59XG5cbiNmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI3RyaWFsIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjc3ZDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMwMDYzNDE7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDAsIDk5LCA2NSwgMC40OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zb2NpYWwtYnRucyBpIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNvY2lhbC1idG5zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi50aXAge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmZvcm0tcm93LFxuLmNhcmQtZm9ybSxcbi5tYXQtaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWZvcm0ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jYXJkLWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMTtcbn1cblxuLmZvcm0tcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4uZm9ybS1yb3cgaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWZvb3RlciBidXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYzNDE7XG4gIHdpZHRoOiA4NXB4O1xufVxuXG4uY2FyZC1mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzN2FmODY7XG59XG5cbiNlbWFpbCxcbiNwYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubGluayB7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgY29sb3I6IGRhcmtibHVlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1mb290ZXItcm93IHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbiNhbGVydE1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RhbENlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28tbmFtZSB7XG4gIGNvbG9yOiAjMDA2MzQxO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNsb2dvLWltZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jdXN0b21CdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiB0aGluIHNvbGlkICM4ODg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGdyZXk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jdXN0b21CdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNwYW4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuc3Bhbi5idXR0b25UZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiBVc2UgdGhlIFJvYm90byBmb250IHRoYXQgaXMgbG9hZGVkIGluIHRoZSA8aGVhZD4gKi9cbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbnNwYW4uZ2ljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9nLW5vcm1hbC5wbmdcIikgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG59XG5cbnNwYW4uZmljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9mYi1sb2dvLnN2Z1wiKSB0cmFuc3BhcmVudCA1cHggNTAlIG5vLXJlcGVhdDtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3YWY4NiAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tbWVkaWEgcXVlcnkgZm9yIGlwaG9uZSA1L1NFLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgI2xvZ28taW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgI2Zvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4vKiBDU1MgZm9yIG1vYmlsZSBsYW5kc2NhcGUgdmlldyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDExcHgpIHtcbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHg7XG4gIH1cblxuICAjbG9nby1pbWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRvcDogLTE1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlciBoNCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5mb3JtLXJvdyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuY2FyZC1mb290ZXIge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgLmNhcmQtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5jYXJkLWZvb3Rlci1yb3cgLmJ0bi13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppHomeLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/home/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/dialogs/message-dialog/message-dialog.component */
    "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _free_signup_free_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../free-signup/free-signup.component */
    "./src/app/home/free-signup/free-signup.component.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, router, authService, firebaseAuth, storageService, spinnerService, dialog, toastService) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.firebaseAuth = firebaseAuth;
        this.storageService = storageService;
        this.spinnerService = spinnerService;
        this.dialog = dialog;
        this.toastService = toastService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.screen.height <= 411) {
            this.isMobileLandscape = true;
          }

          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(50)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this21 = this;

          this.spinnerService.show();
          this.firebaseAuth.auth.signInWithEmailAndPassword(this.username, this.password).then(function (response) {
            console.log(response);

            if (response.user.emailVerified) {
              response.user.getIdToken().then(function (token) {
                _this21.setUserDataAndNavigate(token);
              })["catch"](function (error) {
                console.log(error);

                _this21.spinnerService.hide();
              });
            } else {
              _this21.spinnerService.hide();

              _this21.emailIdNotVerified(response.user.email);
            }
          })["catch"](function (err) {
            console.log(err);

            _this21.toastService.error('Invalid email or password.');

            _this21.spinnerService.hide();
          });
          /* this.homeService.signIn({ username: this.username, password: this.password }).subscribe(response => {
            console.log(response);
            alert('Account created successfully.');
          }, error => {
            console.log(error);
          }); */
        }
      }, {
        key: "setUserDataAndNavigate",
        value: function setUserDataAndNavigate(token) {
          var _this22 = this;

          console.log(token);
          this.authService.signIn({
            token: token
          }).subscribe(function (response) {
            var data = response.json();

            _this22.storageService.setUserToken(token);

            data.userData.userLastState = data.userLastState;

            _this22.storageService.setUser(data.userData);

            _this22.storageService.setSubscription(data.subscription);

            _this22.spinnerService.hide();

            if (data.userData.isActive) {
              _this22.router.navigate(['/dashboard']);
            } else {
              _this22.router.navigate(['/profile']);
            }
          }, function (error) {
            console.log(error);

            _this22.spinnerService.hide();
          });
        }
      }, {
        key: "emailIdNotVerified",
        value: function emailIdNotVerified(email) {
          var _this23 = this;

          this.dialog.open(src_app_shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MessageDialogComponent"], {
            width: '500px',
            data: {
              message: 'Emal Verification',
              description: "Your Email ID has not been verified. Please click 'Send Verification' button to resend",
              primaryBtn: 'Send Verification',
              secondaryBtn: 'Close'
            }
          }).afterClosed().subscribe(function (response) {
            if (response === 'SUCCESS') {
              _this23.authService.sendEmailVerification(email, true);
            } else {}
          });
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['signup']);
        } // sign in with google. this method creates an account if user email doesn't exists in Firebase.

      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this24 = this;

          this.authService.signInWithGoogle().then(function (data) {
            _this24.freeSignUpSuccess(data);
          })["catch"](function (error) {
            console.log('Unable to sign in with Google.');
          });
        } // sign in with google. this method creates an account if user email doesn't exists in Firebase.

      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          var _this25 = this;

          this.authService.signInWithFacebook().then(function (data) {
            _this25.freeSignUpSuccess(data);
          })["catch"](function (error) {
            console.log('Unable to sign in with Facebook.');
          });
        }
      }, {
        key: "signUpForTrail",
        value: function signUpForTrail() {
          var _this26 = this;

          var dialogRef = this.dialog.open(_free_signup_free_signup_component__WEBPACK_IMPORTED_MODULE_12__["FreeSignupComponent"], {
            width: '500px',
            height: '400px'
          });
          dialogRef.afterClosed().subscribe(function (data) {
            _this26.freeSignUpSuccess(data);
          });
        }
      }, {
        key: "freeSignUpSuccess",
        value: function freeSignUpSuccess(data) {
          if (data && data.uid && data.emailVerified) {
            // new user signed up using Google.
            // if (data.isNewUser) {
            // set user data and navigate to dashboard. 
            this.setUserDataAndNavigate(data.token); // } else {
            // get user data and navigate to dashboard if account is active.

            /* this.dynamicDataService.getUser(data.uid).subscribe(userData => {
              this.validateUserAccount({ status: true, user: userData, guid: data.uid })
            }, error => {
              // TODO: if no user data then create user record. (when signed in with facebook)
                        alert("User profile does not exist. Please contact admin!");
            }); */
            // }
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this27 = this;

          var dialogRef = this.dialog.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], {
            width: '500px'
          });
          dialogRef.afterClosed().subscribe(function (response) {
            _this27.authService.resetPassword(response).then(function () {
              _this27.toastService.success('Password reset link sent successfully.');
            })["catch"](function (error) {
              _this27.toastService.error('Could not send password reset link. Try later.');
            });
          });
        }
      }, {
        key: "continueAsGuest",
        value: function continueAsGuest() {
          this.storageService.startGuestUserSession();
          this.router.navigate(['dashboard']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/home/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/privacypolicy/privacypolicy.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/home/signup/privacypolicy/privacypolicy.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupPrivacypolicyPrivacypolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3ByaXZhY3lwb2xpY3kvcHJpdmFjeXBvbGljeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/signup/privacypolicy/privacypolicy.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/signup/privacypolicy/privacypolicy.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppHomeSignupPrivacypolicyPrivacypolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyComponent = /*#__PURE__*/function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacypolicy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/privacypolicy/privacypolicy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacypolicy.component.css */
      "./src/app/home/signup/privacypolicy/privacypolicy.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/signup-status/signup-status.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/home/signup/signup-status/signup-status.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupSignupStatusSignupStatusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step {\n  display: flex;\n  align-items: center;\n}\n\n.particular {\n  flex: 1;\n}\n\n#content {\n  margin-bottom: 30px;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLXN0YXR1cy9zaWdudXAtc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLXN0YXR1cy9zaWdudXAtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJ0aWN1bGFyIHtcbiAgZmxleDogMTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/signup/signup-status/signup-status.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/signup/signup-status/signup-status.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SignupStatusComponent */

  /***/
  function srcAppHomeSignupSignupStatusSignupStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupStatusComponent", function () {
      return SignupStatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SignupStatusComponent = /*#__PURE__*/function () {
      function SignupStatusComponent(dialogRef, data) {
        _classCallCheck(this, SignupStatusComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(SignupStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPrimaryClick",
        value: function onPrimaryClick() {
          this.dialogRef.close('SUCCESS');
        }
      }, {
        key: "onSecondaryClick",
        value: function onSecondaryClick() {
          this.dialogRef.close('CANCEL');
        }
      }]);

      return SignupStatusComponent;
    }();

    SignupStatusComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SignupStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-status.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-status/signup-status.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-status.component.css */
      "./src/app/home/signup/signup-status/signup-status.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], SignupStatusComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  padding-top: 10px;\n}\n\n#register-container {\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n.background {\n  /* background: url(\"assets/languages/100-Common/images/register_bg.jpg\") center center; */\n  background-size: cover;\n}\n\n.register-panel{\n  margin-top: 10px;\n  margin-bottom: 100px;\n}\n\n.card{\n  padding: 10px 0 30px;\n  font-size: 15px;\n}\n\n.card h2{\n  text-align: center;\n}\n\n.feature{\n  display: flex;\n  /*width: 100%;*/\n  flex: 1;\n  margin-top: 50px;\n}\n\n.feature .icon{\n  width: 40px;\n}\n\n.feature .icon i{\n  font-size: 2.6em;\n}\n\n.feature .desc{\n  flex: 1;\n  margin-left: 10px;\n}\n\n.feature .desc p{\n  margin-top: 17px;\n}\n\n.feature .desc h4{\n  margin-top: 8px;\n}\n\n.form-part{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-left: 25px;\n}\n\n.form-part .row{\n  width: 100%;\n  display: flex;\n  position: relative;\n  flex-flow: row;\n}\n\n.form-part .row .mat-input-container{\n  width: 100%;\n}\n\n.form-part .row i{\n  margin-right: 13px;\n  position: relative;\n  top: 8px;\n  color: #555;\n}\n\n.form-part .socials{\n  margin-top: 40px;\n  margin-bottom: 25px;\n}\n\n.form-part .row button{\n  margin-top: 15px;\n}\n\n.mb-label{\n  display: block;\n  font-weight: 500;\n}\n\n.mb-input-group{\n  display: inline;\n}\n\n.mb-input-group .custom-select{\n  width: 60px;\n}\n\n.custom-select {\n  height: auto;;\n}\n\n.mb-icon{\n  margin-bottom: 9px;\n}\n\n.mb-margintop{\n  margin-top: 15px;\n}\n\n.mb-radio-btn {\n  margin: 0 10px;\n}\n\n.mb-cc{\n  margin-top: 30px;\n  width: 113px;\n  overflow: hidden;\n}\n\n.mb-floatright{\n  text-align: right;\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n\n#passwordGroup > div {\n  width: 100%;\n}\n\n.amount-due {\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.amount {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #9c27b0;\n    border-radius: 3px;\n    font-size: 24px;\n    font-weight: bold !important;\n    height: 100%;\n    padding: 10px 0;\n}\n\n.stripe-badge {\n  margin-bottom: 5px;\n}\n\n.terms {\n  display: flex;\n  align-items: center;\n}\n\n#termsandconditions .modal-dialog,\n#privacypolicy .modal-dialog {\n  height: 94%;\n}\n\n#termsandconditions .modal-content,\n#privacypolicy .modal-content {\n\n  height: 100%;\n}\n\n#termsandconditions .modal-body,\n#privacypolicy .modal-body {\n\n  height: 82%;\n  overflow: hidden;\n  padding-right: 0;\n  font-family: 'Avenir Next' !important;\n}\n\n.language{\n  margin-right: 15px;\n}\n\n.failure {\n  color: red;\n}\n\n.success {\n  color: green;\n}\n\n.registration-status {\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n\n.registration-status .step {\n  font-weight: 600;\n}\n\n#exp-date  {\n  margin-top: 17px;\n}\n\n#payment {\n  margin-top: 20px;\n}\n\n.pay-row {\n  flex-flow: row;\n}\n\n.payment-group {\n  height: 100%;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n\n#login {\n  position: absolute;\n  right: 20px;\n}\n\n.type-name {\n  margin: 0 20px 0 5px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  color: #000;\n  text-decoration: none;\n}\n\n.term-links {\n  display: inline;\n}\n\n#expirationYear {\n  width: 90px;\n}\n\n.plan-type {\n  display: inline;\n}\n\n/* ----media query----- */\n\n@media only screen and (max-width: 800px) {\n\n  #register-container {\n    padding: 0;\n  }\n\n  .form-part {\n    padding-left: 0;\n  }\n\n  .form-part .row {\n    flex-flow: wrap;\n  }\n  \n  .pay-row {\n    flex-flow: wrap;\n  }\n\n  .card-details {\n    margin-top: 20px;\n  }\n\n  .term-links {\n    display: block;\n  }\n\n  #signup {\n    width: 100%;\n    font-size: 20px;\n    padding: 5px;\n  }\n\n  .plan-type {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFHOUIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUc5QixzQkFBc0I7RUFDdEIscUNBQXFDO0VBR3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlGQUF5RjtFQUN6RixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLHlCQUF5Qjs7QUFDekI7O0VBRUU7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuI3JlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtby1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC8qIGJhY2tncm91bmQ6IHVybChcImFzc2V0cy9sYW5ndWFnZXMvMTAwLUNvbW1vbi9pbWFnZXMvcmVnaXN0ZXJfYmcuanBnXCIpIGNlbnRlciBjZW50ZXI7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5yZWdpc3Rlci1wYW5lbHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jYXJke1xuICBwYWRkaW5nOiAxMHB4IDAgMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZCBoMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmVhdHVyZXtcbiAgZGlzcGxheTogZmxleDtcbiAgLyp3aWR0aDogMTAwJTsqL1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZmVhdHVyZSAuaWNvbntcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5mZWF0dXJlIC5pY29uIGl7XG4gIGZvbnQtc2l6ZTogMi42ZW07XG59XG5cbi5mZWF0dXJlIC5kZXNje1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZlYXR1cmUgLmRlc2MgcHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cblxuLmZlYXR1cmUgLmRlc2MgaDR7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmZvcm0tcGFydHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmZvcm0tcGFydCAucm93e1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuLmZvcm0tcGFydCAucm93IC5tYXQtaW5wdXQtY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tcGFydCAucm93IGl7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5mb3JtLXBhcnQgLnNvY2lhbHN7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLXBhcnQgLnJvdyBidXR0b257XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5tYi1sYWJlbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYi1pbnB1dC1ncm91cHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubWItaW5wdXQtZ3JvdXAgLmN1c3RvbS1zZWxlY3R7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGhlaWdodDogYXV0bzs7XG59XG5cbi5tYi1pY29ue1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG59XG5cbi5tYi1tYXJnaW50b3B7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5tYi1yYWRpby1idG4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLm1iLWNje1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTEzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYi1mbG9hdHJpZ2h0e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcGFzc3dvcmRHcm91cCA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYW1vdW50LWR1ZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmFtb3VudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjOWMyN2IwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uc3RyaXBlLWJhZGdlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGVybXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdGVybXNhbmRjb25kaXRpb25zIC5tb2RhbC1kaWFsb2csXG4jcHJpdmFjeXBvbGljeSAubW9kYWwtZGlhbG9nIHtcbiAgaGVpZ2h0OiA5NCU7XG59XG5cbiN0ZXJtc2FuZGNvbmRpdGlvbnMgLm1vZGFsLWNvbnRlbnQsXG4jcHJpdmFjeXBvbGljeSAubW9kYWwtY29udGVudCB7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jdGVybXNhbmRjb25kaXRpb25zIC5tb2RhbC1ib2R5LFxuI3ByaXZhY3lwb2xpY3kgLm1vZGFsLWJvZHkge1xuXG4gIGhlaWdodDogODIlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBmb250LWZhbWlseTogJ0F2ZW5pciBOZXh0JyAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2V7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZhaWx1cmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnJlZ2lzdHJhdGlvbi1zdGF0dXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yZWdpc3RyYXRpb24tc3RhdHVzIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2V4cC1kYXRlICB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbiNwYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBheS1yb3cge1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuLnBheW1lbnQtZ3JvdXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNsb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi50eXBlLW5hbWUge1xuICBtYXJnaW46IDAgMjBweCAwIDVweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGVybS1saW5rcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2V4cGlyYXRpb25ZZWFyIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5wbGFuLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8qIC0tLS1tZWRpYSBxdWVyeS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG5cbiAgI3JlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5mb3JtLXBhcnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gIC5mb3JtLXBhcnQgLnJvdyB7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG4gIFxuICAucGF5LXJvdyB7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG5cbiAgLmNhcmQtZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC50ZXJtLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICNzaWdudXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAucGxhbi10eXBlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppHomeSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/validators/custom-validators */
    "./src/app/shared/validators/custom-validators.ts");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _signup_status_signup_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup-status/signup-status.component */
    "./src/app/home/signup/signup-status/signup-status.component.ts");
    /* harmony import */


    var src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/enum/enum */
    "./src/app/core/enum/enum.ts");
    /* harmony import */


    var _termsandconditions_termsandconditions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./termsandconditions/termsandconditions.component */
    "./src/app/home/signup/termsandconditions/termsandconditions.component.ts");
    /* harmony import */


    var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./privacypolicy/privacypolicy.component */
    "./src/app/home/signup/privacypolicy/privacypolicy.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(route, authService, homeService, router, spinnerService, dialog, firebaseAuth) {
        _classCallCheck(this, SignupComponent);

        this.route = route;
        this.authService = authService;
        this.homeService = homeService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.dialog = dialog;
        this.firebaseAuth = firebaseAuth;
        this.months = [{
          value: '01',
          viewValue: '01'
        }, {
          value: '02',
          viewValue: '02'
        }, {
          value: '03',
          viewValue: '03'
        }, {
          value: '04',
          viewValue: '04'
        }, {
          value: '05',
          viewValue: '05'
        }, {
          value: '06',
          viewValue: '06'
        }, {
          value: '07',
          viewValue: '07'
        }, {
          value: '08',
          viewValue: '08'
        }, {
          value: '09',
          viewValue: '09'
        }, {
          value: '10',
          viewValue: '10'
        }, {
          value: '11',
          viewValue: '11'
        }, {
          value: '12',
          viewValue: '12'
        }];
        this.years = [];
        this.countries = [];
        this.price = src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__["Price"];
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          for (var i = 0; i < 10; i++) {
            this.years.push({
              value: currentYear,
              viewValue: currentYear++
            });
          }

          this.homeService.getCountries().subscribe(function (response) {
            _this28.countries = response.json();
          });
          this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])
            }, [src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].areEqual]),
            planDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('yearly', []),
            planType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Regional', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            creditCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]{16}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]),
            cardHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            cardAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            cardCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            cardCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            cardExpiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              creditCardExpirationMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
              creditCardExpirationYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            }, [src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].validDate]),
            securityCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]{3}$")]),
            addressZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]{5,6}$")]),
            agreeConditions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, [])
          });
        }
      }, {
        key: "validateNumber",
        value: function validateNumber(event) {
          var key = window.event ? event.keyCode : event.which;

          if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
          } else if (key < 48 || key > 57) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "signUp",
        value: function signUp(userRegistrationForm) {
          var _this29 = this;

          var value = this.signUpForm.value;
          this.spinnerService.show();
          var source = {
            name: value.cardHolderName,
            number: value.creditCardNumber,
            exp_month: value.cardExpiryDate.creditCardExpirationMonth,
            exp_year: value.cardExpiryDate.creditCardExpirationYear,
            cvc: value.securityCode,
            address_city: value.cardCity,
            address_country: value.cardCountry,
            address_zip: value.addressZip
          };
          var customer = {
            name: value.name,
            email: value.email,
            password: value.passwordGroup.password,
            uid: value.$uid,
            address: value.cardAddress,
            city: value.cardCity,
            country: value.cardCountry,
            zipCode: value.addressZip,
            isTrial: false
          };
          var subscription = {
            planDuration: value.planDuration,
            planType: value.planType
          };
          this.authService.signUp({
            customer: customer,
            subscription: subscription,
            source: source
          }).subscribe(function (response) {
            console.log(response);

            _this29.spinnerService.hide();

            var data = response.json();

            _this29.showSignupStatus(data);

            if (data.account) {
              _this29.authService.sendVerificationMail(customer.email, customer.password);
            }
          }, function (error) {
            _this29.spinnerService.hide();

            var data = error.json();

            _this29.showSignupStatus(data);

            if (data.account) {
              _this29.authService.sendVerificationMail(customer.email, customer.password);
            }
          });
        }
      }, {
        key: "showSignupStatus",
        value: function showSignupStatus(data) {
          var _this30 = this;

          var dialogRef = this.dialog.open(_signup_status_signup_status_component__WEBPACK_IMPORTED_MODULE_9__["SignupStatusComponent"], {
            width: '500px',
            data: data
          });
          dialogRef.afterClosed().subscribe(function (response) {
            if (response === 'SUCCESS') {
              _this30.router.navigate(['login']);
            }
          });
        }
      }, {
        key: "getPrice",
        value: function getPrice() {
          return this.price[this.signUpForm.value.planType.toUpperCase()];
        }
      }, {
        key: "termsandconditions",
        value: function termsandconditions() {
          this.dialog.open(_termsandconditions_termsandconditions_component__WEBPACK_IMPORTED_MODULE_11__["TermsAndConditionsComponent"], {
            width: '800px'
          });
        }
      }, {
        key: "privacyPolicy",
        value: function privacyPolicy() {
          this.dialog.open(_privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyPolicyComponent"], {
            width: '800px'
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/home/signup/signup.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/termsandconditions/termsandconditions.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/signup/termsandconditions/termsandconditions.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupTermsandconditionsTermsandconditionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3Rlcm1zYW5kY29uZGl0aW9ucy90ZXJtc2FuZGNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/signup/termsandconditions/termsandconditions.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/signup/termsandconditions/termsandconditions.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TermsAndConditionsComponent */

  /***/
  function srcAppHomeSignupTermsandconditionsTermsandconditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
      return TermsAndConditionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsAndConditionsComponent = /*#__PURE__*/function () {
      function TermsAndConditionsComponent() {
        _classCallCheck(this, TermsAndConditionsComponent);
      }

      _createClass(TermsAndConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsAndConditionsComponent;
    }();

    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./termsandconditions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/termsandconditions/termsandconditions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./termsandconditions.component.css */
      "./src/app/home/signup/termsandconditions/termsandconditions.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TermsAndConditionsComponent);
    /***/
  },

  /***/
  "./src/app/profile/change-password/change-password.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/profile/change-password/change-password.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileChangePasswordChangePasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/change-password/change-password.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/profile/change-password/change-password.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppProfileChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(profileService, toastService, dialogRef, data) {
        _classCallCheck(this, ChangePasswordComponent);

        this.profileService = profileService;
        this.toastService = toastService;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendResetPasswordLink",
        value: function sendResetPasswordLink() {
          var _this31 = this;

          this.profileService.resetPassword(this.data.email).then(function () {
            _this31.toastService.success('Password reset link sent!');

            _this31.dialogRef.close();
          })["catch"](function (error) {
            _this31.toastService.success('Unable to send reset link at the moment. Please try later.');

            _this31.dialogRef.close();
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/change-password/change-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.css */
      "./src/app/profile/change-password/change-password.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-container {\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n.info-header {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #434443;\n  font-family: sans-serif;\n  background: rgb(245, 245, 245);\n  width: 100%;\n  border-bottom: 1px solid #e6e5e5;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.info-block {\n  border: 1px solid e2e4e2;\n  margin-bottom: 18px;\n  padding-top: 0;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0px 3px 4px 0px #bdbcbc;\n  -webkit-animation-name: onload;\n          animation-name: onload;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.mb-field {\n  margin-bottom: 5px;\n}\n\n.field-label {\n  font-weight: 600;\n}\n\n.field-label, .field-value {\n  font-size: 14px;\n  font-family: sans-serif;\n  color: #434443;\n}\n\n.edit-link {\n  font-size: 13px;\n  color:     blue;\n  text-decoration: underline;\n  margin-left:  20px;\n  cursor: pointer;\n}\n\n.cancel{\n  margin-left: 0px;\n}\n\n.mb-row-header, .modal-field-label {\n  font-size: 14px;\n  font-family: sans-serif;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.mb-row-header .col-sm-2, .mb-row .col-sm-2{\n  border-left: 1px solid black;\n}\n\n.mb-row-header, .mb-row{\n  height: 25px;\n}\n\n.mb-row-header > div , .mb-row > div {\n  display: flex;\n  align-items: center;\n}\n\n.mb-lang-row {\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n\n.row.mb-lang-row > div {\n  font-weight: 600;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n\n.info-sub-header{\n  padding:  15px 0;\n  color: green;\n  font-size: 15px;\n}\n\n.modal-field-value, .sub-plans > div{\n  font-weight: 600;\n  font-size: 14px;\n  font-family: sans-serif;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.modal-field-value > input{\nwidth: 80%;\n}\n\n.modal .row {\n  flex-wrap: nowrap;\n}\n\n.plan-info{\n  border: 1px solid #aaa;\n  border-bottom: 0;\n}\n\n.plan-info.last{\n  border-bottom: 1px solid #aaa;\n}\n\n.error {\n  color: red;\n}\n\n.sub-plans {\n  display: flex;\n}\n\n.sub-plans > div{\n  margin-right: 20px;\n  padding: 0;\n}\n\n.sub-plans > div > input{\n  margin-right: 6px;\n}\n\n.no-column {\n  border: 0;\n}\n\n.lang-lable {\n  color: #6d6c6c;\n}\n\n.removed {\n  color: red;\n  font-weight: bold;\n}\n\n.disable {\n  background: #aaa;\n}\n\n#undo-suspend {\n  margin-left: 0;\n}\n\n.modal-body {\n  font-family: sans-serif !important;\n}\n\n#profile-detail {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFHOUIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUc5QixzQkFBc0I7RUFDdEIscUNBQXFDO0VBR3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtby1hbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaW5mby1oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNDM0NDQzO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU1ZTU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmluZm8tYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCBlMmU0ZTI7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNHB4IDBweCAjYmRiY2JjO1xuICBhbmltYXRpb24tbmFtZTogb25sb2FkO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4ubWItZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWVsZC1sYWJlbCwgLmZpZWxkLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0MzQ0NDM7XG59XG5cbi5lZGl0LWxpbmsge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAgICAgYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAgMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhbmNlbHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLm1iLXJvdy1oZWFkZXIsIC5tb2RhbC1maWVsZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5tYi1yb3ctaGVhZGVyIC5jb2wtc20tMiwgLm1iLXJvdyAuY29sLXNtLTJ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tYi1yb3ctaGVhZGVyLCAubWItcm93e1xuICBoZWlnaHQ6IDI1cHg7XG59IFxuXG4ubWItcm93LWhlYWRlciA+IGRpdiAsIC5tYi1yb3cgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWItbGFuZy1yb3cge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5yb3cubWItbGFuZy1yb3cgPiBkaXYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaW5mby1zdWItaGVhZGVye1xuICBwYWRkaW5nOiAgMTVweCAwO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1vZGFsLWZpZWxkLXZhbHVlLCAuc3ViLXBsYW5zID4gZGl2e1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubW9kYWwtZmllbGQtdmFsdWUgPiBpbnB1dHtcbndpZHRoOiA4MCU7XG59XG5cbi5tb2RhbCAucm93IHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5wbGFuLWluZm97XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5wbGFuLWluZm8ubGFzdHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWItcGxhbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ViLXBsYW5zID4gZGl2e1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zdWItcGxhbnMgPiBkaXYgPiBpbnB1dHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5uby1jb2x1bW4ge1xuICBib3JkZXI6IDA7XG59XG5cbi5sYW5nLWxhYmxlIHtcbiAgY29sb3I6ICM2ZDZjNmM7XG59XG5cbi5yZW1vdmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXNhYmxlIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cblxuI3VuZG8tc3VzcGVuZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbiNwcm9maWxlLWRldGFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _home_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _core_enum_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/enum/enum */
    "./src/app/core/enum/enum.ts");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/dialogs/message-dialog/message-dialog.component */
    "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/profile/change-password/change-password.component.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(storageService, homeService, profileService, dialog) {
        _classCallCheck(this, ProfileComponent);

        this.storageService = storageService;
        this.homeService = homeService;
        this.profileService = profileService;
        this.dialog = dialog;
        this.planType = _core_enum_enum__WEBPACK_IMPORTED_MODULE_5__["PlanType"];
        this.selectedPlanType = _core_enum_enum__WEBPACK_IMPORTED_MODULE_5__["PlanType"].REGIONAL;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.userData = this.storageService.getUser();
          this.subscriptionData = this.storageService.getSubscription();

          if (this.subscriptionData) {
            this.selectedPlanType = this.subscriptionData.plan || this.selectedPlanType;
            this.getSubscriptionData();
          }

          if (!this.userData.isActive) {
            this.homeService.getPlans().subscribe(function (response) {
              _this32.plans = response.json();
              console.log(_this32.plans);
            }, function (error) {
              console.log(error);
            });
          }
        } //stripe checkout window in profile

      }, {
        key: "openCheckout",
        value: function openCheckout(isActive) {
          var _this33 = this;

          var selectedPlanDetails;

          var _iterator = _createForOfIteratorHelper(this.plans.data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var plan = _step.value;

              if (plan.nickname.toLowerCase().indexOf(this.selectedPlanType.toLowerCase()) !== -1) {
                selectedPlanDetails = {
                  type: this.selectedPlanType,
                  amount: plan.amount,
                  interval: plan.interval
                };
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var handler = window['StripeCheckout'].configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripe_public_key,
            // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            image: 'assets/images/Logo-Full-Black.png',
            locale: 'auto',
            billingAddress: true,
            token: function token(_token) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              var customer = {
                email: _this33.userData.email,
                uid: _this33.userData.uid
              };
              var subscription = {
                planType: _this33.selectedPlanType,
                planDuration: 'yearly'
              };
              var source = _token.id;
              var headers = new Headers();
              headers.append('Content-Type', 'application/json');

              _this33.profileService.updateBilling({
                customer: customer,
                source: source,
                subscription: subscription
              }).subscribe(function (data) {
                _this33.userData.isActive = true;

                _this33.dialog.open(_shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MessageDialogComponent"], {
                  width: '500px',
                  data: {
                    message: 'Billing information updated successfully. You have subscribed to ' + _this33.selectedPlanType + ' - yearly plan.',
                    description: '',
                    primaryBtn: 'Close'
                  }
                });
              }, function (error) {
                alert("Payment Transaction Failed."); // this.router.navigate(['']);
              });
            }
          });
          var checkoutConfig = {
            name: 'Spelldone',
            description: selectedPlanDetails.type + ' ($ ' + selectedPlanDetails.amount / 100 + ' per ' + selectedPlanDetails.interval + ')',
            email: this.userData.email,
            zipCode: true,
            panelLabel: 'Subscribe'
          };
          handler.open(checkoutConfig);
        }
      }, {
        key: "changeCardDetails",
        value: function changeCardDetails() {
          var _this34 = this;

          var handler = window['StripeCheckout'].configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripe_public_key,
            image: 'assets/images/Logo-Full-Black.png',
            locale: 'auto',
            billingAddress: true,
            token: function token(_token2) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              var customer = {
                email: _this34.userData.email,
                uid: _this34.userData.uid
              };
              var source = _token2.id;
              var headers = new Headers();
              headers.append('Content-Type', 'application/json');

              _this34.profileService.changeCard({
                customer: customer,
                source: source
              }).subscribe(function (data) {
                _this34.userData.isActive = true;

                _this34.getSubscriptionData();

                _this34.dialog.open(_shared_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MessageDialogComponent"], {
                  width: '500px',
                  data: {
                    message: 'Card details updated successfully.',
                    description: '',
                    primaryBtn: 'Close'
                  }
                });
              }, function (error) {
                alert("Failed to update card details.");
              });
            }
          });
          var checkoutConfig = {
            name: 'Spelldone',
            email: this.userData.email,
            zipCode: true,
            panelLabel: 'Submit'
          };
          handler.open(checkoutConfig);
        }
      }, {
        key: "getSubscriptionData",
        value: function getSubscriptionData() {
          var _this35 = this;

          this.profileService.getPaymentDetails(this.userData.uid).subscribe(function (response) {
            console.log(response);
            _this35.cardDetails = response.json();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"], {
            width: '500px',
            data: {
              email: this.userData.email
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.service.ts":
  /*!********************************************!*\
    !*** ./src/app/profile/profile.service.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _core_sdconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/sdconfig */
    "./src/app/core/sdconfig.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http, firebaseAuth) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.firebaseAuth = firebaseAuth;
      }

      _createClass(ProfileService, [{
        key: "updateBilling",
        value: function updateBilling(params) {
          return this.http.post(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/subscription/updatebilling", params);
        }
      }, {
        key: "changeCard",
        value: function changeCard(params) {
          return this.http.post(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/subscription/changecard", params);
        }
      }, {
        key: "getPaymentDetails",
        value: function getPaymentDetails(uid) {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/subscription/payment-detail", {
            params: {
              uid: uid
            }
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          return this.firebaseAuth.auth.sendPasswordResetEmail(email);
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])], ProfileService);
    /***/
  },

  /***/
  "./src/app/search/search.component.css":
  /*!*********************************************!*\
    !*** ./src/app/search/search.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#dictionary-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n}\n\n#search-box {\n  display: flex;\n}\n\ninput {\n  width: 200px;\n  font-size: 20px;\n}\n\nbutton {\n  padding: 8px;\n}\n\n.error-msg {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpY3Rpb25hcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jc2VhcmNoLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_serch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/serch.service */
    "./src/app/shared/serch.service.ts");
    /* harmony import */


    var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(searchService, spinnerService) {
        _classCallCheck(this, SearchComponent);

        this.searchService = searchService;
        this.spinnerService = spinnerService;
        this.details = {};
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getWordDetails",
        value: function getWordDetails() {
          var _this36 = this;

          this.spinnerService.show();
          this.searchService.getWordDetails('English', this.wordId).subscribe(function (response) {
            var result = response.json().result;

            if (result) {
              _this36.formatData(result);
            } else {
              _this36.details = undefined;
              _this36.errorMsg = "Word not found!";

              _this36.spinnerService.hide();
            }
          }, function (error) {
            console.log(error);

            _this36.spinnerService.hide();
          });
        }
      }, {
        key: "formatData",
        value: function formatData(results) {
          var entries = results.lexicalEntries;
          var details = {
            id: results.id,
            word: results.word,
            languageOfOrigin: entries[0].entries[0].etymologies,
            lexicalEntries: entries,
            selectedCategory: entries[0]
          };
          this.details = details;
          this.spinnerService.hide();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _shared_serch_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
      }, {
        type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/search/search.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_serch_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])], SearchComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDialogsConfirmDialogConfirmDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-dialog-actions{\n  flex-direction: row-reverse;\n}\n\n#assign-link {\n  width: 100%;\n  border: 0;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnN7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuI2Fzc2lnbi1saW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedDialogsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mb-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm-dialog.component.css */
      "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/dialog.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/dialogs/dialog.module.ts ***!
    \*************************************************/

  /*! exports provided: DialogModule */

  /***/
  function srcAppSharedDialogsDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return DialogModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./message-dialog/message-dialog.component */
    "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-dialog/edit-dialog.component */
    "./src/app/shared/dialogs/edit-dialog/edit-dialog.component.ts");

    var DialogModule = function DialogModule() {
      _classCallCheck(this, DialogModule);
    };

    DialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]],
      declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MessageDialogComponent"], _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"]],
      entryComponents: [_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MessageDialogComponent"], _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"]],
      exports: []
    })], DialogModule);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/edit-dialog/edit-dialog.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/dialogs/edit-dialog/edit-dialog.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDialogsEditDialogEditDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3MvZWRpdC1kaWFsb2cvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL2VkaXQtZGlhbG9nL2VkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/dialogs/edit-dialog/edit-dialog.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/dialogs/edit-dialog/edit-dialog.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EditDialogComponent */

  /***/
  function srcAppSharedDialogsEditDialogEditDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function () {
      return EditDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var EditDialogComponent = /*#__PURE__*/function () {
      function EditDialogComponent(dialogRef, data) {
        _classCallCheck(this, EditDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(EditDialogComponent, [{
        key: "onPrimaryClick",
        value: function onPrimaryClick() {
          this.dialogRef.close({
            status: 'SUCCESS',
            value: this.data.value
          });
        }
      }, {
        key: "onSecondaryClick",
        value: function onSecondaryClick() {
          this.dialogRef.close({
            status: 'CANCEL'
          });
        }
      }]);

      return EditDialogComponent;
    }();

    EditDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/edit-dialog/edit-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../confirm-dialog/confirm-dialog.component.css */
      "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-dialog.component.css */
      "./src/app/shared/dialogs/edit-dialog/edit-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], EditDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/dialogs/message-dialog/message-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: MessageDialogComponent */

  /***/
  function srcAppSharedDialogsMessageDialogMessageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function () {
      return MessageDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MessageDialogComponent = /*#__PURE__*/function () {
      function MessageDialogComponent(dialogRef, data) {
        _classCallCheck(this, MessageDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(MessageDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('sdfds');
        }
      }, {
        key: "onPrimaryClick",
        value: function onPrimaryClick() {
          this.dialogRef.close('SUCCESS');
        }
      }, {
        key: "onSecondaryClick",
        value: function onSecondaryClick() {
          this.dialogRef.close('CANCEL');
        }
      }]);

      return MessageDialogComponent;
    }();

    MessageDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mb-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/message-dialog/message-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../confirm-dialog/confirm-dialog.component.css */
      "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], MessageDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#dashboard-header {\n  background: #006341;\n  color: #fff;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n\n.logo {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.logo .name {\n  font-size: 27px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.logo img {\n  margin-right: 10px;\n}\n\n#toggle-menu {\n  display: none;\n}\n\n.link {\n  color: #fff;\n}\n\n.acitons {\n  display: flex;\n  align-items: center;\n}\n\n.acitons .link:hover {\n  text-decoration: underline !important;\n}\n\n.action {\n  margin-right: 10px;\n}\n\n.action-icon {\n  margin-right: 5px;\n  font-size: 18px;\n}\n\n#username {\n  margin-left: 20px;\n}\n\n#logo-img {\n  margin-right: 10px;\n  width: 60px;\n  height: 40px;\n  border-radius: 0;\n}\n\n/* ----mewdia query----- */\n\n@media only screen and (max-width: 800px) {\n  #toggle-menu {\n    display: block;\n    font-size: 20px;\n  }\n\n  .acitons {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA2MzQxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28gLm5hbWUge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9nbyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiN0b2dnbGUtbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hY2l0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjaXRvbnMgLmxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI2xvZ28taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vKiAtLS0tbWV3ZGlhIHF1ZXJ5LS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI3RvZ2dsZS1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuYWNpdG9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/message.service */
    "./src/app/shared/services/message.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, storageService, messageService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.storageService = storageService;
        this.messageService = messageService;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = this.storageService.getUser();
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          // this.toggleSidebar.emit();
          this.messageService.toggleSidbar();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storageService.logout();
          this.router.navigate(['login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "hideToggleButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "isProfilePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeaderComponent.prototype, "toggleSidebar", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/shared/header/header.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/log.service.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/log.service.ts ***!
    \***************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppSharedLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/sdconfig */
    "./src/app/core/sdconfig.ts");

    var LogService = /*#__PURE__*/function () {
      function LogService(http) {
        _classCallCheck(this, LogService);

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
      }

      _createClass(LogService, [{
        key: "logReponse",
        value: function logReponse(type, data, uid) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/" + uid, data);
        }
      }, {
        key: "logPracticeState",
        value: function logPracticeState(data, uid) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/practice/state/" + uid, data);
        }
      }, {
        key: "logTestState",
        value: function logTestState(data, uid) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/test/state/" + uid, data);
        }
      }, {
        key: "clearUserState",
        value: function clearUserState(uid) {
          return this.http["delete"](src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/state/" + uid);
        } // get previous results of a given word.

      }, {
        key: "getLog",
        value: function getLog(data, uid) {
          return this.http.get(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/word/" + uid, {
            params: data
          });
        } // get logs of all sets of a given level.

      }, {
        key: "getLogsByLevel",
        value: function getLogsByLevel(data, uid) {
          return this.http.get(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/level/" + uid, {
            params: data
          });
        } // add a favorite word.

      }, {
        key: "addFavorite",
        value: function addFavorite(data, uid) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/add-favorite/" + uid, data);
        } // remove a favorite word.

      }, {
        key: "removeFavorite",
        value: function removeFavorite(data, uid) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/log/remove-favorite/" + uid, data);
        }
      }]);

      return LogService;
    }();

    LogService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], LogService);
    /***/
  },

  /***/
  "./src/app/shared/route-guards/auth.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/route-guards/auth.guard.ts ***!
    \***************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedRouteGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(storageService, router, authService, spinnerService) {
        _classCallCheck(this, AuthGuard);

        this.storageService = storageService;
        this.router = router;
        this.authService = authService;
        this.spinnerService = spinnerService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this37 = this;

          var self = this;
          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            if (_this37.storageService.checkToken()) {
              if (!_this37.storageService.getUser()) {
                var token = _this37.storageService.getToken();

                _this37.spinnerService.show(); // get user data from DB.


                _this37.authService.signIn({
                  token: token
                }).subscribe(function (response) {
                  var data = response.json();
                  data.userData.userLastState = data.userLastState;

                  _this37.storageService.setUser(data.userData);

                  _this37.storageService.setSubscription(data.subscription);

                  _this37.spinnerService.hide();

                  if (data.userData.isActive) {
                    observer.next(true);
                  } else {
                    _this37.router.navigate(['/profile']);
                  }
                }, function (error) {
                  observer.next(false);

                  _this37.storageService.logout();

                  self.router.navigate(['login']);

                  _this37.spinnerService.hide();
                });
              } else {
                observer.next(true);
              } // return Observable.of(true);

            } else if (_this37.storageService.isGuestUser()) {
              observer.next(true);
            } else {
              self.router.navigate(['login']);
              observer.next(false);
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/route-guards/login.guard.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/route-guards/login.guard.ts ***!
    \****************************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppSharedRouteGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(storageService, router) {
        _classCallCheck(this, LoginGuard);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.storageService.checkToken()) {
            this.router.navigate(['dashboard']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginGuard);
    /***/
  },

  /***/
  "./src/app/shared/route-guards/route-guard.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/route-guards/route-guard.module.ts ***!
    \***********************************************************/

  /*! exports provided: RouteGuardsModule */

  /***/
  function srcAppSharedRouteGuardsRouteGuardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuardsModule", function () {
      return RouteGuardsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/shared/route-guards/auth.guard.ts");
    /* harmony import */


    var _login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.guard */
    "./src/app/shared/route-guards/login.guard.ts");

    var RouteGuardsModule = function RouteGuardsModule() {
      _classCallCheck(this, RouteGuardsModule);
    };

    RouteGuardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    })], RouteGuardsModule);
    ;
    /***/
  },

  /***/
  "./src/app/shared/serch.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/serch.service.ts ***!
    \*****************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppSharedSerchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _core_sdconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/sdconfig */
    "./src/app/core/sdconfig.ts");

    var SearchService = /*#__PURE__*/function () {
      function SearchService(http) {
        _classCallCheck(this, SearchService);

        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
      }

      _createClass(SearchService, [{
        key: "getWordDetails",
        value: function getWordDetails(language, wordId) {
          return this.http.get(_core_sdconfig__WEBPACK_IMPORTED_MODULE_3__["sdconfig"].backendHost + "/search/" + wordId, {
            params: {
              language: language
            }
          });
        }
      }]);

      return SearchService;
    }();

    SearchService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], SearchService);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/sdconfig */
    "./src/app/core/sdconfig.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dialogs/message-dialog/message-dialog.component */
    "./src/app/shared/dialogs/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/enum/enum */
    "./src/app/core/enum/enum.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router, _storageService, firebaseAuth, ngZone, dialog) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this._storageService = _storageService;
        this.firebaseAuth = firebaseAuth;
        this.ngZone = ngZone;
        this.dialog = dialog;
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(data) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_5__["sdconfig"].backendHost + "/user/signup", data);
        }
      }, {
        key: "signIn",
        value: function signIn(data) {
          return this.http.get(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_5__["sdconfig"].backendHost + "/user/signin", {
            params: data
          });
        }
      }, {
        key: "createUser",
        value: function createUser(data) {
          return this.http.post(src_app_core_sdconfig__WEBPACK_IMPORTED_MODULE_5__["sdconfig"].backendHost + "/user/create", data);
        }
        /* Sign in with Google */

      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this38 = this;

          return new Promise(function (resolve, reject) {
            var provider = new firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].GoogleAuthProvider();
            provider.setCustomParameters({
              prompt: 'select_account'
            });
            firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithPopup(provider).then(function (result) {
              _this38.ngZone.run(function () {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const token = result.credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.getIdToken().then(function (idToken) {
                  if (result.additionalUserInfo.isNewUser) {
                    _this38.createUserRecord(result, idToken, src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__["OauthProvider"].GOOGLE, result.additionalUserInfo.isNewUser, resolve);
                  } else {
                    resolve({
                      isNewUser: result.additionalUserInfo.isNewUser,
                      uid: result.user.uid,
                      token: idToken,
                      emailVerified: result.user.emailVerified
                    });
                  }
                })["catch"](function (error) {
                  // Handle error
                  console.log(error);
                });
              });
            })["catch"](function (error) {
              // Handle Errors here.
              reject(error);
            });
          });
        }
        /* Sign in with Facebook */

      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          var _this39 = this;

          return new Promise(function (resolve, reject) {
            var provider = new firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].FacebookAuthProvider();
            provider.setCustomParameters({
              'display': 'popup',
              'auth_type': 'reauthenticate'
            });
            provider.addScope('email');
            firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithPopup(provider).then(function (result) {
              _this39.ngZone.run(function () {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // let token = result.credential.accessToken;
                // The signed-in user info.
                // let user = result.user;
                firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.getIdToken().then(function (idToken) {
                  if (result.additionalUserInfo.isNewUser) {
                    if (result.user.emailVerified) {
                      _this39.createUserRecord(result, idToken, src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__["OauthProvider"].FACEBOOK, result.additionalUserInfo.isNewUser, resolve);
                    } else if (result.user.email) {
                      _this39.sendEmailVerification(result.user.email, true, resolve);
                      /* setTimeout(() => {
                        resolve({});
                      }, 1000); */

                    } else {
                      _this39.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], {
                        width: '500px',
                        data: {
                          message: 'We require your Email ID to continue.',
                          description: 'Make sure you have attached an Email ID to your Facebook account.'
                        }
                      });

                      setTimeout(function () {
                        resolve({});
                      });
                    }
                  } else {
                    if (result.user.emailVerified) {
                      _this39.signIn({
                        token: idToken
                      }).subscribe(function (response) {
                        var data = response.json();

                        if (data.userData) {
                          resolve({
                            isNewUser: result.additionalUserInfo.isNewUser,
                            uid: result.user.uid,
                            token: idToken,
                            emailVerified: result.user.emailVerified
                          });
                        } else {
                          _this39.createUserRecord(result, idToken, src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_10__["OauthProvider"].FACEBOOK, result.additionalUserInfo.isNewUser, resolve);
                        }
                      }, function (error) {
                        console.log(error);
                        reject(error);
                      });
                    } else if (result.user.email) {
                      _this39.emailIdNotVerified(result.user.email, resolve);
                    } else {
                      _this39.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], {
                        width: '500px',
                        data: {
                          message: 'We require your Email ID to continue.',
                          description: 'Make sure you have attached an Email ID to your Facebook account.'
                        }
                      });

                      setTimeout(function () {
                        resolve({});
                      });
                    }
                  }
                })["catch"](function (error) {
                  // Handle error
                  console.log(error);
                });
              });
            })["catch"](function (error) {
              // Handle Errors here.
              reject(error);
            });
          });
        }
      }, {
        key: "createUserRecord",
        value: function createUserRecord(result, idToken, provider, isNewUser, resolve) {
          this.createUser({
            customer: {
              isTrial: true
            },
            idToken: idToken,
            uid: result.user.uid,
            provider: provider
          }).subscribe(function (response) {
            console.log(response);
            resolve({
              isNewUser: isNewUser,
              uid: result.user.uid,
              token: idToken,
              emailVerified: result.user.emailVerified
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          return this.firebaseAuth.auth.sendPasswordResetEmail(email);
        }
      }, {
        key: "sendVerificationMail",
        value: function sendVerificationMail(email, password, showSuccessMsg) {
          var _this40 = this;

          this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
            _this40.sendEmailVerification(email, showSuccessMsg);
          })["catch"](function (error) {
            console.log('User is not logged in: ' + error.message);
          });
        }
      }, {
        key: "emailIdNotVerified",
        value: function emailIdNotVerified(email, resolve) {
          var _this41 = this;

          this.ngZone.run(function () {
            _this41.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], {
              width: '500px',
              data: {
                message: "Email Verification",
                description: "Your Email ID has not been verified. Please click 'Send Verification' button to resend",
                primaryBtn: 'Send Verification',
                secondaryBtn: 'Close',
                verifyEmail: true
              }
            }).afterClosed().subscribe(function (response) {
              if (response === 'SUCCESS') {
                _this41.sendEmailVerification(email, true, resolve);
              } else {
                if (resolve) {
                  resolve({});
                }
              }
            });
          });
        }
      }, {
        key: "sendEmailVerification",
        value: function sendEmailVerification(email, showSuccessMsg, resolve) {
          var _this42 = this;

          this.firebaseAuth.auth.currentUser.sendEmailVerification().then(function () {
            _this42.ngZone.run(function () {
              if (showSuccessMsg) {
                _this42.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], {
                  width: '500px',
                  data: {
                    description: 'Verification Email has been sent to ' + email + '. Please verify your Email ID to continue using the application.',
                    message: 'Email Verification',
                    primaryBtn: 'Close'
                  }
                }).afterClosed().subscribe(function (res) {
                  if (resolve) {
                    resolve({});
                  }
                });
              }
            });
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {}
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/message.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/message.service.ts ***!
    \****************************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppSharedServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessageService = function MessageService() {
      _classCallCheck(this, MessageService);

      this._subjectSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      this.stateSidebar = this._subjectSidebar;

      this.toggleSidbar = function () {};
    };

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MessageService);
    /***/
  },

  /***/
  "./src/app/shared/services/storage.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/storage.service.ts ***!
    \****************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);

        this.currentState = {};
      }

      _createClass(StorageService, [{
        key: "setUser",
        value: function setUser(data) {
          this.user = data;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "setUserToken",
        value: function setUserToken(token) {
          this.token = token; //1 day expiry

          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(this.encode("token"), this.encode(token), 1, "/");
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.decode(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.encode("token")));
        }
      }, {
        key: "checkToken",
        value: function checkToken() {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.encode("token"))) {
            return true;
          }

          return false;
        }
      }, {
        key: "setSubscription",
        value: function setSubscription(data) {
          this.subscription = data;
        }
      }, {
        key: "getSubscription",
        value: function getSubscription() {
          return this.subscription;
        }
      }, {
        key: "encode",
        value: function encode(token) {
          return btoa(token);
        }
      }, {
        key: "decode",
        value: function decode(token) {
          return atob(token);
        }
      }, {
        key: "setCurrentState",
        value: function setCurrentState(currentState) {
          this.currentState = currentState;
        }
      }, {
        key: "getCurrentState",
        value: function getCurrentState() {
          return this.currentState;
        }
      }, {
        key: "updateCurrentState",
        value: function updateCurrentState(property, value) {
          this.currentState[property] = value;
        }
      }, {
        key: "startGuestUserSession",
        value: function startGuestUserSession() {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(this.encode("guest"), this.encode(true), 1, "/");
        }
      }, {
        key: "isGuestUser",
        value: function isGuestUser() {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.encode("guest"))) {
            return true;
          }

          return false;
        }
      }, {
        key: "endGuestSession",
        value: function endGuestSession() {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"](this.encode('guest'), "/");
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user = null;
          this.token = null;
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"](this.encode('token'), "/");
        }
      }]);

      return StorageService;
    }();

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StorageService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./word-detail/word-detail.component */
    "./src/app/shared/word-detail/word-detail.component.ts");
    /* harmony import */


    var _serch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./serch.service */
    "./src/app/shared/serch.service.ts");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./log.service */
    "./src/app/shared/log.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _route_guards_route_guard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./route-guards/route-guard.module */
    "./src/app/shared/route-guards/route-guard.module.ts");
    /* harmony import */


    var _dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialogs/dialog.module */
    "./src/app/shared/dialogs/dialog.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/message.service */
    "./src/app/shared/services/message.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_11__["DialogModule"], _route_guards_route_guard_module__WEBPACK_IMPORTED_MODULE_10__["RouteGuardsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
        timeOut: 5000,
        positionClass: 'toast-top-center',
        preventDuplicates: true
      })],
      declarations: [_word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_3__["WordDetailComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]],
      exports: [_word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_3__["WordDetailComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _serch_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"], _services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/utility/utility.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/utility/utility.ts ***!
    \*******************************************/

  /*! exports provided: Utility */

  /***/
  function srcAppSharedUtilityUtilityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utility", function () {
      return Utility;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Utility = /*#__PURE__*/function () {
      function Utility() {
        _classCallCheck(this, Utility);
      }

      _createClass(Utility, null, [{
        key: "playAudio",
        value: function playAudio(ev) {
          if (ev.children) {
            ev.children[0].play();
          } else {
            ev.currentTarget.children[0].play();
          }
        }
      }, {
        key: "findObjectByKey",
        value: function findObjectByKey(id, list, key) {
          var object;

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i][key] === id) {
                object = list[i];
                break;
              }
            }
          }

          return object;
        }
      }, {
        key: "findIndexAndObjectByKey",
        value: function findIndexAndObjectByKey(id, list, key) {
          var object = {};

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i][key] === id) {
                object.data = list[i];
                object.index = i;
                break;
              }
            }
          }

          return object;
        }
      }, {
        key: "findIndexAndObjectBySubKey",
        value: function findIndexAndObjectBySubKey(id, list, key, subkey) {
          var object = {};

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i][key][subkey] === id) {
                object.data = list[i];
                object.index = i;
                break;
              }
            }
          }

          return object;
        }
      }]);

      return Utility;
    }();
    /***/

  },

  /***/
  "./src/app/shared/validators/custom-validators.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/validators/custom-validators.ts ***!
    \********************************************************/

  /*! exports provided: CustomValidators */

  /***/
  function srcAppSharedValidatorsCustomValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
      return CustomValidators;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CustomValidators = /*#__PURE__*/function () {
      function CustomValidators() {
        _classCallCheck(this, CustomValidators);
      }

      _createClass(CustomValidators, null, [{
        key: "areEqual",
        value: function areEqual(formGroup) {
          var value;
          var valid = true;

          for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
              var control = formGroup.controls[key];

              if (value === undefined) {
                value = control.value;
              } else {
                if (value !== control.value) {
                  valid = false;
                  break;
                }
              }
            }
          }

          if (valid) {
            formGroup.controls['confirmPassword'].setErrors(null);
            return null;
          } else {
            formGroup.controls['confirmPassword'].setErrors({
              NotEqual: true
            });
            return {
              NotEqual: true
            };
          }
        }
      }, {
        key: "validDate",
        value: function validDate(formGroup) {
          var month = formGroup.controls.creditCardExpirationMonth.value;
          var year = formGroup.controls.creditCardExpirationYear.value;

          if (!month || !year) {
            return null;
          }

          var date = new Date();
          var currentYear = date.getFullYear();
          var currentMonth = date.getMonth();

          if (Number(year) == currentYear) {
            if (Number(month) < currentMonth + 1) {
              formGroup.controls['creditCardExpirationMonth'].setErrors({
                inValid: true
              });
              return {
                inValid: true
              };
            }
          }

          formGroup.controls['creditCardExpirationMonth'].setErrors(null);
          return null;
        }
      }]);

      return CustomValidators;
    }();
    /***/

  },

  /***/
  "./src/app/shared/word-detail/word-detail.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/word-detail/word-detail.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedWordDetailWordDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details-container {\n  padding: 0;\n  -webkit-animation-name: fadein;\n  animation-name: fadein;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n.field {\n  display: flex;\n  font-size: 18px;\n  padding: 15px 0 5px 0;\n  font-size: 18px;\n  border-bottom: 1px solid #eee;\n}\n\n.field-label {\n  font-weight: 600;\n  color: #006341;\n}\n\n.field-value {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n\n.field-value > div {\n  /* margin: 0 5px; */\n}\n\n.word-id {\n  text-transform: capitalize;\n}\n\n.result {\n  /* margin-left: 10px; */\n  color: red;\n}\n\n.type {\n  cursor: pointer;\n  margin-right: 25px !important;\n}\n\n.type:hover {\n  color: #555;\n}\n\n.type:not(.default) {\n  color: #aaa;  \n}\n\n.type.active {\n  color: rgb(41, 117, 191);\n  border-bottom: 2px solid;\n  font-weight: 600;\n  padding-bottom: 10px;\n}\n\n.star {\n  color: #e8e6e6;\n  cursor: pointer;\n  text-shadow: 0px 0px 2px #555;\n  font-size: 20px;\n}\n\n.favorite-icon {\n  margin-left: 20px;\n}\n\n.favorite {\n  color: gold;\n}\n\nol {\n  padding-left: 19px;\n  margin: 0;\n}\n\n.order-index {\n  list-style-type: decimal;\n  margin-left: 5px;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: rgb(238, 49, 49);\n}\n\n.previous-attempts {\n  font-size: 25px;\n  display: flex;\n  flex-flow: row-reverse;\n  overflow: auto;\n}\n\n.previous-attempts span {\n  display: flex;\n  align-items: center;\n}\n\n.custom-btn {\n  font-weight: 600;\n  font-size: 17px !important;\n  width: 30px !important;\n  height: 30px;\n  min-width: auto;\n  border-radius: 25px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.log-date {\n  font-size: 15px;\n  background: #aaa;\n  border-radius: 10px;\n  padding: 0 5px;\n  white-space: nowrap;\n}\n\n#user-response {\n  border: 1px solid #30e4a6;\n  border-radius: 3px;\n  width: 300px;\n}\n\n#user-input button {\n  border: 0;\n  background: #f77d00;\n  margin-right: 10px;\n  width: 110px;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n}\n\n#pronunciations {\n  display: flex;\n}\n\n#pronunciations .order-index {\n  margin-right: 18px;\n}\n\n/* ----media query----- */\n\n/* CSS for mobile portrait mode */\n\n@media only screen and (max-width: 400px) {\n  #user-response {\n    margin-left: 2px;\n  }\n\n  #user-input {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dvcmQtZGV0YWlsL3dvcmQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBRzlCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFHOUIsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUdyQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHlCQUF5Qjs7QUFDekIsaUNBQWlDOztBQUNqQztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3dvcmQtZGV0YWlsL3dvcmQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA2MzQxO1xufVxuXG4uZmllbGQtdmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xufVxuXG4uZmllbGQtdmFsdWUgPiBkaXYge1xuICAvKiBtYXJnaW46IDAgNXB4OyAqL1xufVxuXG4ud29yZC1pZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucmVzdWx0IHtcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gIGNvbG9yOiByZWQ7XG59XG5cbi50eXBlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLnR5cGU6aG92ZXIge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLnR5cGU6bm90KC5kZWZhdWx0KSB7XG4gIGNvbG9yOiAjYWFhOyAgXG59XG5cbi50eXBlLmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2IoNDEsIDExNywgMTkxKTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnN0YXIge1xuICBjb2xvcjogI2U4ZTZlNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzU1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZmF2b3JpdGUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZmF2b3JpdGUge1xuICBjb2xvcjogZ29sZDtcbn1cblxub2wge1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm9yZGVyLWluZGV4IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiByZ2IoMjM4LCA0OSwgNDkpO1xufVxuXG4ucHJldmlvdXMtYXR0ZW1wdHMge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJldmlvdXMtYXR0ZW1wdHMgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nLWRhdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jdXNlci1yZXNwb25zZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMGU0YTY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4jdXNlci1pbnB1dCBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNmNzdkMDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9udW5jaWF0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNwcm9udW5jaWF0aW9ucyAub3JkZXItaW5kZXgge1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi8qIC0tLS1tZWRpYSBxdWVyeS0tLS0tICovXG4vKiBDU1MgZm9yIG1vYmlsZSBwb3J0cmFpdCBtb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICN1c2VyLXJlc3BvbnNlIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICB9XG5cbiAgI3VzZXItaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/word-detail/word-detail.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/word-detail/word-detail.component.ts ***!
    \*************************************************************/

  /*! exports provided: WordDetailComponent */

  /***/
  function srcAppSharedWordDetailWordDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordDetailComponent", function () {
      return WordDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utility_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utility/utility */
    "./src/app/shared/utility/utility.ts");
    /* harmony import */


    var src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/enum/enum */
    "./src/app/core/enum/enum.ts");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/shared/log.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var WordDetailComponent = /*#__PURE__*/function () {
      function WordDetailComponent(logService, storageService) {
        _classCallCheck(this, WordDetailComponent);

        this.logService = logService;
        this.storageService = storageService;
        this.submitted = false;
        this.addFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gotoNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.logStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sessionType = src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_3__["SessionType"];
        this.role = src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_3__["Role"];
      }

      _createClass(WordDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = this.storageService.getUser();
          this.currentSetInfo = this.storageService.getCurrentState();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "setNewDetails",
        value: function setNewDetails(value) {
          var _this43 = this;

          this._details = value;
          this.userAnswer = '';
          this.submitted = false;
          this.previousAttempts = [];
          value && this.isAudioAvaliable();

          if (this.session === src_app_core_enum_enum__WEBPACK_IMPORTED_MODULE_3__["SessionType"].TEST) {
            setTimeout(function () {
              _this43.responseBox.nativeElement.focus();
            });
          }
        }
      }, {
        key: "isAudioAvaliable",
        value: function isAudioAvaliable() {
          var _this44 = this;

          if (this._details && this._details.selectedCategory && this._details.selectedCategory.pronunciations) {
            setTimeout(function () {
              _this44.pronunceWord();
            }, 2000);
          }
        }
      }, {
        key: "pronunceWord",
        value: function pronunceWord() {
          if (this.audioTag) {
            this.playAudio(this.audioTag.nativeElement);
          } else {
            console.log('audio tag not available.');
          }
        }
      }, {
        key: "playAudio",
        value: function playAudio(ev) {
          _utility_utility__WEBPACK_IMPORTED_MODULE_2__["Utility"].playAudio(ev);
        }
      }, {
        key: "setCategory",
        value: function setCategory(category) {
          this._details.selectedCategory = category;
        }
      }, {
        key: "submitAnswer",
        value: function submitAnswer() {
          if (this.userAnswer.toLowerCase() !== this._details.id.toLowerCase() && !this.submitted) {
            this.submitted = true;
            this.logResponse(false);
          } else if (this.userAnswer.toLowerCase() === this._details.id.toLowerCase()) {
            this.playAudio(this.correctAudio.nativeElement);
            this.logResponse(true);
            this.gotoNext.emit({});
          } else if (this.submitted) {
            this.gotoNext.emit({});
          }
        }
      }, {
        key: "logResponse",
        value: function logResponse(isCorrect) {
          // log response if the user is not a guest user.
          if (this.userData) {
            this.logService.logReponse(this.session, {
              language: this.currentSetInfo.language,
              rootModule: this.currentSetInfo.rootModule.id,
              module: this.currentSetInfo.module.id,
              level: this.currentSetInfo.level.id,
              set: this.currentSetInfo.set.id,
              word: this._details.id,
              isCorrect: isCorrect
            }, this.userData.uid).subscribe(function (response) {}, function (error) {});
          }
        }
      }, {
        key: "getPreviousResults",
        value: function getPreviousResults() {
          var _this45 = this;

          // get previous attempts result if the user is not a guest user.
          if (this.userData) {
            this.logService.getLog({
              language: this.currentSetInfo.language,
              rootModule: this.currentSetInfo.rootModule.id,
              module: this.currentSetInfo.module.id,
              level: this.currentSetInfo.level.id,
              set: this.currentSetInfo.set.id,
              word: this._details.id
            }, this.userData.uid).subscribe(function (response) {
              _this45.previousAttempts = response.json();
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "markAsFavorite",
        value: function markAsFavorite() {
          this._details.isFavorite = !this._details.isFavorite;
          var action = 'addFavorite';

          if (!this._details.isFavorite) {
            action = 'removeFavorite';
            this.removeFavorite.emit(this._details.id);
          } else {
            this.addFavorite.emit(this._details.id);
          }

          this.logService[action]({
            language: this.currentSetInfo.language,
            rootModule: this.currentSetInfo.rootModule.id,
            module: this.currentSetInfo.module.id,
            level: this.currentSetInfo.level.id,
            set: this.currentSetInfo.set.id,
            word: this._details.id
          }, this.userData.uid).subscribe(function (response) {}, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getSentence",
        value: function getSentence(value) {
          var sentence = this.formatSentence(value);
          return sentence.replace(this._details.id, '<i class="fa fa-volume-up link"></i>');
        }
      }, {
        key: "formatSentence",
        value: function formatSentence(sentence) {
          if (sentence) {
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
          }

          return sentence || '';
        }
      }, {
        key: "getDate",
        value: function getDate(logdatetime) {
          return new Date(logdatetime).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          });
        }
      }, {
        key: "getAudioUrl",
        value: function getAudioUrl(audioUrl) {
          var index = audioUrl.indexOf('audio.oxforddictionaries');
          var url = audioUrl.substr(index, audioUrl.length);
          return 'https://s3.amazonaws.com/' + url;
        }
      }, {
        key: "editField",
        value: function editField(property, info) {
          this.edit.emit({
            property: property,
            info: info
          });
        }
      }, {
        key: "addField",
        value: function addField(property, info) {
          this.add.emit({
            property: property,
            info: info
          });
        }
      }, {
        key: "showHint",
        value: function showHint() {
          if (this.userAnswer) {
            this.userAnswer = this.userAnswer.trim();

            var answeredCharCount = this._details.id.indexOf(this.userAnswer);

            if (answeredCharCount !== -1) {
              this._details.hintCharCount = this.userAnswer.length;
            } else {
              this._details.hintCharCount = 0;
            }
          } else {
            this._details.hintCharCount = 0;
          }

          if (this._details.hintCharCount !== undefined) {
            this._details.hintCharCount++;
          } else {
            this._details.hintCharCount = 1;
          }

          this.userAnswer = this._details.id.substr(0, this._details.hintCharCount);
        }
      }, {
        key: "showWord",
        value: function showWord() {
          this.userAnswer = this._details.id;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.logStatus.emit({
            word: this._details.id,
            exit: true
          });
        }
      }, {
        key: "details",
        set: function set(value) {
          this.setNewDetails(value);
        }
      }]);

      return WordDetailComponent;
    }();

    WordDetailComponent.ctorParameters = function () {
      return [{
        type: _log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('details'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], WordDetailComponent.prototype, "details", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "addFavorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "removeFavorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "gotoNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "logStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "edit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WordDetailComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioelm', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], WordDetailComponent.prototype, "audioTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('correctAudio', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], WordDetailComponent.prototype, "correctAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('responseBox', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], WordDetailComponent.prototype, "responseBox", void 0);
    WordDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'word-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./word-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/word-detail/word-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./word-detail.component.css */
      "./src/app/shared/word-detail/word-detail.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])], WordDetailComponent);
    /***/
  },

  /***/
  "./src/app/spinner/spinner.component.css":
  /*!***********************************************!*\
    !*** ./src/app/spinner/spinner.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpinnerSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spinner{\n  width: 50;\n  z-index: 30;\n  margin: auto;\n  transform-origin: 50% 50%;\n}\n.dialog_overlay_wrap{\n\theight: 100%;\n\twidth: 100%;\n  align-items: center;\n  display: flex;\t\n  position: fixed;\n  z-index: 15;\n  left: 0;\n  top: 0;\n  background: #1885e23d;\n  opacity: 0.5;\n}\n.dialog_overlay{\n  -webkit-animation: none;\n          animation: none;  \n}\n.hide_overlay{\n  background-color: transparent;\n}\n@keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsdUJBQWU7VUFBZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7QUFDRjtBQUVBO0VBQ0U7TUFDSSx1QkFBdUI7RUFDM0I7RUFDQTtNQUNJLHlCQUF5QjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcntcbiAgd2lkdGg6IDUwO1xuICB6LWluZGV4OiAzMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuLmRpYWxvZ19vdmVybGF5X3dyYXB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XHRcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxNTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTg4NWUyM2Q7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRpYWxvZ19vdmVybGF5e1xuICBhbmltYXRpb246IG5vbmU7ICBcbn1cblxuLmhpZGVfb3ZlcmxheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinner.service */
    "./src/app/spinner/spinner.service.ts");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(_spinnerService) {
        _classCallCheck(this, SpinnerComponent);

        this._spinnerService = _spinnerService;
        this.visible = false;
        this.hideOverlay = false;
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._spinnerService.show = this.show.bind(this);
          this._spinnerService.hide = this.hide.bind(this);
        }
      }, {
        key: "show",
        value: function show(hideOverlay) {
          this.hideOverlay = hideOverlay;
          this.visible = true;
        }
      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]
      }];
    };

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.css */
      "./src/app/spinner/spinner.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/spinner/spinner.service.ts":
  /*!********************************************!*\
    !*** ./src/app/spinner/spinner.service.ts ***!
    \********************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppSpinnerSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerService = function SpinnerService() {
      _classCallCheck(this, SpinnerService);

      this.show = function () {};

      this.hide = function () {};
    };

    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SpinnerService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDBPW3r4djkivxVzim5Q6a8sARpMBOVyqA",
        authDomain: "spelldone-test.firebaseapp.com",
        databaseURL: "https://spelldone-test.firebaseio.com",
        projectId: "spelldone-test",
        storageBucket: "spelldone-test.appspot.com",
        messagingSenderId: "104118238943",
        appId: "1:104118238943:web:5b9d9bb6bbd148b16b736a"
      },
      stripe_public_key: "pk_test_nuZ9NGFc85uQ3nT5jPaiTbR400RdLhMSFT"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\App Workspace\Personal\Spelldonemobileapp_try1\spelldonemobileapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map