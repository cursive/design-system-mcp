import React from 'react';
import './ComponentSection.css';

export interface ComponentSectionProps {
    /** Title of the component section */
    title: string;
    /** The actual component to display */
    component: React.ReactNode;
    /** The controls for the component */
    controls: React.ReactNode;
    /** Additional CSS class name */
    className?: string;
}

export const ComponentSection: React.FC<ComponentSectionProps> = ({
    title,
    component,
    controls,
    className = '',
}) => {
    return (
        <div className={`component-section ${className}`}>
            <h3 className="component-title">{title}</h3>

            <div className="component-demo">
                <div className="left">
                    {component}
                </div>

                <div className="right">
                    <h4 className="subtitle">Controls</h4>
                    {controls}
                </div>
            </div>
        </div>
    );
};

export default ComponentSection;
