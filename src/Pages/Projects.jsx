import React, { useEffect, useMemo, useState } from 'react';
import ProjectsCard from '../Components/ProjectCard';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) =>
        console.error('Error al cargar proyectos:', err)
      );
  }, []);

  // Obtener tecnologías automáticamente desde projects.json
  const filters = useMemo(() => {
    const technologies = projects.flatMap(
      (project) => project.tech || []
    );

    return [
      'Todos',
      ...new Set(technologies),
    ];
  }, [projects]);

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects;
    }

    return projects.filter((project) =>
      project.tech?.includes(activeFilter)
    );
  }, [projects, activeFilter]);

  return (
    <main className="min-h-screen bg-[#0b111b] text-[#f1f0ec]">

      {/* =====================================
          HEADER
      ===================================== */}

      <section className="border-b border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div
            data-aos="fade-up"
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  mb-5
                  inline-block
                  text-[11px]
                  font-bold
                  tracking-[4px]
                  text-[#0d9488]
                "
              >
                PROYECTOS
              </span>

              <h1
                className="
                  max-w-4xl
                  text-5xl
                  font-normal
                  leading-[1.02]
                  tracking-[-2px]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Trabajo que combina
                <span className="text-[#0d9488]">
                  {' '}diseño y desarrollo.
                </span>
              </h1>

            </div>

            <p
              className="
                max-w-md
                text-base
                leading-7
                text-gray-500
                lg:justify-self-end
              "
            >
              Una selección de proyectos desarrollados con distintas
              tecnologías, enfoques y objetivos digitales.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          FILTROS
      ===================================== */}

      <section className="border-b border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-6 py-7 md:px-10">

          <div className="flex flex-wrap items-center gap-2">

            <span
              className="
                mr-3
                text-[10px]
                font-bold
                tracking-[3px]
                text-gray-600
              "
            >
              FILTRAR
            </span>

            {filters.map((filter) => {

              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? 'border-[#0d9488] bg-[#0d9488]/10 text-[#0d9488]'
                        : 'border-white/[0.10] bg-[#101722] text-gray-500 hover:border-[#0d9488]/40 hover:text-gray-300'
                    }
                  `}
                >
                  {filter}
                </button>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================
          PROYECTOS
      ===================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">

        {filteredProjects.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {filteredProjects.map((project, index) => (

              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >

                <ProjectsCard
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  vercel={project.vercel}
                  image={project.image}
                  tech={project.tech}
                />

              </div>

            ))}

          </div>

        ) : (

          <div className="py-20 text-center">

            <p className="text-gray-500">
              No hay proyectos con esta tecnología.
            </p>

          </div>

        )}

      </section>


      {/* =====================================
          CTA FINAL
      ===================================== */}

      <section className="border-t border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">

          <div
            data-aos="fade-up"
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <span
                className="
                  mb-4
                  inline-block
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                ¿TENÉS UNA IDEA?
              </span>

              <h2
                className="
                  max-w-2xl
                  text-3xl
                  font-normal
                  leading-tight
                  md:text-4xl
                "
              >
                Tu próximo proyecto también
                <span className="text-[#0d9488]">
                  {' '}puede estar acá.
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-md
                bg-[#0d9488]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0f766e]
              "
            >
              Hablemos
              <span className="text-lg">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;