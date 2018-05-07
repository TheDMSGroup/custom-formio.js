import _ from 'lodash';

import { BaseComponent } from '../base/Base';
export class CheckBoxComponent extends BaseComponent {
  elementInfo() {
    let info = super.elementInfo();
    info.type = 'input';
    info.changeEvent = 'click';
    info.attr.type = this.component.inputType;
    info.attr.class = '';
    if (this.component.name) {
      info.attr.name = 'data[' + this.component.name + ']';
    }
    info.attr.value = this.component.value ? this.component.value : 0;
    return info;
  }

  build() {
    if (!this.component.input) {
      return;
    }
    this.createElement();
    this.input = this.createInput(this.element);
    this.createLabel(this.element, this.input);
    if (!this.label) {
      this.addInput(this.input, this.element);
    }
    if (this.options.readOnly) {
      this.disabled = true;
    }
  }

  createElement() {
    let className = this.className;
    if (this.component.label) {
      className += ' checkbox';
    }
    this.element = this.ce('element', 'div', {
      id: this.id,
      class: className
    });
  }

  labelOnTheTopOrLeft() {
    return ['top', 'left'].includes(this.component.labelPosition);
  }

  labelOnTheTopOrBottom() {
    return ['top', 'bottom'].includes(this.component.labelPosition);
  }

  setInputLabelStyle(label) {
    if (this.component.labelPosition === 'left') {
      _.assign(label.style, {
        textAlign: 'center',
        paddingLeft: 0
      });
    }

    if (this.labelOnTheTopOrBottom()) {
      _.assign(label.style, {
        display: 'block',
        textAlign: 'center',
        paddingLeft: 0
      });
    }
  }

  setInputStyle(input) {
    if (this.component.labelPosition === 'left') {
      _.assign(input.style, {
        position: 'initial',
        marginLeft: '7px'
      });
    }

    if (this.labelOnTheTopOrBottom()) {
      _.assign(input.style, {
        width: '100%',
        position: 'initial',
        marginLeft: 0
      });
    }
  }

  isEmpty(value) {
    return super.isEmpty(value) || value === false;
  }

  createLabel(container, input) {
    if (!this.component.label) {
      return null;
    }
    this.label = this.ce('label', 'label', {
      class: 'control-label'
    });

    // Create the SPAN around the textNode for better style hooks
    this.labelSpan = this.ce('labelSpan', 'span');

    if (this.info.attr.id) {
      this.label.setAttribute('for', this.info.attr.id);
    }
    this.addInput(input, this.label);
    if (!this.options.inputsOnly) {
      // DMS

      //this.labelSpan.appendChild(this.text(this.component.label));
      //this.label.appendChild(this.labelSpan);

      var labelElement = document.createElement('div');
      labelElement.innerHTML = this.component.label;
      this.label.appendChild(labelElement);
    }
    container.appendChild(this.label);
  }

  createInput(container) {
    if (!this.component.input) {
      return;
    }
    let input = this.ce('input', this.info.type, this.info.attr);
    this.errorContainer = container;
    return input;
  }

  updateValueByName() {
    const component = this.getRoot().getComponent(this.component.name);

    if (component) {
      component.setValue(this.component.value, { changed: true });
    } else {
      this.data[this.component.name] = this.component.value;
    }
  }

  addInputEventListener(input) {
    this.addEventListener(input, this.info.changeEvent, () => {
      // If this input has a "name", then its other input elements are elsewhere on
      // the form. To get the correct submission object, we need to refresh the whole
      // data object.
      if (this.component.name) {
        this.updateValueByName();
        this.emit('refreshData');
      }

      this.updateValue();
    });
  }

  getValueAt(index) {
    return !!this.inputs[index].checked;
  }

  setValue(value, noUpdate, noValidate) {
    this.value = value;
    if (!this.input) {
      return;
    }
    if (value === 'on') {
      this.input.value = 1;
      this.input.checked = 1;
    } else if (value === 'off') {
      this.input.value = 0;
      this.input.checked = 0;
    } else if (value) {
      this.input.value = 1;
      this.input.checked = 1;
    } else {
      this.input.value = 0;
      this.input.checked = 0;
    }
    if (!noUpdate) {
      this.updateValue(noValidate);
    }
  }

  getRawValue() {
    if (this.component.name) {
      return this.data[this.component.name];
    }

    return super.getRawValue();
  }

  getView(value) {
    return value ? 'Yes' : 'No';
  }
}