import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions() {
  const solutions = [
    {
      number: '01',
      icon: '</>',
      title: 'Desarrollo Web',
      description:
        'Sitios modernos, funcionales y adaptados a todos los dispositivos.',
      technologies: 'React · JavaScript · Tailwind CSS',
      link: '/projects',
    },
    {
      number: '02',
      icon: 'QR',
      title: 'Tarjetas Digitales',
      description:
        'Tu presentación profesional conectada a un perfil digital mediante un solo enlace.',
      technologies: 'QR · Perfil digital · Diseño personalizado',
      link: '/tarjetas-virtuales',
    },
    {
      number: '03',
      icon: '✦',
      title: 'Concepto Visual',
      description:
        'Exploramos estilos e interfaces para encontrar la dirección visual adecuada para cada proyecto.',
      technologies: 'UI · Diseño visual · Prototipado',
      link: '/visual-concepts',
    },
  ];

  return (
    <section id="soluciones" className="solutions">

      <div className="solutions-container">

        {/* ENCABEZADO */}
        <div
          className="solutions-header"
          data-aos="fade-up"
        >
          <span className="solutions-eyebrow">
            LO QUE HACEMOS
          </span>

          <h2 className="solutions-title">
            Soluciones <span>digitales</span>
          </h2>

          <p className="solutions-intro">
            Diseñamos y desarrollamos experiencias digitales
            adaptadas a las necesidades de cada proyecto.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className="solutions-grid">

          {solutions.map((solution, index) => (
            <article
              className={`solution-card ${
                index === 0 ? 'solution-card-featured' : ''
              }`}
              key={solution.number}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              <div className="solution-card-top">

                <span className="solution-number">
                  {solution.number}
                </span>

                <span className="solution-icon">
                  {solution.icon}
                </span>

              </div>

              <div className="solution-card-content">

                <h3>{solution.title}</h3>

                <p>
                  {solution.description}
                </p>

                <span className="solution-technologies">
                  {solution.technologies}
                </span>

              </div>

              <Link
                to={solution.link}
                className="solution-link"
              >
                Ver solución
                <span>→</span>
              </Link>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Solutions;