import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work title={'Название проекта'}
                          discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>
                    <Work title={'Название проекта'}
                          discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>

                    <Work title={'Название проекта'}
                          discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>

                </div>
            </div>
        </div>
    );
}