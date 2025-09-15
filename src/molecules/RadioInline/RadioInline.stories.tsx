import type { Meta, StoryObj } from '@storybook/react';
import { RadioInline } from './RadioInline';

const meta: Meta<typeof RadioInline> = {
    title: 'Molecules/RadioInline',
    component: RadioInline,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['unchecked', 'hover', 'checked'],
        },
        selected: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        showDivider: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioInline>;

export const Unchecked: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'unchecked',
        selected: false,
    },
};

export const Hover: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'hover',
        selected: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'checked',
        selected: true,
    },
};

export const Selected: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'unchecked',
        selected: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'unchecked',
        selected: false,
        disabled: true,
    },
};

export const WithoutDivider: Story = {
    args: {
        label: 'Breakfast Kit — Chicken',
        price: '$40',
        state: 'unchecked',
        selected: false,
        showDivider: false,
    },
};

export const CustomContent: Story = {
    args: {
        label: 'Premium Package — Beef',
        price: '$65',
        state: 'unchecked',
        selected: false,
    },
};
