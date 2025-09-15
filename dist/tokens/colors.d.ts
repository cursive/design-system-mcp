export declare const colors: {
    readonly foreground: {
        readonly primary: "var(--color-foreground-primary)";
        readonly secondary: "var(--color-foreground-secondary)";
        readonly invertPrimary: "var(--color-foreground-invert-primary)";
        readonly invertSecondary: "var(--color-foreground-invert-secondary)";
    };
    readonly background: {
        readonly primary: "var(--color-background-primary)";
        readonly accent: "var(--color-background-accent)";
        readonly accentHover: "var(--color-background-accent-hover)";
        readonly accentDisabled: "var(--color-background-accent-disabled)";
        readonly invertPrimary: "var(--color-background-invert-primary)";
        readonly invertPrimaryHover: "var(--color-background-invert-primary-hover)";
    };
    readonly stroke: {
        readonly primary: "var(--color-stroke-primary)";
        readonly horizontalRule: "var(--color-stroke-horizontal-rule)";
    };
    readonly status: {
        readonly info: "var(--color-status-info)";
    };
    readonly formControls: {
        readonly disabled: "var(--color-form-controls-disabled)";
    };
    readonly focus: "var(--color-focus)";
};
export type ColorToken = keyof typeof colors;
