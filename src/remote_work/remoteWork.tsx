import React from 'react';
import style from './remoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const RemoteWork = () => {
    return (
        <div className={style.removeWork}>
            <div className={`${style.removeWorkContainer} ${styleContainer.container} `}>
                <h3 className={style.title}>Рассматриваю варианты удаленной работы</h3>
                <a href={''} className={style.link}>Нанять меня</a>
            </div>
        </div>
    );
}