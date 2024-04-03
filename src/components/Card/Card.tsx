import React from 'react';
import './Card.scss';

interface CardProps {
    title: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
    return (
        <div className="card">
           <img src={image} alt="image"/>
            <p>{title}</p>
        </div>
    );
};

export default Card;