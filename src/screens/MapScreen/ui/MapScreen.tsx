import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { ParkingBottomSheet } from "@features/ParkingBottomSheet";
import { styles } from "./MapScreen.styles";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { getParkingsData } from "../api/getParkingsData";
import { ParkingInfModal } from "@features/ParkingInfModal";

export const MapScreen = () => {
    const [parkingData, setParkingData] = useState<ParkingSchema[]>();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [parkingInf, setParkingInf] = useState<ParkingInf>();

    useEffect(() => {
        const unsubscribe = getParkingsData(setParkingData);

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={styles.mapAreaScreen}>
            <SearchBar />
            {parkingData && (
                <>
                    <Map
                        isPositionNeed={false}
                        parkingData={parkingData}
                        setIsModalVisible={setModalVisible}
                        setParkingInf={setParkingInf}
                    />
                    <ParkingBottomSheet
                        nearestParkingData={parkingData}
                        setIsModalVisible={setModalVisible}
                        setParkingInf={setParkingInf}
                    />
                </>
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
