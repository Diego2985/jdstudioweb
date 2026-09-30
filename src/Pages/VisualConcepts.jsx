// src/sections/VisualConcepts.jsx

import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";

export default function VisualConcepts() {
  const concepts = useMemo(
    () => [
      {
        id: "corp-dark",
        title: "Corporate — Dark Premium",
        tag: "UI / Branding",
        number: "01",
        desc: "Estilo corporativo moderno, oscuro, CTA fuerte y tipografía limpia.",
        demo: "/demos/corporate",
        shots: [
          {
            label: "Home",
            src: "/concepts/corporate/home.jpg",
          },
          {
            label: "Nosotros",
            src: "/concepts/corporate/about.jpg",
          },
          {
            label: "Servicios",
            src: "/concepts/corporate/services.jpg",
          },
          {
            label: "Contacto",
            src: "/concepts/corporate/contact.jpg",
          },
        ],
      },

      {
        id: "tourism-light",
        title: "Tourism — Light Premium",
        tag: "Landing / Travel",
        number: "02",
        desc: "Look premium claro para turismo, enfoque en conversión y claridad.",
        demo: "/demos/tourism",
        shots: [
          {
            label: "Home",
            src: "/concepts/tourism/home.jpg",
          },
          {
            label: "Nosotros",
            src: "/concepts/tourism/about.jpg",
          },
          {
            label: "Servicios",
            src: "/concepts/tourism/services.jpg",
          },
          {
            label: "Contacto",
            src: "/concepts/tourism/contact.jpg",
          },
        ],
      },

      {
        id: "restaurant-color",
        title: "Restaurant — Color Premium",
        tag: "Food / Conversion",
        number: "03",
        desc: "Estética moderna con color, foco en CTA y experiencia visual.",
        demo: "/demos/restaurant",
        shots: [
          {
            label: "Home",
            src: "/concepts/restaurant/home.jpg",
          },
          {
            label: "Nosotros",
            src: "/concepts/restaurant/about.jpg",
          },
          {
            label: "Servicios",
            src: "/concepts/restaurant/services.jpg",
          },
          {
            label: "Contacto",
            src: "/concepts/restaurant/contact.jpg",
          },
        ],
      },

      {
        id: "medical-clean",
        title: "Medical — Clean Premium",
        tag: "Health / Trust",
        number: "04",
        desc: "Diseño limpio y confiable para medicina, jerarquía clara.",
        demo: "/demos/medical",
        shots: [
          {
            label: "Home",
            src: "/concepts/medical/home.jpg",
          },
          {
            label: "Nosotros",
            src: "/concepts/medical/about.jpg",
          },
          {
            label: "Servicios",
            src: "/concepts/medical/services.jpg",
          },
          {
            label: "Contacto",
            src: "/concepts/medical/contact.jpg",
          },
        ],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  /* =========================================================
     FILTRO
  ========================================================= */

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return concepts;

    return concepts.filter(
      (concept) =>
        concept.title.toLowerCase().includes(q) ||
        concept.tag.toLowerCase().includes(q) ||
        concept.desc.toLowerCase().includes(q)
    );
  }, [concepts, query]);

  /* =========================================================
     LIGHTBOX
  ========================================================= */

  const open = useCallback((concept, index = 0) => {
    setActive({
      concept,
      index,
    });

    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setActive(null);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    if (!active) return;

    const total = active.concept.shots.length;

    setActive((current) => ({
      ...current,
      index: (current.index + 1) % total,
    }));
  }, [active]);

  const prev = useCallback(() => {
    if (!active) return;

    const total = active.concept.shots.length;

    setActive((current) => ({
      ...current,
      index: (current.index - 1 + total) % total,
    }));
  }, [active]);

  /* =========================================================
     TECLADO
  ========================================================= */

  useEffect(() => {
    const onKey = (event) => {
      if (!active) return;

      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <main className="min-h-screen bg-[#0b111b] text-[#f1f0ec]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-white/[0.08]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-24
            md:px-10
            md:py-32
          "
        >

          <div
            data-aos="fade-up"
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  mb-5
                  inline-block
                  text-[10px]
                  font-bold
                  tracking-[4px]
                  text-[#0d9488]
                "
              >
                CONCEPTO VISUAL
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
                Ideas que empiezan
                <br className="hidden md:block" />
                como una imagen
                <span className="text-[#0d9488]">
                  {" "}y pueden convertirse
                  <br className="hidden md:block" />
                  en una experiencia.
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
              Exploración visual de diferentes estilos, sectores
              y posibilidades para crear experiencias digitales
              únicas.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALERÍA
      ===================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-20
            md:px-10
            md:py-24
          "
        >

          {/* Encabezado */}

          <div
            className="
              flex
              flex-col
              gap-6
              border-b
              border-white/[0.08]
              pb-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div>

              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                PROPUESTAS VISUALES
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-normal
                  md:text-4xl
                "
              >
                Explorá diferentes
                <span className="text-[#0d9488]">
                  {" "}direcciones creativas.
                </span>
              </h2>

            </div>


            {/* Buscador */}

            <div className="w-full md:w-[360px]">

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-white/[0.10]
                  bg-[#101722]
                  px-4
                  py-3
                  transition
                  duration-300
                  focus-within:border-[#0d9488]/50
                "
              >

                <span className="text-gray-600">
                  ⌕
                </span>

                <input
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Buscar concepto..."
                  className="
                    w-full
                    bg-transparent
                    text-sm
                    text-gray-300
                    outline-none
                    placeholder:text-gray-600
                  "
                />

              </div>

            </div>

          </div>


          {/* =================================================
              GRID
          ================================================= */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
            "
          >

            {filtered.map((concept, index) => {

              const cover = concept.shots?.[0]?.src;

              return (
                <article
                  key={concept.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => open(concept, 0)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      open(concept, 0);
                    }
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                    group
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#101722]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#0d9488]/50
                  "
                >

                  {/* Imagen */}

                  <div className="relative h-[260px] overflow-hidden">

                    <img
                      src={cover}
                      alt={`${concept.title} cover`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />

                    {/* Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#101722]
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Número */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        text-xs
                        font-bold
                        tracking-[2px]
                        text-[#0d9488]
                      "
                    >
                      {concept.number}
                    </div>

                    {/* Categoría */}

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        border
                        border-white/[0.12]
                        bg-[#0b111b]/80
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        text-gray-300
                        backdrop-blur-md
                      "
                    >
                      {concept.tag}
                    </div>

                  </div>


                  {/* Contenido */}

                  <div className="p-6">

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-semibold
                          leading-snug
                          text-[#f1f0ec]
                          transition-colors
                          duration-300
                          group-hover:text-[#0d9488]
                        "
                      >
                        {concept.title}
                      </h3>

                      <span
                        className="
                          shrink-0
                          text-sm
                          text-gray-500
                          transition-colors
                          duration-300
                          group-hover:text-[#0d9488]
                        "
                      >
                        Ver →
                      </span>

                    </div>


                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-gray-500
                      "
                    >
                      {concept.desc}
                    </p>


                    {/* Acción */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/[0.06]
                        pt-5
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[2px]
                          text-[#0d9488]
                        "
                      >
                        Explorar concepto
                      </span>

                      <span
                        className="
                          text-gray-500
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[#0d9488]
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>


          {/* Sin resultados */}

          {filtered.length === 0 && (

            <div
              className="
                py-20
                text-center
              "
            >

              <p className="text-gray-500">
                No encontramos conceptos relacionados con tu búsqueda.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="border-t border-white/[0.08]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-24
            md:px-10
            md:py-28
          "
        >

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
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                DEL CONCEPTO AL DESARROLLO
              </span>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-3xl
                  font-normal
                  leading-tight
                  md:text-4xl
                "
              >
                Una buena idea puede
                <span className="text-[#0d9488]">
                  {" "}convertirse en mucho más.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Exploramos el concepto visual y después lo
                transformamos en una experiencia web funcional.
              </p>

            </div>


            <a
              href="/contact?producto=concepto-visual"
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
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {active && (

        <div className="fixed inset-0 z-[9999]">

          {/* Backdrop */}

          <div
            className="
              absolute
              inset-0
              bg-black/85
              backdrop-blur-xl
            "
            onClick={close}
          />


          {/* Dialog */}

          <div
            className="
              relative
              mx-auto
              mt-5
              flex
              w-[calc(100%-24px)]
              max-w-6xl
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.10]
              bg-[#0b111b]/98
              shadow-[0_40px_140px_rgba(0,0,0,0.75)]
              md:mt-8
              md:max-h-[calc(100vh-64px)]
            "
          >

            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-white/[0.08]
                px-6
                py-5
              "
            >

              <div>

                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-[#0d9488]
                  "
                >
                  {active.concept.tag}
                </div>

                <div
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-[#f1f0ec]
                  "
                >
                  {active.concept.title}
                </div>

              </div>


              {/* Controles */}

              <div className="flex items-center gap-2">

                <button
                  onClick={prev}
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-md
                    border
                    border-white/[0.10]
                    bg-[#101722]
                    text-xl
                    text-gray-400
                    transition
                    hover:border-[#0d9488]/40
                    hover:text-[#0d9488]
                  "
                  aria-label="Anterior"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-md
                    border
                    border-white/[0.10]
                    bg-[#101722]
                    text-xl
                    text-gray-400
                    transition
                    hover:border-[#0d9488]/40
                    hover:text-[#0d9488]
                  "
                  aria-label="Siguiente"
                >
                  ›
                </button>

                <button
                  onClick={close}
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-md
                    border
                    border-white/[0.10]
                    bg-[#101722]
                    text-sm
                    text-gray-400
                    transition
                    hover:border-[#0d9488]/40
                    hover:text-[#0d9488]
                  "
                  aria-label="Cerrar"
                >
                  ✕
                </button>

              </div>

            </div>


            {/* Contenido */}

            <div className="flex-1 overflow-y-auto px-6 pt-5">

              {/* Imagen principal */}

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#101722]
                "
              >

                <img
                  src={
                    active.concept.shots[
                      active.index
                    ].src
                  }
                  alt={
                    active.concept.shots[
                      active.index
                    ].label
                  }
                  className="
                    h-[45vh]
                    w-full
                    object-contain
                    md:h-[58vh]
                  "
                />

              </div>


              {/* Información */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-4
                  text-sm
                "
              >

                <span className="text-gray-300">
                  {
                    active.concept.shots[
                      active.index
                    ].label
                  }
                </span>

                <span className="text-gray-600">
                  {active.index + 1}/
                  {active.concept.shots.length}
                </span>

              </div>


              {/* Thumbnails */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  pb-5
                  md:grid-cols-4
                "
              >

                {active.concept.shots.map(
                  (shot, index) => (

                    <button
                      key={shot.label}
                      onClick={() =>
                        setActive({
                          concept: active.concept,
                          index,
                        })
                      }
                      className={`
                        overflow-hidden
                        rounded-lg
                        border
                        text-left
                        transition-all
                        duration-300
                        ${
                          index === active.index
                            ? "border-[#0d9488]"
                            : "border-white/[0.08] hover:border-[#0d9488]/40"
                        }
                        bg-[#101722]
                      `}
                    >

                      <img
                        src={shot.src}
                        alt={shot.label}
                        className="
                          h-[100px]
                          w-full
                          object-cover
                        "
                      />

                      <div
                        className="
                          px-3
                          py-2
                          text-xs
                          text-gray-400
                        "
                      >
                        {shot.label}
                      </div>

                    </button>

                  )
                )}

              </div>


              <div
                className="
                  border-t
                  border-white/[0.06]
                  pb-6
                  pt-4
                  text-[11px]
                  text-gray-600
                "
              >
                Usá ← → para navegar · ESC para cerrar
              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}