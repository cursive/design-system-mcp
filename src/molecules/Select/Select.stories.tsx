import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Molecules/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'hover', 'active'],
        },
        showLabel: {
            control: { type: 'boolean' },
        },
        showHint: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'default',
        showLabel: true,
        showHint: true,
    },
};

export const Hover: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'hover',
        showLabel: true,
        showHint: true,
    },
};

export const Active: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'active',
        showLabel: true,
        showHint: true,
    },
};

export const WithValue: Story = {
    args: {
        label: 'Country',
        placeholder: 'Select a country',
        value: 'us',
        hint: 'Choose your country',
        state: 'default',
        showLabel: true,
        showHint: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'default',
        disabled: true,
        showLabel: true,
        showHint: true,
    },
};

export const WithoutLabel: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'default',
        showLabel: false,
        showHint: true,
    },
};

export const WithoutHint: Story = {
    args: {
        label: 'Label',
        placeholder: 'Select a country',
        hint: 'Hint',
        state: 'default',
        showLabel: true,
        showHint: false,
    },
};
