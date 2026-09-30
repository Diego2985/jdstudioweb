import React from "react";
import { Link } from "react-router-dom";
import landingMockup from "../Assets/landingmockup.png";
import corporateMockup from "../Assets/corporateMockup.png";
import ecommerceMockup from "../Assets/ecommerceMockup.png";
import webDevelopmentHero from "../Assets/webDevelopmentHero.png";

function DesarrolloWeb() {
  return (
    <main className="min-h-screen bg-[#0b111b] text-[#f1f0ec]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/[0.08]">

        {/* Brillos de fondo */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />


        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-14
            px-6
            py-20
            md:px-10
            md:py-28
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-16
          "
        >

          {/* =================================================
              TEXTO
          ================================================= */}

          <div data-aos="fade-right">

            <span
              className="
                inline-block
                text-[10px]
                font-bold
                tracking-[4px]
                text-[#0d9488]
              "
            >
              DESARROLLO WEB
            </span>


            <h1
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-1.5px]
                sm:text-5xl
                md:text-6xl
              "
            >
              Soluciones web
              <br />
              para hacer crecer{" "}
              <span className="text-[#0d9488]">
                tu negocio
              </span>
            </h1>


            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-gray-400
                md:text-lg
              "
            >
              Diseño y desarrollo de sitios web modernos,
              rápidos y adaptados a cualquier dispositivo.
              Cada proyecto se construye según las necesidades
              de tu negocio.
            </p>


            {/* BOTONES */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#servicios"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0d9488]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-teal-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0f766e]
                "
              >
                Ver servicios
                <span className="ml-2">→</span>
              </a>


              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.02]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0d9488]
                  hover:bg-[#0d9488]/10
                "
              >
                Solicitar presupuesto
              </Link>

            </div>

          </div>


          {/* =================================================
              VISUAL TECNOLÓGICO
          ================================================= */}

          <div
  className="
    relative
    flex
    min-h-[380px]
    items-center
    justify-center
    lg:min-h-[430px]
  "
>
  {/* Glow de fondo */}
  <div
    className="
      pointer-events-none
      absolute
      h-[280px]
      w-[280px]
      rounded-full
      bg-cyan-500/10
      blur-[100px]
    "
  />

  {/* Imagen principal */}
  <img
    src={webDevelopmentHero}
    alt="Desarrollo web responsive con React, Tailwind y Node.js"
    className="
      relative
      z-10
      w-full
      max-w-[650px]
      object-contain
      drop-shadow-[0_0_35px_rgba(13,148,136,0.18)]
      transition-transform
      duration-700
      hover:scale-[1.02]
    "
  />
</div>

        </div>

      </section>
     {/* ============================================
    CARACTERÍSTICAS
============================================ */}

<section className="relative py-20 md:py-24">

  <div className="mx-auto max-w-7xl px-6 md:px-10">

    <div
      className="mb-12 text-center"
      data-aos="fade-up"
    >
      <span className="text-[10px] font-bold tracking-[4px] text-[#0d9488]">
        NUESTRA PROPUESTA
      </span>

      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
        Tu proyecto,{" "}
        <span className="text-[#0d9488]">
          tu solución
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Desarrollamos soluciones digitales adaptadas
        a las necesidades de cada negocio.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

      {[
        {
          icon: "✦",
          title: "Diseño personalizado",
          description:
            "Una interfaz pensada para tu identidad.",
          color: "text-purple-400",
        },
        {
          icon: "▣",
          title: "Responsive",
          description:
            "Adaptada a celular, tablet y computadora.",
          color: "text-cyan-400",
        },
        {
          icon: "</>",
          title: "Tecnología moderna",
          description:
            "Desarrollo con herramientas actuales y escalables.",
          color: "text-teal-400",
        },
      ].map((item) => (
        <div
          key={item.title}
          data-aos="fade-up"
          className="
            rounded-2xl
            border border-white/10
            bg-[#101a29]/60
            p-8
            text-center
            transition-all duration-300
            hover:-translate-y-2
            hover:border-[#0d9488]/50
            hover:shadow-xl
            hover:shadow-teal-500/5
          "
        >
          <div
            className={`
              mx-auto mb-6 flex h-16 w-16
              items-center justify-center
              rounded-2xl border border-white/10
              bg-white/5 text-2xl font-bold
              ${item.color}
            `}
          >
            {item.icon}
          </div>

          <h3 className="mb-3 text-xl font-semibold">
            {item.title}
          </h3>

          <p className="text-sm leading-6 text-gray-400">
            {item.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
 {/* =====================================================
    SERVICIOS
===================================================== */}

<section
  id="servicios"
  className="relative border-t border-white/[0.06] py-20 md:py-24"
>
  <div className="mx-auto max-w-7xl px-6 md:px-10">

    {/* ENCABEZADO */}

    <div
      className="mb-14 text-center"
      data-aos="fade-up"
    >
      <span
        className="
          text-[10px]
          font-bold
          tracking-[4px]
          text-[#0d9488]
        "
      >
        SERVICIOS
      </span>

      <h2
        className="
          mt-4
          text-3xl
          font-semibold
          md:text-4xl
        "
      >
        ¿Qué tipo de web{" "}
        <span className="text-[#0d9488]">
          necesitás?
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Elegí la solución que mejor se adapte a tu negocio.
      </p>
    </div>


    {/* =================================================
        TARJETAS
    ================================================= */}

    <div className="grid gap-6 lg:grid-cols-3">


      {/* =================================================
          LANDING PAGE
      ================================================= */}

      <article
        data-aos="fade-up"
        className="
          group
          relative
          flex
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-purple-500/30
          bg-[#101827]
          p-5
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-purple-500/60
          hover:shadow-2xl
          hover:shadow-purple-500/10
        "
      >
  {/* Glow */}

  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-64
      w-64
      rounded-full
      bg-purple-500/10
      blur-3xl
      transition-all
      duration-500
      group-hover:bg-purple-500/20
    "
  />

  {/* CONTENIDO */}

<div className="relative flex h-full flex-col">

  {/* ICONO + TÍTULO */}

  <div
    className="
      mb-4
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-2xl
      border
      border-purple-400/20
      bg-purple-500/10
      text-2xl
    "
  >
    🚀
  </div>

  <h3 className="text-2xl font-semibold">
    Landing Page
  </h3>

  <div className="mt-2">
    <span className="text-sm text-gray-400">
      Desde
    </span>

    <span className="ml-2 text-2xl font-bold text-purple-400">
      USD 200
    </span>
  </div>


  {/* DESCRIPCIÓN */}

  <p className="mt-4 text-sm leading-6 text-gray-400">
    Una página enfocada en presentar un producto,
    servicio, promoción o captar consultas.
  </p>


  {/* MOCKUP */}

  <div className="my-5 flex h-[255px] items-center justify-center">
  <img
    src={landingMockup}
    alt="Mockup de Landing Page en tablet y celular"
    className="
      
      max-w-[285px]
      object-contain
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />
</div>


  {/* CARACTERÍSTICAS */}

  <ul className="space-y-2.5 text-sm text-gray-300">

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>Diseño personalizado</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>Una página</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>Diseño responsive</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>WhatsApp</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>Formulario de contacto</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>Redes sociales</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-purple-400">✓</span>
      <span>SEO básico</span>
    </li>

  </ul>

</div>

  {/* BOTÓN */}

  <Link
  to="/contact?producto=landing"
  className="
    relative
    mt-auto
    flex
    w-full
    items-center
    justify-center
    rounded-xl
    bg-purple-600
    px-5
    py-3
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-purple-500
  "
>
  Solicitar proyecto
  <span className="ml-2">→</span>
</Link>

</article>


      {/* =================================================
          WEB CORPORATIVA
      ================================================= */}

      <article
  data-aos="fade-up"
  data-aos-delay="100"
  className="
    group
    relative
    flex
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-blue-500/30
    bg-[#101827]
    p-5
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-blue-500/60
    hover:shadow-2xl
    hover:shadow-blue-500/10
  "
>
  {/* Glow */}

  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-64
      w-64
      rounded-full
      bg-blue-500/10
      blur-3xl
      transition-all
      duration-500
      group-hover:bg-blue-500/20
    "
  />

  {/* CONTENIDO */}

  <div className="relative flex h-full flex-col">

    {/* ICONO */}

    <div
      className="
        mb-4
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        border
        border-blue-400/20
        bg-blue-500/10
        text-xl
      "
    >
      🏢
    </div>


    {/* TÍTULO */}

    <h3 className="text-2xl font-semibold">
      Web Corporativa
    </h3>


    {/* PRECIO */}

    <div className="mt-2">

      <span className="text-sm text-gray-400">
        Desde
      </span>

      <span className="ml-2 text-2xl font-bold text-blue-400">
        USD 400
      </span>

    </div>


    {/* DESCRIPCIÓN */}

    <p className="mt-4 text-sm leading-6 text-gray-400">
      Una presencia digital profesional para empresas,
      profesionales y emprendimientos.
    </p>


    {/* MOCKUP */}

    <div className="my-5 flex h-[255px] items-center justify-center">

      <img
        src={corporateMockup}
        alt="Mockup de Web Corporativa en tablet y celular"
        className="
          h-full
          max-w-[285px]
          object-contain
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

    </div>


    {/* CARACTERÍSTICAS */}

    <ul className="space-y-2.5 text-sm text-gray-300">

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Diseño personalizado</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Varias secciones o páginas</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Inicio, Nosotros y Servicios</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Página de contacto</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Integración con WhatsApp</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Diseño responsive</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>SEO básico</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-400">✓</span>
        <span>Integraciones según necesidad</span>
      </li>

    </ul>


    {/* BOTÓN */}

    <Link
  to="/contact?producto=corporativa"
  className="
    relative
    mt-auto
    flex
    w-full
    items-center
    justify-center
    rounded-xl
    bg-blue-600
    px-5
    py-3
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-blue-500
  "
>
  Solicitar proyecto
  <span className="ml-2">→</span>
</Link>

  </div>

</article>


      {/* =================================================
          E-COMMERCE
      ================================================= */}

      <article
  data-aos="fade-up"
  data-aos-delay="200"
  className="
    group
    relative
    flex
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-yellow-500/30
    bg-[#101827]
    p-5
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-yellow-500/60
    hover:shadow-2xl
    hover:shadow-yellow-500/10
  "
>
  {/* Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-64
      w-64
      rounded-full
      bg-yellow-500/10
      blur-3xl
      transition-all
      duration-500
      group-hover:bg-yellow-500/20
    "
  />

  <div className="relative flex h-full flex-col">

    {/* Icono */}
    <div
      className="
        mb-4
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        border
        border-yellow-400/20
        bg-yellow-500/10
        text-xl
      "
    >
      🛒
    </div>

    {/* Título */}
    <h3 className="text-2xl font-semibold">
      E-commerce
    </h3>

    {/* Precio */}
    <div className="mt-2">
      <span className="text-sm text-gray-400">
        Desde
      </span>

      <span className="ml-2 text-2xl font-bold text-yellow-400">
        USD 600
      </span>
    </div>

    {/* Descripción */}
    <p className="mt-4 text-sm leading-6 text-gray-400">
      Una tienda online preparada para mostrar productos
      y recibir pedidos.
    </p>

    {/* Mockup */}
    <div className="my-5 flex h-[255px] items-center justify-center">
      <img
        src={ecommerceMockup}
        alt="Mockup de E-commerce en tablet y celular"
        className="
          h-full
          max-w-[285px]
          object-contain
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>

    {/* Características */}
    <ul className="space-y-2.5 text-sm text-gray-300">

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Catálogo de productos</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Gestión de productos</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Carrito de compras</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Integración de medios de pago</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Diseño responsive</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Panel de administración</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-yellow-400">✓</span>
        <span>Integraciones según necesidad</span>
      </li>

    </ul>

    {/* Botón */}
    <Link
      to="/contact?producto=ecommerce"
      className="
        relative
        mt-auto
        flex
        w-full
        items-center
        justify-center
        rounded-xl
        bg-yellow-500
        px-5
        py-3
        text-sm
        font-semibold
        text-black
        transition-all
        duration-300
        hover:bg-yellow-400
      "
    >
      Solicitar proyecto
      <span className="ml-2">→</span>
    </Link>

  </div>
</article>

    </div>


    {/* NOTA */}

    <p
      className="
        mt-8
        text-center
        text-xs
        leading-5
        text-gray-500
      "
    >
      * Los valores son precios iniciales y pueden variar según
      funcionalidades, cantidad de páginas, integraciones y
      complejidad del proyecto.
    </p>

  </div>
</section>
    </main>
  );
}

export default DesarrolloWeb;