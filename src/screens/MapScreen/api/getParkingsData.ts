import firestore from "@react-native-firebase/firestore";
import { ParkingSchema } from "@shared/api";

interface ISetParkingData {
    (parkingData: ParkingSchema[]): void;
}

export const getParkingsData = (setParkingData: ISetParkingData) => {
    const unsubscribe = firestore()
        .collection("parkingSpots")
        .onSnapshot((querySnapshot) => {
            const parkingSpots: ParkingSchema[] = [];

            querySnapshot.forEach((documentSnapshot) => {
                const data = documentSnapshot.data() as ParkingSchema;
                parkingSpots.push(data);
            });

            setParkingData(parkingSpots);
        });

    return unsubscribe; 
};