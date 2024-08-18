import BottomTabNavigator from "../navigators/BottomTabNavigator/BottomTabNavigator";
import { ParkListScreen } from "@screens/ParkListScreen";
import { ROUTES } from "@shared/api";

export const drawerRoutes = [
    {
        name: ROUTES.BottomTabNavigator,
        component: BottomTabNavigator,
        options: {
            title: ROUTES.BottomTabNavigator,
        },
    },
    {
        name: ROUTES.ParkListScreen,
        component: ParkListScreen,
        options: {
            title: ROUTES.ParkListScreen,
        },
    },
];
