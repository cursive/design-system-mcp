import '../../tokens/base.css';
import React from 'react';
import { CarouselNav } from '../../molecules/CarouselNav';
import { CarouselPips } from '../../molecules/CarouselPips';
import { CarouselProps, CarouselImage } from './Carousel.types';
import './Carousel.css';

// Import the hero photo as a placeholder
import heroPhoto from '../../assets/hero.png';

export const Carousel: React.FC<CarouselProps> = ({
    variant = 'default',
    images = [
        { id: '1', src: heroPhoto, alt: 'Hero food image', aspectRatio: '345/258' },
        { id: '2', src: heroPhoto, alt: 'Hero food image', aspectRatio: '786/1101' },
        { id: '3', src: heroPhoto, alt: 'Hero food image', aspectRatio: '585/877' },
        { id: '4', src: heroPhoto, alt: 'Hero food image', aspectRatio: '786/524' },
        { id: '5', src: heroPhoto, alt: 'Hero food image', aspectRatio: '345/260' },
        { id: '6', src: heroPhoto, alt: 'Hero food image', aspectRatio: '501' },
    ],
    className = '',
}) => {
    if (variant === 'default') {
        return (
            <div className={`carousel carousel--default ${className}`} data-name="Property 1=Default" data-node-id="5838:95538">
                <div className="carousel__image carousel__image--single" data-name="image 65" data-node-id="5878:140899" style={{ backgroundImage: `url('${images[0]?.src}')` }} />
                <div className="carousel__pips" data-name="Carousel pips" data-node-id="6105:60649">
                    <CarouselPips totalItems={3} activeIndex={0} />
                </div>
            </div>
        );
    }

    if (variant === 'mobile-desktop') {
        return (
            <div className={`carousel carousel--mobile-desktop ${className}`} data-name="Property 1=Mobile desktop" data-node-id="5838:98487">
                <div className="carousel__image carousel__image--mobile-desktop" data-name="image 91" data-node-id="5838:98504" style={{ backgroundImage: `url('${images[1]?.src}')` }} />
                <div className="carousel__pips carousel__pips--mobile" data-name="Carousel pips" data-node-id="5838:98489">
                    <img alt="Carousel pips" className="block max-w-none size-full" src="http://localhost:3845/assets/22f5e69fb612e4139d2c2790c27e96c4b47cd56f.svg" />
                </div>
            </div>
        );
    }

    return (
        <div className={`carousel carousel--desktop ${className}`} data-name="Property 1=Desktop" data-node-id="5838:93055">
            <div className="carousel__images" data-name="Images" data-node-id="5838:92769">
                {images.map((image, index) => {
                    let imageClass = 'carousel__image';
                    if (image.aspectRatio === '345/258') imageClass += ' carousel__image--345-258';
                    else if (image.aspectRatio === '786/1101') imageClass += ' carousel__image--786-1101';
                    else if (image.aspectRatio === '585/877') imageClass += ' carousel__image--585-877';
                    else if (image.aspectRatio === '786/524') imageClass += ' carousel__image--786-524';
                    else if (image.aspectRatio === '345/260') imageClass += ' carousel__image--345-260';
                    else if (image.aspectRatio === '501') imageClass += ' carousel__image--501';

                    return (
                        <div
                            key={image.id}
                            className={imageClass}
                            data-name={`image ${index + 1}`}
                            style={{ backgroundImage: `url('${image.src}')` }}
                        />
                    );
                })}
                <div className="absolute bg-[#d9d9d9] h-[31px] left-[1160px] top-[240px] w-[13px]" data-node-id="5901:40502" />
            </div>
            <div className="carousel__nav" data-name="Carousel nav" data-node-id="6117:51827">
                <CarouselNav />
            </div>
        </div>
    );
};

export default Carousel;
