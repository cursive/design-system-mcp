import React from 'react';
import { PanelHeader } from '../../molecules/PanelHeader';
import { SupportingProps } from './Supporting.types';
import supportingPhoto from '../../assets/supporting.png';
import './Supporting.css';

export const Supporting: React.FC<SupportingProps> = ({
    showImage = true,
    variant = 'default',
    className = '',
}) => {
    const title = (
        <PanelHeader
            title="Who you're supporting"
            className="supporting__header"
            showEyebrow={false}
            showIcon={false}
            showSub={false}
        />
    );

    const containerPadded = (
        <div className="supporting__container-padded" data-name="container-padded">
            <div className="supporting__text">
                <p>I grew up watching my aunt cook and exploring San Francisco's food scene. Instead of a night out, I wanted to create something you could enjoy at home—relaxed, personal, and just as special.</p>
            </div>
        </div>
    );

    if (variant === 'default') {
        return (
            <div className={`supporting supporting--default ${className}`} data-name="Property 1=Default" data-node-id="5814:19419">
                <div className="supporting__header supporting__header--default" data-name="Title" data-node-id="5832:68232">
                    {title}
                </div>
                <div className="supporting__content supporting__content--default" data-name="Content" data-node-id="5814:19422">
                    {showImage && (
                        <div className="supporting__image supporting__image--default" data-name="Image" data-node-id="5814:19423">
                            <div className="supporting__image-content supporting__image-content--default" data-name="image 39" data-node-id="5814:19424" style={{ backgroundImage: `url('${supportingPhoto}')` }} />
                        </div>
                    )}
                    {containerPadded}
                </div>
            </div>
        );
    }

    return (
        <div className={`supporting supporting--desktop ${className}`} data-name="Property 1=_Desktop" data-node-id="5806:44312">
            <div className="supporting__header" data-name="Title" data-node-id="5832:65622">
                {title}
            </div>
            <div className="supporting__content" data-name="Content" data-node-id="5806:44315">
                {showImage && (
                    <div className="supporting__image supporting__image--desktop" data-name="Image" data-node-id="5806:44339">
                        <div className="supporting__image-content supporting__image-content--desktop" data-name="image 40" data-node-id="5876:101947" style={{ backgroundImage: `url('${supportingPhoto}')` }} />
                    </div>
                )}
                {containerPadded}
            </div>
        </div>
    );
};

export default Supporting;
