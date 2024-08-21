import { Nullable, ParkingSchema } from "@shared/api";

export interface IUseParkingsStore {
    parkingsMarkers: Nullable<ParkingSchema[]>;
    setParkingsMarkers: (parkingsMarkers: ParkingSchema[]) => void;
}
