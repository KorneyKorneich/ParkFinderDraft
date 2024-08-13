import { View, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Map } from "@shared/ui";
import { SearchBar } from "@features/SearchBar";
import { AuthorizedStackParamList } from "@shared/api";

export const MapScreen = () => {
	const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();

	const handleNavigateToParkingList = () => {
		navigation.navigate("ParkListScreen");
	};

	return (
		<View>
			<SearchBar />
			<Map />
			<Button title="watch park list" onPress={handleNavigateToParkingList} />
		</View>
	);
};
