import { KeyboardAvoidingView, Text } from "react-native";
import { useUserStore } from "@entities/user";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";
import { styles } from "./SignIn.style";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

interface SignInForm {
	email: string;
	password: string;
}

export const SignIn = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<SignInForm>();
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const signIn = useUserStore((state) => state.signIn);

	const handleSignIn: SubmitHandler<SignInForm> = async (data) => {
		console.log(data);
		await signIn({ email: data.email, password: data.password }).catch();
		//todo: add  error handler
	};

	return (
		<KeyboardAvoidingView>
			<Controller
				name={"email"}
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<CustomInput
						title={"Email"}
						value={value}
						onChangeText={onChange}
						boxStyle={styles.textInputBox}
						onBlur={onBlur}
					/>
				)}
				rules={{
					required: true,
					pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				}}
			/>

			{errors.email && <Text>Enter the valid Email</Text>}

			<Controller
				name={"password"}
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<CustomInput
						title={"Password"}
						value={value}
						onBlur={onBlur}
						onChangeText={onChange}
						boxStyle={styles.textInputBox}
						isPassword
					/>
				)}
				rules={{
					required: true,
					minLength: 6,
				}}
			/>

			{errors.password && <Text>Min length is 6</Text>}

			<CustomButton title={"Sign In"} onPress={handleSubmit(handleSignIn)} color={StyleGuide.GREEN} />
		</KeyboardAvoidingView>
	);
};
