import React, { useState } from 'react';
import { ReadingText } from '../types';
import { BookOpen, Type, Volume2, VolumeX, Sparkles, Highlighter } from 'lucide-react';

interface ReadingViewerProps {
  readingText: ReadingText;
  highlightedParagraph?: number;
}

export const ReadingViewer: React.FC<ReadingViewerProps> = ({
  readingText,
  highlightedParagraph
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fontSizeClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-loose'
  };

  const handleToggleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const fullText = `${readingText.title}. ${readingText.paragraphs.join(' ')}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="reading-viewer-card"
      className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border-2 border-emerald-200 flex flex-col h-full"
    >
      {/* Header bar of the text */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-emerald-100">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
              Texto de Leitura • {readingText.treeSpecies}
            </span>
            <h2 className="font-fun font-bold text-lg sm:text-xl text-emerald-950">
              {readingText.title}
            </h2>
          </div>
        </div>

        {/* Action Controls: Font Size, Narration & Highlight */}
        <div className="flex items-center gap-1.5 bg-emerald-50 p-1.5 rounded-2xl border border-emerald-200">
          {/* Read Aloud button */}
          <button
            id="speak-text-btn"
            onClick={handleToggleSpeak}
            title={isSpeaking ? 'Parar leitura' : 'Ouvir narração do texto'}
            className={`p-1.5 rounded-xl transition-colors ${
              isSpeaking
                ? 'bg-amber-400 text-amber-950 animate-pulse'
                : 'text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Highlight toggle */}
          <button
            id="toggle-highlight-btn"
            onClick={() => setIsHighlightMode(!isHighlightMode)}
            title="Modo Destaque de Pistas"
            className={`p-1.5 rounded-xl transition-colors ${
              isHighlightMode
                ? 'bg-yellow-300 text-yellow-950 font-bold'
                : 'text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <Highlighter className="w-4 h-4" />
          </button>

          {/* Font Size Adjusters */}
          <button
            id="font-size-normal-btn"
            onClick={() => setFontSize('normal')}
            className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
              fontSize === 'normal'
                ? 'bg-emerald-700 text-white'
                : 'text-emerald-800 hover:bg-emerald-200'
            }`}
          >
            A
          </button>
          <button
            id="font-size-large-btn"
            onClick={() => setFontSize('large')}
            className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
              fontSize === 'large'
                ? 'bg-emerald-700 text-white'
                : 'text-emerald-800 hover:bg-emerald-200'
            }`}
          >
            A+
          </button>
          <button
            id="font-size-xlarge-btn"
            onClick={() => setFontSize('xlarge')}
            className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
              fontSize === 'xlarge'
                ? 'bg-emerald-700 text-white'
                : 'text-emerald-800 hover:bg-emerald-200'
            }`}
          >
            A++
          </button>
        </div>
      </div>

      {/* Subtitle & Biome Info */}
      <div className="flex items-center gap-2 py-2 text-xs font-semibold text-emerald-800">
        <span className="bg-emerald-100 px-2.5 py-0.5 rounded-full">
          Bioma: {readingText.biome}
        </span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600 italic">{readingText.author}</span>
      </div>

      {/* Narrative Paragraphs */}
      <div className={`mt-2 space-y-4 overflow-y-auto pr-2 max-h-[480px] ${fontSizeClasses[fontSize]}`}>
        {readingText.paragraphs.map((p, index) => {
          const paragraphNum = index + 1;
          const isTargetParagraph = highlightedParagraph === paragraphNum;

          return (
            <div
              key={index}
              className={`relative pl-8 transition-colors rounded-xl p-2.5 ${
                isTargetParagraph
                  ? 'bg-amber-100/90 border-l-4 border-amber-500 shadow-sm'
                  : 'hover:bg-slate-50'
              }`}
            >
              {/* Paragraph Index badge */}
              <span
                className={`absolute left-1 top-3 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                  isTargetParagraph
                    ? 'bg-amber-500 text-white'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                ¶{paragraphNum}
              </span>

              <p className={`text-slate-800 indent-2 ${isHighlightMode ? 'selection:bg-yellow-300' : ''}`}>
                {p}
              </p>
            </div>
          );
        })}
      </div>

      {/* Vocabulary Footnotes if available */}
      {readingText.vocabulary && readingText.vocabulary.length > 0 && (
        <div className="mt-4 pt-3 border-t border-emerald-100 bg-emerald-50/50 p-3 rounded-2xl">
          <span className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Minidicionário da Floresta:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {readingText.vocabulary.map((voc, i) => (
              <div key={i} className="text-slate-700">
                <span className="font-bold text-emerald-800">{voc.word}:</span> {voc.meaning}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
