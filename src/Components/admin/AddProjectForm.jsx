import React, { useState } from "react";

function AddProjectForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    vercel: "",
    imageFile: null,
    tech: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      const file = files[0];
      const imagePath = `/images/${file.name}`;
      setFormData({ ...formData, imageFile: file, image: imagePath });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title: formData.title,
      description: formData.description,
      github: formData.github,
      vercel: formData.vercel,
      image: formData.image, // ya procesado en handleChange
      tech: formData.tech.split(",").map((t) => t.trim())
    };
    onAdd(newProject);
    setFormData({ title: "", description: "", github: "", vercel: "", imageFile: null, tech: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Agregar Nuevo Proyecto</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Título"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="github"
        value={formData.github}
        onChange={handleChange}
        placeholder="URL GitHub"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="vercel"
        value={formData.vercel}
        onChange={handleChange}
        placeholder="URL Vercel"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="file"
        name="imageFile"
        accept="image/*"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="tech"
        value={formData.tech}
        onChange={handleChange}
        placeholder="Tecnologías (separadas por coma)"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
        Agregar Proyecto
      </button>
    </form>
  );
}

export default AddProjectForm;
