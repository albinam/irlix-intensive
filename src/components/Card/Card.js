import React from 'react';
import './Card.scss';
import {Link} from "react-router-dom";

function Card(drink) {
    return (
        <Link to={`/irlix-intensive/drink/${drink.drink.id}` }>
            <aside className='card'>
                <div className='card__image-wrapper'>
                    <img className='card__image' src={drink.drink.image} alt="Напиток"/>
                </div>
                <div className='card__description'>
                    <div className='card__title'>
                        {drink.drink.title}
                    </div>
                    <div className='card__subtitle'>
                        {drink.drink.subtitle}
                    </div>
                </div>
                <div className='card__degree'>
                    <div className='card__degree-wrapper'>
                        <div className='card__degree-value'>{drink.drink.degree}%</div>
                        <div className='card__degree-title'>Алкоголь</div>
                    </div>
                </div>
            </aside>
        </Link>
    )
}

export default Card;