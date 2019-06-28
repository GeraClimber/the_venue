import React from 'react';

import {IMAGES} from "./constants";

export const CarposelItems = ({images, height}) => (

    IMAGES.map(image => (
        <div key={image}>
            <div
                className="carrousel_image"
                style={{
                    background: `url(${image})`,
                    height: `${height}px`,
                }}
            />
        </div>
    ))

);
