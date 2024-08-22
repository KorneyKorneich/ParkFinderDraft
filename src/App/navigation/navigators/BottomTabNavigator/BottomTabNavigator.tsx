import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { bottomTabsRoutes } from "../../routes/bottomTabsRoutes";
import { ROUTES } from "@shared/api";
import { styles } from "./BottomTabNavigator.styles";
import { CustomImage } from "@shared/ui";

const mapIcon = require("@shared/ui/assets/images/map.png");
const addMarkerIcon = require("@shared/ui/assets/images/add-location.png");

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName={ROUTES.MapScreen}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: () => {
                    let icon;

                    if (route.name === ROUTES.MapScreen) {
                        icon = mapIcon;
                    } else if (route.name === ROUTES.AddParkScreen) {
                        icon = addMarkerIcon;
                    }

                    return <CustomImage path={icon} />;
                },
            })}>
            {bottomTabsRoutes.map((route, index) => (
                <BottomTabs.Screen key={index} name={route.name} component={route.component} options={route.options} />
            ))}
        </BottomTabs.Navigator>
    );
};

export default BottomTabNavigator;
