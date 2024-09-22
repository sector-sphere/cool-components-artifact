import { Header } from './src/header.js';

if (!window.customElements.get('cool-header')) {
    window.customElements.define('cool-header', Header);
}
