import React from 'react';

import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

import { selectCartHidden } from '../../redux/selectors/cartSelectors';
import { selectCurrentUser } from '../../redux/selectors/userSelector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';
const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as="div" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signIn">SIGN IN</OptionLink>
                )}

                <CartIcon></CartIcon>
            </OptionsContainer>
            {hidden ? null : <CartDropdown></CartDropdown>}
        </HeaderContainer>
    );
};

const mapStateToProps = (state) =>
    createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden,
    });

export default connect(mapStateToProps)(Header);
