import { LitElement, html } from 'lit';
import { generalStyles } from './css/styles';

/**
 * Primary UI component for user interaction
 */
export class ContactCard extends LitElement {
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
        <button class="cool-card__card">
          <header class="cool-card__card__header">
            <div class="cool-card__card__header__element">
              <img
                class="cool-card__card__header__element__image"
                src="https://picsum.photos/200/200"
                alt="random"
              />
            </div>
            <h2 class="cool-card__card__header__title">Título de la card</h2>
            <span class="cool-card__card__header__pretitle">subtitle</span>
          </header>
          <div class="cool-card__card__body">
            <ul class="cool-card__card__body__list">
              <li class="cool-card__card__body__list__item">item 1eiaeiehriorr</li>
              <li class="cool-card__card__body__list__item">item 2rparjorjr</li>
              <li class="cool-card__card__body__list__item">item 3roaropnaoprnroprnpor</li>
            </ul>
          </div>
          <footer class="cool-card__card__footer">Este es el footer</footer>
        </button>
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
  }
}
