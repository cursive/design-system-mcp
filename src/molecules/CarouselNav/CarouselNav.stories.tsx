import type { Meta, StoryObj } from '@storybook/react';
import { CarouselNav } from './CarouselNav';

const meta: Meta<typeof CarouselNav> = {
    title: 'Molecules/CarouselNav',
    component: CarouselNav,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        prevDisabled: {
            control: { type: 'boolean' },
        },
        nextDisabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CarouselNav>;

export const Default: Story = {
    args: {},
};

export const PreviousDisabled: Story = {
    args: {
        prevDisabled: true,
    },
};

export const NextDisabled: Story = {
    args: {
        nextDisabled: true,
    },
};

export const BothDisabled: Story = {
    args: {
        prevDisabled: true,
        nextDisabled: true,
    },
};

export const WithHandlers: Story = {
    args: {
        onPrevious: () => alert('Previous clicked!'),
        onNext: () => alert('Next clicked!'),
    },
};
