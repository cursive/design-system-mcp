import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
    it('renders with default props', () => {
        render(<Icon name="search" />);
        const icon = screen.getByRole('img', { hidden: true });
        expect(icon).toBeInTheDocument();
    });

    it('renders with custom size', () => {
        render(<Icon name="search" size={32} />);
        const icon = screen.getByRole('img', { hidden: true });
        expect(icon).toHaveStyle({ width: '32px', height: '32px' });
    });

    it('renders with custom color', () => {
        render(<Icon name="search" color="#ff0000" />);
        const icon = screen.getByRole('img', { hidden: true });
        expect(icon).toHaveStyle({ color: '#ff0000' });
    });

    it('applies custom className', () => {
        render(<Icon name="search" className="custom-class" />);
        const icon = screen.getByRole('img', { hidden: true });
        expect(icon).toHaveClass('custom-class');
    });

    it('handles non-decorative icon with aria-label', () => {
        render(<Icon name="search" decorative={false} aria-label="Search" />);
        const icon = screen.getByRole('img');
        expect(icon).toHaveAttribute('aria-label', 'Search');
        expect(icon).not.toHaveAttribute('aria-hidden');
    });

    it('handles decorative icon', () => {
        render(<Icon name="search" decorative={true} />);
        const icon = screen.getByRole('img', { hidden: true });
        expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('warns when icon name is not found', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
        render(<Icon name="nonexistent" />);
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Icon "nonexistent" not found')
        );
        consoleSpy.mockRestore();
    });

    it('returns null for non-existent icon', () => {
        const { container } = render(<Icon name="nonexistent" />);
        expect(container.firstChild).toBeNull();
    });
});

