import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackRoutes } from '../routes/stackRoutes';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
            {stackRoutes.map((route, index) => (
                <Stack.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                />
            ))}
        </Stack.Navigator>
    );
};

export default StackNavigator;