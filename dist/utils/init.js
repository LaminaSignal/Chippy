"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initChippy = initChippy;
var _constants = require("./constants");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function initChippy() {
  console.log('Chippy boot sequence initialized.\n');
  if (!_fs["default"].existsSync(_constants.LOG_DIR)) _fs["default"].mkdirSync(_constants.LOG_DIR);
  if (!_fs["default"].existsSync(_constants.LOG_FILE)) _fs["default"].writeFileSync(_constants.LOG_FILE, 'Chippy boot sequence initialized.\n');
}