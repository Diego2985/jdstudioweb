import React from 'react';
import { Link } from 'react-router-dom';
import perfil from '../Assets/foto.png';

function About() {
  const technologies = [
    'React',
    'JavaScript',
    'TailwindCSS',
    'HTML',
    'CSS',
    'Node.js',
  ];

  const approach = [
    {
      number: '01',
      title: 'Diseño',
      description:
        'Interfaces limpias y modernas pensadas para comunicar la identidad de cada proyecto.',
    },
    {
      number: '02',
      title: 'Desarrollo',
      description:
        'Sitios web funcionales utilizando tecnologías actuales y una estructura clara.',
    },
    {
      number: '03',
      title: 'Experiencia',
      description:
        'Cada decisión busca que el usuario pueda navegar de forma simple, intuitiva y agradable.',
    },
  ];

  return (
    <main className="bg-[#0b111b] text-[#f1f0ec] min-h-screen">

      {/* =====================================
          HERO ABOUT
      ===================================== */}

      <section className="relative overflow-hidden border-b border-white/[0.08]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-center">

            {/* FOTO */}

            <div
              data-aos="fade-right"
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">

                {/* Anillo exterior */}

                <div className="absolute -inset-5 rounded-full border border-[#0d9488]/30"></div>

                <div className="absolute -inset-10 rounded-full border border-[#0d9488]/10"></div>

                <img
                  src={perfil}
                  alt="Jorge Diego Arredondo"
                  className="
                    relative
                    w-64 h-64
                    md:w-80 md:h-80
                    object-cover
                    rounded-full
                    border
                    border-[#0d9488]/50
                    shadow-2xl
                  "
                />

              </div>
            </div>

            {/* TEXTO */}

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <span className="inline-block mb-5 text-[#0d9488] text-[11px] font-bold tracking-[4px]">
                SOBRE MÍ
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-[-2px] mb-7">
                Diseño y desarrollo
                <span className="text-[#0d9488]"> con propósito.</span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mb-5">
                Hola, soy{' '}
                <strong className="text-[#f1f0ec]">
                  Jorge Diego Arredondo
                </strong>
                , desarrollador web frontend.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mb-8">
                Me especializo en crear interfaces limpias, modernas y
                funcionales utilizando tecnologías como{' '}
                <strong className="text-[#f1f0ec]">
                  React, TailwindCSS y JavaScript
                </strong>
                .
              </p>

              <p className="text-gray-500 leading-7 max-w-2xl">
                Tengo experiencia profesional manteniendo y desarrollando
                sitios web, además de proyectos propios enfocados en diseño,
                funcionalidad y rendimiento.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          ENFOQUE
      ===================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24"
        >

          {/* TITULO */}

          <div>

            <span className="text-[#0d9488] text-[11px] font-bold tracking-[4px]">
              MI ENFOQUE
            </span>

            <h2 className="text-4xl md:text-5xl font-normal leading-tight tracking-[-1px] mt-5">
              Crear algo que
              <span className="text-[#0d9488]"> tenga sentido.</span>
            </h2>

          </div>


          {/* CARDS */}

          <div className="border-t border-white/[0.10]">

            {approach.map((item, index) => (
              <div
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  grid
                  grid-cols-[50px_1fr]
                  md:grid-cols-[70px_1fr]
                  gap-5
                  py-7
                  border-b
                  border-white/[0.10]
                  group
                "
              >

                <span className="text-[#0d9488] text-xs font-semibold pt-1">
                  {item.number}
                </span>

                <div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0d9488] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base leading-7 max-w-xl">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          TECNOLOGÍAS
      ===================================== */}

      <section className="border-y border-white/[0.08] bg-[#0d141f]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">

          <div
            data-aos="fade-up"
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          >

            <div>

              <span className="text-[#0d9488] text-[11px] font-bold tracking-[4px]">
                TECNOLOGÍAS
              </span>

              <h2 className="text-3xl md:text-4xl font-normal mt-4">
                Herramientas que forman parte
                <span className="text-[#0d9488]"> de mi trabajo.</span>
              </h2>

            </div>


            <div className="flex flex-wrap gap-3 max-w-xl">

              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-[#0d9488]/30
                    bg-[#0b111b]
                    text-gray-300
                    text-sm
                    hover:border-[#0d9488]
                    hover:text-[#0d9488]
                    transition-all
                    duration-300
                  "
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">

        <div
          data-aos="fade-up"
          className="
            relative
            overflow-hidden
            border
            border-[#0d9488]/30
            rounded-xl
            px-7
            py-14
            md:px-14
            md:py-16
            bg-[#0b111b]
          "
        >

          {/* Decoración */}

          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-[#0d9488]/20"></div>

          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-[#0d9488]/10"></div>


          <div className="relative z-10 max-w-3xl">

            <span className="text-[#0d9488] text-[11px] font-bold tracking-[4px]">
              ¿TENÉS UN PROYECTO?
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-[-1px] mt-5 mb-6">
              Hagamos que tu idea
              <span className="text-[#0d9488]"> cobre vida.</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mb-8">
              Conocé algunos de mis proyectos o contactame para conversar
              sobre tu próxima idea.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-md
                  border
                  border-[#0d9488]/60
                  text-gray-200
                  font-semibold
                  text-sm
                  hover:bg-[#0d9488]/10
                  hover:border-[#0d9488]
                  transition-all
                  duration-300
                "
              >
                Ver proyectos
                <span className="text-[#0d9488] text-lg">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-md
                  bg-[#0d9488]
                  text-white
                  font-semibold
                  text-sm
                  hover:bg-[#0f766e]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Contactame
                <span className="text-lg">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;