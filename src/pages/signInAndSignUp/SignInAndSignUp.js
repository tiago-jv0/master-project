import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/signUp';

import {SignInAndSignUpContainer} from './SignInAndSignUpStyles'

const SignInAndSignUp = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </SignInAndSignUpContainer>
    );
};

export default SignInAndSignUp;
