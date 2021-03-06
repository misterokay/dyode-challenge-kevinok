import React from 'react';

const RightArrow = ({ onClick, ...rest }) => {
    return (
        <div onClick={() => onClick()} className="react-multiple-carousel__arrow--right react-multiple-carousel__arrow">
            <svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2044 19.8475L2.77812 0.47495C2.14164 -0.159395 1.11117 -0.158329 0.475761 0.478231C-0.159158 1.11471 -0.157518 2.14576 0.479042 2.78059L18.749 21.0001L0.478386 39.2195C-0.158092 39.8544 -0.159733 40.8848 0.475104 41.5213C0.793631 41.8404 1.21092 42 1.62821 42C2.04444 42 2.46009 41.8415 2.77804 41.5246L22.2044 22.1526C22.5109 21.8476 22.6829 21.4325 22.6829 21.0001C22.6829 20.5676 22.5104 20.153 22.2044 19.8475Z" fill="black" />
            </svg>
        </div>
    )
}

export default RightArrow;