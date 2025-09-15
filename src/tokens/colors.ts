export const colors = {
    foreground: {
        primary: 'var(--color-foreground-primary)',
        secondary: 'var(--color-foreground-secondary)',
        invertPrimary: 'var(--color-foreground-invert-primary)',
        invertSecondary: 'var(--color-foreground-invert-secondary)',
    },
    background: {
        primary: 'var(--color-background-primary)',
        secondary: 'var(--color-background-secondary)',
        accent: 'var(--color-background-accent)',
        accentHover: 'var(--color-background-accent-hover)',
        accentDisabled: 'var(--color-background-accent-disabled)',
        invertPrimary: 'var(--color-background-invert-primary)',
        invertPrimaryHover: 'var(--color-background-invert-primary-hover)',
    },
    stroke: {
        primary: 'var(--color-stroke-primary)',
        horizontalRule: 'var(--color-stroke-horizontal-rule)',
    },
    status: {
        info: 'var(--color-status-info)',
    },
    formControls: {
        disabled: 'var(--color-form-controls-disabled)',
        error: 'var(--color-form-controls-error)',
    },
    focus: 'var(--color-focus)',
} as const;

export type ColorToken = keyof typeof colors;

