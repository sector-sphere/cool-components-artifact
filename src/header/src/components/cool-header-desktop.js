import { CoolHeaderDesktop } from './cool-header-desktop/src/cool-header-desktop.js';

if (!window.customElements.get('cool-header-desktop')) {
  window.customElements.define('cool-header-desktop', CoolHeaderDesktop);
}
