import React from 'react';
import './customButton.scss'

const CustomButton = ({children , ...buttonProperties}) => {
    return (
        <button className='custom-button' {...buttonProperties}>
            {children}
        </button>
    )
}

export default CustomButton
