import { Preview } from '@storybook/react';
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
} from '../../src/shared/config/storybook/decorators';

export const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'app-light-theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['app-light-theme', 'app-dark-theme'],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator],
};

export default preview;
