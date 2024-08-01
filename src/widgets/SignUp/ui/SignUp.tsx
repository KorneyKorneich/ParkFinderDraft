import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { CustomInput, StyleGuide } from "@shared/ui";
import { CustomButton } from "@shared/ui/Components/CustomButton/ui/CustomButton.tsx";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signUp = useUserStore(state => state.signUp);

	const handleSignUp = () => {
		signUp({email, password});
	};
	return (
		<KeyboardAvoidingView>
			<CustomInput title={"Email"} value={email} setValue={setEmail}/>
			<CustomInput title={"Password"} value={password} setValue={setPassword} isPassword/>
			<CustomButton title={"Sign Up"} onPress={handleSignUp} color={StyleGuide.PRIMARY}/>
		</KeyboardAvoidingView>
	);
};
