import React, { useState, useEffect } from 'react'
import { Menu, X, Shield, Phone } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training', href: '#training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-top-bar">
        <div className="container nav-top-inner">
          <span><Phone size={13} /> +91 9836895115 / +91 9831275747</span>
          <span>bhavanimanpower2002@gmail.com</span>
        </div>
      </div>
      <div className="nav-main">
        <div className="container nav-main-inner">
          <a className="nav-logo" href="#home" onClick={() => handleNav('#home')}>
            <div className="logo-icon"><Shield size={28} /></div>
            <div className="logo-text">
              <span className="logo-primary">BHAVANI</span>
              <span className="logo-sub">SECURITY SERVICES</span>
            </div>
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                >{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
            Contact Us
          </a>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href}
            className={active === link.href ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
          >{link.label}</a>
        ))}
        <a href="#contact" className="nav-mobile-cta"
          onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Contact Us
        </a>
      </div>
    </nav>
  )
}
