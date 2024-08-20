import React, { useEffect, RefObject, useState } from "react";
import { YaMap, YaMapProps } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { ParkingMarker } from "@features/ParkingMarker";
import { DimensionValue } from "react-native";

interface MapProps extends YaMapProps {
    height?: DimensionValue;
    mapRef: RefObject<YaMap>;
    isPositionNeed: boolean;
    parkingData?: ParkingSchema[];
    setIsModalVisible?: (isModalVisible: boolean) => void;
    setParkingInf?: (parkingInf: ParkingInf) => void;
    pressable: boolean;
}

export const Map: React.FC<MapProps> = ({
    isPositionNeed,
    parkingData,
    setIsModalVisible,
    setParkingInf,
    height,
    mapRef,
    pressable,
    ...rest
}) => {
    const [lastMarkerClickTimestamp, setLastMarkerClickTimestamp] = useState<number>(Date.now());
    const [mapReady, setMapReady] = useState<boolean>(false);
    const [markers, setMarkers] = useState<ParkingSchema[]>();
    const { location } = useSetlocationStore();

    useEffect(() => {
        if (mapRef.current && location) {
            mapRef.current.setCenter({ lat: location.lat, lon: location.lon }, 10, 0, 0);
        }
    }, [location, mapReady]);

    useEffect(() => {
        setMarkers(parkingData);
    }, [parkingData]);

    return (
        <>
            {markers && (
                <YaMap
                    showUserPosition={isPositionNeed}
                    ref={mapRef}
                    style={[styles.map, height ? { height: height } : null]}
                    onMapLoaded={() => setMapReady(true)}
                    {...rest}>
                    {mapReady &&
                        markers.length > 0 &&
                        markers.map((value) => {
                            const handlePressOnMarker = () => {
                                const now = Date.now();
                                if (now - lastMarkerClickTimestamp < 300) return;
                                setLastMarkerClickTimestamp(now);
                                setParkingInf && setParkingInf(value.parkingInf);
                                setIsModalVisible && setIsModalVisible(true);
                            };
                            return (
                                value.approvedStatus &&
                                (pressable ? (
                                    <ParkingMarker
                                        key={value.id}
                                        location={value.location}
                                        onPress={handlePressOnMarker}
                                    />
                                ) : (
                                    <ParkingMarker key={value.id} location={value.location} />
                                ))
                            );
                        })}
                </YaMap>
            )}
        </>
    );
};
