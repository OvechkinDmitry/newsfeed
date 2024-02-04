import type { Meta, StoryObj } from '@storybook/react';
import { Link } from 'shared/ui/link';

const meta = {
  title: 'shared/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: '/',
    children: 'Link text',
  },
};

Primary.storyName = 'Обычное состояние';
