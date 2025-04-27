"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _init = require("./utils/init");
var _speak = require("./utils/speak");
console.log("ENTROI??");
(0, _init.initChippy)();
var chippy = {
  speak: _speak.speak
};
var _default = exports["default"] = chippy;