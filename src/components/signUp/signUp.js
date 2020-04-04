import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/FormInput';
import CustomButtom from '../customButton/CustomButton';

import { signUpStart } from '../../redux/actions/userActions';

import { SignUpContainer, SignUpTitle } from './SignUpStyles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = ({ target: input }) => {
        setUserCredentials({
            ...userCredentials,
            [input.name]: input.value,
        });
    };

    return (
        <SignUpContainer>
            <SignUpTitle> I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display name"
                    required
                ></FormInput>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                ></FormInput>
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                ></FormInput>
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                ></FormInput>

                <CustomButtom type="submit">SIGN UP</CustomButtom>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
