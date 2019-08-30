"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Theme = _interopRequireDefault(require("./Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// let config = {
// 	result: {}
// }
// config.set = function(value) {
// 	let config = {}
// 	let result = {}
// 	config.root = process.cwd() + value.match(/(.*)[\/\\]/)[1] + '/' || ''
// 	config.path = process.cwd() + value
// 	if (typeof value === 'string') {
// 		result = require(config.path)
// 	}
// 	if (typeof value === 'object') {
// 		result = value
// 	}
// 	config = Object.assign(config, result)
// 	;
// 	['model', 'template', 'output'].forEach(function(current) {
// 		if (config[current]) config[current] = putValuesIntoArray(config[current])
// 	})
// 	config = normaliseOutputs(config)
// 	// If theme is specified in config then set the theme
// 	if (config.theme) {
// 		theme.result = theme.setTheme(config.theme, config)
// 	}
// 	return config
// }
var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);

    return this;
  }

  _createClass(Config, [{
    key: "set",
    value: function set(value) {
      var config = {};
      var result = {};
      config.root = process.cwd() + value.match(/(.*)[\/\\]/)[1] + '/' || '';
      config.path = process.cwd() + value;

      if (typeof value === 'string') {
        result = require(config.path);
      }

      if (_typeof(value) === 'object') {
        result = value;
      }

      config = Object.assign(config, result);
      ['model', 'template', 'output'].forEach(function (current) {
        if (config[current]) config[current] = putValuesIntoArray(config[current]);
      });
      config = normaliseOutputs(config); // If theme is specified in config then set the theme

      if (config.theme) {
        _Theme["default"].set(config.theme, config);
      }

      Object.assign(this, config);
    }
  }]);

  return Config;
}();

var config = new Config();

function normaliseOutputs(config) {
  config.output.map(function (output) {
    if (typeof output === 'undefined') {
      throw new Error('No outputs specified in config');
    } // Check for name


    var name;

    if (typeof output.file === 'undefined') {
      name = Object.keys(output)[0];
    } else {
      name = null;
    } // Check for model


    var model;

    if (output.model) {
      model = output.model;
    } else if (config.model) {
      model = config.model;
    } else {
      model = null;
    } // Check for template


    var template;

    if (output.template) {
      template = output.template;
    } else if (config.template) {
      template = config.template;
    } else {
      template = null;
    } // Check for directory


    var dir;

    if (output.dir) {
      if (config.dir) {
        dir = '.' + config.root + config.dir + output.dir;
      } else {
        dir = '.' + config.root + output.dir;
      }
    } else if (config.dir) {
      dir = '.' + config.root + config.dir;
    } else {
      dir = '.' + config.root + '';
    } // Check for file


    var file;

    if (typeof output.file === 'undefined') {
      file = output[name].file;
    } else {
      file = output.file;
    }

    return Object.assign({}, {
      name: name,
      model: model,
      template: template,
      dir: dir,
      file: file
    });
  });
  return config;
}

function putValuesIntoArray(value) {
  return Array.isArray(value) ? value : [value];
}

var _default = config;
exports["default"] = _default;
module.exports = exports.default;