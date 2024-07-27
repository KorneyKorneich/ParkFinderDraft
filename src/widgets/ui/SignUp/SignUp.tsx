import styles from "./SignUp.styles.ts";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";

interface SignUpProps {
}


export const SignUp = (props: SignUpProps) => {
	const {} = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = () => {
		const signUp = useUserStore(state => state.signUp);
		signUp({email, password});
	};
	return (
		<SafeAreaView>
			<Text>SignUp</Text>
			<TextInput value={email} placeholder={"email"} onChangeText={(text) => setEmail(text)}></TextInput>
			<TextInput value={password} placeholder={"password"} onChangeText={(text) => setPassword(text)}></TextInput>
			<Text>{email}</Text>
			<Text>{password}</Text>
			<Button title={"signUp"} onPress={handleSignUp}/>
		</SafeAreaView>
	);
};
