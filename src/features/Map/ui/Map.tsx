import React, { useEffect, useRef } from "react";
import { YaMap, Geocoder } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { useSetCurretLocationStore } from "@entities/user";
import { Nullable } from "@shared/api";

export const Map = () => {
    const { currentLocation } = useSetCurretLocationStore();

    YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);
    Geocoder.init(process.env.REACT_NATIVE_APP_GEOCODER_API_KEY as string);

    const { location } = useSetlocationStore();

    const mapRef = useRef<Nullable<YaMap>>(null);

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

    return <YaMap ref={mapRef} style={styles.map}></YaMap>;
};
