import type { Meta, StoryObj } from '@storybook/react';
import { PageDivider } from './PageDivider';

const meta: Meta<typeof PageDivider> = {
    title: 'Molecules/PageDivider',
    component: PageDivider,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'labelled', 'blank', 'desktop'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof PageDivider>;

export const Default: Story = {
    args: {
        variant: 'default',
    },
};

export const Labelled: Story = {
    args: {
        variant: 'labelled',
        label: 'Or pay by card',
    },
};

export const Blank: Story = {
    args: {
        variant: 'blank',
    },
};

export const Desktop: Story = {
    args: {
        variant: 'desktop',
    },
};

export const CustomLabel: Story = {
    args: {
        variant: 'labelled',
        label: 'Continue with social',
    },
};

export const LongLabel: Story = {
    args: {
        variant: 'labelled',
        label: 'Or choose an alternative payment method',
    },
};
