import { LitElement, html } from 'lit';
import { generalStyles } from './text-card-mobile.styles.js';

/**
 * Primary UI component for user interaction
 */
export class TextCardMobile extends LitElement {
  static get styles() {
    return [generalStyles];
  }

  render() {
    return html`
      <article
        id="${this.id}"
        class="cool-card"
        @click="${this._handleButtonClick}"
        ?disabled="${this.disabled}"
      >
        <a class="cool-card__card" href="/">
          <img
            class="cool-card__card__image"
            src="https://placehold.co/200x200"
            alt="random"
          />
          <div class="cool-card__card__body">
            <div class="element"></div>
            <span class="cool-card__card__body__text">${this.tag}</span>
            <h2 class="cool-card__card__body__title">${this.title}</h2>
            <span class="cool-card__card__body__description">
              ${this.subtitle}
            </span>
          </div>
          <footer class="cool-card__card__footer">Este es el footer</footer>
        </a>
      </article>
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
    const btn = this.shadowRoot.querySelector('.cool-card__card');
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
