import React from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import  ServicesSection from './Services.jsx'
import Menu from './Menu.jsx'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'


function Main() {
  return (
    <div>
        <Header />
        <Home />
        <Banner />
        <About />
        <Menu />
        <ServicesSection />
        <Testimonial />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default Main