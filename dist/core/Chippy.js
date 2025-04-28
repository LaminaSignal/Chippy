"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chippy = void 0;
var _init = require("./actions/init");
var _pulse2 = require("./actions/pulse");
var _speak2 = require("./actions/speak");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Chippy = exports.Chippy = /*#__PURE__*/function () {
  function Chippy() {
    _classCallCheck(this, Chippy);
    _defineProperty(this, "_dbClient", undefined);
    _defineProperty(this, "_telemetryTableName", 'telemetry');
    (0, _init.initChippy)();
  }
  return _createClass(Chippy, [{
    key: "dbClient",
    set: function set(dbClient) {
      this._dbClient = dbClient;
    }
  }, {
    key: "telemetryTableName",
    set: function set(tableName) {
      if (!tableName) {
        return;
      }
      this._telemetryTableName = tableName;
    }
  }, {
    key: "speak",
    value: function speak(message) {
      (0, _speak2.speak)(message);
    }

    /**
     * Pulse - Log data into a database client - by default it will log them under telemetry
     * @param eventType 
     * @param payload 
     * @returns 
     */
  }, {
    key: "pulse",
    value: function pulse(eventType, payload) {
      if (!this.dbClient) {
        this.speak('Chippy tried to log telemetry but no DB client was set.');
        return;
      }
      (0, _pulse2.pulse)(this.dbClient, this._telemetryTableName, eventType, payload);
    }
  }, {
    key: "configureChippy",
    value: function configureChippy(config) {
      this.speak('Configuring Chippy');
      this.dbClient = config.dbClient;
      this.telemetryTableName = config.telemetryTableName;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!Chippy.instance) {
        Chippy.instance = new Chippy();
      }
      return Chippy.instance;
    }
  }]);
}();