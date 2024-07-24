import { create } from "zustand";
import { UserStoreSchema } from "@/entities";


const useUserStore = create<UserStoreSchema>()((set) => ({
    user: null
}))
