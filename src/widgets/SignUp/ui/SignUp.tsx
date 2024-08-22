import { ActivityIndicator, KeyboardAvoidingView, Text } from "react-native";
import { useUserStore } from "@entities/user";
import { CustomInput, StyleGuide, CustomButton } from "@shared/ui";
import { styles } from "./SignUp.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { getFirebaseAuthErrorMessage } from "@shared/api";
import { useState } from "react";
import * as Keychain from "react-native-keychain";

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

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisible = () => setIsPasswordVisible(!isPasswordVisible);

    const handleSignUp: SubmitHandler<SignUpForm> = async (data) => {
        try {
            await signUp({ email: data.email, password: data.password });
            await Keychain.setGenericPassword(data.email, data.password);
        } catch (error) {
            const firebaseError = error as FirebaseError;
            const errorMessage = getFirebaseAuthErrorMessage(firebaseError);

            if (firebaseError.code === "auth/email-already-in-use" || firebaseError.code === "auth/invalid-email") {
                setError("email", { type: "manual", message: errorMessage });
            } else if (firebaseError.code === "auth/weak-password") {
                setError("password", { type: "manual", message: errorMessage });
            } else {
                setError("email", { type: "manual", message: errorMessage });
                setError("password", { type: "manual", message: errorMessage });
            }
        }
    };

    return (
        <KeyboardAvoidingView>
            <Controller
                name="email"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                        title="Email"
                        value={value}
                        onChangeText={onChange}
                        boxStyle={styles.textInputBox}
                        inputStyles={styles.inputStyles}
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
                name="password"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                        title="Password"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        boxStyle={styles.textInputBox}
                        inputStyles={styles.inputStyles}
                        isPassword
                        incorrectValue={!!errors.password}
                        passwordVisible={isPasswordVisible}
                        togglePasswordVisible={togglePasswordVisible}
                    />
                )}
                rules={{
                    required: "Password is required.",
                    minLength: { value: 6, message: "Password must be at least 6 characters long." },
                }}
            />
            {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

            {isLoading ? (
                <ActivityIndicator size="large" color={StyleGuide.GREEN} />
            ) : (
                <CustomButton title="Sign Up" onPress={handleSubmit(handleSignUp)} color={StyleGuide.GREEN} />
            )}
        </KeyboardAvoidingView>
    );
};
