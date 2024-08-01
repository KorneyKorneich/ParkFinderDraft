import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {RootStackParamList} from "@shared/api";
import { Map } from "@shared/ui";

const MapScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<View>
			<Text>MapScreen</Text>
			<Button title='watch park list' onPress={() => navigation.navigate("ParkListScreen")} />
		</View>
	);
};

export default MapScreen;
