import { View } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SearchBar } from "@features/SearchBar";
import { AuthorizedStackParamList, ROUTES } from "@shared/api";
import { Map } from "@features/Map";
import { styles } from "./MapScreen.styles.ts";

export const MapScreen = () => {
    const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();

    const handleNavigateToParkingList = () => {
        navigation.navigate(ROUTES.ParkListScreen);
    };

    return (
        <View>
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>

            <Map />
        </View>
    );
};
