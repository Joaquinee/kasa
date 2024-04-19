import React from 'react';
import './Banner.scss';

interface BannerProps {
    title: string;
    image: string;
}

const Banner: React.FC<BannerProps> = ({ title, image }) => {
    return (
        <section className="head">
            <img src={image} alt="fonds_un" />
             {title? <h1>{title}</h1> : null}
        </section>
    );
};

export default Banner;