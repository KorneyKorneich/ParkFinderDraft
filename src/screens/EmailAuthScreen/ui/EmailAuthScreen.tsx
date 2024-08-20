import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DeviceMobile, FormSwitcher, Google, Logo } from "@shared/ui";
import { styles } from "./EmailAuthScreen.styles.ts";
import { SignUp } from "@widgets/SignUp";
import { SignIn } from "@widgets/SignIn";
import { UnauthorizedStackRoutesProps } from "@shared/api";
import { ROUTES } from "@shared/api";

export const EmailAuthScreen = ({ navigation }: UnauthorizedStackRoutesProps) => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleToSignUp = () => {
        setIsSignUp(true);
    };
    const handleToSignIn = () => {
        setIsSignUp(false);
    };
    const handleToPhoneAuth = () => {
        navigation.navigate(ROUTES.PhoneAuthScreen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.authScreenContainer}>
                <View style={styles.logoWrapper}>
                    <Logo />
                </View>
                <FormSwitcher
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
            </View>
        </SafeAreaView>
    );
};
