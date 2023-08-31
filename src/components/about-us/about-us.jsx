

import React from 'react'
import style from "./about-us.module.css"

export const Aboutus = () => {
  return (
    <section>
      <div className="container">
        <h3 className={style["about__title"]}>About-us</h3>
        <p className={style["about__text"]}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>

        <div className={style["about__cards"]}>

            <div className={style["about__card"]}>
              <img className={style['about__img']} src="/about-card (1).png" alt="schedule online" />
              <h5 className={style["about__card__title"]}>1. Schedule online</h5>
              <p className={style["about__card__text"]}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>

            <div className={style["about__card"]}>
              <img className={style['about__img']} src="/about-card (2).png" alt="schedule online" />
              <h5 className={style["about__card__title"]}>1. Schedule online</h5>
              <p className={style["about__card__text"]}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>

            <div className={style["about__card"]}>
              <img className={style['about__img']} src="/about-card (3).png" alt="schedule online" />
              <h5 className={style["about__card__title"]}>1. Schedule online</h5>
              <p className={style["about__card__text"]}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>

        </div>
        
            <div className={style["about__btns"]}>
              <a href="#Get" className={style["about__btn"]}>Get a free quote</a>
              <a href="#Get" className={style["about__btn__white"]}>Explore services</a>
            </div>
      </div>
    </section>
  )
}

export default Aboutus