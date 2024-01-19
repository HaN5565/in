import React from 'react';
import s from '../Footer.module.css'
import FooterImages from './FooterImages';

const FooterRight = () => {
    return (
        <div className={s.footerRight}>
            <FooterImages />
            <div>
                <a className={s.footerLinkSmall} href="#">Ink. House ®</a>
                <a className={s.footerLinkSmall} href="#">All rights reserved</a>
            </div>
        </div>
    );
};

export default FooterRight;