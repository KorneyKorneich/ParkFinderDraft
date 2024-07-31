import { AddParkScreen } from "@screens/AddParkScreen/index";
import { MapScreen } from "@screens/MapScreen/index";

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
