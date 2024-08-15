import React from "react";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { EmailAuthScreen } from "@screens/EmailAuthScreen";
import { PhoneAuthScreen } from "@screens/PhoneAuthScreen";
import { OTPVerification } from "@screens/OTPVerification";
import { StackNavigationOptions } from "@react-navigation/stack";
import { AuthorizedStackParamList, UnauthorizedStackParamList, ROUTES } from "@shared/api";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

type RouteConfig<ParamList extends Record<string, object | undefined>, RouteName extends keyof ParamList> = {
    name: RouteName;
    component: React.ComponentType<any>;
    options?: StackNavigationOptions;
};

export const unauthorizedStackRoutes: RouteConfig<UnauthorizedStackParamList, keyof UnauthorizedStackParamList>[] = [
    {
        name: ROUTES.EmailAuthScreen as keyof UnauthorizedStackParamList,
        component: EmailAuthScreen,
        options: {
            title: ROUTES.EmailAuthScreen,
        },
    },
    {
        name: ROUTES.PhoneAuthScreen as keyof UnauthorizedStackParamList,
        component: PhoneAuthScreen,
        options: {
            title: ROUTES.PhoneAuthScreen,
        },
    },
    {
        name: ROUTES.OTPVerifyScreen as keyof UnauthorizedStackParamList,
        component: OTPVerification,
        options: {
            title: ROUTES.OTPVerifyScreen,
        },
    },
];
