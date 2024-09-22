import { create, themes } from '@storybook/theming';


export const storybookTheme = {
  base: 'light',
  brandTarget: '_blank',
  colorPrimary: '#222222',
  colorSecondary: '#127277',
  fontBase: '"SantanderMicroText", Arial, sans-serif',
  fontCode: 'monospace',
  appBg: '#f5f9fB',
  appContentBg: '#ffffff',
  appBorderColor: '#cccccc',
  appBorderRadius: 0,
  barBg: '#f5f9fB',
  barTextColor: '#727272',
  barSelectedColor: '#ec0000',
  inputBg: '#ffffff',
  inputBorder: '#8f8f8f',
  inputTextColor: '#222222',
  inputBorderRadius: 4,
  textColor: '#222222',
  textInverseColor: '#ffffff'
};

export default create({
  ...themes.light,
  ...storybookTheme,
  brandTitle: 'Cool Components',
  brandUrl: ''
});
