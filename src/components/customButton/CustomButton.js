import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...buttonProperties }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...buttonProperties}>
            {children}
        </button>
    );
};

export default CustomButton;
