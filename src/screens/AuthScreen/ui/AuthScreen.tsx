import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {RootStackParamList} from "@shared";

const AuthScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<View>
			<Text>AuthScreen</Text>
			<Button title='onMainPage' onPress={() => navigation.navigate("DrawerNavigator")} />
		</View>
	);
};

export default AuthScreen;
