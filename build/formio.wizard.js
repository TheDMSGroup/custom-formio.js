'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormioWizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _nativePromiseOnly = require('native-promise-only');

var _nativePromiseOnly2 = _interopRequireDefault(_nativePromiseOnly);

var _formio = require('./formio.form');

var _formio2 = _interopRequireDefault(_formio);

var _formio3 = require('./formio');

var _formio4 = _interopRequireDefault(_formio3);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

var _jsonLogicJs = require('json-logic-js');

var _jsonLogicJs2 = _interopRequireDefault(_jsonLogicJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormioWizard = exports.FormioWizard = function (_FormioForm) {
  _inherits(FormioWizard, _FormioForm);

  function FormioWizard(element, options) {
    _classCallCheck(this, FormioWizard);

    var _this = _possibleConstructorReturn(this, (FormioWizard.__proto__ || Object.getPrototypeOf(FormioWizard)).call(this, element, options));

    _this.pages = [];
    _this.page = 0;
    _this.history = [];
    _this.allComponents = {};
    _this._nextPage = 1;
    _this.buttons = [];

    // DMS

    _this.wizardNav = false;
    return _this;
  }

  _createClass(FormioWizard, [{
    key: 'setPage',
    value: function setPage(num) {
      var _this2 = this;

      if (num >= 0 && num < this.pages.length) {
        this.page = num;
        this.buttons = [];
        var page = this.currentPage();
        this.buttons = page.buttons;
        return _get(FormioWizard.prototype.__proto__ || Object.getPrototypeOf(FormioWizard.prototype), 'setForm', this).call(this, this.currentPage()).then(function () {
          // Save the components for when we finally submit.
          _this2.allComponents[_this2.page] = (0, _clone2.default)(_this2.components);
        });
      }
      return _nativePromiseOnly2.default.reject('Page not found');
    }
  }, {
    key: 'getNextPage',
    value: function getNextPage(data, currentPage) {
      var form = this.pages[currentPage];
      // Check conditional nextPage
      if (form) {
        var page = ++currentPage;
        if (form.nextPage) {
          // Allow for script execution.
          if (typeof form.nextPage === 'string') {
            try {
              eval(form.nextPage.toString());
              if (!isNaN(parseInt(page, 10)) && isFinite(page)) {
                return page;
              }
              if (typeof page !== 'string') {
                return page;
              }

              // Assume they passed back the key of the page to go to.
              return this.getPageIndexByKey(page);
            } catch (e) {
              console.warn('An error occurred in a custom nextPage function statement for component ' + form.key, e);
              return page;
            }
          }
          // Or use JSON Logic.
          else {
              var result = _jsonLogicJs2.default.apply(form.nextPage, {
                data: data,
                page: page,
                form: form
              });
              var newPage = parseInt(result, 10);
              if (!isNaN(parseInt(newPage, 10)) && isFinite(newPage)) {
                return newPage;
              }

              return this.getPageIndexByKey(result);
            }
        }

        return page;
      }

      return null;
    }
  }, {
    key: 'getPreviousPage',
    value: function getPreviousPage() {
      var prev = this.history.pop();
      if (typeof prev !== 'undefined') {
        return prev;
      }

      return this.page - 1;
    }

    // DMS

  }, {
    key: 'nextPage',
    value: function nextPage() {
      var _this3 = this;

      // DMS

      for (var i = 0; i < this.components.length; i++) {
        if (this.components[i].type === 'checkbox' && this.components[i].component.validate.required && (this.components[i].value === null || !this.components[i].value)) {
          delete this.submission.data[this.components[i].component.key];
        }

        i++;
      }

      // Validate the form builed, before go to the next page
      if (this.checkValidity(this.submission.data, true)) {
        // DMS

        if (this.beforeNextPageCallback) {
          this.beforeNextPageCallback(this, this.submission.data, this.nextPageWithValidation);
        } else {
          this.checkData(this.submission.data, true);
          return this.beforeNext().then(function () {
            _this3.history.push(_this3.page);
            return _this3.setPage(_this3.getNextPage(_this3.submission.data, _this3.page)).then(function () {
              _this3._nextPage = _this3.getNextPage(_this3.submission.data, _this3.page);
              _this3.emit('nextPage', { page: _this3.page, submission: _this3.submission });
            });
          });
        }
      } else {
        return _nativePromiseOnly2.default.reject(this.showErrors());
      }
    }

    // DMS

  }, {
    key: 'nextPageWithValidation',
    value: function nextPageWithValidation(thisInstance, additionalFieldsValidationData) {
      //console.log('nextPageWithValidation');

      //console.log('----- ----- ----- ----- -----');
      //console.log(thisInstance);

      //console.log('additionalFieldsValidationData:');
      //console.dir(additionalFieldsValidationData);

      //console.log('----- ----- ----- ----- -----');

      var proceedToNextPage = false;

      // If no data given, then proceed to the next page.
      if (typeof additionalFieldsValidationData === 'undefined') {
        proceedToNextPage = true;
      }

      if (additionalFieldsValidationData) {
        var currentKey;

        (function () {
          var currentObj = void 0;

          var valid = void 0;
          var message = void 0;

          var allValid = 1;

          for (currentKey in additionalFieldsValidationData) {
            currentObj = additionalFieldsValidationData[currentKey];

            valid = currentObj.valid;
            message = currentObj.message;

            if (!valid) {
              thisInstance.getComponent(currentKey, function (component) {
                component.createErrorElement();
                component.addInputError(message);
              });

              allValid = 0;
            }
          }

          if (allValid) {
            proceedToNextPage = true;
          }
        })();
      }

      //console.log('proceedToNextPage' + ' = ' + proceedToNextPage);

      if (proceedToNextPage) {
        thisInstance.checkData(thisInstance.submission.data, true);

        return thisInstance.beforeNext().then(function () {
          thisInstance.history.push(thisInstance.page);

          return thisInstance.setPage(thisInstance.getNextPage(thisInstance.submission.data, thisInstance.page)).then(function () {
            thisInstance._nextPage = thisInstance.getNextPage(thisInstance.submission.data, thisInstance.page);
            thisInstance.emit('nextPage', { page: thisInstance.page, submission: thisInstance.submission });
          });
        });
      } else {
        return _nativePromiseOnly2.default.reject(thisInstance.showErrors());
      }
    }
  }, {
    key: 'prevPage',
    value: function prevPage() {
      var _this4 = this;

      var prevPage = this.getPreviousPage();
      return this.setPage(prevPage).then(function () {
        _this4.emit('prevPage', { page: _this4.page, submission: _this4.submission });
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      _get(FormioWizard.prototype.__proto__ || Object.getPrototypeOf(FormioWizard.prototype), 'cancel', this).call(this);
      this.history = [];
      return this.setPage(0);
    }
  }, {
    key: 'getPageIndexByKey',
    value: function getPageIndexByKey(key) {
      var pageIndex = 0;
      (0, _each2.default)(this.pages, function (_page, index) {
        if (_page.key === key) {
          pageIndex = index;
          return false;
        }
      });
      return pageIndex;
    }
  }, {
    key: 'getPage',
    value: function getPage(pageNum) {
      if (pageNum >= 0 && pageNum < this.pages.length) {
        return this.pages[pageNum];
      }
      return this.pages.length ? this.pages[0] : { components: [] };
    }
  }, {
    key: 'currentPage',
    value: function currentPage() {
      return this.getPage(this.page);
    }
  }, {
    key: 'setForm',
    value: function setForm(form) {
      var _this5 = this;

      this.pages = [];
      this.buttons = [];

      // DMS

      this.wizardNav = false;

      if (form.enableNavigation) {
        this.wizardNav = true;
      }

      (0, _each2.default)(form.components, function (component) {
        if (component.type === 'panel') {
          _this5.pages.push(component);
        } else if (component.key) {
          _this5.allComponents[component.key] = _this5.addComponent(component, _this5.element, _this5.data);
        }
      });
      return this.setPage(this.page);
    }
  }, {
    key: 'build',
    value: function build() {
      this.createWizardHeader();
      _get(FormioWizard.prototype.__proto__ || Object.getPrototypeOf(FormioWizard.prototype), 'build', this).call(this);
      this.createWizardNav();
    }
  }, {
    key: 'hasButton',
    value: function hasButton(name) {
      if (name === 'previous') {
        return this.page > 0;
      }
      var nextPage = this.getNextPage(this.submission.data, this.page);
      if (name === 'next') {
        return nextPage !== null && nextPage < this.pages.length;
      }
      if (name === 'submit') {
        return nextPage === null || this.page === this.pages.length - 1;
      }
      return true;
    }
  }, {
    key: 'createWizardHeader',
    value: function createWizardHeader() {
      var _this6 = this;

      // DMS

      if (!this.wizardNav) {
        return;
      }

      var currentPage = this.currentPage();
      currentPage.breadcrumb = currentPage.breadcrumb || 'default';
      if (currentPage.breadcrumb.toLowerCase() === 'none') {
        return;
      }
      this.wizardHeader = this.ce('wizardHeader', 'ul', {
        class: 'pagination'
      });

      var showHistory = currentPage.breadcrumb.toLowerCase() === 'history';
      (0, _each2.default)(this.pages, function (page, i) {
        // See if this page is in our history.
        if (showHistory && _this6.page !== i && _this6.history.indexOf(i) === -1) {
          return;
        }

        var pageButton = _this6.ce('pageButton', 'li', {
          class: i === _this6.page ? 'active' : '',
          style: i === _this6.page ? '' : 'cursor: pointer;'
        });

        // Navigate to the page as they click on it.
        if (_this6.page !== i) {
          _this6.addEventListener(pageButton, 'click', function (event) {
            event.preventDefault();
            _this6.setPage(i);
          });
        }

        var pageLabel = _this6.ce('pageLabel', 'span');
        var pageTitle = i === _this6.page || showHistory ? page.title : i + 1;
        if (!pageTitle) {
          pageTitle = i + 1;
        }
        pageLabel.appendChild(_this6.text(pageTitle));
        pageButton.appendChild(pageLabel);
        _this6.wizardHeader.appendChild(pageButton);
      });

      this.element.appendChild(this.wizardHeader);
    }
  }, {
    key: 'onSubmissionChange',
    value: function onSubmissionChange(changed) {
      _get(FormioWizard.prototype.__proto__ || Object.getPrototypeOf(FormioWizard.prototype), 'onSubmissionChange', this).call(this, changed);

      // Update Wizard Nav
      var nextPage = this.getNextPage(this.submission.data, this.page);
      if (this._nextPage != nextPage) {
        this.element.removeChild(this.wizardNav);
        this.createWizardNav();
        this.emit('updateWizardNav', { oldpage: this._nextPage, newpage: nextPage, submission: this.submission });
        this._nextPage = nextPage;
      }
    }
  }, {
    key: 'createWizardNav',
    value: function createWizardNav() {
      var _this7 = this;

      this.wizardNav = this.ce('wizardNav', 'ul', {
        class: 'list-inline'
      });

      // DMS

      /*each([
        {name: 'cancel',    method: 'cancel',   class: 'btn btn-default'},
        {name: 'previous',  method: 'prevPage', class: 'btn btn-primary'},
        {name: 'next',      method: 'nextPage', class: 'btn btn-primary'},
        {name: 'submit',    method: 'submit',   class: 'btn btn-primary'}
      ], (button) => {
        if (!this.hasButton(button.name)) {
          return;
        }
        let buttonWrapper = this.ce('wizardNavButton', 'li');
        let buttonProp = button.name + 'Button';
        this[buttonProp] = this.ce(buttonProp, 'button', {
          class: button.class + ' btn-wizard-nav-' + button.name
        });
        this[buttonProp].appendChild(this.text(this.t(button.name)));
        this.addEventListener(this[buttonProp], 'click', (event) => {
          event.preventDefault();
          this[button.method]();
        });
        buttonWrapper.appendChild(this[buttonProp]);
        this.wizardNav.appendChild(buttonWrapper);
      });*/

      if (this.buttons) {
        (0, _each2.default)(this.buttons, function (button) {
          if (!_this7.hasButton(button.name)) {
            return;
          }

          var buttonWrapper = _this7.ce('wizardNavButton', 'li');
          var buttonProp = button.name + 'Button';

          _this7[buttonProp] = _this7.ce(buttonProp, 'button', {
            class: button.class
          });

          if (button.custom) {
            _this7[buttonProp].appendChild(_this7.text(_this7.t(button.custom)));
          } else {
            _this7[buttonProp].appendChild(_this7.text(_this7.t(button.name)));
          }

          _this7.addEventListener(_this7[buttonProp], 'click', function (event) {
            event.preventDefault();
            _this7[button.method]();
          });

          buttonWrapper.appendChild(_this7[buttonProp]);

          _this7.wizardNav.appendChild(buttonWrapper);
        });
      } else {
        (0, _each2.default)([{ name: 'cancel', method: 'cancel', class: 'btn btn-default' }, { name: 'previous', method: 'prevPage', class: 'btn btn-primary' }, { name: 'next', method: 'nextPage', class: 'btn btn-primary' }, { name: 'submit', method: 'submit', class: 'btn btn-primary' }], function (button) {
          if (!_this7.hasButton(button.name)) {
            return;
          }

          var buttonWrapper = _this7.ce('wizardNavButton', 'li');
          var buttonProp = button.name + 'Button';

          _this7[buttonProp] = _this7.ce(buttonProp, 'button', {
            class: button.class
          });

          _this7[buttonProp].appendChild(_this7.text(_this7.t(button.name)));

          _this7.addEventListener(_this7[buttonProp], 'click', function (event) {
            event.preventDefault();
            _this7[button.method]();
          });

          buttonWrapper.appendChild(_this7[buttonProp]);
          _this7.wizardNav.appendChild(buttonWrapper);
        });
      }

      // Add the wizard navigation
      this.element.appendChild(this.wizardNav);
    }
  }, {
    key: 'getComponents',
    value: function getComponents() {
      // Set the components based on all components.
      var components = [];
      (0, _each2.default)(this.allComponents, function (comps) {
        components = components.concat(comps);
      });
      return components;
    }
  }]);

  return FormioWizard;
}(_formio2.default);

FormioWizard.setBaseUrl = _formio4.default.setBaseUrl;
FormioWizard.setApiUrl = _formio4.default.setApiUrl;
FormioWizard.setAppUrl = _formio4.default.setAppUrl;

module.exports = global.FormioWizard = FormioWizard;