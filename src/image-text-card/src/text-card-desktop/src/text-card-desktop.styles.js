import { css } from 'lit';

export const generalStyles = css`
    .cool-card {
        font-family: sans-serif;
        max-height: 200px;
    }

    a {
        text-decoration: none;
        color: #222;
    }

    .cool-card:focus-within .cool-card__card {
        outline: #005c83fd auto 5px;
    }

    .cool-card__card__image {
        max-height: 200px;
        max-width: 200px;
        object-fit: cover;
        z-index: 1;
        clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 120%);
    }

    .cool-card__card {
        max-height: 200px;
        display: flex;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
    }

    .cool-card__card:after {
        font-family: sans-serif;
        font-weight: 700;
        content: 'S';
        font-size: 50rem;
        position: absolute;
        top: -200px;
        right: 4px;
        left: auto;
        color: #f5bf42;
        opacity: 0.3;
        transition: all 0.4s ease-in-out;
        z-index: 0;
    }

    .cool-card:hover .cool-card__card:after {
        font-size: 40rem;
        opacity: 0.2;
        z-index: 0;
    }

    .cool-card__card__body {
        margin: 16px;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
        gap: 8px;
        height: 100%;
        z-index: 1;
    }

    .cool-card__card__body__title {
        font-size: 1.5rem;
        margin: 0;
    }

    .cool-card__card_body__subtitle {
        font-size: 1rem;
        font-weight: 300;
        margin-left: 8px;
    }

    .cool-card__card__body__tag {
        border: 1px solid #222;
        background-color: #fff;
        color: #222;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: .75rem;
    }

    .cool-card__card__footer {
        position: absolute;
        bottom: 16px;
        right: 16px;
        z-index: 1;
        font-size: 1rem;
        color: #4c4c4c;
    }
`;
