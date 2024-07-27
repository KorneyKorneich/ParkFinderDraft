import { AddParkScreen, MapScreen } from "@screens/ui";

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
