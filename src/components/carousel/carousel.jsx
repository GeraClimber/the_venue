import React from 'react';
import Slider from 'react-slick';
import {CAROUSEL_SETTINGS, IMAGES} from "./constants";

export const Carousel = () => {
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
                {IMAGES.map(image => (
                    <div>
                        <div
                            className="carrousel_image"
                            style={{
                                background: `url(${image})`,
                                height: `${containerHeight}px`,
                            }}
                        />
                    </div>
                ))}

                {/*<CarposelItems images={IMAGES} height={containerHeight} />*/}
            </Slider>
        </div>
    )
};
