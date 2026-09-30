import React from 'react';
import { Link } from 'react-router-dom';
import './VisualConceptSection.css';

function VisualConceptSection() {
  const concepts = [
    {
      id: 'corp-dark',
      demoPath: 'corporate',
      number: '01',
      category: 'CORPORATIVO',
      title: 'Identidad y presencia digital',
      description:
        'Conceptos visuales pensados para marcas que buscan transmitir profesionalismo, confianza y personalidad.',
      className: 'concept-corporate',
    },
    {
      id: 'medical-clean',
      demoPath: 'medical',
      number: '02',
      category: 'SALUD',
      title: 'Claridad y confianza',
      description:
        'Propuestas visuales orientadas a comunicar cercanía, orden y una experiencia clara para el usuario.',
      className: 'concept-medical',
    },
    {
      id: 'restaurant-color',
      demoPath: 'restaurant',
      number: '03',
      category: 'GASTRONOMÍA',
      title: 'Experiencias que despiertan interés',
      description:
        'Diseños pensados para restaurantes y negocios gastronómicos donde la imagen también comunica.',
      className: 'concept-restaurant',
    },
    {
      id: 'tourism-light',
      demoPath: 'tourism',
      number: '04',
      category: 'TURISMO',
      title: 'Inspirar antes de viajar',
      description:
        'Conceptos visuales enfocados en transmitir destinos, experiencias y sensaciones.',
      className: 'concept-tourism',
    },
  ];

  return (
    <section id="concepto-visual" className="visual-concept-section">
      <div className="visual-concept-container">

        {/* Encabezado */}
        <div
          className="visual-concept-header"
          data-aos="fade-up"
        >
          <div>
            <span className="visual-concept-eyebrow">
              CONCEPTO VISUAL
            </span>

            <h2 className="visual-concept-title">
              Ideas que empiezan como una imagen y
              <span> pueden convertirse en una experiencia.</span>
            </h2>
          </div>

          <p className="visual-concept-intro">
            Exploración visual de diferentes estilos, sectores y
            posibilidades para crear experiencias digitales únicas.
          </p>
        </div>

        {/* Conceptos */}
        <div className="visual-concept-grid">
          {concepts.map((concept, index) => (
            <article
              key={concept.number}
              className={`visual-concept-card ${concept.className}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="visual-concept-card-top">
                <span className="visual-concept-number">
                  {concept.number}
                </span>

                <span className="visual-concept-category">
                  {concept.category}
                </span>
              </div>

              <div className="visual-concept-visual">
                <div className="visual-concept-shape"></div>
                <span>{concept.category}</span>
              </div>

              <div className="visual-concept-content">
                <h3>{concept.title}</h3>

                <p>{concept.description}</p>

                <Link
                  to={`/visual-concepts/demo/${concept.demoPath}`}
                  className="visual-concept-link"
                >
                  Explorar concepto
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div
          className="visual-concept-footer"
          data-aos="fade-up"
        >
          <p>
            Explorá todas las propuestas visuales.
          </p>

          <Link
            to="/visual-concepts"
            className="visual-concept-button"
          >
            Ver concepto visual
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default VisualConceptSection;
