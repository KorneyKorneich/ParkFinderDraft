import { Text, View } from "react-native";
import React from "react";
import { DrawerContentComponentProps, DrawerItem } from "@react-navigation/drawer";
import { useUserStore } from "@entities/user";
import { styles } from "./CustomDrawerContent.styles";
import { CustomImage } from "@shared/ui";

const userIcon = require("@shared/ui/assets/images/user.png");

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const signOut = useUserStore((state) => state.signOut);

    return (
        <View {...props} style={styles.box}>
            <View style={styles.boxInside}>
                <View style={styles.logo}>
                    <Text style={styles.firstPartLogo}>Parking</Text>
                    <Text style={styles.secondPartLogo}>Finder</Text>
                </View>
                <View style={styles.userArea}>
                    <CustomImage path={userIcon} style={styles.userIcon} />
                    <Text style={styles.userName}>John Doe</Text>
                </View>
                <DrawerItem label="Log out" style={styles.drawerItem} onPress={signOut} />
            </View>
        </View>
    );
};

export default CustomDrawerContent;
