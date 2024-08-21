import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { getLocation } from "@shared/lib";
import { setLocationType } from "@shared/api";
import { location } from "@shared/api";

export const requestLocationPermission = async (setLocation: setLocationType, setCurrentLocation: setLocationType) => {
    if (Platform.OS === "ios") {
        const result = await Geolocation.requestAuthorization("whenInUse");
        if (result === "granted") {
            const location = (await getLocation()) as location;
            setLocation(location);
        }
    } else if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const location = (await getLocation()) as location;
            setLocation(location);
            setCurrentLocation(location);
        }
    }
};
