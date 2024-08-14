import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { getLocation } from "@shared/lib";
import { currentLocation, setCurrentLocation } from "@shared/api";

export const requestLocationPermission = async (setCurrentLocation: setCurrentLocation) => {
    if (Platform.OS === "ios") {
        const result = await Geolocation.requestAuthorization("whenInUse");
        if (result === "granted") {
            try {
                const location = (await getLocation()) as currentLocation;
                console.log("location", location);
                setCurrentLocation(location);
            } catch (error) {
                console.error(error);
            }
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
            try {
                const location = (await getLocation()) as currentLocation;
                setCurrentLocation(location);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
