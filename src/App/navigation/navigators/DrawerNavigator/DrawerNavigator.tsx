import React from "react";
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { drawerRoutes } from "../../routes/drawerRoutes";
import CustomDrawerContent from "../../components/CustomDrawerContent/CustomDrawerContent";
import { CustomHeader } from "../../components/CustomHeader/CustomHeader";
import { styles } from "./DrawerNavigator.styles";
import { AuthorizedStackParamList } from "@shared/api";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: styles.drawerStyle,
                headerShown: true,
            }}>
            {drawerRoutes.map((route, index) => (
                <Drawer.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        header: (props) => (
                            <CustomHeader
                                {...props}
                                navigation={props.navigation as DrawerNavigationProp<AuthorizedStackParamList>}
                            />
                        ),
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
