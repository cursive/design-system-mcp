import React from 'react';
import { Button } from '../Button';
import { TextArea } from '../TextArea';
import './Dialogue.css';

export interface DialogueProps {
    /** Dialogue title */
    title?: string;
    /** Dialogue description */
    description?: string;
    /** Primary button text */
    primaryButtonText?: string;
    /** Secondary button text */
    secondaryButtonText?: string;
    /** Whether to show the text area */
    showTextArea?: boolean;
    /** Text area placeholder */
    textAreaPlaceholder?: string;
    /** Dialogue variant */
    variant?: 'default' | 'desktop';
    /** Whether the dialogue is open */
    isOpen?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Primary button click handler */
    onPrimaryClick?: () => void;
    /** Secondary button click handler */
    onSecondaryClick?: () => void;
    /** Close handler */
    onClose?: () => void;
}

export const Dialogue: React.FC<DialogueProps> = ({
    title = 'Modal template',
    description = 'Body copy',
    primaryButtonText = 'Primary',
    secondaryButtonText = 'Secondary',
    showTextArea = true,
    textAreaPlaceholder = 'Text area',
    variant = 'default',
    isOpen = true,
    className = '',
    onPrimaryClick,
    onSecondaryClick,
    onClose,
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`dialogue dialogue--${variant} ${className}`}>
            <div className="dialogue__overlay" onClick={onClose} />
            <div className="dialogue__content">
                <div className="dialogue__header">
                    <h2 className="dialogue__title">
                        {title}
                    </h2>
                    {onClose && (
                        <button
                            className="dialogue__close-button"
                            onClick={onClose}
                            aria-label="Close dialogue"
                            type="button"
                        >
                            <svg width="24" height="24" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 1L7 7L13 1"
                                    stroke="var(--color-foreground-primary)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )}
                </div>

                <p className="dialogue__description">
                    {description}
                </p>

                <div className="dialogue__spacing" />

                <div className="dialogue__form">
                    {showTextArea && (
                        <div className="dialogue__text-area">
                            <TextArea
                                placeholder={textAreaPlaceholder}
                                rows={4}
                            />
                        </div>
                    )}

                    <div className="dialogue__buttons">
                        <Button
                            style="accent"
                            onClick={onPrimaryClick}
                            className="dialogue__primary-button"
                        >
                            {primaryButtonText}
                        </Button>

                        {secondaryButtonText && (
                            <Button
                                style="secondary"
                                onClick={onSecondaryClick}
                                className="dialogue__secondary-button"
                            >
                                {secondaryButtonText}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogue;
