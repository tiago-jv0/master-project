import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
