import React from 'react';
import { render, screen } from '@testing-library/react';
import { PackageIcon } from './PackageIcon';

describe('PackageIcon', () => {
    it('renders with default props', () => {
        render(<PackageIcon />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
        render(<PackageIcon size={32} />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('renders with custom color', () => {
        render(<PackageIcon color="#f08e80" />);
        const paths = screen.getByRole('img', { hidden: true }).querySelectorAll('path');
        paths.forEach(path => {
            expect(path).toHaveAttribute('stroke', '#f08e80');
        });
    });

    it('applies custom className', () => {
        render(<PackageIcon className="custom-class" />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toHaveClass('package-icon', 'custom-class');
    });
});
