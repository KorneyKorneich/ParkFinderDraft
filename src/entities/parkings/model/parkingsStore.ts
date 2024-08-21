import { create } from "zustand";
import { IUseParkingsStore } from "./parkingsStore.cfg";

export const useParkingsStore = create<IUseParkingsStore>((set) => ({
    parkingsMarkers: [],
    setParkingsMarkers: (value) => set(() => ({ parkingsMarkers: value })),
}));
