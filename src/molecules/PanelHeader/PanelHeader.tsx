import React from 'react';
import { PanelHeaderProps } from './PanelHeader.types';
import { PlaceholderIcon } from '../../atoms/placeholders';
import { ChevronDownIcon } from '../../atoms/ChevronDownIcon';
import './PanelHeader.css';

export const PanelHeader: React.FC<PanelHeaderProps> = ({
    hierarchy = 'Default',
    showEyebrow = true,
    showIcon = true,
    showSub = true,
    icon,
    title = "What you'll get",
    eyebrow = "What you'll get",
    subtitle = "Sub",
    className = '',
}) => {
    const combinedClassName = `panel-header ${className}`.trim();

    const eyebrowElement = showEyebrow && (
        <div className="panel-header__eyebrow" data-node-id="6105:56203">
            <p>{eyebrow}</p>
        </div>
    );

    const iconElement = showIcon && (
        <div className="panel-header__icon" data-node-id="6105:56206">
            {icon || <ChevronDownIcon size={24} color="var(--color-foreground-primary)" />}
        </div>
    );

    const subtitleElement = showSub && (
        <div className="panel-header__subtitle" data-node-id="6105:56207">
            <p>{subtitle}</p>
        </div>
    );

    const titleClassName = `panel-header__title panel-header__title--${hierarchy.toLowerCase()}`;

    if (hierarchy === 'Secondary') {
        return (
            <div className={combinedClassName} data-name="Hierarchy=Secondary" data-node-id="6105:56208">
                {eyebrowElement}
                <div className="panel-header__title-container" data-name="Title" data-node-id="6105:56210">
                    <div className={titleClassName} data-node-id="6105:56211">
                        <p>{title}</p>
                    </div>
                    {iconElement}
                </div>
                {subtitleElement}
            </div>
        );
    }

    // Default hierarchy
    return (
        <div className={combinedClassName} data-name="Hierarchy=Default" data-node-id="6105:56202">
            {eyebrowElement}
            <div className="panel-header__title-container" data-name="Title" data-node-id="6105:56204">
                <div className={titleClassName} data-node-id="6105:56205">
                    <p>{title}</p>
                </div>
                {iconElement}
            </div>
            {subtitleElement}
        </div>
    );
};


