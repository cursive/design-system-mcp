import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner', () => {
    it('renders with default props', () => {
        render(<Banner />);
        expect(screen.getByText('These can go on as many lines as needed, and can include a header too')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(<Banner>Custom banner text</Banner>);
        expect(screen.getByText('Custom banner text')).toBeInTheDocument();
    });

    it('applies correct type classes', () => {
        const { rerender } = render(<Banner type="default" />);
        expect(screen.getByText(/These can go on/).closest('.banner')).toHaveClass('banner--default');

        rerender(<Banner type="success" />);
        expect(screen.getByText(/These can go on/).closest('.banner')).toHaveClass('banner--success');

        rerender(<Banner type="warning" />);
        expect(screen.getByText(/These can go on/).closest('.banner')).toHaveClass('banner--warning');

        rerender(<Banner type="alert" />);
        expect(screen.getByText(/These can go on/).closest('.banner')).toHaveClass('banner--alert');
    });

    it('renders left icon by default', () => {
        render(<Banner />);
        const leftIcon = screen.getByText(/These can go on/).closest('.banner')?.querySelector('.banner__left-icon');
        expect(leftIcon).toBeInTheDocument();
    });

    it('does not render left icon when showLeftIcon is false', () => {
        render(<Banner showLeftIcon={false} />);
        const leftIcon = screen.getByText(/These can go on/).closest('.banner')?.querySelector('.banner__left-icon');
        expect(leftIcon).not.toBeInTheDocument();
    });

    it('renders close button by default', () => {
        render(<Banner />);
        expect(screen.getByRole('button', { name: 'Close banner' })).toBeInTheDocument();
    });

    it('does not render close button when showRightIcon is false', () => {
        render(<Banner showRightIcon={false} />);
        expect(screen.queryByRole('button', { name: 'Close banner' })).not.toBeInTheDocument();
    });

    it('does not render close button when dismissible is false', () => {
        render(<Banner dismissible={false} />);
        expect(screen.queryByRole('button', { name: 'Close banner' })).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = jest.fn();
        render(<Banner onClose={handleClose} />);

        const closeButton = screen.getByRole('button', { name: 'Close banner' });
        fireEvent.click(closeButton);

        expect(handleClose).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Banner className="custom-class" />);
        expect(screen.getByText(/These can go on/).closest('.banner')).toHaveClass('custom-class');
    });

    it('renders different icons for different types', () => {
        const { rerender } = render(<Banner type="success" />);
        let svg = screen.getByText(/These can go on/).closest('.banner')?.querySelector('svg');
        expect(svg).toBeInTheDocument();

        rerender(<Banner type="warning" />);
        svg = screen.getByText(/These can go on/).closest('.banner')?.querySelector('svg');
        expect(svg).toBeInTheDocument();

        rerender(<Banner type="alert" />);
        svg = screen.getByText(/These can go on/).closest('.banner')?.querySelector('svg');
        expect(svg).toBeInTheDocument();

        rerender(<Banner type="default" />);
        svg = screen.getByText(/These can go on/).closest('.banner')?.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });

    it('handles long text properly', () => {
        const longText = 'This is a very long banner message that should wrap properly and display across multiple lines to test the layout and ensure the text flows correctly within the banner container.';
        render(<Banner>{longText}</Banner>);
        expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
        render(<Banner />);
        const closeButton = screen.getByRole('button', { name: 'Close banner' });
        expect(closeButton).toHaveAttribute('type', 'button');
        expect(closeButton).toHaveAttribute('aria-label', 'Close banner');
    });
});
