

import React from 'react'

import style from "./header.module.css"


export const Header = () => {
  return (
     <header>
     <div className="container">
       <nav className={style['navbar']}>
        <div className={style["link"]}>
          <img src="/IMAGE.png" alt="header logo" />
          <a href="#Home" className={style["header__link"]}>Home</a>
          <a href="#About" className={style["header__link"]}>About</a>
          <a href="#services" className={style["header__link"]}>services</a>
          <a href="#Articules" className={style["header__link"]}>Articules</a>
          <a href="#Contact" className={style["header__link"]}>Contact</a>
        </div>
        <div className={style["header__btns"]}>
          <a href="#card" className={style["header__link"]}>card(0)</a>
          <a href="#Get" className={style["header__btn"]}>Get a free quete</a>
        </div>
      </nav>
     </div>
    </header>
  )
}

export default Header