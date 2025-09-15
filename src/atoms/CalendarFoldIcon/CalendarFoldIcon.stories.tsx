import type { Meta, StoryObj } from '@storybook/react';
import { CalendarFoldIcon } from './CalendarFoldIcon';

const meta: Meta<typeof CalendarFoldIcon> = {
    title: 'Atoms/CalendarFoldIcon',
    component: CalendarFoldIcon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: { type: 'number', min: 16, max: 48, step: 4 },
        },
        color: {
            control: { type: 'color' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 24,
    },
};

export const Large: Story = {
    args: {
        size: 32,
    },
};

export const CustomColor: Story = {
    args: {
        size: 24,
        color: '#f08e80',
    },
};
