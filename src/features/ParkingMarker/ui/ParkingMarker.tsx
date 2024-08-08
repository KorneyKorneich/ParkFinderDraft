import { location } from "@shared/api";
import { CustomImage } from "@shared/ui";
import React from "react";
import { Marker } from "react-native-yamap";

interface IParkingMarker {
    location: location;
	onPress: () => void; 
}

export const ParkingMarker: React.FC<IParkingMarker> = ({ location, onPress }) => {
	const markerImg = require("../../../shared/ui/assets/images/marker.png");
	return (
		<Marker 
			scale={0.8}
			point={location}
			children={
				<CustomImage path={markerImg}/>
			}
			onPress={onPress}
		/>
	);
};

