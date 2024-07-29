import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";

interface SignUpProps {
}


export const SignIn = (props: SignUpProps) => {
	const {} = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = useUserStore(state => state.signIn);

	const handleSignIn = () => {
		signIn({email, password});
	};
	return (
		<KeyboardAvoidingView>
			<CustomInput title={"Email"} value={email} setValue={setEmail}/>
			<CustomInput title={"Password"} value={password} setValue={setPassword} isPassword/>
			<CustomButton title={"Sign In"} onPress={handleSignIn} color={StyleGuide.GREEN}/>
		</KeyboardAvoidingView>
	);
};

