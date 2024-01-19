import React from 'react';
import s from './Advertisement.module.css'
import AdvertisementTitle from './advertisementTitile/AdvertisementTitle';
import AdvertisementContent from './advertisementContent/AdverstisementContent';
import MyBtnYellow from '../../ui/MyBtn/MyBtnYellow';

const Advertisement = () => {
    return (
        <div className={s.advertisement}>
            <div className={s.container}>
                <AdvertisementTitle />
                <AdvertisementContent />
                <div className={s.btn}>
                    <MyBtnYellow btnText='Ознакомиться' />
                </div>
            </div>
        </div>
    );
};

export default Advertisement;