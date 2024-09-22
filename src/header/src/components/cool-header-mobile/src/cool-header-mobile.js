import {LitElement, html} from 'lit';

export class CoolHeaderMobile extends LitElement {
  static properties = {

  };

  static get styles() {
    return [];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="header">
        <div class="header-logo">
          <a href="/"><img src="https://via.placeholder.com/150" alt="Logo"></a>
        </div>
        <div class="header-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    `;
  }
}