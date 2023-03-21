import React from 'react';

const ShineCard = ({ title, body, FaIcon }) => {
    return (
        <div className="shineCard">
            <div className="shineCard-content">
                <div className="shineCard-image">{FaIcon}</div>
                <div className="shineCard-info-wrapper">
                    <div className="shineCard-info">
                        <i className="fa-duotone fa-unicorn"></i>
                        <div className="shineCard-info-title">
                            <h3>{title}</h3>
                            <h4>{body}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShineCard;
