import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { SparkleIcon } from './SparkleIcon';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { data } = useClinic();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = `https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(
    'Hola NOI Centro Estético, deseo consultar sobre sus tratamientos y agendar una cita.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5EC]/95 backdrop-blur-md border-b border-[#EFB5B7]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element with delicate sparkle mark) */}
          <a
            href="#inicio"
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <SparkleIcon size={20} className="text-[#D9828B] group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#422B30]">
                NOI
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#681B36]/80 -mt-1 hidden sm:inline">
                Centro Estético Terapéutico
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line nav links with hover underlines */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#422B30]/85">
            <a
              href="#inicio"
              className="hover:text-[#681B36] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9828B] hover:after:w-full after:transition-all"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="hover:text-[#681B36] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9828B] hover:after:w-full after:transition-all"
            >
              Nosotros
            </a>
            <a
              href="#tratamientos"
              className="hover:text-[#681B36] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9828B] hover:after:w-full after:transition-all"
            >
              Tratamientos
            </a>
            <a
              href="#sedes"
              className="hover:text-[#681B36] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9828B] hover:after:w-full after:transition-all"
            >
              Sedes
            </a>
            <a
              href="#contacto"
              className="hover:text-[#681B36] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9828B] hover:after:w-full after:transition-all"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#D9828B] rounded-full hover:bg-[#681B36] transition-colors duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle size={15} />
              <span>Consultar</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#422B30] hover:text-[#681B36] rounded-lg transition-colors cursor-pointer"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF5EC] border-b border-[#EFB5B7]/40 px-6 pt-2 pb-6 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#422B30] hover:text-[#681B36]"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#422B30] hover:text-[#681B36]"
          >
            Nosotros
          </a>
          <a
            href="#tratamientos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#422B30] hover:text-[#681B36]"
          >
            Tratamientos
          </a>
          <a
            href="#sedes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#422B30] hover:text-[#681B36]"
          >
            Sedes (Cuenca · Paute · Azogues)
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#422B30] hover:text-[#681B36]"
          >
            Contacto & Citas
          </a>
        </div>
      )}
    </header>
  );
};
