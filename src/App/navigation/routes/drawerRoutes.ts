import BottomTabNavigator from "../navigators/BottomTabNavigator";
import {ParkListScreen} from "@screens/ui";

export const drawerRoutes = [
	{
		name: "BottomTabNavigator",
		component: BottomTabNavigator,
		options: {
			title: "BottomTabNavigator",
		},
	},
	{
		name: "ParkListScreen",
		component: ParkListScreen,
		options: {
			title: "ParkListScreen",
		},
	},
];
