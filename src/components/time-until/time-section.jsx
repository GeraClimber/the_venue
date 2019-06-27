import React from "react";

export const TimeSection = ({title, key, value}) => {
    return (
        <div className="countdown_item" key={key}>
            <div className="countdown_time">
                {value}
            </div>
            <div className="countdown_tag">
                {title}
            </div>
        </div>
    );
};
