import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";

const Navigation = () => (
	<NavigationContainer>
		<StackNavigator />
	</NavigationContainer>
);

export default Navigation;
