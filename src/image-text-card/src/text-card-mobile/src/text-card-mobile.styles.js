import { css } from 'lit';

export const generalStyles = css`
    .cool-card {
        height: 365px;
    }

    .cool-card:focus-within .cool-card__card {
        outline: #005c83fd auto 5px;
    }

    a {
        text-decoration: none;
        color: #222;
    }

    .cool-card__card {
        font: var(--card-font, normal 1rem/1.5rem sans-serif);
        color: var(--card-text-color, #222);
        background-color: var(--card-background-color, #fff);
        border: 1px solid var(--card-border-color, #ccc);
        max-width: 365px;
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .cool-card__card:after {
        position: absolute;
        font-family: sans-serif;
        font-weight: 700;
        content: 'S';
        font-size: 30rem;
        top: 200px;
        right: 4px;
        bottom: 0;
        left: auto;
        color: #f5bf42;
        opacity: 0.2;
        transition: all 0.4s ease-in-out;
        z-index: 0;
    }

    .cool-card:hover .cool-card__card:after {
        font-size: 20rem;
        z-index: 0;
    }


    .cool-card__card__image {
        object-fit: cover;
        width: 100%;
        max-height: 200px;
        clip-path: polygon(0 0, 100% 0%, 100% 95%, 0 80%);
        z-index: 1;
    }

    .cool-card__card__body {
        margin-top: -32px;
        padding-bottom: 24px;
        padding-left: 12px;
        overflow: hidden;
    }

    .cool-card__card__body__text {
        font-size: 0.75rem;
        font-weight: 300;
        z-index: 1;
    }

    .cool-card__card__body__title {
        font-size: 1rem;
        margin: 0;
        text-overflow: ellipsis;
        z-index: 1;
    }

    .cool-card__card__footer {
        text-align: right;
        padding: 8px 24px;
        font-size: 0.75rem;
        z-index: 1;
    }
`;
