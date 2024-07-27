import styles from "./SignIn.styles.ts";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { Button, SafeAreaView, Text, TextInput } from "react-native";

interface SignInProps {
}


export const SignIn = (props: SignInProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		const signIn = useUserStore(state => state.signIn);
		signIn({email, password});
	};
	return (
		<SafeAreaView>
			<Text>SignUp</Text>
			<TextInput value={email} placeholder={"email"} onChangeText={(text) => setEmail(text)}></TextInput>
			<TextInput value={password} placeholder={"password"} onChangeText={(text) => setPassword(text)}></TextInput>
			<Text>{email}</Text>
			<Text>{password}</Text>
			<Button title={"signUp"} onPress={handleSignIn}/>
		</SafeAreaView>
	);
};
