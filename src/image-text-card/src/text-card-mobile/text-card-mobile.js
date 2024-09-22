import { TextCardMobile } from './src/text-card-mobile.js';

if (!window.customElements.get('text-card-mobile')) {
  window.customElements.define('text-card-mobile', TextCardMobile);
}
