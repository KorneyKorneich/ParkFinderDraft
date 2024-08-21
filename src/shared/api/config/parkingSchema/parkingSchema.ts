import { LocationSchema } from "../common/common";

export interface ParkingInf {
    parkingName: string;
    paid: boolean;
    handicap: boolean;
    charging: boolean;
    workingHours: string;
    rating: number;
    comment: string;
}

export interface ParkingSchema {
    location: LocationSchema;
    id: string;
    parkingInf: ParkingInf;
    approvedStatus: boolean;
}
export interface ParkingSchemaAddition {
    location: LocationSchema;
    parkingInf: ParkingInf;
    approvedStatus: boolean;
}
