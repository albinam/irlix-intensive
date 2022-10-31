import React, {memo} from 'react';
import './Footer.scss';
import {useDispatch, useSelector} from "react-redux";
import {setSearchTitle} from "../../redux/actions/actions";

const Footer = memo(() => {
    const dispatch = useDispatch();
    const searchTitle = useSelector(state => state.drinks.searchTitle);

    const handleChange = (e) => {
        dispatch(setSearchTitle(e.currentTarget.value));
    };

    return (
        <footer className="footer">
            <div className="container">
                <input className="footer__button"
                       type="text"
                       placeholder="Поиск"
                       value={searchTitle}
                       onChange={(e) => handleChange(e)}
                />
            </div>
        </footer>
    )
})

export default memo(Footer);