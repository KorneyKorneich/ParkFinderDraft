import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useUserStore } from "@entities/user";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";
import { styles } from "./SignIn.style";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = useUserStore((state) => state.signIn);

    const handleSignIn = async () => {
        await signIn({ email, password })
            .catch
            //todo: add error handler
            ();
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
            <CustomButton title={"Sign In"} onPress={handleSignIn} color={StyleGuide.GREEN} />
        </KeyboardAvoidingView>
    );
};
