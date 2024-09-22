import { LitElement, html } from 'lit';

export class ImageTextCard extends LitElement {
  static get styles() {
    return [];
  }

  constructor() {
    super();
    this._handleResize = this._handleResize.bind(this);
  }

  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      subtitle: { type: String },
      tag: { type: String },
      minutes: { type: Number },
      detailUrl: { type: String },
    };
  }

  render() {
    const isMobile = this._isSmallResolution();

    return html`${isMobile ? this._renderMobile() : this._renderDesktop()}`;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    this.requestUpdate();
  }

  _isSmallResolution() {
    return window.innerWidth < 768;
  }

  _renderMobile() {
    import('./text-card-mobile/text-card-mobile.js');
    return html` <text-card-mobile
      .image=${this.image}
      .title=${this.title}
      .subtitle=${this.subtitle}
      .tag=${this.tag}
      .minutes=${this.minutes}
      .detailUrl=${this.detailUrl}
    >
      >
    </text-card-mobile>`;
  }

  _renderDesktop() {
    import('./text-card-desktop/text-card-desktop.js');
    return html` <text-card-desktop
      .image=${this.image}
      .title=${this.title}
      .subtitle=${this.subtitle}
      .tag=${this.tag}
      .minutes=${this.minutes}
      .detailUrl=${this.detailUrl}
    ></text-card-desktop>`;
  }
}
