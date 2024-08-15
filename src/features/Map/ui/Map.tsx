import React, { useEffect, useRef, useState } from "react";
import { YaMap } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { Nullable, ParkingInf, ParkingSchema } from "@shared/api";
import { ParkingMarker } from "@features/ParkingMarker";

interface Map {
    isPositionNeed: boolean;
    parkingData: ParkingSchema[];
    setIsModalVisible?: (isModalVisible: boolean) => void;
    setParkingInf?: (parkingInf: ParkingInf) => void;
}

export const Map: React.FC<Map> = ({ isPositionNeed, parkingData, setIsModalVisible, setParkingInf }) => {
    const [lastMarkerClickTimestamp, setLastMarkerClickTimestamp] = useState<number>(Date.now());
    const [mapReady, setMapReady] = useState<boolean>(false);
    const [markers, setMarkers] = useState<ParkingSchema[]>();
    const { location } = useSetlocationStore();
    const mapRef = useRef<Nullable<YaMap>>(null);

    useEffect(() => {
        if (mapRef.current && location) {
            mapRef.current.setCenter({ lat: location.lat, lon: location.lon }, 10, 0, 0);
        }
    }, [location, mapReady]);

    useEffect(() => {
        setMarkers(parkingData);
    }, [parkingData]);

    const handlepPressOnMarker = (value: ParkingSchema) => {
        const now = Date.now();
        if (now - lastMarkerClickTimestamp < 300) return;
        setLastMarkerClickTimestamp(now);
        setParkingInf && setParkingInf(value.parkingInf);
        setIsModalVisible && setIsModalVisible(true);
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
                                        onPress={() => handlepPressOnMarker(value)}
                                    />
                                )
                            );
                        })}
                </YaMap>
            )}
        </>
    );
};
