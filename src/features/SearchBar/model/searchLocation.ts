import { setLocationType } from "@shared/api";
import { Geocoder } from "react-native-yamap";

export const initMapAndSearch = async (searchValue: string, setLocation: setLocationType) => {
    try {
        const result = await Geocoder.addressToGeo(searchValue);
        if (result) {
            console.log(result);
            setLocation(result);
        } else {
            setLocation(null);
        }
    } catch (error) {
        console.log(error);
        setLocation(null);
    }
};
