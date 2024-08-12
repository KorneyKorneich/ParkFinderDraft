import React, { useEffect, useRef, useState } from "react";
import { YaMap } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { useSetCurretLocationStore } from "@entities/user";
import { Nullable, ParkingInf, ParkingSchema } from "@shared/api";
import { ParkingMarker } from "@features/ParkingMarker";
import { ParkingInfModal } from "@shared/ui";
import { loadMarkers } from "../model/fetchAndLoadMarks";

interface Map {
    isPositionNeed: boolean;
}

export const Map: React.FC<Map> = ({ isPositionNeed }) => {
    const { currentLocation } = useSetCurretLocationStore();
    const [lastMarkerClickTimestamp, setLastMarkerClickTimestamp] = useState<number>(Date.now());
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [mapReady, setMapReady] = useState<boolean>(false);
    const [parkingInf, setParkingInf] = useState<ParkingInf>();
    const [markers, setMarkers] = useState<ParkingSchema[]>();
    const { location } = useSetlocationStore();
    const mapRef = useRef<Nullable<YaMap>>(null);

    useEffect(() => {
        if (mapRef.current && currentLocation) {
            mapRef.current.setCenter({ lat: currentLocation.lat, lon: currentLocation.lon }, 10, 0, 0);
        }
    }, [currentLocation, mapReady]);

    useEffect(() => {
        if (mapRef.current && location) {
            mapRef.current.setCenter({ lat: location.lat, lon: location.lon }, 10, 0, 0);
        }
    }, [location]);

    useEffect(() => {
        loadMarkers(setMarkers);
    }, []);

    const handlepPressOnMarker = (value: ParkingSchema) => {
        const now = Date.now();
        if (now - lastMarkerClickTimestamp < 300) return;
        setLastMarkerClickTimestamp(now);
        setParkingInf(value.parkingInf);
        setModalVisible(true);
    };

    return (
        <>
            {markers && (
                <YaMap
                    showUserPosition={isPositionNeed}
                    ref={mapRef}
                    style={styles.map}
                    onMapLoaded={() => setMapReady(true)}>
                    {mapReady &&
                        markers.length > 0 &&
                        markers.map((value) => {
                            return (
                                value.approvedStatus && (
                                    <ParkingMarker
                                        key={value.id}
                                        location={value.location}
                                        mapStatus={mapReady}
                                        onPress={() => handlepPressOnMarker(value)}
                                    />
                                )
                            );
                        })}
                </YaMap>
            )}
            {parkingInf && (
                <ParkingInfModal
                    setModalVisible={setModalVisible}
                    isModalVisible={isModalVisible}
                    parkingInf={parkingInf}
                />
            )}
        </>
    );
};
