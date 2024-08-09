import React, { useEffect, useRef, useState } from "react";
import { YaMap, Geocoder } from "react-native-yamap";
import { styles } from "./Map.styles";
import { useSetlocationStore } from "@entities/user";
import { useSetCurretLocationStore } from "@entities/user";
import { Nullable, ParkingInf, ParkingSchema } from "@shared/api";
import { ParkingMarker } from "@features/ParkingMarker";

//TODO: dont forget to remove this
import { locationArr } from "../locationArr";
import { ParkingInfModal } from "@shared/ui";

export const Map = () => {
	const { currentLocation } = useSetCurretLocationStore();
	const [lastMarkerClickTimestamp, setLastMarkerClickTimestamp] = useState<number>(Date.now());
	const [isModalVisible, setModalVisible] = useState<boolean>(false);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [parkingInf, setParkingInf] = useState<ParkingInf>();
	const [markers, setMarkers] = useState<ParkingSchema[]>();
	const { location } = useSetlocationStore();
	const mapRef = useRef<Nullable<YaMap>>(null);

	YaMap.init("e3aa0fd7-1107-4862-880b-4b79a4f6c93a");
	Geocoder.init("d2e70461-6197-4d29-9e81-2e3f21a44678");

	const fetchMarkers = async () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(locationArr);
			}, 1000);
		});
	};

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

	useEffect(() => {
		const loadMarkers = async () => {
			const data = (await fetchMarkers()) as ParkingSchema[];
			setMarkers(data);
		};
		loadMarkers();
	}, [mapReady]);

	const handlepPressOnMarker = (value: ParkingSchema) => {
		const now = Date.now();
		if (now - lastMarkerClickTimestamp < 300) return;
		setLastMarkerClickTimestamp(now);
		setParkingInf(value.parkingInf);
		setModalVisible(true);
		console.log(value.id);
	};

	return (
		<>
			<YaMap ref={mapRef} style={styles.map} onMapLoaded={() => setMapReady(true)}>
				{markers &&
					mapReady &&
					markers.map((value) => {
						return (
							value.approvedStatus && (
								<ParkingMarker
									key={value.id}
									location={value.location}
									mapStatus={mapReady}
									parkingInf={value.parkingInf}
									onPress={() => handlepPressOnMarker(value)}
								/>
							)
						);
					})}
			</YaMap>
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
