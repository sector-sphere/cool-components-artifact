import { html } from 'lit';
import '../../src/icon-link/icon-link.js';

export default {
  title: 'Componentes/Icon Link',
  argTypes: {
    link: { control: 'string' },
    text: { control: 'string' },
  },
};

const IconLinkTemplate = ({ link, text }) => html`
  <cool-icon-link
    .link="${link}"
    .text="${text}"
  >
  </cool-icon-link>
`;

export const Default = IconLinkTemplate.bind({});
Default.args = {
  link: '/',
  text: 'My link',
};
