"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _chippyConfig = require("./chippyConfig");
Object.keys(_chippyConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _chippyConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chippyConfig[key];
    }
  });
});