import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxLine } from './CheckboxLine';

const meta: Meta<typeof CheckboxLine> = {
    title: 'Molecules/CheckboxLine',
    component: CheckboxLine,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'active'],
        },
        checked: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CheckboxLine>;

export const Default: Story = {
    args: {
        label: 'This is a gift',
        state: 'default',
        checked: false,
    },
};

export const Active: Story = {
    args: {
        label: 'This is a gift',
        state: 'active',
        checked: true,
    },
};

export const Checked: Story = {
    args: {
        label: 'This is a gift',
        state: 'default',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'This is a gift',
        state: 'default',
        checked: false,
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'This is a gift',
        state: 'active',
        checked: true,
        disabled: true,
    },
};

export const CustomLabel: Story = {
    args: {
        label: 'I agree to the terms and conditions',
        state: 'default',
        checked: false,
    },
};
