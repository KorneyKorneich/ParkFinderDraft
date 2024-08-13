import Geolocation from "react-native-geolocation-service";
import { currentLocation } from "@shared/api";

export const getLocation = () => {
    return new Promise((resolve) => {
        Geolocation.getCurrentPosition(
            (position) => {
                const location: currentLocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                };
                resolve(location);
            },
            () => {
                resolve(null);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    });
};
