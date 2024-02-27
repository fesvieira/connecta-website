import { Category } from "@/models/Category";
import { getDailyWords } from "@/pages/api/get-daily-words";
import { UUID, randomUUID } from "crypto";
import { create } from "zustand";
import { Word } from "@/models/Word";

const CATEGORIES_PER_GAME = 4;

export type Game = {
  id: UUID;
  finishedWords: Word[];
  hasWon: boolean;
  attempts: string[];
  words: Word[];
};

export interface WordsStore {
  game: Game;
  selectedWords: Word[];
  correctWords: Word[];
  wrongWords: Word[];
  getDailyWords: () => Promise<Word[]>;
  addMistakeToAttempt: () => void;
  addCategoryToAttempt: () => void;
  updateHasWon: () => void;
  selectWord: (word: Word) => void;
  saveOrUpdateGame: (game: Game) => void;
  startNewGame: () => Game;
}

export const useWordsStore = create<WordsStore>((set, get) => ({
  game: get().startNewGame(),
  selectedWords: [],
  correctWords: [],
  wrongWords: [],
  getDailyWords: async () => {
    let words: Word[] = [];
    getDailyWords().then((result) => {
      let chosenCategories: Category[] =
        result?.data?.categories.slice(0, CATEGORIES_PER_GAME) || [];

      chosenCategories.forEach((category) => {
        category.words.forEach((word) => {
          words.push({ value: word, category: category.name });
        });
      });

      get().saveOrUpdateGame({ ...get().game, words });
    });
    return words;
  },
  addMistakeToAttempt: () => {
    set((state) => ({
      game: { ...state.game, attempts: [...state.game.attempts, "mistake"] },
    }));
  },
  addCategoryToAttempt: () => {
    set((state) => ({
      game: { ...state.game, attempts: [...state.game.attempts, "category"] },
    }));
  },
  updateHasWon: () => {
    set((state) => ({
      game: {
        ...state.game,
        hasWon: state.correctWords.length === get().game.words.length,
      },
    }));
  },
  selectWord: (word) => {
    set((state) => {
      const selectedWords = state.selectedWords.includes(word)
        ? state.selectedWords.filter((w) => w !== word)
        : [...state.selectedWords, word];
      return { selectedWords };
    });
  },
  saveOrUpdateGame: (game) => {
    set({ game });
  },
  startNewGame: () => {
    return {
      id: randomUUID(),
      finishedWords: [],
      hasWon: false,
      attempts: [],
      words: [],
    };
  },
}));
