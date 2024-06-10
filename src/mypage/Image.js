import React from 'react';

const Image = ({id, link}) => {
    return (
        <div key={id}>
            <img src={link} alt={`generated image ${id}`}></img>
        </div>
    );
};

export default Image;