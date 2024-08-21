import firestore from "@react-native-firebase/firestore";
import { ParkingSchema } from "@shared/api";
import { useParkingsStore } from "@entities/parkings";

interface ISetParkingData {
    (value: ParkingSchema[]): void;
}

export const getParkingsData = (setParkingsMarkers: ISetParkingData) => {
    const unsubscribe = firestore()
        .collection("parkingSpots")
        .onSnapshot((querySnapshot) => {
            if (!querySnapshot) {
                return;
            }

            const parkingSpots: ParkingSchema[] = [];

            querySnapshot.forEach((documentSnapshot) => {
                const data = documentSnapshot.data() as ParkingSchema;
                parkingSpots.push({
                    ...data,
                    id: documentSnapshot.id,
                });
            });

            setParkingsMarkers(parkingSpots);
        });

    return unsubscribe;
};
