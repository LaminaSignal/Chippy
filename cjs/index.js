"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initChippy = initChippy;
exports.speak = speak;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _os = _interopRequireDefault(require("os"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LOG_DIR = _path["default"].join(_os["default"].homedir(), '.chippy');
var LOG_FILE = _path["default"].join(LOG_DIR, 'heartbeat.log');
function initChippy() {
  if (!_fs["default"].existsSync(LOG_DIR)) _fs["default"].mkdirSync(LOG_DIR);
  if (!_fs["default"].existsSync(LOG_FILE)) _fs["default"].writeFileSync(LOG_FILE, 'Chippy boot sequence initialized.\n');
}
function speak(message) {
  var timestamp = new Date().toISOString();
  var logEntry = "[".concat(timestamp, "] \uD83D\uDC9A ").concat(message, "\n");
  _fs["default"].appendFileSync(LOG_FILE, logEntry);
  console.log(logEntry.trim());
}