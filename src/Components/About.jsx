import React from 'react'

function About() {
  return (
    <div id="about" className="flex flex-col xl:flex-row items-center justify-center min-h-screen gap-8 p-8">
      <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
        <img src="/img/banner__1.webp" alt="Banner 1" className="w-full h-64 xl:h-auto object-cover xl:rounded-tr-[60px] rounded-md xl:rounded-bl-[60px] shadow-lg" />
      </div>
      <div className="flex-1 text-center md:text-left" data-aos="fade-down" data-aos-duration="1000">
        <h2 className="text-3xl text-gray-800 font-bold mb-4 text-center logo-font">About <span className="text-amber-500">Us</span></h2>
        <p className="text-lg mb-4 text-center">Welcome to Jow Cafe, where every cup of coffee is brewed with passion and served with a smile. Our cozy atmosphere and delicious menu make us the perfect spot for friends, families, and coffee lovers alike. Whether you're starting your day with a hearty breakfast or unwinding in the evening with a specialty drink, we have something for everyone.</p>
        <p className="text-lg text-center">At Jow Cafe, we pride ourselves on using fresh, locally sourced ingredients to create mouthwatering dishes and beverages. Come join us and experience the warmth of our community!</p>
      </div>
      <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
        <img src="/img/banner__2.webp" alt="Banner 2" className="w-full h-64 xl:h-auto object-cover xl:rounded-tl-[60px] rounded-md xl:rounded-br-[60px] shadow-lg" />
      </div>
    </div>
  )
}

export default About
