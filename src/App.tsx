import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TreePine,
  Droplet,
  Sun,
  Award,
  BookOpen,
  Sparkles,
  ChevronRight,
  Flame,
  CheckCircle,
  BarChart3,
  Compass,
  Target,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

import { READING_TEXTS } from './data/challenges';
import { PlayerStats, DescriptorCode } from './types';
import { sound } from './utils/sound';

import { Navbar } from './components/Navbar';
import { TreeStageVisualizer } from './components/TreeStageVisualizer';
import { ReadingViewer } from './components/ReadingViewer';
import { QuestionCard } from './components/QuestionCard';
import { DescriptorModal } from './components/DescriptorModal';
import { HerbarioModal } from './components/HerbarioModal';
import { CertificateModal } from './components/CertificateModal';

const STORAGE_KEY = 'guardioes_da_arvore_5ano_stats';

const DEFAULT_STATS: PlayerStats = {
  playerName: 'Guardião(ã) da Natureza',
  score: 0,
  waterDrops: 15,
  sunEnergy: 10,
  questionsAnswered: 0,
  correctAnswers: 0,
  d07Correct: 0,
  d07Total: 0,
  d08Correct: 0,
  d08Total: 0,
  currentStreak: 0,
  bestStreak: 0,
  treeLevel: 0,
  completedTextIds: [],
  unlockedTrees: ['ipe-amarelo']
};

export default function App() {
  // Persistence state
  const [stats, setStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore fallback
    }
    return DEFAULT_STATS;
  });

  // Current Story & Question index
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Active Game Mode: 'journey' (all) | 'filter-d07' | 'filter-d08'
  const [filterDescriptor, setFilterDescriptor] = useState<DescriptorCode | 'ALL'>('ALL');

  // Modals state
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [guideInitialTab, setGuideInitialTab] = useState<DescriptorCode>('D07');
  const [isHerbarioOpen, setIsHerbarioOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [storyCompletedCelebration, setStoryCompletedCelebration] = useState(false);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.warn('Could not save progress to localStorage', e);
    }
  }, [stats]);

  const currentText = READING_TEXTS[currentTextIndex];

  // Filtered questions based on mode
  const activeQuestions = currentText.questions.filter((q) => {
    if (filterDescriptor === 'ALL') return true;
    return q.descriptor === filterDescriptor;
  });

  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  // Calculate target paragraph for highlight clue
  const getReferencedParagraphNumber = (refText?: string): number | undefined => {
    if (!refText) return undefined;
    const match = refText.match(/(\d+)º\s+parágrafo/i);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return undefined;
  };

  const highlightedParagraph = currentQuestion
    ? getReferencedParagraphNumber(currentQuestion.textReference)
    : undefined;

  // Handle Question Answer
  const handleAnswer = (isCorrect: boolean) => {
    setStats((prev) => {
      const newScore = isCorrect ? prev.score + 25 : prev.score + 5;
      const newDrops = isCorrect ? prev.waterDrops + 20 : prev.waterDrops + 5;
      const newSun = isCorrect ? prev.sunEnergy + 15 : prev.sunEnergy + 5;
      const newCorrect = isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers;
      const newStreak = isCorrect ? prev.currentStreak + 1 : 0;
      const bestStreak = Math.max(prev.bestStreak, newStreak);

      const isD07 = currentQuestion.descriptor === 'D07';
      const d07Correct = isD07 && isCorrect ? prev.d07Correct + 1 : prev.d07Correct;
      const d07Total = isD07 ? prev.d07Total + 1 : prev.d07Total;

      const isD08 = currentQuestion.descriptor === 'D08';
      const d08Correct = isD08 && isCorrect ? prev.d08Correct + 1 : prev.d08Correct;
      const d08Total = isD08 ? prev.d08Total + 1 : prev.d08Total;

      // Tree Level calculation (each 4 correct answers grows tree one stage up to 5)
      const calculatedTreeLevel = Math.min(Math.floor(newCorrect / 2.5), 5);
      if (calculatedTreeLevel > prev.treeLevel) {
        sound.playTreeGrow();
      }

      return {
        ...prev,
        score: newScore,
        waterDrops: newDrops,
        sunEnergy: newSun,
        questionsAnswered: prev.questionsAnswered + 1,
        correctAnswers: newCorrect,
        currentStreak: newStreak,
        bestStreak,
        d07Correct,
        d07Total,
        d08Correct,
        d08Total,
        treeLevel: calculatedTreeLevel
      };
    });
  };

  // Next Question or Story
  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Completed current story
      sound.playFanfare();
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 }
      });

      // Mark completed
      setStats((prev) => ({
        ...prev,
        completedTextIds: prev.completedTextIds.includes(currentText.id)
          ? prev.completedTextIds
          : [...prev.completedTextIds, currentText.id]
      }));

      setStoryCompletedCelebration(true);
    }
  };

  const handleSelectStory = (index: number) => {
    sound.playClick();
    setCurrentTextIndex(index);
    setCurrentQuestionIndex(0);
    setStoryCompletedCelebration(false);
  };

  const handleReset = () => {
    setStats(DEFAULT_STATS);
    setCurrentTextIndex(0);
    setCurrentQuestionIndex(0);
    setStoryCompletedCelebration(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const openGuideFor = (code: DescriptorCode) => {
    setGuideInitialTab(code);
    setIsGuideOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-800 flex flex-col selection:bg-emerald-300 selection:text-emerald-950 font-sans">
      {/* Top Navigation */}
      <Navbar
        score={stats.score}
        playerName={stats.playerName}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(sound.toggleMute())}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenHerbario={() => setIsHerbarioOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onReset={handleReset}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 lg:p-6 space-y-6">
        {/* Banner: Semana do Dia da Árvore & Desafio 5º Ano */}
        <section
          id="welcome-hero-banner"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-5 sm:p-7 shadow-xl border-2 border-emerald-500/40"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-amber-950 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                <span>🌱 21 de Setembro: Dia da Árvore</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-fun font-bold text-white tracking-tight leading-snug">
                Missão Floresta Viva: Guardiões da Leitura
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Bem-vindo(a), aluno(a) do <strong>5º ano</strong>! Sua missão é ler as histórias sobre as grandes árvores brasileiras, identificar o <strong>Conflito Gerador (D07)</strong> e descobrir as relações de <strong>Causa e Consequência (D08)</strong> para regar e fazer a Árvore da Vida florescer!
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full md:w-auto shrink-0">
              <div
                onClick={() => openGuideFor('D07')}
                className="cursor-pointer bg-emerald-950/60 hover:bg-emerald-950/90 border border-amber-400/40 p-3 rounded-2xl text-center transition-all hover:scale-105"
              >
                <div className="flex items-center justify-center gap-1 text-amber-300 text-xs font-bold mb-0.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>D07</span>
                </div>
                <div className="font-fun font-extrabold text-white text-lg">
                  {stats.d07Correct}/{stats.d07Total}
                </div>
                <div className="text-[10px] text-emerald-200">Conflito Gerador</div>
              </div>

              <div
                onClick={() => openGuideFor('D08')}
                className="cursor-pointer bg-emerald-950/60 hover:bg-emerald-950/90 border border-teal-400/40 p-3 rounded-2xl text-center transition-all hover:scale-105"
              >
                <div className="flex items-center justify-center gap-1 text-teal-300 text-xs font-bold mb-0.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>D08</span>
                </div>
                <div className="font-fun font-extrabold text-white text-lg">
                  {stats.d08Correct}/{stats.d08Total}
                </div>
                <div className="text-[10px] text-emerald-200">Causa & Efeito</div>
              </div>

              <div
                onClick={() => setIsCertificateOpen(true)}
                className="col-span-2 sm:col-span-1 cursor-pointer bg-amber-400 text-amber-950 p-3 rounded-2xl text-center transition-all hover:scale-105 shadow-md flex flex-col justify-center"
              >
                <div className="flex items-center justify-center gap-1 text-amber-950 text-xs font-bold mb-0.5">
                  <Award className="w-4 h-4" />
                  <span>Certificado</span>
                </div>
                <div className="font-fun font-extrabold text-xs leading-tight">
                  Ver Medalha
                </div>
                <div className="text-[10px] text-amber-900">Clique para abrir</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tree Growth Interactive Canvas */}
        <section id="tree-section">
          <TreeStageVisualizer
            stage={stats.treeLevel}
            waterDrops={stats.waterDrops}
            sunEnergy={stats.sunEnergy}
            streak={stats.currentStreak}
          />
        </section>

        {/* Story Selector & Mode Filter */}
        <section
          id="stories-selector-bar"
          className="bg-emerald-950/80 rounded-3xl p-4 border border-emerald-700/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
        >
          {/* Stories Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Histórias:
            </span>
            {READING_TEXTS.map((text, idx) => {
              const isSelected = currentTextIndex === idx;
              const isCompleted = stats.completedTextIds.includes(text.id);

              return (
                <button
                  key={text.id}
                  id={`story-tab-${idx}-btn`}
                  onClick={() => handleSelectStory(idx)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-fun font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                      : 'bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100'
                  }`}
                >
                  <span>{text.treeSpecies}</span>
                  {isCompleted && (
                    <CheckCircle className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-950' : 'text-emerald-400'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Filter by Descriptor */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Treinar:
            </span>
            <div className="inline-flex bg-emerald-900 p-1 rounded-2xl border border-emerald-700">
              <button
                id="filter-all-btn"
                onClick={() => {
                  sound.playClick();
                  setFilterDescriptor('ALL');
                  setCurrentQuestionIndex(0);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  filterDescriptor === 'ALL'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                id="filter-d07-btn"
                onClick={() => {
                  sound.playClick();
                  setFilterDescriptor('D07');
                  setCurrentQuestionIndex(0);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  filterDescriptor === 'D07'
                    ? 'bg-amber-400 text-amber-950 shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                D07 Conflito
              </button>
              <button
                id="filter-d08-btn"
                onClick={() => {
                  sound.playClick();
                  setFilterDescriptor('D08');
                  setCurrentQuestionIndex(0);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  filterDescriptor === 'D08'
                    ? 'bg-teal-400 text-teal-950 shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                D08 Causa/Efeito
              </button>
            </div>
          </div>
        </section>

        {/* Story Completed Banner */}
        <AnimatePresence>
          {storyCompletedCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-emerald-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shadow-lg shrink-0">
                  🎉
                </div>
                <div>
                  <h3 className="font-fun font-bold text-xl sm:text-2xl text-white">
                    Parabéns! Você concluiu os desafios de {currentText.treeSpecies}!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100">
                    Sua árvore recebeu muita água e luz do sol! Continue para a próxima história ou confira seu certificado.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  id="celebration-next-story-btn"
                  onClick={() => {
                    const nextIdx = (currentTextIndex + 1) % READING_TEXTS.length;
                    handleSelectStory(nextIdx);
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-fun font-bold text-sm rounded-2xl shadow-md transition-all active:scale-95"
                >
                  Próxima História 🌲
                </button>
                <button
                  id="celebration-certificate-btn"
                  onClick={() => setIsCertificateOpen(true)}
                  className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-fun font-bold text-sm rounded-2xl transition-all"
                >
                  Ver Certificado 🏅
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main 2-Column Pedagogical Workspace: Reading passage (Left) + Question challenge (Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Reading Passage Viewer */}
          <div className="lg:col-span-7 h-full">
            <ReadingViewer
              readingText={currentText}
              highlightedParagraph={highlightedParagraph}
            />
          </div>

          {/* Right Column: Interactive Question Card */}
          <div className="lg:col-span-5 h-full">
            {currentQuestion ? (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={activeQuestions.length}
                onAnswer={handleAnswer}
                onNext={handleNextQuestion}
                hasNext={currentQuestionIndex < activeQuestions.length - 1}
              />
            ) : (
              <div className="bg-white rounded-3xl p-6 text-center border-2 border-emerald-200">
                <p className="text-slate-600 font-medium text-sm">
                  Nenhuma questão encontrada para este filtro. Selecione "Todos" para ver todos os desafios!
                </p>
                <button
                  onClick={() => setFilterDescriptor('ALL')}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl text-xs"
                >
                  Ver Todas as Questões
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Descriptor Summary Cards at Bottom for easy reference */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {/* Card D07 */}
          <div
            id="quick-card-d07"
            onClick={() => openGuideFor('D07')}
            className="bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-3xl p-5 border-2 border-amber-300 shadow-sm cursor-pointer hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Descritor SAEB D07
              </span>
              <span className="text-xs font-bold text-amber-800 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Saber Mais <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h4 className="font-fun font-bold text-amber-950 text-base mb-1">
              Conflito Gerador & Elementos da Narrativa
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed">
              Aprenda a encontrar o acontecimento que deu início à história, quem são os personagens principais, o cenário onde tudo acontece, o clímax e o desfecho da aventura!
            </p>
          </div>

          {/* Card D08 */}
          <div
            id="quick-card-d08"
            onClick={() => openGuideFor('D08')}
            className="bg-gradient-to-br from-emerald-50 to-teal-100/60 rounded-3xl p-5 border-2 border-emerald-300 shadow-sm cursor-pointer hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Descritor SAEB D08
              </span>
              <span className="text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Saber Mais <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h4 className="font-fun font-bold text-emerald-950 text-base mb-1">
              Relações de Causa & Consequência
            </h4>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Descubra os elos invisíveis do texto: <strong>Por quê aconteceu?</strong> (a Causa) e <strong>Qual foi o resultado?</strong> (a Consequência gerada no meio ambiente e nas pessoas).
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-300 py-6 px-4 border-t border-emerald-800 text-center text-xs space-y-1">
        <p className="font-fun font-bold text-emerald-100 text-sm">
          🌳 Jogo da Semana do Dia da Árvore • 5º Ano do Ensino Fundamental I
        </p>
        <p className="text-emerald-400">
          Alinhado às diretrizes da BNCC e Matriz de Referência do SAEB (Descritores D07 e D08 - Língua Portuguesa).
        </p>
      </footer>

      {/* Modals */}
      <DescriptorModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        initialTab={guideInitialTab}
      />

      <HerbarioModal
        isOpen={isHerbarioOpen}
        onClose={() => setIsHerbarioOpen(false)}
        playerScore={stats.score}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        stats={stats}
        onNameChange={(newName) =>
          setStats((prev) => ({ ...prev, playerName: newName }))
        }
      />
    </div>
  );
}
