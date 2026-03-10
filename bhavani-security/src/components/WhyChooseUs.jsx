import React from 'react'
import { Clock, Car, FileCheck, UserCheck, Radio, Heart, BarChart3, Stethoscope } from 'lucide-react'
import './WhyChooseUs.css'

const reasons = [
  { icon: <Clock size={26} />, title: '24/7 Crisis Management', desc: 'Round-the-clock crisis management team always available for immediate response.' },
  { icon: <Car size={26} />, title: 'Mobile Supervision', desc: 'Mobile vehicles for on-site patrolling and real-time supervision at all locations.' },
  { icon: <FileCheck size={26} />, title: 'Full Compliance', desc: 'Proper and complete documentation of all security manpower and operations.' },
  { icon: <UserCheck size={26} />, title: 'Experienced Supervisors', desc: 'Trained and experienced supervisors ensuring quality service delivery at every site.' },
  { icon: <Radio size={26} />, title: 'Advanced Communication', desc: 'State-of-the-art communication and supervision systems for seamless coordination.' },
  { icon: <Heart size={26} />, title: 'Client-Focused Delivery', desc: 'Weekly and monthly client meetings to ensure satisfaction and address concerns.' },
  { icon: <BarChart3 size={26} />, title: 'Monthly Audits', desc: 'Structured monthly monitoring, audits, and performance reviews for continuous improvement.' },
  { icon: <Stethoscope size={26} />, title: 'Staff Medical Facility', desc: 'Regular medical check-up facility for all deployed staff every month.' },
]

export default function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-header section-reveal">
          <span className="section-tag">Our Edge</span>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-divider" />
          <p className="why-sub">
            What sets Bhavani Security Services apart from others in the industry
          </p>
        </div>

        <div className="why-grid section-reveal">
          {reasons.map((r, i) => (
            <div className="why-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="why-number">0{i + 1}</div>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
