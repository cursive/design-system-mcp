import type { Meta, StoryObj } from '@storybook/react';
import { FAQCell } from './FAQCell';

const meta: Meta<typeof FAQCell> = {
    title: 'Molecules/FAQCell',
    component: FAQCell,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof FAQCell>;

export const Default: Story = {
    args: {
        question: 'How',
        answer: 'Because',
    },
};

export const LongQuestion: Story = {
    args: {
        question: 'How do I cancel my subscription?',
        answer: 'You can cancel your subscription at any time by going to your account settings and clicking the "Cancel Subscription" button.',
    },
};

export const LongAnswer: Story = {
    args: {
        question: 'What is included in the premium plan?',
        answer: 'The premium plan includes unlimited access to all features, priority customer support, advanced analytics, custom integrations, and exclusive content. You also get early access to new features and a dedicated account manager.',
    },
};

export const ShortContent: Story = {
    args: {
        question: 'Q?',
        answer: 'A.',
    },
};

export const CustomContent: Story = {
    args: {
        question: 'How can I contact support?',
        answer: 'You can reach our support team via email at support@example.com or through our live chat feature.',
    },
};
