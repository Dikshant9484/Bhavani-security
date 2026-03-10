import React from 'react'
import { Target, Eye, Star, CheckCircle } from 'lucide-react'
import './About.css'

const pillars = [
  { icon: <Target size={28} />, title: 'Mission', text: 'To provide a safe and secure environment with trained security personnel and professional service management for all clients.' },
  { icon: <Eye size={28} />, title: 'Vision', text: 'To become one of the most trusted security and facility management organizations in India, known for excellence.' },
  { icon: <Star size={28} />, title: 'Motto', text: 'Safety, Discipline, Reliability — the three pillars that guide every action and decision we make.' },
]

const services = [
  'Security Guards', 'Housekeeping Services', 'Facility Management',
  'Manpower Supply', 'Event Security', 'Transport Support',
  'HR Staffing & Recruitment', 'Safety Audits',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid section-reveal">
          <div className="about-left">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">About Bhavani<br />Security Services</h2>
            <div className="section-divider" />
            <p className="about-intro">
              Bhavani Security Services has been launched by a team of experienced professionals 
              from the service industry with a vision to provide comprehensive services using the 
              best practices in the industry.
            </p>
            <p className="about-text">
              Registered under Company Act 1956, we provide a comprehensive range of security, 
              housekeeping, facility management, and placement services across West Bengal and 
              beyond. Our customer-oriented approach makes us different from other providers — 
              we are committed to quality, compliance, and continuous improvement.
            </p>
            <div className="about-services-grid">
              {services.map((s, i) => (
                <div className="about-service-item" key={i}>
                  <CheckCircle size={15} className="check-icon" />
                  <span>{s}</span>
                </div>
              ))}
            </div>

            <div className="about-reg-info">
              <div className="reg-item">
                <span className="reg-label">Registration No.</span>
                <span className="reg-value">2021126930</span>
              </div>
              <div className="reg-item">
                <span className="reg-label">GST No.</span>
                <span className="reg-value">07BPVPD8634Q1ZW</span>
              </div>
              <div className="reg-item">
                <span className="reg-label">ESI No.</span>
                <span className="reg-value">20001417870001018</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            {pillars.map((p, i) => (
              <div className="pillar-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="pillar-icon">{p.icon}</div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-text">{p.text}</p>
                </div>
              </div>
            ))}

            <div className="about-director-card">
              <div className="director-avatar">SS</div>
              <div>
                <p className="director-name">Sankar Singh</p>
                <p className="director-role">Director, Bhavani Security Services</p>
                <p className="director-quote">
                  "Security is nothing but safety of human lives and resources — our primary concern."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
