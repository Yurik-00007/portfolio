import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${style.contactsContainer} ${styleContainer.container} `}>
                <h3 className={style.title}>Контакты</h3>
                    <form className={style.form}>
                        <input/>
                        <input/>
                        <textarea />
                    </form>
                <span className={style.link}>Отправить</span>
            </div>
        </div>
    );
}