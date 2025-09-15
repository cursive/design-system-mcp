import type { Meta, StoryObj } from '@storybook/react';
import { RadioIcon } from './RadioIcon';

const meta: Meta<typeof RadioIcon> = {
    title: 'Atoms/RadioIcon',
    component: RadioIcon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'regular'],
        },
        state: {
            control: { type: 'select' },
            options: ['checked', 'unchecked'],
        },
        color: {
            control: { type: 'color' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioIcon>;

export const Default: Story = {
    args: {
        size: 'regular',
        state: 'unchecked',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        state: 'unchecked',
    },
};

export const Checked: Story = {
    args: {
        size: 'regular',
        state: 'checked',
    },
};

export const SmallChecked: Story = {
    args: {
        size: 'small',
        state: 'checked',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <RadioIcon size="regular" state="unchecked" />
                <div>Regular Unchecked</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <RadioIcon size="regular" state="checked" />
                <div>Regular Checked</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <RadioIcon size="small" state="unchecked" />
                <div>Small Unchecked</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <RadioIcon size="small" state="checked" />
                <div>Small Checked</div>
            </div>
        </div>
    ),
};

