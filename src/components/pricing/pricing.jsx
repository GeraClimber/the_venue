import React from 'react'
import Zoom from 'react-reveal/Zoom'
import MyButton from '../utils/MyButton'
import {PRICE_ITEMS} from './constants';

const showBoxes = () => (
    PRICE_ITEMS.map(box => {
        const {
            price, position, desc, link, delay = 0
        } = box;
        return (
            <Zoom key={position} delay={delay}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>$ {price}</span>
                            <span>{position}</span>
                        </div>
                        <div className="pricing_description">
                            {desc}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={link}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        );
    })
);

export const Pricing = () => (
    <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

            <div className="pricing_wrapper">
                {showBoxes()}
            </div>
        </div>
    </div>
);
