import React from 'react'

import style from "./footer.module.css"

export const Footer = () => {
  return (
      <footer>
        <div className="container">
            <div className={style["footer__wrapper"]}>
               <div className={style["footer__cleaning"]}>
                <h5 className={style["footer__cleaning-title"]}>Quality cleaning for your home</h5>
                    <p className={style["footer__cleaning-text"]}>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
               </div>
               <div className={style["footer__contact"]}>
                    <h5 className={style["footer__contact-title"]}>Contact us</h5>
                    <a className={style["footer__contact-us"]} href="https://goo.gl/maps/h9BHWVZ2QpXuEgX97">1827 Nickel Road, Los Angeles, CA, 90017, United States</a>
                    <a className={style["footer__contact-us2"]} href="tel:(414) 567 - 2109">(414) 567 - 2109</a>
                    <a className={style["footer__contact-us3"]} href="mailto:contact@cleaning.com">contact@cleaning.com</a>
                </div>
                 <div className={style["footer__hour"]}>
                    <h3 className={style["footer__hour-derc"]}>Hour</h3>
                    <h5 className={style["footer__hour-title"]}>Monday to Friday</h5>
                    <p className={style["footer__hour-text"]}>6:00 AM - 9:00 PM</p>
                    <h5 className={style["footer__hour-title"]}>Saturday & Sunday</h5>
                    <p className={style["footer__hour-text"]}>8:00 AM - 8:00 PM</p>
                </div>
                <div className={style["footer__free"]}>
                    <h5 className={style["footer__free-title"]}>Get a free estimate</h5>
                    <a className={style["footer__free-tel"]} href="tel">(414) 567 - 2109</a>
                    <p className={style["footer__free-text"]}>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                    <a className={style["footer__free-link"]} href="#request">Request a free quote</a>
                </div>
            </div>
            <div className={style["footer__border"]}></div>
             <div className={style["footer__end"]}>
                <div className={style["footer__end__aside"]}>
                        <img src="/IMAGE.png" alt="logo" />
                    </div>
                    <div className={style["footer__end-bside"]}>
                        <h5 className={style["footer__end-title"]}>Copyright © Cleaning X | Designed by</h5>
                        <a className={style["footer__end-link"]} href="#BRIX">BRIX Templates</a>
                        <h5 className={style["footer__end-title"]}>- Powered by</h5>
                        <a className={style["footer__end-link"]} href="#Wep">Webflow</a>
                        <a className={style["footer__end-link"]} href="#Licenses">Licenses</a>
                    </div>
             </div> 
        </div>
      </footer>
  )
}

export default Footer