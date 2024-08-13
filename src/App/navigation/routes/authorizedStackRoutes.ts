import DrawerNavigator from "../navigators/DrawerNavigator";
import { ROUTES } from "@shared/api";

export const authorizedStackRoutes = [
	{
		name: ROUTES.DrawerNavigator,
		component: DrawerNavigator,
		options: {
			title: ROUTES.DrawerNavigator,
		},
	},
];
