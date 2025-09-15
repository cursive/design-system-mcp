import { render, screen } from '@testing-library/react';
import { PanelHeader } from './PanelHeader';

describe('PanelHeader', () => {
    it('renders with default props', () => {
        render(<PanelHeader />);
        expect(screen.getByText("What you'll get")).toBeInTheDocument();
    });

    it('renders with custom title', () => {
        render(<PanelHeader title="Custom Title" />);
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
    });

    it('renders with custom eyebrow', () => {
        render(<PanelHeader eyebrow="Custom Eyebrow" />);
        expect(screen.getByText('Custom Eyebrow')).toBeInTheDocument();
    });

    it('renders with custom subtitle', () => {
        render(<PanelHeader subtitle="Custom Subtitle" />);
        expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
    });

    it('renders secondary hierarchy', () => {
        render(<PanelHeader hierarchy="Secondary" />);
        const title = screen.getByText("What you'll get");
        expect(title).toHaveClass('panel-header__title--secondary');
    });

    it('renders default hierarchy', () => {
        render(<PanelHeader hierarchy="Default" />);
        const title = screen.getByText("What you'll get");
        expect(title).toHaveClass('panel-header__title--default');
    });

    it('hides eyebrow when showEyebrow is false', () => {
        render(<PanelHeader showEyebrow={false} />);
        expect(screen.queryByText("What you'll get")).not.toBeInTheDocument();
    });

    it('hides icon when showIcon is false', () => {
        render(<PanelHeader showIcon={false} />);
        const iconContainer = document.querySelector('.panel-header__icon');
        expect(iconContainer).not.toBeInTheDocument();
    });

    it('hides subtitle when showSub is false', () => {
        render(<PanelHeader showSub={false} />);
        expect(screen.queryByText('Sub')).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<PanelHeader className="custom-class" />);
        const panelHeader = document.querySelector('.panel-header');
        expect(panelHeader).toHaveClass('custom-class');
    });

    it('renders custom icon when provided', () => {
        const customIcon = <div data-testid="custom-icon">Custom Icon</div>;
        render(<PanelHeader icon={customIcon} />);
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
});

