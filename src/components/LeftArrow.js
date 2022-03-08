import React from 'react';

const LeftArrow = ({ onClick, ...rest }) => {
    return (
        <div onClick={() => onClick()} className="react-multiple-carousel__arrow--left react-multiple-carousel__arrow">
            <svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.795637 22.1525L20.2219 41.525C20.8584 42.1594 21.8888 42.1583 22.5242 41.5218C23.1592 40.8853 23.1575 39.8542 22.521 39.2194L4.25102 20.9999L22.5216 2.78053C23.1581 2.14561 23.1597 1.11522 22.5249 0.478661C22.2064 0.159561 21.7891 7.73526e-06 21.3718 7.77174e-06C20.9556 7.80813e-06 20.5399 0.158493 20.222 0.47538L0.795637 19.8474C0.489088 20.1524 0.317066 20.5675 0.317066 20.9999C0.317066 21.4324 0.48958 21.847 0.795637 22.1525Z" fill="black" />
            </svg>
        </div>
    )
}

export default LeftArrow;