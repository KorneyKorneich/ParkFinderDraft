import { location } from "@shared/api";
import { CustomImage } from "@shared/ui";
import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Marker } from "react-native-yamap";

const image = require("../../../shared/ui/assets/images/marker.png");

interface IParkingMarker {
	location: location;
	onPress: () => void;
	mapStatus: boolean;
}

export const ParkingMarker: React.FC<IParkingMarker> = ({ location, onPress, mapStatus }) => {
	const [markerImg, setMarkerImg] = useState<ImageSourcePropType>(image);

	useEffect(() => {
		setMarkerImg(image);
	}, [mapStatus]);

	return <Marker scale={0.8} point={location} children={<CustomImage path={markerImg} />} onPress={onPress} />;
};
