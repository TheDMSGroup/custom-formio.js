import { BaseComponent } from '../base/Base';
import Numeral from 'numeral';

export class SliderComponent extends BaseComponent {

  build() {

    this.createElement();

    if (this.component.label) {
      let label = this.ce('label', 'label', {
        class: 'control-label'
      });
      this.element.appendChild(label);
      label.innerText = this.component.label;
    }
  
    let output = this.ce('div', 'div', {class: 'slider-output', id: 'slider-output'});
    this.element.appendChild(output);    

    this.input = this.createInput(this.element);
    if (!this.label) {
      this.addInput(this.input, this.element);
    }
  
    let sliderLabels = this.ce('div', 'div', {class: 'sliderLabels', id: 'sliderLabels'});
    this.element.appendChild(sliderLabels);
    let minLabel = this.ce('div', 'div', {class: 'minLabel', id: 'minLabel'});
    let maxLabel = this.ce('div', 'div', {class: 'maxLabel', id: 'maxLabel'});

    sliderLabels.appendChild(minLabel);
    sliderLabels.appendChild(maxLabel);
    this.errorContainer = this.element;
    
    let min = this.component.min;
    let max = this.component.max;
    let step = this.component.step;

    output.innerText = this.input.value === min ? this.toCurrency(this.input.value) + ' or less' : this.input.value === max ? Numeral(this.input.value).format('$0,0') + ' or more' : Numeral(this.input.value - step).format('$0,0') + ' - ' + Numeral(this.input.value).format('$0,0');
    this.input.oninput = function() {
      output.innerText = this.value === min ? Numeral(this.value).format('$0,0') + ' or less' : this.value === max ? Numeral(this.value).format('$0,0') + ' or more' : Numeral(this.value - step).format('$0,0') + ' - ' + Numeral(this.value).format('$0,0');
    }
    
    this.setValue(this.input.value);

    minLabel.innerText = this.toCurrency(this.component.min);
    maxLabel.innerText = this.toCurrency(this.component.max);

  }

  createInput(container) {

    let input = this.ce('input', 'input', {
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

  toCurrency(amount) {
      return Numeral(amount).format('$0,0');
  }

  createElement() {
    let className = this.className;
    if (this.component.label) {
      className += ' range-slider';
    }
    this.element = this.ce('element', 'div', {
      id: this.id,
      class: className
    });
  }

}
