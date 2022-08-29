import React from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as ButtonBack} from '../../assets/images/button-back.svg';
import "./DetailCard.scss";
import {setDrinkLoading, setDrinksLoading} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";

function DetailCard(drink) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClick = () => {
        navigate(-1);
        dispatch(setDrinksLoading(true));
    }
    return (
        <div className="container__drink">
            <section className="drink">
                <button className="button__back" onClick={onClick}>
                    <div className="button__back__image">
                        <ButtonBack/>
                    </div>
                </button>
                <div className="drink__image-wrapper">
                    <img className="drink__image" src={drink.drink.image} alt="Изображение напитка"/>
                </div>
                <div className="drink__description">
                    <div className="drink__description__main">
                        <div className="drink__title">
                            {drink.drink.title}
                        </div>
                        <div className="drink__subtitle">
                            {drink.drink.subtitle}
                        </div>
                    </div>
                    <div className="drink__ingredients">
                        <div className="drink__ingredients__title">Ингредиенты</div>
                        <div className="drink__ingredients__content">
                            {drink.drink.ingredients?.map(drink => (
                                <div className="drink__ingredients__list">
                                    <div className="drink__ingredients-item">{drink.ingredient}</div>
                                    <div className="drink__ingredients-dots"/>
                                    <div className="drink__ingredients-amount">{drink.amount}&nbsp;</div>
                                    <div className="drink__ingredients-unit">{drink.unit}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="drink__recipe">
                        <div className="drink__recipe__title">Как готовить</div>
                        <div className="drink__recipe__content">{drink.drink.recipe}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailCard;