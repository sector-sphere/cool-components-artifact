import { LitElement, html, css, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { generalStyles } from './css/styles';

export class Searchbar extends LitElement {
  static get styles() {
    return [generalStyles];
  }

  static get properties() {
    return {
      value: { type: String },
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
      <div class="foo">
        <button
          class=" ${classMap({ button: true, position: this._showInput })}"
          @click="${this._revealInput}"
        >
          <svg
            class=""
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
            ></path>
          </svg>
        </button>
        ${this._showInput
          ? html`<input
              type="text"
              id="search"
              name="search"
              placeholder="Search.."
            />`
          : nothing}
      </div>
    `;
  }

  _revealInput() {
    this._showInput = !this._showInput;
    console.log('reveal input', this._showInput);
    if (this._showInput === true) {
      this.showElement('search');
    }
    if (this._showInput === false) {
      this.hideElement('search');
    }
  }

  hideElement(elementId) {
    const element = this.shadowRoot.getElementById(elementId);
    console.log('hide element', element);

    element.classList.remove('fade-in');
    setTimeout(() => {
      element.style.display = 'none';
    }, 500); // Match the duration of the opacity transition
  }

  showElement(elementId) {
    const element = this.shadowRoot.getElementById(elementId);
    console.log('show element', element);
    element.style.display = 'block'; // Or 'inline', 'flex', etc.
    element.style.opacity = 0;
    // Ensure display property change takes effect before adding class
    element.style.transition = 'opacity 0.5s linear';
    element.style.opacity = 1;
    setTimeout(() => {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    }, 0);
  }
}
