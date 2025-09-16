import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
    title: 'Molecules/PageHeader',
    component: PageHeader,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        showBackButton: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
    args: {
        backText: 'Edit order',
        title: 'Checkout',
        subtitle: 'Slanted Door Supper Club',
        showBackButton: true,
    },
};

export const WithoutBackButton: Story = {
    args: {
        title: 'Settings',
        subtitle: 'Account Management',
        showBackButton: false,
    },
};

export const WithoutSubtitle: Story = {
    args: {
        backText: 'Back to home',
        title: 'Profile',
        showBackButton: true,
    },
};

export const LongTitle: Story = {
    args: {
        backText: 'Back to dashboard',
        title: 'Advanced Configuration Settings',
        subtitle: 'System Administration Panel',
        showBackButton: true,
    },
};

export const WithHandlers: Story = {
    args: {
        backText: 'Go back',
        title: 'Interactive Page',
        subtitle: 'Click the back button',
        showBackButton: true,
        onBack: () => alert('Back button clicked!'),
    },
};
