import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Solutions from '../Components/Solutions';
import ProjectsFeatured from '../Components/ProjectsFeatured';
import StudioSection from '../Components/StudioSection';
import VisualConceptSection from '../Components/VisualConceptSection';
import ContactCTA from '../Components/ContactCTA';
import homeMockup from "../Assets/homeMockup.png";

function Home() {
  const features = [
    {
      icon: '▣',
      title: 'Diseño moderno',
      description: 'Interfaces atractivas y funcionales.',
    },
    {
      icon: '</>',
      title: 'Tecnología actual',
      description: 'React, Node.js, JavaScript y más.',
    },
    {
      icon: '▯',
      title: 'Adaptado a todos los dispositivos',
      description: 'Tu sitio se ve perfecto en cualquier pantalla.',
    },
    {
      icon: '↗',
      title: 'Enfoque en resultados',
      description: 'Soluciones digitales pensadas para tu proyecto.',
    },
  ];

  return (
    <main className="home">

      {/* HERO */}
      <section id="inicio" className="hero">

        {/* Efectos de fondo */}
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <div className="hero-container">

          {/* Contenido */}
          <div className="hero-content" data-aos="fade-right">

            <span className="hero-eyebrow">
              ESTUDIO DIGITAL
            </span>

            <h1 className="hero-title">
              Diseño y desarrollo web
              <span>con identidad propia.</span>
            </h1>

            <p className="hero-description">
              Creamos sitios web modernos, funcionales y pensados
              para hacer crecer tu proyecto. Combinamos diseño,
              tecnología y estrategia para que tu marca se destaque
              en internet.
            </p>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="hero-btn hero-btn-primary"
              >
                Ver proyectos
                <span>→</span>
              </Link>

              <Link
                to="/contact?producto=consulta-general"
                className="hero-btn hero-btn-secondary"
              >
                <span className="whatsapp-icon">◌</span>
                Contactarme
              </Link>

            </div>

            <div className="hero-tagline">
              <span></span>
              <p>IDEAS EN LA WEB QUE GENERAN RESULTADOS.</p>
            </div>

          </div>

          {/* Visual */}
          <div
            className="hero-visual"
            data-aos="fade-left"
          >
            <div className="hero-visual-glow"></div>

            <img
              src={homeMockup}
              alt="JD Studio Web en notebook y celular"
              className="home-mockup"
            />
          </div>

        

        </div>

       
      

        {/* Servicios destacados */}
        <div className="features-container">

          {features.map((feature, index) => (
            <div
              className="feature"
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h2>{feature.title}</h2>

              <p>{feature.description}</p>

            </div>            
          ))}
          
         </div>
         {/* Scroll */}
        <div className="scroll-indicator">
          <span className="mouse"></span>
          <span>SCROLL PARA EXPLORAR</span>
        </div>

      </section>

       <Solutions />
       
      <ProjectsFeatured />

      <StudioSection />

      <VisualConceptSection />

      <ContactCTA />

    </main>
  );
}

export default Home;