import {Nullable, UserSchema} from "@shared/api";
import { Country } from "@screens/PhoneAuthScreen/types/types.ts";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface UserStoreSchema {
    user: Nullable<UserSchema>,
    signIn: (credentials: Credentials) => Promise<void>,
    signUp: (credentials: Credentials) => Promise<void>,
    phoneSignIn:(phoneCreds: PhoneCreds) => Promise<FirebaseAuthTypes.ConfirmationResult>,
    OTPConfirm: (props: OTPProps) => void,
    signOut: () => Promise<void>,
    loginError?: string
    isLoading: boolean
}

export interface Credentials {
    email: string;
    password: string;
}

export interface OTPProps {
    confirm: FirebaseAuthTypes.ConfirmationResult
    code: string
}

export interface PhoneCreds {
    selectedCountry: Country,
    phone: string
}
