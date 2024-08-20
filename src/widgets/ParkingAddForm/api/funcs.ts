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
    const docRef = await firestore().collection("parkingSpots").add(props);

    return docRef.id;
}
