import React from 'react';
import s from './Footer.module.css'
import FooterLeft from './footerLeft/FooterLeft';
import FooterMiddle from './footerMiddle/FooterMiddle';
import FooterRight from './footerRight/FooterRight';

const Footer = () => {
    return (
        <footer>
            <div className={s.container}>
                <FooterLeft />
                <FooterMiddle />
                <FooterRight />
            </div>
        </footer>
    );
};

export default Footer;