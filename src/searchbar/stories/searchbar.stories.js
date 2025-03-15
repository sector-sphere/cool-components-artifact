import { html } from 'lit';
import '../cool-searchbar.js';

export default {
  title: 'componentes/Searchbar',
  argTypes: {
  },
  render: ({ name, label }) => html`
  <style>
    .story-container {
      border: 1px dashed #727272;
      border-radius: 4px;
      position: relative;
      width: 98%;
      height: 70vh;
      margin: 20px auto;
      box-sizing: border-box;
      padding: 16px;
    }
  </style>
  <div class="story-container">
    <cool-searchbar 
      name="${name}" 
      label="${label}"
    >
    </cool-searchbar>
  </div>
  `
};

export const Default = {
  args: {
    name: 'name',
    label: 'Escribe tu label'
  },
}
