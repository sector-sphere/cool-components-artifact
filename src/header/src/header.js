import { LitElement, html } from 'lit';
import { generalStyles } from './css/styles';

export class Header extends LitElement {
  static properties = {};

  static get styles() {
    return [generalStyles];
  }

  constructor() {
    super();
    this._resizeHandler = this._resizeHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._resizeHandler);
  }

  render() {
    const isMobile = window.screen.width < 768;
    return html`${isMobile ? this.getHeaderMobile() : this.getHeaderDesktop()}`;
  }

  getHeaderDesktop() {
    import('./components/cool-header-desktop.js');
    return html` <cool-header-desktop></cool-header-desktop>`;
  }

  getHeaderMobile() {
    import('./components/cool-header-mobile.js');
    return html` <cool-header-mobile></cool-header-mobile>`;
  }

  _resizeHandler() {
    this.requestUpdate();
  }
}
