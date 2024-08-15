import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { NearestParkingModal } from "@features/NearestParkingModal";
import { styles } from "./MapScreen.styles";
import { ParkingSchema } from "@shared/api";
import { getParkingsData } from "../api/getParkingsData";

export const MapScreen = () => {
    const [parkingData, setParkingData] = useState<ParkingSchema[]>();

    useEffect(() => {
        const unsubscribe = getParkingsData(setParkingData);

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={styles.mapAreaScreen}>
            <SearchBar />
            {parkingData && (
                <>
                    <Map isPositionNeed={false} parkingData={parkingData} />
                    <NearestParkingModal nearestParkingData={parkingData}/>
                </>
            )}
        </SafeAreaView>
    );
};
