export type { UserSchema } from "./config/userSchema/userSchema.ts";
export type { Nullable, location } from "./config/common/common.ts";
export type { setLocationType, IUseSetlocationStore } from "../api/config/storeInterfaces/location.ts";
export type { ParkingInf, ParkingSchema } from "../api/config/parkingSchema/parkingSchema.ts";
export type {
    AuthorizedStackParamList,
    UnauthorizedStackRoutesProps,
    UnauthorizedStackParamList,
    AuthorizedStackRoutesProps,
} from "./config/common/navigationTypes/routesType.ts";
export { InitialScreens, ROUTES } from "./config/common/navigationTypes/routesType.ts";
export { getFirebaseAuthErrorMessage } from "./helpers/getAuthError.ts";

export { FIRESTORE_DB, FIREBASE_APP, FIREBASE } from "./storage/storage.ts";
