import _ from 'lodash';
import { BaseComponent } from '../base/Base';
import FormioUtils from '../../utils';

export class ButtonComponent extends BaseComponent {
  elementInfo() {
    const info = super.elementInfo();
    info.type = 'button';
    info.attr.type = ['submit', 'saveState'].includes(this.component.action) ? 'submit' : 'button';
    this.component.theme = this.component.theme || 'default';
    if (this.component.size) {
      info.attr.class += ` btn-${this.component.size}`;
    }
    if (this.component.block) {
      info.attr.class += ' btn-block';
    }
    info.attr.class = `btn btn-${this.component.theme}`;
    if (this.component.block) {
      info.attr.class += ' btn-block';
    }
    if (this.component.customClass) {
      info.attr.class += ` ${this.component.customClass}`;
    }
    return info;
  }

  set loading(loading) {
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

  set disabled(disabled) {
    super.disabled = disabled;
    this.element.disable = disabled;
  }

  build() {
    this.element = this.ce('element', this.info.type, this.info.attr);
    if (this.component.label) {
      this.label = this.text(this.component.label);
      this.element.appendChild(this.label);
    }
    if (this.component.action === 'submit') {
      this.on('submitButton', () => {
        this.loading = true;
        this.disabled = true;
      }, true);
      this.on('submitDone', () => {
        this.loading = false;
        this.disabled = false;
      }, true);
      this.on('error', () => {
        this.loading = false;
      }, true);
    }
    this.addEventListener(this.element, 'click', event => {
      switch (this.component.action) {
        case 'submit':
          event.preventDefault();
          event.stopPropagation();
          this.emit('submitButton', {
            state: this.component.state || 'submitted'
          });
          break;
        case 'event':
          this.emit(this.component.event, this.data);
          this.events.emit(this.component.event, this.data);
          this.emit('customEvent', {
            type: this.component.event,
            component: this.component,
            data: this.data,
            event: event
          });
          break;
        case 'reset':
          this.emit('resetForm');
          break;
        case 'delete':
          this.emit('deleteSubmission');
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
}