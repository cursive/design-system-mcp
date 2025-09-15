import type { Meta, StoryObj } from '@storybook/react';
import { TileMultiItem } from './TileMultiItem';

const meta: Meta<typeof TileMultiItem> = {
    title: 'Molecules/TileMultiItem',
    component: TileMultiItem,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TileMultiItem>;

export const Default: Story = {
    args: {
        options: [
            { id: '1', label: '2 bottles', price: '+ $45' },
            { id: '2', label: '4 bottles', price: '+ $90' },
            { id: '3', label: 'No, thank you', price: '', selected: true },
        ],
    },
};

export const WithSelection: Story = {
    args: {
        options: [
            { id: '1', label: '2 bottles', price: '+ $45' },
            { id: '2', label: '4 bottles', price: '+ $90' },
            { id: '3', label: 'No, thank you', price: '' },
        ],
        selectedId: '2',
    },
};

export const Disabled: Story = {
    args: {
        options: [
            { id: '1', label: '2 bottles', price: '+ $45' },
            { id: '2', label: '4 bottles', price: '+ $90' },
            { id: '3', label: 'No, thank you', price: '' },
        ],
        disabled: true,
    },
};

export const CustomOptions: Story = {
    args: {
        options: [
            { id: '1', label: 'Basic Plan', price: '$9/month' },
            { id: '2', label: 'Pro Plan', price: '$19/month' },
            { id: '3', label: 'Enterprise', price: '$49/month' },
        ],
        selectedId: '2',
    },
};

export const TwoOptions: Story = {
    args: {
        options: [
            { id: '1', label: 'Yes, please', price: '+ $25' },
            { id: '2', label: 'No, thanks', price: '' },
        ],
    },
};

export const ManyOptions: Story = {
    args: {
        options: [
            { id: '1', label: 'Option 1', price: '+ $10' },
            { id: '2', label: 'Option 2', price: '+ $20' },
            { id: '3', label: 'Option 3', price: '+ $30' },
            { id: '4', label: 'Option 4', price: '+ $40' },
            { id: '5', label: 'None of the above', price: '' },
        ],
    },
};
