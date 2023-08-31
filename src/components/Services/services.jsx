

import React from 'react'
import style from "./services.module.css"

export const Services = () => {
  return (
    <section>
      <div className="container">
        <div className={style["services__box"]}>
          <h3 className={style["services__box__title"]}>
            Our Services
          </h3>
          <a href="#Expolore" className={style["services__box__link"]}>Explore Services</a>
        </div>

        <div className={style["services-cards"]}>

            
          <div className={style["services-card"]}>
              <img className={style["services__card__img"]} src="/services-card (3).png" alt="home" />
              <h5 className={style['services-card-title']}>House Cleaning</h5>
              <p className={style['services-card-text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
          </div>

           <div className={style["services-card"]}>
              <img className={style["services__card__img1"]}  src="/services-card (2).png" alt="home" />
              <h5 className={style['services-card-title']}>Office cleaning</h5>
              <p className={style['services-card-text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
             </div>

          <div className={style["services-card"]}>
              <img className={style["services__card__img"]}  src="/services-card (3).png" alt="home" />
              <h5 className={style['services-card-title']}>Industrial cleaning</h5>
              <p className={style['services-card-text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
          </div>    

          </div>

          <div className={style["covid"]}>
            <div className={style["covid__aside"]}>
                <img className={style["covid__aside__img"]} src="/services-bottom.png" alt="" />
            </div>
            <div className={style["covid__bside"]}>
                <h5 className={style["covid__bside__derc"]}>Covid-19 sanitization</h5>
                <h3 className={style["covid__bside__title"]}>We follow guidelines to keep you safe from the COVID-19 virus</h3>
                <p className={style["covid__bside__text"]}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                <div className={style["services__bottom__btns"]}>
                  <a href="#get" className={style["services__bottom__btn"]}>Get a free quote</a>
                  <div className={style["services__bottom__call"]}>
                    <img src="/call.png" alt="call" />
                    <a className={style['services__bottom__tell']} href="tell:(414) 567 - 2109">(414) 567 - 2109</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section >
  )
}

export default Services