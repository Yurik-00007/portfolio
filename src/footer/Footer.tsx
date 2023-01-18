import React from 'react';
import style from './Footer.module.css';
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

export const Footer= () =>{
    return (
        <div className={style.footer}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
            <div className={style.title}>Тимофеев Юрий</div>
                <div className={style.boxes}>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                </div>
                <div>©2019 Все прова защищены</div>
            </div>
        </div>
    );
}

