import { ActivityIndicator, KeyboardAvoidingView, Text } from "react-native";
import { useUserStore } from "@entities/user";
import { CustomInput, StyleGuide } from "@shared/ui";
import { CustomButton } from "@shared/ui";
import { styles } from "./SignUp.style";
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
		setError,
	} = useForm<SignUpForm>();

	const signUp = useUserStore((state) => state.signUp);
	const isLoading = useUserStore((state) => state.isLoading);

	const handleSignUp: SubmitHandler<SignUpForm> = async (data) => {
		try {
			await signUp({ email: data.email, password: data.password });
		} catch (error: any) {
			if (error.code === "auth/email-already-in-use") {
				setError("email", { type: "manual", message: "Email is already in use" });
			} else if (error.code === "auth/invalid-email") {
				setError("email", { type: "manual", message: "Invalid email address" });
			} else if (error.code === "auth/weak-password") {
				setError("password", { type: "manual", message: "Password is too weak" });
			} else {
				setError("email", { type: "manual", message: "An unexpected error occurred" });
			}
		}
	};

	return (
		<>
			{isLoading ? (
				<ActivityIndicator size={"large"} color={StyleGuide.GREEN} />
			) : (
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
								incorrectValue={!!errors.email}
							/>
						)}
						rules={{
							required: "Email is required.",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Enter a valid Email.",
							},
						}}
					/>
					{errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

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
								incorrectValue={!!errors.password}
							/>
						)}
						rules={{
							required: "Password is required",
							minLength: { value: 6, message: "Enter min length is 6." },
						}}
					/>
					{errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

					<CustomButton title={"Sign Up"} onPress={handleSubmit(handleSignUp)} color={StyleGuide.GREEN} />
				</KeyboardAvoidingView>
			)}
		</>
	);
};
