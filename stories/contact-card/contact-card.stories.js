import { html } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import '../../src/contact-card/cool-contact-card.js';

export default {
  title: 'componentes/Contact Card',
  argTypes: {
    selected: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
};

function clickEvent(ev) {
  action(`action ${ev.type}`)(ev.detail);
}

const CoolCardTemplate = ({ id, selected, text, disabled }) => html`
  <cool-contact-card
    .id="${id}"
    .selected="${selected}"
    .text="${text}"
    ?disabled="${disabled}"
    @statusChange="${clickEvent}"
  >
  </cool-contact-card>
`;

export const ContactCard = CoolCardTemplate.bind({});
ContactCard.args = {
  id: 'project',
  selected: false,
  text: 'Proyectos emprendedores',
  disabled: false
};
