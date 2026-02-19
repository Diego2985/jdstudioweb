// src/sections/VisualConcepts.jsx
import React, { useMemo, useState, useEffect, useCallback } from "react";

export default function VisualConcepts() {
  const concepts = useMemo(
    () => [
      {
        id: "corp-dark",
        title: "Corporate — Dark Premium",
        tag: "UI / Branding",
        desc: "Estilo corporativo moderno, oscuro, CTA fuerte y tipografía limpia.",
        shots: [
          { label: "Home", src: "/concepts/corporate/home.jpg" },
          { label: "Nosotros", src: "/concepts/corporate/about.jpg" },
          { label: "Servicios", src: "/concepts/corporate/services.jpg" },
          { label: "Contacto", src: "/concepts/corporate/contact.jpg" },
        ],
      },
      {
        id: "tourism-light",
        title: "Tourism — Light Premium",
        tag: "Landing / Travel",
        desc: "Look premium claro para turismo, enfoque en conversión y claridad.",
        shots: [
          { label: "Home", src: "/concepts/tourism/home.jpg" },
          { label: "Nosotros", src: "/concepts/tourism/about.jpg" },
          { label: "Servicios", src: "/concepts/tourism/services.jpg" },
          { label: "Contacto", src: "/concepts/tourism/contact.jpg" },
        ],
      },
      {
        id: "restaurant-color",
        title: "Restaurant — Color Premium",
        tag: "Food / Conversion",
        desc: "Estética moderna con color, foco en CTA y experiencia visual.",
        shots: [
          { label: "Home", src: "/concepts/restaurant/home.jpg" },
          { label: "Nosotros", src: "/concepts/restaurant/about.jpg" },
          { label: "Servicios", src: "/concepts/restaurant/services.jpg" },
          { label: "Contacto", src: "/concepts/restaurant/contact.jpg" },
        ],
      },
      {
        id: "medical-clean",
        title: "Medical — Clean Premium",
        tag: "Health / Trust",
        desc: "Diseño limpio y confiable para medicina, jerarquía clara.",
        shots: [
          { label: "Home", src: "/concepts/medical/home.jpg" },
          { label: "Nosotros", src: "/concepts/medical/about.jpg" },
          { label: "Servicios", src: "/concepts/medical/services.jpg" },
          { label: "Contacto", src: "/concepts/medical/contact.jpg" },
        ],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null); // { concept, index }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return concepts;
    return concepts.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q)
    );
  }, [concepts, query]);

  const open = useCallback((concept, index = 0) => {
    setActive({ concept, index });
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setActive(null);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    if (!active) return;
    const total = active.concept.shots.length;
    setActive((a) => ({ ...a, index: (a.index + 1) % total }));
  }, [active]);

  const prev = useCallback(() => {
    if (!active) return;
    const total = active.concept.shots.length;
    setActive((a) => ({ ...a, index: (a.index - 1 + total) % total }));
  }, [active]);

  useEffect(() => {
    const onKey = (e) => {
      if (!active) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, next, prev]);

  return (
    <section
      id="visual-concepts"
      className="relative py-16 px-4 text-white bg-[#0D1117]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Visual Concepts
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Exploraciones visuales para definir estilo, nivel estético y dirección
              creativa antes del desarrollo final.
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-[380px]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
              <span className="text-white/60">⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar: turismo, medical, dark, restaurant…"
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((c) => {
            const cover = c.shots?.[0]?.src;
            return (
              <article
                key={c.id}
                role="button"
                tabIndex={0}
                onClick={() => open(c, 0)}
                onKeyDown={(e) => e.key === "Enter" && open(c, 0)}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition"
              >
                {/* Media */}
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={cover}
                    alt={`${c.title} cover`}
                    className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-[1.06] transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur">
                    {c.tag}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <span className="text-sm text-white/70 group-hover:text-white transition">
                      Ver →
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {c.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.shots.slice(0, 4).map((s) => (
                      <span
                        key={s.label}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                      >
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* Dialog */}
          <div className="relative max-w-6xl mx-auto mt-6 md:mt-10 w-[calc(100%-24px)]
                          rounded-3xl border border-white/10 bg-[#0b0f17]/95
                          shadow-[0_40px_140px_rgba(0,0,0,0.6)] overflow-hidden
                          max-h-[calc(100vh-24px)] md:max-h-[calc(100vh-80px)]
                          flex flex-col">
           

            {/* Header */}
             <div className="px-6 pt-6 flex items-center justify-between gap-4">
               <div>
                 <div className="text-xs text-white/60">{active.concept.tag}</div>
                 <div className="text-xl font-semibold mt-1">{active.concept.title}</div>
               </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-2xl leading-none"
                  aria-label="Anterior"
                >
                  ‹
                </button>

                <button
                onClick={next}
                className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-2xl leading-none"
                aria-label="Siguiente"
                 >
                 ›
                </button>

                <button
                  onClick={close}
                  className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition grid place-items-center"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>


            <div className="px-6 pt-5 overflow-y-auto flex-1">
               {/* Hero image */}
               <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                 <img
                   src={active.concept.shots[active.index].src}
                   alt={active.concept.shots[active.index].label}
                   className="w-full h-[45vh] md:h-[62vh] object-contain"
                 />
               </div>

               <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                 <span>{active.concept.shots[active.index].label}</span>
                 <span className="text-white/60">
                   {active.index + 1}/{active.concept.shots.length}
                 </span>
               </div>

              {/* Thumbnails strip */}
              <div className="pb-6 pt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                {active.concept.shots.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setActive({ concept: active.concept, index: i })}
                    className={`text-left rounded-2xl overflow-hidden border transition ${
                      i === active.index
                        ? "border-indigo-400/80"
                        : "border-white/10 hover:border-white/20"
                    } bg-white/5`}
                  >
                    <img src={s.src} alt={s.label} className="w-full h-[110px] object-cover" />
                    <div className="px-3 py-2 text-sm text-white/80">{s.label}</div>
                  </button>
                ))}
              </div>

              <div className="pb-6 text-sm text-white/55">
                Tip: usá ← → para navegar, ESC para cerrar.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
