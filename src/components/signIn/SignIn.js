import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './SignInStyles';
import { googleSignInStart, emailSignInStart } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    };

    handleChange = ({ target: input }) => {
        this.setState({
            [input.name]: input.value,
        });
    };

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;

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
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            {' '}
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
