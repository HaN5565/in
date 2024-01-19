import React from 'react';
import s from './Header.module.css'
import Mybtn from '../../ui/MyBtn/Mybtn';

const Header = () => {
    return (
        <header>
            <div className={s.container}>
                <img className={s.headerImg} src=".\img\bird.png" alt="" />
                <div className={s.headerText}>
                    <h1 className={s.headerTitle}>Реплики картин<br /> от <span>Ink. House</span></h1>
                    <div className={s.headerSubtitle}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</div>
                    <div className={s.headerBtn}>
                        <Mybtn btnText='Продукция' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;