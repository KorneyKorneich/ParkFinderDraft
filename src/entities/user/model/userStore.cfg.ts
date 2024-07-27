import {Nullable, UserSchema} from "@shared";

export interface UserStoreSchema {
    user: Nullable<UserSchema>,
    isLoggedIn: boolean,
    signIn: (credentials: Credentials) => Promise<void>,
    signUp: (credentials: Credentials) => Promise<void>,
    loginError?: string
}

export interface Credentials {
    email: string;
    password: string;
}
