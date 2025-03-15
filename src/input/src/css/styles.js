import { css } from 'lit';

export const generalStyles = css`
    .cool-input__label {
        font: var(--cool-input-font, normal normal 1rem/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif);
    }

    .cool-input__input {
        padding: var(--cool-input-padding, 8px);
        outline-color: var(--cool-input-outline-color, #ffc400);
    }
`;
