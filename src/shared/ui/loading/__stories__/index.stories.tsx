import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from 'shared/ui/loading';

const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Обычное состояние';
