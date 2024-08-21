import React from "react";
import { View } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CustomButton } from "@shared/ui";
import { styles } from "./CustomHeader.styles";
import { AuthorizedStackParamList } from "@shared/api";

const burgerBar = require("@shared/ui/assets/images/burger-bar.png");

interface CustomHeaderProps {
    navigation: DrawerNavigationProp<AuthorizedStackParamList>;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
    const handleBtnPress = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.headerArea}>
            <CustomButton onPress={handleBtnPress} style={styles.burgerBtn} imgPath={burgerBar} />
        </View>
    );
};
