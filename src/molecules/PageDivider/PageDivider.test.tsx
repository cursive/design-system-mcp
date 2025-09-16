import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageDivider } from './PageDivider';

describe('PageDivider', () => {
    it('renders default variant', () => {
        render(<PageDivider />);
        const divider = screen.getByText('').closest('.page-divider');
        expect(divider).toHaveClass('page-divider--default');
    });

    it('renders labelled variant with label', () => {
        render(<PageDivider variant="labelled" label="Test label" />);
        expect(screen.getByText('Test label')).toBeInTheDocument();
        const divider = screen.getByText('Test label').closest('.page-divider');
        expect(divider).toHaveClass('page-divider--labelled');
    });

    it('renders blank variant', () => {
        render(<PageDivider variant="blank" />);
        const divider = screen.getByText('').closest('.page-divider');
        expect(divider).toHaveClass('page-divider--blank');
    });

    it('renders desktop variant', () => {
        render(<PageDivider variant="desktop" />);
        const divider = screen.getByText('').closest('.page-divider');
        expect(divider).toHaveClass('page-divider--desktop');
    });

    it('applies custom className', () => {
        render(<PageDivider className="custom-class" />);
        const divider = screen.getByText('').closest('.page-divider');
        expect(divider).toHaveClass('custom-class');
    });

    it('renders lines for labelled variant', () => {
        render(<PageDivider variant="labelled" label="Test" />);
        const divider = screen.getByText('Test').closest('.page-divider');
        const lines = divider?.querySelectorAll('.page-divider__line');
        expect(lines).toHaveLength(2);
    });

    it('renders single line for default variant', () => {
        render(<PageDivider variant="default" />);
        const divider = screen.getByText('').closest('.page-divider');
        const lines = divider?.querySelectorAll('.page-divider__line');
        expect(lines).toHaveLength(1);
    });

    it('renders no lines for blank variant', () => {
        render(<PageDivider variant="blank" />);
        const divider = screen.getByText('').closest('.page-divider');
        const lines = divider?.querySelectorAll('.page-divider__line');
        expect(lines).toHaveLength(0);
    });

    it('uses default label when not provided', () => {
        render(<PageDivider variant="labelled" />);
        expect(screen.getByText('Or pay by card')).toBeInTheDocument();
    });
});
