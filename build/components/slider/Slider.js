'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = require('../base/Base');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderComponent = exports.SliderComponent = function (_BaseComponent) {
  _inherits(SliderComponent, _BaseComponent);

  function SliderComponent() {
    _classCallCheck(this, SliderComponent);

    return _possibleConstructorReturn(this, (SliderComponent.__proto__ || Object.getPrototypeOf(SliderComponent)).apply(this, arguments));
  }

  _createClass(SliderComponent, [{
    key: 'build',
    value: function build() {

      this.createElement();

      if (this.component.label) {
        var label = this.ce('label', 'label', {
          class: 'control-label'
        });
        this.element.appendChild(label);
        label.innerText = this.component.label;
      }

      var output = this.ce('div', 'div', { class: 'slider-output', id: 'slider-output' });
      this.element.appendChild(output);

      this.input = this.createInput(this.element);
      if (!this.label) {
        this.addInput(this.input, this.element);
      }

      var sliderLabels = this.ce('div', 'div', { class: 'sliderLabels', id: 'sliderLabels' });
      this.element.appendChild(sliderLabels);
      var minLabel = this.ce('div', 'div', { class: 'minLabel', id: 'minLabel' });
      var maxLabel = this.ce('div', 'div', { class: 'maxLabel', id: 'maxLabel' });

      sliderLabels.appendChild(minLabel);
      sliderLabels.appendChild(maxLabel);
      this.errorContainer = this.element;

      var min = this.component.min;
      var max = this.component.max;
      var step = this.component.step;

      output.innerText = this.input.value === min ? this.toCurrency(this.input.value) + ' or less' : this.input.value === max ? (0, _numeral2.default)(this.input.value).format('$0,0') + ' or more' : (0, _numeral2.default)(this.input.value - step).format('$0,0') + ' - ' + (0, _numeral2.default)(this.input.value).format('$0,0');
      this.input.oninput = function () {
        output.innerText = this.value === min ? (0, _numeral2.default)(this.value).format('$0,0') + ' or less' : this.value === max ? (0, _numeral2.default)(this.value).format('$0,0') + ' or more' : (0, _numeral2.default)(this.value - step).format('$0,0') + ' - ' + (0, _numeral2.default)(this.value).format('$0,0');
      };
      this.input.onchange = function () {
        output.innerText = this.value === min ? (0, _numeral2.default)(this.value).format('$0,0') + ' or less' : this.value === max ? (0, _numeral2.default)(this.value).format('$0,0') + ' or more' : (0, _numeral2.default)(this.value - step).format('$0,0') + ' - ' + (0, _numeral2.default)(this.value).format('$0,0');
      };

      this.setValue(this.input.value);

      minLabel.innerText = this.toCurrency(this.component.min);
      maxLabel.innerText = this.toCurrency(this.component.max);
    }
  }, {
    key: 'createInput',
    value: function createInput(container) {

      var input = this.ce('input', 'input', {
        type: 'range',
        class: 'range-slider__range',
        min: this.component.min,
        max: this.component.max,
        step: this.component.step,
        value: this.component.defaultValue,
        id: 'range-slider'
      });

      return input;
    }
  }, {
    key: 'toCurrency',
    value: function toCurrency(amount) {
      return (0, _numeral2.default)(amount).format('$0,0');
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var className = this.className;
      if (this.component.label) {
        className += ' range-slider';
      }
      this.element = this.ce('element', 'div', {
        id: this.id,
        class: className
      });
    }
  }]);

  return SliderComponent;
}(_Base.BaseComponent);