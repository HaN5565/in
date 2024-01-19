import React from 'react';
import s from '../Footer.module.css'
import FooterReproductions from './footerMiddleContent/FooterReproductions';
import FooterInfo from './footerMiddleContent/FooterInfo';

const FooterMiddle = () => {
    return (
        <div className={s.footerMiddle}>
            <FooterReproductions />
            <FooterInfo footerTitle='Новинки' footerLink1='2021' footerLink2='2020' />
            <FooterInfo footerTitle='О нас' footerLink1='Художники' footerLink2='Менеджеры' />
        </div>
    );
};

export default FooterMiddle;