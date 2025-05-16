import React from 'react';

function ProjectCard({ title, description, github, vercel, image, tech }) {
  return (
    <div className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition">
      {image && (
        <img src={image} alt={title} className="mb-4 w-full h-48 object-cover rounded-lg" />
      )}
      <h3 className="text-xl font-semibold text-[#0d9488] mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech?.map((t, i) => (
          <span key={i} className="text-xs bg-teal-100 text-[#0d9488] px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer"
           className="text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-black transition">
          GitHub
        </a>
        <a href={vercel} target="_blank" rel="noopener noreferrer"
           className="text-sm text-white bg-[#0d9488] px-4 py-2 rounded hover:bg-[#0d9488] transition">
          Ver en Vercel
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
