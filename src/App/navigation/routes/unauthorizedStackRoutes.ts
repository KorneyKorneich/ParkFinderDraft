import React from "react";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { OTPVerification } from "@screens/OTPVerification";
import { StackNavigationOptions } from "@react-navigation/stack";
import { AuthorizedStackParamList, UnauthorizedStackParamList, ROUTES } from "@shared/api";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

type RouteConfig<ParamList extends Record<string, object | undefined>, RouteName extends keyof ParamList> = {
	name: RouteName;
	component: React.ComponentType<NativeStackScreenProps<ParamList, RouteName>>;
	options?: StackNavigationOptions;
};

export const authorizedStackRoutes: RouteConfig<AuthorizedStackParamList, keyof AuthorizedStackParamList>[] = [
	{
		name: ROUTES.DrawerNavigator,
		component: DrawerNavigator,
		options: {
			title: ROUTES.DrawerNavigator,
		},
	},
];

export const unauthorizedStackRoutes: RouteConfig<UnauthorizedStackParamList, keyof UnauthorizedStackParamList>[] = [
	{
		name: ROUTES.EmailAuthScreen,
		component: EmailAuthScreen,
		options: {
			title: ROUTES.EmailAuthScreen,
		},
	},
	{
		name: ROUTES.PhoneAuthScreen,
		component: PhoneAuthScreen,
		options: {
			title: ROUTES.PhoneAuthScreen,
		},
	},
	{
		name: ROUTES.OTPVerifyScreen,
		component: OTPVerification,
		options: {
			title: ROUTES.OTPVerifyScreen,
		},
	},
];
