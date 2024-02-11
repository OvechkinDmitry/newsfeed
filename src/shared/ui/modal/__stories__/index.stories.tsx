import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text text text text text text text text text text text text text text',
  },
};

Primary.storyName = 'Обычное состояние';
