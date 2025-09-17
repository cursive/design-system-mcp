export const spacing = {
    iconGap: 'var(--icon-gap)',
    line: 'var(--line)',
    item: 'var(--item)',
    group: 'var(--group)',
} as const;

export type SpacingToken = keyof typeof spacing;


