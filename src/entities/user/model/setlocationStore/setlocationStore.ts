import { create } from "zustand";
import { IUseSetlocationStore } from "@shared/api";

export const useSetlocationStore = create<IUseSetlocationStore>(set => ({
	location: null,
	setLocation: (value) => set(() => ({ location: value }))
}));
