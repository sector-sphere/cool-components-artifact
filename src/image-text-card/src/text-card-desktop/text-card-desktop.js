import { TextCardDesktop } from './src/text-card-desktop.js';

if (!window.customElements.get('text-card-desktop')) {
  window.customElements.define('text-card-desktop', TextCardDesktop);
}
