import DrawerNavigator from "../navigators/DrawerNavigator";
import {AuthScreen} from "@screens";

export const stackRoutes = [
	{
		name: "DrawerNavigator",
		component: DrawerNavigator,
		options: {
			title: "DrawerNavigator",
		},
	},
	{
		name: "AuthScreen",
		component: AuthScreen,
		options: {
			title: "AuthScreen",
		},
	},
];
