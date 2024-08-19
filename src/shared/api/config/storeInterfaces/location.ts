import { Nullable } from "../common/common";
import { RefObject } from "react";
import { YaMap } from "react-native-yamap";

export interface location {
    lat: number;
    lon: number;
}

export type setLocationType = (value: Nullable<location>) => void;

export interface IUseSetlocationStore {
    location: Nullable<location>;
    setLocation: setLocationType;
    mapRef: Nullable<RefObject<YaMap>>;
    setMapRef: (ref: RefObject<YaMap>) => void;
}
