import React from 'react'
import ProjectsCard from '../Components/ProjectCard';
import imagenFarmaDesing from '../Assets/imagen.jpg';
import imagenFullstackEcommerce from '../Assets/imagen1.jpg';
import imagenEcommerceJavaScript from '../Assets/imagen2.jpg';
import imagenCalculadoraReact from '../Assets/imagen3.png';

const projects = [
    {
      title: "FarmaDesign",
      description: "Sitio informativo para farmacias, hecho con React, Tailwind y Bootstrap.",
      github: "https://github.com/tuusuario/farmadesign",
      vercel: "https://farmadesign.vercel.app/",
      image: imagenFarmaDesing, // URL de la imagen del proyecto
      tech: ["React", "Tailwind", "Bootstrap"], // Tecnologías utilizadas
    },
    {
      title: "Fullstack Ecommerce",
      description: "Ecommerce en desarrollo con React y CSS.",
      github: "https://github.com/tuusuario/fullstack-ecommerce",
      vercel: "https://fullstack-ecommerce-zeta.vercel.app/", 
      image: imagenFullstackEcommerce, // URL de la imagen del proyecto
      tech: ["React", "Node.js", "Express"], // Tecnologías utilizadas
    },
    {
      title: "Ecommerce JavaScript",
      description: "Sitio funcional hecho en React y CSS vanilla.",
      github: "https://github.com/tuusuario/ecommerce-javascript",
      vercel: "https://ecommerce-javascript-delta.vercel.app/",
      image: imagenEcommerceJavaScript, // URL de la imagen del proyecto
      tech: ["React", "JavaScript", "CSS"], // Tecnologías utilizadas
    },
    {
      title: "Calculadora React",
      description: "Calculadora hecha con componentes reutilizables.",
      github: "https://github.com/tuusuario/calculadora-react",
      vercel: "https://proyecto-calculadora-sooty.vercel.app/",
      image: imagenCalculadoraReact, // URL de la imagen del proyecto
      tech: ["React", "CSS"], // Tecnologías utilizadas
    },
  ];
  
  function Projects() {
    return (
      <section className="bg-gray-900 py-48 pt-12 min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
              vercel={project.vercel}
              image={project.image} // Asegúrate de tener imágenes para cada proyecto
              tech={project.tech} // Asegúrate de tener tecnologías para cada proyecto
            />
          ))}
        </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  