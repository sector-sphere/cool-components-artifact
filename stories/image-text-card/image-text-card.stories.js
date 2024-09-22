import { html } from 'lit';
import '../../src/image-text-card/image-text-card.js';

export default {
  title: 'componentes/Image text Card',
  argTypes: {
    selected: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  render: ({ image, title, subtitle, tag, minutes, detailUrl }) => html`
    <image-text-card
      .image="${image}"
      .title="${title}"
      .subtitle="${subtitle}"
      .tag="${tag}"
      .minutes="${minutes}"
      .detailUrl="${detailUrl}"
    ></image-text-card>
  `,

};

export const withShortText = {
  args: {
    image: 'https://placehold.co/200x200',
    title: 'Título del artículo',
    subtitle: 'El autor del artículo',
    tag: 'Tecnología',
  },
};

export const withLargeText = {
  args: {
    image: 'https://placehold.co/200x200',
    title: 'Artículo con un título muy muyy largo que no cabe en una línea',
    subtitle: 'La autora del artículo',
    tag: 'Salud',
  },
};
