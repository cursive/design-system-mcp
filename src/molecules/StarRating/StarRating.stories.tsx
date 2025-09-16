import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'Molecules/StarRating',
    component: StarRating,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        rating: {
            control: { type: 'number', min: 0, max: 5, step: 0.5 },
        },
        maxRating: {
            control: { type: 'number', min: 1, max: 10 },
        },
        interactive: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'number', min: 12, max: 48 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
    args: {
        rating: 5,
        maxRating: 5,
        interactive: false,
        size: 20,
    },
};

export const ThreeStars: Story = {
    args: {
        rating: 3,
        maxRating: 5,
        interactive: false,
        size: 20,
    },
};

export const Interactive: Story = {
    args: {
        rating: 0,
        maxRating: 5,
        interactive: true,
        size: 20,
        onRatingChange: (rating) => console.log('Rating changed to:', rating),
    },
};

export const Large: Story = {
    args: {
        rating: 4,
        maxRating: 5,
        interactive: false,
        size: 32,
    },
};

export const TenStars: Story = {
    args: {
        rating: 7,
        maxRating: 10,
        interactive: false,
        size: 16,
    },
};

export const HalfRating: Story = {
    args: {
        rating: 3.5,
        maxRating: 5,
        interactive: false,
        size: 20,
    },
};
