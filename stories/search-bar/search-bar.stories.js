import { html } from 'lit';
import '../../src/searchbar/cool-searchbar.js';

export default {
  title: 'componentes/Search-bar',
  argTypes: {
  }
};

const CoolSearchbarTemplate = ({}) => html`
  <cool-searchbar
  >
  </cool-searchbar>
`;

export const Searchbar = CoolSearchbarTemplate.bind({});
Searchbar.args = {
};
