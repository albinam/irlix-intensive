import React from 'react';
import './CategoryBar.scss';
import {categories} from "../../../assets/data/temporaryData";
import {setCategory} from "../../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(state => state.drinks.selectedCategory);

    const handleClick = (e) => {
        dispatch(setCategory(e.currentTarget.value))
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