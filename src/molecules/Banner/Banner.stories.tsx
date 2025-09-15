import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
    title: 'Molecules/Banner',
    component: Banner,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['default', 'success', 'warning', 'alert'],
        },
        showLeftIcon: {
            control: { type: 'boolean' },
        },
        showRightIcon: {
            control: { type: 'boolean' },
        },
        dismissible: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
    args: {
        type: 'default',
        children: 'These can go on as many lines as needed, and can include a header too',
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        children: 'Success! Your changes have been saved.',
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        children: 'Warning: This action cannot be undone.',
    },
};

export const Alert: Story = {
    args: {
        type: 'alert',
        children: 'Error: Something went wrong. Please try again.',
    },
};

export const WithoutLeftIcon: Story = {
    args: {
        type: 'default',
        children: 'Banner without left icon',
        showLeftIcon: false,
    },
};

export const WithoutRightIcon: Story = {
    args: {
        type: 'default',
        children: 'Banner without right icon',
        showRightIcon: false,
    },
};

export const NotDismissible: Story = {
    args: {
        type: 'success',
        children: 'This banner cannot be dismissed',
        dismissible: false,
    },
};

export const LongText: Story = {
    args: {
        type: 'warning',
        children: 'This is a very long banner message that should wrap properly and display across multiple lines to test the layout and ensure the text flows correctly within the banner container.',
    },
};

export const CustomContent: Story = {
    args: {
        type: 'success',
        children: 'Welcome to our new design system! All components are now available.',
    },
};
