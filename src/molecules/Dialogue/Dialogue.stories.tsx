import type { Meta, StoryObj } from '@storybook/react';
import { Dialogue } from './Dialogue';

const meta: Meta<typeof Dialogue> = {
    title: 'Molecules/Dialogue',
    component: Dialogue,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'desktop'],
        },
        isOpen: {
            control: { type: 'boolean' },
        },
        showTextArea: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dialogue>;

export const Default: Story = {
    args: {
        title: 'Modal template',
        description: 'Body copy',
        primaryButtonText: 'Primary',
        secondaryButtonText: 'Secondary',
        showTextArea: true,
        variant: 'default',
        isOpen: true,
    },
};

export const Desktop: Story = {
    args: {
        title: 'Desktop Modal',
        description: 'This is a desktop variant with side-by-side buttons.',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        showTextArea: true,
        variant: 'desktop',
        isOpen: true,
    },
};

export const WithoutTextArea: Story = {
    args: {
        title: 'Simple Confirmation',
        description: 'Are you sure you want to proceed?',
        primaryButtonText: 'Yes, continue',
        secondaryButtonText: 'Cancel',
        showTextArea: false,
        variant: 'default',
        isOpen: true,
    },
};

export const WithoutSecondaryButton: Story = {
    args: {
        title: 'Information',
        description: 'This is just an informational message.',
        primaryButtonText: 'Got it',
        secondaryButtonText: '',
        showTextArea: false,
        variant: 'default',
        isOpen: true,
    },
};

export const WithHandlers: Story = {
    args: {
        title: 'Interactive Modal',
        description: 'Click the buttons to see the handlers in action.',
        primaryButtonText: 'Primary Action',
        secondaryButtonText: 'Secondary Action',
        showTextArea: true,
        variant: 'default',
        isOpen: true,
        onPrimaryClick: () => alert('Primary button clicked!'),
        onSecondaryClick: () => alert('Secondary button clicked!'),
        onClose: () => alert('Close button clicked!'),
    },
};

export const Closed: Story = {
    args: {
        title: 'This modal is closed',
        description: 'You should not see this content.',
        isOpen: false,
    },
};
