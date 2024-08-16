import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { Nullable, ParkingInf, ParkingSchema } from "@shared/api";
import { getParkingsData } from "../api/getParkingsData";
import { ParkingInfModal } from "@features/ParkingInfModal";
import YaMap from "react-native-yamap";

export const MapScreen = () => {
    const [parkingData, setParkingData] = useState<ParkingSchema[]>();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [parkingInf, setParkingInf] = useState<ParkingInf>();
    const mapRef = useRef<Nullable<YaMap>>(null);

    useEffect(() => {
        const unsubscribe = getParkingsData(setParkingData);

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView>
            <SearchBar />
            {parkingData && (
                <Map
                    mapRef={mapRef}
                    isPositionNeed={false}
                    parkingData={parkingData}
                    setIsModalVisible={setModalVisible}
                    setParkingInf={setParkingInf}
                    pressable={true}
                />
            )}
            {parkingInf && (
                <ParkingInfModal
                    setModalVisible={setModalVisible}
                    isModalVisible={isModalVisible}
                    parkingInf={parkingInf}
                />
            )}
        </SafeAreaView>
    );
};
