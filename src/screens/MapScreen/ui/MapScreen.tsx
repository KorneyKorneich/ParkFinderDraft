import { SafeAreaView } from "react-native";
import React from "react";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { NearestParkingModal } from "@features/NearestParkingModal";
import { styles } from "./MapScreen.styles";

export const MapScreen = () => {
    return (
        <SafeAreaView style={styles.mapAreaScreen}>
            <SearchBar />
            <Map isPositionNeed={false} />
            <NearestParkingModal />
        </SafeAreaView>
    );
};
