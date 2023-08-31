
import React from 'react'

import style from "./resourse.module.css"

export const Resourses = () => {
  return (
    <section>
      <div className="container">
        <div className={style["border__bottom"]}></div>
        <div className={style["articulas__top"]}>
          <h3 className={style["articulas__top__title"]}>Articles & resources</h3>
          <div className={style["articulas__top__btns"]}>
            <a href="#Get" className={style["articulas__top__btn"]}>Get a free quote</a>
            <a href="#browser" className={style["articulas__top__btn__white"]}>Browse articles</a>
          </div>
        </div>

        <div className={style["articulas__cards"]}>

          <div className={style["articulas__card"]}>
            <img className={style["articulas__card__img"]} src="/articulas-card (2).png" alt="articulas" />
          <div className={style["articulas__cards__card"]}>
              <h5 className={style['articulas__cards__card__title']}>8 best vacuum cleaners to clean any mess for your home in 2022</h5>
              <p className={style['articulas__cards__card__text']}>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <h5 className={style['articulas__cards__card__title']}>Jan 28, 2022</h5>
            </div>
          </div>

           <div className={style["articulas__card"]}>
            <img className={style["articulas__card__img"]} src="/articulas-card (1).png" alt="articulas" />
          <div className={style["articulas__cards__card"]}>
              <h5 className={style['articulas__cards__card__title']}>8 best vacuum cleaners to clean any mess for your home in 2022</h5>
              <p className={style['articulas__cards__card__text']}>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <h5 className={style['articulas__cards__card__title']}>Jan 28, 2022</h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resourses