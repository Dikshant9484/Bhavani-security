import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact-intro section-reveal">
          <span className="section-tag">Say Hello</span>
          <h2 className="section-title">Let's Talk</h2>
          <div className="section-divider" />
          <p className="contact-desc">
            We're a real team, not a call center. Reach out directly to Sankar Singh —
            he personally looks after every new client.
          </p>
        </div>

        {/* Director card */}
        <div className="director-card section-reveal">
          <div className="director-avatar">SS</div>
          <div className="director-words">
            <p className="director-quote">
              "Whether you need one security guard or a full facility management team,
              just call us. We'll figure it out together."
            </p>
            <span className="director-sig">— Sankar Singh, Director</span>
          </div>
        </div>

        {/* Three contact blocks */}
        <div className="contact-blocks section-reveal">

          <div className="contact-block">
            <div className="block-icon"><Phone size={22} /></div>
            <div className="block-body">
              <h3>Call Us Directly</h3>
              <p>Pick up the phone — we answer.</p>
              <div className="block-links">
                <a href="tel:+919836895115">+91 98368 95115</a>
                <a href="tel:+919831275747">+91 98312 75747</a>
              </div>
            </div>
          </div>

          <div className="contact-block">
            <div className="block-icon"><Mail size={22} /></div>
            <div className="block-body">
              <h3>Drop an Email</h3>
              <p>We reply the same day, usually faster.</p>
              <div className="block-links">
                <a href="mailto:bhavanimanpower2002@gmail.com">
                  bhavanimanpower2002@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-block">
            <div className="block-icon"><Clock size={22} /></div>
            <div className="block-body">
              <h3>Always Available</h3>
              <p>Our crisis line never sleeps.</p>
              <div className="block-links">
                <span className="availability">24 hrs &nbsp;·&nbsp; 7 days &nbsp;·&nbsp; 365 days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Offices */}
        <div className="offices section-reveal">
          <h3 className="offices-heading">Find Us</h3>
          <div className="offices-grid">

            <div className="office-card">
              <MapPin size={18} className="office-pin" />
              <div>
                <span className="office-label">Head Office</span>
                <p>197, S.K. Nagar, Rishra</p>
                <p>Hooghly, West Bengal — 712249</p>
              </div>
            </div>

            <div className="office-card">
              <MapPin size={18} className="office-pin" />
              <div>
                <span className="office-label">Branch Office</span>
                <p>T.N. Mukherjee Road, Dankuni</p>
                <p>Beside Dankuni Football Ground</p>
                <p>Hooghly, West Bengal — 712311</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
