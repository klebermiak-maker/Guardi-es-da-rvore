import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { X, Award, Printer, TreePine, Sparkles, CheckCircle2 } from 'lucide-react';
import { PlayerStats } from '../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: PlayerStats;
  onNameChange: (newName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  stats,
  onNameChange
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div
      id="certificate-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-amber-400 overflow-hidden flex flex-col my-8"
      >
        {/* Top bar (hidden in print) */}
        <div className="bg-emerald-900 text-white p-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300" />
            <h3 className="font-fun font-bold text-lg">Certificado Oficial do Guardião</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="print-certificate-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              id="close-certificate-btn"
              onClick={onClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Canvas */}
        <div
          ref={certificateRef}
          className="p-6 sm:p-10 bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/40 relative border-[12px] border-emerald-800 m-2 rounded-2xl"
        >
          {/* Ornamental Inner Border */}
          <div className="border-2 border-dashed border-amber-500/80 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
            {/* Corner Leaf Embellishments */}
            <span className="absolute top-2 left-2 text-2xl select-none">🌿</span>
            <span className="absolute top-2 right-2 text-2xl select-none">🌿</span>
            <span className="absolute bottom-2 left-2 text-2xl select-none">🌱</span>
            <span className="absolute bottom-2 right-2 text-2xl select-none">🌱</span>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <TreePine className="w-4 h-4 text-emerald-700" />
              <span>Semana do Dia da Árvore • 21 de Setembro</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-fun font-bold text-emerald-950 tracking-tight mb-2">
              CERTIFICADO DE MÉRITO
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
              Guardião da Floresta & Leitor Destaque do 5º Ano do Ensino Fundamental
            </p>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto mb-3">
              Certificamos que o(a) dedicado(a) estudante
            </p>

            {/* Editable Student Name */}
            <div className="max-w-md mx-auto mb-5">
              <input
                id="student-certificate-name-input"
                type="text"
                value={stats.playerName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full text-center text-xl sm:text-2xl font-fun font-bold text-emerald-900 border-b-2 border-emerald-600 focus:outline-none focus:border-amber-500 bg-transparent py-1"
              />
              <span className="text-[10px] text-slate-400 print:hidden">
                (Clique acima para editar o nome do(a) aluno(a))
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed mb-6">
              concluiu com êxito os desafios de interpretação leitora baseados na Matriz do SAEB,
              demonstrando maestria nos seguintes descritores:
            </p>

            {/* Descriptors Verified Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-fun font-bold text-xs text-amber-950">
                    Descritor D07 (SAEB 5º Ano)
                  </h4>
                  <p className="text-[11px] text-amber-900 leading-snug">
                    Identificação precisa do conflito gerador e elementos da narrativa.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-fun font-bold text-xs text-emerald-950">
                    Descritor D08 (SAEB 5º Ano)
                  </h4>
                  <p className="text-[11px] text-emerald-900 leading-snug">
                    Estabelecimento de relações de causa e consequência nos textos ecológicos.
                  </p>
                </div>
              </div>
            </div>

            {/* Seal & Signatures */}
            <div className="grid grid-cols-3 gap-4 items-end pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-800">
                  {stats.score} Pontos
                </div>
                <div className="text-[10px] text-slate-500 uppercase">Pontuação Final</div>
                <div className="text-xs font-bold text-emerald-700 mt-1">
                  {stats.correctAnswers} de {stats.questionsAnswered} Acertos
                </div>
              </div>

              {/* Gold Seal Graphic */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 shadow-md border-4 border-amber-600 flex flex-col items-center justify-center text-amber-950 font-bold p-1">
                  <Sparkles className="w-4 h-4 text-amber-900 mb-0.5" />
                  <span className="text-[9px] uppercase tracking-tighter">GUARDIÃO</span>
                  <span className="text-xs font-fun font-extrabold">OURO</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1">{currentDate}</span>
              </div>

              <div className="text-center">
                <div className="border-b border-slate-400 pb-1 mb-1 mx-2">
                  <span className="text-xs font-script italic text-slate-600">
                    Comissão Pedagógica
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase">
                  Professor(a) / Escola
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
