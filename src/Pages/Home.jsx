import React from 'react'
import developerImage from '../Assets/web.png'

function Home() {
  return (
    <section id="inicio" className="bg-[#0D1117] text-white min-h-[85vh] flex items-center py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Texto */}
          <div data-aos="fade-right" className="w-full md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d9488] leading-tight mb-6">
              Diseñando experiencias únicas para la web
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Desarrollo sitios web modernos, funcionales y adaptados a vos.
              Conocé mis proyectos y descubrí cómo puedo ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#0d9488] hover:bg-[#0d9488] text-white font-semibold py-2 px-4 rounded transition-all duration-300 text-center"
              >
                Contactame
              </a>
              <a
                href="/projects"
                className="border border-[#0d9488] hover:bg-[#0d9488] hover:text-white text-[#0d9488] font-semibold py-2 px-4 rounded transition-all duration-300 text-center"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div data-aos="fade-up" className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={developerImage}
              alt="Ilustración desarrollador"
              className="w-3/4 sm:w-2/3 md:w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Home;