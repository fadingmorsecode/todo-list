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
  overflow: auto;
}

.inbox {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: solid 2px #f0f3f5;
  height: 4rem;
  flex-shrink: 0;
  padding: 20px;
  background-color: white;
}

.inbox > p {
  font-family: var(--inter);
  font-size: 2rem;
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

.new-task-btn > img {
  width: 30px;
}

.new-task-btn > img:hover,
.edit-icon:hover,
.todo-delete-icon:hover {
  transform: scale(1.2);
}

/* Styling for Project Container */

.grey {
  background-color: grey;
}

.white {
  background-color: white;
}

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
  padding: 20px;
  justify-content: space-between;
}

.proj-submit-btn {
  color: white;
  background-color: purple;
  border: none;
  border-radius: 5px;
  height: 1.7rem;
  width: 4rem;
}

.proj-submit-btn:hover,
.proj-submit-btn:focus {
  background-color: plum;
  color: black;
}

#new-project-input {
  border: solid 3px purple;
  height: 1.7rem;
  border-radius: 5px;
}

#new-project-input:focus {
  border: solid 4px plum;
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
  top: 0;
  position: sticky;
  border: solid grey 2px;
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

/* Styling for delete modal */

.modal-container {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  width: 30%;
  gap: 30px;
}

.modal-paragraph {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-family: var(--inter);
  font-weight: 300;
}

.modal-btns-container {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.modal-btn {
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
}

.modal-cancel-btn,
.todo-modal-cancel {
  background-color: gray;
}

.modal-delete-btn {
  background-color: red;
}

/* Todo List Styling */

.content {
  display: flex;
  flex-direction: column;
  border: solid 5px #f0f3f5;
  border-radius: 15px 15px 0 0;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 10px;
  gap: 15px;
  overflow: auto;
}

.content-header {
  display: flex;
  gap: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 4rem;
  width: 100%;
  flex-shrink: 0;
  border: solid grey 2px;
}

.todo-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.todo {
  width: 80%;
  min-height: 4rem;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 2fr 0.5fr 0.5fr;
  align-items: center;
  gap: 5px;
  padding: 10px;
}

.todo-listview-text {
  word-break: keep-all;
}

.edit-btn-container,
.todo-delete-btn-container {
  justify-self: center;
}

.edit-icon,
.todo-delete-icon {
  width: 1.5rem;
}

/* New Todo Modal */

.new-todo-modal-container {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  display: none;
  justify-content: center;
  align-items: center;
}

.new-todo-modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  width: 40%;
  gap: 30px;
  border-radius: 12px;
}

.new-todo-modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.new-todo-modal-form > div > label,
.new-todo-prio-container > div > label {
  font-family: var(--inter);
  font-size: 1.2rem;
}

.new-todo-form-containers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.new-todo-prio-container {
  display: flex;
  gap: 50px;
}

.new-todo-prio-container > div {
  width: 50%;
}

#todo-modal-paragraph {
  border-bottom: dashed 2px black;
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
  font-family: var(--inter);
  font-size: 1.4rem;
}

.new-todo-modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.new-todo-modal-buttons > button {
  border: none;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
}

.new-todo-modal-buttons > button[type='submit'] {
  background-color: purple;
}

#todo-modal-title,
#todo-modal-description,
#todo-modal-notes,
#todo-modal-priority,
#todo-modal-dueDate,
#todo-modal-project {
  border: solid 3px purple;
  border-radius: 5px;
}

#todo-modal-title,
#todo-modal-priority,
#todo-modal-dueDate,
#todo-modal-project {
  height: 1.6rem;
}

#todo-modal-description,
#todo-modal-notes {
  resize: none;
  height: 4rem;
}

.todo-default-color {
  background-color: white;
}

.todo-checked {
  background-color: gray;
  border-color: grey;
  text-decoration: line-through;
}

.High {
  border: solid red 4px;
}

.Medium {
  border: solid yellow 4px;
}

.Low {
  border: solid green 4px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n:root {\n  --inter: 'Inter', sans-serif;\n  --dela: 'Dela Gothic One', cursive;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(to bottom, #000000, #333333);\n}\n\n.container {\n  height: 100%;\n  display: grid;\n  grid-template: 1fr 8fr / 2fr 7fr;\n  gap: 1.2rem;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f3f5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  border-radius: 0 0 15px 15px;\n  gap: 20px;\n}\n\n.logo-text {\n  font-size: 3rem;\n  font-family: var(--inter);\n  font-weight: 500;\n}\n\n.logo-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-img > img {\n  width: 3.5rem;\n}\n\n.side-bar {\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  display: flex;\n  flex-direction: column;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  padding: 10px;\n  gap: 15px;\n  overflow: auto;\n}\n\n.inbox {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  flex-shrink: 0;\n  padding: 20px;\n  background-color: white;\n}\n\n.inbox > p {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.new-task-txt {\n  font-family: var(--inter);\n  font-size: 2rem;\n}\n\n.new-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-task-btn > img {\n  width: 30px;\n}\n\n.new-task-btn > img:hover,\n.edit-icon:hover,\n.todo-delete-icon:hover {\n  transform: scale(1.2);\n}\n\n/* Styling for Project Container */\n\n.grey {\n  background-color: grey;\n}\n\n.white {\n  background-color: white;\n}\n\n.project-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.proj {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 15px;\n  border: solid 2px #f0f3f5;\n  height: 4rem;\n  padding: 20px;\n  justify-content: space-between;\n}\n\n.proj-submit-btn {\n  color: white;\n  background-color: purple;\n  border: none;\n  border-radius: 5px;\n  height: 1.7rem;\n  width: 4rem;\n}\n\n.proj-submit-btn:hover,\n.proj-submit-btn:focus {\n  background-color: plum;\n  color: black;\n}\n\n#new-project-input {\n  border: solid 3px purple;\n  height: 1.7rem;\n  border-radius: 5px;\n}\n\n#new-project-input:focus {\n  border: solid 4px plum;\n}\n\n.new-projects-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  min-height: 4rem;\n  width: 100%;\n  flex-shrink: 0;\n  gap: 5px;\n  top: 0;\n  position: sticky;\n  border: solid grey 2px;\n}\n\n.proj > p {\n  font-family: var(--inter);\n  font-size: 1rem;\n}\n\n.proj-delete > img {\n  width: 30px;\n  display: flex;\n  align-items: center;\n}\n\n/* Styling for delete modal */\n\n.modal-container {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 20px;\n  width: 30%;\n  gap: 30px;\n}\n\n.modal-paragraph {\n  display: flex;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-family: var(--inter);\n  font-weight: 300;\n}\n\n.modal-btns-container {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.modal-btn {\n  width: 70px;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  color: white;\n}\n\n.modal-cancel-btn,\n.todo-modal-cancel {\n  background-color: gray;\n}\n\n.modal-delete-btn {\n  background-color: red;\n}\n\n/* Todo List Styling */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  border: solid 5px #f0f3f5;\n  border-radius: 15px 15px 0 0;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  padding: 10px;\n  gap: 15px;\n  overflow: auto;\n}\n\n.content-header {\n  display: flex;\n  gap: 15px;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  height: 4rem;\n  width: 100%;\n  flex-shrink: 0;\n  border: solid grey 2px;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n}\n\n.todo {\n  width: 80%;\n  min-height: 4rem;\n  border-radius: 15px;\n  display: grid;\n  grid-template-columns: 1fr 5fr 2fr 2fr 0.5fr 0.5fr;\n  align-items: center;\n  gap: 5px;\n  padding: 10px;\n}\n\n.todo-listview-text {\n  word-break: keep-all;\n}\n\n.edit-btn-container,\n.todo-delete-btn-container {\n  justify-self: center;\n}\n\n.edit-icon,\n.todo-delete-icon {\n  width: 1.5rem;\n}\n\n/* New Todo Modal */\n\n.new-todo-modal-container {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-todo-modal-content {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  width: 40%;\n  gap: 30px;\n  border-radius: 12px;\n}\n\n.new-todo-modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.new-todo-modal-form > div > label,\n.new-todo-prio-container > div > label {\n  font-family: var(--inter);\n  font-size: 1.2rem;\n}\n\n.new-todo-form-containers {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.new-todo-prio-container {\n  display: flex;\n  gap: 50px;\n}\n\n.new-todo-prio-container > div {\n  width: 50%;\n}\n\n#todo-modal-paragraph {\n  border-bottom: dashed 2px black;\n  padding-bottom: 20px;\n  text-align: center;\n  width: 100%;\n  font-family: var(--inter);\n  font-size: 1.4rem;\n}\n\n.new-todo-modal-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.new-todo-modal-buttons > button {\n  border: none;\n  width: 90px;\n  height: 30px;\n  border-radius: 5px;\n  color: white;\n  font-size: 15px;\n}\n\n.new-todo-modal-buttons > button[type='submit'] {\n  background-color: purple;\n}\n\n#todo-modal-title,\n#todo-modal-description,\n#todo-modal-notes,\n#todo-modal-priority,\n#todo-modal-dueDate,\n#todo-modal-project {\n  border: solid 3px purple;\n  border-radius: 5px;\n}\n\n#todo-modal-title,\n#todo-modal-priority,\n#todo-modal-dueDate,\n#todo-modal-project {\n  height: 1.6rem;\n}\n\n#todo-modal-description,\n#todo-modal-notes {\n  resize: none;\n  height: 4rem;\n}\n\n.todo-default-color {\n  background-color: white;\n}\n\n.todo-checked {\n  background-color: gray;\n  border-color: grey;\n  text-decoration: line-through;\n}\n\n.High {\n  border: solid red 4px;\n}\n\n.Medium {\n  border: solid yellow 4px;\n}\n\n.Low {\n  border: solid green 4px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/dom/checklistener.js":
/*!**********************************!*\
  !*** ./src/dom/checklistener.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCheckListener: () => (/* binding */ loadCheckListener)
/* harmony export */ });
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _todorendercondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todorendercondition */ "./src/dom/todorendercondition.js");



function loadCheckListener() {
  function checkEvent(event) {
    if (event.target.matches('.checklist-container')) {
      const index = _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers
        .getTodoContainer()
        .indexOf(event.target.parentNode.data);
      _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.getTodoContainer()[index].toggleCheck();
      (0,_todorendercondition__WEBPACK_IMPORTED_MODULE_1__.renderSelectedProject)();
    }
  }
  document.addEventListener('click', checkEvent);
}


/***/ }),

/***/ "./src/dom/deletemodal.js":
/*!********************************!*\
  !*** ./src/dom/deletemodal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteModalLoader: () => (/* binding */ deleteModalLoader)
/* harmony export */ });
function deleteModalLoader() {
  const body = document.querySelector('body');
  const modalContainer = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalParagraph = document.createElement('p');
  const modalBtnsContainer = document.createElement('div');
  const modalCancelBtn = document.createElement('button');
  const modalDeleteBtn = document.createElement('button');

  modalParagraph.textContent =
    'Are you sure you want to delete the project and all of its contents?';
  modalDeleteBtn.textContent = 'Delete';
  modalCancelBtn.textContent = 'Cancel';

  modalContainer.classList.add('modal-container');
  modalContent.classList.add('modal-content');
  modalParagraph.classList.add('modal-paragraph');
  modalBtnsContainer.classList.add('modal-btns-container');
  modalCancelBtn.classList.add('modal-btn');
  modalCancelBtn.classList.add('modal-cancel-btn');
  modalDeleteBtn.classList.add('modal-btn');
  modalDeleteBtn.classList.add('modal-delete-btn');

  modalContainer.appendChild(modalContent);
  modalContent.appendChild(modalParagraph);
  modalContent.appendChild(modalBtnsContainer);
  modalBtnsContainer.appendChild(modalCancelBtn);
  modalBtnsContainer.appendChild(modalDeleteBtn);
  body.appendChild(modalContainer);
}


/***/ }),

/***/ "./src/dom/deletemodalcontroller.js":
/*!******************************************!*\
  !*** ./src/dom/deletemodalcontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteModal: () => (/* binding */ deleteModal)
/* harmony export */ });
/* harmony import */ var _deletemodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletemodal */ "./src/dom/deletemodal.js");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _todorender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todorender */ "./src/dom/todorender.js");
/* harmony import */ var _projecthighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projecthighlight */ "./src/dom/projecthighlight.js");





function deleteModal(proj) {
  (0,_deletemodal__WEBPACK_IMPORTED_MODULE_0__.deleteModalLoader)();

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'flex';

  const deleteBtn = document.querySelector('.modal-delete-btn');
  const cancelBtn = document.querySelector('.modal-cancel-btn');

  deleteBtn.addEventListener('click', function () {
    _logic_storage__WEBPACK_IMPORTED_MODULE_1__.storageContainers.deleteProject(proj.target.parentNode.parentNode.data.id);
    (0,_projecthighlight__WEBPACK_IMPORTED_MODULE_3__.changeProjWhite)();
    (0,_projecthighlight__WEBPACK_IMPORTED_MODULE_3__.defaultInboxHighlight)();
    (0,_todorender__WEBPACK_IMPORTED_MODULE_2__.renderAllTodos)();
    modal.remove();
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.remove();
    }
  });

  cancelBtn.addEventListener('click', function () {
    modal.remove();
  });
}


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



function loadNewProjListener() {
  const newProjInput = document.querySelector('#new-project-input');
  const projForm = document.querySelector('.proj-form');
  function newProjModal(event) {
    if (event.target.matches('.proj-submit-btn')) {
      if (projForm.checkValidity()) {
        event.preventDefault();
        (0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProjInput.value);

        // get currently selected project
        let currentlySelected = '';
        const projContainer = document.querySelector('.project-container');
        const projects = projContainer.childNodes;
        [...projects].forEach((project) => {
          if (project.classList.contains('grey')) {
            currentlySelected = project.data.id;
          }
        });

        (0,_projectrender__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();

        [...projects].forEach((project) => {
          // add grey background to project if currently selected
          if (project.data.id === currentlySelected) {
            project.classList.remove('white');
            project.classList.add('grey');
          } else {
            project.classList.add('white');
          }
        });

        projForm.reset();
      }
    }
  }

  document.addEventListener('click', newProjModal);
}


/***/ }),

/***/ "./src/dom/newtasklistener.js":
/*!************************************!*\
  !*** ./src/dom/newtasklistener.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadNewTaskListener: () => (/* binding */ loadNewTaskListener)
/* harmony export */ });
/* harmony import */ var _newtodomodalcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtodomodalcontroller */ "./src/dom/newtodomodalcontroller.js");


function loadNewTaskListener() {
  function newTodo(event) {
    if (event.target.matches('.plus-icon')) {
      (0,_newtodomodalcontroller__WEBPACK_IMPORTED_MODULE_0__.newTodoModal)();
    }
  }
  document.addEventListener('click', newTodo);
}


/***/ }),

/***/ "./src/dom/newtodomodal.js":
/*!*********************************!*\
  !*** ./src/dom/newtodomodal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTodoModalLoader: () => (/* binding */ newTodoModalLoader)
/* harmony export */ });
function newTodoModalLoader() {
  const body = document.querySelector('body');
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('new-todo-modal-container');
  body.appendChild(modalContainer);
  const modalContent = document.createElement('div');
  modalContent.classList.add('new-todo-modal-content');
  modalContainer.appendChild(modalContent);
  const newTaskParagraph = document.createElement('p');
  newTaskParagraph.setAttribute('id', 'todo-modal-paragraph');
  newTaskParagraph.textContent = 'Create a New Task';
  modalContent.appendChild(newTaskParagraph);

  const form = document.createElement('form');
  form.classList.add('new-todo-modal-form');
  modalContent.appendChild(form);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('new-todo-form-containers');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'todo-modal-title';
  titleLabel.textContent = 'Title';
  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'todo-modal-title');
  title.required = true;
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);
  form.appendChild(titleContainer);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('new-todo-form-containers');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.htmlFor = 'todo-modal-description';
  descriptionLabel.textContent = 'Description';
  const description = document.createElement('textarea');
  description.setAttribute('type', 'text');
  description.setAttribute('id', 'todo-modal-description');
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(description);
  form.appendChild(descriptionContainer);

  const notesContainer = document.createElement('div');
  notesContainer.classList.add('new-todo-form-containers');
  const notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes';
  notesLabel.htmlFor = 'todo-modal-notes';
  const notes = document.createElement('textarea');
  notes.setAttribute('type', 'text');
  notes.setAttribute('id', 'todo-modal-notes');
  notesContainer.appendChild(notesLabel);
  notesContainer.appendChild(notes);
  form.appendChild(notesContainer);

  const priorityContainer = document.createElement('div');
  priorityContainer.classList.add('new-todo-form-containers');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  priorityLabel.htmlFor = 'todo-modal-priority';
  const priority = document.createElement('select');
  priority.setAttribute('id', 'todo-modal-priority');
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priority);

  const prioOne = document.createElement('option');
  prioOne.textContent = 'Low';
  prioOne.value = 'Low';
  const prioTwo = document.createElement('option');
  prioTwo.textContent = 'Medium';
  prioTwo.value = 'Medium';
  const prioThree = document.createElement('option');
  prioThree.textContent = 'High';
  prioThree.value = 'High';
  priority.appendChild(prioOne);
  priority.appendChild(prioTwo);
  priority.appendChild(prioThree);

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('new-todo-form-containers');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date';
  dueDateLabel.htmlFor = 'todo-modal-dueDate';
  const dueDate = document.createElement('input');
  dueDate.required = true;
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('id', 'todo-modal-dueDate');
  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDate);

  const prioAndDueContainer = document.createElement('div');
  prioAndDueContainer.appendChild(priorityContainer);
  prioAndDueContainer.appendChild(dueDateContainer);
  prioAndDueContainer.classList.add('new-todo-prio-container');
  form.appendChild(prioAndDueContainer);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('new-todo-form-containers');
  const projectLabel = document.createElement('label');
  projectLabel.htmlFor = 'todo-modal-project';
  projectLabel.textContent = 'Project';
  const project = document.createElement('select');
  project.setAttribute('id', 'todo-modal-project');
  projectContainer.appendChild(projectLabel);
  projectContainer.appendChild(project);
  form.appendChild(projectContainer);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('new-todo-modal-buttons');
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('todo-modal-cancel');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.type = 'button';
  buttonsContainer.appendChild(cancelBtn);
  const createBtn = document.createElement('button');
  createBtn.textContent = 'Create';
  createBtn.type = 'submit';
  createBtn.classList.add('todo-modal-submit');
  buttonsContainer.appendChild(createBtn);
  form.appendChild(buttonsContainer);
}


/***/ }),

/***/ "./src/dom/newtodomodalcontroller.js":
/*!*******************************************!*\
  !*** ./src/dom/newtodomodalcontroller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTodoModal: () => (/* binding */ newTodoModal)
/* harmony export */ });
/* harmony import */ var _newtodomodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtodomodal */ "./src/dom/newtodomodal.js");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/itemcreation */ "./src/logic/itemcreation.js");
/* harmony import */ var _todorendercondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todorendercondition */ "./src/dom/todorendercondition.js");





function newTodoModal() {
  (0,_newtodomodal__WEBPACK_IMPORTED_MODULE_0__.newTodoModalLoader)();
  const modal = document.querySelector('.new-todo-modal-container');
  modal.style.display = 'flex';

  const cancelBtn = document.querySelector('.todo-modal-cancel');
  cancelBtn.addEventListener('click', function () {
    modal.remove();
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.remove();
    }
  });

  _logic_storage__WEBPACK_IMPORTED_MODULE_1__.storageContainers.getProjectContainer().forEach((project) => {
    const projectSelect = document.querySelector('#todo-modal-project');
    const option = document.createElement('option');
    option.textContent = `${project.title}`;
    option.value = `${project.id}`;
    projectSelect.appendChild(option);
  });

  // Submit Button Functionality Below

  function submitted(event) {
    const todoForm = document.querySelector('.new-todo-modal-form');
    if (todoForm.checkValidity()) {
      event.preventDefault();
      // create todo
      const todoTitle = document.querySelector('#todo-modal-title');
      const todoDescription = document.querySelector('#todo-modal-description');
      const todoDueDate = document.querySelector('#todo-modal-dueDate');
      const todoPriority = document.querySelector('#todo-modal-priority');
      const todoNotes = document.querySelector('#todo-modal-notes');
      const todoProject = document.querySelector('#todo-modal-project');
      (0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createTodo)(
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        todoPriority.value,
        todoNotes.value,
        todoProject.value
      );

      (0,_todorendercondition__WEBPACK_IMPORTED_MODULE_3__.renderSelectedProject)();

      modal.remove();
    }
  }

  const submitBtn = document.querySelector('.todo-modal-submit');
  submitBtn.addEventListener('click', submitted);
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
/* harmony import */ var _deletemodalcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletemodalcontroller */ "./src/dom/deletemodalcontroller.js");


const projectContainer = document.querySelector('.project-container');

function loadDeleteProjListener() {
  function deleteProj(event) {
    if (event.target.matches('#delete-icon')) {
      (0,_deletemodalcontroller__WEBPACK_IMPORTED_MODULE_0__.deleteModal)(event);
    }
  }
  projectContainer.addEventListener('click', deleteProj);
}


/***/ }),

/***/ "./src/dom/projecthighlight.js":
/*!*************************************!*\
  !*** ./src/dom/projecthighlight.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProjWhite: () => (/* binding */ changeProjWhite),
/* harmony export */   defaultInboxHighlight: () => (/* binding */ defaultInboxHighlight),
/* harmony export */   loadHighlighting: () => (/* binding */ loadHighlighting)
/* harmony export */ });
const inbox = document.querySelector('.inbox');

function defaultInboxHighlight() {
  inbox.classList.remove('white');
  inbox.classList.add('grey');
}

function changeProjWhite() {
  const projContainer = document.querySelector('.project-container');
  const projects = projContainer.childNodes;
  [...projects].forEach((project) => {
    project.classList.remove('grey');
    project.classList.add('white');
  });
}

function loadHighlighting() {
  // default highlighting set to inbox
  changeProjWhite();
  defaultInboxHighlight();

  function updateHighlight(event) {
    if (event.target.matches('.proj')) {
      // highlight the project selected
      changeProjWhite();
      inbox.classList.remove('grey');
      inbox.classList.add('white');
      event.target.classList.remove('white');
      event.target.classList.add('grey');
    } else if (event.target.matches('.inbox')) {
      // highlight the inbox if selected
      changeProjWhite();
      defaultInboxHighlight();
    }
  }

  document.addEventListener('click', updateHighlight);
}


/***/ }),

/***/ "./src/dom/projectlisteners.js":
/*!*************************************!*\
  !*** ./src/dom/projectlisteners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectListeners: () => (/* binding */ loadProjectListeners)
/* harmony export */ });
/* harmony import */ var _todorender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todorender */ "./src/dom/todorender.js");



function loadProjectListeners() {
  function listTodos(event) {
    if (event.target.matches('.proj')) {
      (0,_todorender__WEBPACK_IMPORTED_MODULE_0__.renderFilteredTodos)(event.target.data.id);
    } else if (event.target.matches('.inbox')) {
      (0,_todorender__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
    }
  }

  document.addEventListener('click', listTodos);
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
  _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.getProjectContainer().forEach((project) => {
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
  });
};




/***/ }),

/***/ "./src/dom/tododeletelistener.js":
/*!***************************************!*\
  !*** ./src/dom/tododeletelistener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTodoDeleteListener: () => (/* binding */ loadTodoDeleteListener)
/* harmony export */ });
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _todorendercondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todorendercondition */ "./src/dom/todorendercondition.js");



function loadTodoDeleteListener() {
  function deleteSelectedTodo(event) {
    if (event.target.matches('.todo-delete-icon')) {
      const index = _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers
        .getTodoContainer()
        .indexOf(event.target.parentNode.parentNode.data);
      _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.deleteTodo(index);
      (0,_todorendercondition__WEBPACK_IMPORTED_MODULE_1__.renderSelectedProject)();
    }
  }

  document.addEventListener('click', deleteSelectedTodo);
}


/***/ }),

/***/ "./src/dom/todoexpandcontroller.js":
/*!*****************************************!*\
  !*** ./src/dom/todoexpandcontroller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expandTodoController: () => (/* binding */ expandTodoController)
/* harmony export */ });
/* harmony import */ var _newtodomodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtodomodal */ "./src/dom/newtodomodal.js");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _todorender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todorender */ "./src/dom/todorender.js");





function expandTodoController(expandedTodo) {
  (0,_newtodomodal__WEBPACK_IMPORTED_MODULE_0__.newTodoModalLoader)();

  const editBtn = document.querySelector('.todo-modal-submit');
  editBtn.textContent = 'Save';

  const taskParagraph = document.querySelector('#todo-modal-paragraph');
  taskParagraph.textContent = 'Edit Your Task';

  const modal = document.querySelector('.new-todo-modal-container');
  modal.style.display = 'flex';

  const cancelBtn = document.querySelector('.todo-modal-cancel');
  cancelBtn.addEventListener('click', function () {
    modal.remove();
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.remove();
    }
  });

  _logic_storage__WEBPACK_IMPORTED_MODULE_1__.storageContainers.getProjectContainer().forEach((project) => {
    const projectSelect = document.querySelector('#todo-modal-project');
    const option = document.createElement('option');
    option.textContent = `${project.title}`;
    option.value = `${project.id}`;
    projectSelect.appendChild(option);
  });

  const todoTitle = document.querySelector('#todo-modal-title');
  todoTitle.value = expandedTodo.title;
  const todoDescription = document.querySelector('#todo-modal-description');
  todoDescription.value = expandedTodo.description;
  const todoDueDate = document.querySelector('#todo-modal-dueDate');
  todoDueDate.value = expandedTodo.dueDate;
  const todoPriority = document.querySelector('#todo-modal-priority');
  todoPriority.value = expandedTodo.priority;
  const todoNotes = document.querySelector('#todo-modal-notes');
  todoNotes.value = expandedTodo.notes;
  const todoProject = document.querySelector('#todo-modal-project');
  todoProject.value = expandedTodo.project;

  function edited(event) {
    const todoForm = document.querySelector('.new-todo-modal-form');
    if (todoForm.checkValidity()) {
      event.preventDefault();

      const todoIndex = _logic_storage__WEBPACK_IMPORTED_MODULE_1__.storageContainers
        .getTodoContainer()
        .indexOf(expandedTodo);

      _logic_storage__WEBPACK_IMPORTED_MODULE_1__.storageContainers.editTodo(
        todoIndex,
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        todoPriority.value,
        todoNotes.value,
        todoProject.value
      );

      let currentlySelected = document.querySelector('.grey');
      if (currentlySelected === document.querySelector('.inbox')) {
        (0,_todorender__WEBPACK_IMPORTED_MODULE_2__.renderAllTodos)();
      } else {
        const projContainer = document.querySelector('.project-container');
        const projects = projContainer.childNodes;
        [...projects].forEach((project) => {
          if (project.classList.contains('grey')) {
            (0,_todorender__WEBPACK_IMPORTED_MODULE_2__.renderFilteredTodos)(project.data.id);
          }
        });
      }

      modal.remove();
    }
  }

  editBtn.addEventListener('click', edited);
}


/***/ }),

/***/ "./src/dom/todoexpandlistener.js":
/*!***************************************!*\
  !*** ./src/dom/todoexpandlistener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadExpandListener: () => (/* binding */ loadExpandListener)
/* harmony export */ });
/* harmony import */ var _todoexpandcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoexpandcontroller */ "./src/dom/todoexpandcontroller.js");


function loadExpandListener() {
  function expandTodo(event) {
    if (event.target.matches('.edit-icon')) {
      (0,_todoexpandcontroller__WEBPACK_IMPORTED_MODULE_0__.expandTodoController)(event.target.parentNode.parentNode.data);
    }
  }
  document.addEventListener('click', expandTodo);
}


/***/ }),

/***/ "./src/dom/todorender.js":
/*!*******************************!*\
  !*** ./src/dom/todorender.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTodosRender: () => (/* binding */ clearTodosRender),
/* harmony export */   renderAllTodos: () => (/* binding */ renderAllTodos),
/* harmony export */   renderFilteredTodos: () => (/* binding */ renderFilteredTodos)
/* harmony export */ });
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _logic_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/filter */ "./src/logic/filter.js");
/* harmony import */ var _assets_expand_alt_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/expand-alt-svgrepo-com.svg */ "./src/assets/expand-alt-svgrepo-com.svg");
/* harmony import */ var _assets_trash_xmark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/trash-xmark-svgrepo-com.svg */ "./src/assets/trash-xmark-svgrepo-com.svg");




const todoListViewContainer = document.querySelector('.todo-container');

function clearTodosRender() {
  while (todoListViewContainer.firstChild) {
    todoListViewContainer.removeChild(todoListViewContainer.lastChild);
  }
}

function todoTemplate(todo) {
  const todoItem = document.createElement('div');
  todoItem.data = todo;
  const checkContainer = document.createElement('input');
  const todoTitleText = document.createElement('div');
  const todoPriorityText = document.createElement('div');
  const todoDateText = document.createElement('div');
  const todoEditContainer = document.createElement('div');
  const todoDeleteContainer = document.createElement('div');

  const editIcon = new Image();
  editIcon.src = _assets_expand_alt_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;
  editIcon.classList.add('edit-icon');
  todoEditContainer.appendChild(editIcon);

  const deleteIcon = new Image();
  deleteIcon.src = _assets_trash_xmark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
  deleteIcon.classList.add('todo-delete-icon');
  todoDeleteContainer.appendChild(deleteIcon);

  todoItem.classList.add('todo');
  todoItem.classList.add('todo-default-color');
  checkContainer.classList.add('checklist-container');
  checkContainer.setAttribute('type', 'checkbox');
  if (todo.checkState === true) {
    checkContainer.checked = true;
    todoItem.classList.remove('todo-default-color');
    todoItem.classList.add('todo-checked');
  } else {
    switch (todo.priority) {
      case 'High':
        todoItem.classList.add('High');
        break;
      case 'Medium':
        todoItem.classList.add('Medium');
        break;
      case 'Low':
        todoItem.classList.add('Low');
    }
  }

  todoTitleText.classList.add('todo-listview-text');
  todoPriorityText.classList.add('todo-listview-priority');
  todoDateText.classList.add('todo-listview-date');
  todoEditContainer.classList.add('edit-btn-container');
  todoDeleteContainer.classList.add('todo-delete-btn-container');

  todoTitleText.textContent = todo.title;
  todoPriorityText.textContent = `Priority: ${todo.priority}`;
  todoDateText.textContent = `Due: ${todo.dueDate}`;

  todoListViewContainer.appendChild(todoItem);
  todoItem.appendChild(checkContainer);
  todoItem.appendChild(todoTitleText);
  todoItem.appendChild(todoPriorityText);
  todoItem.appendChild(todoDateText);
  todoItem.appendChild(todoEditContainer);
  todoItem.appendChild(todoDeleteContainer);
}

function renderAllTodos() {
  clearTodosRender();
  _logic_storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.getTodoContainer().forEach((todo) => {
    todoTemplate(todo);
  });
}

function renderFilteredTodos(id) {
  clearTodosRender();
  const filteredArray = (0,_logic_filter__WEBPACK_IMPORTED_MODULE_1__.filterProject)(id);
  filteredArray.forEach((todo) => {
    todoTemplate(todo);
  });
}


/***/ }),

/***/ "./src/dom/todorendercondition.js":
/*!****************************************!*\
  !*** ./src/dom/todorendercondition.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSelectedProject: () => (/* binding */ renderSelectedProject)
/* harmony export */ });
/* harmony import */ var _todorender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todorender */ "./src/dom/todorender.js");



function renderSelectedProject() {
  let currentlySelected = document.querySelector('.grey');
  if (currentlySelected === document.querySelector('.inbox')) {
    (0,_todorender__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
  } else {
    const projContainer = document.querySelector('.project-container');
    const projects = projContainer.childNodes;
    [...projects].forEach((project) => {
      if (project.classList.contains('grey')) {
        (0,_todorender__WEBPACK_IMPORTED_MODULE_0__.renderFilteredTodos)(project.data.id);
      }
    });
  }
}


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
  let filtered = _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers
    .getTodoContainer()
    .filter((obj) => obj.project === projectValue);
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
  plusIcon.classList.add('plus-icon');
  plusIconContainer.appendChild(plusIcon);
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

const createTodo = (title, description, dueDate, priority, notes, project) => {
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    Number(project)
  );
  _storage__WEBPACK_IMPORTED_MODULE_0__.storageContainers.addTodo(newTodo);
};

const createSecondTodo = () => {
  const title = 'history';
  const description = 'the best!';
  const dueDate = '2025-10-20';
  const priority = 'Low';
  const notes = 'test notes';
  const project = 2;
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
  const dueDate = '2025-10-15';
  const priority = 'High';
  const notes = 'test notes';
  const project = 0;
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

        const toBeFiltered = [];
        todoContainer.forEach((todo) => {
          if (todo['project'] === id) {
            toBeFiltered.push(todo);
          }
        });
        const result = todoContainer.filter(
          (item) => !toBeFiltered.includes(item)
        );
        todoContainer = result;
      }
    });
  };

  const getTodoContainer = function () {
    return todoContainer;
  };
  const getProjectContainer = function () {
    return projectContainer;
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
    todoContainer[index]['project'] = Number(newProject);
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
    getTodoContainer,
    getProjectContainer,
  };
})();




/***/ }),

/***/ "./src/assets/expand-alt-svgrepo-com.svg":
/*!***********************************************!*\
  !*** ./src/assets/expand-alt-svgrepo-com.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6882f9997501c6578c2.svg";

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
/* harmony import */ var _dom_deletemodal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/deletemodal */ "./src/dom/deletemodal.js");
/* harmony import */ var _dom_deletemodalcontroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/deletemodalcontroller */ "./src/dom/deletemodalcontroller.js");
/* harmony import */ var _dom_projectlisteners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom/projectlisteners */ "./src/dom/projectlisteners.js");
/* harmony import */ var _dom_todorender__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/todorender */ "./src/dom/todorender.js");
/* harmony import */ var _dom_projecthighlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/projecthighlight */ "./src/dom/projecthighlight.js");
/* harmony import */ var _dom_newtasklistener__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom/newtasklistener */ "./src/dom/newtasklistener.js");
/* harmony import */ var _dom_todoexpandlistener__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom/todoexpandlistener */ "./src/dom/todoexpandlistener.js");
/* harmony import */ var _dom_checklistener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/checklistener */ "./src/dom/checklistener.js");
/* harmony import */ var _dom_tododeletelistener__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dom/tododeletelistener */ "./src/dom/tododeletelistener.js");




















(0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createSecondTodo)();
(0,_logic_itemcreation__WEBPACK_IMPORTED_MODULE_2__.createThirdTodo)();

(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('music');
(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('movies');
(0,_logic_projectcreation__WEBPACK_IMPORTED_MODULE_3__.createProject)('homework');

(0,_logic_imageloader__WEBPACK_IMPORTED_MODULE_1__.loadImages)();
(0,_dom_newprojectlistener__WEBPACK_IMPORTED_MODULE_7__.loadNewProjListener)();
(0,_dom_projectdeletelistener__WEBPACK_IMPORTED_MODULE_8__.loadDeleteProjListener)();
(0,_dom_projectlisteners__WEBPACK_IMPORTED_MODULE_11__.loadProjectListeners)();
(0,_dom_todorender__WEBPACK_IMPORTED_MODULE_12__.renderAllTodos)();
(0,_dom_projectrender_js__WEBPACK_IMPORTED_MODULE_6__.renderProjects)();
(0,_dom_projecthighlight__WEBPACK_IMPORTED_MODULE_13__.loadHighlighting)();
(0,_dom_newtasklistener__WEBPACK_IMPORTED_MODULE_14__.loadNewTaskListener)();
(0,_dom_todoexpandlistener__WEBPACK_IMPORTED_MODULE_15__.loadExpandListener)();
(0,_dom_checklistener__WEBPACK_IMPORTED_MODULE_16__.loadCheckListener)();
(0,_dom_tododeletelistener__WEBPACK_IMPORTED_MODULE_17__.loadTodoDeleteListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQW1GLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVks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O0FBQ0EsU0FBUzs7QUFFVCxRQUFRLDhEQUFjOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3dEOztBQUVqRDtBQUNQO0FBQ0E7QUFDQSxNQUFNLHFFQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIb0Q7QUFDQztBQUNGO0FBQ1c7O0FBRXZEO0FBQ1AsRUFBRSxpRUFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWlCO0FBQ25COztBQUV5RDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFWDs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBaUI7QUFDbkI7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEI2QjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMyQjtBQUtuQjtBQUMwQjtBQUNKO0FBQ0w7QUFDUztBQUNEO0FBQ1E7QUFDTTtBQUNmO0FBQ1E7QUFDQTtBQUNaO0FBQ1E7QUFDRTtBQUNFO0FBQ047QUFDVTs7QUFFbEUscUVBQWdCO0FBQ2hCLG9FQUFlOztBQUVmLHFFQUFhO0FBQ2IscUVBQWE7QUFDYixxRUFBYTs7QUFFYiw4REFBVTtBQUNWLDRFQUFtQjtBQUNuQixrRkFBc0I7QUFDdEIsNEVBQW9CO0FBQ3BCLGdFQUFjO0FBQ2QscUVBQWM7QUFDZCx3RUFBZ0I7QUFDaEIsMEVBQW1CO0FBQ25CLDRFQUFrQjtBQUNsQixzRUFBaUI7QUFDakIsZ0ZBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9jaGVja2xpc3RlbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vZGVsZXRlbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9kZWxldGVtb2RhbGNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9uZXdwcm9qZWN0bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9uZXd0YXNrbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9uZXd0b2RvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9uZXd0b2RvbW9kYWxjb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vcHJvamVjdGRlbGV0ZWxpc3RlbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vcHJvamVjdGhpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tL3Byb2plY3RsaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9wcm9qZWN0cmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vdG9kb2RlbGV0ZWxpc3RlbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vdG9kb2V4cGFuZGNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS90b2RvZXhwYW5kbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS90b2RvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vdG9kb3JlbmRlcmNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvZmlsdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9pbWFnZWxvYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvaXRlbWNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9wcm9qZWN0Y3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbjpyb290IHtcbiAgLS1pbnRlcjogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgLS1kZWxhOiAnRGVsYSBHb3RoaWMgT25lJywgY3Vyc2l2ZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAsICMzMzMzMzMpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgOGZyIC8gMmZyIDdmcjtcbiAgZ2FwOiAxLjJyZW07XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2Y1O1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dvLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby1pbWcgPiBpbWcge1xuICB3aWR0aDogMy41cmVtO1xufVxuXG4uc2lkZS1iYXIge1xuICBib3JkZXI6IHNvbGlkIDVweCAjZjBmM2Y1O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDE1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaW5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YwZjNmNTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbmJveCA+IHAge1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5uZXctdGFzay10eHQge1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5uZXctdGFzay1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy10YXNrLWJ0biA+IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4ubmV3LXRhc2stYnRuID4gaW1nOmhvdmVyLFxuLmVkaXQtaWNvbjpob3Zlcixcbi50b2RvLWRlbGV0ZS1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBTdHlsaW5nIGZvciBQcm9qZWN0IENvbnRhaW5lciAqL1xuXG4uZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ucHJvaiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZjBmM2Y1O1xuICBoZWlnaHQ6IDRyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2otc3VibWl0LWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxLjdyZW07XG4gIHdpZHRoOiA0cmVtO1xufVxuXG4ucHJvai1zdWJtaXQtYnRuOmhvdmVyLFxuLnByb2otc3VibWl0LWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI25ldy1wcm9qZWN0LWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggcHVycGxlO1xuICBoZWlnaHQ6IDEuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IHNvbGlkIDRweCBwbHVtO1xufVxuXG4ubmV3LXByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWluLWhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBnYXA6IDVweDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3JkZXI6IHNvbGlkIGdyZXkgMnB4O1xufVxuXG4ucHJvaiA+IHAge1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9qLWRlbGV0ZSA+IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBTdHlsaW5nIGZvciBkZWxldGUgbW9kYWwgKi9cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBnYXA6IDMwcHg7XG59XG5cbi5tb2RhbC1wYXJhZ3JhcGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5tb2RhbC1idG5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm1vZGFsLWJ0biB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbC1jYW5jZWwtYnRuLFxuLnRvZG8tbW9kYWwtY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLm1vZGFsLWRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi8qIFRvZG8gTGlzdCBTdHlsaW5nICovXG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAxNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXI6IHNvbGlkIGdyZXkgMnB4O1xufVxuXG4udG9kby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWluLWhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmciAyZnIgMC41ZnIgMC41ZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udG9kby1saXN0dmlldy10ZXh0IHtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG59XG5cbi5lZGl0LWJ0bi1jb250YWluZXIsXG4udG9kby1kZWxldGUtYnRuLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uZWRpdC1pY29uLFxuLnRvZG8tZGVsZXRlLWljb24ge1xuICB3aWR0aDogMS41cmVtO1xufVxuXG4vKiBOZXcgVG9kbyBNb2RhbCAqL1xuXG4ubmV3LXRvZG8tbW9kYWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXctdG9kby1tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGdhcDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm5ldy10b2RvLW1vZGFsLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5uZXctdG9kby1tb2RhbC1mb3JtID4gZGl2ID4gbGFiZWwsXG4ubmV3LXRvZG8tcHJpby1jb250YWluZXIgPiBkaXYgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubmV3LXRvZG8tZm9ybS1jb250YWluZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubmV3LXRvZG8tcHJpby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDUwcHg7XG59XG5cbi5uZXctdG9kby1wcmlvLWNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiN0b2RvLW1vZGFsLXBhcmFncmFwaCB7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAycHggYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLm5ldy10b2RvLW1vZGFsLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG59XG5cbi5uZXctdG9kby1tb2RhbC1idXR0b25zID4gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubmV3LXRvZG8tbW9kYWwtYnV0dG9ucyA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuI3RvZG8tbW9kYWwtdGl0bGUsXG4jdG9kby1tb2RhbC1kZXNjcmlwdGlvbixcbiN0b2RvLW1vZGFsLW5vdGVzLFxuI3RvZG8tbW9kYWwtcHJpb3JpdHksXG4jdG9kby1tb2RhbC1kdWVEYXRlLFxuI3RvZG8tbW9kYWwtcHJvamVjdCB7XG4gIGJvcmRlcjogc29saWQgM3B4IHB1cnBsZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jdG9kby1tb2RhbC10aXRsZSxcbiN0b2RvLW1vZGFsLXByaW9yaXR5LFxuI3RvZG8tbW9kYWwtZHVlRGF0ZSxcbiN0b2RvLW1vZGFsLXByb2plY3Qge1xuICBoZWlnaHQ6IDEuNnJlbTtcbn1cblxuI3RvZG8tbW9kYWwtZGVzY3JpcHRpb24sXG4jdG9kby1tb2RhbC1ub3RlcyB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuXG4udG9kby1kZWZhdWx0LWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50b2RvLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBib3JkZXItY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uSGlnaCB7XG4gIGJvcmRlcjogc29saWQgcmVkIDRweDtcbn1cblxuLk1lZGl1bSB7XG4gIGJvcmRlcjogc29saWQgeWVsbG93IDRweDtcbn1cblxuLkxvdyB7XG4gIGJvcmRlcjogc29saWQgZ3JlZW4gNHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1pbnRlcjogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIC0tZGVsYTogJ0RlbGEgR290aGljIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAsICMzMzMzMzMpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgOGZyIC8gMmZyIDdmcjtcXG4gIGdhcDogMS4ycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjU7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5sb2dvLXRleHQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1pbWcgPiBpbWcge1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIGJvcmRlcjogc29saWQgNXB4ICNmMGYzZjU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDE1cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmluYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YwZjNmNTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5ib3ggPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uZXctdGFzay10eHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stYnRuID4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2stYnRuID4gaW1nOmhvdmVyLFxcbi5lZGl0LWljb246aG92ZXIsXFxuLnRvZG8tZGVsZXRlLWljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBQcm9qZWN0IENvbnRhaW5lciAqL1xcblxcbi5ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YwZjNmNTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qLXN1Ym1pdC1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLnByb2otc3VibWl0LWJ0bjpob3ZlcixcXG4ucHJvai1zdWJtaXQtYnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dCB7XFxuICBib3JkZXI6IHNvbGlkIDNweCBwdXJwbGU7XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogc29saWQgNHB4IHBsdW07XFxufVxcblxcbi5uZXctcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IDVweDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMnB4O1xcbn1cXG5cXG4ucHJvaiA+IHAge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByb2otZGVsZXRlID4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGRlbGV0ZSBtb2RhbCAqL1xcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5tb2RhbC1wYXJhZ3JhcGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0taW50ZXIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm1vZGFsLWJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW9kYWwtYnRuIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtY2FuY2VsLWJ0bixcXG4udG9kby1tb2RhbC1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLm1vZGFsLWRlbGV0ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBUb2RvIExpc3QgU3R5bGluZyAqL1xcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2YwZjNmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDE1cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDJweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAyZnIgMmZyIDAuNWZyIDAuNWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tbGlzdHZpZXctdGV4dCB7XFxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcXG59XFxuXFxuLmVkaXQtYnRuLWNvbnRhaW5lcixcXG4udG9kby1kZWxldGUtYnRuLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQtaWNvbixcXG4udG9kby1kZWxldGUtaWNvbiB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4vKiBOZXcgVG9kbyBNb2RhbCAqL1xcblxcbi5uZXctdG9kby1tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgZ2FwOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbC1mb3JtID4gZGl2ID4gbGFiZWwsXFxuLm5ldy10b2RvLXByaW8tY29udGFpbmVyID4gZGl2ID4gbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybS1jb250YWluZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tcHJpby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLm5ldy10b2RvLXByaW8tY29udGFpbmVyID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbiN0b2RvLW1vZGFsLXBhcmFncmFwaCB7XFxuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMnB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pbnRlcik7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbC1idXR0b25zID4gYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tbW9kYWwtYnV0dG9ucyA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiN0b2RvLW1vZGFsLXRpdGxlLFxcbiN0b2RvLW1vZGFsLWRlc2NyaXB0aW9uLFxcbiN0b2RvLW1vZGFsLW5vdGVzLFxcbiN0b2RvLW1vZGFsLXByaW9yaXR5LFxcbiN0b2RvLW1vZGFsLWR1ZURhdGUsXFxuI3RvZG8tbW9kYWwtcHJvamVjdCB7XFxuICBib3JkZXI6IHNvbGlkIDNweCBwdXJwbGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0b2RvLW1vZGFsLXRpdGxlLFxcbiN0b2RvLW1vZGFsLXByaW9yaXR5LFxcbiN0b2RvLW1vZGFsLWR1ZURhdGUsXFxuI3RvZG8tbW9kYWwtcHJvamVjdCB7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG59XFxuXFxuI3RvZG8tbW9kYWwtZGVzY3JpcHRpb24sXFxuI3RvZG8tbW9kYWwtbm90ZXMge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4udG9kby1kZWZhdWx0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLkhpZ2gge1xcbiAgYm9yZGVyOiBzb2xpZCByZWQgNHB4O1xcbn1cXG5cXG4uTWVkaXVtIHtcXG4gIGJvcmRlcjogc29saWQgeWVsbG93IDRweDtcXG59XFxuXFxuLkxvdyB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCB7IHJlbmRlclNlbGVjdGVkUHJvamVjdCB9IGZyb20gJy4vdG9kb3JlbmRlcmNvbmRpdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ2hlY2tMaXN0ZW5lcigpIHtcbiAgZnVuY3Rpb24gY2hlY2tFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmNoZWNrbGlzdC1jb250YWluZXInKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBzdG9yYWdlQ29udGFpbmVyc1xuICAgICAgICAuZ2V0VG9kb0NvbnRhaW5lcigpXG4gICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGEpO1xuICAgICAgc3RvcmFnZUNvbnRhaW5lcnMuZ2V0VG9kb0NvbnRhaW5lcigpW2luZGV4XS50b2dnbGVDaGVjaygpO1xuICAgICAgcmVuZGVyU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tFdmVudCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsZXRlTW9kYWxMb2FkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb2RhbFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbW9kYWxCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vZGFsQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgbW9kYWxQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IGFuZCBhbGwgb2YgaXRzIGNvbnRlbnRzPyc7XG4gIG1vZGFsRGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIG1vZGFsQ2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJyk7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gIG1vZGFsUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXBhcmFncmFwaCcpO1xuICBtb2RhbEJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRucy1jb250YWluZXInKTtcbiAgbW9kYWxDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIG1vZGFsQ2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNhbmNlbC1idG4nKTtcbiAgbW9kYWxEZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIG1vZGFsRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRlbGV0ZS1idG4nKTtcblxuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxQYXJhZ3JhcGgpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCdG5zQ29udGFpbmVyKTtcbiAgbW9kYWxCdG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ2FuY2VsQnRuKTtcbiAgbW9kYWxCdG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsRGVsZXRlQnRuKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVNb2RhbExvYWRlciB9IGZyb20gJy4vZGVsZXRlbW9kYWwnO1xuaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCB7IHJlbmRlckFsbFRvZG9zIH0gZnJvbSAnLi90b2RvcmVuZGVyJztcbmltcG9ydCB7IGNoYW5nZVByb2pXaGl0ZSwgZGVmYXVsdEluYm94SGlnaGxpZ2h0IH0gZnJvbSAnLi9wcm9qZWN0aGlnaGxpZ2h0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1vZGFsKHByb2opIHtcbiAgZGVsZXRlTW9kYWxMb2FkZXIoKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGVsZXRlLWJ0bicpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FuY2VsLWJ0bicpO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBzdG9yYWdlQ29udGFpbmVycy5kZWxldGVQcm9qZWN0KHByb2oudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhLmlkKTtcbiAgICBjaGFuZ2VQcm9qV2hpdGUoKTtcbiAgICBkZWZhdWx0SW5ib3hIaWdobGlnaHQoKTtcbiAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi4vbG9naWMvcHJvamVjdGNyZWF0aW9uJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cmVuZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROZXdQcm9qTGlzdGVuZXIoKSB7XG4gIGNvbnN0IG5ld1Byb2pJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1pbnB1dCcpO1xuICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWZvcm0nKTtcbiAgZnVuY3Rpb24gbmV3UHJvak1vZGFsKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcucHJvai1zdWJtaXQtYnRuJykpIHtcbiAgICAgIGlmIChwcm9qRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdChuZXdQcm9qSW5wdXQudmFsdWUpO1xuXG4gICAgICAgIC8vIGdldCBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdFxuICAgICAgICBsZXQgY3VycmVudGx5U2VsZWN0ZWQgPSAnJztcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2pDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgICAgWy4uLnByb2plY3RzXS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdncmV5JykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkID0gcHJvamVjdC5kYXRhLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcblxuICAgICAgICBbLi4ucHJvamVjdHNdLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAvLyBhZGQgZ3JleSBiYWNrZ3JvdW5kIHRvIHByb2plY3QgaWYgY3VycmVudGx5IHNlbGVjdGVkXG4gICAgICAgICAgaWYgKHByb2plY3QuZGF0YS5pZCA9PT0gY3VycmVudGx5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnZ3JleScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qRm9ybS5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvak1vZGFsKTtcbn1cbiIsImltcG9ydCB7IG5ld1RvZG9Nb2RhbCB9IGZyb20gJy4vbmV3dG9kb21vZGFsY29udHJvbGxlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTmV3VGFza0xpc3RlbmVyKCkge1xuICBmdW5jdGlvbiBuZXdUb2RvKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcucGx1cy1pY29uJykpIHtcbiAgICAgIG5ld1RvZG9Nb2RhbCgpO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5ld1RvZG9Nb2RhbExvYWRlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tbW9kYWwtY29udGFpbmVyJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLW1vZGFsLWNvbnRlbnQnKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgY29uc3QgbmV3VGFza1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmV3VGFza1BhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tbW9kYWwtcGFyYWdyYXBoJyk7XG4gIG5ld1Rhc2tQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgTmV3IFRhc2snO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza1BhcmFncmFwaCk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1tb2RhbC1mb3JtJyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtLWNvbnRhaW5lcnMnKTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRpdGxlTGFiZWwuaHRtbEZvciA9ICd0b2RvLW1vZGFsLXRpdGxlJztcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW1vZGFsLXRpdGxlJyk7XG4gIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZm9ybS1jb250YWluZXJzJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAndG9kby1tb2RhbC1kZXNjcmlwdGlvbic7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1tb2RhbC1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtLWNvbnRhaW5lcnMnKTtcbiAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICBub3Rlc0xhYmVsLmh0bWxGb3IgPSAndG9kby1tb2RhbC1ub3Rlcyc7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW1vZGFsLW5vdGVzJyk7XG4gIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXNDb250YWluZXIpO1xuXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWZvcm0tY29udGFpbmVycycpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICd0b2RvLW1vZGFsLXByaW9yaXR5JztcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW1vZGFsLXByaW9yaXR5Jyk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgcHJpb09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBwcmlvT25lLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIHByaW9PbmUudmFsdWUgPSAnTG93JztcbiAgY29uc3QgcHJpb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBwcmlvVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIHByaW9Ud28udmFsdWUgPSAnTWVkaXVtJztcbiAgY29uc3QgcHJpb1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHByaW9UaHJlZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgcHJpb1RocmVlLnZhbHVlID0gJ0hpZ2gnO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvT25lKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb1R3byk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9UaHJlZSk7XG5cbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWZvcm0tY29udGFpbmVycycpO1xuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICd0b2RvLW1vZGFsLWR1ZURhdGUnO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tbW9kYWwtZHVlRGF0ZScpO1xuICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgcHJpb0FuZER1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvQW5kRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgcHJpb0FuZER1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgcHJpb0FuZER1ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1wcmlvLWNvbnRhaW5lcicpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9BbmREdWVDb250YWluZXIpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtLWNvbnRhaW5lcnMnKTtcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSAndG9kby1tb2RhbC1wcm9qZWN0JztcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW1vZGFsLXByb2plY3QnKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1tb2RhbC1idXR0b25zJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1tb2RhbC1jYW5jZWwnKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICBjcmVhdGVCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBjcmVhdGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1tb2RhbC1zdWJtaXQnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdG4pO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xufVxuIiwiaW1wb3J0IHsgbmV3VG9kb01vZGFsTG9hZGVyIH0gZnJvbSAnLi9uZXd0b2RvbW9kYWwnO1xuaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tICcuLi9sb2dpYy9pdGVtY3JlYXRpb24nO1xuaW1wb3J0IHsgcmVuZGVyU2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSAnLi90b2RvcmVuZGVyY29uZGl0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1RvZG9Nb2RhbCgpIHtcbiAgbmV3VG9kb01vZGFsTG9hZGVyKCk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLW1vZGFsLWNvbnRhaW5lcicpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW1vZGFsLWNhbmNlbCcpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgc3RvcmFnZUNvbnRhaW5lcnMuZ2V0UHJvamVjdENvbnRhaW5lcigpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtcHJvamVjdCcpO1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBvcHRpb24udmFsdWUgPSBgJHtwcm9qZWN0LmlkfWA7XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICAvLyBTdWJtaXQgQnV0dG9uIEZ1bmN0aW9uYWxpdHkgQmVsb3dcblxuICBmdW5jdGlvbiBzdWJtaXR0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1tb2RhbC1mb3JtJyk7XG4gICAgaWYgKHRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNyZWF0ZSB0b2RvXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1tb2RhbC10aXRsZScpO1xuICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtZGVzY3JpcHRpb24nKTtcbiAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtZHVlRGF0ZScpO1xuICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtcHJpb3JpdHknKTtcbiAgICAgIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1vZGFsLW5vdGVzJyk7XG4gICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1vZGFsLXByb2plY3QnKTtcbiAgICAgIGNyZWF0ZVRvZG8oXG4gICAgICAgIHRvZG9UaXRsZS52YWx1ZSxcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0b2RvRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgdG9kb1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICB0b2RvTm90ZXMudmFsdWUsXG4gICAgICAgIHRvZG9Qcm9qZWN0LnZhbHVlXG4gICAgICApO1xuXG4gICAgICByZW5kZXJTZWxlY3RlZFByb2plY3QoKTtcblxuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbW9kYWwtc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdHRlZCk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVNb2RhbCB9IGZyb20gJy4vZGVsZXRlbW9kYWxjb250cm9sbGVyJztcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERlbGV0ZVByb2pMaXN0ZW5lcigpIHtcbiAgZnVuY3Rpb24gZGVsZXRlUHJvaihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnI2RlbGV0ZS1pY29uJykpIHtcbiAgICAgIGRlbGV0ZU1vZGFsKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2opO1xufVxuIiwiY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRJbmJveEhpZ2hsaWdodCgpIHtcbiAgaW5ib3guY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgaW5ib3guY2xhc3NMaXN0LmFkZCgnZ3JleScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvaldoaXRlKCkge1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvakNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICBbLi4ucHJvamVjdHNdLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyZXknKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhpZ2hsaWdodGluZygpIHtcbiAgLy8gZGVmYXVsdCBoaWdobGlnaHRpbmcgc2V0IHRvIGluYm94XG4gIGNoYW5nZVByb2pXaGl0ZSgpO1xuICBkZWZhdWx0SW5ib3hIaWdobGlnaHQoKTtcblxuICBmdW5jdGlvbiB1cGRhdGVIaWdobGlnaHQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5wcm9qJykpIHtcbiAgICAgIC8vIGhpZ2hsaWdodCB0aGUgcHJvamVjdCBzZWxlY3RlZFxuICAgICAgY2hhbmdlUHJvaldoaXRlKCk7XG4gICAgICBpbmJveC5jbGFzc0xpc3QucmVtb3ZlKCdncmV5Jyk7XG4gICAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZ3JleScpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5pbmJveCcpKSB7XG4gICAgICAvLyBoaWdobGlnaHQgdGhlIGluYm94IGlmIHNlbGVjdGVkXG4gICAgICBjaGFuZ2VQcm9qV2hpdGUoKTtcbiAgICAgIGRlZmF1bHRJbmJveEhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlSGlnaGxpZ2h0KTtcbn1cbiIsImltcG9ydCB7IHJlbmRlckZpbHRlcmVkVG9kb3MgfSBmcm9tICcuL3RvZG9yZW5kZXInO1xuaW1wb3J0IHsgcmVuZGVyQWxsVG9kb3MgfSBmcm9tICcuL3RvZG9yZW5kZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RMaXN0ZW5lcnMoKSB7XG4gIGZ1bmN0aW9uIGxpc3RUb2RvcyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnByb2onKSkge1xuICAgICAgcmVuZGVyRmlsdGVyZWRUb2RvcyhldmVudC50YXJnZXQuZGF0YS5pZCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmluYm94JykpIHtcbiAgICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0VG9kb3MpO1xufVxuIiwiaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuLi9hc3NldHMvdHJhc2gteG1hcmstc3ZncmVwby1jb20uc3ZnJztcbmNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gIHdoaWxlIChwcm9qQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgcHJvakNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIC8vUmVzZXRzIHByb2pDb250YWluZXIgYW5kIHRoZW4gcmVuZGVyXG4gIHN0b3JhZ2VDb250YWluZXJzLmdldFByb2plY3RDb250YWluZXIoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG5ld1Byb2ouZGF0YSA9IHByb2plY3Q7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2otZGVsZXRlJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZS1pY29uJyk7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2onKTtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzIH07XG4iLCJpbXBvcnQgeyBzdG9yYWdlQ29udGFpbmVycyB9IGZyb20gJy4uL2xvZ2ljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyU2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSAnLi90b2RvcmVuZGVyY29uZGl0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2RvRGVsZXRlTGlzdGVuZXIoKSB7XG4gIGZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkVG9kbyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRvZG8tZGVsZXRlLWljb24nKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBzdG9yYWdlQ29udGFpbmVyc1xuICAgICAgICAuZ2V0VG9kb0NvbnRhaW5lcigpXG4gICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YSk7XG4gICAgICBzdG9yYWdlQ29udGFpbmVycy5kZWxldGVUb2RvKGluZGV4KTtcbiAgICAgIHJlbmRlclNlbGVjdGVkUHJvamVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlU2VsZWN0ZWRUb2RvKTtcbn1cbiIsImltcG9ydCB7IG5ld1RvZG9Nb2RhbExvYWRlciB9IGZyb20gJy4vbmV3dG9kb21vZGFsJztcbmltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi4vbG9naWMvc3RvcmFnZSc7XG5pbXBvcnQgeyByZW5kZXJBbGxUb2RvcyB9IGZyb20gJy4vdG9kb3JlbmRlcic7XG5pbXBvcnQgeyByZW5kZXJGaWx0ZXJlZFRvZG9zIH0gZnJvbSAnLi90b2RvcmVuZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFRvZG9Db250cm9sbGVyKGV4cGFuZGVkVG9kbykge1xuICBuZXdUb2RvTW9kYWxMb2FkZXIoKTtcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbW9kYWwtc3VibWl0Jyk7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgY29uc3QgdGFza1BhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1vZGFsLXBhcmFncmFwaCcpO1xuICB0YXNrUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0VkaXQgWW91ciBUYXNrJztcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1tb2RhbC1jYW5jZWwnKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHN0b3JhZ2VDb250YWluZXJzLmdldFByb2plY3RDb250YWluZXIoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1vZGFsLXByb2plY3QnKTtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgb3B0aW9uLnZhbHVlID0gYCR7cHJvamVjdC5pZH1gO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtdGl0bGUnKTtcbiAgdG9kb1RpdGxlLnZhbHVlID0gZXhwYW5kZWRUb2RvLnRpdGxlO1xuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1tb2RhbC1kZXNjcmlwdGlvbicpO1xuICB0b2RvRGVzY3JpcHRpb24udmFsdWUgPSBleHBhbmRlZFRvZG8uZGVzY3JpcHRpb247XG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbW9kYWwtZHVlRGF0ZScpO1xuICB0b2RvRHVlRGF0ZS52YWx1ZSA9IGV4cGFuZGVkVG9kby5kdWVEYXRlO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1tb2RhbC1wcmlvcml0eScpO1xuICB0b2RvUHJpb3JpdHkudmFsdWUgPSBleHBhbmRlZFRvZG8ucHJpb3JpdHk7XG4gIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1vZGFsLW5vdGVzJyk7XG4gIHRvZG9Ob3Rlcy52YWx1ZSA9IGV4cGFuZGVkVG9kby5ub3RlcztcbiAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1tb2RhbC1wcm9qZWN0Jyk7XG4gIHRvZG9Qcm9qZWN0LnZhbHVlID0gZXhwYW5kZWRUb2RvLnByb2plY3Q7XG5cbiAgZnVuY3Rpb24gZWRpdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tbW9kYWwtZm9ybScpO1xuICAgIGlmICh0b2RvRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHN0b3JhZ2VDb250YWluZXJzXG4gICAgICAgIC5nZXRUb2RvQ29udGFpbmVyKClcbiAgICAgICAgLmluZGV4T2YoZXhwYW5kZWRUb2RvKTtcblxuICAgICAgc3RvcmFnZUNvbnRhaW5lcnMuZWRpdFRvZG8oXG4gICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgdG9kb1RpdGxlLnZhbHVlLFxuICAgICAgICB0b2RvRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIHRvZG9EdWVEYXRlLnZhbHVlLFxuICAgICAgICB0b2RvUHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHRvZG9Ob3Rlcy52YWx1ZSxcbiAgICAgICAgdG9kb1Byb2plY3QudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGxldCBjdXJyZW50bHlTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmV5Jyk7XG4gICAgICBpZiAoY3VycmVudGx5U2VsZWN0ZWQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpKSB7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvakNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICBbLi4ucHJvamVjdHNdLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyZXknKSkge1xuICAgICAgICAgICAgcmVuZGVyRmlsdGVyZWRUb2Rvcyhwcm9qZWN0LmRhdGEuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0ZWQpO1xufVxuIiwiaW1wb3J0IHsgZXhwYW5kVG9kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvZG9leHBhbmRjb250cm9sbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRFeHBhbmRMaXN0ZW5lcigpIHtcbiAgZnVuY3Rpb24gZXhwYW5kVG9kbyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmVkaXQtaWNvbicpKSB7XG4gICAgICBleHBhbmRUb2RvQ29udHJvbGxlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGEpO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFRvZG8pO1xufVxuIiwiaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuLi9sb2dpYy9zdG9yYWdlJztcbmltcG9ydCB7IGZpbHRlclByb2plY3QgfSBmcm9tICcuLi9sb2dpYy9maWx0ZXInO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuLi9hc3NldHMvZXhwYW5kLWFsdC1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4uL2Fzc2V0cy90cmFzaC14bWFyay1zdmdyZXBvLWNvbS5zdmcnO1xuY29uc3QgdG9kb0xpc3RWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRvZG9zUmVuZGVyKCkge1xuICB3aGlsZSAodG9kb0xpc3RWaWV3Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICB0b2RvTGlzdFZpZXdDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0xpc3RWaWV3Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9kb1RlbXBsYXRlKHRvZG8pIHtcbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW0uZGF0YSA9IHRvZG87XG4gIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgdG9kb1RpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvUHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZG9EYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvRWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvRGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gZWRpdEltYWdlO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgdG9kb0VkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJbWFnZTtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZS1pY29uJyk7XG4gIHRvZG9EZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlZmF1bHQtY29sb3InKTtcbiAgY2hlY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWNvbnRhaW5lcicpO1xuICBjaGVja0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgaWYgKHRvZG8uY2hlY2tTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgIGNoZWNrQ29udGFpbmVyLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tZGVmYXVsdC1jb2xvcicpO1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2tlZCcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ0hpZ2gnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdNZWRpdW0nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMb3cnOlxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdMb3cnKTtcbiAgICB9XG4gIH1cblxuICB0b2RvVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdHZpZXctdGV4dCcpO1xuICB0b2RvUHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdHZpZXctcHJpb3JpdHknKTtcbiAgdG9kb0RhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdHZpZXctZGF0ZScpO1xuICB0b2RvRWRpdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bi1jb250YWluZXInKTtcbiAgdG9kb0RlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZS1idG4tY29udGFpbmVyJyk7XG5cbiAgdG9kb1RpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIHRvZG9Qcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX1gO1xuICB0b2RvRGF0ZVRleHQudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG8uZHVlRGF0ZX1gO1xuXG4gIHRvZG9MaXN0Vmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNoZWNrQ29udGFpbmVyKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlVGV4dCk7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eVRleHQpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGF0ZVRleHQpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRWRpdENvbnRhaW5lcik7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9EZWxldGVDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3MoKSB7XG4gIGNsZWFyVG9kb3NSZW5kZXIoKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuZ2V0VG9kb0NvbnRhaW5lcigpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICB0b2RvVGVtcGxhdGUodG9kbyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRmlsdGVyZWRUb2RvcyhpZCkge1xuICBjbGVhclRvZG9zUmVuZGVyKCk7XG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJQcm9qZWN0KGlkKTtcbiAgZmlsdGVyZWRBcnJheS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgdG9kb1RlbXBsYXRlKHRvZG8pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbmRlckFsbFRvZG9zIH0gZnJvbSAnLi90b2RvcmVuZGVyJztcbmltcG9ydCB7IHJlbmRlckZpbHRlcmVkVG9kb3MgfSBmcm9tICcuL3RvZG9yZW5kZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRQcm9qZWN0KCkge1xuICBsZXQgY3VycmVudGx5U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JleScpO1xuICBpZiAoY3VycmVudGx5U2VsZWN0ZWQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpKSB7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgWy4uLnByb2plY3RzXS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyZXknKSkge1xuICAgICAgICByZW5kZXJGaWx0ZXJlZFRvZG9zKHByb2plY3QuZGF0YS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN0b3JhZ2VDb250YWluZXJzIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgZmlsdGVyUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0VmFsdWUpIHtcbiAgbGV0IGZpbHRlcmVkID0gc3RvcmFnZUNvbnRhaW5lcnNcbiAgICAuZ2V0VG9kb0NvbnRhaW5lcigpXG4gICAgLmZpbHRlcigob2JqKSA9PiBvYmoucHJvamVjdCA9PT0gcHJvamVjdFZhbHVlKTtcbiAgcmV0dXJuIGZpbHRlcmVkO1xufTtcblxuZXhwb3J0IHsgZmlsdGVyUHJvamVjdCB9O1xuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuLi9hc3NldHMvdGFza3RpZ2VybG9nby5zdmcnO1xuaW1wb3J0IHBsdXNJbWFnZSBmcm9tICcuLi9hc3NldHMvcGx1cy1jaXJjbGUtc3ZncmVwby1jb20uc3ZnJztcblxuY29uc3QgbG9hZEltYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltZycpO1xuICBjb25zdCBsb2dvSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBsb2dvSWNvbi5zcmMgPSBsb2dvSW1hZ2U7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ljb24pO1xuXG4gIGNvbnN0IHBsdXNJY29uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWJ0bicpO1xuICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzSWNvbi5zcmMgPSBwbHVzSW1hZ2U7XG4gIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoJ3BsdXMtaWNvbicpO1xuICBwbHVzSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG59O1xuXG5leHBvcnQgeyBsb2FkSW1hZ2VzIH07XG4iLCJpbXBvcnQgeyBzdG9yYWdlQ29udGFpbmVycyB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIERlZmF1bHQgc3RhdGUgb2Ygb2YgY2hlY2tlZCBzdGF0dXMgaXMgdW5jaGVja2VkLlxuY2xhc3MgdG9kbyB7XG4gIHN0YXRpYyBjb3VudGVyID0gLTE7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNoZWNrU3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlkID0gKyt0aGlzLmNvbnN0cnVjdG9yLmNvdW50ZXI7XG4gIH1cbn1cblxudG9kby5wcm90b3R5cGUudG9nZ2xlQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNoZWNrU3RhdGUgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5jaGVja1N0YXRlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNoZWNrU3RhdGUgPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCkgPT4ge1xuICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8oXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBOdW1iZXIocHJvamVjdClcbiAgKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkVG9kbyhuZXdUb2RvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlY29uZFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gJ2hpc3RvcnknO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICd0aGUgYmVzdCEnO1xuICBjb25zdCBkdWVEYXRlID0gJzIwMjUtMTAtMjAnO1xuICBjb25zdCBwcmlvcml0eSA9ICdMb3cnO1xuICBjb25zdCBub3RlcyA9ICd0ZXN0IG5vdGVzJztcbiAgY29uc3QgcHJvamVjdCA9IDI7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyhcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RcbiAgKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkVG9kbyhuZXdUb2RvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRoaXJkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnbWFjIGRlbWFyY28nO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdzb29vbyBnb29kISc7XG4gIGNvbnN0IGR1ZURhdGUgPSAnMjAyNS0xMC0xNSc7XG4gIGNvbnN0IHByaW9yaXR5ID0gJ0hpZ2gnO1xuICBjb25zdCBub3RlcyA9ICd0ZXN0IG5vdGVzJztcbiAgY29uc3QgcHJvamVjdCA9IDA7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyhcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RcbiAgKTtcbiAgc3RvcmFnZUNvbnRhaW5lcnMuYWRkVG9kbyhuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGNyZWF0ZVNlY29uZFRvZG8sIGNyZWF0ZVRoaXJkVG9kbyB9O1xuIiwiaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jbGFzcyBwcm9qZWN0IHtcbiAgc3RhdGljIGNvdW50ZXIgPSAtMTtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pZCA9ICsrdGhpcy5jb25zdHJ1Y3Rvci5jb3VudGVyO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIHN0b3JhZ2VDb250YWluZXJzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4uL2RvbS9wcm9qZWN0cmVuZGVyJztcbmNvbnN0IHN0b3JhZ2VDb250YWluZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRvZG9Db250YWluZXIgPSBbXTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgIHRvZG9Db250YWluZXIucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHRvZG9Db250YWluZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qSW5kZXggPSBwcm9qZWN0Q29udGFpbmVyLmluZGV4T2YocHJvamVjdCk7XG4gICAgICBpZiAocHJvamVjdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5zcGxpY2UocHJvakluZGV4LCAxKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcblxuICAgICAgICBjb25zdCB0b0JlRmlsdGVyZWQgPSBbXTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgaWYgKHRvZG9bJ3Byb2plY3QnXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRvQmVGaWx0ZXJlZC5wdXNoKHRvZG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvZG9Db250YWluZXIuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PiAhdG9CZUZpbHRlcmVkLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICk7XG4gICAgICAgIHRvZG9Db250YWluZXIgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IGZ1bmN0aW9uIChcbiAgICBpbmRleCxcbiAgICBuZXdUaXRsZSxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICBuZXdEdWVEYXRlLFxuICAgIG5ld1ByaW9yaXR5LFxuICAgIG5ld05vdGVzLFxuICAgIG5ld1Byb2plY3RcbiAgKSB7XG4gICAgdG9kb0NvbnRhaW5lcltpbmRleF1bJ3RpdGxlJ10gPSBuZXdUaXRsZTtcbiAgICB0b2RvQ29udGFpbmVyW2luZGV4XVsnZGVzY3JpcHRpb24nXSA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIHRvZG9Db250YWluZXJbaW5kZXhdWydkdWVEYXRlJ10gPSBuZXdEdWVEYXRlO1xuICAgIHRvZG9Db250YWluZXJbaW5kZXhdWydwcmlvcml0eSddID0gbmV3UHJpb3JpdHk7XG4gICAgdG9kb0NvbnRhaW5lcltpbmRleF1bJ25vdGVzJ10gPSBuZXdOb3RlcztcbiAgICB0b2RvQ29udGFpbmVyW2luZGV4XVsncHJvamVjdCddID0gTnVtYmVyKG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKGluZGV4LCBuZXdOYW1lKSB7XG4gICAgY29uc3Qgb2xkTmFtZSA9IHByb2plY3RDb250YWluZXJbaW5kZXhdO1xuICAgIHByb2plY3RDb250YWluZXJbaW5kZXhdID0gbmV3TmFtZTtcblxuICAgIHRvZG9Db250YWluZXIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG9bJ3Byb2plY3QnXSA9PT0gb2xkTmFtZSkge1xuICAgICAgICB0b2RvWydwcm9qZWN0J10gPSBuZXdOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHRvZG9Db250YWluZXIsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICBkZWxldGVUb2RvLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFRvZG8sXG4gICAgZWRpdFByb2plY3QsXG4gICAgZ2V0VG9kb0NvbnRhaW5lcixcbiAgICBnZXRQcm9qZWN0Q29udGFpbmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgbG9hZEltYWdlcyB9IGZyb20gJy4vbG9naWMvaW1hZ2Vsb2FkZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2Vjb25kVG9kbyxcbiAgY3JlYXRlVGhpcmRUb2RvLFxuICBjcmVhdGVUb2RvLFxufSBmcm9tICcuL2xvZ2ljL2l0ZW1jcmVhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9sb2dpYy9wcm9qZWN0Y3JlYXRpb24nO1xuaW1wb3J0IHsgc3RvcmFnZUNvbnRhaW5lcnMgfSBmcm9tICcuL2xvZ2ljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZmlsdGVyUHJvamVjdCB9IGZyb20gJy4vbG9naWMvZmlsdGVyJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9kb20vcHJvamVjdHJlbmRlci5qcyc7XG5pbXBvcnQgeyBjbGVhclByb2plY3RzIH0gZnJvbSAnLi9kb20vcHJvamVjdHJlbmRlci5qcyc7XG5pbXBvcnQgeyBsb2FkTmV3UHJvakxpc3RlbmVyIH0gZnJvbSAnLi9kb20vbmV3cHJvamVjdGxpc3RlbmVyJztcbmltcG9ydCB7IGxvYWREZWxldGVQcm9qTGlzdGVuZXIgfSBmcm9tICcuL2RvbS9wcm9qZWN0ZGVsZXRlbGlzdGVuZXInO1xuaW1wb3J0IHsgZGVsZXRlTW9kYWxMb2FkZXIgfSBmcm9tICcuL2RvbS9kZWxldGVtb2RhbCc7XG5pbXBvcnQgeyBMb2FkRGVsZXRlTW9kYWwgfSBmcm9tICcuL2RvbS9kZWxldGVtb2RhbGNvbnRyb2xsZXInO1xuaW1wb3J0IHsgbG9hZFByb2plY3RMaXN0ZW5lcnMgfSBmcm9tICcuL2RvbS9wcm9qZWN0bGlzdGVuZXJzJztcbmltcG9ydCB7IHJlbmRlckFsbFRvZG9zIH0gZnJvbSAnLi9kb20vdG9kb3JlbmRlcic7XG5pbXBvcnQgeyBsb2FkSGlnaGxpZ2h0aW5nIH0gZnJvbSAnLi9kb20vcHJvamVjdGhpZ2hsaWdodCc7XG5pbXBvcnQgeyBsb2FkTmV3VGFza0xpc3RlbmVyIH0gZnJvbSAnLi9kb20vbmV3dGFza2xpc3RlbmVyJztcbmltcG9ydCB7IGxvYWRFeHBhbmRMaXN0ZW5lciB9IGZyb20gJy4vZG9tL3RvZG9leHBhbmRsaXN0ZW5lcic7XG5pbXBvcnQgeyBsb2FkQ2hlY2tMaXN0ZW5lciB9IGZyb20gJy4vZG9tL2NoZWNrbGlzdGVuZXInO1xuaW1wb3J0IHsgbG9hZFRvZG9EZWxldGVMaXN0ZW5lciB9IGZyb20gJy4vZG9tL3RvZG9kZWxldGVsaXN0ZW5lcic7XG5cbmNyZWF0ZVNlY29uZFRvZG8oKTtcbmNyZWF0ZVRoaXJkVG9kbygpO1xuXG5jcmVhdGVQcm9qZWN0KCdtdXNpYycpO1xuY3JlYXRlUHJvamVjdCgnbW92aWVzJyk7XG5jcmVhdGVQcm9qZWN0KCdob21ld29yaycpO1xuXG5sb2FkSW1hZ2VzKCk7XG5sb2FkTmV3UHJvakxpc3RlbmVyKCk7XG5sb2FkRGVsZXRlUHJvakxpc3RlbmVyKCk7XG5sb2FkUHJvamVjdExpc3RlbmVycygpO1xucmVuZGVyQWxsVG9kb3MoKTtcbnJlbmRlclByb2plY3RzKCk7XG5sb2FkSGlnaGxpZ2h0aW5nKCk7XG5sb2FkTmV3VGFza0xpc3RlbmVyKCk7XG5sb2FkRXhwYW5kTGlzdGVuZXIoKTtcbmxvYWRDaGVja0xpc3RlbmVyKCk7XG5sb2FkVG9kb0RlbGV0ZUxpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=