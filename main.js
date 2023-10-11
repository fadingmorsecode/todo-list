/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --inter: 'Inter', sans-serif;
  --dela: 'Dela Gothic One', cursive;
}

body {
  height: 100vh;
  background: linear-gradient(to bottom, #000000, #333333);
}

.container {
  height: 100%;
  display: grid;
  grid-template: 1fr 8fr / 2fr 7fr;
  gap: 1.2rem;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f3f5;
  grid-column-start: 1;
  grid-column-end: 3;
  border-radius: 0 0 15px 15px;
  gap: 20px;
}

.logo-text {
  font-size: 3rem;
  font-family: var(--inter);
  font-weight: 500;
}

.logo-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-img > img {
  width: 3.5rem;
}

.side-bar {
  border: solid 5px #f0f3f5;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 10px;
  gap: 15px;
  overflow: scroll;
}

.inbox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: solid 2px #f0f3f5;
  height: 4rem;
  flex-shrink: 0;
  background-color: grey;
}

.inbox > p {
  font-family: var(--inter);
  font-size: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  border: solid 5px #f0f3f5;
  border-radius: 15px 15px 0 0;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 10px;
}

.content-header,
.new-projects-container {
  display: flex;
  gap: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 4rem;
  width: 100%;
  flex-shrink: 0;
}

.new-task-txt,
.new-projects-container > p {
  font-family: var(--inter);
  font-size: 2rem;
}

.new-task-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-task-btn > img,
.project-add-btn > img {
  width: 30px;
}

.new-task-btn > img:hover,
.project-add-btn > img:hover {
  transform: scale(1.2);
}

.project-add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styling for Project Container */

.project-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.proj {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: solid 2px #f0f3f5;
  height: 4rem;
  background-color: white;
}

.proj > p {
  font-family: var(--inter);
  font-size: 2rem;
}

.proj-delete > img {
  width: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,wDAAwD;AAC1D;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB;EAClB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,4BAA4B;EAC5B,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;;EAEE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;AACb;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kCAAkC;;AAElC;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n:root {\n  --inter: 'Inter', sans-serif;\n  --dela: 'Dela Gothic One', cursive;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(to bottom, #000000, #333333);\n}\n\n.container {\n  height: 100%;\n  display: grid;\n  grid-template: 1fr 8fr / 2fr 7fr;\n  gap: 1.2rem;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f3f5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  border-radius: 0 0 15px 15px;\n  gap: 20px;\n}\n\n.logo-text {\n  font-size: 3rem;\n  font-family: var(--inter);\n  font-weight: 500;\n}\n\n.logo-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-img > img {\n  width: 3.5rem;\n}\n\n.side-bar {\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  display: flex;\n  flex-direction: column;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  padding: 10px;\n  gap: 15px;\n  overflow: scroll;\n}\n\n.inbox {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  flex-shrink: 0;\n  background-color: grey;\n}\n\n.inbox > p {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  padding: 10px;\n}\n\n.content-header,\n.new-projects-container {\n  display: flex;\n  gap: 15px;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  height: 4rem;\n  width: 100%;\n  flex-shrink: 0;\n}\n\n.new-task-txt,\n.new-projects-container > p {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.new-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-task-btn > img,\n.project-add-btn > img {\n  width: 30px;\n}\n\n.new-task-btn > img:hover,\n.project-add-btn > img:hover {\n  transform: scale(1.2);\n}\n\n.project-add-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Styling for Project Container */\n\n.project-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.proj {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  background-color: white;\n}\n\n.proj > p {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.proj-delete > img {\n  width: 30px;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterProject: () => (/* binding */ filterProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


const filterProject = function (projectValue) {
  let filtered = _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.todoContainer.filter(
    (obj) => obj.project === projectValue
  );
  return filtered;
};




/***/ }),

/***/ "./src/modules/imageloader.js":
/*!************************************!*\
  !*** ./src/modules/imageloader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadImages: () => (/* binding */ loadImages)
/* harmony export */ });
/* harmony import */ var _assets_tasktigerlogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tasktigerlogo.svg */ "./src/assets/tasktigerlogo.svg");
/* harmony import */ var _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/plus-circle-svgrepo-com.svg */ "./src/assets/plus-circle-svgrepo-com.svg");
/* harmony import */ var _assets_trash_xmark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/trash-xmark-svgrepo-com.svg */ "./src/assets/trash-xmark-svgrepo-com.svg");




const loadImages = () => {
  const logoContainer = document.querySelector('.logo-img');
  const logoIcon = new Image();
  logoIcon.src = _assets_tasktigerlogo_svg__WEBPACK_IMPORTED_MODULE_0__;
  logoContainer.appendChild(logoIcon);

  const plusIconContainer = document.querySelector('.new-task-btn');
  const plusIcon = new Image();
  plusIcon.src = _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
  plusIconContainer.appendChild(plusIcon);

  const projectAddBtn = document.querySelector('.project-add-btn');
  const projectPlusIcon = new Image();
  projectPlusIcon.src = _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
  projectAddBtn.appendChild(projectPlusIcon);
};




/***/ }),

/***/ "./src/modules/itemcreation.js":
/*!*************************************!*\
  !*** ./src/modules/itemcreation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSecondTodo: () => (/* binding */ createSecondTodo),
/* harmony export */   createThirdTodo: () => (/* binding */ createThirdTodo),
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


// Default state of of checked status is unchecked.
class todo {
  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.checkState = false;
  }
}

todo.prototype.toggleCheck = function () {
  if (this.checkState === false) {
    this.checkState = true;
  } else {
    this.checkState = false;
  }
};

const priorities = ['low', 'medium', 'high'];

const createTodo = () => {
  const title = 'test project';
  const description = 'test description';
  const dueDate = '10/07/2025';
  const priority = priorities[0];
  const notes = 'test notes';
  const project = 'homework';
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addTodo(newTodo);
};

const createSecondTodo = () => {
  const title = 'jamiroquai';
  const description = 'the best!';
  const dueDate = '10/20/2025';
  const priority = priorities[1];
  const notes = 'test notes';
  const project = 'music';
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addTodo(newTodo);
};

const createThirdTodo = () => {
  const title = 'mac demarco';
  const description = 'soooo good!';
  const dueDate = '10/15/2025';
  const priority = priorities[2];
  const notes = 'test notes';
  const project = 'music';
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addTodo(newTodo);
};




/***/ }),

/***/ "./src/modules/projectcreation.js":
/*!****************************************!*\
  !*** ./src/modules/projectcreation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


const createProject = () => {
  const projectName = prompt('Enter the project name');
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addProject(projectName);
};




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageContainers: () => (/* binding */ storageContainers)
/* harmony export */ });
const storageContainers = (function () {
  const todoContainer = [];
  const projectContainer = ['music', 'homework'];

  const addTodo = function (todo) {
    todoContainer.push(todo);
  };

  const addProject = function (project) {
    projectContainer.push(project);
  };

  const displayContainers = function () {
    console.log(todoContainer);
    console.log(projectContainer);
  };

  return {
    addTodo,
    addProject,
    todoContainer,
    projectContainer,
    displayContainers,
  };
})();




/***/ }),

/***/ "./src/assets/plus-circle-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/assets/plus-circle-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea69b56b7ead87a19cd2.svg";

/***/ }),

/***/ "./src/assets/tasktigerlogo.svg":
/*!**************************************!*\
  !*** ./src/assets/tasktigerlogo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0557d250b0445e971aff.svg";

/***/ }),

/***/ "./src/assets/trash-xmark-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/assets/trash-xmark-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8ccb196b20b78ceeb9e.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_imageloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/imageloader */ "./src/modules/imageloader.js");
/* harmony import */ var _modules_itemcreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/itemcreation */ "./src/modules/itemcreation.js");
/* harmony import */ var _modules_projectcreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectcreation */ "./src/modules/projectcreation.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/filter */ "./src/modules/filter.js");







(0,_modules_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createTodo)();
(0,_modules_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createSecondTodo)();
(0,_modules_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createThirdTodo)();

console.log(JSON.stringify(_modules_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.todoContainer[0]));

_modules_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.todoContainer[0].toggleCheck();

console.log(JSON.stringify(_modules_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.todoContainer[0]));

console.log((0,_modules_filter__WEBPACK_IMPORTED_MODULE_5__.filterProject)('music'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRkFBbUYsTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxL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LEVBQUUsdURBQWlCO0FBQ25COztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDUHpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNkI7QUFLbkI7QUFDMEI7QUFDSjtBQUNMOztBQUVqRCxpRUFBVTtBQUNWLHVFQUFnQjtBQUNoQixzRUFBZTs7QUFFZiwyQkFBMkIsK0RBQWlCOztBQUU1QywrREFBaUI7O0FBRWpCLDJCQUEyQiwrREFBaUI7O0FBRTVDLFlBQVksOERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW1hZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaXRlbWNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RjcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIC0taW50ZXI6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIC0tZGVsYTogJ0RlbGEgR290aGljIE9uZScsIGN1cnNpdmU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwLCAjMzMzMzMzKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDhmciAvIDJmciA3ZnI7XG4gIGdhcDogMS4ycmVtO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9nby1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28taW1nID4gaW1nIHtcbiAgd2lkdGg6IDMuNXJlbTtcbn1cblxuLnNpZGUtYmFyIHtcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAxNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uaW5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmMGYzZjU7XG4gIGhlaWdodDogNHJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5pbmJveCA+IHAge1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnQtaGVhZGVyLFxuLm5ldy1wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5uZXctdGFzay10eHQsXG4ubmV3LXByb2plY3RzLWNvbnRhaW5lciA+IHAge1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5uZXctdGFzay1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy10YXNrLWJ0biA+IGltZyxcbi5wcm9qZWN0LWFkZC1idG4gPiBpbWcge1xuICB3aWR0aDogMzBweDtcbn1cblxuLm5ldy10YXNrLWJ0biA+IGltZzpob3Zlcixcbi5wcm9qZWN0LWFkZC1idG4gPiBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5wcm9qZWN0LWFkZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU3R5bGluZyBmb3IgUHJvamVjdCBDb250YWluZXIgKi9cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxuLnByb2oge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YwZjNmNTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ogPiBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ucHJvai1kZWxldGUgPiBpbWcge1xuICB3aWR0aDogMzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGtDQUFrQzs7QUFFbEM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0taW50ZXI6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAtLWRlbGE6ICdEZWxhIEdvdGhpYyBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwLCAjMzMzMzMzKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDhmciAvIDJmciA3ZnI7XFxuICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2Y1O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubG9nby1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28taW1nID4gaW1nIHtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXI6IHNvbGlkIDVweCAjZjBmM2Y1O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmluYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uaW5ib3ggPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb250ZW50LWhlYWRlcixcXG4ubmV3LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLm5ldy10YXNrLXR4dCxcXG4ubmV3LXByb2plY3RzLWNvbnRhaW5lciA+IHAge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stYnRuID4gaW1nLFxcbi5wcm9qZWN0LWFkZC1idG4gPiBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5uZXctdGFzay1idG4gPiBpbWc6aG92ZXIsXFxuLnByb2plY3QtYWRkLWJ0biA+IGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5wcm9qZWN0LWFkZC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgUHJvamVjdCBDb250YWluZXIgKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qID4gcCB7XFxuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucHJvai1kZWxldGUgPiBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgZmlsdGVyUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0VmFsdWUpIHtcbiAgbGV0IGZpbHRlcmVkID0gc3RvcmFnZUNvbnRhaW5lcnMudG9kb0NvbnRhaW5lci5maWx0ZXIoXG4gICAgKG9iaikgPT4gb2JqLnByb2plY3QgPT09IHByb2plY3RWYWx1ZVxuICApO1xuICByZXR1cm4gZmlsdGVyZWQ7XG59O1xuXG5leHBvcnQgeyBmaWx0ZXJQcm9qZWN0IH07XG4iLCJpbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4uL2Fzc2V0cy90YXNrdGlnZXJsb2dvLnN2Zyc7XG5pbXBvcnQgcGx1c0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9wbHVzLWNpcmNsZS1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4uL2Fzc2V0cy90cmFzaC14bWFyay1zdmdyZXBvLWNvbS5zdmcnO1xuXG5jb25zdCBsb2FkSW1hZ2VzID0gKCkgPT4ge1xuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28taW1nJyk7XG4gIGNvbnN0IGxvZ29JY29uID0gbmV3IEltYWdlKCk7XG4gIGxvZ29JY29uLnNyYyA9IGxvZ29JbWFnZTtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSWNvbik7XG5cbiAgY29uc3QgcGx1c0ljb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stYnRuJyk7XG4gIGNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gIHBsdXNJY29uLnNyYyA9IHBsdXNJbWFnZTtcbiAgcGx1c0ljb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hZGQtYnRuJyk7XG4gIGNvbnN0IHByb2plY3RQbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0UGx1c0ljb24uc3JjID0gcGx1c0ltYWdlO1xuICBwcm9qZWN0QWRkQnRuLmFwcGVuZENoaWxkKHByb2plY3RQbHVzSWNvbik7XG59O1xuXG5leHBvcnQgeyBsb2FkSW1hZ2VzIH07XG4iLCJpbXBvcnQgeyBzdG9yYWdlQ29udGFpbmVycyB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIERlZmF1bHQgc3RhdGUgb2Ygb2YgY2hlY2tlZCBzdGF0dXMgaXMgdW5jaGVja2VkLlxuY2xhc3MgdG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNoZWNrU3RhdGUgPSBmYWxzZTtcbiAgfVxufVxuXG50b2RvLnByb3RvdHlwZS50b2dnbGVDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2hlY2tTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmNoZWNrU3RhdGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2hlY2tTdGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBwcmlvcml0aWVzID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAndGVzdCBwcm9qZWN0JztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAndGVzdCBkZXNjcmlwdGlvbic7XG4gIGNvbnN0IGR1ZURhdGUgPSAnMTAvMDcvMjAyNSc7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdGllc1swXTtcbiAgY29uc3Qgbm90ZXMgPSAndGVzdCBub3Rlcyc7XG4gIGNvbnN0IHByb2plY3QgPSAnaG9tZXdvcmsnO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8oXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0XG4gICk7XG4gIHN0b3JhZ2VDb250YWluZXJzLmFkZFRvZG8obmV3VG9kbyk7XG59O1xuXG5jb25zdCBjcmVhdGVTZWNvbmRUb2RvID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9ICdqYW1pcm9xdWFpJztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAndGhlIGJlc3QhJztcbiAgY29uc3QgZHVlRGF0ZSA9ICcxMC8yMC8yMDI1JztcbiAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0aWVzWzFdO1xuICBjb25zdCBub3RlcyA9ICd0ZXN0IG5vdGVzJztcbiAgY29uc3QgcHJvamVjdCA9ICdtdXNpYyc7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyhcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RcbiAgKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkVG9kbyhuZXdUb2RvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRoaXJkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnbWFjIGRlbWFyY28nO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdzb29vbyBnb29kISc7XG4gIGNvbnN0IGR1ZURhdGUgPSAnMTAvMTUvMjAyNSc7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdGllc1syXTtcbiAgY29uc3Qgbm90ZXMgPSAndGVzdCBub3Rlcyc7XG4gIGNvbnN0IHByb2plY3QgPSAnbXVzaWMnO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8oXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0XG4gICk7XG4gIHN0b3JhZ2VDb250YWluZXJzLmFkZFRvZG8obmV3VG9kbyk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBjcmVhdGVTZWNvbmRUb2RvLCBjcmVhdGVUaGlyZFRvZG8gfTtcbiIsImltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIHRoZSBwcm9qZWN0IG5hbWUnKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XG4iLCJjb25zdCBzdG9yYWdlQ29udGFpbmVycyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBbXTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IFsnbXVzaWMnLCAnaG9tZXdvcmsnXTtcblxuICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICB0b2RvQ29udGFpbmVyLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRvZG9Db250YWluZXIpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHRvZG9Db250YWluZXIsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICBkaXNwbGF5Q29udGFpbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGxvYWRJbWFnZXMgfSBmcm9tICcuL21vZHVsZXMvaW1hZ2Vsb2FkZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2Vjb25kVG9kbyxcbiAgY3JlYXRlVGhpcmRUb2RvLFxuICBjcmVhdGVUb2RvLFxufSBmcm9tICcuL21vZHVsZXMvaXRlbWNyZWF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdGNyZWF0aW9uJztcbmltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZmlsdGVyUHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9maWx0ZXInO1xuXG5jcmVhdGVUb2RvKCk7XG5jcmVhdGVTZWNvbmRUb2RvKCk7XG5jcmVhdGVUaGlyZFRvZG8oKTtcblxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RvcmFnZUNvbnRhaW5lcnMudG9kb0NvbnRhaW5lclswXSkpO1xuXG5zdG9yYWdlQ29udGFpbmVycy50b2RvQ29udGFpbmVyWzBdLnRvZ2dsZUNoZWNrKCk7XG5cbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VDb250YWluZXJzLnRvZG9Db250YWluZXJbMF0pKTtcblxuY29uc29sZS5sb2coZmlsdGVyUHJvamVjdCgnbXVzaWMnKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=