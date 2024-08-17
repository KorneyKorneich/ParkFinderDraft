import { Nullable, location } from "../common/common";

export type setLocationType = (value: Nullable<location>) => void;

export interface IUseSetlocationStore {
    location: Nullable<location>;
    setLocation: setLocationType;
}
