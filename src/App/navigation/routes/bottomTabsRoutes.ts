import { AddParkScreen } from "@screens/AddParkScreen";
import { MapScreen } from "@screens/MapScreen";

export const bottomTabsRoutes = [
	{
		name: "MapScreen",
		component: MapScreen,
		options: {
			title: "MapScreen",
		},
	},
	{
		name: "AddParkScreen",
		component: AddParkScreen,
		options: {
			title: "AddParkScreen",
		},
	},
];
