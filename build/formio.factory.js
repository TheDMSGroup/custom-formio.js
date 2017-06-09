"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormioFactory = undefined;

var _nativePromiseOnly = require("native-promise-only");

var _nativePromiseOnly2 = _interopRequireDefault(_nativePromiseOnly);

var _formio = require("./formio.wizard");

var _formio2 = _interopRequireDefault(_formio);

var _formio3 = require("./formio.form");

var _formio4 = _interopRequireDefault(_formio3);

var _formio5 = require("./formio");

var _formio6 = _interopRequireDefault(_formio5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormioFactory = exports.FormioFactory = {

  /**
   * Factory to create a new form based on the form json.
   *
   * @param element {HMTLElement} - The HTML Element to add this form to.
   * @param form {Object} - The form json schema.
   * @param options {Object} - The options to create this form.
   * @return {*}
   */
  factory: function factory(element, form, options) {
    var instance = null;
    if (form.display === 'wizard') {
      instance = new _formio2.default(element, options);
    } else {
      instance = new _formio4.default(element, options);
    }
    instance.form = form;
    return instance;
  },

  /**
   * Creates a new form based on the form parameter.
   *
   * @param element {HMTLElement} - The HTML Element to add this form to.
   * @param form {string|Object} - The src of the form, or a form object.
   * @param options {Object} - The options to create this form.
   *
   * @return {Promise} - When the form is instance is ready.
   */
  createForm: function createForm(element, form, options) {
    if (typeof form === 'string') {
      return new _formio6.default(form).loadForm().then(function (formObj) {
        return FormioFactory.factory(element, formObj, options);
      });
    } else {
      return _nativePromiseOnly2.default.resolve(FormioFactory.factory(element, form, options));
    }
  }
};