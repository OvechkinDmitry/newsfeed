import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from '..';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};
Outline.storyName = 'Outline тема';

export const Clear: Story = {
  args: {
    children: 'Text',
  },
};
Clear.storyName = 'Clear тема';

export const Sizes: Story = {
  args: {
    children: '<',
  },
  argTypes: {
    size: {
      variant: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
      control: { type: 'select' },
    },
  },
};
Sizes.storyName = 'Размеры';
