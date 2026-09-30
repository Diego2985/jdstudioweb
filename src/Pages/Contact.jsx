import { useEffect, useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [producto, setProducto] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productoParam = params.get("producto");

    if (productoParam) {
      setProducto(productoParam);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xdkgyqng",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setProducto("");

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <section className="min-h-[85vh] bg-[#0b111b] py-24 pt-12">

      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ENCABEZADO */}

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="text-[10px] font-bold tracking-[3px] text-[#0d9488]">
            CONTACTO
          </span>

          <h2 className="mt-4 text-3xl font-normal text-white md:text-4xl">
            Hablemos de tu proyecto.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Contame qué necesitás y te contacto para definir juntos
            la mejor opción para tu negocio o proyecto.
          </p>

        </div>


        {/* FORMULARIO */}

        <form
          onSubmit={handleSubmit}
          className="
            mx-auto
            max-w-xl
            space-y-6
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#101722]
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          "
        >

          {/* NOMBRE */}

          <div>

            <label
              htmlFor="nombre"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Nombre
            </label>

            <input
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="
                w-full
                rounded-lg
                border
                border-white/[0.10]
                bg-[#0b111b]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-[#0d9488]/60
              "
            />

          </div>


          {/* EMAIL */}

          <div>

            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="
                w-full
                rounded-lg
                border
                border-white/[0.10]
                bg-[#0b111b]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-[#0d9488]/60
              "
            />

          </div>


          {/* SERVICIO */}

          <div>

            <label
              htmlFor="producto"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              ¿Qué te interesa?
            </label>

            <select
              id="producto"
              name="producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              required
              className="
                w-full
                rounded-lg
                border
                border-white/[0.10]
                bg-[#0b111b]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                focus:border-[#0d9488]/60
              "
            >

              <option value="" disabled>
                Seleccioná una opción
              </option>

              <option value="virtual">
                Tarjeta Virtual
              </option>

              <option value="impresa">
                Tarjeta Impresa
              </option>

              <option value="pack">
                Pack Virtual + Impresa
              </option>

              <option value="landing">
                Landing Page
              </option>

              <option value="corporativa">
                Web Corporativa
              </option>

              <option value="ecommerce">
                E-commerce
              </option>

              <option value="concepto-visual">
                Concepto Visual
              </option>

              <option value="consulta-general">
                Consulta general
              </option>

              <option value="proyecto-web">
                Quiero iniciar un proyecto
              </option>

              <option value="otro">
                Otro proyecto
              </option>

            </select>

          </div>


          {/* MENSAJE */}

          <div>

            <label
              htmlFor="mensaje"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows="5"
              placeholder="Contame brevemente qué necesitás..."
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-white/[0.10]
                bg-[#0b111b]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-[#0d9488]/60
              "
            />

          </div>


          {/* BOTÓN */}

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-[#0d9488]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0f766e]
            "
          >
            Enviar consulta
          </button>


          {/* MENSAJE ÉXITO */}

          {submitted && (
            <div
              className="
                rounded-lg
                border
                border-[#0d9488]/30
                bg-[#0d9488]/10
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-[#2dd4bf]
              "
            >
              ¡Mensaje enviado con éxito! Me pondré en contacto
              con vos pronto.
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;