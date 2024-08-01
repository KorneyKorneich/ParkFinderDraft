import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";


export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = useUserStore(state => state.signIn);

	const handleSignIn = async () => {

		await signIn({email, password}).catch(e => console.log(e));
	};
	return (
		<KeyboardAvoidingView>
			<CustomInput title={"Email"} value={email} setValue={setEmail}/>
			<CustomInput title={"Password"} value={password} setValue={setPassword} isPassword/>
			<CustomButton title={"Sign In"} onPress={handleSignIn} color={StyleGuide.PRIMARY}/>
		</KeyboardAvoidingView>
	);
};

