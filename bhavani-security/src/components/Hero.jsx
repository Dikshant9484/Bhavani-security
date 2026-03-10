import React, { useEffect, useRef } from 'react'
import { Shield, Users, Building, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import './Hero.css'

const stats = [
  { value: '85+', label: 'Clients Served' },
  { value: '500+', label: 'Security Personnel' },
  { value: '24/7', label: 'Operations' },
  { value: '20+', label: 'Cities Covered' },
]

const highlights = [
  { icon: <Shield size={22} />, text: '24/7 Security Services' },
  { icon: <Users size={22} />, text: 'Trained Security Personnel' },
  { icon: <Building size={22} />, text: 'Facility Management' },
]

export default function Hero() {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-scan-line" />
      </div>

      <div className="hero-content container">
        <div className="hero-badge animate-fadeIn">
          <Shield size={14} />
          <span>West Bengal's Trusted Security Partner Since 2021</span>
        </div>

        <h1 className="hero-title animate-fadeUp">
          <span className="hero-title-top">BHAVANI</span>
          <span className="hero-title-main">SECURITY</span>
          <span className="hero-title-sub">SERVICES</span>
        </h1>

        <p className="hero-tagline animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          Professional Security & Facility Management Services
        </p>

        <p className="hero-desc animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          Providing trained, disciplined manpower for comprehensive security, housekeeping, 
          and facility management across West Bengal and beyond.
        </p>

        <div className="hero-highlights animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          {highlights.map((h, i) => (
            <div className="hero-highlight" key={i}>
              <span className="highlight-icon">{h.icon}</span>
              <span>{h.text}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions animate-fadeUp" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <Phone size={16} /> Contact Us
          </a>
          <a href="#services" className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Our Services <ArrowRight size={16} />
          </a>
        </div>

        <div className="hero-stats animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          {stats.map((s, i) => (
            <div className="hero-stat" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="hero-scroll" onClick={scrollToNext} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
