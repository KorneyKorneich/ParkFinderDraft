import { View, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@shared/api";
import { Map } from "@shared/ui";
import { ControlledInput } from "@features/index";


export const MapScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<View>
			<ControlledInput />
			<Map />
			<Button title='watch park list' onPress={() => navigation.navigate("ParkListScreen")} />
		</View>
	);
};

