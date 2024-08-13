import { Nullable } from "../common/common";

export interface location {
    lat: number;
    lon: number;
}

export type setLocationType = (value: Nullable<location>) => void;

export interface IUseSetlocationStore {
    location: Nullable<location>;
    setLocation: setLocationType;
}
