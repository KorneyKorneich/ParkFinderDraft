import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Map } from "@features/Map";
import { SearchBar } from "@features/SearchBar";
import { ParkingBottomSheet } from "@features/ParkingBottomSheet";
import { styles } from "./MapScreen.styles";
import { Nullable, ParkingInf } from "@shared/api";
import { ParkingInfModal } from "@features/ParkingInfModal";
import YaMap from "react-native-yamap";
import { SIZES } from "@shared/ui";
import { useParkingsStore } from "@entities/parkings";
import { useSetlocationStore } from "@entities/user";

export const MapScreen = () => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [parkingInf, setParkingInf] = useState<ParkingInf>();
    const mapRef = useRef<Nullable<YaMap>>(null);
    const { parkingsMarkers } = useParkingsStore();
    const { setLocation, currentLocation } = useSetlocationStore();

    useEffect(() => {
        setLocation(currentLocation);
    }, []);

    return (
        <SafeAreaView style={styles.mapAreaScreen}>
            <SearchBar />
            {parkingsMarkers && (
                <Map
                    mapRef={mapRef}
                    setIsModalVisible={setModalVisible}
                    setParkingInf={setParkingInf}
                    pressable={true}
                    height={SIZES.HEIGHT}
                    userLocationIconScale={2.3}
                />
            )}
            <ParkingBottomSheet setIsModalVisible={setModalVisible} setParkingInf={setParkingInf} />
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
