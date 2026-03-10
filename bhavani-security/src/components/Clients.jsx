import React, { useRef, useEffect } from 'react'
import { MapPin, Briefcase } from 'lucide-react'
import './Clients.css'

const clients = [
  { name: 'Modern Road Makers Pvt Ltd', location: 'Dankuni to Palsit', service: 'Manpower Supply' },
  { name: 'GR Infraprojects Ltd', location: 'West Bengal', service: 'Security' },
  { name: 'Gayatri Projects Limited', location: 'West Bengal', service: 'Security & Manpower' },
  { name: 'Rohit Infrabuild Pvt Ltd', location: 'Singur', service: 'Security Guarding' },
  { name: 'National Plastic Industries Ltd', location: 'Dhulagori, Howrah', service: 'Security' },
  { name: 'Laxmi Industrial Association', location: 'Dhulagori, Howrah', service: 'Security' },
  { name: 'Bajaj Group', location: 'West Bengal', service: 'Facility Management' },
  { name: 'Bal Mukund Polyplast Pvt Ltd', location: 'Dhulagori, Howrah', service: 'Security' },
  { name: 'Lakshay Packaging', location: 'Dhulagori, Howrah', service: 'Security & Housekeeping' },
  { name: 'Indus Tower / Jindal Tower', location: 'Liluah, Howrah', service: 'Security' },
  { name: 'SMC Agro Tech Pvt Ltd', location: 'Dankuni, Hooghly', service: 'Security' },
  { name: 'Indian Transport Corporation', location: 'Manik Talla, Kolkata', service: 'Security' },
  { name: 'Hotel Sheren Punjab', location: 'Kolaghat', service: 'Security & Housekeeping' },
  { name: 'Hotel Bhemsen', location: 'Howrah', service: 'Security' },
  { name: 'Whirlpool Ltd', location: 'East Midnipur', service: 'Security Guarding' },
  { name: 'Gammon India Ltd', location: 'Belgharia', service: 'Manpower Supply' },
  { name: 'Millennium Devcon LLP', location: 'Tenpur, Howrah', service: 'Security' },
  { name: 'MSA Construction Pvt Ltd', location: 'Salt Lake City', service: 'Security' },
  { name: 'Vindhyavasini Infracon Pvt Ltd', location: 'S.K.M Road, Howrah', service: 'Security' },
  { name: 'Dayal Engineering', location: 'Liluah, Howrah', service: 'Security' },
  { name: 'K.C. Rolling Mills', location: 'Liluah, Howrah', service: 'Security' },
  { name: 'Jindal Height Owner Association', location: 'Ghusuri, Howrah', service: 'Security' },
  { name: 'MPI Estates Pvt Ltd', location: 'Liluah, Howrah', service: 'Facility Management' },
  { name: 'Narayana School', location: 'West Bengal', service: 'Security & Housekeeping' },
  { name: 'Divine Mercy School', location: 'Domjur, Howrah', service: 'Security' },
  { name: 'Ashoka Buildcon Ltd', location: 'Dankuni to Kharagpur', service: 'Manpower Supply' },
]

const marqueeItems = [...clients, ...clients]

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients-bg" />
      <div className="container">
        <div className="clients-header section-reveal">
          <span className="section-tag" style={{ color: 'rgba(255,100,80,0.9)', borderColor: 'rgba(255,100,80,0.9)' }}>
            Trusted By
          </span>
          <h2 className="section-title light">Our Valued Clients</h2>
          <div className="section-divider" />
          <p className="clients-sub">85+ clients across West Bengal and beyond trust us for security and facility services</p>
        </div>
      </div>

      <div className="clients-marquee-wrap section-reveal">
        <div className="clients-marquee">
          {marqueeItems.map((c, i) => (
            <div className="client-card" key={i}>
              <div className="client-initials">{c.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</div>
              <div className="client-info">
                <p className="client-name">{c.name}</p>
                <span className="client-location"><MapPin size={11} /> {c.location}</span>
              </div>
              <span className="client-service-badge">{c.service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="clients-grid section-reveal">
          {clients.slice(0, 12).map((c, i) => (
            <div className="client-tile" key={i}>
              <div className="client-tile-initial">{c.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</div>
              <div>
                <p className="client-tile-name">{c.name}</p>
                <p className="client-tile-loc"><MapPin size={11} /> {c.location}</p>
                <span className="client-tile-service"><Briefcase size={10} /> {c.service}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="clients-count-bar section-reveal">
          <div className="count-item">
            <span className="count-num">85+</span>
            <span className="count-lbl">Total Clients</span>
          </div>
          <div className="count-divider" />
          <div className="count-item">
            <span className="count-num">15+</span>
            <span className="count-lbl">Industries Served</span>
          </div>
          <div className="count-divider" />
          <div className="count-item">
            <span className="count-num">10+</span>
            <span className="count-lbl">Districts Covered</span>
          </div>
          <div className="count-divider" />
          <div className="count-item">
            <span className="count-num">100%</span>
            <span className="count-lbl">Compliance Rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
