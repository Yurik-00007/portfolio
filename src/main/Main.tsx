import style from "./Main.module.css";
import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import photo from '../common/img/321321321.jpg'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Тимофеев Юрий.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}>
                    <img src={photo} alt="it's me"/>
                </div>
            </div>
        </div>
    );
}