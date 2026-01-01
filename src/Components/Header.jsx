import React, { useState, useEffect } from 'react'

function Header() {
  const [isFixed, setIsFixed] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track header fixed state
      if (window.scrollY > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }

      // Detect which section is in view and update active link
      const sections = navLinks.map(link => ({
        name: link.name,
        element: document.getElementById(link.name)
      }))

      let currentSection = 'home'
      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          // Check if section is near the top of viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.name
          }
        }
      })
      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'menu', href: '#menu' },
    { name: 'services', href: '#services' },
    { name: 'testimonial', href: '#testimonial' },
    { name: 'contact', href: '#contact' },
  ]

  const handleNavClick = (name) => {
    setActiveLink(name)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`w-full bg-white transition-all duration-300 z-50 ${
        isFixed ? 'fixed top-0 left-0 shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="logo">
          <a href="#home" aria-label="JOW RESTO homepage" className="text-2xl md:text-3xl font-bold text-amber-700 tracking-wide cursor-pointer">
            <span className="logo-font">JOW </span><span className="logo-font text-amber-500">RESTO</span>
          </a>
        </h1>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 md:gap-10 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative pb-2 font-semibold text-base 
                    labster transition-all 
                    duration-300 group ${
                    activeLink === link.name
                      ? 'text-amber-700'
                      : 'text-gray-800 hover:text-amber-700'
                  }`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-0 list-none m-0 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block px-4 py-3 font-semibold text-base 
                    labster
                    transition-all duration-300 rounded ${
                    activeLink === link.name
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header