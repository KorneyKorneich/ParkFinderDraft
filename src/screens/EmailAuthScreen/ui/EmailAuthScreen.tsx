import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DeviceMobile, Google, Logo, Switcher } from "@shared/ui";
import { styles } from "./EmailAuthScreen.styles.ts";
import { SignUp } from "@widgets/SignUp";
import { SignIn } from "@widgets/SignIn";
import { UnauthorizedStackParamList } from "@shared/api";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

type EmailAuthScreenProps = NativeStackScreenProps<UnauthorizedStackParamList, "EmailAuthScreen">;

export const EmailAuthScreen = ({ navigation }: EmailAuthScreenProps) => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleToSignUp = () => {
        setIsSignUp(true);
    };
    const handleToSignIn = () => {
        setIsSignUp(false);
    };
    const handleToPhoneAuth = () => {
        navigation.navigate("PhoneAuthScreen");
    };

    return (
        <SafeAreaView style={styles.authScreenContainer}>
            <View style={styles.logoWrapper}>
                <Logo />
            </View>
            <Switcher
                optionToggle={isSignUp}
                firstOptionTitle={"Sign Up"}
                secondOptionTitle={"Sign In"}
                handleOnFirstOptionPress={handleToSignUp}
                handleOnSecondOptionPress={handleToSignIn}
            />
            {isSignUp ? <SignUp /> : <SignIn />}
            <View style={styles.bottomOptions}>
                <View style={styles.separator}>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.separatorText}>Or</Text>
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.authWithGoogle}>
                        <Google />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authWithPhone} onPress={handleToPhoneAuth}>
                        <DeviceMobile />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
