import React from 'react';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import './Header.scss';
import CategoryBar from "./CategoryBar/CategoryBar";

function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__text">
                    <p className="header__title">Главная</p>
                    <p className="header__date">17 июля 2021</p>
                </div>
                <div className="header__logo">
                    <a href="/">
                        <Logo/>
                    </a>
                </div>
            </div>
            <CategoryBar/>
        </header>
    )
}

export default Header;