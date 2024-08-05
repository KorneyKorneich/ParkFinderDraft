import { create } from "zustand";
import { ICurretLocationStore } from "@shared/api";


export const useSetCurretLocationStore = create<ICurretLocationStore>(set => ({
	currentLocation: null,
	setCurrentLocation: (value) => set(() => ({ currentLocation: value }))
}));
