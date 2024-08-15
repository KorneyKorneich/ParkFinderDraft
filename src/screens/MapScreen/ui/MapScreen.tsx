import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { ParkingSchema } from "@shared/api";
import { getParkingsData } from "../api/getParkingsData";

export const MapScreen = () => {
    const [parkingData, setParkingData] = useState<ParkingSchema[]>();

    useEffect(() => {
        const unsubscribe = getParkingsData(setParkingData);

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView>
            <SearchBar />
            {parkingData && <Map isPositionNeed={false} parkingData={parkingData} />}
        </SafeAreaView>
    );
};
