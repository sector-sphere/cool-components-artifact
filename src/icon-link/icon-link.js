import { IconLink } from './src/icon-link.js';

if (!window.customElements.get('cool-icon-link')) {
    window.customElements.define('cool-icon-link', IconLink);
}
