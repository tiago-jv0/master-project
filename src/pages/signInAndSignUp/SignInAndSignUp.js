import React from 'react';
import './signInAndSignUp.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/signUp';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export default SignInAndSignUp;
