export const spacing = {
    iconGap: 'var(--spacing-icon-gap)',
    line: 'var(--spacing-line)',
    item: 'var(--spacing-item)',
    group: 'var(--spacing-group)',
} as const;

export type SpacingToken = keyof typeof spacing;


