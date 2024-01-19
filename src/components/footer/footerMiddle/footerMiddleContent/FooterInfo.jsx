import React from 'react';
import s from '../../Footer.module.css'

const FooterInfo = (props) => {
    return (
        <div className={s.footerInfo}>
            <h1 className={s.footerTitle}>{props.footerTitle}</h1>
            <a className={s.footerLink} href="#">{props.footerLink1}</a>
            <a className={s.footerLink} href="#">{props.footerLink2}</a>
        </div>
    );
};

export default FooterInfo;