import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    profession: 'Profession',
    avatar: 'https://i.pravatar.cc/100?img=32',
    text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.'
  },
  {
    id: 2,
    name: 'Client Name',
    profession: 'Profession',
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.'
  },
  {
    id: 3,
    name: 'Client Name',
    profession: 'Profession',
    avatar: 'https://i.pravatar.cc/100?img=48',
    text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.'
  },
  {
    id: 4,
    name: 'Client Name',
    profession: 'Profession',
    avatar: 'https://i.pravatar.cc/100?img=5',
    text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.'
  }
]

export default function Testimonial() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const t = setTimeout(() => {
      const swiper = swiperRef.current
      if (!swiper) return
      if (prevRef.current && nextRef.current) {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation?.destroy()
        swiper.navigation?.init()
        swiper.navigation?.update()
      }
    }, 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="testimonial"
      className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 bg-amber-50"
    >
        <h2 className="text-3xl text-gray-800 font-bold mb-10 text-center logo-font">Our <span className="text-amber-500">Clients</span> Says</h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          initialSlide={1}
          centeredSlides
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % testimonials.length)
          }
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
            swiperRef.current = swiper
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={t.id}>
              <div
                className={`slider p-10 sm:p-6 rounded-xl shadow-md transition-all duration-300
                ${
                  activeIndex === idx
                    ? 'bg-amber-300/55 scale-105 rounded-xl shadow-lg'
                    : 'bg-white py-5'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {t.profession}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 mt-3 sm:mt-4 line-clamp-3">
                  {t.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
            ref={prevRef}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-600 transition cursor-pointer flex items-center justify-center"
            >
                <Icon icon="ion:chevron-back" className="w-5 h-5" />
            </button>
            <button
            ref={nextRef}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-600 transition cursor-pointer flex items-center justify-center"
          >
                <Icon icon="ion:chevron-forward" className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  )
}
