import { setLocationType } from "@shared/api";
import { Geocoder } from "react-native-yamap";

export const initMapAndSearch = async (searchValue: string, setLocation: setLocationType) => {
    try {
        const result = await Geocoder.addressToGeo(searchValue);
        if (result) {
            setLocation(result);
            return 1;
        } else {
            setLocation(null);
            return 0;
        }
    } catch (error) {
        setLocation(null);
        return 0;
    }
};
