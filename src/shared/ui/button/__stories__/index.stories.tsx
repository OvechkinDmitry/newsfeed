import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from '..';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
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
