import { Fragment } from "react";
import React from 'react'

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Aboutus from "../components/about-us/about-us";
import Services from "../components/Services/services";
import Resourses from "../components/resourses/resourses";
import Footer from "../components/footer/footer";
import ContactUs from "../components/contact-us/contact-us";

const HomePage = () => {
  return (
  <Fragment>
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <Resourses />
      <ContactUs />
      <Footer />
    </Fragment>
  )
}

export default HomePage