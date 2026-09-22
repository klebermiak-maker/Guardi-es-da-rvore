import React from 'react';
import { motion } from 'motion/react';
import { X, TreePine, Lock, Sparkles, Award } from 'lucide-react';
import { NATIVE_TREES } from '../data/challenges';
import { NativeTree } from '../types';

interface HerbarioModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerScore: number;
}

export const HerbarioModal: React.FC<HerbarioModalProps> = ({
  isOpen,
  onClose,
  playerScore
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="herbario-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-emerald-500 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 text-amber-950 rounded-2xl shadow-sm">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Coleção Botânica Escolar
              </span>
              <h2 className="text-xl font-fun font-bold text-white">
                Herbário das Árvores Brasileiras
              </h2>
            </div>
          </div>

          <button
            id="close-herbario-btn"
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Responda corretamente às questões dos descritores D07 e D08 para acumular pontos de sabedoria e desbloquear as fichas completas de cada espécie nativa!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NATIVE_TREES.map((tree: NativeTree) => {
              const isUnlocked = playerScore >= tree.unlockedAtPoints;

              return (
                <div
                  key={tree.id}
                  className={`rounded-2xl p-4 border-2 transition-all relative ${
                    isUnlocked
                      ? 'bg-gradient-to-b from-white to-emerald-50/50 border-emerald-300 shadow-sm'
                      : 'bg-slate-100 border-slate-200 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{tree.badgeIcon}</span>
                      <div>
                        <h4 className="font-fun font-bold text-slate-900 text-base">
                          {tree.name}
                        </h4>
                        <p className="text-xs text-slate-500 italic">
                          {tree.scientificName}
                        </p>
                      </div>
                    </div>

                    {!isUnlocked ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                        <Lock className="w-3 h-3" />
                        {tree.unlockedAtPoints} pts
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        Desbloqueada
                      </span>
                    )}
                  </div>

                  {isUnlocked ? (
                    <div className="space-y-1.5 text-xs text-slate-700 mt-2">
                      <div>
                        <span className="font-bold text-emerald-900">Bioma:</span> {tree.biome}
                      </div>
                      <div>
                        <span className="font-bold text-emerald-900">Porte:</span> {tree.height}
                      </div>
                      <div className="pt-2 border-t border-emerald-100 text-slate-800 leading-relaxed bg-emerald-50/70 p-2.5 rounded-xl">
                        💡 <strong className="text-emerald-950">Curiosidade:</strong> {tree.curiosity}
                      </div>
                    </div>
                  ) : (
                    <div className="py-4 text-center text-xs text-slate-500">
                      🔒 Ganhe mais {tree.unlockedAtPoints - playerScore} pontos para revelar os segredos desta árvore.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-herbario-bottom-btn"
            onClick={onClose}
            className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-fun font-bold rounded-xl transition-all"
          >
            Fechar Herbário
          </button>
        </div>
      </motion.div>
    </div>
  );
};
