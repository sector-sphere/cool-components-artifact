/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: [
    {
      directory: '../src',
      files: '**/stories/*.@(mdx)'
    },
    {
      directory: '../src',
      files: '**/stories/*.stories.@(js|jsx|ts|tsx)'
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
