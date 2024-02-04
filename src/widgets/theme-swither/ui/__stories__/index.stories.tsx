import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from 'widgets/theme-swither';

const meta = {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Обычное состояние';
