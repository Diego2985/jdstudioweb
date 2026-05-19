import React, { useMemo, useState, useEffect } from "react";

function VirtualCardPreview({ card }) {
  const isMinimal = card.style === "minimal";
  const isDarkNeon = card.style === "dark-neon";
  const isCorporate = card.style === "corporate-premium";
  const isCreative = card.style === "creative-gradient";

  return (
    <div className={`mx-auto mt-4 w-[220px] overflow-hidden rounded-[34px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl ${card.previewBg}`}>
      <div className="relative h-[410px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_25%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),transparent_30%)] opacity-60" />
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute right-[-24px] top-24 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/90 via-indigo-500/80 to-fuchsia-400/90" />

        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="space-y-4">
            <div className={`rounded-[28px] border ${
              isMinimal
                ? "border-slate-200 bg-white/85 text-slate-950"
                : isDarkNeon
                ? "border-cyan-400/20 bg-slate-950/90"
                : isCorporate
                ? "border-amber-300/20 bg-slate-950/95"
                : isCreative
                ? "border-white/15 bg-white/10"
                : "border-amber-300/25 bg-black/80"
            } p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)]`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold ${
                  isMinimal
                    ? "bg-slate-900 text-white"
                    : isDarkNeon
                    ? "bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(236,72,153,0.3)]"
                    : isCorporate
                    ? "bg-slate-700 text-white"
                    : isCreative
                    ? "bg-white/15 text-white"
                    : "bg-amber-400 text-slate-950"
                }`}>{card.initials}</div>
                <div>
                  <p className={`text-sm font-semibold ${isMinimal ? "text-slate-950" : "text-white"}`}>{card.name}</p>
                  <p className={`text-[10px] uppercase tracking-[0.25em] ${
                    isMinimal
                      ? "text-slate-500"
                      : isDarkNeon
                      ? "text-cyan-300/80"
                      : isCorporate
                      ? "text-slate-400"
                      : isCreative
                      ? "text-white/80"
                      : "text-amber-200/80"
                  }`}>{card.role}</p>
                </div>
              </div>
              <div className="mt-4 rounded-[26px] border border-white/10 bg-black/30 p-3 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">WhatsApp</p>
                <button className={`mt-3 inline-flex w-full items-center justify-center rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                  isMinimal
                    ? "bg-slate-950 text-white"
                    : isDarkNeon
                    ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-950 shadow-[0_8px_24px_rgba(99,102,241,0.22)]"
                    : isCorporate
                    ? "bg-amber-400 text-slate-950"
                    : isCreative
                    ? "bg-white/10 text-white"
                    : "bg-amber-400 text-slate-950"
                }`}>+{card.whatsapp}</button>
              </div>
            </div>

            <div className={`grid grid-cols-3 gap-2 ${isMinimal ? "text-slate-600" : "text-white/80"}`}>
              {card.social.map((item) => (
                <span
                  key={item.label}
                  className={`rounded-3xl border px-2 py-2 text-center text-[10px] uppercase tracking-[0.24em] ${
                    isMinimal
                      ? "border-slate-200 bg-slate-100"
                      : isDarkNeon
                      ? "border-cyan-400/20 bg-white/5"
                      : isCorporate
                      ? "border-amber-300/20 bg-slate-900/70"
                      : isCreative
                      ? "border-white/15 bg-white/10"
                      : "border-amber-300/20 bg-black/40 text-amber-200"
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className={`rounded-[28px] border p-4 text-center ${
            isMinimal
              ? "border-slate-200 bg-slate-100 text-slate-700"
              : isDarkNeon
              ? "border-cyan-300/20 bg-black/30 text-white"
              : isCorporate
              ? "border-amber-300/20 bg-slate-900/80 text-white"
              : isCreative
              ? "border-white/20 bg-white/10 text-white"
              : "border-amber-300/20 bg-black/40 text-white"
          }`}
          >
            <div className="mx-auto mb-3 h-20 w-20 rounded-3xl bg-white/10 shadow-[0_10px_30px_rgba(255,255,255,0.08)]" />
            <p className="text-[10px] uppercase tracking-[0.24em]">Scan QR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VirtualCardItem({ card, onOpenModal }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_90px_rgba(15,23,42,0.55)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_35px_120px_rgba(79,70,229,0.25)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative p-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <VirtualCardPreview card={card} />
        </div>

        <div className="mt-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-cyan-300">
              {card.title}
            </h3>
            <span className="text-sm text-white/70 group-hover:text-white transition">Explorar →</span>
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">{card.description}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(card.demo, "_blank");
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(67,56,202,0.28)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_16px_50px_rgba(67,56,202,0.35)]"
            >
              Vista Previa
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(card);
              }}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/15"
            >
              Explorar
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {card.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 rounded-full border border-white/10 bg-white/5 px-3 py-1 shadow-[0_8px_20px_rgba(15,23,42,0.1)]"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function VirtualCardPreviewModal({ selectedCard, isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    requestAnimationFrame(() => setMounted(true));
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setMounted(false);
  }, [isOpen]);

  const close = () => {
    setMounted(false);
    setTimeout(onClose, 250);
  };

  if (!selectedCard || (!isOpen && !mounted)) return null;

  const previewAccent = selectedCard.id === "dark-neon"
    ? "from-fuchsia-500/20 via-cyan-400/10 to-indigo-500/10"
    : selectedCard.id === "luxury-black"
    ? "from-amber-400/20 via-slate-900/10"
    : selectedCard.id === "corporate-premium"
    ? "from-slate-500/15 via-slate-800/10"
    : selectedCard.id === "creative-gradient"
    ? "from-fuchsia-500/20 via-indigo-500/15 to-cyan-400/10"
    : "from-slate-500/15 to-slate-900/10";

  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto touch-pan-y px-4 py-6 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-300" onClick={close} />

      <div className={`relative z-10 w-full max-w-6xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[40px] border border-white/10 bg-[#060710]/95 shadow-[0_45px_120px_rgba(0,0,0,0.75)] backdrop-blur-3xl transition-all duration-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"}`}>
        <button
          onClick={close}
          aria-label="Cerrar vista previa"
          className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
        >
          ✕
        </button>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(320px,1.1fr)_minmax(380px,0.9fr)]">
          <div className="flex items-center justify-center">
            <div className={`relative w-full max-w-[340px] rounded-[64px] border border-white/10 bg-gradient-to-b ${previewAccent} p-5 shadow-[0_40px_120px_rgba(15,23,42,0.5)]`}>
              <div className="absolute left-1/2 top-4 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/15" />
              <div className="absolute left-8 top-4 h-3 w-3 rounded-full bg-slate-200/30" />
              <div className="absolute right-8 top-4 h-3 w-3 rounded-full bg-emerald-400/75 shadow-[0_0_16px_rgba(16,185,129,0.35)]" />
              <div className="mt-12 overflow-hidden rounded-[48px] border border-white/5 bg-[#07101e]/95 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                <div
                  className="max-h-[calc(100vh-18rem)] min-h-[420px] overflow-y-auto touch-pan-y rounded-[36px] bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900 p-4"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div className="mx-auto mt-4 w-max rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                    <VirtualCardPreview card={selectedCard} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Vista previa móvil</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{selectedCard.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Experimenta cómo se ve tu tarjeta virtual dentro de un teléfono premium. Cada detalle está diseñado para sentirse elegante, interactivo y listo para compartir.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Nombre</p>
                <p className="mt-2 text-lg font-semibold text-white">{selectedCard.name}</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Rol</p>
                <p className="mt-2 text-lg font-semibold text-white">{selectedCard.role}</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-[#07090f]/95 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Características clave</p>
              <div className="mt-4 space-y-3">
                {selectedCard.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">•</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/50 p-6 text-center shadow-[0_16px_60px_rgba(0,0,0,0.25)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">En tu bolsillo</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">La experiencia simula el flujo real de una tarjeta digital compartida desde un dispositivo móvil y lista para guardar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VirtualCards() {
  const [query, setQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const cards = useMemo(
    () => [
      {
        id: "minimal-white",
        title: "Minimal White Card",
        tag: "Minimal White",
        style: "minimal",
        description: "Plantilla limpia con fondo blanco suave, tipografía clara y un diseño sencillo para contactos profesionales.",
        demo: "https://example.com/minimal-white-demo",
        view: "https://example.com/minimal-white",
        features: ["Tipografía simple", "Enlace rápido", "Área de contacto"],
        name: "Sara López",
        role: "Product Designer",
        company: "Luma Studio",
        whatsapp: "+52 55 1234 5678",
        email: "sara@lumastudio.com",
        initials: "SL",
        previewBg: "bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100",
        avatarBg: "from-slate-700 to-slate-900",
        social: [
          { label: "In" },
          { label: "Li" },
          { label: "Wa" },
        ],
      },
      {
        id: "dark-neon",
        title: "Dark Neon Card",
        tag: "Dark Neon",
        style: "dark-neon",
        description: "Estilo nocturno con neón vibrante y bloques luminosos que resaltan tu perfil de manera moderna.",
        demo: "https://example.com/dark-neon-demo",
        view: "https://example.com/dark-neon",
        features: ["Acentos neón", "Llamada a la acción", "Sección de redes"],
        name: "Marco Silva",
        role: "UX Strategist",
        company: "NeonPulse",
        whatsapp: "+34 600 123 456",
        email: "marco@neonpulse.com",
        initials: "MS",
        previewBg: "bg-gradient-to-b from-[#05070c] via-[#08101f] to-[#0b1124]",
        avatarBg: "from-fuchsia-500 to-cyan-400",
        social: [
          { label: "Wa" },
          { label: "Tw" },
          { label: "Ig" },
        ],
      },
      {
        id: "corporate-premium",
        title: "Corporate Premium Card",
        tag: "Corporate Premium",
        style: "corporate-premium",
        description: "Diseño sobrio y elegante para empresas, con jerarquía clara y elementos de confianza visual.",
        demo: "https://example.com/corporate-premium-demo",
        view: "https://example.com/corporate-premium",
        features: ["Perfil ejecutivo", "Datos empresariales", "Contacto directo"],
        name: "Alejandra Cruz",
        role: "Consultora Financiera",
        company: "Apex Capital",
        whatsapp: "+52 1 55 9876 5432",
        email: "alejandra@apexcap.com",
        initials: "AC",
        previewBg: "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900",
        avatarBg: "from-slate-600 to-slate-800",
        social: [
          { label: "Li" },
          { label: "Em" },
          { label: "Wh" },
        ],
      },
      {
        id: "creative-gradient",
        title: "Creative Gradient Card",
        tag: "Creative Gradient",
        style: "creative-gradient",
        description: "Tarjeta con degradados vivos y formato dinámico para profesionales creativos y freelancers.",
        demo: "https://example.com/creative-gradient-demo",
        view: "https://example.com/creative-gradient",
        features: ["Fondo degradado", "Sección de servicios", "Botones destacados"],
        name: "Luna Vega",
        role: "Creative Director",
        company: "Glow Lab",
        whatsapp: "+34 655 987 321",
        email: "luna@glowlab.studio",
        initials: "LV",
        previewBg: "bg-gradient-to-b from-[#5b21b6] via-[#9333ea] to-[#ec4899]",
        avatarBg: "from-fuchsia-500 to-violet-700",
        social: [
          { label: "Dr" },
          { label: "Ig" },
          { label: "Be" },
        ],
      },
      {
        id: "luxury-black",
        title: "Luxury Black Card",
        tag: "Luxury Black",
        style: "luxury-black",
        description: "Tarjeta virtual oscura premium con detalles dorados y un estilo sofisticado para marcas de lujo.",
        demo: "https://example.com/luxury-black-demo",
        view: "https://example.com/luxury-black",
        features: ["Look exclusivo", "Reseñas", "Acceso VIP"],
        name: "Diego Morales",
        role: "Luxury Brand Advisor",
        company: "Noir Collective",
        whatsapp: "+52 55 2468 1357",
        email: "diego@noircollective.com",
        initials: "DM",
        previewBg: "bg-gradient-to-b from-[#070809] via-[#111418] to-[#0a0b11]",
        avatarBg: "from-amber-500 to-yellow-400",
        social: [
          { label: "Li" },
          { label: "In" },
          { label: "Wa" },
        ],
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cards;
    return cards.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.tag.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.features.some((feature) => feature.toLowerCase().includes(q))
    );
  }, [cards, query]);

  return (
    <section id="virtual-cards" className="relative py-20 px-4 text-white bg-[#0D1117] overflow-hidden">
      <div className="pointer-events-none absolute -top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">Digital Business Cards</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Tarjetas Virtuales</h2>
            <p className="mt-4 max-w-xl text-gray-300/90 leading-relaxed text-base md:text-lg">
              Plantillas premium con acabado glassmorphism, sombras sutiles y detalles de brillo para presentar tu perfil con estilo moderno.
            </p>
          </div>

          <div className="w-full md:w-[420px]">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:border-white/20">
              <span className="text-white/60">⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar diseño, categoría o característica..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((card) => (
            <VirtualCardItem key={card.id} card={card} onOpenModal={(selected) => {
              setSelectedCard(selected);
              setIsModalVisible(true);
            }} />
          ))}
        </div>
      </div>
      <VirtualCardPreviewModal
        selectedCard={selectedCard}
        isOpen={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setTimeout(() => setSelectedCard(null), 250);
        }}
      />
    </section>
  );
}
