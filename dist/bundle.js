/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/icons/background-static.jpg */ \"./src/modules/icons/background-static.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\nh2, h3, h4, h5, img, input {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-color: rgba(240, 255, 255, 0.678);\n    background-size: cover;\n}\n\nmain {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 4rem;\n}\n\n#current {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n}\n\n.weather-card,\n.weather-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.weather-details {\n    gap: 1.5rem;\n}\n\n#forecast {\n    display: flex;\n    flex-direction: column;\n}\n\n.forecast-buttons {\n    display: flex;\n    gap: 1rem;\n    padding: 1rem 0;\n}\n.forecast-content {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n#weather-type {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n}\n\n#weather-location {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\n#weather-date,\n#weather-time {\n    font-size: 0.9rem;\n    font-weight: 300;\n}\n\n#weather-temp {\n    margin-top: 4rem;\n    font-size: 4rem;\n}\n\n#weather-type-icon {\n    height: auto;\n    width: 80px;\n}\n\n#display-type::before {\n    content: \"Display \"\n}\n#display-type:hover {\n    cursor: pointer;\n    color: rgb(56, 56, 56);\n}\n\n#display-type {\n    font-size: 1.5rem;\n    font-weight: 300;\n}\n\n#search-location-container {\n    margin: 1rem 0rem;\n}\n\n.search-location{\n    border-bottom: solid;\n    width: fit-content;\n    display: flex;\n    align-items: center;\n}\n\n::placeholder{\n    color: rgb(0, 0, 0);\n}\n\n#search-textbox,\n#search-button {\n    border: none;\n    background-color: transparent;\n    font-size: 1rem;\n}\n\n#search-textbox:focus {\n    outline: none;\n}\n\n#search-button {\n    cursor: pointer;\n}\n\n.weather-detail-title {\n    font-size: 1rem;\n}\n\n.weather-detail-value {\n    font-size: 2rem;\n}\n\n.forecast-button {\n    font-size: 1.5rem;\n    font-weight: 500;\n    border: solid;\n    border-color: transparent; \n    border-radius: 10px;\n    padding: 0 1rem;\n    font-weight: 400;\n}\n\n.forecast-button:hover{\n    cursor: pointer;\n}\n\n.selected {\n    border-color: black;\n    background-color: rgba(255, 255, 255, 0.534);\n    color: black;\n    font-weight: 600;\n}\n\n#forecast-content {\n    margin-top: 2rem;\n}\n\n.card-title {\n    font-size: 1.3rem;\n    font-weight: 500;\n}\n\n.card-temp {\n    margin-top: 1rem;\n    font-size: 1.1rem;\n}\n.high-temp {\n    font-size: 1.1rem;\n    font-weight: 400;\n}\n.low-temp {\n \n   font-weight: 300;\n}\n.card-type {\n    margin-top: 1rem;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 1rem 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_controller_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controller/weather */ \"./src/modules/controller/weather.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n(0,_modules_controller_weather__WEBPACK_IMPORTED_MODULE_0__.initialiseApp)(\"London\", true, true, 7);\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/controller/api.js":
/*!***************************************!*\
  !*** ./src/modules/controller/api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForecastObject: () => (/* binding */ createForecastObject),\n/* harmony export */   createWeatherObject: () => (/* binding */ createWeatherObject),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _model_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/forecast */ \"./src/modules/model/forecast.js\");\n/* harmony import */ var _model_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/weather */ \"./src/modules/model/weather.js\");\n\n\nfunction getUrl(base, endpoint, key, q, days ) {\n    const url = new URL(`${base}/${endpoint}?`);\n    const params = new URLSearchParams({key, q});\n    if (days) params.append(\"days\", days);\n    return url + params;\n}\n\nasync function getWeather(base, endpoint, key, q, days = null){   \n    const url = getUrl(base, endpoint,key,q,days)\n    const response = await fetch(url);\n    if (!response.ok) return;\n    return await response.json();\n    \n    \n}\n\nasync function createForecastObject(data) {\n    const { forecast } = data;\n    const forecastDays = [];\n    const forecastHours = [];\n    for (const [index, fday] of forecast.forecastday.entries()) {\n        const {date, day} = fday;\n        const forecastDay = getDayData(date, day);\n        forecastDays.push(forecastDay);\n        if (index === 0){\n            const { hour } = fday;\n            for (const h in hour) {\n                const forecastHour = getHourData(hour[h]);\n                forecastHours.push(forecastHour);\n            }\n        }\n    }\n    return {\n        forecastDays,\n        forecastHours\n    }\n    \n}\n\nfunction getHourData(h) {\n    const {time, temp_c, temp_f, condition} = h;\n    const hour = time.split(\" \")[1];\n    const {text, icon} = condition;\n    return new _model_forecast__WEBPACK_IMPORTED_MODULE_0__.ForecastHour(\n        hour,\n        temp_c,\n        temp_f,\n        text,\n        icon\n    )\n}\n\nfunction getDayData(date, day) {\n    const {maxtemp_c, mintemp_c, maxtemp_f, mintemp_f, condition} = day;\n    const {text, icon} = condition;\n    return new _model_forecast__WEBPACK_IMPORTED_MODULE_0__.ForecastDay(date, maxtemp_c, mintemp_c, maxtemp_f, mintemp_f, text, icon);\n}\nasync function createWeatherObject(data) {\n    const {location, \n        current\n    } = data;\n    const { name, localtime } = location;\n    const {temp_c, temp_f, condition,\n        feelslike_c, \n        feelslike_f, \n        humidity,\n        precip_in,\n        wind_kph} = current;\n    const {text, icon } = condition;\n    const ltsplit = localtime.split(\" \");\n    const date = ltsplit[0];\n    const time = ltsplit[1];\n    const weatherObject = new _model_weather__WEBPACK_IMPORTED_MODULE_1__.Weather(\n        name,\n        date,\n        time,\n        temp_f,\n        temp_c,\n        text,\n        icon,\n        feelslike_c,\n        feelslike_f,\n        humidity,\n        precip_in,\n        wind_kph,\n    )\n    return weatherObject;\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/controller/api.js?");

/***/ }),

/***/ "./src/modules/controller/elementHandlers.js":
/*!***************************************************!*\
  !*** ./src/modules/controller/elementHandlers.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celciusBtnHandler: () => (/* binding */ celciusBtnHandler),\n/* harmony export */   clickHandler: () => (/* binding */ clickHandler),\n/* harmony export */   selectedHandler: () => (/* binding */ selectedHandler)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/modules/controller/weather.js\");\n\n\nfunction clickHandler(e, settings) {\n    e.preventDefault();\n    const {\n        locationState,\n        celciusState,\n        dayState,\n        daysNumberState } = settings;\n    (0,_weather__WEBPACK_IMPORTED_MODULE_0__.loadWeather)(locationState, celciusState);\n    (0,_weather__WEBPACK_IMPORTED_MODULE_0__.loadForecast)(\n        locationState,\n        celciusState,\n        dayState,\n        daysNumberState\n    )\n}\n\nfunction celciusBtnHandler(e, settings, celciusBtn) {\n    clickHandler(e, settings);\n    celciusBtn.textContent = settings.celciusState ? '°C' : '°F';\n    \n}\n\nfunction selectedHandler(settings, dailyBtn, hourlyBtn) {\n    if (settings.dayState){\n        dailyBtn.classList.add(\"selected\");\n        hourlyBtn.classList.remove(\"selected\");\n    }\n    else {\n        dailyBtn.classList.remove(\"selected\");\n        hourlyBtn.classList.add(\"selected\");\n    }\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/controller/elementHandlers.js?");

/***/ }),

/***/ "./src/modules/controller/weather-elements.js":
/*!****************************************************!*\
  !*** ./src/modules/controller/weather-elements.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   forecastElements: () => (/* binding */ forecastElements),\n/* harmony export */   weatherCard: () => (/* binding */ weatherCard),\n/* harmony export */   weatherCardBtns: () => (/* binding */ weatherCardBtns),\n/* harmony export */   weatherDetails: () => (/* binding */ weatherDetails)\n/* harmony export */ });\nconst weatherCard = {\n    weatherType: document.querySelector(\"#weather-type\"),\n    weatherTypeIcon: document.querySelector(\"#weather-type-icon\"),\n    weatherLocation: document.querySelector(\"#weather-location\"),\n    weatherDate: document.querySelector(\"#weather-date\"),\n    weatherTime: document.querySelector(\"#weather-time\"),\n    weatherTemp: document.querySelector(\"#weather-temp\"),\n}\n\nconst weatherCardBtns = {\n    celciusBtn: document.querySelector(\"#display-type\"),\n    searchInput: document.querySelector(\"#search-textbox\"),\n    searchBtn: document.querySelector(\"#search-button\")\n}\n\nconst weatherDetails = {\n    feelsLike: document.querySelector(\"#feels-like\"),\n    humidity: document.querySelector(\"#humidity\"),\n    rainChance: document.querySelector(\"#rain-chance\"),\n    windSpeed: document.querySelector(\"#wind-speed\")\n}\n\nconst forecastElements = {\n    dailyBtn: document.querySelector(\"#daily-forecast\"),\n    hourlyBtn: document.querySelector(\"#hourly-forecast\"),\n    forecastContent: document.querySelector(\"#forecast-content\")\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/controller/weather-elements.js?");

/***/ }),

/***/ "./src/modules/controller/weather.js":
/*!*******************************************!*\
  !*** ./src/modules/controller/weather.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialiseApp: () => (/* binding */ initialiseApp),\n/* harmony export */   loadForecast: () => (/* binding */ loadForecast),\n/* harmony export */   loadWeather: () => (/* binding */ loadWeather)\n/* harmony export */ });\n/* harmony import */ var _weather_api_creds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather-api-creds */ \"./src/modules/weather-api-creds.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/modules/controller/api.js\");\n/* harmony import */ var _view_weather_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/weather-card */ \"./src/modules/view/weather-card.js\");\n/* harmony import */ var _weather_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-elements */ \"./src/modules/controller/weather-elements.js\");\n/* harmony import */ var _elementHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementHandlers */ \"./src/modules/controller/elementHandlers.js\");\n/* harmony import */ var _view_forecast_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/forecast-cards */ \"./src/modules/view/forecast-cards.js\");\n/* harmony import */ var _icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/search-icon.svg */ \"./src/modules/icons/search-icon.svg\");\n\n\n\n\n\n\n\n\nasync function loadWeather(location, isCelcius) {\n    let data = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(_weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, _weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.CURRENT_WEATHER_ENDPOINT, _weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.KEY, location);\n    if (!data) return;\n    const weatherObject = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.createWeatherObject)(data);\n    const {\n        weatherType,\n        weatherTypeIcon,\n        weatherLocation,\n        weatherDate,\n        weatherTime,\n        weatherTemp } = _weather_elements__WEBPACK_IMPORTED_MODULE_3__.weatherCard;\n    const {\n        feelsLike,\n        humidity,\n        rainChance,\n        windSpeed\n    } = _weather_elements__WEBPACK_IMPORTED_MODULE_3__.weatherDetails;\n\n    (0,_view_weather_card__WEBPACK_IMPORTED_MODULE_2__.setWeatherCard)(\n        isCelcius,\n        weatherObject,\n        weatherType,\n        weatherTypeIcon,\n        weatherLocation,\n        weatherDate,\n        weatherTime,\n        weatherTemp);\n    (0,_view_weather_card__WEBPACK_IMPORTED_MODULE_2__.setWeatherDetails)(\n        isCelcius,\n        weatherObject,\n        feelsLike,\n        humidity,\n        rainChance,\n        windSpeed\n    );\n}\n\nasync function loadForecast(location, isCelcius, isDay, days){\n    let data = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(_weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, _weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.FORECAST_ENDPOINT, _weather_api_creds__WEBPACK_IMPORTED_MODULE_0__.KEY, location, days);\n    if (!data) return;\n    const {forecastContent} = _weather_elements__WEBPACK_IMPORTED_MODULE_3__.forecastElements;\n    const forecastObject = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.createForecastObject)(data);\n    const {forecastDays, forecastHours} = forecastObject;\n    forecastContent.replaceChildren();\n    if (isDay) {\n        for (let d of forecastDays){\n            const {day, highC, lowC, highF, lowF, type, icon} = d;\n            const dayCard = (0,_view_forecast_cards__WEBPACK_IMPORTED_MODULE_5__.createDayCard)(\n                day, \n                isCelcius,\n                highC,\n                highF, \n                lowC,\n                lowF,\n                type,\n                icon )\n            forecastContent.appendChild(dayCard);\n        }\n    } else {\n        for (let [index, h] of forecastHours.entries()) {\n            if (index === days) break;\n            const {hour, tempC, tempF, type, icon} = h;\n            const hourCard = (0,_view_forecast_cards__WEBPACK_IMPORTED_MODULE_5__.createHourCard)(\n                hour,\n                isCelcius,\n                tempC,\n                tempF,\n                type,\n                icon\n            )\n            forecastContent.appendChild(hourCard);\n        }\n    }\n}\n\nfunction initialiseApp(location, isCelcius, isDay, days){\n    const settings = {\n        celciusState: isCelcius,\n        locationState: location,\n        dayState: isDay,\n        daysNumberState: days\n    }\n    initialiseBtns(settings);\n    loadWeather(location, isCelcius);\n    loadForecast(location, isCelcius, isDay, days);\n}\n\nfunction initialiseBtns(settings) {\n    const {\n        celciusBtn, \n        searchInput, \n        searchBtn\n    } = _weather_elements__WEBPACK_IMPORTED_MODULE_3__.weatherCardBtns;\n    const {\n        dailyBtn, \n        hourlyBtn\n    } = _weather_elements__WEBPACK_IMPORTED_MODULE_3__.forecastElements;\n    \n    // add Image and CSS\n    searchBtn.src = _icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__;\n    (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.selectedHandler)(settings, dailyBtn, hourlyBtn);\n\n    celciusBtn.addEventListener('click', e => {\n        settings.celciusState = !settings.celciusState;\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.celciusBtnHandler)(e, settings, celciusBtn);\n    });\n    searchInput.addEventListener('keydown', e => {\n        if (e.key === \"Enter\"){\n            settings.locationState = searchInput.value;\n            (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.clickHandler)(e, settings);\n        }\n    })\n    searchBtn.addEventListener('click', e => {\n        settings.locationState = searchInput.value;\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.clickHandler)(e, settings);\n    });\n    dailyBtn.addEventListener('click', e => {\n        settings.dayState = true;\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.clickHandler)(e, settings);\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.selectedHandler)(settings, dailyBtn, hourlyBtn);\n    })\n    hourlyBtn.addEventListener('click', e => {\n        settings.dayState = false;\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.clickHandler)(e, settings);\n        (0,_elementHandlers__WEBPACK_IMPORTED_MODULE_4__.selectedHandler)(settings, dailyBtn, hourlyBtn);\n    })\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/controller/weather.js?");

/***/ }),

/***/ "./src/modules/model/forecast.js":
/*!***************************************!*\
  !*** ./src/modules/model/forecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ForecastDay: () => (/* binding */ ForecastDay),\n/* harmony export */   ForecastHour: () => (/* binding */ ForecastHour)\n/* harmony export */ });\nconst days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n\nclass ForecastDay {\n    constructor(date, highC, lowC, highF, lowF, type, icon) {\n        this.date = date;\n        this.highC = highC;\n        this.lowC = lowC;\n        this.highF = highF;\n        this.lowF = lowF;\n        this.type = type;\n        this.icon = icon;\n        const day = new Date(this.date);\n        this.day = days[day.getDay()];\n    }\n}\n\n\nclass ForecastHour {\n    constructor(hour, tempC, tempF, type, icon) {\n        this.hour = hour;\n        this.tempC = tempC;\n        this.tempF = tempF;\n        this.type = type;\n        this.icon = icon;\n    }\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/model/forecast.js?");

/***/ }),

/***/ "./src/modules/model/weather.js":
/*!**************************************!*\
  !*** ./src/modules/model/weather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weather: () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\n    constructor(\n        location,\n        date,\n        time,\n        currentTempF,\n        currentTempC,\n        type,\n        icon,\n        heatIndexC,\n        heatIndexF,\n        humidity,\n        rainChance,\n        windSpeed) {\n        this.location = location;\n        this.date = date;\n        this.time = time;\n        this.currentTempC = currentTempC;\n        this.currentTempF = currentTempF;\n        this.type = type;\n        this.icon = icon;\n        this.heatIndexC = heatIndexC;\n        this.heatIndexF = heatIndexF;\n        this.humidity = humidity;\n        this.rainChance = rainChance;\n        this.windSpeed = windSpeed;\n    }\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/model/weather.js?");

/***/ }),

/***/ "./src/modules/view/forecast-cards.js":
/*!********************************************!*\
  !*** ./src/modules/view/forecast-cards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDayCard: () => (/* binding */ createDayCard),\n/* harmony export */   createHourCard: () => (/* binding */ createHourCard)\n/* harmony export */ });\nfunction createDayCard(dayText, isCelcius, highCText, highFText, lowCText, lowFText, typeTxt, typeIconUrl) {\n    const dayCard = document.createElement(\"div\");\n    dayCard.classList.add(\"card\");\n\n    const day = document.createElement(\"div\");\n    day.classList.add(\"card-title\");\n    day.textContent = dayText;\n\n    const temp = document.createElement(\"div\");\n    temp.classList.add(\"card-temp\");\n\n    const high = document.createElement(\"div\");\n    high.classList.add(\"high-temp\");\n    high.textContent = isCelcius ? `${highCText} °C` : `${highFText} °F`;\n\n    const low = document.createElement(\"div\");\n    low.textContent = isCelcius ? `${lowCText} °C` : `${lowFText} °F`;\n    low.classList.add(\"low-temp\");\n    temp.append(high, low);\n\n    const type = document.createElement(\"div\");\n    type.classList.add(\"card-type\")\n    \n    const typeIcon = document.createElement(\"img\");\n    typeIcon.classList.add(\"weather-icon\");\n    typeIcon.src = typeIconUrl;\n    typeIcon.alt = typeTxt;\n\n    type.appendChild(typeIcon);\n\n    dayCard.append(day, temp, type);\n    return dayCard;\n}\n\nfunction createHourCard(hourText, isCelcius, tempCText, tempFText, typeTxt, typeIconUrl) {\n    const hourCard = document.createElement(\"div\");\n    hourCard.classList.add(\"card\");\n\n    const hour = document.createElement(\"div\");\n    hour.classList.add(\"card-title\");\n    hour.textContent = hourText;\n\n    const temp = document.createElement(\"div\");\n    temp.classList.add(\"card-temp\");\n    temp.textContent = isCelcius ? `${tempCText} °C` : `${tempFText} °F`;\n\n    const type = document.createElement(\"div\");\n    type.classList.add(\"card-type\")\n    \n    const typeIcon = document.createElement(\"img\");\n    typeIcon.classList.add(\"weather-icon\");\n    typeIcon.src = typeIconUrl;\n    typeIcon.alt = typeTxt;\n\n    type.appendChild(typeIcon);\n\n    hourCard.append(hour, temp, type);\n    return hourCard;\n}\n\n//# sourceURL=webpack://odin-weather/./src/modules/view/forecast-cards.js?");

/***/ }),

/***/ "./src/modules/view/weather-card.js":
/*!******************************************!*\
  !*** ./src/modules/view/weather-card.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setWeatherCard: () => (/* binding */ setWeatherCard),\n/* harmony export */   setWeatherDetails: () => (/* binding */ setWeatherDetails)\n/* harmony export */ });\nfunction setWeatherCard(\n    isCelcius,\n    weatherObj,\n    weatherType,\n    weatherTypeIcon,\n    weatherLocation,\n    weatherDate,\n    weatherTime,\n    weatherTemp) {\n    const { type, icon, location, date, time, currentTempC, currentTempF } = weatherObj;\n    weatherType.textContent = type;\n    weatherTypeIcon.src = icon;\n    weatherLocation.textContent = location;\n    weatherDate.textContent = date;\n    weatherTime.textContent = time;\n    weatherTemp.textContent = isCelcius ? `${currentTempC} °C` : `${currentTempF} °F`;\n}\n\n\nfunction setWeatherDetails(\n    isCelcius,\n    weatherObj,\n    feelsLikeE,\n    humidityE,\n    rainChanceE,\n    windSpeedE\n) {\n    const { heatIndexC, heatIndexF, humidity, rainChance, windSpeed } = weatherObj;\n    feelsLikeE.textContent = isCelcius ? `${heatIndexC} °C` : `${heatIndexF} °F`;\n    humidityE.textContent = humidity;\n    rainChanceE.textContent = rainChance;\n    windSpeedE.textContent = windSpeed;\n}\n\n\n//# sourceURL=webpack://odin-weather/./src/modules/view/weather-card.js?");

/***/ }),

/***/ "./src/modules/weather-api-creds.js":
/*!******************************************!*\
  !*** ./src/modules/weather-api-creds.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   CURRENT_WEATHER_ENDPOINT: () => (/* binding */ CURRENT_WEATHER_ENDPOINT),\n/* harmony export */   FORECAST_ENDPOINT: () => (/* binding */ FORECAST_ENDPOINT),\n/* harmony export */   KEY: () => (/* binding */ KEY),\n/* harmony export */   SEARCH_ENDPOINT: () => (/* binding */ SEARCH_ENDPOINT)\n/* harmony export */ });\nconst BASE_URL = \"https://api.weatherapi.com/v1/\";\nconst KEY = \"664a3644c9eb479d92e94753241804\";\nconst CURRENT_WEATHER_ENDPOINT = \"current.json\";\nconst FORECAST_ENDPOINT = \"forecast.json\";\nconst SEARCH_ENDPOINT = \"search.json\";\n\n//# sourceURL=webpack://odin-weather/./src/modules/weather-api-creds.js?");

/***/ }),

/***/ "./src/modules/icons/background-static.jpg":
/*!*************************************************!*\
  !*** ./src/modules/icons/background-static.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fa30e19f76ac215d076.jpg\";\n\n//# sourceURL=webpack://odin-weather/./src/modules/icons/background-static.jpg?");

/***/ }),

/***/ "./src/modules/icons/search-icon.svg":
/*!*******************************************!*\
  !*** ./src/modules/icons/search-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82d3481840537f55a197.svg\";\n\n//# sourceURL=webpack://odin-weather/./src/modules/icons/search-icon.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;