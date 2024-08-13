import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

export type RootStackParamList = {
    MapScreen: undefined;
    AddParkScreen: undefined;
    DrawerNavigator: undefined;
    ParkListScreen: undefined;
};

type UnauthorizedStackParamList = {
    EmailAuthScreen: undefined;
    PhoneAuthScreen: undefined;
    OTPVerifyScreen: { confirmation?: FirebaseAuthTypes.ConfirmationResult };
};

export type UnauthorizedStackRoutesProps = NativeStackScreenProps<UnauthorizedStackParamList, "OTPVerifyScreen">;
