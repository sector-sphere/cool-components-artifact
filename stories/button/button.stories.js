import { html } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import '../../src/button/cool-button.js';

export default {
  title: 'componentes/Toggle button',
  argTypes: {
    selected: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

function clickEvent(ev) {
  action(`action ${ev.type}`)(ev.detail);
}

const CoolButtonTemplate = ({ id, selected, text, disabled }) => html`
  <cool-button
    .id="${id}"
    .selected="${selected}"
    .text="${text}"
    ?disabled="${disabled}"
    @statusChange="${clickEvent}"
  >
  </cool-button>
`;

export const ToggleButton = CoolButtonTemplate.bind({});
ToggleButton.args = {
  id: 'project',
  selected: false,
  text: 'Proyectos emprendedores',
  disabled: false
};
