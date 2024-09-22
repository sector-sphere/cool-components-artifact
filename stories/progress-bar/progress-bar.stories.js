import { html } from 'lit';
import '../../src/progress-bar/cool-progress-bar.js';

export default {
  title: 'Componentes/Progress Bar',
  argTypes: {
    radius: { control: 'number' },
    stroke: { control: 'number' },
    progress: { control: 'number' },
  },
};

const CoolProgressBarTemplate = ({ radius, stroke, progress }) => html`
  <cool-progress-bar
    .radius="${radius}"
    .stroke="${stroke}"
    .progress="${progress}"
  >
  </cool-progress-bar>
`;

export const ProgressBar = CoolProgressBarTemplate.bind({});
ProgressBar.args = {
  radius: 52,
  stroke: 12,
  progress: 50,
};
