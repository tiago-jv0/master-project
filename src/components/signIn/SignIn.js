import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './SignInStyles';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = ({ target: input }) => {
        this.setState({
            [input.name]: input.value,
        });
    };

    render() {
        const { email, password } = this.state;

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <p className="sign-in__subtitle">Sign in with your email and password</p>

                <form action="#" onSubmit={this.handleSubmit}>
                    <FormInput
                        onChange={this.handleChange}
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        label="email"
                        required
                    />

                    <FormInput
                        onChange={this.handleChange}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        label="password"
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
