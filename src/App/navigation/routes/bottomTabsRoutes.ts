import { AddParkingScreen } from "@screens/AddParkScreen";
import { MapScreen } from "@screens/MapScreen";
import { ROUTES } from "@shared/api";

export const bottomTabsRoutes = [
	{
		name: ROUTES.MapScreen,
		component: MapScreen,
		options: {
			title: ROUTES.MapScreen,
		},
	},
	{
		name: ROUTES.AddParkScreen,
		component: AddParkingScreen,
		options: {
			title: ROUTES.AddParkScreen,
		},
	},
];

