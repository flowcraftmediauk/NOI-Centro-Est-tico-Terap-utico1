import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArchFrame } from './ArchFrame';
import { SparkleIcon } from './SparkleIcon';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { data } = useClinic();
  const expertiseImage = '/src/assets/images/expertise_clinic_lounge_1793280728248.jpg';

  const whatsappHref = `https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(
    'Hola NOI Centro Estético, deseo solicitar una valoración personalizada para mis cuidados.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-white rounded-t-[48px] md:rounded-t-[80px] -mt-10 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Heading & Therapeutic Pillars */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="flex items-center gap-2">
              <SparkleIcon size={18} className="text-[#D9828B]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#681B36]">
                Criterio Profesional
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#422B30] tracking-tight text-balance">
              Compromiso Terapéutico y Cuidado Consciente
            </h2>

            <p className="text-base sm:text-lg text-[#422B30]/80 leading-relaxed font-normal">
              Cada procedimiento en NOI Centro Estético Terapéutico se diseña respetando la fisiología única de tu piel y cuerpo. No creemos en soluciones estándar: diagnosticamos tus necesidades antes de aplicar cualquier protocolo.
            </p>

            {/* Honest, elegant pillar rows inspired by reference layout without fake percentage bars */}
            <div className="space-y-4 pt-2">
              
              <div className="p-4 bg-[#FFF5EC] rounded-2xl border border-[#EFB5B7]/40 space-y-1.5 transition-colors hover:border-[#D9828B]">
                <div className="flex items-center justify-between text-sm font-semibold text-[#681B36]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#D9828B]" />
                    <span>Diagnóstico Previo y Protocolos Individualizados</span>
                  </div>
                  <span className="text-xs text-[#D9828B] font-medium">1 a 1</span>
                </div>
                <div className="w-full bg-[#EADBD1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#D9828B] h-full rounded-full w-full" />
                </div>
                <p className="text-xs text-[#422B30]/70 pt-1">
                  Evaluación de necesidades cutáneas, biotipo dérmico y objetivos estéticos o postoperatorios.
                </p>
              </div>

              <div className="p-4 bg-[#FFF5EC] rounded-2xl border border-[#EFB5B7]/40 space-y-1.5 transition-colors hover:border-[#D9828B]">
                <div className="flex items-center justify-between text-sm font-semibold text-[#681B36]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#D9828B]" />
                    <span>Técnicas No Invasivas de Alta Tolerancia</span>
                  </div>
                  <span className="text-xs text-[#681B36] font-medium">Seguridad</span>
                </div>
                <div className="w-full bg-[#EADBD1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#681B36] h-full rounded-full w-full" />
                </div>
                <p className="text-xs text-[#422B30]/70 pt-1">
                  Uso de aparatología cosmiátrica certificada y principios activos seleccionados para máxima eficacia y confort.
                </p>
              </div>

              <div className="p-4 bg-[#FFF5EC] rounded-2xl border border-[#EFB5B7]/40 space-y-1.5 transition-colors hover:border-[#D9828B]">
                <div className="flex items-center justify-between text-sm font-semibold text-[#681B36]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#D9828B]" />
                    <span>Acompañamiento Continuo en el Austro</span>
                  </div>
                  <span className="text-xs text-[#D9828B] font-medium">3 Sedes</span>
                </div>
                <div className="w-full bg-[#EADBD1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#EFB5B7] h-full rounded-full w-full" />
                </div>
                <p className="text-xs text-[#422B30]/70 pt-1">
                  Seguimiento de evolución post-tratamiento en Cuenca, Paute y Azogues.
                </p>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white bg-[#D9828B] hover:bg-[#681B36] rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Solicitar Valoración Personalizada</span>
              </a>
            </div>

          </div>

          {/* Right Column: Arch Portrait with Botanical Sprig */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ArchFrame
              imageSrc={expertiseImage}
              altText="Espacio sereno de atención y bienestar en NOI"
              paletteDotsPosition="right"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
