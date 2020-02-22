import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './FormInputStyles';

const FormInput = ({ onChange, label, ...props }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={onChange} {...props} />
            {label ? (
                <FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
                    {label}
                </FormInputLabel>
            ) : null}
        </GroupContainer>
    );
};

export default FormInput;
