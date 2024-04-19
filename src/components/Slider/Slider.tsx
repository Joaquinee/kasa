import React, { useState, useEffect } from 'react';
import './Slider.scss';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

 

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className='slider-container'>
           <div className="slide">
            <img className='slider-image' src={images[currentImageIndex]} alt="Slider Image" />
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
