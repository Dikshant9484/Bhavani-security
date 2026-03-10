import React from 'react'
import { Clock, Car, Radio, FileText, IndianRupee, Users, GraduationCap, Stethoscope } from 'lucide-react'
import './Advantages.css'

const advantages = [
  { icon: <Clock size={24} />, title: 'Crisis Team 24/7', desc: 'Crisis management team available round-the-clock, 365 days a year.' },
  { icon: <Car size={24} />, title: 'Mobile Patrolling', desc: 'Mobile vehicles dedicated to patrolling and field supervision across sites.' },
  { icon: <Radio size={24} />, title: 'Advanced Comms', desc: 'State-of-the-art communication and supervision technology.' },
  { icon: <FileText size={24} />, title: 'Full Documentation', desc: 'Complete hard and soft copy documentation for all security personnel.' },
  { icon: <IndianRupee size={24} />, title: 'Cost Effective', desc: 'Cost-effective approach to delivering non-core services with quality.' },
  { icon: <Users size={24} />, title: 'Regular Reviews', desc: 'Weekly and monthly client review meetings with dedicated account managers.' },
  { icon: <GraduationCap size={24} />, title: 'Continuous Training', desc: 'Regular on-site and refresher training programs for all deployed staff.' },
  { icon: <Stethoscope size={24} />, title: 'Medical Facility', desc: 'Monthly medical check-up facility available for all security personnel.' },
]

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="adv-inner section-reveal">
          <div className="adv-left">
            <span className="section-tag">Our Edge</span>
            <h2 className="section-title">Company<br />Advantages</h2>
            <div className="section-divider" />
            <p className="adv-desc">
              Bhavani Security Services combines professional expertise, advanced systems, 
              and genuine care for both clients and staff to deliver unmatched service quality.
            </p>
            <div className="adv-highlight-box">
              <div className="adv-hl-item">
                <span className="adv-hl-num">24/7</span>
                <span className="adv-hl-text">Operational<br/>Support</span>
              </div>
              <div className="adv-hl-divider" />
              <div className="adv-hl-item">
                <span className="adv-hl-num">1</span>
                <span className="adv-hl-text">Single Bill for<br/>All Services</span>
              </div>
              <div className="adv-hl-divider" />
              <div className="adv-hl-item">
                <span className="adv-hl-num">0</span>
                <span className="adv-hl-text">Documentation<br/>Gaps</span>
              </div>
            </div>
          </div>

          <div className="adv-right">
            {advantages.map((a, i) => (
              <div className="adv-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="adv-icon">{a.icon}</div>
                <div className="adv-content">
                  <h3 className="adv-title">{a.title}</h3>
                  <p className="adv-text">{a.desc}</p>
                </div>
                <div className="adv-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
