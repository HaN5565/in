import React from 'react';
import s from './MyBtnYellow.module.css'

const MyBtnYellow = (props) => {
    return (
        <button className={s.btn}>{props.btnText}</button>
    );
};

export default MyBtnYellow;