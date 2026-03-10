import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Training from './components/Training'
import Gallery from './components/Gallery'
import Clients from './components/Clients'
import Advantages from './components/Advantages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Training />
      <Gallery />
      <Clients />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
