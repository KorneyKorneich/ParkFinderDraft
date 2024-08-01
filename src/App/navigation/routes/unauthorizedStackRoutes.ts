import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { OTPVerification } from "@screens/OTPVerification";

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



