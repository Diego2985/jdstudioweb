import React from 'react';
import perfil from '../Assets/foto.jpg'; // asegurate de tener una imagen válida en esa ruta

function About() {
  return (
    <section className="bg-gray-900 min-h-[85vh] flex flex-col md:flex-row items-center justify-center pt-0 px-6 md:px-16 py-6">

      {/* Foto */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img 
          src={perfil} 
          alt="Jorge Diego Arredondo" 
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Sobre mí</h2>
        <p className="text-[#f1f0ec] text-lg mb-4">
          Hola, soy <strong>Jorge Diego Arredondo</strong>, desarrollador web frontend.
          Me especializo en crear interfaces limpias, modernas y funcionales usando tecnologías como <strong>React</strong>, <strong>TailwindCSS</strong> y <strong>JavaScript</strong>.
        </p>
        <p className="text-[#f1f0ec] text-lg">
          Tengo experiencia profesional manteniendo y desarrollando sitios web, así como proyectos propios enfocados en diseño, funcionalidad y rendimiento.
        </p>
      </div>
    </section>
  );
}

export default About;