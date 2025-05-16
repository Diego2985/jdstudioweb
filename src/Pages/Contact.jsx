import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdkgyqng", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000); // Oculta el mensaje tras 5 segundos
    }
  };

  return (
    <section className="bg-gray-900 min-h-[85vh] py-32 pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">Contacto</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6">
          <div>
            <label className="block font-medium text-black mb-1">Nombre</label>
            <input name="nombre" required className="w-full border border-gray-300 text-black rounded px-4 py-2" />
          </div>

          <div>
            <label className="block font-medium text-black mb-1">Email</label>
            <input type="email" name="email" required className="w-full border border-gray-300 text-black rounded px-4 py-2" />
          </div>

          <div>
            <label className="block font-medium text-black mb-1">Mensaje</label>
            <textarea name="mensaje" required rows="5" className="w-full border border-gray-300 text-black rounded px-4 py-2" />
          </div>

          <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
            Enviar mensaje
          </button>

          {submitted && (
            <p className="text-green-600 font-semibold animate-fade-in transition-opacity duration-500">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;