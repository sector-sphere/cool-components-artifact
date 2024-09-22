import { Button } from './src/cool-button.js';

if (!window.customElements.get('cool-button')) {
  window.customElements.define('cool-button', Button);
}
