import React, { useState } from 'react'
import { Flame, Heart, AlertTriangle, Radio, Lock, Cctv, Eye, Shield, ChevronRight } from 'lucide-react'
import './Training.css'

const capsules = [
  {
    phase: '01',
    title: 'Basic Training',
    duration: '7 Days',
    color: '#c0392b',
    topics: [
      'Introduction to security company', 'Importance of security officers',
      'Gate control & documentation', 'Personal hygiene & housekeeping',
      'Service conditions & uniforms', 'Fire fighting & first aid',
      'Soft skills & etiquettes', 'Emergency procedures',
      'Search & frisking', 'Traffic control',
      'Use of metal detectors', 'Radio & telephone communications',
    ],
  },
  {
    phase: '02',
    title: 'On Job Training',
    duration: '2 Days',
    color: '#0e2044',
    topics: [
      'Understanding workplace culture', 'Practical operational training',
      'Post-specific instructions', 'Adapting to work environment',
      'Day & night supervision', 'Client-specific requirements',
    ],
  },
  {
    phase: '03',
    title: 'Refresher Training',
    duration: 'Periodic',
    color: '#922b21',
    topics: [
      'Updated safety techniques', 'Skill improvement programs',
      'New security procedures', 'CCTV monitoring updates',
      'Access control systems', 'Monthly fire drills',
    ],
  },
]

const skills = [
  { icon: <Flame size={20} />, label: 'Fire Fighting' },
  { icon: <Heart size={20} />, label: 'First Aid' },
  { icon: <AlertTriangle size={20} />, label: 'Emergency Response' },
  { icon: <Radio size={20} />, label: 'Communication Handling' },
  { icon: <Lock size={20} />, label: 'Access Control' },
  { icon: <Eye size={20} />, label: 'CCTV Monitoring' },
  { icon: <Shield size={20} />, label: 'Safety Awareness' },
  { icon: <Eye size={20} />, label: 'Patrol & Surveillance' },
]

export default function Training() {
  const [active, setActive] = useState(0)

  return (
    <section className="training" id="training">
      <div className="training-bg" />
      <div className="container">
        <div className="training-header section-reveal">
          <span className="section-tag" style={{ color: 'rgba(255,100,80,0.9)', borderColor: 'rgba(255,100,80,0.9)' }}>
            Expertise
          </span>
          <h2 className="section-title light">Training & Quality Standards</h2>
          <div className="section-divider" />
          <p className="training-sub">
            Our security personnel undergo rigorous training across 3 structured capsules
          </p>
        </div>

        <div className="training-layout section-reveal">
          <div className="training-capsules">
            {capsules.map((c, i) => (
              <button
                key={i}
                className={`capsule-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--accent': c.color }}
              >
                <span className="capsule-phase">{c.phase}</span>
                <div className="capsule-info">
                  <span className="capsule-title">{c.title}</span>
                  <span className="capsule-dur">{c.duration}</span>
                </div>
                <ChevronRight size={16} className="capsule-arrow" />
              </button>
            ))}
          </div>

          <div className="training-detail">
            <div className="detail-header" style={{ background: capsules[active].color }}>
              <span className="detail-phase">Phase {capsules[active].phase}</span>
              <h3 className="detail-title">{capsules[active].title}</h3>
              <span className="detail-duration">{capsules[active].duration}</span>
            </div>
            <div className="detail-topics">
              {capsules[active].topics.map((t, i) => (
                <div className="detail-topic" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="topic-dot" style={{ background: capsules[active].color }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="training-skills">
            <h3 className="skills-title">Core Skills Developed</h3>
            <div className="skills-grid">
              {skills.map((s, i) => (
                <div className="skill-badge" key={i}>
                  <span className="skill-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="quality-box">
              <h4>DMAIC Quality Approach</h4>
              <div className="dmaic-list">
                {['Define – Project Standardization', 'Measure – Process Manual', 'Analyze – SLA/KRA review', 'Improve – Monthly Meetings', 'Control – On-Site Training'].map((d, i) => (
                  <div key={i} className="dmaic-item">
                    <span className="dmaic-letter">{d[0]}</span>
                    <span>{d.slice(9)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
