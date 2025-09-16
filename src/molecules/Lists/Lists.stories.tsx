import type { Meta, StoryObj } from '@storybook/react';
import { Lists } from './Lists';
import { CheckIcon } from '../../atoms/CheckIcon';
import { PackageIcon } from '../../atoms/PackageIcon';

const meta: Meta<typeof Lists> = {
    title: 'Molecules/Lists',
    component: Lists,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof Lists>;

export const Default: Story = {
    args: {
        title: 'title',
        items: [
            { id: '1', text: 'Text' },
            { id: '2', text: 'Text' },
            { id: '3', text: 'Text' },
        ],
    },
};

export const WithCustomTitle: Story = {
    args: {
        title: 'Features',
        items: [
            { id: '1', text: 'Feature 1' },
            { id: '2', text: 'Feature 2' },
            { id: '3', text: 'Feature 3' },
        ],
    },
};

export const WithIcons: Story = {
    args: {
        title: 'Services',
        items: [
            { id: '1', text: 'Service 1', icon: <CheckIcon size={20} color="var(--color-foreground-primary)" /> },
            { id: '2', text: 'Service 2', icon: <PackageIcon size={20} color="var(--color-foreground-primary)" /> },
            { id: '3', text: 'Service 3', icon: <CheckIcon size={20} color="var(--color-foreground-primary)" /> },
        ],
    },
};

export const LongList: Story = {
    args: {
        title: 'Menu Items',
        items: [
            { id: '1', text: 'Appetizers' },
            { id: '2', text: 'Main Courses' },
            { id: '3', text: 'Desserts' },
            { id: '4', text: 'Beverages' },
            { id: '5', text: 'Specials' },
            { id: '6', text: 'Seasonal Items' },
        ],
    },
};

export const WithHandlers: Story = {
    args: {
        title: 'Interactive List',
        items: [
            { id: '1', text: 'Click me 1' },
            { id: '2', text: 'Click me 2' },
            { id: '3', text: 'Click me 3' },
        ],
        onItemClick: (item) => alert(`Clicked: ${item.text}`),
    },
};

export const EmptyList: Story = {
    args: {
        title: 'Empty List',
        items: [],
    },
};
