import React, { useEffect, useState } from "react";
import ProjectsCard from "../Components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error al cargar proyectos:", err));
  }, []);

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
              image={project.image}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
