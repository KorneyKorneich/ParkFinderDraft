import { View, Text } from "react-native";
import React from "react";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useUserStore } from "@entities/user";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const signOut = useUserStore((state) => state.signOut);

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Menu</Text>
                <DrawerItem label="Log Out" onPress={signOut} />
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
