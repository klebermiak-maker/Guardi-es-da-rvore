import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import { sound } from '../utils/sound';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean, chosenOptionId: 'A' | 'B' | 'C' | 'D') => void;
  onNext: () => void;
  hasNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  hasNext
}) => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(false);

  // Reset state when question changes
  React.useEffect(() => {
    setSelectedOption(null);
    setShowHint(false);
    setAnswered(false);
  }, [question.id]);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (answered) return;

    setSelectedOption(optionId);
    setAnswered(true);
    const isCorrect = optionId === question.correctOptionId;

    if (isCorrect) {
      sound.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      sound.playWrong();
    }

    onAnswer(isCorrect, optionId);
  };

  const isD07 = question.descriptor === 'D07';

  return (
    <div
      id="question-card-container"
      className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border-2 border-emerald-200 flex flex-col justify-between"
    >
      <div>
        {/* Descriptor Badge & Progress */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide text-white shadow-sm flex items-center gap-1 ${
                isD07 ? 'bg-amber-500' : 'bg-emerald-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {question.descriptorLabel}
            </span>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {question.focusSkill}
            </span>
          </div>

          <div className="text-xs font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            Pergunta {questionNumber} de {totalQuestions}
          </div>
        </div>

        {/* Question Prompt */}
        <h3 className="font-fun font-bold text-base sm:text-lg text-slate-900 leading-snug mb-4">
          {question.questionText}
        </h3>

        {/* Text Reference tag if any */}
        {question.textReference && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{question.textReference}</span>
          </div>
        )}

        {/* Hint accordion button */}
        {!answered && (
          <div className="mb-4">
            <button
              id="show-hint-btn"
              onClick={() => {
                sound.playClick();
                setShowHint(!showHint);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-300 transition-colors"
            >
              <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-300" />
              <span>{showHint ? 'Ocultar pista' : 'Pedir pista do guardião 💡'}</span>
            </button>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed"
              >
                <strong>Dica de leitura:</strong> {question.hint}
              </motion.div>
            )}
          </div>
        )}

        {/* Multiple Choice Options */}
        <div className="space-y-2.5">
          {question.options.map((option) => {
            const isChosen = selectedOption === option.id;
            const isCorrect = option.id === question.correctOptionId;

            let buttonStyle = 'border-slate-200 bg-slate-50 hover:bg-emerald-50/70 hover:border-emerald-300 text-slate-800';

            if (answered) {
              if (isCorrect) {
                buttonStyle = 'border-emerald-500 bg-emerald-100 text-emerald-950 ring-2 ring-emerald-500/50';
              } else if (isChosen && !isCorrect) {
                buttonStyle = 'border-rose-400 bg-rose-50 text-rose-950';
              } else {
                buttonStyle = 'border-slate-200 bg-slate-50 opacity-60 text-slate-600';
              }
            }

            return (
              <button
                key={option.id}
                id={`option-${option.id.toLowerCase()}-btn`}
                disabled={answered}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start gap-3 text-sm font-medium ${buttonStyle} ${
                  !answered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-fun font-bold text-xs shrink-0 transition-colors ${
                    answered && isCorrect
                      ? 'bg-emerald-600 text-white'
                      : answered && isChosen && !isCorrect
                      ? 'bg-rose-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-700'
                  }`}
                >
                  {option.id}
                </span>

                <span className="flex-1 leading-snug pt-0.5">{option.text}</span>

                {answered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {answered && isChosen && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer Feedback & Next Action */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 pt-4 border-t border-slate-200"
          >
            <div
              className={`p-4 rounded-2xl border mb-4 text-xs sm:text-sm leading-relaxed ${
                selectedOption === question.correctOptionId
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="font-fun font-bold text-sm mb-1 flex items-center gap-1.5">
                {selectedOption === question.correctOptionId ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Resposta Correta! Você ganhou +20 Gotas de Água 🌱</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Quase lá! Veja a explicação pedagógica:</span>
                  </>
                )}
              </div>
              <p>{question.explanation}</p>
            </div>

            <button
              id="next-question-action-btn"
              onClick={() => {
                sound.playClick();
                onNext();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-fun font-bold text-base rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>{hasNext ? 'Próximo Desafio' : 'Concluir Fase e Ver Árvore'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
