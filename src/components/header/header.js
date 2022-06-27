import React from 'react';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__text">
                <p className="header__title">Главная</p>
                <p className="header__date">17 июля 2021</p>
            </div>
            <div className="header__logo">
                <a href="/">
                    <Logo/>
                </a>
            </div>
        </header>
    )
}

export default Header;