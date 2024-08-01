import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerRoutes } from "../routes/drawerRoutes";
import CustomDrawerContent from "../components/CustomDrawerContent/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			{drawerRoutes.map((route, index) => (
				<Drawer.Screen
					key={index}
					name={route.name}
					component={route.component}
					options={route.options}
				/> 
			))}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;

