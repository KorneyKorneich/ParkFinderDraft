import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { getLocation } from "@shared/lib";
import { setLocationType } from "@shared/api";
import { location } from "@shared/api";

export const requestLocationPermission = async (setLocation: setLocationType) => {
    if (Platform.OS === "ios") {
        const result = await Geolocation.requestAuthorization("whenInUse");
        if (result === "granted") {
            try {
                const location = (await getLocation()) as location;
                setLocation(location);
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
                const location = (await getLocation()) as location;
                setLocation(location);
            } catch (error) {
                //TODO: fill catch area with error logic
            }
        }
    }
};
