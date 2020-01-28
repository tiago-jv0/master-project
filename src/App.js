import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/userActions';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;

        return (
            <div className="App">
                <Header></Header>
                <Switch>
                    <Route
                        exact
                        path="/signIn"
                        render={() =>
                            currentUser ? <Redirect to="/"></Redirect> : <SignInAndSignUp></SignInAndSignUp>
                        }
                    />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
