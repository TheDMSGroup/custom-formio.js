import {
    BaseComponent
} from '../base/Base';
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

        let output = this.ce('div', 'div', {
            class: 'slider-output',
            id: 'slider-output'
        });
        this.element.appendChild(output);

        this.input = this.createInput(this.element);
        if (!this.label) {
            this.addInput(this.input, this.element);
        }

        let sliderLabels = this.ce('div', 'div', {
            class: 'sliderLabels',
            id: 'sliderLabels'
        });
        this.element.appendChild(sliderLabels);
        let minLabel = this.ce('div', 'div', {
            class: 'minLabel',
            id: 'minLabel'
        });
        let maxLabel = this.ce('div', 'div', {
            class: 'maxLabel',
            id: 'maxLabel'
        });

        sliderLabels.appendChild(minLabel);
        sliderLabels.appendChild(maxLabel);
        this.errorContainer = this.element;

        let min = this.component.min;
        let max = this.component.max;
        let step = this.component.step;
        let sliderType = this.component.sliderType;

        if (sliderType === 'currency') {
            output.innerText = this.input.value === '0' ? '$0' : this.input.value === min  ? this.toCurrency(this.input.value) + ' or less' : this.input.value === max ? this.toCurrency(this.input.value) + ' or more' : this.toCurrency(this.input.value - step) + ' - ' + this.toCurrency(this.input.value);
        } else if (sliderType === 'interest') {
            output.innerText = this.input.value === '0' ? '0%' : this.input.value === min  ? this.toInterest(this.input.value) + ' or less' : this.input.value === max ? this.toInterest(this.input.value) + ' or more' : this.toInterest(this.input.value - step) + ' - ' + this.toInterest(this.input.value);
        }

        this.input.oninput = function () {
            if (sliderType === 'interest') {
                output.innerText = this.value === '0' ? '0%' : this.value === min ? Numeral(this.value).format('0.00') + '%' + ' or less' : this.value === max ? Numeral(this.value).format('0.00') + '%' + ' or more' : Numeral(this.value - step).format('0.00') + '%' + ' - ' + Numeral(this.value).format('0.00') + '%';
            } else if (sliderType === 'currency') {
                output.innerText = this.value === '0' ? '$0' : this.value === min ? Numeral(this.value).format('$0,0') + ' or less' : this.value === max ? Numeral(this.value).format('$0,0') + ' or more' : Numeral(this.value - step).format('$0,0') + ' - ' + Numeral(this.value).format('$0,0');
            }
        };

        this.input.onchange = function () {
            if (sliderType === 'interest') {
                output.innerText = this.value === '0' ? '0%' : this.value === min ? Numeral(this.value).format('0.00') + '%' + ' or less' : this.value === max ? Numeral(this.value).format('0.00') + ' or more' : Numeral(this.value - step).format('0.00') + '%' + ' - ' + Numeral(this.value).format('0.00') + '%';
            } else if (sliderType === 'currency') {
                output.innerText = this.value === '0' ? '$0' : this.value === min ? Numeral(this.value).format('$0,0') + ' or less' : this.value === max ? Numeral(this.value).format('$0,0') + ' or more' : Numeral(this.value - step).format('$0,0') + ' - ' + Numeral(this.value).format('$0,0');
            }
        };

        if (sliderType === 'currency') {
            this.setValue(this.input.value);
        } else if (sliderType === 'interest') {
            this.setValue(Numeral(this.input.value).format('0.00'));
        }

        if (sliderType === 'currency') {
            minLabel.innerText = this.toCurrency(this.component.min);
            maxLabel.innerText = this.toCurrency(this.component.max);
        } else if (sliderType === 'interest') {
            minLabel.innerText = this.toInterest(this.component.min);
            maxLabel.innerText = this.toInterest(this.component.max);
        }

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

    toInterest(amount) {
        return Numeral(amount).format('0.00') + '%';
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
