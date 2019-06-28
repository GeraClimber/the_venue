import React from 'react';
import {Description} from './description';
import {Discount} from './discount'

export const Highlights = () => {
    return (
        <div className="highlight_wrapper">
            <Description />
            <Discount />
        </div>
    );
};
