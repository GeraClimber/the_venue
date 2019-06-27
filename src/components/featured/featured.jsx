import React from 'react';
import {Carousel, TimeUntil} from './../../components';

export const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>

            <TimeUntil/>
        </div>
    );
};
