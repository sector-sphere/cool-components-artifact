import { CoolHeaderMobile } from './cool-header-mobile/src/cool-header-mobile.js';

if (!window.customElements.get('cool-header-mobile')) {
  window.customElements.define('cool-header-mobile', CoolHeaderMobile);
}
