import { AddParkingScreen } from "@screens/AddParkScreen";
import { MapScreen } from "@screens/MapScreen";
import { ROUTES, ROUTES_NAMES } from "@shared/api";

export const bottomTabsRoutes = [
    {
        name: ROUTES.MapScreen,
        component: MapScreen,
        options: {
            title: ROUTES_NAMES.MapScreen,
        },
    },
    {
        name: ROUTES.AddParkingScreen,
        component: AddParkingScreen,
        options: {
            title: ROUTES_NAMES.AddParkingScreen,
        },
    },
];
