import React from 'react';

function ProjectCard({
  title,
  description,
  github,
  vercel,
  image,
  tech,
}) {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/[0.10]
        bg-[#101722]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#0d9488]/60
      "
    >

      {/* Imagen */}

      <div className="relative overflow-hidden">

        {image && (
          <img
            src={image}
            alt={title}
            className="
              h-60
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        )}

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#101722]
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Número */}

        <span
          className="
            absolute
            left-5
            top-5
            text-[10px]
            font-bold
            tracking-[3px]
            text-[#0d9488]
          "
        >
          PROYECTO
        </span>

      </div>


      {/* Contenido */}

      <div className="flex flex-1 flex-col p-6">

        <h3
          className="
            mb-3
            text-2xl
            font-semibold
            tracking-tight
            text-[#f1f0ec]
            transition-colors
            duration-300
            group-hover:text-[#0d9488]
          "
        >
          {title}
        </h3>


        <p
          className="
            mb-6
            text-sm
            leading-7
            text-gray-500
          "
        >
          {description}
        </p>


        {/* Tecnologías */}

        <div className="mb-7 flex flex-wrap gap-2">

          {tech?.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-[#0d9488]/25
                bg-[#0b111b]
                px-3
                py-1.5
                text-[11px]
                text-gray-400
                transition-all
                duration-300
                group-hover:border-[#0d9488]/45
              "
            >
              {technology}
            </span>
          ))}

        </div>


        {/* Links */}

        <div className="mt-auto flex flex-wrap gap-3">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              border
              border-white/[0.12]
              px-4
              py-2.5
              text-xs
              font-semibold
              text-gray-300
              transition-all
              duration-300
              hover:border-[#0d9488]/50
              hover:text-[#0d9488]
            "
          >
            GitHub
            <span className="text-base">↗</span>
          </a>


          <a
            href={vercel}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#0d9488]
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#0f766e]
            "
          >
            Ver sitio
            <span className="text-base">→</span>
          </a>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;