import { ContactCard } from './src/cool-contact-card.js';

if (!window.customElements.get('cool-contact-card')) {
  window.customElements.define('cool-contact-card', ContactCard);
}
