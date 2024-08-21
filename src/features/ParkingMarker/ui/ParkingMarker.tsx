import { LocationSchema } from "@shared/api";
import { CustomImage } from "@shared/ui";
import React from "react";
import { Marker } from "react-native-yamap";

const image = require("@shared/ui/assets/images/marker.png");

interface IParkingMarker {
    location: LocationSchema;
    onPress?: () => void;
}

export const ParkingMarker: React.FC<IParkingMarker> = ({ location, onPress }) => {
    return <Marker scale={0.8} point={location} children={<CustomImage path={image} />} onPress={onPress} />;
};
