/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: [
    {
      directory: '../stories',
      files: '**/*.@(mdx)'
    },
    {
      directory: '../stories',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)'
    }
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {

    },
  },
  docs: {
    autodocs: 'false',
    defaultName: 'Docs'
  },
};
export default config;
