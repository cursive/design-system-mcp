import type { Meta, StoryObj } from '@storybook/react';
import { FooterPDP } from './FooterPDP';

const meta: Meta<typeof FooterPDP> = {
    title: 'Molecules/FooterPDP',
    component: FooterPDP,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        device: {
            control: { type: 'select' },
            options: ['mobile', 'desktop'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FooterPDP>;

export const Mobile: Story = {
    args: {
        device: 'mobile',
        buttonText: 'Become a member',
        priceText: '$122/month',
    },
};

export const Desktop: Story = {
    args: {
        device: 'desktop',
        buttonText: 'Become a member',
        priceText: '$123 / month',
    },
};

export const CustomContent: Story = {
    args: {
        device: 'desktop',
        buttonText: 'Subscribe now',
        priceText: '$99 / year',
    },
};

export const WithHandlers: Story = {
    args: {
        device: 'desktop',
        buttonText: 'Click me!',
        priceText: '$50 / month',
        onButtonClick: () => alert('Button clicked!'),
    },
};

export const LongText: Story = {
    args: {
        device: 'mobile',
        buttonText: 'Join our premium membership program',
        priceText: '$299.99 / month',
    },
};
