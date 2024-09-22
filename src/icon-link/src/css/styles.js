import { css } from 'lit';

export const generalStyles = css`
  .icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-link-size, 100px);
    background-color: var(--icon-link-background-color, #005c83fd);
    height: var(--icon-link-size, 100px);
    border-radius: 50%;
    text-decoration: none;
  }

  .icon-link__text {
      font: var(--icon-link-font, normal 1.5rem/1.3 sans-serif);
      color: var(--icon-link-text-color, #fff);
  }
`;
