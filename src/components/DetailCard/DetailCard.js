import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailCard(drink) {
    const navigate = useNavigate();

    return (
        <div className="drink">
            <div className="container__drink">
                <section className='drink'>
                    <button className="button__back" onClick={() => navigate(-1)}/>
                    <div className='drink__image-wrapper'>
                        <img className='drink__image' src={drink.drink.image} alt="Изображение напитка"/>
                    </div>
                    <div className="drink__description">
                        <div className='drink__description__main'>
                            <div className='drink__title'>
                                {drink.drink.title}
                            </div>
                            <div className='drink__subtitle'>
                                {drink.drink.subtitle}
                            </div>
                        </div>
                        <div className='drink__ingredients'>
                            <div className='drink__ingredients__title'>Ингредиенты</div>
                            <div className='drink__ingredients__content'>
                                {drink.drink.ingredients?.map(drink => (
                                    <div className='drink__ingredients__list'>
                                        <div className='drink__ingredients-item'>{drink.ingredient}</div>
                                        <div className='drink__ingredients-amount'>{drink.amount}</div>
                                        <div className='drink__ingredients-unit'>{drink.unit}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='drink__recipe'>
                            <p className='drink__recipe__title'>Как готовить</p>
                            {drink.drink.recipe}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DetailCard;