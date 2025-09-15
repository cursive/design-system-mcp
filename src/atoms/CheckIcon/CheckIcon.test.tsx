import React from 'react';
import { render, screen } from '@testing-library/react';
import { CheckIcon } from './CheckIcon';

describe('CheckIcon', () => {
    it('renders with default props', () => {
        render(<CheckIcon />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
        render(<CheckIcon size={32} />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('renders with custom color', () => {
        render(<CheckIcon color="#f08e80" />);
        const path = screen.getByRole('img', { hidden: true }).querySelector('path');
        expect(path).toHaveAttribute('stroke', '#f08e80');
    });

    it('applies custom className', () => {
        render(<CheckIcon className="custom-class" />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveClass('check-icon', 'custom-class');
    });
});

