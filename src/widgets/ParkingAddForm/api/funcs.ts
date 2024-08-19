import { Point } from "react-native-yamap";
import { Nullable } from "@shared/api";
import firestore from "@react-native-firebase/firestore";

export interface parkingSpotSchema {
    id: number;
    location: Point;
    parkingInf: {
        parkingName: string;
        paid: boolean;
        handicap: boolean;
        charging: boolean;
        workingHours: Nullable<string>;
        rating: Nullable<number>;
        comment: Nullable<string>;
    };
    approvedStatus: boolean;
}

export async function sendParkingSpotInfo(props: parkingSpotSchema) {
    try {
        console.log(props);

        // Ensure Firestore is initialized and ready to use
        const docRef = await firestore().collection("parkingSpots").add(props);

        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
