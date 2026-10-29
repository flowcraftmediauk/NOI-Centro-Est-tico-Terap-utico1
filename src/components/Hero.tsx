import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArchFrame } from './ArchFrame';
import { SparkleIcon, SmallSparkleIcon } from './SparkleIcon';
import { MessageCircle, ArrowDown } from 'lucide-react';

import { clinicImages } from '../assets/images';

export const Hero: React.FC = () => {
  const { data } = useClinic();

  const heroImage = clinicImages.hero;
  const whatsappHref = `https://wa.me/${data.whatsappRaw}?text=${encodeURIComponent(
    'Hola NOI Centro Estético, deseo información sobre sus tratamientos y consultar disponibilidad para una valoración.'
  )}`;

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FFF5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 max-w-2xl">
            
            {/* Sparkle decorative cluster & Verified Slogan */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <SparkleIcon size={22} className="text-[#681B36]" />
                <div className="absolute -top-2.5 -right-3">
                  <SmallSparkleIcon size={13} className="text-[#D9828B]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#681B36]">
                {data.slogan}
              </p>
            </div>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#422B30] leading-[1.12] tracking-tight text-balance">
              {data.heroHeadline || 'Tu bienestar y belleza terapéutica en equilibrio'}
            </h1>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-[#422B30]/80 leading-relaxed max-w-xl font-normal">
              {data.heroDescription ||
                'Protocolos dermatocosmiátricos avanzados, terapias postoperatorias y masajes de relajación profunda pensados para resaltar tu luz propia.'}
            </p>

            {/* Unboxed Metadata (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#681B36]/80 pt-1">
              <span className="font-medium" translate="no">Cuenca</span>
              <span aria-hidden="true" className="text-[#D9828B]">·</span>
              <span className="font-medium" translate="no">Paute</span>
              <span aria-hidden="true" className="text-[#D9828B]">·</span>
              <span className="font-medium" translate="no">Azogues</span>
              <span aria-hidden="true" className="text-[#D9828B]">·</span>
              <span className="font-medium text-[#D9828B]" translate="no">Ecuador</span>
            </div>

            {/* Action Buttons inspired by reference design */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white bg-[#D9828B] hover:bg-[#681B36] rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle size={17} />
                <span>Agendar por WhatsApp</span>
              </a>

              <a
                href="#tratamientos"
                className="inline-flex items-center gap-3 text-sm font-medium text-[#422B30] hover:text-[#681B36] transition-colors group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-[#EFB5B7]/60 flex items-center justify-center text-[#681B36] group-hover:bg-[#EFB5B7]/30 transition-colors">
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </div>
                <span>Ver Tratamientos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Arch Portrait with Botanical Sprig & Color Dots */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ArchFrame
              imageSrc={heroImage}
              altText="Retrato editorial de belleza y cuidado facial sereno en NOI Centro Estético"
              paletteDotsPosition="right"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};
