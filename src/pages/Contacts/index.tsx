import React from 'react';

import Tabs from '../../components/Tabs';
import Location from '../../components/Location';
import Map from '../../components/Map';

import './index.scss';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts__container'>
                <Tabs />
                <Location />     
                <Map />
            </div>
        </div>
    );
};

export default Contacts;