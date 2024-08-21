import Geolocation from "react-native-geolocation-service";
import { LocationSchema, Nullable } from "@shared/api";

type WatchLocationProp = (loc: Nullable<LocationSchema>, err: Nullable<Geolocation.GeoError>) => void;

export const watchLocation = (callback: WatchLocationProp) => {
    const watchId = Geolocation.watchPosition(
        (position) => {
            const location: LocationSchema = {
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
