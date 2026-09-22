import React from 'react';
import { TreePine, Volume2, VolumeX, BookOpen, Award, RotateCcw, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  score: number;
  playerName: string;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenGuide: () => void;
  onOpenHerbario: () => void;
  onOpenCertificate: () => void;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  score,
  playerName,
  isMuted,
  onToggleMute,
  onOpenGuide,
  onOpenHerbario,
  onOpenCertificate,
  onReset
}) => {
  return (
    <header
      id="app-header"
      className="bg-emerald-900/95 backdrop-blur-md text-white border-b-2 border-emerald-700/60 sticky top-0 z-40 px-4 py-3 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-emerald-950 shadow-md">
            <TreePine className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-fun font-bold text-lg sm:text-xl text-white tracking-tight leading-none">
                Guardiões da Árvore
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-amber-950 uppercase">
                5º Ano
              </span>
            </div>
            <p className="text-[11px] text-emerald-200 font-medium">
              Semana do Dia da Árvore • Descritores D07 e D08
            </p>
          </div>
        </div>

        {/* Player score & Actions */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Points Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-950/80 border border-emerald-700 text-xs font-bold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-amber-300 font-fun font-extrabold">{score}</span>
            <span className="text-emerald-200">pontos</span>
          </div>

          {/* Guide D07 & D08 Button */}
          <button
            id="nav-guide-btn"
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-xs font-bold text-emerald-100 transition-colors border border-emerald-600/50"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span className="hidden md:inline">Descritores</span> D07/D08
          </button>

          {/* Herbarium Button */}
          <button
            id="nav-herbario-btn"
            onClick={onOpenHerbario}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-xs font-bold text-emerald-100 transition-colors border border-emerald-600/50"
          >
            <TreePine className="w-4 h-4 text-emerald-300" />
            <span>Herbário</span>
          </button>

          {/* Certificate Button */}
          <button
            id="nav-certificate-btn"
            onClick={onOpenCertificate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Award className="w-4 h-4 text-amber-950" />
            <span className="hidden sm:inline">Certificado</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="toggle-audio-btn"
            onClick={() => {
              onToggleMute();
              sound.playClick();
            }}
            title={isMuted ? 'Ativar som' : 'Desativar som'}
            className="p-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-emerald-200 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Reset Progress */}
          <button
            id="reset-game-btn"
            onClick={() => {
              if (window.confirm('Deseja reiniciar a jornada e começar uma nova sementinha?')) {
                onReset();
              }
            }}
            title="Reiniciar jogo"
            className="p-2 rounded-xl bg-emerald-800/60 hover:bg-rose-900/80 text-emerald-200 hover:text-rose-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
