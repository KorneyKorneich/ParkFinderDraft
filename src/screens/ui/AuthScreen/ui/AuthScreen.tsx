import { Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {RootStackParamList} from "@shared";
import { SignUp } from "../../../../widgets/ui/SignUp/SignUp.tsx";

const AuthScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<SafeAreaView>
			<Text>AuthScreen</Text>
			<SignUp />
		</SafeAreaView>
	);
};

export default AuthScreen;


