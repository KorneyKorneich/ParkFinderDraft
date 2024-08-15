import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { CustomInput, StyleGuide } from "@shared/ui";
import { CustomButton } from "@shared/ui";
import { styles } from "./SignIn.style";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = useUserStore((state) => state.signUp);

    const handleSignUp = () => {
        signUp({ email, password });
    };
    return (
        <KeyboardAvoidingView>
            <CustomInput title={"Email"} value={email} onChangeText={setEmail} boxStyle={styles.textInputBox} />
            <CustomInput
                title={"Password"}
                value={password}
                onChangeText={setPassword}
                boxStyle={styles.textInputBox}
                isPassword
            />
            <CustomButton title={"Sign Up"} onPress={handleSignUp} color={StyleGuide.GREEN} />
        </KeyboardAvoidingView>
    );
};
