import MapScreen from '../../../screens/MapScreen/ui/MapScreen';
import AddParkScreen from '../../../screens/AddParkScreen/ui/AddParkScreen';

export const bottomTabsRoutes = [
    {
        name: 'MapScreen',
        component: MapScreen,
        options: {
            title: 'MapScreen',
        },
    },
    {
        name: 'AddParkScreen',
        component: AddParkScreen,
        options: {
            title: 'AddParkScreen',
        },
    },
];