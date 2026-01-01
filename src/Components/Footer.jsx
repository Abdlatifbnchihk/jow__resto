import React from 'react'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Logo + description */}
          <div>
            <a href="#home" aria-label="JOW RESTO homepage" className="inline-block mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700">
                <span className="logo-font">JOW </span>
                <span className="logo-font text-amber-500">RESTO</span>
              </h3>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              JOW RESTO offers fresh, tasty meals crafted daily — visit us or order online.
            </p>

            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 hover:bg-amber-50">
                <Icon icon="mdi:facebook" className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 hover:bg-amber-50">
                <Icon icon="mdi:instagram" className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 hover:bg-amber-50">
                <Icon icon="mdi:twitter" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#home" className="hover:text-amber-600">Home</a></li>
              <li><a href="#about" className="hover:text-amber-600">About</a></li>
              <li><a href="#menu" className="hover:text-amber-600">Menu</a></li>
              <li><a href="#services" className="hover:text-amber-600">Services</a></li>
              <li><a href="#testimonial" className="hover:text-amber-600">Testimonial</a></li>
              <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Icon icon="mdi:map-marker" className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Address</div>
                  <div className="text-sm">123 Main Street, City, Country</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Icon icon="mdi:email" className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Email</div>
                  <div className="text-sm">info@jowcafe.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Icon icon="mdi:phone" className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Phone</div>
                  <div className="text-sm">+966 50 123 4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JOW RESTO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}