import React from 'react'
import { Shield, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  Company: ['About Us', 'Our Services', 'Gallery', 'Clients', 'Contact Us'],
  Services: ['Security Guards', 'Facility Management', 'Housekeeping', 'Event Security', 'Manpower Supply', 'HR Staffing'],
}

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><Shield size={26} /></div>
              <div>
                <span className="footer-logo-primary">BHAVANI</span>
                <span className="footer-logo-sub">SECURITY SERVICES</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Providing professional security, facility management, and manpower services 
              across West Bengal. Safety, Discipline, Reliability.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">Reg. No: 2021126930</span>
              <span className="footer-badge">GST: 07BPVPD8634Q1ZW</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-col" key={title}>
              <h4 className="footer-col-title">{title}</h4>
              <ul>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <ArrowRight size={12} /> {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Phone size={14} />
                <div>
                  <a href="tel:+919836895115">+91 9836895115</a>
                  <a href="tel:+919831275747">+91 9831275747</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:bhavanimanpower2002@gmail.com">bhavanimanpower2002@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>197, S.K. Nagar, Rishra<br />Hooghly, WB – 712249</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 Bhavani Security Services. All Rights Reserved.</p>
          <p className="footer-bottom-right">
            Director: <strong>Sankar Singh</strong> &nbsp;|&nbsp; Hooghly, West Bengal
          </p>
        </div>
      </div>
    </footer>
  )
}
