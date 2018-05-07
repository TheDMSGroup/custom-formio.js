import maskInput from 'vanilla-text-mask';
import { createNumberMask } from 'text-mask-addons';
import _ from 'lodash';
import { TextFieldComponent } from '../textfield/TextField';
export class CurrencyComponent extends TextFieldComponent {
    setInputMask(input) {
        input.mask = maskInput({
            inputElement: input,
            mask: createNumberMask({
                prefix: this.prefix,
                suffix: this.suffix,
                thousandsSeparatorSymbol: _.get(this.component, 'thousandsSeparator', this.delimiter),
                decimalSymbol: _.get(this.component, 'decimalSymbol', this.decimalSeparator),
                decimalLimit: this.decimalLimit,
                allowNegative: _.get(this.component, 'allowNegative', true),
                allowDecimal: _.get(this.component, 'allowDecimal', true)
            })
        });
    }
}