import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homePage/HomePage';

const Hats = (props) => {
    return <h1>Hats</h1>;
};

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />

                <Route exact path="/shop/hats" component={Hats} />
            </Switch>
        </div>
    );
}

export default App;
