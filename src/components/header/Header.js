import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import './header.scss';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

import { selectCartHidden } from '../../redux/selectors/cartSelectors';
import { selectCurrentUser } from '../../redux/selectors/userSelector';
const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signIn">
                        SIGN IN
                    </Link>
                )}

                <CartIcon></CartIcon>
            </div>
            {hidden ? null : <CartDropdown></CartDropdown>}
        </div>
    );
};

const mapStateToProps = (state) => createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);
