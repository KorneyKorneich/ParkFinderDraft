export type { UserSchema } from "./config/userSchema/userSchema.ts";
export type { Nullable } from "./config/common/common.ts";
export type {
    AuthorizedStackParamList,
    UnauthorizedStackRoutesProps,
    UnauthorizedStackParamList,
} from "./config/common/navigationTypes/routesType.ts";
export type {
    setCurrentLocation,
    ICurretLocationStore,
    currentLocation,
} from "../api/config/storeInterfaces/currentLocation.ts";
export type { setLocationType, IUseSetlocationStore, location } from "../api/config/storeInterfaces/location.ts";
export { InitialScreens, ROUTES } from "./config/common/navigationTypes/routesType.ts";
export { getFirebaseAuthErrorMessage } from "./helpers/getAuthError.ts";

export { FIRESTORE_DB, FIREBASE_APP, FIREBASE_AUTH, FIREBASE } from "./storage/storage.ts";
