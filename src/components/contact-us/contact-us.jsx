import React from 'react'


import style from "./contact-us.module.css"
const ContactUs = () => {
  return (
    <section className={style["quote"]}>
      <div className="container">
          <div className={style['quote__wrapper']}>
            <div className={style["quote__aside"]}>
                        <h3 className={style["quote__aside-title"]}>Request a free cleaning quote today</h3>
                        <p className={style["quote__aside-text"]}>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                        <img src="/call.png" alt=" call" />
                        <a href="tel:(414) 567 - 2109" className={style["quote__aside-tel"]}>(414) 567 - 2109</a>
                        <div className={style["quote__aside-border"]}></div>
                        <h5 className={style["quote__aside-derc"]}>Not convinced yet?</h5>
                        <p className={style["quote__aside-yet"]}>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                        <a href="#BRowse" className={style["quote__aside-btn"]}>Browse our packages</a>
            </div>

             <div class="quote__bside">
                        <div className={style["form_wrapper"]}>
                        <form>
                            <div className={style["user__detals"]}>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Full name</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Full name</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Adress</span>
                                    <input type="text" className={style["input__contact"]} />

                                </div>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Email</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Requested service</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <div className={style["input__box"]}>
                                    <span className={style["detals"]}>Day of service</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <div class="input__comment">
                                    <span className={style["detals"]}>Add a note</span>
                                    <input type="text" className={style["input__contact"]} />
                                </div>
                                <a className={style["form__btn"]} href="#Submit">Submit message</a>
                            </div>
                        </form>
                    </div>
                    </div>
          </div>
      </div>
    </section>
  )
}

export default ContactUs