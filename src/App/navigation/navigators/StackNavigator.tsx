import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { authorizedStackRoutes } from "../routes/authorizedStackRoutes.ts";
import { unauthorizedStackRoutes } from "../routes/unauthorizedStackRoutes.ts";
import auth from "@react-native-firebase/auth";

const Stack = createStackNavigator();

const StackNavigator = () => {
	const [user, setUser] = useState();

	function AuthStateChanged(user) {
		setUser(user);
	}

	const stack = user ? authorizedStackRoutes : unauthorizedStackRoutes;

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(AuthStateChanged);
		return subscriber;
	}, []);

	return (
		<Stack.Navigator initialRouteName="EmailAuthScreen" screenOptions={{ headerShown: false }}>
			{stack.map((route, index) => (
				<Stack.Screen key={index} name={route.name} component={route.component} options={route.options} />
			))}
		</Stack.Navigator>
	);
};

export default StackNavigator;
