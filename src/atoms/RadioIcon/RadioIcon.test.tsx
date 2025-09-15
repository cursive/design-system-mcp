import { render, screen } from '@testing-library/react';
import { RadioIcon } from './RadioIcon';

describe('RadioIcon', () => {
    it('renders with default props', () => {
        render(<RadioIcon />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toBeInTheDocument();
    });

    it('renders small variant', () => {
        render(<RadioIcon size="small" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toHaveClass('radio-icon--small');
    });

    it('renders regular variant', () => {
        render(<RadioIcon size="regular" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toHaveClass('radio-icon--regular');
    });

    it('renders checked state', () => {
        render(<RadioIcon state="checked" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<RadioIcon className="custom-class" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toHaveClass('custom-class');
    });

    it('applies custom color', () => {
        render(<RadioIcon color="#ff0000" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toHaveStyle({ color: '#ff0000' });
    });

    it('applies size override', () => {
        render(<RadioIcon sizeOverride="32px" />);
        const radioIcon = screen.getByRole('img', { hidden: true });
        expect(radioIcon).toHaveStyle({ width: '32px', height: '32px' });
    });
});

