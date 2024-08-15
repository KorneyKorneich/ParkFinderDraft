import styles from "./OTPVerification.styles.ts";
import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import { CustomButton, StyleGuide, VerificationImg } from "@shared/ui";
import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { useUserStore } from "@entities/user";
import { UnauthorizedStackRoutesProps } from "@shared/api";

export const OTPVerification = ({ navigation, route }: UnauthorizedStackRoutesProps) => {
    const { confirmation } = route.params;

    const [code, setCode] = useState("");

    const confirm = confirmation;

    const OTPConfirm = useUserStore((state) => state.OTPConfirm);
    const handleOTPConfirm = () => {
        confirm ? OTPConfirm({ confirm, code }) : navigation.goBack();
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={"height"} style={styles.container}>
                <View style={styles.img}>
                    <VerificationImg height={200} width={200} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Enter verification code</Text>
                    <Text style={styles.text}>We are automatically detecting SMS </Text>
                    <Text style={styles.text}>sent to your mobile phone number </Text>
                </View>

                <View style={styles.OTPInput}>
                    <OtpInput onTextChange={(text) => setCode(text)} numberOfDigits={6} focusColor={StyleGuide.GREEN} />
                </View>
                <View style={styles.OTPConfirm}>
                    <CustomButton title={"Confirm"} onPress={handleOTPConfirm} color={StyleGuide.GREEN} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
