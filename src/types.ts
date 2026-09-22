export type DescriptorCode = 'D07' | 'D08';

export interface Question {
  id: string;
  descriptor: DescriptorCode;
  descriptorLabel: string;
  focusSkill: string; // e.g. "Conflito Gerador", "Causa", "Consequência", "Clímax / Desfecho"
  questionText: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  hint: string;
  textReference?: string; // e.g. "Releia o 2º parágrafo"
}

export interface ReadingText {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  treeSpecies: string;
  biome: string;
  paragraphs: string[];
  vocabulary?: { word: string; meaning: string }[];
  questions: Question[];
}

export interface NativeTree {
  id: string;
  name: string;
  scientificName: string;
  biome: string;
  height: string;
  curiosity: string;
  flowerColor: string;
  unlockedAtPoints: number;
  badgeIcon: string;
  photoDescription: string;
}

export interface PlayerStats {
  playerName: string;
  score: number;
  waterDrops: number;
  sunEnergy: number;
  questionsAnswered: number;
  correctAnswers: number;
  d07Correct: number;
  d07Total: number;
  d08Correct: number;
  d08Total: number;
  currentStreak: number;
  bestStreak: number;
  treeLevel: number; // 0 to 5
  completedTextIds: string[];
  unlockedTrees: string[];
}
