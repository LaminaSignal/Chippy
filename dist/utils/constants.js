"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_FILE = exports.LOG_DIR = void 0;
var _path = _interopRequireDefault(require("path"));
var _os = _interopRequireDefault(require("os"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LOG_DIR = exports.LOG_DIR = _path["default"].join(_os["default"].homedir(), '.chippy');
var LOG_FILE = exports.LOG_FILE = _path["default"].join(LOG_DIR, 'heartbeat.log');