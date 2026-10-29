import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { SparkleIcon } from './SparkleIcon';
import { MapPin, MessageCircle, Instagram, Clock, Mail, Check, ExternalLink, Calendar } from 'lucide-react';

export const LocationsContactSection: React.FC = () => {
  const { data } = useClinic();
  
  // Interactive inquiry form state to generate custom WhatsApp message
  const [patientName, setPatientName] = useState('');
  const [selectedCity, setSelectedCity] = useState(data.locations[0]?.city || 'Cuenca');
  const [selectedService, setSelectedService] = useState(data.services[0]?.title || 'Valoración General');
  const [customMessage, setCustomMessage] = useState('');

  const buildWhatsAppUrl = () => {
    let text = `Hola NOI Centro Estético Terapéutico,`;
    if (patientName.trim()) {
      text += ` mi nombre es ${patientName.trim()}.`;
    }
    text += ` Deseo consultar disponibilidad para ${selectedService} en la sede de ${selectedCity}.`;
    if (customMessage.trim()) {
      text += ` Consulta adicional: ${customMessage.trim()}`;
    }
    return `https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="sedes" className="py-24 bg-[#FFF5EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <SparkleIcon size={18} className="text-[#D9828B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#681B36]">
              Presencia en el Austro
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#422B30] tracking-tight text-balance">
            Nuestras Sedes y Contacto
          </h2>

          <p className="text-sm sm:text-base text-[#422B30]/75 leading-relaxed">
            Te atendemos en tres localidades de Ecuador con la misma dedicación y calidez. Coordina tu cita de valoración con anticipación.
          </p>
        </div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.locations.map((loc, idx) => (
            <div
              key={loc.city}
              className="bg-white p-7 rounded-3xl border border-[#EFB5B7]/40 shadow-xs hover:border-[#D9828B] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF5EC] border border-[#EFB5B7]/50 flex items-center justify-center text-[#681B36]">
                  <MapPin size={22} className="text-[#D9828B]" />
                </div>

                <div>
                  <span className="text-xs font-medium text-[#D9828B] uppercase tracking-wider">
                    Sede {idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#422B30]">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[#422B30]/65 mt-0.5">
                    {loc.reference || 'Ecuador'}
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF0E6]/70 rounded-xl border border-[#EFB5B7]/30 text-xs text-[#422B30]/80">
                  {loc.address ? (
                    <p className="font-medium">{loc.address}</p>
                  ) : (
                    <div className="space-y-1">
                      <p className="font-medium text-[#681B36]">Dirección física:</p>
                      <p className="italic text-[#422B30]/60">
                        Por confirmar con el cliente para agendar cita directa
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#EFB5B7]/30">
                <a
                  href={`https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(
                    `Hola NOI Centro Estético, deseo consultar citas disponibles en la sede de ${loc.city}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#681B36] hover:text-[#D9828B] transition-colors cursor-pointer"
                >
                  <MessageCircle size={14} className="text-[#D9828B]" />
                  <span>Consultar agenda en {loc.city}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Interactive Appointment Request Grid */}
        <div id="contacto" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Official Contact Channels */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#EFB5B7]/40 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#681B36]">
                Atención Inmediata
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#422B30] mt-1">
                Comunícate con Nosotros
              </h3>
              <p className="text-xs sm:text-sm text-[#422B30]/75 mt-2 leading-relaxed">
                Respondemos a todas tus dudas y agendamos tu cita con rapidez a través de nuestro canal principal de WhatsApp.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* WhatsApp Item */}
              <a
                href={`https://wa.me/${data.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF5EC] border border-[#EFB5B7]/40 hover:border-[#D9828B] transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D9828B] text-white flex items-center justify-center shrink-0 group-hover:bg-[#681B36] transition-colors">
                  <MessageCircle size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#681B36] font-medium uppercase tracking-wider">
                    WhatsApp Oficial
                  </p>
                  <p className="text-base font-semibold text-[#422B30] tracking-tight">
                    {data.whatsappNumber}
                  </p>
                  <p className="text-[11px] text-[#422B30]/60">Clic para chatear directamente</p>
                </div>
                <ExternalLink size={16} className="text-[#D9828B] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Instagram Item */}
              <a
                href={data.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF5EC] border border-[#EFB5B7]/40 hover:border-[#D9828B] transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#681B36] text-white flex items-center justify-center shrink-0 group-hover:bg-[#D9828B] transition-colors">
                  <Instagram size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#681B36] font-medium uppercase tracking-wider">
                    Instagram Oficial
                  </p>
                  <p className="text-base font-semibold text-[#422B30] tracking-tight">
                    {data.instagramHandle}
                  </p>
                  <p className="text-[11px] text-[#422B30]/60">Ver fotos y actualizaciones</p>
                </div>
                <ExternalLink size={16} className="text-[#D9828B] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Opening Hours Item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF0E6]/50 border border-[#EFB5B7]/30">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#EFB5B7]/50 text-[#681B36] flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-[#D9828B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#681B36] font-medium uppercase tracking-wider">
                    Horario de Atención
                  </p>
                  <p className="text-sm font-semibold text-[#422B30]">
                    {data.openingHours ? data.openingHours : 'Previa cita programada'}
                  </p>
                  <p className="text-[11px] text-[#422B30]/60">
                    {data.openingHours ? 'Horario regular' : 'Horario oficial por confirmar'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Pre-fill WhatsApp Inquiry Builder */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EFB5B7]/40 shadow-xs">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#681B36]">
                Agendamiento Rápido
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#422B30]">
                Prepara tu Consulta de Cita
              </h3>
              <p className="text-xs sm:text-sm text-[#422B30]/75">
                Selecciona tus preferencias y te abriremos la conversación de WhatsApp con el mensaje listo.
              </p>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                window.open(buildWhatsAppUrl(), '_blank');
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#422B30] mb-1.5">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={e => setPatientName(e.target.value)}
                    placeholder="Ej: María José"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EFB5B7]/60 bg-[#FFF5EC]/40 text-sm text-[#422B30] focus:outline-none focus:border-[#681B36] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#422B30] mb-1.5">
                    Sede Preferida
                  </label>
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EFB5B7]/60 bg-[#FFF5EC]/40 text-sm text-[#422B30] focus:outline-none focus:border-[#681B36] transition-colors cursor-pointer"
                  >
                    {data.locations.map(l => (
                      <option key={l.city} value={l.city}>
                        {l.city} (Ecuador)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#422B30] mb-1.5">
                  Tratamiento de Interés
                </label>
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EFB5B7]/60 bg-[#FFF5EC]/40 text-sm text-[#422B30] focus:outline-none focus:border-[#681B36] transition-colors cursor-pointer"
                >
                  <option value="Valoración y Diagnóstico General">Valoración y Diagnóstico General</option>
                  {data.services.map(s => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#422B30] mb-1.5">
                  Detalle o consulta adicional (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={e => setCustomMessage(e.target.value)}
                  placeholder="¿Tienes alguna preferencia de día, horario o indicación médica?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EFB5B7]/60 bg-[#FFF5EC]/40 text-sm text-[#422B30] focus:outline-none focus:border-[#681B36] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[#D9828B] hover:bg-[#681B36] rounded-xl shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-[#422B30]/60 mt-2">
                  Se abrirá tu aplicación de WhatsApp con el número verificado +593 96 953 9205.
                </p>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
