
import React from 'react';
import {INFO_DATA} from './constants'
import {InfoItems} from './info-items';


export const VenueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <InfoItems items={INFO_DATA}/>
                </div>
            </div>
        </div>
    );
};
