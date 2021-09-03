/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_adelon_serial_light_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/adelon-serial-light-regular-webfont.woff2 */ "./src/assets/fonts/adelon-serial-light-regular-webfont.woff2");
/* harmony import */ var _assets_fonts_adelon_serial_light_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/adelon-serial-light-regular-webfont.woff */ "./src/assets/fonts/adelon-serial-light-regular-webfont.woff");
/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/bg.png */ "./src/assets/bg.png");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_adelon_serial_light_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_adelon_serial_light_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_bg_png__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flex-row, .flex-col {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-around {\n  justify-content: space-around;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.pos-fix {\n  position: fixed;\n}\n\n.gap-10 {\n  gap: 10px;\n}\n\n.w-25 {\n  width: 25%;\n}\n\n.w-40 {\n  width: 40%;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-t-20 {\n  margin-top: 20px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-x-15 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.p-x-20 {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.p-y-20 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n@font-face {\n  font-family: \"adelon-serial-light-regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: \"adelon-serial-light-regular\", serif;\n  font-size: 20px;\n  font-weight: normal;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh2 {\n  color: #e2a9a6;\n}\n\nbody {\n  background-attachment: fixed;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\n\nmain {\n  height: calc(100vh - 67px);\n  min-height: 350px;\n}\nmain .container {\n  background: black;\n  border: 3px solid;\n  border-image-source: linear-gradient(90deg, #5d4f24 0%, #a3905a 48.05%, #56471d 95.7%);\n  border-image-slice: 1;\n}\nmain .container button {\n  background: none;\n  border: 1px solid #8f7c4570;\n  color: #8f7c45;\n  font-size: 16px;\n}\nmain .container button:hover {\n  cursor: pointer;\n  background: #8f7c45;\n  color: black;\n}\nmain .container:first-of-type {\n  height: 70vh;\n  min-height: 300px;\n  min-width: 350px;\n}\nmain .container:first-of-type button:hover {\n  color: #450b0a;\n}\nmain .container ul {\n  list-style: none;\n  overflow-y: scroll;\n}\nmain .container ul li {\n  background: linear-gradient(90deg, #10100e 1.15%, #1f2120 47.97%, #10100e 95.75%);\n}\nmain .container input {\n  color: black;\n  outline: none;\n}\n\nfooter {\n  bottom: 0;\n}\nfooter p {\n  text-align: center;\n  font-style: italic;\n  font-size: 12px;\n}\nfooter p a {\n  font-weight: bold;\n  font-size: 12px;\n}\n\n/*\n  ========================================\n  General styling\n  ========================================\n*/\n.default-border {\n  border: 2px solid #1f2120;\n}\n\n.title::after, .title::before {\n  content: \"\";\n  height: 1px;\n  width: 90%;\n  display: block;\n  background: linear-gradient(90deg, #1f1908 1.15%, #b7a156 47.97%, #1f1908 95.75%);\n}\n\n.title {\n  background: linear-gradient(90.02deg, #1f0300 5.41%, #450b0a 51.03%, #1f0300 95.44%);\n}\n.title::before {\n  margin-bottom: 5px;\n}\n.title::after {\n  margin-top: 5px;\n}", "",{"version":3,"sources":["webpack://./src/scss/_flex.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_utilities.scss"],"names":[],"mappings":"AAYA;EACE,aAAA;ACXF;;ADcA;EAfE,sBAkBwC;ACb1C;;ADgBA;EArBE,mBAwBwC;ACf1C;;ADkBA;EAvBE,uBAwBoC;ACftC;;ADkBA;EA3BE,6BA4BoC;ACftC;;ADkBA;EA/BE,8BAgCoC;ACftC;;ADkBA;EAnCE,yBAoCoC;ACftC;;ADkBA;EAnCE,mBAoCgC;ACflC;;ADkBA;EACE,eAAA;ACfF;;AClCA;EACE,kBAAA;ADqCF;;AClCA;EACE,eAAA;ADqCF;;AClCA;EACE,SAAA;ADqCF;;AClCA;EACE,UAAA;ADqCF;;AClCA;EACE,UAAA;ADqCF;;AClCA;EACE,WAAA;ADqCF;;AClCA;EACE,iBAAA;ADqCF;;AClCA;EACE,kBAAA;ADqCF;;AClCA;EACE,gBAAA;ADqCF;;AClCA;EACE,gBAAA;EACA,mBAAA;ADqCF;;AClCA;EACE,kBAAA;EACA,mBAAA;ADqCF;;AClCA;EACE,iBAAA;EACA,oBAAA;ADqCF;;AClCA;EACE,kBAAA;EACA,mBAAA;ADqCF;;AClCA;EACE,mBAAA;EACA,kBAAA;ADqCF;;AClCA;EACE,iBAAA;EACA,oBAAA;ADqCF;;AAjGA;EACE,0CAAA;EACA,oHACE;EAEF,mBAAA;EACA,kBAAA;AAkGF;AA/FA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,iDAAA;EACA,eAAA;EACA,mBAAA;AAiGF;;AA9FA;EACE,eAAA;AAiGF;;AA9FA;EACE,cAAA;AAiGF;;AA9FA;EACE,4BAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AAiGF;;AA9FA;EACE,gBAAA;EACA,MAAA;AAiGF;;AA9FA;EACE,0BAAA;EACA,iBAAA;AAiGF;AA/FE;EACE,iBAAA;EACA,iBAAA;EACA,sFAAA;EACA,qBAAA;AAiGJ;AA/FI;EACE,gBAAA;EACA,2BAAA;EACA,cAAA;EACA,eAAA;AAiGN;AA/FM;EACE,eAAA;EACA,mBAAA;EACA,YAAA;AAiGR;AA7FI;EACE,YAAA;EACA,iBAAA;EACA,gBAAA;AA+FN;AA5FQ;EACE,cAAA;AA8FV;AAzFI;EACE,gBAAA;EACA,kBAAA;AA2FN;AAzFM;EACE,iFAAA;AA2FR;AAvFI;EACE,YAAA;EACA,aAAA;AAyFN;;AApFA;EACE,SAAA;AAuFF;AArFE;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;AAuFJ;AArFI;EACE,iBAAA;EACA,eAAA;AAuFN;;AAlFA;;;;CAAA;AAMA;EACE,yBAAA;AAoFF;;AAjFA;EACE,WAAA;EACA,WAAA;EACA,UAAA;EACA,cAAA;EACA,iFAAA;AAoFF;;AAjFA;EACE,oFAAA;AAoFF;AAlFE;EAEE,kBAAA;AAmFJ;AAhFE;EAEE,eAAA;AAiFJ","sourcesContent":["@mixin direction($direction-property) {\n  flex-direction: $direction-property;\n}\n\n@mixin justify($justify-property) {\n  justify-content: $justify-property;\n}\n\n@mixin align($align-property) {\n  align-items: $align-property;\n}\n\n%flex {\n  display: flex;\n}\n\n.flex-col {\n  @extend %flex;\n\n  @include direction($direction-property: column);\n}\n\n.flex-row {\n  @extend %flex;\n\n  @include direction($direction-property: row);\n}\n\n.justify-center {\n  @include justify($justify-property: center);\n}\n\n.justify-around {\n  @include justify($justify-property: space-around);\n}\n\n.justify-between {\n  @include justify($justify-property: space-between);\n}\n\n.justify-end {\n  @include justify($justify-property: flex-end);\n}\n\n.align-center {\n  @include align($align-property: center);\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n","@import 'flex.scss';\n@import 'utilities.scss';\n\n@font-face {\n  font-family: 'adelon-serial-light-regular';\n  src:\n    url('../assets/fonts/adelon-serial-light-regular-webfont.woff2') format('woff2'),\n    url('../assets/fonts/adelon-serial-light-regular-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: 'adelon-serial-light-regular', serif;\n  font-size: 20px;\n  font-weight: normal;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh2 {\n  color: #e2a9a6;\n}\n\nbody {\n  background-attachment: fixed;\n  background-image: url('../assets/bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\n\nmain {\n  height: calc(100vh - 67px);\n  min-height: 350px;\n\n  .container {\n    background: rgba(0, 0, 0, 1);\n    border: 3px solid;\n    border-image-source: linear-gradient(90deg, #5d4f24 0%, #a3905a 48.05%, #56471d 95.7%);\n    border-image-slice: 1;\n\n    button {\n      background: none;\n      border: 1px solid #8f7c4570;\n      color: #8f7c45;\n      font-size: 16px;\n\n      &:hover {\n        cursor: pointer;\n        background: #8f7c45;\n        color: black;\n      }\n    }\n\n    &:first-of-type {\n      height: 70vh;\n      min-height: 300px;\n      min-width: 350px;\n\n      button {\n        &:hover {\n          color: #450b0a;\n        }\n      }\n    }\n\n    ul {\n      list-style: none;\n      overflow-y: scroll;\n\n      li {\n        background: linear-gradient(90deg, #10100e 1.15%, #1f2120 47.97%, #10100e 95.75%);\n      }\n    }\n\n    input {\n      color: black;\n      outline: none;\n    }\n  }\n}\n\nfooter {\n  bottom: 0;\n\n  p {\n    text-align: center;\n    font-style: italic;\n    font-size: 12px;\n\n    a {\n      font-weight: bold;\n      font-size: 12px;\n    }\n  }\n}\n\n/*\n  ========================================\n  General styling\n  ========================================\n*/\n\n.default-border {\n  border: 2px solid #1f2120;\n}\n\n%pseudo {\n  content: '';\n  height: 1px;\n  width: 90%;\n  display: block;\n  background: linear-gradient(90deg, #1f1908 1.15%, #b7a156 47.97%, #1f1908 95.75%);\n}\n\n.title {\n  background: linear-gradient(90.02deg, #1f0300 5.41%, #450b0a 51.03%, #1f0300 95.44%);\n\n  &::before {\n    @extend %pseudo;\n    margin-bottom: 5px;\n  }\n\n  &::after {\n    @extend %pseudo;\n    margin-top: 5px;\n  }\n}\n",".hidden {\n  visibility: hidden;\n}\n\n.pos-fix {\n  position: fixed;\n}\n\n.gap-10 {\n  gap: 10px;\n}\n\n.w-25 {\n  width: 25%;\n}\n\n.w-40 {\n  width: 40%;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-t-20 {\n  margin-top: 20px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-x-15 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.p-x-20 {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.p-y-20 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bg.png":
/*!***************************!*\
  !*** ./src/assets/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "351cd1c64b702bf0e072.png";

/***/ }),

/***/ "./src/assets/fonts/adelon-serial-light-regular-webfont.woff":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/adelon-serial-light-regular-webfont.woff ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f3dd309ffc8a4422ef6.woff";

/***/ }),

/***/ "./src/assets/fonts/adelon-serial-light-regular-webfont.woff2":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/adelon-serial-light-regular-webfont.woff2 ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fd1b234635bb9e33482.woff2";

/***/ }),

/***/ "./src/js/API.js":
/*!***********************!*\
  !*** ./src/js/API.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
class API {
  constructor(id) {
    this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  }

  async get(leaderboard) {
    const response = await fetch(this.url);

    const data = await response.json();

    leaderboard.load(data.result);
  }

  async post(score) {
    await fetch(

      this.url,

      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(score),
      },
    );
  }
}

/***/ }),

/***/ "./src/js/Leaderboard.js":
/*!*******************************!*\
  !*** ./src/js/Leaderboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Leaderboard)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");


class Leaderboard {
  constructor() {
    this.scores = [];
  }

  setEventListener(api) {
    const refreshButton = document.querySelector('button');
    refreshButton.addEventListener('click', () => this.refresh(api));
  }

  refresh(api) {
    api.get(this);
  }

  load(scores) {
    this
      .setScores(scores)
      .populate();
  }

  setScores(scores) {
    this.scores = scores;
    return this;
  }

  populate() {
    const list = document.querySelector('ul');
    const listItems = [];
    this.scores.forEach((score) => {
      const user = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', '', `${score.user}`);
      const userScore = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', '', `${score.score}`);
      const listItem = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.default)('li', 'flex-row justify-between p-y-10 p-x-15 default-border');
      listItem.append(user, userScore);
      listItems.push(listItem);
    });
    list.innerHTML = '';
    list.append(...listItems);
  }
}

/***/ }),

/***/ "./src/js/ScoreForm.js":
/*!*****************************!*\
  !*** ./src/js/ScoreForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoreForm)
/* harmony export */ });
class ScoreForm {
  constructor() {
    this.user = '';
    this.score = '';
  }

  setEventListener(api) {
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', (e) => this.submitScore(e, api));
  }

  submitScore(e, api) {
    e.preventDefault();
    this.createScore();
    if (Object.values(this).every((value) => value !== '')) api.post(this);
  }

  createScore() {
    const inputValues = document.querySelectorAll('form input');
    if (Array.from(inputValues).every((inputValue) => inputValue.value !== '')) {
      [this.user, this.score] = [inputValues[0].value, inputValues[1].value];
      Array.from(inputValues).forEach((inputValue) => { inputValue.value = ''; });
      inputValues[0].focus();
    }
  }
}

/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = (elementType, classNames = '', attributes = {}, innerHTML = '', properties = {}) => {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  Object.keys(properties).forEach((property) => {
    elementObject[property] = properties[property];
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _Leaderboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leaderboard.js */ "./src/js/Leaderboard.js");
/* harmony import */ var _ScoreForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreForm.js */ "./src/js/ScoreForm.js");
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API.js */ "./src/js/API.js");





const init = () => {
  const leaderboard = new _Leaderboard_js__WEBPACK_IMPORTED_MODULE_1__.default();
  const scoreForm = new _ScoreForm_js__WEBPACK_IMPORTED_MODULE_2__.default();
  const api = new _API_js__WEBPACK_IMPORTED_MODULE_3__.default('lI1z1EFW1xGXNj2JItHX');

  leaderboard.setEventListener(api);
  scoreForm.setEventListener(api);
  api.get(leaderboard);
};

window.addEventListener('load', init);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0xlYWRlcmJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvU2NvcmVGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vYXNzZXRzL2ZvbnRzL2FkZWxvbi1zZXJpYWwtbGlnaHQtcmVndWxhci13ZWJmb250LndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL2Fzc2V0cy9mb250cy9hZGVsb24tc2VyaWFsLWxpZ2h0LXJlZ3VsYXItd2ViZm9udC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2Fzc2V0cy9iZy5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mbGV4LXJvdywgLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucG9zLWZpeCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5nYXAtMTAge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udy0yNSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4udy00MCB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tLWwtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWRlbG9uLXNlcmlhbC1saWdodC1yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhZGVsb24tc2VyaWFsLWxpZ2h0LXJlZ3VsYXJcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICNlMmE5YTY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjdweCk7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG59XFxubWFpbiAuY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm9yZGVyOiAzcHggc29saWQ7XFxuICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1ZDRmMjQgMCUsICNhMzkwNWEgNDguMDUlLCAjNTY0NzFkIDk1LjclKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG59XFxubWFpbiAuY29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmN2M0NTcwO1xcbiAgY29sb3I6ICM4ZjdjNDU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbm1haW4gLmNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzhmN2M0NTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxubWFpbiAuY29udGFpbmVyOmZpcnN0LW9mLXR5cGUge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbn1cXG5tYWluIC5jb250YWluZXI6Zmlyc3Qtb2YtdHlwZSBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM0NTBiMGE7XFxufVxcbm1haW4gLmNvbnRhaW5lciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5tYWluIC5jb250YWluZXIgdWwgbGkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTAxMDBlIDEuMTUlLCAjMWYyMTIwIDQ3Ljk3JSwgIzEwMTAwZSA5NS43NSUpO1xcbn1cXG5tYWluIC5jb250YWluZXIgaW5wdXQge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvdHRvbTogMDtcXG59XFxuZm9vdGVyIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5mb290ZXIgcCBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgR2VuZXJhbCBzdHlsaW5nXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG4uZGVmYXVsdC1ib3JkZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFmMjEyMDtcXG59XFxuXFxuLnRpdGxlOjphZnRlciwgLnRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFmMTkwOCAxLjE1JSwgI2I3YTE1NiA0Ny45NyUsICMxZjE5MDggOTUuNzUlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MC4wMmRlZywgIzFmMDMwMCA1LjQxJSwgIzQ1MGIwYSA1MS4wMyUsICMxZjAzMDAgOTUuNDQlKTtcXG59XFxuLnRpdGxlOjpiZWZvcmUge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4udGl0bGU6OmFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2ZsZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3V0aWxpdGllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0UsYUFBQTtBQ1hGOztBRGNBO0VBZkUsc0JBa0J3QztBQ2IxQzs7QURnQkE7RUFyQkUsbUJBd0J3QztBQ2YxQzs7QURrQkE7RUF2QkUsdUJBd0JvQztBQ2Z0Qzs7QURrQkE7RUEzQkUsNkJBNEJvQztBQ2Z0Qzs7QURrQkE7RUEvQkUsOEJBZ0NvQztBQ2Z0Qzs7QURrQkE7RUFuQ0UseUJBb0NvQztBQ2Z0Qzs7QURrQkE7RUFuQ0UsbUJBb0NnQztBQ2ZsQzs7QURrQkE7RUFDRSxlQUFBO0FDZkY7O0FDbENBO0VBQ0Usa0JBQUE7QURxQ0Y7O0FDbENBO0VBQ0UsZUFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxTQUFBO0FEcUNGOztBQ2xDQTtFQUNFLFVBQUE7QURxQ0Y7O0FDbENBO0VBQ0UsVUFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxXQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGlCQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGtCQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGdCQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURxQ0Y7O0FDbENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QURxQ0Y7O0FDbENBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEcUNGOztBQWpHQTtFQUNFLDBDQUFBO0VBQ0Esb0hBQ0U7RUFFRixtQkFBQTtFQUNBLGtCQUFBO0FBa0dGO0FBL0ZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWlHRjs7QUE5RkE7RUFDRSxlQUFBO0FBaUdGOztBQTlGQTtFQUNFLGNBQUE7QUFpR0Y7O0FBOUZBO0VBQ0UsNEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFpR0Y7O0FBOUZBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBaUdGOztBQTlGQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFpR0Y7QUEvRkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0ZBQUE7RUFDQSxxQkFBQTtBQWlHSjtBQS9GSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWlHTjtBQS9GTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFpR1I7QUE3Rkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQStGTjtBQTVGUTtFQUNFLGNBQUE7QUE4RlY7QUF6Rkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBMkZOO0FBekZNO0VBQ0UsaUZBQUE7QUEyRlI7QUF2Rkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQXlGTjs7QUFwRkE7RUFDRSxTQUFBO0FBdUZGO0FBckZFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF1Rko7QUFyRkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF1Rk47O0FBbEZBOzs7O0NBQUE7QUFNQTtFQUNFLHlCQUFBO0FBb0ZGOztBQWpGQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpRkFBQTtBQW9GRjs7QUFqRkE7RUFDRSxvRkFBQTtBQW9GRjtBQWxGRTtFQUVFLGtCQUFBO0FBbUZKO0FBaEZFO0VBRUUsZUFBQTtBQWlGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHkpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uLXByb3BlcnR5O1xcbn1cXG5cXG5AbWl4aW4ganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eSkge1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1wcm9wZXJ0eTtcXG59XFxuXFxuQG1peGluIGFsaWduKCRhbGlnbi1wcm9wZXJ0eSkge1xcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1wcm9wZXJ0eTtcXG59XFxuXFxuJWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIEBleHRlbmQgJWZsZXg7XFxuXFxuICBAaW5jbHVkZSBkaXJlY3Rpb24oJGRpcmVjdGlvbi1wcm9wZXJ0eTogY29sdW1uKTtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIEBleHRlbmQgJWZsZXg7XFxuXFxuICBAaW5jbHVkZSBkaXJlY3Rpb24oJGRpcmVjdGlvbi1wcm9wZXJ0eTogcm93KTtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHk6IGNlbnRlcik7XFxufVxcblxcbi5qdXN0aWZ5LWFyb3VuZCB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5KCRqdXN0aWZ5LXByb3BlcnR5OiBzcGFjZS1hcm91bmQpO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHk6IHNwYWNlLWJldHdlZW4pO1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAgQGluY2x1ZGUganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eTogZmxleC1lbmQpO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIEBpbmNsdWRlIGFsaWduKCRhbGlnbi1wcm9wZXJ0eTogY2VudGVyKTtcXG59XFxuXFxuLndyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cIixcIkBpbXBvcnQgJ2ZsZXguc2Nzcyc7XFxuQGltcG9ydCAndXRpbGl0aWVzLnNjc3MnO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdhZGVsb24tc2VyaWFsLWxpZ2h0LXJlZ3VsYXInO1xcbiAgc3JjOlxcbiAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9hZGVsb24tc2VyaWFsLWxpZ2h0LXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuLi9hc3NldHMvZm9udHMvYWRlbG9uLXNlcmlhbC1saWdodC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnYWRlbG9uLXNlcmlhbC1saWdodC1yZWd1bGFyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjZTJhOWE2O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9iZy5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2N3B4KTtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1ZDRmMjQgMCUsICNhMzkwNWEgNDguMDUlLCAjNTY0NzFkIDk1LjclKTtcXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhmN2M0NTcwO1xcbiAgICAgIGNvbG9yOiAjOGY3YzQ1O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ZjdjNDU7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgIG1pbi13aWR0aDogMzUwcHg7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogIzQ1MGIwYTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwMTAwZSAxLjE1JSwgIzFmMjEyMCA0Ny45NyUsICMxMDEwMGUgOTUuNzUlKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBib3R0b206IDA7XFxuXFxuICBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgYSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBHZW5lcmFsIHN0eWxpbmdcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi5kZWZhdWx0LWJvcmRlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMWYyMTIwO1xcbn1cXG5cXG4lcHNldWRvIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZjE5MDggMS4xNSUsICNiN2ExNTYgNDcuOTclLCAjMWYxOTA4IDk1Ljc1JSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTAuMDJkZWcsICMxZjAzMDAgNS40MSUsICM0NTBiMGEgNTEuMDMlLCAjMWYwMzAwIDk1LjQ0JSk7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBAZXh0ZW5kICVwc2V1ZG87XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgQGV4dGVuZCAlcHNldWRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxufVxcblwiLFwiLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wb3MtZml4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmdhcC0xMCB7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi53LTI1IHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbi53LTQwIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy51cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJHtpZH0vc2NvcmVzYDtcbiAgfVxuXG4gIGFzeW5jIGdldChsZWFkZXJib2FyZCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxlYWRlcmJvYXJkLmxvYWQoZGF0YS5yZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgcG9zdChzY29yZSkge1xuICAgIGF3YWl0IGZldGNoKFxuXG4gICAgICB0aGlzLnVybCxcblxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNjb3JlKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlcmJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY29yZXMgPSBbXTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXIoYXBpKSB7XG4gICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIHJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlZnJlc2goYXBpKSk7XG4gIH1cblxuICByZWZyZXNoKGFwaSkge1xuICAgIGFwaS5nZXQodGhpcyk7XG4gIH1cblxuICBsb2FkKHNjb3Jlcykge1xuICAgIHRoaXNcbiAgICAgIC5zZXRTY29yZXMoc2NvcmVzKVxuICAgICAgLnBvcHVsYXRlKCk7XG4gIH1cblxuICBzZXRTY29yZXMoc2NvcmVzKSB7XG4gICAgdGhpcy5zY29yZXMgPSBzY29yZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwb3B1bGF0ZSgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLnNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywgJycsIGAke3Njb3JlLnVzZXJ9YCk7XG4gICAgICBjb25zdCB1c2VyU2NvcmUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsICcnLCBgJHtzY29yZS5zY29yZX1gKTtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknLCAnZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHAteS0xMCBwLXgtMTUgZGVmYXVsdC1ib3JkZXInKTtcbiAgICAgIGxpc3RJdGVtLmFwcGVuZCh1c2VyLCB1c2VyU2NvcmUpO1xuICAgICAgbGlzdEl0ZW1zLnB1c2gobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgbGlzdC5hcHBlbmQoLi4ubGlzdEl0ZW1zKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlRm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9ICcnO1xuICAgIHRoaXMuc2NvcmUgPSAnJztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXIoYXBpKSB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zdWJtaXRTY29yZShlLCBhcGkpKTtcbiAgfVxuXG4gIHN1Ym1pdFNjb3JlKGUsIGFwaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNyZWF0ZVNjb3JlKCk7XG4gICAgaWYgKE9iamVjdC52YWx1ZXModGhpcykuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gJycpKSBhcGkucG9zdCh0aGlzKTtcbiAgfVxuXG4gIGNyZWF0ZVNjb3JlKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dCcpO1xuICAgIGlmIChBcnJheS5mcm9tKGlucHV0VmFsdWVzKS5ldmVyeSgoaW5wdXRWYWx1ZSkgPT4gaW5wdXRWYWx1ZS52YWx1ZSAhPT0gJycpKSB7XG4gICAgICBbdGhpcy51c2VyLCB0aGlzLnNjb3JlXSA9IFtpbnB1dFZhbHVlc1swXS52YWx1ZSwgaW5wdXRWYWx1ZXNbMV0udmFsdWVdO1xuICAgICAgQXJyYXkuZnJvbShpbnB1dFZhbHVlcykuZm9yRWFjaCgoaW5wdXRWYWx1ZSkgPT4geyBpbnB1dFZhbHVlLnZhbHVlID0gJyc7IH0pO1xuICAgICAgaW5wdXRWYWx1ZXNbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cbn0iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4vTGVhZGVyYm9hcmQuanMnO1xuaW1wb3J0IFNjb3JlRm9ybSBmcm9tICcuL1Njb3JlRm9ybS5qcyc7XG5pbXBvcnQgQVBJIGZyb20gJy4vQVBJLmpzJztcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgbGVhZGVyYm9hcmQgPSBuZXcgTGVhZGVyYm9hcmQoKTtcbiAgY29uc3Qgc2NvcmVGb3JtID0gbmV3IFNjb3JlRm9ybSgpO1xuICBjb25zdCBhcGkgPSBuZXcgQVBJKCdsSTF6MUVGVzF4R1hOajJKSXRIWCcpO1xuXG4gIGxlYWRlcmJvYXJkLnNldEV2ZW50TGlzdGVuZXIoYXBpKTtcbiAgc2NvcmVGb3JtLnNldEV2ZW50TGlzdGVuZXIoYXBpKTtcbiAgYXBpLmdldChsZWFkZXJib2FyZCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==