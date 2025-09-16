import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
    it('renders with default props', () => {
        render(<PageHeader />);
        expect(screen.getByText('Edit order')).toBeInTheDocument();
        expect(screen.getByText('Checkout')).toBeInTheDocument();
        expect(screen.getByText('Slanted Door Supper Club')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <PageHeader
                backText="Go back"
                title="Custom Title"
                subtitle="Custom Subtitle"
            />
        );
        expect(screen.getByText('Go back')).toBeInTheDocument();
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
        expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
    });

    it('renders without back button when showBackButton is false', () => {
        render(<PageHeader showBackButton={false} />);
        expect(screen.queryByText('Edit order')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Go back' })).not.toBeInTheDocument();
    });

    it('renders without subtitle when not provided', () => {
        render(<PageHeader subtitle="" />);
        expect(screen.queryByText('Slanted Door Supper Club')).not.toBeInTheDocument();
        expect(screen.getByText('Checkout')).toBeInTheDocument();
    });

    it('calls onBack when back button is clicked', () => {
        const handleBack = jest.fn();
        render(<PageHeader onBack={handleBack} />);

        const backButton = screen.getByRole('button', { name: 'Go back' });
        fireEvent.click(backButton);

        expect(handleBack).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<PageHeader className="custom-class" />);
        expect(screen.getByText('Checkout').closest('.page-header')).toHaveClass('custom-class');
    });

    it('renders title as h1 element', () => {
        render(<PageHeader title="Test Title" />);
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Test Title');
    });

    it('has proper accessibility attributes', () => {
        render(<PageHeader />);
        const backButton = screen.getByRole('button', { name: 'Go back' });
        expect(backButton).toHaveAttribute('type', 'button');
        expect(backButton).toHaveAttribute('aria-label', 'Go back');
    });

    it('renders back button with correct icon', () => {
        render(<PageHeader />);
        const backButton = screen.getByRole('button', { name: 'Go back' });
        const svg = backButton.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});
