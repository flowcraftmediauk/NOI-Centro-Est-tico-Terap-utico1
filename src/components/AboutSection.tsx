import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArchFrame } from './ArchFrame';
import { SparkleIcon } from './SparkleIcon';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { data } = useClinic();
  const aboutImage = '/src/assets/images/about_facial_wellness_1793280727554.jpg';

  return (
    <section id="nosotros" className="relative py-20 md:py-28 bg-white rounded-t-[48px] md:rounded-t-[80px] -mt-10 shadow-xs z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arch Portrait with Botanical Sprig */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <ArchFrame
              imageSrc={aboutImage}
              altText="Cabina de tratamiento facial y relajación terapéutica en NOI"
              paletteDotsPosition="left"
            />
          </div>

          {/* Right Column: Editorial Text & Feature Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="flex items-center gap-2">
              <SparkleIcon size={18} className="text-[#D9828B]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#681B36]">
                Sobre la clínica
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#422B30] tracking-tight text-balance">
              {data.aboutTitle || 'Bienvenidos a NOI'}
            </h2>

            <p className="text-base sm:text-lg text-[#422B30]/80 leading-relaxed font-normal">
              {data.aboutDescription ||
                'En NOI Centro Estético Terapéutico creemos en un cuidado consciente, donde la estética avanzada y la salud terapéutica convergen para devolverle a tu cuerpo y piel su frescura original.'}
            </p>

            <p className="text-sm sm:text-base text-[#422B30]/70 leading-relaxed">
              Nos enfocamos en procedimientos seguros, no invasivos y minuciosamente individualizados: desde limpiezas faciales profundas y regeneración celular hasta masajes descontracturantes y recuperación postoperatoria.
            </p>

            {/* 3 Metric/Feature cards matching reference visual style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              
              {/* Highlight 1: Pink Accent Card */}
              <div className="bg-[#D9828B] text-white p-6 rounded-2xl shadow-xs transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-3xl font-bold tracking-tight">3</span>
                  <Sparkles size={18} className="text-white/80" />
                </div>
                <p className="text-sm font-semibold tracking-wide">Sedes en el Austro</p>
                <p className="text-xs text-white/85 mt-1">Cuenca · Paute · Azogues</p>
              </div>

              {/* Highlight 2: Warm Cream Card */}
              <div className="bg-[#FAF0E6] text-[#422B30] p-6 rounded-2xl border border-[#EFB5B7]/50 shadow-xs transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-3xl font-bold tracking-tight text-[#681B36]">100%</span>
                  <ShieldCheck size={18} className="text-[#681B36]" />
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#681B36]">Personalizado</p>
                <p className="text-xs text-[#422B30]/75 mt-1">Valoración previa a cada tratamiento</p>
              </div>

              {/* Highlight 3: Soft Neutral Card */}
              <div className="bg-[#FFF5EC] text-[#422B30] p-6 rounded-2xl border border-[#EFB5B7]/40 shadow-xs transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#422B30]">NOI</span>
                  <Heart size={18} className="text-[#D9828B]" />
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#681B36]">Nuestra Promesa</p>
                <p className="text-xs text-[#422B30]/75 mt-1 italic">"{data.slogan}"</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
