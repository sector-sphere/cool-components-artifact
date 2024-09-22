import { css } from 'lit';

export const generalStyles = css`
  .cool-button {
    background-color: #005c83fd;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.5rem;
    font: var(--button-font, normal 1rem/1.5rem sans-serif);
    transition: background-color 0.3s ease;
  }

  .cool-button:hover {
    background-color: #004c6cfc;


  }
`;
