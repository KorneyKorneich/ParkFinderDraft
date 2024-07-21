import ParkListScreen from '../../../screens/ParkListScreen/ui/ParkListScreen';
import BottomTabNavigator from '../navigators/BottomTabNavigator';

export const drawerRoutes = [
    {
        name: 'BottomTabNavigator',
        component: BottomTabNavigator,
        options: {
            title: 'BottomTabNavigator',
        },
    },
    {
        name: 'ParkListScreen',
        component: ParkListScreen,
        options: {
            title: 'ParkListScreen',
        },
    },
];