import React from 'react';
import s from './MyBtn.module.css'

const Mybtn = (props) => {
    return (
        <button className={s.btn}>{props.btnText}</button>
    );
};

export default Mybtn;