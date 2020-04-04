import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';

import { selectCurrentUser } from './redux/selectors/userSelector';
import { checkUserSession } from './redux/actions/userActions';

const App = ({ checkUserSession, currentUser }) => {

    useEffect(() => {
        checkUserSession()
    } , [checkUserSession])

    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signIn"
                    render={() => (currentUser ? <Redirect to="/"></Redirect> : <SignInAndSignUp></SignInAndSignUp>)}
                />
            </Switch>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
