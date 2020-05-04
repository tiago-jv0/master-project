import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import Spinner from './components/Spinner/Spinner';

import { GlobalStyle } from './globalStyles';

import { selectCurrentUser } from './redux/selectors/userSelector';
import { checkUserSession } from './redux/actions/userActions';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ShopPage = lazy(() => import('./pages/shopPage/ShopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/signInAndSignUp/SignInAndSignUp'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner></Spinner>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() => (currentUser ? <Redirect to="/"></Redirect> : <SignInAndSignUpPage></SignInAndSignUpPage>)}
          />
        </Suspense>
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
