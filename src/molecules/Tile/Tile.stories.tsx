import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
    title: 'Molecules/Tile',
    component: Tile,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['default', 'active'],
        },
        showRightLabel: {
            control: { type: 'boolean' },
        },
        showDescription: {
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
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'default',
        showRightLabel: true,
        showDescription: true,
        showIcon: true,
    },
};

export const Active: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'active',
        showRightLabel: true,
        showDescription: true,
        showIcon: true,
    },
};

export const WithoutDescription: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'default',
        showRightLabel: true,
        showDescription: false,
        showIcon: true,
    },
};

export const WithoutRightLabel: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'default',
        showRightLabel: false,
        showDescription: true,
        showIcon: true,
    },
};

export const WithoutIcon: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'default',
        showRightLabel: true,
        showDescription: true,
        showIcon: false,
    },
};

export const Disabled: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        rightLabel: 'Label',
        state: 'default',
        showRightLabel: true,
        showDescription: true,
        showIcon: true,
        disabled: true,
    },
};

export const CustomContent: Story = {
    args: {
        title: 'Premium Package',
        description: 'Includes all features and priority support',
        rightLabel: '$99',
        state: 'default',
        showRightLabel: true,
        showDescription: true,
        showIcon: true,
    },
};
