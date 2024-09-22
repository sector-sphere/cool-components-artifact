import { ImageTextCard } from './src/image-text-card.js';

if (!window.customElements.get('image-text-card')) {
  window.customElements.define('image-text-card', ImageTextCard);
}