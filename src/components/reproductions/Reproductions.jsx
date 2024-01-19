import React from 'react';
import s from './Reproductions.module.css';
import { Routes, Route, } from 'react-router-dom'
import ReproductionsItemsFrance from './reproductionsItems/ReproductionsItemsFrance'
import ReproductionsItemsGermany from './reproductionsItems/ReproductionsItemsGermany'
import ReproductionsItemsEngland from './reproductionsItems/ReproductionsItemsEngland'
import ReproductionsTitle from './reproductionsTitle/ReproductionsTitle';

const Reproductions = (props) => {

    return (
        <div className={s.reproductions}>
            <div className={s.container}>
                <ReproductionsTitle />
                <Routes>
                    <Route path='/' element={<ReproductionsItemsFrance stateFrance={props.stateFrance}/>} />
                    <Route path='Germany' element={<ReproductionsItemsGermany stateGermany={props.stateGermany}/>} />
                    <Route path='England' element={<ReproductionsItemsEngland stateEngland={props.stateEngland}/>} />
                </Routes>
            </div>
        </div>
    );
}

export default Reproductions;