import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...buttonProperties }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...buttonProperties}>
            {children}
        </button>
    );
};

export default CustomButton;
