'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonValueComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base = require('../base/Base');

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonValueComponent = exports.ButtonValueComponent = function (_BaseComponent) {
  _inherits(ButtonValueComponent, _BaseComponent);

  function ButtonValueComponent() {
    _classCallCheck(this, ButtonValueComponent);

    return _possibleConstructorReturn(this, (ButtonValueComponent.__proto__ || Object.getPrototypeOf(ButtonValueComponent)).apply(this, arguments));
  }

  _createClass(ButtonValueComponent, [{
    key: 'elementInfo',
    value: function elementInfo() {
      var info = _get(ButtonValueComponent.prototype.__proto__ || Object.getPrototypeOf(ButtonValueComponent.prototype), 'elementInfo', this).call(this);
      info.type = 'button';
      info.attr.type = this.component.action === 'submit' ? 'submit' : 'button';
      info.attr.class = 'btn btn-' + this.component.theme;
      info.attr.value = this.component.value ? this.component.value : '';

      if (this.component.block) {
        info.attr.class += ' btn-block';
      }
      if (this.component.customClass) {
        info.attr.class += ' ' + this.component.customClass;
      }
      return info;
    }
  }, {
    key: 'build',
    value: function build() {
      var _this2 = this;

      this.element = this.ce('element', this.info.type, this.info.attr);
      if (this.component.label) {
        this.label = this.text(this.component.label);
        this.element.appendChild(this.label);
      }
      if (this.component.action === 'submit') {
        this.on('submitButton', function () {
          _this2.loading = true;
          _this2.disabled = true;
        }, true);
        this.on('submitDone', function () {
          _this2.loading = false;
          _this2.disabled = false;
        }, true);
        this.on('error', function () {
          _this2.loading = false;
        }, true);
      }
      this.addEventListener(this.element, 'click', function (event) {
        switch (_this2.component.action) {
          case 'submit':
            event.preventDefault();
            event.stopPropagation();
            _this2.emit('submitButton');
            _this2.setValue(_this2.component.value);
            break;
          case 'event':
            _this2.events.emit(_this2.component.event, _this2.data);
            _this2.emit('customEvent', {
              type: _this2.component.event,
              component: _this2.component,
              data: _this2.data,
              event: event
            });
            _this2.setValue(_this2.component.value);
            break;
          case 'reset':
            _this2.emit('resetForm');
            break;
          case 'oauth':
            console.log('OAuth currently not supported.');
            break;
        }
      });
      if (this.options.readOnly) {
        this.disabled = true;
      }
    }
  }, {
    key: 'loading',
    set: function set(loading) {
      this._loading = loading;
      if (!this.loader && loading) {
        this.loader = this.ce('buttonLoader', 'i', {
          class: 'glyphicon glyphicon-refresh glyphicon-spin button-icon-right'
        });
      }
      if (this.loader) {
        if (loading) {
          this.element.appendChild(this.loader);
        } else {
          this.element.removeChild(this.loader);
        }
      }
    }
  }, {
    key: 'disabled',
    set: function set(disabled) {
      _set(ButtonValueComponent.prototype.__proto__ || Object.getPrototypeOf(ButtonValueComponent.prototype), 'disabled', disabled, this);
      this.element.disable = disabled;
    }
  }]);

  return ButtonValueComponent;
}(_Base.BaseComponent);