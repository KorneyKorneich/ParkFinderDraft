import { create } from "zustand";
import { IUseSetlocationStore } from "@shared/api";

export const useSetlocationStore = create<IUseSetlocationStore>((set) => ({
    location: null,
    mapRef: null,
    setMapRef: (ref) => set(() => ({ mapRef: ref })),
    setLocation: (value) => set(() => ({ location: value })),
}));
