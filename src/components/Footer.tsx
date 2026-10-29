import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { SparkleIcon } from './SparkleIcon';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { data } = useClinic();

  return (
    <footer className="bg-[#681B36] text-[#FFF5EC] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <SparkleIcon size={20} className="text-[#EFB5B7]" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {data.businessName}
              </span>
            </div>

            <p className="font-serif italic text-[#EFB5B7] text-lg">
              "{data.slogan}"
            </p>

            <p className="text-xs text-[#FFF5EC]/70 max-w-sm leading-relaxed">
              Centro dermatocosmiátrico y bienestar integral. Tratamientos faciales, cuidados postoperatorios y masajes terapéuticos en el Austro ecuatoriano.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EFB5B7]">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-[#FFF5EC]/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Sobre la clínica</a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">Tratamientos</a>
              </li>
              <li>
                <a href="#sedes" className="hover:text-white transition-colors">Sedes y Ubicaciones</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto directo</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EFB5B7]">
              Canales Oficiales
            </p>

            <div className="space-y-2.5 text-sm text-[#FFF5EC]/85">
              <a
                href={`https://wa.me/${data.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="text-[#EFB5B7]" />
                <span>{data.whatsappNumber}</span>
              </a>

              <a
                href={data.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Instagram size={16} className="text-[#EFB5B7]" />
                <span>{data.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-[#FFF5EC]/75 pt-1">
                <MapPin size={15} className="text-[#EFB5B7]" />
                <span>Cuenca · Paute · Azogues (Ecuador)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF5EC]/60 gap-4">
          <p>© {new Date().getFullYear()} {data.businessName}. Todos los derechos reservados.</p>
          <p className="text-[11px] text-[#EFB5B7]/80">
            Diseño preliminar para presentación de propuesta web
          </p>
        </div>

      </div>
    </footer>
  );
};
