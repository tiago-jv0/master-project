import React from 'react';
import './formInput.scss';

const FormInput = ({ onChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input type="text" onChange={onChange} className="form-input" {...otherProps} />
            {label ? (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            ) : null}
        </div>
    );
};

export default FormInput;
