import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.scillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>
                    <Skill title={'CSS'}
                           discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>

                    <Skill title={'HTML'}
                           discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque culpa cum dolorem, earum id in, inventore iusto minima quaerat reprehenderit saepe soluta, temporibus voluptate. A praesentium reprehenderit vitae.'}/>

                </div>
            </div>
        </div>
    );
}