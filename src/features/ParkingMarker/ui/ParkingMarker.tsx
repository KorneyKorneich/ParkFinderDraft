import { LocationSchema } from "@shared/api";
import { ParkingIcon } from "@shared/ui";
import React from "react";
import { Marker } from "react-native-yamap";

interface IParkingMarker {
    location: LocationSchema;
    onPress?: () => void;
}

export const ParkingMarker: React.FC<IParkingMarker> = ({ location, onPress }) => {
    return <Marker scale={0.8} point={location} children={<ParkingIcon height={30} width={30} />} onPress={onPress} />;
};
