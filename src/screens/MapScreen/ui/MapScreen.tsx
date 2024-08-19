import { View } from "react-native";
import React, { useRef } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SearchBar } from "@features/SearchBar";
import { AuthorizedStackParamList, ROUTES } from "@shared/api";
import { Map } from "@features/Map";
import { styles } from "./MapScreen.styles.ts";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts.ts";
import { YaMap } from "react-native-yamap";

export const MapScreen = () => {
    const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();
    const mapRef = useRef<YaMap>(null);

    const handleNavigateToParkingList = () => {
        navigation.navigate(ROUTES.ParkListScreen);
    };

    return (
        <View>
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <Map mapRef={mapRef} height={SIZES.HEIGHT} />
        </View>
    );
};
