import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "@shared/api";

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
];

type UnauthorizedStackParamList = {
	EmailAuthScreen: undefined;
	PhoneAuthScreen: undefined;
}

export type UnauthorizedStackRoutesProps = NativeStackScreenProps<UnauthorizedStackParamList, "EmailAuthScreen">;



