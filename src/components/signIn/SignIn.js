import React, { Component } from 'react';
import './signIn.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        });
    };

    handleChange = ({ target: input }) => {
        this.setState({
            [input.name]: input.value,
        });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <h2 className="sign-in__title">I already have an account</h2>
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
                        required
                        value={password}
                        label="password"
                    />

                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
