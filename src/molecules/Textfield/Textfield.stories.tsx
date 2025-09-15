import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from './Textfield';

const meta: Meta<typeof Textfield> = {
    title: 'Molecules/Textfield',
    component: Textfield,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'hover', 'active', 'filled', 'disabled', 'error', 'error-filled'],
        },
        showLabel: {
            control: { type: 'boolean' },
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textfield>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: true,
        showIcon: false,
    },
};

export const Hover: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'hover',
        showLabel: true,
        showIcon: false,
    },
};

export const Active: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'active',
        showLabel: true,
        showIcon: false,
    },
};

export const Filled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        value: 'Entered text',
        state: 'filled',
        showLabel: true,
        showIcon: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'disabled',
        disabled: true,
        showLabel: true,
        showIcon: false,
    },
};

export const Error: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'error',
        errorMessage: 'Required',
        showLabel: true,
        showIcon: false,
    },
};

export const ErrorFilled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        value: 'Invalid text',
        state: 'error-filled',
        errorMessage: 'Explainer',
        showLabel: true,
        showIcon: false,
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: true,
        showIcon: true,
    },
};

export const WithoutLabel: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: false,
        showIcon: false,
    },
};
