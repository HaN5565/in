import React from 'react';
import s from '../Team.module.css'
import TeamTitle from './TeamTitle';
import TeamText from './TeamText';
import TeamAvatar from './TeamAvatar';

const TeamRight = () => {
    return (
        <div className={s.teamRight}>
            <TeamTitle />
            <TeamText />
            <TeamAvatar />
        </div>
    );
};

export default TeamRight;