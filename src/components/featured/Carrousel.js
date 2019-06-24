import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

const IMAGES = [slide_one, slide_two, slide_three];
const CAROUSEL_SETTINGS = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000
};

const Carrousel = () => {
    const containerHeight = window.innerHeight;
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${containerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...CAROUSEL_SETTINGS}>
                <div>
                    {
                        IMAGES.map(image => (
                            <div
                                className="carrousel_image"
                                style={{
                                    background: `url(${image})`,
                                    height: `${containerHeight}px`
                                }}
                            />
                        ))}
                </div>
            </Slider>

        </div>
    );
};

export default Carrousel;