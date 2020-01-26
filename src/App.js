import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    } , () => console.log(this.state));
                });
            } else {
                this.setState({
                    currentUser: null,
                });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="App">
                <Header currentUser={currentUser}></Header>
                <Switch>
                    <Route exact path="/signIn" component={SignInAndSignUp} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
