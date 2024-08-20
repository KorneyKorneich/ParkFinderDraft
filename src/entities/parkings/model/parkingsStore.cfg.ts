import { ParkingSchema } from "@shared/api";

export interface IUseParkingsStore {
    parkingsMarkers: ParkingSchema[];
    setParkingsMarkers: (parkingsMarkers: ParkingSchema[]) => void;
}