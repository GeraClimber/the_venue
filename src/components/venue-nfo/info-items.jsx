import React from "react";
import Zoom from 'react-reveal/Zoom'

export const InfoItems = ({items}) =>
    items.map(item =>
        <Zoom duration={500}>
            <div className="vn_item">
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className={`vn_icon_square ${item.backgroundClass}`} />
                        <div
                            className="vn_icon"
                            style={{
                                background: `url(${item.icon})`
                            }}
                        />
                        <div className="vn_title">
                            {item.title}
                        </div>
                        <div className="vn_desc">
                            {item.info}
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
