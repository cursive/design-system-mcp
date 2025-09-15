import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalendarFoldIcon } from './CalendarFoldIcon';

describe('CalendarFoldIcon', () => {
    it('renders with default props', () => {
        render(<CalendarFoldIcon />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
        render(<CalendarFoldIcon size={32} />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('renders with custom color', () => {
        render(<CalendarFoldIcon color="#f08e80" />);
        const elements = screen.getByRole('img', { hidden: true }).querySelectorAll('rect, line, path');
        elements.forEach(element => {
            expect(element).toHaveAttribute('stroke', '#f08e80');
        });
    });

    it('applies custom className', () => {
        render(<CalendarFoldIcon className="custom-class" />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveClass('calendar-fold-icon', 'custom-class');
    });
});
