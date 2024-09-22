import { ProgressBar } from './src/cool-progress-bar.js';

if (!window.customElements.get('cool-progress-bar')) {
    window.customElements.define('cool-progress-bar', ProgressBar);
}
