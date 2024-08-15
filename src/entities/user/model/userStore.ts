import { create } from "zustand";
import { Credentials, OTPProps, PhoneCreds, UserStoreSchema } from "./userStore.cfg.ts";
import auth from "@react-native-firebase/auth";

export const useUserStore = create<UserStoreSchema>()((set) => ({
    user: null,
    isLoading: false,

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
                    isLoading: false,
                });
            })
            .catch((e) => {
                set({ loginError: e.message });
            });
    },
    signUp: async (credentials: Credentials) => {
        const { email, password } = credentials;
        set({ isLoading: true });
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                set({
                    user: {
                        uuid: res.user.uid,
                    },
                    isLoading: false,
                });
            })
            .catch((e) => {
                set({ loginError: e.message });
            });
    },
    signOut: async () => {
        set({ isLoading: true });
        await auth()
            .signOut()
            .then(() => {
                set({ isLoading: false });
            });
    },
    phoneSignIn: async (creds: PhoneCreds) => {
        set({ isLoading: true });
        const confirm = await auth().signInWithPhoneNumber(`${creds.selectedCountry?.callingCode} ${creds.phone}`);
        set({ isLoading: false });

        return confirm;
    },
    OTPConfirm: async function handleOTPConfirm(props: OTPProps) {
        set({ isLoading: true });
        await props.confirm
            .confirm(props.code)
            .then((res) => {
                set({
                    user: {
                        uuid: res?.user.uid as string,
                    },
                });
            })
            .catch
            //todo: add error handler
            ();
        set({ isLoading: false });
    },
}));
