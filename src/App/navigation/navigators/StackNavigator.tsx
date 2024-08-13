import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { authorizedStackRoutes } from "../routes/authorizedStackRoutes.ts";
import { unauthorizedStackRoutes } from "../routes/unauthorizedStackRoutes.ts";
import { InitialScreens, Nullable } from "@shared/api";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const [user, setUser] = useState<Nullable<FirebaseAuthTypes.User>>(null);

    const AuthStateChanged = (user: Nullable<FirebaseAuthTypes.User>) => {
        setUser(user);
    };

    const routes = useMemo(() => {
        return user ? authorizedStackRoutes : unauthorizedStackRoutes;
    }, [user]);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(AuthStateChanged);
        return () => unsubscribe();
    }, []);

    return (
        <Stack.Navigator
            initialRouteName={InitialScreens.UnauthorizedInitialScreen}
            screenOptions={{ headerShown: false }}>
            {routes.map((route, index) => (
                <Stack.Screen key={index} name={route.name} component={route.component} options={route.options} />
            ))}
        </Stack.Navigator>
    );
};

export default StackNavigator;
