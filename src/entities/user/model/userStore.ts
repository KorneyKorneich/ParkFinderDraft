import { create } from "zustand";
import {Credentials, UserStoreSchema} from "./userStore.cfg.ts";
import {FIREBASE_AUTH} from "@shared";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";


export const useUserStore = create<UserStoreSchema>()((set) => ({
	user: null,
	isLoggedIn: false,

	signIn: async (credentials: Credentials) => {
		const { email, password } = credentials;
		await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
			.then((res) => {
				set({
					user: {
						email,
						uuid: res.user.uid
					},
					isLoggedIn: true,

				});
			})
			.catch((e) => {
				set({loginError: e.message});
			});
	},
	signUp: async (credentials: Credentials) => {
		const { email, password } = credentials;
		await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
			.then((res) => {
				set({
					user:{
						email,
						uuid: res.user.uid
					},
					isLoggedIn: true,
				});
				console.log(res);
			})
			.catch((e) => {
				set({loginError: e.message});
			});
	}
}));

