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

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
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

.content-header {
  display: flex;
  gap: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 4rem;
  width: 100%;
  flex-shrink: 0;
}

.new-task-txt {
  font-family: var(--inter);
  font-size: 2rem;
}

.new-task-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-task-btn > img,
.project-add-btn-container > img {
  width: 30px;
}

.new-task-btn > img:hover,
.project-add-btn-container > img:hover {
  transform: scale(1.2);
}

.project-add-btn-container {
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
  padding: 20px;
  justify-content: space-between;
}

.proj > p {
  font-family: var(--inter);
  font-size: 1rem;
}

.proj-delete > img {
  width: 30px;
  display: flex;
  align-items: center;
}

#new-project-input {
  border: solid 2px black;
  border-radius: 5px;
}

.new-projects-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  min-height: 4rem;
  width: 100%;
  flex-shrink: 0;
  gap: 5px;
}

.new-project-input-container {
  display: flex;
  gap: 10px;
}

#invalid-proj {
  color: red;
  font-family: var(--inter);
  font-size: 14px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,wDAAwD;AAC1D;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB;EAClB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,4BAA4B;EAC5B,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;AACb;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kCAAkC;;AAElC;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n:root {\n  --inter: 'Inter', sans-serif;\n  --dela: 'Dela Gothic One', cursive;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(to bottom, #000000, #333333);\n}\n\n.container {\n  height: 100%;\n  display: grid;\n  grid-template: 1fr 8fr / 2fr 7fr;\n  gap: 1.2rem;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f3f5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  border-radius: 0 0 15px 15px;\n  gap: 20px;\n}\n\n.logo-text {\n  font-size: 3rem;\n  font-family: var(--inter);\n  font-weight: 500;\n}\n\n.logo-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-img > img {\n  width: 3.5rem;\n}\n\n.side-bar {\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  display: flex;\n  flex-direction: column;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  padding: 10px;\n  gap: 15px;\n  overflow: scroll;\n}\n\n.inbox {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  flex-shrink: 0;\n  background-color: grey;\n}\n\n.inbox > p {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  padding: 10px;\n}\n\n.content-header {\n  display: flex;\n  gap: 10px;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  height: 4rem;\n  width: 100%;\n  flex-shrink: 0;\n}\n\n.new-task-txt {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.new-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-task-btn > img,\n.project-add-btn-container > img {\n  width: 30px;\n}\n\n.new-task-btn > img:hover,\n.project-add-btn-container > img:hover {\n  transform: scale(1.2);\n}\n\n.project-add-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Styling for Project Container */\n\n.project-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.proj {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  background-color: white;\n  padding: 20px;\n  justify-content: space-between;\n}\n\n.proj > p {\n  font-family: var(--inter);\n  font-size: 1rem;\n}\n\n.proj-delete > img {\n  width: 30px;\n  display: flex;\n  align-items: center;\n}\n\n#new-project-input {\n  border: solid 2px black;\n  border-radius: 5px;\n}\n\n.new-projects-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  min-height: 4rem;\n  width: 100%;\n  flex-shrink: 0;\n  gap: 5px;\n}\n\n.new-project-input-container {\n  display: flex;\n  gap: 10px;\n}\n\n#invalid-proj {\n  color: red;\n  font-family: var(--inter);\n  font-size: 14px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/dom/newprojectlistener.js":
/*!***************************************!*\
  !*** ./src/dom/newprojectlistener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadNewProjListener: () => (/* binding */ loadNewProjListener)
/* harmony export */ });
/* harmony import */ var _logic_projectcreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/projectcreation */ "./src/logic/projectcreation.js");
/* harmony import */ var _projectrender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectrender */ "./src/dom/projectrender.js");


const newProjInput = document.querySelector('#new-project-input');
const newProjectsContainer = document.querySelector('.new-projects-container');
const invalidPara = document.createElement('p');
invalidPara.textContent = '1 to 16 characters';
invalidPara.setAttribute('id', 'invalid-proj');

function loadNewProjListener() {
  function newProjModal(event) {
    if (event.target.matches('.new-proj-btn')) {
      if (newProjectsContainer.contains(invalidPara)) {
        newProjectsContainer.removeChild(invalidPara);
      }
      if (newProjInput.checkValidity()) {
        (0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProjInput.value);
        newProjInput.value = '';
        (0,_projectrender__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
      } else {
        newProjectsContainer.appendChild(invalidPara);
      }
    }
  }

  document.addEventListener('click', newProjModal);
}


/***/ }),

/***/ "./src/dom/projectdeletelistener.js":
/*!******************************************!*\
  !*** ./src/dom/projectdeletelistener.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDeleteProjListener: () => (/* binding */ loadDeleteProjListener)
/* harmony export */ });
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");


const projectContainer = document.querySelector('.project-container');

function loadDeleteProjListener() {
  function deleteProj(event) {
    if (event.target.matches('#delete-icon')) {
      _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.deleteProject(
        event.target.parentNode.parentNode.data.id
      );
    }
  }
  projectContainer.addEventListener('click', deleteProj);
}


/***/ }),

/***/ "./src/dom/projectrender.js":
/*!**********************************!*\
  !*** ./src/dom/projectrender.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _assets_trash_xmark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trash-xmark-svgrepo-com.svg */ "./src/assets/trash-xmark-svgrepo-com.svg");


const projContainer = document.querySelector('.project-container');

const renderProjects = () => {
  while (projContainer.firstChild)
    projContainer.removeChild(projContainer.lastChild);
  //Resets projContainer and then render
  _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.projectContainer.forEach((project) => {
    const newProj = document.createElement('div');
    newProj.textContent = project.title;
    newProj.data = project;
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('proj-delete');
    const deleteIcon = new Image();
    deleteIcon.src = _assets_trash_xmark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
    deleteIcon.setAttribute('id', 'delete-icon');
    deleteBtn.appendChild(deleteIcon);
    newProj.appendChild(deleteBtn);
    newProj.classList.add('proj');
    projContainer.appendChild(newProj);
    _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.logContainers();
  });
};




/***/ }),

/***/ "./src/logic/filter.js":
/*!*****************************!*\
  !*** ./src/logic/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterProject: () => (/* binding */ filterProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/logic/storage.js");


const filterProject = function (projectValue) {
  let filtered = _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.todoContainer.filter(
    (obj) => obj.project === projectValue
  );
  return filtered;
};




/***/ }),

/***/ "./src/logic/imageloader.js":
/*!**********************************!*\
  !*** ./src/logic/imageloader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadImages: () => (/* binding */ loadImages)
/* harmony export */ });
/* harmony import */ var _assets_tasktigerlogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tasktigerlogo.svg */ "./src/assets/tasktigerlogo.svg");
/* harmony import */ var _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/plus-circle-svgrepo-com.svg */ "./src/assets/plus-circle-svgrepo-com.svg");



const loadImages = () => {
  const logoContainer = document.querySelector('.logo-img');
  const logoIcon = new Image();
  logoIcon.src = _assets_tasktigerlogo_svg__WEBPACK_IMPORTED_MODULE_0__;
  logoContainer.appendChild(logoIcon);

  const plusIconContainer = document.querySelector('.new-task-btn');
  const plusIcon = new Image();
  plusIcon.src = _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
  plusIconContainer.appendChild(plusIcon);

  const projectAddBtn = document.querySelector('.project-add-btn-container');
  const projectPlusIcon = new Image();
  projectPlusIcon.classList.add('new-proj-btn');
  projectPlusIcon.src = _assets_plus_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
  projectAddBtn.appendChild(projectPlusIcon);
};




/***/ }),

/***/ "./src/logic/itemcreation.js":
/*!***********************************!*\
  !*** ./src/logic/itemcreation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSecondTodo: () => (/* binding */ createSecondTodo),
/* harmony export */   createThirdTodo: () => (/* binding */ createThirdTodo),
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/logic/storage.js");


// Default state of of checked status is unchecked.
class todo {
  static counter = -1;
  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.checkState = false;
    this.id = ++this.constructor.counter;
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
  const title = 'history';
  const description = 'the best!';
  const dueDate = '10/20/2025';
  const priority = priorities[1];
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

/***/ "./src/logic/projectcreation.js":
/*!**************************************!*\
  !*** ./src/logic/projectcreation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/logic/storage.js");


class project {
  static counter = -1;
  constructor(title) {
    this.title = title;
    this.id = ++this.constructor.counter;
  }
}

const createProject = (name) => {
  const projectName = name;
  const newProject = new project(projectName);
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addProject(newProject);
};




/***/ }),

/***/ "./src/logic/storage.js":
/*!******************************!*\
  !*** ./src/logic/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageContainers: () => (/* binding */ storageContainers)
/* harmony export */ });
/* harmony import */ var _dom_projectrender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/projectrender */ "./src/dom/projectrender.js");

const storageContainers = (function () {
  let todoContainer = [];
  const projectContainer = [];

  const addTodo = function (todo) {
    todoContainer.push(todo);
  };

  const addProject = function (project) {
    projectContainer.push(project);
  };

  const deleteTodo = function (index) {
    todoContainer.splice(index, 1);
  };

  const deleteProject = function (id) {
    projectContainer.forEach((project) => {
      const projIndex = projectContainer.indexOf(project);
      if (project.id === id) {
        projectContainer.splice(projIndex, 1);
        (0,_dom_projectrender__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
      }
    });

    // const projectName = projectContainer[index];
    // const toBeFiltered = [];
    // todoContainer.forEach((todo) => {
    //   if (todo['project'] === projectName) {
    //     toBeFiltered.push(todo);
    //   }
    // });
    // const result = todoContainer.filter((item) => !toBeFiltered.includes(item));
    // console.log(result);
    // todoContainer = result;
    // projectContainer.splice(index, 1);
  };

  const logContainers = function () {
    console.log(JSON.stringify(todoContainer));
    console.log(JSON.stringify(projectContainer));
  };

  const editTodo = function (
    index,
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newNotes,
    newProject
  ) {
    todoContainer[index]['title'] = newTitle;
    todoContainer[index]['description'] = newDescription;
    todoContainer[index]['dueDate'] = newDueDate;
    todoContainer[index]['priority'] = newPriority;
    todoContainer[index]['notes'] = newNotes;
    todoContainer[index]['project'] = newProject;
  };

  const editProject = function (index, newName) {
    const oldName = projectContainer[index];
    projectContainer[index] = newName;

    todoContainer.forEach((todo) => {
      if (todo['project'] === oldName) {
        todo['project'] = newName;
      }
    });
  };

  return {
    addTodo,
    addProject,
    todoContainer,
    projectContainer,
    deleteTodo,
    deleteProject,
    editTodo,
    editProject,
    logContainers,
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
/* harmony import */ var _logic_imageloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/imageloader */ "./src/logic/imageloader.js");
/* harmony import */ var _logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/itemcreation */ "./src/logic/itemcreation.js");
/* harmony import */ var _logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/projectcreation */ "./src/logic/projectcreation.js");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _logic_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/filter */ "./src/logic/filter.js");
/* harmony import */ var _dom_projectrender_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/projectrender.js */ "./src/dom/projectrender.js");
/* harmony import */ var _dom_newprojectlistener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/newprojectlistener */ "./src/dom/newprojectlistener.js");
/* harmony import */ var _dom_projectdeletelistener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/projectdeletelistener */ "./src/dom/projectdeletelistener.js");











(0,_logic_imageloader__WEBPACK_IMPORTED_MODULE_1__.loadImages)();
(0,_dom_newprojectlistener__WEBPACK_IMPORTED_MODULE_7__.loadNewProjListener)();
(0,_dom_projectdeletelistener__WEBPACK_IMPORTED_MODULE_8__.loadDeleteProjListener)();

(0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createTodo)();
(0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createSecondTodo)();
(0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createThirdTodo)();

_logic_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.logContainers();

_logic_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.editTodo(
  2,
  'snoop',
  'something about me',
  '10/10/10',
  'medium',
  'notes notes notes',
  'homework'
);

_logic_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.logContainers();

(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('music');
(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('movies');
(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('homework');

_logic_storage__WEBPACK_IMPORTED_MODULE_4__.storageContainers.logContainers();

(0,_dom_projectrender_js__WEBPACK_IMPORTED_MODULE_6__.renderProjects)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRkFBbUYsTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsK0ZBQStGLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksbUJBQW1CLDJxQkFBMnFCLGNBQWMsZUFB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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDMkI7QUFLbkI7QUFDMEI7QUFDSjtBQUNMO0FBQ1M7QUFDRDtBQUNRO0FBQ007O0FBRXJFLDhEQUFVO0FBQ1YsNEVBQW1CO0FBQ25CLGtGQUFzQjs7QUFFdEIsK0RBQVU7QUFDVixxRUFBZ0I7QUFDaEIsb0VBQWU7O0FBRWYsNkRBQWlCOztBQUVqQiw2REFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBaUI7O0FBRWpCLHFFQUFhO0FBQ2IscUVBQWE7QUFDYixxRUFBYTs7QUFFYiw2REFBaUI7O0FBRWpCLHFFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9uZXdwcm9qZWN0bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9wcm9qZWN0ZGVsZXRlbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9wcm9qZWN0cmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL2ltYWdlbG9hZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9pdGVtY3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3Byb2plY3RjcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuOnJvb3Qge1xuICAtLWludGVyOiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICAtLWRlbGE6ICdEZWxhIEdvdGhpYyBPbmUnLCBjdXJzaXZlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMCwgIzMzMzMzMyk7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciA4ZnIgLyAyZnIgN2ZyO1xuICBnYXA6IDEuMnJlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ28taW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvLWltZyA+IGltZyB7XG4gIHdpZHRoOiAzLjVyZW07XG59XG5cbi5zaWRlLWJhciB7XG4gIGJvcmRlcjogc29saWQgNXB4ICNmMGYzZjU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogMTVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmluYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xuICBoZWlnaHQ6IDRyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uaW5ib3ggPiBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogc29saWQgNXB4ICNmMGYzZjU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm5ldy10YXNrLXR4dCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm5ldy10YXNrLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmV3LXRhc2stYnRuID4gaW1nLFxuLnByb2plY3QtYWRkLWJ0bi1jb250YWluZXIgPiBpbWcge1xuICB3aWR0aDogMzBweDtcbn1cblxuLm5ldy10YXNrLWJ0biA+IGltZzpob3Zlcixcbi5wcm9qZWN0LWFkZC1idG4tY29udGFpbmVyID4gaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucHJvamVjdC1hZGQtYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBTdHlsaW5nIGZvciBQcm9qZWN0IENvbnRhaW5lciAqL1xuXG4ucHJvamVjdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ucHJvaiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qID4gcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByb2otZGVsZXRlID4gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXctcHJvamVjdC1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uZXctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGdhcDogNXB4O1xufVxuXG4ubmV3LXByb2plY3QtaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jaW52YWxpZC1wcm9qIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5n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QUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWludGVyOiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgLS1kZWxhOiAnRGVsYSBHb3RoaWMgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMCwgIzMzMzMzMyk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA4ZnIgLyAyZnIgN2ZyO1xcbiAgZ2FwOiAxLjJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLWltZyA+IGltZyB7XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMTVweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5pbmJveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YwZjNmNTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmluYm94ID4gcCB7XFxuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogc29saWQgNXB4ICNmMGYzZjU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5uZXctdGFzay10eHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stYnRuID4gaW1nLFxcbi5wcm9qZWN0LWFkZC1idG4tY29udGFpbmVyID4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2stYnRuID4gaW1nOmhvdmVyLFxcbi5wcm9qZWN0LWFkZC1idG4tY29udGFpbmVyID4gaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnByb2plY3QtYWRkLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgUHJvamVjdCBDb250YWluZXIgKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvaiA+IHAge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByb2otZGVsZXRlID4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dCB7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNpbnZhbGlkLXByb2oge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuLi9sb2dpYy9wcm9qZWN0Y3JlYXRpb24nO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RyZW5kZXInO1xuY29uc3QgbmV3UHJvaklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBuZXdQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtY29udGFpbmVyJyk7XG5jb25zdCBpbnZhbGlkUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmludmFsaWRQYXJhLnRleHRDb250ZW50ID0gJzEgdG8gMTYgY2hhcmFjdGVycyc7XG5pbnZhbGlkUGFyYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ludmFsaWQtcHJvaicpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5ld1Byb2pMaXN0ZW5lcigpIHtcbiAgZnVuY3Rpb24gbmV3UHJvak1vZGFsKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcubmV3LXByb2otYnRuJykpIHtcbiAgICAgIGlmIChuZXdQcm9qZWN0c0NvbnRhaW5lci5jb250YWlucyhpbnZhbGlkUGFyYSkpIHtcbiAgICAgICAgbmV3UHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQoaW52YWxpZFBhcmEpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1Byb2pJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdChuZXdQcm9qSW5wdXQudmFsdWUpO1xuICAgICAgICBuZXdQcm9qSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGludmFsaWRQYXJhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2pNb2RhbCk7XG59XG4iLCJpbXBvcnQgeyBzdG9yYWdlQ29udGFpbmVycyB9IGZyb20gJy4uL2xvZ2ljL3N0b3JhZ2UnO1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGVsZXRlUHJvakxpc3RlbmVyKCkge1xuICBmdW5jdGlvbiBkZWxldGVQcm9qKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcjZGVsZXRlLWljb24nKSkge1xuICAgICAgc3RvcmFnZUNvbnRhaW5lcnMuZGVsZXRlUHJvamVjdChcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhLmlkXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvaik7XG59XG4iLCJpbXBvcnQgeyBzdG9yYWdlQ29udGFpbmVycyB9IGZyb20gJy4uL2xvZ2ljL3N0b3JhZ2UnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4uL2Fzc2V0cy90cmFzaC14bWFyay1zdmdyZXBvLWNvbS5zdmcnO1xuY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgd2hpbGUgKHByb2pDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICBwcm9qQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2pDb250YWluZXIubGFzdENoaWxkKTtcbiAgLy9SZXNldHMgcHJvakNvbnRhaW5lciBhbmQgdGhlbiByZW5kZXJcbiAgc3RvcmFnZUNvbnRhaW5lcnMucHJvamVjdENvbnRhaW5lci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG5ld1Byb2ouZGF0YSA9IHByb2plY3Q7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2otZGVsZXRlJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZS1pY29uJyk7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2onKTtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICAgIHN0b3JhZ2VDb250YWluZXJzLmxvZ0NvbnRhaW5lcnMoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBmaWx0ZXJQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RWYWx1ZSkge1xuICBsZXQgZmlsdGVyZWQgPSBzdG9yYWdlQ29udGFpbmVycy50b2RvQ29udGFpbmVyLmZpbHRlcihcbiAgICAob2JqKSA9PiBvYmoucHJvamVjdCA9PT0gcHJvamVjdFZhbHVlXG4gICk7XG4gIHJldHVybiBmaWx0ZXJlZDtcbn07XG5cbmV4cG9ydCB7IGZpbHRlclByb2plY3QgfTtcbiIsImltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3Rhc2t0aWdlcmxvZ28uc3ZnJztcbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3BsdXMtY2lyY2xlLXN2Z3JlcG8tY29tLnN2Zyc7XG5cbmNvbnN0IGxvYWRJbWFnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1pbWcnKTtcbiAgY29uc3QgbG9nb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ljb24uc3JjID0gbG9nb0ltYWdlO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JY29uKTtcblxuICBjb25zdCBwbHVzSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1idG4nKTtcbiAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c0ljb24uc3JjID0gcGx1c0ltYWdlO1xuICBwbHVzSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZC1idG4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RQbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0UGx1c0ljb24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2otYnRuJyk7XG4gIHByb2plY3RQbHVzSWNvbi5zcmMgPSBwbHVzSW1hZ2U7XG4gIHByb2plY3RBZGRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdFBsdXNJY29uKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRJbWFnZXMgfTtcbiIsImltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuLy8gRGVmYXVsdCBzdGF0ZSBvZiBvZiBjaGVja2VkIHN0YXR1cyBpcyB1bmNoZWNrZWQuXG5jbGFzcyB0b2RvIHtcbiAgc3RhdGljIGNvdW50ZXIgPSAtMTtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY2hlY2tTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSArK3RoaXMuY29uc3RydWN0b3IuY291bnRlcjtcbiAgfVxufVxuXG50b2RvLnByb3RvdHlwZS50b2dnbGVDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2hlY2tTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmNoZWNrU3RhdGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2hlY2tTdGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBwcmlvcml0aWVzID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAndGVzdCBwcm9qZWN0JztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAndGVzdCBkZXNjcmlwdGlvbic7XG4gIGNvbnN0IGR1ZURhdGUgPSAnMTAvMDcvMjAyNSc7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdGllc1swXTtcbiAgY29uc3Qgbm90ZXMgPSAndGVzdCBub3Rlcyc7XG4gIGNvbnN0IHByb2plY3QgPSAnaG9tZXdvcmsnO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8oXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0XG4gICk7XG4gIHN0b3JhZ2VDb250YWluZXJzLmFkZFRvZG8obmV3VG9kbyk7XG59O1xuXG5jb25zdCBjcmVhdGVTZWNvbmRUb2RvID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9ICdoaXN0b3J5JztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAndGhlIGJlc3QhJztcbiAgY29uc3QgZHVlRGF0ZSA9ICcxMC8yMC8yMDI1JztcbiAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0aWVzWzFdO1xuICBjb25zdCBub3RlcyA9ICd0ZXN0IG5vdGVzJztcbiAgY29uc3QgcHJvamVjdCA9ICdob21ld29yayc7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyhcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RcbiAgKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkVG9kbyhuZXdUb2RvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRoaXJkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnbWFjIGRlbWFyY28nO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdzb29vbyBnb29kISc7XG4gIGNvbnN0IGR1ZURhdGUgPSAnMTAvMTUvMjAyNSc7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdGllc1syXTtcbiAgY29uc3Qgbm90ZXMgPSAndGVzdCBub3Rlcyc7XG4gIGNvbnN0IHByb2plY3QgPSAnbXVzaWMnO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8oXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0XG4gICk7XG4gIHN0b3JhZ2VDb250YWluZXJzLmFkZFRvZG8obmV3VG9kbyk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBjcmVhdGVTZWNvbmRUb2RvLCBjcmVhdGVUaGlyZFRvZG8gfTtcbiIsImltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY2xhc3MgcHJvamVjdCB7XG4gIHN0YXRpYyBjb3VudGVyID0gLTE7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuaWQgPSArK3RoaXMuY29uc3RydWN0b3IuY291bnRlcjtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpO1xuICBzdG9yYWdlQ29udGFpbmVycy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tICcuLi9kb20vcHJvamVjdHJlbmRlcic7XG5jb25zdCBzdG9yYWdlQ29udGFpbmVycyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCB0b2RvQ29udGFpbmVyID0gW107XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICB0b2RvQ29udGFpbmVyLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB0b2RvQ29udGFpbmVyLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHByb2plY3RDb250YWluZXIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gcHJvamVjdENvbnRhaW5lci5pbmRleE9mKHByb2plY3QpO1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuc3BsaWNlKHByb2pJbmRleCwgMSk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RDb250YWluZXJbaW5kZXhdO1xuICAgIC8vIGNvbnN0IHRvQmVGaWx0ZXJlZCA9IFtdO1xuICAgIC8vIHRvZG9Db250YWluZXIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIC8vICAgaWYgKHRvZG9bJ3Byb2plY3QnXSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAvLyAgICAgdG9CZUZpbHRlcmVkLnB1c2godG9kbyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gdG9kb0NvbnRhaW5lci5maWx0ZXIoKGl0ZW0pID0+ICF0b0JlRmlsdGVyZWQuaW5jbHVkZXMoaXRlbSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgLy8gdG9kb0NvbnRhaW5lciA9IHJlc3VsdDtcbiAgICAvLyBwcm9qZWN0Q29udGFpbmVyLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgbG9nQ29udGFpbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2RvQ29udGFpbmVyKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbnRhaW5lcikpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gZnVuY3Rpb24gKFxuICAgIGluZGV4LFxuICAgIG5ld1RpdGxlLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0R1ZURhdGUsXG4gICAgbmV3UHJpb3JpdHksXG4gICAgbmV3Tm90ZXMsXG4gICAgbmV3UHJvamVjdFxuICApIHtcbiAgICB0b2RvQ29udGFpbmVyW2luZGV4XVsndGl0bGUnXSA9IG5ld1RpdGxlO1xuICAgIHRvZG9Db250YWluZXJbaW5kZXhdWydkZXNjcmlwdGlvbiddID0gbmV3RGVzY3JpcHRpb247XG4gICAgdG9kb0NvbnRhaW5lcltpbmRleF1bJ2R1ZURhdGUnXSA9IG5ld0R1ZURhdGU7XG4gICAgdG9kb0NvbnRhaW5lcltpbmRleF1bJ3ByaW9yaXR5J10gPSBuZXdQcmlvcml0eTtcbiAgICB0b2RvQ29udGFpbmVyW2luZGV4XVsnbm90ZXMnXSA9IG5ld05vdGVzO1xuICAgIHRvZG9Db250YWluZXJbaW5kZXhdWydwcm9qZWN0J10gPSBuZXdQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKGluZGV4LCBuZXdOYW1lKSB7XG4gICAgY29uc3Qgb2xkTmFtZSA9IHByb2plY3RDb250YWluZXJbaW5kZXhdO1xuICAgIHByb2plY3RDb250YWluZXJbaW5kZXhdID0gbmV3TmFtZTtcblxuICAgIHRvZG9Db250YWluZXIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG9bJ3Byb2plY3QnXSA9PT0gb2xkTmFtZSkge1xuICAgICAgICB0b2RvWydwcm9qZWN0J10gPSBuZXdOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHRvZG9Db250YWluZXIsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICBkZWxldGVUb2RvLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFRvZG8sXG4gICAgZWRpdFByb2plY3QsXG4gICAgbG9nQ29udGFpbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGxvYWRJbWFnZXMgfSBmcm9tICcuL2xvZ2ljL2ltYWdlbG9hZGVyJztcbmltcG9ydCB7XG4gIGNyZWF0ZVNlY29uZFRvZG8sXG4gIGNyZWF0ZVRoaXJkVG9kbyxcbiAgY3JlYXRlVG9kbyxcbn0gZnJvbSAnLi9sb2dpYy9pdGVtY3JlYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vbG9naWMvcHJvamVjdGNyZWF0aW9uJztcbmltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCB7IGZpbHRlclByb2plY3QgfSBmcm9tICcuL2xvZ2ljL2ZpbHRlcic7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4vZG9tL3Byb2plY3RyZW5kZXIuanMnO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0cyB9IGZyb20gJy4vZG9tL3Byb2plY3RyZW5kZXIuanMnO1xuaW1wb3J0IHsgbG9hZE5ld1Byb2pMaXN0ZW5lciB9IGZyb20gJy4vZG9tL25ld3Byb2plY3RsaXN0ZW5lcic7XG5pbXBvcnQgeyBsb2FkRGVsZXRlUHJvakxpc3RlbmVyIH0gZnJvbSAnLi9kb20vcHJvamVjdGRlbGV0ZWxpc3RlbmVyJztcblxubG9hZEltYWdlcygpO1xubG9hZE5ld1Byb2pMaXN0ZW5lcigpO1xubG9hZERlbGV0ZVByb2pMaXN0ZW5lcigpO1xuXG5jcmVhdGVUb2RvKCk7XG5jcmVhdGVTZWNvbmRUb2RvKCk7XG5jcmVhdGVUaGlyZFRvZG8oKTtcblxuc3RvcmFnZUNvbnRhaW5lcnMubG9nQ29udGFpbmVycygpO1xuXG5zdG9yYWdlQ29udGFpbmVycy5lZGl0VG9kbyhcbiAgMixcbiAgJ3Nub29wJyxcbiAgJ3NvbWV0aGluZyBhYm91dCBtZScsXG4gICcxMC8xMC8xMCcsXG4gICdtZWRpdW0nLFxuICAnbm90ZXMgbm90ZXMgbm90ZXMnLFxuICAnaG9tZXdvcmsnXG4pO1xuXG5zdG9yYWdlQ29udGFpbmVycy5sb2dDb250YWluZXJzKCk7XG5cbmNyZWF0ZVByb2plY3QoJ211c2ljJyk7XG5jcmVhdGVQcm9qZWN0KCdtb3ZpZXMnKTtcbmNyZWF0ZVByb2plY3QoJ2hvbWV3b3JrJyk7XG5cbnN0b3JhZ2VDb250YWluZXJzLmxvZ0NvbnRhaW5lcnMoKTtcblxucmVuZGVyUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==