import type { Meta, StoryObj } from '@storybook/react';
import { PanelHeader } from './PanelHeader';

const meta: Meta<typeof PanelHeader> = {
    title: 'Molecules/PanelHeader',
    component: PanelHeader,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        hierarchy: {
            control: { type: 'select' },
            options: ['Default', 'Secondary'],
        },
        showEyebrow: {
            control: { type: 'boolean' },
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        showSub: {
            control: { type: 'boolean' },
        },
        title: {
            control: { type: 'text' },
        },
        eyebrow: {
            control: { type: 'text' },
        },
        subtitle: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof PanelHeader>;

export const Default: Story = {
    args: {
        hierarchy: 'Default',
        showEyebrow: true,
        showIcon: true,
        showSub: true,
        title: "What you'll get",
        eyebrow: "What you'll get",
        subtitle: "Sub",
    },
};

export const Secondary: Story = {
    args: {
        hierarchy: 'Secondary',
        showEyebrow: true,
        showIcon: true,
        showSub: true,
        title: "What you'll get",
        eyebrow: "What you'll get",
        subtitle: "Sub",
    },
};

export const WithoutEyebrow: Story = {
    args: {
        hierarchy: 'Default',
        showEyebrow: false,
        showIcon: true,
        showSub: true,
        title: "What you'll get",
        subtitle: "Sub",
    },
};

export const WithoutIcon: Story = {
    args: {
        hierarchy: 'Default',
        showEyebrow: true,
        showIcon: false,
        showSub: true,
        title: "What you'll get",
        eyebrow: "What you'll get",
        subtitle: "Sub",
    },
};

export const WithoutSubtitle: Story = {
    args: {
        hierarchy: 'Default',
        showEyebrow: true,
        showIcon: true,
        showSub: false,
        title: "What you'll get",
        eyebrow: "What you'll get",
    },
};

export const CustomContent: Story = {
    args: {
        hierarchy: 'Default',
        showEyebrow: true,
        showIcon: true,
        showSub: true,
        title: "Custom Title",
        eyebrow: "Custom Eyebrow",
        subtitle: "Custom subtitle text",
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default Hierarchy</h3>
                <PanelHeader
                    hierarchy="Default"
                    title="What you'll get"
                    eyebrow="What you'll get"
                    subtitle="Sub"
                />
            </div>
            <div>
                <h3>Secondary Hierarchy</h3>
                <PanelHeader
                    hierarchy="Secondary"
                    title="What you'll get"
                    eyebrow="What you'll get"
                    subtitle="Sub"
                />
            </div>
        </div>
    ),
};


