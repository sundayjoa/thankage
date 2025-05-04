import { create } from 'zustand';

interface QuizState {
  currentIndex: number;
  score: number;
  correctCount: number;
  isAnswered: boolean;
  selectedIndex: number | null;
  showExplanation: boolean;

  selectAnswer: (index: number, isCorrect: boolean) => void;
  goToNextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  isAnswered: false,
  selectedIndex: null,
  showExplanation: false,

  selectAnswer: (index, isCorrect) =>
    set((state) => ({
      selectedIndex: index,
      isAnswered: true,
      score: isCorrect ? state.score + 50 : state.score,
      correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
    })),

  goToNextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
      isAnswered: false,
      selectedIndex: null,
      showExplanation: false,
    })),

  resetQuiz: () =>
    set({
      currentIndex: 0,
      score: 0,
      correctCount: 0,
      isAnswered: false,
      selectedIndex: null,
      showExplanation: false,
    }),
}));
