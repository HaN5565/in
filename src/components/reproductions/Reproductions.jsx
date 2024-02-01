import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import s from './Reproductions.module.css';
import ReproductionsTitle from './reproductionsTitle/ReproductionsTitle';
import ReproductionsItemsFrance from './reproductionsItems/ReproductionsItemsFrance'
import ReproductionsItemsGermany from './reproductionsItems/ReproductionsItemsGermany'
import ReproductionsItemsEngland from './reproductionsItems/ReproductionsItemsEngland'
import { AnimatePresence } from 'framer-motion';

const Reproductions = (props) => {

    const location = useLocation()

    return (
        <div className={s.reproductions}>
            <div className={s.container}>
                <ReproductionsTitle />
                <AnimatePresence  mode='wait'>
                    <Routes key={location.pathname} location={location}>
                        <Route path='/' element={<ReproductionsItemsFrance stateFrance={props.stateFrance} />} />
                        <Route path='Germany' element={<ReproductionsItemsGermany stateGermany={props.stateGermany} />} />
                        <Route path='England' element={<ReproductionsItemsEngland stateEngland={props.stateEngland} />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Reproductions;