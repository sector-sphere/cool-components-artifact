import { Input } from './src/cool-input.js';

if (!window.customElements.get('cool-input')) {
    window.customElements.define('cool-input', Input);
}
