/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/plugins/channels";
exports.ids = ["pages/api/plugins/channels"];
exports.modules = {

/***/ "./lib/channels.js":
/*!*************************!*\
  !*** ./lib/channels.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"channels\": function() { return /* binding */ channels; }\n/* harmony export */ });\nconst channels = [{\n  id: 1,\n  name: 'announcements',\n  description: ''\n}, {\n  id: 2,\n  name: 'games',\n  description: ''\n}, {\n  id: 3,\n  name: 'designers',\n  description: ''\n}, {\n  id: 4,\n  name: 'developers',\n  description: ''\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96Y19tYWluLy4vbGliL2NoYW5uZWxzLmpzPzE3MWYiXSwibmFtZXMiOlsiY2hhbm5lbHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFQyxhQUFXLEVBQUU7QUFIZixDQURzQixFQU10QjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxhQUFXLEVBQUU7QUFIZixDQU5zQixFQVd0QjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxhQUFXLEVBQUU7QUFIZixDQVhzQixFQWdCdEI7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsYUFBVyxFQUFFO0FBSGYsQ0FoQnNCLENBQWpCIiwiZmlsZSI6Ii4vbGliL2NoYW5uZWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNoYW5uZWxzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ2Fubm91bmNlbWVudHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ2dhbWVzJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdkZXNpZ25lcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ2RldmVsb3BlcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICB9XG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/channels.js\n");

/***/ }),

/***/ "./pages/api/plugins/channels.js":
/*!***************************************!*\
  !*** ./pages/api/plugins/channels.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _lib_channels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/channels */ \"./lib/channels.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n  res.setHeader('Content-Type', 'application/json');\n  res.statusCode = 200;\n  res.end(JSON.stringify({\n    message: 'success',\n    channels: _lib_channels__WEBPACK_IMPORTED_MODULE_0__.channels\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96Y19tYWluLy4vcGFnZXMvYXBpL3BsdWdpbnMvY2hhbm5lbHMuanM/MTAyOSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwic3RhdHVzQ29kZSIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwiY2hhbm5lbHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4Q0EsS0FBRyxDQUFDQyxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQUQsS0FBRyxDQUFDRSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FGLEtBQUcsQ0FBQ0csR0FBSixDQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxXQUFPLEVBQUUsU0FBWDtBQUFzQkMsWUFBUUE7QUFBOUIsR0FBZixDQUFSO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGx1Z2lucy9jaGFubmVscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBjaGFubmVscyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jaGFubmVscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ3N1Y2Nlc3MnLCBjaGFubmVscyB9KSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/plugins/channels.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/plugins/channels.js"));
module.exports = __webpack_exports__;

})();