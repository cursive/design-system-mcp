import type { Meta, StoryObj } from '@storybook/react';
import { SelectList } from './SelectList';

const meta: Meta<typeof SelectList> = {
    title: 'Molecules/SelectList',
    component: SelectList,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        selectedIndex: {
            control: { type: 'number', min: -1, max: 10 },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SelectList>;

export const Default: Story = {
    args: {
        items: ['Item', 'Item', 'Item', 'Litem', 'Item'],
        selectedIndex: -1,
    },
};

export const WithSelection: Story = {
    args: {
        items: ['Item', 'Item', 'Item', 'Litem', 'Item'],
        selectedIndex: 1,
    },
};

export const Disabled: Story = {
    args: {
        items: ['Item', 'Item', 'Item', 'Litem', 'Item'],
        selectedIndex: -1,
        disabled: true,
    },
};

export const CustomItems: Story = {
    args: {
        items: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
        selectedIndex: 2,
    },
};

export const LongItems: Story = {
    args: {
        items: [
            'This is a very long option text',
            'Another long option',
            'Short',
            'Medium length option',
            'Very long option that might wrap or be truncated'
        ],
        selectedIndex: 0,
    },
};

export const SingleItem: Story = {
    args: {
        items: ['Only Option'],
        selectedIndex: 0,
    },
};
