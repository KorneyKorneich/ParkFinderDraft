import {Nullable, UserSchema} from "@shared/api";

export interface UserStoreSchema {
    user: Nullable<UserSchema>,
    isLoggedIn: boolean,
    signIn: (credentials: Credentials) => Promise<void>,
    signUp: (credentials: Credentials) => Promise<void>,
    signOut: () => Promise<void>,
    loginError?: string
    isLoading: boolean
}

export interface Credentials {
    email: string;
    password: string;
}
