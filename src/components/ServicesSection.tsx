import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { SparkleIcon } from './SparkleIcon';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { data } = useClinic();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredServices =
    selectedCategory === 'todos'
      ? data.services
      : data.services.filter(s => {
          if (selectedCategory === 'facial') return s.category === 'facial';
          if (selectedCategory === 'corporal') return s.category === 'corporal';
          if (selectedCategory === 'masajes') return s.category === 'masajes';
          if (selectedCategory === 'especiales') return s.category === 'especiales';
          return true;
        });

  return (
    <section id="tratamientos" className="py-24 bg-[#FFF5EC] relative overflow-hidden">
      
      {/* Decorative subtle sparkles */}
      <div className="absolute top-12 right-16 hidden md:block">
        <SparkleIcon size={24} className="text-[#D9828B]/60" />
      </div>
      <div className="absolute bottom-16 left-12 hidden md:block">
        <SparkleIcon size={20} className="text-[#EFB5B7]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header inspired by reference "We Can Help Transform You" */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <SparkleIcon size={18} className="text-[#D9828B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#681B36]">
              Servicios Especializados
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#422B30] tracking-tight text-balance">
            Cuidado y Terapias para Transformarte
          </h2>

          <p className="text-sm sm:text-base text-[#422B30]/75 leading-relaxed">
            Procedimientos cosmiátricos y terapéuticos diseñados con rigor profesional para revitalizar tu piel, aliviar molestias y renovar tu energía.
          </p>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos los tratamientos' },
            { id: 'facial', label: 'Cuidado Facial' },
            { id: 'corporal', label: 'Corporal & Postoperatorio' },
            { id: 'masajes', label: 'Masajes Relajantes' },
            { id: 'especiales', label: 'Gift Cards & Especiales' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#681B36] text-white shadow-xs'
                  : 'bg-white text-[#422B30]/80 hover:bg-[#F4DAD5]/60 hover:text-[#681B36] border border-[#EFB5B7]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (2 to 3 columns desktop, 1 column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const isFeatured = service.isFeatured;
            const serviceWhatsappHref = `https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(
              `Hola NOI Centro Estético, me gustaría consultar disponibilidad e información detallada sobre: ${service.title}.`
            )}`;

            return (
              <div
                key={service.id}
                className={`group flex flex-col rounded-3xl transition-all duration-300 overflow-hidden border ${
                  isFeatured
                    ? 'bg-[#F4DAD5] border-[#EFB5B7] shadow-sm transform hover:-translate-y-1'
                    : 'bg-white border-[#EFB5B7]/30 hover:border-[#D9828B]/60 shadow-xs hover:shadow-md transform hover:-translate-y-1'
                }`}
              >
                {/* Service Image with gentle zoom */}
                <div className="relative h-56 w-full overflow-hidden bg-[#FAF0E6]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-[#681B36] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                      <Sparkles size={12} />
                      <span>Destacado</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Quiet category metadata */}
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-[#681B36]">
                      {service.category === 'facial' && 'Tratamiento Facial'}
                      {service.category === 'corporal' && 'Terapia Postoperatoria'}
                      {service.category === 'masajes' && 'Terapia Geotermal'}
                      {service.category === 'especiales' && 'Experiencia de Bienestar'}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#422B30] group-hover:text-[#681B36] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#422B30]/75 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-[#EFB5B7]/30 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#681B36]">
                      {service.price ? service.price : 'Previa valoración'}
                    </span>

                    <a
                      href={serviceWhatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9828B] hover:text-[#681B36] transition-colors group/link cursor-pointer"
                    >
                      <MessageCircle size={14} />
                      <span>Consultar</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Personalized Consultations */}
        <div className="mt-14 p-6 bg-white/70 backdrop-blur-xs rounded-2xl border border-[#EFB5B7]/40 max-w-3xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm font-medium text-[#422B30]">
            ¿Tienes dudas sobre cuál es el tratamiento más adecuado para tu caso?
          </p>
          <p className="text-xs text-[#422B30]/70">
            En NOI realizamos una valoración previa personalizada para sugerirte el protocolo más efectivo. Escríbenos directamente a WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
