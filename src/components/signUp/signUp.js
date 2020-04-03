import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/FormInput';
import CustomButtom from '../customButton/CustomButton';

import { signUpStart } from '../../redux/actions/userActions';


import { SignUpContainer, SignUpTitle } from './SignUpStyles';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {signUpStart} = this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        signUpStart({displayName , email, password})
    };

    handleChange = ({ target: input }) => {
        this.setState({
            [input.name]: input.value,
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle> I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form action="#" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display name"
                        required
                    ></FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    ></FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    ></FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    ></FormInput>

                    <CustomButtom type="submit">SIGN UP</CustomButtom>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
