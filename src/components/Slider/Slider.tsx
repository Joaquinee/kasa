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

    const handleImageSelect = (index: number) => {
        setCurrentImageIndex(index);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

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
                        {images.map((image, index) => (
                            <input 
                                key={index} 
                                type="radio" 
                                name="controls" 
                                checked={currentImageIndex === index} 
                                onChange={() => handleImageSelect(index)} // Appel de la fonction handleImageSelect lorsqu'un input est modifié
                                readOnly 
                            />
                        ))}
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
