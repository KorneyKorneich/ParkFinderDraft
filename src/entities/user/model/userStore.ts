import { create } from "zustand";
import { Credentials, OTPProps, PhoneCreds, UserStoreSchema } from "./userStore.cfg.ts";
import auth from "@react-native-firebase/auth";

export const useUserStore = create<UserStoreSchema>()((set) => ({
    user: null,
    isLoading: false,
    loginError: null,

    signIn: async (credentials: Credentials) => {
        const { email, password } = credentials;
        set({ isLoading: true });
        await auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                set({
                    user: {
                        uuid: res.user.uid,
                    },
                    loginError: null,
                    isLoading: false,
                });
            })
            .catch((e) => {
                set({ loginError: e, isLoading: false });
                throw e;
            });
    },
    signUp: async (credentials: Credentials) => {
        const { email, password } = credentials;
        set({ isLoading: true, loginError: null });
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                set({
                    user: {
                        uuid: res.user.uid,
                    },
                    isLoading: false,
                    loginError: null,
                });
            })
            .catch((e) => {
                set({ loginError: e, isLoading: false });
                throw e;
            });
    },
    signOut: async () => {
        set({ isLoading: true, loginError: null });
        await auth()
            .signOut()
            .then(() => {
                set({ isLoading: false });
            });
    },
    phoneSignIn: async (creds: PhoneCreds) => {
        set({ isLoading: true });
        const confirm = await auth()
            .signInWithPhoneNumber(`${creds.selectedCountry?.callingCode} ${creds.phone}`)
            .then((result) => {
                set({ isLoading: false, loginError: null });
                return result;
            })
            .catch((e) => {
                set({ loginError: e, isLoading: false });
                throw e;
            });
        return confirm;
    },
    OTPConfirm: async function handleOTPConfirm(props: OTPProps) {
        set({ isLoading: true, loginError: null });
        await props.confirm
            .confirm(props.code)
            .then((res) => {
                set({
                    user: {
                        uuid: res?.user.uid as string,
                    },
                    loginError: null,
                    isLoading: false,
                });
            })
            .catch((e) => {
                set({ loginError: e, isLoading: false });
                throw e;
            });
    },
}));
