import AuthScreen from '../../../screens/AuthScreen/ui/AuthScreen';
import BottomTabNavigator from '../navigators/BottomTabNavigator';
import DrawerNavigator from '../navigators/DrawerNavigator';

export const stackRoutes = [
    {
        name: 'DrawerNavigator',
        component: DrawerNavigator,
        options: {
            title: 'DrawerNavigator',
        },
    },
    {
        name: 'AuthScreen',
        component: AuthScreen,
        options: {
            title: 'AuthScreen',
        },
    },
];