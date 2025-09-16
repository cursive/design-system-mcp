import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dialogue } from './Dialogue';

describe('Dialogue', () => {
    it('renders when open', () => {
        render(<Dialogue isOpen={true} />);
        expect(screen.getByText('Modal template')).toBeInTheDocument();
        expect(screen.getByText('Body copy')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        render(<Dialogue isOpen={false} />);
        expect(screen.queryByText('Modal template')).not.toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <Dialogue
                title="Custom title"
                description="Custom description"
                primaryButtonText="Custom primary"
                secondaryButtonText="Custom secondary"
                isOpen={true}
            />
        );
        expect(screen.getByText('Custom title')).toBeInTheDocument();
        expect(screen.getByText('Custom description')).toBeInTheDocument();
        expect(screen.getByText('Custom primary')).toBeInTheDocument();
        expect(screen.getByText('Custom secondary')).toBeInTheDocument();
    });

    it('renders text area when showTextArea is true', () => {
        render(<Dialogue showTextArea={true} isOpen={true} />);
        expect(screen.getByPlaceholderText('Text area')).toBeInTheDocument();
    });

    it('does not render text area when showTextArea is false', () => {
        render(<Dialogue showTextArea={false} isOpen={true} />);
        expect(screen.queryByPlaceholderText('Text area')).not.toBeInTheDocument();
    });

    it('applies desktop variant class', () => {
        render(<Dialogue variant="desktop" isOpen={true} />);
        expect(screen.getByText('Modal template').closest('.dialogue')).toHaveClass('dialogue--desktop');
    });

    it('applies default variant class', () => {
        render(<Dialogue variant="default" isOpen={true} />);
        expect(screen.getByText('Modal template').closest('.dialogue')).toHaveClass('dialogue--default');
    });

    it('calls onPrimaryClick when primary button is clicked', () => {
        const handlePrimaryClick = jest.fn();
        render(<Dialogue onPrimaryClick={handlePrimaryClick} isOpen={true} />);

        const primaryButton = screen.getByText('Primary');
        fireEvent.click(primaryButton);

        expect(handlePrimaryClick).toHaveBeenCalled();
    });

    it('calls onSecondaryClick when secondary button is clicked', () => {
        const handleSecondaryClick = jest.fn();
        render(<Dialogue onSecondaryClick={handleSecondaryClick} isOpen={true} />);

        const secondaryButton = screen.getByText('Secondary');
        fireEvent.click(secondaryButton);

        expect(handleSecondaryClick).toHaveBeenCalled();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = jest.fn();
        render(<Dialogue onClose={handleClose} isOpen={true} />);

        const closeButton = screen.getByRole('button', { name: 'Close dialogue' });
        fireEvent.click(closeButton);

        expect(handleClose).toHaveBeenCalled();
    });

    it('calls onClose when overlay is clicked', () => {
        const handleClose = jest.fn();
        render(<Dialogue onClose={handleClose} isOpen={true} />);

        const overlay = screen.getByText('Modal template').closest('.dialogue')?.querySelector('.dialogue__overlay');
        fireEvent.click(overlay!);

        expect(handleClose).toHaveBeenCalled();
    });

    it('renders title as h2 element', () => {
        render(<Dialogue title="Test title" isOpen={true} />);
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Test title');
    });

    it('applies custom className', () => {
        render(<Dialogue className="custom-class" isOpen={true} />);
        expect(screen.getByText('Modal template').closest('.dialogue')).toHaveClass('custom-class');
    });

    it('renders without secondary button when secondaryButtonText is empty', () => {
        render(<Dialogue secondaryButtonText="" isOpen={true} />);
        expect(screen.queryByText('Secondary')).not.toBeInTheDocument();
    });

    it('renders close button only when onClose is provided', () => {
        const { rerender } = render(<Dialogue isOpen={true} />);
        expect(screen.queryByRole('button', { name: 'Close dialogue' })).not.toBeInTheDocument();

        rerender(<Dialogue onClose={() => { }} isOpen={true} />);
        expect(screen.getByRole('button', { name: 'Close dialogue' })).toBeInTheDocument();
    });
});
