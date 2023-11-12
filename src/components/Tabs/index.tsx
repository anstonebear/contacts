import React from 'react';

import './index.scss'

import logo from '../../assets/newlogo.png'

const Tabs = () => {
    return (
        <div className='tabs'>
            <div className="tabs__container">
                <div className="tabs__logo">
                    <img src={logo} alt="#logo" />
                </div>
                <div className="tabs__btns">
                    <div className="tabs__btns__btn">
                        <a href="#item" className="tabs__btns__item"> О нас</a> 
                    </div>
                    <div className="tabs__btns__btn">
                        <a href="#item" className="tabs__btns__item" >О вас</a> 
                    </div>
                    <div className="tabs__btns__btn">
                        <a href="#item" className="tabs__btns__item"> О ком либо еще</a> 
                    </div>
                    <div className="tabs__btns__btn">
                        <a href="#item" className="tabs__btns__item"> О чем нибудь </a> 
                    </div>
                    <div className="tabs__btns__btn">
                        <a href="#item" className="tabs__btns__item"> Пошел нахуй!!!</a> 
                    </div>
                </div>   
            </div> 
        </div>
    );
};

export default Tabs;