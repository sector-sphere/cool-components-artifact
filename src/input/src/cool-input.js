import { LitElement, html } from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js'
import { generalStyles } from './css/styles';

export class Input extends LitElement {
  static get styles() {
    return [generalStyles];
  }

  static get properties() {
    return {
      value: { type: String },
      name: { type: String },
      label: { type: String },
      _showInput: { type: Boolean, state: true },
    };
  }
  constructor() {
    super();
    this.value = '';
    this._showInput = false;
  }

  render() {
    return html`
      ${this._getLabel()}
      <div class="cool-input__container">
        ${this._getInput()}
      </div>
    `;
  }
  _getLabel() {
    return html`
      <label
        for="cool_input-${this.name}"
        class="cool-input__label"
      >
        ${this.label}
      </label>`
  }

  _getInput() {
    return html`<input 
      id="cool_input-${this.name}" 
      name="${ifDefined(this.name)}" 
      class="cool-input__input" 
      type="${this.type || 'text'}" 
    />`
  }
}
