import React from 'react';
import './Card.scss';

function Card({image, title, subtitle, degree}) {
    return (
        <aside className='card'>
            <div className='card__image-wrapper'>
                <img className='card__image' src={image} alt="Напиток"/>
            </div>
            <div className='card__description'>
                <div className='card__title'>
                    {title}
                </div>
                <div className='card__subtitle'>
                    {subtitle}
                </div>
            </div>
            <div className='card__degree'>
                <div className='card__degree-wrapper'>
                    <div className='card__degree-value'>{degree}</div>
                    <div className='card__degree-title'>Алкоголь</div>
                </div>
            </div>
        </aside>
    )
}

export default Card;