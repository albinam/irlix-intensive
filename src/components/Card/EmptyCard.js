import React from "react";
import './Card.scss';
import EmptyCardImage from '../../assets/images/empty.jpg';

function EmptyCard() {
    return (
        <aside className='card'>
            <div className='card__image-wrapper'>
                <img className='card__image' src={EmptyCardImage} alt="Нет результата"/>
            </div>
            <div className='card__empty'>
                Ничего не найдено
            </div>
            <div className='card__description'>
                <div className='card__title'>
                    Пусто
                </div>
                <div className='card__subtitle'>
                    Попробуйте изменить запрос
                </div>
            </div>
        </aside>
    )
}

export default EmptyCard;