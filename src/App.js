import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route exact path="/signIn" component={SignInAndSignUp} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
