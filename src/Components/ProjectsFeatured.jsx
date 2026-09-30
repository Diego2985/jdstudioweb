import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsFeatured.css';

function ProjectsFeatured() {
  const projects = [
    {
      category: 'SITIO INFORMATIVO',
      title: 'FarmaDesign',
      description:
        'Sitio web informativo para una farmacia, desarrollado con una interfaz clara, moderna y adaptable.',
      technologies: ['React', 'Tailwind', 'Bootstrap'],
      image: '/images/imagen.png',
      url: 'https://farmadesign.vercel.app/',
    },
    {
      category: 'LANDING CORPORATIVA',
      title: 'Business Premium',
      description:
        'Landing page corporativa con una estética premium, estructura comercial y enfoque en conversión.',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      image: '/images/imagen4.png',
      url: 'https://business-premium.vercel.app/',
    },
    {
      category: 'LANDING / TURISMO',
      title: 'Tourism Premium',
      description:
        'Experiencia visual para turismo con destinos destacados, búsqueda y una presentación orientada al usuario.',
      technologies: ['React', 'Tailwind', 'UI Design'],
      image: '/images/imagen5.png',
      url: 'https://explore-argentina.vercel.app/',
    },
  ];

  return (
    <section id="proyectos-destacados" className="projects-featured">

      <div className="projects-featured-container">

        {/* ENCABEZADO */}
        <div
          className="projects-featured-header"
          data-aos="fade-up"
        >
          <div>

            <span className="projects-featured-eyebrow">
              TRABAJOS SELECCIONADOS
            </span>

            <h2 className="projects-featured-title">
              Proyectos <span>destacados</span>
            </h2>

          </div>

          <p className="projects-featured-intro">
            Una selección de proyectos que muestran diferentes
            enfoques de diseño, desarrollo y experiencia digital.
          </p>
        </div>

        {/* PROYECTOS */}
        <div className="projects-featured-grid">

          {projects.map((project, index) => (
            <article
              className="project-featured-card"
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              <div className="project-featured-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-featured-category">
                  {project.category}
                </span>

              </div>

              <div className="project-featured-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-featured-tech">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

               <a
                 href={project.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="project-featured-link"
               >
                 Ver sitio
                 <span>→</span>
               </a>

              </div>

            </article>
          ))}

        </div>

        {/* CTA */}
        <div
          className="projects-featured-footer"
          data-aos="fade-up"
        >
          <p>
            ¿Querés conocer todos los proyectos?
          </p>

          <Link
            to="/projects"
            className="projects-featured-button"
          >
            Ver todos los proyectos
            <span>→</span>
          </Link>
        </div>

      </div>

    </section>
  );
}

export default ProjectsFeatured;