import React, { useEffect, useRef } from "react";
import { YaMap, Geocoder } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { useSetCurretLocationStore } from "@entities/user";
import { Nullable } from "@shared/api";

export const Map = () => {
	const { currentLocation } = useSetCurretLocationStore();

	YaMap.init("e3aa0fd7-1107-4862-880b-4b79a4f6c93a");
	Geocoder.init("d2e70461-6197-4d29-9e81-2e3f21a44678");

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
