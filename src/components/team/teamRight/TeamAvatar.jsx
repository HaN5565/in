import React from 'react';
import s from '../Team.module.css'

const TeamAvatar = () => {
    return (
        <div className={s.teamAvatar}>
            <img src="/img/avatar1.png" alt="" />
            <img src="/img/avatar2.png" alt="" />
            <img src="/img/avatar3.png" alt="" />
        </div>
    );
};

export default TeamAvatar;