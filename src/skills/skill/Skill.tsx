import React from 'react';
import style from './Skill.module.css';
//import styleContainer from '../common/styles/Container.module.css'

type SkillProps={
title:string
    discription:string
}
export const Skill = (props:SkillProps) => {
    return (
        <div className={style.skill}>
        <div className={style.icon}></div>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.discription}>{props.discription}</span>
        </div>
    );
}