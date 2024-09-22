import { Searchbar } from './src/cool-searchbar.js';

if (!window.customElements.get('cool-searchbar')) {
    window.customElements.define('cool-searchbar', Searchbar);
}
