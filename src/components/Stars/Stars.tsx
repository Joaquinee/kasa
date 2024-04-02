import React from 'react';

interface StarsProps {
    rating: string | number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
    const maxRating = 5;
    // Remplacez les valeurs fullStar et emptyStar par les chemins d'accès de vos images
    const fullStarImage = require('../../assets/stars_v.png');
    const emptyStarImage = require('../../assets/stars_n.png');;

    const renderStars = () => {
        const stars = [];
        const ratingNumber = Number(rating);
        for (let i = 1; i <= maxRating; i++) {
            if (i <= ratingNumber) {
                stars.push(<img  key={i} src={fullStarImage} alt="Full star" className="star-image" />);
            } else {
                stars.push(<img key={i} src={emptyStarImage} alt="Empty star" className="star-image" />);
            }
        }
        return stars;
    };

    return <div>{renderStars()}</div>;
};

export default Stars;
