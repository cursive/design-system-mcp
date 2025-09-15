import type { Meta, StoryObj } from '@storybook/react';
import { IconLine } from './IconLine';
import { CheckIcon } from '../../atoms/CheckIcon';
import { PackageIcon } from '../../atoms/PackageIcon';

const meta: Meta<typeof IconLine> = {
    title: 'Molecules/IconLine',
    component: IconLine,
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
type Story = StoryObj<typeof IconLine>;

export const Default: Story = {
    args: {
        children: 'Text',
    },
};

export const WithCustomText: Story = {
    args: {
        children: 'Custom text content',
    },
};

export const WithCheckIcon: Story = {
    args: {
        children: 'Completed task',
        icon: <CheckIcon size={20} color="var(--color-foreground-primary)" />,
    },
};

export const WithPackageIcon: Story = {
    args: {
        children: 'Package delivered',
        icon: <PackageIcon size={20} color="var(--color-foreground-primary)" />,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled text',
        disabled: true,
    },
};

export const Clickable: Story = {
    args: {
        children: 'Click me',
        onClick: () => alert('Clicked!'),
    },
};

export const LongText: Story = {
    args: {
        children: 'This is a very long text that should wrap properly and not overflow the container',
    },
};
