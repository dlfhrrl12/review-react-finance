import { create } from "zustand";

interface MonthState {
  selectMonth: number | null;
  setSelectMonth: (month: number) => void;
}

export const useMonthStore = create<MonthState>((set) => ({
  selectMonth: null,
  setSelectMonth: (month) => set({ selectMonth: month }),
}));
