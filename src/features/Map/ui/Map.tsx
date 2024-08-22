import React, { useEffect, RefObject, useState } from "react";
import { YaMap, YaMapProps } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { ParkingMarker } from "@features/ParkingMarker";
import { DimensionValue } from "react-native";
import { CurrentLocationBtn } from "./components/CurrentLocationBtn/ui/CurrentLocationBtn";
import { useParkingsStore } from "@entities/parkings";

interface MapProps extends YaMapProps {
    height?: DimensionValue;
    mapRef: RefObject<YaMap>;
    setIsModalVisible?: (isModalVisible: boolean) => void;
    setParkingInf?: (parkingInf: ParkingInf) => void;
    pressable: boolean;
}

export const Map: React.FC<MapProps> = ({ setIsModalVisible, setParkingInf, height, mapRef, pressable, ...rest }) => {
    const [lastMarkerClickTimestamp, setLastMarkerClickTimestamp] = useState<number>(Date.now());
    const [mapReady, setMapReady] = useState<boolean>(false);
    const [markers, setMarkers] = useState<ParkingSchema[]>();
    const { location } = useSetlocationStore();
    const { parkingsMarkers } = useParkingsStore();

    useEffect(() => {
        if (mapRef.current && location && mapReady) {
            mapRef.current.setCenter({ lat: location.lat, lon: location.lon }, 18, 0, 0, 1);
        }
    }, [location, mapReady]);

    useEffect(() => {
        parkingsMarkers && setMarkers(parkingsMarkers);
    }, [parkingsMarkers]);

    return (
        <>
            {markers && (
                <YaMap
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
            <CurrentLocationBtn />
        </>
    );
};
