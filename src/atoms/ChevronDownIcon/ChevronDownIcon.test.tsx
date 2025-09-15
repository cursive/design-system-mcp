import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChevronDownIcon } from './ChevronDownIcon';

describe('ChevronDownIcon', () => {
    it('renders with default props', () => {
        render(<ChevronDownIcon />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
        render(<ChevronDownIcon size={32} />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('renders with custom color', () => {
        render(<ChevronDownIcon color="#f08e80" />);
        const path = screen.getByRole('img', { hidden: true }).querySelector('path');
        expect(path).toHaveAttribute('stroke', '#f08e80');
    });

    it('applies custom className', () => {
        render(<ChevronDownIcon className="custom-class" />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveClass('chevron-down-icon', 'custom-class');
    });
});

