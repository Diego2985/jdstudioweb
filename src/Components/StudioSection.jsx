import React from 'react';
import { Link } from 'react-router-dom';
import './StudioSection.css';

function StudioSection() {
  const features = [
    {
      number: '01',
      title: 'Desarrollo moderno',
      description:
        'Sitios web construidos con tecnologías actuales y una estructura preparada para crecer.',
    },
    {
      number: '02',
      title: 'Diseño responsive',
      description:
        'Experiencias adaptadas a celulares, tablets y computadoras sin perder calidad visual.',
    },
    {
      number: '03',
      title: 'Soluciones personalizadas',
      description:
        'Cada proyecto se desarrolla según las necesidades, objetivos y personalidad de cada negocio.',
    },
    {
      number: '04',
      title: 'Atención personalizada',
      description:
        'Acompañamiento durante el desarrollo para transformar una idea en una presencia digital.',
    },
  ];

  return (
    <section id="studio" className="studio-section">
      <div className="studio-container">

        {/* Encabezado */}
        <div className="studio-header" data-aos="fade-up">
          <div>
            <span className="studio-eyebrow">
              SOBRE JD STUDIO WEB
            </span>

            <h2 className="studio-title">
              Diseño, desarrollo y una mirada
              <span> puesta en cada detalle.</span>
            </h2>
          </div>

          <p className="studio-intro">
            Creo experiencias digitales modernas, funcionales y adaptadas
            a cada proyecto, combinando desarrollo web, diseño y tecnología.
          </p>
        </div>

        {/* Contenido */}
        <div className="studio-content">

          {/* Texto principal */}
          <div
            className="studio-main"
            data-aos="fade-right"
          >
            <div className="studio-line"></div>

            <p className="studio-description">
              JD Studio Web nace con una idea simple: crear sitios web que
              no solo se vean bien, sino que también comuniquen, funcionen
              y representen la identidad de cada proyecto.
            </p>

            <p className="studio-description">
              Trabajo cada desarrollo buscando un equilibrio entre estética,
              funcionalidad y una buena experiencia para quienes visitan
              el sitio.
            </p>

            <Link
              to="/about"
              className="studio-button"
            >
              Conocé más sobre mí
              <span>→</span>
            </Link>
          </div>

          {/* Características */}
          <div className="studio-features">
            {features.map((feature, index) => (
              <div
                className="studio-feature"
                key={feature.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="studio-feature-number">
                  {feature.number}
                </span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default StudioSection;