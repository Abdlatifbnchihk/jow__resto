import React from 'react'

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/hero.webp')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12" data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center text-white max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 logo-font">
            Welcome to <span className="text-amber-500">JOW RESTO</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the finest flavors in a cozy atmosphere. From exquisite dishes to warm hospitality, we bring you an unforgettable dining experience.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              View Our Menu
            </a>
            <a
              href="#contact"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
