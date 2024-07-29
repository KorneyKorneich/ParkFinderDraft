import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DeviceMobile, Google, Logo } from "@shared/ui";
import {styles} from "./AuthScreen.styles.ts";
import { SignUp } from "@widgets/SignUp";
import { SignIn } from "@widgets/SignIn/SignIn.tsx";


export const AuthScreen = () => {
	const [isSignUp, setIsSignUp] = useState(true);

	function handleToSignUp(){
		setIsSignUp(true);
	}
	function handleToSignIn() {
		setIsSignUp(false);
	}

	return (
		<SafeAreaView style={styles.authScreenContainer}>
			<View style={styles.logoWrapper}>
				<Logo />
			</View>
			<View style={styles.switcher}>
				<TouchableOpacity onPress={handleToSignUp} style={[styles.signUp, isSignUp ? styles.active : null]}>
					<Text style={[styles.signUpText, isSignUp ? styles.textActive : null ]}>Sign Up</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleToSignIn} style={[styles.signIn, !isSignUp ? styles.active : null]}>
					<Text style={[styles.signInText, !isSignUp ? styles.textActive : null ]}>Sign In</Text>
				</TouchableOpacity>
			</View>
			{ isSignUp ? <SignUp /> : <SignIn />}
			<View style={styles.bottomOptions}>
				<View style={ styles.separator}>
					<View style={styles.line} />
					<View>
						<Text style={styles.separatorText}>Or</Text>
					</View>
					<View style={styles.line} />
				</View>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity style={styles.authWithGoogle} >
						<Google />
					</TouchableOpacity>
					<TouchableOpacity style={styles.authWithPhone} >
						<DeviceMobile />
					</TouchableOpacity>
				</View>

			</View>
		</SafeAreaView>
	);
};

