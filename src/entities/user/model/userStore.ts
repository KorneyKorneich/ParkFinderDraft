import { create } from "zustand";
import {Credentials, UserStoreSchema} from "./userStore.cfg.ts";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { FIREBASE_AUTH } from "@shared/api";


export const useUserStore = create<UserStoreSchema>()((set) => ({
	user: null,
	isLoggedIn: false,
	isLoading: false,

	signIn: async (credentials: Credentials) => {
		const { email, password } = credentials;
		set({isLoading: true});
		console.log("signIn");
		await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
			.then((res) => {
				set({
					user: {
						email,
						uuid: res.user.uid
					},
					isLoggedIn: true,
					isLoading: false
				});
			})
			.catch((e) => {
				set({loginError: e.message});
			});
	},
	signUp: async (credentials: Credentials) => {
		const { email, password } = credentials;
		set({isLoading: true});
		await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
			.then((res) => {
				set({
					user:{
						email,
						uuid: res.user.uid
					},
					isLoggedIn: true,
					isLoading: false
				});
				console.log(res);
			})
			.catch((e) => {
				set({loginError: e.message});
			});
	},
	signOut: async() => {
		set({isLoading: true});
		await signOut(FIREBASE_AUTH)
			.then(() => {set({isLoading: false, isLoggedIn: false});});
	}
}));

