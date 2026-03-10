import React from 'react'
import { Shield, Users, Building, Sparkles, Briefcase, Truck, Wrench, ClipboardCheck, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Shield size={32} />,
    title: 'Security Guarding',
    desc: 'Trained, uniformed security guards deployed at industrial, commercial, and residential sites with 24/7 coverage.',
    color: '#c0392b',
  },
  {
    icon: <Users size={32} />,
    title: 'Event Security Management',
    desc: 'Comprehensive event security planning, crowd control, and VIP protection for all types of events.',
    color: '#0e2044',
  },
  {
    icon: <Building size={32} />,
    title: 'Facility Management',
    desc: 'End-to-end facility operations management including maintenance, access control, and daily operations.',
    color: '#c0392b',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Housekeeping Services',
    desc: 'Professional housekeeping and soft services for industries, offices, hospitals, and commercial spaces.',
    color: '#0e2044',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'HR Staffing & Recruitment',
    desc: 'Complete HR solutions — payroll management, staffing, and talent recruitment for all industry segments.',
    color: '#c0392b',
  },
  {
    icon: <Truck size={32} />,
    title: 'Transport & Logistic Support',
    desc: 'Transport management, cab services, biker facility for retail chains, and valet parking services.',
    color: '#0e2044',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Manpower Supply',
    desc: 'Supply of skilled and unskilled manpower for industrial projects, technical roles, and production management.',
    color: '#c0392b',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Safety Audits & Risk Mgmt',
    desc: 'Comprehensive safety audits, risk assessments, and implementation of safety standards for organizations.',
    color: '#0e2044',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg" />
      <div className="container">
        <div className="services-header section-reveal">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title light">Our Services</h2>
          <div className="section-divider" />
          <p className="services-sub">
            Comprehensive security and facility management solutions tailored to your specific needs
          </p>
        </div>

        <div className="services-grid section-reveal">
          {services.map((s, i) => (
            <div className="service-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="service-card-inner">
                <div className="service-icon-wrap" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
              <div className="service-hover-bar" style={{ background: s.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
