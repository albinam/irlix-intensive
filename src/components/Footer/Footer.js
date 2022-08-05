import React from 'react';
import './Footer.scss';
import {useDispatch, useSelector} from "react-redux";
import {setFilteredDrinks, setSearchTitle} from "../../redux/actions/actions";
import {filter} from "../../assets/utils/filter";

function Footer() {
    const dispatch = useDispatch();
    const drinks = useSelector(state => state.drinks.drinks);
    const category = useSelector(state => state.drinks.selectedCategory);
    const searchTitle = useSelector(state => state.drinks.searchTitle);

    const handleChange = (e) => {
        dispatch(setFilteredDrinks(filter(category,e.currentTarget.value,drinks)));
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
}

export default Footer;