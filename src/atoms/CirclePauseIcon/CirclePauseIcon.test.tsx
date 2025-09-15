import React from 'react';
import { render, screen } from '@testing-library/react';
import { CirclePauseIcon } from './CirclePauseIcon';

describe('CirclePauseIcon', () => {
    it('renders with default props', () => {
        render(<CirclePauseIcon />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
        render(<CirclePauseIcon size={32} />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('renders with custom color', () => {
        render(<CirclePauseIcon color="#f08e80" />);
        const circle = screen.getByRole('img', { hidden: true }).querySelector('circle');
        const rects = screen.getByRole('img', { hidden: true }).querySelectorAll('rect');

        expect(circle).toHaveAttribute('stroke', '#f08e80');
        rects.forEach(rect => {
            expect(rect).toHaveAttribute('fill', '#f08e80');
        });
    });

    it('applies custom className', () => {
        render(<CirclePauseIcon className="custom-class" />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveClass('circle-pause-icon', 'custom-class');
    });
});

