"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_with_webpack_es6"] = self["webpackChunkto_do_list_with_webpack_es6"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff2 */ \"./src/font/my-font.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff */ \"./src/font/my-font.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Exo 2', sans-serif, !important;\\n  src:\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\n  font-weight: 900;\\n  font-style: normal;\\n}\\n\\nbody {\\n  background-color: #fff;\\n}\\n\\n.nav,\\n.footer {\\n  background-color: #000;\\n  height: 2vh;\\n}\\n\\n.nav {\\n  position: fixed;\\n  top: 0;\\n  width: 96vw;\\n}\\n\\n.footer {\\n  position: fixed;\\n  bottom: 0;\\n  width: 96vw;\\n}\\n\\n.list-form-div {\\n  /* background-color: red; */\\n  margin-top: 20px;\\n  height: 95vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.list-form-div-child {\\n  border: 1px thin #000;\\n  width: 85vw;\\n  box-shadow: 0 0 10px 0 #000;\\n}\\n\\n.list-header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px 10px;\\n  border-bottom: 1px solid #000;\\n  font-family: 'Exo 2', sans-serif;\\n}\\n\\n.refresh-img {\\n  width: 22px;\\n  cursor: pointer;\\n  background-color: inherit;\\n}\\n\\n.refresh-button {\\n  width: fit-content;\\n  background-color: inherit;\\n  border: none;\\n}\\n\\n.form {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px 10px;\\n  border-bottom: 1px solid #000;\\n}\\n\\n.task-input {\\n  border: none;\\n  height: 6vh;\\n  width: 80%;\\n  font-family: 'Exo 2', sans-serif;\\n}\\n\\n.task-input::placeholder {\\n  font-style: italic;\\n  border: 0;\\n}\\n\\n.task-input:enabled {\\n  border: none;\\n}\\n\\n.task-input:active {\\n  border: none;\\n}\\n\\n.task-input:focus {\\n  border: none;\\n}\\n\\n.task-input:hover {\\n  border: none;\\n}\\n\\n.enter-img {\\n  width: 20px;\\n  cursor: pointer;\\n  background-color: inherit;\\n}\\n\\n.enter-button {\\n  width: fit-content;\\n  background-color: inherit;\\n  border: none;\\n}\\n\\n.clear-completed {\\n  display: flex;\\n  justify-content: center;\\n  width: inherit;\\n  align-items: center;\\n  height: 7vh;\\n  font-family: 'Exo 2', sans-serif;\\n  font-size: 1.2rem;\\n  border: 3px solid #000;\\n  border-radius: 5px;\\n}\\n\\n.to-do-list-ul {\\n  margin: 0;\\n  list-style: none;\\n\\n  /* display: none; */\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.to-do-list-item {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.edit-image,\\n.delete-image {\\n  width: 20px;\\n  cursor: pointer;\\n  background-color: inherit;\\n}\\n\\n.edit-button,\\n.delete-button {\\n  border: 0;\\n  border-radius: 0;\\n  background-color: inherit;\\n  padding: 5px 0;\\n}\\n\\n.footer-buttons {\\n  display: none;\\n}\\n\\n.edit-input {\\n  padding: 0;\\n}\\n\\n#task-edit-error {\\n  background-color: red;\\n  color: #fff;\\n  padding: 0 19px;\\n  font-size: 25px;\\n  display: none;\\n  font-family: 'Exo 2', sans-serif;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .nav,\\n  .footer {\\n    height: 5vh;\\n  }\\n\\n  .list-form-div {\\n    margin-top: 5vh;\\n    height: 90vh;\\n  }\\n\\n  .list-form-div-child {\\n    width: 50vw;\\n  }\\n\\n  .list-header {\\n    padding: 5px 20px;\\n  }\\n\\n  .form {\\n    padding: 5px 20px;\\n  }\\n\\n  .task-input {\\n    height: 5vh;\\n    width: 70%;\\n  }\\n\\n  .enter-img {\\n    width: 25px;\\n  }\\n\\n  .clear-completed {\\n    height: 5vh;\\n    font-size: 1.5rem;\\n  }\\n\\n  .edit-image,\\n  .delete-image {\\n    width: 25px;\\n  }\\n\\n  .edit-button,\\n  .delete-button {\\n    padding: 5px 5px;\\n  }\\n\\n  .footer-buttons {\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 20px;\\n    display: none;\\n  }\\n\\n  .footer-buttons p {\\n    font-family: 'Exo 2', sans-serif;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/refresh.png */ \"./src/images/icons/refresh.png\");\n/* harmony import */ var _images_icons_enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/enter.png */ \"./src/images/icons/enter.png\");\n/* harmony import */ var _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Variables.js */ \"./src/modules/Variables.js\");\n/* harmony import */ var _modules_Function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Function.js */ \"./src/modules/Function.js\");\n\n// import refresh from imgages\n\n// import enter from images\n\n\n// import variables from variables.js\n\n\n// import createTaskDynamically from Function.js\n\n\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.refreshButton.src = _images_icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__;\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.refreshButton.classList.add('refresh-img');\n// Append refresh button to the DOM\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.refresh.appendChild(_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.refreshButton);\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.enterButton.src = _images_icons_enter_png__WEBPACK_IMPORTED_MODULE_2__;\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.enterButton.classList.add('enter-img');\n// Append enter button to the DOM\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.submit.appendChild(_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.enterButton);\n\n// event listener for enter button\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.submit.addEventListener('click', (event) => {\n  event.preventDefault();\n  if ((_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.input.value !== '') || (event.key === 'Enter')) {\n    (0,_modules_Function_js__WEBPACK_IMPORTED_MODULE_4__.createTaskDynamically)();\n    _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.style.display = 'block';\n  } else if (_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.input.value === '') {\n    _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.errorMessage.style.display = 'block';\n    setTimeout(() => {\n      _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.errorMessage.style.display = 'none';\n    }, 1500);\n  }\n});\n\n// Event listener for refresh button\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.refresh.addEventListener('click', (event) => {\n  event.preventDefault();\n  window.location.reload();\n});\n\nwindow.addEventListener('load', () => {\n  (0,_modules_Function_js__WEBPACK_IMPORTED_MODULE_4__.displayTasks)();\n});\n\n// event listener for clear completed button\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.clearCompletedButton.addEventListener('click', (event) => {\n  event.preventDefault();\n  const completedTasks = document.querySelectorAll('.completed');\n  completedTasks.forEach((task) => {\n    task.parentElement.remove();\n  });\n});\n\n// event listener for delete button\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.addEventListener('click', (event) => {\n  if (event.target.className === 'delete-image') {\n    (0,_modules_Function_js__WEBPACK_IMPORTED_MODULE_4__.deleteItem)(event);\n  }\n  if (event.target.className === 'edit-image') {\n    const editButton = event.target.parentElement;\n    const editTask = editButton.previousElementSibling;\n    const editTaskText = editTask.textContent;\n    editTask.innerHTML = `\n        <input type=\"text\" class=\"edit-input\" value=\"${editTaskText}\" >\n        `;\n    const editInput = editTask.querySelector('.edit-input');\n    // editInput.value = '';\n    editInput.addEventListener('keydown', (event) => {\n      if ((event.key === 'Enter') && (editInput.value !== '')) {\n        const editInput = editTask.querySelector('.edit-input');\n        event.preventDefault();\n        // update local storage\n        const taskIndex = event.target.parentElement.parentElement.children[0].id;\n        const taskIndexNumber = taskIndex.split('-')[1];\n        const tasks = JSON.parse(localStorage.getItem('tasks'));\n        tasks[taskIndexNumber - 1].description = editInput.value;\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n        editTask.innerHTML = editInput.value;\n      } else if ((event.key === 'Enter') && (editInput.value === '')) {\n        // show error message\n        _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.errorMessage.style.display = 'block';\n        setTimeout(() => {\n          _modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.errorMessage.style.display = 'none';\n        }, 3000);\n      }\n    });\n  }\n});\n\n//  eventlistener for checkbox to mark task as completed and update local storage\n_modules_Variables_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.addEventListener('change', (event) => {\n  if (event.target.type === 'checkbox') {\n    if (event.target.checked) {\n      event.target.parentElement.classList.add('completed');\n      // update local storage\n      const taskIndex = event.target.id;\n      const taskIndexNumber = taskIndex.split('-')[1];\n      const tasks = JSON.parse(localStorage.getItem('tasks'));\n      tasks[taskIndexNumber - 1].completed = true;\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    } else {\n      event.target.parentElement.classList.remove('completed');\n      // update local storage\n      const taskIndex = event.target.id;\n      const taskIndexNumber = taskIndex.split('-')[1];\n      const tasks = JSON.parse(localStorage.getItem('tasks'));\n      tasks[taskIndexNumber - 1].completed = false;\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    }\n  }\n});\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/index.js?");

/***/ }),

/***/ "./src/modules/Constructor.js":
/*!************************************!*\
  !*** ./src/modules/Constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(index, description, completed = null) {\n    this.index = index;\n    this.description = description;\n    this.completed = completed;\n    this.listArray = JSON.parse(localStorage.getItem('books')) || [];\n  }\n\n  addNewTask = (index = null, description = null, completed = null) => {\n    if (description) {\n      const newTaskIndex = index || this.listArray.length + 1;\n      const isNewTaskCompleted = completed || false;\n      const newTask = new Task(newTaskIndex, description, isNewTaskCompleted);\n      this.listArray.push(newTask);\n      localStorage.setItem('tasks', JSON.stringify(this.listArray));\n      return newTask;\n    }\n\n    return null;\n  };\n\n  updateTask = (index, description, completed) => {\n    const task = this.listArray.find((task) => task.index === index);\n    task.description = description;\n    task.completed = completed;\n    localStorage.setItem('tasks', JSON.stringify(this.listArray));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/modules/Constructor.js?");

/***/ }),

/***/ "./src/modules/Function.js":
/*!*********************************!*\
  !*** ./src/modules/Function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDynamically\": () => (/* binding */ createTaskDynamically),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _Variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variables.js */ \"./src/modules/Variables.js\");\n/* harmony import */ var _images_icons_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/delete.png */ \"./src/images/icons/delete.png\");\n/* harmony import */ var _images_icons_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/edit.png */ \"./src/images/icons/edit.png\");\n\n\n// import delete from images\n\n// import edit from images\n\n\nconst createTaskDynamically = () => {\n  const task = _Variables_js__WEBPACK_IMPORTED_MODULE_0__.newTask.addNewTask(null, _Variables_js__WEBPACK_IMPORTED_MODULE_0__.input.value, false);\n  const li = document.createElement('li');\n  li.classList.add('to-do-list-item');\n  _Variables_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.appendChild(li);\n  const checkBox = document.createElement('input');\n  checkBox.setAttribute('type', 'checkbox');\n  checkBox.setAttribute('class', 'checkbox');\n  checkBox.setAttribute('id', `checkbox-${task.index}`);\n  checkBox.setAttribute('unchecked', `${task.completed ? 'checked' : ''}`);\n  li.appendChild(checkBox);\n  const checkBoxLabel = document.createElement('label');\n  checkBoxLabel.setAttribute('for', `checkbox-${task.index}`);\n  checkBoxLabel.setAttribute('class', 'checkbox-label');\n  checkBoxLabel.innerHTML = task.description;\n  li.appendChild(checkBoxLabel);\n  const editButton = document.createElement('button');\n  editButton.setAttribute('class', 'edit-button');\n  editButton.setAttribute('type', 'button');\n  editButton.innerHTML = `<img class=\"edit-image\" src='${_images_icons_edit_png__WEBPACK_IMPORTED_MODULE_2__}' alt=\"Edit Button\">`;\n  li.appendChild(editButton);\n  const deleteButton = document.createElement('button');\n  deleteButton.setAttribute('class', 'delete-button');\n  deleteButton.setAttribute('type', 'button');\n  deleteButton.innerHTML = `<img class=\"delete-image\" src='${_images_icons_delete_png__WEBPACK_IMPORTED_MODULE_1__}' alt=\"Delete Button\">`;\n  li.appendChild(deleteButton);\n  _Variables_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';\n  // get the list from local storage\n  localStorage.getItem('tasks');\n};\n\nconst displayTasks = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (tasks !== null) {\n    tasks.forEach((task) => {\n      const li = document.createElement('li');\n      li.classList.add('to-do-list-item');\n      _Variables_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.appendChild(li);\n      const checkBox = document.createElement('input');\n      checkBox.setAttribute('type', 'checkbox');\n      checkBox.setAttribute('class', 'checkbox');\n      checkBox.setAttribute('id', `checkbox-${task.index}`);\n      checkBox.setAttribute('value', `${task.completed ? 'checked' : ''}`);\n      // checkBox.setAttribute('unchecked', `${task.completed ? 'checked' : ''}`);\n      if (task.completed) {\n        checkBox.setAttribute('checked', 'checked');\n        checkBox.classList.add('completed');\n      } else {\n        checkBox.setAttribute('unchecked', 'unchecked');\n      }\n      li.appendChild(checkBox);\n      const checkBoxLabel = document.createElement('label');\n      checkBoxLabel.setAttribute('for', `checkbox-${task.index}`);\n      checkBoxLabel.setAttribute('class', 'checkbox-label');\n      checkBoxLabel.innerHTML = task.description;\n      li.appendChild(checkBoxLabel);\n      const editButton = document.createElement('button');\n      editButton.setAttribute('class', 'edit-button');\n      editButton.setAttribute('type', 'button');\n      editButton.innerHTML = `<img class=\"edit-image\" src='${_images_icons_edit_png__WEBPACK_IMPORTED_MODULE_2__}' alt=\"Edit Button\">`;\n      li.appendChild(editButton);\n      const deleteButton = document.createElement('button');\n      deleteButton.setAttribute('class', 'delete-button');\n      deleteButton.setAttribute('type', 'button');\n      deleteButton.innerHTML = `<img class=\"delete-image\" src='${_images_icons_delete_png__WEBPACK_IMPORTED_MODULE_1__}' alt=\"Delete Button\">`;\n      li.appendChild(deleteButton);\n    });\n  }\n};\n\nconst deleteItem = (event) => {\n  event.target.parentElement.parentElement.remove();\n  // remove task from local storage\n  const taskIndex = event.target.parentElement.parentElement.children[0].id;\n  const taskIndexNumber = taskIndex.split('-')[1];\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  tasks.splice(taskIndexNumber - 1, 1);\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\n\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/modules/Function.js?");

/***/ }),

/***/ "./src/modules/Variables.js":
/*!**********************************!*\
  !*** ./src/modules/Variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompletedButton\": () => (/* binding */ clearCompletedButton),\n/* harmony export */   \"enterButton\": () => (/* binding */ enterButton),\n/* harmony export */   \"errorMessage\": () => (/* binding */ errorMessage),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"parser\": () => (/* binding */ parser),\n/* harmony export */   \"refresh\": () => (/* binding */ refresh),\n/* harmony export */   \"refreshButton\": () => (/* binding */ refreshButton),\n/* harmony export */   \"submit\": () => (/* binding */ submit),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _Constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constructor.js */ \"./src/modules/Constructor.js\");\n\n\nconst submit = document.querySelector('.enter-button');\nconst refresh = document.querySelector('.refresh-button');\nconst toDoList = document.querySelector('.to-do-list-ul');\nconst errorMessage = document.querySelector('#task-edit-error');\nconst parser = new DOMParser();\n// Declare enter button\nconst enterButton = new Image();\n// Declare refresh button\nconst refreshButton = new Image();\n\n//  Declare Clear all completed  button\nconst clearCompletedButton = document.querySelector('.clear-completed');\n\n// Declare input\nconst input = document.querySelector('.task-input');\n\nconst newTask = new _Constructor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/modules/Variables.js?");

/***/ }),

/***/ "./src/font/my-font.woff":
/*!*******************************!*\
  !*** ./src/font/my-font.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/font/my-font.woff?");

/***/ }),

/***/ "./src/font/my-font.woff2":
/*!********************************!*\
  !*** ./src/font/my-font.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff2\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/font/my-font.woff2?");

/***/ }),

/***/ "./src/images/icons/delete.png":
/*!*************************************!*\
  !*** ./src/images/icons/delete.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54a6f37ad189a551a7d4.png\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/images/icons/delete.png?");

/***/ }),

/***/ "./src/images/icons/edit.png":
/*!***********************************!*\
  !*** ./src/images/icons/edit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c20a026b1fac425e7f06.png\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/images/icons/edit.png?");

/***/ }),

/***/ "./src/images/icons/enter.png":
/*!************************************!*\
  !*** ./src/images/icons/enter.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed8a019d7c264e35bdea.png\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/images/icons/enter.png?");

/***/ }),

/***/ "./src/images/icons/refresh.png":
/*!**************************************!*\
  !*** ./src/images/icons/refresh.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"daea2901df8789552ee0.png\";\n\n//# sourceURL=webpack://to-do-list-with-webpack-es6/./src/images/icons/refresh.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);