import { create } from "zustand";

interface GlobalStoreState {
  error: boolean;
  setEror: (error: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreState>((set) => ({
  error: false,
  setEror: (error: boolean) => set({ error: error }),
}));
