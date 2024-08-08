import { Nullable } from "../common/common";

export interface currentLocation {
    lat: number;
    lon: number;
} 

export type setCurrentLocation = (value: Nullable<currentLocation>) => void;

export interface ICurretLocationStore {
    currentLocation: Nullable<currentLocation>;
    setCurrentLocation: setCurrentLocation
};