import React, { useState } from 'react'

import imageBurger__1 from '../../public/img/banner__1.webp';
import imageBurger__2 from '../../public/img/banner__2.webp';
import imageBurger__3 from '../../public/img/banner__3.webp';

function Banner() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const bannerOffers = [
    {
      id: 1,
      title: 'Buy 1 Get 1',
      subtitle: 'Order your favourite burger now',
      buttonText: 'Order Now',
      bgColor: 'bg-yellow-400',
      textColor: 'text-gray-800',
      image: imageBurger__3,
      label: 'COMBO OFFER',
    },
    {
      id: 2,
      title: 'BURGER',
      subtitle: 'Creamy & delicious pasta',
      buttonText: 'Order Now',
      bgColor: 'bg-red-100',
      textColor: 'text-gray-800',
      image: imageBurger__1,
      label: 'ON SALE',
    },
    {
      id: 3,
      title: 'PIZZA',
      subtitle: 'Hot & cheesy pizza',
      buttonText: 'Order Now',
      bgColor: 'bg-red-600',
      textColor: 'text-white',
      image: imageBurger__2,
      label: 'SPECIAL',
    },
  ]

  return (
    <section className="py-12 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bannerOffers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} ${offer.textColor} rounded-3xl p-8 shadow-lg transition-all duration-300 ease-out hover:shadow-xl flex flex-col justify-between relative overflow-hidden`}
              onMouseEnter={() => setHoveredCard(offer.id)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="fade-up" data-aos-duration="1000"
            >
              {/* Label Badge */}
              <div className="inline-block mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  offer.bgColor === 'bg-yellow-400'
                    ? 'bg-white text-yellow-500'
                    : offer.bgColor === 'bg-red-600'
                    ? 'bg-white text-red-600'
                    : 'bg-red-600 text-white'
                }`}>
                  {offer.label}
                </span>
              </div>

              {/* Title and Subtitle */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 labster">
                  {offer.title}
                </h2>
                <p className="text-sm z-10 md:text-base opacity-80">
                  {offer.subtitle}
                </p>
              </div>

              {/* Button */}
              <a href="#contact" className={`self-start mb-8 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 z-10 cursor-pointer ${
                offer.bgColor === 'bg-yellow-400'
                  ? 'bg-white text-yellow-500 hover:bg-gray-100'
                  : offer.bgColor === 'bg-red-600'
                  ? 'bg-white text-red-600 hover:bg-gray-100'
                  : 'bg-red-500 text-white hover:bg-red-700'
              }`}>
                {offer.buttonText}
              </a>

              {/* Image Container with Hover Effect */}
              <div className="absolute bottom-[-46px] right-[-40px] h-full flex items-center justify-end overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className={`h-full w-auto object-cover transition-transform rounded-full duration-500 ease-out z-0 ${
                    hoveredCard === offer.id ? 'translate-x-8' : 'translate-x-0'
                  }`}
                  style={{ maxHeight: '200px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
