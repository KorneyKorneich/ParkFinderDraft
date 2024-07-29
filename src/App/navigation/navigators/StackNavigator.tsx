import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { authorizedStackRoutes } from "../routes/authorizedStackRoutes.ts";
import { unauthorizedStackRoutes } from "../routes/unauthorizedStackRoutes.ts";
import { useUserStore } from "@entities/user";

const Stack = createStackNavigator();

const StackNavigator = () => {
	const isLogged = useUserStore(state => state.isLoggedIn);
	const stack = isLogged ? authorizedStackRoutes : unauthorizedStackRoutes;
	return (

		<Stack.Navigator initialRouteName="EmailAuthScreen" screenOptions={{ headerShown: false }}>
			{stack.map((route, index) => (
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
