'use strict';
import Promise from "native-promise-only";
import FormioForm from './formio.form';
import Formio from './formio';
import FormioUtils from './utils';
import each from 'lodash/each';
import clone from 'lodash/clone';
export class FormioWizard extends FormioForm {
  constructor(element, options) {
    super(element, options);
    this.pages = [];
    this.page = 0;
    this.history = [];
    this.allComponents = {};
    this._nextPage = 1;
    this.buttons = [];
  }

  setPage(num) {
    if (num >= 0 && num < this.pages.length) {
      this.page = num;
      this.buttons = [];
      let page = this.currentPage();
      this.buttons = page.buttons;
      return super.setForm(this.currentPage()).then(() => {
        // Save the components for when we finally submit.
        this.allComponents[this.page] = clone(this.components);
      });
    }
    return Promise.reject('Page not found');
  }

  getNextPage(data, currentPage) {
    let form = this.pages[currentPage];
    // Check conditional nextPage
    if (form) {
      let page = ++currentPage;
      if(form.nextPage) {
        // Allow for script execution.
        if (typeof form.nextPage === 'string') {
          try {
            let next = page;
            eval('(function(data) {' + form.nextPage.toString() + '})(data)');
            page = next;
            if (!isNaN(parseInt(page, 10)) && isFinite(page)) {
              return page;
            }
            if (typeof page !== 'string') {
              return page;
            }

            // Assume they passed back the key of the page to go to.
            return this.getPageIndexByKey(page);
          }
          catch (e) {
            console.warn('An error occurred in a custom nextPage function statement for component ' + form.key, e);
            return page;
          }
        }
        // Or use JSON Logic.
        else {
          let result = FormioUtils.jsonLogic.apply(form.nextPage, {
            data: data,
            page: page,
            form: form
          });
          let newPage = parseInt(result, 10);
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

  getPreviousPage() {
    let prev = this.history.pop();
    if(typeof prev !== 'undefined') {
      return prev;
    }

    return this.page - 1;
  }

  // DMS

  nextPage() {
    // DMS

    for (var i=0; i < this.components.length; i++) {
      if (this.components[i].type === 'checkbox' && this.components[i].component.validate.required && (this.components[i].value === null || !this.components[i].value)) {
        delete this.submission.data[this.components[i].component.key];
      }

      i++;
    }

    // Validate the form builed, before go to the next page
    if (this.checkValidity(this.submission.data, true)) {
      // DMS
      this.checkData(this.submission.data, true);
      if (this.beforeNextPageCallback) {
          this.beforeNextPageCallback(this, this.submission.data, this.nextPageWithValidation);
      } else {
          return this.beforeNext().then(() => {
              this.history.push(this.page);
              return this.setPage(this.getNextPage(this.submission.data, this.page)).then(() => {
                  this._nextPage = this.getNextPage(this.submission.data, this.page);
                  this.emit('nextPage', {page: this.page, submission: this.submission});
              });
          });
      }
    }
    else {
      return Promise.reject(this.showErrors());
    }
  }

  // DMS

  nextPageWithValidation(thisInstance, additionalFieldsValidationData) {
    //console.log('nextPageWithValidation');

    //console.log('----- ----- ----- ----- -----');
    //console.log(thisInstance);

    //console.log('additionalFieldsValidationData:');
    //console.dir(additionalFieldsValidationData);

    //console.log('----- ----- ----- ----- -----');

    let proceedToNextPage = false;

    // If no data given, then proceed to the next page.
    if (typeof additionalFieldsValidationData === 'undefined') {
      proceedToNextPage = true;
    }

    if (additionalFieldsValidationData) {
      let currentObj;

      let valid;
      let message;

      let allValid = 1;

      for (var currentKey in additionalFieldsValidationData) {
        currentObj = additionalFieldsValidationData[currentKey];

        valid = currentObj.valid;
        message = currentObj.message;

        if (!valid) {
            thisInstance.getComponent(
            currentKey,
            function(component) {
              component.createErrorElement();
              component.addInputError(message);
            }
          );

          allValid = 0;
        }
      }

      if (allValid) {
          proceedToNextPage = true;
      }
    }

    //console.log('proceedToNextPage' + ' = ' + proceedToNextPage);

    if (proceedToNextPage) {
      thisInstance.checkData(thisInstance.submission.data, true);

      return thisInstance.beforeNext().then(() => {
        thisInstance.history.push(thisInstance.page);

        return thisInstance.setPage(thisInstance.getNextPage(thisInstance.submission.data, thisInstance.page)).then(() => {
          thisInstance._nextPage = thisInstance.getNextPage(thisInstance.submission.data, thisInstance.page);
          thisInstance.emit('nextPage', {page: thisInstance.page, submission: thisInstance.submission});
        });
      });
    } else {
      return Promise.reject(thisInstance.showErrors());
    }
  }

  prevPage() {
    let prevPage = this.getPreviousPage();
    return this.setPage(prevPage).then(() => {
      this.emit('prevPage', {page: this.page, submission: this.submission});
    });
  }

  cancel() {
    super.cancel();
    this.history = [];
    return this.setPage(0);
  }

  getPageIndexByKey(key) {
    let pageIndex = 0;
    each(this.pages, (_page, index) => {
      if (_page.key === key) {
        pageIndex = index;
        return false;
      }
    });
    return pageIndex;
  }

  getPage(pageNum) {
    if ((pageNum >= 0) && (pageNum < this.pages.length)) {
      return this.pages[pageNum];
    }
    return this.pages.length ? this.pages[0] : {components: []};
  }

  currentPage() {
    return this.getPage(this.page);
  }

  setForm(form) {
    this.pages = [];
    this.buttons = [];
    this.wizard = form;

    each(form.components, (component) => {
      if (component.type === 'panel') {
        this.pages.push(component);
      }
      else if (component.key) {
        this.allComponents[component.key] = this.addComponent(component, this.element, this.data);
      }
    });
    return this.setPage(this.page);
  }

  build() {
    this.createWizardHeader();
    super.build();
    this.createWizardNav();
  }

  hasButton(name) {
    if (name === 'previous') {
      return (this.page > 0);
    }
    let nextPage = this.getNextPage(this.submission.data, this.page);
    if (name === 'next') {
      return (nextPage !== null) && (nextPage < this.pages.length);
    }
    if (name === 'submit') {
      return (nextPage === null) || (this.page === (this.pages.length - 1));
    }
    return true;
  }

  createWizardHeader() {

    let currentPage = this.currentPage();
    currentPage.breadcrumb = currentPage.breadcrumb || 'default';
    if (currentPage.breadcrumb.toLowerCase() === 'none') {
      return;
    }
    this.wizardHeader = this.ce('wizardHeader', 'ul', {
      class: 'pagination'
    });

    let showHistory = (currentPage.breadcrumb.toLowerCase() === 'history');
    each(this.pages, (page, i) => {
      // See if this page is in our history.
      if (showHistory && ((this.page !== i) && (this.history.indexOf(i) === -1))) {
        return;
      }

      let pageButton = this.ce('pageButton', 'li', {
        class: (i === this.page) ? 'active' : '',
        style: (i === this.page) ? '' : 'cursor: pointer;'
      });

      // Navigate to the page as they click on it.
      if (this.page !== i) {
        this.addEventListener(pageButton, 'click', (event) => {
          event.preventDefault();
          this.setPage(i);
        });
      }

      let pageLabel = this.ce('pageLabel', 'span');
      let pageTitle = ((i === this.page) || showHistory) ? page.title : (i + 1);
      if (!pageTitle) {
        pageTitle = (i + 1);
      }
      pageLabel.appendChild(this.text(pageTitle));
      pageButton.appendChild(pageLabel);
      this.wizardHeader.appendChild(pageButton);
    });

    this.element.appendChild(this.wizardHeader);
  }

  onChange(changed) {
    super.onChange(changed);

    // Only rebuild if there is a page change.
    let pageIndex = 0;
    let rebuild = false;
    each(this.wizard.components, (component) => {
      if (component.type !== 'panel') {
        return;
      }

      if (FormioUtils.hasCondition(component)) {
        let hasPage = this.pages && this.pages[pageIndex] && (this.pageId(this.pages[pageIndex]) === this.pageId(component));
        let shouldShow = FormioUtils.checkCondition(component, this.data, this.data);
        if ((shouldShow && !hasPage) || (!shouldShow && hasPage)) {
          rebuild = true;
          return false;
        }
        if (shouldShow) {
          pageIndex++;
        }
      }
      else {
        pageIndex++;
      }
    });

    if (rebuild) {
      this.setForm(this.wizard);
    }

    // Update Wizard Nav
    let nextPage = this.getNextPage(this.submission.data, this.page);
    if (this._nextPage != nextPage) {
      this.element.removeChild(this.wizardNav);
      this.createWizardNav();
      this.emit('updateWizardNav', {oldpage: this._nextPage, newpage: nextPage, submission: this.submission});
      this._nextPage = nextPage;
    }
  }

  pageId(page) {
    if (page.key) {
      return page.key;
    }
    else if (
      page.components &&
      page.components.length > 0
    ) {
      return this.pageId(page.components[0]);
    }
    else {
      return page.title;
    }
  }

  createWizardNav() {
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
        each(this.buttons, (button) => {
            if (!this.hasButton(button.name)) {
                return;
            }

            let buttonWrapper = this.ce('wizardNavButton', 'li');
            let buttonProp = button.name + 'Button';

            this[buttonProp] = this.ce(buttonProp, 'button', {
                class: button.class
            });

            if (button.custom) {
                this[buttonProp].appendChild(this.text(this.t(button.custom)));
            } else {
                this[buttonProp].appendChild(this.text(this.t(button.name)));
            }

            this.addEventListener(this[buttonProp], 'click', (event) => {
                event.preventDefault();
                this[button.method]();
            });

            buttonWrapper.appendChild(this[buttonProp]);

            this.wizardNav.appendChild(buttonWrapper);
        });
    } else {
        each([
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
                class: button.class
            });

            this[buttonProp].appendChild(this.text(this.t(button.name)));

            this.addEventListener(this[buttonProp], 'click', (event) => {
                event.preventDefault();
                this[button.method]();
            });

            buttonWrapper.appendChild(this[buttonProp]);
            this.wizardNav.appendChild(buttonWrapper);
        });
    }

    // Add the wizard navigation
    this.element.appendChild(this.wizardNav);
  }
}

FormioWizard.setBaseUrl = Formio.setBaseUrl;
FormioWizard.setApiUrl = Formio.setApiUrl;
FormioWizard.setAppUrl = Formio.setAppUrl;

module.exports = global.FormioWizard = FormioWizard;