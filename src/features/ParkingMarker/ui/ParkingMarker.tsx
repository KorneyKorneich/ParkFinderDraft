import { location, ParkingInf } from "@shared/api";
import { CustomImage } from "@shared/ui";
import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Marker } from "react-native-yamap";

interface IParkingMarker {
	location: location;
	onPress: () => void;
	parkingInf: ParkingInf;
	mapStatus: boolean;
}

export const ParkingMarker: React.FC<IParkingMarker> = ({ location, onPress, parkingInf, mapStatus }) => {
	const [markerImg, setMarkerImg] = useState<ImageSourcePropType>(
		require("../../../shared/ui/assets/images/marker.png")
	);

	useEffect(() => {
		const image = require("../../../shared/ui/assets/images/marker.png");
		setMarkerImg(image);
	}, [mapStatus]);

	return <Marker scale={0.8} point={location} children={<CustomImage path={markerImg} />} onPress={onPress} />;
};
