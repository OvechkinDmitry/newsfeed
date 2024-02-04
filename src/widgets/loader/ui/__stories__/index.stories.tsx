import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from 'widgets/loader';

const meta = {
  title: 'widget/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Обычное состояние';
