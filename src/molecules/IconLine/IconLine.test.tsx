import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconLine } from './IconLine';

describe('IconLine', () => {
    it('renders with default text', () => {
        render(<IconLine />);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('renders with custom text', () => {
        render(<IconLine>Custom text</IconLine>);
        expect(screen.getByText('Custom text')).toBeInTheDocument();
    });

    it('renders with custom icon', () => {
        const customIcon = <div data-testid="custom-icon">Custom Icon</div>;
        render(<IconLine icon={customIcon}>With custom icon</IconLine>);
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders with default icon when no custom icon provided', () => {
        render(<IconLine>With default icon</IconLine>);
        // Should render the default checkmark SVG
        const svg = screen.getByRole('button').querySelector('svg');
        expect(svg).toBeInTheDocument();
    });

    it('applies disabled state correctly', () => {
        render(<IconLine disabled={true}>Disabled text</IconLine>);
        const iconLine = screen.getByRole('button');
        expect(iconLine).toHaveAttribute('aria-disabled', 'true');
        expect(iconLine).toHaveClass('icon-line--disabled');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<IconLine onClick={handleClick}>Clickable text</IconLine>);

        const iconLine = screen.getByRole('button');
        fireEvent.click(iconLine);

        expect(handleClick).toHaveBeenCalled();
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<IconLine disabled={true} onClick={handleClick}>Disabled text</IconLine>);

        const iconLine = screen.getByRole('button');
        fireEvent.click(iconLine);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<IconLine className="custom-class">Text</IconLine>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders as div when no onClick provided', () => {
        render(<IconLine>Text</IconLine>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
        expect(screen.getByText('Text').closest('.icon-line')).toBeInTheDocument();
    });

    it('handles long text properly', () => {
        const longText = 'This is a very long text that should wrap properly and not overflow the container';
        render(<IconLine>{longText}</IconLine>);
        expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('renders icon and text in correct order', () => {
        render(<IconLine>Test text</IconLine>);
        const iconLine = screen.getByText('Test text').closest('.icon-line');
        const icon = iconLine?.querySelector('.icon-line__icon');
        const text = iconLine?.querySelector('.icon-line__text');

        expect(icon).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(iconLine?.children[0]).toBe(icon);
        expect(iconLine?.children[1]).toBe(text?.closest('.icon-line__content'));
    });
});
