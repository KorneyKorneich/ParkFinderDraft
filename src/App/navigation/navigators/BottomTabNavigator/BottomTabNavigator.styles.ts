import { SIZES } from "@shared/ui";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabBarStyle: {
        ...Platform.select({
            ios: {
                height: SIZES.HEIGHT * 0.1,
            },
            android: {
                height: 50,
            },
        }),
    },
});
