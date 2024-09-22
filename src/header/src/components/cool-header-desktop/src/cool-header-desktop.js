import { LitElement, html } from 'lit';
import { headerStyles } from './cool-header.styles.js';
import { CoolHeaderDesktopController } from './cool-header-desktop.controller.js';
import { MENU_ELEMENTS, MENU_ITEMS } from '../../../constants/header.constants.js';

export class CoolHeaderDesktop extends LitElement {
  static properties = {
    _activeLanguage: { type: String },
  };

  static get styles() {
    return [headerStyles];
  }

  constructor() {
    super();
    this._activeLanguage = 'English';
    this.headerController = new CoolHeaderDesktopController(this);
    this.headerItems = MENU_ITEMS;
  }

  render() {
    return html`
      <nav class="header">
        <div class="header-logo">
          <a href="/"
          ><img src="https://placehold.co/100x50" alt="Logo"
          /></a>
        </div>
        <ul class="header-items">${this._getHeaderItems()}</ul>
        <ul class="header-config">
          <li>
            <button class="header-login">
              Login
            </button>
          </li>
          <li class="header-language">${this._getLanguageMenuItem()}</li>
        </ul>
      </nav>
    `;
  }

  _getHeaderItems() {
    return html` ${this.headerItems.map((item) => {
      return html`
        <li class="header-items__item">
          <button
            class="header-items__item--button"
            id="${item.id}"
            @click="${() => this.headerController._expandSubMenu(item.id)}"
          >
            ${item.translation}
          </button>
          ${this._htmlSubMenu()}
        </li>
      `;
    })}`;
  }

  _getLanguageMenuItem() {
    return html`
      <li class="header__language-menu">
        <button
          class="header__language-button"
          id="language-button"
          @click="${() =>
            this.headerController._expandSubMenu('language-button')}"
        >
          ${this._activeLanguage}
        </button>
        ${this._htmlLanguageSubMenu()}
      </li>
    `;
  }

  _htmlLanguageSubMenu() {
    return html`
      <ul class="header__submenu header__language-submenu">
        <li class="header__submenu__item">
          <a href="" class="header__language-submenu__item__link">About</a>
        </li>
        <li class="header__submenu__item">
          <a href="" class="header__language-submenu__item__link">Services</a>
        </li>
        <li class="header__submenu__item">
          <a href="" class="header__language-submenu__item__link">Contact</a>
        </li>
      </ul>
    `;
  }

  _htmlSubMenu() {
    return html`
      <ul class="header__submenu">
        <li class="header__submenu__item">
          <a href="" class="header__submenu__item__link">About</a>
        </li>
        <li class="header__submenu__item">
          <a href="" class="header__submenu__item__link">Services</a>
        </li>
        <li class="header__submenu__item">
          <a href="" class="header__submenu__item__link">Contact</a>
        </li>
      </ul>
    `;
  }

  _getSubMenu() {
    const submenu = this.shadowRoot.querySelector('.header-submenu');
    console.log(submenu);

    if (submenu && submenu.style.display === 'block') {
      submenu.style.display = 'hidden';
    } else {
      submenu.style.display = 'block';
    }
  }
}
