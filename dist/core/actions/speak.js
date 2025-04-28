"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speak = speak;
var _fs = _interopRequireDefault(require("fs"));
var _constants = require("../../utils/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function speak(message) {
  var timestamp = new Date().toISOString();
  var logEntry = "[".concat(timestamp, "] \uD83D\uDC9A ").concat(message, "\n");
  _fs["default"].appendFileSync(_constants.LOG_FILE, logEntry);
  console.log(logEntry.trim());
}