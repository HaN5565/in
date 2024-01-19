import React from 'react';
import s from '../../Footer.module.css'

const FooterReproductions = () => {
    return (
        <div className={s.footerInfo}>
            <h1 className={s.footerTitle}>Репродукции</h1>
            <a className={s.footerLink} href="/">Франция</a>
            <a className={s.footerLink} href="/Germany">Германия</a>
            <a className={s.footerLink} href="/England">Англия</a>
        </div>
    );
};

export default FooterReproductions;