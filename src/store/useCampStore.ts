import { create } from 'zustand';
import { SampleCamp } from '../data/sampleCamps';

type CampStore = {
  camps: SampleCamp[];
  setInitial: (list: SampleCamp[]) => void;
  addCamp: (camp: SampleCamp) => void;
  getRandom10: () => SampleCamp[];
};

export const useCampStore = create<CampStore>((set, get) => ({
  camps: [],
  setInitial: (list) => set({ camps: list }),
  addCamp: (camp) => set((state) => ({ camps: [...state.camps, camp] })),
  getRandom10: () => {
    const data = get().camps;
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  },
}));
