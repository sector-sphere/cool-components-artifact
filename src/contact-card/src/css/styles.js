import { css } from 'lit';

export const generalStyles = css`
  .cool-card {
    height: 365px;
  }

  .cool-card:focus-within .cool-card__card {
    border-color: #005c83fd;
    outline: none;
  }

  .cool-card__card {
    background-color: var(--card-background-color, #fff);
    border: 1px solid var(--card-border-color, #ccc);
    padding: 0;
    color: var(--card-text-color, #222);
    cursor: pointer;
    border-radius: 10px;
    font: var(--card-font, normal 1rem/1.5rem sans-serif);
  }

  .cool-card__card:hover .cool-card__card__image::before {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .cool-card__card__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(234deg, #0cf4b5 0%, #678664 92%);
    color: #fff;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }

  .cool-card__card__header__element {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
  }

  .cool-card__card__header__element__image {
    max-height: 150px;
    object-fit: fill;
  }

  .cool-card__card:hover .cool-card__card__header {
    transform: scale(0.9) translateY(-40px);
  }

  .cool-card__card__image::before {
    content: '';
    background-color: var(--card-background-color, #005c83fd);
    opacity: 0.4;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  .cool-card__card__body {
    padding: 0 12px;
    margin-top: -12px;
    text-align: left;
    margin-bottom: 50px;
    position: relative;
  }

  .cool-card__card__body__text {
    font-size: 0.75rem;
    font-weight: 300;
  }

  .cool-card__card__header__title {
    font-size: 1.25rem;
    margin: 4px 0;
  }
  .cool-card__card__header__pretitle {
    font-size: 1rem;
    margin: 0;
  }

  .cool-card__card__footer {
    background: linear-gradient(234deg, #0cf4b5 0%, #678664 92%);
    text-align: left;
    padding: 8px 24px;
    font-size: 0.75rem;
    transition: all 0.3s ease-in-out;
    border-radius: 0 0 10px 10px;
  }
  .cool-card__card:hover .cool-card__card__footer {
    border-radius: 10px;
    transform: scale(1.2) translateY(10px);
  }
`;
