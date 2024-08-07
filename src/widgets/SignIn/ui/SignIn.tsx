import { KeyboardAvoidingView, Text, ActivityIndicator, View } from "react-native";
import { useUserStore } from "@entities/user";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";
import { styles } from "./SignIn.style";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { getFirebaseAuthErrorMessage } from "@shared/api";

interface SignInForm {
	email: string;
	password: string;
}

export const SignIn = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		setError,
	} = useForm<SignInForm>();

	const signIn = useUserStore((state) => state.signIn);
	const isLoading = useUserStore((state) => state.isLoading);

	const handleSignIn: SubmitHandler<SignInForm> = async (data) => {
		try {
			await signIn({ email: data.email, password: data.password });
		} catch (error) {
			const firebaseError = error as FirebaseError;
			const errorMessage = getFirebaseAuthErrorMessage(firebaseError);
			if (
				firebaseError.code === "auth/invalid-email" ||
				firebaseError.code === "auth/user-not-found" ||
				firebaseError.code === "auth/email-already-in-use"
			) {
				setError("email", { type: "manual", message: errorMessage });
			} else if (firebaseError.code === "auth/wrong-password" || firebaseError.code === "auth/weak-password") {
				setError("password", { type: "manual", message: errorMessage });
			} else {
				setError("email", { type: "manual", message: errorMessage });
			}
		}
	};

	return (
		<>
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
						minLength: {
							value: 6,
							message: "Min length is 6.",
						},
					}}
				/>
				{errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

				{isLoading ? (
					<ActivityIndicator size={"large"} color={StyleGuide.GREEN} />
				) : (
					<CustomButton title={"Sign In"} onPress={handleSubmit(handleSignIn)} color={StyleGuide.GREEN} />
				)}
			</KeyboardAvoidingView>
		</>
	);
};
