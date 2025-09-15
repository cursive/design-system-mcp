import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: { type: 'select' },
            options: ['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle', 'gift', 'gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'],
        },
        size: {
            control: { type: 'number' },
        },
        color: {
            control: { type: 'color' },
        },
        decorative: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        name: 'search',
        size: 20,
    },
};

export const AllIcons: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle', 'gift', 'gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'].map((iconName) => (
                <div key={iconName} style={{ textAlign: 'center' }}>
                    <Icon name={iconName as any} size={iconName.includes('large') ? 40 : 24} />
                    <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
                </div>
            ))}
        </div>
    ),
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Icon name="search" size={16} />
            <Icon name="search" size={20} />
            <Icon name="search" size={24} />
            <Icon name="search" size={32} />
        </div>
    ),
};

export const WithColor: Story = {
    args: {
        name: 'search',
        size: 24,
        color: '#ff0000',
    },
};
