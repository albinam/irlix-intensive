import React from 'react';
import './CategoryBar.scss';
import {categories} from "../../../assets/data/temporaryData";
import {setCategory, setFilteredDrinks} from "../../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {filter} from "../../../assets/utils/filter";

function Header() {
    const dispatch = useDispatch();
    const drinks = useSelector(state => state.drinks.drinks);
    const selectedCategory = useSelector(state => state.drinks.selectedCategory);
    const searchTitle = useSelector(state => state.drinks.searchTitle);
    const handleClick = (e) => {
        dispatch(setCategory(e.currentTarget.value))
        dispatch(setFilteredDrinks(filter(e.currentTarget.value,searchTitle,drinks)));
    };
    return (
        <ul className='header__filter'>
            {categories.map((category, index) => (
                <li key={index} value={category.id}
                    className={category.id === selectedCategory ? "header__filter-button active" : "header__filter-button"}
                    onClick={(e) => handleClick(e)}
                >{category.title}
                </li>
            ))}
        </ul>
    )
}

export default Header;