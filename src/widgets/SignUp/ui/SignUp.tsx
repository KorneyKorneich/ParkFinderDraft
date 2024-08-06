import { KeyboardAvoidingView, Text } from "react-native";
import { useUserStore } from "@entities/user";
import { CustomInput, StyleGuide } from "@shared/ui";
import { CustomButton } from "@shared/ui";
import { styles } from "./SignIn.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface SignUpForm {
	email: string;
	password: string;
}

export const SignUp = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<SignUpForm>();

	const signUp = useUserStore((state) => state.signUp);

	const handleSignUp: SubmitHandler<SignUpForm> = async (data) => {
		await signUp({ email: data.email, password: data.password });
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
			<CustomButton title={"Sign Up"} onPress={handleSubmit(handleSignUp)} color={StyleGuide.GREEN} />
		</KeyboardAvoidingView>
	);
};
