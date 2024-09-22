import {css} from 'lit';

export const headerStyles = css`

    * {
        font-family: 'Arial', sans-serif;
        color: #333333
    }

    ul, li {
        padding: 0;
        list-style: none;
    }

    a {
        color: #555555;
        text-decoration: none;
        font-weight: 500;
    }

    a:hover {
        color: #4a67a1;
    }

    *:focus {
        outline-color: #ffa500;
        outline-offset: 4px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 16px;
        background-color: #fff;
        border-bottom: 1px solid #F4F4F4;
        position: relative;
    }

    .header-logo img {
        width: 100px;
    }

    .header-items {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        gap: 24px;
    }

    .header-items__item--button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 1rem;
    }

    .header__submenu {
        position: absolute;
        display: none;
        top: var(--submenu-top-position, 84px);
        background-color: #f2f2f2;
        border: 1px solid #F4F4F4;
    }


    .header__submenu {
        display: none;
        flex-direction: column;
        background-color: var(--submenu-background-color, #fff);
        border-radius: 8px;
        border: 1px solid var(--submenu-border-color, #ccc);
        overflow: hidden;
    }

    .submenu-expanded {
        display: block;
    }

    .header__submenu__item {
        padding: 12px 20px;
        outline-offset: 0;

    }

    .header__submenu__item a {
        outline-offset: 8px;
    }

    .header__submenu__item:hover {
        background-color: var(--submenu-item-hover-color, #F4F4F4);
    }

    .header-config {
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        gap: 8px;
    }
    .header__language-menu {
        position: relative;
    }

    .header-login {
        color: #222;
        border: 1px solid #222;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
    }

    .header__language-submenu {
        right: 0;
        position: absolute;
    }

`;