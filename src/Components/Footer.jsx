import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-[#132c52]  text-center py-4 mt-auto">
        <p className="text-sm text-[#f1f0ec]">&copy; {year} JD Studio Web. Todos los derechos reservados.</p>
      </footer>
    );
  }

export default Footer