import React, { RefObject, useEffect } from "react";
import { YaMap, YaMapProps } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { useSetCurretLocationStore } from "@entities/user";

interface MapProps extends YaMapProps {
    height?: number;
    mapRef: RefObject<YaMap>;
}

export const Map = ({ height, mapRef, ...rest }: MapProps) => {
    const { currentLocation } = useSetCurretLocationStore();

    const { location } = useSetlocationStore();

    useEffect(() => {
        if (mapRef.current && currentLocation) {
            mapRef.current.setCenter({ lat: currentLocation.lat, lon: currentLocation.lon }, 10, 0, 0);
        }
    }, [currentLocation]);
    useEffect(() => {
        if (mapRef.current && location) {
            mapRef.current.setCenter({ lat: location.lat, lon: location.lon }, 10, 0, 0);
        }
    }, [location]);

    return (
        <YaMap
            rotateGesturesEnabled={false}
            {...rest}
            mapType={"vector"}
            ref={mapRef}
            style={[styles.map, { height }]}></YaMap>
    );
};
