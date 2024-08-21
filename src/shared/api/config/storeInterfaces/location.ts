import { Nullable, LocationSchema } from "../common/common";

export type setLocationType = (value: Nullable<LocationSchema>) => void;

export interface IUseSetlocationStore {
    location: Nullable<LocationSchema>;
    currentLocation: Nullable<LocationSchema>;
    setLocation: setLocationType;
    setCurrentLocation: setLocationType;
}
