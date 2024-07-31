import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { OTPVerification } from "@screens/OTPVerification/ui/OTPVerification.tsx";

export const unauthorizedStackRoutes = [
	{
		name: "EmailAuthScreen",
		component: EmailAuthScreen,
		options: {
			title: "EmailAuthScreen",
		},
	},
	{
		name: "PhoneAuthScreen",
		component: PhoneAuthScreen,
		options: {
			title: "PhoneAuthScreen",
		},
	},
	{
		name: "OTPVerifyScreen",
		component: OTPVerification,
		options: {
			title: "OTPVerifyScreen",
		},
	},

];

type UnauthorizedStackParamList = {
	EmailAuthScreen: undefined;
	PhoneAuthScreen: undefined;
	OTPVerifyScreen: { confirmation?: FirebaseAuthTypes.ConfirmationResult };
}

export type UnauthorizedStackRoutesProps = NativeStackScreenProps<UnauthorizedStackParamList, "OTPVerifyScreen">;


