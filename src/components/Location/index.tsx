import React from 'react';

import RatingStar from '../UI/RatingStar'

import './index.scss'

const Location = () => {
    return (
        <div className='location'>
            <div className="location__container">
                <div className="location__title">
                    <h1 className="location__title__h1">Локация</h1>
                </div>
                <div className="location__items">
                <div className="location__item">
                    <span className="location__item__headline">адресc:</span>
                    <span className="location__item__descr">респаблика калмыкия</span>
                </div>
                <div className="location__item">
                    <span className="location__item__headline">раб часы:</span>
                    <span className="location__item__descr">пахай черт</span>
                </div>
                <div className="location__item">
                    <span className="location__item__headline">контакты:</span>
                    <span className="location__item__descr">спроси у своей мамочки сученыш</span>
                    <span className="location__item__descr">спроси у своей мамочки сученыш</span>
                    <span className="location__item__descr">спроси у своей мамочки сученыш</span>
                </div>
                <div className="location__item">
                    <span className="location__item__headline">отзывы пнх:</span>
                    <a href="" className="location__item__reviews">Google reviews</a>
                    <div className="location__item__rating">
                        <span className="location__item__rating__num">4.9</span>
                        <div className="location__item__rating__stars">
                            <RatingStar />
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Location;