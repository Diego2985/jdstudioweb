import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

function ContactCTA() {
  return (
    <section id="contacto-cta" className="contact-cta-section">
      <div className="contact-cta-container">

        <div
          className="contact-cta-content"
          data-aos="fade-up"
        >
          <span className="contact-cta-eyebrow">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2 className="contact-cta-title">
            Tu próxima idea
            <span> puede empezar acá.</span>
          </h2>

          <p className="contact-cta-description">
            Si tenés una idea, un negocio o un proyecto que necesita
            presencia digital, podemos convertirlo en una experiencia web
            moderna y funcional.
          </p>

          <Link
            to="/contact?producto=proyecto-web"
            className="contact-cta-button"
          >
            Iniciar un proyecto
            <span>→</span>
          </Link>
        </div>

        <div
          className="contact-cta-decoration"
          data-aos="fade-left"
        >
          <div className="contact-cta-circle circle-one"></div>
          <div className="contact-cta-circle circle-two"></div>

          <div className="contact-cta-mark">
            <span>JD</span>
            <small>STUDIO WEB</small>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactCTA;