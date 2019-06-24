import React from 'react';

export const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.4686004977535!2d37.547781008769235!3d55.665552575922156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cde55582bfd%3A0xa6e306be82cbdf0a!2z0JDQt9Cx0YPQutCwINCS0LrRg9GB0LA!5e0!3m2!1sru!2sru!4v1559416632362!5m2!1sru!2sru"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            />

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};
