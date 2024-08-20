import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { ParkingBottomSheet } from "@features/ParkingBottomSheet";
import { styles } from "./MapScreen.styles";
import { Nullable, ParkingInf, ParkingSchema } from "@shared/api";
import { getParkingsData } from "../api/getParkingsData";
import { ParkingInfModal } from "@features/ParkingInfModal";
import YaMap from "react-native-yamap";
import { SIZES } from "@shared/ui";

const userLocationImg = require("@shared/ui/assets/images/current-location.png");

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
        <SafeAreaView style={styles.mapAreaScreen}>
            <SearchBar />
            {parkingData && (
                <>
                    <Map
                        mapRef={mapRef}
                        parkingData={parkingData}
                        setIsModalVisible={setModalVisible}
                        setParkingInf={setParkingInf}
                        pressable={true}
                        height={SIZES.HEIGHT}
                        userLocationIcon={userLocationImg}
                        userLocationIconScale={2.3}
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
