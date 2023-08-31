

import style from "./hero.module.css"

import React from 'react'

export const Hero = () => {
  return (
    <section>
        <div className="container">
          <div className={style["hero__wrapper"]}>
              <div className={style["hero__aside"]}>
                    <h1 className={style["hero__aside__title"]}>Quality cleaning for your home</h1>
                    <p className={style["hero__aside__text"]}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className={style["infrom"]}>
                      <a href="#Get" className={style['hero__btn']}>Get a free quote</a>
                      <div className={style["hero__call"]}>
                        <img className={style["hero__call__img"]} src="/call.png" alt="call" />
                        <a className={style["hero__call__number"]} href="tel:(414) 567 - 2109">(414) 567 - 2109</a>
                      </div>
                    </div>
               </div>
               <div className={style["hero__bside"]}>
                  <img className={style["hero__img"]} src="/hero-bsdie.png" alt="img" />
               </div>
          </div>
        
        </div>
    </section>
  )
}

export default Hero