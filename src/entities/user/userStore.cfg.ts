import { Nullable, UserSchema } from "@shared/api";

export interface UserStoreSchema {
    user: Nullable<UserSchema>,
}
