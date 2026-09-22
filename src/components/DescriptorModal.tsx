import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, BookOpen, Target, CheckCircle2, HelpCircle, Compass, ArrowRight } from 'lucide-react';
import { DESCRIPTOR_GUIDES } from '../data/challenges';
import { DescriptorCode } from '../types';

interface DescriptorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: DescriptorCode;
}

export const DescriptorModal: React.FC<DescriptorModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'D07'
}) => {
  const [activeTab, setActiveTab] = useState<DescriptorCode>(initialTab);

  if (!isOpen) return null;

  const guide = DESCRIPTOR_GUIDES[activeTab];

  return (
    <div
      id="descriptor-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-emerald-500 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header with tabs */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/20 rounded-xl">
                <BookOpen className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
                  Guia do Professor & Aluno • 5º Ano
                </span>
                <h2 className="text-xl font-fun font-bold text-white">
                  Descritores da Prova Brasil / SAEB
                </h2>
              </div>
            </div>
            <button
              id="close-descriptor-modal-btn"
              onClick={onClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Toggle Tabs */}
          <div className="grid grid-cols-2 gap-2 bg-emerald-950/50 p-1 rounded-2xl">
            <button
              id="tab-d07-btn"
              onClick={() => setActiveTab('D07')}
              className={`py-2 px-3 rounded-xl font-fun font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                activeTab === 'D07'
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-[1.02]'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>D07: Conflito Gerador</span>
            </button>
            <button
              id="tab-d08-btn"
              onClick={() => setActiveTab('D08')}
              className={`py-2 px-3 rounded-xl font-fun font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                activeTab === 'D08'
                  ? 'bg-emerald-400 text-emerald-950 shadow-md scale-[1.02]'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>D08: Causa & Efeito</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-700 leading-relaxed">
          {/* Badge & Title */}
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
                activeTab === 'D07' ? 'bg-amber-500' : 'bg-emerald-600'
              }`}
            >
              {guide.badgeText}
            </span>
            <h3 className="text-xl font-fun font-bold text-slate-900">{guide.name}</h3>
          </div>

          {/* SAEB Official Description Box */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-sm">
            <strong className="block text-emerald-900 font-bold mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Definição Oficial da Matriz SAEB (5º Ano):
            </strong>
            <p className="text-emerald-800 italic">"{guide.saebStandard}"</p>
          </div>

          {/* Kid-Friendly Explanation */}
          <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-sm">
            <strong className="block text-amber-950 font-bold mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Como entender de um jeito fácil:
            </strong>
            <p className="text-amber-900">{guide.kidFriendlyExplanation}</p>
          </div>

          {/* What to look for */}
          <div>
            <h4 className="font-fun font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
              <span>Perguntas que ajudam a encontrar a resposta certa:</span>
            </h4>
            <div className="space-y-2">
              {guide.keyQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thematic Connection to Tree Day */}
          <div className="p-4 bg-emerald-900 text-emerald-50 rounded-2xl">
            <h4 className="font-fun font-bold text-sm text-amber-300 mb-1">
              🌱 Conexão com a Semana do Dia da Árvore:
            </h4>
            {activeTab === 'D07' ? (
              <p className="text-xs text-emerald-100">
                Nas histórias sobre o meio ambiente, o conflito gerador geralmente é uma ameaça à floresta
                (seca, entulho, queimada, corte indevido de árvores) que desperta a coragem dos heróis da
                natureza para agir e salvar o ecossistema!
              </p>
            ) : (
              <p className="text-xs text-emerald-100">
                Na natureza, toda ação gera uma consequência! Cuidar da árvore gera sombra fresca, frutos e chuva.
                Destruir a mata gera seca e falta de água. O D08 ensina você a enxergar esses elos vitais no texto!
              </p>
            )}
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            id="close-guide-action-btn"
            onClick={onClose}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-fun font-bold rounded-2xl transition-all shadow-md active:scale-95"
          >
            Entendido! Vamos Jogar 🌳
          </button>
        </div>
      </motion.div>
    </div>
  );
};
