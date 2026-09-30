import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const concepts = {
  corporate: {
    title: 'Your Business',
    subtitle: 'Soluciones digitales enfocadas en crecimiento.',
    description:
      'Una experiencia corporativa moderna, elegante y orientada a transmitir confianza.',
    accent: '#d6a94a',
    background: '#0c1018',
    surface: '#151a24',
    text: '#f5f2ea',
    muted: '#9ca3af',
    heroImage: '/concepts/corporate/home.jpg',
    aboutImage: '/concepts/corporate/about.jpg',
    servicesImage: '/concepts/corporate/services.jpg',
    contactImage: '/concepts/corporate/contact.jpg',
  },

  medical: {
    title: 'Medical Care',
    subtitle: 'Cuidado, confianza y claridad.',
    description:
      'Una propuesta visual limpia y profesional pensada para transmitir tranquilidad.',
    accent: '#38bdf8',
    background: '#f7fafc',
    surface: '#ffffff',
    text: '#172033',
    muted: '#64748b',
    heroImage: '/concepts/medical/home.jpg',
    aboutImage: '/concepts/medical/about.jpg',
    servicesImage: '/concepts/medical/services.jpg',
    contactImage: '/concepts/medical/contact.jpg',
  },

  restaurant: {
    title: 'Sabor & Experiencia',
    subtitle: 'Una experiencia gastronómica comienza antes de la mesa.',
    description:
      'Una identidad visual atractiva pensada para despertar interés y generar acción.',
    accent: '#f97316',
    background: '#17100d',
    surface: '#241714',
    text: '#fff7ed',
    muted: '#c4a99a',
    heroImage: '/concepts/restaurant/home.jpg',
    aboutImage: '/concepts/restaurant/about.jpg',
    servicesImage: '/concepts/restaurant/services.jpg',
    contactImage: '/concepts/restaurant/contact.jpg',
  },

  tourism: {
    title: 'Explore Argentina',
    subtitle: 'Descubrí lugares que vale la pena conocer.',
    description:
      'Una experiencia visual clara y atractiva para presentar destinos y experiencias.',
    accent: '#0d9488',
    background: '#f8faf9',
    surface: '#ffffff',
    text: '#17211f',
    muted: '#64746f',
    heroImage: '/concepts/tourism/home.jpg',
    aboutImage: '/concepts/tourism/about.jpg',
    servicesImage: '/concepts/tourism/services.jpg',
    contactImage: '/concepts/tourism/contact.jpg',
  },
};

function ConceptDemo() {
  const { conceptId } = useParams();
  const concept = concepts[conceptId];

  const [section, setSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!concept) {
    return (
      <main className="min-h-screen bg-[#0b111b] px-6 py-32 text-center text-white">
        <h1 className="mb-6 text-3xl">Concepto no encontrado</h1>

        <Link
          to="/visual-concepts"
          className="inline-flex rounded-md bg-[#0d9488] px-6 py-3 text-sm font-semibold"
        >
          Volver a Concepto Visual
        </Link>
      </main>
    );
  }

  const navItems = [
    ['home', 'Inicio'],
    ['about', 'Nosotros'],
    ['services', 'Servicios'],
    ['contact', 'Contacto'],
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: concept.background,
        color: concept.text,
      }}
    >

      {/* DEMO NAVBAR */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: `${concept.background}ee`,
          borderColor: `${concept.text}18`,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <button
            onClick={() => setSection('home')}
            className="text-lg font-bold"
            style={{ color: concept.accent }}
          >
            {concept.title}
          </button>

          {/* Navegación escritorio */}
             <nav className="hidden gap-6 md:flex">             
  {navItems.map(([id, label]) => (
    <button
      key={id}
      onClick={() => setSection(id)}
      className="text-sm transition-opacity hover:opacity-70"
      style={{
        color:
          section === id ? concept.accent : concept.muted,
      }}
    >
      {label}
    </button>
  ))}
             </nav>

             {/* Botón menú móvil */}
             <button
               type="button"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
               style={{
                 borderColor: `${concept.text}25`,
                 color: concept.text,
               }}
               aria-label="Abrir menú"
             >
               <span className="text-xl">
                 {mobileMenuOpen ? '×' : '☰'}
               </span>
             </button>

          <Link
            to="/visual-concepts"
            className="text-xs"
            style={{ color: concept.muted }}
          >
            ← Volver a conceptos
          </Link>

        </div>
        {mobileMenuOpen && (
        <nav
          className="border-t px-6 py-4 md:hidden"
          style={{
            borderColor: `${concept.text}15`,
            backgroundColor: concept.background,
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setSection(id);
                  setMobileMenuOpen(false);
                }}
                className="rounded-md px-3 py-3 text-left text-sm transition-opacity hover:opacity-70"
                style={{
                  color:
                    section === id ? concept.accent : concept.muted,
               }}
             >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}
      </header>


      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">

        {/* INICIO */}
        {section === 'home' && (
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <span
                className="mb-5 inline-block text-xs font-bold uppercase tracking-[3px]"
                style={{ color: concept.accent }}
              >
                Concepto Visual
              </span>

              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
                {concept.subtitle}
              </h1>

              <p
                className="mb-8 max-w-xl text-base leading-7"
                style={{ color: concept.muted }}
              >
                {concept.description}
              </p>

              <button
                onClick={() => setSection('services')}
                className="rounded-md px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: concept.accent,
                  color:
                    conceptId === 'medical' || conceptId === 'tourism'
                      ? '#ffffff'
                      : '#111111',
                }}
              >
                Ver servicios →
              </button>
            </div>

            <img
              src={concept.heroImage}
              alt={`${concept.title} Home`}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />

          </div>
        )}


        {/* NOSOTROS */}
        {section === 'about' && (
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <img
              src={concept.aboutImage}
              alt="Nosotros"
              className="w-full rounded-2xl object-cover shadow-xl"
            />

            <div>
              <span
                className="mb-4 inline-block text-xs font-bold uppercase tracking-[3px]"
                style={{ color: concept.accent }}
              >
                Nosotros
              </span>

              <h2 className="mb-5 text-4xl font-semibold">
                Una identidad pensada para comunicar.
              </h2>

              <p
                className="leading-7"
                style={{ color: concept.muted }}
              >
                Cada elemento visual busca construir una experiencia
                coherente, clara y memorable para el usuario.
              </p>
            </div>

          </div>
        )}


        {/* SERVICIOS */}
        {section === 'services' && (
          <div>

            <div className="mb-10">
              <span
                className="text-xs font-bold uppercase tracking-[3px]"
                style={{ color: concept.accent }}
              >
                Servicios
              </span>

              <h2 className="mt-3 text-4xl font-semibold">
                Soluciones para tu proyecto
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {[
                'Diseño personalizado',
                'Experiencia responsive',
                'Desarrollo moderno',
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: concept.surface,
                    borderColor: `${concept.text}15`,
                  }}
                >
                  <div
                    className="mb-5 text-2xl"
                    style={{ color: concept.accent }}
                  >
                    ◆
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">
                    {service}
                  </h3>

                  <p
                    className="text-sm leading-6"
                    style={{ color: concept.muted }}
                  >
                    Una solución pensada para combinar estética,
                    funcionalidad y una buena experiencia de usuario.
                  </p>
                </div>
              ))}

            </div>

            <img
              src={concept.servicesImage}
              alt="Servicios"
              className="mt-8 w-full rounded-2xl object-cover"
            />

          </div>
        )}


        {/* CONTACTO */}
        {section === 'contact' && (
          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <span
                className="text-xs font-bold uppercase tracking-[3px]"
                style={{ color: concept.accent }}
              >
                Contacto
              </span>

              <h2 className="mt-3 text-4xl font-semibold">
                Hablemos de tu proyecto.
              </h2>

              <p
                className="mt-5 max-w-lg leading-7"
                style={{ color: concept.muted }}
              >
                Esta pantalla representa cómo podría funcionar
                la sección de contacto dentro del concepto.
              </p>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: concept.surface,
                borderColor: `${concept.text}15`,
              }}
            >
              <input
                type="text"
                placeholder="Nombre"
                className="mb-4 w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none"
                style={{
                  borderColor: `${concept.text}20`,
                  color: concept.text,
                }}
              />

              <input
                type="email"
                placeholder="Email"
                className="mb-4 w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none"
                style={{
                  borderColor: `${concept.text}20`,
                  color: concept.text,
                }}
              />

              <textarea
                rows="5"
                placeholder="Mensaje"
                className="mb-4 w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none"
                style={{
                  borderColor: `${concept.text}20`,
                  color: concept.text,
                }}
              />

              <button
                className="rounded-md px-6 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: concept.accent,
                  color:
                    conceptId === 'medical' || conceptId === 'tourism'
                      ? '#ffffff'
                      : '#111111',
                }}
              >
                Enviar mensaje
              </button>
            </div>

          </div>
        )}

      </section>


      {/* CTA FINAL */}
      <section
        className="border-t px-6 py-12"
        style={{ borderColor: `${concept.text}15` }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p
              className="text-sm"
              style={{ color: concept.muted }}
            >
              ¿Te gusta esta dirección visual?
            </p>

            <p className="mt-1 font-semibold">
              Podemos convertirla en tu sitio web.
            </p>
          </div>

          <Link
            to="/contact?producto=concepto-visual"
            className="inline-flex justify-center rounded-md px-6 py-3 text-sm font-semibold"
            style={{
              backgroundColor: concept.accent,
              color:
                conceptId === 'medical' || conceptId === 'tourism'
                  ? '#ffffff'
                  : '#111111',
            }}
          >
            Solicitar este concepto →
          </Link>

        </div>
      </section>

    </main>
  );
}

export default ConceptDemo;