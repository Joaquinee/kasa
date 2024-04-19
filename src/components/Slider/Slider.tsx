import React, { useState, useEffect, useCallback } from 'react';
import './Slider.scss';

interface SliderProps {
    images: string[];
    alt: string;

}

const Slider: React.FC<SliderProps> = ({ images, alt }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    const previousImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images]);


    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentImageIndex, nextImage]);

    return (
        <div className='slider-container'>
           <div className="slide">
            <img className='slider-image' src={images[currentImageIndex]} alt={alt} />
           </div>
            {images.length > 1 && (
                <div>
                     <div className='current'>
                       <p>{currentImageIndex +1}/{images.length} </p>
                    </div>
                 
                <div className='slider-buttons'>
                    <button className='arrow-button' onClick={previousImage}>
                        <img src={require('../../assets/arrow_left.png')} alt='Previous' />
                    </button>
                    <button className='arrow-button' onClick={nextImage}>
                        <img src={require('../../assets/arrow_right.png')} alt='Next' />
                    </button>
                </div>
                </div>
            )}
           
        </div>
    );
};

export default Slider;
