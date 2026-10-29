import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  ClipboardCheck,
  X,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  Copy,
  RotateCcw,
  Sparkles,
  HelpCircle,
  FileCode2,
  Edit3
} from 'lucide-react';

export const OnboardingDrawer: React.FC = () => {
  const {
    data,
    questions,
    currentQuestion,
    currentQuestionIndex,
    answerQuestion,
    skipQuestion,
    updateData,
    updateLocation,
    resetDefaults,
    exportConfigJson
  } = useClinic();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'question' | 'checklist' | 'editor' | 'export'>('question');
  const [answerInput, setAnswerInput] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const pendingQuestionsCount = questions.filter(q => q.status === 'pending').length;
  const answeredQuestionsCount = questions.filter(q => q.status === 'answered').length;

  const handleSaveCurrentAnswer = () => {
    if (!currentQuestion) return;
    if (answerInput.trim()) {
      answerQuestion(currentQuestion.id, answerInput.trim());
      setAnswerInput('');
    }
  };

  const handleSkipCurrent = () => {
    if (!currentQuestion) return;
    skipQuestion(currentQuestion.id);
    setAnswerInput('');
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(exportConfigJson());
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([exportConfigJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'noi_centro_estetico_config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating trigger button in bottom right corner */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#681B36] text-[#FFF5EC] shadow-lg hover:bg-[#422B30] transition-all duration-200 border border-[#EFB5B7]/40 cursor-pointer"
          title="Abrir panel de datos y preguntas del cliente"
        >
          <ClipboardCheck size={18} className="text-[#EFB5B7] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold tracking-wide">
            {isOpen ? 'Cerrar Panel' : 'Panel de Datos & Onboarding'}
          </span>
          {pendingQuestionsCount > 0 && (
            <span className="bg-[#D9828B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {pendingQuestionsCount} pend.
            </span>
          )}
        </button>
      </div>

      {/* Drawer Overlay & Content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity">
          <div className="w-full max-w-lg bg-[#FFF5EC] h-full shadow-2xl flex flex-col border-l border-[#EFB5B7]/40 animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="p-5 border-b border-[#EFB5B7]/40 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] border border-[#EFB5B7]/50 flex items-center justify-center text-[#681B36]">
                  <ClipboardCheck size={18} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#422B30] text-base">
                    Toma de Datos & Checklist
                  </h3>
                  <p className="text-[11px] text-[#422B30]/65">
                    NOI Centro Estético Terapéutico (Ecuador)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#422B30]/70 hover:text-[#681B36] hover:bg-[#FAF0E6] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Sub-navigation tabs */}
            <div className="flex border-b border-[#EFB5B7]/30 bg-[#FAF0E6]/60 px-4 py-2 gap-1 overflow-x-auto">
              <button
                onClick={() => setActiveTab('question')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'question'
                    ? 'bg-white text-[#681B36] shadow-xs'
                    : 'text-[#422B30]/70 hover:text-[#681B36]'
                }`}
              >
                <HelpCircle size={13} />
                <span>Pregunta Activa</span>
                {pendingQuestionsCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-[#D9828B]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'checklist'
                    ? 'bg-white text-[#681B36] shadow-xs'
                    : 'text-[#422B30]/70 hover:text-[#681B36]'
                }`}
              >
                <CheckCircle2 size={13} />
                <span>Checklist ({answeredQuestionsCount}/{questions.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'editor'
                    ? 'bg-white text-[#681B36] shadow-xs'
                    : 'text-[#422B30]/70 hover:text-[#681B36]'
                }`}
              >
                <Edit3 size={13} />
                <span>Editor Directo</span>
              </button>

              <button
                onClick={() => setActiveTab('export')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'export'
                    ? 'bg-white text-[#681B36] shadow-xs'
                    : 'text-[#422B30]/70 hover:text-[#681B36]'
                }`}
              >
                <FileCode2 size={13} />
                <span>Hostinger JSON</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              
              {/* TAB 1: CURRENT QUESTION (ONE AT A TIME) */}
              {activeTab === 'question' && (
                <div className="space-y-4">
                  {currentQuestion ? (
                    <div className="bg-white p-5 rounded-2xl border border-[#EFB5B7]/50 shadow-xs space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#681B36] bg-[#FAF0E6] px-2.5 py-1 rounded-md">
                          Pregunta {currentQuestionIndex + 1} de {questions.length}
                        </span>
                        <span className="text-xs text-[#D9828B] font-medium flex items-center gap-1">
                          <Clock size={12} />
                          <span>Pendiente de respuesta</span>
                        </span>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#422B30]">
                          {currentQuestion.question}
                        </h4>
                        <p className="text-xs text-[#422B30]/70 mt-1.5 leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[#422B30]">
                          Ingresar información proporcionada por el cliente:
                        </label>
                        <textarea
                          rows={3}
                          value={answerInput}
                          onChange={e => setAnswerInput(e.target.value)}
                          placeholder={currentQuestion.placeholder}
                          className="w-full p-3 text-xs sm:text-sm rounded-xl border border-[#EFB5B7]/70 bg-[#FFF5EC]/50 text-[#422B30] focus:outline-none focus:border-[#681B36] resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          onClick={handleSkipCurrent}
                          className="px-3.5 py-2 text-xs font-medium text-[#422B30]/70 hover:text-[#681B36] rounded-lg border border-transparent hover:border-[#EFB5B7] transition-colors cursor-pointer"
                        >
                          Omitir por ahora
                        </button>

                        <button
                          onClick={handleSaveCurrentAnswer}
                          disabled={!answerInput.trim()}
                          className={`inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                            answerInput.trim()
                              ? 'bg-[#681B36] text-white hover:bg-[#422B30]'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <span>Guardar y actualizar web</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#422B30]">
                        ¡Todas las preguntas han sido respondidas u omitidas!
                      </h4>
                      <p className="text-xs text-[#422B30]/70">
                        Los datos ingresados ya están reflejados en vivo en la web. Puedes exportar la configuración para el despliegue en Hostinger.
                      </p>
                    </div>
                  )}

                  {/* Context Note */}
                  <div className="p-4 bg-[#FAF0E6]/70 rounded-xl border border-[#EFB5B7]/40 text-xs text-[#422B30]/80 space-y-1">
                    <p className="font-semibold text-[#681B36]">
                      Regla estricta de fidelidad:
                    </p>
                    <p>
                      Ningún detalle no confirmado por el cliente se inventa. Si un dato no está disponible, permanece vacío o neutro para evitar promesas clínicas o comerciales infundadas.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: CHECKLIST DE DATOS VERIFICADOS VS PENDIENTES */}
              {activeTab === 'checklist' && (
                <div className="space-y-3">
                  <p className="text-xs text-[#422B30]/70">
                    Estado de los campos del negocio verificados vs faltantes:
                  </p>

                  <div className="space-y-2">
                    {[
                      { label: 'Nombre comercial', val: data.businessName, verified: true },
                      { label: 'Lema oficial ("No te dejes para después")', val: data.slogan, verified: true },
                      { label: 'WhatsApp oficial (+593 96 953 9205)', val: data.whatsappNumber, verified: true },
                      { label: 'Instagram (@noi_centroestetico)', val: data.instagramHandle, verified: true },
                      { label: 'Sedes en Cuenca, Paute y Azogues', val: 'Confirmadas en Instagram', verified: true },
                      {
                        label: 'Direcciones físicas exactas',
                        val: data.locations[0]?.address ? 'Completadas' : 'Pendientes de confirmar',
                        verified: Boolean(data.locations[0]?.address)
                      },
                      {
                        label: 'Horario oficial de atención',
                        val: data.openingHours || 'Pendiente de confirmar',
                        verified: Boolean(data.openingHours)
                      },
                      {
                        label: 'Correo de contacto',
                        val: data.email || 'Pendiente o exclusivo WhatsApp',
                        verified: Boolean(data.email)
                      },
                      {
                        label: 'Precios de tratamientos',
                        val: 'Previa valoración (no inventados)',
                        verified: true
                      },
                      {
                        label: 'Logotipo gráfico oficial (vector)',
                        val: data.logoUrl ? 'Configurado' : 'Pendiente (usando isotipo)',
                        verified: Boolean(data.logoUrl)
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white rounded-xl border border-[#EFB5B7]/40 flex items-center justify-between text-xs"
                      >
                        <div>
                          <p className="font-semibold text-[#422B30]">{item.label}</p>
                          <p className="text-[#422B30]/65 text-[11px] mt-0.5">{item.val}</p>
                        </div>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-semibold rounded-md ${
                            item.verified
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {item.verified ? 'Verificado' : 'Pendiente'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: EDITOR DIRECTO */}
              {activeTab === 'editor' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#422B30]/70">
                    Modifica directamente cualquier campo y observa el cambio inmediato en la web:
                  </p>

                  <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#EFB5B7]/40">
                    <div>
                      <label className="block text-xs font-semibold text-[#422B30] mb-1">
                        Título de Portada (Hero Headline)
                      </label>
                      <input
                        type="text"
                        value={data.heroHeadline}
                        onChange={e => updateData({ heroHeadline: e.target.value })}
                        className="w-full p-2.5 text-xs rounded-lg border border-[#EFB5B7]/60 text-[#422B30] bg-[#FFF5EC]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#422B30] mb-1">
                        Descripción de Portada
                      </label>
                      <textarea
                        rows={2}
                        value={data.heroDescription}
                        onChange={e => updateData({ heroDescription: e.target.value })}
                        className="w-full p-2.5 text-xs rounded-lg border border-[#EFB5B7]/60 text-[#422B30] bg-[#FFF5EC]/40 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#422B30] mb-1">
                        Horario de Atención
                      </label>
                      <input
                        type="text"
                        value={data.openingHours}
                        onChange={e => updateData({ openingHours: e.target.value })}
                        placeholder="Ej: Lunes a Viernes de 09:00 a 19:00"
                        className="w-full p-2.5 text-xs rounded-lg border border-[#EFB5B7]/60 text-[#422B30] bg-[#FFF5EC]/40"
                      />
                    </div>

                    <div className="pt-2 border-t border-[#EFB5B7]/30 space-y-2">
                      <label className="block text-xs font-semibold text-[#681B36]">
                        Direcciones por Sede:
                      </label>
                      {data.locations.map((loc, idx) => (
                        <div key={loc.city}>
                          <span className="text-[11px] font-medium text-[#422B30]">
                            {loc.city}:
                          </span>
                          <input
                            type="text"
                            value={loc.address}
                            onChange={e => updateLocation(idx, { address: e.target.value })}
                            placeholder={`Dirección física en ${loc.city}`}
                            className="w-full p-2 text-xs rounded-lg border border-[#EFB5B7]/60 text-[#422B30] bg-[#FFF5EC]/40 mt-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: EXPORTACIÓN PARA HOSTINGER */}
              {activeTab === 'export' && (
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-2xl border border-[#EFB5B7]/40 space-y-2">
                    <h4 className="font-serif font-bold text-[#422B30] text-sm">
                      Preparado para Despliegue en Hostinger
                    </h4>
                    <p className="text-xs text-[#422B30]/75 leading-relaxed">
                      Este sitio web está construido como una SPA estática optimizada con Vite. Al ejecutar <code className="bg-[#FAF0E6] px-1 py-0.5 rounded text-[#681B36]">npm run build</code>, se genera la carpeta <code className="bg-[#FAF0E6] px-1 py-0.5 rounded text-[#681B36]">dist/</code> lista para subirse por FTP o al Administrador de Archivos de Hostinger (public_html).
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyJson}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl bg-white border border-[#EFB5B7] text-[#681B36] hover:bg-[#FAF0E6] transition-colors cursor-pointer"
                    >
                      <Copy size={14} />
                      <span>{copiedNotification ? '¡Copiado!' : 'Copiar Config JSON'}</span>
                    </button>

                    <button
                      onClick={handleDownloadJson}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl bg-[#681B36] text-white hover:bg-[#422B30] transition-colors cursor-pointer"
                    >
                      <Download size={14} />
                      <span>Descargar JSON</span>
                    </button>
                  </div>

                  <div className="relative">
                    <pre className="bg-[#422B30] text-[#FFF5EC] p-3 rounded-xl text-[10px] overflow-x-auto max-h-60 leading-tight">
                      {exportConfigJson()}
                    </pre>
                  </div>
                </div>
              )}

            </div>

            {/* Footer with Reset option */}
            <div className="p-4 border-t border-[#EFB5B7]/40 bg-white flex items-center justify-between text-xs text-[#422B30]/70">
              <button
                onClick={resetDefaults}
                className="inline-flex items-center gap-1.5 text-xs text-[#D9828B] hover:text-[#681B36] transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Restaurar datos iniciales</span>
              </button>

              <span className="text-[11px] text-[#422B30]/50">
                Demo para cliente · NOI
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
