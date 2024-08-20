import Geolocation from "react-native-geolocation-service";
import { location, Nullable } from "@shared/api";

type WatchLocationProp = (loc: Nullable<location>, err: Nullable<Geolocation.GeoError>) => void;

export const watchLocation = (callback : WatchLocationProp) => {
    const watchId = Geolocation.watchPosition(
        (position) => {
            const location: location = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            };
            callback(location, null);
        },
        (error) => {
            callback(null, error);
        },
        { enableHighAccuracy: true }
    );

    return () => {
        Geolocation.clearWatch(watchId);
    };
};
