"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Chippy = require("./Chippy");
Object.keys(_Chippy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Chippy[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Chippy[key];
    }
  });
});
var _IChippy = require("./IChippy");
Object.keys(_IChippy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IChippy[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IChippy[key];
    }
  });
});