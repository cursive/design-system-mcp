import type { Meta, StoryObj } from '@storybook/react';
import { CarouselPips } from './CarouselPips';

const meta: Meta<typeof CarouselPips> = {
    title: 'Molecules/CarouselPips',
    component: CarouselPips,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        totalItems: {
            control: { type: 'number', min: 1, max: 10 },
        },
        activeIndex: {
            control: { type: 'number', min: 0, max: 9 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CarouselPips>;

export const Default: Story = {
    args: {
        totalItems: 3,
        activeIndex: 0,
    },
};

export const SecondActive: Story = {
    args: {
        totalItems: 3,
        activeIndex: 1,
    },
};

export const ThirdActive: Story = {
    args: {
        totalItems: 3,
        activeIndex: 2,
    },
};

export const FiveItems: Story = {
    args: {
        totalItems: 5,
        activeIndex: 2,
    },
};

export const ManyItems: Story = {
    args: {
        totalItems: 8,
        activeIndex: 3,
    },
};

export const WithHandlers: Story = {
    args: {
        totalItems: 4,
        activeIndex: 1,
        onPipClick: (index) => alert(`Clicked pip ${index + 1}`),
    },
};
