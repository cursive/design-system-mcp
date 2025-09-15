import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'Molecules/TextArea',
    component: TextArea,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'hover', 'active', 'filled', 'error', 'error-filled'],
        },
        showLabel: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        rows: {
            control: { type: 'number', min: 1, max: 10 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: true,
        rows: 4,
    },
};

export const Hover: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'hover',
        showLabel: true,
        rows: 4,
    },
};

export const Active: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'active',
        showLabel: true,
        rows: 4,
    },
};

export const Filled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        value: 'This is some sample text that fills the textarea to demonstrate the filled state.',
        state: 'filled',
        showLabel: true,
        rows: 4,
    },
};

export const Error: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'error',
        errorMessage: 'Required',
        showLabel: true,
        rows: 4,
    },
};

export const ErrorFilled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        value: 'This text has an error.',
        state: 'error-filled',
        errorMessage: 'Explainer',
        showLabel: true,
        rows: 4,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        disabled: true,
        showLabel: true,
        rows: 4,
    },
};

export const WithoutLabel: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: false,
        rows: 4,
    },
};

export const CustomRows: Story = {
    args: {
        label: 'Label',
        placeholder: 'Value',
        state: 'default',
        showLabel: true,
        rows: 6,
    },
};
