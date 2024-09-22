import { html } from 'lit';
import '../../src/header/header.js';

export default {
  title: 'componentes/Header',
  argTypes: {

  }
};

const CoolHeader = () => html`
  <cool-header></cool-header>
`;

export const Header = CoolHeader.bind({});
Header.args = {
  id: 'project',
  selected: false,
  text: 'Proyectos emprendedores',
  disabled: false
};
