import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { generalStyles } from './css/styles';

export class ProgressBar extends LitElement {
  static properties = {
    radius: { type: Number },
    stroke: { type: Number },
    progress: { type: Number },
  };

  static get styles() {
    return [generalStyles];
  }
  constructor() {
    super();
    this.radius = 50; // Default values
    this.stroke = 4;
    this.progress = 0; // Percentage of the circle to fill
    this.strokeColor = 'black';
    this._offset = 0;
    this._circleconfig = {
      circumference: 2,
      normalizedRadius: 1,
      offset: 50,
    };
    
  }

  render() {
    this._circleconfig = this._calculateCircle();
    return html`
      <svg height="${this.radius * 2}" width="${this.radius * 2}">
        <circle
          stroke="${this.strokeColor}"
          fill="transparent"
          stroke-width="${this.stroke}"
          stroke-dasharray="${this._circleconfig.circumference} ${this
            ._circleconfig.circumference}"
          style="stroke-dashoffset: ${this._circleconfig.offset};"
          r="${this._circleconfig.normalizedRadius}"
          cx="${this.radius}"
          cy="${this.radius}"
        />
      </svg>
    `;
  }

  async firstUpdated() {
    super.firstUpdated();
    await this.updateComplete;
    this._circleconfig = this._calculateCircle();
  }

  async updated(changedProperties) {
    super.updated(changedProperties);
    await this.updateComplete;
    if (changedProperties.has('progress')) {
      this._circleconfig = this._calculateCircle();
    }
  }

  _calculateCircle() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      circumference: circumference,
      normalizedRadius: normalizedRadius,
      offset: circumference - (this.progress / 100) * circumference,
    };
  }
}
