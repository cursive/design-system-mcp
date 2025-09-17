import React from 'react';
import { StarRating } from '../../molecules/StarRating';
import { PanelHeader } from '../../molecules/PanelHeader';
import { ReviewsProps, ReviewItem } from './Reviews.types';
import './Reviews.css';

export const Reviews: React.FC<ReviewsProps> = ({
    reviews = [
        {
            id: '1',
            date: 'Feb 25',
            text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
            rating: 5
        },
        {
            id: '2',
            date: 'Feb 25',
            text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
            rating: 5
        },
        {
            id: '3',
            date: 'Feb 25',
            text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
            rating: 5
        }
    ],
    showImage = true,
    className = '',
}) => {
    return (
        <div className={`reviews ${className}`} data-name="Reviews" data-node-id="5512:24694">
            <PanelHeader title="Reviews" className="reviews__header" />
            <div className="reviews__content" data-name="Content" data-node-id="5503:24546">
                {reviews.map((review) => (
                    <div key={review.id} className="reviews__review" data-name="review" data-node-id="5812:46104">
                        <div className="reviews__review-date" data-node-id="I5812:46104;6105:53342">
                            <p>{review.date}</p>
                        </div>
                        <div className="reviews__review-text" data-node-id="I5812:46104;6105:53343">
                            <p>{review.text}</p>
                        </div>
                        <div className="reviews__review-rating" data-name="star rating" data-node-id="I5812:46104;6105:53345">
                            <StarRating rating={review.rating} interactive={false} size={20} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
