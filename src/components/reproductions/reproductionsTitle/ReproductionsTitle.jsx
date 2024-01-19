import React from 'react';
import s from '../Reproductions.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const ReproductionsTitle = () => {
    return (
        <>
            <div className={s.reproductionsTitle}>
                <h3>Репродукции</h3>
                <div>
                    <NavLink className={({ isActive }) => isActive ? `${s.active}` : `${s.disabled}`} to="/">Франция</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active}` : `${s.disabled}`} to="/Germany">Германия</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active}` : `${s.disabled}`} to="/England">Англия</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default ReproductionsTitle;