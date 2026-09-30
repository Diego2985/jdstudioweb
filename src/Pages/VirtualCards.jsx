import React, { useMemo, useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

/* =========================================================
   PREVIEW DE LA TARJETA
========================================================= */

function VirtualCardPreview({ card }) {
  const isMinimal = card.style === "minimal";
  const isDarkNeon = card.style === "dark-neon";
  const isCorporate = card.style === "corporate-premium";
  const isCreative = card.style === "creative-gradient";

  return (
    <div
      className={`
        mx-auto
        mt-4
        w-[220px]
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        shadow-[0_30px_90px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        ${card.previewBg}
      `}
    >
      <div className="relative h-[410px] overflow-hidden">

        {/* Brillos ambientales */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),transparent_25%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(13,148,136,0.10),transparent_30%)]" />

        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

        <div className="absolute right-[-24px] top-24 h-28 w-28 rounded-full bg-white/5 blur-3xl" />

        {/* Línea superior */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d9488] via-[#14b8a6] to-[#0d9488]" />

        <div className="relative flex h-full flex-col justify-between p-5">

          {/* Perfil */}
          <div className="space-y-4">

            <div
              className={`
                rounded-[28px]
                border
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                ${
                  isMinimal
                    ? "border-slate-200 bg-white/90 text-slate-950"
                    : isDarkNeon
                    ? "border-cyan-400/20 bg-slate-950/90"
                    : isCorporate
                    ? "border-[#0d9488]/20 bg-slate-950/95"
                    : isCreative
                    ? "border-white/15 bg-white/10"
                    : "border-amber-300/25 bg-black/80"
                }
              `}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-lg
                    font-semibold
                    ${
                      isMinimal
                        ? "bg-slate-900 text-white"
                        : isDarkNeon
                        ? "bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-slate-950"
                        : isCorporate
                        ? "bg-[#0d9488] text-white"
                        : isCreative
                        ? "bg-white/15 text-white"
                        : "bg-amber-400 text-slate-950"
                    }
                  `}
                >
                  {card.initials}
                </div>

                <div>

                  <p
                    className={`
                      text-sm
                      font-semibold
                      ${isMinimal ? "text-slate-950" : "text-white"}
                    `}
                  >
                    {card.name}
                  </p>

                  <p
                    className={`
                      max-w-[115px]
                      text-[09px]
                      uppercase
                      tracking-[0.12em]
                      leading-tight
                      break-words
                      ${
                        isMinimal
                          ? "text-slate-500"
                          : isCorporate
                          ? "text-[#0d9488]"
                          : "text-white/70"
                      }
                    `}
                  >
                    {card.role}
                  </p>

                </div>

              </div>

              {/* WhatsApp */}
              <div className="mt-4 rounded-[26px] border border-white/10 bg-black/30 p-3 backdrop-blur-sm">

                <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                  WhatsApp
                </p>

                <div
                  className={`
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    ${
                      isMinimal
                        ? "bg-slate-950 text-white"
                        : isCorporate
                        ? "bg-[#0d9488] text-white"
                        : isDarkNeon
                        ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-950"
                        : isCreative
                        ? "bg-white/10 text-white"
                        : "bg-amber-400 text-slate-950"
                    }
                  `}
                >
                  <span className="leading-tight">
                    <span className="block">{card.whatsapp.split(" ").slice(0, 3).join(" ")}</span>
                    <span className="block">
                      {card.whatsapp.split(" ").slice(3).join(" ")}
                    </span>
                  </span>
                </div>

              </div>

            </div>

            {/* Redes */}
            <div
              className={`
                grid
                grid-cols-3
                gap-2
                ${isMinimal ? "text-slate-600" : "text-white/80"}
              `}
            >

              {card.social.map((item) => {
                const socialUrl =
                  item.label === "Wa"
                    ? "https://wa.me/5491169671848"
                    : item.label === "Li"
                    ? "https://www.linkedin.com/in/jorge-diego-arredondo/"
                    : "https://jdstudioweb.com.ar/";

                return (
                  <a
                    key={item.label}
                    href={socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      rounded-3xl
                      border
                      px-2
                      py-2
                      text-center
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#0d9488]/50
                      hover:text-[#0d9488]
                      ${
                        isMinimal
                          ? "border-slate-200 bg-slate-100"
                          : isCorporate
                          ? "border-[#0d9488]/20 bg-slate-900/70"
                          : "border-white/10 bg-black/30"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}

              

            </div>

          </div>

          {/* QR */}
          <div
            className={`
              rounded-[28px]
              border
              p-4
              text-center
              ${
                isMinimal
                  ? "border-slate-200 bg-slate-100 text-slate-700"
                  : "border-white/10 bg-black/30 text-white"
              }
            `}
          >

            <QRCodeSVG
              value="https://jdstudioweb.com.ar/tarjeta-digital"
              size={80}
              bgColor="#ffffff"
              fgColor="#0b111b"
              level="H"
              includeMargin={false}
              imageSettings={{
                src: logo,
                height: 18,
                width: 18,
                excavate: true,
              }}
              className="mx-auto mb-3 rounded-2xl"
            />

            <p className="text-[10px] uppercase tracking-[0.24em]">
              Scan QR
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}


/* =========================================================
   TARJETA DE GALERÍA
========================================================= */

function VirtualCardItem({ card, onOpenModal }) {

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#101722]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#0d9488]/50
      "
    >

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.12),transparent_35%)]
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative p-5">

        {/* Preview */}
        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-white/[0.08]
            bg-[#0b111b]
          "
        >
          <VirtualCardPreview card={card} />
        </div>

        {/* Información */}
        <div className="mt-6">

          <div className="flex items-start justify-between gap-3">

            <div>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                {card.tag}
              </span>

              <h3
                className="
                  mt-2
                  text-xl
                  font-semibold
                  tracking-tight
                  text-[#f1f0ec]
                "
              >
                {card.title}
              </h3>

            </div>

          </div>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-gray-500
            "
          >
            {card.description}
          </p>

          {/* Botones */}
          <div className="mt-6 flex gap-3">

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(card.demo, "_blank");
              }}
              className="
                inline-flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-md
                bg-[#0d9488]
                px-4
                py-3
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0f766e]
              "
            >
              Vista previa
              <span>→</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(card);
              }}
              className="
                inline-flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-white/[0.10]
                bg-white/[0.03]
                px-4
                py-3
                text-xs
                font-semibold
                text-gray-300
                transition-all
                duration-300
                hover:border-[#0d9488]/40
                hover:text-[#0d9488]
              "
            >
              Explorar
              <span>→</span>
            </button>

          </div>

          {/* Features */}
          <div className="mt-5 flex flex-wrap gap-2">

            {card.features.slice(0, 4).map((feature) => (

              <span
                key={feature}
                className="
                  rounded-full
                  border
                  border-[#0d9488]/20
                  bg-[#0b111b]
                  px-3
                  py-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-gray-500
                "
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


/* =========================================================
   MODAL
========================================================= */

export function VirtualCardPreviewModal({
  selectedCard,
  isOpen,
  onClose,
}) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    if (!isOpen) return;

    requestAnimationFrame(() => setMounted(true));

  }, [isOpen]);

  useEffect(() => {

    if (!isOpen) {
      setMounted(false);
    }

  }, [isOpen]);

  const close = () => {

    setMounted(false);

    setTimeout(onClose, 250);

  };

  if (!selectedCard || (!isOpen && !mounted)) {
    return null;
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        flex
        items-start
        justify-center
        overflow-y-auto
        px-4
        py-6
        transition-opacity
        duration-300
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >

      {/* Fondo */}
      <div
        className="
          absolute
          inset-0
          bg-black/80
          backdrop-blur-xl
        "
        onClick={close}
      />

      {/* Modal */}
      <div
        className={`
          relative
          z-10
          w-full
          max-w-6xl
          overflow-y-auto
          rounded-3xl
          border
          border-white/[0.10]
          bg-[#0b111b]
          shadow-[0_45px_120px_rgba(0,0,0,0.75)]
          transition-all
          duration-300
          ${
            mounted
              ? "scale-100 opacity-100"
              : "scale-[0.96] opacity-0"
          }
        `}
      >

        {/* Cerrar */}
        <button
          onClick={close}
          aria-label="Cerrar vista previa"
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-[#101722]
            text-gray-300
            transition
            hover:border-[#0d9488]/40
            hover:text-[#0d9488]
          "
        >
          ✕
        </button>

        <div
          className="
            grid
            gap-10
            p-6
            sm:p-8
            lg:grid-cols-[minmax(320px,1fr)_minmax(380px,1fr)]
          "
        >

          {/* Preview móvil */}
          <div className="flex items-center justify-center">

            <div
              className="
                rounded-[44px]
                border
                border-white/[0.10]
                bg-[#070d15]
                p-5
                shadow-[0_40px_120px_rgba(0,0,0,0.5)]
              "
            >

              <div className="mb-5 flex justify-center">

                <div className="h-1.5 w-20 rounded-full bg-white/10" />

              </div>

              <div
                className="
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/[0.06]
                  bg-[#0b111b]
                  p-3
                "
              >

                <div
                  className="
                    max-h-[calc(100vh-16rem)]
                    min-h-[420px]
                    overflow-y-auto
                    rounded-[30px]
                    bg-[#070d15]
                    p-3
                  "
                >

                  <div className="mx-auto w-max">

                    <VirtualCardPreview card={selectedCard} />

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Información */}
          <div className="space-y-5">

            <div
              className="
                border-b
                border-white/[0.08]
                pb-6
              "
            >

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                VISTA PREVIA
              </span>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-normal
                  tracking-tight
                  text-[#f1f0ec]
                "
              >
                {selectedCard.title}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Una representación de cómo puede verse tu tarjeta
                digital en un dispositivo móvil.
              </p>

            </div>


            {/* Datos */}
            <div className="grid gap-3 sm:grid-cols-2">

              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#101722]
                  p-5
                "
              >

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Nombre
                </p>

                <p className="mt-2 font-semibold text-gray-200">
                  {selectedCard.name}
                </p>

              </div>


              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#101722]
                  p-5
                "
              >

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Rol
                </p>

                <p className="mt-2 font-semibold text-gray-200">
                  {selectedCard.role}
                </p>

              </div>

            </div>


            {/* Características */}
            <div
              className="
                rounded-xl
                border
                border-white/[0.08]
                bg-[#101722]
                p-6
              "
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                CARACTERÍSTICAS
              </p>

              <div className="mt-4 space-y-2">

                {selectedCard.features.map((feature) => (

                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-white/[0.06]
                      bg-[#0b111b]
                      px-4
                      py-3
                      text-sm
                      text-gray-400
                    "
                  >

                    <span className="text-[#0d9488]">
                      +
                    </span>

                    {feature}

                  </div>

                ))}

              </div>

            </div>


            {/* CTA */}
            <div
              className="
                rounded-xl
                border
                border-[#0d9488]/30
                bg-[#0d9488]/[0.05]
                p-6
              "
            >

              <p className="text-lg font-medium text-gray-200">
                ¿Querés una tarjeta como esta?
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Podemos adaptar el diseño a tu identidad y crear
                una tarjeta digital personalizada.
              </p>

              <a
                href="/contact"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#0d9488]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0f766e]
                "
              >
                Quiero mi tarjeta
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   PÁGINA
========================================================= */

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
        description:
          "Plantilla limpia con fondo blanco suave, tipografía clara y un diseño sencillo para contactos profesionales.",
        demo: "/tarjetas-virtuales/minimal-white",
        view: "https://example.com/minimal-white",
        features: [
          "Tipografía simple",
          "Enlace rápido",
          "Área de contacto",
        ],
        name: "Sara López",
        role: "Product Designer",
        company: "Luma Studio",
        whatsapp: "+52 55 1234 5678",
        email: "sara@lumastudio.com",
        initials: "SL",
        previewBg:
          "bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100",
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

        description:"Una tarjeta digital moderna con estética neón, identidad visual personalizada y acceso directo a tus medios de contacto.",

        demo: "/tarjetas-virtuales/dark-neon",

        view: "/tarjeta-digital",

        features: [
                   "Diseño neón",
                   "WhatsApp directo",
                   "Redes sociales",
                   "Código QR",
                  ],

        name: "Jorge Diego Arredondo",
        role: "Desarrollador Web",
        company: "JD Studio Web",

        whatsapp: "+54 9 11 6967-1848",

        email: "arredondojorgediego@gmail.com",

        initials: "JD",

        previewBg:"bg-gradient-to-b from-[#05070c] via-[#08101f] to-[#0b1124]",

        avatarBg:"from-fuchsia-500 to-cyan-400",

        social: [
        { label: "Wa" },
        { label: "Li" },
        { label: "Web" },
        ],
    },
      {
        id: "corporate-premium",
        title: "Corporate Premium Card",
        tag: "Corporate Premium",
        style: "corporate-premium",
        description:
          "Diseño sobrio y elegante para empresas, con jerarquía clara y elementos de confianza visual.",
        demo: "/tarjetas-virtuales/corporate-premium",
        view: "https://example.com/corporate-premium",
        features: [
          "Perfil ejecutivo",
          "Datos empresariales",
          "Contacto directo",
        ],
        name: "Alejandra Cruz",
        role: "Consultora Financiera",
        company: "Apex Capital",
        whatsapp: "+52 1 55 9876 5432",
        email: "alejandra@apexcap.com",
        initials: "AC",
        previewBg:
          "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900",
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
        description:
          "Tarjeta con degradados vivos y formato dinámico para profesionales creativos y freelancers.",
        demo: "/tarjetas-virtuales/creative-gradient",
        view: "https://example.com/creative-gradient",
        features: [
          "Fondo degradado",
          "Sección de servicios",
          "Botones destacados",
        ],
        name: "Luna Vega",
        role: "Creative Director",
        company: "Glow Lab",
        whatsapp: "+34 655 987 321",
        email: "luna@glowlab.studio",
        initials: "LV",
        previewBg:
          "bg-gradient-to-b from-[#5b21b6] via-[#9333ea] to-[#ec4899]",
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
        description:
          "Tarjeta virtual oscura premium con detalles dorados y un estilo sofisticado para marcas de lujo.",
        demo: "/tarjetas-virtuales/luxury-black",
        view: "https://example.com/luxury-black",
        features: [
          "Look exclusivo",
          "Reseñas",
          "Acceso VIP",
        ],
        name: "Diego Morales",
        role: "Luxury Brand Advisor",
        company: "Noir Collective",
        whatsapp: "+52 55 2468 1357",
        email: "diego@noircollective.com",
        initials: "DM",
        previewBg:
          "bg-gradient-to-b from-[#070809] via-[#111418] to-[#0a0b11]",
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


  /* =========================================================
     BUSCADOR
  ========================================================= */

  const filtered = useMemo(() => {

    const q = query.trim().toLowerCase();

    if (!q) return cards;

    return cards.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.tag.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.features.some((feature) =>
          feature.toLowerCase().includes(q)
        )
    );

  }, [cards, query]);


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
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
            data-aos="fade-up"
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
                TARJETAS DIGITALES
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
                Tu identidad digital,
                <span className="text-[#0d9488]">
                  {" "}siempre a un enlace
                  de distancia.
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
              Diseños de tarjetas virtuales pensados para
              profesionales, emprendedores y negocios que quieren
              compartir sus datos de forma moderna.
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
              gap-8
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
                DISEÑOS DISPONIBLES
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-normal
                  md:text-4xl
                "
              >
                Elegí el estilo que
                <span className="text-[#0d9488]">
                  {" "}mejor represente tu marca.
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
                  focus-within:border-[#0d9488]/50
                "
              >

                <span className="text-gray-600">
                  ⌕
                </span>

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar diseño..."
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


          {/* Grid */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {filtered.map((card, index) => (

              <div
                key={card.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >

                <VirtualCardItem
                  card={card}
                  onOpenModal={(selected) => {
                    setSelectedCard(selected);
                    setIsModalVisible(true);
                  }}
                />

              </div>

            ))}

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
                No encontramos diseños relacionados con tu búsqueda.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
    SECCIÓN COMERCIAL
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

    {/* ENCABEZADO */}

    <div
      data-aos="fade-up"
      className="mx-auto max-w-3xl text-center"
    >

      <span
        className="
          text-[10px]
          font-bold
          tracking-[3px]
          text-[#0d9488]
        "
      >
        ELEGÍ TU FORMATO
      </span>

      <h2
        className="
          mt-4
          text-3xl
          font-normal
          leading-tight
          md:text-5xl
        "
      >
        Una tarjeta para cada forma
        <span className="text-[#0d9488]">
          {" "}de conectar.
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-7
          text-gray-500
          md:text-base
        "
      >
        Elegí cómo querés presentar tu información profesional.
        Podemos crear tu tarjeta digital, preparar tu tarjeta
        impresa o combinar ambas.
      </p>

    </div>


    {/* OPCIONES */}

    <div
      className="
        mt-14
        grid
        gap-5
        md:grid-cols-3
      "
    >

      {/* TARJETA VIRTUAL */}

      <article
        data-aos="fade-up"
        data-aos-delay="0"
        className="
          group
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#101722]
          p-7
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#0d9488]/30
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-[#0d9488]/20
            bg-[#0d9488]/10
            text-xl
            text-[#0d9488]
          "
        >
          ↗
        </div>

        <h3 className="mt-6 text-xl font-medium">
          Tarjeta Virtual
        </h3>

        <div className="mt-2">
          <span className="text-sm text-gray-500">Desde</span>
          <span className="ml-2 text-2xl font-bold text-[#0d9488]">
            USD 30
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Tu identidad profesional en una página digital
          lista para compartir desde cualquier dispositivo.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-400">

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Diseño personalizado
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            WhatsApp y redes
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Código QR
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Enlace propio
          </li>

        </ul>

        <a
          href="/contact?producto=virtual"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#0d9488]
            transition
            hover:text-[#2dd4bf]
          "
        >
          Consultar
          <span>→</span>
        </a>

      </article>


      {/* TARJETA IMPRESA */}

      <article
        data-aos="fade-up"
        data-aos-delay="100"
        className="
          group
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#101722]
          p-7
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#0d9488]/30
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-[#0d9488]/20
            bg-[#0d9488]/10
            text-xl
            text-[#0d9488]
          "
        >
          ▣
        </div>

        <h3 className="mt-6 text-xl font-medium">
          Tarjeta Impresa
        </h3>

        <div className="mt-2">
          <span className="text-sm text-gray-500">Desde</span>
          <span className="ml-2 text-2xl font-bold text-[#0d9488]">
            USD 60
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Una tarjeta física con tu identidad visual y un
          código QR para conectar el mundo físico con el digital.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-400">

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Diseño personalizado
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Código QR
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Diseño preparado para impresión
          </li>

          <li className="flex gap-3">
            <span className="text-[#0d9488]">+</span>
            Identidad visual coherente
          </li>

        </ul>

        <a
          href="/contact?producto=impresa"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#0d9488]
            transition
            hover:text-[#2dd4bf]
          "
        >
          Consultar
          <span>→</span>
        </a>

      </article>


      {/* PACK */}

      <article
        data-aos="fade-up"
        data-aos-delay="200"
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#0d9488]/40
          bg-gradient-to-b
          from-[#0d9488]/10
          to-[#101722]
          p-7
          shadow-[0_20px_60px_rgba(13,148,136,0.08)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#0d9488]/60
        "
      >

        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-[#0d9488]/30
            bg-[#0d9488]/10
            px-3
            py-1
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#2dd4bf]
          "
        >
          Pack
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-[#0d9488]/30
            bg-[#0d9488]/15
            text-xl
            text-[#2dd4bf]
          "
        >
          ✦
        </div>

        <h3 className="mt-6 text-xl font-medium">
          Virtual + Impresa
        </h3>

        <div className="mt-2">
          <span className="text-sm text-gray-500">Desde</span>
          <span className="ml-2 text-2xl font-bold text-[#2dd4bf]">
           USD 90
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Una solución completa para llevar tu identidad
          profesional tanto al mundo digital como al físico.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-400">

          <li className="flex gap-3">
            <span className="text-[#2dd4bf]">+</span>
            Tarjeta virtual
          </li>

          <li className="flex gap-3">
            <span className="text-[#2dd4bf]">+</span>
            Tarjeta impresa
          </li>

          <li className="flex gap-3">
            <span className="text-[#2dd4bf]">+</span>
            Código QR
          </li>

          <li className="flex gap-3">
            <span className="text-[#2dd4bf]">+</span>
            Misma identidad visual
          </li>

        </ul>

        <a
          href="/contact?producto=pack"
          className="
            mt-7
            inline-flex
            items-center
            gap-3
            rounded-md
            bg-[#0d9488]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-[#0f766e]
          "
        >
          Quiero mi pack
          <span className="text-lg">→</span>
        </a>

      </article>

    </div>


    {/* CIERRE */}

    <div
      data-aos="fade-up"
      className="
        mx-auto
        mt-14
        max-w-2xl
        text-center
      "
    >

      <p className="text-sm leading-7 text-gray-500">
        ¿No sabés cuál elegir?
        <span className="text-gray-300">
          {" "}Contame qué necesitás y te ayudo a definir
          la opción adecuada para tu proyecto.
        </span>
      </p>

      <a
        href="/contact"
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#0d9488]
          transition
          hover:text-[#2dd4bf]
        "
      >
        Hablar con JD Studio Web
        <span>→</span>
      </a>

    </div>

  </div>

</section>


      {/* MODAL */}

      <VirtualCardPreviewModal
        selectedCard={selectedCard}
        isOpen={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);

          setTimeout(
            () => setSelectedCard(null),
            250
          );
        }}
      />

    </main>
  );
}