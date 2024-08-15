export type { UserSchema } from "./config/userSchema/userSchema.ts";
export type { Nullable, location } from "./config/common/common.ts";
export type { RootStackParamList, UnauthorizedStackRoutesProps } from "./config/common/navigationTypes/routesType.ts";
export type { setLocationType, IUseSetlocationStore } from "../api/config/storeInterfaces/location.ts";
export type { ParkingInf, ParkingSchema } from "../api/config/parkingSchema/parkingSchema.ts";

export { FIRESTORE_DB, FIREBASE_APP, FIREBASE_AUTH, FIREBASE } from "./storage/storage.ts";