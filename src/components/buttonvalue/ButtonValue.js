import { ButtonComponent } from '../button/Button';
export class ButtonValueComponent extends ButtonComponent {
  elementInfo() {
    let info = super.elementInfo();
    info.type = 'button';
    info.attr.type = (this.component.action === 'submit') ? 'submit' : 'button';
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
    this.addEventListener(this.element, 'click', (event) => {
      switch (this.component.action) {
        case 'submit':
          event.preventDefault();
          event.stopPropagation();
          this.emit('submitButton');
          this.setValue(this.component.value);
          break;
        case 'event':
          this.events.emit(this.component.event, this.data);
          this.emit('customEvent', {
            type: this.component.event,
            component: this.component,
            data: this.data,
            event: event
          });
          this.setValue(this.component.value);
          break;
        case 'reset':
          this.emit('resetForm');
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
