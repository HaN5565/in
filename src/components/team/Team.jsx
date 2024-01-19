import React from 'react';
import s from './Team.module.css'
import TeamImg from './teamLeft/TeamImg';
import TeamRight from './teamRight/TeamRight';

const Team = () => {
    return (
        <div className={s.team}>
            <div className={s.container}>
                <TeamImg />
                <TeamRight />
            </div>
        </div>
    );
};

export default Team;