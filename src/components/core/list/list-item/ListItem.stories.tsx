import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../../checkbox';
import ListItem from './ListItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Core/List/ListItem',
  component: ListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), className: /*tw*/ ' bg-border-gray-light' }
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: 'md',
    children: 'ListItem'
  }
};

export const ListItemCheckbox: Story = {
  render: () => (
    <ListItem size="md" className="min-w-[300px] bg-border-gray-light">
      List Item
      <Checkbox />
    </ListItem>
  )
};
