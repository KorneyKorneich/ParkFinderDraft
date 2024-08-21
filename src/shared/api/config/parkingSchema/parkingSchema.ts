import { LocationSchema, Nullable } from "../common/common";

export interface ParkingInf {
    parkingName: string;
    paid: boolean;
    handicap: boolean;
    charging: boolean;
    workingHours: Nullable<string>;
    rating: Nullable<number>;
    comment: string;
}

export interface ParkingSchema {
    location: LocationSchema;
    id: string;
    parkingInf: ParkingInf;
    approvedStatus: boolean;
}
export interface ParkingSchemaAddition {
    location: location;
    parkingInf: ParkingInf;
    approvedStatus: boolean;
}
