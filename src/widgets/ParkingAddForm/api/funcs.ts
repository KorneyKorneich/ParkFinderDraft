import { Point } from "react-native-yamap";
import { Nullable } from "@shared/api";
import firestore from "@react-native-firebase/firestore";
import { ParkingSchemaAddition } from "@shared/api/config/parkingSchema/parkingSchema.ts";

export async function sendParkingSpotInfo(props: ParkingSchemaAddition) {
    const docRef = await firestore().collection("parkingSpots").add(props);

    return docRef.id;
}
