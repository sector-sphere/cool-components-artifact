import { LitElement, html } from 'lit';
import { generalStyles } from './css/styles';

/**
 * Primary UI component for user interaction
 */
export class Button extends LitElement {
  static get styles() {
    return [generalStyles];
  }

  render() {
    return html`
      <button
        id="${this.id}"
        class="cool-button"
        @click="${this._handleButtonClick}"
        ?disabled="${this.disabled}"
      >
        <span class="span-el"></span>
        ${this.text}
      </button>
    `;
  }

  static get properties() {
    return {
      disabled: { type: Boolean, reflect: true },
      selected: { type: Boolean, reflect: true },
      // eslint-disable-next-line lit/no-native-attributes
      id: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.disabled = false;
  }

  _handleButtonClick() {
    this.selected = !this.selected;
    const event = new CustomEvent('statusChange', {
      detail: { [this.id]: this.selected },
    });
    this.dispatchEvent(event);
    this.createRipple(event);
  }

  createRipple(e) {
    const btn = this.shadowRoot.querySelector('.cool-button');
    // Create span element
    let ripple = this.shadowRoot.createElement('span');
    console.log(ripple);

    // Add ripple class to span
    ripple.classList.add('ripple');

    // Add span to the button
    this.appendChild(ripple);

    // Get position of X
    let x = e.clientX - e.target.offsetLeft;

    // Get position of Y
    let y = e.clientY - e.target.offsetTop;

    // Position the span element
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
      ripple.remove();
    }, 300);
  }
}
