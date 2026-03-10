import React, { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import g01 from '../assets/gallery_01.jpg'
import g02 from '../assets/gallery_02.jpg'
import g03 from '../assets/gallery_03.jpg'
import g04 from '../assets/gallery_04.jpg'
import g05 from '../assets/gallery_05.jpg'
import g06 from '../assets/gallery_06.jpg'
import g07 from '../assets/gallery_07.jpg'
import g08 from '../assets/gallery_08.jpg'
import g09 from '../assets/gallery_09.jpg'
import g10 from '../assets/gallery_10.jpg'
import g11 from '../assets/gallery_11.jpg'
import g12 from '../assets/gallery_12.jpg'
import g13 from '../assets/gallery_13.jpg'
import './Gallery.css'

const images = [
  { src: g01, caption: 'Security Guard Formation', category: 'Team' },
  { src: g02, caption: 'Security Team Alpha', category: 'Team' },
  { src: g08, caption: 'Security Briefing Session', category: 'Training' },
  { src: g11, caption: 'Guard Formation at Site', category: 'Operations' },
  { src: g04, caption: 'Safety Training Session', category: 'Training' },
  { src: g05, caption: 'Field Operations Team', category: 'Operations' },
  { src: g03, caption: 'Security Personnel', category: 'Team' },
  { src: g06, caption: 'On-Site Team', category: 'Operations' },
  { src: g07, caption: 'Armed Security Guards', category: 'Team' },
  { src: g09, caption: 'Field Team', category: 'Operations' },
  { src: g10, caption: 'Security Group', category: 'Team' },
  { src: g12, caption: 'Patrol Vehicle', category: 'Vehicles' },
  { src: g13, caption: 'Emergency Response Van', category: 'Vehicles' },
]

const cats = ['All', 'Team', 'Training', 'Operations', 'Vehicles']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter)

  const prev = () => setLightbox(l => (l - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(l => (l + 1) % filtered.length)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header section-reveal">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Photo Gallery</h2>
          <div className="section-divider" />
          <p className="gallery-sub">Our security personnel in action — teams, training, and field operations</p>
        </div>

        <div className="gallery-filters section-reveal">
          {cats.map(c => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >{c}</button>
          ))}
        </div>

        <div className="gallery-grid section-reveal">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`gallery-item ${i === 0 ? 'gallery-item--wide' : ''}`}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gallery-overlay">
                <ZoomIn size={24} />
                <span className="gallery-caption">{img.caption}</span>
                <span className="gallery-cat">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)}><X size={28} /></button>
          <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev() }}><ChevronLeft size={32} /></button>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} />
            <div className="lb-info">
              <span className="lb-caption">{filtered[lightbox].caption}</span>
              <span className="lb-counter">{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>
          <button className="lb-next" onClick={(e) => { e.stopPropagation(); next() }}><ChevronRight size={32} /></button>
        </div>
      )}
    </section>
  )
}
