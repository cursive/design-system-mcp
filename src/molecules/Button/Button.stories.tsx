import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Molecules/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        style: {
            control: { type: 'select' },
            options: ['accent', 'primary', 'secondary'],
        },
        state: {
            control: { type: 'select' },
            options: ['default', 'disabled', 'hover'],
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
    args: {
        style: 'accent',
        state: 'default',
        children: 'Accent Button',
    },
};

export const Primary: Story = {
    args: {
        style: 'primary',
        state: 'default',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        style: 'secondary',
        state: 'default',
        children: 'Secondary Button',
    },
};

export const Disabled: Story = {
    args: {
        style: 'accent',
        state: 'disabled',
        children: 'Disabled Button',
        disabled: true,
    },
};

export const WithoutIcon: Story = {
    args: {
        style: 'primary',
        state: 'default',
        children: 'No Icon',
        showIcon: false,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button style="accent" state="default">Accent</Button>
                <Button style="primary" state="default">Primary</Button>
                <Button style="secondary" state="default">Secondary</Button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button style="accent" state="disabled" disabled>Accent Disabled</Button>
                <Button style="primary" state="disabled" disabled>Primary Disabled</Button>
                <Button style="secondary" state="disabled" disabled>Secondary Disabled</Button>
            </div>
        </div>
    ),
};

