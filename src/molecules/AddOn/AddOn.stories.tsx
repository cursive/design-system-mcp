import type { Meta, StoryObj } from '@storybook/react';
import { AddOn } from './AddOn';

const meta: Meta<typeof AddOn> = {
    title: 'Molecules/AddOn',
    component: AddOn,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof AddOn>;

export const Default: Story = {
    args: {
        title: 'Optional wine pairing',
        description: 'Tailored to each month\'s menu.',
        options: [
            { id: 'none', label: 'No, thank you', price: '', selected: true },
            { id: 'red', label: '1 bottle of red', price: '+ $35' },
            { id: 'white', label: '1 bottle of white', price: '+ $35' },
        ],
    },
};

export const WithImage: Story = {
    args: {
        title: 'Premium wine selection',
        description: 'Carefully curated wines from local vineyards.',
        imageUrl: 'https://via.placeholder.com/72x72/eee/999?text=Wine',
        options: [
            { id: 'none', label: 'No, thank you', price: '', selected: true },
            { id: 'red', label: '1 bottle of red', price: '+ $45' },
            { id: 'white', label: '1 bottle of white', price: '+ $45' },
        ],
    },
};

export const WithSelection: Story = {
    args: {
        title: 'Optional wine pairing',
        description: 'Tailored to each month\'s menu.',
        selectedOptionId: 'red',
        options: [
            { id: 'none', label: 'No, thank you', price: '' },
            { id: 'red', label: '1 bottle of red', price: '+ $35' },
            { id: 'white', label: '1 bottle of white', price: '+ $35' },
        ],
    },
};

export const CustomOptions: Story = {
    args: {
        title: 'Dessert add-on',
        description: 'Sweet treats to complete your meal.',
        options: [
            { id: 'none', label: 'No dessert', price: '', selected: true },
            { id: 'chocolate', label: 'Chocolate cake', price: '+ $12' },
            { id: 'cheesecake', label: 'New York cheesecake', price: '+ $15' },
            { id: 'icecream', label: 'Ice cream sundae', price: '+ $8' },
        ],
    },
};

export const WithHandlers: Story = {
    args: {
        title: 'Interactive add-on',
        description: 'Click the options to see the handler in action.',
        options: [
            { id: 'none', label: 'No, thank you', price: '', selected: true },
            { id: 'option1', label: 'Option 1', price: '+ $20' },
            { id: 'option2', label: 'Option 2', price: '+ $25' },
        ],
        onOptionSelect: (optionId, option) => alert(`Selected: ${option.label} (${optionId})`),
    },
};
