import type { Meta, StoryObj } from '@storybook/react';
import { SelectItem } from './SelectItem';

const meta: Meta<typeof SelectItem> = {
    title: 'Molecules/SelectItem',
    component: SelectItem,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'hover'],
        },
        selected: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SelectItem>;

export const Default: Story = {
    args: {
        children: 'No peanuts',
        state: 'default',
        selected: false,
    },
};

export const Hover: Story = {
    args: {
        children: 'No peanuts',
        state: 'hover',
        selected: false,
    },
};

export const Selected: Story = {
    args: {
        children: 'No peanuts',
        state: 'default',
        selected: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'No peanuts',
        state: 'default',
        selected: false,
        disabled: true,
    },
};

export const CustomContent: Story = {
    args: {
        children: 'Gluten-free option',
        state: 'default',
        selected: false,
    },
};

export const LongText: Story = {
    args: {
        children: 'This is a very long option text that might wrap or be truncated',
        state: 'default',
        selected: false,
    },
};
