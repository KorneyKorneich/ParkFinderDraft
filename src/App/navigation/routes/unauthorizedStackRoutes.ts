import React from "react";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { OTPVerification } from "@screens/OTPVerification";
import { StackNavigationOptions } from "@react-navigation/stack";
import { AuthorizedStackParamList, UnauthorizedStackParamList } from "@shared/api";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

type RouteConfig<ParamList extends Record<string, object | undefined>, RouteName extends keyof ParamList> = {
	name: RouteName;
	component: React.ComponentType<NativeStackScreenProps<ParamList, RouteName>>;
	options?: StackNavigationOptions;
};

export const authorizedStackRoutes: RouteConfig<AuthorizedStackParamList, keyof AuthorizedStackParamList>[] = [
	{
		name: "DrawerNavigator",
		component: DrawerNavigator,
		options: {
			title: "DrawerNavigator",
		},
	},
];

export const unauthorizedStackRoutes: RouteConfig<UnauthorizedStackParamList, keyof UnauthorizedStackParamList>[] = [
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
