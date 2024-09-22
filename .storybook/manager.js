import { addons } from '@storybook/manager-api';
import storybookTheme from './assets/storybook.theme';

addons.setConfig({
  enableShortcuts: false,
  theme: storybookTheme
});
