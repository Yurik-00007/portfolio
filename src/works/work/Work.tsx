import React from 'react';
import style from './Work.module.css';
//import styleContainer from '../common/styles/Container.module.css'

type WorkProps={
title:string
    discription:string
}
export const Work = (props:WorkProps) => {
    return (
        <div className={style.work}>
        <div className={style.icon}>
            <a href="" className={style.link}>Смотреть</a>
        </div>
            <div className={style.wraper}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.discription}>{props.discription}</span>
            </div>
        </div>
    );
}