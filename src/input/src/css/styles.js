import { css } from 'lit';

export const generalStyles = css`
  input[type='text'] {
    padding: 12px 0;
    padding-left: 40px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
  }
  .button {
    background-color: #8aaa8b;
    color: white;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    top: 4px;
  }
  .active {
    background-color: #405841;
    transform: translateX(320px);
    transition: all ease-in-out 0.5s linear;
  }
  .searchbar {
    /* position: absolute; */
  }
  .hidden {
    opacity: 0;
  }
  .fade-out {
    opacity: 0;
    transition: all 0.5s linear;
  }

  .fade-in {
    opacity: 1;
    transition: opacity 0.5s linear;
  }
`;
