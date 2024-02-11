import { cx } from 'shared/lib/class-names';
import { Decorator, StoryContext } from '@storybook/react';
import { ThemeProvider } from 'app/providers/theme';

export const ThemeDecorator: Decorator = (Story, context: StoryContext) => {
  const { globals: { theme } } = context;

  return (
    <ThemeProvider>
      <div className={cx('app', theme)}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
