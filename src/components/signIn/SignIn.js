import React, { useState } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './SignInStyles';
import { googleSignInStart, emailSignInStart } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = ({ target: input }) => {
        setUserCredentials({
            ...userCredentials,
            [input.name]: input.value,
        });
    };


    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <p className="sign-in__subtitle">Sign in with your email and password</p>

            <form action="#" onSubmit={handleSubmit}>
                <FormInput
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    label="email"
                    required
                />

                <FormInput
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    label="password"
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign In With Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
