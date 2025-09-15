import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('renders with accent style', () => {
        render(<Button style="accent">Accent Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--accent');
    });

    it('renders with primary style', () => {
        render(<Button style="primary">Primary Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--primary');
    });

    it('renders with secondary style', () => {
        render(<Button style="secondary">Secondary Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--secondary');
    });

    it('handles disabled state', () => {
        render(<Button disabled>Disabled Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('handles click events when not disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Clickable Button</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not handle click events when disabled', () => {
        const handleClick = jest.fn();
        render(<Button disabled onClick={handleClick}>Disabled Button</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders with icon by default', () => {
        render(<Button>Button with Icon</Button>);
        const icon = screen.getByRole('button').querySelector('.button__icon');
        expect(icon).toBeInTheDocument();
    });

    it('does not render icon when showIcon is false', () => {
        render(<Button showIcon={false}>Button without Icon</Button>);
        const icon = screen.getByRole('button').querySelector('.button__icon');
        expect(icon).not.toBeInTheDocument();
    });

    it('renders custom icon when provided', () => {
        const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;
        render(<Button icon={<CustomIcon />}>Button with Custom Icon</Button>);
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
});
