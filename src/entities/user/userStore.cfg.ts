import { Nullable, UserSchema } from "@shared/schemas";

export interface UserStoreSchema {
    user: Nullable<UserSchema>,
}
