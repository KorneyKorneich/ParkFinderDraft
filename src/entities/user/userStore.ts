import { create } from "zustand";
import { UserStoreSchema } from "@entities/index";


const useUserStore = create<UserStoreSchema>()((set) => ({
	user: null
}));

